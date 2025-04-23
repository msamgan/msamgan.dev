<?php

use Illuminate\Support\Str;

const CACHE_DURATION = 60;
const PAGE_SIZE = 12;
const PAGE_SIZE_LARGE = 40;
const CACHE_TTL = 60 * 60 * 24; // 24 hours

if (! function_exists('autoloadRoutes')) {
    function autoloadRoutes(): void
    {
        $moduleRoutesDir = 'routes/modules/';
        foreach (File::allFiles(base_path($moduleRoutesDir)) as $file) {
            require base_path($moduleRoutesDir) . $file->getFilename();
        }
    }
}

if (! function_exists('allCases')) {
    /**
     * Get all cases of a string.
     */
    function allCases(string $string): array
    {
        $cases = [
            'camel' => Str::camel($string), // camelCase
            'plural_camel' => Str::camel(Str::plural($string)), // camelCases
            'snake' => Str::snake($string), // snake_case
            'plural_snake' => Str::snake(Str::plural($string)), // snake_cases
            'kebab' => Str::kebab($string), // kebab-case
            'plural_kebab' => Str::kebab(Str::plural($string)), // kebab-cases
            'studly' => Str::studly($string), // StudlyCase
            'plural_studly' => Str::studly(Str::plural($string)), // StudlyCases
            'title' => Str::title($string), // Title Case
            'plural' => Str::plural($string), // plural
            'singular' => Str::singular($string), // singular
            'ucfirst' => ucfirst($string), // Title case
            'lcfirst' => lcfirst($string), // title Case
        ];

        if (Str::endsWith($string, '_id')) {
            $stringWithoutId = Str::before($string, '_id');
            $cases['camel_without_id'] = Str::camel($stringWithoutId); // camelCase
            $cases['plural_camel_without_id'] = Str::camel(Str::plural($stringWithoutId)); // camelCases
            $cases['snake_without_id'] = Str::snake($stringWithoutId); // snake_case
            $cases['kebab_without_id'] = Str::kebab($stringWithoutId); // kebab-case
            $cases['studly_without_id'] = Str::studly($stringWithoutId); // StudlyCase
            $cases['plural_studly_without_id'] = Str::studly(Str::plural($stringWithoutId)); // StudlyCases
            $cases['title_without_id'] = Str::title($stringWithoutId); // Title Case
            $cases['ucfirst_without_id'] = ucfirst($stringWithoutId); // Title case
            $cases['lcfirst_without_id'] = lcfirst($stringWithoutId); // title Case
        }

        return $cases;
    }
}

if (! function_exists('removeNbsp')) {
    function removeNbsp($string): array|string
    {
        return str_replace('&nbsp;', ' ', $string);
    }
}

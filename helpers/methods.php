<?php

use Illuminate\Support\Str;

const CACHE_DURATION = 60;

if (! function_exists('allCases')) {
    /**
     * Get all cases of a string.
     */
    function allCases(string $string): array
    {
        return [
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
    }
}

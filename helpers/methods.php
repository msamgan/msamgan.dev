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
            'camel' => Str::camel($string),
            'snake' => Str::snake($string),
            'plural_snake' => Str::snake(Str::plural($string)),
            'kebab' => Str::kebab($string),
            'studly' => Str::studly($string),
            'plural_studly' => Str::studly(Str::plural($string)),
            'title' => Str::title($string),
            'plural' => Str::plural($string),
            'singular' => Str::singular($string),
            'ucfirst' => ucfirst($string),
            'lcfirst' => lcfirst($string),
        ];
    }
}

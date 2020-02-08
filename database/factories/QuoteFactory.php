<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Quote;
use Faker\Generator as Faker;

$factory->define(Quote::class, function (Faker $faker) {
    return [
        'quote' => $faker->text,
        'type' => $faker->randomElement(['binary', 'multiple'])
    ];
});

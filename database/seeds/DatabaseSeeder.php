<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {


        $content = file_get_contents(database_path('quotes.json'));
        $content = json_decode($content);
        /** @var Faker\Generator $faker */
        $faker = Faker\Factory::create();

        foreach ($content as $q) {
            $quote = \App\Quote::query()->create([
                'quote' => $q->quoteText,
                'type' => $faker->randomElement(['binary', 'multiple'])
            ]);
            if ($quote->type == 'binary') {
                $correct = $faker->boolean;
                $quote->answers()->insert(factory(App\Answer::class)->make([
                    'answer' => ($correct ? $q->quoteAuthor : $faker->firstName) . '?',
                    'quote_id' => $quote->id,
                    'correct' => $correct,
                ])->toArray());
            } else {
                $quote->answers()->insert(factory(App\Answer::class, 2)->make([
                    'quote_id' => $quote->id,
                    'correct' => 0,
                ])->toArray());
                $quote->answers()->insert(factory(App\Answer::class)->make([
                    'quote_id' => $quote->id,
                    'answer' => $q->quoteAuthor,
                    'correct' => 1,
                ])->toArray());
            }
        }
    }
}

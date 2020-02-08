<?php

namespace App\Util\Quiz;

use Illuminate\Database\Eloquent\Model;

class Quiz
{
    /**
     * @var Model;
     */
    private $model;
    private $correctMessage = 'Correct! The right answer is %s';
    private $incorrectMessage = 'Sorry, you are wrong! The right answer is %s';

    public function __construct($quote)
    {
        $this->model = $quote;
    }

    public function checkAnswer($type, $answer)
    {
        if (method_exists($this, $type)) {
            return $this->{$type}($answer);
        }
    }

    private function multiple($answer)
    {

        $correct = @$this->model->answers()->find($answer)->correct;
        $message = $correct ? sprintf(
            $this->correctMessage,
            $this->model->answers()->find($answer)->answer
        ) :
            sprintf(
                $this->incorrectMessage,
                $this->model->answers()->where('correct', 1)->first()->answer
            );

        return [$message, $correct];
    }

    private function binary($answer)
    {
        $correct = @$this->model->answers()->first()->correct == $answer;
        $message = $correct ? sprintf(
            $this->correctMessage,
            $this->correctAnswer($answer)
        ) :
            sprintf(
                $this->incorrectMessage,
                $this->correctAnswer(!$answer)
            );

        return [$message, $correct];
    }

    private function correctAnswer($correct)
    {
        return $correct ? 'YES' : 'NO';
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\QuoteResource;
use App\Quote;
use App\Util\Quiz\Quiz;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection as AnonymousResourceCollectionAlias;

class QuoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return AnonymousResourceCollectionAlias
     */
    public function index(Request $request)
    {
        return QuoteResource::collection(Quote::query()
            ->inRandomOrder()
            ->where('type', $request->get('type', 'binary'))
            ->limit(10)->get());
    }
    /**
     * Display the specified resource.
     *
     * @param Quote $quote
     * @return QuoteResource
     */
    public function show(Quote $quote)
    {
        return QuoteResource::make($quote);
    }

    /**
     * @param Quote $quote
     * @param Request $request
     * @return array
     */
    public function checkAnswer(Quote $quote, Request $request)
    {
        list($message, $correct) = ((new Quiz($quote))->checkAnswer($quote->type,$request->get('answer')));

        return compact('correct', 'message');
    }
}

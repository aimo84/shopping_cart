<?php

namespace Tests\Unit;

use Tests\TestCase;

class AddressSuggestionTest extends TestCase
{
    public function testGetSuggestion()
    {
        $lrequest = new \Illuminate\Http\Request();
        foreach (["district", "city", "province"] as $suggest_type) {
            $content = App('App\Http\Controllers\AddressSuggestionController')->getSuggestion($suggest_type, $lrequest);

            $this->assertEquals(200, $content->status());
            $content = $content->content();
        }
    }

    public function testGetUniversityList()
    {
        $lrequest = new \Illuminate\Http\Request();
        $content  = App('App\Http\Controllers\AddressSuggestionController')->getUniversityList($lrequest);
        $this->assertEquals(200, $content->status());
        $content = $content->content();
    }

}

import React from 'react';
import { Slider } from '../../Elements/Slide/slider';
import { NewsList } from '../../Elements/News/NewsList';
import { NewsLetter } from '../../Elements/News/NewsLetter';
import { NewsBake } from '../../Elements/News/NewestBake';



export const Frontpage = () => {

    return (
        <>

            <Slider />

            {/* <User /> */}
            <h2>Vi skaber lækkert! brød</h2>
            <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer</p>


            <NewsList />
            <NewsLetter />
            <h2>Nyeste bagværk</h2>
            <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer</p>

            <NewsBake />
        </>
    )
}

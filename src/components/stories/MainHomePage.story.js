import React from "react";
import { storiesOf } from "@storybook/react";

import MainHomePage from "../MainHomePage";

let popularMovies = [{
        "vote_count": 3504,
        "id": 299536,
        "video": false,
        "vote_average": 8.5,
        "title": "Avengers: Infinity War",
        "popularity": 703.53968,
        "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "original_language": "en",
        "original_title": "Avengers: Infinity War",
        "genre_ids": [
            12,
            878,
            14,
            28
        ],
        "backdrop_path": "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
        "adult": false,
        "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        "release_date": "2018-04-25"
    },
    {
        "vote_count": 1797,
        "id": 337167,
        "video": false,
        "vote_average": 6,
        "title": "Fifty Shades Freed",
        "popularity": 555.219746,
        "poster_path": "/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg",
        "original_language": "en",
        "original_title": "Fifty Shades Freed",
        "genre_ids": [
            18,
            10749
        ],
        "backdrop_path": "/9ywA15OAiwjSTvg3cBs9B7kOCBF.jpg",
        "adult": false,
        "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
        "release_date": "2018-02-07"
    },
    {
        "vote_count": 5227,
        "id": 284054,
        "video": false,
        "vote_average": 7.3,
        "title": "Black Panther",
        "popularity": 383.771494,
        "poster_path": "/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
        "original_language": "en",
        "original_title": "Black Panther",
        "genre_ids": [
            28,
            12,
            14,
            878
        ],
        "backdrop_path": "/AlFqBwJnokrp9zWTXOUv7uhkaeq.jpg",
        "adult": false,
        "overview": "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan 'special forces') and an American secret agent, to prevent Wakanda from being dragged into a world war.",
        "release_date": "2018-02-13"
    },
    {
        "vote_count": 3,
        "id": 510819,
        "video": false,
        "vote_average": 2.7,
        "title": "Dirty Dead Con Men",
        "popularity": 196.966151,
        "poster_path": "/r70GGoZ5PqqokDDRnVfTN7PPDtJ.jpg",
        "original_language": "en",
        "original_title": "Dirty Dead Con Men",
        "genre_ids": [],
        "backdrop_path": "/75RJi3yVZnZtVj4Kn1bYGzkhiEx.jpg",
        "adult": false,
        "overview": "A cool and dangerous neo-noir crime film that revolves around the disturbed lives of two unlikely partners: Mickey Rady, a rogue undercover cop and Kook Packard, a smooth and charismatic con man. Together they rip off those operating outside of the law...for their own personal gain. But things go awry when one heist suck them deep into a city-wide conspiracy...",
        "release_date": "2018-01-02"
    },
    {
        "vote_count": 6233,
        "id": 284053,
        "video": false,
        "vote_average": 7.4,
        "title": "Thor: Ragnarok",
        "popularity": 188.400311,
        "poster_path": "/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
        "original_language": "en",
        "original_title": "Thor: Ragnarok",
        "genre_ids": [
            28,
            12,
            14,
            878
        ],
        "backdrop_path": "/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg",
        "adult": false,
        "overview": "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
        "release_date": "2017-10-25"
    },
    {
        "vote_count": 552,
        "id": 427641,
        "video": false,
        "vote_average": 5.9,
        "title": "Rampage",
        "popularity": 169.383611,
        "poster_path": "/30oXQKwibh0uANGMs0Sytw3uN22.jpg",
        "original_language": "en",
        "original_title": "Rampage",
        "genre_ids": [
            28,
            12,
            878
        ],
        "backdrop_path": "/wrqUiMXttHE4UBFMhLHlN601MZh.jpg",
        "adult": false,
        "overview": "Primatologist Davis Okoye shares an unshakable bond with George, the extraordinarily intelligent, silverback gorilla who has been in his care since birth.  But a rogue genetic experiment gone awry mutates this gentle ape into a raging creature of enormous size.  To make matters worse, it’s soon discovered there are other similarly altered animals.  As these newly created alpha predators tear across North America, destroying everything in their path, Okoye teams with a discredited genetic engineer to secure an antidote, fighting his way through an ever-changing battlefield, not only to halt a global catastrophe but to save the fearsome creature that was once his friend.",
        "release_date": "2018-04-12"
    },
]

storiesOf("MainHomePage", module).add("Happy Path", () => (
  <MainHomePage popularMovies={popularMovies} />
));

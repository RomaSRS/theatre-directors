const developers = [
  {
    id: 'D0',
    name: 'Ekaterina Rudenko',
    github: 'https://github.com/Rekaterina',
    telegram: 'https://t.me/rekaterina',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/rudenko.jpg',
    contribution: '➤Created the basic structure of the project.\n ➤Implemented the transition between pages using react router.\n ➤Implemented a website translation into three languages (the whole team wrote the text).',
  },
  {
    id: 'D1',
    name: 'Vladimir Serko',
    github: 'https://github.com/Vir45',
    telegram: 'https://t.me/Vova_Serko',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/serko.jpg',
    contribution: '➤Created the basic structure of the project.\n ➤Implemented the transition between pages using react router.\n ➤Implemented a website translation into three languages (the whole team wrote the text).',
  },
  {
    id: 'D2',
    name: 'Katsiaryna Yakubouskaya',
    github: 'https://github.com/Katsiaryna31',
    telegram: 'https://t.me/KatsiarynaYa',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/yakubovskaya.jpg',
    contribution: '➤Created the basic structure of the project.\n ➤Implemented the transition between pages using react router.\n ➤Implemented a website translation into three languages (the whole team wrote the text).',
  },
  {
    id: 'D3',
    name: 'Anton Yasko',
    github: 'https://github.com/antonyasko',
    telegram: 'https://t.me/anton_yasko',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/yasko.jpg',
    contribution: '➤Created the basic structure of the project.\n ➤Implemented the transition between pages using react router.\n ➤Implemented a website translation into three languages (the whole team wrote the text).',
  },
  {
    id: 'D4',
    name: 'Kirill Leogky',
    github: 'https://github.com/kirillleogky',
    telegram: 'https://t.me/KirillLeogky',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/leogky.jpg',
    contribution: '➤Created the basic structure of the project.\n ➤Implemented the transition between pages using react router.\n ➤Implemented a website translation into three languages (the whole team wrote the text).',
  },
  {
    id: 'D5',
    name: 'Roman Goncharov',
    github: 'https://github.com/RomaSRS',
    telegram: 'https://t.me/RomanSRS',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/goncharov.jpg',
    contribution: '➤Created the basic structure of the project.\n ➤Implemented the transition between pages using react router.\n ➤Implemented a website translation into three languages (the whole team wrote the text).',
  },
];

const directors = [
  {
    id: '0',
    url: 'mirovich',
    name: 'Evstigney Mirovich',
    born: '10 August 1878',
    deceased: '16 February 1952',
    description: 'Belarusian playwright and theater director',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Mirovich_03.jpg',
    placeOfBirth: 'St. Petersburg',
    placeOfDeath: 'Minsk',
    shortBiography : 'Evstigney Mirovich (real surname - Dunaev; July 29 [August 10] 1878, St. Petersburg - February 16, 1952, Minsk) - Russian and Belarusian Soviet actor, director, playwright, teacher, professor (1945). People\'s Artist of the BSSR (1940). One of the founders of the Belarusian theater of Art by Yanka Kupala. He participated in the creation of the Belarusian Theater and Art Institute (now the Belarusian State Academy of Arts).',
    timeline: [
      {date: '1900', text: 'He began to work in St. Petersburg theaters as an actor, then as a director.'},
      {date: '1906', text: 'He became a full member of the St. Petersburg Union of Drama and Music Writers.'},
      {date: '1919', text: 'Started working in theaters of Belarus'},
      {date: '1921—1931', text: 'Works as artistic director in theaters of Belarus.'},
      {date: '1932—1935', text: 'Artistic Director of the Gomel Theater of Working Youth.'},
      {date: '1937—1940', text: 'Artistic Director of the Belarusian Theater of Young Spectators by N. Krupskaya.'},
      {date: '1941—1945', text: 'Works as a director of the Belarusian Theater by Y. Kupala (BST-1).'},
    ],
    project: [
      {date: '1923', text: '«Kastus Kalinovsky»'},
      {date: '1927', text: '«Rebellion» by D. Furmanov'},
      {date: '1929', text: '«Bridge» by E. Romanovich'},
      {date: '1930', text: '«Guta» by Kobets'},
      {date: '1937', text: '«How steel was tempered» by N. Ostrovsky'},
      {date: '1939', text: '«Wonderful pipe» by Volsky'},
    ],
    // video: '',
    mapData: {
      center: [53.9226577, 27.6010486],
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/ru/b/b1/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0_%D0%B0%D0%BA%D1%82%D1%91%D1%80%D0%B0_%D0%95%D0%B2%D1%81%D1%82%D0%B8%D0%B3%D0%BD%D0%B5%D1%8F_%D0%9C%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D1%87%D0%B0.JPG',
        // width: 4,
        // height: 3,
        // title: 'Grave of Mirovich',
        text: 'Grave of Mirovich at the Military Cemetery of Minsk.'
      },
      {
        num: 1,
        src: 'https://img.tyt.by/n/obshchestvo/0b/4/08_mirovich-1952_620.jpg',
        // width: 4,
        // height: 3,
        // title: 'Portrait of the Mirovich',
        text: 'Portrait of the Mirovich by Ivan Akhremchik.'
      },
      {
        num: 2,
        src: 'https://img.tyt.by/n/obshchestvo/06/0/09_mirovich_doska_620.jpg',
        // width: 4,
        // height: 3,
        // title: 'Bas-relief of Mirovich',
        text: 'Bas-relief of Mirovich on the facade of the Belarusian Academy of Arts.'
      },
    ],
  },
  {
    id: '1',
    url: 'galubok',
    name: 'Vladislav Golubok',
    born: '15 May 1882',
    deceased: '28 September 1937',
    description: 'Belarusian playwright, prose writer, director, actor, artist.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Vladislav_Golubok.jpg',
    placeOfBirth: 'St. Lesnaya, Novogrudok district, Minsk province',
    placeOfDeath: 'Minsk',
    shortBiography : 'Golubok Vladislav Iosifovich (also known as Golub, Golubev; May 3 [15], 1882 - September 28, 1937) - Belarusian Soviet actor, director, writer, artist, decorator, first People\'s Artist of the BSSR (1928), one of the founders of the Belarusian national Theater, artistic director and director of the Belarusian State Theater.',
    timeline: [
      {date: '1896', text: 'First visited the theater.'},
      {date: '1906', text: 'On the pages of «Nasha Niva" appeared his first poems and stories.'},
      {date: '1913', text: 'The first book «Stories» was published in Petersburg.'},
      {date: '1917', text: 'The First «Belarusian Drama and Comedy Society» was revived, previously banned by the authorities of the Russian Empire. The Golubok enters into society with his wife and children and makes his first attempts at drama. For the fall of 1917 alone, Golubok wrote three plays, which immediately puts his corpse.'},
      {date: '1920', text: 'headed the Drama section of the cultural and educational organization «Fern Flower» in Slutsk.'},
      {date: '1924', text: 'an order was issued by the People’s Commissariat of Education on transforming the corpses of the Golubok into the Belarusian State Troupe.'},
      {date: '1928', text: 'Awarded the title of People\'s Artist of the Republic. Golubok became the first Belarusian national artist.'},
      {date: '1931', text: 'The Theater by Golubok is being reorganized, it is called BGT-3 (Belarusian Third State Theater) and is “prescribed” in Gomel. Tours in the districts, however, continued.'},
      {date: '1933', text: 'BST-3 plays the play "White Weapon". The play tells of the wrecking activity of "enemies of the people" at one of the plants.'},
      {date: '1935', text: 'The 15th anniversary of the Vladislav Golubok Theater was widely celebrated, many actors received honorary titles, Golubok was awarded a car and a creative trip to Moscow and Leningrad.'},
    ],
    project: [
      {date: '1917', text: '«Last meeting»'},
      {date: '1920', text: '«Court»'},
      {date: '1921', text: '«White wreath»'},
      {date: '1927', text: '«Crab»'},
      {date: '1933', text: '«White Weapon»'},
    ],
    video: 'https://www.youtube.com/watch?v=FQ054q0969g',
    mapData: {
      center: [53.9032207, 27.5344804],
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/%D0%A3%D0%BB%D0%B0%D0%B4%D1%8B%D1%81%D0%BB%D0%B0%D1%9E_%D0%93%D0%B0%D0%BB%D1%83%D0%B1%D0%BE%D0%BA.jpg',
        // width: 4,
        // height: 3,
        // title: 'Poster',
        text: 'Poster in 1929'
      },
      {
        num: 1,
        src: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Haluboktheatre4.jpg',
        // width: 4,
        // height: 3,
        // title: 'Scene from the play',
        text: 'Scene from the play "My Friend" by M. Pogodin, 1932.'
      },
      {
        num: 2,
        src: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/%D0%A3%D0%BB%D0%B0%D0%B4%D0%B7%D1%96%D1%81%D0%BB%D0%B0%D1%9E_%D0%93%D0%B0%D0%BB%D1%83%D0%B1%D0%BE%D0%BA._%D0%A4%D0%BE%D1%82%D0%B0.jpg',
        // width: 4,
        // height: 3,
        // title: 'Photo',
        text: 'Vladislav Golubok. Photo'
      },
    ],
  },
  {
    id: '2',
    url: 'bujnicki',
    name: 'Ignat Buinitsky',
    born: '22 August 1861',
    deceased: '22 September 1917',
    description: 'Belarusian actor, director, theater figure, creator of the national professional theater, participant in literary life.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Ihnat_Bujnicki.jpg',
    placeOfBirth: 'Polivachi, Gluboksky district, Vitebsk region',
    placeOfDeath: 'Polochany, Molodechno district, Minsk region',
    shortBiography : 'Ignat (Ignatius) Buinitsky (August 10 (22), 1861, the estate of Polivachi of the Prozorok volost, now Glubokoe district of the Vitebsk region - September 9 (22), 1917) - Belarusian actor, director, theater figure, founder of the first professional national Belarusian theater.\nThe Buynitsky Theater showed performances in towns and villages of Belarus, toured in Vilnius, Minsk, Polotsk, St. Petersburg, Warsaw and other cities. His activities laid the foundations of the Belarusian professional theater art. Ignat Buinitsky directed most of the performances himself. In 1917, he was one of the initiators of the creation of the "First Partnership of the Belarusian Drama and Comedy" in Minsk.',
    timeline: [
      {date: '1907', text: 'founded a theater in Palivachi, where his relatives first participated.'},
      {date: '1910', text: 'On February 12, in Vilna, the Buynichsky Theater, at a special invitation from the editorial board of "Nasha Niva", took part in a performance that went down in history under the title “The First Belarusian Party in Vilna.'},
      {date: '1910—1913', text: 'the theater toured Belarus (Minsk, Slutsk, Polotsk, Disna, Sventsyany, Pastavy, Nesvizh, Lyakhovichi), performed twice in St. Petersburg (1911, 1912), as well as in Warsaw (1913).'},
      {date: '1913', text: 'Due to material difficulties and pressure from the tsarist authorities, the activities of the troupe were discontinued.'},
      {date: '1914', text: 'tried to create a new troupe, however, the 1st World War prevented the implementation of this plan.'},
      {date: '1917', text: 'During the First World War he went to the Western Front, was in military service in Molodechno.'},
    ],
    project: [
      {date: '1910', text: '«The first Belarusian party in Vilnius»'},
    ],
    video: 'https://www.youtube.com/watch?v=ACDGr4TUkvs&feature=emb_logo',
    mapData: {
      center: [55.2899866, 28.220279],
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Buinicki.jpg',
        // width: 4,
        // height: 3,
        // title: 'Photo',
        text: 'I. Buinitsky with his daughters Wanda (left) and Elena'
      },
      {
        num: 1,
        src: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Bujnicki2.jpg',
        // width: 4,
        // height: 3,
        // title: 'Photo',
        text: 'I. Buinitsky with his daughter Wanda during a speech at the First Belarusian Party in Vilna. 1910'
      },
      {
        num: 2,
        src: 'https://upload.wikimedia.org/wikipedia/commons/2/20/%D0%9F%D1%80%D0%B0%D0%B7%D0%B0%D1%80%D0%BE%D0%BA%D1%96._%D0%9F%D0%BE%D0%BC%D0%BD%D1%96%D0%BA_%D0%86%D0%B3%D0%BD%D0%B0%D1%82%D1%83_%D0%91%D1%83%D0%B9%D0%BD%D1%96%D1%86%D0%BA%D0%B0%D0%BC%D1%83.jpg',
        // width: 4,
        // height: 3,
        // title: 'Monument on the grave',
        text: 'Monument on the grave of I. Buinichsky in the Prozoroki'
      },
    ],
  },
  {
    id: '3',
    url: 'pinigin',
    name: 'Nikolai Pinigin',
    born: '6 August 1957',
    deceased: 'our days',
    description: 'Belarusian director, Honored Artist of the Republic of Belarus.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Pinigin.JPG',
    placeOfBirth: 'Izum, Kharkov region, USSR',
    placeOfDeath: ' ',
    shortBiography : 'Nikolai Pinigin (6 August 1957, Izum, Kharkov region, Ukraine) - Russian theater director, artistic director of the National Academic theater by Yanka Kupala, honored Artist in Republic of Belarus.',
    timeline: [
      {date: '1979', text: 'Graduated from the directing department of the Belarusian Theater and Art Institute.'},
      {date: '1980—1982', text: 'worked at the Russian Drama Theater. M. Gorky (Minsk).'},
      {date: '1985', text: 'Director of the National Academic Theater by Yanka Kupala.'},
      {date: '1985-1987', text: 'Lecturer at the Department of Actor and Directing Skills at the Belarusian Academy of Arts.'},
      {date: '1998', text: 'Director of the Bolshoi Drama Theater. G. A. Tovstonogov (St. Petersburg)'},
      {date: '2008', text: 'became the main director of the National Academic Theater by Yanka Kupala.'},
    ],
    project: [
      {date: '1979', text: '«Night stagecoach»'},
      {date: '1984', text: '«Woman from the sea»'},
      {date: '1990', text: '«Local» by Yanka Kupala'},
      {date: '1997', text: '«The whims of Marianne» by A. Musset'},
      {date: '1999', text: '«California suite» by Neil Simon'},
      {date: '2000', text: '«Lying on long legs» by E. de Filippo'},
      {date: '2001', text: '«Talents and fans» by A. Ostrovsky'},
    ],
    video: 'https://www.youtube.com/watch?v=lexVZsR-GF0',
    mapData: {
      center: [59.927614, 30.330527],
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://minsknews.by/wp-content/uploads/2018/07/DSC_0237-copy-696x464.jpg',
        // width: 4,
        // height: 3,
        // title: 'Photo',
        text: 'Photo'
      },
      {
        num: 1,
        src: 'https://cdn12.img.sputnik.by/images/102328/96/1023289681.jpg',
        // width: 4,
        // height: 3,
        // title: 'Photo',
        text: 'Photo'
      },
      {
        num: 2,
        src: 'https://s13.stc.all.kpcdn.net/share/i/12/11199960/inx960x640.jpg',
        // width: 4,
        // height: 3,
        // title: 'Photo',
        text: 'Photo'
      },
    ],
  },
  {
    id: '4',
    url: 'aleksandrouskaja',
    name: 'Larisa Alexandrovskaya',
    born: '15 February 1904',
    deceased: '23 May 1980',
    description: 'Belarusian opera singer (soprano), theater director, director and public figure.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/%C5%81arysa_Aleksandro%C5%ADskaja._%D0%9B%D0%B0%D1%80%D1%8B%D1%81%D0%B0_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D1%9E%D1%81%D0%BA%D0%B0%D1%8F_%281937%29.jpg',
    placeOfBirth: 'Minsk',
    placeOfDe6ath: 'Minsk',
    shortBiography : 'Larisa Aleksandrovskaya (February 2 (15), 1902 (official data - 1904) Minsk - May 23, 1980) - Belarusian Soviet opera singer (soprano), director, publicist and public figure. People\'s Artist of the USSR (1940).',
    timeline: [
      {date: '1919-1924', text: 'member of the troupe at the political department of the Western Front.'},
      {date: '1927', text: 'performs Belarusian folk songs at the International Music Exhibition in Frankfurt.'},
      {date: '1933', text: 'Artist of the Belarusian Opera and Ballet Theater.'},
      {date: '1946', text: 'became the chairman of the Belarusian Theater Association.'},
      {date: '1951—1960', text: 'The main director of the Belarusian Opera and Ballet Theater.'},
      {date: '1976', text: 'Appointed Honorary Chairman of the Belarusian Theater Association.'},
    ],
    project: [
      {date: '1951', text: '«Zaporozhets beyond the Danube» by S. Gulak-Artemovsky'},
      {date: '1952', text: '«Scary yard» by S. Monyushko'},
      {date: '1953', text: '«Aida» by Giuseppe Verdi'},
      {date: '1954', text: '«Boris Godunov» by M. Mussorgsky'},
      {date: '1957', text: '«Mikhas Podgorny» by E. Tikotsky'},
      {date: '1960', text: '«The Queen of Spades» by P. Tchaikovsky'},
    ],
    video: 'https://www.youtube.com/watch?v=eDYuC8m5wsw&feature=youtu.be',
    mapData: {
      center: [53.9103046, 27.5615253],
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/ru/6/62/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0_%D0%BF%D0%B5%D0%B2%D0%B8%D1%86%D1%8B_%D0%9B%D0%B0%D1%80%D0%B8%D1%81%D1%8B_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B9.JPG',
        // width: 4,
        // height: 3,
        // title: 'Grave of Aleksandrovskaya',
        text: 'Grave of Aleksandrovskaya at the Eastern cemetery of Minsk.'
      },
      {
        num: 1,
        src: 'https://minsknews.by/wp-content/uploads/2018/03/4-9.jpg',
        // width: 4,
        // height: 3,
        // title: 'Carmen',
        text: 'The singer in the image of Carmen.'
      },
      {
        num: 2,
        src: 'https://www.sb.by/upload/medialibrary/377/3775af02273a590150a1e89012960225.jpg',
        // width: 4,
        // height: 3,
        // title: 'Anniversary',
        text: '70 years old.'
      },
    ],
  },
  {
    id: '5',
    url: 'lutsenka',
    name: 'Boris Lutsenko',
    born: '16 September 1937',
    deceased: '5 February 2020',
    description: 'Belarusian theater director, People\'s Artist of Belarus.',
    image: 'https://www.rustheatre.by/images/stories/administration/lutsenko_black.jpg',
    placeOfBirth: 'Maykop, Adygeisk Autonomous Oblast, USSR',
    placeOfDe6ath: 'Minsk',
    shortBiography : 'Boris Lutsenko (September 16, 1937, Maykop, Krasnodar Territory - February 5, 2020, Minsk) - Soviet and Belarusian film and theater director. People\'s Artist of the Republic of Belarus (1995). Honored Artist of the Belarusian SSR (1975).',
    timeline: [
      {date: '1962—1967', text: 'studied at the Belarusian Theater and Art Institute.'},
      {date: '1967', text: 'admitted to the Belarusian Theater by Y. Kupala.'},
      {date: '1970', text: 'began to teach at the Belarusian Academy of Arts.'},
      {date: '1973-1981', text: 'chief director of the State Russian Drama Theater by M. Gorky.'},
      {date: '1981-1982', text: 'Director of the Kupalovsky Theater.'},
      {date: '1982—1991', text: 'The main director of the Studio Theater of the film actor.'},
      {date: '1991-2007', text: 'Artistic Director of the National Academic Drama Theater by M. Gorky.'},
    ],
    project: [
      {date: '1970', text: '«Memory of the heart» by Alexandra Korneichuk'},
      {date: '1976', text: '«Three-Penny Opera» by Bertold Brecht'},
      {date: '1979', text: '«Human tragedy» by Imre Madacha'},
      {date: '1985', text: '«Not Afraid of Virginia Woolf» by bEdward Albee'},
      {date: '1990', text: '«Generals in skirts» by Zhana Anuya'},
    ],
    video: 'https://www.youtube.com/watch?v=C3TMCDZA2rY',
    mapData: {
      center: [53.898314, 27.5507955],
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Alexey_Kuzmich_Portrait_of_national_actor_Boris_Lutsenko_2001.JPG',
        // width: 4,
        // height: 3,
        // title: 'Portrait of Boris Lutsenko',
        text: 'Portrait of Boris Lutsenko by Belarusian artist Alexei Kuzmich, 2001.'
      },
      {
        num: 1,
        src: 'http://images.aif.by/007/667/03b8ec457923e6c67efae3f6275f67cd.JPG',
        // width: 4,
        // height: 3,
        // title: 'In the theater',
        text: 'Director in the theater.'
      },
      {
        num: 2,
        src: 'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2020-02/TASS_18992976%20copy.jpg?itok=LmXoBDLI',
        // width: 4,
        // height: 3,
        // title: 'Photo',
        text: 'Photo'
      },
    ],
  },
  {
    id: '6',
    url: 'kryzanowski',
    name: 'Evgeny Kryzhanovsky',
    born: '6 June 1955',
    deceased: 'our days',
    description: 'Belarusian actor and chief director of the Minsk Theater of Satire and Humor «Christopher», Honored Artist of the Republic of Belarus.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Kryzanowski.jpg',
    placeOfBirth: 'Nikolaev, Nikolaev region, USSR, USSR',
    placeOfDe6ath: ' ',
    shortBiography : 'Yevgeny Kryzhanovsky (born June 6, 1955, Nikolaev, Ukrainian SSR, USSR) is a Soviet and Belarusian comedian, actor and chief director of the Minsk Theater of Satire and Humor "Hristofor" (1986-2016). Artistic director of the television project "Humorinka" (2015-2019). Artistic Director of the Cinema Center Evgeny Kryzhanovsky. Honored Artist of the Republic of Belarus (2015).',
    timeline: [
      {date: '1972', text: 'studied at a school in Kozelsk (RSFSR).'},
      {date: '1973', text: 'entered the Belarusian Theater and Art Institute in the acting department.'},
      {date: '1977', text: 'accepted into the troupe of the Yanka Kupala Academic Theater.'},
      {date: '1986', text: 'created the theater of satire and humor «Christopher». He played more than 30 major and major roles.'},
    ],
    project: [
      {date: '1982', text: '«Kupala night»'},
      {date: '1985', text: '«Go and look»'},
    ],
    video: 'https://www.youtube.com/watch?v=2q_HkfBF3AY',
    mapData: {
      center: [53.9008774, 27.5626722],
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Jaugen_Kryzhanouski_and_his_daughter_-_on_an_International_book_exhibition_in_Minsk_city_-_14_February_2015_AD_-_1.JPG',
        // width: 4,
        // height: 3,
        // title: 'Yevgeny Kryzhanovsky and his daughter',
        text: 'Yevgeny Kryzhanovsky and his daughter at the XXII International Book Exhibition in Minsk (Belarus), February 14, 2015.'
      },
      {
        num: 1,
        src: 'http://kryzhanovski.tripod.com/images/photo/pic8.jpg',
        // width: 4,
        // height: 3,
        // title: 'With Anatoly Dluskim',
        text: 'With Anatoly Dluskim.'
      },
      {
        num: 2,
        src: 'http://kryzhanovski.tripod.com/images/photo/pic3.jpg',
        // width: 4,
        // height: 3,
        // title: 'With family.',
        text: 'With family.'
      },
    ],
  },
];

const mainText = 'The profession of theater director in the form in which we are accustomed to seeing her, developed in the second half of the XIX century. But the concept of directing appeared much earlier - in 1742. The director of the theater defines the general idea, which will be revealed during the performance. This creative worker combines the efforts of everyone else - decorators and actors, composers and make-up artists. It is he who must unite all the theater workers, make them imbued with meaning, put their soul into the production. For this, the director needs to be a good psychologist, while being able to control himself. Theater director - a difficult profession. To become one, one must possess assertiveness, seriousness, literacy, intelligence and originality. This person interprets the plays - of course, according to his vision, so that they sound in a new way, interest the audience.';
const addText = 'Since the mid-18th century, serf theaters began to spread in Belarus - the Radziwills, Sapieha, Oginsky and other magnates competed with each other, including in the field of art. Therefore, they did not spare money on the training of serf artists and invited the most qualified European choreographers: Austrians, French, Italians, Czechs. Closer to the 19th century, ballet from an “accidental” dance gradually turns into high art, with harmonious choreographic compositions and special music. At this time, the Belarusian ballet schools of Postavy, Slonim, Shklov, Vitebsk became famous. The professionalism of Belarusians was repeatedly noted by theatrical critics of that time, saying that other performances in their splendor exceeded even the Moscow ballet. The Belarusian theater school developed in parallel with the European theater. Belorussian school and serf theaters, folk battles were known. The beginning of the Belarusian professional theater can be considered the staging of the play "Selyanka" on the libretto by V. Dunin-Martinkevich and music by S. Manyushko. It happened almost 155 years ago - February 9, 1852. Today in Belarus there are 29 professional state theaters. Among them, the most dramatic (19). There are also 7 puppet theaters in the republic (in each region and capital) and 3 musical theaters. In this variety of theaters, many directors have devoted themselves to work in these institutions. And in this project, we want to talk about the most famous theater directors in Belarus.';

const firstQuote = {
  author: 'Jarko Petan',
  text: "In the theater, the director is God, but the actors, alas, are atheists.",
}

const secondQuote = {
  author: 'George Bernard Shaw',
  text: "Director's work is incompatible with acting: the actor will fail if he will critically look at his partners.",
}

const directorOfTheDay = 'Director of the day';

export default {
  developers,
  directors,
  directorsLink: 'List of directors',
  developersLink: 'Team members',
  homePageLink: 'Home',
  worklogLink: 'Worklog',
  styleguideLink: 'Styleguide',
  searchLabel: 'Name or place of birth',
  directorsOfTheDayButton: 'More details',
  timelineTitle: 'Timeline',
  otherInfo: {
    lang: 'en',
    title: 'Theater directors of Belarus',
    description: 'Theater directors of Belarus: biography and their work.',
  },
  mainText,
  addText,
  firstQuote,
  secondQuote,
  directorOfTheDay,
}

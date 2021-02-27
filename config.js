var config = {
    style: 'mapbox://styles/staciesheldon/cklmnzkfc0u5a18s5drlxhsin',
    accessToken: 'pk.eyJ1Ijoic3RhY2llc2hlbGRvbiIsImEiOiJja2xtb2IwNTcwMnl4MnF0N2czMmFkcTh1In0.nMh0O-WY7mCnXDLfzuXYHQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'The Story of the Great Lakes Watershed',
    subtitle: 'The Anishinaabe Three Fires Confederacy remains a significant network of stewardship protecting language, culture, land, and water. Over 120 nations are a part of this diaspora. This is the story of the Great Lakes Watershed from an indigenous perspective.',
    byline: 'February 26, 2021 ~ by Ojibwe.net',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'What is the Great Lakes Watershed',
            description: 'A watershed is an area of land where all waterways are connected and channel to a lake, system of lakes or an ocean. Watersheds show how rainfall, snowmelt, and pollutants travel through a landscape and how each organism reliant on water is connected.<br><br> The Great Lakes Watershed, also called the Great Lakes Basin, consists of Michigaming and surrounding land and waterways. Michigaming, which translates as “the vast sea” is the entity that centers Anishinaabewakiing and is known to other cartographers as a system of five lakes (Lake Superior, Lake Michigan, Lake Huron, Lake Erie, and Lake Ontario). The Great Lakes Watershed has been an essential part of North American life since it was formed 12,000 years ago and continues to be essential to those who live in the region. It currently supports over 3,500 variations of life and accounts for more than 20% of the earth’s fresh water.',
            location: {
                center: [-90.29875, 48.29298],
                zoom: 4.10,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter1creation',
            alignment: 'left',
            hidden: false,
            title: 'Anishinaabeg',
            image: './images/Creation-Stories-Intro.png',
            description: 'Excellent copy about creation stories here.',
            location: {
                center: [-91.81116, 47.10954],
                zoom: 7.60,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter2hochunk',
            alignment: 'left',
            hidden: false,
            title: 'Ho-Chunk',
            image: './images/Ho-Chunk.png',
            description: 'Ho-Chunk story notes here.',
            location: {
                center: [-88.34675, 42.56382],
                zoom: 7.00,
                pitch: 45.00,
                bearing: -40.0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter3oneida',
            alignment: 'left',
            hidden: false,
            title: 'Oneida',
            image: './images/Oneida.png',
            description: 'Oneida story notes here.',
            location: {
                center: [-88.85392, 44.08852],
                zoom: 7.10,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};

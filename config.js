var config = {
    style: 'mapbox://styles/staciesheldon/cklmnzkfc0u5a18s5drlxhsin',
    accessToken: 'pk.eyJ1Ijoic3RhY2llc2hlbGRvbiIsImEiOiJja2xtb2IwNTcwMnl4MnF0N2czMmFkcTh1In0.nMh0O-WY7mCnXDLfzuXYHQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'The Story of the Great Lakes Watershed',
    subtitle: 'The Anishinaabe Three Fires Confederacy remains a significant network of stewardship protecting language, culture, land, and water. Over 120 nations are a part of this diaspora. This is the story of the Great Lakes Watershed from an indigenous perspective.',
    byline: 'By Ojibwe.net',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'What is the Great Lakes Watershed',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-122.418398, 37.759483],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
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
            id: 'chapter2hochunk',
            alignment: 'left',
            hidden: false,
            title: 'Ho-Chunk',
            image: './images/Ho-Chunk.png',
            description: 'Copy these sections to add to your story.',
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
        }
    ]
};

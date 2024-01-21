const deckPhotos = {
    name: 'deckPhotos',
    type: 'document',
    title: 'Deck Photos',
    fields: [
        {
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [{
                type: 'image',
                options: {
                    hotspot: true,
                    storeOriginalFilename: false,
                },
            }]
            ,
        },
    ],
}

export default deckPhotos

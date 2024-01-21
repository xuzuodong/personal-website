const gallerySchema = {
    name: 'gallery',
    type: 'document',
    title: 'Gallery',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Gallery name',
        },
        {
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [{
                type: 'image',
                options: {
                    metadata: ['blurhash', 'lqip', 'palette', 'exif'],
                    hotspot: true,
                    storeOriginalFilename: false,
                },
            }]
            ,
        },
    ],
}

export default gallerySchema

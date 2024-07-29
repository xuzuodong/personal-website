import type { ImageMetadataType } from 'sanity'

export const imageFieldMetadataWithExif: ImageMetadataType[] = [
    'blurhash',
    'lqip',
    'palette',
    'exif',
    'image' as any, // until https://github.com/sanity-io/sanity/pull/7190 is merged
]

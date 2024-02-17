import type { ResolvedSanityImage } from '@sanity/asset-utils'
import type { Value } from 'sanity-plugin-internationalized-array'

const query = groq`
*[_type == "galleries"]{
    "id": _id,
    name,
    description,
    _createdAt,
    "slug": slug.current,
    "coverImage": images[0]{
        ...,
        asset->
    },
    "imageCount": count(images)
} | order(_createdAt desc)`

export interface GalleryListItem {
    id: string
    name: Value[]
    description: Value[]
    slug: string
    _createdAt: string
    coverImage: ResolvedSanityImage
    imageCount: number
}

export default defineCachedEventHandler(async () => {
    return await useSanity().fetch<GalleryListItem[]>(query)
}, {
    staleMaxAge: 60 * 60,
})

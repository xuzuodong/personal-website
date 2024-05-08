import type { ResolvedSanityImage } from '@sanity/asset-utils'
import type { Value } from 'sanity-plugin-internationalized-array'

const query = groq`
*[_type == "galleries"]{
    "id": _id,
    name,
    description,
    photographDate,
    publishDate,
    "slug": slug.current,
    "coverImage": images[0]{
        ...,
        asset->
    },
    "imageCount": count(images)
} | order(
    select(
        photographDate != null => photographDate,
        publishDate != null => publishDate,
    )
    desc
)`

export interface GalleryListItem {
    id: string
    name: Value[]
    description: Value[]
    slug: string
    _createdAt: string
    coverImage: ResolvedSanityImage
    imageCount: number
    photographDate: `${number}-${number}-${number}`
}

export default defineCachedEventHandler(async () => {
    return await useSanity().fetch<GalleryListItem[]>(query)
}, {
    // staleMaxAge: 60 * 60,
})

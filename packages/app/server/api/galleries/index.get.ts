import type { GalleriesQueryResult } from '~/types/sanity'

const galleriesQuery = groq`
*[_type == "gallery"]{
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

export default defineCachedEventHandler(async () => {
    return await useSanity().fetch<GalleriesQueryResult[]>(galleriesQuery)
}, {
    // staleMaxAge: 60 * 60,
})

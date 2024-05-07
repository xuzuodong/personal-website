import type { GalleriesQueryResult } from '~/types/sanity'

export default defineEventHandler(async (event) => {
    const { slug } = getRouterParams(event)
    const galleryQuery = groq`*[_type == "gallery" && slug.current == $slug][0]{
        ...,
        images[]{
            ...,
            asset->
        }
    }`
    return await useSanity().fetch<GalleriesQueryResult>(galleryQuery, { slug })
})

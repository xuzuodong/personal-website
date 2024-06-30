import type { ResolvedSanityImage } from '@sanity/asset-utils'
import type { Value } from 'sanity-plugin-internationalized-array'

export interface Gallery {
    name: Value[]
    photographDate: `${number}-${number}-${number}`
    description: Value[]
    images: ResolvedSanityImage[]
}

export default defineEventHandler(async (event) => {
    const { slug } = getRouterParams(event)
     // limit to 2 images
    const query = groq`*[_type == "gallery" && slug.current == $slug][0]{
        ...,
        images[]{
            ...,
            asset->
        }[0...3]
    }`
    return await useSanity().fetch<Gallery | null>(query, { slug })
})

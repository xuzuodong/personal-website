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
    const query = groq`*[_type == "galleries" && slug.current == "${slug}"][0]{
        ...,
        images[]{
            ...,
            asset->
        }
    }`
    return await useSanity().fetch<Gallery | null>(query)
})

import type { ResolvedSanityImage } from '@sanity/asset-utils'
import type { Value } from 'sanity-plugin-internationalized-array'

export interface ProjectDetail {
    _id: string
    name: Value[]
    description: Value[]
    url: string
    tags: string[]
    previewImages: ResolvedSanityImage[]
    coverImage: ResolvedSanityImage
}

export default defineEventHandler(async (event) => {
    const { slug } = getRouterParams(event)
    const query = groq`*[_type == "projects" && slug.current == "${slug}"][0]{
        ...,
        previewImages[]{
            ...,
            asset->
        },
        coverImage{
            ...,
            asset->
        }
    }`
    return await useSanity().fetch(query)
})

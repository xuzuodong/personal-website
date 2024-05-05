import type { ResolvedSanityImage } from '@sanity/asset-utils'
import type { Value } from 'sanity-plugin-internationalized-array'
import type { PortableTextBlock } from '@portabletext/types'

export interface ProjectDetail {
    _id: string
    name: Value[]
    description: Value[]
    url: string
    sourceCodeUrl: string
    tags: string[]
    previewImages: ResolvedSanityImage[]
    coverImage: ResolvedSanityImage
    content: { value?: PortableTextBlock }[]
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
        },
        content[]{
            ...,
            value[]{
              ...,
              _type == "image" => {
                ...,
                asset->
              }
            }
        }
    }`
    return await useSanity().fetch(query)
})

import type { ResolvedSanityImage } from '@sanity/asset-utils'
import type { Value } from 'sanity-plugin-internationalized-array'
import type { PortableTextBlock } from '@portabletext/types'

export interface ProjectDetail {
    _id: string
    name: Value[]
    description: Value[]
    url: string
    referer: boolean
    sourceCodeUrl: string
    tags: string[]
    coverImage: ResolvedSanityImage
    content: { value?: PortableTextBlock }[]
}

export default defineEventHandler(async (event) => {
    const { slug } = getRouterParams(event)
    const query = groq`*[_type == "project" && slug.current == $slug][0]{
        ...,
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
    return await useSanity().fetch(query, { slug })
})

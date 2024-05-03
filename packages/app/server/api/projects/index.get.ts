import type { ResolvedSanityImage } from '@sanity/asset-utils'
import type { Value } from 'sanity-plugin-internationalized-array'

const query = groq`
*[_type == "projects"]{
    "id": _id,
    name,
    description,
    "slug": slug.current,
    tags,
    url,
    coverImage{
      asset->
    }
}`

export interface Project {
    id: string
    name: Value[]
    description: Value[]
    slug: string
    url: string
    tags: string[]
    coverImage: ResolvedSanityImage
}

export default defineEventHandler(async () => {
    return await useSanity().fetch<Project[]>(query)
})

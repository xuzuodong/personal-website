import type { ProjectQueryResult } from '~/types/sanity'

export default defineEventHandler(async (event) => {
    const { slug } = getRouterParams(event)
    const projectQuery = groq`*[_type == "project" && slug.current == $slug][0]{
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
    return await useSanity().fetch<ProjectQueryResult>(projectQuery, { slug })
})

import type { ProjectsQueryResult } from '~/types/sanity'

const projectsQuery = groq`
*[_type == "project"]{
    "id": _id,
    name,
    description,
    "slug": slug.current,
    tags,
    url,
    sourceCodeUrl,
    coverImage{
      asset->
    }
}`

export default defineEventHandler(async () => {
    return await useSanity().fetch<ProjectsQueryResult[]>(projectsQuery)
})

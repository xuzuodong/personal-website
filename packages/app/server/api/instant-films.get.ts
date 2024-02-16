import type { ResolvedSanityImage } from '@sanity/asset-utils'

const query = groq`
*[_id == "instantFilms"].instantFilms[]{
    ...,
    asset->
}
`

export default defineCachedEventHandler(async () => {
    return await useSanity().fetch<ResolvedSanityImage[]>(query)
}, {
    maxAge: 60 * 60,
    staleMaxAge: 60 * 60,
})

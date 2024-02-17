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
    staleMaxAge: 60 * 60,
})

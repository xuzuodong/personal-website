import type { ResolvedSanityImage } from '@sanity/asset-utils'

const instantFilmsQuery = groq`
*[_type == "instantFilm"][0].instantFilms[-5..-1]{
    ...,
    asset->,
}
`

export default defineCachedEventHandler(async () => {
    return await useSanity().fetch<ResolvedSanityImage[]>(instantFilmsQuery)
}, {
    staleMaxAge: 60 * 60,
})

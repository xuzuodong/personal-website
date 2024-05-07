import type { InstantFilmsQueryResult } from '~/types/sanity'

const instantFilmsQuery = groq`
*[_type == "instantFilm"][0].instantFilms[-5..-1]{
    ...,
    asset->,
}
`

export default defineCachedEventHandler(async () => {
    return await useSanity().fetch<InstantFilmsQueryResult>(instantFilmsQuery)
}, {
    staleMaxAge: 60 * 60,
})

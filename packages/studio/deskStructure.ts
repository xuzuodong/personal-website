import type { StructureBuilder } from 'sanity/structure'

export function structure(S: StructureBuilder) {
    return S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Instant Films')
                .child(
                    S.document()
                        .schemaType('instantFilms')
                        .documentId('instantFilms')
                        .title('Instant Films'),
                ),

            ...S.documentTypeListItems()
                .filter(
                    listItem => !['instantFilms', 'media.tag'].includes(listItem.getId() as string),
                ),
        ])
}

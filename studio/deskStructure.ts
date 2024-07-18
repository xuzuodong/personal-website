import {
    filteredDocumentListItems,
    singletonDocumentListItems,
} from 'sanity-plugin-singleton-tools'

import type { StructureResolver } from 'sanity/structure'

// eslint-disable-next-line func-style
export const structure: StructureResolver = (S, context) => S.list()
    .title('Sanity Love Content')
    .items([
        ...singletonDocumentListItems({ S, context })!,
        S.divider(),
        ...filteredDocumentListItems({ S, context }),
    ])

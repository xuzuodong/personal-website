import process from 'node:process'

import { defineMigration, set } from 'sanity/migrate'
import { createClient } from '@sanity/client'

const token = process.env.SANITY_STUDIO_TOKEN

const projectId = process.env.SANITY_PROJECT_ID
const dataset = 'production'
const apiVersion = '2023-03-01'

const client = createClient({
    apiVersion,
    projectId,
    dataset,
    token,
})

let dataSet: Set<string>

async function getDataSet() {
    const data = await client.fetch(`*[_type == "gallery" && slug.current == "autumn-backlit-portraits"][0].images[].asset._ref`)
    dataSet = new Set(data)
}

export default defineMigration({
    title: 'Edit EXIF data of photos',
    migrate: {
        async object(node) {
            if (!dataSet) await getDataSet()
            if (node._type === 'sanity.imageAsset' && dataSet.has(node._id as string)) {
                const metadata = node.metadata as Record<string, any>
                const exif = metadata.exif as Record<string, any>
                const image = metadata.image as Record<string, any>
                if (!image.Make) {
                    image.Make = 'SONY'
                }
                if (!image.Model) {
                    image.Model = 'ILCE-7CM2'
                }
                if (!exif.LensModel) {
                    exif.LensModel = '85mm F1.4 DG DN | Art 020'
                }
                const newNode = {
                    ...node,
                    metadata: {
                        ...metadata,
                        exif,
                        image,
                    },
                }
                return set(newNode)
            }
        },
    },
})

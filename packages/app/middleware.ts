import process from 'node:process'

import { rewrite } from '@vercel/edge'

export default function middleware(request: Request) {
    const url = new URL(request.url)

    if (url.pathname.startsWith('/studio')) {
        const baseUrl = process.env.VERCEL_STUDIO_URL || ''
        return rewrite(`https://${baseUrl}${url.pathname}`)
    }
}

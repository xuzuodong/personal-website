/* eslint-disable node/prefer-global/process */
import { rewrite } from '@vercel/edge'

export default function middleware(request: Request) {
    const url = new URL(request.url)

    if (url.pathname.startsWith('/studio')) {
        const baseUrl = process.env.SANITY_STUDIO_SITE_DOMAIN || ''
        return rewrite(new URL(url.pathname, baseUrl))
    }
}

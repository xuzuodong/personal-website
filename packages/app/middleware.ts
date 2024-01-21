/* eslint-disable node/prefer-global/process */

/**
 * This file is a Vercel Edge Function middleware.
 * It rewrites requests to the Sanity Studio you deployed.
 */

import { rewrite } from '@vercel/edge'

export default function middleware(request: Request) {
    const url = new URL(request.url)

    if (url.pathname.startsWith('/studio')) {
        const baseUrl = process.env.SANITY_STUDIO_SITE_DOMAIN
        if (baseUrl)
            return rewrite(new URL(url.pathname, baseUrl))
    }
}

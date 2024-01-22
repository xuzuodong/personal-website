/**
 * This file is a Vercel Edge Middleware.
 * @see https://vercel.com/docs/functions/edge-middleware
 *
 * Since "xzd.me" is the common domain used by the subpackages `app` and `studio`,
 * and they are accessed via different pathnames (i.e., "/" for `app` and "/studio" for `studio`),
 * and since they are deployed separately on Vercel as two different projects,
 * this file is used to redirect all requests starting with `/studio` from this Vercel project to the other Vercel project for `studio`.
 */

import { rewrite } from '@vercel/edge'

export default function middleware(request: Request) {
    const url = new URL(request.url)

    if (url.pathname.startsWith('/studio')) {
        // eslint-disable-next-line node/prefer-global/process
        const baseUrl = process.env.SANITY_STUDIO_SITE_DOMAIN
        if (baseUrl)
            return rewrite(new URL(url.pathname, baseUrl))
    }
}

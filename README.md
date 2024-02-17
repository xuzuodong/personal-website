# My Personal Website

**[xzd.me](https://www.xzd.me)**

## Inspired by

- [ikefakis/react-polaroid-photo-deck](https://github.com/ikefakis/react-polaroid-photo-deck), which is based on [an example](https://codesandbox.io/s/github/pmndrs/use-gesture/tree/main/demo/src/sandboxes/cards-stack) of [pmndrs/use-gesture](https://github.com/pmndrs/use-gesture).
- [Indi Harris – one-page personal site](https://dribbble.com/shots/15937774-Indi-Harris-one-page-personal-site) designed by Jordan Hughes®

## Vercel Deployment

### Environment Variables

Set following environment variable to your Vercel project, so that Vercel Edge function rewrites requests to your Sanity Studio you deployed.

Note that you should replace the value to your own domin.

```bash
SANITY_STUDIO_SITE_DOMAIN=https://some-sanity-studio.vercel.app
```

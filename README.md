# My Personal Website

**[xzd.me](https://www.xzd.me)**

## Inspired by

- [ikefakis/react-polaroid-photo-deck](https://github.com/ikefakis/react-polaroid-photo-deck), which is based on [an example](https://codesandbox.io/s/github/pmndrs/use-gesture/tree/main/demo/src/sandboxes/cards-stack) of [pmndrs/use-gesture](https://github.com/pmndrs/use-gesture).
- [Indi Harris – one-page personal site](https://dribbble.com/shots/15937774-Indi-Harris-one-page-personal-site) designed by Jordan Hughes®

## Vercel Deployment

Feel free to fork this repo and deploy your own version. Note that there should be two projects deployed on Vercel: the **main website** and the **Santiy studio** for content management.

### Environment Variables

1. Set following environment variable to  **both** of your Vercel projects:

```bash
SANITY_STUDIO_PROJECT_ID=
```

2. Set following environment variable to your Vercel **main website** project, so that Vercel Edge function rewrites requests start with `/studio` to the Sanity studio site you deployed. Note that you should replace the value to your own domin.

```bash
SANITY_STUDIO_SITE_DOMAIN=https://some-sanity-studio.vercel.app
```

# Super website

Online agency website for Super (sssssuper.com).

## Built with

- [GatsbyJS](https://www.gatsbyjs.org/)
- [Theme UI](https://theme-ui.com/)
- [Prismic](https://prismic.io/)
- [Netlify](https://www.netlify.com/)

## Prerequisites

1. Install the Gatsby CLI globally.

```
npm install -g gatsby-cli
```

2. Install Yarn globally [instructions here](https://yarnpkg.com/lang/en/docs/install/).

3. Using at least `Node v12.18.1`

## Installing

```
git clone git@github.com:jahlherapath/super.git
cd super
yarn
```

## API key

To run this site create the file `.env.development` and `.env.production` in the root dir of your project. Its content should be:

```
PRISMIC_KEY=YOURKEYHERE
```

## Running locally

To start a hot-reloading development environment accessible at `localhost:8000` run

```
yarn develop
```

To test the production build run

```
yarn build && yarn serve
```

This generates optimised production files as well as starting a local HTML server for testing.

## Deployment

### Live Website

[https://sssssuper.com/](https://sssssuper.com/)

Any changes made to the `master` branch will trigger a new build on Netlify for the live website.

### Staging Website

[https://develop--sssssuper.netlify.com](https://develop--sssssuper.netlify.com)

Any changes made to the `develop` branch will trigger a new build on Netlify for the staging website.

### Branches

When you push a new branch live, Netlify will automatically create a new website for sharing those changes. The convention for this is `https://branch-name--sssssuper.netlify.com`.

## Content Management System (CMS)

Any changes made to the content in the CMS ([Prismic](https://prismic.io)) will trigger a new build on Netlify for _both_ the live site and staging.

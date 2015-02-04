# Static Site Generator
An opinionated static site generator for sites to be hosted on Github Pages.

## Technology Stack
- Jekyll
    - Jekyll Assets
- Node
    - Gulp
    - Bower
        - uikit
    - gh-pages

## Getting started
1. Clone the repo
2. `bundle install`
3. `npm install`
4. `bower install`
5. `gulp`
6. Create your site in the `./app` folder

## Deployment
This project uses the gh-pages package for easy deployment on Github Pages. This is as simple as ensuring your project as been built using `gulp build`, then running `gulp deploy`.

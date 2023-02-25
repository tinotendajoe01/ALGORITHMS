# Javascript Algorithms

![Total alerts] [![Language grade: JavaScript] [![ContiniousIntergration]![codecov] [![blog]![resume]]

Blog and Resume template with turborepo

<h2 align="center">

`BLOG DEMO ☄️`

</h2>

 <div class="badges-container">
    <div class="badges-body"> 
        [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg?longCache=true&style=plastic)](https://GitHub.com/Naereen/ama) [![made-with-python](https://img.shields.io/badge/Made%20with-Python-blue.svg?longCache=true&style=plastic)](https://www.python.org/) [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg?longCache=true&style=plastic)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)  ![PyPI - Status](https://img.shields.io/pypi/status/Django.svg?style=plastic) ![Contributor](https://img.shields.io/badge/Contributors-2-orange.svg?longCache=true&style=plastic) 
    </div>
 </div>

## How to start

`comet-land` has own generate package [`create-comet-land`](https://github.com/hyesungoh/create-comet-land)

```bash
npx create-comet-land
# or
yarn create comet-land
```

> Or using Fork or clone this repo

1. Install dependencies

```bash
yarn
```

2. Start Turbo !

```bash
yarn turbo run dev
# or just
yarn dev
```

4. Now you can see blog at `localhost:3000`, resume at `localhost:3001`

## How to configuration

Please see `packages/core/constants` directory.

and you can reconfigure at that directory's variable

- Analytics directory
  - GA ID
  - Hotjar ID
- Colors directory
  - color schema
- General directory
  - author image
  - default open-graph image
  - favicon
- SocialMedia directory
  - github
  - instagram
  - facebook
  - linkedin
  - twitter

and please check `apps/blog/_config/index.json` and `apps/resume/_config/index.json`.

This files are placing each app's configuration variable.

## How to use it

please read following link.

- [how to add blog post](https://github.com/hyesungoh/hyesungoh-land/tree/main/_docs/en-blog.md)
- [how to custom resume](https://github.com/hyesungoh/hyesungoh-land/tree/main/_docs/en-resume.md)

## How to deploy

#### [deploy with vercel (recommend)](https://github.com/hyesungoh/hyesungoh-land/tree/main/_docs/en-deploy-vercel.md)

#### [deploy with github pages](https://github.com/hyesungoh/hyesungoh-land/tree/main/_docs/en-deploy-github-pages.md)

## How to add more packages

- scope packages

```bash
cd where-you-want
yarn add package-name
```

- global packages

```bash
yarn add package-name -W
```

- global dev packages

```bash
yarn add package-name -DW
```

## Trouble shootings

check [this wiki](https://github.com/hyesungoh/comet-land/wiki/Trouble-Shooting) please! it might be help

## Use Case

- [hyesungoh.xyz](https://www.hyesungoh.xyz/)
- [seulheehan.com](https://www.seulheehan.com/)
- [thebong.net](https://thebong.net/)

## Inspired

I inspired below blogs and resume.

- [Overreacted](https://overreacted.io/)
- [Yceffort](https://yceffort.kr/)
- [gatsby-starter-bee](https://gatsby-starter-bee.netlify.app/)
- [vallista-land](https://vallista.kr/)
- [hyunseob.github.io/resume](https://hyunseob.github.io/resume/)

## License

MIT

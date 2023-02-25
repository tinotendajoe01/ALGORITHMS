# Javascript Algorithms

![Total alerts] [![Language grade: JavaScript] [![ContiniousIntergration]![codecov] [![blog]![resume]]

Blog and Resume template with turborepo

<h2 align="center">

`BLOG DEMO ☄️`

</h2>

![comet-land-resume](https://user-images.githubusercontent.com/26461307/160653172-c56a3b64-dfa9-4708-bf95-fca2fff47964.png)

<h2 align="center">

[`RESUME DEMO 💫`](https://comet-land-resume.vercel.app/)

</h2>

![postGif](https://user-images.githubusercontent.com/26461307/159372336-e42c1a9c-9915-4d05-9e51-4882d681dc80.gif)

- 👔 Code highlight with line-highlight, line-numbers
- 🎨 Design with [NextUI](https://nextui.org/)
- 🍽 Table of contents
- 🎩 Dark mode

![kbarGif](https://user-images.githubusercontent.com/26461307/159372344-d628b817-d7f5-4322-813e-3468a62e79d6.gif)

- ⌨️ Search with [KBar](https://kbar.vercel.app/)
- 🔨 Configurable
- 🔊 [Utterances](https://utteranc.es/) Comment
- 🔭 Google Analytics
- 🔥 Hotjar
- 🏄 Lighthouse score

![blog lighthouse score](https://user-images.githubusercontent.com/26461307/161536154-b85caf9f-0f73-4224-a1e7-540723916ff7.gif)

## Resume Feature

- 🎨 Design with [NextUI](https://nextui.org/)
- 🎩 Dark mode
- ⌨️ Contact with [KBar](https://kbar.vercel.app/)
- 🔨 Configurable
- 🔭 Google Analytics
- 🔥 Hotjar
- 🏄 Lighthouse score

![resume lighthouse score](https://user-images.githubusercontent.com/26461307/161536162-63278484-ca52-42ed-89d4-951cd31e42c1.gif)

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

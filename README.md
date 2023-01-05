# SoPlugged

A platform for black-owned businesses in Canada. Visit [here](https://www.soplugged.com)

## Run Locally

Clone the project

```bash
  git clone https://github.com/bambie1/soplugged.git
```

Go to the project directory

```bash
  cd soplugged
```

Install dependencies

```bash
  npm install
```

Start Next.js dev server

```bash
  npm run dev

```

---
**NOTE:**
> Some pages require environment variables (e.g. `/search`, `/blog`, `/dashboard`, `/join`, `/my-business`, `/business/[slug]`) to run properly. If you encounter an error when accessing these pages, it's likely because these variables are missing.
> However, they exist in the Vercel environment, so, when you create a PR, you'll be able to test ALL functionality seamlessly

---

## VS Code tips

Recommended extensions:

- [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented) - there are still a few `.scss` files that haven't been ported to Tailwind yet


## Tech stack

- Built with [Next.js](https://nextjs.org) (+ Typescript)
- Hosted on [Vercel](https://vercel.com)
- [Algolia](https://www.algolia.com/) for directory search
- Back-end is a Rails REST API in a separate repo
- [Next Auth](https://next-auth.js.org/) for authentication

If you notice a bug or an error, please [raise an issue](https://github.com/bambie1/soplugged/issues/new), and it'll be looked at.

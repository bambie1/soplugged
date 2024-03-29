# SoPlugged

A platform for Black-owned businesses in Canada. Visit [here](https://www.soplugged.com)

## Run Locally

```bash
  git clone https://github.com/bambie1/soplugged.git
  cd soplugged
  yarn install
  yarn dev
```

---

**NOTE:**

> Some pages require environment variables (e.g. `/search`, `/blog`, `/join`, `/business/[slug]`) to run properly. If you encounter an error when accessing these pages, it's likely because these variables are missing.
> However, they exist in the Vercel environment, so, when you create a PR, you'll be able to test ALL functionality seamlessly

---

## Recommended VS Code extensions

- [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented) - there are still a few `.scss` files that haven't been ported to Tailwind yet

## Tech stack

- Built with [Next.js](https://nextjs.org) (+ Typescript)
- Hosted on [Vercel](https://vercel.com)

If you notice a bug or an error, please [raise an issue](https://github.com/bambie1/soplugged/issues/new), and it'll be looked at.

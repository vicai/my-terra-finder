This is a [Next.js](https://nextjs.org/) project to create a simplified version of terra finder [`terra-finder`](https://finder.terra.money/).

Video preview:

https://user-images.githubusercontent.com/3432050/166129438-f9db56ef-8233-4da6-aa1b-3a061261dff4.mov


## Functionalities

1. A search page similar to https://finder.terra.money/
2. A simplified "view" page. it should show the Address section, Coins section, Tokens section, and Transactions.
3. For the Transactions section, each row only needs to include Tx hash , Type , Block, Timestamp, and Fee. The Tx hash doesn't need to be a link (so you do NOT need to create a page to show the details of the transaction)
4. Connect to the Terra mainnet APIs

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Routes

Search Home Page Route: http://localhost:3000/
Account Detail Page Route: http://localhost:3000/mainnet/address/terra1a8k3jyv3wf6k3zngza5h6srrxcckdf7zv90p6u

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Technical Decision Highlights

1. Each components and pages are break down a reusable modules
1. This is a typesafe project, it will help us to catch schema bugs easily.
1. Level Next.js 12, so we can have easy next router and fast fresh, it make local dev experiences much better.

## TODOS

This is only a simplified version of terra finder, to make it production ready, we can consider followings:

1. Using video as seach page background
1. Use Jest unit tests
1. Use eslint for format code styles

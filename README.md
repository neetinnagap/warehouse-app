# Warehousing Application

## Setting up project from scratch

### Backend Creation (Express, Typescript and Prisma)

```bash
npm install --save express cors

npm install prisma typescript ts-node @types/node --save-dev

npx prisma init
```

For formatting your prisma schema ( and fixing errors? )

```bash
npx prisma format
```

For migrating changes to database

```bash
npx prisma migrate dev --name init
```

For installing prisma client and generating prisma client based on scheme.prisma file

```bash
npm install @prisma/client
```

After making changes to schema.prisma in future run following command to re-generate prisma client

```bash
npx prisma generate
```

### Frontend Creation (Next App, Typescript and Tailwind)

```bash
npx create-next-app warehouse --ts

npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

npx tailwindcss init -p
```

Modify tailwind.config.js

```javascript
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

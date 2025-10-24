# JoMedeiros.github.io

Meu site pessoal feito com [Next.js](https://nextjs.org/) com o comando [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# TODO

- [ ] Adicionar Seções no currículo
    - [ ] Formação
    - [ ] Formação Complementar
    - [ ] Soft Skills
    - [ ] Interesses
- [ ] Transformar o header em um componente React
- [ ] Gerar testes e adicionar o job de testes ao `.github/workflows`
- [ ] Configurar Docker
- [ ] Corrigir as rotas (`/components/Footer` está acessível, por exemplo)

## Requisitos

- yarn ou npm
- node (versão >=20.9.0)

Para instalar a versão mais recente do node, coso tenha o npm já instalado, executte o comando:

```bash
sudo npm install n -g
```

Depois para instalar a versão mais recente estável:

```bash
n stable
```

Ou a versão mais recente de teste:

```bash
n latest
```

## Como executar

Antes de tudo instale as dependências com:

```bash
npm install
```

Subir o servidor como ambiente `dev`:

```bash
npm run dev
```

O servidor irá executar no endereço [http://localhost:3000](http://localhost:3000).

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

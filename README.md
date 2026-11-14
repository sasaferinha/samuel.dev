# samuel.dev

Site de apresentação de serviços de design e desenvolvimento web, com projetos selecionados, serviços, etapas do trabalho, perguntas frequentes e contato.

## O que há no site

- Apresentação da marca com animação de entrada.
- Galeria de projetos.
- Serviços organizados em seções expansíveis.
- Processo de trabalho e perguntas frequentes.
- Contato por e-mail e navegação entre as seções da página.
- Tratamento da preferência de movimento reduzido na introdução e nos efeitos de rolagem.

## Stack

React, TypeScript e APIs do Next.js, com desenvolvimento e build via [vinext](https://github.com/cloudflare/vinext). A configuração do projeto inclui suporte opcional a Cloudflare D1 e Drizzle.

## Onde editar

| Arquivo | Conteúdo |
| --- | --- |
| [`app/page.tsx`](app/page.tsx) | Textos, serviços, projetos, perguntas frequentes, contato e comportamento da página. |
| [`app/globals.css`](app/globals.css) | Estilos, layout e animações. |
| [`app/layout.tsx`](app/layout.tsx) | Idioma, fontes, título, descrição e metadados sociais. |
| [`public/`](public/) | Arquivos estáticos, como o favicon. |
| [`package.json`](package.json) | Dependências e comandos do projeto. |

## Desenvolvimento local

Use Node.js **22.13.0 ou superior** e um terminal compatível com os scripts do projeto.

```bash
git clone https://github.com/sasaferinha/samuel.dev.git
cd samuel.dev
npm ci
npm run dev
```

Abra o endereço exibido pelo servidor no terminal. Se já tiver clonado o projeto, execute os comandos de instalação e desenvolvimento dentro da pasta existente.

Comandos disponíveis para conferir uma alteração:

```bash
npm run lint
npm run build
```

O script `npm test` ainda contém verificações do esqueleto original do starter; elas precisam ser adaptadas ao portfólio atual antes de servirem como validação desta página.

## Referência da infraestrutura

As seções abaixo preservam as instruções do starter usado como base para o projeto.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

This starter does not use `wrangler.jsonc`.

## Included Shape

- edit site code under `app/`
- `.openai/hosting.json` declares optional Sites D1 and R2 bindings
- `vite.config.ts` simulates declared bindings for local development
- `db/schema.ts` starts intentionally empty
- `examples/d1/` contains an optional D1 example surface
- `drizzle.config.ts` supports local migration generation when needed

## Workspace Auth Headers

Signed-in visitors receive both `oai-authenticated-user-id` and `oai-authenticated-user-email`. Private Sites require every visitor to sign in; public Sites may also have anonymous visitors, for whom neither header is present.

The user ID is stable for the same user on the same Site and different across Sites. Email and name are intended for display or contact purposes.

SIWC-authenticated workspace sites may also receive
`oai-authenticated-user-full-name` when the user's SIWC profile has a non-empty
`name` claim. The full-name value is percent-encoded UTF-8 and is accompanied by
`oai-authenticated-user-full-name-encoding: percent-encoded-utf-8`.

Treat the full name as optional and fall back to email when it is absent:

```tsx
import { headers } from "next/headers";

export default async function Home() {
  const requestHeaders = await headers();
  const userId = requestHeaders.get("oai-authenticated-user-id");
  const email = requestHeaders.get("oai-authenticated-user-email");
  const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
  const fullName =
    encodedFullName &&
    requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
      "percent-encoded-utf-8"
      ? decodeURIComponent(encodedFullName)
      : null;

  const displayName = fullName ?? email;
  // ...
}
```

## Optional Dispatch-Owned ChatGPT Sign-In

Import the ready-to-use helpers from `app/chatgpt-auth.ts` when the site needs
optional or required ChatGPT sign-in:

- Use `getChatGPTUser()` for optional signed-in UI.
- Use `requireChatGPTUser(returnTo)` for server-rendered pages that should send
  anonymous visitors through Sign in with ChatGPT.
- Use `chatGPTSignInPath(returnTo)` and `chatGPTSignOutPath(returnTo)` for
  browser links or actions.
- Pass a same-origin relative `returnTo` path for the destination after sign-in
  or sign-out. The helper validates and safely encodes it.
- Mark protected pages with `export const dynamic = "force-dynamic"` because
  they depend on per-request identity headers.

Dispatch owns `/signin-with-chatgpt`, `/signout-with-chatgpt`, `/callback`, the
OAuth cookies, and identity header injection. Do not implement app routes for
those reserved paths. Routes that do not import and call the helper remain
anonymous-compatible.

SIWC establishes identity only; it does not prove workspace membership. Use the
Sites hosting platform's access policy controls for workspace-wide restrictions,
or enforce explicit server-side membership or allowlist checks.

Use SIWC for account pages, user-specific dashboards, saved records, and write
actions tied to the current ChatGPT user. Leave public content anonymous.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output
- `npm test`: build the starter and verify its rendered loading skeleton
- `npm run db:generate`: generate Drizzle migrations after schema changes

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Drizzle D1 Guide](https://orm.drizzle.team/docs/get-started/d1-new)

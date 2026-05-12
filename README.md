# Area N

Landing comercial para Area N, empresa de domotica residencial en CABA y GBA.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Resend para el formulario de contacto

## Desarrollo

```bash
npm run dev
```

Abrir `http://localhost:3000`.

## Variables de entorno

Copiar `.env.example` a `.env.local` y completar:

```bash
NEXT_PUBLIC_SITE_URL=https://area-n.com
CONTACT_TO_EMAIL=area.n@gmail.com
RESEND_API_KEY=
RESEND_FROM_EMAIL=Area N <contacto@area-n.com>
```

Para envio real de mails, `RESEND_FROM_EMAIL` debe usar un dominio verificado en Resend.

## Scripts

```bash
npm run lint
npm run build
```

## Contacto

- Web: https://area-n.com
- Email: area.n@gmail.com
- WhatsApp: +54 9 11 2835-1181

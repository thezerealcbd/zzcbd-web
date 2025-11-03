# zzcbd-web

Proyecto **Vite + React** preparado para desplegar en **Netlify**.

## Estructura
- `public/` - archivos públicos (index.html, favicon, _redirects)
- `src/` - código fuente React
- `netlify.toml` - configuración Netlify

## Comandos
Instala dependencias y lanza en local:
```bash
npm install
npm run dev
```

Generar build de producción:
```bash
npm run build
```

Al conectar con Netlify (GitHub), configura:
- Build command: `npm run build`
- Publish directory: `dist`

Netlify Forms está habilitado. El formulario tiene `name="Contacto ZZ_CBD"` y se guardarán las entradas en tu panel de Netlify.


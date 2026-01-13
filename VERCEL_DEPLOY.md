# Guía de Despliegue en Vercel

Este proyecto está configurado y listo para desplegarse en Vercel.

## Archivos de Configuración Creados

- `vercel.json` - Configuración de rutas, headers y cache
- `package.json` - Configuración del proyecto Node.js
- `.vercelignore` - Archivos a ignorar en el despliegue
- `README.md` - Documentación general del proyecto

## Pasos para Desplegar

### Método 1: Desde GitHub (Recomendado)

1. **Asegúrate de que todos los cambios estén en GitHub:**
   ```bash
   git add .
   git commit -m "Configuración para Vercel"
   git push origin main
   ```

2. **Ve a [Vercel](https://vercel.com) y haz login con GitHub**

3. **Importa el proyecto:**
   - Click en "Add New Project"
   - Selecciona el repositorio `QAntonio19/gcl-global`
   - Vercel detectará automáticamente la configuración

4. **Configuración del proyecto:**
   - Framework Preset: Other
   - Root Directory: `./` (raíz del proyecto)
   - Build Command: (dejar vacío, es un sitio estático)
   - Output Directory: `./` (raíz del proyecto)

5. **Click en "Deploy"**

### Método 2: Desde Vercel CLI

1. **Instala Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login en Vercel:**
   ```bash
   vercel login
   ```

3. **Despliega el proyecto:**
   ```bash
   vercel
   ```

4. **Para producción:**
   ```bash
   vercel --prod
   ```

## Configuración de Dominio Personalizado

Si quieres usar un dominio personalizado (ej: `gcl-global.com`):

1. Ve a la configuración del proyecto en Vercel
2. Ve a "Domains"
3. Agrega tu dominio
4. Sigue las instrucciones para configurar los DNS

## Verificación Post-Despliegue

Después del despliegue, verifica que todas las rutas funcionen:

- ✅ `/` - Página principal
- ✅ `/contact-us/` - Página de contacto
- ✅ `/growth-driven-design/` - Growth Driven Design
- ✅ `/inbound-marketing/` - Inbound Marketing
- ✅ `/wave-of-social-media-overwhelms-digital-marketing-in-2018/` - Blog post 1
- ✅ `/how-can-a-growth-driven-design-optimize-your-website/` - Blog post 2
- ✅ `/inbound-marketing-a-coming-of-age-technique-loved-by-all/` - Blog post 3

## Características Configuradas

### Rutas
- Todas las rutas están configuradas en `vercel.json`
- Las rutas funcionan con y sin trailing slash (`/`)
- Redirecciones automáticas a `index.html` en cada directorio

### Headers de Seguridad
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`

### Cache
- Assets estáticos (CSS, JS, imágenes, fuentes) con cache de 1 año
- HTML sin cache para facilitar actualizaciones

## Troubleshooting

### Problema: Las rutas no funcionan
**Solución:** Verifica que `vercel.json` esté en la raíz del proyecto y que las rutas estén correctamente configuradas.

### Problema: Las imágenes no cargan
**Solución:** Verifica que las rutas en los archivos HTML usen paths relativos o absolutos empezando con `/`.

### Problema: Error 404 en algunas páginas
**Solución:** Asegúrate de que cada directorio tenga un archivo `index.html` y que las rutas en `vercel.json` estén correctas.

## Actualización de URLs Canonical

Si después del despliegue quieres actualizar las URLs canonical para usar tu dominio de Vercel, puedes usar variables de entorno o actualizar manualmente los archivos HTML.

Las URLs canonical actualmente usan paths relativos (`/ruta/`) que funcionarán con cualquier dominio.


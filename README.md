# GCL Global Website

Sitio web estático de GCL Global.

## Estructura del Proyecto

```
gcl-global/
├── index.html                          # Página principal
├── contact-us/                         # Página de contacto
├── growth-driven-design/               # Página de Growth Driven Design
├── inbound-marketing/                  # Página de Inbound Marketing
├── wave-of-social-media-overwhelms-digital-marketing-in-2018/  # Blog post
├── how-can-a-growth-driven-design-optimize-your-website/       # Blog post
├── inbound-marketing-a-coming-of-age-technique-loved-by-all/  # Blog post
├── css/                                # Estilos
├── js/                                 # JavaScript
├── images/                             # Imágenes
├── fonts/                              # Fuentes
├── vercel.json                         # Configuración de Vercel
└── package.json                        # Configuración del proyecto
```

## Despliegue en Vercel

### Opción 1: Desde GitHub (Recomendado)

1. Conecta tu repositorio de GitHub con Vercel
2. Vercel detectará automáticamente el proyecto y lo desplegará
3. Las rutas están configuradas en `vercel.json` para funcionar correctamente

### Opción 2: Desde la CLI de Vercel

```bash
# Instalar Vercel CLI (si no está instalado)
npm i -g vercel

# Desplegar
vercel

# Para producción
vercel --prod
```

## Rutas Disponibles

- `/` - Página principal
- `/contact-us/` - Página de contacto
- `/growth-driven-design/` - Growth Driven Design
- `/inbound-marketing/` - Inbound Marketing
- `/wave-of-social-media-overwhelms-digital-marketing-in-2018/` - Blog post
- `/how-can-a-growth-driven-design-optimize-your-website/` - Blog post
- `/inbound-marketing-a-coming-of-age-technique-loved-by-all/` - Blog post

## Configuración

El archivo `vercel.json` contiene:
- Configuración de rutas para todas las páginas
- Headers de seguridad
- Cache headers para assets estáticos (CSS, JS, imágenes, fuentes)

## Desarrollo Local

Para ejecutar el proyecto localmente, puedes usar cualquier servidor HTTP estático:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (con http-server)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Luego visita `http://localhost:8000` en tu navegador.

## Notas

- Todas las rutas internas usan paths absolutos (empezando con `/`)
- Las imágenes, CSS y JS están organizados en carpetas separadas
- El sitio es completamente estático y no requiere backend


# Portafolio

Portafolio, Backend Developer. Reúne proyectos, experiencia, tecnologías y formas de contacto en una interfaz oscura con acentos neón.

🌐 **Sitio:** [arnulfomo.github.io](https://arnulfomo.github.io/)  
💻 **GitHub:** [@ArnulfoMo](https://github.com/ArnulfoMo)  
✉️ **Correo:** [arnulfo05@gmail.com](mailto:arnulfo05@gmail.com)

## Tecnologías

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS

## Ejecutar el proyecto localmente

```bash
git clone https://github.com/ArnulfoMo/arnulfomo.github.io.git
cd arnulfomo.github.io
npm ci
npm run dev
```

La aplicación estará disponible en la dirección que indique Vite, normalmente `http://localhost:5173`.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Verifica TypeScript y genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la compilación de producción. |
| `npm run lint` | Ejecuta el análisis estático del código. |

## Personalizar el contenido

- Perfil, correo, CV y enlaces: `src/data/personal.ts`.
- Proyectos y enlaces de repositorio/demo: `src/data/projects.ts`.
- Imágenes de proyectos: guárdalas en `src/assets/`, impórtalas en `src/data/projects.ts` y asígnalas a la propiedad `image` del proyecto.

Ejemplo:

```ts
import projectImage from '../assets/mi-proyecto.jpg'

image: {
  src: projectImage,
  alt: 'Vista previa de mi proyecto',
}
```

## Despliegue en GitHub Pages

El workflow ubicado en `.github/workflows/deploy.yml` se ejecuta al hacer push a `main`. Instala dependencias con `npm ci`, genera `dist/` con `npm run build` y publica ese resultado en GitHub Pages.

La aplicación usa rutas con hash (`/#/proyectos`) para que la navegación funcione correctamente en GitHub Pages, incluso al actualizar la página.

## Estructura principal

```text
src/
├── assets/       # Imágenes y recursos visuales
├── components/   # Componentes reutilizables
├── data/         # Información editable del portafolio
├── pages/        # Vistas principales
└── App.tsx       # Rutas de la aplicación
```

## Licencia

Uso personal. Todos los derechos reservados a Arnulfo Moreno Melara.

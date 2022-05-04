import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
// import generatedRoutes from '~pages'

import generatedRoutes from 'virtual:generated-pages'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
// import '@unocss/reset/tailwind.css'
import './styles/main.css'
// import 'uno.css'

import Protium from '@protob/protium'
import '@protob/protium/dist/protium.css'
import '@protob/protium/dist/protium-full-vars.css'
import FontAwesomeIcon from './config/icons'
// import { createPinia } from 'pinia'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    ctx.app.component('vue-fontawesome', FontAwesomeIcon)
    ctx.app.use(
      Protium,
      {
        iconComponent: 'vue-fontawesome',
        iconPack: 'fas',
      },
    )
    // ctx.app.use(createPinia())

    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
  },
)

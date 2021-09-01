import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _431d7427 = () => interopDefault(import('../pages/client.vue' /* webpackChunkName: "pages/client" */))
const _1586b526 = () => interopDefault(import('../pages/client/charts.vue' /* webpackChunkName: "pages/client/charts" */))
const _b9be8fc0 = () => interopDefault(import('../pages/client/download.vue' /* webpackChunkName: "pages/client/download" */))
const _d7e966bc = () => interopDefault(import('../pages/client/edit.vue' /* webpackChunkName: "pages/client/edit" */))
const _2aaffea6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/client",
    component: _431d7427,
    name: "client",
    children: [{
      path: "charts",
      component: _1586b526,
      name: "client-charts"
    }, {
      path: "download",
      component: _b9be8fc0,
      name: "client-download"
    }, {
      path: "edit",
      component: _d7e966bc,
      name: "client-edit"
    }]
  }, {
    path: "/",
    component: _2aaffea6,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

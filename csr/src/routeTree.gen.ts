/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DetailIdImport } from './routes/detail.$id'

// Create Virtual Routes

const UpcomingLazyImport = createFileRoute('/upcoming')()
const TopRatedLazyImport = createFileRoute('/top-rated')()
const PopularLazyImport = createFileRoute('/popular')()
const NowPlayingLazyImport = createFileRoute('/now-playing')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const UpcomingLazyRoute = UpcomingLazyImport.update({
  path: '/upcoming',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/upcoming.lazy').then((d) => d.Route))

const TopRatedLazyRoute = TopRatedLazyImport.update({
  path: '/top-rated',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/top-rated.lazy').then((d) => d.Route))

const PopularLazyRoute = PopularLazyImport.update({
  path: '/popular',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/popular.lazy').then((d) => d.Route))

const NowPlayingLazyRoute = NowPlayingLazyImport.update({
  path: '/now-playing',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/now-playing.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const DetailIdRoute = DetailIdImport.update({
  path: '/detail/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/now-playing': {
      id: '/now-playing'
      path: '/now-playing'
      fullPath: '/now-playing'
      preLoaderRoute: typeof NowPlayingLazyImport
      parentRoute: typeof rootRoute
    }
    '/popular': {
      id: '/popular'
      path: '/popular'
      fullPath: '/popular'
      preLoaderRoute: typeof PopularLazyImport
      parentRoute: typeof rootRoute
    }
    '/top-rated': {
      id: '/top-rated'
      path: '/top-rated'
      fullPath: '/top-rated'
      preLoaderRoute: typeof TopRatedLazyImport
      parentRoute: typeof rootRoute
    }
    '/upcoming': {
      id: '/upcoming'
      path: '/upcoming'
      fullPath: '/upcoming'
      preLoaderRoute: typeof UpcomingLazyImport
      parentRoute: typeof rootRoute
    }
    '/detail/$id': {
      id: '/detail/$id'
      path: '/detail/$id'
      fullPath: '/detail/$id'
      preLoaderRoute: typeof DetailIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  AboutLazyRoute,
  NowPlayingLazyRoute,
  PopularLazyRoute,
  TopRatedLazyRoute,
  UpcomingLazyRoute,
  DetailIdRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/about",
        "/now-playing",
        "/popular",
        "/top-rated",
        "/upcoming",
        "/detail/$id"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
    "/about": {
      "filePath": "about.lazy.jsx"
    },
    "/now-playing": {
      "filePath": "now-playing.lazy.jsx"
    },
    "/popular": {
      "filePath": "popular.lazy.jsx"
    },
    "/top-rated": {
      "filePath": "top-rated.lazy.jsx"
    },
    "/upcoming": {
      "filePath": "upcoming.lazy.jsx"
    },
    "/detail/$id": {
      "filePath": "detail.$id.jsx"
    }
  }
}
ROUTE_MANIFEST_END */

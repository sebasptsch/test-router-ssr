/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TestImport } from './routes/test'
import { Route as NoTitleImport } from './routes/no-title'
import { Route as HelloImport } from './routes/hello'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const TestRoute = TestImport.update({
  path: '/test',
  getParentRoute: () => rootRoute,
} as any)

const NoTitleRoute = NoTitleImport.update({
  path: '/no-title',
  getParentRoute: () => rootRoute,
} as any)

const HelloRoute = HelloImport.update({
  path: '/hello',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/hello': {
      preLoaderRoute: typeof HelloImport
      parentRoute: typeof rootRoute
    }
    '/no-title': {
      preLoaderRoute: typeof NoTitleImport
      parentRoute: typeof rootRoute
    }
    '/test': {
      preLoaderRoute: typeof TestImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  HelloRoute,
  NoTitleRoute,
  TestRoute,
])

/* prettier-ignore-end */
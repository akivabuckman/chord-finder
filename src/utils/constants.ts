import { lazy } from 'react';

export const routeOptions = [
    {
      id: 1,
      path: '/dashboard',
      component: lazy(() => import('@/pages/ChordFinder')),
    },
  ]
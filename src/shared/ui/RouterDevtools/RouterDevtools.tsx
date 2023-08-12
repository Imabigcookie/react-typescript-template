import React from 'react';

export const RouterDevtools = import.meta.env.MODE === 'production'
  ? () => null // Render nothing in production
  : React.lazy(
    () => import('@tanstack/router-devtools')
      .then((res) => ({
        default: res.TanStackRouterDevtools,
      })),
  );

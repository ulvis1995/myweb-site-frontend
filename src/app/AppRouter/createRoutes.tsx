import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute, TRoute } from '.';

export const createRoutes = (configRoutes: TRoute[]) =>
  configRoutes.map((page: TRoute) => {
    const { id, path, element: Element, children, isPrivate } = page;
    const route = (
      <Route key={id} path={path} element={<Element />}>
        {children && createRoutes(children)}
      </Route>
    );
    return isPrivate ? (
      <Route key={id} element={<PrivateRoute />}>
        {route}
      </Route>
    ) : (
      route
    );
  });

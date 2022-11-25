import React from 'react';
import { Routes } from 'react-router-dom';
import { configRoutes, createRoutes } from '.';

export const AppRouter = () => <Routes>{createRoutes(configRoutes)}</Routes>;

import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../pages/home';
import Dashboard from '../pages/dashboard';
import NotFound from '../pages/not-found';
import MainLayout from '../layouts/MainLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'dashboard',
				element: <Dashboard />,
			},
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

export default router;

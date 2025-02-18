import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import LoadingSpinner from '../components/LoadingSpinner';

// Lazy load components
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<LoadingSpinner />}>
						<Home />
					</Suspense>
				),
			},
			{
				path: 'about',
				element: (
					<Suspense fallback={<LoadingSpinner />}>
						<About />
					</Suspense>
				),
			},
			{
				path: 'dashboard',
				element: (
					<Suspense fallback={<LoadingSpinner />}>
						<Dashboard />
					</Suspense>
				),
			},
			{
				path: '*',
				element: (
					<Suspense fallback={<LoadingSpinner />}>
						<NotFound />
					</Suspense>
				),
			},
		],
	},
]);

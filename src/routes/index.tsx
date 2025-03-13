import { type RouteConfig, route } from '@react-router/dev/routes';

export default [
	route('/', '@/page/home'),
	route('/dashboard', '@/page/dashboard'),
] satisfies RouteConfig;

import { Outlet } from 'react-router';
import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar';

const MainLayout = () => {
	return (
		<div className='min-h-screen flex flex-row gap-8 py-4 px-6'>
			<Sidebar />
			<main className='flex-1'>
				<Navbar />
				<Outlet />
			</main>
		</div>
	);
};

export default MainLayout;

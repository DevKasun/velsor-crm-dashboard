import { Outlet } from 'react-router';
import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';

const MainLayout = () => {
	return (
		<div className='min-h-screen'>
			<Navbar />
			<main>
				<Sidebar />
				<Outlet />
			</main>
		</div>
	);
};

export default MainLayout;

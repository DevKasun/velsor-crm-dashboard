import { Outlet } from 'react-router';
import Navbar from '../components/navbar/navbar';

const MainLayout = () => {
	return (
		<div>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default MainLayout;

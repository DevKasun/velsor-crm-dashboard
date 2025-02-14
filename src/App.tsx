import Dashboard from './components/dashboard/dashboard';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import ContentLayout from './layout/content-layout';
import Layout from './layout/layout';

function App() {
	return (
		<Layout className='min-h-screen bg-black pt-4 pl-8 pr-4'>
			<Navbar />
			<ContentLayout>
				<Sidebar />
				<Dashboard />
			</ContentLayout>
		</Layout>
	);
}

export default App;

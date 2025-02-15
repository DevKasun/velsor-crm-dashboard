// First install react-router-dom: npm install react-router-dom @types/react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import ContentLayout from './layout/content-layout';
import Layout from './layout/layout';
import Home from './pages/home/home';
import Settings from './pages/settings/settings';

function App() {
	return (
		<Router>
			<Layout className='min-h-screen bg-black pt-4 pl-8 pr-4'>
				<Navbar />
				<ContentLayout>
					<Sidebar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/settings" element={<Settings />} />
					</Routes>
				</ContentLayout>
			</Layout>
		</Router>
	);
}

export default App;

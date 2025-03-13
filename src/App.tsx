// First install react-router-dom: npm install react-router-dom @types/react-router-dom
import React from 'react';
import { RouterProvider } from 'react-router';
import router from './routes';

function App() {
	return <RouterProvider router={router} />;
}

export default App;

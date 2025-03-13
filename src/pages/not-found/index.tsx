import React from 'react';

const NotFound = () => {
	return (
		<div className='min-h-[calc(100vh-200px)] flex flex-col items-center justify-center'>
			<h1 className='text-6xl font-bold text-gray-800 mb-4'>404</h1>
			<p className='text-xl text-gray-600 mb-8'>
				Oops! The page you're looking for doesn't exist.
			</p>
			<a
				href='/'
				className='px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'
			>
				Go Back Home
			</a>
		</div>
	);
};

export default NotFound;

import './LoadingSpinner.css';

interface LoadingSpinnerProps {
	size?: 'small' | 'medium' | 'large';
	color?: string;
}

const LoadingSpinner = ({
	size = 'medium',
	color = '#3B82F6',
}: LoadingSpinnerProps) => {
	const sizeMap = {
		small: 'w-4 h-4',
		medium: 'w-8 h-8',
		large: 'w-12 h-12',
	};

	return (
		<div className='flex justify-center items-center'>
			<div
				className={`${sizeMap[size]} animate-spin rounded-full border-4 border-solid border-t-transparent`}
				style={{
					borderColor: `${color} transparent transparent transparent`,
				}}
				role='status'
				aria-label='loading'
			/>
		</div>
	);
};

export default LoadingSpinner;

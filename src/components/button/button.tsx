import { Link } from 'react-router';

interface ButtonProps {
	to: string;
	className: string;
	children: React.ReactNode;
}

const Button = ({ to, className, children }: ButtonProps) => {
	return (
		<Link
			to={to}
			className={`bg-dark-button-bg px-4 py-2 rounded-full ${className}`}
		>
			{children}
		</Link>
	);
};

export default Button;

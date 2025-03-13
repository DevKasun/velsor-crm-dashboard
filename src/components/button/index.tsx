import React from 'react';
import { Link } from 'react-router';

interface ButtonProps {
	to?: string;
	className?: string;
	children: React.ReactNode;
	isIconButton?: boolean;
	onClick?: () => void;
}

const Button = ({
	to,
	className,
	children,
	isIconButton = false,
	onClick,
}: ButtonProps) => {
	const baseClasses = isIconButton
		? 'bg-dark-button-bg text-white rounded-full flex items-center justify-center'
		: 'bg-dark-button-bg text-white px-4 py-2 rounded-full max-h-[32px] text-sm hover:bg-white hover:text-dark-button-bg transition-colors flex items-center justify-center';

	if (!to) {
		return (
			<button
				onClick={onClick}
				className={`${baseClasses} ${className || ''}`}
			>
				{children}
			</button>
		);
	}

	return (
		<Link to={to} className={`${baseClasses} ${className || ''}`}>
			{children}
		</Link>
	);
};

export default Button;

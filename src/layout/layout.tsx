import { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
	className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
	return <main className={className}>{children}</main>;
}

import { ReactNode } from 'react';

interface ContentLayoutProps {
	children: ReactNode;
	className?: string;
}

export default function ContentLayout({
	children,
	className,
}: ContentLayoutProps) {
	return <div className={className}>{children}</div>;
}

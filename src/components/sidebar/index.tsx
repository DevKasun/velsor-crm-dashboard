import logo from '../../assets/icons/app-logo.svg';
import Button from '../button';

import Icon1 from '../../assets/icons/sidebar-icon-1.svg';
import Icon2 from '../../assets/icons/sidebar-icon-2.svg';
import Icon3 from '../../assets/icons/sidebar-icon-3.svg';
import Icon4 from '../../assets/icons/sidebar-icon-4.svg';
import Icon5 from '../../assets/icons/sidebar-icon-5.svg';
import Icon6 from '../../assets/icons/sidebar-icon-6.svg';
import Icon7 from '../../assets/icons/sidebar-icon-7.svg';
import Icon8 from '../../assets/icons/sidebar-icon-8.svg';
import Icon9 from '../../assets/icons/sidebar-icon-9.svg';
import Icon10 from '../../assets/icons/sidebar-icon-10.svg';
import Icon11 from '../../assets/icons/sidebar-icon-11.svg';
import Icon12 from '../../assets/icons/sidebar-icon-12.svg';

const menuItems = [
	{ to: '/', icon: Icon1 },
	{ to: '/', icon: Icon2 },
	{ to: '/', icon: Icon3 },
	{ to: '/', icon: Icon4 },
	{ to: '/', icon: Icon5 },
	{ to: '/', icon: Icon6 },
	{ to: '/', icon: Icon7 },
	{ to: '/', icon: Icon8 },
	{ to: '/', icon: Icon9 },
	{ to: '/', icon: Icon10 },
	{ to: '/', icon: Icon11 },
	{ to: '/', icon: Icon12 },
];

export default function Sidebar() {
	return (
		<div className=''>
			<div className='flex items-center justify-center h-[48px]'>
				<img src={logo} className='w-[36px] h-[36px' alt='logo' />
			</div>
			<menu className='flex flex-col gap-4 mt-8'>
				{menuItems.map((item) => (
					<Button
						className='bg-transparent'
						isIconButton
						to={item.to}
					>
						<img src={item.icon} alt='' />
					</Button>
				))}
			</menu>
		</div>
	);
}

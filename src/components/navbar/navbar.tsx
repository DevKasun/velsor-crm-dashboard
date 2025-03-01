import { Link } from 'react-router';
import logo from '../../assets/icons/app-logo.svg';
import settingsIcon from '../../assets/icons/settings.svg';
import bellIcon from '../../assets/icons/bell.svg';
import avatar from '../../assets/avatar.svg';

export default function Navbar() {
	return (
		<header className='py-4 px-6'>
			<nav className='container min-w-full flex items-center justify-between'>
				<Link to='/'>
					<img src={logo} alt='' />
				</Link>

				<menu className='flex items-center gap-4'>
					<Link
						to='/'
						className='bg-dark-button-bg px-4 py-2 rounded-full'
					>
						Overview
					</Link>
					<Link
						to='/'
						className='bg-dark-button-bg px-4 py-2 rounded-full'
					>
						Performance
					</Link>
					<Link
						to='/'
						className='bg-dark-button-bg px-4 py-2 rounded-full'
					>
						Activity
					</Link>
					<Link
						to='/'
						className='bg-dark-button-bg px-4 py-2 rounded-full'
					>
						Deals
					</Link>
				</menu>
				<menu className='flex items-center gap-4'>
					<Link
						to='/'
						className='flex items-center justify-center bg-dark-button-bg w-[48px] h-[48px] rounded-full'
					>
						<img src={settingsIcon} alt='settings_icon' />
					</Link>
					<Link
						to='/'
						className='flex items-center justify-center bg-dark-button-bg w-[48px] h-[48px] rounded-full'
					>
						<img src={bellIcon} alt='bell_icon' />
					</Link>
					<button className='bg-dark-button-bg w-[48px] h-[48px] rounded-full overflow-hidden'>
						<img src={avatar} alt='avatar' />
					</button>
				</menu>
			</nav>
		</header>
	);
}

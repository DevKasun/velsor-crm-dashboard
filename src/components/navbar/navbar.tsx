import { Link } from 'react-router';
import logo from '../../assets/icons/app-logo.svg';

export default function Navbar() {
	return (
		<header className='py-4 px-6'>
			<nav className='container mx-auto flex items-center justify-between'>
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
				
			</nav>
		</header>
	);
}

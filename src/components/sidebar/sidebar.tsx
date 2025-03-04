import logo from '../../assets/icons/app-logo.svg';

export default function Sidebar() {
	return (
		<div className=''>
			<div className='flex items-center justify-center h-[48px]'>
				<img src={logo} className='w-[36px] h-[36px' alt='logo' />
			</div>
		</div>
	);
}

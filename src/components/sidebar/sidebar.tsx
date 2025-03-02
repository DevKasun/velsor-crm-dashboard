import logo from '../../assets/icons/app-logo.svg';

export default function Sidebar() {
	return (
		<div className='w-9 py-4 px-6'>
			<div>
				<img src={logo} alt='logo' />
			</div>
		</div>
	);
}

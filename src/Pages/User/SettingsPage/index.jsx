import HeaderUser from "../../../Components/HeaderUserPage";
import DetailAccount from "./DetailAccount";
import LogoutAdmin from "./LogoutAdmin";

const SettingsUser = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<HeaderUser title='Settings' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<DetailAccount />
				<LogoutAdmin />
			</main>
		</div>
	);
};
export default SettingsUser;

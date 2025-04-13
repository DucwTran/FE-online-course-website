import HeaderAdmin from "../../../Components/HeaderAdminPage";
// import DetailAccount from "./DetailAccount";
import LogoutAdmin from "./LogoutAdmin";

const SettingsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<HeaderAdmin title='Settings' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* <DetailAccount /> */}
				<LogoutAdmin />
			</main>
		</div>
	);
};
export default SettingsPage;

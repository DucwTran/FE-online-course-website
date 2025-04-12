import HeaderAdmin from "../../../Components/HeaderAdminPage";
import UsersTable from "./UsersTable";

const OverviewAdmin = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<HeaderAdmin title='Admins' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>

				<UsersTable />

			</main>
		</div>
	);
};
export default OverviewAdmin;

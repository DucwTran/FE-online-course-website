import HeaderAdmin from "../../../Components/HeaderAdminPage";
import CoursesTable from "./CoursesTable";


const OverviewCourse = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<HeaderAdmin title='Products' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<CoursesTable />
			</main>
		</div>
	);
};
export default OverviewCourse;

import HeaderAdmin from "../../../Components/HeaderAdminPage";
import OrdersTable from "./OrderTable";

function Orders() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <HeaderAdmin title="Orders" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <OrdersTable />
      </main>
    </div>
  );
}

export default Orders;

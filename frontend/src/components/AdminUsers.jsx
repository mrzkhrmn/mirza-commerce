import { useGetAllUsersQuery } from "../redux/api/userApiSlice";

export const AdminUsers = () => {
  //const { data: users, isLoading } = useGetAllUsersQuery();
  return (
    <div>
      <h1 className="text-3xl font-semibold text-primary-color">All Users</h1>
      <div>
        <div className="w-full border-t border-black mt-4">
          <table className="w-[1175px] mt-4 flex flex-col">
            <thead className="flex items-center justify-between  w-full text-xl border border-black py-2 px-32">
              <tr>Username</tr>
              <tr>Email</tr>
              <tr>IsAdmin</tr>
              <tr>Actions</tr>
            </thead>
            <tbody>
              <tr className="flex items-center justify-between w-full border border-black/50 py-2 px-4">
                <td className="flex items-center justify-center gap-2 w-1/4">
                  <span>Ahmet</span>
                </td>
                <td className="flex items-center justify-center mr-24">
                  ahmet@email.com$
                </td>
                <td className="flex items-center justify-center mr-24">
                  False
                </td>
                <td className="flex items-center justify-center mr-24">
                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="flex items-center justify-between w-full border border-black/50 py-2 px-4">
                <td className="flex items-center justify-center gap-2 w-1/4">
                  <span>Mehmet</span>
                </td>
                <td className="flex items-center justify-center mr-24">
                  mehmet@email.com$
                </td>
                <td className="flex items-center justify-center mr-24">
                  False
                </td>
                <td className="flex items-center justify-center mr-24">
                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="flex items-center justify-between w-full border border-black/50 py-2 px-4">
                <td className="flex items-center justify-center gap-2 w-1/4">
                  <span>Ayşe</span>
                </td>
                <td className="flex items-center justify-center mr-24">
                  ayse@email.com$
                </td>
                <td className="flex items-center justify-center mr-24">True</td>
                <td className="flex items-center justify-center mr-24">
                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

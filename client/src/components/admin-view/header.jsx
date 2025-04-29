import { AlignJustify, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/auth-slice";

function AdminHeader({ setOpen }) {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b">
  <Button onClick={() => setOpen(true)} className="lg:hidden sm:block text-blue-600">
    <AlignJustify />
    <span className="sr-only">Toggle Menu</span>
  </Button>
  <div className="flex flex-1 justify-end">
    <Button
      onClick={handleLogout}
      className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 shadow"
    >
      <LogOut />
      Logout
    </Button>
  </div>
</header>

  );
}

export default AdminHeader;
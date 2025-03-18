import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { useModalsStore } from "../../../store/modals/modals.store";
import { SidebarLinks, SidebarHeader } from ".";

export const Sidebar = () => {
  const { isAuth, userName } = useContext(AuthContext);
  const isSidebarOpen = useModalsStore((state) => state.isSidebarOpen);
  const closeSidebar = useModalsStore((state) => state.closeSidebar);

  return (
    <>
      {isSidebarOpen && (
        <div className="sidebar-backdrop" onClick={closeSidebar} />
      )}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <SidebarHeader />
        <nav className="sidebar-nav">
          <SidebarLinks isAuth={isAuth} userName={userName} />
        </nav>
      </div>
    </>
  );
};

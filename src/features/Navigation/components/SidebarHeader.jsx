import { useNavigate } from "react-router-dom";
import { useModalsStore } from "../../../store/modals/modals.store";
import { Button, TypewriterEffect } from "../../../components";

export const SidebarHeader = () => {
  const navigate = useNavigate();
  const closeSidebar = useModalsStore((state) => state.closeSidebar);

  return (
    <div className="sidebar-header">
      <div
        className="logo"
        onClick={() => {
          navigate("/");
          closeSidebar();
        }}
      >
        <TypewriterEffect text="Blog" speed={100} />
      </div>
      <Button text="×" onClick={closeSidebar} />
    </div>
  );
};

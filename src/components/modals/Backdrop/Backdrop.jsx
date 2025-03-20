import React from "react";
import { useModalsStore } from "../../../store/modals/modals.store";
import "./backdrop.style.css";

export const Backdrop = () => {
  const closeModal = useModalsStore((state) => state.closeModal);
  return <div className="backdrop" onClick={closeModal} />;
};

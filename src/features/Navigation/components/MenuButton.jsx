export const MenuButton = ({ onClick }) => {
  return (
    <button className="menu-button" onClick={onClick}>
      <span className="menu-icon"></span>
    </button>
  );
};

export default MenuButton;

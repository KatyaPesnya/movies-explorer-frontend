import React from "react";

function MenuButton(prors) {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  function handleToggleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }
  return <button className="menu-button" onClick={handleToggleMenu} />;
}

export default MenuButton;

import "./ToggleNav.css";

function ToggleNav({ callback }) {
  return (
    <button onClick={callback} className="ToggleNav">
      <i className="fa-solid fa-bars  fa-2xl"></i>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </button>
  );
}

export default ToggleNav;
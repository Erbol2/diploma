import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Drawer.css"

function Drawer({ open, toggle }) {
  const drawerClassNames = `Drawer ${open ? "open" : ""}`;

  let menuBtn = document.querySelectorAll('.NavItem a')
  let menu = document.querySelector('.Drawer')
  menuBtn.forEach(el => {
    el.addEventListener('click', function () {
      menu.classList.remove('open')
    })
  })

  return (
    <div className={drawerClassNames}>
      <div onClick={toggle} className="backdrop"></div>
      <div className="content">
        <Logo />
        <Nav />
      </div>
    </div>
  );
}

export default Drawer; 
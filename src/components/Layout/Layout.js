import "./Layout.css";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import CategoryList from "../CategoryList/CategoryList";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import Footer from "../Footer/Footer";
import ToggleNav from "../ToggleNav/ToggleNav";
import Drawer from "../Drawer/Drawer";
import { useState } from "react";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav />
        <ToggleNav callback={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />
        <CartLink />
        <Auth />
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>{
        props.children
      }</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

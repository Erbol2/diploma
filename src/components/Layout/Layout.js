import "./Layout.css";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import CategoryList from "../CategoryList/CategoryList";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav />
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
        <a href="https://youtu.be/dQw4w9WgXcQ">
          <i className="fa-brands fa-youtube fa-2xl" style={{ margin: "20px 0 0 100px"}}></i>
        </a>
      </footer>
    </div>
  );
}

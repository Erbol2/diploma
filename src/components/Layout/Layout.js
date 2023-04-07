import "./Layout.css";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import CategoryList from "../CategoryList/CategoryList";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header> 
        <Logo/>
        <Nav />
      </header>
      <aside>
        <CategoryList/>
      </aside>
      <main>{
        props.children
      }</main>
      <footer>Footer</footer>
    </div>
  );
}

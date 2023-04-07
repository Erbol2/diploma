import "./Layout.css";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header> 
        <Logo/>
        <Nav />
      </header>
      <aside>
        <nav>Nav Categories</nav>
      </aside>
      <main>{
        props.children
      }</main>
      <footer>Footer</footer>
    </div>
  );
}

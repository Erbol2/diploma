import Nav from "../Nav/Nav";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Nav/>
      </header>
      <aside>
        <nav>Nav Categories</nav>
      </aside>
      <main>{props.children}</main>
      <footer>Footer</footer>
    </div>);
}
export default function Header() {
  return (
    <header>
      <nav className="blue lighten-1">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">
            React shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#!">Repo</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

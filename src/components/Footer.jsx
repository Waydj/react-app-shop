export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="page-footer blue lighten-1">
      <div className="footer-copyright">
        <div className="container">
          © {year} Wayd
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/Waydj"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

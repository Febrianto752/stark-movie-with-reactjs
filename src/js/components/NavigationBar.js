const NavigationBar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
          <a href="/#" className="navbar-brand text-hero-clip">
            Stark Movie
          </a>
          <a
            href="/#"
            className="navbar-toggler"
            type="a"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </a>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a
                  href="/#trending"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  Trending
                </a>
              </li>
              <li className="nav-item">
                <a href="/#superhero" className="nav-link text-white">
                  Superhero
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;

const navbar = ({}) => {
  const factory = () => (
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#myNavbar"
        aria-controls="myNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="myNavbar">
        <a className="nav-link text-white" href="/">
          Home
        </a>
        <a className="nav-link text-white" href="/about">
          About Us
        </a>
      </div>
    </nav>
  );

  return <div>{factory()}</div>;
};

export default navbar;

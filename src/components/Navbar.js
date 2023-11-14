const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-4">
      <a class="navbar-brand ms-4" href="#"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav"></div>
      </div>
    </nav>
  );
};

export default Navbar;

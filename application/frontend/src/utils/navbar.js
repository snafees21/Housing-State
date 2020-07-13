const navbar = () => {
  const factory = () => (
    <nav className='navbar navbar-expand-md navbar-fixed-top justify-content-end navbar-light bg-primary'>
      <div className='navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <a>Team 5</a>
          </li>
        </ul>
      </div>
      <div class='ml-auto navbar-brand order-0'>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='.dual-collapse2'
        >
          <span class='navbar-toggler-icon' />
        </button>
      </div>
      <div className='navbar-collapse collapse w-100 order-2 dual-collapse2'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a className='nav-link text-white' href='/'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-white' href='/about'>
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );

  return <div>{factory()}</div>;
};

export default navbar;

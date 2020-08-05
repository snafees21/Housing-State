import { useAuth } from '../../utils/auth';

const navbar = () => {
  // will conditionally render login/sigup when no authTokens exist
  // and render Account when authTokens exist
  const { authTokens } = useAuth();

  return (
  <div className="navbar-light bg">
    <div className="header">
    <h1>Housing State </h1>
    <p>SFSU Software Engineering Project CSC 648-848, Summer 2020 Team 5. For Demonstration Only.</p>
    <div className="logo">
     <img src="https://raw.githubusercontent.com/CSC-648-SFSU/csc648-su20-team5/page-title-logo/application/frontend/src/assets/imgs/logo.jpg?token=AOPF5EZT72CMBRDXZFPQOKK7F6JFS" 
     width="80" height="73"></img> 
     </div>
     </div>
  

      <nav className='navbar navbar-expand-md navbar-fixed-top justify-content-end navbar-light bg'>
      <div className='ml-auto navbar-brand order-0'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='.dual-collapse2'
        >
          <span className='navbar-toggler-icon' />
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
            <a className='nav-link text-white' href='/post'>
              Post
            </a>
          </li>
          {authTokens && (
            <>
              <li className='nav-item'>
                <a className='nav-link text-white' href='/account'>
                  Account
                </a>
              </li>
            </>
          )}
          {!authTokens && (
            <>
              <li className='nav-item'>
                <a className='nav-link text-white' href='/login'>
                  Login
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-white' href='/signup'>
                  Sign Up
                </a>
              </li>
            </>
          )}
          <li className='nav-item'>
            <a className='nav-link text-white' href='/about'>
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  );
};

export default navbar;
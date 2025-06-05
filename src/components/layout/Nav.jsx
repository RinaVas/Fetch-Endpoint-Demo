import { NavLink } from 'react-router-dom';
import './Nav.scss';

function Nav(){
  return(
    <nav>
      <div className='navItem'>
        <NavLink to="/">Home</NavLink>
      </div>
      <div className='navItem'>
        <NavLink to="/modules">Modules</NavLink>
      </div>
      <div className='navItem'>
        <NavLink to="/students">Students</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
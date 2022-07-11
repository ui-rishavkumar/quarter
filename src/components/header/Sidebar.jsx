import React from 'react';
import './sidebar.css'
import logo from "./image/logo.png";
import { AiOutlineClose , AiOutlineSearch} from "react-icons/ai";
import { lists } from './header';

function Sidebar(props) {

  return (
    <>
    <div className={`${props.isOpen? `active sidebar__container`: `sidebar__container`}`}>
   
      <div className='sidebar__containers'>         
        <div className='sidebar--header-logo' >
        <div className="logo" >
              <a href="" >
                <img src={logo} alt=""></img>
              </a>
              <button className='close' onClick={props.ToggleSidebar}>
                <AiOutlineClose />
              </button>
            </div>
        </div>
        <div className='sidebar--serarchbar'>
            <form action=''>
                <input type="" placeholder="serach..." />
                <button className='serach'>
                    <AiOutlineSearch />
                </button>
            </form>
        </div>
        <div className='sidebar-menu'>
        <ul className="menu-list">
                {lists.map((item, index) => {
                  return (
                    <>
                      <li className="menu_list">
                       {/* <div>{item.menu}</div>
                       <div>{item.icon}</div> */}
                        <span>
                          {item.menu}</span> <span>{item.icon}</span>
                        
                      </li>
                    </>
                  );
                })}
              </ul>
        </div>
   </div>
     
  
    </div>


      {/* <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider> */}
    </>
  );
}

export default Sidebar;

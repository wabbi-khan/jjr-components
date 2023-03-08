import React, { useState } from 'react';
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
import { AiFillHome, AiTwotoneSetting } from 'react-icons/ai';
// import { BsCalendar2EventFill, BsBookmarkFill } from 'react-icons/bs';
// import { RiContactsFill } from 'react-icons/ri';
// import { BiCategory } from 'react-icons/bi';
// import { FaUsers } from 'react-icons/fa';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { MenusData } from '../data/data';
const Header = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="header">
      <div className="headerIcon"></div>
      <div className="headernName">
        <Link to={'/'}>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="navIcon">
        <HiOutlineBars3CenterLeft onClick={() => setIsShow(!isShow)} />
        <div>
          {isShow && (
            <motion.div
              className="sidebar"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
            >
              <div className="topHead">
                <span>Menu</span>
                <MdClose onClick={() => setIsShow(!isShow)} />
              </div>
              <table style={{ width: '100%' }}>
                {MenusData.map((item) => (
                  <tr className="py-5">
                    <td className={`icons ${item.class}`}>{item.icon}</td>
                    <td>
                      <span>
                        <Link to={item.linkUrl} target={item.newTab}>
                          {item.name}
                        </Link>
                      </span>
                    </td>
                  </tr>
                ))}
              </table>
              {/* <div className="menus">
                {MenusData.map((item, index) => (
                  <div className={`home ${item.className}`} key={index}>
                    <div>{item.icon}</div>
                    <span>
                      <Link to={item.linkUrl} target={item.newTab}>
                        {item.name}
                      </Link>
                    </span>
                  </div>
                ))}
              </div> */}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

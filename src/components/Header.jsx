import React, { useState } from 'react';
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
import { AiFillHome, AiTwotoneSetting } from 'react-icons/ai';
import { BsCalendar2EventFill } from 'react-icons/bs';
import { RiContactsFill } from 'react-icons/ri';
import { BiCategory } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="header">
      <div className="headerIcon"></div>
      <div className="headernName">
        <img src={Logo} alt="Logo" />
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

              <div className="menus">
                <div className="home">
                  <div>
                    <AiFillHome />
                  </div>
                  <span>
                    <Link to={'/'}>Home</Link>
                  </span>
                </div>
                <div className="home">
                  <div>
                    <BsCalendar2EventFill />
                  </div>
                  <span>
                    <Link to={'/events'}> Event Production</Link>
                  </span>
                </div>
                <div className="home">
                  <div>
                    <AiTwotoneSetting />
                  </div>
                  <span>Technology</span>
                </div>
                <div className="home">
                  <div>
                    <BiCategory />
                  </div>
                  <span>E-Catelog</span>
                </div>
                <div className="home">
                  <div>
                    <RiContactsFill />
                  </div>
                  <span>Contact</span>
                </div>{' '}
                <div className="home">
                  <div>
                    <FaUsers />
                  </div>
                  <span>
                    <Link to={'/OurPartners'}>Our Partners</Link>
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

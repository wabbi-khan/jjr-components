import React, { useState } from 'react';
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2';
import { MdClose, MdReviews } from 'react-icons/md';
import { motion } from 'framer-motion';
import { AiFillHome, AiTwotoneSetting } from 'react-icons/ai';
import { BsCalendar2EventFill, BsBookmarkFill } from 'react-icons/bs';
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
                  <span>
                    <Link to={'/technology'}>Technology</Link>
                  </span>
                </div>
                <div className="home">
                  <div>
                    <BiCategory />
                  </div>
                  <span>
                    <a
                      href="https://jjrnetwork.com/catalog2023/"
                      target={'blank'}
                    >
                      E-Catelog
                    </a>
                  </span>
                </div>
                <div className="home">
                  <div>
                    <BsBookmarkFill />
                  </div>
                  <span>
                    <Link to={'/about-us'}>About us</Link>
                  </span>
                </div>
                <div className="home">
                  <div>
                    <RiContactsFill />
                  </div>
                  <span>
                    <Link to={'/contact-us'}>Contact</Link>
                  </span>
                </div>
                <div className="home">
                  <div>
                    <FaUsers />
                  </div>
                  <span>
                    <Link to={'/OurPartners'}>Our Partners</Link>
                  </span>
                </div>
                <div className="home">
                  <div>
                    <MdReviews />
                  </div>
                  <span>
                    <Link to={'/testimonials'}>Testimonials</Link>
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

import React from 'react';
import './nav.css';
import { BiHomeAlt } from 'react-icons/bi';
import { HiOutlineUser } from 'react-icons/hi';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { MdOutlineMedicalServices } from 'react-icons/md';
import { MdOutlineMessage } from 'react-icons/md';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}>
        <BiHomeAlt />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <HiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BsFillJournalBookmarkFill />
      </a>
      <a href="#services">
        <MdOutlineMedicalServices />
      </a>
      <a href="#contact">
        <MdOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;

import React from 'react';
import { GrLinkedin } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa';
import { ImTwitter } from 'react-icons/im';

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/zico-permadi-8a1b2713a/"
        target="_blank"
        rel="noopener norefferer">
        <GrLinkedin />
      </a>
      <a
        href="https://github.com/zicoprmd"
        target="_blank"
        rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://twitter.com/zicoprmd"
        target="_blank"
        rel="noopener noreferrer">
        <ImTwitter />
      </a>
    </div>
  );
};

export default HeaderSocial;

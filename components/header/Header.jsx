import React from 'react';
import Link from 'next/link';

import '../header/header.scss';

const Header = () => (
  <header className="header">
    <Link href="/">
      <a className="header__logo">
        Oberbeer
      </a>
    </Link>
  </header>
);

export default Header;
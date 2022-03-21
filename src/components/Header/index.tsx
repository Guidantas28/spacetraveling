import Link from 'next/link';

import style from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={style.headerContainer}>
      <div className={style.headerContainer}>
        <Link href="/">
          <a>
            <img src="/logo.png" alt="logo" />
          </a>
        </Link>
      </div>
    </header>
  );
}

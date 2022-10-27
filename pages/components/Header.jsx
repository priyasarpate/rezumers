import { useState } from "react";
import Link from "next/link";
import style from '../../styles/Header.module.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    
    <div className={style.container}>
      <Link href="/" className={style.listItems}>Rezumers</Link>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link href="/" className={style.listItems}>Try for free</Link>
          {/* icons */}
        </li>
        <li className={style.listItem}>
          <Link href="/team" className={style.listItems}>Login</Link>
        </li>
      </ul>
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul onClick={()=>setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={style.menuItem}>
          <Link href="/" className={style.listItems}>Rezumers</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/team" className={style.listItems}>Try for free</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/team" className={style.listItems}>Login</Link>
        </li>
      </ul>
    </div>

  );
};

export default Header;

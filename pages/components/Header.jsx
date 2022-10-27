import { useState } from "react";
import Link from "next/link";
import style from '../../styles/Header.module.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    
    <div className={style.container}>
      <Link href="/">Rezumers</Link>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link href="/">Try for free</Link>
          {/* icons */}
        </li>
        <li className={style.listItem}>
          <Link href="/team">Login</Link>
        </li>
      </ul>
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul onClick={()=>setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={style.menuItem}>
          <Link href="/">Rezumers</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/team">Try for free</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/team">Login</Link>
        </li>
      </ul>
    </div>

  );
};

export default Header;

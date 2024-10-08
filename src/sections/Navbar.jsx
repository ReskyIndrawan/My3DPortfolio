import { useState } from "react";
import { navLinks } from "../constans";
import { useTranslation } from "react-i18next";
import DropDown from "../components/DropDown";

const NavItems = () => {
  const { t } = useTranslation();
  return (
    <ul className='nav-ul'>
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className='nav-li'>
          <a href={href} className='nav-link_a' onClick={() => {}}>
            {t(name)}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center justify-between py-5 mx-auto c-space'>
          <a
            href='/'
            className='text-neutral-400 font-bold text-xl hover:text-white transition-colors gap-2 flex items-center'>
            <img
              src='/assets/logo.png'
              alt='logo'
              className='w-10 h-10'
            />
            <p>{t("navbar.logo")}</p>
          </a>

          <DropDown />

          <button
            onClick={toggleMenu}
            className='text-netural-400 hover:text-white focus:outline-none sm:hidden flex'
            aria-label='Toggle Menu'>
            <img
              src={
                isOpen ? "./assets/close.svg" : "./assets/menu.svg"
              }
              alt='toggle'
              className='w-6 h-6 '
            />
          </button>

          <nav className='sm:flex hidden'>
            <NavItems />
          </nav>
        </div>
      </div>
      <div
        className={`nav-sidebar ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}>
        <nav className='p-5'>
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

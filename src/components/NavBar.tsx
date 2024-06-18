import logo from '../assets/react.svg';
import ThemeToggler from './ThemeToggler';

function NavBar() {
  return (
    <div className="sticky top-0 z-20 bg-base-100/80 md:py-4 navbar backdrop-blur-xl">
      <div className="container px-4 mx-auto md:px-0">
        <div className="flex flex-1 gap-3">
          <a className="duration-300 hover:scale-110" href="#address">
            <img src={logo} alt="Logo" />
          </a>

          <span className="text-2xl font-medium dark:text-white">Navbar</span>
        </div>
        <ThemeToggler />
      </div>
    </div>
  );
}

export default NavBar;

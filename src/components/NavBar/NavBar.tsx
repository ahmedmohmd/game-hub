import darkLogo from '../../assets/logo-dark.svg';
import lightLogo from '../../assets/logo-light.svg';
import ThemeToggler from './ThemeToggler';

function NavBar() {
  return (
    <div className="sticky top-0 z-30 bg-base-100/80 md:py-2 navbar backdrop-blur-xl">
      <div className="flex justify-between w-full px-4">
        <div className="flex items-center flex-1 gap-6">
          <a className="hidden duration-300 dark:inline-block hover:scale-110" href="#address">
            <img src={lightLogo} className="w-16 h-16" alt="Logo" />
          </a>
          <a className="inline-block duration-300 dark:hidden hover:scale-110" href="#address">
            <img src={darkLogo} className="w-16 h-16" alt="Logo" />
          </a>

          <span className="tracking-[1rem] md:inline hidden uppercase dark:text-white">
            game hub
          </span>
        </div>

        <ThemeToggler />
      </div>
    </div>
  );
}

export default NavBar;

import noGamesBlack from '../../../assets/no-games-black.svg';
import noGamesWhite from '../../../assets/no-games-white.svg';

const NoGamesIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-0 lg:translate-y-24 md:gap-3 items">
      <div>
        <img
          src={noGamesWhite}
          className="hidden w-40 h-40 dark:inline md:w-72 md:h-w-72"
          alt="No Results Illustration"
        />
        <img
          src={noGamesBlack}
          className="w-40 h-40 dark:hidden md:w-72 md:h-w-72"
          alt="No Results Illustration"
        />
      </div>
      <h5 className="font-sans text-xl ">Sorry, No Games Found!</h5>
    </div>
  );
};

export default NoGamesIcon;

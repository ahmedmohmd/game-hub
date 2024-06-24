import {
  AndroidLogo,
  AppleLogo,
  GameController,
  GoogleChromeLogo,
  Icon,
  LinuxLogo,
  SquaresFour,
} from '@phosphor-icons/react';
import { Platform } from '../types/games.types';

interface Props {
  platforms: Platform[];
}

const platformsIcons: { [key: string]: Icon } = {
  pc: SquaresFour,
  ios: AppleLogo,
  android: AndroidLogo,
  playstation: GameController,
  linux: LinuxLogo,
  mac: AppleLogo,
  web: GoogleChromeLogo,
  nintendo: GameController,
};

function PlatformsIcons({ platforms }: Props) {
  return (
    <div className="flex justify-start gap-2">
      {platforms.map(({ platform }: Platform) => {
        const PlatformIcon = platformsIcons[platform.slug];

        if (PlatformIcon) {
          return (
            <div
              key={platform.slug}
              className="rounded-md transition-all duration-100  dark:hover:text-white tooltip bg-transparent hover:text-slate-900 dark:bg-[#191e24] text-neutral-500  dark:text-neutral-300/90"
              data-theme="black"
              data-tip={platform.slug}
            >
              <PlatformIcon size={26} weight="fill" />
            </div>
          );
        }
      })}
    </div>
  );
}

export default PlatformsIcons;

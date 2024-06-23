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
    <div className="flex justify-start gap-1">
      {platforms.map(({ platform }: Platform) => {
        const PlatformIcon = platformsIcons[platform.slug];

        if (PlatformIcon) {
          return (
            <div
              key={platform.slug}
              className="p-1 rounded-md transition-all duration-100  dark:hover:text-white tooltip bg-neutral-200 hover:text-slate-900 dark:bg-[#191e24] text-gray-500 dark:text-slate-300"
              data-theme="black"
              data-tip={platform.slug}
            >
              <PlatformIcon size={24} weight="fill" />
            </div>
          );
        }
      })}
    </div>
  );
}

export default PlatformsIcons;

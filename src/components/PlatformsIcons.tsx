import {
  AndroidLogo,
  AppleLogo,
  GameController,
  GoogleChromeLogo,
  Icon,
  LinuxLogo,
  SquaresFour,
} from '@phosphor-icons/react';
import { Platform } from '../hooks/useFetchGames';

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
          return <PlatformIcon size={24} weight="fill" />;
        }
      })}
    </div>
  );
}

export default PlatformsIcons;

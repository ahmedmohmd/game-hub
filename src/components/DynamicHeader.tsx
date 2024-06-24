interface Props {
  genre: string;
  platform: number;
}

const platformMap: Record<number, string> = {
  1: 'PC',
  2: 'PlayStation',
  3: 'Xbox',
  4: 'iOS',
  5: 'Apple Macintosh',
  6: 'Linux',
  7: 'Nintendo',
  8: 'Android',
  9: 'Atari',
  10: 'Commodore / Amiga',
  11: 'SEGA',
  12: '3DO',
  13: 'Neo Geo',
  14: 'Web',
};

const DynamicHeader = ({ genre, platform }: Props) => {
  const headerText = `${!genre && !platform ? 'All' : ''} ${genre.substring(0, 1).toUpperCase() + genre.substring(1) || ''} ${platformMap[platform] || ''} Games`;

  return <h2 className="mb-8 text-4xl font-bold">{headerText}</h2>;
};

export default DynamicHeader;

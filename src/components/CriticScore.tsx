import { useEffect, useState } from 'react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const [badgeColor, setBadgeColor] = useState('');

  useEffect(() => {
    if (score > 75) {
      setBadgeColor('text-success');
    } else if (score >= 50) {
      setBadgeColor('text-warning');
    } else {
      setBadgeColor('text-error');
    }
  }, [score]);

  return <div className={`font-medium ${badgeColor}`}>{score}</div>;
};

export default CriticScore;

import { useEffect, useState } from 'react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const [badgeColor, setBadgeColor] = useState('');

  useEffect(() => {
    if (score > 75) {
      setBadgeColor('badge-success');
    } else if (score >= 50) {
      setBadgeColor('badge-warning');
    } else {
      setBadgeColor('badge-error');
    }
  }, [score]);

  return <div className={`badge py-3 font-medium ${badgeColor}`}>{score}</div> ;
};

export default CriticScore;

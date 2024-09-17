import CriticScore from './CriticScore';

interface Props {
  metacritic: number;
}

const GameScore = ({ metacritic }: Props) => {
  return (
    <section className="relative flex items-center justify-start transition-all duration-300 group-hover:opacity-100">
      <div className="flex-1 text-neutral-500 dark:text-neutral-300">Score</div>
      <CriticScore score={metacritic} />
    </section>
  );
};

export default GameScore;

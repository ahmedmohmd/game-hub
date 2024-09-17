interface Props {
  rating: number;
}

const GameRating = ({ rating }: Props) => {
  return (
    <section className="relative flex items-center justify-start transition-all duration-300 group-hover:opacity-100">
      <div className="flex-1 rounded-md text-neutral-500 dark:text-neutral-300">Rating:</div>
      <div className="flex gap-0.5 rating rating-sm cursor-default">
        {Array(Math.round(rating))
          .fill(0)
          .map(() => {
            return (
              <input
                key={Math.random()}
                type="text"
                className="bg-orange-400 cursor-default mask mask-star-2"
              />
            );
          })}
      </div>
    </section>
  );
};

export default GameRating;

interface Props {
  released: string;
}

const GameRelease = ({ released }: Props) => {
  return (
    <section className="relative flex items-center justify-start gap-4 transition-all duration-300 group-hover:opacity-100">
      <span className="flex-1 text-neutral-500 dark:text-neutral-300">release date: </span>
      <time dateTime={released} className="text-neutral-700 dark:text-white">
        {new Intl.DateTimeFormat('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }).format(new Date(released))}
      </time>
    </section>
  );
};

export default GameRelease;

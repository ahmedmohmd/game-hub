const GameCardSkeleton = () => {
  return (
    <div className="flex w-full flex-col gap-4 card xl:p-4 rounded-xl min-h-96 max-h-[384px]">
      <div className="w-full h-48 bg-base-300 dark:bg-neutral-800/75 skeleton" />
      <div className="w-1/3 h-4 bg-base-300 dark:bg-neutral-800/75 skeleton" />
      <div className="w-full h-4 bg-base-300 dark:bg-neutral-800/75 skeleton" />
      <div className="w-full h-4 bg-base-300 dark:bg-neutral-800/75 skeleton" />
    </div>
  );
};

export default GameCardSkeleton;

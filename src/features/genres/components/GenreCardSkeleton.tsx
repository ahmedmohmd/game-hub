const GenreCardSkeleton = () => {
  return (
    <div className="flex items-center justify-start w-full gap-3 p-1 rounded-xl">
      <div className="w-16 h-16 overflow-hidden bg-base-300 dark:bg-neutral-800/75 rounded-2xl skeleton" />
      <div className="flex flex-col gap-3 ">
        <span className="w-24 h-3 bg-base-300 dark:bg-neutral-800/75 skeleton" />
        <span className="w-32 h-3 bg-base-300 dark:bg-neutral-800/75 skeleton" />
      </div>
    </div>
  );
};

export default GenreCardSkeleton;

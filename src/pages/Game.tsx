import { useEffect, useState } from 'react';
import { useGetGameQuery } from '../features/games/services/games.service';
import { useParams } from 'react-router';
import GameRelease from '../features/games/components/GameRelease';
import GameScore from '../features/games/components/GameScore';
import GameRating from '../features/games/components/GameRating';
import PlatformsIcons from '../components/PlatformsIcons';
import CriticScore from '../features/games/components/CriticScore';

interface IGameResponse {
  id: number;
  background_image: string;
}

const GamePage = () => {
  const { id } = useParams();

  const { data: game } = useGetGameQuery(Number(id));
  const [count, setCount] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);

  console.log(game);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setCount(count + 10);
    });
  }, [count]);

  return (
    <div className="h-full">
      <article>
        <figure className="fixed top-0 left-0 w-full h-[600px]">
          <img
            className="object-cover object-left-top w-full h-full"
            src={game?.background_image}
            alt={game?.name}
          />

          <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-t dark:from-black from-white  from-50% dark:to-black/50 to-white/50" />
        </figure>
      </article>

      <section className="flex gap-8 justify-start w-full md:w-3/4  items-start relative md:top-24 md:left-24 z-20">
        <article className="relative top-0 overflow-hidden h-80 w-80 rounded-lg hidden md:block">
          <figure className="w-full h-full">
            <img
              className="object-cover object-left-top w-full h-full"
              src={game?.background_image}
              alt={game?.name}
            />
          </figure>
        </article>

        <section className="w-full px-4">
          <article className="flex justify-start flex-col">
            <section className="mb-6">
              <h1 className="text-3xl mb-4 mt-8 md:mt-0 dark:text-slate-100 text-zinc-900  font-bold">
                {game?.name}
              </h1>
              <p className={`dark:text-slate-200 text-zinc-800  ${!show ? 'line-clamp-3' : ''}`}>
                {game?.description_raw}
              </p>
            </section>

            <button className="btn btn-sm btn-warning inline w-fit" onClick={() => setShow(!show)}>
              {show ? 'Show less' : 'Show more'}
            </button>
          </article>
          <div className="overflow-x-auto px-0 mt-16">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="hover hover:!bg-zinc-900">
                  <th>1</th>
                  <td>release date</td>
                  <td>{game?.released}</td>
                </tr>

                {/* row 2 */}
                <tr className="hover hover:!bg-zinc-900">
                  <th>2</th>
                  <td>Rating</td>
                  <td className="flex gap-2">
                    <div className="flex gap-0.5 rating rating-sm cursor-default">
                      {Array(Math.round(game?.rating || 0))
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
                  </td>
                </tr>
                <tr className="hover hover:!bg-zinc-900">
                  <th>3</th>
                  <td>Game Score</td>
                  <td>
                    <CriticScore score={game?.metacritic || 0} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </div>
  );
};

export default GamePage;

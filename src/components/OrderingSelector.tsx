import { useContext } from 'react';
import { AppContext } from '../common/context/app-context';

const OrderingSelector = () => {
  const { handleOrdering } = useContext(AppContext);

  return (
    <select
      className="hidden border-none hover:bg-gray-200 dark:hover:bg-neutral-950 !outline-none bg-gray-100 md:block dark:bg-neutral-900 select transition-all duration-150 active:scale-[0.97]"
      onChange={(event) => handleOrdering(event.target.value)}
      defaultValue="Order By"
    >
      <option disabled>Order By</option>

      <option value="">All</option>

      <option value="name">Name</option>
      <option value="released">Released</option>
      <option value="added">Added</option>
      <option value="created">Created</option>
      <option value="updated">Updated</option>
      <option value="rating">Rating</option>
      <option value="metacritic">Metacritic</option>
    </select>
  );
};

export default OrderingSelector;

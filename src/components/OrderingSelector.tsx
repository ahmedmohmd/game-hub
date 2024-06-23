import { useContext } from 'react';
import { AppContext } from '../App';

const OrderingSelector = () => {
  const { handleOrdering } = useContext(AppContext);

  return (
    <select
      className="w-full max-w-xs mb-8 bg-gray-100 dark:bg-neutral-900 select"
      onChange={(event) => handleOrdering(event.target.value)}
    >
      <option disabled selected>
        Order By
      </option>

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

import { SortAscending, SortDescending } from '@phosphor-icons/react';
import { useContext } from 'react';
import { AppContext } from '../common/context/app-context';

const OrderInput = () => {
  const { handleOrder, order, orderBy } = useContext(AppContext);

  const isDisabled = orderBy === 'Order By' || orderBy === 'All' || orderBy === '';

  const handleClick = () => {
    handleOrder(order === 'asc' ? 'desc' : 'asc');
  };

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`btn px-3 py-2 md:block hidden dark:bg-neutral-900 ${!isDisabled && 'dark:text-white'}`}
    >
      {order === 'desc' && <SortAscending size={24} />}
      {order === 'asc' && <SortDescending size={24} />}
    </button>
  );
};

export default OrderInput;

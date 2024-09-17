import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { AppContext } from '../common/context/app-context';

const Input = () => {
  const { handleSearch } = useContext(AppContext);

  const [serachText, setSearchText] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    handleSearch(serachText);
  };

  const handleChange = (event: ChangeEvent) => {
    setSearchText((event.target as HTMLInputElement).value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="flex h-12 items-center gap-2 border-none rounded-3xl !outline-none input  input-bordered bg-neutral-100 dark:bg-neutral-900">
        <input
          type="text"
          onChange={handleChange}
          className="outline-none grow"
          placeholder="Search"
        />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-6 h-6 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </label>
    </form>
  );
};

export default Input;

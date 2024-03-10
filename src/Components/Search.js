import {useState} from "react";

const styles = {
  searchButton: 'inline-flex justify-center p-2 rounded text-white default:bg-blue-500 shadow-md shadow-gray-400 ' +
    'hover:bg-blue-600 active:ring-2 ring-blue-400',
  searchInput: 'px-2 col-span-2 shadow-md focus:border-b-4 border-blue-400 !outline-none',
};

export const Search = ({onSearch}) => {
  const [term, setTerm] = useState('');
  return (
    <div className='max-w-full md:max-w-screen-sm mx-auto mb-8'>
      <form className='grid grid-cols-3 gap-2 rounded-md' action='#'>
        <input onChange={(e) => setTerm(e.target.value)} type="text" placeholder='cute-cats' className={styles.searchInput} />
        <button onClick={() => onSearch(term)} type='submit' className={styles.searchButton}>Search</button>
      </form>
    </div>
  );
}
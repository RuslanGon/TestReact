import { useState } from "react";

const SearchFormCar = ({ searchQueryCar }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    searchQueryCar(searchTerm); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search for cars"
      />
      <br />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchFormCar;

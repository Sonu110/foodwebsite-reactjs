import React, { useState } from 'react';
import { Menu } from '../../utils/Products';

function Searchpage() {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Extract all menu items' names from the Menu object
  const allMenuItems = Object.values(Menu).flat();
  const menuNames = allMenuItems.map(item => item.name);

  // Filter menu items based on the search input or display nothing if input is empty
  const filteredMenuItems = searchInput
    ? menuNames.filter(item =>
        item.toLowerCase().startsWith(searchInput.toLowerCase())
      )
    : [];

  return (
    <>
      <div className='py-52'>
        <input
          type="text"
          placeholder='Search for items...'
          value={searchInput}
          onChange={handleInputChange}
        />
        {searchInput && (
          <ul>
            {filteredMenuItems.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Searchpage;

import React, { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import userData from '../src/resources/users.json';
import Search from '../src/components/Search/Search';
import Menu from '../src/components/Menu/Menu';
import { TITLE } from '../src/constants/constants';

const App = () => {

  //Filtered users from Search
  const [filteredUsers, setFilteredUsers] = useState(userData);

  
 /**
   * Search for a user
   * @param {string} searchTerm - The search term entered by the user
   */
  const handleSearch = (searchTerm) => {
    const filtered = userData.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="app">
      <h1 className="title">{TITLE}</h1>
      <header>
        <Search onSearch={handleSearch} />
        <Menu />
      </header>
      <main className="users">
        {filteredUsers.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </main>
    </div>
  );
}

export default App;

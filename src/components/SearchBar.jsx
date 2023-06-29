import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const onKeyPress = (e) => {
        if(e.charCode === 13) {
            handleSearch();
        }
    }

    const handleSearch = () => {
        if( searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    }

  return (
    <div className="search" onKeyPress={onKeyPress}>
        <label className="glass" htmlFor="">
            <BsSearch />
        </label>
        <input
            type="text"
            id="searchInput"
            className="input_search"
            placeholder="검색하기"
            title="검색"
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>
  )
}

export default SearchBar

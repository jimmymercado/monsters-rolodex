import React from 'react';
import './search-box.style.css';

export const SearchBox = ({placeholder, onSearchChange}) => (
    <input
        className='search' 
        type='search' 
        placeholder={placeholder}
        onChange={onSearchChange}
        /*
        onChange={e => 
          this.setState({searchField: e.target.value}, () => {
            console.log(this.state.searchField)
          })
        } 
        */

    />
);

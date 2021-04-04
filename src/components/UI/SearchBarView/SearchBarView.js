import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import styled from 'styled-components'

const SearchBarView = () => {
  return (
    <div>
      <Search>
        <IoMdSearch
          style={{ marginLeft: '1rem', position: 'absolute' }}
          color='#ccc'
          size='1.5em'
        />
        <SearchBar
          id='search-bar'
          type='text'
          placeholder='Поиск друзей'
        ></SearchBar>
      </Search>
    </div>
  )
}

const Search = styled.div`
  display: flex;
  align-items: center;
`

const SearchBar = styled.input`
  padding-left: 3em;
  margin-right: 3em;
  width: 400px;
  border: none;
  height: 50px;
  border-radius: 4px;
`

export default SearchBarView

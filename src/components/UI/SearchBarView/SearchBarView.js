import React from 'react'
import styled from 'styled-components'
import search from '../../../icons/search.svg'

const SearchBarView = () => {
  return (
    <div>
      <Search>
        <SearchBar
          style={{
            background: 'url(' + search + ')  10px no-repeat',
          }}
          placeholder={'Поиск друзей'}
        />
      </Search>
    </div>
  )
}

const Search = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  width: 510px;
`

const SearchBar = styled.input`
  padding-left: 38px;
  width: 100%;
  border: none;
  height: 40px;
  border-radius: 4px;
  font-family: 'Noto Sans';
  font-size: 13px;
`

export default SearchBarView

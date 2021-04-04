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
            // backgroundSize: '100%',
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
`

const SearchBar = styled.input`
  padding-left: 38px;
  width: 472px;
  border: none;
  height: 40px;
  border-radius: 4px;
  margin-right: 10px;
  font-family: 'Noto Sans';
  font-size: 13px;
`

export default SearchBarView

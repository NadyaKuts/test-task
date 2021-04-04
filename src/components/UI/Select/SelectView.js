import React from 'react'
import styled from 'styled-components'
import arrow from '../../../icons/arrow.svg'

const customStyles = {
  control: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,

    backgroundColor: 'white',
    height: 40,
    width: 169,
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Noto Sans',
    fontSize: 12,
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: 'black',
      backgroundColor: isSelected ? '#ccc' : 'white',
      backgroundColor: isFocused ? '#ccc' : 'white',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
    }
  },
}

const Select = styled.div`
  background-color: white;
  border-radius: 4px;
`
const SelectBar = styled.select`
  width: 170px;
  height: 40px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; /* Remove default arrow */
  border: none;
  font-size: 13px;
  font-family: 'Noto Sans';
  font-weight: bold;
`
const SelectView = (props) => {
  return (
    <Select>
      <SelectBar
        style={{
          background: 'url(' + arrow + ')  10px no-repeat',
          backgroundPosition: 'right 10px bottom 15px',
          paddingLeft: '10px',
        }}
      >
        <option default>{props.placeholder}</option>
      </SelectBar>
    </Select>
  )
}

export default SelectView

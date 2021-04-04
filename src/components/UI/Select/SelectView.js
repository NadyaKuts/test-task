import React from 'react'
import Select from 'react-select'

const customStyles = {
  control: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,

    backgroundColor: 'white',
    height: 50,
    width: 200,
    border: 'none',
    cursor: 'pointer',
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

const SelectView = (props) => {
  return (
    <Select
      placeholder={props.placeholder}
      styles={customStyles}
      options={props.options}
    />
  )
}

export default SelectView

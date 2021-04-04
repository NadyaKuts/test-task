import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import Colors from '../../../constants/Colors'

const NavbarItem = (props) => {
  const [showLabel, setShowLabel] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const NavLink = styled(Link)`
    background: ${isActive ? props.activeColor : Colors.navLink};
    color: #ffffff;
    text-decoration: none;
    text-align: center;
    border-radius: 4px;
    margin-right: 0.1em;

    height: 47px;
    width: 102px;
    margin-top: ${showLabel ? '10px' : ''};
    height: ${showLabel ? '55px' : ''};
    margin-top: ${isActive ? '10px' : ''};
    height: ${isActive ? '55px' : ''};
    font-family: 'Noto Sans';
    font-size: 13px;
    cursor: pointer;
    &:active {
      background: ${props.activeColor};
    }
    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${props.navLink};
      color: #ffffff;
      height: 55px;
      margin-top: 10px;
    }
  `

  return (
    <>
      <NavLink
        to={props.to}
        activeStyle={{ backgroundColor: props.activeColor }}
        isActive={(match) => (match ? setIsActive(true) : setIsActive(false))}
        onMouseMove={() => setShowLabel(true)}
        onMouseLeave={() => setShowLabel(false)}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {props.children}
          {showLabel ? props.label : '' || isActive ? props.label : ''}
        </div>
      </NavLink>
    </>
  )
}

export default NavbarItem

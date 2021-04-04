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
    padding: 0 1rem 1rem;
    padding-top: 0.6rem;
    margin-top: 0.1rem;
    border-radius: 0.3rem;
    margin-inline: 0.05rem;
    height: 25px;

    width: 80px;
    margin-top: ${showLabel ? '0.7rem' : ''};
    height: ${showLabel ? '35px' : ''};
    margin-top: ${isActive ? '0.7rem' : ''};
    height: ${isActive ? '35px' : ''};

    cursor: pointer;
    &:active {
      background: ${props.activeColor};
    }
    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${props.navLink};
      color: #ffffff;
      height: 35px;
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

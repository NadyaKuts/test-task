import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
import Colors from '../../../constants/Colors'

export const NawWrap = styled.div`
  display: flex;
  background: ${Colors.navbarBackground};
  width: 1600px;
  height: 67px;
`
export const NavContainer = styled.div`
  display: flex;
`
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  width: 880px;
  margin-left: 167px;
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  width: 47px;
  height: 47px;

  background: ${Colors.navLink};
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-left: 9px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: black;
  }
`

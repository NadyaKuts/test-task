import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
import Colors from '../../../constants/Colors'

export const NawWrap = styled.div`
  display: inline-flex;
  background: ${Colors.navbarBackground};
  margin-top: 60px;
  width: fit-content;
  height: 5.2em;
`
export const NavContainer = styled.div`
  display: grid;
  margin: 10px 110px;
  grid-template-columns: 1fr 9fr;
`
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  width: 915px;
  margin-left: 150px;
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 10px;
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  padding-top: 0.6rem;
  margin-bottom: 0.6rem;
  background: #808080;
  padding: 10px 10px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  margin-left: 10px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`

import React, { useState } from 'react'
import {
  NawWrap,
  NavContainer,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'

import NavbarItem from './NavbarItem'
import Colors from '../../../constants/Colors'
import styled from 'styled-components'

import home from '../../../icons/home.svg'
import messenger from '../../../icons/messenger.svg'
import friends from '../../../icons/friends.svg'
import groups from '../../../icons/groups.svg'
import media from '../../../icons/media.svg'
import booking from '../../../icons/booking.svg'
import market from '../../../icons/market.svg'
import library from '../../../icons/library.svg'
import search from '../../../icons/search.svg'

const Navbar = () => {
  const Icon = styled.svg`
    margin-left: 37px;
    margin-right: 38px;
    margin-top: 10px;
    width: 27px;
    height: 27px;
    background-image: no-repeat;
    background-size: contain;
  `
  const Search = styled.svg`
    margin: 10px;
    width: 27px;
    height: 27px;
    background-image: no-repeat;
    background-size: contain;
    &:hover {
    }
  `

  const Logo = styled.div`
    font-size: 36px;
    text-align: right;
    color: #9e9494;
    margin-left: 183px;
    width: 160px;
    height: 40px;
    margin-top: 13px;
    margin-bottom: 14px;
    font-family: 'Noto Sans';
    font-weight: 900;
  `

  const Marker = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    margin-left: 88px;
    border-width: 100px 17px 17px;
    border-style: solid;
    border-color: ${Colors.active.friends} ${Colors.active.friends} #ffffff;
  `
  const Line = styled.div`
    position: absolute;
    font-size: 30px;
    margin-top: 17px;
    margin-left: -17px;
    height: 921px;
    width: 34px;
    float: right;
    color: ${Colors.active.friends};
    background: #ffff;
  `
  const LineLabel = styled.p`
    margin: 0;
    font-weight: bold;
    writing-mode: tb-rl;
    transform: rotate(180deg);
  `
  return (
    <>
      <NawWrap>
        <Marker>
          <Line>
            <LineLabel>friends</LineLabel>
          </Line>
        </Marker>
        <NavContainer>
          <Logo>LOGOGO</Logo>
          <NavMenu>
            <NavbarItem
              to='/home'
              activeColor={Colors.active.home}
              label='Домой'
            >
              <Icon style={{ backgroundImage: 'url(' + home + ')' }} />
            </NavbarItem>
            <NavbarItem
              to='/friends'
              activeColor={Colors.active.friends}
              label='Друзья'
            >
              <Icon style={{ backgroundImage: 'url(' + friends + ')' }} />
            </NavbarItem>

            <NavbarItem
              to='/messages'
              activeColor={Colors.active.messages}
              label='Cообщения'
            >
              <Icon style={{ backgroundImage: 'url(' + messenger + ')' }} />
            </NavbarItem>

            <NavbarItem
              to='/groups'
              activeColor={Colors.active.groups}
              label='Группы'
            >
              <Icon style={{ backgroundImage: 'url(' + groups + ')' }} />
            </NavbarItem>

            <NavbarItem
              to='/media'
              activeColor={Colors.active.media}
              label='Медиа'
            >
              <Icon style={{ backgroundImage: 'url(' + media + ')' }} />
            </NavbarItem>

            <NavbarItem
              to='/places'
              activeColor={Colors.active.places}
              label='Места'
            >
              <Icon style={{ backgroundImage: 'url(' + booking + ')' }} />
            </NavbarItem>

            <NavbarItem
              to='/market'
              activeColor={Colors.active.market}
              label='Маркет'
            >
              <Icon style={{ backgroundImage: 'url(' + market + ')' }} />
            </NavbarItem>

            <NavbarItem
              to='/library'
              activeColor={Colors.active.library}
              label='Библиотека'
            >
              <Icon style={{ backgroundImage: 'url(' + library + ')' }} />
            </NavbarItem>
            <NavBtn>
              <NavBtnLink to='#'>
                <Search style={{ backgroundImage: 'url(' + search + ')' }} />
              </NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavContainer>
      </NawWrap>
    </>
  )
}

export default Navbar

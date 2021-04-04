import React, { useState } from 'react'
import {
  NawWrap,
  NavContainer,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'
import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineSearch,
  AiOutlinePlayCircle,
  AiOutlineUsergroupAdd,
  AiOutlineShop,
  AiOutlineShoppingCart,
  AiOutlineBook,
} from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import NavbarItem from './NavbarItem'
import Colors from '../../../constants/Colors'
import styled from 'styled-components'

const Navbar = () => {
  const Div = styled.div`
    display: block;
    height: 2rem;

    justify-content: center;
    align-items: center;
  `
  const Logo = styled.h1`
    font-size: 30px;
    color: #9e9494;
    width: 230px;
  `

  const Wrapper = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    margin-left: 50px;
    border-width: 100px 20px 20px;
    border-style: solid;
    border-color: ${Colors.active.friends} ${Colors.active.friends} #ffffff;
  `
  const Line = styled.div`
    position: absolute;
    font-size: 30px;
    margin-top: 20px;
    margin-left: -20px;
    height: 100vh;
    width: 40px;
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
        <Wrapper>
          <Line>
            <LineLabel>friends</LineLabel>
          </Line>
        </Wrapper>
        <NavContainer>
          <Logo>LOGOLOGO</Logo>
          <NavMenu>
            <NavbarItem
              to='/home'
              activeColor={Colors.active.home}
              label='Домой'
            >
              <Div>
                <AiOutlineHome size={30} />
              </Div>
            </NavbarItem>
            <NavbarItem
              to='/friends'
              activeColor={Colors.active.friends}
              label='Друзья'
            >
              <Div>
                <BsPerson size={30} />
              </Div>
            </NavbarItem>

            <NavbarItem
              to='/messages'
              activeColor={Colors.active.messages}
              label='Cообщения'
            >
              <Div>
                <AiOutlineMessage size={30} />
              </Div>
            </NavbarItem>

            <NavbarItem
              to='/groups'
              activeColor={Colors.active.groups}
              label='Группы'
            >
              <Div>
                <AiOutlineUsergroupAdd size={30} />
              </Div>
            </NavbarItem>

            <NavbarItem
              to='/media'
              activeColor={Colors.active.media}
              label='Медиа'
            >
              <Div>
                <AiOutlinePlayCircle size={30} />
              </Div>
            </NavbarItem>

            <NavbarItem
              to='/places'
              activeColor={Colors.active.places}
              label='Места'
            >
              <Div>
                <AiOutlineShop size={30} />
              </Div>
            </NavbarItem>

            <NavbarItem
              to='/market'
              activeColor={Colors.active.market}
              label='Маркет'
            >
              <Div>
                <AiOutlineShoppingCart size={30} />
              </Div>
            </NavbarItem>

            <NavbarItem
              to='/library'
              activeColor={Colors.active.library}
              label='Библиотека'
            >
              <Div>
                <AiOutlineBook size={30} />
              </Div>
            </NavbarItem>
            <NavBtn>
              <NavBtnLink to='#'>
                <AiOutlineSearch size={25} />
              </NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavContainer>
      </NawWrap>
    </>
  )
}

export default Navbar

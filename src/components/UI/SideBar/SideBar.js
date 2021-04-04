import React from 'react'
import styled from 'styled-components'
import { IoPeopleOutline } from 'react-icons/io5'
import { BsPersonPlus, BsPersonPlusFill, BsPerson } from 'react-icons/bs'
import {
  AiOutlineMessage,
  AiOutlineFire,
  AiOutlineLike,
  AiOutlineSearch,
} from 'react-icons/ai'
import { MdPets } from 'react-icons/md'
import { FaUserAltSlash, FaUserCheck } from 'react-icons/fa'

const SideBar = (props) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `
  const Category = styled.div`
    border-radius: 4px;
    background-color: ${props.color};
    color: #fff;

    height: fit-content;
    width: 230px;
    padding: 15px;
    text-align: center;
  `
  const CategoryItem = styled.div`
    border-radius: 4px;
    background-color: #ffffff;
    width: 100%;
    text-align: center;
    color: 'black';
  `
  const MainItems = styled.div`
    background-color: #f9f9f9;
  `

  const Item = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    &:hover {
      transition: all 0.2s ease-in-out;
      background: #cccc;
      border-left: 5px solid ${props.color};
    }
  `
  const Label = styled.div`
    text-align: left;
    text-indent: 2em;
  `
  const Icon = styled.div`
    margin-left: 10px;
    size: 24;
  `

  return (
    <Container>
      <Category>{props.label}</Category>
      <CategoryItem>
        <MainItems>
          <Item>
            <Icon>
              <IoPeopleOutline size={24} />
            </Icon>
            <Label>Мои друзья</Label>
          </Item>

          <Item>
            <Icon>
              <FaUserCheck size={24} />
            </Icon>
            <Label>Мои подписки</Label>
          </Item>
          <Item>
            <Icon>
              <BsPersonPlusFill size={24} />
            </Icon>
            <Label>Мои подписчики</Label>
          </Item>
          <Item>
            <Icon>
              <AiOutlineMessage size={24} />
            </Icon>
            <Label>Сообщения</Label>
          </Item>
        </MainItems>
        <Item>
          <Icon>
            <MdPets size={24} />
          </Icon>
          <Label>Категория</Label>
        </Item>
        <Item>
          <Icon>
            <BsPerson size={24} />
          </Icon>
          <Label>Новые пользователи</Label>
        </Item>
        <Item>
          <Icon>
            <AiOutlineFire size={24} />
          </Icon>
          <Label>Популярные люди</Label>
        </Item>
        <Item>
          <Icon>
            <AiOutlineLike size={24} />
          </Icon>
          <Label>Рекомендации</Label>
        </Item>
        <Item>
          <Icon>
            <FaUserAltSlash size={24} />
          </Icon>
          <Label>Черный список</Label>
        </Item>
        <Item>
          <Icon>
            <BsPersonPlus size={25} />
          </Icon>
          <Label>Пригласить друзей</Label>
        </Item>
        <Item>
          <Icon>
            <AiOutlineSearch size={25} />
          </Icon>
          <Label>Искать друзей</Label>
        </Item>
      </CategoryItem>
    </Container>
  )
}
export default SideBar

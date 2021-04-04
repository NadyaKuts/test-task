import React from 'react'
import styled from 'styled-components'
import users from '../../../icons/users.svg'
import userfollow from '../../../icons/userfollow.svg'
import userfollows from '../../../icons/userfollows.svg'
import blackList from '../../../icons/black-list.svg'
import pet from '../../../icons/pet.svg'
import news from '../../../icons/new.svg'
import comment from '../../../icons/comment.svg'
import trending from '../../../icons/trending.svg'
import recomendation from '../../../icons/recomendation.svg'
import userplus from '../../../icons/userplus.svg'
import search from '../../../icons/search.svg'

const SideBar = (props) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `
  const Category = styled.div`
    border-radius: 4px;
    background-color: ${props.color};
    color: #fff;
    width: 280px;
    padding: 15px 0 15px 0;
    /* text-align: center; */
    text-indent: 95px;
    font-family: 'Noto Sans';
    font-size: 14px;
    font-weight: 800;
  `
  const CategoryItem = styled.div`
    background-color: #ffffff;
    width: 280px;
    height: fit-content;
    text-align: center;
    color: 'black';
  `
  const MainItems = styled.div`
    background-color: #f9f9f9;
  `

  const Item = styled.div`
    padding-top: 10px;
    padding-left: 5px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    &:hover {
      transition: all 0.2s ease-in-out;
      background: #cccc;
      border-left: 5px solid ${props.color};
      padding-left: 0;
    }
    div svg:hover * {
      fill: ${props.color};
    }
  `
  const Label = styled.div`
    text-align: left;
    margin-left: 10px;
    font-family: 'Noto Sans';
    font-size: 14px;
    font-weight: 600;
  `
  const Icon = styled.svg`
    margin-left: 14px;
    width: 27px;
    height: 27px;
    background-image: no-repeat;
    background-size: contain;
  `

  return (
    <Container>
      <Category>{props.label}</Category>
      <CategoryItem>
        <MainItems>
          <Item>
            <Icon style={{ backgroundImage: 'url(' + users + ')' }} />
            <Label>Мои друзья</Label>
          </Item>

          <Item>
            <Icon style={{ backgroundImage: 'url(' + userfollow + ')' }} />

            <Label>Мои подписки</Label>
          </Item>
          <Item>
            <Icon style={{ backgroundImage: 'url(' + userfollows + ')' }} />

            <Label>Мои подписчики</Label>
          </Item>
          <Item>
            <Icon style={{ backgroundImage: 'url(' + comment + ')' }} />
            <Label>Сообщения</Label>
          </Item>
        </MainItems>
        <Item>
          <Icon style={{ backgroundImage: 'url(' + pet + ')' }} />

          <Label>Категория</Label>
        </Item>
        <Item>
          <Icon style={{ backgroundImage: 'url(' + news + ')' }} />

          <Label>Новые пользователи</Label>
        </Item>
        <Item>
          <Icon style={{ backgroundImage: 'url(' + trending + ')' }} />

          <Label>Популярные люди</Label>
        </Item>

        <Item>
          <Icon style={{ backgroundImage: 'url(' + recomendation + ')' }} />

          <Label>Рекомендации</Label>
        </Item>
        <Item>
          <Icon style={{ backgroundImage: 'url(' + blackList + ')' }} />

          <Label>Черный список</Label>
        </Item>
        <Item>
          <Icon style={{ backgroundImage: 'url(' + userplus + ')' }} />

          <Label>Пригласить друзей</Label>
        </Item>
        <Item>
          <Icon style={{ backgroundImage: 'url(' + search + ')' }} />

          <Label>Искать друзей</Label>
        </Item>
      </CategoryItem>
    </Container>
  )
}
export default SideBar

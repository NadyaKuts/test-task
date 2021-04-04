import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Users } from '../../../icons/users.svg'
import { ReactComponent as Userfollow } from '../../../icons/userfollow.svg'
import { ReactComponent as Userfollows } from '../../../icons/userfollows.svg'
import { ReactComponent as BlackList } from '../../../icons/black-list.svg'
import { ReactComponent as Pet } from '../../../icons/pet.svg'
import { ReactComponent as News } from '../../../icons/new.svg'
import { ReactComponent as Comment } from '../../../icons/comment.svg'
import { ReactComponent as Trending } from '../../../icons/trending.svg'
import { ReactComponent as Recomendation } from '../../../icons/recomendation.svg'
import { ReactComponent as Userplus } from '../../../icons/userplus.svg'
import { ReactComponent as Search } from '../../../icons/search.svg'
import Colors from '../../../constants/Colors'

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
      stroke: ${props.color};
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
            <Users style={{ marginLeft: '14px' }} />

            <Label>Мои друзья</Label>
          </Item>

          <Item>
            <Userfollow
              style={{ marginLeft: '14px', width: '27px', height: '27px' }}
            />

            <Label>Мои подписки</Label>
          </Item>
          <Item>
            <Userfollows style={{ marginLeft: '14px' }} />

            <Label>Мои подписчики</Label>
          </Item>
          <Item>
            <Comment style={{ marginLeft: '14px' }} />

            <Label>Сообщения</Label>
          </Item>
        </MainItems>
        <Item>
          <Pet style={{ marginLeft: '14px' }} />

          <Label>Категория</Label>
        </Item>
        <Item>
          <News style={{ marginLeft: '14px', fill: 'black' }} />

          <Label>Новые пользователи</Label>
        </Item>
        <Item>
          <Trending
            style={{ marginLeft: '14px', width: '27px', height: '27px' }}
          />

          <Label>Популярные люди</Label>
        </Item>

        <Item>
          <Recomendation style={{ marginLeft: '14px' }} />

          <Label>Рекомендации</Label>
        </Item>
        <Item>
          <BlackList style={{ marginLeft: '14px' }} />

          <Label>Черный список</Label>
        </Item>
        <Item>
          <Userplus style={{ marginLeft: '14px' }} />

          <Label>Пригласить друзей</Label>
        </Item>
        <Item>
          <Search style={{ marginLeft: '14px' }} />

          <Label>Искать друзей</Label>
        </Item>
      </CategoryItem>
    </Container>
  )
}
export default SideBar

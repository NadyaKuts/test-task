import React from 'react'
import styled from 'styled-components'
import SearchBarView from '../UI/SearchBarView/SearchBarView'
import SelectView from '../UI/Select/SelectView'
import SideBar from '../UI/SideBar/SideBar'
import Colors from '../../constants/Colors'
import ProfilePost from '../UI/Post/ProfilePost'
import Footer from '../UI/Footer/Footer'

const Friends = () => {
  const countries = [
    { value: 'belarus', label: 'Беларусь' },
    { value: 'russia', label: 'Россия' },
    { value: 'german', label: 'Германия' },
  ]

  const cites = [
    { value: 'minsk', label: 'Минск' },
    { value: 'moscow', label: 'Москва' },
    { value: 'berlin', label: 'Берлин' },
  ]
  return (
    <>
      <Container>
        <SideBar label={'Your friends'} color={Colors.active.friends} />
        <SearchItems>
          <SearchBarView />
          <SelectView placeholder='Bсе страны' options={countries} />

          <SelectView placeholder='Bсе города' options={cites} />
          <PostContainer>
            <ProfilePost />
          </PostContainer>
        </SearchItems>
        <Footer />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: grid;
  margin: 10px 200px;
  grid-gap: 2em;
  grid-template-columns: 1fr 8fr;
`
const SearchItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-right: 200px;
  width: 700px;

  grid-template-rows: repeat(3);
  grid-gap: 10px;
`
const PostContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
`

export default Friends

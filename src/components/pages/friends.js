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
  margin: 20px 210px;
  grid-gap: 20px;
  grid-template-columns: 1fr 8fr;
`
const SearchItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3);
  width: 880px;
  height: 40px;
  grid-gap: 10px;
`
const PostContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  width: 880px;
  height: 721px;
`

export default Friends

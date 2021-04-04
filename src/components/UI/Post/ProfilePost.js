import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

import profilePhoto from '../../../photo/Ellipse 74.png'
import appraisal from '../../../icons/appraisal.svg'
import comment from '../../../icons/comment.svg'
import share from '../../../icons/share.svg'
import overflowMenu from '../../../icons/overflow-menu.svg'

const ProfilePost = (props) => {
  return (
    <Container>
      <ProfileInfo>
        <ProfilePicture />
        <div style={{ flexDirection: 'column' }}>
          <ProfileName>Имя Фамилия</ProfileName>

          <p
            style={{
              color: '#cccc',
              fontSize: '13px',
              paddingLeft: '10px',
              margin: '0',
            }}
          >
            <ProfileOnline>6 минут назад</ProfileOnline>
          </p>
        </div>
        <OverflowMenu
          style={{ backgroundImage: 'url(' + overflowMenu + ')' }}
        />
      </ProfileInfo>
      <PostDescription>
        Интересное видео на тему "Как выбрать" Что думаете?
      </PostDescription>
      <ReactPlayer
        fluid={false}
        width={880}
        height={495}
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
      />
      <VideoDescription>
        Интересное видео на тему "Как выбрать" Что думаете?
      </VideoDescription>

      <IconContainer>
        <Like style={{ backgroundImage: 'url(' + appraisal + ')' }} />

        <Comment style={{ backgroundImage: 'url(' + comment + ')' }} />

        <Share style={{ backgroundImage: 'url(' + share + ')' }} />
      </IconContainer>
    </Container>
  )
}

const Container = styled.div`
  background-color: #fff;
  height: 721px;
  width: 880px;
  border-radius: 4px;
`
const ProfileInfo = styled.div`
  display: flex;
`
const ProfilePicture = styled.div`
  background-image: url(${profilePhoto});
  height: 60px;
  width: 60px;
  background-size: cover;
  border-radius: 35px;
  margin: 20px 0 0 20px;
`
const ProfileName = styled.div`
  font-family: 'Noto Sans';
  font-size: 13px;
  margin-top: 32px;
  margin-left: 10px;
  font-weight: 900;
`
const ProfileOnline = styled.div`
  font-family: 'Noto Sans';
  font-size: 12px;
  font-weight: bold;
  color: #adadad;
`
const PostDescription = styled.div`
  font-family: 'Noto Sans';
  font-size: 13px;
  margin: 20px 20px 10px 20px;
`
const VideoDescription = styled.div`
  font-family: 'Noto Sans';
  font-size: 13px;
  margin: 20px 10px 20px 20px;
  color: #3f4548;
  margin: 10px 20px 18px 20px;
  font-weight: 600;
`
const IconContainer = styled.div`
  margin-top: 10px;
  border-top: 1px solid #f2f2f2;
  margin-right: 20px;
  margin-left: 20px;
  padding-top: 18px;
  color: #ccc;
`
const Like = styled.svg`
  width: 24px;
  height: 24px;
  background-image: no-repeat;
  background-size: contain;
`
const Comment = styled.svg`
  width: 24px;
  height: 24px;
  margin-left: 40px;
  background-image: no-repeat;
  background-size: contain;
`
const Share = styled.svg`
  width: 24px;
  height: 24px;
  margin-left: 728px;
  background-image: no-repeat;
  background-size: contain;
`
const OverflowMenu = styled.svg`
  width: 25px;
  height: 23px;
  margin-top: 35px;
  margin-left: 663px;

  background-image: no-repeat;
  background-size: contain;
`
export default ProfilePost

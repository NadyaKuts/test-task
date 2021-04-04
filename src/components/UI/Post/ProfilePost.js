import React from 'react'
import styled from 'styled-components'
import { AiOutlineMore, AiOutlineLike } from 'react-icons/ai'
import ReactPlayer from 'react-player'

import { RiShareForwardLine, RiMessage2Line } from 'react-icons/ri'

const ProfilePost = (props) => {
  return (
    <Container>
      <ProfileInfo>
        <ProfilePicture />
        <div style={{ flexDirection: 'column' }}>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              textDecoration: 'none',
              color: '#000',
              paddingLeft: '10px',
              marginBottom: '10px',
            }}
          >
            Имя Фамилия
            <div
              style={{
                marginLeft: '650px',
                float: 'right',
                color: '#ccc',
              }}
            >
              <AiOutlineMore size={35} />
            </div>
          </p>
          <p
            style={{
              color: '#cccc',
              fontSize: '13px',
              paddingLeft: '10px',
              margin: '0',
            }}
          >
            6 минут назад
          </p>
        </div>
      </ProfileInfo>
      <div>
        <p style={{ fontSize: '15px', paddingLeft: '10px', textIndent: '2em' }}>
          Интересное видео на тему "Как выбрать" Что думаете?
        </p>

        <ReactPlayer
          fluid={false}
          width={'100%'}
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        />

        <p
          style={{
            fontSize: '15px',
            fontWeight: 'bold',
            textIndent: '2em',
          }}
        >
          Интересное видео на тему "Как выбрать" Что думаете?
        </p>
      </div>
      <IconContainer>
        <AiOutlineLike size={30} />
        <RiMessage2Line
          style={{
            marginLeft: '28px',
          }}
          size={30}
        />
        <RiShareForwardLine
          style={{
            float: 'right',
          }}
          size={30}
        />
      </IconContainer>
    </Container>
  )
}

const Container = styled.div`
  background-color: #fff;
  height: fit-content;
  border-radius: 4px;

  padding-top: 10px;
`
const ProfileInfo = styled.div`
  display: flex;
`
const ProfilePicture = styled.div`
  background-image: url(${'https://www.bowhunting.com/wp-content/uploads/2016/12/scentlok.jpg'});
  height: 70px;
  width: 70px;
  background-size: cover;
  border-radius: 35px;
  margin-left: 10px;
`
const IconContainer = styled.div`
  margin-top: 10px;
  border-top: 1px solid #ccc;
  margin-right: 20px;
  margin-left: 28px;
  padding-top: 10px;
  color: #ccc;
`

export default ProfilePost

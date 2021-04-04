import React from 'react'
import styled from 'styled-components'

const Footer = (props) => {
  return (
    <FooterContainer>
      <InfoLinks>
        <a>О проекте</a>
        <a>Сотрудничество</a>
        <a>Правовая информция</a>
        <a>Защита данных</a>
        <a>Написать в техподдержку</a>
      </InfoLinks>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  border-top: 1px solid #ccc;
  margin-top: 235px;
  width: 280px;
  height: 76px;
`
const InfoLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: #828282;
  padding-top: 10px;
  gap: 10px;
  font-size: 12px;
  font-family: 'Noto Sans';
`

export default Footer

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
  width: 100%;
  padding-top: 10px;
`
const InfoLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: #909090;
  gap: 10px;
  font-size: 12px;
`

export default Footer

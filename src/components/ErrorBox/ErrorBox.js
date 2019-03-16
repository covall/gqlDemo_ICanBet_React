import React from 'react'
import { Flex } from 'reflexbox'
import styled from 'styled-components'

const ErrorBox = ({ className }) => (
  <Flex align="center" justify="center" className={className}>
    <Card>Wystąpił błąd.</Card>
  </Flex>
)

const Card = styled.div`
  width: 300px;
  padding: 30px;
  border: 1px solid #940e00;
  color: #940e00;
  background-color: #ffe6e6;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default styled(ErrorBox)`
  height: calc(100vh - 66px);
`

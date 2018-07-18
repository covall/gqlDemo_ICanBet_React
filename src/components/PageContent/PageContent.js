import React from 'react'
import styled from 'styled-components'
import { Flex } from 'reflexbox'

const Wrapper = styled(Flex)`
  width: 100%;
`

const Contents = styled.div`
  width: 100%;
  max-width: 1000px;
`

const PageContent = ({ children }) => (
  <Wrapper align="center" column>
    <Contents>{children}</Contents>
  </Wrapper>
)

export default PageContent

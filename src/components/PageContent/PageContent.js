import React from 'react'
import styled from 'styled-components'
import { Flex } from 'reflexbox'

import { desktop } from '../../config/mediaQueries'

const Wrapper = styled(Flex)`
  width: 100%;
`

const InnerWrapper = styled.div`
  width: 100%;
  max-width: ${desktop.min}px;
  padding: 0 20px;
`

const Contents = styled.div`
  padding: 0 20px;
`

const PageContent = ({ children }) => (
  <Wrapper align="center" column>
    <InnerWrapper>
      <Contents>{children}</Contents>
    </InnerWrapper>
  </Wrapper>
)

export default PageContent

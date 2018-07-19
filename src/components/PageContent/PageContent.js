import React from 'react'
import styled from 'styled-components'
import { Flex } from 'reflexbox'

import { desktop } from '../../config/mediaQueries'

const Wrapper = styled(Flex)`
  width: 100%;
`

const InnerWrapper = styled.div`
  width: 100%;
  max-width: ${props => !props.fullWidth && `${desktop.min}px`};
`

const Contents = styled.div`
  padding: 0 20px;
`

const PageContent = ({ children, fullWidth }) => (
  <Wrapper align="center" column>
    <InnerWrapper fullWidth={fullWidth}>
      <Contents>{children}</Contents>
    </InnerWrapper>
  </Wrapper>
)

export default PageContent

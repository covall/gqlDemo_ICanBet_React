import React from 'react'
import styled from 'styled-components'

import { desktop } from '../../config/mediaQueries'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 66px);
  overflow: auto;
`

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${props => !props.fullWidth && `${desktop.min}px`};
`

const Contents = styled.div`
  padding: 0 20px;
  height: 100%;
`

const PageContent = ({ children, fullWidth }) => (
  <Wrapper>
    <InnerWrapper fullWidth={fullWidth}>
      <Contents>{children}</Contents>
    </InnerWrapper>
  </Wrapper>
)

export default PageContent

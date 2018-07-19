import React from 'react'
import styled from 'styled-components'

import { desktop } from '../../config/mediaQueries'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 66px);
  overflow: auto;
`

const InnerWrapper = styled.div`
  width: 100%;
  max-width: ${props => !props.fullWidth && `${desktop.min}px`};
`

const Contents = styled.div`
  padding: 0 20px;
`

const PageContent = ({ children, fullWidth }) => (
  <Wrapper>
    <InnerWrapper fullWidth={fullWidth}>
      <Contents>{children}</Contents>
    </InnerWrapper>
  </Wrapper>
)

export default PageContent

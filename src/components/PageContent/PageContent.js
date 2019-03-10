import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { desktop } from '../../config/mediaQueries'

const propTypes = {
  fullWidth: PropTypes.bool
}

const PageContent = React.memo(({ children, fullWidth }) => (
  <Wrapper className="scrollingContainer">
    <InnerWrapper fullWidth={fullWidth}>
      <Contents fullWidth={fullWidth}>{children}</Contents>
    </InnerWrapper>
  </Wrapper>
))

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
  padding: ${props => (props.fullWidth ? 0 : '0 20px')};
  height: 100%;
  width: 100%;
  position: relative;
`

PageContent.propTypes = propTypes

export default PageContent

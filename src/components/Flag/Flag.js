import React from 'react'
import PropTypes from 'prop-types'

import flagCodes from './flagCodes'

const propTypes = {
  ratio: PropTypes.oneOf(['1x1', '4x3'])
}

const defaultProps = {
  ratio: '4x3'
}

const Flag = ({ className, code, height, title, ratio }) => {
  const codeEntry = flagCodes.find(flag => flag.fifaCode === code)

  if (!codeEntry) {
    return null
  }
  const fileName = `${codeEntry.flagCode.toLowerCase()}.svg`
  const flagUrl = require(`flag-icon-css/flags/${ratio}/${fileName}`)

  return (
    <img
      src={flagUrl}
      className={className}
      height={height}
      alt={code}
      title={title}
    />
  )
}

Flag.propTypes = propTypes
Flag.defaultProps = defaultProps

export default Flag

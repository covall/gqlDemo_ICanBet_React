import { useEffect } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

const PageTitle = ({ title, children }) => {
  const baseTitle = 'GraphQL Bets'

  useEffect(() => {
    if (title) {
      window.document.title = `${baseTitle} - ${title}`
    }
  })

  return children || null
}

PageTitle.propTypes = propTypes

export default PageTitle

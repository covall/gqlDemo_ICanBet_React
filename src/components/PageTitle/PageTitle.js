import { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

class PageTitle extends Component {
  baseTitle = 'GraphQL Bets'

  componentWillMount() {
    if (this.props.title) {
      window.document.title = `${this.baseTitle} - ${this.props.title}`
    }
  }

  render() {
    if (this.props.children) {
      return this.props.children
    }

    return null
  }
}

PageTitle.propTypes = propTypes

export default PageTitle

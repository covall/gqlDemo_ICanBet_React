import React from 'react'

const messages = error =>
  error.graphQLErrors
    ? error.graphQLErrors.map(err => err.message).join(<br />)
    : null

export default messages

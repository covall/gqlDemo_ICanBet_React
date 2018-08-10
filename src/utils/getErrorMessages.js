import React from 'react'

const messages = error =>
  error.graphQLErrors.map(err => err.message).join(<br />)

export default messages

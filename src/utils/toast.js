import React from 'react'
import { message } from 'antd'

message.config({
  top: 54,
  duration: 3,
  maxCount: 3
})

const showSuccess = text =>
  message.open({
    content: text,
    icon: (
      <span role="img" aria-label="success">
        🚀
      </span>
    )
  })

const showWarn = text =>
  message.open({
    content: text,
    icon: (
      <span role="img" aria-label="warning">
        ☢️
      </span>
    )
  })

const showError = text =>
  message.open({
    content: text,
    icon: (
      <span role="img" aria-label="error">
        🤬
      </span>
    )
  })

export { showSuccess, showWarn, showError }

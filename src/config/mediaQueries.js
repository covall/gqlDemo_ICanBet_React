const mobile = {
  min: 623
}

const tablet = {
  min: 624,
  max: 1020
}

const desktop = {
  min: 1021,
  max: 1440
}

const largeDesktop = {
  min: 1441
}

const defaultQueries = {
  mobile: `screen and (max-width: ${mobile.min}px)`,
  tablet: `screen and (min-width: ${tablet.min}px) and (max-width: ${
    tablet.max
  }px)`,
  desktop: `screen and (min-width: ${desktop.min}px) and (max-width: ${
    desktop.max
  }px)`,
  largeDesktop: `screen and (min-width: ${largeDesktop.min}px)`
}

export {
  mobile,
  tablet,
  desktop,
  largeDesktop
}

export default defaultQueries

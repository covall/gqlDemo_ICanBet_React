import s from 'slugify'

const slugify = string => {
  return s(string, {
    replacement: '-',
    remove: /[$*_+~.()'"!\-:@]/g, // remove characters: *+~.()'"!:@
    lower: true
  })
}

export default slugify

import createHistory from 'history/createHashHistory'

const history = createHistory({
  basename: '', // portal#/home
  hashType: 'slash' // is #/home
})

export default history

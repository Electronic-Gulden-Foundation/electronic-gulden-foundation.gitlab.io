
export default () => {
  if (process.client) {
    if (window.self === window.top) {
      document.getElementsByTagName('body')[0].style.display = 'block'
    } else {
      window.top.location = window.self.location
    }
  }
}

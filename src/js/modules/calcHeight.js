const calcHeight = () => {
  const calculateHeight = () => {
    document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
  }

  calculateHeight()

  window.addEventListener('resize', calculateHeight)
}

export default calcHeight

const toastContainerOutside = (ariaLive) => {
  let containerOutside = document.createElement('div')

  containerOutside.className = 'position-relative'
  containerOutside.ariaLive = ariaLive ?? 'polite'
  containerOutside.ariaAtomic = 'true'

  return containerOutside
}

/**
 * @param {String} Placement
 */
const toastContainer = (Placement) => {
  let container = document.createElement('div')

  Placement = Placement ?? 'be'
  switch (Placement) {
    case 'ts':
      Placement = 'top-0 start-0'
      break
    case 'tc':
      Placement = 'top-0 start-50 translate-middle-x'
      break
    case 'te':
      Placement = 'top-0 end-0'
      break
    case 'ms':
      Placement = 'top-50 start-0 translate-middle-y'
      break
    case 'mc':
      Placement = 'top-50 start-50 translate-middle'
      break
    case 'me':
      Placement = 'top-50 end-0 translate-middle-y'
      break
    case 'bs':
      Placement = 'bottom-0 start-0'
      break
    case 'bc':
      Placement = 'bottom-0 start-50 translate-middle-x'
      break
    case 'be':
      Placement = 'bottom-0 end-0'
      break
    default:
      throw 'Placement error'
  }

  container.className = `toast-container position-fixed ${Placement}`

  return container
}

export {
  toastContainerOutside,
  toastContainer
}

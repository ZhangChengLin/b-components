export * from '../../../util/index'

/**
 * @param {HTMLElement} _offcanvas
 * @param {String} eventsType
 * @param {Function} eventsFun
 */
const offcanvasEvents = (_offcanvas, eventsType, eventsFun) => {
  switch (eventsType) {
    case 'show':
      _offcanvas.addEventListener('show.bs.offcanvas', () => eventsFun())
      break
    case 'shown':
      _offcanvas.addEventListener('shown.bs.offcanvas', () => eventsFun())
      break
    case 'hide':
      _offcanvas.addEventListener('hide.bs.offcanvas', () => eventsFun())
      break
    case 'hidden':
      _offcanvas.addEventListener('hidden.bs.offcanvas', () => eventsFun())
      break
    default:
      throw 'eventsType error'
  }
}

/**
 * @param {HTMLElement} _offcanvas
 */
const removeOffcanvas = _offcanvas => {
  _offcanvas.addEventListener('hidden.bs.offcanvas', () => {
    const x = bootstrap.Offcanvas.getInstance(_offcanvas)
    x.dispose()
    setTimeout(() => {
      _offcanvas.remove()
    }, 3e3)
  })
}

export {
  offcanvasEvents,
  removeOffcanvas
}

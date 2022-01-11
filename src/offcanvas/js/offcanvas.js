/**
 * @param {String} Placement
 * @param {String} offcanvasId
 */
const offcanvas = (Placement, offcanvasId) => {
  const _offcanvas = document.createElement('div')


  Placement = Placement ?? 'start'
  switch (Placement) {
    case 'start':
    case 'top':
    case 'end':
    case 'bottom':
      break
    default:
      throw 'Placement error'
  }

  _offcanvas.className = `offcanvas offcanvas-${Placement}`
  _offcanvas.id = offcanvasId
  _offcanvas.tabIndex = -1
  _offcanvas.role = 'dialog'
  _offcanvas.setAttribute('aria-labelledby', 'offcanvasTitleLabel')

  return _offcanvas
}

export default offcanvas

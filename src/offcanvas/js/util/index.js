import { Offcanvas } from 'bootstrap'
export * from '../../../util/index'

/**
 * @param {HTMLElement} _offcanvas
 */
const removeAfterHiding = (_offcanvas) => {
  _offcanvas.addEventListener('hidden.bs.offcanvas', () => {
    const x = Offcanvas.getInstance(_offcanvas)
    x.dispose()
    setTimeout(() => {
      _offcanvas.remove()
    }, 3e3)
  })
}

export {
  removeAfterHiding
}

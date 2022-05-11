import { Toast } from 'bootstrap'
export * from '../../../util/index'

/**
 * @param {HTMLElement} _toast
 */
const removeAfterHiding = (_toast) => {
  _toast.addEventListener('hidden.bs.toast', () => {
    const x = Toast.getInstance(_toast)
    x.dispose()
    setTimeout(() => {
      _toast.remove()
    }, 3e3)
  })
}

export {
  removeAfterHiding
}

const isNull = value => value === null
const isEmpty = value => typeof value === "string" && value === ''

const bsDismissBtn = (dismissType, whiteVariant = false) => {
  const btn = document.createElement('button')

  btn.className = whiteVariant ? 'btn-close btn-close-white' : 'btn-close'
  btn.type = 'button'
  btn.dataset.bsDismiss = dismissType
  btn.ariaLabel = 'Close'

  return btn
}

const getTimeString = () => Date.now().toString()

export {
  isNull,
  isEmpty,
  getTimeString,
  bsDismissBtn
}

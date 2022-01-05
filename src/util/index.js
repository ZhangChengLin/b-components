const isNull = value => value === null
const isEmpty = value => typeof value === "string" && value === ''

const bsDismissBtn = DismissType => {
  const btn = document.createElement('button')

  btn.className = 'btn-close'
  btn.type = 'button'
  btn.dataset.bsDismiss = DismissType
  btn.ariaLabel = 'Close'

  return btn
}

const getTimeString = () => Date.now().toString();

export {
  isNull,
  isEmpty,
  getTimeString,
  bsDismissBtn
}

const isNull = value => null === value
const isEmpty = value => "string" === typeof value && '' === value

const bsDismissBtn = DismissType => {
  let btn = document.createElement('button')

  btn.className = 'btn-close text-reset'
  btn.type = 'button'
  btn.dataset['bsDismiss'] = DismissType
  btn.ariaLabel = 'Close'

  return btn
}

export {
  isNull,
  isEmpty,
  bsDismissBtn
}

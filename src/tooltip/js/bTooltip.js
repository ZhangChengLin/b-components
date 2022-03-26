import { Tooltip } from 'bootstrap'

/**
 * @param {HTMLElement} triggerElement
 * @param {string|{}} title
 * @param {string|null} placement
 */
const bTooltip = (triggerElement, title = '', placement = null) => {
  const Options = Tooltip.Default

  if (typeof title === 'object') {
    Object.assign(Options, title)
  } else {
    Options.title = title
    Options.placement = placement ?? 'auto'
  }

  return new Tooltip(triggerElement, Options)
}

export default bTooltip

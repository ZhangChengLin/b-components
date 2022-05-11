import { Popover } from 'bootstrap'

const bPopover = (triggerElement, title = '', placement = null) => {
  const Options = Popover.Default

  if (typeof title === 'object') {
    Object.assign(Options, title)
  } else {
    Options.title = title
    Options.placement = placement ?? 'auto'
  }

  return new Popover(triggerElement, Options)
}

export default bPopover

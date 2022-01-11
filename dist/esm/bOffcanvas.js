/*!
 * Name: b-components-js
 * Version: 0.0.1-alpha.6
 * Author: ZhangChengLin
 * Email: 469946668@qq.com
 * Description: Generate Bootstrap components through JavaScript
 * Copyright (c) 2020 - 2022 ZhangChengLin
 * Licenses: MIT
 * under the MIT License (license terms are at https://opensource.org/licenses/MIT).
 * GitHub: https://github.com/ZhangChengLin/b-components
*/
/**
 * @param {String} Placement
 * @param {String} offcanvasId
 */
const offcanvas = (Placement, offcanvasId) => {
  const _offcanvas = document.createElement('div');


  Placement = Placement ?? 'start';
  switch (Placement) {
    case 'start':
    case 'top':
    case 'end':
    case 'bottom':
      break
    default:
      throw 'Placement error'
  }

  _offcanvas.className = `offcanvas offcanvas-${Placement}`;
  _offcanvas.id = offcanvasId;
  _offcanvas.tabIndex = -1;
  _offcanvas.role = 'dialog';
  _offcanvas.setAttribute('aria-labelledby', 'offcanvasTitleLabel');

  return _offcanvas
};

const isNull = value => value === null;
const isEmpty = value => typeof value === 'string' && value === '';

const bsDismissBtn = (dismissType, whiteVariant = false) => {
  const btn = document.createElement('button');

  btn.className = whiteVariant ? 'btn-close btn-close-white' : 'btn-close';
  btn.type = 'button';
  btn.dataset.bsDismiss = dismissType;
  btn.ariaLabel = 'Close';

  return btn
};

const getTimeString = () => Date.now().toString();

/**
 * @param {HTMLElement} _offcanvas
 * @param {String} eventsType
 * @param {Function} eventsFun
 */
const offcanvasEvents = (_offcanvas, eventsType, eventsFun) => {
  switch (eventsType) {
    case 'show':
      _offcanvas.addEventListener('show.bs.offcanvas', () => eventsFun());
      break
    case 'shown':
      _offcanvas.addEventListener('shown.bs.offcanvas', () => eventsFun());
      break
    case 'hide':
      _offcanvas.addEventListener('hide.bs.offcanvas', () => eventsFun());
      break
    case 'hidden':
      _offcanvas.addEventListener('hidden.bs.offcanvas', () => eventsFun());
      break
    default:
      throw 'eventsType error'
  }
};

/**
 * @param {HTMLElement} _offcanvas
 */
const removeOffcanvas = _offcanvas => {
  _offcanvas.addEventListener('hidden.bs.offcanvas', () => {
    const x = bootstrap.Offcanvas.getInstance(_offcanvas);
    x.dispose();
    setTimeout(() => {
      _offcanvas.remove();
    }, 3e3);
  });
};

/**
 * @param {Node|String|Function} headerNodeElement
 */
const header = (headerNodeElement) => {
  if (isNull(headerNodeElement) || isEmpty(headerNodeElement)) {
    return ''
  }

  const _header = document.createElement('div');
  const _title = document.createElement('h5');

  _header.className = 'offcanvas-header';

  _title.className = 'offcanvas-title';
  _title.id = 'offcanvasTitleLabel';
  headerNodeElement instanceof Function
    ? _title.append(headerNodeElement())
    : headerNodeElement instanceof HTMLElement
      ? _title.append(headerNodeElement)
      : _title.innerHTML = headerNodeElement;

  _header.append(_title, bsDismissBtn('offcanvas'));

  return _header
};

/**
 * @param {Node|String|Function} bodyNodeElement
 */
const body = (bodyNodeElement) => {
  const _body = document.createElement('div');

  _body.className = 'offcanvas-body';
  bodyNodeElement instanceof Function
    ? _body.append(bodyNodeElement())
    : bodyNodeElement instanceof HTMLElement
      ? _body.append(bodyNodeElement)
      : _body.innerHTML = bodyNodeElement;

  return _body
};

/**
 * @param {Node|String|Function} headerNodeElement
 * @param {Node|String|Function} bodyNodeElement
 * @param {String} Placement
 * @param {Object} Options
 * @param {String} EventsType
 * @param {Function} EventsFunction
 */
const bOffcanvas = (headerNodeElement, bodyNodeElement, Placement, Options, EventsType, EventsFunction) => {
  const offcanvasId = 'offcanvasId_' + getTimeString();

  const _offcanvas = offcanvas(Placement, offcanvasId);
  const _header = header(headerNodeElement);
  const _body = body(bodyNodeElement);

  _offcanvas.append(_header, _body);
  document.body.append(_offcanvas);

  EventsType && EventsFunction ? offcanvasEvents(_offcanvas, EventsType, EventsFunction) : '';

  const xxx = Options ? new bootstrap.Offcanvas(_offcanvas, Options) : new bootstrap.Offcanvas(_offcanvas);
  xxx.show();
  removeOffcanvas(_offcanvas);
  return offcanvasId
};

export { bOffcanvas };
//# sourceMappingURL=bOffcanvas.js.map

/*!
 * Name: b-components-js
 * Version: 0.0.1-alpha.4
 * Author: ZhangChengLin
 * Email: 469946668@qq.com
 * Description: Generate Bootstrap components through JavaScript
 * Copyright (c) 2020 - 2022 ZhangChengLin
 * Licenses: MIT
 * under the MIT License (license terms are at https://opensource.org/licenses/MIT).
 * GitHub: https://github.com/ZhangChengLin/b-components
*/
const isNull = value => value === null;
const isEmpty = value => typeof value === "string" && value === '';

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
 * @param {Node|String|Function} headerNodeElement
 */
const offcanvasHeader = (headerNodeElement) => {
  if (isNull(headerNodeElement) || isEmpty(headerNodeElement)) {
    return ''
  }

  const header = document.createElement('div');
  const title = document.createElement('h5');

  header.className = 'offcanvas-header';

  title.className = 'offcanvas-title';
  title.id = 'offcanvasTitleLabel';
  headerNodeElement instanceof Function
    ? title.append(headerNodeElement())
    : headerNodeElement instanceof HTMLElement
      ? title.append(headerNodeElement)
      : title.innerHTML = headerNodeElement;

  header.append(title, bsDismissBtn('offcanvas'));
  return header
};

/**
 * @param {Node|String|Function} bodyNodeElement
 */
const offcanvasBody = (bodyNodeElement) => {
  const body = document.createElement('div');

  body.className = 'offcanvas-body';
  bodyNodeElement instanceof Function
    ? body.append(bodyNodeElement())
    : bodyNodeElement instanceof HTMLElement
      ? body.append(bodyNodeElement)
      : body.innerHTML = bodyNodeElement;

  return body
};

/**
 * @param {Node|String|Function} headerNodeElement
 * @param {Node|String|Function} bodyNodeElement
 * @param {String} Placement
 * @param {String} offcanvasId
 */
const offcanvas = (headerNodeElement, bodyNodeElement, Placement, offcanvasId) => {
  const _offcanvas = document.createElement('div');
  const header = offcanvasHeader(headerNodeElement);
  const body = offcanvasBody(bodyNodeElement);

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

  _offcanvas.append(header, body);

  return _offcanvas
};

/**
 * @param {HTMLElement} _offcanvas
 * @param {String} eventsType
 * @param {Function} eventsFun
 */
const offcanvasEvents = (_offcanvas, eventsType, eventsFun) => {
  switch (eventsType) {
    case "show":
      _offcanvas.addEventListener("show.bs.offcanvas", () => eventsFun());
      break
    case "shown":
      _offcanvas.addEventListener("shown.bs.offcanvas", () => eventsFun());
      break
    case "hide":
      _offcanvas.addEventListener("hide.bs.offcanvas", () => eventsFun());
      break
    case "hidden":
      _offcanvas.addEventListener("hidden.bs.offcanvas", () => eventsFun());
      break
    default:
      throw 'eventsType error'
  }
};

/**
 * @param {HTMLElement} _offcanvas
 */
const removeOffcanvas = _offcanvas => {
  _offcanvas.addEventListener("hidden.bs.offcanvas", () => {
    const x = bootstrap.Offcanvas.getInstance(_offcanvas);
    x.dispose();
    setTimeout(() => {
      _offcanvas.remove();
    }, 3e3);
  });
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

  const _offcanvas = offcanvas(headerNodeElement, bodyNodeElement, Placement, offcanvasId);
  document.body.append(_offcanvas);

  EventsType && EventsFunction ? offcanvasEvents(_offcanvas, EventsType, EventsFunction) : '';

  const xxx = Options ? new bootstrap.Offcanvas(_offcanvas, Options) : new bootstrap.Offcanvas(_offcanvas);
  xxx.show();
  removeOffcanvas(_offcanvas);
  return offcanvasId
};

export { bOffcanvas };
//# sourceMappingURL=bOffcanvas.js.map

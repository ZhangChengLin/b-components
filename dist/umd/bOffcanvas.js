/*!
    * Name: b-components-js
    * Version: 0.0.1-alpha.2
    * Author: ZhangChengLin
    * Email: 469946668@qq.com
    * Description: Generate Bootstrap components through JavaScript
    * Copyright (c) 2020 - 2022 ZhangChengLin
    * Licenses: MIT
    * under the MIT License (license terms are at https://opensource.org/licenses/MIT).
    * GitHub: https://github.com/ZhangChengLin/b-components
    * issues: https://github.com/ZhangChengLin/b-components/issues
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bOffcanvas = factory());
})(this, (function () { 'use strict';

  const isNull = value => null === value;
  const isEmpty = value => "string" === typeof value && '' === value;

  const bsDismissBtn = DismissType => {
    let btn = document.createElement('button');

    btn.className = 'btn-close';
    btn.type = 'button';
    btn.dataset['bsDismiss'] = DismissType;
    btn.ariaLabel = 'Close';

    return btn
  };

  const getTimeString = () => new Date().getTime().toString();

  /**
   * @param {Node|String|Function} headerNodeElement
   */
  const offcanvasHeader = (headerNodeElement) => {
    if (isNull(headerNodeElement) || isEmpty(headerNodeElement)) {
      return ''
    }

    let header = document.createElement('div');
    let title = document.createElement('h5');

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
    let body = document.createElement('div');

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
    let _offcanvas = document.createElement('div');
    let header = offcanvasHeader(headerNodeElement);
    let body = offcanvasBody(bodyNodeElement);

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
   * @param {String} EventsType
   * @param {Function} EventsFun
   */
  const offcanvasEvents = (_offcanvas, EventsType, EventsFun) => {
    switch (EventsType) {
      case "show":
        _offcanvas.addEventListener("show.bs.offcanvas", () => EventsFun());
        break
      case "shown":
        _offcanvas.addEventListener("shown.bs.offcanvas", () => EventsFun());
        break
      case "hide":
        _offcanvas.addEventListener("hide.bs.offcanvas", () => EventsFun());
        break
      case "hidden":
        _offcanvas.addEventListener("hidden.bs.offcanvas", () => EventsFun());
        break
      default:
        throw 'EventsType error'
    }
  };

  /**
   * @param {HTMLElement} _offcanvas
   */
  const removeOffcanvas = _offcanvas => {
    _offcanvas.addEventListener("hidden.bs.offcanvas", () => {
      let x = bootstrap.Offcanvas.getInstance(_offcanvas);
      x.dispose();
      setTimeout(() => {
        _offcanvas.parentElement.removeChild(_offcanvas);
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
    let offcanvasId = 'offcanvasId_' + getTimeString();

    let _offcanvas = offcanvas(headerNodeElement, bodyNodeElement, Placement, offcanvasId);
    document.body.append(_offcanvas);

    EventsType && EventsFunction ? offcanvasEvents(_offcanvas, EventsType, EventsFunction) : '';

    let xxx = Options ? new bootstrap.Offcanvas(_offcanvas, Options) : new bootstrap.Offcanvas(_offcanvas);
    xxx.show();
    removeOffcanvas(_offcanvas);
    return offcanvasId
  };

  return bOffcanvas;

}));
//# sourceMappingURL=bOffcanvas.js.map

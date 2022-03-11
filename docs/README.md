# b-components-js

Generate some common components in Bootstrap through JavaScript

[![](https://img.shields.io/npm/v/b-components-js.svg)](https://www.npmjs.com/package/b-components-js)
[![](https://img.shields.io/github/stars/ZhangChengLin/b-components.svg?style=social)](https://github.com/ZhangChengLin/b-components)

---

## Demo

| **v0.0.3** | [**DEMO**](../demo/) |
|:----------:|:--------------------:|

|                 **Docs**                 |
|:----------------------------------------:|
|     [**bModal**](../docs/modal.html)     |
| [**bOffcanvas**](../docs/offcanvas.html) |
|     [**bToast**](../docs/toast.html)     |
|   [**bTooltip**](../docs/tooltip.html)   |

---

<details>
  <summary>Welcome PR</summary>

Supports
-

- 💚 [Modal](https://getbootstrap.com/docs/5.1/components/modal/)
- 💚 [Offcanvas](https://getbootstrap.com/docs/5.1/components/offcanvas/)
- 💚 [Toast](https://getbootstrap.com/docs/5.1/components/toasts/)
- 💚 [Tooltip](https://getbootstrap.com/docs/5.1/components/tooltips/)

TODO
-

- 🖤 [Alert](https://getbootstrap.com/docs/5.1/components/alerts/)
- 🖤 [Carousel](https://getbootstrap.com/docs/5.1/components/carousel/)
- 🖤 [Collapse](https://getbootstrap.com/docs/5.1/components/collapse/)
- 🖤 [Dropdown](https://getbootstrap.com/docs/5.1/components/dropdowns/)
- 🖤 [Progress](https://getbootstrap.com/docs/5.1/components/progress/)
- 🖤 [Scrollspy](https://getbootstrap.com/docs/5.1/components/scrollspy/)
- 🖤 [Tab](https://getbootstrap.com/docs/5.1/components/navs-tabs/)

</details>

---

## How to install

- **Install via NPM package**

```
npm i b-components-js --save
```

---

## CDN

- ### jsDelivr
  - [CDN NPM](https://www.jsdelivr.com/package/npm/b-components-js)
    - [files](https://cdn.jsdelivr.net/npm/b-components-js/)
  - [CDN GitHub](https://www.jsdelivr.com/package/gh/ZhangChengLin/b-components)
    - [files](https://cdn.jsdelivr.net/gh/ZhangChengLin/b-components/)

```javascript
// javascript
<script type="javascript" src="https://cdn.jsdelivr.net/npm/b-components-js/dist/b.bundle.min.js"></script>

<script type="javascript" src="https://cdn.jsdelivr.net/npm/b-components-js/dist/bModal.min.js"></script>
<script type="javascript" src="https://cdn.jsdelivr.net/npm/b-components-js/dist/bOffcanvas.min.js"></script>
<script type="javascript" src="https://cdn.jsdelivr.net/npm/b-components-js/dist/bToast.min.js"></script>
<script type="javascript" src="https://cdn.jsdelivr.net/npm/b-components-js/dist/bTooltip.min.js"></script>

// module
<script type="module">
  import {bModal}, {bOffcanvas}, {bToast} from 'https://cdn.jsdelivr.net/npm/b-components-js/dist/b.bundle.esm.min.js/+esm'

  import {bModal} from 'https://cdn.jsdelivr.net/npm/b-components-js/dist/bModal.esm.min.js/+esm'
  import {bOffcanvas} from 'https://cdn.jsdelivr.net/npm/b-components-js/dist/bOffcanvas.esm.min.js/+esm'
  import {bToast} from 'https://cdn.jsdelivr.net/npm/b-components-js/dist/bToast.esm.min.js/+esm'
  import {bToast} from 'https://cdn.jsdelivr.net/npm/b-components-js/dist/bTooltip.esm.min.js/+esm'
</script>
```

---

- ### UNPKG
  - **CDN NPM**
    - [files](https://unpkg.com/browse/b-components-js/)

`After the browser parses, get the latest version address`

```javascript
// javascript
<script type="javascript" src="https://unpkg.com/b-components-js/dist/b.bundle.min.js"></script>
<script type="javascript" src="https://unpkg.com/b-components-js/dist/bModal.min.js"></script>
<script type="javascript" src="https://unpkg.com/b-components-js/dist/bOffcanvas.min.js"></script>
<script type="javascript" src="https://unpkg.com/b-components-js/dist/bToast.min.js"></script>
<script type="javascript" src="https://unpkg.com/b-components-js/dist/bTooltip.min.js"></script>

// module
<script type="module">
  import {bModal},{bOffcanvas},{bToast} from 'https://unpkg.com/b-components-js/dist/b.bundle.esm.min.js?module'

  import {bModal} from 'https://unpkg.com/b-components-js/dist/bModal.esm.min.js?module'
  import {bOffcanvas} from 'https://unpkg.com/b-components-js/dist/bOffcanvas.esm.min.js?module'
  import {bToast} from 'https://unpkg.com/b-components-js/dist/bToast.esm.min.js?module'
  import {bToast} from 'https://unpkg.com/b-components-js/dist/bTooltip.esm.min.js?module'
</script>
```

---

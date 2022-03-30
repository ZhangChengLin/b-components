# bToast

[![](https://img.shields.io/github/stars/ZhangChengLin/b-components.svg?style=social)](https://github.com/ZhangChengLin/b-components)

## Demo

[umd](../demo/umd/popover.html)

[esm](../demo/esm/popover.html)

---

## Table of Contents

| Contents                                        |
|:------------------------------------------------|
| [How to use](#how-to-use)                       |
| [Parameter Description](#parameter-description) |

---

## How to use

```javascript
<a href="javascript:;" id="xx">text</a>

// <script src="./dist/b.bundle.min.js"></script>
<script src="./dist/bPopover.min.js"></script>
<script>
  const xx = document.querySelector("#xx")

  // bPopover(xx,'titleContent','left')
  const opts= {
    'title':'titleContent',
    'placement':'left'
  }
  bPopover(xx,opts)
</script>
```

OR MORE

## Parameter Description

```javascript
<script>
  bPopover(triggerElement, bodyNodeElement, Placement, EventsType, EventsFunction)
</script>
```

**Return Values**

|  type  |        such as        |                 Description                 |
|:------:|:---------------------:|:-------------------------------------------:|
| String | toastId_1643811742000 | "toastId_" starts with a 13-digit timestamp |

---

| Order |    Argument    |                Type                |                           Default                           |                                                                                                               Alternative                                                                                                                |                              Description                               |
|:-----:|:--------------:|:----------------------------------:|:-----------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------:|
|   1   | triggerElement | Node &#124; String &#124; Function |                             ""                              |                                                                                                                   None                                                                                                                   |             h5.offcanvas-title The content of the element              |
|   4   |     title      |        String &#124; Object        | { animation : true,<br/>autohide : true,<br/>delay : 5000 } |                                                                           animation : true &#124; false,<br/>autohide : true &#124; false,<br/>delay : number                                                                            |     https://getbootstrap.com/docs/5.1/components/popovers/#options     |
|   3   |   Placement    |               String               |                            'be'                             | "ts" (Top Start) &#124; "tc" (Top Center) &#124; "te" (Top End) &#124;<br/>"ms" (Middle Start) &#124; "mc" (Middle Center) &#124; "me" (Middle End) &#124;<br/> "bs" (Bottom Start) &#124; "bc" (Bottom Center) &#124; "be" (Bottom End) | https://getbootstrap.com/docs/5.1/components/popovers/#four-directions |
|   5   |   EventsType   |               String               |                            None                             |                                                                                           "show" &#124; "shown" &#124; "hide" &#124; "hidden"                                                                                            |     https://getbootstrap.com/docs/5.1/components/popovers/#events      |
|   6   | EventsFunction |              Function              |                            None                             |                                                                                                                   None                                                                                                                   |     https://getbootstrap.com/docs/5.1/components/popovers/#events      |

---

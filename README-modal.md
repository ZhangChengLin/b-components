# bModal

## Demo

[https://ZhangChengLin.github.io/b-components-js/docs/demo-modal.html](https://ZhangChengLin.github.io/b-components-js/docs/demo-modal.html)


---

## Table of Contents

| Contents                                        |
|:------------------------------------------------|
| [How to install](#how-to-install)               |
| [How to use](#how-to-use)                       |
| [Parameter Description](#parameter-description) |

## How to install

- Install via NPM package

```
npm i b-components-js --save
```

---

## How to use

```
<a href="javascript:;" onclick="bModal(parameter)">text</a>

<script src="./dist/umd/bModal.min.js"></script>
```

OR

```
<a href="javascript:;" id="xx">text</a>

<script src="./dist/umd/bModal.min.js"></script>
<script>
    const xx = document.querySelector("#xx");
    xx.addEventListener("click", function () {
        bModal(parameter);
    })
</script>
```

OR MORE

## Parameter Description

Currently, relying on Bootstrap v5, because it is a function package of Bootstrap modal.

Supports arbitrary calls of 9 parameters, supports callback functions based on modal events.

```
bModal(title, body, footer, ModalSizes, VerticallyCentered, LongContentType, Options, EventType, CallbackFunction)
```

**Return Values**

|  type  |    such as    |     Description      |
|:------:|:-------------:|:--------------------:|
| String | 1552756356601 | modal element number |

---

**title**
-

Type: String \| Function \| Function HTMLElement

Default value: undefined

Description: If you want to add a child element to the '.modal-header' element, use the Function HTMLElement.

说明： 如果要向 ".modal-header" 元素添加子元素，请使用 Function HTMLElement。

---

**body**
-

Type: String \| Function \| Function HTMLElement

Default value: undefined

Description:

---

**footer**
-

Type: String \| Function \| Function HTMLElement

Default value: undefined

Description:

---

**ModalSizes**
-

Type: String

Default value: undefined

Description:

| parameter |
|:---------:|
|    sm     |
|    lg     |
|    xl     |
|   full    |
|  full-sm  |
|  full-md  |
|  full-lg  |
|  full-xl  |
| full-xxl  |

---

**VerticallyCentered**
-

Type: Boolean

Default value: false

Description:

| parameter |
|:---------:|
|   true    |
|   false   |

---

**LongContentType**
-

Type: Boolean

Default value: false

Description:

| parameter |
|:---------:|
|   true    |
|   false   |

---

**Options**
-

Type: Object

Default value:

Description: <a href="https://getbootstrap.com/docs/4.3/components/modal/#options" target="_blank">Bootstrap Modal
options</a>

| parameter | default value (boolean) |         other         |
|:---------:|:-----------------------:|:---------------------:|
| backdrop  |          true           | false &#124; "static" |
| keyboard  |          true           |         false         |
|   focus   |          true           |         false         |

---

**Events Type**
-

Type: String

Default value: undefined

Description:

|   parameter   |
|:-------------:|
|     show      |
|     shown     |
|     hide      |
|    hidden     |
| hidePrevented |

---

**Events Function**
-

Type: Function

Default value: undefined

Description:


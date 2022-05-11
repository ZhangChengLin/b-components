# bToast

[![](https://img.shields.io/github/stars/ZhangChengLin/b-components.svg?style=social)](https://github.com/ZhangChengLin/b-components)

## Demo

[umd](../demo/umd/alert.html)

[esm](../demo/esm/alert.html)

---

## Table of Contents

| Contents                                        |
|:------------------------------------------------|
| [How to use](#how-to-use)                       |
| [Parameter Description](#parameter-description) |

---

## How to use

```javascript
<div class='container' id='container'>

// <script src="./dist/b.bundle.min.js"></script>
<script src="./dist/bAlert.min.js"></script>
<script>
  const container = document.querySelector("#container")

  bAlert(container,'alertContent','success')
</script>
```

OR MORE

## Parameter Description

```javascript
<script>
  bAlert = (parentContainer, content, type, EventsType, EventsFunction)
</script>
```

| Order |    Argument     |   Type   | Default |                               Alternative                                |                          Description                          |
|:-----:|:---------------:|:--------:|:-------:|:------------------------------------------------------------------------:|:-------------------------------------------------------------:|
|   1   | parentContainer |          |   ""    |                                   None                                   |                                                               |
|   2   |     content     |          |   ""    |                                   None                                   |                                                               |
|   3   |      type       |          |   ""    |                                   None                                   | https://getbootstrap.com/docs/5.1/components/alerts/#examples |
|   4   |   EventsType    |  String  |  None   | "show" &#124; "shown" &#124; "hide" &#124; "hidden" &#124; hidePrevented |  https://getbootstrap.com/docs/5.1/components/alert/#events   |
|   5   | EventsFunction  | Function |  None   |                                   None                                   |  https://getbootstrap.com/docs/5.1/components/alert/#events   |

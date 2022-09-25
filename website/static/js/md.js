/**
 * @param {string} srcFile markdownString File
 * @param {Element} el parse result container
 */
function markdownFileParser(srcFile, el) {
  const markedOpts = {
    gfm: true,
  }
  const request = new XMLHttpRequest()
  request.open('get', srcFile)
  request.send(null)
  request.responseType = 'text'
  request.onload = () => {
    if (request.status === 200) {
      el.innerHTML = marked.parse(request.responseText, markedOpts)
    }
  }
}

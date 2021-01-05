export const http = (dispatch, props) => {
  const { done, error = props.done, method = 'GET', url, headers = {}, body } = props

  const xhr = new XMLHttpRequest()

  let requestDone = false

  const handler = action => {
    if (!requestDone) {
      requestDone = true
      dispatch(action, xhr)
    }
  }

  Object.entries(headers).forEach(([key, val]) => {
    xhr.setRequestHeader(key, val)
  })

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      handler(done)
    } else {
      handler(error)
    }
  }

  xhr.onerror = () => handler(error)

  xhr.open(method, url)
  xhr.send(body)
}

export default http

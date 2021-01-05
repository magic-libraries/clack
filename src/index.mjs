export const http = (dispatch, props) => {
  const {
    done,
    error = props.done,
    timeout = props.error || props.done,
    responseType = 'text',
    requestType = 'text',
    timeoutSeconds = 10,
    method = 'GET',
    url,
    headers = {},
  } = props

  const xhr = new XMLHttpRequest()
  xhr.responseType = responseType
  xhr.timeout = timeoutSeconds * 1000

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
  xhr.ontimeout = () => handler(timeout)

  xhr.open(method, url)
  if (props.body) {
    xhr.send(requestType === 'json' ? lib.json.stringify(props.body, null, 2) : props.body)
  } else {
    xhr.send()
  }
}

export default http

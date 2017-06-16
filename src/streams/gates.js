module.exports = {
  AND, // source
  OR,  // source
  NOT  // through
}

function AND (a, b, onAbort) {
  return function (abort, cb) {
    if(abort)
      return abortCb(cb, abort, onAbort)
    if(a != null && b != null) {
      var _a = a
      var _b = b
      a = null
      b = null
      cb(null, _a & _b)
    } else
      cb(true)
  }
}

function OR (a, b, onAbort) {
  return function (abort, cb) {
    if(abort)
      return abortCb(cb, abort, onAbort)
    if(a != null && b != null) {
      var _a = a
      var _b = b
      a = null
      b = null
      cb(null, _a | _b)
    } else
      cb(true)
  }
}

function NOT (op, onEnd) {
  var a = false

  function once (abort) {
    if(a || !onEnd) return
    a = true
    onEnd(abort === true ? null : abort)
  }

  return function (read) {
    return function (end, cb) {
      if(end) once(end)
      return read(end, function (end, data) {
        if(!end) op && op(data)
        else once(end)
        cb(end, ~data)
      })
    }
  }
}
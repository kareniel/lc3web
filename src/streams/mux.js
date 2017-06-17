const args = process.argv.slice(2)
const x = parseInt(args[0])
const y = parseInt(args[1])

const fourOne = getMux(2)
console.log(fourOne(x, y))

// 2^n inputs and n select lines
// ie: (2,1)  (4,2)  (8,3)  (16,4)  (32,5)  (64,6)  (128,7)  (256,8)
// (int(2^n), int(n)) -> bool
function getMux (n) {
  return function mux (data, control) {
    data = dec2bin(x)
    data = (
      Array(Math.pow(2, n))
        .fill(0)
        .join('')
        .substr(data.length) + data
    ).split('')

    const ands = data.map((val, i) => val & (i === control))

    return orGate(...ands)
  }
}

function orGate () {
  return +([...arguments].reduce((p,c) => p || c))
}

function dec2bin(dec){
    const str = (dec >>> 0).toString(2)
    return str
}
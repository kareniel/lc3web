const args = process.argv.slice(2)
const x = args[0]
const y = args[1]

//  2^n inputs and n select lines
// (int(4), int(2)) -> bool
function fourTwo (x, y) {
  x = dec2bin(x)
  x = '0000'.substr(x.length) + x
  y = dec2bin(y)
  y = '00'.substr(y.length) + y

  const a = x[0]
  const b = x[1]
  const c = x[2]
  const d = x[3]

  const s1 = y[0]
  const s2 = y[1]

  return +((a && !s1 && !s2) || (b && !s1 && s2) || (c && s1 && !s2) || (d && s1 && s2))
}

console.log(fourTwo(x, y))

function dec2bin(dec){
    const str = (dec >>> 0).toString(2)
    return str
}
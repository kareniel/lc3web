const args = process.argv.slice(2)
const str_to_bool = v => v === 'true'
const a = str_to_bool(args[0])
const b = str_to_bool(args[1])

console.log(twoFour(a,b))

// (bool, bool) -> int
function twoFour (a, b) {
  return binaryInt(
    (a && b), (a && !b), (!a && b), (!a && !b)
  )
}

function binaryInt (args) {
  return parseInt([...arguments].map(v=>+v).join(''), 2)
}
// ssb://@NaDXehMSIgk08W5RXZJ0p+7m+19iIWEuAtD7FRESJX8=.ed25519
const baseEmoji = require('base-emoji')
const buf = Buffer.from('@NaDXehMSIgk08W5RXZJ0p+7m+19iIWEuAtD7FRESJX8=.ed25519', 'ascii')
console.log(baseEmoji.fromUnicode(baseEmoji.toUnicode(buf)).toString('utf8'))
const id = process.argv[2]
const op = process.argv[3]

if (!id) {
  console.log(`
    @NaDXehMSIgk08W5RXZJ0p+7m+19iIWEuAtD7FRESJX8=.ed25519
    ${baseEmoji.toUnicode(buf)}`)
} else if (id.length > 0 && op === 'encode') {
  const inputBuf = Buffer.from(process.argv[2], 'ascii')
  console.log(baseEmoji.toUnicode(inputBuf))
} else if (id.length > 0) {
  const inputBuf = process.argv[2]
  console.log(baseEmoji.fromUnicode(inputBuf).toString('utf8'))
}

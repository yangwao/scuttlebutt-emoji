// ssb://@NaDXehMSIgk08W5RXZJ0p+7m+19iIWEuAtD7FRESJX8=.ed25519
const baseEmoji = require('base-emoji')
const buf = new Buffer('@NaDXehMSIgk08W5RXZJ0p+7m+19iIWEuAtD7FRESJX8=.ed25519', 'ascii')

console.log(baseEmoji.toUnicode(buf));

console.log(baseEmoji.fromUnicode(baseEmoji.toUnicode(buf)).toString('utf8'));

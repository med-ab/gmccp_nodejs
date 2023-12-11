var options = {
  user: { short: 'u', type: 'string', info: 'gmail username' },
  pass: { short: 'p', type: 'string', info: 'see https://myaccount.google.com/apppasswords' },
  from: { short: 'f', type: 'string', info: 'from field' },
  to: { short: 't', type: 'string', info: 'from field' },
  subject: { short: 's', type: 'string', info: 'email subject',default: 'mail from email-sender.js' },
  text: { short: 'o', type: 'string' , info: 'email object'}
}
if (!process.argv[3]) console.log('usage: node ' + require('path').basename(__filename) + ' (flags), flags:'),
  Object.keys(options).forEach(o => console.log(
    '-' + options[o].short + ', --' + o+':',
    (options[o].info ?? ''),
    (options[o].default ? 'defaults to "' + options[o].default + '"' : ''),
  )),
  process.exit()
var { values: { user, pass, from, to, subject, text } } = require('util').parseArgs({ options, strict: false })
require('nodemailer')
  .createTransport({ service: 'gmail', auth: { user, pass } })
  .sendMail({ from: from || user, to, subject, text }, (error, info) =>
    console.log(error || 'email sent: ' + info.response))

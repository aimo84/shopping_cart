const fs = require('fs')

console.log('Incrementing build number...')

fs.readFile('./public/version.json', (err, data) => {
  if (err) throw err

  const content = JSON.parse(data)
  const latest = content.version
  const majorMinor = latest.substr(0, latest.lastIndexOf('.'))
  const d = new Date()
  const hours = (d.getHours().toString().length < 2 ? '0' : '') + d.getHours().toString()
  const minutes = (d.getMinutes().toString().length < 2 ? '0' : '') + d.getMinutes().toString()
  const seconds = (d.getSeconds().toString().length < 2 ? '0' : '') + d.getSeconds().toString()
  const patchVersion = d.getMonth().toString() + d.getDate().toString() + hours + minutes + seconds
  content.version = majorMinor + '.' + patchVersion
  fs.writeFile('./public/version.json', JSON.stringify(content, null, '  '), (err) => {
    if (err) throw err
    console.log('Current build number: ' + content.version)
  })
})

#!/usr/bin/env node
var uuid = require('uuid')

function main (argv) {
  var out = argv.indexOf('-v1') > -1
    ? uuid.v1()
    : uuid.v4()
  process.stdout.write(out)
  process.stderr.write('\n')
}

main(process.argv)
module.exports.pwd = function function_name() {
  process.stdout.write(process.cwd())
}

module.exports.date = function function_name() {
  process.stdout.write(new Date().toString())
}

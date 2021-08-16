const datefns = require('date-fns')

function date (req, res, next) {
  const date = datefns.format(new Date(), 'd MMMM yyyy')
  res.locals.date = date
  next()
}

module.exports = { date }

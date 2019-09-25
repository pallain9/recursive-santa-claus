function deliverPresents(houses) {
  if (houses.length === 1) {
    console.log('Delivering presents to ' + houses[0])
  } else {
    var middle = parseInt(houses.length / 2)
    var firstGroup = houses.slice(0, middle)
    var rest = houses.slice(middle, houses.length)
    deliverPresents(firstGroup)
    deliverPresents(rest)
  }
}
module.exports = deliverPresents
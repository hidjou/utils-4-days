const MILE_TO_KM = 1.609344

const milesToKm = (miles) => miles * MILE_TO_KM

const kmToMiles = (km) => km / MILE_TO_KM

module.exports = {
  milesToKm,
  kmToMiles,
}

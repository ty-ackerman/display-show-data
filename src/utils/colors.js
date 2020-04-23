// Will be used to create colors from red -> yellow -> green based on percentage
// 0% = red
// 50% = yellow
// 100% = green

export const relativePercToColor = (perc, min = 0, max = 100) => {
  let base = max - min

  if (base == 0) {
    perc = 100
  } else {
    perc = ((perc - min) / base) * 100
  }
  let r,
    g,
    b = 0
  if (perc < 50) {
    r = 255
    g = Math.round(5.1 * perc)
  } else {
    g = 255
    r = Math.round(510 - 5.1 * perc)
  }
  let h = r * 0x10000 + g * 0x100 + b * 0x1
  return '#' + ('000000' + h.toString(16)).slice(-6)
}

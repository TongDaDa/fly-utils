export default ThousandSplit = num => {
    num = Number.isInteger(num) ? num.toString() + '.00' : num.toString()
    return num.replace(/(\d)(?=(\d{3})+\.)/g, ($1,$2) => {
                  return  `${$2},`
              })
}

function calcHistory() {
  return document.getElementById('history-value').innerText
}

function showHistory(nbr) {
  document.getElementById('history-value').innerText = nbr
}

function getOutput() {
  return document.getElementById('output-value').innerText
}

function showOutput(nbr) {
  if (nbr == "") {
    document.getElementById('output-value').innerText = nbr

  } else {
    document.getElementById('output-value').innerText = formatNumber(nbr)

  }

}

function formatNumber(nbr) {
  var number = Number(nbr)
  var format = number.toLocaleString("br")
  return format
}

showOutput('18111111')
// function getDefaultInput(nbr) {
//   return Number(nbr.replace(/./g,''))
// }

// console.log(getDefaultInput(getOutput()))


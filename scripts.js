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
    document.getElementById('output-value').innerText = nbr

  }

}

// function formatNumber(nbr) {
//   var number = Number(nbr)
//   var format = number.toLocaleString("br")
//   return format
// }

// function getDefaultInput(nbr) {
//   return Number(nbr.replace(/./g,''))
// }

// console.log(getDefaultInput(getOutput()))

var operator = document.getElementsByClassName("operator")
var number = document.getElementsByClassName("number")
var action = document.getElementsByClassName("act-butn")

//numbers output
for (let init=0; init<number.length; init++) {
  number[init].addEventListener('click', function() {
    console.log("clicou em "+this.value)
    var output = getOutput()
    if (output != NaN) {
      output = output + this.value
      showOutput(output)
    }
  })
}

// operations output
for (let init=0; init<operator.length; init++ ) {
  operator[init].addEventListener('click', function() {
    console.log("clicou em "+this.value)
    var output = getOutput()
    var history = calcHistory()
    if (output != "") {

      history = history + output
      if (this.id == '=') {
        let result = eval(output)
        showOutput(result)
        showHistory('')
    } 
    }
  })
}

//actions
for (let init=0; init<action.length; init++) {
  action[init].addEventListener('click', function() {
    console.log("clicou em "+this.value)
    if (this.id == 'clear') {
      showHistory('')
      showOutput('')
    } else if (this.id == 'backspace') {
      let output = getOutput().toString()
      if (output) {
        output = output.substr(0, output.length - 1)
        showOutput(output)
      }
    }
    
  })
}
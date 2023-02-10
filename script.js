var inputValues = document.getElementById('inputValues')
function display(num){
    inputValues.value += num
}

function clearOneChar(){
    inputValues.value=inputValues.value.slice(0,-1)
}
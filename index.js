const KEYS = document.getElementsByClassName('key')
const INPUT_FIELD = document.getElementById('input-field')
const OPERANDS = document.getElementsByClassName('math_keys')
const OPERAND_CONTAINER = document.getElementById('operation_container')
const EQUALS = document.getElementById('equals')
const CLEAR = document.getElementById('clear')


let btn_array = Array.from(KEYS)
btn_array.forEach(element => {
    element.addEventListener("click",()=>{
        INPUT_FIELD.value += element.innerHTML
    })
});

let stored_values = []

let operands_array = Array.from(OPERANDS)
operands_array.forEach(operand=>{
    operand.addEventListener('click',()=>{
        if(stored_values.length == 0){
            stored_values.push(INPUT_FIELD.value,operand.innerHTML)
            OPERAND_CONTAINER.innerHTML = `${INPUT_FIELD.value} ${operand.innerHTML}`
        }else{
           let new_value = calculate(stored_values)
           stored_values.push(new_value,operand.innerHTML)
           OPERAND_CONTAINER.innerHTML = `${new_value} ${operand.innerHTML}`
        }
        INPUT_FIELD.value = 00

    })
})

EQUALS.addEventListener('click',()=>{
    let ans = calculate(stored_values)
    clear();
    INPUT_FIELD.value = ans
    console.log(stored_values)
})

CLEAR.addEventListener('click',()=>{
    clear()
    console.log(stored_values)
})

function calculate(values){
    let operator = values[1]
    let value_start = values[0]

    let ans = eval(value_start+operator+INPUT_FIELD.value)
    console.log(ans)
    return ans
}
function clear(){
    stored_values.length = 0
    INPUT_FIELD.value = ''
    OPERAND_CONTAINER.innerHTML = ''
}


let input_box= document.getElementById('input-box')



let notshow=['C','='] 
let operations=['+','-','*','/']
document.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='='){
      operations.forEach(op=>{
          if(input_box.innerHTML.includes(op)){
              let index=  input_box.innerHTML.indexOf(op)
              console.log(index)
              if(index!=input_box.innerText.length-1)
              {      
                let num1=  parseFloat(input_box.innerText.substring(0,index))
                let num2= parseFloat(input_box.innerText.substring(index+1,input_box.innerHTML.length))
                if(op=='+')
                  input_box.innerHTML= num1+num2
                else if(op=='-')
                input_box.innerHTML= num1-num2
                else if(op=='*')
                input_box.innerHTML= num1*num2
                else
                input_box.innerHTML= num1/num2

            }
          }
      })
    }
    if(e.target.innerHTML=='C')
    input_box.innerHTML=""
    if(!notshow.includes(e.target.innerHTML))
    input_box.innerHTML+= e.target.innerHTML
})

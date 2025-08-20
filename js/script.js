
let input1 = document.querySelector('.input1')
let result2= document.querySelector('.result2')

let handelButtton=()=>{
   result2.innerHTML= ''
    if(input1.value==''){
      alert('fill the box')
    }
    else{
      for(let i=1;i<11;i++){ 
        result2.innerHTML+= (input1.value+ 'X' + i + '='+ input1.value*i + '<br>')
      }
    }}
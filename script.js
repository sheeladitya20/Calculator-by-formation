let string = "";
function isNumber(evt) {
    // var reg = new RegExp('^[0-9]+$')
    // return reg.test(evt.key)


    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    let inputValue = document.getElementById('test').value;
    // let inputLength = inputValue.length;
    // document.getElementById("demo").innerHTML = inputLength;
    return true;
}
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})                        

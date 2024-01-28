const textInput = document.getElementById('text-input')
const checkBtn = document.getElementById('check-btn')
const result = document.getElementById('result')

const isPalindrome  = (val)=>{
      // let ispalidromeText = document.createElement('span')
      // let valueText = document.createElement('span')
      // ispalidromeText.style.fontSize ='20px';
      // ispalidromeText.style.fontWeight ='lighter';
      
      // valueText.style.fontSize = '2rem';
      // valueText.style.fontWeight = 'bold';

      // valueText.textContent = val

      // ispalidromeText.textContent = `${val} is a palindrome`;
      textInput.addEventListener('input',()=>{
        result.textContent = ''
      })
      result.textContent = `${val} is a palindrome`
      textInput.value= ''
}


const isNotPalindrome  = (val)=>{
      // const ispalidromeText = document.createElement('span')
      // const valueText = document.createElement('span')
      // ispalidromeText.style.fontSize ='20px';
      // ispalidromeText.style.fontWeight ='lighter';

      // valueText.style.fontSize = '2rem';
      // valueText.style.fontWeight = 'bold';
      // valueText.style.color = 'black';


      // ispalidromeText.textContent = `${val} is not a palindrome`;
      textInput.addEventListener('input',()=>{
        result.textContent = ''
      })
      result.textContent = `${val} is not a palindrome`
      textInput.value= ''

}


const checkInputValue = ()=>{
  const value = textInput.value
  if(value.length === 0){
    alert('Please input a value')
  }else{
    const  pad = Array.from(value).reverse().join('').split(/[\W_ .]/).join('').toLowerCase()
    const notReversed = value.split(/[\W_ .]/).join('').toLowerCase()
    console.log(notReversed,pad)
    if(notReversed === pad){
      return isPalindrome(value)
    }else{
      return isNotPalindrome(value)

    }
  }
}
checkBtn.addEventListener('click',checkInputValue)
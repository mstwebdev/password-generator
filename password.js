function generatePassword() {
  let smallAlphabets = 'abcdefghijklmnopqrstuvwxyz';
  let capitalAlphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numbers = '0123456789';
  let symbols = '!@#$%^&*()?/|\~`":<>,.{}[]';
  let final = numbers += capitalAlphabets += smallAlphabets += symbols;
  //console.log(final);
  passwordLength = 8;
  password = '';
  for(i = 0; i <= passwordLength; i++){
    let randomNum = Math.floor(Math.random() * final.length);
    password += final.substring(randomNum, randomNum +1);
  }
  document.getElementById('result').innerText = password;
}

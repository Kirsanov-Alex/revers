function reverseString(sentence){

    const str = sentence;
    const splitArray = str.split(' ');
    const reverseArray = splitArray.reverse(); 
    const str2 = reverseArray.join(' ');
    return str2;
  }
  console.log(reverseString('I learn JavaScript'));
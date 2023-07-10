
//Функция для проверки длины строки.

const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength ('sdjhk', 3);
// console.log(checkStringLength('sdjhk', 3));
checkStringLength ('sdj', 3);
// console.log(checkStringLength('sdj', 3));



//Функция для проверки, является ли строка палиндромом.

const checkPalindrome = (string) => {
  const modString = string.replaceAll(' ', '').toLowerCase();
  let reverseModString = '';
  for (let i = modString.length - 1; i >= 0; i -= 1) {
    reverseModString += modString.at(i);
  }

  if (modString === reverseModString) {
    // console.log ('Палиндром');
    return 'Палиндром';
  }
  // console.log ('Не палиндром');
  return 'Не палиндром';
}

checkPalindrome ('Торт');
checkPalindrome ('Тот');

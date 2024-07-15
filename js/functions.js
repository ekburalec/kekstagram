// const checkStringLength = function (string, stringLength) {
//   return string.length <= stringLength;
// };

// console.log(checkStringLength('Hello, World!', 14));
// console.log(checkStringLength('Hello', 4));

// let isPalindrome = function(string) {
//   string = string.toLowerCase().replaceAll(' ', '');
//   let palindrome = '';

//   for (let i = string.length - 1; i >= 0; i--) {
//     palindrome += string[i];
//   }

//  return palindrome === string;
// };

// console.log(isPalindrome("коту тащат уток"));
// console.log(isPalindrome("кекстограмм"));
// console.log(isPalindrome("довод"));
// console.log(isPalindrome("кекс"));

// Задание 4. Функция для проверки, укладывается ли встреча в рабочие часы

// const isMeetingDuringWorkDay = (startWork, endWork, startMeeting, meetingDuration) => {
//   const convertTimeToMinutes = (time) => {
//     const [ hours, minutes ] = time.split(':').map(Number);
//     return hours * 60 + minutes;
//   };

//   return convertTimeToMinutes(startMeeting) >= convertTimeToMinutes(startWork) && convertTimeToMinutes(startMeeting) + meetingDuration <= convertTimeToMinutes(endWork);
// };

// isMeetingDuringWorkDay('08:00', '17:30', '14:00', 90);

// ? Написати програму, яка переведе введену оцінку студента у болонський формат
// ? 89 – 100 це A,  75 – 88 це В, 60 – 74 це С, 45 – 59 це D,  20 – 44 це Е, до 20 це F

let studentGrade = Number(prompt("Введіть свою оцінку літерою від 0-100"))
let bolonGrade = "";
function toBolonGrade(studentGrade) {
  if (100 <= studentGrade && studentGrade >= 89) {
    bolonGrade = "Ваша оцінка згідно болонської системи A"
  } else if (88 <= studentGrade && studentGrade >= 75) {
    bolonGrade ="Ваша оцінка згідно болонської системи B"
  } else if (74 <= studentGrade && studentGrade >= 60) {
    bolonGrade ="Ваша оцінка згідно болонської системи C"
  } else if (59 <= studentGrade && studentGrade >= 45) {
    bolonGrade ="Ваша оцінка згідно болонської системи D"
  } else if (44 <= studentGrade && studentGrade >= 20) {
    bolonGrade ="Ваша оцінка згідно болонської системи E"
  } else {
    bolonGrade = "F, неук ти проклятий(а)!"
  }
 return  bolonGrade
}
console.log(toBolonGrade(studentGrade))
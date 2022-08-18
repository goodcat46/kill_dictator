const dataFruits1 = ["ківі", " банан", " манго", " яблуко"];
console.log(dataFruits1)
const dataFruits2 = [" авокадо", " персик", " виноград", " груша"]
console.log(dataFruits2)
let dataFruitsNew = dataFruits1.concat(dataFruits2);
console.log(dataFruitsNew)
let dataFruitsWasChanged ="";
let forAdding = "";
let forDeleting = "";
let indexOfAdd = "";
let indexOfDel = "";
let forReplace = "";
const NAMIBIA = confirm(`Ви збираєтесь змінити раціон диктатора московії. Продовжуємо?`)
switch (NAMIBIA) {
  case false:
    alert(`Сьогодні він житиме.`)
    break;
    case true:
      let whatToDo = prompt(
        `ЩО ви баєте зробити? Додати - знак "+". для вдалення знак "-", для замінии введіть "-/+`
      );
      console.log(whatToDo);
      switch (whatToDo) {
        case "+":
          forAdding = prompt(`Який елемент ви бажаєте добавити?`);
          console.log(forAdding);
          indexOfAdd = prompt(`Після якого елементу ви бажаєте добавити ваш? Введіть номер елемента після якого бажаєте добавити ваш: ${dataFruitsNew}`)
          dataFruitsNew.splice(indexOfAdd, 0, forAdding);
          console.log(dataFruitsNew);
          alert(`Вітаю, Ви це зробили. Україну врятовано! У диктатора алергія на ${forAdding}`)
          break;
        case "-":
          forDeleting = prompt(`Який елемент ви бажаєте видалити? Оберіть із достуних: ${dataFruitsNew}`);
          console.log(forDeleting);
          indexOfDel = dataFruitsNew.indexOf(forDeleting);
          console.log(indexOfDel);
          dataFruitsNew.splice(indexOfDel, 1);
          console.log(dataFruitsNew);
          alert(`Вітаю, ви це зробили. Україну це не врятує. Та Ви зекономили кошти і можете передати їх на ЗСУ.`)
          break;
          case "-/+":
            forDeleting = prompt(`Який елемент ви бажаєте замінити? Оберіть із достуних: ${dataFruitsNew}`);
            forReplace = prompt(`На який елемент ви бажаєте замінити?`);
            console.log(forDeleting);
            indexOfDel = dataFruitsNew.indexOf(forDeleting);
            console.log(indexOfDel);
            dataFruitsNew.splice(indexOfDel, 1);
            console.log(dataFruitsNew);
            alert(`Вітаю, Ви це зробили. Україну врятовано! У диктатора алергія на ${forReplace}`)
            break;
        default:
          alert("please restart")
          break;
      }
      console.log(dataFruitsNew);
    
    break;

  default:
    break;
}


// ? Використовуючи конструкцію if..else, напишіть код, який перевіряє, чи вистачає користувачу грошей на таксі :)
// ? Якщо так, показати 'Let`s go!', якщо ні 'Not enough'. const taxiPrice = 100;
// ? Перепишіть if...else за допомогою тернарного оператора.

const taxiPrice = 100;
let creditsBalance = Number(prompt('Ви бажаєте замовити таксі. Давайте дізнаємось ваш баланс коштів'));
function enoughBalance(credisBalance) {
  let message;
  if (credisBalance >= taxiPrice) {
    message = `Ok broo! Let's Go!`;
  } else {
    message = "Fuck you!";
  }
  return message;
}
console.log(enoughBalance(creditsBalance));

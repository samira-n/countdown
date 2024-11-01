const items = document.querySelectorAll(".countdown-item > h4");
const countdownElement = document.querySelector(".countdown");

// Назначаем дату отсчета
let contdownDate = new Date(2025, 8, 10, 19, 0, 0).getTime();

function getCountdownTime() {
    // Получить текущее время
    const now = new Date().getTime();

    // Найти разницу времени 
    const distance = contdownDate - now;

    // Создаем переменные в милисекундах
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // Подсчет для дней, минут и секунд

    // Когда мы уже узнали, сколько дней осталось, у нас остается часть миллисекунд, которая не составляет полный день. 
    // Эти оставшиеся миллисекунды мы и обрабатываем дальше, чтобы получить часы, минуты и секунды

    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];
    
    // Добавляем значения переменных на страницу

    // item — это текущий элемент HTML из коллекции items (например, <h4>).
    // index — номер текущего элемента (0 для дней, 1 для часов и т.д.).
    items.forEach(function (item, index){
        item.textContent = values[index];
    })

    if (distance < 0){
        clearInterval(countdown);
        countdownElement.innerHTML = "<h4 class='expired'>Старт продаж начался!</h4>";
    }
    
}

// Обновление счетчика каждую секунду
let countdown = setInterval(getCountdownTime, 1000);

// Инициализация текущего времени
getCountdownTime();
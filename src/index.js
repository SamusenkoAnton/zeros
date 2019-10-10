module.exports = function zeros(expression) {
    // your solution
    /*Для каждого факториала перебор множителей (для одинарного с шагом i-- c конца, для двойного i-=2)
Находишь кратные 2 и кратные 5 (делящиеся без остатка)
Считаем количество целочисленных делений для кратных множителей (т.е. сколько РАЗ это число может быть поделено на 2 без дробного остатка или на 5 соответственно для чисел кратных 2 и 5) Для 25 количество целочисленных делений на 5 равно 2. Число 4 целочисленно делится на 2 два раза.
Суммируешь количество этих делений (на 2 и на 5) для всего выражения.
Минимальное значение среди 2 и 5 (количество пар 2 и 5) будет количеством нулей */
    let arr = expression.split('*'); //разделение массива по знаку *
    console.log(arr);
    let сountTwo = 0; // счетчик двоек
    let countFive = 0; // счетчик пятерок
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('!!') == true) {
            a = +arr[i].slice(0, arr[i].length - 2);
            if (a % 2 == 0) {
                for (let j = 2; a / j >= 1; j*=2) {
                    сountTwo += Math.floor(a / j);
                    console.log(сountTwo);
                }
            }
            for (let k = a; k >= 1; k-=2) {
                if (k % 5 == 0) {
                    countFive += 1;
                }
                if (k % 25 == 0) {
                    countFive += 1;
                }
                console.log(countFive);
            }
        } else {
            a = +arr[i].slice(0, arr[i].length - 1);
            for (let j = 2; a / j >= 1; j*=2) {
                сountTwo += Math.floor(a / j);
            }
            for (let k = 5; a / k >= 1; k*=5) {
                countFive += Math.floor(a / k);
            }
        }
    }
    if (сountTwo < countFive) {
        return(сountTwo);
    } else {
        return(countFive);
    }
}


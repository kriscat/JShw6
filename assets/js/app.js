while (1) {
    let a = +prompt("Выберите задание (1-4)");

    switch (a) {
        case 1:
            {
                let a = +prompt("Задание 1:Введите любое число от 0 до 100 и вы увидите четные числа до 100 начиная с вашего числа");
                for (a; a <= 100; ++a) {
                    if (a % 2 == 0) {
                        alert(`Четное число: ${a}`);
                    }
                }
                break;
            };
        case 2:
            {
                let a = +prompt("Задание 2:Введите числа от 0 до 100 и вы увидите, какие числа до 100 делятся на 3 или 5 начиная с вашего числа");
                for (a; a <= 100; ++a) {
                    if (a % 3 == 0) {
                        alert(`Число делится на 3: ${a}`);
                    }
                    if (a % 5 == 0) {
                        alert(`Число делится на 5: ${a}`);
                    }
                }
                break;
            };
        case 3:
            {
                do {
                    a = +prompt("Задание 3:Введите число, которое больше 100:");
                } while (a <= 100 && a);
                if (a >= 100 && a) {
                    alert(`да, ${a} больше 100!`);
                }
                break;
            };

        case 4:
            {
                let multiplyNum = 56;
                let n = prompt("Задание 4: Какое число вы хотите умножить на 56?", 1);
                let multiply = n * multiplyNum;
                for (n; 1 <= n <= 10; multiply) {
                    alert(`${n} * ${multiplyNum} = ${multiply}`)
                    break;
                }

            };

        default:
            if (a == "" || a == null) {
                alert("Отмена");
            } else {
                alert("Выберите еще раз задание");
            }
            break;
    }
}
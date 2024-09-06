const getValue = (message) => {
    while (true) {
        const value = prompt(message);
        // let isValid = !isNaN(value) && value !== "" && value !== null;
        const isValid = !isNaN(value) && value !== "";
        if (isValid) {
            return Number(value)
        };
    }
}

// коло
const calculateCircleAreaAndPerimeter = (radius) => {
    const area = (Math.PI * (radius ** 2)).toFixed(2);
    const perimeter = (2 * Math.PI * radius).toFixed(2);

    return {
        area,
        perimeter,
    }

}

// прямокутник
const calculateRectangleAreaAndPerimeter = (length, width) => {
    const area = (length * width).toFixed(2);
    const perimeter = (2 * (length + width).toFixed(2));

    return {
        area,
        perimeter,
    };
}

// трикутник
const calculateTriangleAreaAndPerimeter = (a, b, c) => {
    const perimeter = (a + b + c).toFixed(2);
    const halfPerimeter = perimeter / 2;
    const area = (Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c))).toFixed(2);

    return {
        area,
        perimeter,
    }
}

const selectFigure = () => {
    let figure = getValue('Оберіть фігуру: коло (1), прямокутник (2) або трикутник (3)');

    if (!figure) {
        return;
    }

    let result = 0;

    switch (figure) {
        case 1:
            const radius = getValue('Введіть радіус');

            if (!radius) {
                alert('Ви відмінили операцію');
                return;
            }

            result = calculateCircleAreaAndPerimeter(radius);
            alert(`Площа кола: ${result.area}\nПериметр кола: ${result.perimeter}`);
            break;

        case 2:
            const length = getValue('Введіть длину');

            if (!length) {
                alert('Ви відмінили операцію введення длини');
                return;
            }

            const width = getValue('Введіть ширину');

            if (!width) {
                alert('Ви відмінили операцію введення ширини');
                return;
            }

            result = calculateRectangleAreaAndPerimeter(length, width);
            alert(`Площа прямокутника: ${result.area}\nПериметр прямокутника: ${result.perimeter}`);
            break;

        case 3:
            const a = getValue('Введіть сторону "а"');

            if (!a) {
                alert('Ви відмінили операцію введення  сторони "а"');
                return;
            }

            const b = getValue('Введіть сторону "b"');

            if (!b) {
                alert('Ви відмінили операцію введення сторони "b"');
                return;
            }

            const c = getValue('Введіть сторону "c"');

            if (!c) {
                alert('Ви відмінили операцію введення сторони "с"');
                return;
            }

            result = calculateTriangleAreaAndPerimeter(a, b, c);

            alert(`Площа трикутника: ${result.area}\nПериметр трикутника: ${result.perimeter}`);
            break;

        default:
            alert("Неправильний вибір фігури. Спробуйте ще раз.");
    }
}

selectFigure();

// let options = {
//     circle: function() {
//         console.log("circle");
//     },
//     rectangle: function() {
//         console.log("rectangle");
//     },
//     triangle: function() {
//         console.log("triangle");
//     },
//     test: function() {}
// }

// let option = prompt("select circle, rectangle or traingel");
// options[option]();

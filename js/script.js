function render() {
    let arrHumans = [1, 1, 1, 1, 7, 11, 14, 17, 20, 28, 34, 45, 59, 63, 93, 114, 147, 199];

    let i = 1;

    let html = "";

    let inputNumber = document.getElementById("input_number").value;
    // let buttonNumber = document.getElementsByClassName("button_number");

    for (; i < arrHumans.length; i++) {
        document.write("День № " + i + " колличество зараженных " + arrHumans[i] + "<br>");
    }
    document.write(" <br>" + "Прогноз на основе предыдущих данных" + "<br><br>");
    let humans = arrHumans[arrHumans.length - 1];
    humans += resultFunc(humans);



    for (; i <= inputNumber; i++) {
        let y = Math.floor(humans);
        humans += resultFunc(humans);
        document.write("День № " + i + " колличество зараженных " + y + "<br>");
    }

    function resultFunc(x) {
        return humans / 100 * 30;
    }



    document.getElementById('result').innerHTML = html;
}

document.getElementById('button_number').addEventListener('click', render);



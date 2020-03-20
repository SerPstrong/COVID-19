function render() {
    const arrHumans = [1, 1, 1, 1, 7, 11, 14, 17, 20, 28, 34, 45, 59, 63, 93, 114, 147, 199, 253];
    const arrComparePercent = [];

    let i = 0;
    let k = 0; // берем с 10 индекса arrComparePercent = []

    let compare = 0;
    let difference = 0;
    let difference2 = 0;
    let insCont = 0;

    let inputNumber = document.getElementById("input_number").value;
    // let buttonNumber = document.getElementsByClassName("button_number");

    for (; i < arrHumans.length; i++) {
        difference = arrHumans[i] - compare;
        difference2 = Math.floor(100 / compare * difference);
        arrComparePercent.push(difference2);
        document.write("День № " + i + " колличество зараженных " + arrHumans[i] + " возросло на " + difference2 + " процентов " + "<br>");
        compare = arrHumans[i];
    }

    document.write(" <br>" + "Прогноз на основе предыдущих данных" + "<br><br>");
    let humans = arrHumans[arrHumans.length - 1];
    humans += resultFunc(humans);


    for (; i <= 55; i++) {
        let y = Math.floor(humans);
        humans += resultFunc(humans);
        document.write("День № " + i + " колличество зараженных " + y + "<br>");
    }

    function resultFunc(x) {
        return humans / 100 * 30;
    }

    function funcResult(x) {
        return insCont / insCont;
    }

    // document.getElementById('result').innerHTML = html;
}

render();

// document.getElementById('button_number').addEventListener('click', render);



function render() {
    const arrHumans = [1, 1, 1, 1, 7, 11, 14, 17, 20, 28, 34, 45, 59, 63, 93, 114, 147, 199, 253, 306];
    const arrComparePercent = [];

    let result = document.getElementById("result");
    let resultCom;

    let i = 0;
    let k = 0; // берем с 10 индекса arrComparePercent = []

    let compare = 0;
    let difference;
    let difference2;
    let insCont = 0;
    let html;
    let iResult;

    let inputNumber = document.getElementById("input_number").value;

    for (; i < arrHumans.length; i++) {
        difference = arrHumans[i] - compare;
        difference2 = Math.floor(100 / compare * difference);
        arrComparePercent.push(difference2);
        compare = arrHumans[i];
        funcIResult();
        resultCom += `<div class="resBlock">День <span class="color-number">${i}</span> кол-во зараженных <span class="color-number">${arrHumans[i]}</span>   <span class="color-number">${iResult} ${difference2}%</span></div>`;
    }

    resultCom += `<h1 class="h1">Расчет на основе предыдущих данных</h1>`;
    result.innerHTML += resultCom;

    let humans = arrHumans[arrHumans.length - 1];
    humans += resultFunc(humans);

    for (; i <= 100; i++) {
        let y = Math.floor(humans);
        humans += resultFunc(humans);
        resultCom += `<div class="resBlock">День <span class="color-number">${i}</span> кол-во зараженных <span class="color-number">${y}</span></div>`;
    }

    result.innerHTML = resultCom;

    function resultFunc(x) {
        return humans / 100 * difference2;
    }

    function funcResult(x) {
        return insCont / insCont;
    }

    function funcIResult() {
        if (arrComparePercent[arrComparePercent.length-1] > arrComparePercent[arrComparePercent.length-2]) {
            return iResult = `<i class="fa fa-arrow-up" aria-hidden="true"></i>`
        }else if (arrComparePercent[arrComparePercent.length-1] < arrComparePercent[arrComparePercent.length-2]) {
            return iResult = `<i class="fa fa-arrow-down" aria-hidden="true"></i>`
        }else {
            return iResult = `<i class="fa fa-arrow-right" aria-hidden="true"></i>`
        }
    }

    // document.getElementById('result').innerHTML = html;
}

render();

// document.getElementById('button_number').addEventListener('click', render);



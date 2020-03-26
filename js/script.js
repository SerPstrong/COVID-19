function render() {
    const arrHumans = [" ", 1, 1, 1, 1, 7, 11, 14, 17, 20, 28, 34, 45, 59, 63, 93, 114, 147, 199, 253, 306, 367, 438, 495, 658, 840];
    let recovered = 38; //выздоровлений
    let deaths = 2; // смертей
    let active = arrHumans[arrHumans.length - 1] - recovered - deaths;

    const arrComparePercent = [];
    let leftBeforeInfection = 0;
    let result = document.getElementById("result");
    let resultTop = document.getElementById("result_top");
    let resultCom = "";

    let i = 1;
    let k = 0; // берем с 10 индекса arrComparePercent = []

    let compare = 1;
    let difference = 1;
    let difference2 = 1;
    let insCont = 1;
    // let html;
    let iResult = 1;

    // let inputNumber = document.getElementById("input_number").value;

    for (; i < arrHumans.length; i++) {
        difference = arrHumans[i] - compare;
        difference2 = Math.floor(100 / compare * difference);
        arrComparePercent.push(difference2);
        compare = arrHumans[i];
        funcIResult();
        resultCom += `<div class="resBlock">День <span class="color-number">${i}</span> Заражений <span class="color-number">${arrHumans[i]} (+${difference})</span>   <span class="color-number">${iResult} ${difference2}%</span></div>`;
    }

    let iToday = i - 1;

    resultCom += `<h1 class="h1">Расчет на основе предыдущих данных</h1>`;
    result.innerHTML += resultCom;

    // let humans = arrHumans[arrHumans.length - 1];
    let humans = arrHumans[arrHumans.length - 1];
    humans += resultFunc(humans);

    for (; i <= 150; i++) {

        if (humans <= 9000000000) {
            let y = Math.floor(humans);
            humans += resultFunc(humans);
            // resultCom += `<div class="resBlock">День <span class="color-number">${i}</span> кол-во зараженных <span class="color-number">${y}</span></div>`;
            resultCom += `<div class="resBlock resBlock_abs"><span class="color-number_small">${i}</span><span class="color-number">${y}</span></div>`;

            if (y > 140000000 && leftBeforeInfection === 0) {
                leftBeforeInfection = i - iToday;
            }
        }
    }

    result.innerHTML = resultCom;

    function resultFunc(x) {
        return humans / 100 * difference2;
    }

    function funcIResult() {
        if (arrComparePercent[arrComparePercent.length - 1] > arrComparePercent[arrComparePercent.length - 2]) {
            return iResult = `<i class="fa fa-arrow-up i-fa-speed" aria-hidden="true"></i>`
        } else if (arrComparePercent[arrComparePercent.length - 1] < arrComparePercent[arrComparePercent.length - 2]) {
            return iResult = `<i class="fa fa-arrow-down" aria-hidden="true"></i>`
        } else {
            return iResult = `<i class="fa fa-arrow-right" aria-hidden="true"></i>`
        }
    }

    // document.getElementById('result').innerHTML = html;

    // function sec() {
    //     let today = new Date().toLocaleDateString();
    //     let todayTime = new Date().toLocaleTimeString();
    //     // document.querySelector('.date-footer').innerHTML = `${today} ${todayTime}`;
    //     resultTop.insertAdjacentHTML('afterend', `<div class="resBlock">Сегодня <span class="color-number">${iToday} </span> день <span class="color-number">${today}</span>\n
    //         </span> <span class="color-number">${todayTime}</span>
    //         <br>
    //         кол-во зараженных <span class="color-number">${arrHumans[arrHumans.length - 1]}</span>   <span class="color-number">${iResult} ${difference2}%</span></div>`);
    // }
    // setInterval(sec, 1000);

    function sec() {
        let today = new Date().toLocaleDateString();
        let todayTime = new Date().toLocaleTimeString();

        resultTop.innerHTML = `<div class="resBlock">Сегодня <span class="color-number">${iToday} </span> день <span class="color-number">${today}</span>
</span> <span class="color-number">${todayTime}</span>
<br>
КЗ <span class="color-number">${arrHumans[arrHumans.length - 1]} (+${difference})</span>   <span class="color-number">${iResult} ${difference2}%</span>
<br>Выздоровлений <span class="color-number recovered_color">${recovered}</span> 
<br>Смертей <span class="color-number">${deaths}</span> 
<br>Активные <span class="color-number">${active}</span> 
<br>
дней до ПЗ <span class="color-number">${leftBeforeInfection}</span></div>`;

    }

    setInterval(sec, 1000);
    // setTimeout(sec, 1000);
}


// document.getElementById('button_number').addEventListener('click', render);
render();


const arrHumans = [" ", 1, 1, 1, 1, 7, 11, 14, 17, 20, 28, 34, 45, 59, 63, 93, 114, 147, 199, 253, 306, 367,
    438, 495, 658, 840, 1036, 1264, 1534, 1836, 2337, 2777, 3548, 4149, 4731, 5389, 6343, 7497,
    8672, 10131, 11917, 13584, 15770, 18328, 21102, 24490, 27938, 31989, 36793,
    42853, 47121, 52763, 57999, 62773, 68622, 74588, 80949, 87147, 93558, 99399,
    106498, 114431, 124054, 134687, 145268, 155370, 165929, 177160, 187859, 198676,
    209688, 221344, 232243, 242271, 252245, 262843, 272043, 281752, 290678, 299941,
    308705, 317554, 326448, 335882, 344481, 353427, 362342, 370680, 379051, 387623, 396575,
    405843, 414878, 423741, 432277, 441108, 449834, 458689, 467673, 476658, 485253,
493657];
const recovered = [195957, 204623, 212680, 221388, 226731, 230688, 242397, 252783];
const deaths = [5971, 6141, 6358];
const sverdlRegion = [7668, 7910, 8194];
const sverdlRegionRecovered = [3273, 3495, 3642];
const sverdlRegionDeaths = [43, 46, 48];
let statWorld = statFunc("world ", 6437741, 394060);
let stat1 = statFunc("usa ", 1920061, 109802);
let stat2 = statFunc("brazilian ", 672846, 35930);
let stat3 = statFunc("british ", 286294, 40548);
let sverdlRegionRecoverPerent = recoverFunc(sverdlRegion[sverdlRegion.length - 1], sverdlRegionRecovered[sverdlRegionRecovered.length - 1]);
let statSverdlRegionDeaths = statFunc("", sverdlRegion[sverdlRegion.length - 1], sverdlRegionDeaths[sverdlRegionDeaths.length - 1]);
let statRussia = statFunc("", arrHumans[arrHumans.length - 1], deaths[deaths.length - 1]);
let recoverPercent = recoverFunc(arrHumans[arrHumans.length - 1], recovered[recovered.length - 1]);
let active = arrHumans[arrHumans.length - 1] - recovered[recovered.length - 1] - deaths[deaths.length - 1];
const arrComparePercent = [];
let leftBeforeInfection = 0;
let result = document.getElementById("result");
let resultTop = document.getElementById("result_top");
let resultCom = "";
let i = 1;
let compare = 1;
let difference = 1;
let difference2 = 1;
let iResult = 1;
let dif = 0;
let numberOfDays7 = 7; // количество дней для среднего %
let toDateCovid = new Date(2020, 2, 2);
let toDateCovidFull = 0;
let today = new Date().toLocaleDateString();

Date.prototype.addDays = function (days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};

function statFunc(country, theNumberOfInfected, dead) {
    return (country + (dead / (theNumberOfInfected / 100)).toFixed(1))
}

function recoverFunc(x, y) {
    return (y / (x / 100)).toFixed(1)
}

render = () => {
    // resultCom += `<div class="resBlock result"><div class="span-flex"><span class="color-number color-number_size">Д.</span></div><div class="span-flex"><span class="color-number color-number_size">Зар.</span></div><div class="span-flex"><span class="color-number color-number_size">%</span></div></div>`;
    for (; i < arrHumans.length; i++) {
        difference = arrHumans[i] - compare;
        difference2 = (100 / compare * difference);
        arrComparePercent.push(difference2);
        compare = arrHumans[i];
        funcIResult();
        //resultCom += `<div class="resBlock">День <span class="color-number">${i}</span> Заражений <span class="color-number">${arrHumans[i]} (+${difference})</span>   <span class="color-number">${iResult} ${difference2}%</span></div>`;

        // resultCom += `<div class="resBlock result"><div class="span-flex"><span class="color-number color-number_size">
        // ${toDateCovid.addDays(i - 1).toLocaleDateString()}</span></div><div class="span-flex"><span class="color-number color-number_size">
        // ${arrHumans[i]}(+${difference})</span></div><div class="span-flex"><span class="color-number color-number_size">
        // ${iResult} ${difference2}%</span></div></div>`;

        // resultCom += `<div class="resBlock result"><div class="span-flex"><span class="color-number color-number_size">
        // ${toDateCovid.addDays(i - 1).toLocaleDateString()}</span></div><div class="span-flex"><span class="color-number color-number_size">
        // ${arrHumans[i]}(+${difference})</span></div><div class="span-flex"><span class="color-number color-number_size">
        // ${iResult} ${difference2}%</span></div></div>`;

        resultCom += `<div class="resBlock resBlock_abs"><span class="color-number_small" title="Дата">
        ${toDateCovid.addDays(i - 1).toLocaleDateString()}</span><span class="color-number color-number_bot" title="кол-во зараженных">
        ${arrHumans[i]}</span><span class="color-number_small_bottom-right" title="кол-во человек за сутки">+${difference} ${iResult}${difference2.toFixed(1)}%</span></div>`;
    }

    resultCom += `<iframe src="https://www.gorses.na4u.ru/map.html" width="100%" height="820" frameborder="0" allowfullscreen="true" style="position:relative;"></iframe>`;

    let countHumansSum = 0;
    let hCount = 0;
    let countHuSum = 1;

    for (; hCount < numberOfDays7; hCount++) {
        countHumansSum += arrComparePercent[arrComparePercent.length - countHuSum];
        countHuSum++
    }
    countHumansSum = (countHumansSum / hCount).toFixed(1);

    iToday = i - 1;

    resultCom += `<h1 class="h1">РнаОПД</h1>`;
    result.innerHTML += resultCom;

    let humans = arrHumans[arrHumans.length - 1];

    resultCom += `<div id="result_com_block">`

    for (; i <= 452; i++) {
        if (humans <= 19000000000) {
            dif = humans;
            humans += resultFunc(humans);
            let y = Math.floor(humans);
            dif = Math.floor(humans - dif);
            resultCom += `<div class="resBlock resBlock_abs"><span class="color-number_small" title="Дата">
            ${toDateCovid.addDays(i - 1).toLocaleDateString()}</span><span class="color-number color-number_bot" title="кол-во зараженных">
            ${y}</span><span class="color-number_small_bottom-right" title="кол-во человек за сутки">+${dif}</span></div>`;

            if (y > 140000000 && leftBeforeInfection === 0) {
                leftBeforeInfection = i - iToday;
                toDateCovidFull = toDateCovid.addDays(i - 1).toLocaleDateString();
            }
        }
    }
    resultCom += `</div>`
    result.innerHTML = resultCom;

    function resultFunc(x) {
        return humans / 100 * countHumansSum;
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

    function sec() {
        let todayTime = new Date().toLocaleTimeString();

        resultTop.innerHTML = `
<div class="res_top_flex_left">
<div>
<div class="res_top_text">день</div>
</div>
<div>
<div class="res_top_text">Зар.</div>
</div>
<div>
<div class="res_top_text">ср.</div>
</div>
<div>
<div class="res_top_text">Выздор.</div>
</div>
<div>
<div class="res_top_text">Смерт.</div>
</div>
<div>
<div class="res_top_text">Cв. обл.</div>
</div>
<div>
<div class="res_top_text">Актив.</div>
</div>
<div>
<div class="res_top_text">До ПЗ</div>
</div>
<div>
<div class="res_top_text">см-ть</div>
</div>
</div>

<div class="res_top_flex_right">
<div>
<span class="color-number">${iToday}</span><span class="color-number">${today}</span>
</span> <span class="color-number">${todayTime}</span>
</div>
<div>
<span class="color-number">${arrHumans[arrHumans.length - 1]} (+${difference})</span><span class="color-number">${iResult} ${difference2.toFixed(1)}%</span>
</div>
<div>
<span class="color-number">${countHumansSum}%</span>
</div>
<div>
<span class="color-number recovered_color">${recovered[recovered.length - 1]}(+${recovered[recovered.length - 1] - recovered[recovered.length - 2]})</span><span class="color-number recovered_color">${recoverPercent}%</span>  
</div>
<div>
<span class="color-number">${deaths[deaths.length - 1]}(+${deaths[deaths.length - 1] - deaths[deaths.length - 2]})</span><span class="color-number">${statRussia}%</span>
</div>
<div>
<span class="color-number">${sverdlRegion[sverdlRegion.length - 1]}(+${sverdlRegion[sverdlRegion.length - 1] - sverdlRegion[sverdlRegion.length - 2]})</span><span class="color-number">${sverdlRegionDeaths[sverdlRegionDeaths.length - 1]}(+${sverdlRegionDeaths[sverdlRegionDeaths.length - 1] - sverdlRegionDeaths[sverdlRegionDeaths.length - 2]})</span><span class="color-number">${statSverdlRegionDeaths}%</span><span class="color-number recovered_color">${sverdlRegionRecovered[sverdlRegionRecovered.length - 1]}(+${sverdlRegionRecovered[sverdlRegionRecovered.length - 1] - sverdlRegionRecovered[sverdlRegionRecovered.length - 2]})</span><span class="color-number recovered_color">${sverdlRegionRecoverPerent}%</span>
</div>
<div>
<span class="color-number">${active}</span> 
</div>
<div>
<span class="color-number">${leftBeforeInfection}</span><span class="color-number">${toDateCovidFull}</span>
</div>
<div>
<span class="color-number"><span class="color-number__span-flex">${statWorld}%</span></span><span class="color-number"><span class="color-number__span-flex">${stat1}%</span></span><span class="color-number"><span class="color-number__span-flex">${stat2}%</span></span><span class="color-number"><span class="color-number__span-flex">${stat3}%</span></span>
</div>
</div>`;

    }

    setInterval(sec, 1000);
};
render();

let backVideo = document.getElementById("nubexDiv");
let intFlag = 1;
let setInt;

function intervalVideo() {
    if (intFlag === 1) {
        backVideo.innerHTML = `<video id="nubexVideo" loop="loop" autoplay="autoplay" preload="auto" muted="muted">
        <source src="img/earch.mp4">
    </video>`;
    } else if (intFlag === 2) {
        backVideo.innerHTML = `<video id="nubexVideo" loop="loop" autoplay="autoplay" preload="auto" muted="muted">
        <source src="img/COVID-19.mp4">
    </video>`;
    } else if (intFlag === 3) {
        backVideo.innerHTML = `<video id="nubexVideo" loop="loop" autoplay="autoplay" preload="auto" muted="muted">
        <source src="img/en.mp4">
    </video>`;
    }

    intFlag = funcFlag();
    setInt = funcInt();

    function funcInt() {
        if (setInt === undefined) {
            return setInt = 20000;
        } else if (intFlag === 1) {
            return setInt = 60000;
        } else if (intFlag === 2) {
            return setInt = 20000;
        } else {
            return setInt = 3500;
        }
    }

    setTimeout(intervalVideo, setInt);

    function funcFlag() {
        if (intFlag === undefined) {
            return intFlag = 1;
        } else if (intFlag === 1) {
            return intFlag = 2;
        } else if (intFlag === 2) {
            return intFlag = 3;
        } else if (intFlag === 3) {
            return intFlag = 1;
        }
    }
}

intervalVideo();

let butCloseStat = document.querySelector(".h1");
let butOpenStat = document.querySelector("#result_com_block");
let pass;

butCloseStat.onclick = function () {
    if (pass !== today) {
        while (true) {
            if (pass === today) {
                butOpenStat.style.display = 'block';
                break;
            } else {
                pass = prompt("Введите пароль к закрытой статистике");
            }
        }
    }
};
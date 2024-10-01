function conditionCheck() {
    let temp = +document.getElementById("temp").value;

    if (temp >= 30) {
            document.getElementById("result")
                .innerHTML = "its too hot"

    } else if (temp >= 25) {
            document.getElementById("result")
                .innerHTML = "Its plesent outside"

    } else if (temp >= 20) {
            document.getElementById("result")
                .innerHTML = "Its a Lovely Weather Outside"

    } else if (temp >= 10) {
            document.getElementById("result")
                .innerHTML = "Carry a Jacket"

    } else if (temp >= 1) {
            document.getElementById("result")
                .innerHTML = "probably you would need a jacket"

    } else if(temp<=1){
            document.getElementById("result")
                .innerHTML = "its freezing outside"
    }

    }

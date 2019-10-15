window.addEventListener('load', function OnWindowLoaded() {

    var text = document.getElementById("input-text");

    document.getElementById("main1").onclick = function () {
        var a = document.getElementById("main1").value;
        text.value = text.value + a
    }

    document.getElementById("main2").onclick = function () {
        var a = document.getElementById("main2").value;
        text.value = text.value + a
    }

    document.getElementById("main3").onclick = function () {
        var a = document.getElementById("main3").value;
        text.value = text.value + a
    }

    document.getElementById("main+").onclick = function () {
        var a = document.getElementById("main+").value;
        text.value = text.value + a
    }

    document.getElementById("main4").onclick = function () {
        var a = document.getElementById("main4").value;
        text.value = text.value + a
    }

    document.getElementById("main5").onclick = function () {
        var a = document.getElementById("main5").value;
        text.value = text.value + a
    }

    document.getElementById("main6").onclick = function () {
        var a = document.getElementById("main6").value;
        text.value = text.value + a
    }

    document.getElementById("main-").onclick = function () {
        var a = document.getElementById("main-").value;
        text.value = text.value + a
    }

    document.getElementById("main7").onclick = function () {
        var a = document.getElementById("main7").value;
        text.value = text.value + a
    }

    document.getElementById("main8").onclick = function () {
        var a = document.getElementById("main8").value;
        text.value = text.value + a
    }

    document.getElementById("main9").onclick = function () {
        var a = document.getElementById("main9").value;
        text.value = text.value + a
    }


    document.getElementById("main/").onclick = function () {
        var a = document.getElementById("main/").value;
        text.value = text.value + a
    }

    document.getElementById("mainC").onclick = function () {
        text.value = null
    }

    document.getElementById("main0").onclick = function () {
        var a = document.getElementById("main0").value;
        var b = text.value[text.value.length - 1];
        if (b != '/'){
            text.value = text.value + a 
        } else{
            text.value = 'Нельзя так'
        }        
    }

    document.getElementById("main*").onclick = function () {
        var a = document.getElementById("main*").value;
        text.value = text.value + a
    }

    document.getElementById("main)").onclick = function () {
        text.value = text.value + ')'
    }

    document.getElementById("main(").onclick = function () {
        text.value = text.value + '('
    }

    document.getElementById("main-dot").onclick = function () {
        text.value = text.value + '.'
    }

    document.getElementById("mainA").onclick = function () {
        text.value = text.value.substring(0,text.value.length-1)
    }

    document.getElementById("main=").onclick = function () {
        var m = false;
        for(let i = 0; i < text.value.length; i++){
            if (text.value[i] == '.'){
                m = true;
            } 
        }
        var N = eval(text.value);
        if (m == true){
            text.value =  N.toFixed(2)
        }else{
            text.value =  N
        }
    }


});
function tabuada() {
    let num = window.document.getElementById("num");
    let end = window.document.getElementById("end");
    if (num.value.length === 0 || end.value.length === 0) {
        window.alert("[ERRO] Confira seus dados!");
    } else {
        let n = Number(num.value);
        let e = Number(end.value);
        let x = 0;
        let r = "";
        let res = window.document.getElementById("resposta");
        res.innerHTML = `A tabuada do ${n} é: <br>`;
        
        do {
            r = n * x;
            res.innerHTML += `${n} x ${x} = ${r} <br>`;
            x++;
        } while (x <= e);
    }
}
function calculator(op){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);

    

    let res;

    if(op=="+"){
        res=num1+num2;
    }else if(op=="-"){
        res=num1-num2;
    }
    else if(op=="/"){
        res=num1/num2;
    }
    else if(op=="*"){
        res=num1*num2;
    }
    else{
        document.getElementById("result").innerText="Invalid operation!";
        return;
    }

    document.getElementById("result").innerText = `Result: ${res}`;
} 
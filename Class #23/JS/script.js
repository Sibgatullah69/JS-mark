function button()
{
    let result = document.getElementById("result").value;


    if (result >= 80 )
    
        document.getElementById("demo").innerHTML = ('A+');
    

    else if(result >= 70 && result < 80)
    
        document.getElementById("demo").innerHTML = ('A');
    

    else if(result >= 60 && result < 70)
    
        document.getElementById("demo").innerHTML = ('A-');
    

    else if(result >= 50 && result < 60)
    
        document.getElementById("demo").innerHTML = ('B');
    

    else if(result >= 40 && result < 50)
    
        document.getElementById("demo").innerHTML = ('C');
    

    else if(result >= 33 && result < 40)
    
        document.getElementById("demo").innerHTML = ('D');
    

    else 

    document.getElementById("demo").innerHTML = ('F');


}
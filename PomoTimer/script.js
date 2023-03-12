var html = document.getElementsByTagName("html");
var p = document.querySelector("p");
var btn = document.querySelector("button")

var Hour;
var Minute = 25;
var Second = 00;
var timer;
var breakTime = true;
// btn.addEventListener('click', start) // 不能用這樣啟動
btn.addEventListener('click', function(){
    btn.classList.add("selected");
    btn.disabled = true;
    timer = setInterval(showTime, 1000)
})

showTime = function(){
    // alert(minute + ':' + second);
    if(Second === 0)
    {
        if(Minute === 0)
        {
            if(breakTime)
            {
                alert("Times up! B");
                Minute = 5;
                Second = 0;
                p.innerHTML = FormatTime(5, 0);
                breakTime = false;
                
            }
            else
            {
                alert("Times up! W");
                Minute = 25;
                Second = 0;
                p.innerHTML = FormatTime(25, 0);
                breakTime = true;
                // window.location.reload(); // 暫時性的
            }
            clearInterval(timer);
            btn.classList.remove("selected");
            btn.disabled = false;
            return;
        }
        else
        {
            Minute--;
            Second = 60;
        }
    }
    Second--;
    p.innerHTML = FormatTime(Minute, Second);
}

function FormatTime(minute, second)
{
    result = '';
    
    if(minute < 10)
    {
        result += '0' + minute;
    }
    else
    {
        result += minute;
    }

    result += ':';

    if(second < 10)
    {
        result += '0' + second;
    }
    else
    {
        result += second;
    }
    
    return result;
}





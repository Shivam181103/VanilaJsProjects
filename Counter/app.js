let value = 0;
const events = document.querySelectorAll(".btn");
const cnt = document.querySelector("#count");

events.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('btn-dec')) {
            value--;
        }
        else if (styles.contains('btn-inc')) {
            value++;
        }
        else {
            value = 0;
        }
        
       cnt.textContent=value;

       if (value < 0) {
        cnt.style.color = "red";
    } else if (value > 0) {
        cnt.style.color = "blue";
    }
    else {
        cnt.style.color = "black";
    }
    
    });
});



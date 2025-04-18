
let btn_Summit = document.querySelector("#btn-summit");
let btnReload = document.querySelector("#btnReload");
let nameStu = document.querySelector("#nameStu");
let statusEnglish = document.querySelector("#statusEnglish");
let statusMath = document.querySelector("#statusMath");
let codeStudent = document.querySelector("#codeStudent");
let data = document.querySelector(".data");
let materials = document.querySelector(".materials");
let stdNotFound = document.querySelector(".stdNotFound")
let btns = document.querySelector(".btns")
let result = document.querySelector("#result");

let dataAhmed_Name = "ahmed ali";
let dataAhmed_code = "123";

var bg = 0;


nameStu.addEventListener("input", function () {
    if (nameStu.value.trim() !== "" && isFinite(nameStu.value)) {
        
        nameStu.classList.add("invalid");
    } else {
        nameStu.classList.remove("invalid");
    }

  
});

let alertMessege = document.querySelector(".alertMessege");

let isFirstStepDone = false;

btn_Summit.addEventListener("click", (e) => {
    e.preventDefault();

    if (!isFirstStepDone) {
        
        if (nameStu.value == "" || codeStudent.value == "") {
            alertFunction();
            return;
        }

        if (nameStu.value.toLowerCase() == "ahmed ali" || codeStudent.value == "123") {
            data.classList.add("dis-none");
            materials.classList.remove("dis-none");
            materials.classList.add("dis-block");
            btnReload.classList.remove("dis-none");
            btnReload.classList.add("dis-block");
            btn_Summit.innerHTML = `النتيجة`;
            isFirstStepDone = true; 
        } else {
            data.classList.add("dis-none");
            stdNotFound.classList.remove("dis-none");
            stdNotFound.classList.add("dis-block");
            btn_Summit.classList.add("dis-none");
            btnReload.classList.remove("dis-none");
            btnReload.classList.add("dis-block");
            btns.classList.add("w-fit", "mx-auto", "mt-7");
        }

    } else {
       
        if (statusEnglish.value == "" || statusMath.value == "") {
            alertFunction();
            return;
        }

        console.log("English:", );
        console.log("Math:", test(statusMath.value));
        


        result.innerHTML=`
        
    <h4 class=" p-3 my-2 ${bg}">ماده الانجليزي : ${test(statusEnglish.value)} </h4>
    <h4 class=" p-3 ${bg}"> ماده الياضيات : ${test(statusMath.value)}</h4>  
    
    `
    }
});


function alertFunction(){
    alertMessege.style.display = "block"
    setTimeout(() => {
        alertMessege.style.display = "none"
    },3000)
}
function test(dgree) {
  

    if (dgree < 50) {
        bg = "bg-red-600";       
        return 'فشلت';
    }
    if (dgree >= 50 && dgree <= 70) {
        bg = "bg-yellow-500";   
        return 'جيد';
    }
    if (dgree > 70 && dgree <= 90) {
        bg = "bg-green-500";     
        return 'جيد جدا';
    }
    if (dgree > 90 && dgree <= 100) {
        bg = "bg-lime-600";      
        return 'ممتاز';
    }

    bg = "bg-gray-400";
    return 'درجة غير صحيحة';
}


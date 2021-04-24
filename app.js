var b = document.getElementById("btn")
var br = document.getElementById("btnr")

b.addEventListener('click',()=>{
    const height = document.getElementById("height-inp").value;
    const weight = document.getElementById("weight-inp").value;
    const bmi = weight/(height*height)
    if (isNaN(bmi)){
        document.getElementById('result').innerHTML = `<ion-card>
        <ion-card-content>
            <h1 id="bmir" class="ion-text-center">Invalid Input</h1>
        </ion-card-content>
    </ion-card>`
    }
    else{
        document.getElementById('result').innerHTML = `<ion-card>
        <ion-card-content>
            <h1 id="bmir" class="ion-text-center">Result: ${(bmi).toFixed(2)}</h1><br><br>
            <h1 id="bmir" class="ion-text-center">Underweight&nbsp;&nbsp;< 18.5 </h1>
            <h1 id="bmir" class="ion-text-center">Normal&nbsp;&nbsp;&nbsp;18.5–24.9 </h1>
            <h1 id="bmir" class="ion-text-center">Overweight&nbsp;&nbsp;25.0–29.9 </h1>
            <h1 id="bmir" class="ion-text-center">Obesity&nbsp;&nbsp;&nbsp;30.0 and Above </h1>
        </ion-card-content>
    </ion-card>`
    }
})
br.addEventListener('click',()=>{
    document.getElementById("height-inp").value = "";
    document.getElementById("weight-inp").value = "";
    document.getElementById("result").innerHTML = "";

})
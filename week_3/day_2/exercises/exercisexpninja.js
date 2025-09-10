//----exercise 1-----//

const person1 = {
    fullName: "Karim El Idrissi",
    mass: 85,
    height: 1.80,
    calculateBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }

};

const person2 = {
    fullName: "Youssef El Idrissi",
    mass: 95,
    height: 1.85,
    calculateBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }   
};

function compareBMI(p1, p2) {
    const bmi1 = person1.calculateBMI();
    const bmi2 = person2.calculateBMI();        

    console.log("BMI of " +p1.fullName+ ": " +bmi1.toFixed(2));
    console.log("BMI of " +p2.fullName+ ": " +bmi2.toFixed(2));

    if (bmi1 > bmi2) {
        console.log(p1.fullName + " have a BMI higher than " + p2.fullName + ".");
    }else if (bmi2 > bmi1) {
        console.log(p2.fullName + " have a BMI higher than " + p1.fullName + ".");
    }else {
        console.log(p1.fullName + " and " + p2.fullName + " have the same BMI.");
    }  
}

compareBMI(person1, person2);

//-------exercise 2-------//

const grades = [85, 92, 78, 90, 88];

function findAvg(gradesList){

    let sum = 0;
    for(let i = 0; i < gradesList.length; i++){
        sum += gradesList[i];
    }
    const average = sum / gradesList.length;
    console.log("Average grade:", average);

    if(average>60){
        console.log("Passed");
    } else {
        console.log("Failed");
    }
}
findAvg(grades);
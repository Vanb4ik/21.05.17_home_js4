/*
Переписати програму зі створення обєктів машин
(5 машин, model, brand, engineDisplacement) 
на використання класів (функцій-конструкторів)

 */
 function Auto (brand,model,motor)
 {
     this.brandName= brand;
     this.modelName=model;
     this.engineDisplacement=motor;
 }

 var mass=[];
 var tempMass=[];
 var VALUE_CARS=4;

 for(var i=0;i<VALUE_CARS;i++)
 {
    mass[i]=new  Auto
    (
        prompt("Enter firm name "),
        prompt("Enter model name"),
        parseFloat(prompt("Motor value"))
    );
 }
 for(var j=0;j<mass.length;j++)
 {
     if (mass[j].engineDisplacement>=2)
     {
         tempMass.push(mass[j]);
     }
 }
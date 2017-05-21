/*
 Написати клас ArrayWrapper.
 Це клас, який в конструктор приймає масив і надає наступні методи роботи з цим масивом:

 - generateRandom(itemsAmount) - генерує масив з випадкових чисел вказаної довжини

 - convertToString(delimeter) - обєднує всі елементи в строку розділені вказаним роздільником

 - getCount() - повертає кількість елементів

 - getSourceArray() - повертає копію масиву на базі якого він створений

 - initializeFrom(sourceArray) - ініціалізується з переданого масиву

 - remove(index) - видаляє елемент по індексу

 - add(item) - додає новий елемент

 - contains(target) - перевіряє чи такий елемент є

 - indexOf(item) - повертає індекс переданого елемента

 - getAllOccurences(item) - повертає масив індексів, під якими зустрічається переданий елемент

*/
var mass=[1,2,3,4,5];
var mass2=[2,1,2,4,5,6];
var a = new ArrayWrapper(mass);
function ArrayWrapper(arg)
{
     this.mass = arg;
}
ArrayWrapper.prototype.generateRandom = function (itemsAmount)           //генерує масив з випадкових чисел вказаної довжини
{
    var tempMass=[];
    for   (var i=0, temp=0;i<itemsAmount;i++)
    {
        temp=Math.round(Math.random() * (15-5)+5);
        tempMass.push(temp);
    }
    return tempMass;
};
ArrayWrapper.prototype.convertToString = function (delimeter)            //обєднує всі елементи в строку розділені вказаним роздільником
{
    return this.mass.join(delimeter);
};
ArrayWrapper.prototype.getCount=function ()                              //повертає кількість елементів
{
    return mass.length;
};
ArrayWrapper.prototype.getSourceArray=function ()                        //повертає копію масиву на базі якого він створений
{
    return this.mass;
};
ArrayWrapper.prototype.initializeFrom = function (sourceArray)           //ініціалізується з переданого масиву
{
    return this.mass = sourceArray;
};
ArrayWrapper.prototype.remove = function (index)                         //видаляє елемент по індексу
{
    this.mass.splice(index,1);
    return this.mass;
};
ArrayWrapper.prototype.add = function (item)                             //додає новий елемент
{
    for(var i =0;i<arguments.length;i++)
    {
        this.mass.push(arguments[i]);
    }
    return this.mass;
};
ArrayWrapper.prototype.contains = function (target)                      //перевіряє чи такий елемент є
{
    for(var i =0;i<this.mass.length;i++)
    {
        if (target===this.mass[i])
        {
            return true;
        }
    }
    return false;
};
ArrayWrapper.prototype.indexOf=function (item)                           //повертає індекс переданого елемента
{
    var a = this.mass.indexOf(item);
    return (a!==-1)? a:"немає такого елемента";
};
ArrayWrapper.prototype.getAllOccurences = function (item)                //повертає масив індексів, під якими зустрічається переданий елемент
{
    var tempMass = [];
    var temp = this.mass.indexOf(item);
    while (temp!==-1)
    {
        tempMass.push(temp);
        temp=this.mass.indexOf(item,temp+1);
    }
    return tempMass;
};
console.log(a.generateRandom(10));
console.log(a.convertToString("+"));
console.log(a.getCount());
console.log(a.getSourceArray());
console.log(a.initializeFrom(mass2));
console.log(a.remove(0));
console.log(a.add(33,33));
console.log(a.contains(33));
console.log(a.indexOf(33));
console.log(a.getAllOccurences(33));




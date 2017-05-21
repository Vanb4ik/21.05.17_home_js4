/*
 Написати клас Point, яка приймає в конструктор дві точки - "х" та "у".

 Цей клас повинен мати наступні методи:
 - add(otherPoint) - додає координати другої точки і повертає нову точку
 (наприклад, var a=  new Point(10, 10); var b = new Point(5, 5), то результатом виклику a.add(b) буде Point(15, 15))

 - subtract(otherPoint) - аналогічно до add, але робить віднімання
 - getX() - повертає X
 - getY() - повертає Y

 - equals(otherPoint) - повертає true, якщо дві точки мають одинакові координати (var a = new Point(10, 10);
 var b = new Point(10, 10) -> a.equals(b) === true)
 - toString() -> Point{x=10, y=10} - переопреділяє метод так, щоб вивід був,як в прикладі

 - valueOf - повертає суму двох точок
*/
function Point(x,y)
{
    this.x=x;
    this.y=y;
}
Point.prototype.add=function (otherPoint)
{
    this.x+=otherPoint.x;
    this.y+=otherPoint.y;
    return console.log(`Point(${this.x},${this.y})`);
};
Point.prototype.subtract=function (otherPoint)
{
    this.x-=otherPoint.x;
    this.y-=otherPoint.y;
    return console.log(`Point(${this.x},${this.y})`);
};
Point.prototype.getX=function ()
{
    return console.log(this.x);
};
Point.prototype.getY=function ()
{
    return console.log(this.y);
};
Point.prototype.equals=function (otherPoint)
{
    if ((this.x===otherPoint.x)&&(this.x===otherPoint.x))
    {
        return console.log(true);
    }
    return console.log(false);
};
Point.prototype.toString=function ()
{
    return console.log(`Point{x=${this.x}, y=${this.y}}`);
};
Point.prototype.valueOf=function ()
{
    return console.log(this.x+this.y);
}
var a = new Point(10,5);
var b = new Point(10,5);
a.add(b);
a.subtract(b);
b.getX();
b.getY();
a.equals(b);
a.toString();
b.valueOf();
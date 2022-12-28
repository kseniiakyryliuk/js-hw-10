//Завдання 1
console.log('Завдання 1');
const studentO={
  firstName:'sonia',
  surname:'lazar',
};

console.log(studentO);
//клас
class Person{
  constructor(firstName,surname){
    this.firstName=firstName;
  this.surname=surname;
  }
}
//об'кт наслідує властивості класу
let studentP=new Person('sonia', 'lazar');
console.log(studentP);


//Завдання 2
console.log('\n Завдання 2');
class User{
  constructor(firstName, surname, age){
  this.firstName=firstName;
  this.surname=surname;
  this.age=age;}
}
class Developer extends User{
  constructor(firstName, surname, age, technologyStack, position){
  super(firstName, surname,age) ;
  this.technologyStack=technologyStack;
  this.position=position;}

infoAboutUser(){
 return `Name - ${this.firstName}, surname - ${this.surname}, age - ${this.age}, technology stack - ${this.technologyStack}, позиція -${this.position}`;
}
}

const developer= new Developer('taras', 'korol', 23,'somithing', 'QA' );
console.log(developer.infoAboutUser());

//Завдання 5 пов'язане із завданням 2
console.log('\n Завдання 5');
console.log('Належить до класу?', developer instanceof Developer);

console.log('Чи має об’єкт такі ключі як name, age, hobby? \n',developer.hasOwnProperty('name'), developer.hasOwnProperty('age'),developer.hasOwnProperty('hobby') );



//Завдання 3
console.log('\n Завдання 3');

class Year{
constructor(yearThis, yearBirth){
this.yearThis=yearThis;
this.yearBirth=yearBirth;}
calculateAge()
{
  return `ВІК: ${this.yearThis - this.yearBirth}`;
}
}

const personAge=new Year(2022,2000);
console.log(personAge.calculateAge());

//Завдання 4
console.log('\n Завдання 4');
class Friend{
  constructor(name){
    this.name=name;
  }
}

class bestFriend extends Friend{
  constructor(name,game){
    super(name);
    this.game=game;
  }
  favouriteGame(){
    return `I like playing ${this.game}` 
  }
}

const iryna=new bestFriend('iryna', 'golf');
const petro=new bestFriend('petro', 'football');
console.log(iryna.favouriteGame());
console.log(petro.favouriteGame());




//Завдання 6
console.log('\n Завдання 6');
class Person6{
  constructor(name, surname)
  {
    this.name=name;
    this.surname=surname;
      }

showFullName()
  {
    return `Full name:  ${this.surname} ${this.name}`;
    }
}

class Me extends Person6{
  constructor(name, surname,midleName, curYear, yearOfBirth){
    super(name, surname);
 this.midleName=midleName;
 this.curYear=curYear;
 this.yearOfBirth=yearOfBirth;
   }
  showFullName()
  {
    return `Full name: ${this.surname} ${this.name} ${this.midleName}`;
    }
    showYourAge(){
      return `Age: ${this.curYear-this.yearOfBirth}`
    }
                         }


const irynaK=new Person6('Iryna', 'Kyryliuk');
console.log(irynaK.showFullName());

const oksana=new Me('Oksana', 'Kyryliuk','Ivanivna', 2022, 2004);
console.log(oksana.showFullName());
console.log(oksana.showYourAge());

//Завдання 7
console.log('\nЗавдання 7');

class Worker
{ #experience;
  constructor(fullName,dayRate,workingDays){
  this.fullName=fullName;
  this.dayRate=dayRate;
  this.workingDays=workingDays;
  this.#experience=1.2;
}
  get experience(){
   return this.#experience; 
  };
  set experience(value){
   this.#experience=value;
  }
 toString(){
  return this.fullName;
 }
showSalary(){
    return ` salary = ${this.dayRate*this.workingDays} `
} 
showSalaryWithExperience(){
  return ` salary with experience = ${this.dayRate*this.workingDays*this.#experience} `
} }
const worker1=new Worker('Taras',12,2);
const worker2=new Worker('Nazar',12,2);
//переприсвоювання experience
worker2.experience=1.5;
// після переприсвоювання приватне поле experience видиме
//console.log('Experience',worker2.experience);

let listWorker=[worker1, worker2];
for (let i = 0; i < listWorker.length; i++) {
 console.log('Full name:'+ listWorker[i].toString()+listWorker[i].showSalary()+listWorker[i].showSalaryWithExperience());
  }





//Завдання 8
console.log('\n Завдання 8');
class GeometricFigure{
  constructor(){};
  toString(){};
  getArea(){
  
  };
}

class Triangle extends GeometricFigure{
  constructor(a,b,name)
  {
    super();
    this.a=a;
    this.b=b;
    this.name='triangle';
   }
  getArea(){
    //Площа прямокутного трикутника
    return this.a*this.b*0.5;
}
}
class Square extends GeometricFigure{
  constructor(a,name)
  {
    super();
    this.a=a;
    this.name='square';
   }
  getArea(){
    return this.a*this.a;
}
};

class Circle extends GeometricFigure{
  constructor(r, name)
  {
    super();
       this.r=r;
       this.name='circle';
   }
  getArea(){
 return this.r*this.r*3.14; 
  }
};

const circle=new Circle(2);
const square=new Square(4);
const triangle=new Triangle(4,5);

let figures=[circle,triangle,square];

//Знаходження суми всіх площ
let sum=0;
const getTotalSum=figures.reduce((sum, item)=> sum+item.getArea(),0)

function handleFigures(figures){
for(let i=0; i<figures.length; i++){
if (figures[i] instanceof GeometricFigure) console.log(figures[i].name,'  ',figures[i].getArea());
}
console.log('Сумарна площа ',getTotalSum);
}

handleFigures(figures);
'use strict';

let donaters=[];
let amount=['100','300','500'];
let maxAge = 60
let minAge = 20
let randomAge=[];

function getRandomInt(minAge, maxAge) {
    return Math.floor(Math.random() * (maxAge - minAge) + minAge);
  }

function Donater(Name, amount, age) {
    this.Name= Name;
    this.Amount=amount;
    this.age= getRandomInt();

}

let Ahmad = new Donater('Ahmad', 100, getRandomInt() );
let Mohammed = new Donater('Mohammed', 300, getRandomInt() );
let Ali = new Donater('Ali', 500, getRandomInt() );

// global table
let parent=document.getElementById('parent');
let table=document.createElement('table');
parent.appendChild(table);
console.log(parent);

function makeHeader() {
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);

    let firstHeader= document.createElement('th');
    headerRow.appendChild(firstHeader);
    firstHeader.textContent="Donator Name";

    let secondHeader= document.createElement('th');
    headerRow.appendChild(secondHeader);
    secondHeader.textContent="Donation amount (jd)"

    let lastHeader = document.createElement('th');
    headerRow.appendChild(lastHeader);
    lastHeader.textContent="Age";
    
}
makeHeader();

// render method to put data inside table
Donater.prototype.render= function(){
    let nameRow=document.createElement('tr');
    table.appendChild(nameRow);

    let donaterName=document.createElement('td');
    nameRow.appendChild(donaterName);

    donaterName.textContent=this.Name;



}
updateStorage();

// event listner for the submit query to when click it add data to table
// I am thinking to call the render function here
let addData=document.getElementById('form');
addData.addeventlistner('Submit Query', submitter);
function submitter(event) {
    event.preventdefault
    let Name = event.target.Name.value;
    let amount = parseInt(event.target.number.value);
    render();

    
}

// for local storage
function updateStorage() {
    let stringArr=JSON.stringify(donaters[i]);
    localStorage.setItem('items', stringArr);
    
}

function loadData() {
    let itemsArr = JSON.parse(localStorage.getItem('items'));
    if(itemsArr ==! null){
        for (let i = 0; i < itemsArr.length; i++) {
            new Donater(itemsArr[i].Name, itemsArr[i].amount, itemsArr[i].age, )
            
        }
    }
    
}
loadData();

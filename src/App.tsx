import React from 'react';
import logo from './logo.svg';
import './App.css';


let a:number | null = 10;
a = null;

let names: Array<string> = ['john', 'mary', 'bill'];
alert(names[0].toUpperCase());

let numbers: number[] = [1,2,3];
numbers.forEach( (n) => {
  alert(n ** 2);
});

let sex: 'male' | 'female'; // assign a type ('male' or 'female') to a variable sex
//sex = "man"  -error, sex only can be of a type 'male' or 'female'
// можно использовать там где нужна переменная с неизменяемым значением, например, action.type in React

//--------------------------------------------------Работа с объектами
//Создаём type для obj:
type objType = {
  name: string
  age: number
  isAlive: boolean
  address: addressType | null
  say: (message: string) => void  // void значит не возвращает ничего
};

type addressType = {
  city: string       // city?: string - так мы делаем что свойство city становится не обязательным
  index: number
};

let obj: objType = {
  name: 'John',
  age: 22,
  isAlive: true,
  address: {
    city: 'Tomsk',
    index: 634050
  },
  say(message: string) { 
    alert(message);
  }
};
obj.say('hi');
//obj.size  - error, не даёт создавать новые свойства, как это можно в JS

//-------------------------------------
// Типизацию для sum можно не делать, она создастся неявно сама, но если функция является методом
// объекта, типизацию делать надо
const sum = function (a: number, b: number) {
  return a + b;
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

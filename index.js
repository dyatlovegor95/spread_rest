const citiesRussia = ['Москва', 'Питер', 'Казань', 'Новосибирск']
const citiesEurope = ['Берлин', 'Прага', 'Париж']

const citiesRussiaWithPopulation = {
    Moscow: 20,
    SaintPetersburg: 8,
    Kazan: 5,
    Novosibirsk: 3
}
  
const citiesEuropeWithPopulation = {
    Moscow: 26,
    Berlin: 10,
    Praha: 3,
    Paris: 2
}



/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// SPREAD служит для разворачивания массивов, создания и клонирования новых массивов и объектов
// SPREAD МАССИВЫ
// Если мы применим spread к массиву, то он развернет массив

//console.log(...citiesRussia)
//console.log(...citiesEurope)


let allCities
// 1. Клонирование массива
//const allCities = [...citiesEurope] 

// 2. Объединение массивов
allCities = [...citiesEurope, 'Вашингтон', ...citiesRussia]

// 3. Старый способ объединения массивов
allCities = citiesEurope.concat(citiesRussia)
console.log(allCities)

/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////// 




/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// SPREAD ОБЪЕКТОВ
// Просто развернуть объект нельзя, необходимо создать новый объект, а уже потом развернуть
console.log({...citiesRussiaWithPopulation})

// умный сопособ объединения объектов.
// если есть одинаковые ключи у объединяемых объектов, то по данному ключу будет лежать значение из последнего объекта
console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation})
console.log({...citiesEuropeWithPopulation, ...citiesRussiaWithPopulation})

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// SPREAD PRACTICE
const numbers = [5, 37, 42, 17]
console.log(Math.max(5, 37, 42, 17))

// Разворачиваем массив, для корректных параметров функции
console.log(Math.max(...numbers))

// Старый способ, через apply
console.log(Math.max.apply(null, numbers))
  
const divs = document.querySelectorAll('div')
const nodes = [...divs]
console.log(divs, Array.isArray(divs))
console.log(nodes, Array.isArray(nodes))

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////




 
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// REST собирает все парметры либо в массив либо в объект
// 1. Замена аргумента arguments, через rest новый способ
function sum(a, b, ...rest) {
    return a + b + rest.reduce((a, i) => a + i, 0)
}
  
const nums = [1, 2, 3, 4, 5, 6, 7, 8]
  
console.log(sum(...nums))
  
const a = nums[0]
const b = nums[1]
  
const [a, b, ...other] = nums

console.log(a, b, other)
  
const person = {
    name: 'Max',
    age: 20,
    city: 'Moscow',
    country: 'Russia'
}
  
const {name, age, ...address} = person
  
console.log(name, age, address)
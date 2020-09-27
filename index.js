//
//
//
//--------------------TASk 1 --------------------
//
//
//
const candies = (candy,pineapple,apple,weight) =>{
	
	// перевірка чи всі змінні є числами
	if( typeof(candy) != 'number' || typeof(pineapple) != 'number' || typeof(apple) != 'number' || typeof(weight) != 'number'){
		console.log(`------------------------------------`)
		console.log('Помилка - усі дані мають бути числами')
		console.log(`------------------------------------`)
		return
	}
	// перевірка чи всі змінні є більші ніж 0
	if(candy <= 0 || pineapple <= 0 || apple <= 0 || weight <= 0){
		console.log(`------------------------------------`)
		console.log('Помилка - усі числа мають бути більшими ніж 0')
		console.log(`------------------------------------`)
		return
	}
	// визначаєм максимальну кількість 
	// елементів які поміщаються в мішок
	const countOfCandy = Math.floor(weight/candy)
	const countOfPineapple = Math.floor(weight/pineapple)
	const countOfApple = Math.floor(weight/apple)

	let countOfGift = 0;
	console.log(`------------------------------------`)

	// проходимось циклом і перебираєм усі 
	// можливі варіанти подарунків
	for(let a = 0; a <= countOfCandy;a++){
		for(let b = 0; b <= countOfPineapple;b++){
			for(let c = 0; c <= countOfApple;c++){
				// якщо кількість подарунків відповідає вказанів сумі то ми записуєм це подарунок 
				if((a * candy) + (b * pineapple) + (c * apple) == weight){
					countOfGift++
					console.log(`Подарунок складається з ${a} candy,${b} pineapple,${c} apple`)
				}
			}
		}	
	}
	console.log(`Кількість подарунків ${countOfGift}`)
	console.log(`------------------------------------`)
	return countOfGift

}	

candies(10,25,15,40)
candies(10,25,'gf','40')
candies(10,0,9,-7)
candies(10,25,15,50)
candies(10,60,55,70)
// 
// 
//
//
//
//--------------------TASk 2 --------------------
//
//
//

const secretaryJimny = (countOfCopy,xeroxOne,xeroxTwo) => {
	// перевірка чи всі змінні є числами
	if( typeof(countOfCopy) != 'number' || typeof(xeroxOne) != 'number' || typeof(xeroxTwo) != 'number'){
		console.log(`------------------------------------`)
		console.log('Помилка - усі дані мають бути числами')
		console.log(`------------------------------------`)
		return
	}
	// перевірка чи всі змінні є більші ніж 0
	if(countOfCopy <= 0 || xeroxOne <= 0 || xeroxTwo <= 0){
		console.log(`------------------------------------`)
		console.log('Помилка - усі числа мають бути більшими ніж 0')
		console.log(`------------------------------------`)
		return
	}

	// початковий час 0 секунд
	let totalSeconds = 0

	// визначаємо скільки копій зроблять два ксерокси за 1 секунду
	let totalCopyForSeconds = 1/xeroxOne + 1/xeroxTwo
	
	// оскільки на початку ми маємо всього 1 листочок
	// то робимо копію на ксероксі який швидший
	totalSeconds += Math.min(xeroxOne,xeroxTwo)
	
	//визначаєм за скільки часу зробляться решта копій за формулою
	// 1 копія за totalCopyForSeconds
	// решта копій - першу за x секунд
	totalSeconds += Math.ceil((countOfCopy-1)/totalCopyForSeconds)
	console.log(`------------------------------------`)
	console.log(`Загальний час ${totalSeconds} с.`)
	console.log(`------------------------------------`)
	return totalSeconds
}

secretaryJimny(4,1,1)
secretaryJimny(5,1,2)
secretaryJimny(8,2,3)
secretaryJimny(8,0,3)
secretaryJimny(8,-2,3)
secretaryJimny('8',-2,3)
 
//
//
//
//--------------------TASk 3 --------------------
//
//
//



const employees =[
    {"id":1,"name":"Mildred Carson","drinks":["Macchiato"]},
    {"id":2,"name":"Clifford Brown","drinks":["Latte"]},
    {"id":3,"name":"Kellie Fletcher","drinks":["Flat White","Espresso"]},
    {"id":4,"name":"Don Parsons","drinks":["Espresso"]},
    {"id":5,"name":"Renee Reynolds","drinks":["Cappuccino","Macchiato"]},
    {"id":6,"name":"Rudolph Bishop","drinks":["Latte","Macchiato","Flat White"]},
    {"id":7,"name":"Geraldine Carpenter","drinks":["Espresso"]},
    {"id":8,"name":"Hilda Jimenez","drinks":["Latte","Macchiato","Espresso"]},
    {"id":9,"name":"Pauline Roberson","drinks":["Espresso"]},
    {"id":10,"name":"Vanessa Barrett","drinks":["Flat White","Cappuccino","Latte"]}
]


const recipes = {
    "Cappuccino": {
        "coffee": 0.01,
        "water": 0.035,
        "milk": 0.09
    },
    "Espresso": {
        "coffee": 0.01,
        "water": 0.035
    },
    "Latte": {
        "coffee": 0.01,
        "water": 0.035,
        "milk": 0.135
    },
     "Flat White": {
        "coffee": 0.02,
        "water": 0.04,
        "milk": 0.11
    },
	"Macchiato": {
		"coffee": 0.01,
		"water": 0.035,
		"milk": 0.015
	}
}

const prices =  {
    "coffee": 3.6,
    "water": 1,
    "milk": 1.5
}

const getPrice = (drink,recipes) => {
	let result = 0;
	for(let key in recipes[drink]) {
		//розрахунок ціни за напій з кожним інгрідієнтом
	    result += prices[key] * recipes[drink][key];
	}
	return result //результат 
}

const totalPrice = (drinks,drinksPrice) => {
    let price =0
    //визначаєм загальну ціну напоїв для одного працівника
    for(let i =0;i<drinks.length;i++){
    	price += drinksPrice[drinks[i]]
    }
    return price
}



const quantiCodersEmployees = (budget) => {
	// перевірка чи змінна є числом
	if( typeof(budget) != 'number'){
		console.log(`------------------------------------`)
		console.log('Помилка - усі дані мають бути числами')
		console.log(`------------------------------------`)
		return
	}
	// перевірка чи змінна більша ніж 0
	if(budget <= 0){
		console.log(`------------------------------------`)
		console.log('Помилка - усі числа мають бути більшими ніж 0')
		console.log(`------------------------------------`)
		return
	}

	// список гостей
	const guests = []
	// ціна за кожен напій
	const drinksPrice = {}

	// визначаємо ціну за кожен напій
	for(let key in recipes) {
        drinksPrice[key] = getPrice(key,recipes);
    }
    // визначаєм ціну напоїв для кожного працівника  
    for(let i =0;i<employees.length;i++){
    	//визначаєм загальну ціну напоїв для одного працівника
  		employees[i].price = totalPrice(employees[i].drinks,drinksPrice)
    }
    //сортуєм список працівників за ціною напоїв
    employees.sort((a, b) => a.price - b.price)

    for(key in employees){
    	// якщо ми можемо купити напої для працівника вні заноситься в список гостей
    	if(budget-employees[key].price >= 0){
    		budget -= employees[key].price
    		guests.push({"id":employees[key].id,"name":employees[key].name,"drinks":employees[key].drinks})
    	}else{
    		break
    	}
    }
    //повертаєм список гостей для яких можна купити напої
    
    return guests.sort((a,b) => a.id - b.id) 

}

console.log(quantiCodersEmployees(0.1))
console.log(quantiCodersEmployees(0.25))
console.log(quantiCodersEmployees(1.79))
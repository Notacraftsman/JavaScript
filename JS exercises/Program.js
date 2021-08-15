//создаем массив
let numbers=new Array
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
for (let i=0; i<12; i++)
{
	let number=getRandomIntInclusive(-15,15);
	numbers[i]=number;
	console.log(i+1,number)
}
//ищем максимум
let numberofmax
let max=-15
for (let i=0; i<12; i++)
{
	if (max<=numbers[i])
	{max=numbers[i];
	numberofmax=i+1;
	}
}
	console.log('Максимальное значение ' + max)
	console.log('Номер макс знач ' + numberofmax)




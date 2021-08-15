//создание вручную элемента алгоритма диагностирования (для справки,исвользовать неудобно)
/* const check1={
	ID:1,
	PID:0,
	checktext:'Не работает насос',
	Prob:1,
	Val:0
} */

//функциональное добавление проверок
function check (ID, PID, checktext, Prob, Val, IsaP) {
	this.ID = ID; //Собственный ИД
	this.PID = PID; //ИД родителя
	this.checktext = checktext; //описание действия
	this.Prob = Prob; //вероятность неисправности
	this.Val = Val; //цена операции
	this.IsaP = IsaP; //1 - родитель; 0- не родитель
}
const check1 = new check (1, 0, 'Не работает электробензонасос (ЭБН)', 1, 0, 1)
const check2 = new check (2, 1, 'Снять реле ЭБН', 1, 5, 1)
const check3 = new check (3, 2, 'Проверить проводу от реле до ЭБН', 0.3, 7, 1)
const check4 = new check (4, 3, 'Заменить ЭБН', 0.15, 10, 0)
const check5 = new check (5, 3, 'Устранить неисправность проводки от реле до ЭБН', 0.15, 10, 0)
const check6 = new check (6, 2, 'Проверка питания на клеммах 30, 85', 0.7, 2, 1) 
const check7 = new check (7, 6, 'Проверить предохранитель ЭБН', 0.3, 3, 1) 
const check8 = new check (8, 7, 'Замена предохранителя ЭБН', 0.2, 1, 0)
const check9 = new check (9, 7, 'Устранить неиспрвность проводки отпредохранителя до реле', 0.1, 20, 0)
const check10 = new check (10, 6, 'Проверить контакт 86 реле ЭБН', 0.4, 4, 1)
const check11 = new check (11, 10, 'Проверить цепь от ЭБУ до реле ЭБН', 0.2, 10, 1)
const check12 = new check (12, 11, 'Неисправен ЭБУ.Заменить', 0.1, 10, 0)
const check13 = new check (13, 11, 'Устранить неиспрвность проводки от ЭБУ до реле ЭБН', 0.1, 15, 0)
const check14 = new check (14, 10, 'Неисправно реле ЭБН. Заменить', 0.2, 2, 0)

//Заключаем объекты в массив
//let arr=new Array();
let arrcheck = [check1, check2, check3, check4, check5, check6, check7, check8, check9, check10, check11, check12, check13, check14]

//выводим исходы в консоль
for (let i=0; i<arrcheck.length; i++)
{
	if (arrcheck[i].ID==0)
	{
		for (arrcheck[i].ID=i; i>0; i--)
		{
			let ValSum=arrcheck[i].Val=10
		}
		
		let branchcost=arrcheck[i].prob*ValSum;
		console.log(i+1, arrcheck[i].checktext, 'Стоимость ветви ');	
	}
}

// взять данные из формы
//let text1 = document.querySelector('input');
//console.log(text1);

//Подсчет стоимости дерева (возможно создание функции)


//function treecostcalc {}



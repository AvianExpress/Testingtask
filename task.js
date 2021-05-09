//Сторонняя библиотека
//Я не знаю, почему с ней установилась ещё целая куча сторонней штуки, я пытался её удалить чтобы привести проект в порядочный вид, но он сильно капризничает, поэтому пока так
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;


class hamster 
{
    //Конструктор стандартный, ничего сложного
    constructor(name,sound, wheelspeed,food)
    {
        this.name=name;
        this.sound=sound;
        this.wheelspeed=wheelspeed;
        this.food=food;
    }
    whatfood()
    {   
        //Тут должен быть return, но в консоль легче выводить так
        console.log(`${this.name} хомяк питается следующим: ${this.food}`);
    }
    howloud()
    {
        console.log(`${this.name} хомяк кричит ${this.sound}`);
    }
    howfast()
    {
        console.log(`${this.name} хомяк крутит колесо со скоростью ${this.wheelspeed}`);
    }



}
    //Спавним хомяков
    let common=new hamster("Обычный", "средне",10+" оборотов в минуту",["Злаки","Пшено","Кукуруза","Семечки"]);
    let junharian=new hamster("Джунгарский", "слишком громко, лучше не слышать",25+" оборотов в минуту",["Арбуз","Фасоль","Горох","Семечки"]);
    let wildforest=new hamster("Дикий лесной", "тихо",15+" оборотов в минуту",["Кора","Насекомые","Кукуруза","Птицы"]);
    let angorian=new hamster("Ангорский", "громко",0+" оборотов в минуту... он вообше жив?",["KFC крылышки","Макдональдс","Кока-кола","Чипсы"]);
    let rubber=new hamster("Резиновый с пищалкой", "средне",5+" оборотов в минуту",["Клей момент","Вода дистиллированная"]);

    //Если вдруг забудем аргументы, то он хоть что-то выдаст
    try
    {
        eval(argv.r+"."+argv.n+"()");
    }
    catch(e)
    {
        //А это если мы хотим просто получить значение переменной, некрасиво, но да ладно
            try
        {
            console.log(eval(argv.r+"."+argv.n));
        }
        catch(e)
        {
            console.log("Вы точно не хотите узнать ничего нового про хомяков?");
            console.log("-r чтобы указать тип хомяка");
            console.log("-n чтобы указать тип действия");
            console.log("Можно так же использовать и полные версии флагов, -hamster и -action");
        }

    }
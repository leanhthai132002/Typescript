console.log(123123);
var a :number = 123123;
type tpyeShow = string | number;

type TypeUser = {
    id: number,
    name :string,
    birthday: string
};

var showUser = (user: TypeUser) :TypeUser=>{
    var thaila :TypeUser = {
        id: 1,
        name: 'ThaiLa',
        birthday: '04/04/1999'
    };

    return {
        ...thaila,
        id: 2,
    }   
}
showUser ({id: 3, name: 'thaila', birthday:'1/1/1999'})

var show = (name :string) :tpyeShow =>{
    var id :number = 20;
    return id;
}

type TypeShowArray = number | string;
const ShowArray  = (a : TypeShowArray , b : TypeShowArray) : [TypeShowArray , TypeShowArray] => {

    return [a , b];
}

ShowArray(1,1);
ShowArray('a','b');
ShowArray('1', 'a');
ShowArray('a', '1');



console.log("Bien a sau khi bien dich", showUser);

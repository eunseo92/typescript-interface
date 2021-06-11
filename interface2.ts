interface Person2 {
    name: string;
    age?: number; //property 존재 하거나 존재하지 않거나
}

function hello2(person : Person2):void {
    console.log(`안녕하세요! ${person.name} 입니다.` )
}

hello2({name : 'eunseo', age :30})
hello2({name : 'eunseo'})


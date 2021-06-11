interface Person3 {
    name : string;
    age? : number;
    [index: string]: any  //어떤 String 타입의 프로퍼티가 와도 상관없음.
}

function hello3(person: Person3): void{
    console.log(`안녕하세요 ${person.name} 입니다.`)

}

const p31: Person3 ={
    name : 'eunseo',
    age: 30
}
const p32: Person3 ={
    name :'sora',
    sisters : ['sori', 'soeun']
}

const p33: Person3 = {
    name : 'yuzu',
    father : p31,
    son : p32
}
interface Person1 {
    name: string;
    age: number;
}

function hello1(person:{name : string; age : number}): void {
    console.log(`안녕하세요! ${person.name} 입니다.`)
}

const p1: Person1 = {
    name : 'eunseo',
    age : 30,
}
hello1(p1)
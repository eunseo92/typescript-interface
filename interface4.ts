interface Person4 {
    name: string
    age: number
    hello(): void
}

const p41: Person4 = {
    name : 'eunseo',
    age:30,
    hello: function(): void{
        console.log(`안녕하세요 ${this.name} 입니다.`)
    }
}

const p42: Person4 = {
    name : 'eunseo',
    age: 30,
    hello(this: Person4): void{
        console.log(`안녕하세요 ${this.name} 입니다.`)
    }
}

// const p43: Person4 = {
//     name : 'eunseo',
//     age: 30,
//     hello:(): void =>{  //arrow 함수에서는 this 를 사용할 수 없음. 
//         console.log(`안녕하세요 ${this.name} 입니다.`)
//     }
// }

p41.hello()
p42.hello()
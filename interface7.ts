interface HelloPerson {
    (name: string, age?: number): void
}

const helloPerson: HelloPerson = function(name: string){
    console.log(`안녕하세요! ${name} 입니다.`)
}

helloPerson('eunseo',30)

/*

함수의 타입 체크는 할당할때가 아니라 사용할때 한다

*/
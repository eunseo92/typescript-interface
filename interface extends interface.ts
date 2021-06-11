interface IPerson2 {
    name: string
    age?: number 
}

interface IKorean extends IPerson2 { //상속
    city: string
}

const k:IKorean = {
    name: 'eunseo',
    city: 'seoul'
}

HTMLDivElement
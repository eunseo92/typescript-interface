// ---------- function ----------
// type alias
type EatType = (food: string) => void

// interface
interface IEat {
    (food:string):void
}

// ---------- array ----------
// type alias
type PersonList = string[]

// interface 
interface IPersonList {
    [index: number]: string
}

// ---------- intersection ----------

interface ErrorHandling {
    success: boolean
    error?: {message: string}
}
interface ArtistData {
    artists: {name: string} []
}

// type alias
type ArtistsResponseType = ArtistData & ErrorHandling

// interface
interface IArtistsResponse extends ArtistData, ErrorHandling {}

let art: ArtistsResponseType
let iar: IArtistsResponse

// ---------- union types ----------

interface Bird {
    fly(): void
    layEggs(): void
}
interface Fish {
    swim(): void
    layEggs(): void
}

type petType = Bird | Fish

// interface IPet extends petType {} //Error, 1개의 인터페이스에 대해 상속 

// class pet implements petType {} //Error, 1개의 클래스에 대해 구현가능

// ---------- Declaration Merging - interface ----------

interface MergingInterface {
  a: string
}
interface MergingInterface {
  b: string
}

let mi: MergingInterface
// mi.a or b 

// ---------- Declaration Merging - type alias ----------

type MergingType {
  a: string
}
type MergingType {  //Error - duplicate
  b: string
}




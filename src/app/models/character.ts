export class Character {
    _id?: number;
    name?: string;
    nickname?: string;
    gender?: string;
    age?: number;
    nationality?: object;
    picture?: string;
    // Contructor initializes when a product is created 
    constructor(name: string, nickname: string, gender: string, age: number, nationality: object, picture: string) {
        this.name = name;
        this.nickname = nickname;
        this.gender = gender
        this.age = age;
        this.nationality = nationality;
        this.picture = picture
    }
}
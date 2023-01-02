import {makeAutoObservable} from "mobx";

export default class KindsOfSport {
    constructor() {
        this._kinds = [
            {id : 1, name : "Бокс"},
            {id : 2, name : "Футбол"},
            {id : 1, name : "Баскетбол"},
        ]
        this._couches = [
            {id : 1, name : "Петров Іван Сергійович"},
            {id : 2, name : "Кононенко Володимир Степанович"},
            {id : 3, name : "Іванець Михайло Олександрович"},
        ]

    }

    setTypes(types){
        this._types = types
    }
    setCouches(couches){
        this._couches = couches
    }

    get types(){
        return this._types
    }

    get coaches(){
        return this._couches
    }
}
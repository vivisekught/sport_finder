import {makeAutoObservable} from "mobx";

export default class KindsOfSport {
    constructor() {
        this._kinds = [
            {id : 1, name : "Бокс"},
            {id : 2, name : "Футбол"},
            {id : 3, name : "Баскетбол"},
            {id : 4, name : "Волейбол"},
            {id : 5, name : "Карате"},
            {id : 6, name : "Самбо"},
            {id : 7, name : "Шахи"},
            {id : 8, name : "Плавання"},
            {id : 9, name : "Легка атлетика"},
            {id : 10, name : "Важка атлетика"},
        ]
        this._couches = [
            {id : 1, name : "Петров Іван Сергійович"},
            {id : 2, name : "Кононенко Володимир Степанович"},
            {id : 3, name : "Іванець Михайло Олександрович"},
        ]

        this._selectedKinds = []
        makeAutoObservable(this)
    }

    setKinds(kinds){
        this._kinds = kinds
    }
    setCouches(couches){
        this._couches = couches
    }

    setSelectedKind(selectedKind){
        this._selectedKinds = selectedKind
    }

    get kinds(){
        return this._kinds
    }

    get coaches(){
        return this._couches
    }

    get selectedKinds(){
        return this._selectedKinds
    }
}
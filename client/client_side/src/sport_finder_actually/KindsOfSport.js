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
        this._coaches = [
            {id : 1, name : "Петров Іван Сергійович"},
            {id : 2, name : "Кононенко Володимир Степанович"},
            {id : 3, name : "Іванець Михайло Олександрович"},
            {id : 4, name : "Панахно Олег Олександрович"},
            {id : 5, name : "Хоменко Богдан Олександрович"},
            {id : 6, name : "Терем Василь Іванович"},
        ]

        this._selectedKinds = {}

        this._selectedCoach = {}

        makeAutoObservable(this)
    }

    setKinds(kinds){
        this._kinds = kinds
    }
    setCoaches(coaches){
        this._coaches = coaches
    }

    setSelectedKind(selectedKind){
        this._selectedKinds = selectedKind
    }

    setSelectedCoach(selectedCoach){
        this._selectedCoach = selectedCoach
    }

    get kinds(){
        return this._kinds
    }

    get coaches(){
        return this._coaches
    }

    get selectedKinds(){
        return this._selectedKinds
    }

    get selectedCoach(){
        return this._selectedCoach
    }
}
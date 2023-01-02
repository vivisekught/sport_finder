import {makeAutoObservable} from "mobx";


export default class KindsOfSport {
    constructor() {
        this._kinds = [
            {difficulty : "середня ", sportClub : "Клуб: Спорт для всіх" ,id : 1, name : "Бокс", coach : "Петров Іван Сергійович", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6y27EXRje6ceZpsJlNxzy2qZ5sjltVfSnwSYjqq4iq15fzs_LCqJW_cH99CAi-vnn42U&usqp=CAU", desc : "Відпрацювання стійки ударів. Самооборона. Спаринги" },
            {difficulty : "середня ", sportClub : "Клуб: Спорт для всіх" ,id : 2, name : "Футбол", coach : "Івасик Генадій Степанович" , img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6y27EXRje6ceZpsJlNxzy2qZ5sjltVfSnwSYjqq4iq15fzs_LCqJW_cH99CAi-vnn42U&usqp=CAU", desc : "Відпрацювання стійки ударів. Самооборона. Спаринги"},
            {difficulty : "середня ", sportClub : "Клуб: Спорт для всіх" ,id : 3, name : "Баскетбол", coach : "Мурмяу Чижик Степанович" , img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6y27EXRje6ceZpsJlNxzy2qZ5sjltVfSnwSYjqq4iq15fzs_LCqJW_cH99CAi-vnn42U&usqp=CAU", desc : "Відпрацювання стійки ударів. Самооборона. Спаринги"},
            {difficulty : "середня ", sportClub : "Клуб: Спорт для всіх" ,id : 4, name : "Волейбол", coach : "Крокодайл Олексій Степанович" , img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6y27EXRje6ceZpsJlNxzy2qZ5sjltVfSnwSYjqq4iq15fzs_LCqJW_cH99CAi-vnn42U&usqp=CAU", desc : "Відпрацювання стійки ударів. Самооборона. Спаринги"},
            {difficulty : "середня ", sportClub : "Клуб: Спорт для всіх" ,id : 5, name : "Карате", coach : "Красивий Мирослав Степанович" , img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6y27EXRje6ceZpsJlNxzy2qZ5sjltVfSnwSYjqq4iq15fzs_LCqJW_cH99CAi-vnn42U&usqp=CAU", desc : "Відпрацювання стійки ударів. Самооборона. Спаринги"},
            {difficulty : "середня ", sportClub : "Клуб: Спорт для всіх" ,id : 6, name : "Самбо", coach : "Чіткий Панас Степанович" , img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6y27EXRje6ceZpsJlNxzy2qZ5sjltVfSnwSYjqq4iq15fzs_LCqJW_cH99CAi-vnn42U&usqp=CAU", desc : "Відпрацювання стійки ударів. Самооборона. Спаринги"},
            {difficulty : "середня ", sportClub : "Клуб: Спорт для всіх" ,id : 7, name : "Шахи", coach : "Гармонія Іржик Степанович" , img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6y27EXRje6ceZpsJlNxzy2qZ5sjltVfSnwSYjqq4iq15fzs_LCqJW_cH99CAi-vnn42U&usqp=CAU", desc : "Відпрацювання стійки ударів. Самооборона. Спаринги"},
            {difficulty : "середня ", sportClub : "Клуб: Спорт для всіх" ,id : 8, name : "Плавання", coach : "Небен Костянтин Степанович" , img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6y27EXRje6ceZpsJlNxzy2qZ5sjltVfSnwSYjqq4iq15fzs_LCqJW_cH99CAi-vnn42U&usqp=CAU", desc : "Відпрацювання стійки ударів. Самооборона. Спаринги"},
            {difficulty : "середня ", sportClub : "Клуб: Спорт для всіх" ,id : 9, name : "Легка атлетика", coach : "Щецин Дмитро Степанович" , img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6y27EXRje6ceZpsJlNxzy2qZ5sjltVfSnwSYjqq4iq15fzs_LCqJW_cH99CAi-vnn42U&usqp=CAU", desc : "Відпрацювання стійки ударів. Самооборона. Спаринги"},
            {difficulty : "середня ", sportClub : "Клуб: Спорт для всіх" ,id : 10, name : "Важка атлетика", coach : "Норов Олексій Степанович" , img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6y27EXRje6ceZpsJlNxzy2qZ5sjltVfSnwSYjqq4iq15fzs_LCqJW_cH99CAi-vnn42U&usqp=CAU", desc : "Відпрацювання стійки ударів. Самооборона. Спаринги"},
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
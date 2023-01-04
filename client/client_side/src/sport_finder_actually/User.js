import {makeAutoObservable} from "mobx";

export default class User {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._user_porfolio = {
            name : " ",
            country : " ",
            city : " ",
            status : " ",
            age : " ",
            gender : " ",
            weight : " ",
            height : " ",
            phoneNumber : " ",
            FavouriteSport : " ",
        }
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }

    setUserPortfolioFirstPage(name, country, city, status){
        this._user_porfolio.name = name
        this._user_porfolio.country = country
        this._user_porfolio.city = city
        this._user_porfolio.status = status
    }

    setUserPortfolioSecondPage(age, gender, height, weight, phoneNumber, FavouriteSport){
        this._user_porfolio.age = age
        this._user_porfolio.gender = gender
        this._user_porfolio.height = height
        this._user_porfolio.weight = weight
        this._user_porfolio.phoneNumber = phoneNumber
        this._user_porfolio.FavouriteSport = FavouriteSport
    }

    getUserPortfolio(){
        return this._user_porfolio
    }

    get isAuth(){
        return this._isAuth
    }

    get user(){
        return this._user
    }
}
const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: "STUDENT"}, // exists STUDENT user, and COACH user
})

const UserData = sequelize.define('user_data', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, defaultValue: "User"},
    country: {type: DataTypes.STRING, allowNull: false},
    city: {type: DataTypes.STRING, allowNull: false},
    data_of_birthday: {type: DataTypes.DATE},
    phone_number: {type: DataTypes.STRING},
    photo: {type: DataTypes.STRING},
    gender: {type: DataTypes.STRING},
    weight: {type: DataTypes.INTEGER},
    height: {type: DataTypes.INTEGER},
})


const InterestList = sequelize.define('interest_list', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const UserInterest = sequelize.define('user_interest', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Interest = sequelize.define('interest', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING}
})

const UserTraining = sequelize.define('user_training', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Training = sequelize.define('training', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    place: {type: DataTypes.STRING, allowNull: false},
    days: {type: DataTypes.STRING, allowNull: false},
    time: {type: DataTypes.TIME, allowNull: false},
    duration: {type: DataTypes.STRING, allowNull: false},
    coach: {type: DataTypes.INTEGER, allowNull: false},
    code: {type: DataTypes.STRING, unique: true, allowNull: false},
    photo: {type: DataTypes.STRING}
})

const Level = sequelize.define('level', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true},
})

const SportType = sequelize.define('sport_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true},
})
User.hasOne(UserData)
UserData.belongsTo(User)

User.hasOne(InterestList)
InterestList.belongsTo(User)

InterestList.hasMany(UserInterest)
UserInterest.belongsTo(InterestList)

Interest.hasMany(UserInterest)
UserInterest.belongsTo(Interest)

User.hasMany(UserTraining)
UserTraining.belongsTo(User)

Training.hasMany(UserTraining)
UserTraining.belongsTo(Training)

Interest.hasMany(Training)
Training.belongsTo(Interest)

Level.hasMany(Training)
Training.belongsTo(Level)

module.exports = {
    User,
    UserData,
    InterestList,
    UserInterest,
    Interest,
    UserTraining,
    Training,
    Level,
    SportType
}
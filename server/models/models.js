const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: "STUDENT"} // exists STUDENT user, and COACH user
})

const UserData = sequelize.define('user_data', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, defaultValue: "User"},
    data_of_birthday: {type: DataTypes.DATE},
    country: {type: DataTypes.STRING},
    city: {type: DataTypes.STRING},
    phone_number: {type: DataTypes.STRING},
    photo: {type: DataTypes.STRING},
    gender: {type: DataTypes.STRING, allowNull: false},
    weight: {type: DataTypes.INTEGER, allowNull: false},
    height: {type: DataTypes.INTEGER, allowNull: false},
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

const TrainingsList = sequelize.define('trainings_list', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
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

User.hasOne(TrainingsList)
TrainingsList.belongsTo(User)

TrainingsList.hasMany(UserTraining)
UserTraining.belongsTo(TrainingsList)

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
    TrainingsList,
    UserTraining,
    Training,
    Level,
    SportType
}
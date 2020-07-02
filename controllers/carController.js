const { Invoice, Car, User } = require('../models')

class CarController {
    static getHome (req, res) {
        res.render('home.ejs')
    }
    static adminFindAll (req, res) {
        User.findAll({
            where: {
                role: 'Admin'
            }
        })
        .then(function(data){
            res.send(data)
        })
        .catch(function(err){
            res.send(err)
        })
    }
    static userFindAll (req, res) {
        User.findAll({
            where: {
                role: 'Buyer'
            }
        })
        .then(function(data){
            res.send(data)
        })
        .catch(function(err){
            res.send(err)
        })
    }
}

module.exports = CarController;
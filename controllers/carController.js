const { Invoice, Car, User } = require('../models')
const {Op} = require('sequelize')
const converter = require('../helpers/converter')

class CarController {
    static getHome (req, res) {
        const message = req.app.locals.message || null
        delete req.app.locals.message
        res.render('home.ejs',{alert: message})
    }
    static carAdminFindAll (req, res) {
        Car.findAll({
            where: {
                stock: {
                    [Op.gt]: 0
                }
            }  
        })
        .then(function(data){
            const message = req.app.locals.message || null
            delete req.app.locals.message
            res.render('adminCar.ejs',{cars: data, alert: message, converter})
        })
        .catch(function(err){
            res.send(err)
        })
    }
    static carUserFindAll (req, res) {
        Car.findAll({
            where: {
                stock: {
                    [Op.gt]: 0
                }
            }  
        })
        .then(function(data){
            const message = req.app.locals.message || null
            delete req.app.locals.message
            res.render('buyerCar.ejs', {data, alert: message, converter})
        })
        .catch(function(err){
            res.send(err)
        })
    }
}

module.exports = CarController;
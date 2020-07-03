const { Invoice, Car, User } = require('../models')
const bcrypt = require('bcrypt')
const converter = require('../helpers/converter');
const sentemail = require('../helpers/nodemailer');

class UserController {
    static register(req, res) {
        res.render('registerform.ejs')
    }
    static registerPost(req, res) {
        User.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                age: req.body.age,
                gender: req.body.gender,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            })
            .then(function(data) {
                req.app.locals.message = `Succesfully Registered! Please Login to Continue`
                res.redirect('/user/login')
            })
            .catch(function(err) {
                let msg = []
                err.errors.forEach(el => {
                    msg.push(el.message)
                })
                res.send(msg);
            })
    }
    static login(req, res) {
        const message = req.app.locals.message || null
        delete req.app.locals.message
        res.render('user-loginform.ejs', { alert: message })
    }
    static loginPost(req, res) {
        User.findOne({
                where: {
                    role: 'Buyer',
                    email: req.body.email
                }
            })
            .then(function(data) {
                if (!data) {
                    res.send('No Email Found!')
                } else {

                    if (bcrypt.compareSync(req.body.password, data.password)) {
                        req.session.user = req.body.email
                        req.app.locals.message = `Succesfully Logged In!`
                        res.redirect('/user/cars')
                    } else {
                        res.send(`Password Doesn't Match!`)
                    }
                }
            })
            .catch(function(err) {
                res.send(err)
            })
    }
    static logout(req, res) {
        req.session.destroy(function(err) {
            // cannot access session here
            if (err) {
                res.send(err)
            } else {
                req.app.locals.message = `Your are Logged Out!`
                res.redirect('/')
            }
        })
    }
    static buy(req, res) {
        const id = req.params.id
        let cars;
        Car.decrement('stock', {
                where: { id }
            })
            .then(function(data) {
                return Car.findByPk(id)
            })
            .then(function(data) {
                cars = data
                return User.findAll({
                    where: {
                        role: 'Buyer'
                    }
                })
            })
            .then(function(user) {
                res.render('formBuy.ejs', { cars, data: user, converter })
            })
            .catch(function(err) {
                res.send(err)
            })
    }
    static buyPost(req, res) {
        const id = req.params.id
        let cars;
        Car.findByPk(id)
            .then(data => {
                cars = data
                return Invoice.create({
                    UserId: req.body.UserId,
                    CarId: req.params.id,
                    shiping: req.body.shiping
                })
            })
            .then(function(data) {
                sentemail(req.session.user, cars)
                req.app.locals.message = `Transaction Succesfull!`
                res.redirect('/user/cars')
            })
            .catch(function(err) {
                res.send(err)
            })
    }
}

module.exports = UserController;
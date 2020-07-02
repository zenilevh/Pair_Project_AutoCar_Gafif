const { Invoice, Car, User } = require('../models')
const bcrypt = require('bcrypt')

class UserController {
    static register (req, res) {
        res.render('registerform.ejs')
    }
    static registerPost (req, res) {
        User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            age: req.body.age,
            gender: req.body.gender,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        })
        .then(function(data){
            res.send('Register Success!')
        })
        .catch(function(err){
            console.log(err)
            res.send(err)
        })
    }
    static login (req, res) {
        res.render('user-loginform.ejs')
    }
    static loginPost (req, res) {
        User.findOne({
            where: {
                role: 'Buyer',
                email: req.body.email
            }
        })
        .then(function(data){
            if (!data) {
                res.send('No Email Found!')
            } else {

                if (bcrypt.compareSync(req.body.password, data.password)) {
                    req.session.user = req.body.email
                    res.redirect('/user/cars')
                } else {
                    res.send(`Password Doesn't Match!`)
                }
            }
        })
        .catch(function(err){
            res.send(err)
        })
    }
    static logout (req, res) {
        req.session.destroy(function(err) {
            // cannot access session here
            if (err) {
                res.send(err)
            } else {
                res.redirect('/')
            }  
        })
    }
    static buy (req, res) {
        
    }

    static invoices(req, res) {

    }
}

module.exports = UserController;
const { Invoice, Car, User } = require('../models')
const bcrypt = require('bcrypt')

class AdminController {
    static login (req, res) {
        res.render('admin-loginform.ejs')
    }
    static loginPost (req, res) {
        User.findOne({
            where: {
                role: 'Admin',
                email: req.body.email
            }
        })
        .then(function(data){
            if (!data) {
                res.send('No Email Found!')
            } else {

                if (bcrypt.compareSync(req.body.password, data.password)) {
                    req.session.admin = req.body.email
                    res.redirect('/admin/cars')
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
    static addForm (req, res) {
        res.render('formAddCar.ejs')
    }
    static addPost (req, res) {
        let newCar = {
            car_name: req.body.car_name,
            type: req.body.type,
            harga: req.body.harga,
            stock: req.body.stock,
            bodykit: req.body.bodykit,
            imgURL: req.body.imgURL
        }
        Car.create(newCar)
        .then(function(data){
            res.redirect('admin/cars')
        })
        .catch(function(err){
            res.send(err)
        })
    }
    static editForm (req, res) {

    }
    static editPost (req, res) {

    }
    static invoices(req, res) {

    }
}

module.exports = AdminController;
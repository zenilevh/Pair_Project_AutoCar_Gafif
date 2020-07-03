const { Invoice, Car, User } = require('../models')
const bcrypt = require('bcrypt')

class AdminController {
    static register (req, res) {
        res.render('secret-register.ejs')
    }
    static registerPost (req, res) {
        User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            age: req.body.age,
            gender: req.body.gender,
            email: req.body.email,
            password: req.body.password,
            role: "Admin"
        })
        .then(function(data){
            req.app.locals.message = `Succesfully Registered! Please Login to Continue`
            res.redirect('/admin/login')
        })
        .catch(function(err){
            res.send(err)
        })
    }
    static login (req, res) {
        const message = req.app.locals.message || null
        delete req.app.locals.message
        res.render('admin-loginform.ejs', {alert: message})
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
                    req.app.locals.message = `Succesfully Logged In!`
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
                req.app.locals.message = `Your are Logged Out!`
                res.redirect('/')
            }  
        })
    }
    static userList (req,res){
        const id = req.params.id
        let invoices;
        Invoice.findAll({
            include: [Car, User],
            where: {            
                CarId: id

            }
        })
        .then(function(data){
            invoices = data
            return Car.findByPk(id)
        })
        .then(function(cars){
            res.render('userList.ejs', {invoices, cars})
        })
        .catch(function(err){
            console.log(err)
            res.send(err)
        })
    }
    static addForm (req, res) {
        res.render('formAddCar.ejs')
    }
    static addPost (req, res) {
        let newCar = {
            car_name: req.body.car_name,
            type: req.body.type,
            harga: +req.body.harga,
            stock: +req.body.stock,
            bodykit: req.body.bodykit,
            imgURL: req.body.imgURL
        }
        Car.create(newCar)
        .then(function(data){
            req.app.locals.message = `Succesfully Added New Car!`
            res.redirect('/admin/cars')
        })
        .catch(function(err){
            res.send(err)
        })
    }
    static editForm (req, res) {
        const id = +req.params.id
        Car.findByPk(id)
        .then(function(data){
            res.render('formEditCar.ejs',{cars: data})
        })
        .catch(function(err){
            res.send(err)
        })
    }
    static editPost (req, res) {
        const id = +req.params.id
        let editCar = {
            car_name: req.body.car_name,
            type: req.body.type,
            harga: +req.body.harga,
            stock: +req.body.stock,
            bodykit: req.body.bodykit,
            imgURL: req.body.imgURL
        }
        Car.update(editCar, {
            where: {id},
            returning: true
        })
        .then(function(data){
            res.redirect('/admin/cars')
        })
        .catch(function(err){
            res.send(err)
        })
    }
    static delete (req, res) {
        const id = +req.params.id
        Car.destroy({
            where: {id}     
        })
        .then(function(deletedCar){
            if (deletedCar) {
                req.app.locals.message = `Succesfully deleted Car!`
                res.redirect('/admin/cars')
            }
        })
        .catch(function(err){
            res.render('error', {error: err})
        })
    }
    static invoices(req, res) {

    }
    static invoicePost(req, res) {

    }
}

module.exports = AdminController;
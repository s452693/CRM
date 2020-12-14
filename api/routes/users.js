const express = require('express');
const router = express.Router();
const db = require('../../config/db-connect');
const user = require('../../models/user');
const Sequelize = require("sequelize");

router.get('/', (req, res, next) => 
    user.findAll({
        attributes: [
            'id',
            'name',
            'surname',
            [Sequelize.fn('date_format', Sequelize.col('dateofBirth'), '%Y-%m-%d'), 'dateOfBirth'],
            'login',
            'idRole'
        ]
        })
        .then(users => {
            //console.log(users);
            res.render('users',{
                users
            })
        })
        .catch(err => console.log(err))
);

//Add user
/*
router.get('/add', (req, res,next) => {
    const data = {
        name: 'Matthew',
        surname: "Kim",
        dateOfBirth: "1982.02.01",
        login: "itsme",
        passwordMd5: "qwert123",
        idRole: 3,
    }

    let {name, surname, dateOfBirth, login, passwordMd5, idRole} = data;

    user.create({
        name: name,
        surname: surname,
        dateOfBirth: dateOfBirth,
        login: login,
        passwordMd5: passwordMd5,
        idRole:idRole
    })
        .then(() => res.send("User added"))
        .catch(err => {
            console.log('Error:' + err);
            res.send("Problem with adding a user")
        });

})
 */

*/

module.exports = router;

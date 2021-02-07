const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const router = express.Router();
const db = require('../../config/db-connect');
const user = require('../../models/user');
const Sequelize = require("sequelize");

var urlencodedParser = bodyParser.urlencoded({ extended: false }) //wyciąga dane z formularza

router.get('/', (req, res, next) => 
    user.findAll({
        attributes: [
            'id',
            'name',
            'surname',
            [Sequelize.fn('date_format', Sequelize.col('dateofBirth'), '%Y-%m-%d'), 'dateOfBirth'],
            'login',
            'idRole',
            'isDeleted'
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

//app.use('/add', addUser);

router.get('/add', (req, res, next) => 
    res.render('add')
);



router.post('/add', urlencodedParser, (req, res, next) => 
    {
    
    const data = req.body;
    console.log(data);
    //res.render('add');

    let {name, surname, dateOfBirth, login, passwordMd5, idRole, isDeleted, Add} = req.body;

        console.log(name, surname, passwordMd5);

    user.create({
        name: name,
        surname: surname,
        dateOfBirth: dateOfBirth,
        login: login,
        passwordMd5: passwordMd5,
        idRole:idRole
    })
        .then(() => res.render('added'))
        .catch(err => {
            console.log('Error:' + err);
            communicat = "Login already exist in database";
            res.render('add',{
                communicat
            })
            //res.send("Problem with adding a user")
        });
    }
);

router.post('/edit', urlencodedParser, (req, res, next) => 
    {
        console.log(req.body);
        //data = req.body;
        let {id, edit} = req.body;
        
        if(edit == "Edit User"){
            console.log("nah");
            next();
            return;
        }

        user.findAll({
            attributes: [
            'id',
            'name',
            'surname',
            [Sequelize.fn('date_format', Sequelize.col('dateofBirth'), '%Y-%m-%d'), 'dateOfBirth'],
            'login',
            'passwordMd5',
            'idRole',
            'isDeleted'],
            where: {
                id: id
              }
            })
            .then(users => {
                //console.log(users);
                res.render('edit',{
                    users
                })
            })
            .catch(err => console.log(err))
    }
);

router.post('/edit', urlencodedParser, (req, res, next) => 
    {
        console.log("yup yup");
        console.log(req.body);
        let {id, name, surname, dateOfBirth, login, passwordMd5, idRole, isDeleted} = req.body;
        
        console.log(name);

        user.update({ 
            name: name,
            surname: surname, 
            dateOfBirth: dateOfBirth,
            login: login,
            passwordMd5: passwordMd5,
            idRole: idRole,
            isDeleted: isDeleted}, {
            where: {
              id: id
            }
          });

          res.render('edited');
    }
);

*/

module.exports = router;

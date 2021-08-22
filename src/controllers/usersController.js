const usersModel = require('../models/usersModel.js');

exports.getUsersController = (req, res) => {

    var usersDataBase = usersModel.getUsersFromDabase();
    let usersJsonPlaceholder = usersModel.getUsersFromJsonPLaceholder;
    let allUsersJson = [];
    let allUsersDatabase = {};
    let users = [];

    usersJsonPlaceholder.then(function (result) {

        for (i in result) {
            //console.log(result[i].name);
            allUsersJson.push(result[i]);
        } // end for

    });

    //console.log("user real from controller: "+ usersDataBase);
    usersDataBase.then(function (result) {

        for (i in result) {

            allUsersDatabase = result[i];

            //console.log(allUsersDatabase[0]);
        } // end for

        for (let x = 0; x < allUsersDatabase.length; x++) {

            for (let i = 0; i < allUsersJson.length; i++) {
                
                if (allUsersJson[i].json_placeholder_id == allUsersDatabase[x]) {

                    users.push({ name: allUsersJson[i].name, id: allUsersJson[i].json_placeholder_id });
                    //console.log(allUsersJson[i].name);
                } // end if
                
            }// end for
        } // end for

        res.render('index', { usersListDatabase: users, usersList: allUsersJson });

    });


} // exports.getDebtController

exports.setUsersController = (req, res) => {

    usersModel.setUsersOnDatabase(req.body.jsonplaceholderid, req.body.client, req.body.reason, req.body.value, req.body.date);

    res.redirect('/');

}
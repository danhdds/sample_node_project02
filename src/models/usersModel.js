const fetch = require('node-fetch');

const Debts = require('../database/Debts.js');


exports.getUsersFromDabase = async (req, res) => {
    let users = () => (Debts.find({}).distinct('json_placeholder_user_id').exec());
    try { return ({ "user": await users() }); }
    catch (e) { console.log(e) }
}

exports.setUsersOnDatabase = (json_placeholder_user_id, name, reason, value, date) => {

    var debt = {
        json_placeholder_user_id: json_placeholder_user_id,
        name: name,
        reason: reason,
        value: parseFloat(value),
        date: date
    };

    Debts.create(debt, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            
        }
    });

}

exports.getUsersFromJsonPLaceholder = fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(json => {

        let users = [];

        for (i in json) {

            users.push({ name: json[i].name, json_placeholder_id: json[i].id });

        } // end for

        return users;

    });
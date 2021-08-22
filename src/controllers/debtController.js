const debtModel = require('../models/debtModel.js');

exports.getDebtByUserIdController = (req, res)=>{

    var debts = debtModel.getDebtByUserId(req.params.id);
    var allDebtList = [];

    debts.then(function (result) {

        for (i in result) {
            allDebtList.push(result[i]);
        } // end for

        if(allDebtList[0][0] == undefined){
            res.redirect('/');
        }else{
            res.render('list-user-debt', {debtList: allDebtList});
        }
        //console.log("The user has lenth of" + allDebtList[0][0].name);
        
    });

} // exports.getDebtController

exports.deleteDebtController = (req, res) => { 

    debtModel.deleteDebt(req.params.id);

    res.redirect('/list-user-debt/'+req.params.id);

}

exports.getDebtByDebtIdController = (req, res) => {

    var debt = debtModel.getDebtByDebtId(req.params.id);
    var singleDebt = [];

    debt.then(function (result) {

        for (i in result) {
            singleDebt.push(result[i]);
        } // end for

        res.render('edit-debt', {debt: singleDebt});

    });

}

exports.setUsersController = (req, res) => {

    usersModel.setUsersOnDatabase(req.body.jsonplaceholderid, req.body.client, req.body.reason, req.body.value, req.body.date);

    res.redirect('/');

} 

exports.updateDebtController = (req, res) => {

    //console.log("debt id: "+req.params.id);
    //console.log("debt id: "+req.body.client);
    debtModel.updateDebt(req.params.id, req.body.jsonplaceholderid, req.body.client, req.body.reason, req.body.value, req.body.date);

    res.redirect('/list-user-debt/'+req.body.jsonplaceholderid);

} 
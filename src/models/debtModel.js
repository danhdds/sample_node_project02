const Debts = require('../database/Debts.js');

exports.getDebtByUserId = async (id) => {

  let users = () => (Debts.find({ json_placeholder_user_id: id }).exec());
  try { return ({ "user": await users() }); }
  catch (e) { console.log(e) }

}

exports.deleteDebt = (id) => {

  Debts.deleteOne({ json_placeholder_user_id: id }).exec(function (err, result){
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });

}

exports.getDebtByDebtId = async (id) => {

  let debt = () => (Debts.find({ _id: id }).exec());
  try { return ({ "debt": await debt() }); }
  catch (e) { console.log(e) }

}

exports.updateDebt = (id, json_placeholder_user_id, name, reason, value, date) => {

  const update = {
    json_placeholder_user_id: json_placeholder_user_id,
    name: name,
    reason: reason,
    value: parseFloat(value),
    date: date
  };

  Debts.findByIdAndUpdate(id, update, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });

}

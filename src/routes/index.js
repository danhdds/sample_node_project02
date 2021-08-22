usersController = require('../controllers/usersController');
debtController = require('../controllers/debtController');

exports.appRouter = router => {
  
    router.get('/', usersController.getUsersController);
    router.get('/list-user-debt/:id', debtController.getDebtByUserIdController);
    router.post('/', usersController.setUsersController);
    router.get('/delete/:id', debtController.deleteDebtController);
    router.get('/edit/:id', debtController.getDebtByDebtIdController);
    router.post('/edit/:id', debtController.updateDebtController);

}; // end exports.appRouter
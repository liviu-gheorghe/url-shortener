const mainRouter = require('express').Router();
const {
    getAll,
    getByAlias,
    insert
} = require('./database-access/mockdb');


mainRouter.get('/',(req,res) => {
    res.json({
        message: 'Hello world'
    })
});

mainRouter.get('/:alias', (req,res) => {
    const {
        alias
    } = req.params;

    const result = getByAlias(alias);

    if(result === undefined) {
        res.json({
            message: 'Short url not found'
        });
    } else { 
        res.redirect(result.origin);
    }
});

module.exports = {
    mainRouter
}
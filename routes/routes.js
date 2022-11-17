let express = require('express')
let router = express.Router()

// req -- request from client, res -- response from server
router.get('/', function(req, res, next) {
    res.json( { 'message': 'Hello AWESOME ITEC 2560 web programmers!'} )
})

module.exports = router
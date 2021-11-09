const config = {
    user :'sa',
    password :'12345',
    server:'192.168.5.105',
    database:'NPV',
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        instancename :'192.168.5.105'
    },
    port : 1433
}

module.exports = config; 


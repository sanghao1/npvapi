var config  = require('./dbconfig');
const sql = require('mssql');


async function getUsers() {
    try {
        let pool = await sql.connect(config);
        let NPV = await pool.request().query("SELECT * from users");
        return NPV.recordsets;
        
    } catch (error) {
        console.log(error); 
    }
    
}



async function getUser(userId) {
    try {
        let pool = await sql.connect(config);
        let NPV = await pool.request()
            .input('input_parameter', sql.Int, userId)
            .query("SELECT * from users where ID = @input_parameter");
        return NPV.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}


async function addUser(Users){

    try {
        let pool = await sql.connect(config);
        let insertUser = await pool.request()
            .input('ID', sql.Int, Users.ID)
            .input('UserName', sql.NVarChar, Users.UserName)
            .input('Password', sql.NVarChar, Users.Password)
            .input('Enabled', sql.SmallInt, Users.Enabled)
            .input('MaNv', sql.NVarChar, Users.MaNv)
            .input('UserType', sql.SmallInt, Users.UserType)
            .input('UserGroup', sql.SmallInt, Users.UserGroup)
            .input('Per_Xem', sql.NVarChar, Users.Per_Xem)
            .input('Per_Them', sql.NVarChar, Users.Per_Them)
            .input('Per_Sua', sql.NVarChar, Users.Per_Sua)
            .input('Per_Xoa', sql.NVarChar, Users.Per_Xoa)
            .input('Per_Duyet', sql.NVarChar, Users.Per_Duyet)
            .input('Per_Tatca', sql.NVarChar, Users.Per_Tatca)
            .input('KPI_View', sql.NVarChar, Users.KPI_View)
            .input('BaoCao_View', sql.NVarChar, Users.BaoCao_View)
            .input('NhanSu_View', sql.NVarChar, Users.NhanSu_View)
            .input('DNTT_View', sql.NVarChar, Users.DNTT_View)
            .input('Booking', sql.NVarChar, Users.Booking)
            .input('Bill', sql.NVarChar, Users.Bill)
            .input('Customers', sql.NVarChar, Users.Customers)
            .input('TinhTP', sql.NVarChar, Users.TinhTP)
            .input('KhoID', sql.NVarChar, Users.KhoID)
            .input('NhomQuyen', sql.SmallInt, Users.NhomQuyen)
            .input('NgayDoi', sql.SmallDateTime, Users.NgayDoi)
            .input('QLTT', sql.NVarChar, Users.QLTT)
            .input('Per_Menu', sql.NVarChar, Users.Per_Menu)
            .execute('Insertusers');
        return insertUser.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}
module.exports={
    getUsers:getUsers,
    getUser:getUser,
    addUser : addUser
}
 
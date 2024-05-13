import sql from 'mssql'

const dbsettings ={
    user: "sa",
    password: "12345678",
    server: "192.168.0.18",
    database: "bdapi",
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
};

export const getConnection= async ()=> {
    try {
        const pool= await sql.connect(dbsettings)
        return pool;
    } catch (error) {
        console.log(error);
    }
};
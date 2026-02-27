const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise')

const app = express();
app.use(bodyParser.json());

const port = 8000;

let conn = null;
const initMySQL = async() => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8700
    }); 
    console.log('connected to MySQL database');
}


app.get('/users',async (req,res)=> {
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);

})


app.post('/users',async (req,res) => {
    try{
        let user = req.body;
        const results = await conn.query('Insert into users set ? ',user);
        res.json({
        massage: 'User added successfully',
        data: results[0]
    });

    }catch(error){
        console.log('Error inserting user:',error);
        res.status(500).json({message:'Error adding user'});
    }
})

app.get('/users/:id',async (req,res) => {
    try{
        let id = req.params.id;
        const results = await conn.query('SELECT * FROM users WHERE id = ?',id );
        if (results[0].lenght === 0){
            throw {statusCode: 404,message:'User not found'};
        }
        res.json(results[0][0]);
    }catch (error){
        console.error('Error fetching user :',error);
        let statusCode = error.statusCode || 500;
        res.status(500).json({
            message:error.message||'Error fetching user'
        });
    }
})


app.put('/users/:id',async (req,res ) =>{
    try {
        let id = req.params.id;
        let updated = req.body;
        const results = await conn.query('UPDATE users SET ? WHERE id = ?',[updeteUser,id]);
        res.json({
        message: 'User updated successfully',
        data: results[0]
        });
    }catch(error){
        console.error('Error put  user:', error);
        res.status(500).json({ message: 'Error put user' });
    }
})


app.delete('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        // ลบข้อมูล user ตาม id ที่ส่งมา
        const results = await conn.query('DELETE FROM users WHERE id = ?', id);

        res.json({
            message: 'User deleted successfully',
            data: results[0]
        });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Error deleting user' });
    }
});




/*
app.listen(port, async () => {
    await initDBConnection();
    console.log(`Server is running on port ${port}`)
});

*/










/** 
let users = [];
//let counter = 1;
/**
 * GET /users - ดึงข้อมูลทั้งหมด
 * POST /users - เพิ่มผู้ใช้ใหม่
 * GET / users/:id - ดึงข้อมูลผู้ใช้ตาม ID 
 * PUT /users/:id - แก้ไขข้อมูลตาม id ที่บันทึก
 * DELETE /users/:id - ลบผู้ใช้ตาม ID  
 */


/*
app.get('/users', (req, res) => {
    res.json(users);
});

//path : = POST /user
app.post('/user',(req,res)=>{
    let user = req.body;
    users.push(user);
    user.id = counter
    counter +=1;
    res.json({
    message: 'User added successfully',
    user: user 
    });

});


// path = put / user/:id 
app.patch('/users/:id',(req,res) => {
    let id = req.params.id;
    let updateUser = req.body;const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise') 
const app = express();
app.use(bodyParser.json());

const port = 8000;

app.get('/testdb',(req,res)=>{
    mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8700
        
    }).then((conn)=>{
        conn.query('SELECT * FROM users')
        .then((results) => {
            res.json(results[0]);
        }).catch((err) => {
            res.json({error: err.message});
        })

    })
})


    //หา user จาก id 
    let selectedIndex =  users.findIndex(user => users.id == id );

    //อัทเดทข้อมูล users

    if (updateUser.fname){
        users[selectedIndex].fname = updateUser.fname;
    } 
    if (updateUser.lname){
        users[selectedIndex].lname = updateUser.lname;
    }
    
    res.json({
        message: 'User updated successfully',
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    });

    // ส่ง users ที่อัพเดทแล้วกลับไป

   
    
});

app.delete('/users/:id',(req,res) => {
    let id = req.params.id;
    let selecterIndex = users.findIndex(user => user.id == id);
    users.splice(selecterIndex,1);
    delete users[selecterIndex];

    res.json({
        message: 'User deleted successfully',
        indexDelete: selecterIndex
    });
})
*/
/*
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise')
const app = express();

app.use(bodyParser.json());

const port = 8000;


const initMySQL = async() => {
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8700
    }); 
    console.log('connected to MySQL database');
}




app.get('/testdb-new',async (req,res)=> {

    try{
        
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);


    } catch (err){
        console.log('Error connecting to the database:', err);
        res.status(500).json({error:'Internal Serer Error'})

    }
});











/*
app.listen(port, async () => {
    await initDBConnection();
    console.log(`Server is running on port ${port}`)
});

*/










/** 
let users = [];
//let counter = 1;
/**
 * GET /users - ดึงข้อมูลทั้งหมด
 * POST /users - เพิ่มผู้ใช้ใหม่
 * GET / users/:id - ดึงข้อมูลผู้ใช้ตาม ID 
 * PUT /users/:id - แก้ไขข้อมูลตาม id ที่บันทึก
 * DELETE /users/:id - ลบผู้ใช้ตาม ID  
 */


/*
app.get('/users', (req, res) => {
    res.json(users);
});

//path : = POST /user
app.post('/user',(req,res)=>{
    let user = req.body;
    users.push(user);
    user.id = counter
    counter +=1;
    res.json({
    message: 'User added successfully',
    user: user 
    });

});


// path = put / user/:id 
app.patch('/users/:id',(req,res) => {
    let id = req.params.id;
    let updateUser = req.body;const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise') 
const app = express();
app.use(bodyParser.json());

const port = 8000;

app.get('/testdb',(req,res)=>{
    mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8700
        
    }).then((conn)=>{
        conn.query('SELECT * FROM users')
        .then((results) => {
            res.json(results[0]);
        }).catch((err) => {
            res.json({error: err.message});
        })

    })
})


    //หา user จาก id 
    let selectedIndex =  users.findIndex(user => users.id == id );

    //อัทเดทข้อมูล users

    if (updateUser.fname){
        users[selectedIndex].fname = updateUser.fname;
    } 
    if (updateUser.lname){
        users[selectedIndex].lname = updateUser.lname;
    }
    
    res.json({
        message: 'User updated successfully',
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    });

    // ส่ง users ที่อัพเดทแล้วกลับไป

   
    
});

app.delete('/users/:id',(req,res) => {
    let id = req.params.id;
    let selecterIndex = users.findIndex(user => user.id == id);
    users.splice(selecterIndex,1);
    delete users[selecterIndex];

    res.json({
        message: 'User deleted successfully',
        indexDelete: selecterIndex
    });
})
*/
app.listen(port,async () => {
    await initMySQL();
    console.log(`Server is running on http://localhost:${port}`);
});
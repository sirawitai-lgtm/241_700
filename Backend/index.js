const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const port = 8000;

let users = [];
let counter = 1;
/**
 * GET /users - ดึงข้อมูลทั้งหมด
 * POST /users - เพิ่มผู้ใช้ใหม่
 * GET / users/:id - ดึงข้อมูลผู้ใช้ตาม ID 
 * PUT /users/:id - แก้ไขข้อมูลตาม id ที่บันทึก
 * DELETE /users/:id - ลบผู้ใช้ตาม ID  
 */



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
    let updateUser = req.body;

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


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
const express = require('express');
const app = express();
const port = 9010;

// const isGender = (string) => {
//     if(string == "Male" || string == "Female" || string == "Others") {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

app.use(express.json());



app.post('/user',(req, res) => {
    let body = req.body;
    if(body.firstName==undefined) {
        res.status(400).send("First name is required.");
    }
    if(body.lastName==undefined) {
        res.status(400).send("Last name is required.");
    }
    if(body.email==undefined) {
        res.status(400).send("Email is required and should be a valid email.");
    }
    if(body.pincode==undefined || body.pincode < 100000 || body.pincode > 999999) {
        res.status(400).send("Pincode is required and should be exactly 6 numbers.");
    }
    if(body.age==undefined || body.age < 1 || body.age > 100) {
        res.status(400).send("Age is required and should be between 1 and 100.");
    }
    if(body.gender==undefined) {
        res.status(400).send("Gender is required and should be either Male, Female or Others.");
    }
    
    res.status(200).json(body);
    console.log(body);
    // console.log(isGender(body.gender));
})

app.listen(port, () => {
    console.log(`Listening port on ${port}.`);
});
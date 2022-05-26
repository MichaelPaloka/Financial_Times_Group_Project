
const mongoose = require('mongoose');

//The below line wasn't working for me: - Shane
//mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
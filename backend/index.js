const express = require('express');
const mongoose = require('mongoose').default;
const PORT = process.env.PORT || 3000;
const authRouter = require('./auth');
const app = express();

// const start = async () => {
//     try {
//         await mongoose.connect(`mongodb+srv://admin:admin@cluster0.4cod3q5.mongodb.net/?retryWrites=true&w=majority`)
//         app.listen(PORT, () => {
//             console.log(`Server started on port ${PORT}`);
//         });
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error.message);
//     }
// }
// start();

app.use(express.json());
app.use('/auth', authRouter);

mongoose
    .connect(`mongodb+srv://admin:admin@cluster0.4cod3q5.mongodb.net/auth_roles?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error.message);
    });
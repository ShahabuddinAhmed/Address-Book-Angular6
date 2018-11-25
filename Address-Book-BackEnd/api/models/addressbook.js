const mongoose = require('mongoose');

const addressBooksSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullName: { type: String, required: true },
    nickName: { type: String, required: true },
    phone1: { type: String, required: true, unique: true },
    phone2: { type: String, required: true },
    address: { type: String, required: true },
    website: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    birthday: { type: String, required: true },
    usersID: { type: mongoose.Schema.Types.ObjectId }
});

module.exports = mongoose.model('AddressBooks', addressBooksSchema);
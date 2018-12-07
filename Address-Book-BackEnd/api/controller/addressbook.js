const mongoose = require('mongoose');
const AddressBooks = require('../models/addressbook');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getAllAddressBook = (req, res, next) => {
    AddressBooks.find()
    .exec()
    .then(docs => {
        if(docs.length >=1) {
            console.log("From database", docs);
            res.status(200).json(docs);
        } else {
            res.status(404).json({
                message: "AddressBook document is empty."
            });
        }
    })
    .catch(err => {
        res.status(200).json({
            message: err
        });
    });
}

exports.createAddressBook = (req, res, next) => {
    const addressbook = new AddressBooks({
        _id: new mongoose.Types.ObjectId(),
        fullName: req.body.fullName,
        nickName: req.body.nickName,
        phone1: req.body.phone1,
        phone2: req.body.phone2,
        address: req.body.address,
        website: req.body.website,
        email: req.body.email,
        birthday: req.body.birthday,
        usersID: req.body.usersID
    });
    addressbook
    .save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Data successfully is added',
            addressbook: addressbook
        });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({
            error: err
        });
    });
}

exports.getOneAddressBook = (req, res, next) => {
    const id = req.params.userID;
    AddressBooks.find({usersID: id})
    .exec()
    .then(doc => {
        if(doc.length >= 1) {
            console.log("From database", doc);
            res.status(200).json(doc);
        } else {
            res.status(404).json({
                message: "No data is found by provided ID"
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
}

exports.updateOneAddressBook = (req, res, next) => {
    const id = req.params.userID;
    AddressBooks.findById(id)
    .exec()
    .then(doc => {
        if(doc) {
            console.log("From database", doc);
            res.status(200).json(doc);
        } else {
            res.status(404).json({
                message: "No data is found by provided ID"
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
}

exports.updateAddressBook = (req, res, next) => {
    const id = req.params.userID;
    AddressBooks.update({ _id: id }, { $set: {
        fullName: req.body.fullName,
        nickName: req.body.nickName,
        phone1: req.body.phone1,
        phone2: req.body.phone2,
        address: req.body.address,
        website: req.body.website,
        email: req.body.email,
        birthday: req.body.birthday,
        usersID: req.body.usersID
    }})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: "Data is successfully updated",
            result
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

exports.deteleteAddressBook = (req, res, next) => {
    const id = req.params.userID;
    AddressBooks.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({
            message: "Data is successfully deleted",
            result
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
}
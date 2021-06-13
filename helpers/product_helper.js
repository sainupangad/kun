// let db = require('../config/db')
// let COLLECTIONS = require('../config/db_collections')
// const ObjectID = require('mongodb').ObjectID

var Promise = require('promise');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';






module.exports = {


    addProduct: (detailes) => {

        return new Promise(async (resolve) => {
            MongoClient.connect(url, async function (err, db) {

                let cursor = await db.collection('Employee').find().toArray();

                
                resolve(cursor)





            });










            
        })




























    },
    sainu: (detailes) => {

        let product = {
            name: detailes.Name,
            description: detailes.Description,
            price: detailes.Price
        }




        MongoClient.connect(url)


            .then(function (db) {
                db.collection('Employee').insertOne(product)


            });

        console.log(detailes)

    }



    // getAllProducts: () => {
    //     return new Promise(async (resolve) => {
    //         let products = await
    //             db.get().COLLECTIONS(COLLECTIONS.PRODUCT).find().toArray()
    //         resolve()
    //     })
    // }

}


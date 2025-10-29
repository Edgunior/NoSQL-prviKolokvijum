db.getCollection("projekti").find({
    budzet: {$lt: 50000}
}, {projekat: 1, budzet: 1})

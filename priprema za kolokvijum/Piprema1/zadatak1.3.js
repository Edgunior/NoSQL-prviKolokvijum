db.getCollection("zaposleni").find({
 plata: {$exists: true}
} , {ime: 1, plata: 1, pozicija: 1})

// 5. Kreiraj obican indeks na polju sektor u kolekciji zaposleni. Kreiraj jedinstveni index za broj zaposlenog.
db.getCollection("zaposleni").createIndex({ sektor: 1 }, { name: "idx_zaposleni_sektor"})
db.zaposleni.createIndex({ "broj_zaposlenog": 1 }, { name: "uq_zaposleni_broj_zaposlenog", unique: true})

db.getCollection("zaposleni").find({
    $and: [
    {sektor: "Prodaja", plata: {$lte: 2500} }
    ]
})

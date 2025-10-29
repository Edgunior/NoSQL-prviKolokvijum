db.getCollection("zaposleni").find({
    $or: [
    {sektor: "IT"},
    {sektor: "Finansije"}
    ]
}, {ime: 1, sektor: 1, plata: 1})

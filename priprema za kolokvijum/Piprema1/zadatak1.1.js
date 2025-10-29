db.getCollection("zaposleni").find(
{
    "sektor"  : "IT"   
}, {ime: 1, plata: 1, sektor: 1})

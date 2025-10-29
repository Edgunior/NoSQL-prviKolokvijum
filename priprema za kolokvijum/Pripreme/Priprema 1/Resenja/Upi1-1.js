// 1.	Prikaži sve zaposlene koji rade u sektoru IT i vrati samo njihovo ime, platu i sektor.
db.getCollection("zaposleni").find(
    { sektor: "IT"},
    { ime: 1, plata: 1, sektor: 1, _id: 0}
)

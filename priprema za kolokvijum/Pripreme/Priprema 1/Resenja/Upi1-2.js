// 1-2.	Prikaži sve zaposlene koji imaju platu veću od 2500 ili rade u sektoru Marketing.
db.getCollection("zaposleni").find(
    {
        $or: [
            { sektor: "Marketing" },
            { plata: { $gt: 2500} }
        ]
    }
)

// AND primer
// { sektor: "Marketing", plata: { $gt: 2500 } }
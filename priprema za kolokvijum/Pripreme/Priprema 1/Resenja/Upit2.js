// Povećaj platu svim zaposlenima u sektoru Finansije za 15%. Dodaj polje azurirano sa trenutnim datumom
// i polje izvor_promene: “ispit”. Vrati broj ažuriranih dokumenata.
// ({ $multiply: ["$plata", 1.15] })
db.zaposleni.updateMany(
    { sektor: "Finansije" },
    [
        {
            $set: {
                plata: { $multiply: ["$plata", 1.15] },
                azurirano: new Date(),
                izvor_promene: "ispit"
            }
        }
    ]
)


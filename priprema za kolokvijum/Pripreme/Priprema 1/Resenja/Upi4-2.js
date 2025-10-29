// 4. Grupiši sve zaposlene po sektoru i izračunaj prosečnu platu po sektoru.
// Sačuvaj rezultate u novu kolekciju statistika_plata. Rezultate prikaži sortirane po prosečnoj plati
// u opadajućem redosledu.

db.zaposleni.aggregate([
    {
        $group: {
            _id: "$sektor",
            prosecna_plata: { $avg: "$plata" },
            broj_zaposlenih: { $sum: 1}
        }
    },
    {
        $sort: {
            prosecna_plata: -1
        }
    },
    {
        $project: {
            _id: 0,
            sektor: "$_id",
            prosecna_plata: 1,
            broj_zaposlenih: 1
        }
    },
    {
        $out: "statistika_plata2"
    }
])

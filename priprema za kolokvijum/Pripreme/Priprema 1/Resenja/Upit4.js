// 4. Grupiši sve zaposlene po sektoru i izračunaj prosečnu platu po sektoru.
// Sačuvaj rezultate u novu kolekciju statistika_plata. Rezultate prikaži sortirane po prosečnoj plati
// u opadajućem redosledu.

db.zaposleni.aggregate([
    {
        $group: {
            _id: "$sektor",
            prosecna_plata: { $avg: "$plata" },
            broj_saposlenih: { $sum: 1}
        }
    },
    {
        $sort: {
            prosecna_plata: -1
        }
    },
    {
        $out: "statistika_plata"
    }
])

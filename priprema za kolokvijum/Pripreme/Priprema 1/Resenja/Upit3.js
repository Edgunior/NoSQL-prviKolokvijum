// Prikaži sve projekte koji imaju budžet veći od 40000. Zatim grupiši projekte po nazivu projekta
// i izračunaj ukupan broj članova tima i prosečan broj sati po projektu.
// Vrati naziv projekta, broj članova i prosečan broj sati.

db.getCollection("projekti").aggregate([
    {
        $match: {
            budzet: { $gt: 40000 }
        }
    },
    {
        $unwind: "$tim"
    },
    {
        $group: {
            _id: "$naziv_projekta",
            broj_clanova: { $sum: 1 },
            prosek_sati: { $avg: "$tim.sati"}
        }
    },
    {
        $project: {
            _id: 0,
            naziv_projekta: "$_id",
            broj_clanova: 1,
            prosek_sati: 1
        }
    }
])

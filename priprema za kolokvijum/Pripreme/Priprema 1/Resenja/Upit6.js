// Prikaži sve projekte koji još uvek nisu istekli (čiji je rok u budućnosti).
// Za te projekte pronađi sve zaposlene koji rade na njima i formiraj prikaz sa sledećim informacijama:
//   naziv projekta,
//   ukupan broj članova tima,
//   prosečan broj sati po članu,
//   prosečna plata zaposlenih koji rade na tom projektu.

// Rezultat treba da bude lista projekata sa ovim vrednostima.
db.projekti.aggregate([
    {
        $match: {
            rok: { $gt: new Date() }
        }
    },
    {
        $lookup: {
            from: "zaposleni",
            localField: "tim.broj_zaposlenog",
            foreignField: "broj_zaposlenog",
            as: "infoZaposleni"
        }
    },
    { $unwind: "$tim" },
    { $unwind: "$infoZaposleni" },
    {
        $group: {
            _id: "$naziv_projekta",
//            broj_clanova: { $sum: 1},
            prosek_sati: { $avg: "$tim.sati" },
            prosek_plata: { $avg: "$infoZaposleni.plata"}
        }
    }
])







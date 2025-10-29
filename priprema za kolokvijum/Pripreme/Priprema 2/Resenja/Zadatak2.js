db.projekti.aggregate([
    { 
        $project: {
            _id: 0,
            naziv_projekta: 1,
            clanovi_sati: {
                $map: {
                    input: "$tim",
                    as: "clan",
                    in: {
                        broj_zaposlenog: "$$clan.broj_zaposlenog",
                        sati: "$$clan.sati"
                    }
                }
            }
        }    
    }
])
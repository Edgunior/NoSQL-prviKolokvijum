db.projekti.aggregate([
  {
    $project: {
      naziv_projekta: 1,
      clanovi_tima: {
        $map: {
          input: "$tim",
          as: "clan",
          in: {
            broj_zaposlenog: "$$clan.broj_zaposlenog",
            broj_sati_rada: "$$clan.sati"
          }
        }
      }
    }
  }
])
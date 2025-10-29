db.projekti.aggregate([
  {
    $unwind: "$tim"
  },
  {
    $group: {
      _id: "$naziv_projekta",
      broj_preopterecenih: {
        $sum: {
          $cond: {
            if: { $gt: ["$tim.sati", 15] },
            then: 1,
            else: 0
          }
        }
      },
      broj_normalnih: {
        $sum: {
          $cond: {
            if: {
              $and: [
                { $gte: ["$tim.sati", 10] },
                { $lte: ["$tim.sati", 15] }
              ]
            },
            then: 1,
            else: 0
          }
        }
      },
      ukupno_clanova: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      naziv_projekta: "$_id",
      broj_preopterecenih: 1,
      broj_normalnih: 1,
      ukupno_clanova: 1
    }
  }
])
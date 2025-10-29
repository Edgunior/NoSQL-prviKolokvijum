db.projekti.aggregate([
  { $unwind: "$tim" },
  {
    $group: {
      _id: "$naziv_projekta",
      broj_preopterecenih: {
        $sum: { $cond: [{ $gt: ["$tim.sati", 15] }, 1, 0] }
      },
      broj_normalnih: {
        $sum: {
          $cond: [
            {
              $and: [{ $gte: ["$tim.sati", 10] }, { $lte: ["$tim.sati", 15] }]
            },
            1,
            0
          ]
        }
      }
    }
  },
  {
    $project: {
      _id: 0,
      naziv_projekta: "$_id",
      broj_preopterecenih: 1,
      broj_normalnih: 1
    }
  }
])

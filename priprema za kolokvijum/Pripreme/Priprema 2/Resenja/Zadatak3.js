db.projekti.updateMany(
  {}, 
  [
    {
      $set: {
        tim: {
          $map: {
            input: "$tim",
            as: "clan",
            in: {
              $mergeObjects: [
                "$$clan",
                {
                  status: {
                    $cond: {
                      if: { $gt: ["$$clan.sati", 20] },
                      then: "preopterecen",
                      else: "normalno"
                    }
                  }
                }
              ]
            }
          }
        }
      }
    }
  ]
);
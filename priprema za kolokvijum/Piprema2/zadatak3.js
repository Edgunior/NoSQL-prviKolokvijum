db.projekti.aggregate([
  {
    $addFields: {
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
                    then: "preopterećen",
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
])
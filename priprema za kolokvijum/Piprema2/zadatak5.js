db.zaposleni.updateMany(
  {},
  [
    {
      $set: {
        kategorija: {
          $cond: {
            if: { $gte: ["$plata", 3000] },
            then: "odličan",
            else: {
              $cond: {
                if: {
                  $and: [
                    { $gte: ["$plata", 2000] },
                    { $lt: ["$plata", 3000] }
                  ]
                },
                then: "dobar",
                else: "potrebno unapređenje"
              }
            }
          }
        }
      }
    }
  ]
)
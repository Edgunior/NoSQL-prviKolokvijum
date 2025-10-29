db.zaposleni.updateMany({}, [
  {
    $set: {
      kategorija: {
        $cond: [
          // IF Uslov
          { $gte: ["$plata", 3000] },
          // Then
          "odlican",
          // Else
          // Moze biti samo tekst ("dobar" ili "nije odlican")
          // Ili mozemo ponovo da ubacimo novi uslov da bismo stvorili if else kao dole
          {
            $cond: [{ $gte: ["$plata", 2000] }, "dobar", "potrebno unapređenje"]
          }
        ]
      }
    }
  }
])

//db.zaposleni.updateMany({}, [
//  {
//    $set: {
//      kategorija: {
//        $cond: [
//          // IF Uslov
//          { $gte: ["$plata", 3000] },
//          // Then
//          "odlican",
//          // Else
//          "dobar"
//        ]
//      }
//    }
//  }
//])


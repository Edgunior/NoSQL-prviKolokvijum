db.zaposleni.find({
   $or: [
      {plata: {$gt: 2500} },
      { sektor: "Marketing" }
   ]
} )
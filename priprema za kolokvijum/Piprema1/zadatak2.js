db.zaposleni.updateMany(
   { sektor: "Finansije" },
   {
     $mul: { plata: 1.15 },
     $currentDate: { azurirano: true },
     $set: { izvor_promene: "ispit" }
   }
)
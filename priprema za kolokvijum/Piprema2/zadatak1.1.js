db.getCollection("zaposleni").find(
{
  plata: {$gte: 2000, $lte: 3000}
}
)

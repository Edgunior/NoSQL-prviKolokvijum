// 1-4.	Prikaži sve projekte u kojima postoji član tima koji ima više od 15 sati rada i čiji zadatak nije završen
db.projekti.find(
    {
        tim: {
            $elemMatch: {
                sati: { $gt: 15 },
                zavrsen: false
            }
        }
    }
)

// Nije tacno
//{ "tim.sati" : { $gt: 15}, "tim.zavrsen": false }
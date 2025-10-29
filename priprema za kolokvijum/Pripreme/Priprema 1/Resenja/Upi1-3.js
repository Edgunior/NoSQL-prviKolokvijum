// 1-3.	Prikaži sve zaposlene koji imaju polje plata definisano u dokumentu i vratiti ime, platu i poziciju.
db.zaposleni.find(
    { plata: { $exists: true } },
    { ime: 1, plata: 1, pozicija: 1}
)
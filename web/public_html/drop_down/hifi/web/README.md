# start serveren

For at starte database serveren:
åben api og kør: node app.js

For at starte font-end serveren:
åben web og kør: node app.js

# 3 Projekt uger med Database (#1)

Idéen med disse 3 projektuger er at få lavet en funktionel database, som virker som en online butik om hi-fi udstyr.

Første prioteten for mig er ikke designet, men at få lært at skabe mig en database med de funktioner som man skal bruge for at have sig en online butik. 

Det skal indeholde:
- Database i mysql(phpmyadmin)
- Tabeller med produkter og kontakt info
- Søgemaskine
- html som henter produkterne fra databasen
- en forside som viser de nyeste produkter
- en produkt side som viser alle de forskellige produkter delt ind i kategorier
- en kontakt side med kontakt formular, som sender data ind til databasen
- andre små ting som høre til på en online butik.

# Projekt uge 1

## Mandag - Opbygning af html

Idag har dagen gået på opbygning af html.
Jeg har fået lavet mig en hjemmeside ved hjælp af bootstrap, med navigation og tabeller. Jeg fik færdigjort forsiden med billeder, og tilføjede en kontakt side og produkt side med navigation og footer.

## Tirsdag - Opbygning af html

Idag har dagen gået på opbygning/færdiggøring af html, og opbygning af database.
Jeg færdiggjorde html så den var hel komplet med de inforamtion og tabeller der var brug for på både forside, kontakt og html.
Det plagede mig godt nok lidt med bootstrap. Jeg blev nødt til at starte forfra, fordi den ikke kunne indlæse siden ordentlig. Vi havde prøvet at finde fejlen i måske 1 time, men det løkkedes ikke, så det var nemmere at starte forfra, men til sidst blev den færdig.
Jeg startet på opbygningen af databasen i den sidste del af dagen.

## Onsdag - start af database

Dagen idag har gået på at opbygge databasen

idag startede jeg på databasen, der er blevet indsat alle tabeller med navn, pris, varenr, beskrivelse, billederosv. derudover har jeg også indsat alle de values der er på alle varene. Jeg har fået lavet relationer, og alt der skal til i en database.

I morgen ser jeg frem til at skulle linke den til mit html.

## Torsdag - sammensætning database og html
Dagen i dag er gået på  at linke min database sammen med min html.

min database er blevet færdig, og jeg startede med at få rykket alle billederne hen i de rigtige mapper så databasen kan finde frem til dem ved hjælp af fetch scriptet. Jeg har fået linket databasen sammen til min html via fetch, og det virker.

Så bliver alle produkter vist på produkt siden med en flot ramme rundt omkring, i kategorierne: Afspiller, højtalere, forstærker.

## Fredag - Søgefunktion og indsættelses form

I dag har jeg været til tandlæge så jeg blev hjemme efterfølgende fordi tiden lå midt i skoletimerne
-men jeg har alligevel forsøgt hele dagen på at bygge på mit html og database.

Jeg har lavet mig en søgefunktion i html på min produkt side, jeg har haft store problemer med at få den linket til min database, fordi sql gerne vil modtage routen og godkende den i phpmyadmin, men der bliver ikke udskrevet noget på selve sitet, det her er hvad jeg har prøvet mig frem med: 
```js
'SELECT * from produkt where fk_navn like "%'classic'%"'
```
og
```js
'SELECT * FROM produkt WHERE fk_navn = classic'
//som er en test på:
'SELECT * FROM produkt WHERE fk_navn = ?'
```
som jeg nævnte så virker denne hvis jeg indsætter den i sql på phpmyadmin, men hvis jeg indsætter den i min produkt js sådan her
```js
    app.get('/produkt_search', function (req, res) {
        db.query('SELECT * from produkt where fk_navn like "%'+req.query.key+'%"', function (err, rows, fields) {
            if (err) throw err;
            var data = [];
            for (i = 0; i < rows.length; i++) {
                data.push(rows[i].produkt);
            }
            res.end(JSON.stringify(data));
        });
    })
```
eller
```js
    app.get('/produkt_search', function (req, res) {
        db.query('FROM produkt WHERE fk_navn = classic', function (err, data) {
            res.send(data);
        })
    })
```
Så vil den ikke udskrive noget i /produkt_search.
Så jeg er lidt på bar bund.
-Udover det har jeg også fået bygget op i javascript, så når man søger på noget så kommer der hjælpeord frem i index boxen på min produkt side, ved hjælp af jquery.

Til sidst har jeg fået indsat et form tag hvor jeg kan oprette produkter på, ved hjælp af franks guide på github.

# projekt uge 2

## Mandag - Søgefunktion
Det meste af dagen i dag har gået på at vente, fordi jeg havde brug for hjælp men ventelisten var lang.

Men jeg fik arbejdet videre på min søgemaskine, så den nu udskrev en value fx easdsdfadasd når man trykker på søge knappen. Mit problem var bare at der ikke blev søgt noget i min database, på http://localhost:1337/produkt_search/ . Da jeg endelig fik hjælp fandt vi ud af at det var fordi der var skrevet noget forkert i min route. jeg havde skrevet:

```js
  db.query(`SELECT * from produkt where fk_navn like '%${req.query.key}%'`, function (err, rows, fields)
  ```
```js
  db.query(`SELECT * from produkt where fk_navn like '%${req.params.key}%'`, function (err, rows, fields)
```
problemet var at jeg havde brugt query i stedet for params.

## Tirsdag - Søgefunktion
Dagen idag skal gå ud på at få forbundet min input button til databasen.

Jeg har igen brugt de fleste timer i slutningen af dagen på at vente på at få hjælp, for jeg havde skrevet alt koden selv, og det så rigtigt nok ud, men da jeg skulle bruge hjælp var der igen mange på ventelisten. Men da jeg fik hjælp fik vi det fikset så nu virker min søge funktion, og det er ikke bare knappen men hele min form, så hvad den søger på finder den frem til.

## Onsdag - Kontakt form
I dag skal jeg have fået lavet min form til indsættelse af data via en kontaktform.

Idag har været lidt kaos for mig, for da jeg prøvede at installere restify sync, så ødelagde det alt. Jeg ved ikke hvorfor men jeg kunne overhovedet ikke forbinde til severen, den crashede fuldstændig, så jeg valgte at prøve at gå et par skridt tilbage og afinstallere det, for jeg kunne simpelthen ikke finde fejlen, selvom jeg havde fejlsøgt et par timer. Alt dette havde utroligvis taget hele dagen, så det var en del uforventent, jeg det løste sig til sidst og nu virker min hjemmeside igen og den har forbindelse til databsen igen.

## Torsdag -  Kontakt form
dagen idag skal jeg prøve at få lavet min form ligesom i går, bare forhåbentlig uden fejl.

Dagen i dag er gået upåklageligt, fordi jeg har fået lavet min kontakt tabel i databasen, fået den forbundet via route til min html, og fået indsat min kontakt form på html hjemmesiden, og til sidst men ikke mindst har jeg fået den forbundet til min database, så nu kan man indsætte i databasen via formen på kontakt siden.

## Fredag - Indsættelses form
Dagen i dag går ud på at få lavet indsættelses formen færdig, den som jeg ikke kunne få til at fungerer sidste fredag.

Det har været en drille dag i dag, selvom jeg har brugt de samme funktioner, de samme routes som kontakt formen, så kan jeg simpelthen ikke få indsættelses formen til at forbinde til databsen. Den udskriver og siger ok hvis man trykker på knappen, men den indsætter ikke noget i databasen. Jeg har arbejdet hele dagen på den, men fik den ikke til at fungerer da dagen var slut, så jeg må arbejde videre på den i løbet af næste uge.

# Projekt Uge 3

## Mnadag - Start af login
I dag er planen at få lavet starten på min login database.

jeg har prøvet i dag at undersøge om hvordan man laver et login, har prøvet at skrive koden til det, men var meget på bar bund så til sidst valgte jeg at vente på at vi får undervisining i det.

## Tirsdag - Færddiggøreing af Søgefunktion

I dag er planen at få søgefunktionen henvist til produkt siden.

I dag har jeg fået færdiggjort at søgefunktionen bliver henvist til produkt siden. Før blev man bare vist søgningen i en ekstra div neden under søge baren, men nu bliver man henvist til produkt siden, med det man har søgt efter.

## Onsdag - visning af produkter i kategori
I dag skal jeg have lavet koden, så den viser den bestemte kategori via et produkt.

Jeg er blevet færdig, og har omdøbt siden til bibliotek. Den viser alle produkterne til at starte med, men når man trykker på en specifik kategori, så bliver kun de produkter vist.

## Torsdag - Info om produkt
I dag er planen at få skrevet koden så man får mere info om produktet

Jeg har fået lavet koden så når man trykker på mere info, så bliver man henvist til en side der udskriver flere informationer om selve produktet.

## Fredag - Aflevering

I dag er afleverings dagen, jeg skal sikre mig at alle funktionerne virker, og få lavet filerne klar til aflevering.


# Mangler


- slette produkt
- oprette produkt
- Et færdigt design


# Tredje Forløb

Planen i uge 1 er at få ryddet op i alle filerne, så de ser flotte ud uden fejl og mangler.
Derudover skal der være lavet et login.

Planen i uge 2 er at få lavet slette funktionen og indsæt funktionen, og få lavet designet helt færdigt.

Så når de 2 uger er gået, så er vi nået deadline. Når vi når dertil skal der være et færdigt produkt der er værd at fremvise. Det skal indeholde alle de funktioner som der er blevet udtænkt.
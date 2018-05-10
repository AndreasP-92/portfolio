const fs = require('fs')
module.exports = {

    'opret': (next) => {
        //console.log(JSON.parse(fs.readFileSync('../.././data/projects/slipseknuden/data/produkter.json', 'utf8')));
        var array = JSON.parse(fs.readFileSync('../.././data/projects/slipseknuden/data/produkter.json', 'utf8'))
        array.produkter.push({
            id: array.produkter[array.produkter.length - 1].id + 1,
            beskrivelse: next.beskrivelse,
            tittle: next.tittle,
            beskrivelse: next.beskrivelse,
            pris: next.pris,
            img: next.img
        })
        fs.writeFile('../.././data/projects/slipseknuden/data/produkter.json', JSON.stringify(array), function (err) {
            if (err) throw err;
            console.log('OK!')
        })
        // output fra users
    },

    'slet': (next) => {
        console.log(next);
        var array = JSON.parse(fs.readFileSync('../.././data/projects/slipseknuden/data/produkter.json', 'utf8'))
        array.produkter.splice(next - 1, 1);
        fs.writeFile('../.././data/projects/slipseknuden/data/produkter.json', JSON.stringify(array), function (err) {
            if (err) throw err;
            console.log('OK!')
        })

    },

    'rediger': (next) => {
        var array = JSON.parse(fs.readFileSync('../.././data/projects/slipseknuden/data/produkter.json', 'utf8'))
        array.produkter[next.id - 1].id = array.produkter[array.produkter.length - 1].id + 1;
        array.produkter[next.id - 1].beskrivelse = next.beskrivelse,
            array.produkter[next.id - 1].tittle = next.tittle,
            array.produkter[next.id - 1].beskrivelse = next.beskrivelse,
            array.produkter[next.id - 1].pris = next.pris,
            array.produkter[next.id - 1].img = next.img
        fs.writeFile('../.././data/projects/slipseknuden/data/produkter.json', JSON.stringify(array), function (err) {
            if (err) throw err;
            console.log('OK!')
        })
    }
}

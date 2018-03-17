module.exports = function (app){
    app.get('/nyheder',function(reg,res){

    var artikkel_01 =[
        {   id: 1,
            dato : '02/01/2014',
            overskrift : 'Slipseknuden går online',
            ny : 'Vi lancerer nu vores hjemmesiden med billeder af vores aller fineste slips.' },

         {  id : 2,
            dato : '15/04/2014',
            overskrift : 'slips!',
            ny : 'Nye slips i vores sortiment.' },
            
        {   id : 3,
            dato : '07/03/2011',
            overskrift : 'Se her!',
            ny : 'Nye modeslips er på vej til hjemmesiden.' },
             
        {   id : 4,
            dato : '30/08/2010',
            overskrift : 'Nu er de her!',
            ny : 'Se vores nyeste slips under produkter!' }
    ];
            res.render('pages/nyheder',{
                artikkel_01 : artikkel_01,

            })
    })
}

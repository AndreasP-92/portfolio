(function(){

})();

function gem (){
// GET VALUE FROM UPDATE PAGE =====================================================
	var news_title 		= document.querySelector('.input_title').value,
		news_date 		= document.querySelector('.input_date').value,
        news_author		= document.querySelector('.input_author').value,
        news_text       = document.querySelector('.input_text').value;


	// console.log('==================================')
	// console.log(arrangement_img)
	// console.log('==================================')

// CREATING HEADER ==============================================================

	let headers = new Headers();
		headers.append('Content-Type', 'application/json');

	let init = {
		method	:	'POST',
		headers	:	headers,
		body	:	`{
			"news_title"	: "${news_title}",
			"news_date"		: "${news_date}",
			"news_author"	: "${news_author}",
			"news_text"		: "${news_text}"
		}`,
		cache	:	'no-cache',
		cors	:	'no-cors'
	}
	console.log('==================================')
	console.log(init)
	console.log('==================================')

	let request = new Request ('/json/arrangement/create/news', init);

	let verify = 
    news_title      != "" &&
    news_date		!= "" &&
    news_author     != "" &&
    news_text       != "" ;

// FETCHING ============================================================================

// if(verify){
	fetch(request)
		.then(function(response){
			if(response.status == 200){
				alert('Række indsat!');
				location.reload();
			} else {
				throw new Error ('FEJL, kunne ikke indsætte ny række!')
			}
		})
		.catch(function(err){
			alert(err);
		})
	// } else{
	// 	alert('FEJL, Indsæt alle felter!')
	// }
}

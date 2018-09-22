(function(){

})();

function gem (){
// GET VALUE FROM UPDATE PAGE =====================================================
	var arrangement_title 		= document.querySelector('.input_title').value,
		arrangement_img			= 'picture.jpg',
		arrangement_text 		= document.querySelector('.input_text').value,
		arrangement_adress 		= document.querySelector('.input_adress').value,
		arrangement_buildingNo 	= document.querySelector('.input_buildingNo').value,
		arrangement_dateStart	= document.querySelector('.input_dateStart').value,	
		arrangement_dateEnd 	= document.querySelector('.input_dateEnd').value,	
		arrangement_price 		= document.querySelector('.input_price').value,	
		arrangement_show 		= document.querySelector('.input_show').value,
    	arrangement_category 	= document.querySelector('.input_category').value;


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
			"arrangement_title"		: "${arrangement_title}",
			"arrangement_img"		: "${arrangement_img}",
			"arrangement_show"		: "${arrangement_show}",
			"arrangement_category"	: "${arrangement_category}",
			"arrangement_text"		: "${arrangement_text}",
			"arrangement_adress"	: "${arrangement_adress}",
			"arrangement_buildingNo": "${arrangement_buildingNo}",
			"arrangement_dateStart"	: "${arrangement_dateStart}",
			"arrangement_dateEnd"	: "${arrangement_dateEnd}",
			"arrangement_price"		: "${arrangement_price}"
		}`,
		cache	:	'no-cache',
		cors	:	'no-cors'
	}
	console.log('==================================')
	console.log(init)
	console.log('==================================')

	let request = new Request ('/json/arrangement/create/activity', init);

	let verify = 
		arrangement_title       != "" &&
		arrangement_img			!= "" &&
		arrangement_text        != "" &&
		arrangement_adress      != "" &&
		arrangement_buildingNo  != "" &&
		arrangement_dateStart   != "" &&
		arrangement_dateEnd     != "" &&
		arrangement_price       != "" &&
		arrangement_category	!= "";

// FETCHING ============================================================================

if(verify){
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
	} else{
		alert('FEJL, Indsæt alle felter!')
	}
}

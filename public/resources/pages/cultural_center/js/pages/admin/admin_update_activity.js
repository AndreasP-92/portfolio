(function(){
	
})()
function gem (arrangement_id){

// GET VALUE FROM UPDATE PAGE =====================================================

	var arrangement_title 		= document.querySelector('#input_title_' + arrangement_id).value,
		arrangement_text 		= document.querySelector('#input_text_' + arrangement_id).value,
		arrangement_adress 		= document.querySelector('#input_adress_' + arrangement_id).value,
		arrangement_buildingNo 	= document.querySelector('#input_buildingNo_' + arrangement_id).value,
		arrangement_dateStart 	= document.querySelector('#input_dateStart_' + arrangement_id).value,	
		arrangement_dateEnd 	= document.querySelector('#input_dateEnd_' + arrangement_id).value,	
		arrangement_price 		= document.querySelector('#input_price_' + arrangement_id).value,	
		arrangement_show 		= document.querySelector('#input_show_' + arrangement_id).value,
		arrangement_category 	= document.querySelector('#input_category_' + arrangement_id).value;
	
	// console.log('==================================')
	// console.log('adress category', arrangement_category)
	// console.log('==================================')
	
// CREATING HEADER ==============================================================

	let headers = new Headers();
		headers.append('Content-Type', 'application/json');

	let init = {
		method	: 	'PUT',
		headers	: 	headers,
		body	: `{
			"arrangement_title"		: "${arrangement_title}",
			"arrangement_show"		: "${arrangement_show}",
			"arrangement_category"	: "${arrangement_category}",
			"arrangement_text"		: "${arrangement_text}",
			"arrangement_adress"	: "${arrangement_adress}",
			"arrangement_buildingNo": "${arrangement_buildingNo}",
			"arrangement_dateStart"	: "${arrangement_dateStart}",
			"arrangement_dateEnd"	: "${arrangement_dateEnd}",
			"arrangement_price"		: "${arrangement_price}"

					}`,
		cache	: 	'no-cache',
		cors 	:	'no-cors'
	}

	let request = new Request ('http://localhost:1337/json/arrangement/update/'+arrangement_id, init)

// VERIFY INPUT FIELDS ==================================================

	let verify = 
	arrangement_title       != "" &&
	arrangement_text        != "" &&
	arrangement_adress      != "" &&
	arrangement_buildingNo  != "" &&
	arrangement_dateStart   != "" &&
	arrangement_dateEnd     != "" &&
	arrangement_price       != "" &&
	arrangement_category	!= "";

// FETCHING ============================================================================

// window.location.replace(`/culturalcenter/admin`)
if(verify){
	fetch(request)
		.then(function(response){
			if(response.status == 200){
				alert('Række opdateret med id nr: ' + arrangement_id)
			}else {
				throw new Error('ERROR, could not update')
			}
		})
		.catch(function(err){
			alert(err);
		})
	} else{
		alert('FEJL, Indsæt alle felter!')
	}
}

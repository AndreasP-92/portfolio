(function(){

})();

// ****************************************************** UPLOAD DANISH PROJECT ************************************************

const port = "80"

function saveDK (){
// GET VALUE FROM UPDATE PAGE =====================================================
let project_link 		= document.querySelector('.input_link').value,
	project_title 		= document.querySelector('.input_title').value,
	project_image 		= document.querySelector('.input_image').value,
	project_date 		= document.querySelector('.input_date').value,
	project_text_01		= document.querySelector('.input_text_01').value,
	project_text_02		= document.querySelector('.input_text_02').value,
	project_text_03		= document.querySelector('.input_text_03').value;
	// project_show		= document.querySelector('.input_show').value
	
	// console.log(' ============admin js project_link *18===========\n', project_link)

// CREATING HEADER ==============================================================

	let headers = new Headers();
		headers.append('Content-Type', 'application/json');

	let init = {
		method	:	'POST',
		headers	:	headers,
		body	:	`{
			"project_link"		: "${project_link}",
			"project_title"		: "${project_title}",
			"project_image"		: "${project_image}",
			"project_date"		: "${project_date}",
			"project_link"		: "${project_link}",
			"project_text_01"	: "${project_text_01}",
			"project_text_02"	: "${project_text_02}",
			"project_text_03"	: "${project_text_03}"
		}`,
		cache	:	'no-cache',
		cors	:	'no-cors'
	}

	// console.log('============init admin *43======== \n', init)

	let request = new Request (`http://localhost:${port}/json/project/create/project/dk`, init);

	let verify = 
		project_link        != "" &&
		project_title		!= "" &&
		project_image       != "" &&
		project_date      	!= "" &&
		project_text_01  	!= "";

// FETCHING ============================================================================

if(verify){
	fetch(request)
		.then(function(response){
			if(response.status == 200){
				alert('Project uploaded!');
				// location.reload();
			} else {
				throw new Error ('ERROR! It wasnt possible to upload new project')
			}
		})
		.catch(function(err){
			alert(err);
		})
	} else{
		alert('ERROR! Insert all fields')
	}
};

// ****************************************************** UPLOAD ENGLISH PROJECT ************************************************

function saveEN (){
// GET VALUE FROM UPDATE PAGE =====================================================
let project_link_en 		= document.querySelector('.input_link_en').value,
	project_title_en 		= document.querySelector('.input_title_en').value,
	project_image_en 		= document.querySelector('.input_image_en').value,
	project_date_en 		= document.querySelector('.input_date_en').value,
	project_text_01_en		= document.querySelector('.input_text_01_en').value,
	project_text_02_en		= document.querySelector('.input_text_02_en').value,
	project_text_03_en		= document.querySelector('.input_text_03_en').value;
	// project_show_en			= document.querySelector('.input_show_en').value;
	



	// console.log(' ============admin js project_link_en *97===========\n', project_link_en)


// CREATING HEADER ==============================================================

	let headers = new Headers();
		headers.append('Content-Type', 'application/json');

	let init = {
		method	:	'POST',
		headers	:	headers,
		body	:	`{
			"project_link_en"		: "${project_link_en}",
			"project_title_en"		: "${project_title_en}",
			"project_image_en"		: "${project_image_en}",
			"project_date_en"		: "${project_date_en}",
			"project_text_01_en"	: "${project_text_01_en}",
			"project_text_02_en"	: "${project_text_02_en}",
			"project_text_03_en"	: "${project_text_03_en}"
		}`,
		cache	:	'no-cache',
		cors	:	'no-cors'
	};

	console.log('============init admin *122======== \n', init)


	let request = new Request (`http://localhost${port}/json/project/create/project/en`, init);

	let verify = 
		project_link_en	        != "" &&
		project_title_en		!= "" &&
		project_image_en        != "" &&
		project_date_en      	!= "" &&
		project_text_01_en  	!= "" &&
		project_text_02_en   	!= "" &&
		project_text_02_en      != "" ;
	console.log(request)
// FETCHING ============================================================================

if(verify){
	fetch(request)
		.then(function(response){
			if(response.status == 200){
				alert('Project uploaded!');
				// location.reload();
			} else {
				throw new Error ('ERROR! It wasnt possible to upload new project')
			}
		})
		.catch(function(err){
			alert(err);
		})
	} else{
		alert('ERROR! Insert all fields')
	}
};

(function(){
	getCategory();
})();

function getCategory() {
	// console.log('data læst')
	var dropdown = document.querySelector('.categoryDropdown');
	fetch('/json/category/all')
		.then(function (response) {
			if (response.ok) {
				return response.json();
			}
		})
		.then(function (data) {

			data.forEach(elm => {
				var a = document.createElement('a');
					a.classList.add('dropdown-item');
					a.setAttribute('href', '/admin/activity/' + elm.category_link)

				var aText = document.createTextNode(elm.category_title);
					a.appendChild(aText);
					

				var div = document.createElement('div');
					div.classList.add("dropdown-divarrangement_ider");


					dropdown.appendChild(a);
					dropdown.appendChild(div);
			});
		})

}
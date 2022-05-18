window.onload = function () {
	var fileupload = document.getElementById('pageUploader');
	var button = document.getElementById('btnFileUpload');
	button.onclick = function () {
		fileupload.click();
	};
	fileupload.onchange = function () {
		var reader = new FileReader();
		reader.readAsDataURL(fileupload.files[0]);
		reader.onload = function (event) {
			img = loadImage(event.target.result, () => {
				loop();
			});
		};
	};
};

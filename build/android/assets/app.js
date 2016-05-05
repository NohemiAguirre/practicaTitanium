(function (e){
	/*Aquí vamos a declara la variabla win para crear la pantalla*/
	win = Ti.UI.createWindow({
		backgroundColor: '#00ff45'
	}),
	/*En esta parte exportamos el archivo FileSystem al archivo app*/
	fileSystem = require('FileSystem'),
	//creamos los 4 botones y un input o textField
	 buttonCreate = Ti.UI.createButton({
	 	
	 	title: 'crear',
	 	width: '40%',
	 	height: '10%',
	 	top: '0%',
	 	
	 	
	 }),
	 
	 buttonDelete = Ti.UI.createButton({
	 	
	 	title: 'eliminar',
	 	width: '40%',
	 	height: '10%',
	 	top: '10%',
	 	
	 	
	 }),
	 
	 buttonShow = Ti.UI.createButton({
	 title: 'mostrar',
	 	width: '40%',
	 	height: '10%',
	 	top: '20%'	,
	 	
	 }),
	 textField = Ti.UI.createTextField({
	 	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	 	color: 'black',
	 	top: '30%',
	 	width: '60%',
	 	height: '10%',
	 }),
	 buttonUpdate = Ti.UI.createButton({
	 	
	 	title: 'subir',
	 	width: '40%',
	 	height: '10%',
	 	top: '40%',
	 	
	 	
	 });
	 //agregar a pantalla
	 win.add(buttonCreate);
	 win.add(buttonDelete);
	 win.add(buttonShow);
	 win.add( textField );
	 win.add(buttonUpdate );
	
	//eventos
	
	buttonCreate.addEventListener('click',fileSystem.create);
	buttonDelete.addEventListener('click',fileSystem.deleting);
	buttonShow.addEventListener('click',fileSystem.show);
	buttonUpdate.addEventListener('click',function(e){
	fileSystem.update(textField.value);	
	textField.value = '';
	});
	win.open();
})();
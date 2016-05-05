
exports.show = function(){

	var foo = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'myfile.txt');
	if(foo.exists()){
		var contet = foo.read();
		var details = Ti.UI.createWindow({
		backgroundColor : '#80E0E6'
	});

	buttonClose = Ti.UI.createButton({
		title : 'close',
		width : '20%',
		height : '10%',
		top : 0,
		left : 0
	});

	labelDetails = Ti.UI.createLabel({
		text:'el archivo no existe',
		color: 'black',
		width : '60%',
		height : '100%',
		top : 0
	});

	details.add(buttonClose);
	details.add(labelDetails);
	
	labelDetails.text = 'content:'+ contet.text;
	labelDetails.text = labelDetails.text + '\n type:'+contet.mimeType;
	
	details.open({modal:true});
	buttonClose.addEventListener('click',function(e){
		details.close();
	});
	}
	else{
		alert('no existe nada');
	}
	};
//esta función crea el archivo y escribe un mensaje en el archivo
exports.create = function(){
	var foo = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'myfile.txt');
	foo.write('hola a todos');
	alert('archivo creado');
};
//cargamos lo que escribitmos en el archivo de texto
exports.update = function(data){
	var foo = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'myfile.txt');
	if(foo.exists()){
		foo.write(data);
	alert('subido'+data);
}
else{
	alert('archivo no existe');
	}
};
//elimina el contenido de archivo de texto
exports.deleting = function(){
	var foo = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'myfile.txt');
	if(foo.exists()){
		foo.deleteFile();
		alert('eliminar');		
	} 
	else{
	alert('archivo no existe');
	}
};

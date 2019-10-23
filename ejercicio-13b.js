function palindromo(palabra){
	palabra = palabra.toLowerCase().replace(/\s/g,"");
	palabraInvert = palabra.split("").reverse().toString();
	for(var i=0; i<((palabraInvert.length)-1); i++){
		palabraInvert = palabraInvert.replace(",", "");
	}
	
	if(palabra == palabraInvert){
		document.write("palindromo");
	}else{
		document.write("no palindromo");
	}
}

palindromo('ANA');
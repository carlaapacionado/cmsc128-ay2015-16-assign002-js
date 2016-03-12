
function getHammingDistance (str1, str2){
	
	if(typeof str1=="string"&&typeof str2=="string"){ //checking if parameters are valid
		var i = str1.length;
		var j = str1.length;
		var count = 0;
		
		if (i==j){ // condition to assure the strings are of same length
			for(var k=0; k<1; k++){
				if(str1.charAt(k)!=str2.charAt(k)){ //for every char different from the two count increases
					count = count + 1;
				}
			}
			return count; //returns no of differences
		}
		else{
			return "Error! Strings are not equal!";
		}
	}else{
		return "Error! Parameter requirements not met.";
	}
}

function countSubstrPattern(strOrig, str1){
	if(typeof strOrig=="string"&&typeof str1=="string"){ //validating parameters
		var i = strOrig.length; //getting length
		var j = str1.length;
		var k, count=0;
		
		if(i<j){ //if string to be searched for is longer than original string
			return 0; //return 0
		}else{
			for(k=0; k<=(i-j); k++){ //to traverse the original string up to i-jth position
				var temp = str.substr(k, j);
				if(temp==str1){ //if the same
					count = count+1; //add 1 to count
				}
			}
			return count;
		}	
	}else{
		return "Error! Parameter requirements not met.";
	}
	
}

function isValidString(str, alph){
	if(typeof str1=="string"&&typeof alph=="string"){ //checking if parameters are valid
		var i = str.length;
		var j = alph.length;
		var count = 0;
		
		for(var a=0; a<j; a++){ //for traversing the alphabet
			for(var b=0; b<i; b++){ //for traversing the main string
				if(alph.charAt(a)==str.charAt(b)){//looking for the similar term
					count = count + 1; 
					break; //if there is, break the loop
				}
			}
		}
		
		if(count==j){ //in case the alphabet is the contents of the string
			return true;
		}
		else{
			return false;
		}
	}else{
		return "Error! Parameter requirements not met.";
	}
}

function getSkew(str, n){
	if(typeof str1=="string"&&typeof n=="number"){ //checking if parameters are valid
		var i = str.length;
		var j, c=0, g=0, others=0;
		
		if(Math.sign(n)==1){ //checking if n is positive
			if(i!=0&&i<=n){ //checking if parameter requirements are passed
				for(j=0; j<n; j++){//traversing the string until the value of n
					if(str.charAt(j)=="C"){
						c = c+1;
					}else if(str.charAt(j)=="G"){
						g = g+1;
					}else{
						others = others+1;
					}
				}
			return g-c;
			}else{
				return "Error! Parameter requirements not met.";
			}
		}else{
			return "Error! Parameter requirements not met.";
		}
	}else{
		return "Error! Parameter requirements not met.";
	}
}


function getMaxSkewN(str, n){
	if(typeof str1=="string"&&typeof n=="number"){
		
		var i = str.length;
		var j, c=0, g=0, others=0;
		
		if(Math.sign(n)==1){
			if(i!=0&&i<=n){
				for(j=0; j<n; j++){
					if(str.charAt(j)=="C"){
						c = c+1;
					}else if(str.charAt(j)=="G"){
						g = g+1;
					}else{
						others = others+1;
					}
				}
				if(c<g){
					return g;
				}else{
					return c;
				}	
			}else{
				return "Error! Parameter requirements not met.";
			}
		}else{
			return "Error! Parameter requirements not met.";
		}
	}else{
		return "Error! Parameter requirements not met.";
	}
}

function getMinSkew(str, n){
	if(typeof str1=="string"&&typeof n=="number"){ //checking if parameters are valid
		var i = str.length;
		var j, c=0, g=0, others=0;
		
		if(Math.sign(n)==1){ //checking if n is positive
			if(i!=0&&i<=n){ //checking if parameter requirements are passed
				for(j=0; j<n; j++){//traversing the string until the value of n
					if(str.charAt(j)=="C"){
						c = c+1;
					}else if(str.charAt(j)=="G"){
						g = g+1;
					}else{
						others = others+1;
					}
				}
			return g-c;
			}else{
				return "Error! Parameter requirements not met.";
			}
		}else{
			return "Error! Parameter requirements not met.";
		}
	}else{
		return "Error! Parameter requirements not met.";
	}
}



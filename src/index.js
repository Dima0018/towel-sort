
// You should implement your task here.

module.exports = function towelSort (matrix) {
	let res = [];
	if(!matrix){
		return res;
	}
  	for(let i = 0; i<matrix.length; i++){
  	
  		if (i%2 ===0){
	  		for(let r=0; r<matrix[i].length; r++){
	  			res.push(matrix[i][r]);
	  		}
	  	}
	  	else {
	  		for(let r=matrix[i].length-1; r>-1;r--){
	  			res.push(matrix[i][r]);
	  		}
	  	}
	  }
  	return res;
}

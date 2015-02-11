
var tokenize = function ( type , sequence , out ) {

	var i , len , item ;

	len = sequence.length ;

	for ( i = 0 ; i < len ; ++i ) {

		item = sequence[i] ;

		out.push( new Token( type , item ) ) ;

	}

} ;

exports.tokenize = tokenize ;

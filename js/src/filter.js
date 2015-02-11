
/**
 * @param {function} predicate test if token must be kept
 * @param {array} tokens input sequence
 * @param {array} out output sequence
 */

var filter = function ( predicate , tokens , out ) {

	var i , len ;

	len = tokens.length ;

	for ( i = 0 ; i < len ; ++i ) {

		token = tokens[i] ;

		if ( predicate( token ) ) {
			out.push( token ) ;
		}

	}

} ;

exports.filter = filter ;

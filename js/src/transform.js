
/**
 * @param {type} type the new type to assign
 * @param {function} predicate test if token must be kept
 * @param {array} tokens input sequence
 * @param {array} out output sequence
 */

var transform = function ( type , predicate , tokens , out ) {

	var i , len ;

	len = tokens.length ;

	for ( i = 0 ; i < len ; ++i ) {

		token = tokens[i] ;

		if ( predicate( token ) ) {
			token.type = type ;
		}

		out.push( token ) ;

	}

} ;

exports.transform = transform ;

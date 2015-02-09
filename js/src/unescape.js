
/**
 * @param {token} esc the escape token
 * @param {type} rawtype the type for tokens not in map
 * @param {map} map a token -> type map
 * @param {array} tokens array of tokens
 * @param {array} out output array
 */

var unescape = function ( esc , rawtype , map , tokens , out ) {

	var i , len , token ;

	for ( i = 0 , len = tokens.length ; i < len ; ++i ) {

		token = tokens[i] ;

		// next token is escaped
		if ( token === esc ) {
			++i ;
			out.push( [ rawtype , tokens[i] ] ) ;
			continue ;
		}

		// token has special meaning
		if ( token in map ) {
			out.push( [ map[token] , token ] ) ;
			continue ;
		}

		// token is just a raw one
		out.push( [ rawtype , token ] ) ;

	}

} ;

exports.unescape = unescape ;

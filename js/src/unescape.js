
/**
 * @param {token} esc the escape token
 * @param {type} raw the type for tokens not in map
 * @param {map} umap a token -> type map for non escaped tokens
 * @param {map} emap a token -> type map for escaped tokens
 * @param {array} tokens array of tokens
 * @param {array} out output array
 */

var unescape = function ( esc , raw , umap , emap , tokens , out ) {

	var i , len , token ;

	for ( i = 0 , len = tokens.length ; i < len ; ++i ) {

		token = tokens[i] ;

		// next token is escaped
		if ( token.item === esc ) {

			++i ;

			if ( i === len ) {
				// error
				return false ;
			}

			token = tokens[i] ;

			// token has special meaning
			if ( token.item in emap ) {
				token.type = emap[token.item] ;
			}

		}

		// token is not escaped and has special meaning
		else if ( token.item in umap ) {
			token.type = umap[token.item] ;
		}

		out.push( token ) ;

	}

	return true ;

} ;

exports.unescape = unescape ;

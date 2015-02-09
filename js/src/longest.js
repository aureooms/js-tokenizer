
/**
 * @param {trie root} empty root of the trie
 * @param {array} tokens array of tokens
 * @param {array} out output array
 */

var longest = function ( empty , tokens , out ) {

	var i , j , len , node , next , val ;

	node = empty ;

	i = 0 ;
	j = 0 ;
	len = tokens.length ;

	while ( j < len ) {

		next = node.get( tokens , j ) ;

		if ( next === undefined ) {

			if ( node === empty ) {

				// assert i === j

				++j ;
				out.push( [ undefined , i , j ] ) ;
				i = j ;
				continue ;

			}

			val = node.value( ) ;

			// assert val !== undefined

			out.push( [ val , i , j ] ) ;
			node = empty ;
			i = j ;
			continue ;

		}

		node = next ;
		++j ;

	}

	if ( node !== empty ) {

		val = node.value( ) ;
		out.push( [ val , i , len ] ) ;

	}

} ;

exports.longest = longest ;

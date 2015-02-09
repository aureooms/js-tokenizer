(function(exports, undefined){

	'use strict';


/* js/src/longest.js */

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

/* js/src/unescape.js */

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

})(typeof exports === 'undefined' ? this['tokenizer'] = {} : exports);

(function(exports, undefined){

	'use strict';


/* js/src/Token.js */

var Token = function ( type , item ) {

	this.type = type ;
	this.item = item ;

} ;

exports.Token = Token ;

/* js/src/filter.js */

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

/* js/src/regexp.js */

/**
 * @param {token} esc the escape token
 * @param {type} raw the type for tokens not in map
 * @param {map} umap a token -> type map for non escaped tokens
 * @param {map} emap a token -> type map for escaped tokens
 * @param {array} tokens array of tokens
 * @param {array} out output array
 */

var regexp = function ( esc , raw , umap , emap , tokens , out ) {

	var i , len , token ;

	i = 0 ;
	len = tokens.length ;

	while ( true ) {

		while ( true ) {

			if ( i === len ) {
				return true ;
			}

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

			++i ;

			if ( token.item === open ) {
				break ;
			}

		}

		while ( true ) {

			if ( token.item === close ) {

			}

		}

	}

	return true ;

} ;

exports.regexp = regexp ;

/* js/src/tokenize.js */

var tokenize = function ( type , sequence , out ) {

	var i , len , item ;

	len = sequence.length ;

	for ( i = 0 ; i < len ; ++i ) {

		item = sequence[i] ;

		out.push( new Token( type , item ) ) ;

	}

} ;

exports.tokenize = tokenize ;

/* js/src/transform.js */

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

/* js/src/unescape.js */

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

})(typeof exports === 'undefined' ? this['tokenizer'] = {} : exports);

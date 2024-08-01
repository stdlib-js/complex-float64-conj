/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

import Complex128 = require( '@stdlib/complex-float64-ctor' );

/**
* Returns the complex conjugate of a double-precision complex floating-point number.
*
* @param z - complex number
* @returns complex conjugate
*
* @example
* var Complex128 = require( '@stdlib/complex-float64-ctor' );
* var real = require( '@stdlib/complex-float64-real' );
* var imag = require( '@stdlib/complex-float64-imag' );
*
* var z = new Complex128( 5.0, 3.0 );
*
* var v = conj( z );
* // returns <Complex128>
*
* var re = real( v );
* // returns 5.0
*
* var im = imag( v );
* // returns -3.0
*/
declare function conj( z: Complex128 ): Complex128;


// EXPORTS //

export = conj;

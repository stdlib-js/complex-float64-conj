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

import Complex128 = require( '@stdlib/complex-float64-ctor' );
import conj = require( './index' );


// TESTS //

// The function returns a complex number...
{
	conj( new Complex128( 5.0, 3.0 ) ); // $ExpectType Complex128
}

// The compiler throws an error if the function is provided an argument that is not a complex number...
{
	conj( 'abc' ); // $ExpectError
	conj( 123 ); // $ExpectError
	conj( true ); // $ExpectError
	conj( false ); // $ExpectError
	conj( [] ); // $ExpectError
	conj( {} ); // $ExpectError
	conj( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	conj(); // $ExpectError
	conj( new Complex128( 5.0, 3.0 ), 123 ); // $ExpectError
}

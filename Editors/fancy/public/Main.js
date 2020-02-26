(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_enqueueEffects(managers, result.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}




// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.multiline) { flags += 'm'; }
	if (options.caseInsensitive) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$element = _Browser_element;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $author$project$Markdown$Option$ExtendedMath = {$: 'ExtendedMath'};
var $author$project$Markdown$Option$ExternalTOC = function (a) {
	return {$: 'ExternalTOC', a: a};
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $jxxcarlson$elm_text_editor$Editor$Config$DontWrap = {$: 'DontWrap'};
var $author$project$Main$EditorMsg = function (a) {
	return {$: 'EditorMsg', a: a};
};
var $author$project$Main$proportion = {height: 0.7, width: 0.35};
var $author$project$Main$config = function (flags) {
	return {
		editorMsg: $author$project$Main$EditorMsg,
		fontProportion: 0.75,
		height: flags.height * $author$project$Main$proportion.height,
		lineHeight: 16.0,
		lineHeightFactor: 1,
		showInfoPanel: false,
		width: flags.width * $author$project$Main$proportion.width,
		wrapOption: $jxxcarlson$elm_text_editor$Editor$Config$DontWrap,
		wrapParams: {maximumWidth: 45, optimalWidth: 40, stringWidth: $elm$core$String$length}
	};
};
var $author$project$Main$getFirstPart = function (str) {
	return A2($elm$core$String$left, 1500, str);
};
var $jxxcarlson$elm_text_editor$Buffer$toString = function (_v0) {
	var buffer = _v0.a;
	return buffer;
};
var $jxxcarlson$elm_text_editor$Editor$getSource = function (_v0) {
	var data = _v0.a;
	return $jxxcarlson$elm_text_editor$Buffer$toString(data.buffer);
};
var $jxxcarlson$elm_text_editor$Editor$Editor = function (a) {
	return {$: 'Editor', a: a};
};
var $jxxcarlson$elm_text_editor$Position$Position = F2(
	function (line, column) {
		return {column: column, line: line};
	});
var $jxxcarlson$elm_text_editor$Editor$History$History = function (a) {
	return {$: 'History', a: a};
};
var $jxxcarlson$elm_text_editor$Editor$History$empty = $jxxcarlson$elm_text_editor$Editor$History$History(
	{future: _List_Nil, past: _List_Nil});
var $lovasoa$elm_rolling_list$RollingList$fromList = function (l) {
	return {next: l, previous: _List_Nil};
};
var $jxxcarlson$elm_text_editor$Buffer$Buffer = function (a) {
	return {$: 'Buffer', a: a};
};
var $jxxcarlson$elm_text_editor$Buffer$fromString = function (str) {
	return $jxxcarlson$elm_text_editor$Buffer$Buffer(str);
};
var $jxxcarlson$elm_text_editor$Buffer$init = function (content) {
	return $jxxcarlson$elm_text_editor$Buffer$Buffer(content);
};
var $jinjor$elm_debounce$Debounce$Debounce = function (a) {
	return {$: 'Debounce', a: a};
};
var $jinjor$elm_debounce$Debounce$init = $jinjor$elm_debounce$Debounce$Debounce(
	{input: _List_Nil, locked: false});
var $jxxcarlson$elm_text_editor$Editor$transformConfig = function (c) {
	var multiplier = 1.64;
	var fontWidth = c.fontProportion * c.lineHeight;
	return {
		fontProportion: c.fontProportion,
		height: c.height,
		lineHeight: c.lineHeight,
		lineHeightFactor: c.lineHeightFactor,
		showInfoPanel: c.showInfoPanel,
		width: c.width,
		wrapOption: c.wrapOption,
		wrapParams: {
			maximumWidth: $elm$core$Basics$floor(((multiplier * c.width) / fontWidth) - 5),
			optimalWidth: $elm$core$Basics$floor(((multiplier * c.width) / fontWidth) - 10),
			stringWidth: $elm$core$String$length
		}
	};
};
var $jxxcarlson$elm_text_editor$Editor$init = F2(
	function (editorConfig, text) {
		return $jxxcarlson$elm_text_editor$Editor$Editor(
			{
				buffer: $jxxcarlson$elm_text_editor$Buffer$init(text),
				state: {
					canReplace: false,
					clipboard: '',
					config: $jxxcarlson$elm_text_editor$Editor$transformConfig(editorConfig),
					currentLine: $elm$core$Maybe$Nothing,
					cursor: A2($jxxcarlson$elm_text_editor$Position$Position, 0, 0),
					debounce: $jinjor$elm_debounce$Debounce$init,
					dragging: false,
					history: $jxxcarlson$elm_text_editor$Editor$History$empty,
					replacementText: '',
					savedBuffer: $jxxcarlson$elm_text_editor$Buffer$fromString(''),
					searchHitIndex: 0,
					searchResults: $lovasoa$elm_rolling_list$RollingList$fromList(_List_Nil),
					searchTerm: '',
					selectedText: $elm$core$Maybe$Nothing,
					selection: $elm$core$Maybe$Nothing,
					showGoToLinePanel: false,
					showHelp: true,
					showInfoPanel: editorConfig.showInfoPanel,
					showSearchPanel: false,
					topLine: 0
				}
			});
	});
var $author$project$Strings$text1 = '# A Pure Elm Markdown Parser\n\n\n## Introduction\n\n![Hummingbird::left](http://noteimages.s3.amazonaws.com/jxxcarlson/hummingbird2.jpg)\nThis project\ngrew out of the need to have a\npure Elm Markdown parser-renderer\nthat could also handle mathematical\ntext.  Mathematical text is rendered by\nMathJax.  The project now includes\na pure Elm text editor (work in progress!)\n\n The Markdown used here offers\nthree options: *Standard*, *Extended* and\n *ExtendedMath*. The Extended option\nprovides for strike-through\ntext, verbatim blocks, poetry blocks,\nand tables.  ExtendedMath handles\nformulas written in TeX/LaTeX:\n\n$$\n\\int_{-\\infty}^\\infty e^{-x^2} dx = \\pi\n$$\n\nNote also that there is an automatically\ngenerated active table of contents.\nIt can be placed inside the document\nat the top, to one side, as it is\nhere, or it can be absent.\n\n\nThe [library](https://package.elm-lang.org/packages/jxxcarlson/elm-markdown/latest/)\nwith which this demo app is built\nis suitable for light-weight writing\ntasks that require mathematical notation\n— problem sets, short class notes, etc.\n\n\nThis project is a work in progress: there is more\n to do make it adhere as closely as\npossible to the CommonMark spec and to root out\nthe bugs and shortcomings in the user interface\ndesign.  Please write me at\njxxcarlson@gmail.com with comments and bug\nreports, or (better yet) post an issue on the\n[GitHub repo](https://github.com/jxxcarlson/elm-markdown).\n\nFor installation, see the notes\nat the end. This Markdown package\nis written in pure Elm. It uses MathJax.js\nto render math formulas.  New in this release\nis syntax highlighting using\n[pablohirafuji/elm-syntax-highlight](https://package.elm-lang.org/packages/pablohirafuji/elm-syntax-highlight/latest/).\nLanguage support at this time: elm,\njavascript, xml, css, python, sql, json.\n\n## Demo\n\nBelow we illustrate some typical Markdown\nelements: images, links, headings, etc.\n\n![Hummingbird](http://noteimages.s3.amazonaws.com/jxxcarlson/hummingbird2.jpg)\nHummingbird (Meditation)\n\nLink: [New York Times](http://nytimes.com)\n\nText styles: **bold** *italic* ~~strike it out~~\n\n\n## Inline Math\n\nThis is a test: $a^2 + b^2 = c^2$.\n\n## Display Math\n\nSo is this:\n\n$$\n\\int_0^1 x^n dx = \\frac{1}{n+1}\n$$\n\n\n## Code\n\nHe said that `a := 0` is an initialization\nstatement.\n\n```python\n# Partial sum of the harmonic series:\n\nsum = 0\nfor n in range(1..100):\n  sum = sum + 1.0/n\nsum\n```\n\n## Verbatim and Tables (Extensions)\n\nA verbatim block begins and ends\nwith four tick marks. It is just\nlike a code block, except that there is no\nsyntax highlighting.  Verbatim blocks\nare an extension of normal Markdown.\n\n````\nVerbatim text has many uses:\n\n   Element    |    Z\n   --------------------\n   Altium     |    4/5\n   Brazilium  |    7/5\n   Certium    |    9/5\n````\n\nBut better is to use Markdown tables:\n\n|  Element  | Symbol |  Z | A |\n| Hydrogen  | H      |  1 | 1.008   |\n| Helium    | He     |  2 |  4.0026 |\n| Lithium   | Li     |  3 |  6.94   |\n| Beryllium | Be     |  4 |  9.0122 |\n| Boron     | B      |  5 | 10.81   |\n| Carbon    | C      |  6 | 12.011  |\n| Nitrogen  | N      |  7 | 14.007  |\n| Oxygen    | O      |  8 | 15.999  |\n| Flourine  | F      |  9 | 18.998  |\n| Neon      | Ne     | 10 | 20.180  |\n\n\n## Lists\n\nIndent by four spaces for each level.  List items\nare separated by blank lines.\n\n- Solids\n\n    - Iron *(metal)*\n\n        - Iron disulfide (Pyrite): $FeS_2$, crystalline\n\n        - Iron(II) sulfed $FeS$, not stable, amorphous\n\n    - Selenium *(use for solar cells)*\n\n- Liquids\n\n    - Alcohol *(careful!)*\n\n    - Water *(Ok to drink)*\n\n## Numbered lists\n\n### Problem Set 18\n\n1. Compute the coefficient of $a^5b^2$\nin $(a + b)^7$.\n\n    1. Do also: coefficient of $a^5b^5$\n    in $(a + 2b)^{10}$\n\n    2. Do also: coefficient of $a^7b^5$\n    in $(a - b)^{12}$\n\n4. If $f\'(2) = 0$, what can you say about\nthe graph of $f$ at $x = 2$?\n\n6. Suppose that in addition, $f\'\'(2) > 0$.\n What else can say about the graph?\n\n\n### Problem Set 19\n\n4. Show that $u(x,t) = f(x - ct)$ is a solution to\nthe equation\n$\\partial u(x,t)/\\partial x + c^{-1} \\partial u(x,t)/\\partial t = 0$.\n\n3. State the wave equation and show that\n$u(x,t)$ as above is a solution to it.\n\n2. In what direction does the wave\ndefined by $u(x,t) = f(x - ct)$ move?\n\n4.  Find a solution of the wave\nequation that represents a pulse\nmoving in the opposite direction.\n\n\n\n## Quotations\n\n\nQuotations are offset:\n\n> Four score and seven years ago our\nfathers brought forth on this continent,\na new nation, conceived in Liberty,\nand dedicated to the proposition\nthat all men are created equal.\n\n> Now we are engaged in a great c\nivil war, testing whether that\nnation, or any nation so\nconceived and so dedicated,\ncan long endure. We are met o\nIn a great battle-field of that war.\nWe have come to dedicate a portion\nof that field, as a final resting\nplace for those who here gave their\nlives that that nation might live.\nIt is altogether fitting and proper\nthat we should do this.\n\n> But, in a larger sense, we can not\ndedicate — we can not consecrate —\nwe can not hallow—this ground. The brave men,\nliving and dead, who struggled here,\nhave consecrated it, far above our poor\npower to add or detract. The world will\nlittle note, nor long remember what we say\nhere, but it can never forget what they d\nid here. It is for us the living, rather,\nto be dedicated here to the unfinished\nwork which they who fought here have thus\nfar so nobly advanced. It is rather for\nus to be here dedicated to the great task\nremaining before us—that from these\nhonored dead we take increased devotion\nto that cause for which they gave the\nlast full measure of devotion—that we\nhere highly resolve that these dead\nshall not have died in vain—that\nthis nation, under God, shall have\na new birth of freedom—and that\ngovernment of the people, by the people,\nfor the people, shall not perish\nfrom the earth.\n\n— Abraham Lincoln, *Gettysbug Address*\n\n## Poetry (Extension)\n\nPoetry blocks, an extension of normal Markdown,\n begin with ">>"; line endings are respected.\n\n>> Twas brillig, and the slithy toves\nDid gyre and gimble in the wabe:\nAll mimsy were the borogoves,\nAnd the mome raths outgrabe.\n\n>> Beware the Jabberwock, my son!\nThe jaws that bite, the claws that catch!\nBeware the Jubjub bird, and shun\nThe frumious Bandersnatch!\n\n\nEtcetera!\n\n___\n\n\nNOTE: this Markdown implementation is\nan option for writing documents on\n[knode.io](https://knode.io).\nKnode also offers MiniLaTeX,\na web-friendly subset of TeX/LaTex.\nTo see how it works without a sign-in, please\nsee [demo.minilatex.app](https://demo.minilatex.app).\n\n\n___\n\n## Installation\n\n\nTo compile, use\n\n```elm\nelm make --output=Main.js\n```\n\nThen open `index.html` to run the app.\n\n\n';
var $author$project$Main$initialText = $author$project$Strings$text1;
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $zwilias$elm_rosetree$Tree$foldlHelp = F4(
	function (f, acc, trees, nextSets) {
		foldlHelp:
		while (true) {
			if (!trees.b) {
				if (nextSets.b) {
					var set = nextSets.a;
					var sets = nextSets.b;
					var $temp$f = f,
						$temp$acc = acc,
						$temp$trees = set,
						$temp$nextSets = sets;
					f = $temp$f;
					acc = $temp$acc;
					trees = $temp$trees;
					nextSets = $temp$nextSets;
					continue foldlHelp;
				} else {
					return acc;
				}
			} else {
				if (!trees.a.b.b) {
					var _v2 = trees.a;
					var d = _v2.a;
					var rest = trees.b;
					var $temp$f = f,
						$temp$acc = A2(f, d, acc),
						$temp$trees = rest,
						$temp$nextSets = nextSets;
					f = $temp$f;
					acc = $temp$acc;
					trees = $temp$trees;
					nextSets = $temp$nextSets;
					continue foldlHelp;
				} else {
					var _v3 = trees.a;
					var d = _v3.a;
					var xs = _v3.b;
					var rest = trees.b;
					var $temp$f = f,
						$temp$acc = A2(f, d, acc),
						$temp$trees = xs,
						$temp$nextSets = A2($elm$core$List$cons, rest, nextSets);
					f = $temp$f;
					acc = $temp$acc;
					trees = $temp$trees;
					nextSets = $temp$nextSets;
					continue foldlHelp;
				}
			}
		}
	});
var $zwilias$elm_rosetree$Tree$foldl = F3(
	function (f, acc, t) {
		return A4(
			$zwilias$elm_rosetree$Tree$foldlHelp,
			f,
			acc,
			_List_fromArray(
				[t]),
			_List_Nil);
	});
var $zwilias$elm_rosetree$Tree$foldr = F3(
	function (f, acc, t) {
		return A3(
			$elm$core$List$foldl,
			f,
			acc,
			A3($zwilias$elm_rosetree$Tree$foldl, $elm$core$List$cons, _List_Nil, t));
	});
var $zwilias$elm_rosetree$Tree$flatten = function (t) {
	return A3($zwilias$elm_rosetree$Tree$foldr, $elm$core$List$cons, _List_Nil, t);
};
var $author$project$Markdown$Render$typeOfMDBlockWithId = function (_v0) {
	var bt = _v0.b;
	return bt;
};
var $author$project$Markdown$Render$isMathWithId = function (block) {
	var _v0 = $author$project$Markdown$Render$typeOfMDBlockWithId(block);
	if ((_v0.$ === 'BalancedBlock') && (_v0.a.$ === 'DisplayMath')) {
		var _v1 = _v0.a;
		return true;
	} else {
		return false;
	}
};
var $author$project$Markdown$Render$numberOfMathElements = function (blockTree) {
	return $elm$core$List$length(
		A2(
			$elm$core$List$filter,
			$author$project$Markdown$Render$isMathWithId,
			$zwilias$elm_rosetree$Tree$flatten(blockTree)));
};
var $author$project$Main$GotSecondPart = function (a) {
	return {$: 'GotSecondPart', a: a};
};
var $elm$core$Process$sleep = _Process_sleep;
var $zwilias$elm_rosetree$Tree$Tree = F2(
	function (a, b) {
		return {$: 'Tree', a: a, b: b};
	});
var $zwilias$elm_rosetree$Tree$mapAccumulateHelp = F4(
	function (f, state, acc, stack) {
		mapAccumulateHelp:
		while (true) {
			var _v0 = acc.todo;
			if (!_v0.b) {
				var node = A2(
					$zwilias$elm_rosetree$Tree$Tree,
					acc.label,
					$elm$core$List$reverse(acc.done));
				if (!stack.b) {
					return _Utils_Tuple2(state, node);
				} else {
					var top = stack.a;
					var rest = stack.b;
					var $temp$f = f,
						$temp$state = state,
						$temp$acc = _Utils_update(
						top,
						{
							done: A2($elm$core$List$cons, node, top.done)
						}),
						$temp$stack = rest;
					f = $temp$f;
					state = $temp$state;
					acc = $temp$acc;
					stack = $temp$stack;
					continue mapAccumulateHelp;
				}
			} else {
				if (!_v0.a.b.b) {
					var _v2 = _v0.a;
					var d = _v2.a;
					var rest = _v0.b;
					var _v3 = A2(f, state, d);
					var state_ = _v3.a;
					var label_ = _v3.b;
					var $temp$f = f,
						$temp$state = state_,
						$temp$acc = _Utils_update(
						acc,
						{
							done: A2(
								$elm$core$List$cons,
								A2($zwilias$elm_rosetree$Tree$Tree, label_, _List_Nil),
								acc.done),
							todo: rest
						}),
						$temp$stack = stack;
					f = $temp$f;
					state = $temp$state;
					acc = $temp$acc;
					stack = $temp$stack;
					continue mapAccumulateHelp;
				} else {
					var _v4 = _v0.a;
					var d = _v4.a;
					var cs = _v4.b;
					var rest = _v0.b;
					var _v5 = A2(f, state, d);
					var state_ = _v5.a;
					var label_ = _v5.b;
					var $temp$f = f,
						$temp$state = state_,
						$temp$acc = {done: _List_Nil, label: label_, todo: cs},
						$temp$stack = A2(
						$elm$core$List$cons,
						_Utils_update(
							acc,
							{todo: rest}),
						stack);
					f = $temp$f;
					state = $temp$state;
					acc = $temp$acc;
					stack = $temp$stack;
					continue mapAccumulateHelp;
				}
			}
		}
	});
var $zwilias$elm_rosetree$Tree$mapAccumulate = F3(
	function (f, s, _v0) {
		var d = _v0.a;
		var cs = _v0.b;
		var _v1 = A2(f, s, d);
		var s_ = _v1.a;
		var d_ = _v1.b;
		return A4(
			$zwilias$elm_rosetree$Tree$mapAccumulateHelp,
			f,
			s_,
			{done: _List_Nil, label: d_, todo: cs},
			_List_Nil);
	});
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $zwilias$elm_rosetree$Tree$indexedMap = F2(
	function (f, t) {
		return A3(
			$zwilias$elm_rosetree$Tree$mapAccumulate,
			F2(
				function (idx, elem) {
					return _Utils_Tuple2(
						idx + 1,
						A2(f, idx, elem));
				}),
			0,
			t).b;
	});
var $zwilias$elm_rosetree$Tree$map = F2(
	function (f, t) {
		return A3(
			$zwilias$elm_rosetree$Tree$mapAccumulate,
			F2(
				function (_v0, e) {
					return _Utils_Tuple2(
						_Utils_Tuple0,
						f(e));
				}),
			_Utils_Tuple0,
			t).b;
	});
var $author$project$BlockType$BalancedBlock = function (a) {
	return {$: 'BalancedBlock', a: a};
};
var $author$project$BlockType$DisplayCode = function (a) {
	return {$: 'DisplayCode', a: a};
};
var $author$project$Markdown$Parse$M = function (a) {
	return {$: 'M', a: a};
};
var $author$project$Markdown$Parse$MDBlockWithId = F4(
	function (a, b, c, d) {
		return {$: 'MDBlockWithId', a: a, b: b, c: c, d: d};
	});
var $author$project$BlockType$MarkdownBlock = function (a) {
	return {$: 'MarkdownBlock', a: a};
};
var $author$project$BlockType$Plain = {$: 'Plain'};
var $author$project$MDInline$Stanza = function (a) {
	return {$: 'Stanza', a: a};
};
var $author$project$Markdown$Parse$T = function (a) {
	return {$: 'T', a: a};
};
var $author$project$BlockType$Verbatim = {$: 'Verbatim'};
var $author$project$MDInline$Paragraph = function (a) {
	return {$: 'Paragraph', a: a};
};
var $author$project$MDInline$BoldText = function (a) {
	return {$: 'BoldText', a: a};
};
var $author$project$MDInline$Expecting = function (a) {
	return {$: 'Expecting', a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 'Token', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 'Good', a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.offset, offset) < 0,
					_Utils_Tuple0,
					{col: col, context: s0.context, indent: s0.indent, offset: offset, row: row, src: s0.src});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
		});
};
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 'Bad', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						A2(
							func,
							A3($elm$core$String$slice, s0.offset, s1.offset, s0.src),
							a),
						s1);
				}
			});
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0.a;
		var parseB = _v1.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v2 = parseA(s0);
				if (_v2.$ === 'Bad') {
					var p = _v2.a;
					var x = _v2.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v2.a;
					var a = _v2.b;
					var s1 = _v2.c;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3(
							$elm$parser$Parser$Advanced$Good,
							p1 || p2,
							A2(func, a, b),
							s2);
					}
				}
			});
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						func(a),
						s1);
				} else {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				}
			});
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $elm$parser$Parser$Advanced$spaces = $elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return _Utils_eq(
			c,
			_Utils_chr(' ')) || (_Utils_eq(
			c,
			_Utils_chr('\n')) || _Utils_eq(
			c,
			_Utils_chr('\r')));
	});
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$Good, false, a, s);
		});
};
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 'AddRight', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {col: col, contextStack: contextStack, problem: problem, row: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 'Empty'};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$core$Basics$not = _Basics_not;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				$elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $author$project$MDInline$boldText = A2(
	$elm$parser$Parser$Advanced$map,
	$author$project$MDInline$BoldText,
	A2(
		$elm$parser$Parser$Advanced$map,
		A2($elm$core$String$replace, '**', ''),
		A2(
			$elm$parser$Parser$Advanced$map,
			$elm$core$String$dropLeft(2),
			$elm$parser$Parser$Advanced$getChompedString(
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0),
								$elm$parser$Parser$Advanced$symbol(
									A2(
										$elm$parser$Parser$Advanced$Token,
										'**',
										$author$project$MDInline$Expecting('expecting \'**\' to begin bold text')))),
							$elm$parser$Parser$Advanced$chompWhile(
								function (c) {
									return !_Utils_eq(
										c,
										_Utils_chr('*'));
								})),
						$elm$parser$Parser$Advanced$symbol(
							A2(
								$elm$parser$Parser$Advanced$Token,
								'**',
								$author$project$MDInline$Expecting('expecting \'**\' to end bold text')))),
					$elm$parser$Parser$Advanced$spaces)))));
var $author$project$MDInline$Code = function (a) {
	return {$: 'Code', a: a};
};
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $elm$core$String$trim = _String_trim;
var $author$project$MDInline$code = A2(
	$elm$parser$Parser$Advanced$map,
	$author$project$MDInline$Code,
	A2(
		$elm$parser$Parser$Advanced$map,
		$elm$core$String$dropRight(1),
		A2(
			$elm$parser$Parser$Advanced$map,
			$elm$core$String$dropLeft(1),
			A2(
				$elm$parser$Parser$Advanced$map,
				$elm$core$String$trim,
				$elm$parser$Parser$Advanced$getChompedString(
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0),
									$elm$parser$Parser$Advanced$symbol(
										A2(
											$elm$parser$Parser$Advanced$Token,
											'`',
											$author$project$MDInline$Expecting('Expecting \'``\' to begin inline code')))),
								$elm$parser$Parser$Advanced$chompWhile(
									function (c) {
										return !_Utils_eq(
											c,
											_Utils_chr('`'));
									})),
							$elm$parser$Parser$Advanced$symbol(
								A2(
									$elm$parser$Parser$Advanced$Token,
									'`',
									$author$project$MDInline$Expecting('Expecting \'``\' to end inline code')))),
						$elm$parser$Parser$Advanced$chompWhile(
							function (c) {
								return !_Utils_eq(
									c,
									_Utils_chr(' '));
							})))))));
var $author$project$MDInline$Image = F2(
	function (a, b) {
		return {$: 'Image', a: a, b: b};
	});
var $author$project$MDInline$PrefixedString = F2(
	function (prefix, text) {
		return {prefix: prefix, text: text};
	});
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $author$project$MDInline$parseWhile = function (accepting) {
	return $elm$parser$Parser$Advanced$getChompedString(
		$elm$parser$Parser$Advanced$chompWhile(accepting));
};
var $author$project$MDInline$image = A2(
	$elm$parser$Parser$Advanced$map,
	function (ps) {
		return A2($author$project$MDInline$Image, ps.prefix, ps.text);
	},
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($author$project$MDInline$PrefixedString),
				$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						'![',
						$author$project$MDInline$Expecting('Expecting \'![\' to begin image block')))),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$author$project$MDInline$parseWhile(
					function (c) {
						return !_Utils_eq(
							c,
							_Utils_chr(']'));
					}),
				$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						'](',
						$author$project$MDInline$Expecting('Expecting \'](\' in image block'))))),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$author$project$MDInline$parseWhile(
					function (c) {
						return !_Utils_eq(
							c,
							_Utils_chr(')'));
					}),
				$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						')',
						$author$project$MDInline$Expecting('Expecting \')\' to end image block')))),
			$elm$parser$Parser$Advanced$chompWhile(
				function (c) {
					return _Utils_eq(
						c,
						_Utils_chr('\n'));
				}))));
var $author$project$MDInline$ItalicText = function (a) {
	return {$: 'ItalicText', a: a};
};
var $author$project$MDInline$italicText = A2(
	$elm$parser$Parser$Advanced$map,
	$author$project$MDInline$ItalicText,
	A2(
		$elm$parser$Parser$Advanced$map,
		A2($elm$core$String$replace, '*', ''),
		$elm$parser$Parser$Advanced$getChompedString(
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0),
							$elm$parser$Parser$Advanced$symbol(
								A2(
									$elm$parser$Parser$Advanced$Token,
									'*',
									$author$project$MDInline$Expecting('Expecting \'*\' to begin italic text')))),
						$elm$parser$Parser$Advanced$chompWhile(
							function (c) {
								return !_Utils_eq(
									c,
									_Utils_chr('*'));
							})),
					$elm$parser$Parser$Advanced$symbol(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'*',
							$author$project$MDInline$Expecting('Expecting \'*\' to end italic text')))),
				$elm$parser$Parser$Advanced$spaces))));
var $author$project$MDInline$BracketedText = function (a) {
	return {$: 'BracketedText', a: a};
};
var $author$project$MDInline$Link = F2(
	function (a, b) {
		return {$: 'Link', a: a, b: b};
	});
var $author$project$MDInline$linkOrBracket = function (ps) {
	var _v0 = ps.text;
	if (_v0 === ' ') {
		return $author$project$MDInline$BracketedText(ps.prefix);
	} else {
		return A2($author$project$MDInline$Link, ps.text, ps.prefix);
	}
};
var $author$project$MDInline$linkUrl = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
		$elm$parser$Parser$Advanced$symbol(
			A2(
				$elm$parser$Parser$Advanced$Token,
				'(',
				$author$project$MDInline$Expecting('expecting \'(\' to begin link url')))),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$author$project$MDInline$parseWhile(
				function (c) {
					return !_Utils_eq(
						c,
						_Utils_chr(')'));
				}),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					')',
					$author$project$MDInline$Expecting('expecting \')\' to end link url')))),
		$elm$parser$Parser$Advanced$spaces));
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 'Append', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
		});
};
var $author$project$MDInline$terminateBracket = A2(
	$elm$parser$Parser$Advanced$map,
	function (_v0) {
		return ' ';
	},
	$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0));
var $author$project$MDInline$link = A2(
	$elm$parser$Parser$Advanced$map,
	function (ps) {
		return $author$project$MDInline$linkOrBracket(ps);
	},
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($author$project$MDInline$PrefixedString),
				$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						'[',
						$author$project$MDInline$Expecting('expecting \'[\' to begin label')))),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$author$project$MDInline$parseWhile(
					function (c) {
						return !_Utils_eq(
							c,
							_Utils_chr(']'));
					}),
				$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						']',
						$author$project$MDInline$Expecting('expecting \']\' to end first part of label'))))),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[$author$project$MDInline$linkUrl, $author$project$MDInline$terminateBracket])),
			$elm$parser$Parser$Advanced$spaces)));
var $author$project$MDInline$isSpecialCharacter = function (c) {
	switch (c.valueOf()) {
		case '`':
			return true;
		case '[':
			return true;
		case '*':
			return true;
		case '\n':
			return true;
		default:
			return false;
	}
};
var $author$project$MDInline$OrdinaryText = function (a) {
	return {$: 'OrdinaryText', a: a};
};
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.offset, s.src);
				return _Utils_eq(newOffset, -1) ? A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: 1, context: s.context, indent: s.indent, offset: s.offset + 1, row: s.row + 1, src: s.src}) : A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: s.col + 1, context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src}));
			});
	});
var $author$project$MDInline$ordinaryTextParser = function (validStart) {
	var isRegular = function (c) {
		return (!_Utils_eq(
			c,
			_Utils_chr(']'))) && validStart(c);
	};
	return A2(
		$elm$parser$Parser$Advanced$mapChompedString,
		F2(
			function (s, _v0) {
				return $author$project$MDInline$OrdinaryText(s);
			}),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$chompIf,
				validStart,
				$author$project$MDInline$Expecting('expecting regular character to begin ordinary text line')),
			$elm$parser$Parser$Advanced$chompWhile(isRegular)));
};
var $author$project$MDInline$ordinaryTextExtended = function () {
	var validStart = function (c) {
		return !(_Utils_eq(
			c,
			_Utils_chr('~')) || $author$project$MDInline$isSpecialCharacter(c));
	};
	return $author$project$MDInline$ordinaryTextParser(validStart);
}();
var $author$project$MDInline$StrikeThroughText = function (a) {
	return {$: 'StrikeThroughText', a: a};
};
var $author$project$MDInline$strikeThroughText = A2(
	$elm$parser$Parser$Advanced$map,
	$author$project$MDInline$StrikeThroughText,
	A2(
		$elm$parser$Parser$Advanced$map,
		A2($elm$core$String$replace, '~~', ''),
		A2(
			$elm$parser$Parser$Advanced$map,
			$elm$core$String$dropLeft(2),
			$elm$parser$Parser$Advanced$getChompedString(
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0),
								$elm$parser$Parser$Advanced$symbol(
									A2(
										$elm$parser$Parser$Advanced$Token,
										'~~',
										$author$project$MDInline$Expecting('expecting \'~~\' to begin strikethrough')))),
							$elm$parser$Parser$Advanced$chompWhile(
								function (c) {
									return !_Utils_eq(
										c,
										_Utils_chr('~'));
								})),
						$elm$parser$Parser$Advanced$symbol(
							A2(
								$elm$parser$Parser$Advanced$Token,
								'~~',
								$author$project$MDInline$Expecting('expecting \'~~\' to end strikethrough')))),
					$elm$parser$Parser$Advanced$spaces)))));
var $author$project$MDInline$inlineExtended = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[$author$project$MDInline$code, $author$project$MDInline$image, $author$project$MDInline$link, $author$project$MDInline$boldText, $author$project$MDInline$italicText, $author$project$MDInline$strikeThroughText, $author$project$MDInline$ordinaryTextExtended]));
var $author$project$MDInline$InlineMath = function (a) {
	return {$: 'InlineMath', a: a};
};
var $author$project$MDInline$inlineMath = A2(
	$elm$parser$Parser$Advanced$map,
	$author$project$MDInline$InlineMath,
	A2(
		$elm$parser$Parser$Advanced$map,
		$elm$core$String$dropRight(1),
		A2(
			$elm$parser$Parser$Advanced$map,
			$elm$core$String$dropLeft(1),
			A2(
				$elm$parser$Parser$Advanced$map,
				$elm$core$String$trim,
				$elm$parser$Parser$Advanced$getChompedString(
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0),
									$elm$parser$Parser$Advanced$symbol(
										A2(
											$elm$parser$Parser$Advanced$Token,
											'$',
											$author$project$MDInline$Expecting('Expecting \'$\' to begin inline math')))),
								$elm$parser$Parser$Advanced$chompWhile(
									function (c) {
										return !_Utils_eq(
											c,
											_Utils_chr('$'));
									})),
							$elm$parser$Parser$Advanced$symbol(
								A2(
									$elm$parser$Parser$Advanced$Token,
									'$',
									$author$project$MDInline$Expecting('Expecting \'$\' to end inline math')))),
						$elm$parser$Parser$Advanced$chompWhile(
							function (c) {
								return _Utils_eq(
									c,
									_Utils_chr(' '));
							})))))));
var $author$project$MDInline$ordinaryTextExtendedMath = function () {
	var validStart = function (c) {
		return !(_Utils_eq(
			c,
			_Utils_chr('~')) || (_Utils_eq(
			c,
			_Utils_chr('$')) || $author$project$MDInline$isSpecialCharacter(c)));
	};
	return $author$project$MDInline$ordinaryTextParser(validStart);
}();
var $author$project$MDInline$inlineExtendedMath = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[$author$project$MDInline$code, $author$project$MDInline$image, $author$project$MDInline$link, $author$project$MDInline$boldText, $author$project$MDInline$italicText, $author$project$MDInline$strikeThroughText, $author$project$MDInline$inlineMath, $author$project$MDInline$ordinaryTextExtendedMath]));
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $author$project$MDInline$ordinaryTextStandard = function () {
	var validStart = A2($elm$core$Basics$composeL, $elm$core$Basics$not, $author$project$MDInline$isSpecialCharacter);
	return $author$project$MDInline$ordinaryTextParser(validStart);
}();
var $author$project$MDInline$inlineStandard = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[$author$project$MDInline$code, $author$project$MDInline$image, $author$project$MDInline$link, $author$project$MDInline$boldText, $author$project$MDInline$italicText, $author$project$MDInline$ordinaryTextStandard]));
var $author$project$MDInline$inline = function (option) {
	switch (option.$) {
		case 'Standard':
			return $author$project$MDInline$inlineStandard;
		case 'Extended':
			return $author$project$MDInline$inlineExtended;
		default:
			return $author$project$MDInline$inlineExtendedMath;
	}
};
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0.a;
			var _v1 = parse(s0);
			if (_v1.$ === 'Good') {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (step.$ === 'Loop') {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
			});
	});
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $author$project$MDInline$manyHelp = F2(
	function (p, vs) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						function (v) {
							return $elm$parser$Parser$Advanced$Loop(
								A2($elm$core$List$cons, v, vs));
						}),
					p),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return $elm$parser$Parser$Advanced$Done(
							$elm$core$List$reverse(vs));
					},
					$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0))
				]));
	});
var $author$project$MDInline$many = function (p) {
	return A2(
		$elm$parser$Parser$Advanced$loop,
		_List_Nil,
		$author$project$MDInline$manyHelp(p));
};
var $author$project$MDInline$inlineList = function (option) {
	return $author$project$MDInline$many(
		$author$project$MDInline$inline(option));
};
var $author$project$MDInline$Line = function (a) {
	return {$: 'Line', a: a};
};
var $author$project$MDInline$displayDeadEnd = function (deadend) {
	var _v0 = deadend.problem;
	var error = _v0.a;
	return error;
};
var $author$project$MDInline$decodeInlineError = function (errorList) {
	var errorMessage = A2(
		$elm$core$String$join,
		';;\n\n',
		A2($elm$core$List$map, $author$project$MDInline$displayDeadEnd, errorList));
	return $author$project$MDInline$OrdinaryText(errorMessage);
};
var $author$project$MDInline$resolveInlineResult = function (result) {
	if (result.$ === 'Ok') {
		var res_ = result.a;
		return $author$project$MDInline$Line(res_);
	} else {
		var list = result.a;
		return $author$project$MDInline$decodeInlineError(list);
	}
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 'Empty':
					return list;
				case 'AddRight':
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0.a;
		var _v1 = parse(
			{col: 1, context: _List_Nil, indent: 1, offset: 0, row: 1, src: src});
		if (_v1.$ === 'Good') {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $author$project$MDInline$parseLine = F2(
	function (option, str) {
		return $author$project$MDInline$resolveInlineResult(
			A2(
				$elm$parser$Parser$Advanced$run,
				$author$project$MDInline$inlineList(option),
				str));
	});
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $author$project$MDInline$endsWithPunctuation = function (str) {
	return A2($elm$core$String$right, 1, str) === '.';
};
var $author$project$MDInline$wrapper = F2(
	function (str, acc) {
		return (acc.currentString === '') ? {currentString: str, lst: _List_Nil} : ($author$project$MDInline$endsWithPunctuation(acc.currentString) ? {
			currentString: str,
			lst: A2($elm$core$List$cons, acc.currentString, acc.lst)
		} : _Utils_update(
			acc,
			{currentString: acc.currentString + (' ' + str)}));
	});
var $author$project$MDInline$wrap = function (strList) {
	return $elm$core$List$reverse(
		function (acc) {
			return A2($elm$core$List$cons, acc.currentString, acc.lst);
		}(
			A3(
				$elm$core$List$foldl,
				$author$project$MDInline$wrapper,
				{currentString: '', lst: _List_Nil},
				strList)));
};
var $author$project$MDInline$parse = F2(
	function (option, str) {
		return $author$project$MDInline$Paragraph(
			A2(
				$elm$core$List$map,
				$author$project$MDInline$parseLine(option),
				$author$project$MDInline$wrap(
					A2($elm$core$String$split, '\n', str))));
	});
var $author$project$Markdown$Parse$extendedMDParser = F2(
	function (option_, _v0) {
		var id = _v0.a;
		var bt = _v0.b;
		var level_ = _v0.c;
		var content_ = _v0.d;
		if (bt.$ === 'MarkdownBlock') {
			var mt = bt.a;
			if (mt.$ === 'Poetry') {
				return A4(
					$author$project$Markdown$Parse$MDBlockWithId,
					id,
					$author$project$BlockType$MarkdownBlock(mt),
					level_,
					$author$project$Markdown$Parse$M(
						$author$project$MDInline$Stanza(content_)));
			} else {
				return A4(
					$author$project$Markdown$Parse$MDBlockWithId,
					id,
					$author$project$BlockType$MarkdownBlock(mt),
					level_,
					$author$project$Markdown$Parse$M(
						A2($author$project$MDInline$parse, option_, content_)));
			}
		} else {
			switch (bt.a.$) {
				case 'DisplayCode':
					var lang = bt.a.a;
					return A4(
						$author$project$Markdown$Parse$MDBlockWithId,
						id,
						$author$project$BlockType$BalancedBlock(
							$author$project$BlockType$DisplayCode(lang)),
						level_,
						$author$project$Markdown$Parse$T(content_));
				case 'Verbatim':
					var _v3 = bt.a;
					return A4(
						$author$project$Markdown$Parse$MDBlockWithId,
						id,
						$author$project$BlockType$BalancedBlock($author$project$BlockType$Verbatim),
						level_,
						$author$project$Markdown$Parse$T(content_));
				default:
					return A4(
						$author$project$Markdown$Parse$MDBlockWithId,
						id,
						$author$project$BlockType$MarkdownBlock($author$project$BlockType$Plain),
						level_,
						$author$project$Markdown$Parse$M(
							A2($author$project$MDInline$parse, option_, content_)));
			}
		}
	});
var $author$project$BlockType$DisplayMath = {$: 'DisplayMath'};
var $author$project$Markdown$Parse$extendedMathMDParser = F2(
	function (option_, _v0) {
		var id = _v0.a;
		var bt = _v0.b;
		var level_ = _v0.c;
		var content_ = _v0.d;
		if (bt.$ === 'MarkdownBlock') {
			var mt = bt.a;
			if (mt.$ === 'Poetry') {
				return A4(
					$author$project$Markdown$Parse$MDBlockWithId,
					id,
					$author$project$BlockType$MarkdownBlock(mt),
					level_,
					$author$project$Markdown$Parse$M(
						$author$project$MDInline$Stanza(content_)));
			} else {
				return A4(
					$author$project$Markdown$Parse$MDBlockWithId,
					id,
					$author$project$BlockType$MarkdownBlock(mt),
					level_,
					$author$project$Markdown$Parse$M(
						A2($author$project$MDInline$parse, option_, content_)));
			}
		} else {
			switch (bt.a.$) {
				case 'DisplayCode':
					var lang = bt.a.a;
					return A4(
						$author$project$Markdown$Parse$MDBlockWithId,
						id,
						$author$project$BlockType$BalancedBlock(
							$author$project$BlockType$DisplayCode(lang)),
						level_,
						$author$project$Markdown$Parse$T(content_));
				case 'Verbatim':
					var _v3 = bt.a;
					return A4(
						$author$project$Markdown$Parse$MDBlockWithId,
						id,
						$author$project$BlockType$BalancedBlock($author$project$BlockType$Verbatim),
						level_,
						$author$project$Markdown$Parse$T(content_));
				default:
					var _v4 = bt.a;
					return A4(
						$author$project$Markdown$Parse$MDBlockWithId,
						id,
						$author$project$BlockType$BalancedBlock($author$project$BlockType$DisplayMath),
						level_,
						$author$project$Markdown$Parse$T(content_));
			}
		}
	});
var $author$project$Markdown$Parse$standardMDParser = F2(
	function (option_, _v0) {
		var id = _v0.a;
		var bt = _v0.b;
		var level_ = _v0.c;
		var content_ = _v0.d;
		if (bt.$ === 'MarkdownBlock') {
			var mt = bt.a;
			return A4(
				$author$project$Markdown$Parse$MDBlockWithId,
				id,
				$author$project$BlockType$MarkdownBlock(mt),
				level_,
				$author$project$Markdown$Parse$M(
					A2($author$project$MDInline$parse, option_, content_)));
		} else {
			if (bt.a.$ === 'DisplayCode') {
				var lang = bt.a.a;
				return A4(
					$author$project$Markdown$Parse$MDBlockWithId,
					id,
					$author$project$BlockType$BalancedBlock(
						$author$project$BlockType$DisplayCode(lang)),
					level_,
					$author$project$Markdown$Parse$T(content_));
			} else {
				return A4(
					$author$project$Markdown$Parse$MDBlockWithId,
					id,
					$author$project$BlockType$MarkdownBlock($author$project$BlockType$Plain),
					level_,
					$author$project$Markdown$Parse$M(
						A2($author$project$MDInline$parse, option_, content_)));
			}
		}
	});
var $author$project$Markdown$Parse$selectParser = F2(
	function (option, block) {
		var id = block.a;
		var bt = block.b;
		var level_ = block.c;
		var content_ = block.d;
		switch (option.$) {
			case 'Standard':
				return A2($author$project$Markdown$Parse$standardMDParser, option, block);
			case 'Extended':
				return A2($author$project$Markdown$Parse$extendedMDParser, option, block);
			default:
				return A2($author$project$Markdown$Parse$extendedMathMDParser, option, block);
		}
	});
var $author$project$Markdown$Parse$setBlockIndex = F3(
	function (version, idx, _v0) {
		var id = _v0.a;
		var bt = _v0.b;
		var lev = _v0.c;
		var blockContent = _v0.d;
		return A4(
			$author$project$Markdown$Parse$MDBlockWithId,
			_Utils_Tuple2(idx, version),
			bt,
			lev,
			blockContent);
	});
var $author$project$Markdown$Parse$blockLevel = function (_v0) {
	var k = _v0.c;
	return k;
};
var $author$project$Markdown$Parse$Block = F4(
	function (a, b, c, d) {
		return {$: 'Block', a: a, b: b, c: c, d: d};
	});
var $author$project$Markdown$Parse$changeLevel = F2(
	function (k, _v0) {
		var id_ = _v0.a;
		var bt_ = _v0.b;
		var level_ = _v0.c;
		var content_ = _v0.d;
		return A4($author$project$Markdown$Parse$Block, id_, bt_, level_ + k, content_);
	});
var $author$project$Markdown$Parse$blockListOfFSM = function (_v0) {
	var blockList_ = _v0.b;
	return blockList_;
};
var $author$project$Markdown$Parse$stateOfFSM = function (_v0) {
	var state_ = _v0.a;
	return state_;
};
var $author$project$Markdown$Parse$flush = function (fsm) {
	var _v0 = $author$project$Markdown$Parse$stateOfFSM(fsm);
	switch (_v0.$) {
		case 'Start':
			return $elm$core$List$reverse(
				$author$project$Markdown$Parse$blockListOfFSM(fsm));
		case 'Error':
			return $elm$core$List$reverse(
				$author$project$Markdown$Parse$blockListOfFSM(fsm));
		default:
			var b = _v0.a;
			return $elm$core$List$reverse(
				A2(
					$elm$core$List$cons,
					b,
					$author$project$Markdown$Parse$blockListOfFSM(fsm)));
	}
};
var $zwilias$elm_rosetree$Tree$Zipper$Zipper = function (a) {
	return {$: 'Zipper', a: a};
};
var $zwilias$elm_rosetree$Tree$Zipper$fromTree = function (t) {
	return $zwilias$elm_rosetree$Tree$Zipper$Zipper(
		{after: _List_Nil, before: _List_Nil, crumbs: _List_Nil, focus: t});
};
var $zwilias$elm_rosetree$Tree$singleton = function (v) {
	return A2($zwilias$elm_rosetree$Tree$Tree, v, _List_Nil);
};
var $zwilias$elm_rosetree$Tree$appendChild = F2(
	function (c, _v0) {
		var v = _v0.a;
		var cs = _v0.b;
		return A2(
			$zwilias$elm_rosetree$Tree$Tree,
			v,
			_Utils_ap(
				cs,
				_List_fromArray(
					[c])));
	});
var $zwilias$elm_rosetree$Tree$Zipper$replaceTree = F2(
	function (t, _v0) {
		var zipper = _v0.a;
		return $zwilias$elm_rosetree$Tree$Zipper$Zipper(
			_Utils_update(
				zipper,
				{focus: t}));
	});
var $zwilias$elm_rosetree$Tree$Zipper$tree = function (_v0) {
	var focus = _v0.a.focus;
	return focus;
};
var $jxxcarlson$htree$HTree$appendAtFocus = F2(
	function (s, z) {
		var t = $zwilias$elm_rosetree$Tree$Zipper$tree(z);
		var newTree = A2(
			$zwilias$elm_rosetree$Tree$appendChild,
			$zwilias$elm_rosetree$Tree$singleton(s),
			t);
		return A2($zwilias$elm_rosetree$Tree$Zipper$replaceTree, newTree, z);
	});
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $jxxcarlson$htree$HTree$iterate = F3(
	function (remaining, f, accumulator) {
		iterate:
		while (true) {
			if (remaining > 0) {
				var $temp$remaining = remaining - 1,
					$temp$f = f,
					$temp$accumulator = f(accumulator);
				remaining = $temp$remaining;
				f = $temp$f;
				accumulator = $temp$accumulator;
				continue iterate;
			} else {
				return accumulator;
			}
		}
	});
var $zwilias$elm_rosetree$Tree$tree = $zwilias$elm_rosetree$Tree$Tree;
var $zwilias$elm_rosetree$Tree$Zipper$reconstruct = F4(
	function (focus, before, after, l) {
		return A2(
			$zwilias$elm_rosetree$Tree$tree,
			l,
			_Utils_ap(
				$elm$core$List$reverse(before),
				_Utils_ap(
					_List_fromArray(
						[focus]),
					after)));
	});
var $zwilias$elm_rosetree$Tree$Zipper$parent = function (_v0) {
	var zipper = _v0.a;
	var _v1 = zipper.crumbs;
	if (!_v1.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var crumb = _v1.a;
		var rest = _v1.b;
		return $elm$core$Maybe$Just(
			$zwilias$elm_rosetree$Tree$Zipper$Zipper(
				{
					after: crumb.after,
					before: crumb.before,
					crumbs: rest,
					focus: A4($zwilias$elm_rosetree$Tree$Zipper$reconstruct, zipper.focus, zipper.before, zipper.after, crumb.label)
				}));
	}
};
var $jxxcarlson$htree$HTree$manyParent = F2(
	function (k, z) {
		var zz = $zwilias$elm_rosetree$Tree$Zipper$parent(z);
		return A3(
			$jxxcarlson$htree$HTree$iterate,
			k - 1,
			function (zi) {
				return A2($elm$core$Maybe$andThen, $zwilias$elm_rosetree$Tree$Zipper$parent, zi);
			},
			zz);
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $jxxcarlson$htree$HTree$addAtNthParent = F3(
	function (k, s, z) {
		return A2(
			$elm$core$Maybe$withDefault,
			z,
			A2(
				$elm$core$Maybe$map,
				$jxxcarlson$htree$HTree$appendAtFocus(s),
				A2($jxxcarlson$htree$HTree$manyParent, k, z)));
	});
var $zwilias$elm_rosetree$Tree$children = function (_v0) {
	var c = _v0.b;
	return c;
};
var $zwilias$elm_rosetree$Tree$label = function (_v0) {
	var v = _v0.a;
	return v;
};
var $zwilias$elm_rosetree$Tree$Zipper$lastChild = function (_v0) {
	var zipper = _v0.a;
	var _v1 = $elm$core$List$reverse(
		$zwilias$elm_rosetree$Tree$children(zipper.focus));
	if (!_v1.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var c = _v1.a;
		var rest = _v1.b;
		return $elm$core$Maybe$Just(
			$zwilias$elm_rosetree$Tree$Zipper$Zipper(
				{
					after: _List_Nil,
					before: rest,
					crumbs: A2(
						$elm$core$List$cons,
						{
							after: zipper.after,
							before: zipper.before,
							label: $zwilias$elm_rosetree$Tree$label(zipper.focus)
						},
						zipper.crumbs),
					focus: c
				}));
	}
};
var $jxxcarlson$htree$HTree$addChildAtFocus = F2(
	function (s, z) {
		return A2(
			$elm$core$Maybe$withDefault,
			z,
			A2(
				$elm$core$Maybe$map,
				$jxxcarlson$htree$HTree$appendAtFocus(s),
				$zwilias$elm_rosetree$Tree$Zipper$lastChild(z)));
	});
var $jxxcarlson$htree$HTree$levelOfLastChild = F2(
	function (level, z) {
		return A2(
			$elm$core$Maybe$map,
			level,
			A2(
				$elm$core$Maybe$map,
				$zwilias$elm_rosetree$Tree$label,
				A2(
					$elm$core$Maybe$map,
					$zwilias$elm_rosetree$Tree$Zipper$tree,
					$zwilias$elm_rosetree$Tree$Zipper$lastChild(z))));
	});
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $jxxcarlson$htree$HTree$levelDifference = F3(
	function (level, s, z) {
		return A3(
			$elm$core$Maybe$map2,
			$elm$core$Basics$sub,
			$elm$core$Maybe$Just(
				level(s)),
			A2($jxxcarlson$htree$HTree$levelOfLastChild, level, z));
	});
var $jxxcarlson$htree$HTree$step = F3(
	function (level, s, z) {
		var ld = A3($jxxcarlson$htree$HTree$levelDifference, level, s, z);
		if (ld.$ === 'Nothing') {
			return A2($jxxcarlson$htree$HTree$appendAtFocus, s, z);
		} else {
			switch (ld.a) {
				case 0:
					return A2($jxxcarlson$htree$HTree$appendAtFocus, s, z);
				case 1:
					return A2($jxxcarlson$htree$HTree$addChildAtFocus, s, z);
				default:
					var levelsBack = -A2($elm$core$Maybe$withDefault, 0, ld);
					return A3($jxxcarlson$htree$HTree$addAtNthParent, levelsBack, s, z);
			}
		}
	});
var $zwilias$elm_rosetree$Tree$Zipper$previousSibling = function (_v0) {
	var zipper = _v0.a;
	var _v1 = zipper.before;
	if (!_v1.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var previous = _v1.a;
		var rest = _v1.b;
		return $elm$core$Maybe$Just(
			$zwilias$elm_rosetree$Tree$Zipper$Zipper(
				{
					after: A2($elm$core$List$cons, zipper.focus, zipper.after),
					before: rest,
					crumbs: zipper.crumbs,
					focus: previous
				}));
	}
};
var $zwilias$elm_rosetree$Tree$Zipper$firstSibling = function (zipper) {
	firstSibling:
	while (true) {
		var _v0 = $zwilias$elm_rosetree$Tree$Zipper$previousSibling(zipper);
		if (_v0.$ === 'Nothing') {
			return zipper;
		} else {
			var z = _v0.a;
			var $temp$zipper = z;
			zipper = $temp$zipper;
			continue firstSibling;
		}
	}
};
var $zwilias$elm_rosetree$Tree$Zipper$root = function (zipper) {
	root:
	while (true) {
		var _v0 = $zwilias$elm_rosetree$Tree$Zipper$parent(zipper);
		if (_v0.$ === 'Nothing') {
			return $zwilias$elm_rosetree$Tree$Zipper$firstSibling(zipper);
		} else {
			var z = _v0.a;
			var $temp$zipper = z;
			zipper = $temp$zipper;
			continue root;
		}
	}
};
var $zwilias$elm_rosetree$Tree$Zipper$toTree = A2($elm$core$Basics$composeL, $zwilias$elm_rosetree$Tree$Zipper$tree, $zwilias$elm_rosetree$Tree$Zipper$root);
var $jxxcarlson$htree$HTree$fromList = F3(
	function (rootLabel, level, lst) {
		return $zwilias$elm_rosetree$Tree$Zipper$toTree(
			A3(
				$elm$core$List$foldl,
				F2(
					function (s, z) {
						return A3($jxxcarlson$htree$HTree$step, level, s, z);
					}),
				$zwilias$elm_rosetree$Tree$Zipper$fromTree(
					$zwilias$elm_rosetree$Tree$singleton(rootLabel)),
				lst));
	});
var $author$project$BlockType$Root = {$: 'Root'};
var $author$project$Markdown$Parse$rootBlock = A4(
	$author$project$Markdown$Parse$Block,
	_Utils_Tuple2(0, 0),
	$author$project$BlockType$MarkdownBlock($author$project$BlockType$Root),
	0,
	'DOCUMENT');
var $author$project$Markdown$Parse$FSM = F3(
	function (a, b, c) {
		return {$: 'FSM', a: a, b: b, c: c};
	});
var $author$project$Markdown$Parse$Start = {$: 'Start'};
var $author$project$Markdown$Parse$emptyRegister = {
	blockStack: _List_Nil,
	blockTypeStack: _List_Nil,
	id: _Utils_Tuple2(0, 0),
	itemIndex1: 0,
	itemIndex2: 0,
	itemIndex3: 0,
	itemIndex4: 0,
	level: 0
};
var $author$project$Markdown$Parse$initialFSM = A3($author$project$Markdown$Parse$FSM, $author$project$Markdown$Parse$Start, _List_Nil, $author$project$Markdown$Parse$emptyRegister);
var $author$project$BlockType$Table = {$: 'Table'};
var $author$project$BlockType$TableRow = {$: 'TableRow'};
var $author$project$Markdown$Parse$clearBlockStack = function (register) {
	return _Utils_update(
		register,
		{blockStack: _List_Nil});
};
var $author$project$Markdown$Parse$editBlock = function (block) {
	var id = block.a;
	var bt = block.b;
	var lev = block.c;
	var content = block.d;
	return (_Utils_eq(
		bt,
		$author$project$BlockType$MarkdownBlock($author$project$BlockType$TableRow)) && (content === 'row')) ? A4($author$project$Markdown$Parse$Block, id, bt, lev, '') : block;
};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Markdown$Parse$topOfBlockStack = function (register) {
	return $elm$core$List$head(register.blockStack);
};
var $author$project$Markdown$Parse$typeOfBlock = function (_v0) {
	var bt = _v0.b;
	return bt;
};
var $author$project$Markdown$Parse$typeOfState = function (s) {
	switch (s.$) {
		case 'Start':
			return $elm$core$Maybe$Nothing;
		case 'InBlock':
			var b = s.a;
			return $elm$core$Maybe$Just(
				$author$project$Markdown$Parse$typeOfBlock(b));
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Markdown$Parse$handleRegister = function (fsm) {
	var state = fsm.a;
	var blocks = fsm.b;
	var register = fsm.c;
	var _v0 = $author$project$Markdown$Parse$topOfBlockStack(register);
	if (_v0.$ === 'Nothing') {
		return fsm;
	} else {
		var block = _v0.a;
		var _v1 = $author$project$Markdown$Parse$typeOfState(state);
		if (((_v1.$ === 'Just') && (_v1.a.$ === 'MarkdownBlock')) && (_v1.a.a.$ === 'TableRow')) {
			var _v2 = _v1.a.a;
			return fsm;
		} else {
			var tableBlock = A4(
				$author$project$Markdown$Parse$Block,
				_Utils_Tuple2(-1, -1),
				$author$project$BlockType$MarkdownBlock($author$project$BlockType$Table),
				0,
				'tableRoot');
			var rowBlock = A4(
				$author$project$Markdown$Parse$Block,
				_Utils_Tuple2(-1, -1),
				$author$project$BlockType$MarkdownBlock($author$project$BlockType$TableRow),
				1,
				'row');
			var tableData = A2(
				$elm$core$List$map,
				$author$project$Markdown$Parse$editBlock,
				function (x) {
					return _Utils_ap(
						x,
						_List_fromArray(
							[rowBlock, tableBlock]));
				}(
					$elm$core$List$reverse(register.blockStack)));
			var newBlocks = A2(
				$elm$core$List$filter,
				function (_v3) {
					var content = _v3.d;
					return content !== 'deleteMe';
				},
				blocks);
			return A3(
				$author$project$Markdown$Parse$FSM,
				$author$project$Markdown$Parse$Start,
				_Utils_ap(tableData, newBlocks),
				$author$project$Markdown$Parse$clearBlockStack(register));
		}
	}
};
var $author$project$Markdown$Parse$Error = {$: 'Error'};
var $author$project$Markdown$Parse$InBlock = function (a) {
	return {$: 'InBlock', a: a};
};
var $author$project$BlockType$Blank = {$: 'Blank'};
var $author$project$BlockType$numberOfLeadingBlanks = A2(
	$elm$parser$Parser$Advanced$map,
	$elm$core$String$length,
	$elm$parser$Parser$Advanced$getChompedString(
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0),
			$elm$parser$Parser$Advanced$chompWhile(
				function (c) {
					return _Utils_eq(
						c,
						_Utils_chr(' '));
				}))));
var $elm$core$Result$toMaybe = function (result) {
	if (result.$ === 'Ok') {
		var v = result.a;
		return $elm$core$Maybe$Just(v);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$BlockType$getNumberOfLeadingBlanks = function (str) {
	return A2(
		$elm$core$Maybe$withDefault,
		0,
		$elm$core$Result$toMaybe(
			A2($elm$parser$Parser$Advanced$run, $author$project$BlockType$numberOfLeadingBlanks, str)));
};
var $author$project$BlockType$dropLeadingBlanks = function (str) {
	return A2(
		$elm$core$String$dropLeft,
		$author$project$BlockType$getNumberOfLeadingBlanks(str),
		str);
};
var $author$project$BlockType$levelIndentation = 4;
var $author$project$BlockType$level = function (ln) {
	return A2(
		$elm$core$Maybe$withDefault,
		0,
		A2(
			$elm$core$Maybe$map,
			function (l) {
				return (l / $author$project$BlockType$levelIndentation) | 0;
			},
			$elm$core$Result$toMaybe(
				A2($elm$parser$Parser$Advanced$run, $author$project$BlockType$numberOfLeadingBlanks, ln))));
};
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0.a;
	return $elm$parser$Parser$Advanced$Parser(
		function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 'Bad') {
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, false, x);
			} else {
				var a = _v1.b;
				var s1 = _v1.c;
				return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
			}
		});
};
var $author$project$BlockType$Expecting = function (a) {
	return {$: 'Expecting', a: a};
};
var $author$project$BlockType$CssLang = {$: 'CssLang'};
var $author$project$BlockType$cssLang = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$succeed($author$project$BlockType$CssLang),
	$elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			'css',
			$author$project$BlockType$Expecting('Expecting string for language'))));
var $author$project$BlockType$ElmLang = {$: 'ElmLang'};
var $author$project$BlockType$elmLang = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$succeed($author$project$BlockType$ElmLang),
	$elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			'elm',
			$author$project$BlockType$Expecting('Expecting string for language'))));
var $author$project$BlockType$JavascriptLang = {$: 'JavascriptLang'};
var $author$project$BlockType$javascriptLang = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$succeed($author$project$BlockType$JavascriptLang),
	$elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			'javascript',
			$author$project$BlockType$Expecting('Expecting string for language'))));
var $author$project$BlockType$JsonLang = {$: 'JsonLang'};
var $author$project$BlockType$jsonLang = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$succeed($author$project$BlockType$JsonLang),
	$elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			'json',
			$author$project$BlockType$Expecting('Expecting string for language'))));
var $author$project$BlockType$PythonLang = {$: 'PythonLang'};
var $author$project$BlockType$pythonLang = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$succeed($author$project$BlockType$PythonLang),
	$elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			'python',
			$author$project$BlockType$Expecting('Expecting string for language'))));
var $author$project$BlockType$SqlLang = {$: 'SqlLang'};
var $author$project$BlockType$sqlLang = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$succeed($author$project$BlockType$SqlLang),
	$elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			'sql',
			$author$project$BlockType$Expecting('Expecting string for language'))));
var $author$project$BlockType$XmlLang = {$: 'XmlLang'};
var $author$project$BlockType$xmlLang = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$succeed($author$project$BlockType$XmlLang),
	$elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			'xml',
			$author$project$BlockType$Expecting('Expecting string for language'))));
var $author$project$BlockType$codeBlock = A2(
	$elm$parser$Parser$Advanced$map,
	function (lang) {
		return $author$project$BlockType$BalancedBlock(
			$author$project$BlockType$DisplayCode(lang));
	},
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'```',
					$author$project$BlockType$Expecting('Expecting three ticks to begin code block')))),
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[$author$project$BlockType$cssLang, $author$project$BlockType$elmLang, $author$project$BlockType$javascriptLang, $author$project$BlockType$jsonLang, $author$project$BlockType$pythonLang, $author$project$BlockType$sqlLang, $author$project$BlockType$xmlLang]))));
var $author$project$BlockType$Heading = function (a) {
	return {$: 'Heading', a: a};
};
var $author$project$BlockType$parseWhile = function (accepting) {
	return $elm$parser$Parser$Advanced$getChompedString(
		$elm$parser$Parser$Advanced$chompWhile(accepting));
};
var $author$project$BlockType$headingBlock = A2(
	$elm$parser$Parser$Advanced$map,
	function (s) {
		return $author$project$BlockType$MarkdownBlock(
			$author$project$BlockType$Heading(
				$elm$core$String$length(s) + 1));
	},
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$Advanced$spaces),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'#',
					$author$project$BlockType$Expecting('Expecting \'#\' to begin heading block')))),
		$author$project$BlockType$parseWhile(
			function (c) {
				return _Utils_eq(
					c,
					_Utils_chr('#'));
			})));
var $author$project$BlockType$HorizontalRule = {$: 'HorizontalRule'};
var $author$project$BlockType$horizontalRuleBlock = A2(
	$elm$parser$Parser$Advanced$map,
	function (x) {
		return $author$project$BlockType$MarkdownBlock($author$project$BlockType$HorizontalRule);
	},
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0),
			$elm$parser$Parser$Advanced$spaces),
		$elm$parser$Parser$Advanced$symbol(
			A2(
				$elm$parser$Parser$Advanced$Token,
				'___',
				$author$project$BlockType$Expecting('Expecting at least three underscores to begin thematic break')))));
var $author$project$BlockType$Image = {$: 'Image'};
var $author$project$BlockType$imageBlock = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$succeed(
		$author$project$BlockType$MarkdownBlock($author$project$BlockType$Image)),
	$elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			'![',
			$author$project$BlockType$Expecting('Expecting \'![\' to begin image block'))));
var $author$project$BlockType$mathBlock = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$succeed(
		$author$project$BlockType$BalancedBlock($author$project$BlockType$DisplayMath)),
	$elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			'$$',
			$author$project$BlockType$Expecting('Expecting four ticks to begin verbatim block'))));
var $author$project$BlockType$OListItem = function (a) {
	return {$: 'OListItem', a: a};
};
var $author$project$BlockType$orderedListItemBlock = A2(
	$elm$parser$Parser$Advanced$map,
	function (_v0) {
		return $author$project$BlockType$MarkdownBlock(
			$author$project$BlockType$OListItem(0));
	},
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0),
					$author$project$BlockType$parseWhile(
						function (c) {
							return _Utils_eq(
								c,
								_Utils_chr(' '));
						})),
				A2(
					$elm$parser$Parser$Advanced$chompIf,
					function (c) {
						return $elm$core$Char$isDigit(c);
					},
					$author$project$BlockType$Expecting('Expecting digit to begin ordered list item'))),
			$elm$parser$Parser$Advanced$chompWhile(
				function (c) {
					return $elm$core$Char$isDigit(c);
				})),
		$elm$parser$Parser$Advanced$symbol(
			A2(
				$elm$parser$Parser$Advanced$Token,
				'. ',
				$author$project$BlockType$Expecting('expecting period')))));
var $author$project$BlockType$Poetry = {$: 'Poetry'};
var $author$project$BlockType$poetryBlock = A2(
	$elm$parser$Parser$Advanced$map,
	function (_v0) {
		return $author$project$BlockType$MarkdownBlock($author$project$BlockType$Poetry);
	},
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0),
		$elm$parser$Parser$Advanced$symbol(
			A2(
				$elm$parser$Parser$Advanced$Token,
				'>> ',
				$author$project$BlockType$Expecting('expecting \'>> \' to begin poetry block')))));
var $author$project$BlockType$Quotation = {$: 'Quotation'};
var $author$project$BlockType$quotationBlock = A2(
	$elm$parser$Parser$Advanced$map,
	function (_v0) {
		return $author$project$BlockType$MarkdownBlock($author$project$BlockType$Quotation);
	},
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0),
		$elm$parser$Parser$Advanced$symbol(
			A2(
				$elm$parser$Parser$Advanced$Token,
				'> ',
				$author$project$BlockType$Expecting('expecting \'> \' to begin quotation')))));
var $author$project$BlockType$tableBlock = A2(
	$elm$parser$Parser$Advanced$map,
	function (_v0) {
		return $author$project$BlockType$MarkdownBlock($author$project$BlockType$TableRow);
	},
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0),
		$elm$parser$Parser$Advanced$symbol(
			A2(
				$elm$parser$Parser$Advanced$Token,
				'| ',
				$author$project$BlockType$Expecting('expecting \'| \' to begin poetry block')))));
var $author$project$BlockType$UListItem = {$: 'UListItem'};
var $author$project$BlockType$unorderedListItemBlock = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$succeed(
		$author$project$BlockType$MarkdownBlock($author$project$BlockType$UListItem)),
	$elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			'- ',
			$author$project$BlockType$Expecting('Expecting \'-\' to begin list item'))));
var $author$project$BlockType$verbatimBlock = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$succeed(
		$author$project$BlockType$BalancedBlock($author$project$BlockType$Verbatim)),
	$elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			'````',
			$author$project$BlockType$Expecting('Expecting four ticks to begin verbatim block'))));
var $author$project$BlockType$parseExtended = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$author$project$BlockType$imageBlock,
			$author$project$BlockType$mathBlock,
			$author$project$BlockType$unorderedListItemBlock,
			$author$project$BlockType$orderedListItemBlock,
			$author$project$BlockType$quotationBlock,
			$author$project$BlockType$poetryBlock,
			$elm$parser$Parser$Advanced$backtrackable($author$project$BlockType$verbatimBlock),
			$author$project$BlockType$codeBlock,
			$author$project$BlockType$tableBlock,
			$author$project$BlockType$headingBlock,
			$author$project$BlockType$horizontalRuleBlock
		]));
var $author$project$BlockType$parseStandard = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[$author$project$BlockType$tableBlock, $author$project$BlockType$imageBlock, $author$project$BlockType$unorderedListItemBlock, $author$project$BlockType$orderedListItemBlock, $author$project$BlockType$quotationBlock, $author$project$BlockType$codeBlock, $author$project$BlockType$headingBlock, $author$project$BlockType$horizontalRuleBlock]));
var $author$project$BlockType$parse = function (option) {
	if (option.$ === 'Standard') {
		return $author$project$BlockType$parseStandard;
	} else {
		return $author$project$BlockType$parseExtended;
	}
};
var $author$project$BlockType$get = F2(
	function (option, str) {
		if (str === '\n') {
			return _Utils_Tuple2(
				0,
				$elm$core$Maybe$Just(
					$author$project$BlockType$MarkdownBlock($author$project$BlockType$Blank)));
		} else {
			var _v0 = A2(
				$elm$parser$Parser$Advanced$run,
				$author$project$BlockType$parse(option),
				$author$project$BlockType$dropLeadingBlanks(str));
			if (_v0.$ === 'Ok') {
				var result = _v0.a;
				return _Utils_Tuple2(
					$author$project$BlockType$level(str),
					$elm$core$Maybe$Just(result));
			} else {
				return _Utils_Tuple2(
					$author$project$BlockType$level(str),
					$elm$core$Maybe$Just(
						$author$project$BlockType$MarkdownBlock($author$project$BlockType$Plain)));
			}
		}
	});
var $author$project$BlockType$TableCell = {$: 'TableCell'};
var $author$project$Markdown$Parse$parseTableRow = F2(
	function (level, line) {
		return A2(
			$elm$core$List$map,
			function (s) {
				return A4(
					$author$project$Markdown$Parse$Block,
					_Utils_Tuple2(-1, -1),
					$author$project$BlockType$MarkdownBlock($author$project$BlockType$TableCell),
					level,
					s);
			},
			A2(
				$elm$core$List$filter,
				function (s) {
					return s !== '';
				},
				A2(
					$elm$core$List$map,
					$elm$core$String$trim,
					A2($elm$core$String$split, '|', line))));
	});
var $author$project$Markdown$Parse$handleTableStart = F6(
	function (blockTypeOfLine, level, line, state, blocks, register) {
		switch (state.$) {
			case 'Start':
				return A3($author$project$Markdown$Parse$FSM, state, blocks, register);
			case 'Error':
				return A3($author$project$Markdown$Parse$FSM, state, blocks, register);
			default:
				var currentBlock = state.a;
				var tableBlock = A4(
					$author$project$Markdown$Parse$Block,
					_Utils_Tuple2(-1, -1),
					$author$project$BlockType$MarkdownBlock($author$project$BlockType$Table),
					level,
					'tableRoot');
				var rowBlock = A4(
					$author$project$Markdown$Parse$Block,
					_Utils_Tuple2(-1, -1),
					blockTypeOfLine,
					level + 1,
					'row');
				var childrenOfNewBlock = A2($author$project$Markdown$Parse$parseTableRow, level + 2, line);
				var newRow = _Utils_ap(
					childrenOfNewBlock,
					_List_fromArray(
						[rowBlock]));
				return A3(
					$author$project$Markdown$Parse$FSM,
					$author$project$Markdown$Parse$InBlock(rowBlock),
					blocks,
					_Utils_update(
						register,
						{blockStack: newRow, level: register.level + 0}));
		}
	});
var $author$project$Markdown$Parse$lineIsNotBlank = function (line) {
	return $elm$core$String$trim(line) !== '';
};
var $author$project$Markdown$Parse$newBlockTypeIsDifferent = F2(
	function (blockType, state) {
		if (state.$ === 'InBlock') {
			var currentBlock = state.a;
			return !_Utils_eq(
				$author$project$Markdown$Parse$typeOfBlock(currentBlock),
				blockType);
		} else {
			return false;
		}
	});
var $author$project$BlockType$prefixOfBalancedType = function (bt) {
	switch (bt.$) {
		case 'DisplayCode':
			return '```';
		case 'Verbatim':
			return '````';
		default:
			return '$$';
	}
};
var $elm$parser$Parser$Advanced$findSubString = _Parser_findSubString;
var $elm$parser$Parser$Advanced$fromInfo = F4(
	function (row, col, x, context) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
	});
var $elm$parser$Parser$Advanced$chompUntil = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$findSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A4($elm$parser$Parser$Advanced$fromInfo, newRow, newCol, expecting, s.context)) : A3(
				$elm$parser$Parser$Advanced$Good,
				_Utils_cmp(s.offset, newOffset) < 0,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $author$project$BlockType$oListPrefix = A2(
	$elm$parser$Parser$Advanced$map,
	function (x) {
		return x + '. ';
	},
	$elm$parser$Parser$Advanced$getChompedString(
		A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$Advanced$chompUntil(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'.',
					$author$project$BlockType$Expecting('expecting \'.\' to begin OListItem block'))))));
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $author$project$BlockType$uListPrefix = A2(
	$elm$parser$Parser$Advanced$map,
	function (s) {
		return s + '- ';
	},
	$elm$parser$Parser$Advanced$getChompedString(
		A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$Advanced$chompUntil(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'-',
					$author$project$BlockType$Expecting('expecting \'-\' to begin UListItem block'))))));
var $author$project$BlockType$prefixOfMarkdownType = F2(
	function (mdt, line) {
		var runPrefix = F2(
			function (prefixParser, str) {
				var _v1 = A2($elm$parser$Parser$Advanced$run, prefixParser, str);
				if (_v1.$ === 'Ok') {
					var prefix = _v1.a;
					return prefix;
				} else {
					return '';
				}
			});
		switch (mdt.$) {
			case 'Root':
				return '';
			case 'UListItem':
				return A2(runPrefix, $author$project$BlockType$uListPrefix, line);
			case 'OListItem':
				return A2(runPrefix, $author$project$BlockType$oListPrefix, line);
			case 'Heading':
				var k = mdt.a;
				return A2($elm$core$String$repeat, k, '#') + ' ';
			case 'HorizontalRule':
				return '___';
			case 'Quotation':
				return '> ';
			case 'Poetry':
				return '>> ';
			case 'Plain':
				return '';
			case 'Image':
				return '';
			case 'TableCell':
				return '';
			case 'TableRow':
				return '';
			case 'Table':
				return '';
			default:
				return '';
		}
	});
var $author$project$BlockType$prefixOfBlockType = F2(
	function (bt, line) {
		if (bt.$ === 'BalancedBlock') {
			var bb = bt.a;
			return $author$project$BlockType$prefixOfBalancedType(bb);
		} else {
			var mdb = bt.a;
			return A2($author$project$BlockType$prefixOfMarkdownType, mdb, line);
		}
	});
var $author$project$Markdown$Parse$removePrefix = F2(
	function (blockType, line_) {
		var p = A2($author$project$BlockType$prefixOfBlockType, blockType, line_);
		return A3($elm$core$String$replace, p, '', line_);
	});
var $author$project$Markdown$Parse$incrementRegisterLevel = F2(
	function (level, register) {
		var _v0 = level + 1;
		switch (_v0) {
			case 1:
				return _Utils_Tuple2(
					register.itemIndex1 + 1,
					_Utils_update(
						register,
						{itemIndex1: register.itemIndex1 + 1, itemIndex2: 0, itemIndex3: 0, itemIndex4: 0}));
			case 2:
				return _Utils_Tuple2(
					register.itemIndex2 + 1,
					_Utils_update(
						register,
						{itemIndex2: register.itemIndex2 + 1, itemIndex3: 0, itemIndex4: 0}));
			case 3:
				return _Utils_Tuple2(
					register.itemIndex3 + 1,
					_Utils_update(
						register,
						{itemIndex3: register.itemIndex3 + 1, itemIndex4: 0}));
			case 4:
				return _Utils_Tuple2(
					register.itemIndex4 + 1,
					_Utils_update(
						register,
						{itemIndex4: register.itemIndex4 + 1}));
			default:
				return _Utils_Tuple2(0, register);
		}
	});
var $author$project$BlockType$isCode = function (bt) {
	if ((bt.$ === 'BalancedBlock') && (bt.a.$ === 'DisplayCode')) {
		return true;
	} else {
		return false;
	}
};
var $author$project$BlockType$isOListItem = function (blockType) {
	if ((blockType.$ === 'MarkdownBlock') && (blockType.a.$ === 'OListItem')) {
		return true;
	} else {
		return false;
	}
};
var $author$project$Markdown$Parse$updateRegisterAndBlockType = F3(
	function (blockType, level_, register) {
		if ($author$project$BlockType$isOListItem(blockType)) {
			var _v0 = A2($author$project$Markdown$Parse$incrementRegisterLevel, level_, register);
			var index = _v0.a;
			var newRegister = _v0.b;
			var newBlockType = $author$project$BlockType$MarkdownBlock(
				$author$project$BlockType$OListItem(index));
			return _Utils_Tuple2(newBlockType, newRegister);
		} else {
			if ($author$project$BlockType$isCode(blockType)) {
				return _Utils_Tuple2(
					blockType,
					_Utils_update(
						register,
						{
							blockTypeStack: A2($elm$core$List$cons, blockType, register.blockTypeStack)
						}));
			} else {
				return _Utils_Tuple2(blockType, $author$project$Markdown$Parse$emptyRegister);
			}
		}
	});
var $author$project$Markdown$Parse$nextStateAtStart = F3(
	function (option, line, fsm) {
		var state = fsm.a;
		var blocks = fsm.b;
		var register = fsm.c;
		var _v0 = A2($author$project$BlockType$get, option, line);
		if (_v0.b.$ === 'Nothing') {
			var _v1 = _v0.b;
			return A3($author$project$Markdown$Parse$FSM, $author$project$Markdown$Parse$Error, blocks, register);
		} else {
			var level = _v0.a;
			var blockType = _v0.b.a;
			var newLine = A2($author$project$Markdown$Parse$removePrefix, blockType, line);
			var _v2 = A3($author$project$Markdown$Parse$updateRegisterAndBlockType, blockType, level, register);
			var newBlockType = _v2.a;
			var newRegister = _v2.b;
			return (_Utils_eq(
				newBlockType,
				$author$project$BlockType$MarkdownBlock($author$project$BlockType$TableRow)) && A2($author$project$Markdown$Parse$newBlockTypeIsDifferent, newBlockType, state)) ? A6($author$project$Markdown$Parse$handleTableStart, blockType, level, line, state, blocks, register) : ($author$project$Markdown$Parse$lineIsNotBlank(line) ? A3(
				$author$project$Markdown$Parse$FSM,
				$author$project$Markdown$Parse$InBlock(
					A4(
						$author$project$Markdown$Parse$Block,
						_Utils_Tuple2(-1, -1),
						newBlockType,
						level,
						newLine)),
				blocks,
				newRegister) : fsm);
		}
	});
var $author$project$Markdown$Parse$getTopOfBlockTypeStack = function (_v0) {
	var register = _v0.c;
	return $elm$core$List$head(register.blockTypeStack);
};
var $elm$core$String$trimLeft = _String_trimLeft;
var $author$project$Markdown$Parse$isBalanced = F3(
	function (str, mbt, bt2) {
		if (mbt.$ === 'Nothing') {
			if (bt2.$ === 'BalancedBlock') {
				return true;
			} else {
				return false;
			}
		} else {
			var bt1 = mbt.a;
			var _v2 = _Utils_Tuple3(
				bt1,
				bt2,
				$elm$core$String$trimLeft(str) === '```\n');
			if (_v2.b.$ === 'BalancedBlock') {
				if ((_v2.a.$ === 'BalancedBlock') && (_v2.a.a.$ === 'DisplayCode')) {
					return false;
				} else {
					return true;
				}
			} else {
				if ((_v2.a.$ === 'BalancedBlock') && (_v2.a.a.$ === 'DisplayCode')) {
					if (!_v2.c) {
						return false;
					} else {
						return true;
					}
				} else {
					return false;
				}
			}
		}
	});
var $author$project$BlockType$isMarkDown = function (bt) {
	if (bt.$ === 'BalancedBlock') {
		return false;
	} else {
		return true;
	}
};
var $author$project$Markdown$Parse$addLineToBlock = F2(
	function (line, _v0) {
		var id = _v0.a;
		var blockType_ = _v0.b;
		var level_ = _v0.c;
		var content_ = _v0.d;
		return A4(
			$author$project$Markdown$Parse$Block,
			id,
			blockType_,
			level_,
			_Utils_ap(content_, line));
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $author$project$Markdown$Parse$trimBalancedBlock = function (_v0) {
	var id = _v0.a;
	var bt = _v0.b;
	var lev = _v0.c;
	var content = _v0.d;
	return A4(
		$author$project$Markdown$Parse$Block,
		id,
		bt,
		lev,
		$elm$core$String$trim(content));
};
var $author$project$Markdown$Parse$processBalancedBlock = F3(
	function (blockType, line, fsm) {
		var state_ = fsm.a;
		var blocks_ = fsm.b;
		var register = fsm.c;
		if (_Utils_eq(
			$elm$core$Maybe$Just(blockType),
			$author$project$Markdown$Parse$typeOfState(
				$author$project$Markdown$Parse$stateOfFSM(fsm)))) {
			var _v0 = $author$project$Markdown$Parse$stateOfFSM(fsm);
			if (_v0.$ === 'InBlock') {
				var block_ = _v0.a;
				var line_ = A2($author$project$Markdown$Parse$removePrefix, blockType, line);
				var block__ = function () {
					if ((blockType.$ === 'BalancedBlock') && (blockType.a.$ === 'Verbatim')) {
						var _v2 = blockType.a;
						return block_;
					} else {
						return $author$project$Markdown$Parse$trimBalancedBlock(block_);
					}
				}();
				return A3(
					$author$project$Markdown$Parse$FSM,
					$author$project$Markdown$Parse$Start,
					A2(
						$elm$core$List$cons,
						A2($author$project$Markdown$Parse$addLineToBlock, line_, block__),
						blocks_),
					register);
			} else {
				return fsm;
			}
		} else {
			var _v3 = $author$project$Markdown$Parse$stateOfFSM(fsm);
			if (_v3.$ === 'InBlock') {
				var block_ = _v3.a;
				var line_ = ($elm$core$String$trimLeft(line) === '```\n') ? '\n' : line;
				var block__ = $author$project$Markdown$Parse$trimBalancedBlock(block_);
				return A3(
					$author$project$Markdown$Parse$FSM,
					$author$project$Markdown$Parse$InBlock(
						A4(
							$author$project$Markdown$Parse$Block,
							register.id,
							blockType,
							$author$project$BlockType$level(line_),
							line_)),
					A2($elm$core$List$cons, block__, blocks_),
					_Utils_update(
						register,
						{
							blockTypeStack: A2($elm$core$List$drop, 1, register.blockTypeStack)
						}));
			} else {
				return fsm;
			}
		}
	});
var $author$project$Markdown$Parse$addLineToState = F2(
	function (line, state_) {
		switch (state_.$) {
			case 'Start':
				return $author$project$Markdown$Parse$Start;
			case 'Error':
				return $author$project$Markdown$Parse$Error;
			default:
				var block_ = state_.a;
				return $author$project$Markdown$Parse$InBlock(
					A2($author$project$Markdown$Parse$addLineToBlock, line, block_));
		}
	});
var $author$project$Markdown$Parse$addLineToFSM = F2(
	function (line, _v0) {
		var state_ = _v0.a;
		var blocks_ = _v0.b;
		var register = _v0.c;
		switch (state_.$) {
			case 'Start':
				return A3($author$project$Markdown$Parse$FSM, state_, blocks_, register);
			case 'Error':
				return A3($author$project$Markdown$Parse$FSM, state_, blocks_, register);
			default:
				var _v2 = $elm$core$List$head(register.blockStack);
				if (_v2.$ === 'Nothing') {
					return A3(
						$author$project$Markdown$Parse$FSM,
						A2($author$project$Markdown$Parse$addLineToState, line, state_),
						blocks_,
						register);
				} else {
					var block = _v2.a;
					return A3(
						$author$project$Markdown$Parse$FSM,
						A2($author$project$Markdown$Parse$addLineToState, line, state_),
						A2($elm$core$List$cons, block, blocks_),
						_Utils_update(
							register,
							{
								blockStack: A2($elm$core$List$drop, 1, register.blockStack)
							}));
				}
		}
	});
var $author$project$Markdown$Parse$adjustLevel = function (block) {
	var id = block.a;
	var blockType = block.b;
	var level = block.c;
	var content = block.d;
	if (_Utils_eq(
		blockType,
		$author$project$BlockType$MarkdownBlock($author$project$BlockType$Plain))) {
		var newLevel = $author$project$BlockType$level(content);
		return A4($author$project$Markdown$Parse$Block, id, blockType, newLevel, content);
	} else {
		return block;
	}
};
var $author$project$Markdown$Parse$addNewMarkdownBlock = F4(
	function (option, currentBlock, line, fsm) {
		var id = currentBlock.a;
		var typeOfCurrentBlock = currentBlock.b;
		var levelOfCurrentBlock = currentBlock.c;
		var state = fsm.a;
		var blocks = fsm.b;
		var register = fsm.c;
		var _v0 = A2($author$project$BlockType$get, option, line);
		if (_v0.b.$ === 'Nothing') {
			var _v1 = _v0.b;
			return fsm;
		} else {
			var level = _v0.a;
			var newBlockType_ = _v0.b.a;
			var newLine = A2($author$project$Markdown$Parse$removePrefix, typeOfCurrentBlock, line);
			var _v2 = A3($author$project$Markdown$Parse$updateRegisterAndBlockType, newBlockType_, level, register);
			var newBlockType = _v2.a;
			var newRegister = _v2.b;
			var newBlock = A4(
				$author$project$Markdown$Parse$Block,
				id,
				newBlockType,
				level,
				A2($author$project$Markdown$Parse$removePrefix, newBlockType, newLine));
			return A3(
				$author$project$Markdown$Parse$FSM,
				$author$project$Markdown$Parse$InBlock(newBlock),
				A2(
					$elm$core$List$cons,
					$author$project$Markdown$Parse$adjustLevel(currentBlock),
					blocks),
				newRegister);
		}
	});
var $author$project$Markdown$Parse$handleInnerTableRow = F6(
	function (blockTypeOfLine, level, line, state, blocks, register) {
		switch (state.$) {
			case 'Start':
				return A3($author$project$Markdown$Parse$FSM, state, blocks, register);
			case 'Error':
				return A3($author$project$Markdown$Parse$FSM, state, blocks, register);
			default:
				var currentBlock = state.a;
				var tableMarker = A4(
					$author$project$Markdown$Parse$Block,
					_Utils_Tuple2(-1, -1),
					$author$project$BlockType$MarkdownBlock($author$project$BlockType$TableRow),
					level + 1,
					'deleteMe');
				var rowBlock = A4(
					$author$project$Markdown$Parse$Block,
					_Utils_Tuple2(-1, -1),
					blockTypeOfLine,
					level + 1,
					'row');
				var childrenOfNewBlock = A2($author$project$Markdown$Parse$parseTableRow, level + 2, line);
				var newRow = _Utils_ap(
					childrenOfNewBlock,
					_List_fromArray(
						[rowBlock]));
				return A3(
					$author$project$Markdown$Parse$FSM,
					$author$project$Markdown$Parse$InBlock(tableMarker),
					blocks,
					_Utils_update(
						register,
						{
							blockStack: _Utils_ap(register.blockStack, newRow)
						}));
		}
	});
var $author$project$Markdown$Parse$handleTableRow = F6(
	function (blockTypeOfLine, level, line, state, blocks, register) {
		return A2($author$project$Markdown$Parse$newBlockTypeIsDifferent, blockTypeOfLine, state) ? A6($author$project$Markdown$Parse$handleTableStart, blockTypeOfLine, level, line, state, blocks, register) : A6($author$project$Markdown$Parse$handleInnerTableRow, blockTypeOfLine, level, line, state, blocks, register);
	});
var $author$project$BlockType$isBalanced = function (bt) {
	if (bt.$ === 'BalancedBlock') {
		return true;
	} else {
		return false;
	}
};
var $author$project$Markdown$Parse$processMarkDownBlock = F5(
	function (option, level, blockTypeOfLine, line, fsm) {
		var state = fsm.a;
		var blocks = fsm.b;
		var register = fsm.c;
		if (state.$ === 'InBlock') {
			var currentBlock = state.a;
			var id = currentBlock.a;
			var typeOfCurrentBlock = currentBlock.b;
			var levelOfCurrentBlock = currentBlock.c;
			return $author$project$BlockType$isBalanced(typeOfCurrentBlock) ? A2($author$project$Markdown$Parse$addLineToFSM, line, fsm) : (_Utils_eq(
				blockTypeOfLine,
				$author$project$BlockType$MarkdownBlock($author$project$BlockType$Blank)) ? A3(
				$author$project$Markdown$Parse$FSM,
				$author$project$Markdown$Parse$Start,
				A2(
					$elm$core$List$cons,
					$author$project$Markdown$Parse$adjustLevel(currentBlock),
					blocks),
				register) : ((_Utils_eq(
				blockTypeOfLine,
				$author$project$BlockType$MarkdownBlock($author$project$BlockType$Plain)) && ((!_Utils_eq(
				typeOfCurrentBlock,
				$author$project$BlockType$MarkdownBlock($author$project$BlockType$TableRow))) && $author$project$Markdown$Parse$lineIsNotBlank(line))) ? A2($author$project$Markdown$Parse$addLineToFSM, line, fsm) : (_Utils_eq(
				blockTypeOfLine,
				$author$project$BlockType$MarkdownBlock($author$project$BlockType$TableRow)) ? A6($author$project$Markdown$Parse$handleTableRow, blockTypeOfLine, level, line, state, blocks, register) : A4($author$project$Markdown$Parse$addNewMarkdownBlock, option, currentBlock, line, fsm))));
		} else {
			return fsm;
		}
	});
var $author$project$Markdown$Parse$nextStateInBlock = F3(
	function (option, line, fsm) {
		var state_ = fsm.a;
		var blocks_ = fsm.b;
		var register = fsm.c;
		var _v0 = A2($author$project$BlockType$get, option, line);
		if (_v0.b.$ === 'Nothing') {
			var _v1 = _v0.b;
			return A3(
				$author$project$Markdown$Parse$FSM,
				$author$project$Markdown$Parse$Error,
				$author$project$Markdown$Parse$blockListOfFSM(fsm),
				register);
		} else {
			var level = _v0.a;
			var blockType = _v0.b.a;
			return A3(
				$author$project$Markdown$Parse$isBalanced,
				line,
				$author$project$Markdown$Parse$getTopOfBlockTypeStack(fsm),
				blockType) ? A3($author$project$Markdown$Parse$processBalancedBlock, blockType, line, fsm) : ($author$project$BlockType$isMarkDown(blockType) ? A5($author$project$Markdown$Parse$processMarkDownBlock, option, level, blockType, line, fsm) : fsm);
		}
	});
var $author$project$Markdown$Parse$nextState = F3(
	function (option, line, fsm_) {
		var state = fsm_.a;
		var blocks = fsm_.b;
		var register = fsm_.c;
		var fsm = $author$project$Markdown$Parse$handleRegister(fsm_);
		var _v0 = $author$project$Markdown$Parse$stateOfFSM(fsm);
		switch (_v0.$) {
			case 'Start':
				return A3($author$project$Markdown$Parse$nextStateAtStart, option, line, fsm);
			case 'InBlock':
				return A3($author$project$Markdown$Parse$nextStateInBlock, option, line, fsm);
			default:
				return fsm;
		}
	});
var $author$project$Markdown$Parse$runFSM = F2(
	function (option, lines) {
		var folder = F2(
			function (line, fsm) {
				return A3($author$project$Markdown$Parse$nextState, option, line, fsm);
			});
		return A3($elm$core$List$foldl, folder, $author$project$Markdown$Parse$initialFSM, lines);
	});
var $elm$core$String$lines = _String_lines;
var $author$project$Markdown$Parse$splitIntoLines = function (str) {
	return A2(
		$elm$core$List$map,
		function (l) {
			return l + '\n';
		},
		$elm$core$String$lines(str));
};
var $author$project$Markdown$Parse$toBlockTree = F2(
	function (option, document) {
		return A3(
			$jxxcarlson$htree$HTree$fromList,
			$author$project$Markdown$Parse$rootBlock,
			$author$project$Markdown$Parse$blockLevel,
			A2(
				$elm$core$List$map,
				$author$project$Markdown$Parse$changeLevel(1),
				$author$project$Markdown$Parse$flush(
					A2(
						$author$project$Markdown$Parse$runFSM,
						option,
						$author$project$Markdown$Parse$splitIntoLines(document)))));
	});
var $author$project$Markdown$Parse$toMDBlockTree = F3(
	function (version, option, document) {
		return A2(
			$zwilias$elm_rosetree$Tree$indexedMap,
			F2(
				function (idx, block) {
					return A3($author$project$Markdown$Parse$setBlockIndex, version, idx, block);
				}),
			A2(
				$zwilias$elm_rosetree$Tree$map,
				$author$project$Markdown$Parse$selectParser(option),
				A2($author$project$Markdown$Parse$toBlockTree, option, document)));
	});
var $author$project$Markdown$Render$Composite = function (a) {
	return {$: 'Composite', a: a};
};
var $author$project$Markdown$Render$Simple = function (a) {
	return {$: 'Simple', a: a};
};
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $author$project$Markdown$Render$masterId = $elm$html$Html$Attributes$id('__RENDERED_TEXT__');
var $author$project$Markdown$Render$IDClicked = function (a) {
	return {$: 'IDClicked', a: a};
};
var $author$project$Markdown$Parse$MDBlock = F3(
	function (a, b, c) {
		return {$: 'MDBlock', a: a, b: b, c: c};
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$property = $elm$virtual_dom$VirtualDom$property;
var $author$project$Markdown$Render$mathText = function (content) {
	return A3(
		$elm$html$Html$node,
		'math-text',
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('mm-math'),
				A2(
				$elm$html$Html$Attributes$property,
				'content',
				$elm$json$Json$Encode$string(content))
			]),
		_List_Nil);
};
var $author$project$Markdown$Render$displayMathText = function (str) {
	var str2 = $elm$core$String$trim(str);
	return $author$project$Markdown$Render$mathText('$$\n' + (str2 + '\n$$'));
};
var $author$project$Markdown$Parse$stringFromId = function (_v0) {
	var id = _v0.a;
	var version = _v0.b;
	return 'i' + ($elm$core$String$fromInt(id) + ('v' + $elm$core$String$fromInt(version)));
};
var $author$project$Markdown$Render$idAttr = function (id) {
	return $elm$html$Html$Attributes$id(
		$author$project$Markdown$Parse$stringFromId(id));
};
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $author$project$Markdown$Parse$project = function (_v0) {
	var bt = _v0.b;
	var lev = _v0.c;
	var content = _v0.d;
	return A3($author$project$Markdown$Parse$MDBlock, bt, lev, content);
};
var $author$project$Markdown$Parse$projectedStringOfBlockContent = function (blockContent) {
	if (blockContent.$ === 'M') {
		var mmInline = blockContent.a;
		return '';
	} else {
		var str = blockContent.a;
		return str;
	}
};
var $author$project$Markdown$Render$blockLevelClass = function (k) {
	return $elm$html$Html$Attributes$class(
		'mm-block-' + $elm$core$String$fromInt(k));
};
var $elm$html$Html$code = _VirtualDom_node('code');
var $author$project$BlockType$stringOfLanguage = function (lang_) {
	switch (lang_.$) {
		case 'ElmLang':
			return 'elm';
		case 'CssLang':
			return 'css';
		case 'JavascriptLang':
			return 'javascript';
		case 'JsonLang':
			return 'json';
		case 'PythonLang':
			return 'python';
		case 'SqlLang':
			return 'sql';
		default:
			return 'xml';
	}
};
var $author$project$BlockType$deleteLangPrefix = F2(
	function (lang, str) {
		return A2(
			$elm$core$String$dropLeft,
			$elm$core$String$length(
				$author$project$BlockType$stringOfLanguage(lang)) + 1,
			str);
	});
var $elm$html$Html$hr = _VirtualDom_node('hr');
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $author$project$Markdown$Render$marginOfLevel = function (level) {
	return A2(
		$elm$html$Html$Attributes$style,
		'margin-left',
		$elm$core$String$fromInt(0 * level) + 'px');
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme = function (a) {
	return {$: 'Theme', a: a};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AtRule = function (a) {
	return {$: 'AtRule', a: a};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$ClassExtends = {$: 'ClassExtends'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$Css = function (a) {
	return {$: 'Css', a: a};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$DeclarationKeyword = {$: 'DeclarationKeyword'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$Elm = function (a) {
	return {$: 'Elm', a: a};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex = function (a) {
	return {$: 'Hex', a: a};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Identifier = {$: 'Identifier'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$Javascript = function (a) {
	return {$: 'Javascript', a: a};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Property = {$: 'Property'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$TypeSignature = {$: 'TypeSignature'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$bold = function (style) {
	return _Utils_update(
		style,
		{isBold: true});
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$italic = function (style) {
	return _Utils_update(
		style,
		{isItalic: true});
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$DefaultColor = {$: 'DefaultColor'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$backgroundColor = function (background) {
	return {background: background, isBold: false, isItalic: false, isUnderline: false, text: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$DefaultColor};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$noEmphasis = F2(
	function (text, background) {
		return {background: background, isBold: false, isItalic: false, isUnderline: false, text: text};
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor = function (text) {
	return {background: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$DefaultColor, isBold: false, isItalic: false, isUnderline: false, text: text};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Monokai$requiredStyles = {
	addition: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$backgroundColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#003800')),
	comment: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#75715e')),
	_default: A2(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$noEmphasis,
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#f8f8f2'),
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#23241f')),
	deletion: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$backgroundColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#380000')),
	highlight: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$backgroundColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#343434')),
	style1: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#ae81ff')),
	style2: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#e6db74')),
	style3: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#f92672')),
	style4: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#66d9ef')),
	style5: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#a6e22e')),
	style6: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#ae81ff')),
	style7: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#fd971f'))
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Monokai$theme = {
	customStyles: _List_fromArray(
		[
			_Utils_Tuple2(
			_List_fromArray(
				[
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$Elm($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$TypeSignature),
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$Javascript($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$DeclarationKeyword),
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$Css($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Property)
				]),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$italic(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#66d9ef')))),
			_Utils_Tuple2(
			_List_fromArray(
				[
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$Javascript($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$ClassExtends)
				]),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$italic(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#a6e22e')))),
			_Utils_Tuple2(
			_List_fromArray(
				[
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$Css(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AtRule($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Identifier))
				]),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$bold(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#f92672'))))
		]),
	requiredStyles: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Monokai$requiredStyles
};
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style1 = {$: 'Style1'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style2 = {$: 'Style2'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3 = {$: 'Style3'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4 = {$: 'Style4'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5 = {$: 'Style5'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$atRuleToFragment = function (a) {
	switch (a.$) {
		case 'Identifier':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'css-ar-i');
		case 'Prefix':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5, 'css-ar-p');
		case 'Keyword':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'css-ar-k');
		default:
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4, 'css-ar-v');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Default = {$: 'Default'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style7 = {$: 'Style7'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attributeSelectorToFragment = function (att) {
	switch (att.$) {
		case 'AttributeName':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5, 'css-s-a-an');
		case 'AttributeValue':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style2, 'css-s-a-av');
		default:
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'css-s-a-o');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$selectorToFragment = function (s) {
	switch (s.$) {
		case 'Element':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'css-s-e');
		case 'Id':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5, 'css-s-i');
		case 'Class':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5, 'css-s-cl');
		case 'Combinator':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style7, 'css-s-c');
		case 'Universal':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'css-s-u');
		case 'AttributeSelector':
			var att = s.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attributeSelectorToFragment(att);
		case 'PseudoElement':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Default, 'css-s-pe');
		default:
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Default, 'css-s-pc');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$syntaxToStyle = function (syntax) {
	switch (syntax.$) {
		case 'String':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style2, 'css-s');
		case 'AtRule':
			var a = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$atRuleToFragment(a);
		case 'Selector':
			var s = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$selectorToFragment(s);
		case 'Property':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4, 'css-p');
		case 'PropertyValue':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4, 'css-pv');
		case 'Number':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style1, 'css-n');
		default:
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'css-u');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style6 = {$: 'Style6'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$syntaxToStyle = function (syntax) {
	switch (syntax.$) {
		case 'String':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style2, 'elm-s');
		case 'BasicSymbol':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'elm-bs');
		case 'GroupSymbol':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4, 'elm-gs');
		case 'Capitalized':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style6, 'elm-c');
		case 'Keyword':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'elm-k');
		case 'Function':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5, 'elm-f');
		case 'TypeSignature':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4, 'elm-ts');
		default:
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style1, 'elm-n');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$syntaxToStyle = function (syntax) {
	switch (syntax.$) {
		case 'Number':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style1, 'js-n');
		case 'String':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style2, 'js-s');
		case 'Keyword':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'js-k');
		case 'DeclarationKeyword':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4, 'js-dk');
		case 'FunctionEval':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4, 'js-fe');
		case 'Function':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5, 'js-f');
		case 'LiteralKeyword':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style6, 'js-lk');
		case 'Param':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style7, 'js-p');
		default:
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5, 'js-ce');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$syntaxToStyle = function (syntax) {
	switch (syntax.$) {
		case 'Number':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style1, 'py-n');
		case 'String':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style2, 'py-s');
		case 'Keyword':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'py-k');
		case 'DeclarationKeyword':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4, 'py-dk');
		case 'Function':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5, 'py-f');
		case 'LiteralKeyword':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style6, 'py-lk');
		case 'Param':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style7, 'py-p');
		default:
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Default, 'py-fe');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$syntaxToStyle = function (syntax) {
	switch (syntax.$) {
		case 'Number':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style1, 'sql-n');
		case 'String':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style2, 'sql-s');
		case 'Keyword':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'sql-k');
		case 'Operator':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4, 'sql-o');
		case 'Function':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5, 'sql-f');
		case 'Punctuation':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style6, 'sql-p');
		default:
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style7, 'sql-l');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$syntaxToStyle = function (syntax) {
	switch (syntax.$) {
		case 'Tag':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'xml-t');
		case 'Attribute':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5, 'xml-a');
		default:
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style2, 'xlm-av');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$syntaxToSelector = function (syntax) {
	switch (syntax.$) {
		case 'Elm':
			var elmSyntax = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$syntaxToStyle(elmSyntax).b;
		case 'Xml':
			var xmlSyntax = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$syntaxToStyle(xmlSyntax).b;
		case 'Javascript':
			var jsSyntax = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$syntaxToStyle(jsSyntax).b;
		case 'Css':
			var cssSyntax = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$syntaxToStyle(cssSyntax).b;
		case 'Python':
			var pythonSyntax = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$syntaxToStyle(pythonSyntax).b;
		default:
			var sqlSyntax = syntax.a;
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$syntaxToStyle(sqlSyntax).b;
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$syntaxesToSelectors = function (syntaxes) {
	return $elm$core$String$concat(
		A2(
			$elm$core$List$intersperse,
			', ',
			A2(
				$elm$core$List$map,
				$elm$core$Basics$append('.elmsh-'),
				A2($elm$core$List$map, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$syntaxToSelector, syntaxes))));
};
var $elm$core$String$fromFloat = _String_fromNumber;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$colorToCss = F2(
	function (property, color) {
		switch (color.$) {
			case 'DefaultColor':
				return '';
			case 'Hex':
				var hex = color.a;
				return property + (hex + ';');
			case 'Rgb':
				var r = color.a;
				var g = color.b;
				var b = color.c;
				return $elm$core$String$concat(
					_List_fromArray(
						[
							property,
							'rgb(',
							$elm$core$String$fromInt(r),
							', ',
							$elm$core$String$fromInt(g),
							',',
							$elm$core$String$fromInt(b),
							');'
						]));
			default:
				var r = color.a;
				var g = color.b;
				var b = color.c;
				var a = color.d;
				return $elm$core$String$concat(
					_List_fromArray(
						[
							property,
							'rgba(',
							$elm$core$String$fromInt(r),
							', ',
							$elm$core$String$fromInt(g),
							',',
							$elm$core$String$fromInt(b),
							', ',
							$elm$core$String$fromFloat(a),
							');'
						]));
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$emptyIfFalse = F2(
	function (bool, str) {
		return bool ? str : '';
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$styleToCss = function (_v0) {
	var isBold = _v0.isBold;
	var isItalic = _v0.isItalic;
	var isUnderline = _v0.isUnderline;
	var text = _v0.text;
	var background = _v0.background;
	return $elm$core$String$concat(
		_List_fromArray(
			[
				A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$emptyIfFalse, isBold, 'font-weight: bold;'),
				A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$emptyIfFalse, isItalic, 'font-style: italic;'),
				A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$emptyIfFalse, isUnderline, 'text-decoration: underline;'),
				A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$colorToCss, 'color: ', text),
				A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$colorToCss, 'background: ', background)
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$toCssClass = function (_v0) {
	var selectors = _v0.a;
	var style = _v0.b;
	return $elm$core$String$isEmpty(selectors) ? '' : (selectors + (' {' + ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$styleToCss(style) + '}')));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$toCss = function (classes) {
	return $elm$core$String$concat(
		A2($elm$core$List$map, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$toCssClass, classes));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$toCss = function (_v0) {
	var requiredStyles = _v0.requiredStyles;
	var customStyles = _v0.customStyles;
	return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$toCss(
		_Utils_ap(
			_List_fromArray(
				[
					_Utils_Tuple2('.elmsh', requiredStyles._default),
					_Utils_Tuple2('.elmsh-hl', requiredStyles.highlight),
					_Utils_Tuple2('.elmsh-add', requiredStyles.addition),
					_Utils_Tuple2('.elmsh-del', requiredStyles.deletion),
					_Utils_Tuple2('.elmsh-comm', requiredStyles.comment),
					_Utils_Tuple2('.elmsh1', requiredStyles.style1),
					_Utils_Tuple2('.elmsh2', requiredStyles.style2),
					_Utils_Tuple2('.elmsh3', requiredStyles.style3),
					_Utils_Tuple2('.elmsh4', requiredStyles.style4),
					_Utils_Tuple2('.elmsh5', requiredStyles.style5),
					_Utils_Tuple2('.elmsh6', requiredStyles.style6),
					_Utils_Tuple2('.elmsh7', requiredStyles.style7)
				]),
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$mapFirst($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$syntaxesToSelectors),
				customStyles)));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Monokai$css = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$toCss($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Monokai$theme);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$monokai = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Monokai$css;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$monokai = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$monokai);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$HCode = function (a) {
	return {$: 'HCode', a: a};
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {col: col, problem: problem, row: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.row, p.col, p.problem);
};
var $elm$parser$Parser$run = F2(
	function (parser, source) {
		var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
		if (_v0.$ === 'Ok') {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		} else {
			var problems = _v0.a;
			return $elm$core$Result$Err(
				A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$newLine = function (fragments) {
	return {fragments: fragments, highlight: $elm$core$Maybe$Nothing};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak = {$: 'LineBreak'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Comment = {$: 'Comment'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toFragment = F2(
	function (toStyle, _v0) {
		var syntax = _v0.a;
		var text = _v0.b;
		switch (syntax.$) {
			case 'Normal':
				return {additionalClass: '', requiredStyle: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Default, text: text};
			case 'Comment':
				return {additionalClass: '', requiredStyle: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Comment, text: text};
			case 'LineBreak':
				return {additionalClass: '', requiredStyle: $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Default, text: text};
			default:
				var c = syntax.a;
				var _v2 = toStyle(c);
				var requiredStyle = _v2.a;
				var additionalClass = _v2.b;
				return {additionalClass: additionalClass, requiredStyle: requiredStyle, text: text};
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLinesHelp = F3(
	function (toStyle, _v0, _v1) {
		var syntax = _v0.a;
		var text = _v0.b;
		var lines = _v1.a;
		var fragments = _v1.b;
		var maybeLastSyntax = _v1.c;
		if (_Utils_eq(syntax, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak)) {
			return _Utils_Tuple3(
				A2(
					$elm$core$List$cons,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$newLine(fragments),
					lines),
				_List_fromArray(
					[
						A2(
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toFragment,
						toStyle,
						_Utils_Tuple2(syntax, text))
					]),
				$elm$core$Maybe$Nothing);
		} else {
			if (_Utils_eq(
				$elm$core$Maybe$Just(syntax),
				maybeLastSyntax)) {
				if (fragments.b) {
					var headFrag = fragments.a;
					var tailFrags = fragments.b;
					return _Utils_Tuple3(
						lines,
						A2(
							$elm$core$List$cons,
							_Utils_update(
								headFrag,
								{
									text: _Utils_ap(text, headFrag.text)
								}),
							tailFrags),
						maybeLastSyntax);
				} else {
					return _Utils_Tuple3(
						lines,
						A2(
							$elm$core$List$cons,
							A2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toFragment,
								toStyle,
								_Utils_Tuple2(syntax, text)),
							fragments),
						maybeLastSyntax);
				}
			} else {
				return _Utils_Tuple3(
					lines,
					A2(
						$elm$core$List$cons,
						A2(
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toFragment,
							toStyle,
							_Utils_Tuple2(syntax, text)),
						fragments),
					$elm$core$Maybe$Just(syntax));
			}
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLines = F2(
	function (toStyle, revTokens) {
		return function (_v0) {
			var lines = _v0.a;
			var frags = _v0.b;
			return A2(
				$elm$core$List$cons,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$newLine(frags),
				lines);
		}(
			A3(
				$elm$core$List$foldl,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLinesHelp(toStyle),
				_Utils_Tuple3(_List_Nil, _List_Nil, $elm$core$Maybe$Nothing),
				revTokens));
	});
var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
var $elm$parser$Parser$toAdvancedStep = function (step) {
	if (step.$ === 'Loop') {
		var s = step.a;
		return $elm$parser$Parser$Advanced$Loop(s);
	} else {
		var a = step.a;
		return $elm$parser$Parser$Advanced$Done(a);
	}
};
var $elm$parser$Parser$loop = F2(
	function (state, callback) {
		return A2(
			$elm$parser$Parser$Advanced$loop,
			state,
			function (s) {
				return A2(
					$elm$parser$Parser$map,
					$elm$parser$Parser$toAdvancedStep,
					callback(s));
			});
	});
var $elm$parser$Parser$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$parser$Parser$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal = {$: 'Normal'};
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parseA(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					var _v2 = callback(a);
					var parseB = _v2.a;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
					}
				}
			});
	});
var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C = function (a) {
	return {$: 'C', a: a};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Prefix = {$: 'Prefix'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$String = {$: 'String'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AtRuleValue = {$: 'AtRuleValue'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Keyword = {$: 'Keyword'};
var $elm$parser$Parser$UnexpectedChar = {$: 'UnexpectedChar'};
var $elm$parser$Parser$chompIf = function (isGood) {
	return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
};
var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile = function (isNotRelevant) {
	return A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(_Utils_Tuple0),
			$elm$parser$Parser$chompIf(isNotRelevant)),
		$elm$parser$Parser$chompWhile(isNotRelevant));
};
var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$atRuleKeywordSet = $elm$core$Set$fromList(
	_List_fromArray(
		['and', 'or', 'not', 'only']));
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isAtRuleKeyword = function (n) {
	return A2($elm$core$Set$member, n, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$atRuleKeywordSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isCommentChar = function (c) {
	return _Utils_eq(
		c,
		_Utils_chr('/'));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak = function (c) {
	return _Utils_eq(
		c,
		_Utils_chr('\n'));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isSpace = function (c) {
	return _Utils_eq(
		c,
		_Utils_chr(' ')) || _Utils_eq(
		c,
		_Utils_chr('\t'));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace = function (c) {
	return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isSpace(c) || $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$selectorNameInvalidCharSet = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr(':'),
			_Utils_chr('{'),
			_Utils_chr('}'),
			_Utils_chr(','),
			_Utils_chr('.'),
			_Utils_chr('#'),
			_Utils_chr('>'),
			_Utils_chr('+'),
			_Utils_chr('~'),
			_Utils_chr('*'),
			_Utils_chr('['),
			_Utils_chr(']'),
			_Utils_chr('|'),
			_Utils_chr(';'),
			_Utils_chr('('),
			_Utils_chr(')')
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isSelectorNameChar = function (c) {
	return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isCommentChar(c) || A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$selectorNameInvalidCharSet)));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$atRuleKeywordOrValue = function (revTokens) {
	return A2(
		$elm$parser$Parser$map,
		function (n) {
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isAtRuleKeyword(n) ? A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AtRule($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Keyword)),
					n),
				revTokens) : A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AtRule($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AtRuleValue)),
					n),
				revTokens);
		},
		$elm$parser$Parser$getChompedString(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isSelectorNameChar)));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$atRuleSet = $elm$core$Set$fromList(
	_List_fromArray(
		['@page', '@font-face', '@swash', '@annotation', '@ornaments', '@stylistic', '@styleset', '@character-variant']));
var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Comment = {$: 'Comment'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$addThen = F3(
	function (f, list, plist) {
		return A2(
			$elm$parser$Parser$andThen,
			function (n) {
				return f(
					_Utils_ap(n, list));
			},
			plist);
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$consThen = F3(
	function (f, list, pn) {
		return A2(
			$elm$parser$Parser$andThen,
			function (n) {
				return f(
					A2($elm$core$List$cons, n, list));
			},
			pn);
	});
var $elm$parser$Parser$ExpectingEnd = {$: 'ExpectingEnd'};
var $elm$parser$Parser$Advanced$end = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return _Utils_eq(
				$elm$core$String$length(s.src),
				s.offset) ? A3($elm$parser$Parser$Advanced$Good, false, _Utils_Tuple0, s) : A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
var $elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 'ExpectingSymbol', a: a};
};
var $elm$parser$Parser$symbol = function (str) {
	return $elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$ExpectingSymbol(str)));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile = F2(
	function (isNotRelevant, previousParser) {
		return A2(
			$elm$parser$Parser$ignorer,
			previousParser,
			$elm$parser$Parser$chompWhile(isNotRelevant));
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedUnnestable = F2(
	function (options, revAList) {
		var defaultMap = options.defaultMap;
		var isNotRelevant = options.isNotRelevant;
		var end = options.end;
		var innerParsers = options.innerParsers;
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$map,
					$elm$core$Basics$always(
						A2(
							$elm$core$List$cons,
							defaultMap(end),
							revAList)),
					$elm$parser$Parser$symbol(end)),
					A2(
					$elm$parser$Parser$map,
					$elm$core$Basics$always(revAList),
					$elm$parser$Parser$end),
					A3(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$addThen,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedUnnestable(options),
					revAList,
					$elm$parser$Parser$oneOf(innerParsers)),
					A3(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$consThen,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedUnnestable(options),
					revAList,
					A2(
						$elm$parser$Parser$map,
						defaultMap,
						$elm$parser$Parser$getChompedString(
							A2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
								isNotRelevant,
								$elm$parser$Parser$chompIf(
									$elm$core$Basics$always(true))))))
				]));
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedNestable = F3(
	function (nestLevel, options, revAList) {
		var defaultMap = options.defaultMap;
		var isNotRelevant = options.isNotRelevant;
		var start = options.start;
		var end = options.end;
		var innerParsers = options.innerParsers;
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$andThen,
					function (n) {
						return (nestLevel === 1) ? $elm$parser$Parser$succeed(n) : A3($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedNestable, nestLevel - 1, options, n);
					},
					A2(
						$elm$parser$Parser$map,
						$elm$core$Basics$always(
							A2(
								$elm$core$List$cons,
								defaultMap(end),
								revAList)),
						$elm$parser$Parser$symbol(end))),
					A3(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$consThen,
					A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedNestable, nestLevel + 1, options),
					revAList,
					A2(
						$elm$parser$Parser$map,
						defaultMap,
						$elm$parser$Parser$getChompedString(
							A2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
								isNotRelevant,
								$elm$parser$Parser$symbol(start))))),
					A3(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$addThen,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedUnnestable(options),
					revAList,
					$elm$parser$Parser$oneOf(innerParsers)),
					A2(
					$elm$parser$Parser$map,
					$elm$core$Basics$always(revAList),
					$elm$parser$Parser$end),
					A3(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$consThen,
					A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedNestable, nestLevel, options),
					revAList,
					A2(
						$elm$parser$Parser$map,
						defaultMap,
						$elm$parser$Parser$getChompedString(
							A2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
								isNotRelevant,
								$elm$parser$Parser$chompIf(
									$elm$core$Basics$always(true))))))
				]));
	});
var $elm$parser$Parser$Problem = function (a) {
	return {$: 'Problem', a: a};
};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $elm$parser$Parser$problem = function (msg) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(msg));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedHelp = F2(
	function (options, revAList) {
		var start = options.start;
		var end = options.end;
		var isNotRelevant = options.isNotRelevant;
		var _v0 = _Utils_Tuple2(
			$elm$core$String$uncons(options.start),
			$elm$core$String$uncons(options.end));
		if (_v0.a.$ === 'Nothing') {
			var _v1 = _v0.a;
			return $elm$parser$Parser$problem('Trying to parse a delimited helper, but the start token cannot be an empty string!');
		} else {
			if (_v0.b.$ === 'Nothing') {
				var _v2 = _v0.b;
				return $elm$parser$Parser$problem('Trying to parse a delimited helper, but the end token cannot be an empty string!');
			} else {
				var _v3 = _v0.a.a;
				var startChar = _v3.a;
				var _v4 = _v0.b.a;
				var endChar = _v4.a;
				return options.isNestable ? A3(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedNestable,
					1,
					_Utils_update(
						options,
						{
							isNotRelevant: function (c) {
								return isNotRelevant(c) && ((!_Utils_eq(c, startChar)) && (!_Utils_eq(c, endChar)));
							}
						}),
					revAList) : A2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedUnnestable,
					_Utils_update(
						options,
						{
							isNotRelevant: function (c) {
								return isNotRelevant(c) && (!_Utils_eq(c, endChar));
							}
						}),
					revAList);
			}
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited = function (options) {
	var start = options.start;
	var isNotRelevant = options.isNotRelevant;
	var defaultMap = options.defaultMap;
	return A2(
		$elm$parser$Parser$andThen,
		function (n) {
			return A2(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedHelp,
				options,
				_List_fromArray(
					[n]));
		},
		A2(
			$elm$parser$Parser$map,
			$elm$core$Basics$always(
				defaultMap(start)),
			$elm$parser$Parser$symbol(start)));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$lineBreak = A2(
	$elm$parser$Parser$map,
	function (_v0) {
		return _List_fromArray(
			[
				_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak, '\n')
			]);
	},
	$elm$parser$Parser$symbol('\n'));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$comment = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	{
		defaultMap: function (b) {
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Comment, b);
		},
		end: '*/',
		innerParsers: _List_fromArray(
			[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$lineBreak]),
		isNestable: false,
		isNotRelevant: function (c) {
			return !$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c);
		},
		start: '/*'
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$whitespaceOrCommentStep = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				function (b) {
					return $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b),
							revTokens));
				},
				$elm$parser$Parser$getChompedString(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isSpace))),
				A2(
				$elm$parser$Parser$map,
				function (ns) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(ns, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$lineBreak),
				A2(
				$elm$parser$Parser$map,
				function (ns) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(ns, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$comment)
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$keyframesOrCounterStyle = function (a) {
	return A2(
		$elm$parser$Parser$loop,
		_List_fromArray(
			[
				_Utils_Tuple2(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AtRule($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Identifier)),
				a)
			]),
		function (ns) {
			return $elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$whitespaceOrCommentStep(ns),
						A2(
						$elm$parser$Parser$map,
						function (b) {
							return $elm$parser$Parser$Loop(
								A2(
									$elm$core$List$cons,
									_Utils_Tuple2(
										$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(
											$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AtRule($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Prefix)),
										b),
									ns));
						},
						$elm$parser$Parser$getChompedString(
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isSelectorNameChar))),
						A2(
						$elm$parser$Parser$map,
						function (b) {
							return $elm$parser$Parser$Loop(
								A2(
									$elm$core$List$cons,
									_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b),
									ns));
						},
						$elm$parser$Parser$getChompedString(
							$elm$parser$Parser$chompIf(
								function (c) {
									return !_Utils_eq(
										c,
										_Utils_chr('{'));
								}))),
						$elm$parser$Parser$succeed(
						$elm$parser$Parser$Done(ns))
					]));
		});
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$nestableAtRuleOpener = function (ns) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				$elm$core$Basics$always(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, '{'),
						ns)),
				$elm$parser$Parser$symbol('{')),
				$elm$parser$Parser$succeed(ns)
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Number = {$: 'Number'};
var $elm$parser$Parser$backtrackable = $elm$parser$Parser$Advanced$backtrackable;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$escapableSet = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr('\''),
			_Utils_chr('\"'),
			_Utils_chr('\\'),
			_Utils_chr('n'),
			_Utils_chr('r'),
			_Utils_chr('t'),
			_Utils_chr('b'),
			_Utils_chr('f'),
			_Utils_chr('v')
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapableChar = function (c) {
	return A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$escapableSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$escapable = A2(
	$elm$parser$Parser$ignorer,
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed(_Utils_Tuple0),
		$elm$parser$Parser$backtrackable(
			$elm$parser$Parser$symbol('\\'))),
	$elm$parser$Parser$chompIf($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapableChar));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$cssEscapable = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _List_fromArray(
			[
				_Utils_Tuple2(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Number),
				b)
			]);
	},
	$elm$parser$Parser$getChompedString($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$escapable));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapable = function (c) {
	return _Utils_eq(
		c,
		_Utils_chr('\\'));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$quoteDelimiter = {
	defaultMap: function (b) {
		return _Utils_Tuple2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$String),
			b);
	},
	end: '\'',
	innerParsers: _List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$lineBreak, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$cssEscapable]),
	isNestable: false,
	isNotRelevant: function (c) {
		return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c) || $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapable(c));
	},
	start: '\''
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$doubleQuote = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	_Utils_update(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$quoteDelimiter,
		{end: '\"', start: '\"'}));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$quote = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$quoteDelimiter);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$stringLiteral = function (revTokens) {
	return A2(
		$elm$parser$Parser$map,
		function (n) {
			return _Utils_ap(n, revTokens);
		},
		$elm$parser$Parser$oneOf(
			_List_fromArray(
				[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$quote, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$doubleQuote])));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$mediaOrSupports = function (a) {
	return A2(
		$elm$parser$Parser$andThen,
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$nestableAtRuleOpener,
		A2(
			$elm$parser$Parser$loop,
			_List_fromArray(
				[
					_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AtRule($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Identifier)),
					a)
				]),
			function (ns) {
				return $elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$whitespaceOrCommentStep(ns),
							A2(
							$elm$parser$Parser$map,
							$elm$parser$Parser$Loop,
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$stringLiteral(ns)),
							A2(
							$elm$parser$Parser$map,
							$elm$parser$Parser$Loop,
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$atRuleKeywordOrValue(ns)),
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return $elm$parser$Parser$Loop(
									A2(
										$elm$core$List$cons,
										_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b),
										ns));
							},
							$elm$parser$Parser$getChompedString(
								$elm$parser$Parser$chompIf(
									function (c) {
										return !_Utils_eq(
											c,
											_Utils_chr('{'));
									}))),
							$elm$parser$Parser$succeed(
							$elm$parser$Parser$Done(ns))
						]));
			}));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$PropertyValue = {$: 'PropertyValue'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$stringArg = F2(
	function (fnStr, revTokens) {
		return A2(
			$elm$parser$Parser$andThen,
			function (revT_) {
				return $elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$stringLiteral(revT_),
							A2(
							$elm$parser$Parser$map,
							function (n) {
								return A2(
									$elm$core$List$cons,
									_Utils_Tuple2(
										$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$String),
										n),
									revT_);
							},
							$elm$parser$Parser$getChompedString(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
									function (c) {
										return !_Utils_eq(
											c,
											_Utils_chr(')'));
									}))),
							$elm$parser$Parser$succeed(revT_)
						]));
			},
			A2(
				$elm$parser$Parser$map,
				$elm$core$Basics$always(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, '('),
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$PropertyValue),
								fnStr),
							revTokens))),
				$elm$parser$Parser$symbol(fnStr + '(')));
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$atRuleHelper = function (a) {
	switch (a) {
		case '@import':
			return A2(
				$elm$parser$Parser$loop,
				_List_fromArray(
					[
						_Utils_Tuple2(
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AtRule($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Identifier)),
						a)
					]),
				function (ns) {
					return $elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$whitespaceOrCommentStep(ns),
								A2(
								$elm$parser$Parser$map,
								$elm$parser$Parser$Loop,
								A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$stringArg, 'url', ns)),
								A2(
								$elm$parser$Parser$map,
								$elm$parser$Parser$Loop,
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$stringLiteral(ns)),
								A2(
								$elm$parser$Parser$map,
								$elm$parser$Parser$Loop,
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$atRuleKeywordOrValue(ns)),
								A2(
								$elm$parser$Parser$map,
								function (b) {
									return $elm$parser$Parser$Loop(
										A2(
											$elm$core$List$cons,
											_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b),
											ns));
								},
								$elm$parser$Parser$getChompedString(
									$elm$parser$Parser$chompIf(
										function (c) {
											return !_Utils_eq(
												c,
												_Utils_chr(';'));
										}))),
								$elm$parser$Parser$succeed(
								$elm$parser$Parser$Done(ns))
							]));
				});
		case '@namespace':
			return A2(
				$elm$parser$Parser$loop,
				_List_fromArray(
					[
						_Utils_Tuple2(
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AtRule($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Identifier)),
						a)
					]),
				function (ns) {
					return $elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$whitespaceOrCommentStep(ns),
								A2(
								$elm$parser$Parser$map,
								$elm$parser$Parser$Loop,
								A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$stringArg, 'url', ns)),
								A2(
								$elm$parser$Parser$map,
								$elm$parser$Parser$Loop,
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$stringLiteral(ns)),
								A2(
								$elm$parser$Parser$map,
								function (b) {
									return $elm$parser$Parser$Loop(
										A2(
											$elm$core$List$cons,
											_Utils_Tuple2(
												$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(
													$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AtRule($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Prefix)),
												b),
											ns));
								},
								$elm$parser$Parser$getChompedString(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isSelectorNameChar))),
								A2(
								$elm$parser$Parser$map,
								function (b) {
									return $elm$parser$Parser$Loop(
										A2(
											$elm$core$List$cons,
											_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b),
											ns));
								},
								$elm$parser$Parser$getChompedString(
									$elm$parser$Parser$chompIf(
										function (c) {
											return !_Utils_eq(
												c,
												_Utils_chr(';'));
										}))),
								$elm$parser$Parser$succeed(
								$elm$parser$Parser$Done(ns))
							]));
				});
		case '@charset':
			return A2(
				$elm$parser$Parser$loop,
				_List_fromArray(
					[
						_Utils_Tuple2(
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AtRule($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Identifier)),
						a)
					]),
				function (ns) {
					return $elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$whitespaceOrCommentStep(ns),
								A2(
								$elm$parser$Parser$map,
								$elm$parser$Parser$Loop,
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$stringLiteral(ns)),
								A2(
								$elm$parser$Parser$map,
								function (b) {
									return $elm$parser$Parser$Loop(
										A2(
											$elm$core$List$cons,
											_Utils_Tuple2(
												$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$String),
												b),
											ns));
								},
								$elm$parser$Parser$getChompedString(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isSelectorNameChar))),
								A2(
								$elm$parser$Parser$map,
								function (b) {
									return $elm$parser$Parser$Loop(
										A2(
											$elm$core$List$cons,
											_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b),
											ns));
								},
								$elm$parser$Parser$getChompedString(
									$elm$parser$Parser$chompIf(
										function (c) {
											return !_Utils_eq(
												c,
												_Utils_chr(';'));
										}))),
								$elm$parser$Parser$succeed(
								$elm$parser$Parser$Done(ns))
							]));
				});
		case '@media':
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$mediaOrSupports(a);
		case '@supports':
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$mediaOrSupports(a);
		case '@keyframes':
			return A2(
				$elm$parser$Parser$andThen,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$nestableAtRuleOpener,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$keyframesOrCounterStyle(a));
		case '@counter-style':
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$keyframesOrCounterStyle(a);
		case '@font-feature-values':
			return A2(
				$elm$parser$Parser$andThen,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$nestableAtRuleOpener,
				A2(
					$elm$parser$Parser$loop,
					_List_fromArray(
						[
							_Utils_Tuple2(
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AtRule($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Identifier)),
							a)
						]),
					function (ns) {
						return $elm$parser$Parser$oneOf(
							_List_fromArray(
								[
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$whitespaceOrCommentStep(ns),
									A2(
									$elm$parser$Parser$map,
									function (b) {
										return $elm$parser$Parser$Loop(
											A2(
												$elm$core$List$cons,
												_Utils_Tuple2(
													$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(
														$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AtRule($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Prefix)),
													b),
												ns));
									},
									$elm$parser$Parser$getChompedString(
										$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isSelectorNameChar))),
									A2(
									$elm$parser$Parser$map,
									function (b) {
										return $elm$parser$Parser$Loop(
											A2(
												$elm$core$List$cons,
												_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b),
												ns));
									},
									$elm$parser$Parser$getChompedString(
										$elm$parser$Parser$chompIf(
											function (c) {
												return !_Utils_eq(
													c,
													_Utils_chr('{'));
											}))),
									$elm$parser$Parser$succeed(
									$elm$parser$Parser$Done(ns))
								]));
					}));
		default:
			return A2($elm$core$Set$member, a, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$atRuleSet) ? $elm$parser$Parser$succeed(
				_List_fromArray(
					[
						_Utils_Tuple2(
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AtRule($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Identifier)),
						a)
					])) : $elm$parser$Parser$succeed(
				_List_fromArray(
					[
						_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, a)
					]));
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$atRule = A2(
	$elm$parser$Parser$andThen,
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$atRuleHelper,
	$elm$parser$Parser$getChompedString(
		A2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isSelectorNameChar,
			$elm$parser$Parser$symbol('@'))));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isPropertyChar = function (c) {
	return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isCommentChar(c) || (_Utils_eq(
		c,
		_Utils_chr(':')) || (_Utils_eq(
		c,
		_Utils_chr(';')) || _Utils_eq(
		c,
		_Utils_chr('}'))))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Unit = {$: 'Unit'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$operatorCharSet = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr('+'),
			_Utils_chr('-'),
			_Utils_chr('%'),
			_Utils_chr('*'),
			_Utils_chr('/')
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isOperatorChar = function (c) {
	return A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$operatorCharSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isPropertyValueChar = function (c) {
	return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isPropertyChar(c) && (!(_Utils_eq(
		c,
		_Utils_chr('(')) || (_Utils_eq(
		c,
		_Utils_chr(')')) || (_Utils_eq(
		c,
		_Utils_chr(',')) || $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isOperatorChar(c)))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$hexColor = function (revTokens) {
	return A2(
		$elm$parser$Parser$map,
		function (n) {
			return A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Number),
					n),
				revTokens);
		},
		$elm$parser$Parser$getChompedString(
			A2(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isPropertyValueChar,
				$elm$parser$Parser$symbol('#'))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isNotPropertyValueChar = function (c) {
	return _Utils_eq(
		c,
		_Utils_chr('(')) || (_Utils_eq(
		c,
		_Utils_chr(')')) || (_Utils_eq(
		c,
		_Utils_chr(':')) || (_Utils_eq(
		c,
		_Utils_chr(',')) || _Utils_eq(
		c,
		_Utils_chr('/')))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$unitSet = $elm$core$Set$fromList(
	_List_fromArray(
		['em', 'ex', 'ch', 'rem', 'vw', 'vh', 'vmin', 'vmax', 'cm', 'mm', 'q', 'in', 'pt', 'pc', 'px', 'deg', 'grad', 'rad', 'turn', 's', 'ms', 'Hz', 'kHz', 'dpi', 'dpcm', 'dppx']));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isUnit = function (n) {
	return A2($elm$core$Set$member, n, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$unitSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isNumber = function (c) {
	return $elm$core$Char$isDigit(c) || _Utils_eq(
		c,
		_Utils_chr('.'));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$positiveNumber = A2(
	$elm$parser$Parser$ignorer,
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed(_Utils_Tuple0),
		$elm$parser$Parser$chompIf($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isNumber)),
	$elm$parser$Parser$chompWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isNumber));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$negativeNumber = A2(
	$elm$parser$Parser$ignorer,
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed(_Utils_Tuple0),
		$elm$parser$Parser$backtrackable(
			$elm$parser$Parser$symbol('-'))),
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$positiveNumber);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$number = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$positiveNumber, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$negativeNumber]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$number = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Number),
			b);
	},
	$elm$parser$Parser$getChompedString($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$number));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$valueLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$stringLiteral(revTokens)),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$number),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$hexColor(revTokens)),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$stringArg, 'url', revTokens)),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$stringArg, 'format', revTokens)),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$stringArg, 'local', revTokens)),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isUnit(n) ? $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Unit),
								n),
							revTokens)) : $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$PropertyValue),
								n),
							revTokens));
				},
				$elm$parser$Parser$getChompedString(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isPropertyValueChar))),
				A2(
				$elm$parser$Parser$map,
				function (b) {
					return $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b),
							revTokens));
				},
				$elm$parser$Parser$getChompedString(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isNotPropertyValueChar))),
				A2(
				$elm$parser$Parser$map,
				function (b) {
					return $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Unit),
								b),
							revTokens));
				},
				$elm$parser$Parser$getChompedString(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isOperatorChar))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$valueHelper = function (opener) {
	return A2(
		$elm$parser$Parser$loop,
		_List_fromArray(
			[opener]),
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$valueLoop);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$value = A2(
	$elm$parser$Parser$andThen,
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$valueHelper,
	A2(
		$elm$parser$Parser$map,
		function (b) {
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
		},
		$elm$parser$Parser$getChompedString(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
				$elm$core$Basics$eq(
					_Utils_chr(':'))))));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$declarationLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				function (b) {
					return $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Property),
								b),
							revTokens));
				},
				$elm$parser$Parser$getChompedString(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isPropertyChar))),
				A2(
				$elm$parser$Parser$map,
				function (b) {
					return $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b),
							revTokens));
				},
				$elm$parser$Parser$getChompedString(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
						function (c) {
							return _Utils_eq(
								c,
								_Utils_chr(';')) || _Utils_eq(
								c,
								_Utils_chr('/'));
						}))),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$value),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$declarationBlockHelper = function (opener) {
	return A2(
		$elm$parser$Parser$loop,
		_List_fromArray(
			[opener]),
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$declarationLoop);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$declarationBlock = A2(
	$elm$parser$Parser$andThen,
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$declarationBlockHelper,
	A2(
		$elm$parser$Parser$map,
		function (b) {
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
		},
		$elm$parser$Parser$getChompedString(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
				function (c) {
					return _Utils_eq(
						c,
						_Utils_chr('{'));
				}))));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Selector = function (a) {
	return {$: 'Selector', a: a};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AttributeName = {$: 'AttributeName'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AttributeSelector = function (a) {
	return {$: 'AttributeSelector', a: a};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attSelOperatorCharSet = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr('='),
			_Utils_chr('~'),
			_Utils_chr('|'),
			_Utils_chr('^'),
			_Utils_chr('$'),
			_Utils_chr('*')
		]));
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$core$Set$union = F2(
	function (_v0, _v1) {
		var dict1 = _v0.a;
		var dict2 = _v1.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$union, dict1, dict2));
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$whitespaceCharSet = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr(' '),
			_Utils_chr('\t'),
			_Utils_chr('\n')
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attSelNameInvalidCharSet = A2(
	$elm$core$Set$insert,
	_Utils_chr(']'),
	A2($elm$core$Set$union, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attSelOperatorCharSet, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$whitespaceCharSet));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attributeName = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Selector(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AttributeSelector($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AttributeName))),
			b);
	},
	$elm$parser$Parser$getChompedString(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
			function (c) {
				return !A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attSelNameInvalidCharSet);
			})));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AttributeOperator = {$: 'AttributeOperator'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attributeOperator = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Selector(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AttributeSelector($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AttributeOperator))),
			b);
	},
	$elm$parser$Parser$getChompedString(
		$elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$symbol('~='),
					$elm$parser$Parser$symbol('|='),
					$elm$parser$Parser$symbol('^='),
					$elm$parser$Parser$symbol('$='),
					$elm$parser$Parser$symbol('*='),
					$elm$parser$Parser$symbol('=')
				]))));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AttributeValue = {$: 'AttributeValue'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attributeValue = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Done,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$stringLiteral(revTokens)),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Done,
				A2(
					$elm$parser$Parser$map,
					function (b) {
						return A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Selector(
										$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AttributeSelector($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$AttributeValue))),
								b),
							revTokens);
					},
					$elm$parser$Parser$getChompedString(
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
							function (c) {
								return (!_Utils_eq(
									c,
									_Utils_chr(']'))) && (!$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c));
							})))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attributeSelectorLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attributeName),
				A2(
				$elm$parser$Parser$andThen,
				function (operator) {
					return A2(
						$elm$parser$Parser$map,
						function (n) {
							return $elm$parser$Parser$Loop(
								_Utils_ap(n, revTokens));
						},
						A2(
							$elm$parser$Parser$loop,
							_List_fromArray(
								[operator]),
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attributeValue));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attributeOperator),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attributeSelector = A2(
	$elm$parser$Parser$andThen,
	function (opener) {
		return A2(
			$elm$parser$Parser$loop,
			_List_fromArray(
				[opener]),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attributeSelectorLoop);
	},
	A2(
		$elm$parser$Parser$map,
		$elm$core$Basics$always(
			_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, '[')),
		$elm$parser$Parser$symbol('[')));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Class = {$: 'Class'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$class = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Class, b);
	},
	$elm$parser$Parser$getChompedString(
		A2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isSelectorNameChar,
			$elm$parser$Parser$symbol('.'))));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Combinator = {$: 'Combinator'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$combinator = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Combinator, b);
	},
	$elm$parser$Parser$getChompedString(
		$elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$symbol('+'),
					$elm$parser$Parser$symbol('~'),
					$elm$parser$Parser$symbol('>')
				]))));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Element = {$: 'Element'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$element = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Element, b);
	},
	$elm$parser$Parser$getChompedString(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isSelectorNameChar)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Id = {$: 'Id'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$id = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Id, b);
	},
	$elm$parser$Parser$getChompedString(
		A2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isSelectorNameChar,
			$elm$parser$Parser$symbol('#'))));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$PseudoClass = {$: 'PseudoClass'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$pseudoClass = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$PseudoClass, b);
	},
	$elm$parser$Parser$getChompedString(
		A2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isSelectorNameChar,
			$elm$parser$Parser$symbol(':'))));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$PseudoElement = {$: 'PseudoElement'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$pseudoElement = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$PseudoElement, b);
	},
	$elm$parser$Parser$getChompedString(
		A2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$isSelectorNameChar,
			$elm$parser$Parser$symbol('::'))));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Universal = {$: 'Universal'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$universal = A2(
	$elm$parser$Parser$map,
	$elm$core$Basics$always(
		_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Universal, '*')),
	$elm$parser$Parser$symbol('*'));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$selector = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$map,
			function (_v0) {
				var n = _v0.a;
				var s = _v0.b;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$Selector(n)),
						s)
					]);
			},
			$elm$parser$Parser$oneOf(
				_List_fromArray(
					[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$id, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$class, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$element, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$universal, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$combinator, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$pseudoElement, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$pseudoClass]))),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attributeSelector
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$mainLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$atRule),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$selector),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$declarationBlock),
				A2(
				$elm$parser$Parser$map,
				function (b) {
					return $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b),
							revTokens));
				},
				$elm$parser$Parser$getChompedString(
					$elm$parser$Parser$chompIf(
						$elm$core$Basics$always(true)))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$toRevTokens = A2($elm$parser$Parser$loop, _List_Nil, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$mainLoop);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$toLines = A2(
	$elm$core$Basics$composeR,
	$elm$parser$Parser$run($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$toRevTokens),
	$elm$core$Result$map(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLines($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$syntaxToStyle)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$css = A2(
	$elm$core$Basics$composeR,
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$toLines,
	$elm$core$Result$map($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$HCode));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$inlineComment = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _List_fromArray(
			[
				_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Comment, b)
			]);
	},
	$elm$parser$Parser$getChompedString(
		A2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak),
			$elm$parser$Parser$symbol('--'))));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreakList = A2(
	$elm$parser$Parser$map,
	function (_v0) {
		return _List_fromArray(
			[
				_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak, '\n')
			]);
	},
	$elm$parser$Parser$symbol('\n'));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$multilineComment = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	{
		defaultMap: function (b) {
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Comment, b);
		},
		end: '-}',
		innerParsers: _List_fromArray(
			[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreakList]),
		isNestable: true,
		isNotRelevant: function (c) {
			return !$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c);
		},
		start: '{-'
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$comment = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$inlineComment, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$multilineComment]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$BasicSymbol = {$: 'BasicSymbol'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Capitalized = {$: 'Capitalized'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$GroupSymbol = {$: 'GroupSymbol'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Keyword = {$: 'Keyword'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Number = {$: 'Number'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$basicSymbols = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr('|'),
			_Utils_chr('.'),
			_Utils_chr('='),
			_Utils_chr('\\'),
			_Utils_chr('/'),
			_Utils_chr('('),
			_Utils_chr(')'),
			_Utils_chr('-'),
			_Utils_chr('>'),
			_Utils_chr('<'),
			_Utils_chr(':'),
			_Utils_chr('+'),
			_Utils_chr('!'),
			_Utils_chr('$'),
			_Utils_chr('%'),
			_Utils_chr('&'),
			_Utils_chr('*')
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isBasicSymbol = function (c) {
	return A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$basicSymbols);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$basicSymbol = $elm$parser$Parser$getChompedString(
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isBasicSymbol));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$groupSymbols = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr(','),
			_Utils_chr('['),
			_Utils_chr(']'),
			_Utils_chr('{'),
			_Utils_chr('}')
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isGroupSymbol = function (c) {
	return A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$groupSymbols);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isStringLiteralChar = function (c) {
	return _Utils_eq(
		c,
		_Utils_chr('\"')) || _Utils_eq(
		c,
		_Utils_chr('\''));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isVariableChar = function (c) {
	return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isBasicSymbol(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isGroupSymbol(c) || $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isStringLiteralChar(c))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$capitalized = $elm$parser$Parser$getChompedString(
	A2(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isVariableChar,
		$elm$parser$Parser$chompIf($elm$core$Char$isUpper)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$groupSymbol = $elm$parser$Parser$getChompedString(
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isGroupSymbol));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Function = {$: 'Function'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$infixSet = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr('+'),
			_Utils_chr('-'),
			_Utils_chr('/'),
			_Utils_chr('*'),
			_Utils_chr('='),
			_Utils_chr('.'),
			_Utils_chr('$'),
			_Utils_chr('<'),
			_Utils_chr('>'),
			_Utils_chr(':'),
			_Utils_chr('&'),
			_Utils_chr('|'),
			_Utils_chr('^'),
			_Utils_chr('?'),
			_Utils_chr('%'),
			_Utils_chr('#'),
			_Utils_chr('@'),
			_Utils_chr('~'),
			_Utils_chr('!'),
			_Utils_chr(',')
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isInfixChar = function (c) {
	return A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$infixSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$infixParser = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Function),
			b);
	},
	$elm$parser$Parser$getChompedString(
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(_Utils_Tuple0),
					$elm$parser$Parser$backtrackable(
						$elm$parser$Parser$symbol('('))),
				$elm$parser$Parser$backtrackable(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isInfixChar))),
			$elm$parser$Parser$backtrackable(
				$elm$parser$Parser$symbol(')')))));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$keywordSet = $elm$core$Set$fromList(
	_List_fromArray(
		['as', 'where', 'let', 'in', 'if', 'else', 'then', 'case', 'of', 'type', 'alias']));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isKeyword = function (str) {
	return A2($elm$core$Set$member, str, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$keywordSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$variable = $elm$parser$Parser$getChompedString(
	A2(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isVariableChar,
		$elm$parser$Parser$chompIf($elm$core$Char$isLower)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$weirdText = $elm$parser$Parser$getChompedString(
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isVariableChar));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBodyContent = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Number),
					b);
			},
			$elm$parser$Parser$getChompedString($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$number)),
			A2(
			$elm$parser$Parser$map,
			$elm$core$Basics$always(
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Capitalized),
					'()')),
			$elm$parser$Parser$symbol('()')),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$infixParser,
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$BasicSymbol),
					b);
			},
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$basicSymbol),
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$GroupSymbol),
					b);
			},
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$groupSymbol),
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Capitalized),
					b);
			},
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$capitalized),
			A2(
			$elm$parser$Parser$map,
			function (n) {
				return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isKeyword(n) ? _Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Keyword),
					n) : _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, n);
			},
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$variable),
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
			},
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$weirdText)
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$String = {$: 'String'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$elmEscapable = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _List_fromArray(
			[
				_Utils_Tuple2(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Capitalized),
				b)
			]);
	},
	$elm$parser$Parser$getChompedString($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$escapable));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringDelimiter = {
	defaultMap: function (b) {
		return _Utils_Tuple2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$String),
			b);
	},
	end: '\"',
	innerParsers: _List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreakList, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$elmEscapable]),
	isNestable: false,
	isNotRelevant: function (c) {
		return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c) || $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapable(c));
	},
	start: '\"'
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$doubleQuote = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringDelimiter);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$quote = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	_Utils_update(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringDelimiter,
		{end: '\'', start: '\''}));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$tripleDoubleQuote = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	_Utils_update(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringDelimiter,
		{end: '\"\"\"', start: '\"\"\"'}));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringLiteral = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$tripleDoubleQuote, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$doubleQuote, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$quote]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreak = A2(
	$elm$parser$Parser$map,
	function (_v0) {
		return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak, '\n');
	},
	$elm$parser$Parser$symbol('\n'));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$space = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
	},
	$elm$parser$Parser$getChompedString(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isSpace)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$checkContext = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$space),
				A2(
				$elm$parser$Parser$andThen,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$checkContext,
				A2(
					$elm$parser$Parser$map,
					function (n) {
						return A2($elm$core$List$cons, n, revTokens);
					},
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreak)),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$comment)
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				function (ns) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(ns, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringLiteral),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBodyContent),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigIsNotRelevant = function (c) {
	return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c) || (_Utils_eq(
		c,
		_Utils_chr('(')) || (_Utils_eq(
		c,
		_Utils_chr(')')) || (_Utils_eq(
		c,
		_Utils_chr('-')) || _Utils_eq(
		c,
		_Utils_chr(','))))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigContentHelp = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$map,
			$elm$core$Basics$always(
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$TypeSignature),
					'()')),
			$elm$parser$Parser$symbol('()')),
			A2(
			$elm$parser$Parser$map,
			$elm$core$Basics$always(
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$BasicSymbol),
					'->')),
			$elm$parser$Parser$symbol('->')),
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
			},
			$elm$parser$Parser$getChompedString(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
					function (c) {
						return _Utils_eq(
							c,
							_Utils_chr('(')) || (_Utils_eq(
							c,
							_Utils_chr(')')) || (_Utils_eq(
							c,
							_Utils_chr('-')) || _Utils_eq(
							c,
							_Utils_chr(','))));
					}))),
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$TypeSignature),
					b);
			},
			$elm$parser$Parser$getChompedString(
				A2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigIsNotRelevant,
					$elm$parser$Parser$chompIf($elm$core$Char$isUpper)))),
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
			},
			$elm$parser$Parser$getChompedString(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigIsNotRelevant)))
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigContent = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigContentHelp),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionSignature = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Done,
				A2(
					$elm$parser$Parser$andThen,
					function (ns) {
						return A2($elm$parser$Parser$loop, ns, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigContent);
					},
					A2(
						$elm$parser$Parser$map,
						$elm$core$Basics$always(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$BasicSymbol),
									':'),
								revTokens)),
						$elm$parser$Parser$symbol(':')))),
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Done,
				A2($elm$parser$Parser$loop, revTokens, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody)),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isCommentChar = function (c) {
	return _Utils_eq(
		c,
		_Utils_chr('-')) || _Utils_eq(
		c,
		_Utils_chr('{'));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$commentChar = $elm$parser$Parser$getChompedString(
	$elm$parser$Parser$chompIf($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isCommentChar));
var $elm$parser$Parser$ExpectingKeyword = function (a) {
	return {$: 'ExpectingKeyword', a: a};
};
var $elm$parser$Parser$Advanced$keyword = function (_v0) {
	var kwd = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(kwd);
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$isSubString, kwd, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return (_Utils_eq(newOffset, -1) || (0 <= A3(
				$elm$parser$Parser$Advanced$isSubChar,
				function (c) {
					return $elm$core$Char$isAlphaNum(c) || _Utils_eq(
						c,
						_Utils_chr('_'));
				},
				newOffset,
				s.src))) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				$elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$keyword = function (kwd) {
	return $elm$parser$Parser$Advanced$keyword(
		A2(
			$elm$parser$Parser$Advanced$Token,
			kwd,
			$elm$parser$Parser$ExpectingKeyword(kwd)));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecIsNotRelevant = function (c) {
	return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isCommentChar(c) || _Utils_eq(
		c,
		_Utils_chr('('))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mdpIsNotRelevant = function (c) {
	return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isCommentChar(c) || (_Utils_eq(
		c,
		_Utils_chr('(')) || (_Utils_eq(
		c,
		_Utils_chr(')')) || (_Utils_eq(
		c,
		_Utils_chr(',')) || _Utils_eq(
		c,
		_Utils_chr('.')))))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mdpnIsSpecialChar = function (c) {
	return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isCommentChar(c) || (_Utils_eq(
		c,
		_Utils_chr('(')) || _Utils_eq(
		c,
		_Utils_chr(')'))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$checkContextNested = function (_v1) {
	var nestLevel = _v1.a;
	var revTokens = _v1.b;
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStepNested(
				_Utils_Tuple2(nestLevel, revTokens)),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStepNested = function (_v0) {
	var nestLevel = _v0.a;
	var revTokens = _v0.b;
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_Tuple2(
							nestLevel,
							A2($elm$core$List$cons, n, revTokens)));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$space),
				A2(
				$elm$parser$Parser$andThen,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$checkContextNested,
				A2(
					$elm$parser$Parser$map,
					function (n) {
						return _Utils_Tuple2(
							nestLevel,
							A2($elm$core$List$cons, n, revTokens));
					},
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreak)),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_Tuple2(
							nestLevel,
							_Utils_ap(n, revTokens)));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$comment)
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecParNest = function (_v0) {
	var nestLevel = _v0.a;
	var revTokens = _v0.b;
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStepNested(
				_Utils_Tuple2(nestLevel, revTokens)),
				A2(
				$elm$parser$Parser$map,
				function (ns) {
					return $elm$parser$Parser$Loop(
						_Utils_Tuple2(nestLevel + 1, ns));
				},
				A2(
					$elm$parser$Parser$map,
					$elm$core$Basics$always(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, '('),
							revTokens)),
					$elm$parser$Parser$symbol('('))),
				A2(
				$elm$parser$Parser$map,
				function (ns) {
					return (!nestLevel) ? $elm$parser$Parser$Done(ns) : $elm$parser$Parser$Loop(
						_Utils_Tuple2(nestLevel - 1, ns));
				},
				A2(
					$elm$parser$Parser$map,
					$elm$core$Basics$always(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, ')'),
							revTokens)),
					$elm$parser$Parser$symbol(')'))),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_Tuple2(
							nestLevel,
							A2($elm$core$List$cons, n, revTokens)));
				},
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
							},
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$commentChar),
							A2(
							$elm$parser$Parser$map,
							function (s) {
								return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, s);
							},
							$elm$parser$Parser$getChompedString(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
									A2($elm$core$Basics$composeL, $elm$core$Basics$not, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mdpnIsSpecialChar))))
						]))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecParentheses = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Done,
				A2(
					$elm$parser$Parser$map,
					$elm$core$Basics$always(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, ')'),
							revTokens)),
					$elm$parser$Parser$symbol(')'))),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$infixParser,
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
							},
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$commentChar),
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
							},
							$elm$parser$Parser$getChompedString(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
									function (c) {
										return _Utils_eq(
											c,
											_Utils_chr(',')) || _Utils_eq(
											c,
											_Utils_chr('.'));
									}))),
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$TypeSignature),
									b);
							},
							$elm$parser$Parser$getChompedString(
								A2(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mdpIsNotRelevant,
									$elm$parser$Parser$chompIf($elm$core$Char$isUpper)))),
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Function),
									b);
							},
							$elm$parser$Parser$getChompedString(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mdpIsNotRelevant)))
						]))),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					function (n) {
						return A2(
							$elm$parser$Parser$loop,
							_Utils_Tuple2(0, n),
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecParNest);
					},
					A2(
						$elm$parser$Parser$map,
						$elm$core$Basics$always(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, '('),
								revTokens)),
						$elm$parser$Parser$symbol('(')))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$moduleDeclaration = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					function (n) {
						return A2($elm$parser$Parser$loop, n, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecParentheses);
					},
					A2(
						$elm$parser$Parser$map,
						$elm$core$Basics$always(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, '('),
								revTokens)),
						$elm$parser$Parser$symbol('(')))),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
							},
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$commentChar),
							A2(
							$elm$parser$Parser$map,
							$elm$core$Basics$always(
								_Utils_Tuple2(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Keyword),
									'exposing')),
							$elm$parser$Parser$keyword('exposing')),
							A2(
							$elm$parser$Parser$map,
							$elm$core$Basics$always(
								_Utils_Tuple2(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Keyword),
									'as')),
							$elm$parser$Parser$keyword('as')),
							A2(
							$elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
							},
							$elm$parser$Parser$getChompedString(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecIsNotRelevant)))
						]))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$portDeclarationHelp = F2(
	function (revTokens, str) {
		return (str === 'module') ? A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Keyword),
					str),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$moduleDeclaration) : A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Function),
					str),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionSignature);
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$portDeclaration = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Done,
				A2(
					$elm$parser$Parser$andThen,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$portDeclarationHelp(revTokens),
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$variable)),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Done,
				A2($elm$parser$Parser$loop, revTokens, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody)),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineStartVariable = F2(
	function (revTokens, n) {
		return ((n === 'module') || (n === 'import')) ? A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Keyword),
					n),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$moduleDeclaration) : ((n === 'port') ? A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Keyword),
					n),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$portDeclaration) : ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isKeyword(n) ? A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Keyword),
					n),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody) : A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Function),
					n),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionSignature)));
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mainLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$space),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreak),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$comment),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineStartVariable(revTokens),
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$variable)),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					function (s) {
						return A2(
							$elm$parser$Parser$loop,
							_Utils_ap(s, revTokens),
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody);
					},
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringLiteral)),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					function (s) {
						return A2(
							$elm$parser$Parser$loop,
							A2($elm$core$List$cons, s, revTokens),
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody);
					},
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBodyContent)),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$toRevTokens = A2($elm$parser$Parser$loop, _List_Nil, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mainLoop);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$toLines = A2(
	$elm$core$Basics$composeR,
	$elm$parser$Parser$run($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$toRevTokens),
	$elm$core$Result$map(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLines($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$syntaxToStyle)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$elm = A2(
	$elm$core$Basics$composeR,
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$toLines,
	$elm$core$Result$map($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$HCode));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$groupSet = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr('{'),
			_Utils_chr('}'),
			_Utils_chr('('),
			_Utils_chr(')'),
			_Utils_chr('['),
			_Utils_chr(']'),
			_Utils_chr(','),
			_Utils_chr(';')
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isGroupChar = function (c) {
	return A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$groupSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$groupChar = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
	},
	$elm$parser$Parser$getChompedString(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isGroupChar)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isCommentChar = function (c) {
	return _Utils_eq(
		c,
		_Utils_chr('/'));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$operatorSet = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr('+'),
			_Utils_chr('-'),
			_Utils_chr('*'),
			_Utils_chr('/'),
			_Utils_chr('='),
			_Utils_chr('!'),
			_Utils_chr('<'),
			_Utils_chr('>'),
			_Utils_chr('&'),
			_Utils_chr('|'),
			_Utils_chr('?'),
			_Utils_chr('^'),
			_Utils_chr(':'),
			_Utils_chr('~'),
			_Utils_chr('%'),
			_Utils_chr('.')
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$punctuactorSet = A2($elm$core$Set$union, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$operatorSet, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$groupSet);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isPunctuaction = function (c) {
	return A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$punctuactorSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isStringLiteralChar = function (c) {
	return _Utils_eq(
		c,
		_Utils_chr('\"')) || (_Utils_eq(
		c,
		_Utils_chr('\'')) || _Utils_eq(
		c,
		_Utils_chr('`')));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isIdentifierNameChar = function (c) {
	return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isPunctuaction(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isStringLiteralChar(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isCommentChar(c) || $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$Function = {$: 'Function'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$Keyword = {$: 'Keyword'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$LiteralKeyword = {$: 'LiteralKeyword'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$Param = {$: 'Param'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$inlineComment = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _List_fromArray(
			[
				_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Comment, b)
			]);
	},
	$elm$parser$Parser$getChompedString(
		A2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak),
			$elm$parser$Parser$symbol('//'))));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$lineBreakList = A2(
	$elm$parser$Parser$map,
	function (_v0) {
		return _List_fromArray(
			[
				_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak, '\n')
			]);
	},
	$elm$parser$Parser$symbol('\n'));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$multilineComment = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	{
		defaultMap: function (b) {
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Comment, b);
		},
		end: '*/',
		innerParsers: _List_fromArray(
			[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$lineBreakList]),
		isNestable: false,
		isNotRelevant: function (c) {
			return !$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c);
		},
		start: '/*'
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$comment = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$inlineComment, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$multilineComment]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$whitespaceOrCommentStep = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				function (b) {
					return $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b),
							revTokens));
				},
				$elm$parser$Parser$getChompedString(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isSpace))),
				A2(
				$elm$parser$Parser$map,
				function (ns) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(ns, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$lineBreakList),
				A2(
				$elm$parser$Parser$map,
				function (ns) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(ns, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$comment)
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$classExtendsLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				function (b) {
					return $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$ClassExtends),
								b),
							revTokens));
				},
				$elm$parser$Parser$getChompedString(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isIdentifierNameChar))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$classDeclarationLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$andThen,
				function (n) {
					return (n === 'extends') ? A2(
						$elm$parser$Parser$map,
						$elm$parser$Parser$Loop,
						A2(
							$elm$parser$Parser$loop,
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$Keyword),
									n),
								revTokens),
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$classExtendsLoop)) : $elm$parser$Parser$succeed(
						$elm$parser$Parser$Loop(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$Function),
									n),
								revTokens)));
				},
				$elm$parser$Parser$getChompedString(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isIdentifierNameChar))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$argLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				function (b) {
					return $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$Param),
								b),
							revTokens));
				},
				$elm$parser$Parser$getChompedString(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
						function (c) {
							return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isCommentChar(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c) || (_Utils_eq(
								c,
								_Utils_chr(',')) || _Utils_eq(
								c,
								_Utils_chr(')')))));
						}))),
				A2(
				$elm$parser$Parser$map,
				function (b) {
					return $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b),
							revTokens));
				},
				$elm$parser$Parser$getChompedString(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
						function (c) {
							return _Utils_eq(
								c,
								_Utils_chr('/')) || _Utils_eq(
								c,
								_Utils_chr(','));
						}))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$functionDeclarationLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				function (b) {
					return $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$Function),
								b),
							revTokens));
				},
				$elm$parser$Parser$getChompedString(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isIdentifierNameChar))),
				A2(
				$elm$parser$Parser$map,
				function (_v0) {
					return $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$Keyword),
								'*'),
							revTokens));
				},
				$elm$parser$Parser$symbol('*')),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					function (_v1) {
						return A2(
							$elm$parser$Parser$loop,
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, '('),
								revTokens),
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$argLoop);
					},
					$elm$parser$Parser$symbol('('))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$FunctionEval = {$: 'FunctionEval'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$functionEvalLoop = F3(
	function (identifier, revTokens, thisRevToken) {
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$whitespaceOrCommentStep(thisRevToken),
					A2(
					$elm$parser$Parser$map,
					function (_v0) {
						return $elm$parser$Parser$Done(
							_Utils_ap(
								A2(
									$elm$core$List$cons,
									_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, '('),
									thisRevToken),
								A2(
									$elm$core$List$cons,
									_Utils_Tuple2(
										$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$FunctionEval),
										identifier),
									revTokens)));
					},
					$elm$parser$Parser$symbol('(')),
					$elm$parser$Parser$succeed(
					$elm$parser$Parser$Done(
						_Utils_ap(
							thisRevToken,
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, identifier),
								revTokens))))
				]));
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$declarationKeywordSet = $elm$core$Set$fromList(
	_List_fromArray(
		['var', 'const', 'let']));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isDeclarationKeyword = function (str) {
	return A2($elm$core$Set$member, str, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$declarationKeywordSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$keywordSet = $elm$core$Set$fromList(
	_List_fromArray(
		['break', 'do', 'instanceof', 'typeof', 'case', 'else', 'new', 'catch', 'finally', 'return', 'void', 'continue', 'for', 'switch', 'while', 'debugger', 'this', 'with', 'default', 'if', 'throw', 'delete', 'in', 'try', 'enum', 'extends', 'export', 'import', 'implements', 'private', 'public', 'yield', 'interface', 'package', 'protected']));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isKeyword = function (str) {
	return A2($elm$core$Set$member, str, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$keywordSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$literalKeywordSet = $elm$core$Set$fromList(
	_List_fromArray(
		['true', 'false', 'null', 'undefined', 'NaN', 'Infinity']));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isLiteralKeyword = function (str) {
	return A2($elm$core$Set$member, str, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$literalKeywordSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$keywordParser = F2(
	function (revTokens, n) {
		return ((n === 'function') || (n === 'static')) ? A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$DeclarationKeyword),
					n),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$functionDeclarationLoop) : ((n === 'class') ? A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$DeclarationKeyword),
					n),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$classDeclarationLoop) : (((n === 'this') || (n === 'super')) ? $elm$parser$Parser$succeed(
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$Param),
					n),
				revTokens)) : ((n === 'constructor') ? A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$Function),
					n),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$functionDeclarationLoop) : ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isKeyword(n) ? $elm$parser$Parser$succeed(
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$Keyword),
					n),
				revTokens)) : ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isDeclarationKeyword(n) ? $elm$parser$Parser$succeed(
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$DeclarationKeyword),
					n),
				revTokens)) : ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isLiteralKeyword(n) ? $elm$parser$Parser$succeed(
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$LiteralKeyword),
					n),
				revTokens)) : A2(
			$elm$parser$Parser$loop,
			_List_Nil,
			A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$functionEvalLoop, n, revTokens))))))));
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$Number = {$: 'Number'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$number = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$Number),
			b);
	},
	$elm$parser$Parser$getChompedString($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$number));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isOperatorChar = function (c) {
	return A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$operatorSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$operatorChar = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$Keyword),
			b);
	},
	$elm$parser$Parser$getChompedString(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isOperatorChar)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$String = {$: 'String'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$jsEscapable = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _List_fromArray(
			[
				_Utils_Tuple2(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$LiteralKeyword),
				b)
			]);
	},
	$elm$parser$Parser$getChompedString($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$escapable));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$quoteDelimiter = {
	defaultMap: function (b) {
		return _Utils_Tuple2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$String),
			b);
	},
	end: '\'',
	innerParsers: _List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$lineBreakList, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$jsEscapable]),
	isNestable: false,
	isNotRelevant: function (c) {
		return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c) || $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapable(c));
	},
	start: '\''
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$doubleQuote = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	_Utils_update(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$quoteDelimiter,
		{end: '\"', start: '\"'}));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$quote = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$quoteDelimiter);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$templateString = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	_Utils_update(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$quoteDelimiter,
		{
			end: '`',
			innerParsers: _List_fromArray(
				[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$lineBreakList, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$jsEscapable]),
			isNotRelevant: function (c) {
				return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c) || $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapable(c));
			},
			start: '`'
		}));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$stringLiteral = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$quote, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$doubleQuote, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$templateString]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$mainLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				function (s) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(s, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$stringLiteral),
				A2(
				$elm$parser$Parser$map,
				function (s) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, s, revTokens));
				},
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$operatorChar, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$groupChar, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$number]))),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$keywordParser(revTokens),
					$elm$parser$Parser$getChompedString(
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$isIdentifierNameChar)))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$toRevTokens = A2($elm$parser$Parser$loop, _List_Nil, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$mainLoop);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$toLines = A2(
	$elm$core$Basics$composeR,
	$elm$parser$Parser$run($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$toRevTokens),
	$elm$core$Result$map(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLines($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$syntaxToStyle)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$javascript = A2(
	$elm$core$Basics$composeR,
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$toLines,
	$elm$core$Result$map($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$HCode));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$syntaxToStyle = function (syntax) {
	switch (syntax.$) {
		case 'String':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style2, 'json-s');
		case 'Escapable':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style1, 'json-e');
		case 'Number':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style1, 'json-n');
		case 'Boolean':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'json-b');
		case 'Null':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3, 'json-null');
		case 'ObjectKey':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4, 'json-k');
		case 'Object':
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Default, 'json-o');
		default:
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Default, 'json-a');
	}
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$Array = {$: 'Array'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$Boolean = {$: 'Boolean'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$Null = {$: 'Null'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$Object = {$: 'Object'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$ObjectKey = {$: 'ObjectKey'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$String = {$: 'String'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$Number = {$: 'Number'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$number = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$Number),
			b);
	},
	$elm$parser$Parser$getChompedString($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$number));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$lineBreak = A2(
	$elm$parser$Parser$map,
	function (_v0) {
		return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak, '\n');
	},
	$elm$parser$Parser$symbol('\n'));
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$Escapable = {$: 'Escapable'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$escapableSet = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr('\"'),
			_Utils_chr('\\'),
			_Utils_chr('/'),
			_Utils_chr('b'),
			_Utils_chr('f'),
			_Utils_chr('n'),
			_Utils_chr('r'),
			_Utils_chr('t'),
			_Utils_chr('u')
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$isEscapableChar = function (c) {
	return A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$escapableSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$escapable = A2(
	$elm$parser$Parser$ignorer,
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed(_Utils_Tuple0),
		$elm$parser$Parser$backtrackable(
			$elm$parser$Parser$symbol('\\'))),
	$elm$parser$Parser$chompIf($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$isEscapableChar));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$stringEscapable = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _List_fromArray(
			[
				_Utils_Tuple2(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$Escapable),
				b)
			]);
	},
	$elm$parser$Parser$getChompedString($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$escapable));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$doubleQuoteDelimiter = function (syntax_) {
	return {
		defaultMap: function (b) {
			return _Utils_Tuple2(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(syntax_),
				b);
		},
		end: '\"',
		innerParsers: _List_fromArray(
			[
				A2($elm$parser$Parser$map, $elm$core$List$singleton, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$lineBreak),
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$stringEscapable
			]),
		isNestable: false,
		isNotRelevant: function (c) {
			return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c) || $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapable(c));
		},
		start: '\"'
	};
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$stringLiteral = F2(
	function (syntax_, revTokens) {
		return A2(
			$elm$parser$Parser$map,
			function (n) {
				return _Utils_ap(n, revTokens);
			},
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$doubleQuoteDelimiter(syntax_)));
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$space = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
	},
	$elm$parser$Parser$getChompedString(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isSpace)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$whitespace = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$space, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$lineBreak]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$arrayLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$whitespace),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				A2(
					$elm$parser$Parser$map,
					function (_v4) {
						return _Utils_Tuple2(
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$Array),
							',');
					},
					$elm$parser$Parser$symbol(','))),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Done(
						A2($elm$core$List$cons, n, revTokens));
				},
				A2(
					$elm$parser$Parser$map,
					function (_v5) {
						return _Utils_Tuple2(
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$Array),
							']');
					},
					$elm$parser$Parser$symbol(']'))),
				A2(
				$elm$parser$Parser$map,
				function (ns) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(ns, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$cyclic$value()),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$objectLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$whitespace),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$stringLiteral, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$ObjectKey, revTokens)),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					function (_v0) {
						var revTokens_ = A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$Object),
								':'),
							revTokens);
						return A2(
							$elm$parser$Parser$map,
							function (ns) {
								return _Utils_ap(ns, revTokens_);
							},
							$elm$parser$Parser$oneOf(
								_List_fromArray(
									[
										A2(
										$elm$parser$Parser$andThen,
										function (ws) {
											return $elm$parser$Parser$oneOf(
												_List_fromArray(
													[
														A2(
														$elm$parser$Parser$map,
														function (v) {
															return _Utils_ap(
																v,
																_List_fromArray(
																	[ws]));
														},
														$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$cyclic$value()),
														$elm$parser$Parser$succeed(
														_List_fromArray(
															[ws]))
													]));
										},
										$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$whitespace),
										$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$cyclic$value(),
										$elm$parser$Parser$succeed(_List_Nil)
									])));
					},
					$elm$parser$Parser$symbol(':'))),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				A2(
					$elm$parser$Parser$map,
					function (_v1) {
						return _Utils_Tuple2(
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$Object),
							',');
					},
					$elm$parser$Parser$symbol(','))),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Done(
						A2($elm$core$List$cons, n, revTokens));
				},
				A2(
					$elm$parser$Parser$map,
					function (_v2) {
						return _Utils_Tuple2(
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$Object),
							'}');
					},
					$elm$parser$Parser$symbol('}'))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
function $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$cyclic$value() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$stringLiteral, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$String, _List_Nil),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return _List_fromArray(
						[n]);
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$number),
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$cyclic$object(),
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$cyclic$array(),
				A2(
				$elm$parser$Parser$map,
				function (s) {
					return _List_fromArray(
						[
							_Utils_Tuple2(
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$Null),
							s)
						]);
				},
				$elm$parser$Parser$getChompedString(
					$elm$parser$Parser$keyword('null'))),
				A2(
				$elm$parser$Parser$map,
				function (s) {
					return _List_fromArray(
						[
							_Utils_Tuple2(
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$Boolean),
							s)
						]);
				},
				$elm$parser$Parser$getChompedString(
					$elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								$elm$parser$Parser$keyword('true'),
								$elm$parser$Parser$keyword('false')
							]))))
			]));
}
function $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$cyclic$array() {
	return A2(
		$elm$parser$Parser$andThen,
		function (_v6) {
			return A2(
				$elm$parser$Parser$loop,
				_List_fromArray(
					[
						_Utils_Tuple2(
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$Array),
						'[')
					]),
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$arrayLoop);
		},
		$elm$parser$Parser$symbol('['));
}
function $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$cyclic$object() {
	return A2(
		$elm$parser$Parser$andThen,
		function (_v3) {
			return A2(
				$elm$parser$Parser$loop,
				_List_fromArray(
					[
						_Utils_Tuple2(
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$Object),
						'{')
					]),
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$objectLoop);
		},
		$elm$parser$Parser$symbol('{'));
}
try {
	var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$value = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$cyclic$value();
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$cyclic$value = function () {
		return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$value;
	};
	var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$array = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$cyclic$array();
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$cyclic$array = function () {
		return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$array;
	};
	var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$object = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$cyclic$object();
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$cyclic$object = function () {
		return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$object;
	};
} catch ($) {
	throw 'Some top-level definitions from `SyntaxHighlight.Language.Json` are causing infinite recursion:\n\n  ┌─────┐\n  │    value\n  │     ↓\n  │    array\n  │     ↓\n  │    arrayLoop\n  │     ↓\n  │    object\n  │     ↓\n  │    objectLoop\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$mainLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$whitespace),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$object),
				A2(
				$elm$parser$Parser$map,
				function (b) {
					return $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b),
							revTokens));
				},
				$elm$parser$Parser$getChompedString(
					$elm$parser$Parser$chompIf(
						$elm$core$Basics$always(true)))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$toRevTokens = A2($elm$parser$Parser$loop, _List_Nil, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$mainLoop);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$toLines = A2(
	$elm$core$Basics$composeR,
	$elm$parser$Parser$run($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$toRevTokens),
	$elm$core$Result$map(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLines($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$syntaxToStyle)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$json = A2(
	$elm$core$Basics$composeR,
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Json$toLines,
	$elm$core$Result$map($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$HCode));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$groupSet = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr('{'),
			_Utils_chr('}'),
			_Utils_chr('('),
			_Utils_chr(')'),
			_Utils_chr('['),
			_Utils_chr(']'),
			_Utils_chr(','),
			_Utils_chr(';')
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$isGroupChar = function (c) {
	return A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$groupSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$groupChar = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
	},
	$elm$parser$Parser$getChompedString(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$isGroupChar)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$isCommentChar = function (c) {
	return _Utils_eq(
		c,
		_Utils_chr('#'));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$operatorSet = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr('+'),
			_Utils_chr('-'),
			_Utils_chr('*'),
			_Utils_chr('/'),
			_Utils_chr('='),
			_Utils_chr('!'),
			_Utils_chr('<'),
			_Utils_chr('>'),
			_Utils_chr('&'),
			_Utils_chr('|'),
			_Utils_chr('?'),
			_Utils_chr('^'),
			_Utils_chr(':'),
			_Utils_chr('~'),
			_Utils_chr('%'),
			_Utils_chr('.')
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$punctuationSet = A2($elm$core$Set$union, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$operatorSet, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$groupSet);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$isPunctuation = function (c) {
	return A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$punctuationSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$isStringLiteralChar = function (c) {
	return _Utils_eq(
		c,
		_Utils_chr('\"')) || _Utils_eq(
		c,
		_Utils_chr('\''));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$isIdentifierNameChar = function (c) {
	return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$isPunctuation(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$isStringLiteralChar(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$isCommentChar(c) || $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$DeclarationKeyword = {$: 'DeclarationKeyword'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$FunctionEval = {$: 'FunctionEval'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$Keyword = {$: 'Keyword'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$LiteralKeyword = {$: 'LiteralKeyword'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$Function = {$: 'Function'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$inlineComment = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _List_fromArray(
			[
				_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Comment, b)
			]);
	},
	$elm$parser$Parser$getChompedString(
		A2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak),
			$elm$parser$Parser$symbol('#'))));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$lineBreak = A2(
	$elm$parser$Parser$map,
	function (_v0) {
		return _List_fromArray(
			[
				_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak, '\n')
			]);
	},
	$elm$parser$Parser$symbol('\n'));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$multilineComment = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	{
		defaultMap: function (b) {
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Comment, b);
		},
		end: '\'\'\'',
		innerParsers: _List_fromArray(
			[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$lineBreak]),
		isNestable: false,
		isNotRelevant: function (c) {
			return !$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c);
		},
		start: '\'\'\''
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$comment = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$inlineComment, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$multilineComment]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$whitespaceOrCommentStep = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				function (s) {
					return $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, s),
							revTokens));
				},
				$elm$parser$Parser$getChompedString(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isSpace))),
				A2(
				$elm$parser$Parser$map,
				function (ns) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(ns, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$lineBreak),
				A2(
				$elm$parser$Parser$map,
				function (ns) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(ns, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$comment)
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$classDeclarationLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				function (b) {
					return $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$Function),
								b),
							revTokens));
				},
				$elm$parser$Parser$getChompedString(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$isIdentifierNameChar))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$Param = {$: 'Param'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$argLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				function (b) {
					return $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$Param),
								b),
							revTokens));
				},
				$elm$parser$Parser$getChompedString(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
						function (c) {
							return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$isCommentChar(c) || ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c) || (_Utils_eq(
								c,
								_Utils_chr(',')) || _Utils_eq(
								c,
								_Utils_chr(')')))));
						}))),
				A2(
				$elm$parser$Parser$map,
				function (b) {
					return $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b),
							revTokens));
				},
				$elm$parser$Parser$getChompedString(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
						function (c) {
							return _Utils_eq(
								c,
								_Utils_chr('/')) || _Utils_eq(
								c,
								_Utils_chr(','));
						}))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$functionDeclarationLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				function (b) {
					return $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$Function),
								b),
							revTokens));
				},
				$elm$parser$Parser$getChompedString(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$isIdentifierNameChar))),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					function (_v0) {
						return A2(
							$elm$parser$Parser$loop,
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, '('),
								revTokens),
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$argLoop);
					},
					$elm$parser$Parser$symbol('('))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$functionEvalLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				function (_v0) {
					return $elm$parser$Parser$Done(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, '('),
							revTokens));
				},
				$elm$parser$Parser$symbol('(')),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$keywordSet = $elm$core$Set$fromList(
	_List_fromArray(
		['finally', 'is', 'return', 'continue', 'for', 'lambda', 'try', 'from', 'nonlocal', 'while', 'and', 'del', 'global', 'not', 'with', 'as', 'elif', 'if', 'or', 'yield', 'assert', 'else', 'import', 'pass', 'break', 'except', 'in', 'raise']));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$isKeyword = function (str) {
	return A2($elm$core$Set$member, str, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$keywordSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$literalKeywordSet = $elm$core$Set$fromList(
	_List_fromArray(
		['True', 'False', 'None']));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$isLiteralKeyword = function (str) {
	return A2($elm$core$Set$member, str, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$literalKeywordSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$keywordParser = F2(
	function (revTokens, n) {
		return (n === 'def') ? A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$DeclarationKeyword),
					n),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$functionDeclarationLoop) : ((n === 'class') ? A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$DeclarationKeyword),
					n),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$classDeclarationLoop) : ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$isKeyword(n) ? $elm$parser$Parser$succeed(
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$Keyword),
					n),
				revTokens)) : ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$isLiteralKeyword(n) ? $elm$parser$Parser$succeed(
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$LiteralKeyword),
					n),
				revTokens)) : A2(
			$elm$parser$Parser$loop,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$FunctionEval),
					n),
				revTokens),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$functionEvalLoop))));
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$Number = {$: 'Number'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$number = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$Number),
			b);
	},
	$elm$parser$Parser$getChompedString($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$number));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$isOperatorChar = function (c) {
	return A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$operatorSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$operatorChar = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$Keyword),
			b);
	},
	$elm$parser$Parser$getChompedString(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$isOperatorChar)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$String = {$: 'String'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$quoteDelimiter = {
	defaultMap: function (b) {
		return _Utils_Tuple2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$String),
			b);
	},
	end: '\'',
	innerParsers: _List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$lineBreak]),
	isNestable: false,
	isNotRelevant: function (c) {
		return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c) || $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapable(c));
	},
	start: '\''
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$doubleQuote = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	_Utils_update(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$quoteDelimiter,
		{end: '\"', start: '\"'}));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$quote = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$quoteDelimiter);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$stringLiteral = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$quote, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$doubleQuote]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$mainLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				function (s) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(s, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$stringLiteral),
				A2(
				$elm$parser$Parser$map,
				function (s) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, s, revTokens));
				},
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$operatorChar, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$groupChar, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$number]))),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$keywordParser(revTokens),
					$elm$parser$Parser$getChompedString(
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$isIdentifierNameChar)))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$toRevTokens = A2($elm$parser$Parser$loop, _List_Nil, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$mainLoop);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$toLines = A2(
	$elm$core$Basics$composeR,
	$elm$parser$Parser$run($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$toRevTokens),
	$elm$core$Result$map(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLines($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$syntaxToStyle)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$python = A2(
	$elm$core$Basics$composeR,
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$toLines,
	$elm$core$Result$map($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$HCode));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$inlineComment = $elm$parser$Parser$oneOf(
	A2(
		$elm$core$List$map,
		A2(
			$elm$core$Basics$composeR,
			$elm$parser$Parser$symbol,
			A2(
				$elm$core$Basics$composeR,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile(
					A2($elm$core$Basics$composeL, $elm$core$Basics$not, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak)),
				A2(
					$elm$core$Basics$composeR,
					$elm$parser$Parser$getChompedString,
					$elm$parser$Parser$map(
						function (b) {
							return _List_fromArray(
								[
									_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Comment, b)
								]);
						})))),
		_List_fromArray(
			['--', '$', '#'])));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$lineBreakList = A2(
	$elm$parser$Parser$map,
	function (_v0) {
		return _List_fromArray(
			[
				_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak, '\n')
			]);
	},
	$elm$parser$Parser$symbol('\n'));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$multilineComment = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	{
		defaultMap: function (b) {
			return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Comment, b);
		},
		end: '*/',
		innerParsers: _List_fromArray(
			[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$lineBreakList]),
		isNestable: false,
		isNotRelevant: A2($elm$core$Basics$composeL, $elm$core$Basics$not, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak),
		start: '/*'
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$comment = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$inlineComment, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$multilineComment]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$punctuatorSet = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr(';'),
			_Utils_chr('['),
			_Utils_chr(']'),
			_Utils_chr('('),
			_Utils_chr(')'),
			_Utils_chr('`'),
			_Utils_chr(','),
			_Utils_chr('.')
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$isPunctuationChar = function (c) {
	return A2($elm$core$Set$member, c, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$punctuatorSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$isIdentifierChar = function (c) {
	return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c) || $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$isPunctuationChar(c));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$Function = {$: 'Function'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$Keyword = {$: 'Keyword'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$Literal = {$: 'Literal'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$Operator = {$: 'Operator'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$functionSet = $elm$core$Set$fromList(
	_List_fromArray(
		['AVG', 'COUNT', 'FIRST', 'FORMAT', 'LAST', 'LCASE', 'LEN', 'MAX', 'MID', 'MIN', 'MOD', 'NOW', 'ROUND', 'SUM', 'UCASE']));
var $elm$core$String$toUpper = _String_toUpper;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$isFunction = function (str) {
	return A2(
		$elm$core$Set$member,
		$elm$core$String$toUpper(str),
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$functionSet);
};
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {index: index, match: match, number: number, submatches: submatches};
	});
var $elm$regex$Regex$contains = _Regex_contains;
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$never = _Regex_never;
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$keywordPattern = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	A2(
		$elm$regex$Regex$fromStringWith,
		{caseInsensitive: true, multiline: false},
		'^(ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)$'));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$isKeyword = $elm$regex$Regex$contains($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$keywordPattern);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$literalSet = $elm$core$Set$fromList(
	_List_fromArray(
		['TRUE', 'FALSE', 'NULL']));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$isLiteral = function (str) {
	return A2(
		$elm$core$Set$member,
		$elm$core$String$toUpper(str),
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$literalSet);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$operatorPattern = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	A2(
		$elm$regex$Regex$fromStringWith,
		{caseInsensitive: true, multiline: false},
		'^([-+*\\/=%^~]|&&?|\\|\\|?|!=?|<(?:=>?|<|>)?|>[>=]?|AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)$'));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$isOperator = $elm$regex$Regex$contains($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$operatorPattern);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$keywordParser = F2(
	function (revTokens, s) {
		return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$isOperator(s) ? $elm$parser$Parser$succeed(
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$Operator),
					s),
				revTokens)) : ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$isFunction(s) ? $elm$parser$Parser$succeed(
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$Function),
					s),
				revTokens)) : ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$isKeyword(s) ? $elm$parser$Parser$succeed(
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$Keyword),
					s),
				revTokens)) : ($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$isLiteral(s) ? $elm$parser$Parser$succeed(
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$Literal),
					s),
				revTokens)) : $elm$parser$Parser$succeed(
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, s),
				revTokens)))));
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$lineBreak = A2(
	$elm$parser$Parser$map,
	function (_v0) {
		return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak, '\n');
	},
	$elm$parser$Parser$symbol('\n'));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$Number = {$: 'Number'};
var $elm$core$Char$isHexDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return ((48 <= code) && (code <= 57)) || (((65 <= code) && (code <= 70)) || ((97 <= code) && (code <= 102)));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$hexNumber = A2(
	$elm$parser$Parser$ignorer,
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed(_Utils_Tuple0),
		$elm$parser$Parser$backtrackable(
			$elm$parser$Parser$symbol('0x'))),
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($elm$core$Char$isHexDigit));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$number = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$Number),
			b);
	},
	$elm$parser$Parser$getChompedString(
		$elm$parser$Parser$oneOf(
			_List_fromArray(
				[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$hexNumber, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$number]))));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$Punctuation = {$: 'Punctuation'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$punctuationChar = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$Punctuation),
			b);
	},
	$elm$parser$Parser$getChompedString(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$isPunctuationChar)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$space = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
	},
	$elm$parser$Parser$getChompedString(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isSpace)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$String = {$: 'String'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$sqlEscapable = A2(
	$elm$parser$Parser$map,
	function (b) {
		return _List_fromArray(
			[
				_Utils_Tuple2(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$Function),
				b)
			]);
	},
	$elm$parser$Parser$getChompedString($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$escapable));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$quoteDelimiter = {
	defaultMap: function (b) {
		return _Utils_Tuple2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$String),
			b);
	},
	end: '\'',
	innerParsers: _List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$lineBreakList, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$sqlEscapable]),
	isNestable: false,
	isNotRelevant: function (c) {
		return !($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c) || $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapable(c));
	},
	start: '\''
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$doubleQuote = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	_Utils_update(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$quoteDelimiter,
		{end: '\"', start: '\"'}));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$quote = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$quoteDelimiter);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$stringLiteral = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$quote, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$doubleQuote]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$checkContext = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$whitespaceOrCommentStep(revTokens),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$whitespaceOrCommentStep = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				function (s) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, s, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$space),
				A2(
				$elm$parser$Parser$andThen,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$checkContext,
				A2(
					$elm$parser$Parser$map,
					function (s) {
						return A2($elm$core$List$cons, s, revTokens);
					},
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$lineBreak)),
				A2(
				$elm$parser$Parser$map,
				function (s) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(s, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$comment)
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$stringBody = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$whitespaceOrCommentStep(revTokens),
				A2(
				$elm$parser$Parser$map,
				function (s) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(s, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$stringLiteral),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$mainLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$space),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$lineBreak),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$punctuationChar),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$number),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$comment),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					function (n) {
						return A2(
							$elm$parser$Parser$loop,
							_Utils_ap(n, revTokens),
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$stringBody);
					},
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$stringLiteral)),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A2(
					$elm$parser$Parser$andThen,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$keywordParser(revTokens),
					$elm$parser$Parser$getChompedString(
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$isIdentifierChar)))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$toRevTokens = A2($elm$parser$Parser$loop, _List_Nil, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$mainLoop);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$toLines = A2(
	$elm$core$Basics$composeR,
	$elm$parser$Parser$run($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$toRevTokens),
	$elm$core$Result$map(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLines($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$syntaxToStyle)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$sql = A2(
	$elm$core$Basics$composeR,
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Sql$toLines,
	$elm$core$Result$map($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$HCode));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$AttributeValue = {$: 'AttributeValue'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$lineBreak = A2(
	$elm$parser$Parser$map,
	function (_v0) {
		return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak, '\n');
	},
	$elm$parser$Parser$symbol('\n'));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$lineBreakList = A2($elm$parser$Parser$map, $elm$core$List$singleton, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$lineBreak);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$doubleQuoteDelimiter = {
	defaultMap: function (b) {
		return _Utils_Tuple2(
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$AttributeValue),
			b);
	},
	end: '\"',
	innerParsers: _List_fromArray(
		[$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$lineBreakList]),
	isNestable: false,
	isNotRelevant: A2($elm$core$Basics$composeL, $elm$core$Basics$not, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak),
	start: '\"'
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$comment = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	_Utils_update(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$doubleQuoteDelimiter,
		{
			defaultMap: function (b) {
				return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Comment, b);
			},
			end: '-->',
			start: '<!--'
		}));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$openTagParser = A2(
	$elm$parser$Parser$ignorer,
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed(_Utils_Tuple0),
		$elm$parser$Parser$chompIf(
			function (c) {
				return _Utils_eq(
					c,
					_Utils_chr('<'));
			})),
	$elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$elm$parser$Parser$chompIf(
				function (c) {
					return _Utils_eq(
						c,
						_Utils_chr('/')) || (_Utils_eq(
						c,
						_Utils_chr('!')) || _Utils_eq(
						c,
						_Utils_chr('?')));
				}),
				$elm$parser$Parser$succeed(_Utils_Tuple0)
			])));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$Tag = {$: 'Tag'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$Attribute = {$: 'Attribute'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$doubleQuote = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$doubleQuoteDelimiter);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$quote = $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	_Utils_update(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$doubleQuoteDelimiter,
		{end: '\'', start: '\''}));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$attributeValue = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$doubleQuote,
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$quote,
			A2(
			$elm$parser$Parser$map,
			function (b) {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$AttributeValue),
						b)
					]);
			},
			$elm$parser$Parser$getChompedString(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
					function (c) {
						return (!$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c)) && (!_Utils_eq(
							c,
							_Utils_chr('>')));
					})))
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$whitespace = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$map,
			function (s) {
				return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, s);
			},
			$elm$parser$Parser$getChompedString(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isSpace))),
			$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$lineBreak
		]));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$attributeValueLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A3($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$consThen, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$attributeValueLoop, revTokens, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$whitespace),
				A3($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$addThen, $elm$parser$Parser$succeed, revTokens, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$attributeValue),
				$elm$parser$Parser$succeed(revTokens)
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$attributeConfirm = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A3($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$consThen, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$attributeConfirm, revTokens, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$whitespace),
				A3(
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$consThen,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$attributeValueLoop,
				revTokens,
				A2(
					$elm$parser$Parser$map,
					function (_v0) {
						return _Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, '=');
					},
					$elm$parser$Parser$symbol('='))),
				$elm$parser$Parser$succeed(revTokens)
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$isStartTagChar = function (c) {
	return $elm$core$Char$isUpper(c) || ($elm$core$Char$isLower(c) || $elm$core$Char$isDigit(c));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$isTagChar = function (c) {
	return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$isStartTagChar(c) || _Utils_eq(
		c,
		_Utils_chr('-'));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$isAttributeChar = function (c) {
	return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$isTagChar(c) || _Utils_eq(
		c,
		_Utils_chr('_'));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$attributeLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				A3(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$consThen,
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$attributeConfirm,
					revTokens,
					A2(
						$elm$parser$Parser$map,
						function (b) {
							return _Utils_Tuple2(
								$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$Attribute),
								b);
						},
						$elm$parser$Parser$getChompedString(
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$isAttributeChar))))),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$whitespace),
				A2(
				$elm$parser$Parser$map,
				function (b) {
					return $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b),
							revTokens));
				},
				$elm$parser$Parser$getChompedString(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
						function (c) {
							return (!$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c)) && (!_Utils_eq(
								c,
								_Utils_chr('>')));
						}))),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$tag = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$andThen,
				function (n) {
					return A2(
						$elm$parser$Parser$loop,
						A2($elm$core$List$cons, n, revTokens),
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$attributeLoop);
				},
				A2(
					$elm$parser$Parser$map,
					function (b) {
						return _Utils_Tuple2(
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$Tag),
							b);
					},
					$elm$parser$Parser$getChompedString(
						A2(
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$isTagChar,
							$elm$parser$Parser$chompIf($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$isStartTagChar))))),
				$elm$parser$Parser$succeed(revTokens)
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$openTag = function (revTokens) {
	return A2(
		$elm$parser$Parser$andThen,
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$tag,
		A2(
			$elm$parser$Parser$map,
			function (b) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b),
					revTokens);
			},
			$elm$parser$Parser$getChompedString($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$openTagParser)));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$mainLoop = function (revTokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$whitespace),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						_Utils_ap(n, revTokens));
				},
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$comment),
				A2(
				$elm$parser$Parser$map,
				function (n) {
					return $elm$parser$Parser$Loop(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, n),
							revTokens));
				},
				$elm$parser$Parser$getChompedString(
					$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
						function (c) {
							return (!_Utils_eq(
								c,
								_Utils_chr('<'))) && (!$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c));
						}))),
				A2(
				$elm$parser$Parser$map,
				$elm$parser$Parser$Loop,
				$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$openTag(revTokens)),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(revTokens))
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$toRevTokens = A2($elm$parser$Parser$loop, _List_Nil, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$mainLoop);
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$toLines = A2(
	$elm$core$Basics$composeR,
	$elm$parser$Parser$run($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$toRevTokens),
	$elm$core$Result$map(
		$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLines($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$syntaxToStyle)));
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$xml = A2(
	$elm$core$Basics$composeR,
	$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$toLines,
	$elm$core$Result$map($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$HCode));
var $author$project$Markdown$Render$parserOfLanguage = function (lang_) {
	switch (lang_.$) {
		case 'ElmLang':
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$elm;
		case 'CssLang':
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$css;
		case 'JavascriptLang':
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$javascript;
		case 'JsonLang':
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$json;
		case 'PythonLang':
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$python;
		case 'SqlLang':
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$sql;
		default:
			return $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$xml;
	}
};
var $elm$html$Html$pre = _VirtualDom_node('pre');
var $elm$html$Html$a = _VirtualDom_node('a');
var $elm$html$Html$em = _VirtualDom_node('em');
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$html$Html$img = _VirtualDom_node('img');
var $author$project$Markdown$Render$idAttrWithLabel = F2(
	function (id, label) {
		return $elm$html$Html$Attributes$id(
			_Utils_ap(
				$author$project$Markdown$Parse$stringFromId(id),
				label));
	});
var $author$project$Markdown$Render$inlineMathText = F2(
	function (id, str) {
		return A3(
			$elm$html$Html$Keyed$node,
			'span',
			_List_fromArray(
				[
					A2($author$project$Markdown$Render$idAttrWithLabel, id, 'm')
				]),
			_List_fromArray(
				[
					_Utils_Tuple2(
					$author$project$Markdown$Parse$stringFromId(id) + 'm',
					$author$project$Markdown$Render$mathText(
						'$ ' + ($elm$core$String$trim(str) + ' $ ')))
				]));
	});
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $author$project$Markdown$Render$renderStanza = F2(
	function (id, arg) {
		var poetryLine = function (line) {
			return A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text(line)
					]));
		};
		var lines = A2($elm$core$String$split, '\n', arg);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$author$project$Markdown$Render$idAttr(id),
					$elm$html$Html$Attributes$class('mm-poetry')
				]),
			A2($elm$core$List$map, poetryLine, lines));
	});
var $author$project$Markdown$Render$selectedStyle_ = F2(
	function (targetId, currentId) {
		var _v0 = _Utils_eq(targetId, currentId);
		if (_v0) {
			return A2($elm$html$Html$Attributes$style, 'background-color', '#8d9ffe');
		} else {
			return A2($elm$html$Html$Attributes$style, 'background-color', 'none');
		}
	});
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $author$project$Markdown$Render$strikethrough = function (str) {
	return A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('mm-strike-through')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $elm$html$Html$strong = _VirtualDom_node('strong');
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $author$project$Markdown$Render$joinLine = F4(
	function (selectedId, id, level, items) {
		var folder = F2(
			function (item, _v6) {
				var accString = _v6.a;
				var accElement = _v6.b;
				if (item.$ === 'OrdinaryText') {
					var str = item.a;
					return _Utils_Tuple2(
						A2($elm$core$List$cons, str, accString),
						accElement);
				} else {
					if (!_Utils_eq(accString, _List_Nil)) {
						var content = A2($elm$core$String$join, '', accString);
						var span = A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('innerJoin')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(content)
								]));
						return _Utils_Tuple2(
							_List_Nil,
							A2(
								$elm$core$List$cons,
								A4($author$project$Markdown$Render$renderToHtmlMsg, selectedId, id, level, item),
								A2($elm$core$List$cons, span, accElement)));
					} else {
						return _Utils_Tuple2(
							_List_Nil,
							A2(
								$elm$core$List$cons,
								A4($author$project$Markdown$Render$renderToHtmlMsg, selectedId, id, level, item),
								accElement));
					}
				}
			});
		var flush = function (_v4) {
			var accString = _v4.a;
			var accElement = _v4.b;
			if (!_Utils_eq(accString, _List_Nil)) {
				var content = A2($elm$core$String$join, '', accString);
				var span = A2(
					$elm$html$Html$span,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(content)
						]));
				return A2($elm$core$List$cons, span, accElement);
			} else {
				return accElement;
			}
		};
		return $elm$core$List$reverse(
			flush(
				A3(
					$elm$core$List$foldl,
					folder,
					_Utils_Tuple2(_List_Nil, _List_Nil),
					items)));
	});
var $author$project$Markdown$Render$renderToHtmlMsg = F4(
	function (selectedId, id, level, mmInline) {
		switch (mmInline.$) {
			case 'OrdinaryText':
				var str = mmInline.a;
				return A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$author$project$Markdown$Render$idAttr(id),
							$elm$html$Html$Attributes$class('ordinary'),
							$author$project$Markdown$Render$marginOfLevel(level)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(str)
						]));
			case 'ItalicText':
				var str = mmInline.a;
				return A2(
					$elm$html$Html$em,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(str)
						]));
			case 'BoldText':
				var str = mmInline.a;
				return A2(
					$elm$html$Html$strong,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(str)
						]));
			case 'Code':
				var str = mmInline.a;
				return A2(
					$elm$html$Html$code,
					_List_fromArray(
						[
							$author$project$Markdown$Render$idAttr(id)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(str)
						]));
			case 'InlineMath':
				var str = mmInline.a;
				return A2($author$project$Markdown$Render$inlineMathText, id, str);
			case 'StrikeThroughText':
				var str = mmInline.a;
				return $author$project$Markdown$Render$strikethrough(str);
			case 'BracketedText':
				var str = mmInline.a;
				return A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('bracketed')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('[' + (str + ']'))
						]));
			case 'Link':
				var url = mmInline.a;
				var label = mmInline.b;
				return A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href(url)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(label + ' ')
						]));
			case 'Image':
				var label_ = mmInline.a;
				var url = mmInline.b;
				var labelParts = A2(
					$elm$core$List$take,
					2,
					A2($elm$core$String$split, '::', label_));
				var _v1 = function () {
					var _v2 = _Utils_Tuple2(
						$elm$core$List$head(labelParts),
						$elm$core$List$head(
							A2($elm$core$List$drop, 1, labelParts)));
					if (_v2.a.$ === 'Just') {
						if (_v2.b.$ === 'Just') {
							var label__ = _v2.a.a;
							var class__ = _v2.b.a;
							return _Utils_Tuple2(label__, 'mm-image-' + class__);
						} else {
							var label__ = _v2.a.a;
							var _v3 = _v2.b;
							return _Utils_Tuple2(label__, 'mm-image');
						}
					} else {
						return _Utils_Tuple2('image', 'mm-image');
					}
				}();
				var label = _v1.a;
				var _class = _v1.b;
				return A2(
					$elm$html$Html$img,
					_List_fromArray(
						[
							$author$project$Markdown$Render$idAttr(id),
							$elm$html$Html$Attributes$src(url),
							$elm$html$Html$Attributes$class(_class)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(label)
						]));
			case 'Line':
				var arg = mmInline.a;
				var joined = A4($author$project$Markdown$Render$joinLine, selectedId, id, level, arg);
				return ($elm$core$List$length(joined) === 1) ? A2(
					$elm$core$Maybe$withDefault,
					A2(
						$elm$html$Html$span,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('')
							])),
					$elm$core$List$head(joined)) : A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('line')
						]),
					joined);
			case 'Paragraph':
				var arg = mmInline.a;
				var mapper = function (m) {
					return _Utils_Tuple2(
						$author$project$Markdown$Parse$stringFromId(id),
						A4($author$project$Markdown$Render$renderToHtmlMsg, selectedId, id, level, m));
				};
				return A3(
					$elm$html$Html$Keyed$node,
					'p',
					_List_fromArray(
						[
							$author$project$Markdown$Render$idAttr(id),
							A2($author$project$Markdown$Render$selectedStyle_, selectedId, id),
							$elm$html$Html$Attributes$class('mm-paragraph'),
							$author$project$Markdown$Render$blockLevelClass(level - 1)
						]),
					A2($elm$core$List$map, mapper, arg));
			case 'Stanza':
				var arg = mmInline.a;
				return A2($author$project$Markdown$Render$renderStanza, id, arg);
			default:
				var arg = mmInline.a;
				return A2(
					$elm$html$Html$p,
					_List_Nil,
					A2(
						$elm$core$List$map,
						A3($author$project$Markdown$Render$renderToHtmlMsg, selectedId, id, level),
						arg));
		}
	});
var $author$project$Markdown$Render$renderBlockContent = F4(
	function (selectedId, id, level, blockContent) {
		if (blockContent.$ === 'M') {
			var mmInline = blockContent.a;
			return A4($author$project$Markdown$Render$renderToHtmlMsg, selectedId, id, level, mmInline);
		} else {
			var str = blockContent.a;
			return A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$author$project$Markdown$Render$idAttr(id),
						$author$project$Markdown$Render$blockLevelClass(level - 1),
						A2($author$project$Markdown$Render$selectedStyle_, selectedId, id)
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(str)
					]));
		}
	});
var $elm$html$Html$h1 = _VirtualDom_node('h1');
var $elm$html$Html$h2 = _VirtualDom_node('h2');
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $elm$html$Html$h4 = _VirtualDom_node('h4');
var $elm$html$Html$h5 = _VirtualDom_node('h5');
var $author$project$Markdown$Render$nameFromBlockContent = function (blockContent) {
	if ((((((((blockContent.$ === 'M') && (blockContent.a.$ === 'Paragraph')) && blockContent.a.a.b) && (blockContent.a.a.a.$ === 'Line')) && blockContent.a.a.a.a.b) && (blockContent.a.a.a.a.a.$ === 'OrdinaryText')) && (!blockContent.a.a.a.a.b.b)) && (!blockContent.a.a.b.b)) {
		var _v1 = blockContent.a.a;
		var _v2 = _v1.a.a;
		var str = _v2.a.a;
		return $elm$core$String$trim(str);
	} else {
		return '';
	}
};
var $author$project$Markdown$Render$renderHeading = F5(
	function (selectedId, id, k, level, blockContent) {
		var name = $author$project$Markdown$Render$nameFromBlockContent(blockContent);
		switch (k) {
			case 1:
				return A2(
					$elm$html$Html$h1,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id(name),
							$elm$html$Html$Attributes$class('mm-h1'),
							A2($author$project$Markdown$Render$selectedStyle_, selectedId, id)
						]),
					_List_fromArray(
						[
							A4($author$project$Markdown$Render$renderBlockContent, selectedId, id, level, blockContent)
						]));
			case 2:
				return A2(
					$elm$html$Html$h2,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id(name),
							$elm$html$Html$Attributes$class('mm-h2'),
							A2($author$project$Markdown$Render$selectedStyle_, selectedId, id)
						]),
					_List_fromArray(
						[
							A4($author$project$Markdown$Render$renderBlockContent, selectedId, id, level, blockContent)
						]));
			case 3:
				return A2(
					$elm$html$Html$h3,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id(name),
							$elm$html$Html$Attributes$class('mm-h3'),
							A2($author$project$Markdown$Render$selectedStyle_, selectedId, id)
						]),
					_List_fromArray(
						[
							A4($author$project$Markdown$Render$renderBlockContent, selectedId, id, level, blockContent)
						]));
			case 4:
				return A2(
					$elm$html$Html$h4,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id(name),
							$elm$html$Html$Attributes$class('mm-h4'),
							A2($author$project$Markdown$Render$selectedStyle_, selectedId, id)
						]),
					_List_fromArray(
						[
							A4($author$project$Markdown$Render$renderBlockContent, selectedId, id, level, blockContent)
						]));
			default:
				return A2(
					$elm$html$Html$h5,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id(name),
							$elm$html$Html$Attributes$class('mm-h5'),
							A2($author$project$Markdown$Render$selectedStyle_, selectedId, id)
						]),
					_List_fromArray(
						[
							A4($author$project$Markdown$Render$renderBlockContent, selectedId, id, level, blockContent)
						]));
		}
	});
var $author$project$Markdown$Render$alphabet = function (k) {
	var alpha = _List_fromArray(
		['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
	return A2(
		$elm$core$Maybe$withDefault,
		'zz',
		$elm$core$List$head(
			A2($elm$core$List$drop, k - 1, alpha)));
};
var $elm$html$Html$li = _VirtualDom_node('li');
var $author$project$Markdown$Render$prependToParagraph = F2(
	function (head, tail) {
		if (tail.$ === 'T') {
			return tail;
		} else {
			var mmInLine = tail.a;
			if (mmInLine.$ === 'Paragraph') {
				var lst = mmInLine.a;
				return $author$project$Markdown$Parse$M(
					$author$project$MDInline$Paragraph(
						A2($elm$core$List$cons, head, lst)));
			} else {
				return tail;
			}
		}
	});
var $author$project$Markdown$Render$romanNumeral = function (k) {
	var alpha = _List_fromArray(
		['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x', 'xi', 'xii', 'xiii', 'xiv', 'xv', 'xvi', 'xvii', 'xviii', 'xix', 'xx', 'xxi', 'xxii', 'xxiii', 'xiv', 'xv', 'xvi']);
	return A2(
		$elm$core$Maybe$withDefault,
		'zz',
		$elm$core$List$head(
			A2($elm$core$List$drop, k - 1, alpha)));
};
var $author$project$Markdown$Render$renderOListItem = F5(
	function (selectedId, id, index, level, blockContent) {
		var label = function () {
			switch (level) {
				case 1:
					return $elm$core$String$fromInt(index) + '. ';
				case 2:
					return $author$project$Markdown$Render$alphabet(index) + '. ';
				case 3:
					return $author$project$Markdown$Render$romanNumeral(index) + '. ';
				case 4:
					return $elm$core$String$fromInt(index) + '. ';
				default:
					return 'N. ';
			}
		}();
		return A2(
			$elm$html$Html$li,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('mm-olist-item'),
					$author$project$Markdown$Render$blockLevelClass(level - 1),
					$author$project$Markdown$Render$idAttr(id),
					A2($author$project$Markdown$Render$selectedStyle_, selectedId, id)
				]),
			_List_fromArray(
				[
					A4(
					$author$project$Markdown$Render$renderBlockContent,
					selectedId,
					id,
					level,
					A2(
						$author$project$Markdown$Render$prependToParagraph,
						$author$project$MDInline$OrdinaryText(label),
						blockContent))
				]));
	});
var $author$project$Markdown$Render$renderPoetry = F4(
	function (selectedId, id, level, blockContent) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('mm-poetry'),
					$author$project$Markdown$Render$marginOfLevel(level),
					A2($author$project$Markdown$Render$selectedStyle_, selectedId, id)
				]),
			_List_fromArray(
				[
					A4($author$project$Markdown$Render$renderBlockContent, selectedId, id, level, blockContent)
				]));
	});
var $author$project$Markdown$Render$renderQuotation = F4(
	function (selectedId, id, level, blockContent) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('mm-quotation'),
					$author$project$Markdown$Render$blockLevelClass(level),
					A2($author$project$Markdown$Render$selectedStyle_, selectedId, id)
				]),
			_List_fromArray(
				[
					A4($author$project$Markdown$Render$renderBlockContent, selectedId, id, level, blockContent)
				]));
	});
var $author$project$Markdown$Render$renderUListItem = F4(
	function (selectedId, id, level, blockContent) {
		var label = function () {
			switch (level) {
				case 1:
					return '• ';
				case 2:
					return '◊ ';
				case 3:
					return '† ';
				case 4:
					return '‡ ';
				default:
					return 'N. ';
			}
		}();
		return A2(
			$elm$html$Html$li,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('mm-ulist-item'),
					$author$project$Markdown$Render$blockLevelClass(level - 1),
					$author$project$Markdown$Render$idAttr(id),
					A2($author$project$Markdown$Render$selectedStyle_, selectedId, id)
				]),
			_List_fromArray(
				[
					A4(
					$author$project$Markdown$Render$renderBlockContent,
					selectedId,
					id,
					level,
					A2(
						$author$project$Markdown$Render$prependToParagraph,
						$author$project$MDInline$OrdinaryText(label),
						blockContent))
				]));
	});
var $elm$html$Html$table = _VirtualDom_node('table');
var $elm$html$Html$td = _VirtualDom_node('td');
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Add = {$: 'Add'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Del = {$: 'Del'};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Normal = {$: 'Normal'};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $elm$html$Html$Attributes$classList = function (classes) {
	return $elm$html$Html$Attributes$class(
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$first,
				A2($elm$core$List$filter, $elm$core$Tuple$second, classes))));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$requiredStyleToString = function (required) {
	return 'elmsh' + function () {
		switch (required.$) {
			case 'Default':
				return '0';
			case 'Comment':
				return '-comm';
			case 'Style1':
				return '1';
			case 'Style2':
				return '2';
			case 'Style3':
				return '3';
			case 'Style4':
				return '4';
			case 'Style5':
				return '5';
			case 'Style6':
				return '6';
			default:
				return '7';
		}
	}();
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$fragmentView = function (_v0) {
	var text = _v0.text;
	var requiredStyle = _v0.requiredStyle;
	var additionalClass = _v0.additionalClass;
	return (_Utils_eq(requiredStyle, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Default) && $elm$core$String$isEmpty(additionalClass)) ? $elm$html$Html$text(text) : A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$classList(
				_List_fromArray(
					[
						_Utils_Tuple2(
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$requiredStyleToString(requiredStyle),
						!_Utils_eq(requiredStyle, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Default)),
						_Utils_Tuple2('elmsh-' + additionalClass, additionalClass !== '')
					]))
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(text)
			]));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$lineView = F3(
	function (start, index, _v0) {
		var fragments = _v0.fragments;
		var highlight = _v0.highlight;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2('elmsh-line', true),
							_Utils_Tuple2(
							'elmsh-hl',
							_Utils_eq(
								highlight,
								$elm$core$Maybe$Just($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Normal))),
							_Utils_Tuple2(
							'elmsh-add',
							_Utils_eq(
								highlight,
								$elm$core$Maybe$Just($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Add))),
							_Utils_Tuple2(
							'elmsh-del',
							_Utils_eq(
								highlight,
								$elm$core$Maybe$Just($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Del)))
						])),
					A2(
					$elm$html$Html$Attributes$attribute,
					'data-elmsh-lc',
					$elm$core$String$fromInt(start + index))
				]),
			A2($elm$core$List$map, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$fragmentView, fragments));
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$toInlineHtml = function (lines) {
	return A2(
		$elm$html$Html$code,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('elmsh')
			]),
		$elm$core$List$concat(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var highlight = _v0.highlight;
					var fragments = _v0.fragments;
					return _Utils_eq(highlight, $elm$core$Maybe$Nothing) ? A2($elm$core$List$map, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$fragmentView, fragments) : _List_fromArray(
						[
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$classList(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'elmsh-hl',
											_Utils_eq(
												highlight,
												$elm$core$Maybe$Just($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Normal))),
											_Utils_Tuple2(
											'elmsh-add',
											_Utils_eq(
												highlight,
												$elm$core$Maybe$Just($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Add))),
											_Utils_Tuple2(
											'elmsh-del',
											_Utils_eq(
												highlight,
												$elm$core$Maybe$Just($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Del)))
										]))
								]),
							A2($elm$core$List$map, $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$fragmentView, fragments))
						]);
				},
				lines)));
};
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$toBlockHtml = F2(
	function (maybeStart, lines) {
		if (maybeStart.$ === 'Nothing') {
			return A2(
				$elm$html$Html$pre,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('elmsh')
					]),
				_List_fromArray(
					[
						$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$toInlineHtml(lines)
					]));
		} else {
			var start = maybeStart.a;
			return A2(
				$elm$html$Html$pre,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('elmsh')
					]),
				$elm$core$List$singleton(
					A2(
						$elm$html$Html$code,
						_List_Nil,
						A2(
							$elm$core$List$indexedMap,
							$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$lineView(start),
							lines))));
		}
	});
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$toBlockHtml = F2(
	function (maybeStart, _v0) {
		var lines = _v0.a;
		return A2($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$toBlockHtml, maybeStart, lines);
	});
var $elm$html$Html$tr = _VirtualDom_node('tr');
var $pablohirafuji$elm_syntax_highlight$SyntaxHighlight$useTheme = function (_v0) {
	var theme = _v0.a;
	return A3(
		$elm$html$Html$node,
		'style',
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text(theme)
			]));
};
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (result.$ === 'Ok') {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $author$project$Markdown$Render$renderBlock = F3(
	function (selectedId, id, block) {
		if (block.a.$ === 'BalancedBlock') {
			switch (block.a.a.$) {
				case 'DisplayMath':
					var _v9 = block.a.a;
					var level = block.b;
					var blockContent = block.c;
					if (blockContent.$ === 'T') {
						var str = blockContent.a;
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$author$project$Markdown$Render$idAttr(id),
									$author$project$Markdown$Render$marginOfLevel(level),
									A2($author$project$Markdown$Render$selectedStyle_, selectedId, id)
								]),
							_List_fromArray(
								[
									$author$project$Markdown$Render$displayMathText(str)
								]));
					} else {
						return $author$project$Markdown$Render$displayMathText('');
					}
				case 'Verbatim':
					var _v11 = block.a.a;
					var level = block.b;
					var blockContent = block.c;
					if (blockContent.$ === 'T') {
						var str = blockContent.a;
						return A2(
							$elm$html$Html$pre,
							_List_fromArray(
								[
									$author$project$Markdown$Render$idAttr(id),
									$author$project$Markdown$Render$marginOfLevel(level),
									A2($author$project$Markdown$Render$selectedStyle_, selectedId, id)
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(str)
								]));
					} else {
						return $author$project$Markdown$Render$displayMathText('');
					}
				default:
					var lang = block.a.a.a;
					var level = block.b;
					var blockContent = block.c;
					if (blockContent.$ === 'T') {
						var str = blockContent.a;
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$author$project$Markdown$Render$blockLevelClass(level - 1)
								]),
							_List_fromArray(
								[
									$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$useTheme($pablohirafuji$elm_syntax_highlight$SyntaxHighlight$monokai),
									A2(
									$elm$core$Result$withDefault,
									A2(
										$elm$html$Html$pre,
										_List_Nil,
										_List_fromArray(
											[
												A2(
												$elm$html$Html$code,
												_List_Nil,
												_List_fromArray(
													[
														$elm$html$Html$text(str)
													]))
											])),
									A2(
										$elm$core$Result$map,
										$pablohirafuji$elm_syntax_highlight$SyntaxHighlight$toBlockHtml(
											$elm$core$Maybe$Just(1)),
										A2(
											$author$project$Markdown$Render$parserOfLanguage,
											lang,
											$elm$core$String$trimLeft(
												A2($author$project$BlockType$deleteLangPrefix, lang, str)))))
								]));
					} else {
						return $author$project$Markdown$Render$displayMathText('');
					}
			}
		} else {
			switch (block.a.a.$) {
				case 'Root':
					var _v1 = block.a.a;
					return A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$author$project$Markdown$Render$idAttr(id),
								A2($author$project$Markdown$Render$selectedStyle_, selectedId, id)
							]),
						_List_Nil);
				case 'Plain':
					var _v2 = block.a.a;
					var level = block.b;
					var blockContent = block.c;
					return A4($author$project$Markdown$Render$renderBlockContent, selectedId, id, level, blockContent);
				case 'Blank':
					var _v3 = block.a.a;
					var level = block.b;
					var blockContent = block.c;
					return A4($author$project$Markdown$Render$renderBlockContent, selectedId, id, level, blockContent);
				case 'Heading':
					var k = block.a.a.a;
					var level = block.b;
					var blockContent = block.c;
					return A5($author$project$Markdown$Render$renderHeading, selectedId, id, k, level, blockContent);
				case 'Quotation':
					var _v4 = block.a.a;
					var level = block.b;
					var blockContent = block.c;
					return A4($author$project$Markdown$Render$renderQuotation, selectedId, id, level, blockContent);
				case 'Poetry':
					var _v5 = block.a.a;
					var level = block.b;
					var blockContent = block.c;
					return A4($author$project$Markdown$Render$renderPoetry, selectedId, id, level, blockContent);
				case 'UListItem':
					var _v6 = block.a.a;
					var level = block.b;
					var blockContent = block.c;
					return A4($author$project$Markdown$Render$renderUListItem, selectedId, id, level, blockContent);
				case 'OListItem':
					var index = block.a.a.a;
					var level = block.b;
					var blockContent = block.c;
					return A5($author$project$Markdown$Render$renderOListItem, selectedId, id, index, level, blockContent);
				case 'HorizontalRule':
					var _v7 = block.a.a;
					var level = block.b;
					var blockContent = block.c;
					return A2(
						$elm$html$Html$hr,
						_List_fromArray(
							[
								$author$project$Markdown$Render$idAttr(id),
								$elm$html$Html$Attributes$class('mm-thematic-break'),
								A2($author$project$Markdown$Render$selectedStyle_, selectedId, id)
							]),
						_List_Nil);
				case 'Image':
					var _v8 = block.a.a;
					var level = block.b;
					var blockContent = block.c;
					return A4($author$project$Markdown$Render$renderBlockContent, selectedId, id, level, blockContent);
				case 'TableCell':
					var _v14 = block.a.a;
					var level = block.b;
					var blockContent = block.c;
					return A2(
						$elm$html$Html$td,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('mm-table-cell')
							]),
						_List_fromArray(
							[
								A4($author$project$Markdown$Render$renderBlockContent, selectedId, id, level, blockContent)
							]));
				case 'TableRow':
					var _v15 = block.a.a;
					var level = block.b;
					var blockContent = block.c;
					return A2(
						$elm$html$Html$tr,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('mm-table-row')
							]),
						_List_fromArray(
							[
								A4($author$project$Markdown$Render$renderBlockContent, selectedId, id, level, blockContent)
							]));
				default:
					var _v16 = block.a.a;
					var level = block.b;
					var blockContent = block.c;
					return A2(
						$elm$html$Html$table,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('mm-table'),
								$author$project$Markdown$Render$marginOfLevel(level)
							]),
						_List_fromArray(
							[
								A4($author$project$Markdown$Render$renderBlockContent, selectedId, id, level, blockContent)
							]));
			}
		}
	});
var $author$project$Markdown$Render$highlightColor = '#8d9ffe';
var $author$project$Markdown$Render$selectedStyle = F2(
	function (targetId, currentId) {
		var _v0 = _Utils_eq(targetId, currentId);
		if (_v0) {
			return _List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'background-color', $author$project$Markdown$Render$highlightColor)
				]);
		} else {
			return _List_Nil;
		}
	});
var $author$project$Markdown$Render$mmBlockTreeToHtml = F2(
	function (selectedId, tree) {
		if (_Utils_eq(
			$zwilias$elm_rosetree$Tree$children(tree),
			_List_Nil)) {
			var _v0 = $zwilias$elm_rosetree$Tree$label(tree);
			var id = _v0.a;
			var bt = _v0.b;
			var lev = _v0.c;
			var content = _v0.d;
			if ((bt.$ === 'BalancedBlock') && (bt.a.$ === 'DisplayMath')) {
				var _v2 = bt.a;
				return A3(
					$elm$html$Html$Keyed$node,
					'spanXXX',
					_Utils_ap(
						A2($author$project$Markdown$Render$selectedStyle, selectedId, id),
						_List_fromArray(
							[
								$elm$html$Html$Events$onClick(
								$author$project$Markdown$Render$IDClicked(
									$author$project$Markdown$Parse$stringFromId(id)))
							])),
					_List_fromArray(
						[
							_Utils_Tuple2(
							$author$project$Markdown$Parse$stringFromId(id),
							A3(
								$author$project$Markdown$Render$renderBlock,
								selectedId,
								id,
								A3($author$project$Markdown$Parse$MDBlock, bt, lev, content)))
						]));
			} else {
				return A3(
					$elm$html$Html$Keyed$node,
					'span',
					_Utils_ap(
						A2($author$project$Markdown$Render$selectedStyle, selectedId, id),
						_List_fromArray(
							[
								$elm$html$Html$Events$onClick(
								$author$project$Markdown$Render$IDClicked(
									$author$project$Markdown$Parse$stringFromId(id)))
							])),
					_List_fromArray(
						[
							_Utils_Tuple2(
							$author$project$Markdown$Parse$stringFromId(id),
							A3(
								$author$project$Markdown$Render$renderBlock,
								selectedId,
								id,
								A3($author$project$Markdown$Parse$MDBlock, bt, lev, content)))
						]));
			}
		} else {
			var _v3 = $zwilias$elm_rosetree$Tree$label(tree);
			if (_v3.b.$ === 'MarkdownBlock') {
				switch (_v3.b.a.$) {
					case 'TableRow':
						var id = _v3.a;
						var _v4 = _v3.b.a;
						return A2(
							$elm$html$Html$tr,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('mm-table-row'),
									A2($author$project$Markdown$Render$selectedStyle_, selectedId, id)
								]),
							A2(
								$elm$core$List$map,
								$author$project$Markdown$Render$mmBlockTreeToHtml(selectedId),
								$zwilias$elm_rosetree$Tree$children(tree)));
					case 'Table':
						var id = _v3.a;
						var _v5 = _v3.b.a;
						return A3(
							$elm$html$Html$Keyed$node,
							'table',
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('mm-table'),
									$elm$html$Html$Attributes$id(
									$author$project$Markdown$Parse$stringFromId(id)),
									$elm$html$Html$Events$onClick(
									$author$project$Markdown$Render$IDClicked(
										$author$project$Markdown$Parse$stringFromId(id))),
									A2($author$project$Markdown$Render$selectedStyle_, selectedId, id)
								]),
							_List_fromArray(
								[
									_Utils_Tuple2(
									$author$project$Markdown$Parse$stringFromId(id),
									A2(
										$elm$html$Html$div,
										_List_Nil,
										A2(
											$elm$core$List$map,
											$author$project$Markdown$Render$mmBlockTreeToHtml(selectedId),
											$zwilias$elm_rosetree$Tree$children(tree))))
								]));
					case 'Plain':
						var id = _v3.a;
						var _v6 = _v3.b.a;
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('mm-plain'),
									$elm$html$Html$Attributes$id(
									$author$project$Markdown$Parse$stringFromId(id)),
									$elm$html$Html$Events$onClick(
									$author$project$Markdown$Render$IDClicked(
										$author$project$Markdown$Parse$stringFromId(id))),
									A2($author$project$Markdown$Render$selectedStyle_, selectedId, id)
								]),
							A2(
								$elm$core$List$map,
								$author$project$Markdown$Render$mmBlockTreeToHtml(selectedId),
								$zwilias$elm_rosetree$Tree$children(tree)));
					default:
						var id = _v3.a;
						return A3(
							$elm$html$Html$Keyed$node,
							'div',
							_List_fromArray(
								[
									A2($author$project$Markdown$Render$selectedStyle_, selectedId, id)
								]),
							_List_fromArray(
								[
									_Utils_Tuple2(
									$author$project$Markdown$Parse$stringFromId(id),
									A2(
										$elm$html$Html$div,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$id(
												$author$project$Markdown$Parse$stringFromId(id)),
												$elm$html$Html$Events$onClick(
												$author$project$Markdown$Render$IDClicked(
													$author$project$Markdown$Parse$stringFromId(id)))
											]),
										_List_fromArray(
											[
												A3(
												$author$project$Markdown$Render$renderBlock,
												selectedId,
												id,
												$author$project$Markdown$Parse$project(
													$zwilias$elm_rosetree$Tree$label(tree))),
												A2(
												$elm$html$Html$div,
												_List_fromArray(
													[
														$author$project$Markdown$Render$idAttr(id)
													]),
												A2(
													$elm$core$List$map,
													$author$project$Markdown$Render$mmBlockTreeToHtml(selectedId),
													$zwilias$elm_rosetree$Tree$children(tree)))
											])))
								]));
				}
			} else {
				switch (_v3.b.a.$) {
					case 'DisplayMath':
						var id = _v3.a;
						var _v7 = _v3.b.a;
						var level = _v3.c;
						var content = _v3.d;
						return A3(
							$elm$html$Html$Keyed$node,
							'div',
							_List_fromArray(
								[
									$elm$html$Html$Attributes$id(
									$author$project$Markdown$Parse$stringFromId(id)),
									$elm$html$Html$Events$onClick(
									$author$project$Markdown$Render$IDClicked(
										$author$project$Markdown$Parse$stringFromId(id))),
									A2($author$project$Markdown$Render$selectedStyle_, selectedId, id)
								]),
							_List_fromArray(
								[
									_Utils_Tuple2(
									$author$project$Markdown$Parse$stringFromId(id),
									$author$project$Markdown$Render$displayMathText(
										$author$project$Markdown$Parse$projectedStringOfBlockContent(content)))
								]));
					case 'Verbatim':
						var id = _v3.a;
						var _v8 = _v3.b.a;
						return A3(
							$elm$html$Html$Keyed$node,
							'pre',
							_List_fromArray(
								[
									$elm$html$Html$Attributes$id(
									$author$project$Markdown$Parse$stringFromId(id)),
									$elm$html$Html$Events$onClick(
									$author$project$Markdown$Render$IDClicked(
										$author$project$Markdown$Parse$stringFromId(id))),
									A2($author$project$Markdown$Render$selectedStyle_, selectedId, id)
								]),
							_List_fromArray(
								[
									_Utils_Tuple2(
									$author$project$Markdown$Parse$stringFromId(id),
									$elm$html$Html$text('OUF: Verbatim!'))
								]));
					default:
						var id = _v3.a;
						var lang = _v3.b.a.a;
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$id(
									$author$project$Markdown$Parse$stringFromId(id)),
									$elm$html$Html$Events$onClick(
									$author$project$Markdown$Render$IDClicked(
										$author$project$Markdown$Parse$stringFromId(id))),
									A2($author$project$Markdown$Render$selectedStyle_, selectedId, id)
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('OUF: Code!')
								]));
				}
			}
		}
	});
var $author$project$Markdown$Render$renderHtml = F2(
	function (selectedId, blockTreeWithId) {
		return function (x) {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[$author$project$Markdown$Render$masterId]),
				x);
		}(
			A2(
				$elm$core$List$map,
				$author$project$Markdown$Render$mmBlockTreeToHtml(selectedId),
				$zwilias$elm_rosetree$Tree$children(blockTreeWithId)));
	});
var $author$project$Markdown$Render$id0 = _Utils_Tuple2(-1, -1);
var $author$project$Markdown$Render$renderTOCHeading = F5(
	function (selectedId, id, k, level, blockContent) {
		var name = '#' + $author$project$Markdown$Render$nameFromBlockContent(blockContent);
		switch (k) {
			case 1:
				return A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href(name),
							A2($elm$html$Html$Attributes$style, 'font-size', '13pt')
						]),
					_List_fromArray(
						[
							A4($author$project$Markdown$Render$renderBlockContent, selectedId, id, level, blockContent)
						]));
			case 2:
				return A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href(name),
							$elm$html$Html$Attributes$class('toc-level-0'),
							A2($elm$html$Html$Attributes$style, 'display', 'block')
						]),
					_List_fromArray(
						[
							A4($author$project$Markdown$Render$renderBlockContent, selectedId, id, level, blockContent)
						]));
			case 3:
				return A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href(name),
							$elm$html$Html$Attributes$class('toc-level-1'),
							A2($elm$html$Html$Attributes$style, 'display', 'block')
						]),
					_List_fromArray(
						[
							A4($author$project$Markdown$Render$renderBlockContent, selectedId, id, level, blockContent)
						]));
			case 4:
				return A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href(name),
							$elm$html$Html$Attributes$class('toc-level-2'),
							A2($elm$html$Html$Attributes$style, 'display', 'block')
						]),
					_List_fromArray(
						[
							A4($author$project$Markdown$Render$renderBlockContent, selectedId, id, level, blockContent)
						]));
			default:
				return A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href(name),
							$elm$html$Html$Attributes$class('toc-level-3'),
							A2($elm$html$Html$Attributes$style, 'display', 'block')
						]),
					_List_fromArray(
						[
							A4($author$project$Markdown$Render$renderBlockContent, selectedId, id, level, blockContent)
						]));
		}
	});
var $author$project$Markdown$Render$renderHeadingForTOC = function (heading) {
	if ((heading.a.$ === 'MarkdownBlock') && (heading.a.a.$ === 'Heading')) {
		var k = heading.a.a.a;
		var level = heading.b;
		var blockContent = heading.c;
		return A5(
			$author$project$Markdown$Render$renderTOCHeading,
			_Utils_Tuple2(0, 0),
			$author$project$Markdown$Render$id0,
			k,
			level,
			blockContent);
	} else {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	}
};
var $author$project$Markdown$Render$tocStyle = _List_fromArray(
	[
		A2($elm$html$Html$Attributes$style, 'font-size', 'x-small'),
		A2($elm$html$Html$Attributes$style, 'margin-left', '15px'),
		A2($elm$html$Html$Attributes$style, 'color', '#555'),
		$elm$html$Html$Attributes$id('toc')
	]);
var $author$project$Markdown$Render$renderTableOfContents = F2(
	function (heading, blockList) {
		var contentHeading = A3(
			$author$project$Markdown$Parse$MDBlock,
			$author$project$BlockType$MarkdownBlock(
				$author$project$BlockType$Heading(1)),
			1,
			$author$project$Markdown$Parse$M(
				$author$project$MDInline$Paragraph(
					_List_fromArray(
						[
							$author$project$MDInline$Line(
							_List_fromArray(
								[
									$author$project$MDInline$OrdinaryText(heading)
								]))
						]))));
		return function (x) {
			return A2($elm$html$Html$div, $author$project$Markdown$Render$tocStyle, x);
		}(
			A2(
				$elm$core$List$map,
				$author$project$Markdown$Render$renderHeadingForTOC,
				function (x) {
					return A2($elm$core$List$cons, contentHeading, x);
				}(
					A2($elm$core$List$drop, 1, blockList))));
	});
var $author$project$Markdown$Render$typeOfMDBlock = function (_v0) {
	var bt = _v0.a;
	return bt;
};
var $author$project$Markdown$Render$isHeading = function (block) {
	var _v0 = $author$project$Markdown$Render$typeOfMDBlock(block);
	if ((_v0.$ === 'MarkdownBlock') && (_v0.a.$ === 'Heading')) {
		return true;
	} else {
		return false;
	}
};
var $author$project$Markdown$Render$tableOfContentsAsBlocks = function (blockTree) {
	return A2(
		$elm$core$List$filter,
		$author$project$Markdown$Render$isHeading,
		$zwilias$elm_rosetree$Tree$flatten(blockTree));
};
var $author$project$Markdown$Render$tableOfContentsAsHtml = F2(
	function (heading, blockTree) {
		return A2(
			$author$project$Markdown$Render$renderTableOfContents,
			heading,
			$author$project$Markdown$Render$tableOfContentsAsBlocks(blockTree));
	});
var $author$project$Markdown$Render$renderHtmlWithExternalTOC = F3(
	function (selectedId, heading, ast) {
		var toc_ = A2(
			$author$project$Markdown$Render$tableOfContentsAsHtml,
			heading,
			A2($zwilias$elm_rosetree$Tree$map, $author$project$Markdown$Parse$project, ast));
		var spacing = A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'padding-bottom', '40px')
				]),
			_List_Nil);
		var separator = A2(
			$elm$html$Html$hr,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'padding-bottom', '2px'),
					A2($elm$html$Html$Attributes$style, 'background-color', '#aaa'),
					A2($elm$html$Html$Attributes$style, 'border-width', '0')
				]),
			_List_Nil);
		var bodyAST = $zwilias$elm_rosetree$Tree$children(ast);
		var html = A2(
			$elm$core$List$map,
			$author$project$Markdown$Render$mmBlockTreeToHtml(selectedId),
			bodyAST);
		var title_ = A2(
			$elm$core$Maybe$withDefault,
			A2($elm$html$Html$div, _List_Nil, _List_Nil),
			$elm$core$List$head(html));
		var body = A2($elm$core$List$drop, 1, html);
		return {
			document: A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id('__RENDERED_TEXT__')
					]),
				body),
			title: A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[title_])),
			toc: A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[toc_]))
		};
	});
var $author$project$Markdown$Render$renderHtmlWithTOC = F3(
	function (selectedId, heading, ast) {
		var toc_ = A2(
			$author$project$Markdown$Render$tableOfContentsAsHtml,
			heading,
			A2($zwilias$elm_rosetree$Tree$map, $author$project$Markdown$Parse$project, ast));
		var spacing = A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'padding-bottom', '40px')
				]),
			_List_Nil);
		var separator = A2(
			$elm$html$Html$hr,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'padding-bottom', '2px'),
					A2($elm$html$Html$Attributes$style, 'background-color', '#aaa'),
					A2($elm$html$Html$Attributes$style, 'border-width', '0')
				]),
			_List_Nil);
		var bodyAST = $zwilias$elm_rosetree$Tree$children(ast);
		var headOfBodyAST = A2(
			$elm$core$Maybe$map,
			$zwilias$elm_rosetree$Tree$map($author$project$Markdown$Parse$project),
			$elm$core$List$head(bodyAST));
		var html = A2(
			$elm$core$List$map,
			$author$project$Markdown$Render$mmBlockTreeToHtml(selectedId),
			bodyAST);
		var title_ = A2(
			$elm$core$Maybe$withDefault,
			A2($elm$html$Html$div, _List_Nil, _List_Nil),
			$elm$core$List$head(html));
		var body = A2($elm$core$List$drop, 1, html);
		var _v0 = A2(
			$elm$core$Maybe$map,
			A2($elm$core$Basics$composeL, $author$project$Markdown$Render$isHeading, $zwilias$elm_rosetree$Tree$label),
			headOfBodyAST);
		if ((_v0.$ === 'Just') && _v0.a) {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[$author$project$Markdown$Render$masterId]),
				A2(
					$elm$core$List$cons,
					title_,
					A2(
						$elm$core$List$cons,
						separator,
						A2(
							$elm$core$List$cons,
							toc_,
							A2(
								$elm$core$List$cons,
								separator,
								A2($elm$core$List$cons, spacing, body))))));
		} else {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[$author$project$Markdown$Render$masterId]),
				A2(
					$elm$core$List$cons,
					separator,
					A2(
						$elm$core$List$cons,
						toc_,
						A2(
							$elm$core$List$cons,
							separator,
							A2(
								$elm$core$List$cons,
								spacing,
								A2($elm$core$List$cons, title_, body))))));
		}
	});
var $author$project$Markdown$Render$withOptionsFromAST = F4(
	function (markdownOption, outputOption, selectedId, ast) {
		switch (outputOption.$) {
			case 'Basic':
				return $author$project$Markdown$Render$Simple(
					A2($author$project$Markdown$Render$renderHtml, selectedId, ast));
			case 'InternalTOC':
				var title_ = outputOption.a;
				return $author$project$Markdown$Render$Simple(
					A3($author$project$Markdown$Render$renderHtmlWithTOC, selectedId, title_, ast));
			default:
				var title_ = outputOption.a;
				return $author$project$Markdown$Render$Composite(
					A3($author$project$Markdown$Render$renderHtmlWithExternalTOC, selectedId, title_, ast));
		}
	});
var $author$project$Main$renderAstFor = F2(
	function (model, text) {
		var newAst = A3($author$project$Markdown$Parse$toMDBlockTree, model.counter, $author$project$Markdown$Option$ExtendedMath, text);
		return A2(
			$elm$core$Task$perform,
			$author$project$Main$GotSecondPart,
			A2(
				$elm$core$Task$andThen,
				function (_v0) {
					return A2(
						$elm$core$Task$andThen,
						function (_v1) {
							return $elm$core$Task$succeed(
								_Utils_Tuple2(
									newAst,
									A4(
										$author$project$Markdown$Render$withOptionsFromAST,
										$author$project$Markdown$Option$ExtendedMath,
										$author$project$Markdown$Option$ExternalTOC('Contents'),
										model.selectedId,
										newAst)));
						},
						$elm$core$Process$sleep(100));
				},
				$elm$core$Process$sleep(10)));
	});
var $author$project$Main$renderSecond = function (model) {
	return A2($author$project$Main$renderAstFor, model, model.sourceText);
};
var $author$project$Main$NoOp = {$: 'NoOp'};
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2(
					$elm$core$Task$onError,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Err),
					A2(
						$elm$core$Task$andThen,
						A2(
							$elm$core$Basics$composeL,
							A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
							$elm$core$Result$Ok),
						task))));
	});
var $elm$browser$Browser$Dom$setViewportOf = _Browser_setViewportOf;
var $author$project$Main$resetViewportOfEditor = A2(
	$elm$core$Task$attempt,
	function (_v0) {
		return $author$project$Main$NoOp;
	},
	A3($elm$browser$Browser$Dom$setViewportOf, '_editor_', 0, 0));
var $author$project$Main$resetViewportOfRenderedText = A2(
	$elm$core$Task$attempt,
	function (_v0) {
		return $author$project$Main$NoOp;
	},
	A3($elm$browser$Browser$Dom$setViewportOf, '_rendered_text_', 0, 0));
var $author$project$Main$doInit = function (flags) {
	var editor = A2(
		$jxxcarlson$elm_text_editor$Editor$init,
		$author$project$Main$config(flags),
		$author$project$Main$initialText);
	var lastAst = A3(
		$author$project$Markdown$Parse$toMDBlockTree,
		0,
		$author$project$Markdown$Option$ExtendedMath,
		$jxxcarlson$elm_text_editor$Editor$getSource(editor));
	var nMath = $author$project$Markdown$Render$numberOfMathElements(lastAst);
	var firstAst = (nMath > 10) ? A3(
		$author$project$Markdown$Parse$toMDBlockTree,
		1,
		$author$project$Markdown$Option$ExtendedMath,
		$author$project$Main$getFirstPart($author$project$Main$initialText)) : lastAst;
	var model = {
		clipboard: '',
		counter: 2,
		editor: editor,
		height: flags.height,
		lastAst: lastAst,
		message: 'Click ctrl-shift-I in editor to toggle info panel, ctrl-h to toggle help',
		option: $author$project$Markdown$Option$ExtendedMath,
		renderedText: A4(
			$author$project$Markdown$Render$withOptionsFromAST,
			$author$project$Markdown$Option$ExtendedMath,
			$author$project$Markdown$Option$ExternalTOC('Contents'),
			_Utils_Tuple2(0, 0),
			firstAst),
		seed: 0,
		selectedId: _Utils_Tuple2(0, 0),
		sourceText: $author$project$Main$initialText,
		width: flags.width
	};
	return _Utils_Tuple2(
		model,
		$elm$core$Platform$Cmd$batch(
			_List_fromArray(
				[
					$author$project$Main$resetViewportOfEditor,
					$author$project$Main$resetViewportOfRenderedText,
					$author$project$Main$renderSecond(model)
				])));
};
var $author$project$Main$init = function (flags) {
	return $author$project$Main$doInit(flags);
};
var $author$project$Main$LogErr = function (a) {
	return {$: 'LogErr', a: a};
};
var $author$project$Main$Outside = function (a) {
	return {$: 'Outside', a: a};
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $author$project$Outside$GotClipboard = function (a) {
	return {$: 'GotClipboard', a: a};
};
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Outside$clipboardDecoder = $elm$json$Json$Decode$string;
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $author$project$Outside$infoForElm = _Platform_incomingPort(
	'infoForElm',
	A2(
		$elm$json$Json$Decode$andThen,
		function (tag) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (data) {
					return $elm$json$Json$Decode$succeed(
						{data: data, tag: tag});
				},
				A2($elm$json$Json$Decode$field, 'data', $elm$json$Json$Decode$value));
		},
		A2($elm$json$Json$Decode$field, 'tag', $elm$json$Json$Decode$string)));
var $author$project$Outside$getInfo = F2(
	function (tagger, onError) {
		return $author$project$Outside$infoForElm(
			function (outsideInfo) {
				var _v0 = outsideInfo.tag;
				if (_v0 === 'GotClipboard') {
					var _v1 = A2($elm$json$Json$Decode$decodeValue, $author$project$Outside$clipboardDecoder, outsideInfo.data);
					if (_v1.$ === 'Ok') {
						var result = _v1.a;
						return tagger(
							$author$project$Outside$GotClipboard(result));
					} else {
						var e = _v1.a;
						return onError('');
					}
				} else {
					return onError('Unexpected info from outside');
				}
			});
	});
var $author$project$Main$subscriptions = function (model) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				A2($author$project$Outside$getInfo, $author$project$Main$Outside, $author$project$Main$LogErr)
			]));
};
var $author$project$Outside$AskForClipBoard = function (a) {
	return {$: 'AskForClipBoard', a: a};
};
var $author$project$Markdown$Option$Extended = {$: 'Extended'};
var $author$project$Main$NewSeed = function (a) {
	return {$: 'NewSeed', a: a};
};
var $author$project$Markdown$Option$Standard = {$: 'Standard'};
var $author$project$Outside$WriteToClipBoard = function (a) {
	return {$: 'WriteToClipBoard', a: a};
};
var $elm$random$Random$Generate = function (a) {
	return {$: 'Generate', a: a};
};
var $elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 'Seed', a: a, b: b};
	});
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$random$Random$next = function (_v0) {
	var state0 = _v0.a;
	var incr = _v0.b;
	return A2($elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var $elm$random$Random$initialSeed = function (x) {
	var _v0 = $elm$random$Random$next(
		A2($elm$random$Random$Seed, 0, 1013904223));
	var state1 = _v0.a;
	var incr = _v0.b;
	var state2 = (state1 + x) >>> 0;
	return $elm$random$Random$next(
		A2($elm$random$Random$Seed, state2, incr));
};
var $elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0.a;
	return millis;
};
var $elm$random$Random$init = A2(
	$elm$core$Task$andThen,
	function (time) {
		return $elm$core$Task$succeed(
			$elm$random$Random$initialSeed(
				$elm$time$Time$posixToMillis(time)));
	},
	$elm$time$Time$now);
var $elm$random$Random$step = F2(
	function (_v0, seed) {
		var generator = _v0.a;
		return generator(seed);
	});
var $elm$random$Random$onEffects = F3(
	function (router, commands, seed) {
		if (!commands.b) {
			return $elm$core$Task$succeed(seed);
		} else {
			var generator = commands.a.a;
			var rest = commands.b;
			var _v1 = A2($elm$random$Random$step, generator, seed);
			var value = _v1.a;
			var newSeed = _v1.b;
			return A2(
				$elm$core$Task$andThen,
				function (_v2) {
					return A3($elm$random$Random$onEffects, router, rest, newSeed);
				},
				A2($elm$core$Platform$sendToApp, router, value));
		}
	});
var $elm$random$Random$onSelfMsg = F3(
	function (_v0, _v1, seed) {
		return $elm$core$Task$succeed(seed);
	});
var $elm$random$Random$Generator = function (a) {
	return {$: 'Generator', a: a};
};
var $elm$random$Random$map = F2(
	function (func, _v0) {
		var genA = _v0.a;
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v1 = genA(seed0);
				var a = _v1.a;
				var seed1 = _v1.b;
				return _Utils_Tuple2(
					func(a),
					seed1);
			});
	});
var $elm$random$Random$cmdMap = F2(
	function (func, _v0) {
		var generator = _v0.a;
		return $elm$random$Random$Generate(
			A2($elm$random$Random$map, func, generator));
	});
_Platform_effectManagers['Random'] = _Platform_createManager($elm$random$Random$init, $elm$random$Random$onEffects, $elm$random$Random$onSelfMsg, $elm$random$Random$cmdMap);
var $elm$random$Random$command = _Platform_leaf('Random');
var $elm$random$Random$generate = F2(
	function (tagger, generator) {
		return $elm$random$Random$command(
			$elm$random$Random$Generate(
				A2($elm$random$Random$map, tagger, generator)));
	});
var $author$project$Main$getFlags = function (model) {
	return {height: model.height, width: model.width};
};
var $jxxcarlson$elm_text_editor$Editor$getSelectedText = function (_v0) {
	var data = _v0.a;
	return data.state.selectedText;
};
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $elm$random$Random$peel = function (_v0) {
	var state = _v0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var $elm$random$Random$int = F2(
	function (a, b) {
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
				var lo = _v0.a;
				var hi = _v0.b;
				var range = (hi - lo) + 1;
				if (!((range - 1) & range)) {
					return _Utils_Tuple2(
						(((range - 1) & $elm$random$Random$peel(seed0)) >>> 0) + lo,
						$elm$random$Random$next(seed0));
				} else {
					var threshhold = (((-range) >>> 0) % range) >>> 0;
					var accountForBias = function (seed) {
						accountForBias:
						while (true) {
							var x = $elm$random$Random$peel(seed);
							var seedN = $elm$random$Random$next(seed);
							if (_Utils_cmp(x, threshhold) < 0) {
								var $temp$seed = seedN;
								seed = $temp$seed;
								continue accountForBias;
							} else {
								return _Utils_Tuple2((x % range) + lo, seedN);
							}
						}
					};
					return accountForBias(seed0);
				}
			});
	});
var $elm_community$list_extra$List$Extra$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $jxxcarlson$elm_text_editor$Buffer$lines = function (_v0) {
	var content = _v0.a;
	return A2($elm$core$String$split, '\n', content);
};
var $jxxcarlson$elm_text_editor$Buffer$lineAt = F2(
	function (position, buffer) {
		return A2(
			$elm_community$list_extra$List$Extra$getAt,
			position.line,
			$jxxcarlson$elm_text_editor$Buffer$lines(buffer));
	});
var $jxxcarlson$elm_text_editor$Editor$lineAtCursor = function (_v0) {
	var data = _v0.a;
	return A2(
		$elm$core$Maybe$withDefault,
		'invalid cursor',
		A2($jxxcarlson$elm_text_editor$Buffer$lineAt, data.state.cursor, data.buffer));
};
var $author$project$Main$load = F2(
	function (model, text) {
		var firstAst = A3(
			$author$project$Markdown$Parse$toMDBlockTree,
			model.counter,
			$author$project$Markdown$Option$ExtendedMath,
			$author$project$Main$getFirstPart(text));
		var newModel = _Utils_update(
			model,
			{
				counter: model.counter + 1,
				editor: A2(
					$jxxcarlson$elm_text_editor$Editor$init,
					$author$project$Main$config(
						$author$project$Main$getFlags(model)),
					text),
				lastAst: A3($author$project$Markdown$Parse$toMDBlockTree, model.counter, $author$project$Markdown$Option$ExtendedMath, text),
				message: 'Loaded new text',
				renderedText: A4(
					$author$project$Markdown$Render$withOptionsFromAST,
					$author$project$Markdown$Option$ExtendedMath,
					$author$project$Markdown$Option$ExternalTOC('Contents'),
					_Utils_Tuple2(0, 0),
					firstAst),
				sourceText: text
			});
		return _Utils_Tuple2(
			newModel,
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[
						$author$project$Main$resetViewportOfRenderedText,
						$author$project$Main$resetViewportOfEditor,
						$author$project$Main$renderSecond(newModel)
					])));
	});
var $elm$core$Platform$Cmd$map = _Platform_map;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $jxxcarlson$elm_text_editor$Editor$getCursor = function (_v0) {
	var data = _v0.a;
	return data.state.cursor;
};
var $jxxcarlson$elm_text_editor$Editor$getWrapOption = function (_v0) {
	var data = _v0.a;
	return data.state.config.wrapOption;
};
var $jxxcarlson$elm_text_editor$Buffer$indexFromPosition = F2(
	function (buffer, position) {
		return (!position.line) ? $elm$core$Maybe$Just(position.column) : A2(
			$elm$core$Maybe$map,
			function (line) {
				return (line + position.column) + 1;
			},
			A2(
				$elm_community$list_extra$List$Extra$getAt,
				position.line - 1,
				A2($elm$core$String$indexes, '\n', buffer)));
	});
var $elm_community$string_extra$String$Extra$replaceSlice = F4(
	function (substitution, start, end, string) {
		return _Utils_ap(
			A3($elm$core$String$slice, 0, start, string),
			_Utils_ap(
				substitution,
				A3(
					$elm$core$String$slice,
					end,
					$elm$core$String$length(string),
					string)));
	});
var $elm_community$string_extra$String$Extra$insertAt = F3(
	function (insert, pos, string) {
		return A4($elm_community$string_extra$String$Extra$replaceSlice, insert, pos, pos, string);
	});
var $jxxcarlson$elm_text_editor$Buffer$insert = F3(
	function (position, str, _v0) {
		var buffer = _v0.a;
		return $jxxcarlson$elm_text_editor$Buffer$Buffer(
			A2(
				$elm$core$Maybe$withDefault,
				buffer,
				A2(
					$elm$core$Maybe$map,
					function (index) {
						return A3($elm_community$string_extra$String$Extra$insertAt, str, index, buffer);
					},
					A2($jxxcarlson$elm_text_editor$Buffer$indexFromPosition, buffer, position))));
	});
var $jxxcarlson$elm_text_editor$Editor$Wrap$Start = {$: 'Start'};
var $jxxcarlson$elm_text_editor$Editor$Wrap$InBlank = {$: 'InBlank'};
var $jxxcarlson$elm_text_editor$Editor$Wrap$InBlock = {$: 'InBlock'};
var $jxxcarlson$elm_text_editor$Editor$Wrap$InCode = {$: 'InCode'};
var $jxxcarlson$elm_text_editor$Editor$Wrap$InParagraph = {$: 'InParagraph'};
var $jxxcarlson$elm_text_editor$Editor$Wrap$BeginBlock = {$: 'BeginBlock'};
var $jxxcarlson$elm_text_editor$Editor$Wrap$Blank = {$: 'Blank'};
var $jxxcarlson$elm_text_editor$Editor$Wrap$CodeDelimiter = {$: 'CodeDelimiter'};
var $jxxcarlson$elm_text_editor$Editor$Wrap$EndBlock = {$: 'EndBlock'};
var $jxxcarlson$elm_text_editor$Editor$Wrap$Text = {$: 'Text'};
var $jxxcarlson$elm_text_editor$Editor$Wrap$classifyLine = function (str) {
	var prefix = $elm$core$String$trimLeft(str);
	return (prefix === '') ? $jxxcarlson$elm_text_editor$Editor$Wrap$Blank : ((A2($elm$core$String$left, 3, prefix) === '```') ? $jxxcarlson$elm_text_editor$Editor$Wrap$CodeDelimiter : ((A2($elm$core$String$left, 2, prefix) === '$$') ? $jxxcarlson$elm_text_editor$Editor$Wrap$CodeDelimiter : ((A2($elm$core$String$left, 6, prefix) === '\\begin') ? $jxxcarlson$elm_text_editor$Editor$Wrap$BeginBlock : ((A2($elm$core$String$left, 4, prefix) === '\\end') ? $jxxcarlson$elm_text_editor$Editor$Wrap$EndBlock : $jxxcarlson$elm_text_editor$Editor$Wrap$Text))));
};
var $jxxcarlson$elm_text_editor$Editor$Wrap$BlockParagraph = {$: 'BlockParagraph'};
var $jxxcarlson$elm_text_editor$Editor$Wrap$CodeParagraph = {$: 'CodeParagraph'};
var $jxxcarlson$elm_text_editor$Editor$Wrap$TextParagraph = {$: 'TextParagraph'};
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $jxxcarlson$elm_text_editor$Editor$Wrap$joinLines = function (list) {
	return A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$filter,
			function (s) {
				return s !== '';
			},
			$elm$core$List$reverse(list)));
};
var $jxxcarlson$elm_text_editor$Editor$Wrap$joinLinesForCode = function (list) {
	return A2(
		$elm$core$String$join,
		'\n',
		$elm$core$List$reverse(list));
};
var $jxxcarlson$elm_text_editor$Editor$Wrap$opDict = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			'NoOp',
			F2(
				function (s, d) {
					return d;
				})),
			_Utils_Tuple2(
			'StartParagraph',
			F2(
				function (s, d) {
					return _Utils_update(
						d,
						{
							currentParagraph: _List_fromArray(
								[s]),
							tick: d.tick + 1
						});
				})),
			_Utils_Tuple2(
			'AddToParagraph',
			F2(
				function (s, d) {
					return _Utils_update(
						d,
						{
							currentParagraph: A2($elm$core$List$cons, s, d.currentParagraph),
							tick: d.tick + 1
						});
				})),
			_Utils_Tuple2(
			'EndParagraph',
			F2(
				function (s, d) {
					return _Utils_update(
						d,
						{
							currentParagraph: _List_Nil,
							paragraphList: A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									$jxxcarlson$elm_text_editor$Editor$Wrap$TextParagraph,
									$jxxcarlson$elm_text_editor$Editor$Wrap$joinLines(d.currentParagraph)),
								d.paragraphList)
						});
				})),
			_Utils_Tuple2(
			'StartCodeFromBlank',
			F2(
				function (s, d) {
					return _Utils_update(
						d,
						{
							currentParagraph: _List_fromArray(
								[s]),
							paragraphList: A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									$jxxcarlson$elm_text_editor$Editor$Wrap$TextParagraph,
									$jxxcarlson$elm_text_editor$Editor$Wrap$joinLines(d.currentParagraph)),
								d.paragraphList),
							tick: d.tick + 1
						});
				})),
			_Utils_Tuple2(
			'StartCodeFromParagraph',
			F2(
				function (s, d) {
					return _Utils_update(
						d,
						{
							currentParagraph: _List_fromArray(
								[s]),
							paragraphList: A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									$jxxcarlson$elm_text_editor$Editor$Wrap$TextParagraph,
									$jxxcarlson$elm_text_editor$Editor$Wrap$joinLines(d.currentParagraph)),
								d.paragraphList),
							tick: d.tick + 1
						});
				})),
			_Utils_Tuple2(
			'StartCode',
			F2(
				function (s, d) {
					return _Utils_update(
						d,
						{
							currentParagraph: _List_fromArray(
								[s]),
							tick: d.tick + 1
						});
				})),
			_Utils_Tuple2(
			'AddToCode',
			F2(
				function (s, d) {
					return _Utils_update(
						d,
						{
							currentParagraph: A2($elm$core$List$cons, s, d.currentParagraph),
							tick: d.tick + 1
						});
				})),
			_Utils_Tuple2(
			'EndCode',
			F2(
				function (s, d) {
					return _Utils_update(
						d,
						{
							currentParagraph: _List_Nil,
							paragraphList: A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									$jxxcarlson$elm_text_editor$Editor$Wrap$CodeParagraph,
									$jxxcarlson$elm_text_editor$Editor$Wrap$joinLinesForCode(
										A2($elm$core$List$cons, s, d.currentParagraph))),
								d.paragraphList)
						});
				})),
			_Utils_Tuple2(
			'StartBlockFromBlank',
			F2(
				function (s, d) {
					return _Utils_update(
						d,
						{
							currentParagraph: _List_fromArray(
								[s]),
							paragraphList: A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									$jxxcarlson$elm_text_editor$Editor$Wrap$TextParagraph,
									$jxxcarlson$elm_text_editor$Editor$Wrap$joinLines(d.currentParagraph)),
								d.paragraphList),
							tick: d.tick + 1
						});
				})),
			_Utils_Tuple2(
			'StartBlockFromParagraph',
			F2(
				function (s, d) {
					return _Utils_update(
						d,
						{
							currentParagraph: _List_fromArray(
								[s]),
							paragraphList: A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									$jxxcarlson$elm_text_editor$Editor$Wrap$TextParagraph,
									$jxxcarlson$elm_text_editor$Editor$Wrap$joinLines(d.currentParagraph)),
								d.paragraphList),
							tick: d.tick + 1
						});
				})),
			_Utils_Tuple2(
			'StartBlock',
			F2(
				function (s, d) {
					return _Utils_update(
						d,
						{
							currentParagraph: _List_fromArray(
								[s]),
							tick: d.tick + 1
						});
				})),
			_Utils_Tuple2(
			'AddToBlock',
			F2(
				function (s, d) {
					return _Utils_update(
						d,
						{
							currentParagraph: A2($elm$core$List$cons, s, d.currentParagraph),
							tick: d.tick + 1
						});
				})),
			_Utils_Tuple2(
			'EndBlock',
			F2(
				function (s, d) {
					return _Utils_update(
						d,
						{
							currentParagraph: _List_Nil,
							paragraphList: A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									$jxxcarlson$elm_text_editor$Editor$Wrap$BlockParagraph,
									$jxxcarlson$elm_text_editor$Editor$Wrap$joinLinesForCode(
										A2($elm$core$List$cons, s, d.currentParagraph))),
								d.paragraphList)
						});
				}))
		]));
var $jxxcarlson$elm_text_editor$Editor$Wrap$op = function (opName) {
	return A2(
		$elm$core$Maybe$withDefault,
		F2(
			function (_v0, d) {
				return d;
			}),
		A2($elm$core$Dict$get, opName, $jxxcarlson$elm_text_editor$Editor$Wrap$opDict));
};
var $jxxcarlson$elm_text_editor$Editor$Wrap$nextStateAndAction = F2(
	function (line, state) {
		var _v0 = _Utils_Tuple2(
			state,
			$jxxcarlson$elm_text_editor$Editor$Wrap$classifyLine(line));
		_v0$18:
		while (true) {
			switch (_v0.a.$) {
				case 'InCode':
					switch (_v0.b.$) {
						case 'CodeDelimiter':
							var _v19 = _v0.a;
							var _v20 = _v0.b;
							return _Utils_Tuple2(
								$jxxcarlson$elm_text_editor$Editor$Wrap$Start,
								$jxxcarlson$elm_text_editor$Editor$Wrap$op('EndCode'));
						case 'Blank':
							var _v21 = _v0.a;
							var _v22 = _v0.b;
							return _Utils_Tuple2(
								$jxxcarlson$elm_text_editor$Editor$Wrap$InCode,
								$jxxcarlson$elm_text_editor$Editor$Wrap$op('AddToCode'));
						case 'Text':
							var _v23 = _v0.a;
							var _v24 = _v0.b;
							return _Utils_Tuple2(
								$jxxcarlson$elm_text_editor$Editor$Wrap$InCode,
								$jxxcarlson$elm_text_editor$Editor$Wrap$op('AddToCode'));
						default:
							break _v0$18;
					}
				case 'InBlank':
					switch (_v0.b.$) {
						case 'Blank':
							var _v7 = _v0.a;
							var _v8 = _v0.b;
							return _Utils_Tuple2(
								$jxxcarlson$elm_text_editor$Editor$Wrap$InBlank,
								$jxxcarlson$elm_text_editor$Editor$Wrap$op('EndParagraph'));
						case 'Text':
							var _v9 = _v0.a;
							var _v10 = _v0.b;
							return _Utils_Tuple2(
								$jxxcarlson$elm_text_editor$Editor$Wrap$InParagraph,
								$jxxcarlson$elm_text_editor$Editor$Wrap$op('StartParagraph'));
						case 'CodeDelimiter':
							var _v11 = _v0.a;
							var _v12 = _v0.b;
							return _Utils_Tuple2(
								$jxxcarlson$elm_text_editor$Editor$Wrap$InCode,
								$jxxcarlson$elm_text_editor$Editor$Wrap$op('StartCodeFromBlank'));
						case 'BeginBlock':
							var _v25 = _v0.a;
							var _v26 = _v0.b;
							return _Utils_Tuple2(
								$jxxcarlson$elm_text_editor$Editor$Wrap$InBlock,
								$jxxcarlson$elm_text_editor$Editor$Wrap$op('StartBlockFromBlank'));
						default:
							break _v0$18;
					}
				case 'InParagraph':
					switch (_v0.b.$) {
						case 'Text':
							var _v1 = _v0.a;
							var _v2 = _v0.b;
							return _Utils_Tuple2(
								$jxxcarlson$elm_text_editor$Editor$Wrap$InParagraph,
								$jxxcarlson$elm_text_editor$Editor$Wrap$op('AddToParagraph'));
						case 'Blank':
							var _v3 = _v0.a;
							var _v4 = _v0.b;
							return _Utils_Tuple2(
								$jxxcarlson$elm_text_editor$Editor$Wrap$InBlank,
								$jxxcarlson$elm_text_editor$Editor$Wrap$op('EndParagraph'));
						case 'CodeDelimiter':
							var _v5 = _v0.a;
							var _v6 = _v0.b;
							return _Utils_Tuple2(
								$jxxcarlson$elm_text_editor$Editor$Wrap$InCode,
								$jxxcarlson$elm_text_editor$Editor$Wrap$op('StartCodeFromParagraph'));
						case 'BeginBlock':
							var _v27 = _v0.a;
							var _v28 = _v0.b;
							return _Utils_Tuple2(
								$jxxcarlson$elm_text_editor$Editor$Wrap$InBlock,
								$jxxcarlson$elm_text_editor$Editor$Wrap$op('StartBlockFromParagraph'));
						default:
							break _v0$18;
					}
				case 'Start':
					switch (_v0.b.$) {
						case 'Text':
							var _v13 = _v0.a;
							var _v14 = _v0.b;
							return _Utils_Tuple2(
								$jxxcarlson$elm_text_editor$Editor$Wrap$InParagraph,
								$jxxcarlson$elm_text_editor$Editor$Wrap$op('StartParagraph'));
						case 'CodeDelimiter':
							var _v15 = _v0.a;
							var _v16 = _v0.b;
							return _Utils_Tuple2(
								$jxxcarlson$elm_text_editor$Editor$Wrap$InCode,
								$jxxcarlson$elm_text_editor$Editor$Wrap$op('StartCode'));
						case 'Blank':
							var _v17 = _v0.a;
							var _v18 = _v0.b;
							return _Utils_Tuple2(
								$jxxcarlson$elm_text_editor$Editor$Wrap$Start,
								$jxxcarlson$elm_text_editor$Editor$Wrap$op('NoOp'));
						case 'BeginBlock':
							var _v29 = _v0.a;
							var _v30 = _v0.b;
							return _Utils_Tuple2(
								$jxxcarlson$elm_text_editor$Editor$Wrap$InBlock,
								$jxxcarlson$elm_text_editor$Editor$Wrap$op('StartBlock'));
						default:
							break _v0$18;
					}
				default:
					switch (_v0.b.$) {
						case 'EndBlock':
							var _v31 = _v0.a;
							var _v32 = _v0.b;
							return _Utils_Tuple2(
								$jxxcarlson$elm_text_editor$Editor$Wrap$Start,
								$jxxcarlson$elm_text_editor$Editor$Wrap$op('EndBlock'));
						case 'Blank':
							var _v33 = _v0.a;
							var _v34 = _v0.b;
							return _Utils_Tuple2(
								$jxxcarlson$elm_text_editor$Editor$Wrap$InBlock,
								$jxxcarlson$elm_text_editor$Editor$Wrap$op('AddToBlock'));
						case 'Text':
							var _v35 = _v0.a;
							var _v36 = _v0.b;
							return _Utils_Tuple2(
								$jxxcarlson$elm_text_editor$Editor$Wrap$InBlock,
								$jxxcarlson$elm_text_editor$Editor$Wrap$op('AddToBlock'));
						default:
							break _v0$18;
					}
			}
		}
		return _Utils_Tuple2(
			$jxxcarlson$elm_text_editor$Editor$Wrap$Start,
			$jxxcarlson$elm_text_editor$Editor$Wrap$op('NoOp'));
	});
var $jxxcarlson$elm_text_editor$Editor$Wrap$nextState = F2(
	function (line, _v0) {
		var state = _v0.a;
		var data = _v0.b;
		var _v1 = A2($jxxcarlson$elm_text_editor$Editor$Wrap$nextStateAndAction, line, state);
		var newState = _v1.a;
		var action = _v1.b;
		return _Utils_Tuple2(
			newState,
			A2(action, line, data));
	});
var $jxxcarlson$elm_text_editor$Editor$Wrap$runFSM = function (str) {
	var lines = $elm$core$String$lines(str);
	var initialData = _Utils_Tuple2(
		$jxxcarlson$elm_text_editor$Editor$Wrap$Start,
		{currentParagraph: _List_Nil, paragraphList: _List_Nil, tick: 0});
	return $elm$core$List$reverse(
		A3($elm$core$List$foldl, $jxxcarlson$elm_text_editor$Editor$Wrap$nextState, initialData, lines).b.paragraphList);
};
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $folkertdev$elm_paragraph$SymmetricList$last = function (_v0) {
	var y = _v0.a;
	var x = _v0.b;
	return (!$elm$core$List$isEmpty(x)) ? $elm$core$List$head(x) : $elm$core$List$head(y);
};
var $folkertdev$elm_paragraph$Paragraph$fold1 = F3(
	function (f, g, list) {
		if (!list.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!list.b.b) {
				var a = list.a;
				return $elm$core$Maybe$Just(
					g(a));
			} else {
				var a = list.a;
				var x = list.b;
				return A2(
					$elm$core$Maybe$map,
					function (xs) {
						return A2(f, a, xs);
					},
					A3($folkertdev$elm_paragraph$Paragraph$fold1, f, g, x));
			}
		}
	});
var $folkertdev$elm_paragraph$Paragraph$scan1 = F3(
	function (f, g, list) {
		var g_ = function (a) {
			return _List_fromArray(
				[
					g(a)
				]);
		};
		var f_ = F2(
			function (a, s) {
				if (!s.b) {
					return s;
				} else {
					var first = s.a;
					var rest = s.b;
					return A2(
						$elm$core$List$cons,
						A2(f, a, first),
						s);
				}
			});
		return A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A3($folkertdev$elm_paragraph$Paragraph$fold1, f_, g_, list));
	});
var $folkertdev$elm_paragraph$SymmetricList$SymmetricList = F2(
	function (a, b) {
		return {$: 'SymmetricList', a: a, b: b};
	});
var $folkertdev$elm_paragraph$SymmetricList$cons = F2(
	function (a, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return (!$elm$core$List$isEmpty(y)) ? A2(
			$folkertdev$elm_paragraph$SymmetricList$SymmetricList,
			A2($elm$core$List$cons, a, x),
			y) : A2(
			$folkertdev$elm_paragraph$SymmetricList$SymmetricList,
			_List_fromArray(
				[a]),
			x);
	});
var $folkertdev$elm_paragraph$SymmetricList$empty = A2($folkertdev$elm_paragraph$SymmetricList$SymmetricList, _List_Nil, _List_Nil);
var $folkertdev$elm_paragraph$SymmetricList$singleton = function (x) {
	return A2($folkertdev$elm_paragraph$SymmetricList$cons, x, $folkertdev$elm_paragraph$SymmetricList$empty);
};
var $folkertdev$elm_paragraph$Paragraph$startr = function (width) {
	return {
		candidates: $folkertdev$elm_paragraph$SymmetricList$singleton(
			{length: 0, waste: 0, width: 0}),
		length: 1,
		width: width
	};
};
var $folkertdev$elm_paragraph$Paragraph$ceildiv = F2(
	function (n, m) {
		return (((n + m) - 1) / m) | 0;
	});
var $folkertdev$elm_paragraph$SymmetricList$head = function (_v0) {
	var x = _v0.a;
	var y = _v0.b;
	return (!$elm$core$List$isEmpty(x)) ? $elm$core$List$head(x) : $elm$core$List$head(y);
};
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $elm$core$Basics$pow = _Basics_pow;
var $folkertdev$elm_paragraph$Paragraph$single = function (p) {
	return !p.length;
};
var $folkertdev$elm_paragraph$SymmetricList$splitAt = F2(
	function (n, xs) {
		return _Utils_Tuple2(
			A2($elm$core$List$take, n, xs),
			A2($elm$core$List$drop, n, xs));
	});
var $folkertdev$elm_paragraph$SymmetricList$tail = function (_v0) {
	var x = _v0.a;
	var y = _v0.b;
	var _v1 = A2(
		$folkertdev$elm_paragraph$SymmetricList$splitAt,
		($elm$core$List$length(y) / 2) | 0,
		y);
	var y0 = _v1.a;
	var y1 = _v1.b;
	if (!x.b) {
		return $folkertdev$elm_paragraph$SymmetricList$empty;
	} else {
		if (!x.b.b) {
			return A2(
				$folkertdev$elm_paragraph$SymmetricList$SymmetricList,
				$elm$core$List$reverse(y1),
				y0);
		} else {
			var rest = x.b;
			return A2($folkertdev$elm_paragraph$SymmetricList$SymmetricList, rest, y);
		}
	}
};
var $folkertdev$elm_paragraph$SymmetricList$uncons = function (symlist) {
	var _v0 = $folkertdev$elm_paragraph$SymmetricList$head(symlist);
	if (_v0.$ === 'Just') {
		var v = _v0.a;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(
				v,
				$folkertdev$elm_paragraph$SymmetricList$tail(symlist)));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $folkertdev$elm_paragraph$SymmetricList$init = function (_v0) {
	var y = _v0.a;
	var x = _v0.b;
	var _v1 = A2(
		$folkertdev$elm_paragraph$SymmetricList$splitAt,
		($elm$core$List$length(y) / 2) | 0,
		y);
	var y0 = _v1.a;
	var y1 = _v1.b;
	if (!x.b) {
		return $folkertdev$elm_paragraph$SymmetricList$empty;
	} else {
		if (!x.b.b) {
			return A2(
				$folkertdev$elm_paragraph$SymmetricList$SymmetricList,
				y0,
				$elm$core$List$reverse(y1));
		} else {
			var rest = x.b;
			return A2($folkertdev$elm_paragraph$SymmetricList$SymmetricList, y, rest);
		}
	}
};
var $folkertdev$elm_paragraph$SymmetricList$unsnoc = function (symlist) {
	var _v0 = $folkertdev$elm_paragraph$SymmetricList$last(symlist);
	if (_v0.$ === 'Just') {
		var v = _v0.a;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(
				$folkertdev$elm_paragraph$SymmetricList$init(symlist),
				v));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $folkertdev$elm_paragraph$Paragraph$stepr = F3(
	function (options, w, state) {
		var tot_width = (w + 1) + state.width;
		var width_hd = function (p) {
			return (tot_width - p.width) - 1;
		};
		var waste = function (p) {
			return $folkertdev$elm_paragraph$Paragraph$single(p) ? 0 : (p.waste + A2(
				$elm$core$Basics$pow,
				options.optimalWidth - width_hd(p),
				2));
		};
		var tot_len = 1 + state.length;
		var old_width_hd = function (p) {
			return (state.width - p.width) - 1;
		};
		var _new = function (p) {
			return $folkertdev$elm_paragraph$Paragraph$single(p) ? {length: state.length, waste: 0, width: state.width} : {
				length: state.length,
				waste: p.width + A2(
					$elm$core$Basics$pow,
					options.optimalWidth - old_width_hd(p),
					2),
				width: state.width
			};
		};
		var k = F2(
			function (p, q) {
				var wq0 = width_hd(q);
				var wp0 = width_hd(p);
				var rq0 = (options.maximumWidth - wq0) + 1;
				return ($folkertdev$elm_paragraph$Paragraph$single(q) && (!p.width)) ? A2($elm$core$Basics$min, options.optimalWidth - wp0, rq0) : ($folkertdev$elm_paragraph$Paragraph$single(q) ? rq0 : A2(
					$elm$core$Basics$min,
					A2(
						$folkertdev$elm_paragraph$Paragraph$ceildiv,
						waste(p) - waste(q),
						2 * (wq0 - wp0)),
					rq0));
			});
		var discardBadCandidates = function (ps_pq) {
			discardBadCandidates:
			while (true) {
				var _v0 = $folkertdev$elm_paragraph$SymmetricList$unsnoc(ps_pq);
				if (_v0.$ === 'Nothing') {
					return ps_pq;
				} else {
					var _v1 = _v0.a;
					var ps_p = _v1.a;
					var q = _v1.b;
					var _v2 = $folkertdev$elm_paragraph$SymmetricList$last(ps_p);
					if (_v2.$ === 'Nothing') {
						return (_Utils_cmp(
							width_hd(q),
							options.maximumWidth) > 0) ? $folkertdev$elm_paragraph$SymmetricList$empty : ps_pq;
					} else {
						var p = _v2.a;
						if ((_Utils_cmp(
							waste(p),
							waste(q)) < 1) || (_Utils_cmp(
							width_hd(q),
							options.maximumWidth) > 0)) {
							var $temp$ps_pq = ps_p;
							ps_pq = $temp$ps_pq;
							continue discardBadCandidates;
						} else {
							return ps_pq;
						}
					}
				}
			}
		};
		var add = F2(
			function (p, qr_rs) {
				add:
				while (true) {
					var _default = A2($folkertdev$elm_paragraph$SymmetricList$cons, p, qr_rs);
					var _v3 = $folkertdev$elm_paragraph$SymmetricList$uncons(qr_rs);
					if (_v3.$ === 'Nothing') {
						return _default;
					} else {
						var _v4 = _v3.a;
						var q = _v4.a;
						var r_rs = _v4.b;
						var _v5 = $folkertdev$elm_paragraph$SymmetricList$head(r_rs);
						if (_v5.$ === 'Just') {
							var r = _v5.a;
							if (_Utils_cmp(
								A2(k, p, q),
								A2(k, q, r)) < 1) {
								var $temp$p = p,
									$temp$qr_rs = r_rs;
								p = $temp$p;
								qr_rs = $temp$qr_rs;
								continue add;
							} else {
								return _default;
							}
						} else {
							return _default;
						}
					}
				}
			});
		var _v6 = $folkertdev$elm_paragraph$SymmetricList$last(state.candidates);
		if (_v6.$ === 'Nothing') {
			return state;
		} else {
			var last = _v6.a;
			var input = A2(
				add,
				_new(last),
				state.candidates);
			var newCandidates = discardBadCandidates(input);
			return {candidates: newCandidates, length: tot_len, width: tot_width};
		}
	});
var $folkertdev$elm_paragraph$Paragraph$splitAt = F2(
	function (n, xs) {
		return _Utils_Tuple2(
			A2($elm$core$List$take, n, xs),
			A2($elm$core$List$drop, n, xs));
	});
var $folkertdev$elm_paragraph$Paragraph$tile = F2(
	function (words, _v0) {
		var wordLengths = _v0.a;
		var targetLength = _v0.b;
		if (!wordLengths.b) {
			return _List_Nil;
		} else {
			var m = wordLengths.a;
			var ms = wordLengths.b;
			var remainingSpace = targetLength - m;
			var _v2 = A2($folkertdev$elm_paragraph$Paragraph$splitAt, remainingSpace, words);
			var usedWords = _v2.a;
			var remainingWords = _v2.b;
			return A2(
				$elm$core$List$cons,
				usedWords,
				A2(
					$folkertdev$elm_paragraph$Paragraph$tile,
					remainingWords,
					_Utils_Tuple2(
						A2(
							$elm$core$List$drop,
							remainingSpace,
							A2($elm$core$List$cons, m, ms)),
						m)));
		}
	});
var $folkertdev$elm_paragraph$Paragraph$paragraph = F2(
	function (options, words) {
		var zs = A3(
			$folkertdev$elm_paragraph$Paragraph$scan1,
			$folkertdev$elm_paragraph$Paragraph$stepr(options),
			$folkertdev$elm_paragraph$Paragraph$startr,
			A2($elm$core$List$map, options.stringWidth, words));
		if (!zs.b) {
			return _List_Nil;
		} else {
			var first = zs.a;
			var rest = zs.b;
			var wordLengths = A2(
				$elm$core$List$filterMap,
				A2(
					$elm$core$Basics$composeL,
					A2(
						$elm$core$Basics$composeL,
						$elm$core$Maybe$map(
							function ($) {
								return $.length;
							}),
						$folkertdev$elm_paragraph$SymmetricList$last),
					function ($) {
						return $.candidates;
					}),
				zs);
			var targetLength = first.length;
			return A2(
				$folkertdev$elm_paragraph$Paragraph$tile,
				words,
				_Utils_Tuple2(wordLengths, targetLength));
		}
	});
var $folkertdev$elm_paragraph$Paragraph$do = F2(
	function (a, list) {
		if (!list.b) {
			return _List_fromArray(
				[_List_Nil]);
		} else {
			var first = list.a;
			var rest = list.b;
			var _break = F3(
				function (p, q, xs) {
					if (_Utils_eq(p, q)) {
						return A2($elm$core$List$cons, _List_Nil, xs);
					} else {
						if (!xs.b) {
							return A2(
								$elm$core$List$cons,
								A2($elm$core$List$cons, q, _List_Nil),
								_List_Nil);
						} else {
							var y = xs.a;
							var ys = xs.b;
							return A2(
								$elm$core$List$cons,
								A2($elm$core$List$cons, q, y),
								ys);
						}
					}
				});
			var start = F2(
				function (p, q) {
					return A3(
						_break,
						p,
						q,
						_List_fromArray(
							[_List_Nil]));
				});
			return A2(
				$elm$core$Maybe$withDefault,
				_List_fromArray(
					[_List_Nil]),
				A3(
					$folkertdev$elm_paragraph$Paragraph$fold1,
					_break(a),
					start(a),
					list));
		}
	});
var $folkertdev$elm_paragraph$Paragraph$paras = A2(
	$elm$core$Basics$composeL,
	$elm$core$List$filter(
		A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$List$isEmpty)),
	$folkertdev$elm_paragraph$Paragraph$do(_List_Nil));
var $elm$core$String$words = _String_words;
var $folkertdev$elm_paragraph$Paragraph$parse = A2(
	$elm$core$Basics$composeL,
	A2(
		$elm$core$Basics$composeL,
		$folkertdev$elm_paragraph$Paragraph$paras,
		$elm$core$List$map($elm$core$String$words)),
	$elm$core$String$lines);
var $folkertdev$elm_paragraph$Paragraph$undo = function (a) {
	var insert = F2(
		function (xs, ys) {
			return _Utils_ap(
				xs,
				_Utils_ap(
					_List_fromArray(
						[a]),
					ys));
		});
	return A2(
		$elm$core$Basics$composeL,
		$elm$core$Maybe$withDefault(_List_Nil),
		A2($folkertdev$elm_paragraph$Paragraph$fold1, insert, $elm$core$Basics$identity));
};
var $folkertdev$elm_paragraph$Paragraph$unparas = $folkertdev$elm_paragraph$Paragraph$undo(_List_Nil);
var $folkertdev$elm_paragraph$Paragraph$lines = function (options) {
	return A2(
		$elm$core$Basics$composeL,
		A2(
			$elm$core$Basics$composeL,
			A2(
				$elm$core$Basics$composeL,
				$elm$core$List$map(
					$elm$core$String$join(' ')),
				$folkertdev$elm_paragraph$Paragraph$unparas),
			$elm$core$List$map(
				A2(
					$elm$core$Basics$composeL,
					$folkertdev$elm_paragraph$Paragraph$paragraph(options),
					$elm$core$List$concat))),
		$folkertdev$elm_paragraph$Paragraph$parse);
};
var $jxxcarlson$elm_text_editor$Editor$Wrap$wrapParagraph = F2(
	function (wrapParams, _v0) {
		var paragraphType = _v0.a;
		var str = _v0.b;
		switch (paragraphType.$) {
			case 'TextParagraph':
				return A2(
					$elm$core$String$join,
					'\n',
					A2($folkertdev$elm_paragraph$Paragraph$lines, wrapParams, str));
			case 'CodeParagraph':
				return str;
			default:
				return str;
		}
	});
var $jxxcarlson$elm_text_editor$Editor$Wrap$paragraphs = F2(
	function (wrapParams, str) {
		return A2(
			$elm$core$String$join,
			'\n\n',
			A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					$jxxcarlson$elm_text_editor$Editor$Wrap$wrapParagraph(wrapParams),
					$elm$core$String$trim),
				A2(
					$elm$core$List$filter,
					function (_v0) {
						var t = _v0.a;
						var s = _v0.b;
						return s !== '';
					},
					$jxxcarlson$elm_text_editor$Editor$Wrap$runFSM(str + '\n'))));
	});
var $jxxcarlson$elm_text_editor$Editor$insert = F4(
	function (wrapOption, position, string, _v0) {
		var data = _v0.a;
		var textToInsert = function () {
			if (wrapOption.$ === 'DoWrap') {
				return A2($jxxcarlson$elm_text_editor$Editor$Wrap$paragraphs, data.state.config.wrapParams, string);
			} else {
				return string;
			}
		}();
		return $jxxcarlson$elm_text_editor$Editor$Editor(
			_Utils_update(
				data,
				{
					buffer: A3($jxxcarlson$elm_text_editor$Buffer$insert, position, textToInsert, data.buffer)
				}));
	});
var $jxxcarlson$elm_text_editor$Editor$placeInClipboard = F2(
	function (str, _v0) {
		var data = _v0.a;
		var oldState = data.state;
		var newState = _Utils_update(
			oldState,
			{clipboard: str});
		return $jxxcarlson$elm_text_editor$Editor$Editor(
			_Utils_update(
				data,
				{state: newState}));
	});
var $author$project$Main$pasteToEditorClipboard = F2(
	function (model, str) {
		var wrapOption = $jxxcarlson$elm_text_editor$Editor$getWrapOption(model.editor);
		var editor2 = A2($jxxcarlson$elm_text_editor$Editor$placeInClipboard, str, model.editor);
		var cursor = $jxxcarlson$elm_text_editor$Editor$getCursor(model.editor);
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{
					editor: A4($jxxcarlson$elm_text_editor$Editor$insert, wrapOption, cursor, str, editor2)
				}),
			$elm$core$Platform$Cmd$none);
	});
var $author$project$Markdown$Parse$equalContent = F2(
	function (_v0, _v1) {
		var bt1 = _v0.b;
		var l1 = _v0.c;
		var c1 = _v0.d;
		var bt2 = _v1.b;
		var l2 = _v1.c;
		var c2 = _v1.d;
		if (!(l1 - l2)) {
			if (bt1.$ === 'BalancedBlock') {
				var balanced1 = bt1.a;
				if (bt2.$ === 'BalancedBlock') {
					var balanced2 = bt2.a;
					if (_Utils_eq(balanced1, balanced2)) {
						if (c1.$ === 'T') {
							var a = c1.a;
							if (c2.$ === 'T') {
								var b = c2.a;
								return _Utils_eq(a, b);
							} else {
								return false;
							}
						} else {
							var a = c1.a;
							if (c2.$ === 'M') {
								var b = c2.a;
								return _Utils_eq(a, b);
							} else {
								return false;
							}
						}
					} else {
						return false;
					}
				} else {
					return false;
				}
			} else {
				var markdown1 = bt1.a;
				if (bt2.$ === 'MarkdownBlock') {
					var markdown2 = bt2.a;
					if (_Utils_eq(markdown1, markdown2)) {
						if (c1.$ === 'T') {
							var a = c1.a;
							if (c2.$ === 'T') {
								var b = c2.a;
								return _Utils_eq(a, b);
							} else {
								return false;
							}
						} else {
							var a = c1.a;
							if (c2.$ === 'M') {
								var b = c2.a;
								return _Utils_eq(a, b);
							} else {
								return false;
							}
						}
					} else {
						return false;
					}
				} else {
					return false;
				}
			}
		} else {
			return false;
		}
	});
var $zwilias$elm_rosetree$Tree$Diff$mergeConf = {
	copyL: F3(
		function (l, c, _v0) {
			return A2(
				$zwilias$elm_rosetree$Tree$tree,
				l,
				$elm$core$List$reverse(c));
		}),
	copyR: F3(
		function (l, c, cs) {
			return A2(
				$zwilias$elm_rosetree$Tree$tree,
				l,
				A3($elm$core$List$foldl, $elm$core$List$cons, cs, c));
		}),
	copyS: F2(
		function (l, c) {
			return A2(
				$zwilias$elm_rosetree$Tree$tree,
				l,
				$elm$core$List$reverse(c));
		}),
	keep: $elm$core$Basics$identity,
	replace: F2(
		function (_v1, t) {
			return t;
		})
};
var $zwilias$elm_rosetree$Tree$Diff$walk = F4(
	function (conf, eq, acc, stack) {
		walk:
		while (true) {
			var _v0 = _Utils_Tuple2(acc.left, acc.right);
			if (!_v0.a.b) {
				if (!_v0.b.b) {
					var p = acc.isAllKeep ? conf.keep(acc.tree) : A2(
						conf.copyS,
						$zwilias$elm_rosetree$Tree$label(acc.tree),
						acc.done);
					if (!stack.b) {
						return p;
					} else {
						var newAcc = stack.a;
						var rest = stack.b;
						var $temp$conf = conf,
							$temp$eq = eq,
							$temp$acc = {
							done: A2($elm$core$List$cons, p, newAcc.done),
							isAllKeep: acc.isAllKeep && newAcc.isAllKeep,
							left: newAcc.left,
							right: newAcc.right,
							tree: newAcc.tree
						},
							$temp$stack = rest;
						conf = $temp$conf;
						eq = $temp$eq;
						acc = $temp$acc;
						stack = $temp$stack;
						continue walk;
					}
				} else {
					var _v2 = _v0.b;
					var p = A3(
						conf.copyR,
						$zwilias$elm_rosetree$Tree$label(acc.tree),
						acc.done,
						acc.right);
					if (!stack.b) {
						return p;
					} else {
						var newAcc = stack.a;
						var rest = stack.b;
						var $temp$conf = conf,
							$temp$eq = eq,
							$temp$acc = {
							done: A2($elm$core$List$cons, p, newAcc.done),
							isAllKeep: acc.isAllKeep && newAcc.isAllKeep,
							left: newAcc.left,
							right: newAcc.right,
							tree: newAcc.tree
						},
							$temp$stack = rest;
						conf = $temp$conf;
						eq = $temp$eq;
						acc = $temp$acc;
						stack = $temp$stack;
						continue walk;
					}
				}
			} else {
				if (!_v0.b.b) {
					var _v4 = _v0.a;
					var p = A3(
						conf.copyL,
						$zwilias$elm_rosetree$Tree$label(acc.tree),
						acc.done,
						acc.left);
					if (!stack.b) {
						return p;
					} else {
						var newAcc = stack.a;
						var rest = stack.b;
						var $temp$conf = conf,
							$temp$eq = eq,
							$temp$acc = {
							done: A2($elm$core$List$cons, p, newAcc.done),
							isAllKeep: acc.isAllKeep && newAcc.isAllKeep,
							left: newAcc.left,
							right: newAcc.right,
							tree: newAcc.tree
						},
							$temp$stack = rest;
						conf = $temp$conf;
						eq = $temp$eq;
						acc = $temp$acc;
						stack = $temp$stack;
						continue walk;
					}
				} else {
					var _v6 = _v0.a;
					var l = _v6.a;
					var restL = _v6.b;
					var _v7 = _v0.b;
					var r = _v7.a;
					var restR = _v7.b;
					if (A2(
						eq,
						$zwilias$elm_rosetree$Tree$label(l),
						$zwilias$elm_rosetree$Tree$label(r))) {
						var $temp$conf = conf,
							$temp$eq = eq,
							$temp$acc = {
							done: _List_Nil,
							isAllKeep: true,
							left: $zwilias$elm_rosetree$Tree$children(l),
							right: $zwilias$elm_rosetree$Tree$children(r),
							tree: l
						},
							$temp$stack = A2(
							$elm$core$List$cons,
							{done: acc.done, isAllKeep: acc.isAllKeep, left: restL, right: restR, tree: acc.tree},
							stack);
						conf = $temp$conf;
						eq = $temp$eq;
						acc = $temp$acc;
						stack = $temp$stack;
						continue walk;
					} else {
						var $temp$conf = conf,
							$temp$eq = eq,
							$temp$acc = {
							done: A2(
								$elm$core$List$cons,
								A2(conf.replace, l, r),
								acc.done),
							isAllKeep: false,
							left: restL,
							right: restR,
							tree: acc.tree
						},
							$temp$stack = stack;
						conf = $temp$conf;
						eq = $temp$eq;
						acc = $temp$acc;
						stack = $temp$stack;
						continue walk;
					}
				}
			}
		}
	});
var $zwilias$elm_rosetree$Tree$Diff$mergeWith = F3(
	function (eq, left, right) {
		return A2(
			eq,
			$zwilias$elm_rosetree$Tree$label(left),
			$zwilias$elm_rosetree$Tree$label(right)) ? A4(
			$zwilias$elm_rosetree$Tree$Diff$walk,
			$zwilias$elm_rosetree$Tree$Diff$mergeConf,
			eq,
			{
				done: _List_Nil,
				isAllKeep: true,
				left: $zwilias$elm_rosetree$Tree$children(left),
				right: $zwilias$elm_rosetree$Tree$children(right),
				tree: left
			},
			_List_Nil) : right;
	});
var $author$project$Main$processContent = F2(
	function (str, model) {
		var newAst_ = A3($author$project$Markdown$Parse$toMDBlockTree, model.counter, model.option, str);
		var newAst = A3($zwilias$elm_rosetree$Tree$Diff$mergeWith, $author$project$Markdown$Parse$equalContent, model.lastAst, newAst_);
		return _Utils_update(
			model,
			{
				counter: model.counter + 1,
				lastAst: newAst,
				renderedText: A4(
					$author$project$Markdown$Render$withOptionsFromAST,
					$author$project$Markdown$Option$ExtendedMath,
					$author$project$Markdown$Option$ExternalTOC('Contents'),
					model.selectedId,
					newAst),
				sourceText: str
			});
	});
var $author$project$Markdown$Parse$idOfBlock = function (_v0) {
	var id = _v0.a;
	return id;
};
var $author$project$MDInline$indentLine = function (s) {
	return '  ' + s;
};
var $author$project$MDInline$string = function (mmInline) {
	switch (mmInline.$) {
		case 'OrdinaryText':
			var str = mmInline.a;
			return 'Text [' + (str + ']');
		case 'ItalicText':
			var str = mmInline.a;
			return 'Italic [' + (str + ']');
		case 'BoldText':
			var str = mmInline.a;
			return 'Bold [' + (str + ']');
		case 'Code':
			var str = mmInline.a;
			return 'Code [' + (str + ']');
		case 'InlineMath':
			var str = mmInline.a;
			return 'InlineMath [' + (str + ']');
		case 'StrikeThroughText':
			var str = mmInline.a;
			return 'StrikeThroughText [' + (str + ']');
		case 'BracketedText':
			var str = mmInline.a;
			return 'Bracketed [' + (str + ']');
		case 'Link':
			var a = mmInline.a;
			var b = mmInline.b;
			return 'Link [' + (a + ('](' + (b + ')')));
		case 'Image':
			var a = mmInline.a;
			var b = mmInline.b;
			return 'Image [' + (a + ('](' + (b + ')')));
		case 'Line':
			var arg = mmInline.a;
			return 'Line [' + (A2(
				$elm$core$String$join,
				' ',
				A2($elm$core$List$map, $author$project$MDInline$string, arg)) + ']');
		case 'Paragraph':
			var arg = mmInline.a;
			return 'Paragraph [' + (A2(
				$elm$core$String$join,
				'\n',
				A2(
					$elm$core$List$map,
					$author$project$MDInline$indentLine,
					A2($elm$core$List$map, $author$project$MDInline$string, arg))) + ']');
		case 'Stanza':
			var arg = mmInline.a;
			return 'Stanza [\n' + (arg + '\n]');
		default:
			var arg = mmInline.a;
			return 'Ordinary [' + (A2(
				$elm$core$String$join,
				' ',
				A2($elm$core$List$map, $author$project$MDInline$string, arg)) + ']');
	}
};
var $author$project$MDInline$string2 = function (mmInline) {
	switch (mmInline.$) {
		case 'OrdinaryText':
			var str = mmInline.a;
			return str;
		case 'ItalicText':
			var str = mmInline.a;
			return str;
		case 'BoldText':
			var str = mmInline.a;
			return str;
		case 'Code':
			var str = mmInline.a;
			return str;
		case 'InlineMath':
			var str = mmInline.a;
			return str;
		case 'StrikeThroughText':
			var str = mmInline.a;
			return str;
		case 'BracketedText':
			var str = mmInline.a;
			return str;
		case 'Link':
			var a = mmInline.a;
			var b = mmInline.b;
			return _Utils_ap(a, b);
		case 'Image':
			var a = mmInline.a;
			var b = mmInline.b;
			return _Utils_ap(a, b);
		case 'Line':
			var arg = mmInline.a;
			return A2(
				$elm$core$String$join,
				' ',
				A2($elm$core$List$map, $author$project$MDInline$string2, arg));
		case 'Paragraph':
			var arg = mmInline.a;
			return A2(
				$elm$core$String$join,
				'\n',
				A2($elm$core$List$map, $author$project$MDInline$string2, arg));
		case 'Stanza':
			var arg = mmInline.a;
			return arg;
		default:
			var arg = mmInline.a;
			return 'Error [' + (A2(
				$elm$core$String$join,
				' ',
				A2($elm$core$List$map, $author$project$MDInline$string, arg)) + ']');
	}
};
var $author$project$Markdown$Parse$stringContentFromBlock = function (_v0) {
	var c = _v0.d;
	if (c.$ === 'T') {
		var str = c.a;
		return str;
	} else {
		var mdInline = c.a;
		return $author$project$MDInline$string2(mdInline);
	}
};
var $author$project$Prefix$drop = F2(
	function (prefix, str) {
		return A2(
			$elm$core$String$dropLeft,
			$elm$core$String$length(prefix),
			str);
	});
var $author$project$Prefix$Expecting = function (a) {
	return {$: 'Expecting', a: a};
};
var $author$project$Prefix$parseWhile = function (accepting) {
	return $elm$parser$Parser$Advanced$getChompedString(
		$elm$parser$Parser$Advanced$chompWhile(accepting));
};
var $author$project$Prefix$headingBlock1 = $elm$parser$Parser$Advanced$getChompedString(
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$Advanced$spaces),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'#',
					$author$project$Prefix$Expecting('Expecting \'#\' to begin heading block')))),
		$author$project$Prefix$parseWhile(
			function (c) {
				return _Utils_eq(
					c,
					_Utils_chr('#'));
			})));
var $author$project$Prefix$headingBlock2 = $elm$parser$Parser$Advanced$getChompedString(
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$Advanced$spaces),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'##',
					$author$project$Prefix$Expecting('Expecting \'##\' to begin level 2 heading block')))),
		$author$project$Prefix$parseWhile(
			function (c) {
				return _Utils_eq(
					c,
					_Utils_chr('#'));
			})));
var $author$project$Prefix$headingBlock3 = $elm$parser$Parser$Advanced$getChompedString(
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$Advanced$spaces),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'###',
					$author$project$Prefix$Expecting('Expecting \'###\' to begin level 3 heading block')))),
		$author$project$Prefix$parseWhile(
			function (c) {
				return _Utils_eq(
					c,
					_Utils_chr('#'));
			})));
var $author$project$Prefix$heading = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[$author$project$Prefix$headingBlock1, $author$project$Prefix$headingBlock2, $author$project$Prefix$headingBlock3]));
var $author$project$Prefix$oListPrefix = A2(
	$elm$parser$Parser$Advanced$map,
	function (x) {
		return x + '. ';
	},
	$elm$parser$Parser$Advanced$getChompedString(
		A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$Advanced$chompUntil(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'.',
					$author$project$Prefix$Expecting('expecting \'.\' to begin OListItem block'))))));
var $author$project$Prefix$unorderedListItem = $elm$parser$Parser$Advanced$getChompedString(
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$Advanced$spaces),
		$elm$parser$Parser$Advanced$symbol(
			A2(
				$elm$parser$Parser$Advanced$Token,
				'-',
				$author$project$Prefix$Expecting('Expecting \'-\' to begin item')))));
var $author$project$Prefix$parsePrefix = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[$author$project$Prefix$heading, $author$project$Prefix$unorderedListItem, $author$project$Prefix$oListPrefix]));
var $author$project$Prefix$get = function (str) {
	var _v0 = A2($elm$parser$Parser$Advanced$run, $author$project$Prefix$parsePrefix, str);
	if (_v0.$ === 'Ok') {
		var str_ = _v0.a;
		return str_;
	} else {
		return '';
	}
};
var $author$project$Prefix$parseGoodChars = $elm$parser$Parser$Advanced$getChompedString(
	A2(
		$elm$parser$Parser$Advanced$keeper,
		$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
		$author$project$Prefix$parseWhile(
			function (c) {
				return (!_Utils_eq(
					c,
					_Utils_chr('*'))) && ((!_Utils_eq(
					c,
					_Utils_chr('$'))) && ((!_Utils_eq(
					c,
					_Utils_chr('~'))) && (!_Utils_eq(
					c,
					_Utils_chr('!')))));
			})));
var $author$project$Prefix$getGoodPrefix = function (str) {
	var _v0 = A2($elm$parser$Parser$Advanced$run, $author$project$Prefix$parseGoodChars, str);
	if (_v0.$ === 'Ok') {
		var str_ = _v0.a;
		return str_;
	} else {
		return 'xyx@xyx!!';
	}
};
var $author$project$Prefix$truncate = function (str_) {
	var str = $elm$core$String$trimLeft(str_);
	return $elm$core$String$trimLeft(
		$author$project$Prefix$getGoodPrefix(
			A2(
				$author$project$Prefix$drop,
				$author$project$Prefix$get(str),
				str)));
};
var $author$project$Markdown$Parse$searchAST = F2(
	function (str, ast) {
		return A2(
			$elm$core$Maybe$map,
			$author$project$Markdown$Parse$idOfBlock,
			$elm$core$List$head(
				A2(
					$elm$core$List$filter,
					function (block) {
						return A2(
							$elm$core$String$contains,
							$elm$core$String$trim(
								$author$project$Prefix$truncate(str)),
							$author$project$Prefix$truncate(
								$author$project$Markdown$Parse$stringContentFromBlock(block)));
					},
					$zwilias$elm_rosetree$Tree$flatten(ast))));
	});
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $author$project$Outside$infoForOutside = _Platform_outgoingPort(
	'infoForOutside',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'data',
					$elm$core$Basics$identity($.data)),
					_Utils_Tuple2(
					'tag',
					$elm$json$Json$Encode$string($.tag))
				]));
	});
var $author$project$Outside$sendInfo = function (info) {
	if (info.$ === 'AskForClipBoard') {
		var value = info.a;
		return $author$project$Outside$infoForOutside(
			{data: $elm$json$Json$Encode$null, tag: 'AskForClipBoard'});
	} else {
		var str = info.a;
		return $author$project$Outside$infoForOutside(
			{
				data: $elm$json$Json$Encode$string(str),
				tag: 'WriteToClipboard'
			});
	}
};
var $author$project$Main$highlightVerticalOffset = 160;
var $author$project$Main$setViewPortForSelectedLine = F2(
	function (element, viewport) {
		var y = ((viewport.viewport.y + element.element.y) - element.element.height) - $author$project$Main$highlightVerticalOffset;
		return A2(
			$elm$core$Task$attempt,
			function (_v0) {
				return $author$project$Main$NoOp;
			},
			A3($elm$browser$Browser$Dom$setViewportOf, '_rendered_text_', 0, y));
	});
var $author$project$Main$SetViewPortForElement = function (a) {
	return {$: 'SetViewPortForElement', a: a};
};
var $elm$browser$Browser$Dom$getElement = _Browser_getElement;
var $author$project$Main$getElementWithViewPort = F2(
	function (vp, id) {
		return A2(
			$elm$core$Task$map,
			function (el) {
				return _Utils_Tuple2(el, vp);
			},
			$elm$browser$Browser$Dom$getElement(id));
	});
var $elm$browser$Browser$Dom$getViewportOf = _Browser_getViewportOf;
var $author$project$Main$setViewportForElement = function (id) {
	return A2(
		$elm$core$Task$attempt,
		$author$project$Main$SetViewPortForElement,
		A2(
			$elm$core$Task$andThen,
			function (vp) {
				return A2($author$project$Main$getElementWithViewPort, vp, id);
			},
			$elm$browser$Browser$Dom$getViewportOf('_rendered_text_')));
};
var $author$project$Markdown$Parse$equalIds = F2(
	function (a, b) {
		return _Utils_eq(
			$author$project$Markdown$Parse$idOfBlock(a),
			$author$project$Markdown$Parse$idOfBlock(b));
	});
var $author$project$Main$processContentForHighlighting = F2(
	function (str, model) {
		var newAst_ = A3($author$project$Markdown$Parse$toMDBlockTree, model.counter, model.option, str);
		var newAst = A3($zwilias$elm_rosetree$Tree$Diff$mergeWith, $author$project$Markdown$Parse$equalIds, model.lastAst, newAst_);
		return _Utils_update(
			model,
			{
				counter: model.counter + 1,
				lastAst: newAst,
				renderedText: A4(
					$author$project$Markdown$Render$withOptionsFromAST,
					$author$project$Markdown$Option$ExtendedMath,
					$author$project$Markdown$Option$ExternalTOC('Contents'),
					model.selectedId,
					newAst),
				sourceText: str
			});
	});
var $author$project$Main$syncAndHighlightRenderedText = F3(
	function (str, cmd, model) {
		var id = function () {
			var _v0 = A2($author$project$Markdown$Parse$searchAST, str, model.lastAst);
			if (_v0.$ === 'Nothing') {
				return _Utils_Tuple2(0, 0);
			} else {
				var id_ = _v0.a;
				return function (_v1) {
					var a = _v1.a;
					var b = _v1.b;
					return _Utils_Tuple2(a, b + 1);
				}(id_);
			}
		}();
		return _Utils_Tuple2(
			A2(
				$author$project$Main$processContentForHighlighting,
				model.sourceText,
				_Utils_update(
					model,
					{selectedId: id})),
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[
						cmd,
						$author$project$Main$setViewportForElement(
						$author$project$Markdown$Parse$stringFromId(id))
					])));
	});
var $author$project$Main$updateRenderingData = F2(
	function (model, text_) {
		var newAst_ = A3($author$project$Markdown$Parse$toMDBlockTree, model.counter, model.option, text_);
		var newAst__ = A3($zwilias$elm_rosetree$Tree$Diff$mergeWith, $author$project$Markdown$Parse$equalContent, model.lastAst, newAst_);
		var renderedText__ = A4(
			$author$project$Markdown$Render$withOptionsFromAST,
			$author$project$Markdown$Option$ExtendedMath,
			$author$project$Markdown$Option$ExternalTOC('Contents'),
			_Utils_Tuple2(0, 0),
			newAst__);
		return _Utils_Tuple2(newAst__, renderedText__);
	});
var $author$project$Main$syncWithEditor = F3(
	function (model, editor_, cmd_) {
		var text = $jxxcarlson$elm_text_editor$Editor$getSource(editor_);
		var _v0 = A2($author$project$Main$updateRenderingData, model, text);
		var newAst = _v0.a;
		var renderedText = _v0.b;
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{counter: model.counter + 1, editor: editor_, lastAst: newAst, renderedText: renderedText}),
			A2($elm$core$Platform$Cmd$map, $author$project$Main$EditorMsg, cmd_));
	});
var $author$project$Strings$text2 = '\n# Propagation and Evolution\n\n\n## The propagator\n\nConsider a wave function $\\psi(x,t)$.\nIf we fix $t$ and let $x$ vary, the result\nis an element $\\psi(t)$ of $L^2(R)$ or,\nmore generally $L^2(\\text{configuration space})$.\nThus the evolution of our system in time is given\nby a function $t \\mapsto \\psi(t)$.  The\ndynamics of this path in Hilbert space is\ngoverned by an ordinary differential equation ,\n\n$$\ni\\hbar\\frac{d\\psi}{dt} = H\\phi,\n$$\n\nNow consider bases of orthogonal normalized states\n$\\{\\; \\psi_k(t_1)\\;\\}$ and $\\{\\; \\psi_k(t_0) \\; \\}$\nat times $t_1$ and $t_0$, with $t_1 > t_0$.\nThere is a unique linear transformation $U(t_1,t_0)$\nsuch that $\\psi_k(t_1) = U(t_1,t_0)\\psi_k(t_0)$ for all $k$.\nIt must be unitary because the bases are orthonormal.\nThis family of transformations is called the \\term{propagator}.\nThe propagator satisfies various identities, e.g., the composition law\n\n$$\nU(t_2, t_0) = U(t_2, t_1)U(t_1, t_0)\n$$\n\nas well as $U(t,t) = 1$, $U(t_1,t_2) = U(t_2,t_1)^{-1}$.\n\nLet us write $U(t) = U(t,0)$ for convenience, and let us suppose given states $\\alpha$ and $\\beta$.  The probability that the system finds itself in state $\\beta$ after time $t$ is given by the matrix element\n\n$$\n\\bra \\beta U(t)  \\ket \\alpha\n$$\n\nThis is just the kind of information we need for comparison with experiment.\n\nThe propagator, like the family of state vectors $\\psi(t)$, satisfies a differential equation -- essentially a Schroedinger equation for operators.  To find it, differentiate the  equation $\\psi(t) = U(t)\\psi(0)$ to obtain\n\n$$\ni\\hbar \\frac{d\\psi}{dt} = i\\hbar \\frac{dU}{dt}\\psi(0)\n$$\n\nSubstitute (C) to obtain\n\n$$\ni\\hbar \\frac{dU}{dt}\\psi(0)  = H\\psi(t)\n$$\n\nApplying $\\psi(t) = U(t)\\psi(0)$ again, we find that\n\n$$\ni\\hbar \\frac{dU}{dt}\\psi(0) = HU\\psi(0)\n$$\n\nIf this is to hold for arbitrary $\\psi(0)$, then\n\n$$\n\\frac{dU}{dt} = -\\frac{i}{\\hbar}HU\n$$\n\nIf $H$ does not depend on time, the preceding  ODE has an immediate solution, namely\n\n\n$$\nU(t) = e^{-i(t/\\hbar) H}\n$$\n\nThink of $H$ as a big matrix, and of the expression on the right as a big matrix exponential.\n\n\n## Free particle propagator\n\n\nLet us find the free-particle propagator. To begin, let $\\phi(x) = \\psi(x,0)$ be the the wave function at time $t = 0$.  Write it as a Fourier integral,\n\n$$\n\\psi(x,0) = \\frac{1}{\\sqrt{2\\pi}}\\int_{-\\infty}^\\infty a(p) e^{ipx} dp\n$$\n\nwhere $a(p) = \\hat\\phi(p)$.\nThe free-particle evolution operator is\n\n$$\ne^{-(it/\\hbar)H} = e^{-i\\hat p^2/2m\\hbar}\n$$\n\nWe proceed with $\\hbar = 1$ then rescale afterwards.\nThe wave function at time $t$ is\n\n$$\n\\begin{align}\n\\psi(x,t) &= U(t)\\phi(x) \\\\\n&= \\frac{1}{\\sqrt{2\\pi}}\\int_{-\\infty}^\\infty a(p) U(t)e^{ipx} dp\\\\\n&= \\frac{1}{\\sqrt{2\\pi}}\\int_{-\\infty}^\\infty a(p) e^{-i p^2t/2m} e^{ipx} dp \\\\\n\\end{align}\n$$\n\nSubstitute the Fourier transform\n\n$$\na(p) = \\frac{1}{\\sqrt{2\\pi}}\\int_{-\\infty}^\\infty \\phi(x\') e^{-ipx\'} dx\'\n$$\n\ninto the preceding equation to obtain\n\n$$\n\\psi(x,t) = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty  \\left[  \\int_{-\\infty}^\\infty \\phi(x\') e^{-ipx\'} dx\'\\right] e^{ipx}  e^{ -ip^2t/2m } dp\n$$\n\nInterchange the order of integration:\n\n$$\n\\psi(x,t) = \\int_{-\\infty}^\\infty  \\left[ \\frac{1}{2\\pi}  \\int_{-\\infty}^\\infty e^{ipx} e^{ -ip^2t/2m \\hbar} e^{-ipx\'} dp \\right] \\phi(x\')  dx\'\n$$\n\nThe expression in brackets has the general form $G(x-x\',t)$, so that we can write the preceding equation in terms of a convolution integral:\n\n$$\n\\psi(x,t) = \\int_{-\\infty}^\\infty G(x-x\', t)\\phi(x\') dx\'\\\\\n$$\n\nwhere\n\n$$\nG(x-x\',t) = \\frac{1}{2\\pi}  \\int_{-\\infty}^\\infty   \\exp\\left(ip(x-x\')  -\\frac{ip^2t}{2m \\hbar} \\right) dp\n$$\n\nThe convolution kernel $G(x-x\',t)$ is called the \\term{Green\'s function}, and the formula above is simply convolution of the initial state with the Green\'s function:\n\n$$\n\\psi(x,t) = G_t*\\psi(x,0)\n$$\n\nwhere $G_t(x) = G(x;t)$\n\nThe integrand in \\eqref{gffp}is an exponential of a quadratic polynomial in $p$, and so the integral is a Gaussian.  Recall that\n\n$$\n\\int_{-\\infty}^\\infty e^{ -ax^2 + bx}  = \\left(\\frac{\\pi}{a}\\right)^{1/2} e^{ b^2/4a}\n$$\n\nComparing, we find that\n\n$$\nG(x,x\';t) = \\left(\\frac{m}{2\\pi i t}\\right)^{1/2} e^{ im(x-x\')^2/2t}\n$$\n\n\nLet us now recover the formula for the Green\'s function for $\\hbar \\ne 1$.  Write the coordinates in the preceding equation as    $\\tilde x$ and $\\tilde t$, then define a change of variables by $\\tilde t = \\alpha t$, $\\tilde x = \\beta x$.  In the $x\',t\'$.  In the $\\tilde t, \\tilde x$ system, the Schroedinger equation reads\n\n$$\ni\\hbar\\alpha\\frac{\\partial \\psi}{\\partial \\tilde t} = -\\frac{\\hbar^2 \\beta^2}{2m}\\, \\frac{\\partial^2 \\psi}{\\partial \\tilde x^2}\n$$\n\nRequire $\\hbar \\alpha = \\hbar^2\\beta^2$.\nChoose $\\alpha = \\hbar$, $\\beta = 1$ so as to eliminate the $\\hbar$\'s for the Schroedinger equation in the $\\tilde t, \\tilde x$ coordinate system.  Write out \\eqref{freeparticlegreen1} with $\\tilde x$ and $\\tilde t$ in place of $x$ and $t$.  Then make the substitutions to the substitutions $\\tilde t = \\hbar t$, $\\tilde x = x$ to obtain\n\n$$\n\\begin{align}\nG(x-x\',t) &= \\widetilde G\\left(x-x\', t\\hbar \\right) \\\\\n&= \\left( \\frac{m}{2\\pi \\hbar i t} \\right)^{1/2} e^{ im(x-x\')^2/2\\hbar t}\n\\end{align}\n$$\n\n## Discussion\n\nBelow are graphs of the real part of the free-particle propagator for time $t = 1, 2, 4,16$.\n\n\n![xx::center](http://noteimages.s3.amazonaws.com/jim_images/propagator-t=1-63c8.png)\n\n\n![xx::centerhttp://noteimages.s3.amazonaws.com/jim_images/propagator-t=2-6feb.png)\n\n![xx::center](http://noteimages.s3.amazonaws.com/jim_images/propagator-t=4-a035.png)\n\n![xx::center](http://noteimages.s3.amazonaws.com/jim_images/propagator-t=16-e5ae.png)\n\n**Jupyter code**\n\n```python\n%matplotlib inline\n\nimport matplotlib.pyplot as plt\nimport numpy as np\n\nx = np.linspace(0, 6*np.pi, 500)\nt=4\nplt.plot(x, np.cos(x**2/t)/np.sqrt(t))\nplt.title(\'Free particle propagator, t=4\');\n```\n\n';
var $jxxcarlson$elm_text_editor$Buffer$Backward = {$: 'Backward'};
var $jxxcarlson$elm_text_editor$Editor$Config$DoWrap = {$: 'DoWrap'};
var $jxxcarlson$elm_text_editor$Buffer$Forward = {$: 'Forward'};
var $jxxcarlson$elm_text_editor$Position$addColumn = F2(
	function (amount, position) {
		return _Utils_update(
			position,
			{column: position.column + amount});
	});
var $jxxcarlson$elm_text_editor$Editor$Update$autoclose = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('[', ']'),
			_Utils_Tuple2('{', '}'),
			_Utils_Tuple2('(', ')'),
			_Utils_Tuple2('\"', '\"'),
			_Utils_Tuple2('\'', '\''),
			_Utils_Tuple2('`', '`')
		]));
var $jxxcarlson$elm_text_editor$Position$order = F2(
	function (pos1, pos2) {
		return (_Utils_cmp(pos2.line, pos1.line) > 0) ? _Utils_Tuple2(pos1, pos2) : ((_Utils_eq(pos2.line, pos1.line) && (_Utils_cmp(pos2.column, pos1.column) > 0)) ? _Utils_Tuple2(pos1, pos2) : _Utils_Tuple2(pos2, pos1));
	});
var $jxxcarlson$elm_text_editor$Buffer$between = F3(
	function (pos1, pos2, _v0) {
		var buffer = _v0.a;
		var _v1 = A2($jxxcarlson$elm_text_editor$Position$order, pos1, pos2);
		var start = _v1.a;
		var end = _v1.b;
		return A2(
			$elm$core$Maybe$withDefault,
			'',
			A3(
				$elm$core$Maybe$map2,
				F2(
					function (startIndex, endIndex) {
						return A3($elm$core$String$slice, startIndex, endIndex, buffer);
					}),
				A2($jxxcarlson$elm_text_editor$Buffer$indexFromPosition, buffer, start),
				A2($jxxcarlson$elm_text_editor$Buffer$indexFromPosition, buffer, end)));
	});
var $jxxcarlson$elm_text_editor$Editor$Update$NoOp = {$: 'NoOp'};
var $elm$browser$Browser$Dom$blur = _Browser_call('blur');
var $jxxcarlson$elm_text_editor$Editor$Update$blur = function (id) {
	return A2(
		$elm$core$Task$attempt,
		function (_v0) {
			return $jxxcarlson$elm_text_editor$Editor$Update$NoOp;
		},
		$elm$browser$Browser$Dom$blur(id));
};
var $elm$core$Basics$round = _Basics_round;
var $jxxcarlson$elm_text_editor$Editor$Update$bottomLine = function (state) {
	return $elm$core$Basics$round(state.topLine + (state.config.height / state.config.lineHeight));
};
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $elm$core$Elm$JsArray$appendN = _JsArray_appendN;
var $elm$core$Elm$JsArray$slice = _JsArray_slice;
var $elm$core$Array$appendHelpBuilder = F2(
	function (tail, builder) {
		var tailLen = $elm$core$Elm$JsArray$length(tail);
		var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(builder.tail)) - tailLen;
		var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, builder.tail, tail);
		return (notAppended < 0) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: A3($elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
		} : ((!notAppended) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: $elm$core$Elm$JsArray$empty
		} : {nodeList: builder.nodeList, nodeListSize: builder.nodeListSize, tail: appended});
	});
var $elm$core$Array$sliceLeft = F2(
	function (from, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		if (!from) {
			return array;
		} else {
			if (_Utils_cmp(
				from,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					len - from,
					$elm$core$Array$shiftStep,
					$elm$core$Elm$JsArray$empty,
					A3(
						$elm$core$Elm$JsArray$slice,
						from - $elm$core$Array$tailIndex(len),
						$elm$core$Elm$JsArray$length(tail),
						tail));
			} else {
				var skipNodes = (from / $elm$core$Array$branchFactor) | 0;
				var helper = F2(
					function (node, acc) {
						if (node.$ === 'SubTree') {
							var subTree = node.a;
							return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
						} else {
							var leaf = node.a;
							return A2($elm$core$List$cons, leaf, acc);
						}
					});
				var leafNodes = A3(
					$elm$core$Elm$JsArray$foldr,
					helper,
					_List_fromArray(
						[tail]),
					tree);
				var nodesToInsert = A2($elm$core$List$drop, skipNodes, leafNodes);
				if (!nodesToInsert.b) {
					return $elm$core$Array$empty;
				} else {
					var head = nodesToInsert.a;
					var rest = nodesToInsert.b;
					var firstSlice = from - (skipNodes * $elm$core$Array$branchFactor);
					var initialBuilder = {
						nodeList: _List_Nil,
						nodeListSize: 0,
						tail: A3(
							$elm$core$Elm$JsArray$slice,
							firstSlice,
							$elm$core$Elm$JsArray$length(head),
							head)
					};
					return A2(
						$elm$core$Array$builderToArray,
						true,
						A3($elm$core$List$foldl, $elm$core$Array$appendHelpBuilder, initialBuilder, rest));
				}
			}
		}
	});
var $elm$core$Array$fetchNewTail = F4(
	function (shift, end, treeEnd, tree) {
		fetchNewTail:
		while (true) {
			var pos = $elm$core$Array$bitMask & (treeEnd >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var sub = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$end = end,
					$temp$treeEnd = treeEnd,
					$temp$tree = sub;
				shift = $temp$shift;
				end = $temp$end;
				treeEnd = $temp$treeEnd;
				tree = $temp$tree;
				continue fetchNewTail;
			} else {
				var values = _v0.a;
				return A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, values);
			}
		}
	});
var $elm$core$Array$hoistTree = F3(
	function (oldShift, newShift, tree) {
		hoistTree:
		while (true) {
			if ((_Utils_cmp(oldShift, newShift) < 1) || (!$elm$core$Elm$JsArray$length(tree))) {
				return tree;
			} else {
				var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, 0, tree);
				if (_v0.$ === 'SubTree') {
					var sub = _v0.a;
					var $temp$oldShift = oldShift - $elm$core$Array$shiftStep,
						$temp$newShift = newShift,
						$temp$tree = sub;
					oldShift = $temp$oldShift;
					newShift = $temp$newShift;
					tree = $temp$tree;
					continue hoistTree;
				} else {
					return tree;
				}
			}
		}
	});
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$sliceTree = F3(
	function (shift, endIdx, tree) {
		var lastPos = $elm$core$Array$bitMask & (endIdx >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, lastPos, tree);
		if (_v0.$ === 'SubTree') {
			var sub = _v0.a;
			var newSub = A3($elm$core$Array$sliceTree, shift - $elm$core$Array$shiftStep, endIdx, sub);
			return (!$elm$core$Elm$JsArray$length(newSub)) ? A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree) : A3(
				$elm$core$Elm$JsArray$unsafeSet,
				lastPos,
				$elm$core$Array$SubTree(newSub),
				A3($elm$core$Elm$JsArray$slice, 0, lastPos + 1, tree));
		} else {
			return A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree);
		}
	});
var $elm$core$Array$sliceRight = F2(
	function (end, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		if (_Utils_eq(end, len)) {
			return array;
		} else {
			if (_Utils_cmp(
				end,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					startShift,
					tree,
					A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, tail));
			} else {
				var endIdx = $elm$core$Array$tailIndex(end);
				var depth = $elm$core$Basics$floor(
					A2(
						$elm$core$Basics$logBase,
						$elm$core$Array$branchFactor,
						A2($elm$core$Basics$max, 1, endIdx - 1)));
				var newShift = A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep);
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					newShift,
					A3(
						$elm$core$Array$hoistTree,
						startShift,
						newShift,
						A3($elm$core$Array$sliceTree, startShift, endIdx, tree)),
					A4($elm$core$Array$fetchNewTail, startShift, end, endIdx, tree));
			}
		}
	});
var $elm$core$Array$translateIndex = F2(
	function (index, _v0) {
		var len = _v0.a;
		var posIndex = (index < 0) ? (len + index) : index;
		return (posIndex < 0) ? 0 : ((_Utils_cmp(posIndex, len) > 0) ? len : posIndex);
	});
var $elm$core$Array$slice = F3(
	function (from, to, array) {
		var correctTo = A2($elm$core$Array$translateIndex, to, array);
		var correctFrom = A2($elm$core$Array$translateIndex, from, array);
		return (_Utils_cmp(correctFrom, correctTo) > 0) ? $elm$core$Array$empty : A2(
			$elm$core$Array$sliceLeft,
			correctFrom,
			A2($elm$core$Array$sliceRight, correctTo, array));
	});
var $jxxcarlson$elm_text_editor$Util$Array$last = function (array) {
	var length = $elm$core$Array$length(array);
	return A2(
		$elm$core$Maybe$map,
		function (a) {
			return _Utils_Tuple2(a, length - 1);
		},
		A2(
			$elm$core$Array$get,
			0,
			A3($elm$core$Array$slice, -1, length, array)));
};
var $jxxcarlson$elm_text_editor$Buffer$clampPosition = F3(
	function (direction, buffer, position) {
		var lines_ = $elm$core$Array$fromList(
			$jxxcarlson$elm_text_editor$Buffer$lines(buffer));
		if (position.line < 0) {
			return A2($jxxcarlson$elm_text_editor$Position$Position, 0, 0);
		} else {
			var _v0 = A2($elm$core$Array$get, position.line, lines_);
			if (_v0.$ === 'Just') {
				var line = _v0.a;
				if (_Utils_cmp(
					position.column,
					$elm$core$String$length(line)) > 0) {
					if (direction.$ === 'Forward') {
						return (_Utils_cmp(
							position.line,
							$elm$core$Array$length(lines_) - 1) < 0) ? A2($jxxcarlson$elm_text_editor$Position$Position, position.line + 1, 0) : position;
					} else {
						return A2(
							$jxxcarlson$elm_text_editor$Position$Position,
							position.line,
							$elm$core$String$length(line));
					}
				} else {
					if (position.column < 0) {
						return A2(
							$elm$core$Maybe$withDefault,
							A2($jxxcarlson$elm_text_editor$Position$Position, 0, 0),
							A2(
								$elm$core$Maybe$map,
								A2(
									$elm$core$Basics$composeR,
									$elm$core$String$length,
									$jxxcarlson$elm_text_editor$Position$Position(position.line - 1)),
								A2($elm$core$Array$get, position.line - 1, lines_)));
					} else {
						return position;
					}
				}
			} else {
				var _v2 = $jxxcarlson$elm_text_editor$Util$Array$last(lines_);
				if (_v2.$ === 'Just') {
					var _v3 = _v2.a;
					var line = _v3.a;
					var number = _v3.b;
					return A2(
						$jxxcarlson$elm_text_editor$Position$Position,
						number,
						$elm$core$String$length(line));
				} else {
					return A2($jxxcarlson$elm_text_editor$Position$Position, 0, 0);
				}
			}
		}
	});
var $jxxcarlson$elm_text_editor$Editor$Update$DebounceMsg = function (a) {
	return {$: 'DebounceMsg', a: a};
};
var $jinjor$elm_debounce$Debounce$Later = function (a) {
	return {$: 'Later', a: a};
};
var $jinjor$elm_debounce$Debounce$later = $jinjor$elm_debounce$Debounce$Later;
var $jxxcarlson$elm_text_editor$Editor$Update$debounceConfig = {
	strategy: $jinjor$elm_debounce$Debounce$later(300),
	transform: $jxxcarlson$elm_text_editor$Editor$Update$DebounceMsg
};
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $elm$core$String$foldl = _String_foldl;
var $jxxcarlson$elm_text_editor$Buffer$indentSize = 2;
var $jxxcarlson$elm_text_editor$Buffer$deindentFrom = F2(
	function (_v0, _v1) {
		var line = _v0.line;
		var column = _v0.column;
		var buffer = _v1.a;
		return A2(
			$elm$core$Maybe$withDefault,
			_Utils_Tuple2(
				$jxxcarlson$elm_text_editor$Buffer$Buffer(buffer),
				column),
			A2(
				$elm$core$Maybe$map,
				function (lineStart) {
					var startChars = A3($elm$core$String$slice, lineStart, lineStart + $jxxcarlson$elm_text_editor$Buffer$indentSize, buffer);
					var startIndentChars = A3(
						$elm$core$String$foldl,
						F2(
							function (_char, count) {
								return _Utils_eq(
									_char,
									_Utils_chr(' ')) ? (count + 1) : count;
							}),
						0,
						startChars);
					return _Utils_Tuple2(
						$jxxcarlson$elm_text_editor$Buffer$Buffer(
							_Utils_ap(
								A3($elm$core$String$slice, 0, lineStart, buffer),
								A2($elm$core$String$dropLeft, lineStart + startIndentChars, buffer))),
						column - startIndentChars);
				},
				A2(
					$jxxcarlson$elm_text_editor$Buffer$indexFromPosition,
					buffer,
					A2($jxxcarlson$elm_text_editor$Position$Position, line, 0))));
	});
var $jxxcarlson$elm_text_editor$Buffer$deindentBetween = F3(
	function (pos1, pos2, buffer) {
		var _v0 = A2($jxxcarlson$elm_text_editor$Buffer$deindentFrom, pos1, buffer);
		var pos1Buffer = _v0.a;
		var pos1Column = _v0.b;
		var _v1 = A2($jxxcarlson$elm_text_editor$Buffer$deindentFrom, pos2, pos1Buffer);
		var pos2Buffer = _v1.a;
		var pos2Column = _v1.b;
		if ($elm$core$Basics$abs(pos1.line - pos2.line) > 1) {
			var _v2 = A2($jxxcarlson$elm_text_editor$Position$order, pos1, pos2);
			var start = _v2.a;
			var end = _v2.b;
			return _Utils_Tuple3(
				A3(
					$elm$core$List$foldl,
					function (line) {
						return A2(
							$elm$core$Basics$composeR,
							$jxxcarlson$elm_text_editor$Buffer$deindentFrom(
								{column: 0, line: line}),
							$elm$core$Tuple$first);
					},
					pos2Buffer,
					A2($elm$core$List$range, start.line + 1, end.line - 1)),
				pos1Column,
				pos2Column);
		} else {
			return _Utils_Tuple3(pos2Buffer, pos1Column, pos2Column);
		}
	});
var $elm$browser$Browser$Dom$focus = _Browser_call('focus');
var $jxxcarlson$elm_text_editor$Editor$Update$focus = function (id) {
	return A2(
		$elm$core$Task$attempt,
		function (_v0) {
			return $jxxcarlson$elm_text_editor$Editor$Update$NoOp;
		},
		$elm$browser$Browser$Dom$focus(id));
};
var $jxxcarlson$elm_text_editor$Buffer$None = {$: 'None'};
var $jxxcarlson$elm_text_editor$Buffer$NonWord = {$: 'NonWord'};
var $jxxcarlson$elm_text_editor$Buffer$Word = {$: 'Word'};
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $jxxcarlson$elm_text_editor$Buffer$isNonWordChar = A2(
	$elm$core$Basics$composeR,
	$elm$core$String$fromChar,
	function (a) {
		return A2($elm$core$String$contains, a, '/\\()\"\':,.;<>~!@#$%^&*|+=[]{}`?-…');
	});
var $jxxcarlson$elm_text_editor$Buffer$isWhitespace = A2(
	$elm$core$Basics$composeR,
	$elm$core$String$fromChar,
	A2(
		$elm$core$Basics$composeR,
		$elm$core$String$trim,
		$elm$core$Basics$eq('')));
var $jxxcarlson$elm_text_editor$Buffer$isWordChar = function (_char) {
	return (!$jxxcarlson$elm_text_editor$Buffer$isNonWordChar(_char)) && (!$jxxcarlson$elm_text_editor$Buffer$isWhitespace(_char));
};
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $jxxcarlson$elm_text_editor$Position$nextColumn = $jxxcarlson$elm_text_editor$Position$addColumn(1);
var $jxxcarlson$elm_text_editor$Position$previousColumn = $jxxcarlson$elm_text_editor$Position$addColumn(-1);
var $elm$core$String$reverse = _String_reverse;
var $elm_community$string_extra$String$Extra$rightOfBack = F2(
	function (pattern, string) {
		return A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$Basics$add(
						$elm$core$String$length(pattern)),
					function (a) {
						return A2($elm$core$String$dropLeft, a, string);
					}),
				$elm$core$List$head(
					$elm$core$List$reverse(
						A2($elm$core$String$indexes, pattern, string)))));
	});
var $jxxcarlson$elm_text_editor$Buffer$groupHelp = F5(
	function (direction, consumedNewline, str, position, group) {
		var parts = function () {
			if (direction.$ === 'Forward') {
				return $elm$core$String$uncons(str);
			} else {
				return A2(
					$elm$core$Maybe$map,
					$elm$core$Tuple$mapSecond($elm$core$String$reverse),
					$elm$core$String$uncons(
						$elm$core$String$reverse(str)));
			}
		}();
		if (parts.$ === 'Just') {
			var _v1 = parts.a;
			var _char = _v1.a;
			var rest = _v1.b;
			var nextPosition = function (changeLine) {
				var _v3 = _Utils_Tuple2(direction, changeLine);
				if (_v3.a.$ === 'Forward') {
					if (_v3.b) {
						var _v4 = _v3.a;
						return A2($jxxcarlson$elm_text_editor$Position$Position, position.line + 1, 0);
					} else {
						var _v5 = _v3.a;
						return $jxxcarlson$elm_text_editor$Position$nextColumn(position);
					}
				} else {
					if (_v3.b) {
						var _v6 = _v3.a;
						return A2($elm$core$String$contains, '\n', rest) ? A2(
							$jxxcarlson$elm_text_editor$Position$Position,
							position.line - 1,
							$elm$core$String$length(
								A2($elm_community$string_extra$String$Extra$rightOfBack, '\n', rest))) : A2(
							$jxxcarlson$elm_text_editor$Position$Position,
							position.line - 1,
							$elm$core$String$length(rest));
					} else {
						var _v7 = _v3.a;
						return $jxxcarlson$elm_text_editor$Position$previousColumn(position);
					}
				}
			};
			var next = function (nextConsumedNewline) {
				return A4(
					$jxxcarlson$elm_text_editor$Buffer$groupHelp,
					direction,
					nextConsumedNewline,
					rest,
					nextPosition(
						!_Utils_eq(consumedNewline, nextConsumedNewline)));
			};
			switch (group.$) {
				case 'None':
					return _Utils_eq(
						_char,
						_Utils_chr('\n')) ? (consumedNewline ? position : A2(next, true, $jxxcarlson$elm_text_editor$Buffer$None)) : ($jxxcarlson$elm_text_editor$Buffer$isWhitespace(_char) ? A2(next, consumedNewline, $jxxcarlson$elm_text_editor$Buffer$None) : ($jxxcarlson$elm_text_editor$Buffer$isNonWordChar(_char) ? A2(next, consumedNewline, $jxxcarlson$elm_text_editor$Buffer$NonWord) : A2(next, consumedNewline, $jxxcarlson$elm_text_editor$Buffer$Word)));
				case 'Word':
					return (!$jxxcarlson$elm_text_editor$Buffer$isWordChar(_char)) ? position : A2(next, consumedNewline, $jxxcarlson$elm_text_editor$Buffer$Word);
				default:
					return $jxxcarlson$elm_text_editor$Buffer$isNonWordChar(_char) ? A2(next, consumedNewline, $jxxcarlson$elm_text_editor$Buffer$NonWord) : position;
			}
		} else {
			return position;
		}
	});
var $jxxcarlson$elm_text_editor$Buffer$groupEnd = F2(
	function (position, _v0) {
		var buffer = _v0.a;
		return A2(
			$elm$core$Maybe$withDefault,
			position,
			A2(
				$elm$core$Maybe$map,
				function (index) {
					return A5(
						$jxxcarlson$elm_text_editor$Buffer$groupHelp,
						$jxxcarlson$elm_text_editor$Buffer$Forward,
						false,
						A2($elm$core$String$dropLeft, index, buffer),
						position,
						$jxxcarlson$elm_text_editor$Buffer$None);
				},
				A2($jxxcarlson$elm_text_editor$Buffer$indexFromPosition, buffer, position)));
	});
var $jxxcarlson$elm_text_editor$Buffer$stringCharAt = F2(
	function (index, string) {
		return A2(
			$elm$core$Maybe$map,
			$elm$core$Tuple$first,
			$elm$core$String$uncons(
				A3($elm$core$String$slice, index, index + 1, string)));
	});
var $jxxcarlson$elm_text_editor$Buffer$charsAround = F2(
	function (index, string) {
		return _Utils_Tuple3(
			A2($jxxcarlson$elm_text_editor$Buffer$stringCharAt, index - 1, string),
			A2($jxxcarlson$elm_text_editor$Buffer$stringCharAt, index, string),
			A2($jxxcarlson$elm_text_editor$Buffer$stringCharAt, index + 1, string));
	});
var $jxxcarlson$elm_text_editor$Buffer$groupStart = F2(
	function (position, _v0) {
		var buffer = _v0.a;
		return A2(
			$elm$core$Maybe$withDefault,
			position,
			A2(
				$elm$core$Maybe$map,
				function (index) {
					return A5(
						$jxxcarlson$elm_text_editor$Buffer$groupHelp,
						$jxxcarlson$elm_text_editor$Buffer$Backward,
						false,
						A3($elm$core$String$slice, 0, index, buffer),
						position,
						$jxxcarlson$elm_text_editor$Buffer$None);
				},
				A2($jxxcarlson$elm_text_editor$Buffer$indexFromPosition, buffer, position)));
	});
var $elm_community$maybe_extra$Maybe$Extra$orElseLazy = F2(
	function (fma, mb) {
		if (mb.$ === 'Nothing') {
			return fma(_Utils_Tuple0);
		} else {
			return mb;
		}
	});
var $jxxcarlson$elm_text_editor$Buffer$tuple3MapAll = F2(
	function (fn, _v0) {
		var a1 = _v0.a;
		var a2 = _v0.b;
		var a3 = _v0.c;
		return _Utils_Tuple3(
			fn(a1),
			fn(a2),
			fn(a3));
	});
var $jxxcarlson$elm_text_editor$Buffer$tuple3CharsPred = function (pred) {
	return $jxxcarlson$elm_text_editor$Buffer$tuple3MapAll(
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Maybe$map(pred),
			$elm$core$Maybe$withDefault(false)));
};
var $jxxcarlson$elm_text_editor$Buffer$groupRange = F2(
	function (position, _v0) {
		var buffer = _v0.a;
		return A2(
			$elm$core$Maybe$andThen,
			function (index) {
				var chars = A2($jxxcarlson$elm_text_editor$Buffer$charsAround, index, buffer);
				var range = function (pred) {
					var _v2 = A2($jxxcarlson$elm_text_editor$Buffer$tuple3CharsPred, pred, chars);
					if (_v2.a) {
						if (_v2.b) {
							if (_v2.c) {
								return $elm$core$Maybe$Just(
									_Utils_Tuple2(
										A2(
											$jxxcarlson$elm_text_editor$Buffer$groupStart,
											position,
											$jxxcarlson$elm_text_editor$Buffer$Buffer(buffer)),
										A2(
											$jxxcarlson$elm_text_editor$Buffer$groupEnd,
											position,
											$jxxcarlson$elm_text_editor$Buffer$Buffer(buffer))));
							} else {
								return $elm$core$Maybe$Just(
									_Utils_Tuple2(
										A2(
											$jxxcarlson$elm_text_editor$Buffer$groupStart,
											position,
											$jxxcarlson$elm_text_editor$Buffer$Buffer(buffer)),
										$jxxcarlson$elm_text_editor$Position$nextColumn(position)));
							}
						} else {
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(
									A2(
										$jxxcarlson$elm_text_editor$Buffer$groupStart,
										position,
										$jxxcarlson$elm_text_editor$Buffer$Buffer(buffer)),
									position));
						}
					} else {
						if (_v2.b) {
							if (_v2.c) {
								return $elm$core$Maybe$Just(
									_Utils_Tuple2(
										position,
										A2(
											$jxxcarlson$elm_text_editor$Buffer$groupEnd,
											position,
											$jxxcarlson$elm_text_editor$Buffer$Buffer(buffer))));
							} else {
								return $elm$core$Maybe$Just(
									_Utils_Tuple2(
										position,
										$jxxcarlson$elm_text_editor$Position$nextColumn(position)));
							}
						} else {
							return $elm$core$Maybe$Nothing;
						}
					}
				};
				return A2(
					$elm_community$maybe_extra$Maybe$Extra$orElseLazy,
					function (_v1) {
						return range($jxxcarlson$elm_text_editor$Buffer$isNonWordChar);
					},
					range($jxxcarlson$elm_text_editor$Buffer$isWordChar));
			},
			A2($jxxcarlson$elm_text_editor$Buffer$indexFromPosition, buffer, position));
	});
var $jxxcarlson$elm_text_editor$Editor$Strings$help = '\n------------------------------------------\n               Key commands\n------------------------------------------\n\nNEW: ctrl-shift-S to sync with external\nwindow if the hosting app implements it.\nStill flaky.  Aslo: ctrl-shift-C to copy\ntext to the system keyboard, ctrl-shift-V\nto paste text from the system keyboard\nto the editor.  For now, Chrome only.\n\nShow help         ctrl-h         (Toggle)\nShow info panel   ctrl-shift-i   (Toggle)\n\nCursor\n------\n\nForward           right-arrow\nBackwards         left-arrow\nStart of line     option-left-arrow or Home\nEnd of line       option-right-arrow or End\n\nLine Up           up-arrow\nLine Down         down-arrow\n\nUp many lines     option up-arrow\nDown many lines   option down-arrow\n\nFirst line        ctrl-option up-arrow\nLast line         ctrl-option down-arrow\n\nGo to line        ctrl-g         (Toggle)\n\n\nSelection\n---------\nSelect word       Double-click\nSelect line       Triple-click\nSelect group      ctrl-d\nSelect all        ctrl-shift-a\n\nExtend selection  shift-arrow\n(up | down | left | right)\n\nCopy selection    ctrl-c\nCut selection     ctrl-x\nPaste selection   ctrl-v\n\nExternal copy-paste\n-------------------\n\n- ctrl-shift-C copies selected text to the\n  system clipboard.\n\n- ctrl-shift-V copies text from the system\n  clipboard and pastes the content to the\n  editor at current cursor.  The copied\n  text remains in the Editor clipboard.\n\nThe pasted text will be wrapped if the\nthe WrapOption is on.\n\nThis works in Chrome 79 but not Firefox.\nIn Chrome you have to respond to a permission\ndialog each time.  I\'ll see if this can\nbe reduced to once per session.\n\nText\n------------\n\nIndent            Tab\nDe-indent         shift-Tab\n\nWrap selection    ctrl-w\nWrap all          ctrl-shift-w\nToggle wrapping   ctrl-option-w\n\nTyping ctrl-shift-w at the end\nof a paragraph will wrap it.\n\nClear all         ctrl-option c\n\nSearch\n------\n\nSearch panel      ctrl-s (Toggle)\nReplace panel     ctrl-r (Toggle)\nNext search hit   ctrl-. (Think >)\nPrev search hit   ctrl-. (Think <)\n\nUndo/Redo\n----------\n\nUndo              ctrl-z\nRedo              ctrl-y\n\n';
var $elm$core$Basics$modBy = _Basics_modBy;
var $jxxcarlson$elm_text_editor$Buffer$indentFrom = F2(
	function (_v0, _v1) {
		var line = _v0.line;
		var column = _v0.column;
		var buffer = _v1.a;
		return A2(
			$elm$core$Maybe$withDefault,
			_Utils_Tuple2(
				$jxxcarlson$elm_text_editor$Buffer$Buffer(buffer),
				column),
			A2(
				$elm$core$Maybe$map,
				function (lineStart) {
					var addIndentSize = $jxxcarlson$elm_text_editor$Buffer$indentSize - A2(
						$elm$core$Basics$modBy,
						$jxxcarlson$elm_text_editor$Buffer$indentSize,
						$elm$core$String$length(
							A3($elm$core$String$slice, lineStart, lineStart + column, buffer)));
					return _Utils_Tuple2(
						$jxxcarlson$elm_text_editor$Buffer$Buffer(
							_Utils_ap(
								A3($elm$core$String$slice, 0, lineStart + column, buffer),
								_Utils_ap(
									A2($elm$core$String$repeat, addIndentSize, ' '),
									A2($elm$core$String$dropLeft, lineStart + column, buffer)))),
						column + addIndentSize);
				},
				A2(
					$jxxcarlson$elm_text_editor$Buffer$indexFromPosition,
					buffer,
					A2($jxxcarlson$elm_text_editor$Position$Position, line, 0))));
	});
var $jxxcarlson$elm_text_editor$Buffer$indentBetween = F3(
	function (pos1, pos2, buffer) {
		var _v0 = A2($jxxcarlson$elm_text_editor$Position$order, pos1, pos2);
		var start = _v0.a;
		var end = _v0.b;
		return A3(
			$elm$core$List$foldl,
			function (line) {
				return A2(
					$elm$core$Basics$composeR,
					$jxxcarlson$elm_text_editor$Buffer$indentFrom(
						{column: 0, line: line}),
					$elm$core$Tuple$first);
			},
			buffer,
			A2($elm$core$List$range, start.line, end.line));
	});
var $elm_community$list_extra$List$Extra$last = function (items) {
	last:
	while (true) {
		if (!items.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!items.b.b) {
				var x = items.a;
				return $elm$core$Maybe$Just(x);
			} else {
				var rest = items.b;
				var $temp$items = rest;
				items = $temp$items;
				continue last;
			}
		}
	}
};
var $jxxcarlson$elm_text_editor$Buffer$lastPosition = function (buffer) {
	return A2(
		$elm$core$Maybe$withDefault,
		A2($jxxcarlson$elm_text_editor$Position$Position, 0, 0),
		A2(
			$elm$core$Maybe$map,
			function (_v0) {
				var line = _v0.a;
				var index = _v0.b;
				return A2(
					$jxxcarlson$elm_text_editor$Position$Position,
					index,
					$elm$core$String$length(line));
			},
			$jxxcarlson$elm_text_editor$Util$Array$last(
				$elm$core$Array$fromList(
					$jxxcarlson$elm_text_editor$Buffer$lines(buffer)))));
};
var $jxxcarlson$elm_text_editor$Buffer$lineEnd = function (line) {
	return A2(
		$elm$core$Basics$composeR,
		$jxxcarlson$elm_text_editor$Buffer$lines,
		A2(
			$elm$core$Basics$composeR,
			$elm_community$list_extra$List$Extra$getAt(line),
			$elm$core$Maybe$map($elm$core$String$length)));
};
var $jxxcarlson$elm_text_editor$Editor$Update$clearState = function (state) {
	return _Utils_update(
		state,
		{
			cursor: {column: 0, line: 0},
			dragging: false,
			replacementText: '',
			searchResults: $lovasoa$elm_rolling_list$RollingList$fromList(_List_Nil),
			searchTerm: '',
			selectedText: $elm$core$Maybe$Nothing,
			selection: $elm$core$Maybe$Nothing,
			topLine: 0
		});
};
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $jxxcarlson$elm_text_editor$Editor$Update$load = F3(
	function (wrapOption, content, state) {
		var lineLengths = A2(
			$elm$core$List$map,
			$elm$core$String$length,
			$elm$core$String$lines(content));
		var maxLineLength = A2(
			$elm$core$Maybe$withDefault,
			1000,
			$elm$core$List$maximum(lineLengths));
		var config = state.config;
		var buffer = _Utils_eq(wrapOption, $jxxcarlson$elm_text_editor$Editor$Config$DoWrap) ? $jxxcarlson$elm_text_editor$Buffer$fromString(
			A2($jxxcarlson$elm_text_editor$Editor$Wrap$paragraphs, config.wrapParams, content)) : $jxxcarlson$elm_text_editor$Buffer$fromString(content);
		return _Utils_Tuple2(
			$jxxcarlson$elm_text_editor$Editor$Update$clearState(state),
			buffer);
	});
var $jxxcarlson$elm_text_editor$Buffer$nearWordChar = F2(
	function (position, _v0) {
		var buffer = _v0.a;
		return A2(
			$elm$core$Maybe$withDefault,
			false,
			A2(
				$elm$core$Maybe$andThen,
				function (index) {
					var previousChar = A2($jxxcarlson$elm_text_editor$Buffer$stringCharAt, index - 1, buffer);
					var currentChar = A2($jxxcarlson$elm_text_editor$Buffer$stringCharAt, index, buffer);
					return A2(
						$elm_community$maybe_extra$Maybe$Extra$orElseLazy,
						function (_v1) {
							return A2($elm$core$Maybe$map, $jxxcarlson$elm_text_editor$Buffer$isWordChar, currentChar);
						},
						A2($elm$core$Maybe$map, $jxxcarlson$elm_text_editor$Buffer$isWordChar, previousChar));
				},
				A2($jxxcarlson$elm_text_editor$Buffer$indexFromPosition, buffer, position)));
	});
var $jxxcarlson$elm_text_editor$Position$addLine = F2(
	function (amount, position) {
		return _Utils_update(
			position,
			{line: position.line + amount});
	});
var $jxxcarlson$elm_text_editor$Position$nextLine = $jxxcarlson$elm_text_editor$Position$addLine(1);
var $jxxcarlson$elm_text_editor$Position$previousLine = $jxxcarlson$elm_text_editor$Position$addLine(-1);
var $jinjor$elm_debounce$Debounce$Flush = function (a) {
	return {$: 'Flush', a: a};
};
var $jinjor$elm_debounce$Debounce$SendIfLengthNotChangedFrom = function (a) {
	return {$: 'SendIfLengthNotChangedFrom', a: a};
};
var $jinjor$elm_debounce$Debounce$delayCmd = F2(
	function (delay, msg) {
		return A2(
			$elm$core$Task$perform,
			function (_v0) {
				return msg;
			},
			$elm$core$Process$sleep(delay));
	});
var $jinjor$elm_debounce$Debounce$length = function (_v0) {
	var input = _v0.a.input;
	return $elm$core$List$length(input);
};
var $jinjor$elm_debounce$Debounce$push = F3(
	function (config, a, _v0) {
		var d = _v0.a;
		var newDebounce = $jinjor$elm_debounce$Debounce$Debounce(
			_Utils_update(
				d,
				{
					input: A2($elm$core$List$cons, a, d.input)
				}));
		var selfCmd = function () {
			var _v1 = config.strategy;
			switch (_v1.$) {
				case 'Manual':
					var offset = _v1.a;
					return d.locked ? $elm$core$Platform$Cmd$none : A2(
						$jinjor$elm_debounce$Debounce$delayCmd,
						offset,
						$jinjor$elm_debounce$Debounce$Flush($elm$core$Maybe$Nothing));
				case 'Soon':
					var offset = _v1.a;
					var delay = _v1.b;
					return d.locked ? $elm$core$Platform$Cmd$none : A2(
						$jinjor$elm_debounce$Debounce$delayCmd,
						offset,
						$jinjor$elm_debounce$Debounce$Flush(
							$elm$core$Maybe$Just(delay)));
				default:
					var delay = _v1.a;
					return A2(
						$jinjor$elm_debounce$Debounce$delayCmd,
						delay,
						$jinjor$elm_debounce$Debounce$SendIfLengthNotChangedFrom(
							$jinjor$elm_debounce$Debounce$length(newDebounce)));
			}
		}();
		return _Utils_Tuple2(
			newDebounce,
			A2($elm$core$Platform$Cmd$map, config.transform, selfCmd));
	});
var $jxxcarlson$elm_text_editor$Editor$History$push = F2(
	function (entry, _v0) {
		var history = _v0.a;
		return $jxxcarlson$elm_text_editor$Editor$History$History(
			{
				future: _List_Nil,
				past: A2($elm$core$List$cons, entry, history.past)
			});
	});
var $jxxcarlson$elm_text_editor$Editor$Update$stateToSnapshot = F2(
	function (_v0, buffer) {
		var cursor = _v0.cursor;
		var selection = _v0.selection;
		return {buffer: buffer, cursor: cursor, selection: selection};
	});
var $jxxcarlson$elm_text_editor$Editor$Update$recordHistory = F3(
	function (oldState, oldBuffer, _v0) {
		var state = _v0.a;
		var buffer = _v0.b;
		var cmd = _v0.c;
		return _Utils_Tuple3(
			_Utils_update(
				state,
				{
					history: (!_Utils_eq(oldBuffer, buffer)) ? A2(
						$jxxcarlson$elm_text_editor$Editor$History$push,
						A2($jxxcarlson$elm_text_editor$Editor$Update$stateToSnapshot, oldState, oldBuffer),
						state.history) : state.history
				}),
			buffer,
			cmd);
	});
var $jxxcarlson$elm_text_editor$Editor$History$redo = F2(
	function (current, _v0) {
		var history = _v0.a;
		var _v1 = history.future;
		if (_v1.b) {
			var next = _v1.a;
			var future = _v1.b;
			return $elm$core$Maybe$Just(
				_Utils_Tuple2(
					$jxxcarlson$elm_text_editor$Editor$History$History(
						{
							future: future,
							past: A2($elm$core$List$cons, current, history.past)
						}),
					next));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $jxxcarlson$elm_text_editor$Buffer$removeBefore = F2(
	function (position, _v0) {
		var buffer = _v0.a;
		return $jxxcarlson$elm_text_editor$Buffer$Buffer(
			A2(
				$elm$core$Maybe$withDefault,
				buffer,
				A2(
					$elm$core$Maybe$map,
					function (index) {
						return _Utils_ap(
							A3(
								$elm$core$String$slice,
								0,
								A2($elm$core$Basics$max, 0, index - 1),
								buffer),
							A2($elm$core$String$dropLeft, index, buffer));
					},
					A2($jxxcarlson$elm_text_editor$Buffer$indexFromPosition, buffer, position))));
	});
var $jxxcarlson$elm_text_editor$Buffer$replace = F4(
	function (pos1, pos2, str, _v0) {
		var buffer = _v0.a;
		var _v1 = A2($jxxcarlson$elm_text_editor$Position$order, pos1, pos2);
		var start = _v1.a;
		var end = _v1.b;
		return $jxxcarlson$elm_text_editor$Buffer$Buffer(
			A2(
				$elm$core$Maybe$withDefault,
				buffer,
				A3(
					$elm$core$Maybe$map2,
					F2(
						function (startIndex, endIndex) {
							return _Utils_ap(
								A3($elm$core$String$slice, 0, startIndex, buffer),
								_Utils_ap(
									str,
									A2($elm$core$String$dropLeft, endIndex, buffer)));
						}),
					A2($jxxcarlson$elm_text_editor$Buffer$indexFromPosition, buffer, start),
					A2($jxxcarlson$elm_text_editor$Buffer$indexFromPosition, buffer, end))));
	});
var $lovasoa$elm_rolling_list$RollingList$current = A2(
	$elm$core$Basics$composeL,
	$elm$core$List$head,
	function ($) {
		return $.next;
	});
var $lovasoa$elm_rolling_list$RollingList$rollBack = function (rollingList) {
	var _v0 = rollingList.previous;
	if (!_v0.b) {
		var _v1 = $elm$core$List$reverse(rollingList.next);
		if (_v1.b) {
			var elem = _v1.a;
			var list = _v1.b;
			return {
				next: _List_fromArray(
					[elem]),
				previous: list
			};
		} else {
			return {next: _List_Nil, previous: _List_Nil};
		}
	} else {
		var element = _v0.a;
		var tail = _v0.b;
		return {
			next: A2($elm$core$List$cons, element, rollingList.next),
			previous: tail
		};
	}
};
var $jxxcarlson$elm_text_editor$Editor$Update$GotViewport = function (a) {
	return {$: 'GotViewport', a: a};
};
var $jxxcarlson$elm_text_editor$Editor$Update$adjustedLineHeight = F2(
	function (factor, lineHeight) {
		return factor * lineHeight;
	});
var $jxxcarlson$elm_text_editor$Editor$Update$setEditorViewportForLine = F3(
	function (lineHeightFactor, lineHeight, lineNumber) {
		var y = lineNumber * A2($jxxcarlson$elm_text_editor$Editor$Update$adjustedLineHeight, lineHeightFactor, lineHeight);
		var _v0 = y >= 0;
		if (_v0) {
			return A2(
				$elm$core$Task$attempt,
				function (info) {
					return $jxxcarlson$elm_text_editor$Editor$Update$GotViewport(info);
				},
				A2(
					$elm$core$Task$andThen,
					function (_v1) {
						return $elm$browser$Browser$Dom$getViewportOf('__inner_editor__');
					},
					A3($elm$browser$Browser$Dom$setViewportOf, '__inner_editor__', 0, y)));
		} else {
			return $elm$core$Platform$Cmd$none;
		}
	});
var $lovasoa$elm_rolling_list$RollingList$toList = function (_v0) {
	var previous = _v0.previous;
	var next = _v0.next;
	return _Utils_ap(
		next,
		$elm$core$List$reverse(previous));
};
var $jxxcarlson$elm_text_editor$Editor$Update$rollSearchSelectionBackward = F2(
	function (state, buffer) {
		var searchResults_ = $lovasoa$elm_rolling_list$RollingList$rollBack(state.searchResults);
		var searchResultList = $lovasoa$elm_rolling_list$RollingList$toList(searchResults_);
		var maxSearchHitIndex = function (x) {
			return x - 1;
		}(
			$elm$core$List$length(searchResultList));
		var newSearchHitIndex = (!state.searchHitIndex) ? maxSearchHitIndex : (state.searchHitIndex - 1);
		var _v0 = $lovasoa$elm_rolling_list$RollingList$current(searchResults_);
		if (_v0.$ === 'Nothing') {
			return _Utils_Tuple3(state, buffer, $elm$core$Platform$Cmd$none);
		} else {
			var _v1 = _v0.a;
			var cursor = _v1.a;
			var end = _v1.b;
			return _Utils_Tuple3(
				_Utils_update(
					state,
					{
						cursor: cursor,
						searchHitIndex: newSearchHitIndex,
						searchResults: searchResults_,
						selection: $elm$core$Maybe$Just(end)
					}),
				buffer,
				A3(
					$jxxcarlson$elm_text_editor$Editor$Update$setEditorViewportForLine,
					state.config.lineHeightFactor,
					state.config.lineHeight,
					A2($elm$core$Basics$max, 0, cursor.line - 5)));
		}
	});
var $lovasoa$elm_rolling_list$RollingList$roll = function (rollingList) {
	var _v0 = rollingList.next;
	if (!_v0.b) {
		return {
			next: $elm$core$List$reverse(rollingList.previous),
			previous: _List_Nil
		};
	} else {
		if (!_v0.b.b) {
			var element = _v0.a;
			return {
				next: $elm$core$List$reverse(
					A2($elm$core$List$cons, element, rollingList.previous)),
				previous: _List_Nil
			};
		} else {
			var element = _v0.a;
			var tail = _v0.b;
			return {
				next: tail,
				previous: A2($elm$core$List$cons, element, rollingList.previous)
			};
		}
	}
};
var $jxxcarlson$elm_text_editor$Editor$Update$rollSearchSelectionForward = F2(
	function (state, buffer) {
		var searchResults_ = $lovasoa$elm_rolling_list$RollingList$roll(state.searchResults);
		var searchResultList = $lovasoa$elm_rolling_list$RollingList$toList(searchResults_);
		var maxSearchHitIndex = function (x) {
			return x - 1;
		}(
			$elm$core$List$length(searchResultList));
		var newSearchHitIndex = (_Utils_cmp(state.searchHitIndex, maxSearchHitIndex) > -1) ? 0 : (state.searchHitIndex + 1);
		var _v0 = $lovasoa$elm_rolling_list$RollingList$current(searchResults_);
		if (_v0.$ === 'Nothing') {
			return _Utils_Tuple3(state, buffer, $elm$core$Platform$Cmd$none);
		} else {
			var _v1 = _v0.a;
			var cursor = _v1.a;
			var end = _v1.b;
			return _Utils_Tuple3(
				_Utils_update(
					state,
					{
						cursor: cursor,
						searchHitIndex: newSearchHitIndex,
						searchResults: searchResults_,
						selection: $elm$core$Maybe$Just(end)
					}),
				buffer,
				A3(
					$jxxcarlson$elm_text_editor$Editor$Update$setEditorViewportForLine,
					state.config.lineHeightFactor,
					state.config.lineHeight,
					A2($elm$core$Basics$max, 0, cursor.line - 5)));
		}
	});
var $jxxcarlson$elm_text_editor$Editor$Search$searchHits = F2(
	function (key, lines_) {
		var width = $elm$core$String$length(key);
		var makePositions = function (_v1) {
			var line = _v1.a;
			var column = _v1.b;
			return _Utils_Tuple2(
				A2($jxxcarlson$elm_text_editor$Position$Position, line, column),
				A2($jxxcarlson$elm_text_editor$Position$Position, line, column + width));
		};
		var expand = function (_v0) {
			var i = _v0.a;
			var list = _v0.b;
			return A2(
				$elm$core$List$map,
				function (item) {
					return _Utils_Tuple2(i, item);
				},
				list);
		};
		return A2(
			$elm$core$List$map,
			makePositions,
			$elm$core$List$concat(
				A2(
					$elm$core$List$map,
					expand,
					A2(
						$elm$core$List$indexedMap,
						F2(
							function (i, line) {
								return _Utils_Tuple2(
									i,
									A2($elm$core$String$indexes, key, line));
							}),
						lines_))));
	});
var $jxxcarlson$elm_text_editor$Editor$Search$search = F2(
	function (key, buffer) {
		return A2(
			$jxxcarlson$elm_text_editor$Editor$Search$searchHits,
			key,
			$jxxcarlson$elm_text_editor$Buffer$lines(buffer));
	});
var $jxxcarlson$elm_text_editor$Editor$Update$scrollToTextInternal = F3(
	function (str, state, buffer) {
		var searchResults = A2($jxxcarlson$elm_text_editor$Editor$Search$search, str, buffer);
		var _v0 = $elm$core$List$head(searchResults);
		if (_v0.$ === 'Nothing') {
			return _Utils_Tuple3(
				_Utils_update(
					state,
					{
						searchResults: $lovasoa$elm_rolling_list$RollingList$fromList(_List_Nil),
						searchTerm: str,
						selection: $elm$core$Maybe$Nothing
					}),
				buffer,
				$elm$core$Platform$Cmd$none);
		} else {
			var _v1 = _v0.a;
			var cursor = _v1.a;
			var end = _v1.b;
			return _Utils_Tuple3(
				_Utils_update(
					state,
					{
						cursor: cursor,
						searchHitIndex: 0,
						searchResults: $lovasoa$elm_rolling_list$RollingList$fromList(searchResults),
						searchTerm: str,
						selection: $elm$core$Maybe$Just(end)
					}),
				buffer,
				A3(
					$jxxcarlson$elm_text_editor$Editor$Update$setEditorViewportForLine,
					state.config.lineHeightFactor,
					state.config.lineHeight,
					A2($elm$core$Basics$max, 0, cursor.line - 5)));
		}
	});
var $jxxcarlson$elm_text_editor$Buffer$indexedFilterMap = F2(
	function (filter, list) {
		return A2(
			$elm$core$List$map,
			$elm$core$Tuple$first,
			A2(
				$elm$core$List$filter,
				function (_v0) {
					var k = _v0.a;
					var item = _v0.b;
					return filter(item);
				},
				A2(
					$elm$core$List$indexedMap,
					F2(
						function (k, item) {
							return _Utils_Tuple2(k, item);
						}),
					list)));
	});
var $jxxcarlson$elm_text_editor$Buffer$selectIndexOfPrecedingParagraph = F2(
	function (str, end) {
		var blankLines_ = A2(
			$jxxcarlson$elm_text_editor$Buffer$indexedFilterMap,
			function (str_) {
				return str_ === '';
			},
			$elm$core$String$lines(str));
		var indexOfStart = $elm_community$list_extra$List$Extra$last(
			A2(
				$elm$core$List$filter,
				function (i) {
					return _Utils_cmp(i, end) < 0;
				},
				blankLines_));
		if (indexOfStart.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var i = indexOfStart.a;
			return $elm$core$Maybe$Just(i + 1);
		}
	});
var $jxxcarlson$elm_text_editor$Buffer$selectPreviousParagraph = F2(
	function (_v0, end) {
		var str = _v0.a;
		return A2(
			$elm$core$Maybe$map,
			function (line_) {
				return A2($jxxcarlson$elm_text_editor$Position$Position, line_, 0);
			},
			A2($jxxcarlson$elm_text_editor$Buffer$selectIndexOfPrecedingParagraph, str, end.line));
	});
var $jxxcarlson$elm_text_editor$Editor$Update$GotViewportForSync = F3(
	function (a, b, c) {
		return {$: 'GotViewportForSync', a: a, b: b, c: c};
	});
var $jxxcarlson$elm_text_editor$Editor$Update$jumpToHeightForSync = F3(
	function (cursor, selection, y) {
		return A2(
			$elm$core$Task$attempt,
			function (info) {
				return A3($jxxcarlson$elm_text_editor$Editor$Update$GotViewportForSync, cursor, selection, info);
			},
			A2(
				$elm$core$Task$andThen,
				function (_v0) {
					return $elm$browser$Browser$Dom$getViewportOf('__inner_editor__');
				},
				A3($elm$browser$Browser$Dom$setViewportOf, '__inner_editor__', 0, y)));
	});
var $jxxcarlson$elm_text_editor$Position$setColumn = F2(
	function (column, position) {
		return _Utils_update(
			position,
			{column: column});
	});
var $jxxcarlson$elm_text_editor$Editor$Update$verticalOffsetInSourceText = 60;
var $jxxcarlson$elm_text_editor$Editor$Update$sendLine = F2(
	function (state, buffer) {
		var y = A2($elm$core$Basics$max, 0, (state.config.lineHeight * state.cursor.line) - $jxxcarlson$elm_text_editor$Editor$Update$verticalOffsetInSourceText);
		var newCursor = A2($jxxcarlson$elm_text_editor$Position$setColumn, 0, state.cursor);
		var selection = function () {
			var _v0 = A2($jxxcarlson$elm_text_editor$Buffer$lineEnd, newCursor.line, buffer);
			if (_v0.$ === 'Just') {
				var n = _v0.a;
				return $elm$core$Maybe$Just(
					A2($jxxcarlson$elm_text_editor$Position$Position, newCursor.line, n));
			} else {
				return $elm$core$Maybe$Nothing;
			}
		}();
		return _Utils_Tuple3(
			_Utils_update(
				state,
				{cursor: newCursor, selection: selection}),
			buffer,
			A3($jxxcarlson$elm_text_editor$Editor$Update$jumpToHeightForSync, newCursor, selection, y));
	});
var $jxxcarlson$elm_text_editor$Editor$Update$lift = function (f) {
	return function (is) {
		return _Utils_update(
			is,
			{
				config: f(is.config)
			});
	};
};
var $jxxcarlson$elm_text_editor$Editor$Config$setWrapOption = F2(
	function (wrapOption, config) {
		return _Utils_update(
			config,
			{wrapOption: wrapOption});
	});
var $jxxcarlson$elm_text_editor$Editor$Update$setWrapOption = F2(
	function (wrapOption, state) {
		return A2(
			$jxxcarlson$elm_text_editor$Editor$Update$lift,
			$jxxcarlson$elm_text_editor$Editor$Config$setWrapOption(wrapOption),
			state);
	});
var $jxxcarlson$elm_text_editor$Position$shift = F2(
	function (k, position) {
		var _v0 = (position.line + k) >= 0;
		if (_v0) {
			return _Utils_update(
				position,
				{line: position.line + k});
		} else {
			return _Utils_update(
				position,
				{line: 0});
		}
	});
var $jinjor$elm_debounce$Debounce$takeLast = F3(
	function (send, head, tail) {
		return _Utils_Tuple2(
			_List_Nil,
			send(head));
	});
var $jxxcarlson$elm_text_editor$Editor$History$undo = F2(
	function (current, _v0) {
		var history = _v0.a;
		var _v1 = history.past;
		if (_v1.b) {
			var previous = _v1.a;
			var past = _v1.b;
			return $elm$core$Maybe$Just(
				_Utils_Tuple2(
					$jxxcarlson$elm_text_editor$Editor$History$History(
						{
							future: A2($elm$core$List$cons, current, history.future),
							past: past
						}),
					previous));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $jxxcarlson$elm_text_editor$Editor$Update$Unload = function (a) {
	return {$: 'Unload', a: a};
};
var $jxxcarlson$elm_text_editor$Editor$Update$unload = function (s) {
	return A2(
		$elm$core$Task$perform,
		$jxxcarlson$elm_text_editor$Editor$Update$Unload,
		$elm$core$Task$succeed(s));
};
var $jinjor$elm_debounce$Debounce$update = F4(
	function (config, send, msg, _v0) {
		var d = _v0.a;
		switch (msg.$) {
			case 'NoOp':
				return _Utils_Tuple2(
					$jinjor$elm_debounce$Debounce$Debounce(d),
					$elm$core$Platform$Cmd$none);
			case 'Flush':
				var tryAgainAfter = msg.a;
				var _v2 = d.input;
				if (_v2.b) {
					var head = _v2.a;
					var tail = _v2.b;
					var selfCmd = function () {
						if (tryAgainAfter.$ === 'Just') {
							var delay = tryAgainAfter.a;
							return A2(
								$jinjor$elm_debounce$Debounce$delayCmd,
								delay,
								$jinjor$elm_debounce$Debounce$Flush(
									$elm$core$Maybe$Just(delay)));
						} else {
							return $elm$core$Platform$Cmd$none;
						}
					}();
					var _v3 = A2(send, head, tail);
					var input = _v3.a;
					var sendCmd = _v3.b;
					return _Utils_Tuple2(
						$jinjor$elm_debounce$Debounce$Debounce(
							_Utils_update(
								d,
								{input: input, locked: true})),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									sendCmd,
									A2($elm$core$Platform$Cmd$map, config.transform, selfCmd)
								])));
				} else {
					return _Utils_Tuple2(
						$jinjor$elm_debounce$Debounce$Debounce(
							_Utils_update(
								d,
								{locked: false})),
						$elm$core$Platform$Cmd$none);
				}
			default:
				var lastInputLength = msg.a;
				var _v5 = _Utils_Tuple2(
					_Utils_cmp(
						$elm$core$List$length(d.input),
						lastInputLength) < 1,
					d.input);
				if (_v5.a && _v5.b.b) {
					var _v6 = _v5.b;
					var head = _v6.a;
					var tail = _v6.b;
					var _v7 = A2(send, head, tail);
					var input = _v7.a;
					var cmd = _v7.b;
					return _Utils_Tuple2(
						$jinjor$elm_debounce$Debounce$Debounce(
							_Utils_update(
								d,
								{input: input})),
						cmd);
				} else {
					return _Utils_Tuple2(
						$jinjor$elm_debounce$Debounce$Debounce(d),
						$elm$core$Platform$Cmd$none);
				}
		}
	});
var $jxxcarlson$elm_text_editor$Editor$Update$wrapBetween = F4(
	function (state, buffer, start, end) {
		var selectedText = A3($jxxcarlson$elm_text_editor$Buffer$between, start, end, buffer);
		var wrappedText = A2($jxxcarlson$elm_text_editor$Editor$Wrap$paragraphs, state.config.wrapParams, selectedText);
		var newBuffer = A4($jxxcarlson$elm_text_editor$Buffer$replace, start, end, wrappedText, buffer);
		var linesOfWrappedText = $elm$core$String$lines(wrappedText);
		var linesOfText = $elm$core$List$length(linesOfWrappedText);
		var lastLine = $elm_community$list_extra$List$Extra$last(linesOfWrappedText);
		var column = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, lastLine));
		var newCursor = _Utils_update(
			start,
			{column: column, line: (start.line + linesOfText) - 1});
		var newState = _Utils_update(
			state,
			{
				cursor: newCursor,
				selectedText: $elm$core$Maybe$Just(selectedText)
			});
		return _Utils_Tuple3(newState, newBuffer, $elm$core$Platform$Cmd$none);
	});
var $jxxcarlson$elm_text_editor$Editor$Update$update = F3(
	function (buffer, msg, state) {
		switch (msg.$) {
			case 'NoOp':
				return _Utils_Tuple3(state, buffer, $elm$core$Platform$Cmd$none);
			case 'MouseDown':
				var position = msg.a;
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{cursor: position, dragging: true, selection: $elm$core$Maybe$Nothing}),
					buffer,
					$elm$core$Platform$Cmd$none);
			case 'MouseOver':
				var position = msg.a;
				return state.dragging ? _Utils_Tuple3(
					_Utils_update(
						state,
						{
							cursor: position,
							selection: function () {
								var _v1 = state.selection;
								if (_v1.$ === 'Just') {
									var selection = _v1.a;
									return _Utils_eq(selection, position) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(selection);
								} else {
									return _Utils_eq(position, state.cursor) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(state.cursor);
								}
							}()
						}),
					buffer,
					$elm$core$Platform$Cmd$none) : _Utils_Tuple3(state, buffer, $elm$core$Platform$Cmd$none);
			case 'MouseUp':
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{dragging: false}),
					buffer,
					$elm$core$Platform$Cmd$none);
			case 'CursorLeft':
				var newCursor = function () {
					var moveFrom = function () {
						var _v3 = state.selection;
						if (_v3.$ === 'Just') {
							var selection = _v3.a;
							return A2($jxxcarlson$elm_text_editor$Position$order, selection, state.cursor).a;
						} else {
							return state.cursor;
						}
					}();
					return A3(
						$jxxcarlson$elm_text_editor$Buffer$clampPosition,
						$jxxcarlson$elm_text_editor$Buffer$Backward,
						buffer,
						$jxxcarlson$elm_text_editor$Position$previousColumn(moveFrom));
				}();
				var cmd = function () {
					var _v2 = !_Utils_eq(state.cursor.line, newCursor.line);
					if (_v2) {
						return A3($jxxcarlson$elm_text_editor$Editor$Update$setEditorViewportForLine, state.config.lineHeightFactor, state.config.lineHeight, newCursor.line);
					} else {
						return $elm$core$Platform$Cmd$none;
					}
				}();
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{cursor: newCursor, selection: $elm$core$Maybe$Nothing}),
					buffer,
					$elm$core$Platform$Cmd$none);
			case 'CursorRight':
				var newCursor = function () {
					var moveFrom = function () {
						var _v4 = state.selection;
						if (_v4.$ === 'Just') {
							var selection = _v4.a;
							return A2($jxxcarlson$elm_text_editor$Position$order, selection, state.cursor).b;
						} else {
							return state.cursor;
						}
					}();
					return A3(
						$jxxcarlson$elm_text_editor$Buffer$clampPosition,
						$jxxcarlson$elm_text_editor$Buffer$Forward,
						buffer,
						$jxxcarlson$elm_text_editor$Position$nextColumn(moveFrom));
				}();
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{cursor: newCursor, selection: $elm$core$Maybe$Nothing}),
					buffer,
					$elm$core$Platform$Cmd$none);
			case 'CursorUp':
				var newCursor = function () {
					var moveFrom = function () {
						var _v5 = state.selection;
						if (_v5.$ === 'Just') {
							var selection = _v5.a;
							return A2($jxxcarlson$elm_text_editor$Position$order, selection, state.cursor).a;
						} else {
							return state.cursor;
						}
					}();
					return A3(
						$jxxcarlson$elm_text_editor$Buffer$clampPosition,
						$jxxcarlson$elm_text_editor$Buffer$Backward,
						buffer,
						$jxxcarlson$elm_text_editor$Position$previousLine(moveFrom));
				}();
				var scrollCmd = (_Utils_cmp(newCursor.line, state.topLine) < 0) ? A3($jxxcarlson$elm_text_editor$Editor$Update$setEditorViewportForLine, state.config.lineHeightFactor, state.config.lineHeight, newCursor.line) : $elm$core$Platform$Cmd$none;
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{cursor: newCursor, selection: $elm$core$Maybe$Nothing}),
					buffer,
					scrollCmd);
			case 'CursorDown':
				var newCursor = function () {
					var moveFrom = function () {
						var _v6 = state.selection;
						if (_v6.$ === 'Just') {
							var selection = _v6.a;
							return A2($jxxcarlson$elm_text_editor$Position$order, selection, state.cursor).b;
						} else {
							return state.cursor;
						}
					}();
					return A3(
						$jxxcarlson$elm_text_editor$Buffer$clampPosition,
						$jxxcarlson$elm_text_editor$Buffer$Backward,
						buffer,
						$jxxcarlson$elm_text_editor$Position$nextLine(moveFrom));
				}();
				var scrollCmd = (_Utils_cmp(
					newCursor.line,
					$jxxcarlson$elm_text_editor$Editor$Update$bottomLine(state)) > 0) ? A3($jxxcarlson$elm_text_editor$Editor$Update$setEditorViewportForLine, state.config.lineHeightFactor, state.config.lineHeight, newCursor.line) : $elm$core$Platform$Cmd$none;
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{cursor: newCursor, selection: $elm$core$Maybe$Nothing}),
					buffer,
					scrollCmd);
			case 'CursorToLineEnd':
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{
							cursor: function () {
								var moveFrom = function () {
									var _v8 = state.selection;
									if (_v8.$ === 'Just') {
										var selection = _v8.a;
										return A2($jxxcarlson$elm_text_editor$Position$order, selection, state.cursor).b;
									} else {
										return state.cursor;
									}
								}();
								var _v7 = A2($jxxcarlson$elm_text_editor$Buffer$lineEnd, moveFrom.line, buffer);
								if (_v7.$ === 'Just') {
									var column = _v7.a;
									return A2($jxxcarlson$elm_text_editor$Position$setColumn, column, state.cursor);
								} else {
									return A3($jxxcarlson$elm_text_editor$Buffer$clampPosition, $jxxcarlson$elm_text_editor$Buffer$Backward, buffer, state.cursor);
								}
							}(),
							selection: $elm$core$Maybe$Nothing
						}),
					buffer,
					$elm$core$Platform$Cmd$none);
			case 'CursorToLineStart':
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{
							cursor: function () {
								var moveFrom = function () {
									var _v9 = state.selection;
									if (_v9.$ === 'Just') {
										var selection = _v9.a;
										return A2($jxxcarlson$elm_text_editor$Position$order, selection, state.cursor).a;
									} else {
										return state.cursor;
									}
								}();
								return A2($jxxcarlson$elm_text_editor$Position$setColumn, 0, moveFrom);
							}(),
							selection: $elm$core$Maybe$Nothing
						}),
					buffer,
					$elm$core$Platform$Cmd$none);
			case 'CursorToGroupEnd':
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{
							cursor: A2($jxxcarlson$elm_text_editor$Buffer$groupEnd, state.cursor, buffer),
							selection: $elm$core$Maybe$Nothing
						}),
					buffer,
					$elm$core$Platform$Cmd$none);
			case 'CursorToGroupStart':
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{
							cursor: A2($jxxcarlson$elm_text_editor$Buffer$groupStart, state.cursor, buffer),
							selection: $elm$core$Maybe$Nothing
						}),
					buffer,
					$elm$core$Platform$Cmd$none);
			case 'Paste':
				var _v10 = state.selectedText;
				if (_v10.$ === 'Nothing') {
					return _Utils_Tuple3(state, buffer, $elm$core$Platform$Cmd$none);
				} else {
					var text = _v10.a;
					var oldCursor = state.cursor;
					var lines_ = $elm$core$String$lines(text);
					var newColumn = function () {
						var _v11 = $elm_community$list_extra$List$Extra$last(lines_);
						if (_v11.$ === 'Just') {
							var str = _v11.a;
							return $elm$core$String$length(str);
						} else {
							return 0;
						}
					}();
					var linesOfText = $elm$core$List$length(lines_);
					var newLine = (oldCursor.line + linesOfText) - 1;
					var newCursor = A2($jxxcarlson$elm_text_editor$Position$Position, newLine, newColumn);
					return _Utils_Tuple3(
						_Utils_update(
							state,
							{cursor: newCursor}),
						A3($jxxcarlson$elm_text_editor$Buffer$insert, state.cursor, text, buffer),
						$elm$core$Platform$Cmd$none);
				}
			case 'PasteFromClipboard':
				return _Utils_Tuple3(
					state,
					A3($jxxcarlson$elm_text_editor$Buffer$insert, state.cursor, state.clipboard, buffer),
					$elm$core$Platform$Cmd$none);
			case 'CopyPasteClipboard':
				return _Utils_Tuple3(state, buffer, $elm$core$Platform$Cmd$none);
			case 'WriteToSystemClipBoard':
				var _v12 = state.selection;
				if (_v12.$ === 'Nothing') {
					return _Utils_Tuple3(state, buffer, $elm$core$Platform$Cmd$none);
				} else {
					var sel = _v12.a;
					var _v13 = A2($jxxcarlson$elm_text_editor$Position$order, sel, state.cursor);
					var start = _v13.a;
					var end = _v13.b;
					var selectedText = A3($jxxcarlson$elm_text_editor$Buffer$between, start, end, buffer);
					var newState = _Utils_update(
						state,
						{
							selectedText: $elm$core$Maybe$Just(selectedText)
						});
					return A3(
						$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
						state,
						buffer,
						_Utils_Tuple3(newState, buffer, $elm$core$Platform$Cmd$none));
				}
			case 'Insert':
				var string = msg.a;
				var _v14 = _Utils_Tuple2(
					state.selection,
					A2($elm$core$Dict$get, string, $jxxcarlson$elm_text_editor$Editor$Update$autoclose));
				if (_v14.a.$ === 'Just') {
					if (_v14.b.$ === 'Just') {
						var selection = _v14.a.a;
						var closing = _v14.b.a;
						var _v15 = A2($jxxcarlson$elm_text_editor$Position$order, selection, state.cursor);
						var start = _v15.a;
						var end = _v15.b;
						var wrapped = _Utils_ap(
							string,
							_Utils_ap(
								A3($jxxcarlson$elm_text_editor$Buffer$between, start, end, buffer),
								closing));
						return A3(
							$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
							state,
							buffer,
							_Utils_Tuple3(
								_Utils_update(
									state,
									{
										cursor: _Utils_eq(state.cursor.line, start.line) ? $jxxcarlson$elm_text_editor$Position$nextColumn(state.cursor) : state.cursor,
										selection: $elm$core$Maybe$Just(
											_Utils_eq(selection.line, start.line) ? $jxxcarlson$elm_text_editor$Position$nextColumn(selection) : selection)
									}),
								A4($jxxcarlson$elm_text_editor$Buffer$replace, start, end, wrapped, buffer),
								$elm$core$Platform$Cmd$none));
					} else {
						var selection = _v14.a.a;
						var _v16 = _v14.b;
						var _v17 = A2($jxxcarlson$elm_text_editor$Position$order, selection, state.cursor);
						var start = _v17.a;
						var end = _v17.b;
						return A3(
							$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
							state,
							buffer,
							_Utils_Tuple3(
								_Utils_update(
									state,
									{
										cursor: (string === '\n') ? {column: 0, line: start.line + 1} : $jxxcarlson$elm_text_editor$Position$nextColumn(start),
										selection: $elm$core$Maybe$Nothing
									}),
								A4($jxxcarlson$elm_text_editor$Buffer$replace, start, end, string, buffer),
								$elm$core$Platform$Cmd$none));
					}
				} else {
					var _v18 = _v14.a;
					var maybeClosing = _v14.b;
					var nearWordChar = A2($jxxcarlson$elm_text_editor$Buffer$nearWordChar, state.cursor, buffer);
					var insertString_ = (!nearWordChar) ? A2(
						$elm$core$Maybe$withDefault,
						string,
						A2(
							$elm$core$Maybe$map,
							$elm$core$Basics$append(string),
							maybeClosing)) : string;
					var insertString = (insertString_ === ' ') ? ((_Utils_cmp(
						A2(
							$elm$core$Maybe$withDefault,
							-1,
							A2(
								$elm$core$Maybe$map,
								$elm$core$String$length,
								A2($jxxcarlson$elm_text_editor$Buffer$lineAt, state.cursor, buffer))),
						state.config.wrapParams.optimalWidth) > 0) ? '\n' : insertString_) : insertString_;
					var _v19 = A3($jinjor$elm_debounce$Debounce$push, $jxxcarlson$elm_text_editor$Editor$Update$debounceConfig, insertString, state.debounce);
					var debounce = _v19.a;
					var debounceCmd = _v19.b;
					var newCursor = (insertString === '\n') ? {column: 0, line: state.cursor.line + 1} : $jxxcarlson$elm_text_editor$Position$nextColumn(state.cursor);
					return A3(
						$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
						state,
						buffer,
						_Utils_Tuple3(
							_Utils_update(
								state,
								{cursor: newCursor, debounce: debounce}),
							A3($jxxcarlson$elm_text_editor$Buffer$insert, state.cursor, insertString, buffer),
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[debounceCmd]))));
				}
			case 'FirstLine':
				var cursor = {column: 0, line: 0};
				return A3(
					$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
					state,
					buffer,
					_Utils_Tuple3(
						_Utils_update(
							state,
							{cursor: cursor, selection: $elm$core$Maybe$Nothing}),
						buffer,
						A3($jxxcarlson$elm_text_editor$Editor$Update$setEditorViewportForLine, state.config.lineHeightFactor, state.config.lineHeight, cursor.line)));
			case 'AcceptLineNumber':
				var nString = msg.a;
				var _v20 = $elm$core$String$toInt(nString);
				if (_v20.$ === 'Nothing') {
					return _Utils_Tuple3(state, buffer, $elm$core$Platform$Cmd$none);
				} else {
					var n_ = _v20.a;
					var lineNumber = A3(
						$elm$core$Basics$clamp,
						0,
						$elm$core$List$length(
							$jxxcarlson$elm_text_editor$Buffer$lines(buffer)) - 1,
						n_ - 1);
					var cursor = {column: 0, line: lineNumber};
					var selection = function () {
						var _v21 = A2($jxxcarlson$elm_text_editor$Buffer$lineEnd, cursor.line, buffer);
						if (_v21.$ === 'Just') {
							var column = _v21.a;
							return $elm$core$Maybe$Just(
								A2($jxxcarlson$elm_text_editor$Position$Position, cursor.line, column));
						} else {
							return $elm$core$Maybe$Nothing;
						}
					}();
					return A3(
						$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
						state,
						buffer,
						_Utils_Tuple3(
							_Utils_update(
								state,
								{cursor: cursor, selection: selection}),
							buffer,
							A3($jxxcarlson$elm_text_editor$Editor$Update$setEditorViewportForLine, state.config.lineHeightFactor, state.config.lineHeight, lineNumber)));
				}
			case 'AcceptSearchText':
				var str = msg.a;
				return A3($jxxcarlson$elm_text_editor$Editor$Update$scrollToTextInternal, str, state, buffer);
			case 'ScrollToSelection':
				var _v22 = msg.a;
				var start = _v22.a;
				var end = _v22.b;
				return _Utils_Tuple3(state, buffer, $elm$core$Platform$Cmd$none);
			case 'RollSearchSelectionForward':
				return A2($jxxcarlson$elm_text_editor$Editor$Update$rollSearchSelectionForward, state, buffer);
			case 'RollSearchSelectionBackward':
				return A2($jxxcarlson$elm_text_editor$Editor$Update$rollSearchSelectionBackward, state, buffer);
			case 'AcceptReplacementText':
				var str = msg.a;
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{replacementText: str}),
					buffer,
					$elm$core$Platform$Cmd$none);
			case 'ReplaceCurrentSelection':
				var _v23 = state.selection;
				if (_v23.$ === 'Nothing') {
					return _Utils_Tuple3(state, buffer, $elm$core$Platform$Cmd$none);
				} else {
					var end = _v23.a;
					var newBuffer = A4($jxxcarlson$elm_text_editor$Buffer$replace, state.cursor, end, state.replacementText, buffer);
					return A3(
						$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
						state,
						buffer,
						A2($jxxcarlson$elm_text_editor$Editor$Update$rollSearchSelectionForward, state, newBuffer));
				}
			case 'LastLine':
				var cursor = {
					column: 0,
					line: $elm$core$List$length(
						$jxxcarlson$elm_text_editor$Buffer$lines(buffer)) - 1
				};
				return A3(
					$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
					state,
					buffer,
					_Utils_Tuple3(
						_Utils_update(
							state,
							{cursor: cursor, selection: $elm$core$Maybe$Nothing}),
						buffer,
						A3($jxxcarlson$elm_text_editor$Editor$Update$setEditorViewportForLine, state.config.lineHeightFactor, state.config.lineHeight, cursor.line)));
			case 'RemoveCharAfter':
				var _v24 = state.selection;
				if (_v24.$ === 'Just') {
					var selection = _v24.a;
					var _v25 = A2($jxxcarlson$elm_text_editor$Position$order, selection, state.cursor);
					var start = _v25.a;
					var end = _v25.b;
					return A3(
						$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
						state,
						buffer,
						_Utils_Tuple3(
							_Utils_update(
								state,
								{cursor: start, selection: $elm$core$Maybe$Nothing}),
							A4($jxxcarlson$elm_text_editor$Buffer$replace, start, end, '', buffer),
							$elm$core$Platform$Cmd$none));
				} else {
					return A3(
						$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
						state,
						buffer,
						_Utils_Tuple3(
							state,
							A4(
								$jxxcarlson$elm_text_editor$Buffer$replace,
								state.cursor,
								$jxxcarlson$elm_text_editor$Position$nextColumn(state.cursor),
								'',
								buffer),
							$elm$core$Platform$Cmd$none));
				}
			case 'RemoveCharBefore':
				var _v26 = state.selection;
				if (_v26.$ === 'Just') {
					var selection = _v26.a;
					var _v27 = A2($jxxcarlson$elm_text_editor$Position$order, selection, state.cursor);
					var start = _v27.a;
					var end = _v27.b;
					return A3(
						$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
						state,
						buffer,
						_Utils_Tuple3(
							_Utils_update(
								state,
								{cursor: start, selection: $elm$core$Maybe$Nothing}),
							A4($jxxcarlson$elm_text_editor$Buffer$replace, start, end, '', buffer),
							$elm$core$Platform$Cmd$none));
				} else {
					return A3(
						$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
						state,
						buffer,
						_Utils_Tuple3(
							_Utils_update(
								state,
								{
									cursor: A3(
										$jxxcarlson$elm_text_editor$Buffer$clampPosition,
										$jxxcarlson$elm_text_editor$Buffer$Backward,
										buffer,
										$jxxcarlson$elm_text_editor$Position$previousColumn(state.cursor))
								}),
							A2($jxxcarlson$elm_text_editor$Buffer$removeBefore, state.cursor, buffer),
							$elm$core$Platform$Cmd$none));
				}
			case 'RemoveGroupAfter':
				var _v28 = state.selection;
				if (_v28.$ === 'Just') {
					var selection = _v28.a;
					var _v29 = A2($jxxcarlson$elm_text_editor$Position$order, selection, state.cursor);
					var start = _v29.a;
					var end = _v29.b;
					return A3(
						$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
						state,
						buffer,
						_Utils_Tuple3(
							_Utils_update(
								state,
								{cursor: start, selection: $elm$core$Maybe$Nothing}),
							A4($jxxcarlson$elm_text_editor$Buffer$replace, start, end, '', buffer),
							$elm$core$Platform$Cmd$none));
				} else {
					var end = A2($jxxcarlson$elm_text_editor$Buffer$groupEnd, state.cursor, buffer);
					return A3(
						$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
						state,
						buffer,
						_Utils_Tuple3(
							state,
							A4($jxxcarlson$elm_text_editor$Buffer$replace, state.cursor, end, '', buffer),
							$elm$core$Platform$Cmd$none));
				}
			case 'Copy':
				var _v30 = state.selection;
				if (_v30.$ === 'Nothing') {
					return A3(
						$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
						state,
						buffer,
						_Utils_Tuple3(
							_Utils_update(
								state,
								{selectedText: $elm$core$Maybe$Nothing}),
							buffer,
							$elm$core$Platform$Cmd$none));
				} else {
					var sel = _v30.a;
					return A3(
						$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
						state,
						buffer,
						function () {
							var _v31 = A2($jxxcarlson$elm_text_editor$Position$order, sel, state.cursor);
							var start = _v31.a;
							var end = _v31.b;
							var selectedText = A3($jxxcarlson$elm_text_editor$Buffer$between, start, end, buffer);
							return _Utils_Tuple3(
								_Utils_update(
									state,
									{
										selectedText: $elm$core$Maybe$Just(selectedText)
									}),
								buffer,
								$elm$core$Platform$Cmd$none);
						}());
				}
			case 'Cut':
				var _v32 = state.selection;
				if (_v32.$ === 'Nothing') {
					return A3(
						$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
						state,
						buffer,
						_Utils_Tuple3(
							_Utils_update(
								state,
								{selectedText: $elm$core$Maybe$Nothing}),
							buffer,
							$elm$core$Platform$Cmd$none));
				} else {
					var sel = _v32.a;
					return A3(
						$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
						state,
						buffer,
						function () {
							var _v33 = A2($jxxcarlson$elm_text_editor$Position$order, sel, state.cursor);
							var start = _v33.a;
							var end = _v33.b;
							var selectedText = A3($jxxcarlson$elm_text_editor$Buffer$between, start, end, buffer);
							return _Utils_Tuple3(
								_Utils_update(
									state,
									{
										selectedText: $elm$core$Maybe$Just(selectedText),
										selection: $elm$core$Maybe$Nothing
									}),
								A4($jxxcarlson$elm_text_editor$Buffer$replace, start, end, '', buffer),
								$elm$core$Platform$Cmd$none);
						}());
				}
			case 'RemoveGroupBefore':
				var _v34 = state.selection;
				if (_v34.$ === 'Just') {
					var selection = _v34.a;
					var _v35 = A2($jxxcarlson$elm_text_editor$Position$order, selection, state.cursor);
					var start = _v35.a;
					var end = _v35.b;
					return A3(
						$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
						state,
						buffer,
						_Utils_Tuple3(
							_Utils_update(
								state,
								{cursor: start, selection: $elm$core$Maybe$Nothing}),
							A4($jxxcarlson$elm_text_editor$Buffer$replace, start, end, '', buffer),
							$elm$core$Platform$Cmd$none));
				} else {
					var start = A2($jxxcarlson$elm_text_editor$Buffer$groupStart, state.cursor, buffer);
					return A3(
						$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
						state,
						buffer,
						_Utils_Tuple3(
							_Utils_update(
								state,
								{cursor: start}),
							A4($jxxcarlson$elm_text_editor$Buffer$replace, start, state.cursor, '', buffer),
							$elm$core$Platform$Cmd$none));
				}
			case 'Indent':
				var _v36 = state.selection;
				if (_v36.$ === 'Just') {
					var selection = _v36.a;
					return A3(
						$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
						state,
						buffer,
						_Utils_Tuple3(
							_Utils_update(
								state,
								{
									cursor: A2($jxxcarlson$elm_text_editor$Position$addColumn, $jxxcarlson$elm_text_editor$Buffer$indentSize, state.cursor),
									selection: $elm$core$Maybe$Just(
										A2($jxxcarlson$elm_text_editor$Position$addColumn, $jxxcarlson$elm_text_editor$Buffer$indentSize, selection))
								}),
							A3($jxxcarlson$elm_text_editor$Buffer$indentBetween, state.cursor, selection, buffer),
							$elm$core$Platform$Cmd$none));
				} else {
					var _v37 = A2($jxxcarlson$elm_text_editor$Buffer$indentFrom, state.cursor, buffer);
					var indentedBuffer = _v37.a;
					var indentedColumn = _v37.b;
					return A3(
						$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
						state,
						buffer,
						_Utils_Tuple3(
							_Utils_update(
								state,
								{
									cursor: A2($jxxcarlson$elm_text_editor$Position$setColumn, indentedColumn, state.cursor)
								}),
							indentedBuffer,
							$elm$core$Platform$Cmd$none));
				}
			case 'Deindent':
				var _v38 = state.selection;
				if (_v38.$ === 'Just') {
					var selection = _v38.a;
					var _v39 = A3($jxxcarlson$elm_text_editor$Buffer$deindentBetween, state.cursor, selection, buffer);
					var deindentedBuffer = _v39.a;
					var cursorColumn = _v39.b;
					var selectionColumn = _v39.c;
					return A3(
						$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
						state,
						buffer,
						_Utils_Tuple3(
							_Utils_update(
								state,
								{
									cursor: A2($jxxcarlson$elm_text_editor$Position$setColumn, cursorColumn, state.cursor),
									selection: $elm$core$Maybe$Just(
										A2($jxxcarlson$elm_text_editor$Position$setColumn, selectionColumn, selection))
								}),
							deindentedBuffer,
							$elm$core$Platform$Cmd$none));
				} else {
					var _v40 = A2($jxxcarlson$elm_text_editor$Buffer$deindentFrom, state.cursor, buffer);
					var deindentedBuffer = _v40.a;
					var deindentedColumn = _v40.b;
					return A3(
						$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
						state,
						buffer,
						_Utils_Tuple3(
							_Utils_update(
								state,
								{
									cursor: A2($jxxcarlson$elm_text_editor$Position$setColumn, deindentedColumn, state.cursor)
								}),
							deindentedBuffer,
							$elm$core$Platform$Cmd$none));
				}
			case 'SelectUp':
				var cursor = A3(
					$jxxcarlson$elm_text_editor$Buffer$clampPosition,
					$jxxcarlson$elm_text_editor$Buffer$Backward,
					buffer,
					$jxxcarlson$elm_text_editor$Position$previousLine(state.cursor));
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{
							cursor: cursor,
							selection: _Utils_eq(
								state.selection,
								$elm$core$Maybe$Just(cursor)) ? $elm$core$Maybe$Nothing : ((_Utils_eq(state.selection, $elm$core$Maybe$Nothing) && (!_Utils_eq(state.cursor, cursor))) ? $elm$core$Maybe$Just(state.cursor) : state.selection)
						}),
					buffer,
					$elm$core$Platform$Cmd$none);
			case 'SelectDown':
				var cursor = A3(
					$jxxcarlson$elm_text_editor$Buffer$clampPosition,
					$jxxcarlson$elm_text_editor$Buffer$Backward,
					buffer,
					$jxxcarlson$elm_text_editor$Position$nextLine(state.cursor));
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{
							cursor: cursor,
							selection: _Utils_eq(
								state.selection,
								$elm$core$Maybe$Just(cursor)) ? $elm$core$Maybe$Nothing : ((_Utils_eq(state.selection, $elm$core$Maybe$Nothing) && (!_Utils_eq(state.cursor, cursor))) ? $elm$core$Maybe$Just(state.cursor) : state.selection)
						}),
					buffer,
					$elm$core$Platform$Cmd$none);
			case 'SelectLeft':
				var cursor = A3(
					$jxxcarlson$elm_text_editor$Buffer$clampPosition,
					$jxxcarlson$elm_text_editor$Buffer$Backward,
					buffer,
					$jxxcarlson$elm_text_editor$Position$previousColumn(state.cursor));
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{
							cursor: cursor,
							selection: _Utils_eq(
								state.selection,
								$elm$core$Maybe$Just(cursor)) ? $elm$core$Maybe$Nothing : ((_Utils_eq(state.selection, $elm$core$Maybe$Nothing) && (!_Utils_eq(state.cursor, cursor))) ? $elm$core$Maybe$Just(state.cursor) : state.selection)
						}),
					buffer,
					$elm$core$Platform$Cmd$none);
			case 'SelectRight':
				var cursor = A3(
					$jxxcarlson$elm_text_editor$Buffer$clampPosition,
					$jxxcarlson$elm_text_editor$Buffer$Forward,
					buffer,
					$jxxcarlson$elm_text_editor$Position$nextColumn(state.cursor));
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{
							cursor: cursor,
							selection: _Utils_eq(
								state.selection,
								$elm$core$Maybe$Just(cursor)) ? $elm$core$Maybe$Nothing : ((_Utils_eq(state.selection, $elm$core$Maybe$Nothing) && (!_Utils_eq(state.cursor, cursor))) ? $elm$core$Maybe$Just(state.cursor) : state.selection)
						}),
					buffer,
					$elm$core$Platform$Cmd$none);
			case 'SelectToLineStart':
				var cursor = A2($jxxcarlson$elm_text_editor$Position$setColumn, 0, state.cursor);
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{
							cursor: cursor,
							selection: _Utils_eq(
								state.selection,
								$elm$core$Maybe$Just(cursor)) ? $elm$core$Maybe$Nothing : ((_Utils_eq(state.selection, $elm$core$Maybe$Nothing) && (!_Utils_eq(state.cursor, cursor))) ? $elm$core$Maybe$Just(state.cursor) : state.selection)
						}),
					buffer,
					$elm$core$Platform$Cmd$none);
			case 'SelectToLineEnd':
				var cursor = A2(
					$jxxcarlson$elm_text_editor$Position$setColumn,
					A2(
						$elm$core$Maybe$withDefault,
						state.cursor.line,
						A2($jxxcarlson$elm_text_editor$Buffer$lineEnd, state.cursor.line, buffer)),
					state.cursor);
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{
							cursor: cursor,
							selection: _Utils_eq(
								state.selection,
								$elm$core$Maybe$Just(cursor)) ? $elm$core$Maybe$Nothing : ((_Utils_eq(state.selection, $elm$core$Maybe$Nothing) && (!_Utils_eq(state.cursor, cursor))) ? $elm$core$Maybe$Just(state.cursor) : state.selection)
						}),
					buffer,
					$elm$core$Platform$Cmd$none);
			case 'SelectToGroupStart':
				var cursor = A2($jxxcarlson$elm_text_editor$Buffer$groupStart, state.cursor, buffer);
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{
							cursor: cursor,
							selection: _Utils_eq(
								state.selection,
								$elm$core$Maybe$Just(cursor)) ? $elm$core$Maybe$Nothing : ((_Utils_eq(state.selection, $elm$core$Maybe$Nothing) && (!_Utils_eq(state.cursor, cursor))) ? $elm$core$Maybe$Just(state.cursor) : state.selection)
						}),
					buffer,
					A3($jxxcarlson$elm_text_editor$Editor$Update$setEditorViewportForLine, state.config.lineHeightFactor, state.config.lineHeight, cursor.line));
			case 'SelectToGroupEnd':
				var cursor = A2($jxxcarlson$elm_text_editor$Buffer$groupEnd, state.cursor, buffer);
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{
							cursor: cursor,
							selection: _Utils_eq(
								state.selection,
								$elm$core$Maybe$Just(cursor)) ? $elm$core$Maybe$Nothing : ((_Utils_eq(state.selection, $elm$core$Maybe$Nothing) && (!_Utils_eq(state.cursor, cursor))) ? $elm$core$Maybe$Just(state.cursor) : state.selection)
						}),
					buffer,
					A3($jxxcarlson$elm_text_editor$Editor$Update$setEditorViewportForLine, state.config.lineHeightFactor, state.config.lineHeight, cursor.line));
			case 'SelectAll':
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{
							cursor: $jxxcarlson$elm_text_editor$Buffer$lastPosition(buffer),
							selection: $elm$core$Maybe$Just(
								A2($jxxcarlson$elm_text_editor$Position$Position, 0, 0))
						}),
					buffer,
					A3($jxxcarlson$elm_text_editor$Editor$Update$setEditorViewportForLine, state.config.lineHeightFactor, state.config.lineHeight, 0));
			case 'SelectGroup':
				var range = A2($jxxcarlson$elm_text_editor$Buffer$groupRange, state.cursor, buffer);
				if (range.$ === 'Just') {
					var _v42 = range.a;
					var start = _v42.a;
					var end = _v42.b;
					return _Utils_Tuple3(
						_Utils_update(
							state,
							{
								cursor: end,
								selection: $elm$core$Maybe$Just(start)
							}),
						buffer,
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple3(state, buffer, $elm$core$Platform$Cmd$none);
				}
			case 'SelectLine':
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{
							cursor: A2(
								$elm$core$Maybe$withDefault,
								state.cursor,
								A2(
									$elm$core$Maybe$map,
									function (column) {
										return A2($jxxcarlson$elm_text_editor$Position$setColumn, column, state.cursor);
									},
									A2($jxxcarlson$elm_text_editor$Buffer$lineEnd, state.cursor.line, buffer))),
							selection: $elm$core$Maybe$Just(
								A2($jxxcarlson$elm_text_editor$Position$setColumn, 0, state.cursor))
						}),
					buffer,
					$elm$core$Platform$Cmd$none);
			case 'SyncToSearchHit':
				return A2($jxxcarlson$elm_text_editor$Editor$Update$sendLine, state, buffer);
			case 'SendLine':
				return A2($jxxcarlson$elm_text_editor$Editor$Update$sendLine, state, buffer);
			case 'GotViewport':
				var result = msg.a;
				if (result.$ === 'Ok') {
					var vp = result.a;
					var y = vp.viewport.y;
					var lineNumber = $elm$core$Basics$round(y / state.config.lineHeight);
					return _Utils_Tuple3(
						_Utils_update(
							state,
							{topLine: lineNumber}),
						buffer,
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple3(state, buffer, $elm$core$Platform$Cmd$none);
				}
			case 'GotViewportForSync':
				var cursor = msg.a;
				var selection = msg.b;
				var result = msg.c;
				if (result.$ === 'Ok') {
					var vp = result.a;
					var y = vp.viewport.y;
					var lineNumber = $elm$core$Basics$round(y / state.config.lineHeight);
					return _Utils_Tuple3(
						_Utils_update(
							state,
							{cursor: cursor, selection: selection, topLine: lineNumber}),
						buffer,
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple3(state, buffer, $elm$core$Platform$Cmd$none);
				}
			case 'Undo':
				var _v45 = A2(
					$jxxcarlson$elm_text_editor$Editor$History$undo,
					A2($jxxcarlson$elm_text_editor$Editor$Update$stateToSnapshot, state, buffer),
					state.history);
				if (_v45.$ === 'Just') {
					var _v46 = _v45.a;
					var history = _v46.a;
					var snapshot = _v46.b;
					return _Utils_Tuple3(
						_Utils_update(
							state,
							{cursor: snapshot.cursor, history: history, selection: snapshot.selection}),
						snapshot.buffer,
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple3(state, buffer, $elm$core$Platform$Cmd$none);
				}
			case 'Redo':
				var _v47 = A2(
					$jxxcarlson$elm_text_editor$Editor$History$redo,
					A2($jxxcarlson$elm_text_editor$Editor$Update$stateToSnapshot, state, buffer),
					state.history);
				if (_v47.$ === 'Just') {
					var _v48 = _v47.a;
					var history = _v48.a;
					var snapshot = _v48.b;
					return _Utils_Tuple3(
						_Utils_update(
							state,
							{cursor: snapshot.cursor, history: history, selection: snapshot.selection}),
						snapshot.buffer,
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple3(state, buffer, $elm$core$Platform$Cmd$none);
				}
			case 'ScrollUp':
				var k = msg.a;
				var newCursor = A2($jxxcarlson$elm_text_editor$Position$shift, -k, state.cursor);
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{cursor: newCursor, selection: $elm$core$Maybe$Nothing}),
					buffer,
					A3($jxxcarlson$elm_text_editor$Editor$Update$setEditorViewportForLine, state.config.lineHeightFactor, state.config.lineHeight, newCursor.line));
			case 'ScrollDown':
				var k = msg.a;
				var newCursor = A2($jxxcarlson$elm_text_editor$Position$shift, k, state.cursor);
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{cursor: newCursor, selection: $elm$core$Maybe$Nothing}),
					buffer,
					A3($jxxcarlson$elm_text_editor$Editor$Update$setEditorViewportForLine, state.config.lineHeightFactor, state.config.lineHeight, newCursor.line));
			case 'Clear':
				return A3(
					$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
					state,
					buffer,
					_Utils_Tuple3(
						state,
						$jxxcarlson$elm_text_editor$Buffer$init(''),
						$elm$core$Platform$Cmd$none));
			case 'WrapAll':
				return A3(
					$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
					state,
					buffer,
					_Utils_Tuple3(
						state,
						$jxxcarlson$elm_text_editor$Buffer$init(
							A2(
								$jxxcarlson$elm_text_editor$Editor$Wrap$paragraphs,
								state.config.wrapParams,
								$jxxcarlson$elm_text_editor$Buffer$toString(buffer))),
						$elm$core$Platform$Cmd$none));
			case 'WrapSelection':
				var _v49 = state.selection;
				if (_v49.$ === 'Nothing') {
					var selection = A2($jxxcarlson$elm_text_editor$Buffer$selectPreviousParagraph, buffer, state.cursor);
					if (selection.$ === 'Nothing') {
						return _Utils_Tuple3(state, buffer, $elm$core$Platform$Cmd$none);
					} else {
						var start = selection.a;
						return A3(
							$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
							state,
							buffer,
							A4($jxxcarlson$elm_text_editor$Editor$Update$wrapBetween, state, buffer, start, state.cursor));
					}
				} else {
					var sel = _v49.a;
					var _v51 = A2($jxxcarlson$elm_text_editor$Position$order, sel, state.cursor);
					var start = _v51.a;
					var end = _v51.b;
					return A3(
						$jxxcarlson$elm_text_editor$Editor$Update$recordHistory,
						state,
						buffer,
						A4($jxxcarlson$elm_text_editor$Editor$Update$wrapBetween, state, buffer, start, end));
				}
			case 'ToggleWrapping':
				return _Utils_eq(state.config.wrapOption, $jxxcarlson$elm_text_editor$Editor$Config$DoWrap) ? _Utils_Tuple3(
					A2($jxxcarlson$elm_text_editor$Editor$Update$setWrapOption, $jxxcarlson$elm_text_editor$Editor$Config$DontWrap, state),
					buffer,
					$elm$core$Platform$Cmd$none) : _Utils_Tuple3(
					A2($jxxcarlson$elm_text_editor$Editor$Update$setWrapOption, $jxxcarlson$elm_text_editor$Editor$Config$DoWrap, state),
					buffer,
					$elm$core$Platform$Cmd$none);
			case 'ToggleHelp':
				if (state.showHelp) {
					var _v52 = A3($jxxcarlson$elm_text_editor$Editor$Update$load, $jxxcarlson$elm_text_editor$Editor$Config$DontWrap, $jxxcarlson$elm_text_editor$Editor$Strings$help, state);
					var newState = _v52.a;
					var newBuffer = _v52.b;
					return _Utils_Tuple3(
						_Utils_update(
							newState,
							{savedBuffer: buffer, showHelp: false}),
						newBuffer,
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple3(
						_Utils_update(
							state,
							{
								savedBuffer: $jxxcarlson$elm_text_editor$Buffer$fromString(''),
								showHelp: true
							}),
						state.savedBuffer,
						$elm$core$Platform$Cmd$none);
				}
			case 'ToggleInfoPanel':
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{showInfoPanel: !state.showInfoPanel}),
					buffer,
					$elm$core$Platform$Cmd$none);
			case 'ToggleGoToLinePanel':
				return state.showGoToLinePanel ? _Utils_Tuple3(
					_Utils_update(
						state,
						{showGoToLinePanel: false}),
					buffer,
					$jxxcarlson$elm_text_editor$Editor$Update$blur('line-number-input')) : _Utils_Tuple3(
					_Utils_update(
						state,
						{showGoToLinePanel: true}),
					buffer,
					$jxxcarlson$elm_text_editor$Editor$Update$focus('line-number-input'));
			case 'ToggleSearchPanel':
				return state.showSearchPanel ? _Utils_Tuple3(
					_Utils_update(
						state,
						{showSearchPanel: false}),
					buffer,
					$jxxcarlson$elm_text_editor$Editor$Update$blur('editor-search-box')) : _Utils_Tuple3(
					_Utils_update(
						state,
						{showSearchPanel: true}),
					buffer,
					$jxxcarlson$elm_text_editor$Editor$Update$focus('editor-search-box'));
			case 'ToggleReplacePanel':
				return state.showSearchPanel ? _Utils_Tuple3(
					_Utils_update(
						state,
						{canReplace: false, showSearchPanel: false}),
					buffer,
					$jxxcarlson$elm_text_editor$Editor$Update$blur('editor-search-box')) : _Utils_Tuple3(
					_Utils_update(
						state,
						{canReplace: true, showSearchPanel: true}),
					buffer,
					$jxxcarlson$elm_text_editor$Editor$Update$focus('editor-search-box'));
			case 'OpenReplaceField':
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{canReplace: true}),
					buffer,
					$elm$core$Platform$Cmd$none);
			case 'DebounceMsg':
				var msg_ = msg.a;
				var _v53 = A4(
					$jinjor$elm_debounce$Debounce$update,
					$jxxcarlson$elm_text_editor$Editor$Update$debounceConfig,
					$jinjor$elm_debounce$Debounce$takeLast($jxxcarlson$elm_text_editor$Editor$Update$unload),
					msg_,
					state.debounce);
				var debounce = _v53.a;
				var cmd = _v53.b;
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{debounce: debounce}),
					buffer,
					cmd);
			default:
				var str = msg.a;
				return _Utils_Tuple3(
					_Utils_update(
						state,
						{debounce: state.debounce}),
					buffer,
					$elm$core$Platform$Cmd$none);
		}
	});
var $jxxcarlson$elm_text_editor$Editor$update = F2(
	function (msg, _v0) {
		var data = _v0.a;
		var _v1 = A3($jxxcarlson$elm_text_editor$Editor$Update$update, data.buffer, msg, data.state);
		var is = _v1.a;
		var b = _v1.b;
		var cmd = _v1.c;
		return _Utils_Tuple2(
			$jxxcarlson$elm_text_editor$Editor$Editor(
				{buffer: b, state: is}),
			cmd);
	});
var $author$project$Main$updateEditor = F3(
	function (model, editor_, cmd_) {
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{editor: editor_}),
			A2($elm$core$Platform$Cmd$map, $author$project$Main$EditorMsg, cmd_));
	});
var $author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'EditorMsg':
				var editorMsg = msg.a;
				var _v1 = A2($jxxcarlson$elm_text_editor$Editor$update, editorMsg, model.editor);
				var newEditor = _v1.a;
				var editorCmd = _v1.b;
				switch (editorMsg.$) {
					case 'CopyPasteClipboard':
						return function (_v3) {
							var m = _v3.a;
							return _Utils_Tuple2(
								m,
								$author$project$Outside$sendInfo(
									$author$project$Outside$AskForClipBoard($elm$json$Json$Encode$null)));
						}(
							A3($author$project$Main$syncWithEditor, model, newEditor, editorCmd));
					case 'WriteToSystemClipBoard':
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{editor: newEditor}),
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										$author$project$Outside$sendInfo(
										$author$project$Outside$WriteToClipBoard(
											A2(
												$elm$core$Maybe$withDefault,
												'Nothing!!',
												$jxxcarlson$elm_text_editor$Editor$getSelectedText(newEditor)))),
										A2($elm$core$Platform$Cmd$map, $author$project$Main$EditorMsg, editorCmd)
									])));
					case 'Insert':
						var str = editorMsg.a;
						return A3($author$project$Main$updateEditor, model, newEditor, editorCmd);
					case 'Unload':
						var str = editorMsg.a;
						return A3($author$project$Main$syncWithEditor, model, newEditor, editorCmd);
					case 'SendLine':
						return A3(
							$author$project$Main$syncAndHighlightRenderedText,
							$jxxcarlson$elm_text_editor$Editor$lineAtCursor(newEditor),
							A2($elm$core$Platform$Cmd$map, $author$project$Main$EditorMsg, editorCmd),
							_Utils_update(
								model,
								{editor: newEditor}));
					case 'WrapAll':
						return A3($author$project$Main$syncWithEditor, model, newEditor, editorCmd);
					case 'Cut':
						return A3($author$project$Main$syncWithEditor, model, newEditor, editorCmd);
					case 'Paste':
						return A3($author$project$Main$syncWithEditor, model, newEditor, editorCmd);
					case 'Undo':
						return A3($author$project$Main$syncWithEditor, model, newEditor, editorCmd);
					case 'Redo':
						return A3($author$project$Main$syncWithEditor, model, newEditor, editorCmd);
					case 'RemoveGroupAfter':
						return A3($author$project$Main$syncWithEditor, model, newEditor, editorCmd);
					case 'RemoveGroupBefore':
						return A3($author$project$Main$syncWithEditor, model, newEditor, editorCmd);
					case 'Indent':
						return A3($author$project$Main$syncWithEditor, model, newEditor, editorCmd);
					case 'Deindent':
						return A3($author$project$Main$syncWithEditor, model, newEditor, editorCmd);
					case 'Clear':
						return A3($author$project$Main$syncWithEditor, model, newEditor, editorCmd);
					case 'WrapSelection':
						return A3($author$project$Main$syncWithEditor, model, newEditor, editorCmd);
					default:
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{editor: newEditor}),
							A2($elm$core$Platform$Cmd$map, $author$project$Main$EditorMsg, editorCmd));
				}
			case 'Outside':
				var infoForElm = msg.a;
				var clipboard = infoForElm.a;
				return A2($author$project$Main$pasteToEditorClipboard, model, clipboard);
			case 'LogErr':
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 'GetContent':
				var str = msg.a;
				return _Utils_Tuple2(
					A2($author$project$Main$processContent, str, model),
					$elm$core$Platform$Cmd$none);
			case 'ProcessLine':
				var str = msg.a;
				var id = function () {
					var _v5 = A2($author$project$Markdown$Parse$searchAST, str, model.lastAst);
					if (_v5.$ === 'Nothing') {
						return '??';
					} else {
						var id_ = _v5.a;
						return $author$project$Markdown$Parse$stringFromId(id_);
					}
				}();
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							message: 'str = ' + (A2($elm$core$String$left, 20, str) + (' -- Clicked on id: ' + id))
						}),
					$author$project$Main$setViewportForElement(id));
			case 'SetViewPortForElement':
				var result = msg.a;
				if (result.$ === 'Ok') {
					var _v7 = result.a;
					var element = _v7.a;
					var viewport = _v7.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{message: 'synced'}),
						A2($author$project$Main$setViewPortForSelectedLine, element, viewport));
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{message: 'sync error'}),
						$elm$core$Platform$Cmd$none);
				}
			case 'GenerateSeed':
				return _Utils_Tuple2(
					model,
					A2(
						$elm$random$Random$generate,
						$author$project$Main$NewSeed,
						A2($elm$random$Random$int, 1, 10000)));
			case 'NewSeed':
				var newSeed = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{seed: newSeed}),
					$elm$core$Platform$Cmd$none);
			case 'NoOp':
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 'Clear':
				return A2($author$project$Main$load, model, '');
			case 'Restart':
				return $author$project$Main$doInit(
					$author$project$Main$getFlags(model));
			case 'LoadExample1':
				return A2($author$project$Main$load, model, $author$project$Strings$text1);
			case 'LoadExample2':
				return A2($author$project$Main$load, model, $author$project$Strings$text2);
			case 'SelectStandard':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{option: $author$project$Markdown$Option$Standard}),
					$elm$core$Platform$Cmd$none);
			case 'SelectExtended':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{option: $author$project$Markdown$Option$Extended}),
					$elm$core$Platform$Cmd$none);
			case 'SelectExtendedMath':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{option: $author$project$Markdown$Option$ExtendedMath}),
					$elm$core$Platform$Cmd$none);
			case 'GotSecondPart':
				var _v8 = msg.a;
				var newAst = _v8.a;
				var newRenderedText = _v8.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{counter: model.counter + 1, lastAst: newAst, renderedText: newRenderedText}),
					$elm$core$Platform$Cmd$none);
			default:
				var markdownMsg = msg.a;
				var id = markdownMsg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{message: 'Clicked: ' + id}),
					$elm$core$Platform$Cmd$none);
		}
	});
var $jxxcarlson$elm_text_editor$Editor$Styles$style = $elm$html$Html$node('style');
var $jxxcarlson$elm_text_editor$Editor$Styles$getStyleParams = function (c) {
	return {
		editorHeight: $elm$core$String$fromFloat(c.editorHeight),
		editorWidth: $elm$core$String$fromFloat(c.editorWidth),
		fontSize: $elm$core$String$fromFloat(c.fontProportion * c.lineHeight),
		lineHeight: $elm$core$String$fromFloat(c.lineHeight)
	};
};
var $lukewestby$elm_string_interpolate$String$Interpolate$applyInterpolation = F2(
	function (replacements, _v0) {
		var match = _v0.match;
		var ordinalString = A2(
			$elm$core$Basics$composeL,
			$elm$core$String$dropLeft(1),
			$elm$core$String$dropRight(1))(match);
		return A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$andThen,
				function (value) {
					return A2($elm$core$Array$get, value, replacements);
				},
				$elm$core$String$toInt(ordinalString)));
	});
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{caseInsensitive: false, multiline: false},
		string);
};
var $lukewestby$elm_string_interpolate$String$Interpolate$interpolationRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('\\{\\d+\\}'));
var $elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
var $lukewestby$elm_string_interpolate$String$Interpolate$interpolate = F2(
	function (string, args) {
		var asArray = $elm$core$Array$fromList(args);
		return A3(
			$elm$regex$Regex$replace,
			$lukewestby$elm_string_interpolate$String$Interpolate$interpolationRegex,
			$lukewestby$elm_string_interpolate$String$Interpolate$applyInterpolation(asArray),
			string);
	});
var $jxxcarlson$elm_text_editor$Editor$Styles$styleTemplate = '\n\nbody { font-size: {1}px;\n       line-height: {2}px;}\n\n.elm-editor-container {\n  font-family: monospace;\n  width: {0}px;\n  user-select: none;\n  -webkit-user-select: none;\n  display: flex;\n  // overflow-x : scroll;\n  // overflow-y : scroll;\n  // height: {3}px;\n}\n\n.elm-editor-container:focus {\n  outline: none;\n    // background-color : lightblue;\n}\n\n.elm-editor-gutter {\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n}\n\n.elm-editor-lines {\n  flex-grow: 1;\n}\n\n.elm-editor-line-number {\n  display: inline-block;\n  width: 35px;\n  padding-right: 5px;\n  text-align: right;\n  background-color: lightgray;\n  cursor: default;\n}\n\n.elm-editor-line {\n  cursor: text;\n}\n\n.elm-editor-line__gutter-padding {\n  width: 5px;\n}\n\n.elm-editor-line__character--has-cursor {\n  position: relative;\n}\n\n.elm-editor-line__character--selected {\n  background-color: #8d9ffe;\n  color: white;\n}\n\n.elm-editor-cursor {\n  position: absolute;\n  border-left: 16px solid #990000;\n  opacity: 0.2;\n  left: 0;\n  height: 100%;\n}\n\n.elm-editor-container:focus .elm-editor-cursor {\n  animation: 1s blink step-start infinite;\n  border-left: 4px solid #333333;\n}\n\n@keyframes blink {\n  from, to {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;s\n  }\n}\n\n\nbody {\n    font-family: sans-serif;\n\n    }\n\n.center-column {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: lightblue; //: #eeeeee;\n    }\n\n#editor-container {\n    text-align: left;\n    }\n\n\n\n';
var $jxxcarlson$elm_text_editor$Editor$Styles$styleText = function (styleConfig) {
	var s = $jxxcarlson$elm_text_editor$Editor$Styles$getStyleParams(styleConfig);
	return A2(
		$lukewestby$elm_string_interpolate$String$Interpolate$interpolate,
		$jxxcarlson$elm_text_editor$Editor$Styles$styleTemplate,
		_List_fromArray(
			[s.editorWidth, s.fontSize, s.lineHeight, s.editorHeight]));
};
var $jxxcarlson$elm_text_editor$Editor$Styles$editorStyles = function (styleConfig) {
	return A2(
		$jxxcarlson$elm_text_editor$Editor$Styles$style,
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text(
				$jxxcarlson$elm_text_editor$Editor$Styles$styleText(styleConfig))
			]));
};
var $jxxcarlson$elm_text_editor$Editor$innerStyle = function (h) {
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$Attributes$style,
			'height',
			$elm$core$String$fromFloat(h) + 'px'),
			A2($elm$html$Html$Attributes$style, 'border', 'solid'),
			A2($elm$html$Html$Attributes$style, 'border-width', '0.5px'),
			A2($elm$html$Html$Attributes$style, 'border-color', '#aaa'),
			A2($elm$html$Html$Attributes$attribute, 'id', '__inner_editor__'),
			A2($elm$html$Html$Attributes$style, 'overflow-y', 'scroll'),
			A2(
			$elm$html$Html$Attributes$style,
			'height',
			$elm$core$String$fromFloat(h) + 'px')
		]);
};
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $jxxcarlson$elm_text_editor$Editor$Update$AcceptLineNumber = function (a) {
	return {$: 'AcceptLineNumber', a: a};
};
var $jxxcarlson$elm_text_editor$Editor$View$setHtmlId = function (id) {
	return A2($elm$html$Html$Attributes$attribute, 'id', id);
};
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty('placeholder');
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $jxxcarlson$elm_text_editor$Editor$Widget$textField = F5(
	function (width, msg, str, attr, innerAttr) {
		return A2(
			$elm$html$Html$div,
			_Utils_ap(
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'margin-bottom', '10px')
					]),
				attr),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$input,
					_Utils_ap(
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'height', '18px'),
								A2(
								$elm$html$Html$Attributes$style,
								'width',
								$elm$core$String$fromInt(width) + 'px'),
								$elm$html$Html$Attributes$type_('text'),
								$elm$html$Html$Attributes$placeholder(str),
								A2($elm$html$Html$Attributes$style, 'margin-right', '8px'),
								$elm$html$Html$Events$onInput(msg)
							]),
						innerAttr),
					_List_Nil)
				]));
	});
var $jxxcarlson$elm_text_editor$Editor$View$acceptLineNumber = A5(
	$jxxcarlson$elm_text_editor$Editor$Widget$textField,
	30,
	$jxxcarlson$elm_text_editor$Editor$Update$AcceptLineNumber,
	'',
	_List_fromArray(
		[
			A2($elm$html$Html$Attributes$style, 'margin-top', '5px'),
			A2($elm$html$Html$Attributes$style, 'float', 'left')
		]),
	_List_fromArray(
		[
			$jxxcarlson$elm_text_editor$Editor$View$setHtmlId('line-number-input')
		]));
var $jxxcarlson$elm_text_editor$Editor$Update$ToggleGoToLinePanel = {$: 'ToggleGoToLinePanel'};
var $elm$html$Html$button = _VirtualDom_node('button');
var $jxxcarlson$elm_text_editor$Editor$Widget$lightButtonLabelStyle = function (width) {
	return _List_fromArray(
		[
			A2($elm$html$Html$Attributes$style, 'font-size', '12px'),
			A2($elm$html$Html$Attributes$style, 'color', '#444'),
			A2(
			$elm$html$Html$Attributes$style,
			'width',
			$elm$core$String$fromInt(width) + 'px'),
			A2($elm$html$Html$Attributes$style, 'height', '24px'),
			A2($elm$html$Html$Attributes$style, 'border', 'none'),
			A2($elm$html$Html$Attributes$style, 'text-align', 'left')
		]);
};
var $jxxcarlson$elm_text_editor$Editor$Widget$rowButtonStyle = _List_fromArray(
	[
		A2($elm$html$Html$Attributes$style, 'font-size', '12px'),
		A2($elm$html$Html$Attributes$style, 'border', 'none'),
		A2($elm$html$Html$Attributes$style, 'margin-right', '8px'),
		A2($elm$html$Html$Attributes$style, 'float', 'left')
	]);
var $jxxcarlson$elm_text_editor$Editor$Widget$lightRowButton = F4(
	function (width, msg, str, attr) {
		return A2(
			$elm$html$Html$div,
			_Utils_ap($jxxcarlson$elm_text_editor$Editor$Widget$rowButtonStyle, attr),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$button,
					_Utils_ap(
						_List_fromArray(
							[
								$elm$html$Html$Events$onClick(msg)
							]),
						$jxxcarlson$elm_text_editor$Editor$Widget$lightButtonLabelStyle(width)),
					_List_fromArray(
						[
							$elm$html$Html$text(str)
						]))
				]));
	});
var $jxxcarlson$elm_text_editor$Editor$View$dismissGoToLineButton = A4(
	$jxxcarlson$elm_text_editor$Editor$Widget$lightRowButton,
	25,
	$jxxcarlson$elm_text_editor$Editor$Update$ToggleGoToLinePanel,
	'X',
	_List_fromArray(
		[
			A2($elm$html$Html$Attributes$style, 'margin-top', '5px'),
			A2($elm$html$Html$Attributes$style, 'float', 'left')
		]));
var $jxxcarlson$elm_text_editor$Editor$Style$darkGray = '#444548';
var $jxxcarlson$elm_text_editor$Editor$Widget$rowButtonLabelStyle = function (width) {
	return _List_fromArray(
		[
			A2($elm$html$Html$Attributes$style, 'font-size', '12px'),
			A2($elm$html$Html$Attributes$style, 'background-color', $jxxcarlson$elm_text_editor$Editor$Style$darkGray),
			A2($elm$html$Html$Attributes$style, 'color', '#eee'),
			A2(
			$elm$html$Html$Attributes$style,
			'width',
			$elm$core$String$fromInt(width) + 'px'),
			A2($elm$html$Html$Attributes$style, 'height', '24px'),
			A2($elm$html$Html$Attributes$style, 'border', 'none')
		]);
};
var $jxxcarlson$elm_text_editor$Editor$Widget$rowButton = F4(
	function (width, msg, str, attr) {
		return A2(
			$elm$html$Html$div,
			_Utils_ap($jxxcarlson$elm_text_editor$Editor$Widget$rowButtonStyle, attr),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$button,
					_Utils_ap(
						_List_fromArray(
							[
								$elm$html$Html$Events$onClick(msg)
							]),
						$jxxcarlson$elm_text_editor$Editor$Widget$rowButtonLabelStyle(width)),
					_List_fromArray(
						[
							$elm$html$Html$text(str)
						]))
				]));
	});
var $jxxcarlson$elm_text_editor$Editor$View$goToLineButton = A4(
	$jxxcarlson$elm_text_editor$Editor$Widget$rowButton,
	80,
	$jxxcarlson$elm_text_editor$Editor$Update$NoOp,
	'Go to line',
	_List_fromArray(
		[
			A2($elm$html$Html$Attributes$style, 'margin-top', '5px'),
			A2($elm$html$Html$Attributes$style, 'margin-left', '5px'),
			A2($elm$html$Html$Attributes$style, 'float', 'left')
		]));
var $jxxcarlson$elm_text_editor$Editor$Style$lightGray = '#a5a6ab';
var $jxxcarlson$elm_text_editor$Editor$View$px = function (p) {
	return $elm$core$String$fromFloat(p) + 'px';
};
var $jxxcarlson$elm_text_editor$Editor$View$goToLinePanel_ = function (width) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$Attributes$style,
				'width',
				$jxxcarlson$elm_text_editor$Editor$View$px(width)),
				A2($elm$html$Html$Attributes$style, 'height', '34px'),
				A2($elm$html$Html$Attributes$style, 'padding', '1px'),
				A2($elm$html$Html$Attributes$style, 'opacity', '0.9'),
				A2($elm$html$Html$Attributes$style, 'background-color', $jxxcarlson$elm_text_editor$Editor$Style$lightGray),
				A2($elm$html$Html$Attributes$style, 'float', 'left')
			]),
		_List_fromArray(
			[$jxxcarlson$elm_text_editor$Editor$View$goToLineButton, $jxxcarlson$elm_text_editor$Editor$View$acceptLineNumber, $jxxcarlson$elm_text_editor$Editor$View$dismissGoToLineButton]));
};
var $jxxcarlson$elm_text_editor$Editor$View$goToLinePanel = function (state) {
	return state.showGoToLinePanel ? $jxxcarlson$elm_text_editor$Editor$View$goToLinePanel_(state.config.width) : A2($elm$html$Html$div, _List_Nil, _List_Nil);
};
var $jxxcarlson$elm_text_editor$Editor$Widget$headingStyle = _List_fromArray(
	[
		A2($elm$html$Html$Attributes$style, 'font-size', '14px'),
		A2($elm$html$Html$Attributes$style, 'margin-right', '12px'),
		A2($elm$html$Html$Attributes$style, 'float', 'left')
	]);
var $jxxcarlson$elm_text_editor$Editor$View$cursorPosition = F2(
	function (state, lines) {
		var r = $elm$core$String$fromInt(state.cursor.line + 1);
		var ll = A2(
			$elm$core$Maybe$withDefault,
			'-1',
			A2(
				$elm$core$Maybe$map,
				A2($elm$core$Basics$composeR, $elm$core$String$length, $elm$core$String$fromInt),
				A2($elm_community$list_extra$List$Extra$getAt, state.cursor.line, lines)));
		var c = $elm$core$String$fromInt(state.cursor.column);
		return A2(
			$elm$html$Html$div,
			_Utils_ap(
				$jxxcarlson$elm_text_editor$Editor$Widget$headingStyle,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'margin-top', '2px')
					])),
			_List_fromArray(
				[
					$elm$html$Html$text('Cursor = (' + (r + (', ' + (c + (', ' + (ll + ')'))))))
				]));
	});
var $jxxcarlson$elm_text_editor$Editor$View$headerPanelStyle = function (width) {
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$Attributes$style,
			'width',
			$jxxcarlson$elm_text_editor$Editor$View$px(width - 40)),
			A2($elm$html$Html$Attributes$style, 'padding-top', '10px'),
			A2($elm$html$Html$Attributes$style, 'height', '27px'),
			A2($elm$html$Html$Attributes$style, 'background-color', $jxxcarlson$elm_text_editor$Editor$Style$lightGray),
			A2($elm$html$Html$Attributes$style, 'opacity', '0.8'),
			A2($elm$html$Html$Attributes$style, 'font-size', '14px'),
			A2($elm$html$Html$Attributes$style, 'padding-left', '40px'),
			$elm$html$Html$Attributes$class('flex-row')
		]);
};
var $jxxcarlson$elm_text_editor$Editor$View$lineCount = function (lines) {
	return A2(
		$elm$html$Html$div,
		_Utils_ap(
			$jxxcarlson$elm_text_editor$Editor$Widget$headingStyle,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin-top', '2px')
				])),
		_List_fromArray(
			[
				$elm$html$Html$text(
				'Lines: ' + $elm$core$String$fromInt(
					$elm$core$List$length(lines)))
			]));
};
var $jxxcarlson$elm_text_editor$Editor$Update$ToggleHelp = {$: 'ToggleHelp'};
var $jxxcarlson$elm_text_editor$Editor$View$toggleHelpButtonHeader = function (state) {
	var label = state.showHelp ? 'Help' : 'Back';
	return A4(
		$jxxcarlson$elm_text_editor$Editor$Widget$rowButton,
		60,
		$jxxcarlson$elm_text_editor$Editor$Update$ToggleHelp,
		label,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'height', '25px'),
				A2($elm$html$Html$Attributes$style, 'margin-top', '-3px'),
				A2($elm$html$Html$Attributes$style, 'margin-left', '-30px')
			]));
};
var $jxxcarlson$elm_text_editor$Editor$View$wordCount = function (lines) {
	var words = $elm$core$List$concat(
		A2($elm$core$List$map, $elm$core$String$words, lines));
	return A2(
		$elm$html$Html$div,
		_Utils_ap(
			$jxxcarlson$elm_text_editor$Editor$Widget$headingStyle,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin-top', '2px')
				])),
		_List_fromArray(
			[
				$elm$html$Html$text(
				'Words: ' + $elm$core$String$fromInt(
					$elm$core$List$length(words)))
			]));
};
var $jxxcarlson$elm_text_editor$Editor$View$wrappingOptionDisplay = function (state) {
	var message = _Utils_eq(state.config.wrapOption, $jxxcarlson$elm_text_editor$Editor$Config$DoWrap) ? 'Wrap: ON' : 'Wrap: OFF';
	return A2(
		$elm$html$Html$div,
		_Utils_ap(
			$jxxcarlson$elm_text_editor$Editor$Widget$headingStyle,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin-top', '2px')
				])),
		_List_fromArray(
			[
				$elm$html$Html$text(message)
			]));
};
var $jxxcarlson$elm_text_editor$Editor$View$headerPanel = F2(
	function (state, lines) {
		return A2(
			$elm$html$Html$div,
			$jxxcarlson$elm_text_editor$Editor$View$headerPanelStyle(state.config.width),
			_List_fromArray(
				[
					$jxxcarlson$elm_text_editor$Editor$View$toggleHelpButtonHeader(state),
					$jxxcarlson$elm_text_editor$Editor$View$wordCount(lines),
					$jxxcarlson$elm_text_editor$Editor$View$lineCount(lines),
					$jxxcarlson$elm_text_editor$Editor$View$wrappingOptionDisplay(state),
					A2($jxxcarlson$elm_text_editor$Editor$View$cursorPosition, state, lines)
				]));
	});
var $jxxcarlson$elm_text_editor$Editor$Update$MouseUp = {$: 'MouseUp'};
var $jxxcarlson$elm_text_editor$Editor$Update$SelectGroup = {$: 'SelectGroup'};
var $jxxcarlson$elm_text_editor$Editor$Update$SelectLine = {$: 'SelectLine'};
var $jxxcarlson$elm_text_editor$Editor$Update$Insert = function (a) {
	return {$: 'Insert', a: a};
};
var $elm$json$Json$Decode$fail = _Json_fail;
var $jxxcarlson$elm_text_editor$Editor$Update$Clear = {$: 'Clear'};
var $jxxcarlson$elm_text_editor$Editor$Update$Copy = {$: 'Copy'};
var $jxxcarlson$elm_text_editor$Editor$Update$CopyPasteClipboard = {$: 'CopyPasteClipboard'};
var $jxxcarlson$elm_text_editor$Editor$Update$CursorDown = {$: 'CursorDown'};
var $jxxcarlson$elm_text_editor$Editor$Update$CursorLeft = {$: 'CursorLeft'};
var $jxxcarlson$elm_text_editor$Editor$Update$CursorRight = {$: 'CursorRight'};
var $jxxcarlson$elm_text_editor$Editor$Update$CursorToGroupEnd = {$: 'CursorToGroupEnd'};
var $jxxcarlson$elm_text_editor$Editor$Update$CursorToGroupStart = {$: 'CursorToGroupStart'};
var $jxxcarlson$elm_text_editor$Editor$Update$CursorToLineEnd = {$: 'CursorToLineEnd'};
var $jxxcarlson$elm_text_editor$Editor$Update$CursorToLineStart = {$: 'CursorToLineStart'};
var $jxxcarlson$elm_text_editor$Editor$Update$CursorUp = {$: 'CursorUp'};
var $jxxcarlson$elm_text_editor$Editor$Update$Cut = {$: 'Cut'};
var $jxxcarlson$elm_text_editor$Editor$Update$Deindent = {$: 'Deindent'};
var $jxxcarlson$elm_text_editor$Editor$Update$FirstLine = {$: 'FirstLine'};
var $jxxcarlson$elm_text_editor$Editor$Update$Indent = {$: 'Indent'};
var $jxxcarlson$elm_text_editor$Editor$Update$LastLine = {$: 'LastLine'};
var $jxxcarlson$elm_text_editor$Editor$Update$Paste = {$: 'Paste'};
var $jxxcarlson$elm_text_editor$Editor$Update$Redo = {$: 'Redo'};
var $jxxcarlson$elm_text_editor$Editor$Update$RemoveCharAfter = {$: 'RemoveCharAfter'};
var $jxxcarlson$elm_text_editor$Editor$Update$RemoveCharBefore = {$: 'RemoveCharBefore'};
var $jxxcarlson$elm_text_editor$Editor$Update$RemoveGroupAfter = {$: 'RemoveGroupAfter'};
var $jxxcarlson$elm_text_editor$Editor$Update$RemoveGroupBefore = {$: 'RemoveGroupBefore'};
var $jxxcarlson$elm_text_editor$Editor$Update$RollSearchSelectionBackward = {$: 'RollSearchSelectionBackward'};
var $jxxcarlson$elm_text_editor$Editor$Update$RollSearchSelectionForward = {$: 'RollSearchSelectionForward'};
var $jxxcarlson$elm_text_editor$Editor$Update$ScrollDown = function (a) {
	return {$: 'ScrollDown', a: a};
};
var $jxxcarlson$elm_text_editor$Editor$Update$ScrollUp = function (a) {
	return {$: 'ScrollUp', a: a};
};
var $jxxcarlson$elm_text_editor$Editor$Update$SelectAll = {$: 'SelectAll'};
var $jxxcarlson$elm_text_editor$Editor$Update$SelectDown = {$: 'SelectDown'};
var $jxxcarlson$elm_text_editor$Editor$Update$SelectLeft = {$: 'SelectLeft'};
var $jxxcarlson$elm_text_editor$Editor$Update$SelectRight = {$: 'SelectRight'};
var $jxxcarlson$elm_text_editor$Editor$Update$SelectToGroupEnd = {$: 'SelectToGroupEnd'};
var $jxxcarlson$elm_text_editor$Editor$Update$SelectToGroupStart = {$: 'SelectToGroupStart'};
var $jxxcarlson$elm_text_editor$Editor$Update$SelectToLineEnd = {$: 'SelectToLineEnd'};
var $jxxcarlson$elm_text_editor$Editor$Update$SelectToLineStart = {$: 'SelectToLineStart'};
var $jxxcarlson$elm_text_editor$Editor$Update$SelectUp = {$: 'SelectUp'};
var $jxxcarlson$elm_text_editor$Editor$Update$SendLine = {$: 'SendLine'};
var $jxxcarlson$elm_text_editor$Editor$Update$ToggleInfoPanel = {$: 'ToggleInfoPanel'};
var $jxxcarlson$elm_text_editor$Editor$Update$ToggleReplacePanel = {$: 'ToggleReplacePanel'};
var $jxxcarlson$elm_text_editor$Editor$Update$ToggleSearchPanel = {$: 'ToggleSearchPanel'};
var $jxxcarlson$elm_text_editor$Editor$Update$ToggleWrapping = {$: 'ToggleWrapping'};
var $jxxcarlson$elm_text_editor$Editor$Update$Undo = {$: 'Undo'};
var $jxxcarlson$elm_text_editor$Editor$Update$WrapAll = {$: 'WrapAll'};
var $jxxcarlson$elm_text_editor$Editor$Update$WrapSelection = {$: 'WrapSelection'};
var $jxxcarlson$elm_text_editor$Editor$Update$WriteToSystemClipBoard = {$: 'WriteToSystemClipBoard'};
var $jxxcarlson$elm_text_editor$Editor$Keymap$keymaps = {
	control: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2('Backspace', $jxxcarlson$elm_text_editor$Editor$Update$RemoveGroupBefore),
				_Utils_Tuple2('Delete', $jxxcarlson$elm_text_editor$Editor$Update$RemoveGroupAfter),
				_Utils_Tuple2('d', $jxxcarlson$elm_text_editor$Editor$Update$SelectGroup),
				_Utils_Tuple2('c', $jxxcarlson$elm_text_editor$Editor$Update$Copy),
				_Utils_Tuple2('g', $jxxcarlson$elm_text_editor$Editor$Update$ToggleGoToLinePanel),
				_Utils_Tuple2('.', $jxxcarlson$elm_text_editor$Editor$Update$RollSearchSelectionForward),
				_Utils_Tuple2(',', $jxxcarlson$elm_text_editor$Editor$Update$RollSearchSelectionBackward),
				_Utils_Tuple2('h', $jxxcarlson$elm_text_editor$Editor$Update$ToggleHelp),
				_Utils_Tuple2('x', $jxxcarlson$elm_text_editor$Editor$Update$Cut),
				_Utils_Tuple2('s', $jxxcarlson$elm_text_editor$Editor$Update$ToggleSearchPanel),
				_Utils_Tuple2('r', $jxxcarlson$elm_text_editor$Editor$Update$ToggleReplacePanel),
				_Utils_Tuple2('v', $jxxcarlson$elm_text_editor$Editor$Update$Paste),
				_Utils_Tuple2('z', $jxxcarlson$elm_text_editor$Editor$Update$Undo),
				_Utils_Tuple2('w', $jxxcarlson$elm_text_editor$Editor$Update$WrapSelection),
				_Utils_Tuple2('y', $jxxcarlson$elm_text_editor$Editor$Update$Redo)
			])),
	controlAndOption: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2('ArrowUp', $jxxcarlson$elm_text_editor$Editor$Update$FirstLine),
				_Utils_Tuple2('ArrowDown', $jxxcarlson$elm_text_editor$Editor$Update$LastLine),
				_Utils_Tuple2('ArrowRight', $jxxcarlson$elm_text_editor$Editor$Update$CursorToGroupEnd),
				_Utils_Tuple2('ArrowLeft', $jxxcarlson$elm_text_editor$Editor$Update$CursorToGroupStart),
				_Utils_Tuple2('∑', $jxxcarlson$elm_text_editor$Editor$Update$ToggleWrapping),
				_Utils_Tuple2('ç', $jxxcarlson$elm_text_editor$Editor$Update$Clear)
			])),
	controlAndShift: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2('ArrowRight', $jxxcarlson$elm_text_editor$Editor$Update$SelectToGroupEnd),
				_Utils_Tuple2('ArrowLeft', $jxxcarlson$elm_text_editor$Editor$Update$SelectToGroupStart),
				_Utils_Tuple2('C', $jxxcarlson$elm_text_editor$Editor$Update$WriteToSystemClipBoard),
				_Utils_Tuple2('I', $jxxcarlson$elm_text_editor$Editor$Update$ToggleInfoPanel),
				_Utils_Tuple2('V', $jxxcarlson$elm_text_editor$Editor$Update$CopyPasteClipboard),
				_Utils_Tuple2('W', $jxxcarlson$elm_text_editor$Editor$Update$WrapAll),
				_Utils_Tuple2('S', $jxxcarlson$elm_text_editor$Editor$Update$SendLine),
				_Utils_Tuple2('A', $jxxcarlson$elm_text_editor$Editor$Update$SelectAll)
			])),
	noModifier: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2('ArrowUp', $jxxcarlson$elm_text_editor$Editor$Update$CursorUp),
				_Utils_Tuple2('ArrowDown', $jxxcarlson$elm_text_editor$Editor$Update$CursorDown),
				_Utils_Tuple2('ArrowLeft', $jxxcarlson$elm_text_editor$Editor$Update$CursorLeft),
				_Utils_Tuple2('ArrowRight', $jxxcarlson$elm_text_editor$Editor$Update$CursorRight),
				_Utils_Tuple2('Backspace', $jxxcarlson$elm_text_editor$Editor$Update$RemoveCharBefore),
				_Utils_Tuple2('Delete', $jxxcarlson$elm_text_editor$Editor$Update$RemoveCharAfter),
				_Utils_Tuple2(
				'Enter',
				$jxxcarlson$elm_text_editor$Editor$Update$Insert('\n')),
				_Utils_Tuple2('Home', $jxxcarlson$elm_text_editor$Editor$Update$CursorToLineStart),
				_Utils_Tuple2('End', $jxxcarlson$elm_text_editor$Editor$Update$CursorToLineEnd),
				_Utils_Tuple2('Tab', $jxxcarlson$elm_text_editor$Editor$Update$Indent)
			])),
	option: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'ArrowUp',
				$jxxcarlson$elm_text_editor$Editor$Update$ScrollUp(20)),
				_Utils_Tuple2(
				'ArrowDown',
				$jxxcarlson$elm_text_editor$Editor$Update$ScrollDown(20)),
				_Utils_Tuple2('ArrowLeft', $jxxcarlson$elm_text_editor$Editor$Update$CursorToLineStart),
				_Utils_Tuple2('ArrowRight', $jxxcarlson$elm_text_editor$Editor$Update$CursorToLineEnd)
			])),
	shift: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2('ArrowUp', $jxxcarlson$elm_text_editor$Editor$Update$SelectUp),
				_Utils_Tuple2('ArrowDown', $jxxcarlson$elm_text_editor$Editor$Update$SelectDown),
				_Utils_Tuple2('ArrowLeft', $jxxcarlson$elm_text_editor$Editor$Update$SelectLeft),
				_Utils_Tuple2('ArrowRight', $jxxcarlson$elm_text_editor$Editor$Update$SelectRight),
				_Utils_Tuple2('Tab', $jxxcarlson$elm_text_editor$Editor$Update$Deindent),
				_Utils_Tuple2('Home', $jxxcarlson$elm_text_editor$Editor$Update$SelectToLineStart),
				_Utils_Tuple2('End', $jxxcarlson$elm_text_editor$Editor$Update$SelectToLineEnd)
			]))
};
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $jxxcarlson$elm_text_editor$Editor$Keymap$keyToMsg = function (event) {
	var keyFrom = function (keymap) {
		return A2(
			$elm$core$Maybe$withDefault,
			$elm$json$Json$Decode$fail('This key does nothing'),
			A2(
				$elm$core$Maybe$map,
				$elm$json$Json$Decode$succeed,
				A2($elm$core$Dict$get, event.key, keymap)));
	};
	var keyOrCharFrom = function (keymap) {
		return $elm$json$Json$Decode$oneOf(
			_List_fromArray(
				[
					keyFrom(keymap),
					A2(
					$elm$core$Maybe$withDefault,
					$elm$json$Json$Decode$fail('This key does nothing'),
					A2(
						$elm$core$Maybe$map,
						A2($elm$core$Basics$composeR, $jxxcarlson$elm_text_editor$Editor$Update$Insert, $elm$json$Json$Decode$succeed),
						event._char))
				]));
	};
	var _v0 = event.modifier;
	switch (_v0.$) {
		case 'None':
			return keyOrCharFrom($jxxcarlson$elm_text_editor$Editor$Keymap$keymaps.noModifier);
		case 'Control':
			return keyFrom($jxxcarlson$elm_text_editor$Editor$Keymap$keymaps.control);
		case 'Shift':
			return keyOrCharFrom($jxxcarlson$elm_text_editor$Editor$Keymap$keymaps.shift);
		case 'ControlAndShift':
			return keyFrom($jxxcarlson$elm_text_editor$Editor$Keymap$keymaps.controlAndShift);
		case 'ControlAndOption':
			return keyFrom($jxxcarlson$elm_text_editor$Editor$Keymap$keymaps.controlAndOption);
		default:
			return keyFrom($jxxcarlson$elm_text_editor$Editor$Keymap$keymaps.option);
	}
};
var $jxxcarlson$elm_text_editor$Editor$Keymap$Keydown = F3(
	function (_char, key, modifier) {
		return {_char: _char, key: key, modifier: modifier};
	});
var $jxxcarlson$elm_text_editor$Editor$Keymap$characterDecoder = A2(
	$elm$json$Json$Decode$map,
	function (key) {
		var _v0 = $elm$core$String$uncons(key);
		if ((_v0.$ === 'Just') && (_v0.a.b === '')) {
			var _v1 = _v0.a;
			var _char = _v1.a;
			return $elm$core$Maybe$Just(
				$elm$core$String$fromChar(_char));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	},
	A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string));
var $elm$json$Json$Decode$map3 = _Json_map3;
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $jxxcarlson$elm_text_editor$Editor$Keymap$Control = {$: 'Control'};
var $jxxcarlson$elm_text_editor$Editor$Keymap$ControlAndOption = {$: 'ControlAndOption'};
var $jxxcarlson$elm_text_editor$Editor$Keymap$ControlAndShift = {$: 'ControlAndShift'};
var $jxxcarlson$elm_text_editor$Editor$Keymap$None = {$: 'None'};
var $jxxcarlson$elm_text_editor$Editor$Keymap$Option = {$: 'Option'};
var $jxxcarlson$elm_text_editor$Editor$Keymap$Shift = {$: 'Shift'};
var $jxxcarlson$elm_text_editor$Editor$Keymap$modifier = F3(
	function (ctrl, shift, option) {
		var _v0 = _Utils_Tuple3(ctrl, shift, option);
		_v0$5:
		while (true) {
			if (!_v0.a) {
				if (_v0.b) {
					if (!_v0.c) {
						return $jxxcarlson$elm_text_editor$Editor$Keymap$Shift;
					} else {
						break _v0$5;
					}
				} else {
					if (_v0.c) {
						return $jxxcarlson$elm_text_editor$Editor$Keymap$Option;
					} else {
						break _v0$5;
					}
				}
			} else {
				if (_v0.b) {
					if (!_v0.c) {
						return $jxxcarlson$elm_text_editor$Editor$Keymap$ControlAndShift;
					} else {
						break _v0$5;
					}
				} else {
					if (!_v0.c) {
						return $jxxcarlson$elm_text_editor$Editor$Keymap$Control;
					} else {
						return $jxxcarlson$elm_text_editor$Editor$Keymap$ControlAndOption;
					}
				}
			}
		}
		return $jxxcarlson$elm_text_editor$Editor$Keymap$None;
	});
var $jxxcarlson$elm_text_editor$Editor$Keymap$modifierDecoder = A4(
	$elm$json$Json$Decode$map3,
	$jxxcarlson$elm_text_editor$Editor$Keymap$modifier,
	A2($elm$json$Json$Decode$field, 'ctrlKey', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'shiftKey', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'altKey', $elm$json$Json$Decode$bool));
var $jxxcarlson$elm_text_editor$Editor$Keymap$keydownDecoder = A4(
	$elm$json$Json$Decode$map3,
	$jxxcarlson$elm_text_editor$Editor$Keymap$Keydown,
	$jxxcarlson$elm_text_editor$Editor$Keymap$characterDecoder,
	A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string),
	$jxxcarlson$elm_text_editor$Editor$Keymap$modifierDecoder);
var $jxxcarlson$elm_text_editor$Editor$Keymap$decoder = A2($elm$json$Json$Decode$andThen, $jxxcarlson$elm_text_editor$Editor$Keymap$keyToMsg, $jxxcarlson$elm_text_editor$Editor$Keymap$keydownDecoder);
var $jxxcarlson$elm_text_editor$Editor$Update$MouseDown = function (a) {
	return {$: 'MouseDown', a: a};
};
var $jxxcarlson$elm_text_editor$Editor$Update$MouseOver = function (a) {
	return {$: 'MouseOver', a: a};
};
var $jxxcarlson$elm_text_editor$Editor$View$withTrue = function (a) {
	return _Utils_Tuple2(a, true);
};
var $jxxcarlson$elm_text_editor$Editor$View$captureOnMouseDown = function (msg) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'mousedown',
		A2(
			$elm$json$Json$Decode$map,
			$jxxcarlson$elm_text_editor$Editor$View$withTrue,
			$elm$json$Json$Decode$succeed(msg)));
};
var $jxxcarlson$elm_text_editor$Editor$View$captureOnMouseOver = function (msg) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'mouseover',
		A2(
			$elm$json$Json$Decode$map,
			$jxxcarlson$elm_text_editor$Editor$View$withTrue,
			$elm$json$Json$Decode$succeed(msg)));
};
var $jxxcarlson$elm_text_editor$Editor$View$name = 'elm-editor';
var $jxxcarlson$elm_text_editor$Editor$View$lineNumber = function (number) {
	return A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($jxxcarlson$elm_text_editor$Editor$View$name + '-line-number'),
				$jxxcarlson$elm_text_editor$Editor$View$captureOnMouseDown(
				$jxxcarlson$elm_text_editor$Editor$Update$MouseDown(
					{column: 0, line: number})),
				$jxxcarlson$elm_text_editor$Editor$View$captureOnMouseDown($jxxcarlson$elm_text_editor$Editor$Update$SelectLine),
				$jxxcarlson$elm_text_editor$Editor$View$captureOnMouseOver(
				$jxxcarlson$elm_text_editor$Editor$Update$MouseOver(
					{column: 0, line: number}))
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(
				$elm$core$String$fromInt(number + 0))
			]));
};
var $jxxcarlson$elm_text_editor$Editor$View$gutter = function (maxLines_) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($jxxcarlson$elm_text_editor$Editor$View$name + '-gutter')
			]),
		A2(
			$elm$core$List$map,
			$jxxcarlson$elm_text_editor$Editor$View$lineNumber,
			A2($elm$core$List$range, 1, maxLines_)));
};
var $elm$core$Char$fromCode = _Char_fromCode;
var $jxxcarlson$elm_text_editor$Editor$View$nonBreakingSpace = $elm$core$Char$fromCode(160);
var $jxxcarlson$elm_text_editor$Editor$View$ensureNonBreakingSpace = function (_char) {
	if (' ' === _char.valueOf()) {
		return $jxxcarlson$elm_text_editor$Editor$View$nonBreakingSpace;
	} else {
		return _char;
	}
};
var $jxxcarlson$elm_text_editor$Position$betweenHelp = F3(
	function (start, end, point) {
		betweenHelp:
		while (true) {
			if (_Utils_cmp(start, end) > 0) {
				var $temp$start = end,
					$temp$end = start,
					$temp$point = point;
				start = $temp$start;
				end = $temp$end;
				point = $temp$point;
				continue betweenHelp;
			} else {
				return (!_Utils_eq(start, end)) && ((_Utils_cmp(point, start) > -1) && (_Utils_cmp(point, end) < 0));
			}
		}
	});
var $jxxcarlson$elm_text_editor$Position$between = F3(
	function (pos1, pos2, _v0) {
		var line = _v0.line;
		var column = _v0.column;
		var _v1 = A2($jxxcarlson$elm_text_editor$Position$order, pos1, pos2);
		var start = _v1.a;
		var end = _v1.b;
		return _Utils_eq(start.line, end.line) ? (_Utils_eq(line, start.line) && A3($jxxcarlson$elm_text_editor$Position$betweenHelp, start.column, end.column, column)) : (_Utils_eq(start.line, line) ? (_Utils_cmp(column, start.column) > -1) : (_Utils_eq(end.line, line) ? (_Utils_cmp(column, end.column) < 0) : A3($jxxcarlson$elm_text_editor$Position$betweenHelp, start.line, end.line, line)));
	});
var $jxxcarlson$elm_text_editor$Editor$View$selected = F3(
	function (cursor, maybeSelection, _char) {
		return A2(
			$elm$core$Maybe$withDefault,
			false,
			A2(
				$elm$core$Maybe$map,
				function (selection) {
					return A3($jxxcarlson$elm_text_editor$Position$between, cursor, selection, _char);
				},
				maybeSelection));
	});
var $jxxcarlson$elm_text_editor$Editor$View$character = F4(
	function (cursor, selection, position, _char) {
		return A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2($jxxcarlson$elm_text_editor$Editor$View$name + '-line__character', true),
							_Utils_Tuple2(
							$jxxcarlson$elm_text_editor$Editor$View$name + '-line__character--has-cursor',
							_Utils_eq(cursor, position)),
							_Utils_Tuple2(
							$jxxcarlson$elm_text_editor$Editor$View$name + '-line__character--selected',
							A3($jxxcarlson$elm_text_editor$Editor$View$selected, cursor, selection, position))
						])),
					$jxxcarlson$elm_text_editor$Editor$View$captureOnMouseDown(
					$jxxcarlson$elm_text_editor$Editor$Update$MouseDown(position)),
					$jxxcarlson$elm_text_editor$Editor$View$captureOnMouseOver(
					$jxxcarlson$elm_text_editor$Editor$Update$MouseOver(position))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(
					$elm$core$String$fromChar(
						$jxxcarlson$elm_text_editor$Editor$View$ensureNonBreakingSpace(_char))),
					_Utils_eq(cursor, position) ? A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($jxxcarlson$elm_text_editor$Editor$View$name + '-cursor')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(' ')
						])) : $elm$html$Html$text('')
				]));
	});
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $jxxcarlson$elm_text_editor$Editor$View$line = F4(
	function (cursor, selection, index, content) {
		var length = $elm$core$String$length(content);
		var endPosition = {column: length, line: index};
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class($jxxcarlson$elm_text_editor$Editor$View$name + '-line'),
					A2($elm$html$Html$Attributes$style, 'white-space', 'pre-wrap'),
					$jxxcarlson$elm_text_editor$Editor$View$captureOnMouseDown(
					$jxxcarlson$elm_text_editor$Editor$Update$MouseDown(endPosition)),
					$jxxcarlson$elm_text_editor$Editor$View$captureOnMouseOver(
					$jxxcarlson$elm_text_editor$Editor$Update$MouseOver(endPosition))
				]),
			$elm$core$List$concat(
				_List_fromArray(
					[
						_List_fromArray(
						[
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class($jxxcarlson$elm_text_editor$Editor$View$name + '-line__gutter-padding'),
									$jxxcarlson$elm_text_editor$Editor$View$captureOnMouseDown(
									$jxxcarlson$elm_text_editor$Editor$Update$MouseDown(
										{column: 0, line: index + 0})),
									$jxxcarlson$elm_text_editor$Editor$View$captureOnMouseOver(
									$jxxcarlson$elm_text_editor$Editor$Update$MouseOver(
										{column: 0, line: index + 0}))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$elm$core$String$fromChar($jxxcarlson$elm_text_editor$Editor$View$nonBreakingSpace))
								]))
						]),
						A2(
						$elm$core$List$indexedMap,
						A2(
							$elm$core$Basics$composeR,
							$jxxcarlson$elm_text_editor$Position$Position(index),
							A2($jxxcarlson$elm_text_editor$Editor$View$character, cursor, selection)),
						$elm$core$String$toList(content)),
						(_Utils_eq(index, cursor.line) && (_Utils_cmp(cursor.column, length) > -1)) ? _List_fromArray(
						[
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class($jxxcarlson$elm_text_editor$Editor$View$name + '-line__character'),
									$elm$html$Html$Attributes$class($jxxcarlson$elm_text_editor$Editor$View$name + '-line__character--has-cursor')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(' '),
									A2(
									$elm$html$Html$span,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class($jxxcarlson$elm_text_editor$Editor$View$name + '-cursor')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(' ')
										]))
								]))
						]) : _List_Nil
					])));
	});
var $jxxcarlson$elm_text_editor$Editor$View$linesContainer = $elm$html$Html$div(
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class($jxxcarlson$elm_text_editor$Editor$View$name + '-lines')
		]));
var $elm$html$Html$Events$onDoubleClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'dblclick',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Events$onMouseUp = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseup',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $jxxcarlson$elm_text_editor$Editor$View$onTripleClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		A2(
			$elm$json$Json$Decode$andThen,
			function (detail) {
				return (detail >= 3) ? $elm$json$Json$Decode$succeed(msg) : $elm$json$Json$Decode$fail('');
			},
			A2($elm$json$Json$Decode$field, 'detail', $elm$json$Json$Decode$int)));
};
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 'MayPreventDefault', a: a};
};
var $elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $elm$html$Html$Attributes$tabindex = function (n) {
	return A2(
		_VirtualDom_attribute,
		'tabIndex',
		$elm$core$String$fromInt(n));
};
var $jxxcarlson$elm_text_editor$Editor$View$innerView = F3(
	function (attr, lines, state) {
		return A2(
			$elm$html$Html$div,
			_Utils_ap(
				attr,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('flex-column')
					])),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class($jxxcarlson$elm_text_editor$Editor$View$name + '-container'),
							A2(
							$elm$html$Html$Events$preventDefaultOn,
							'keydown',
							A2($elm$json$Json$Decode$map, $jxxcarlson$elm_text_editor$Editor$View$withTrue, $jxxcarlson$elm_text_editor$Editor$Keymap$decoder)),
							$elm$html$Html$Events$onMouseUp($jxxcarlson$elm_text_editor$Editor$Update$MouseUp),
							$elm$html$Html$Events$onDoubleClick($jxxcarlson$elm_text_editor$Editor$Update$SelectGroup),
							$jxxcarlson$elm_text_editor$Editor$View$onTripleClick($jxxcarlson$elm_text_editor$Editor$Update$SelectLine),
							$elm$html$Html$Attributes$tabindex(0)
						]),
					_List_fromArray(
						[
							$jxxcarlson$elm_text_editor$Editor$View$gutter(
							A2(
								$elm$core$Basics$max,
								100,
								$elm$core$List$length(lines) + 20)),
							$jxxcarlson$elm_text_editor$Editor$View$linesContainer(
							A2(
								$elm$core$List$indexedMap,
								A2($jxxcarlson$elm_text_editor$Editor$View$line, state.cursor, state.selection),
								lines))
						]))
				]));
	});
var $elm$virtual_dom$VirtualDom$lazy3 = _VirtualDom_lazy3;
var $elm$html$Html$Lazy$lazy3 = $elm$virtual_dom$VirtualDom$lazy3;
var $jxxcarlson$elm_text_editor$Editor$Update$AcceptReplacementText = function (a) {
	return {$: 'AcceptReplacementText', a: a};
};
var $jxxcarlson$elm_text_editor$Editor$View$acceptReplaceText = A5(
	$jxxcarlson$elm_text_editor$Editor$Widget$textField,
	130,
	$jxxcarlson$elm_text_editor$Editor$Update$AcceptReplacementText,
	'',
	_List_fromArray(
		[
			A2($elm$html$Html$Attributes$style, 'float', 'left')
		]),
	_List_fromArray(
		[
			$jxxcarlson$elm_text_editor$Editor$View$setHtmlId('replacement-box')
		]));
var $jxxcarlson$elm_text_editor$Editor$Update$AcceptSearchText = function (a) {
	return {$: 'AcceptSearchText', a: a};
};
var $jxxcarlson$elm_text_editor$Editor$View$acceptSearchText = A5(
	$jxxcarlson$elm_text_editor$Editor$Widget$textField,
	130,
	$jxxcarlson$elm_text_editor$Editor$Update$AcceptSearchText,
	'',
	_List_fromArray(
		[
			A2($elm$html$Html$Attributes$style, 'float', 'left')
		]),
	_List_fromArray(
		[
			$jxxcarlson$elm_text_editor$Editor$View$setHtmlId('editor-search-box')
		]));
var $jxxcarlson$elm_text_editor$Editor$View$dismissSearchPanel = A4(
	$jxxcarlson$elm_text_editor$Editor$Widget$lightRowButton,
	25,
	$jxxcarlson$elm_text_editor$Editor$Update$ToggleSearchPanel,
	'X',
	_List_fromArray(
		[
			A2($elm$html$Html$Attributes$style, 'float', 'left'),
			A2($elm$html$Html$Attributes$style, 'float', 'left')
		]));
var $jxxcarlson$elm_text_editor$Editor$View$numberOfHitsDisplay = function (state) {
	var n = $elm$core$List$length(
		$lovasoa$elm_rolling_list$RollingList$toList(state.searchResults));
	var txt = $elm$core$String$fromInt(state.searchHitIndex + 1) + ('/' + $elm$core$String$fromInt(n));
	return A4(
		$jxxcarlson$elm_text_editor$Editor$Widget$rowButton,
		40,
		$jxxcarlson$elm_text_editor$Editor$Update$NoOp,
		txt,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'float', 'left')
			]));
};
var $jxxcarlson$elm_text_editor$Editor$Update$OpenReplaceField = {$: 'OpenReplaceField'};
var $jxxcarlson$elm_text_editor$Editor$View$openReplaceField = A4($jxxcarlson$elm_text_editor$Editor$Widget$rowButton, 25, $jxxcarlson$elm_text_editor$Editor$Update$OpenReplaceField, 'R', _List_Nil);
var $jxxcarlson$elm_text_editor$Editor$Update$ReplaceCurrentSelection = {$: 'ReplaceCurrentSelection'};
var $jxxcarlson$elm_text_editor$Editor$View$replaceTextButton = A4(
	$jxxcarlson$elm_text_editor$Editor$Widget$rowButton,
	70,
	$jxxcarlson$elm_text_editor$Editor$Update$ReplaceCurrentSelection,
	'Replace',
	_List_fromArray(
		[
			A2($elm$html$Html$Attributes$style, 'float', 'left')
		]));
var $jxxcarlson$elm_text_editor$Editor$View$searchBackwardButton = A4(
	$jxxcarlson$elm_text_editor$Editor$Widget$rowButton,
	30,
	$jxxcarlson$elm_text_editor$Editor$Update$RollSearchSelectionBackward,
	'<',
	_List_fromArray(
		[
			A2($elm$html$Html$Attributes$style, 'float', 'left')
		]));
var $jxxcarlson$elm_text_editor$Editor$View$searchForwardButton = A4(
	$jxxcarlson$elm_text_editor$Editor$Widget$rowButton,
	30,
	$jxxcarlson$elm_text_editor$Editor$Update$RollSearchSelectionForward,
	'>',
	_List_fromArray(
		[
			A2($elm$html$Html$Attributes$style, 'float', 'left')
		]));
var $jxxcarlson$elm_text_editor$Editor$View$searchTextButton = A4(
	$jxxcarlson$elm_text_editor$Editor$Widget$rowButton,
	60,
	$jxxcarlson$elm_text_editor$Editor$Update$NoOp,
	'Search',
	_List_fromArray(
		[
			A2($elm$html$Html$Attributes$style, 'float', 'left')
		]));
var $jxxcarlson$elm_text_editor$Editor$View$showIf = F2(
	function (flag, h) {
		return flag ? h : A2($elm$html$Html$div, _List_Nil, _List_Nil);
	});
var $jxxcarlson$elm_text_editor$Editor$View$searchPanel_ = function (state) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'width', '595px'),
				A2($elm$html$Html$Attributes$style, 'padding-top', '5px'),
				A2($elm$html$Html$Attributes$style, 'height', '30px'),
				A2($elm$html$Html$Attributes$style, 'padding-left', '8px'),
				A2($elm$html$Html$Attributes$style, 'background-color', $jxxcarlson$elm_text_editor$Editor$Style$lightGray),
				A2($elm$html$Html$Attributes$style, 'opacity', '0.9'),
				A2($elm$html$Html$Attributes$style, 'font-size', '14px'),
				A2($elm$html$Html$Attributes$style, 'float', 'left')
			]),
		_List_fromArray(
			[
				$jxxcarlson$elm_text_editor$Editor$View$searchTextButton,
				$jxxcarlson$elm_text_editor$Editor$View$acceptSearchText,
				$jxxcarlson$elm_text_editor$Editor$View$numberOfHitsDisplay(state),
				A2($jxxcarlson$elm_text_editor$Editor$View$showIf, !state.canReplace, $jxxcarlson$elm_text_editor$Editor$View$openReplaceField),
				A2($jxxcarlson$elm_text_editor$Editor$View$showIf, state.canReplace, $jxxcarlson$elm_text_editor$Editor$View$replaceTextButton),
				A2($jxxcarlson$elm_text_editor$Editor$View$showIf, state.canReplace, $jxxcarlson$elm_text_editor$Editor$View$acceptReplaceText),
				$jxxcarlson$elm_text_editor$Editor$View$searchForwardButton,
				$jxxcarlson$elm_text_editor$Editor$View$searchBackwardButton,
				$jxxcarlson$elm_text_editor$Editor$View$dismissSearchPanel
			]));
};
var $jxxcarlson$elm_text_editor$Editor$View$searchPanel = function (state) {
	return state.showSearchPanel ? $jxxcarlson$elm_text_editor$Editor$View$searchPanel_(state) : A2($elm$html$Html$div, _List_Nil, _List_Nil);
};
var $jxxcarlson$elm_text_editor$Editor$View$view = F3(
	function (attr, lines, state) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$jxxcarlson$elm_text_editor$Editor$View$showIf,
							state.showGoToLinePanel,
							$jxxcarlson$elm_text_editor$Editor$View$goToLinePanel(state)),
							A2(
							$jxxcarlson$elm_text_editor$Editor$View$showIf,
							state.showSearchPanel,
							$jxxcarlson$elm_text_editor$Editor$View$searchPanel(state)),
							A2(
							$jxxcarlson$elm_text_editor$Editor$View$showIf,
							!(state.showSearchPanel || state.showGoToLinePanel),
							A2($jxxcarlson$elm_text_editor$Editor$View$headerPanel, state, lines))
						])),
					A4($elm$html$Html$Lazy$lazy3, $jxxcarlson$elm_text_editor$Editor$View$innerView, attr, lines, state)
				]));
	});
var $jxxcarlson$elm_text_editor$Editor$view = F2(
	function (attr, _v0) {
		var data = _v0.a;
		return A3(
			$jxxcarlson$elm_text_editor$Editor$View$view,
			attr,
			$jxxcarlson$elm_text_editor$Buffer$lines(data.buffer),
			data.state);
	});
var $jxxcarlson$elm_text_editor$Editor$embedded = F2(
	function (editorConfig, editor) {
		var styleConfig = {editorHeight: editorConfig.height, editorWidth: editorConfig.width, fontProportion: editorConfig.fontProportion, lineHeight: editorConfig.lineHeight};
		var height_ = editorConfig.height - 37;
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					$jxxcarlson$elm_text_editor$Editor$Styles$editorStyles(styleConfig),
					A2(
					$elm$html$Html$map,
					editorConfig.editorMsg,
					A2(
						$jxxcarlson$elm_text_editor$Editor$view,
						$jxxcarlson$elm_text_editor$Editor$innerStyle(height_),
						editor))
				]));
	});
var $author$project$Main$px = function (p) {
	return $elm$core$String$fromFloat(p) + 'px';
};
var $author$project$Main$transformFlagsForEditor = function (flags) {
	return _Utils_update(
		flags,
		{height: $author$project$Main$proportion.height * flags.height, width: $author$project$Main$proportion.width * flags.width});
};
var $author$project$Main$embeddedEditor = function (model) {
	var flags = $author$project$Main$transformFlagsForEditor(
		$author$project$Main$getFlags(model));
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$Attributes$style,
				'width',
				$author$project$Main$px(flags.width)),
				A2($elm$html$Html$Attributes$style, 'overflow-x', 'scroll'),
				A2(
				$elm$html$Html$Attributes$style,
				'height',
				$author$project$Main$px(flags.height))
			]),
		_List_fromArray(
			[
				A2(
				$jxxcarlson$elm_text_editor$Editor$embedded,
				$author$project$Main$config(
					$author$project$Main$getFlags(model)),
				model.editor)
			]));
};
var $author$project$Main$Clear = {$: 'Clear'};
var $author$project$Style$buttonStyle = F2(
	function (color, width) {
		var realWidth = function (x) {
			return x + 'px';
		}(
			$elm$core$String$fromInt(width + 0));
		return _List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'backgroundColor', color),
				A2($elm$html$Html$Attributes$style, 'color', 'white'),
				A2($elm$html$Html$Attributes$style, 'width', realWidth),
				A2($elm$html$Html$Attributes$style, 'height', '25px'),
				A2($elm$html$Html$Attributes$style, 'margin-top', '20px'),
				A2($elm$html$Html$Attributes$style, 'margin-right', '12px'),
				A2($elm$html$Html$Attributes$style, 'font-size', '9pt'),
				A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
				A2($elm$html$Html$Attributes$style, 'border', 'none')
			]);
	});
var $author$project$Style$colorBlue = 'rgb(100,100,200)';
var $author$project$Main$clearButton = function (width) {
	return A2(
		$elm$html$Html$button,
		_Utils_ap(
			_List_fromArray(
				[
					$elm$html$Html$Events$onClick($author$project$Main$Clear)
				]),
			A2($author$project$Style$buttonStyle, $author$project$Style$colorBlue, width)),
		_List_fromArray(
			[
				$elm$html$Html$text('Clear')
			]));
};
var $author$project$Main$LoadExample1 = {$: 'LoadExample1'};
var $author$project$Main$example1Button = function (width) {
	return A2(
		$elm$html$Html$button,
		_Utils_ap(
			_List_fromArray(
				[
					$elm$html$Html$Events$onClick($author$project$Main$LoadExample1)
				]),
			A2($author$project$Style$buttonStyle, $author$project$Style$colorBlue, width)),
		_List_fromArray(
			[
				$elm$html$Html$text('Example 1')
			]));
};
var $author$project$Main$LoadExample2 = {$: 'LoadExample2'};
var $author$project$Main$example2Button = function (width) {
	return A2(
		$elm$html$Html$button,
		_Utils_ap(
			_List_fromArray(
				[
					$elm$html$Html$Events$onClick($author$project$Main$LoadExample2)
				]),
			A2($author$project$Style$buttonStyle, $author$project$Style$colorBlue, width)),
		_List_fromArray(
			[
				$elm$html$Html$text('Example 2')
			]));
};
var $author$project$Main$SelectExtended = {$: 'SelectExtended'};
var $author$project$Style$buttonStyleSelected = F4(
	function (bit, color, color2, width) {
		var realWidth = function (x) {
			return x + 'px';
		}(
			$elm$core$String$fromInt(width + 0));
		return _List_fromArray(
			[
				function () {
				if (!bit) {
					return A2($elm$html$Html$Attributes$style, 'backgroundColor', color);
				} else {
					return A2($elm$html$Html$Attributes$style, 'backgroundColor', color2);
				}
			}(),
				A2($elm$html$Html$Attributes$style, 'color', 'white'),
				A2($elm$html$Html$Attributes$style, 'width', realWidth),
				A2($elm$html$Html$Attributes$style, 'height', '25px'),
				A2($elm$html$Html$Attributes$style, 'margin-top', '20px'),
				A2($elm$html$Html$Attributes$style, 'margin-right', '12px'),
				A2($elm$html$Html$Attributes$style, 'font-size', '9pt'),
				A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
				A2($elm$html$Html$Attributes$style, 'border', 'none')
			]);
	});
var $author$project$Style$colorDarkRed = 'rgb(180,0,0)';
var $author$project$Main$extendedMarkdownButton = F2(
	function (model, width) {
		return A2(
			$elm$html$Html$button,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Events$onClick($author$project$Main$SelectExtended)
					]),
				A4(
					$author$project$Style$buttonStyleSelected,
					_Utils_eq(model.option, $author$project$Markdown$Option$Extended),
					$author$project$Style$colorBlue,
					$author$project$Style$colorDarkRed,
					width)),
			_List_fromArray(
				[
					$elm$html$Html$text('Extended')
				]));
	});
var $author$project$Main$SelectExtendedMath = {$: 'SelectExtendedMath'};
var $author$project$Main$extendedMathMarkdownButton = F2(
	function (model, width) {
		return A2(
			$elm$html$Html$button,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Events$onClick($author$project$Main$SelectExtendedMath)
					]),
				A4(
					$author$project$Style$buttonStyleSelected,
					_Utils_eq(model.option, $author$project$Markdown$Option$ExtendedMath),
					$author$project$Style$colorBlue,
					$author$project$Style$colorDarkRed,
					width)),
			_List_fromArray(
				[
					$elm$html$Html$text('Extended-Math')
				]));
	});
var $author$project$Main$SelectStandard = {$: 'SelectStandard'};
var $author$project$Main$standardMarkdownButton = F2(
	function (model, width) {
		return A2(
			$elm$html$Html$button,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Events$onClick($author$project$Main$SelectStandard)
					]),
				A4(
					$author$project$Style$buttonStyleSelected,
					_Utils_eq(model.option, $author$project$Markdown$Option$Standard),
					$author$project$Style$colorBlue,
					$author$project$Style$colorDarkRed,
					width)),
			_List_fromArray(
				[
					$elm$html$Html$text('Standard')
				]));
	});
var $author$project$Main$footer1 = function (model) {
	return A2(
		$elm$html$Html$p,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'margin-left', '20px'),
				A2($elm$html$Html$Attributes$style, 'margin-top', '0px')
			]),
		_List_fromArray(
			[
				$author$project$Main$clearButton(60),
				$author$project$Main$example1Button(80),
				$author$project$Main$example2Button(80),
				A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'margin-left', '30px'),
						A2($elm$html$Html$Attributes$style, 'margin-right', '10px')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Markdown flavor: ')
					])),
				A2($author$project$Main$standardMarkdownButton, model, 100),
				A2($author$project$Main$extendedMarkdownButton, model, 100),
				A2($author$project$Main$extendedMathMarkdownButton, model, 140)
			]));
};
var $author$project$Main$messageLine = function (model) {
	return A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'margin-left', '50px')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(model.message)
			]));
};
var $author$project$Main$footer2 = function (model) {
	return A2(
		$elm$html$Html$p,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$a,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$href('https://minilatex.io'),
						A2($elm$html$Html$Attributes$style, 'clear', 'left'),
						A2($elm$html$Html$Attributes$style, 'margin-left', '20px'),
						A2($elm$html$Html$Attributes$style, 'margin-top', '0px')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('minilatex.io')
					])),
				A2(
				$elm$html$Html$a,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$href('https://package.elm-lang.org/packages/jxxcarlson/elm-markdown/latest/'),
						A2($elm$html$Html$Attributes$style, 'clear', 'left'),
						A2($elm$html$Html$Attributes$style, 'margin-left', '20px'),
						A2($elm$html$Html$Attributes$style, 'margin-top', '0px')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('jxxcarlson/elm-markdown')
					])),
				A2(
				$elm$html$Html$a,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$href('https://package.elm-lang.org/packages/jxxcarlson/elm-text-editor/latest/'),
						A2($elm$html$Html$Attributes$style, 'clear', 'left'),
						A2($elm$html$Html$Attributes$style, 'margin-left', '20px'),
						A2($elm$html$Html$Attributes$style, 'margin-top', '0px')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('jxxcarlson/elm-text-editor')
					])),
				$author$project$Main$messageLine(model)
			]));
};
var $author$project$Main$MarkdownMsg = function (a) {
	return {$: 'MarkdownMsg', a: a};
};
var $author$project$Markdown$Render$title = function (markdownOutput) {
	if (markdownOutput.$ === 'Simple') {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	} else {
		var docParts = markdownOutput.a;
		return docParts.title;
	}
};
var $author$project$Main$titleView = function (model) {
	return A2(
		$elm$html$Html$span,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$map,
				$author$project$Main$MarkdownMsg,
				$author$project$Markdown$Render$title(model.renderedText))
			]));
};
var $author$project$Main$heading = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('flex-row'),
				A2($elm$html$Html$Attributes$style, 'height', '50px'),
				A2($elm$html$Html$Attributes$style, 'margin-bottom', '8px'),
				A2($elm$html$Html$Attributes$style, 'margin-top', '-16px')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'width', '400px'),
						A2($elm$html$Html$Attributes$style, 'margin-left', '48px'),
						A2($elm$html$Html$Attributes$style, 'font-size', '14px')
					]),
				_List_Nil),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'width', '400px'),
						A2($elm$html$Html$Attributes$style, 'margin-left', '-24px')
					]),
				_List_fromArray(
					[
						$author$project$Main$titleView(model)
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'width', '250px'),
						A2($elm$html$Html$Attributes$style, 'margin-left', '48px')
					]),
				_List_Nil)
			]));
};
var $author$project$Markdown$Render$document = function (markdownOutput) {
	if (markdownOutput.$ === 'Simple') {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	} else {
		var docParts = markdownOutput.a;
		return docParts.document;
	}
};
var $author$project$Main$renderedSource = function (model) {
	var flags = $author$project$Main$transformFlagsForEditor(
		$author$project$Main$getFlags(model));
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$id('_rendered_text_'),
				A2(
				$elm$html$Html$Attributes$style,
				'width',
				$author$project$Main$px(flags.width)),
				A2(
				$elm$html$Html$Attributes$style,
				'height',
				$author$project$Main$px(flags.height)),
				A2($elm$html$Html$Attributes$style, 'margin-left', '24px'),
				A2($elm$html$Html$Attributes$style, 'padding-left', '12px'),
				A2($elm$html$Html$Attributes$style, 'padding-right', '12px'),
				A2($elm$html$Html$Attributes$style, 'overflow-x', 'hidden '),
				A2($elm$html$Html$Attributes$style, 'overflow-y', 'scroll'),
				A2($elm$html$Html$Attributes$style, 'background-color', '#fff'),
				A2($elm$html$Html$Attributes$style, 'border-style', 'solid'),
				A2($elm$html$Html$Attributes$style, 'border-width', 'thin'),
				A2($elm$html$Html$Attributes$style, 'border-color', '#999')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$map,
				$author$project$Main$MarkdownMsg,
				$author$project$Markdown$Render$document(model.renderedText))
			]));
};
var $author$project$Markdown$Render$toc = function (markdownOutput) {
	if (markdownOutput.$ === 'Simple') {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	} else {
		var docParts = markdownOutput.a;
		return docParts.toc;
	}
};
var $author$project$Main$tocView = function (model) {
	var h = $author$project$Main$transformFlagsForEditor(
		$author$project$Main$getFlags(model)).height - 23;
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'width', '250px'),
				A2(
				$elm$html$Html$Attributes$style,
				'height',
				$author$project$Main$px(h)),
				A2($elm$html$Html$Attributes$style, 'margin-left', '24px'),
				A2($elm$html$Html$Attributes$style, 'padding', '12px'),
				A2($elm$html$Html$Attributes$style, 'overflow', 'scroll '),
				A2($elm$html$Html$Attributes$style, 'background-color', '#eee')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$map,
				$author$project$Main$MarkdownMsg,
				$author$project$Markdown$Render$toc(model.renderedText))
			]));
};
var $author$project$Main$view = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('flex-column'),
				A2(
				$elm$html$Html$Attributes$style,
				'width',
				$author$project$Main$px(model.width)),
				A2($elm$html$Html$Attributes$style, 'margin-top', '18px')
			]),
		_List_fromArray(
			[
				$author$project$Main$heading(model),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('flex-row')
					]),
				_List_fromArray(
					[
						$author$project$Main$embeddedEditor(model),
						$author$project$Main$renderedSource(model),
						$author$project$Main$tocView(model)
					])),
				$author$project$Main$footer1(model),
				$author$project$Main$footer2(model)
			]));
};
var $author$project$Main$main = $elm$browser$Browser$element(
	{init: $author$project$Main$init, subscriptions: $author$project$Main$subscriptions, update: $author$project$Main$update, view: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (width) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (height) {
					return $elm$json$Json$Decode$succeed(
						{height: height, width: width});
				},
				A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$float));
		},
		A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$float)))(0)}});}(this));
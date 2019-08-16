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




var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


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
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



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
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
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

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (!x.$)
	//*/
	/**_UNUSED/
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
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


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

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
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

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
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
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
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
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}



// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
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
	if (region.bp.aJ === region.bJ.aJ)
	{
		return 'on line ' + region.bp.aJ;
	}
	return 'on lines ' + region.bp.aJ + ' through ' + region.bJ.aJ;
}



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
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800)
			+
			String.fromCharCode(code % 0x400 + 0xDC00)
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



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
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
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




/**_UNUSED/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
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

var _Json_decodeInt = { $: 2 };
var _Json_decodeBool = { $: 3 };
var _Json_decodeFloat = { $: 4 };
var _Json_decodeValue = { $: 5 };
var _Json_decodeString = { $: 6 };

function _Json_decodeList(decoder) { return { $: 7, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 8, b: decoder }; }

function _Json_decodeNull(value) { return { $: 9, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 10,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 11,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 12,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 13,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 14,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 15,
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
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
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
		case 3:
			return (typeof value === 'boolean')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a BOOL', value);

		case 2:
			if (typeof value !== 'number') {
				return _Json_expecting('an INT', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return elm$core$Result$Ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return elm$core$Result$Ok(value);
			}

			return _Json_expecting('an INT', value);

		case 4:
			return (typeof value === 'number')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a FLOAT', value);

		case 6:
			return (typeof value === 'string')
				? elm$core$Result$Ok(value)
				: (value instanceof String)
					? elm$core$Result$Ok(value + '')
					: _Json_expecting('a STRING', value);

		case 9:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 5:
			return elm$core$Result$Ok(_Json_wrap(value));

		case 7:
			if (!Array.isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 8:
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 10:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 11:
			var index = decoder.e;
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 12:
			if (typeof value !== 'object' || value === null || Array.isArray(value))
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
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 13:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 14:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 15:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
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

		case 3:
		case 2:
		case 4:
		case 6:
		case 5:
			return true;

		case 9:
			return x.c === y.c;

		case 7:
		case 8:
		case 12:
			return _Json_equality(x.b, y.b);

		case 10:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 11:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 13:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 14:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 15:
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

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

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
		impl.c2,
		impl.dy,
		impl.du,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

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
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
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
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

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
		r: converter,
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
	var converter = _Platform_effectManagers[name].r;

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

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

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


function _Platform_export(exports)
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


function _Platform_export_UNUSED(exports)
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

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
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

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
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
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
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
		G: func(record.G),
		bq: record.bq,
		bo: record.bo
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
		(key !== 'value' || key !== 'checked' || domNode[key] !== value) && (domNode[key] = value);
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
		value
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

		value
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
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
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

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.G;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.bq;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.bo) && event.preventDefault(),
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
			var oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			var newMatch = xKey === yNextKey;
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
		impl.c2,
		impl.dy,
		impl.du,
		function(sendToApp, initialModel) {
			var view = impl.dA;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
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
		impl.c2,
		impl.dy,
		impl.du,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.aO && impl.aO(sendToApp)
			var view = impl.dA;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.cH);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.dw) && (_VirtualDom_doc.title = title = doc.dw);
			});
		}
	);
});



// ANIMATION


var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };


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
	var onUrlChange = impl.c9;
	var onUrlRequest = impl.da;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		aO: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.download)
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.ch === next.ch
							&& curr.bQ === next.bQ
							&& curr.cd.a === next.cd.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		c2: function(flags)
		{
			return A3(impl.c2, flags, _Browser_getUrl(), key);
		},
		dA: impl.dA,
		dy: impl.dy,
		du: impl.du
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
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
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { c_: 'hidden', aE: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { c_: 'mozHidden', aE: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { c_: 'msHidden', aE: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { c_: 'webkitHidden', aE: 'webkitvisibilitychange' }
		: { c_: 'hidden', aE: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			cancelAnimationFrame(id);
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
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
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
		co: _Browser_getScene(),
		cA: {
			ba: _Browser_window.pageXOffset,
			bb: _Browser_window.pageYOffset,
			ay: _Browser_doc.documentElement.clientWidth,
			ah: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		ay: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		ah: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
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
			co: {
				ay: node.scrollWidth,
				ah: node.scrollHeight
			},
			cA: {
				ba: node.scrollLeft,
				bb: node.scrollTop,
				ay: node.clientWidth,
				ah: node.clientHeight
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
			co: _Browser_getScene(),
			cA: {
				ba: x,
				bb: y,
				ay: _Browser_doc.documentElement.clientWidth,
				ah: _Browser_doc.documentElement.clientHeight
			},
			cV: {
				ba: x + rect.left,
				bb: y + rect.top,
				ay: rect.width,
				ah: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
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
var author$project$Main$LinkClicked = function (a) {
	return {$: 0, a: a};
};
var author$project$Main$UrlChanged = function (a) {
	return {$: 1, a: a};
};
var author$project$Main$Home = {$: 1};
var elm$core$Basics$False = 1;
var elm$core$Basics$True = 0;
var elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var elm$core$Basics$EQ = 1;
var elm$core$Basics$GT = 2;
var elm$core$Basics$LT = 0;
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
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
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$List$cons = _List_cons;
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0;
	return elm$core$Dict$keys(dict);
};
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$List$foldl = F3(
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
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.k) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.m),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.m);
		} else {
			var treeLen = builder.k * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.n) : builder.n;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.k);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.m) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.m);
		}
	});
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{n: nodeList, k: (len / elm$core$Array$branchFactor) | 0, m: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
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
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var elm$core$Maybe$Nothing = {$: 1};
var elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$append = _Utils_append;
var elm$core$Basics$or = _Basics_or;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 1) {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
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
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
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
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var author$project$Main$init = F3(
	function (flags, url, navKey) {
		return _Utils_Tuple2(
			{bk: navKey, q: author$project$Main$Home, bs: url},
			elm$core$Platform$Cmd$none);
	});
var elm$core$Platform$Sub$batch = _Platform_batch;
var elm$core$Platform$Sub$none = elm$core$Platform$Sub$batch(_List_Nil);
var author$project$Main$subscriptions = function (_n0) {
	return elm$core$Platform$Sub$none;
};
var elm$core$Basics$not = _Basics_not;
var author$project$Checkbox$update = F2(
	function (msg, model) {
		return _Utils_update(
			model,
			{_: !model._});
	});
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return elm$core$Maybe$Just(value);
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
var elm$core$Dict$Black = 1;
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var elm$core$Dict$Red = 0;
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1) {
				case 0:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === -1) && (!_n0.a)) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var lLeft = _n1.d;
			var lRight = _n1.e;
			var _n2 = dict.e;
			var rClr = _n2.a;
			var rK = _n2.b;
			var rV = _n2.c;
			var rLeft = _n2.d;
			var _n3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _n2.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				0,
				rlK,
				rlV,
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5(elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n4 = dict.d;
			var lClr = _n4.a;
			var lK = _n4.b;
			var lV = _n4.c;
			var lLeft = _n4.d;
			var lRight = _n4.e;
			var _n5 = dict.e;
			var rClr = _n5.a;
			var rK = _n5.b;
			var rV = _n5.c;
			var rLeft = _n5.d;
			var rRight = _n5.e;
			if (clr === 1) {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var _n2 = _n1.d;
			var _n3 = _n2.a;
			var llK = _n2.b;
			var llV = _n2.c;
			var llLeft = _n2.d;
			var llRight = _n2.e;
			var lRight = _n1.e;
			var _n4 = dict.e;
			var rClr = _n4.a;
			var rK = _n4.b;
			var rV = _n4.c;
			var rLeft = _n4.d;
			var rRight = _n4.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				0,
				lK,
				lV,
				A5(elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n5 = dict.d;
			var lClr = _n5.a;
			var lK = _n5.b;
			var lV = _n5.c;
			var lLeft = _n5.d;
			var lRight = _n5.e;
			var _n6 = dict.e;
			var rClr = _n6.a;
			var rK = _n6.b;
			var rV = _n6.c;
			var rLeft = _n6.d;
			var rRight = _n6.e;
			if (clr === 1) {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
			var _n1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_n2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
							var _n3 = right.a;
							var _n4 = right.d;
							var _n5 = _n4.a;
							return elm$core$Dict$moveRedRight(dict);
						} else {
							break _n2$2;
						}
					} else {
						var _n6 = right.a;
						var _n7 = right.d;
						return elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _n2$2;
				}
			}
			return dict;
		}
	});
var elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
				var _n3 = lLeft.a;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					elm$core$Dict$removeMin(left),
					right);
			} else {
				var _n4 = elm$core$Dict$moveRedLeft(dict);
				if (_n4.$ === -1) {
					var nColor = _n4.a;
					var nKey = _n4.b;
					var nValue = _n4.c;
					var nLeft = _n4.d;
					var nRight = _n4.e;
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === -2) {
			return elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _n4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
						var _n6 = lLeft.a;
						return A5(
							elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2(elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _n7 = elm$core$Dict$moveRedLeft(dict);
						if (_n7.$ === -1) {
							var nColor = _n7.a;
							var nKey = _n7.b;
							var nValue = _n7.c;
							var nLeft = _n7.d;
							var nRight = _n7.e;
							return A5(
								elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2(elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2(elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7(elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _n1 = elm$core$Dict$getMin(right);
				if (_n1.$ === -1) {
					var minKey = _n1.b;
					var minValue = _n1.c;
					return A5(
						elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						elm$core$Dict$removeMin(right));
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2(elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var elm$core$Dict$remove = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$removeHelp, key, dict);
		if ((_n0.$ === -1) && (!_n0.a)) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _n0 = alter(
			A2(elm$core$Dict$get, targetKey, dictionary));
		if (!_n0.$) {
			var value = _n0.a;
			return A3(elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2(elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var author$project$Dropdown$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				return _Utils_update(
					model,
					{J: !model.J});
			case 1:
				return _Utils_update(
					model,
					{J: false});
			case 2:
				return _Utils_update(
					model,
					{J: false});
			case 3:
				var value = msg.a;
				var updated = A3(
					elm$core$Dict$update,
					value,
					function (val) {
						return elm$core$Maybe$Just(
							!A2(elm$core$Maybe$withDefault, false, val));
					},
					model.an);
				return _Utils_update(
					model,
					{an: updated});
			default:
				var search = msg.a;
				return _Utils_update(
					model,
					{aN: search});
		}
	});
var author$project$Isdc$Ui$DropdownDots$Down = 1;
var author$project$Isdc$Ui$DropdownDots$Up = 0;
var author$project$DropdownDots$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				var newVal = msg.a;
				return _Utils_update(
					model,
					{J: false});
			case 1:
				return _Utils_update(
					model,
					{J: true});
			case 2:
				return _Utils_update(
					model,
					{J: false});
			default:
				var _n1 = model.M;
				if (!_n1) {
					return _Utils_update(
						model,
						{M: 1});
				} else {
					return _Utils_update(
						model,
						{M: 0});
				}
		}
	});
var author$project$Input$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				var newVal = msg.a;
				return _Utils_update(
					model,
					{cz: newVal});
			case 1:
				return _Utils_update(
					model,
					{ad: true});
			default:
				return _Utils_update(
					model,
					{ad: false});
		}
	});
var author$project$Main$Checkbox = function (a) {
	return {$: 4, a: a};
};
var author$project$Main$Dropdown = function (a) {
	return {$: 9, a: a};
};
var author$project$Main$DropdownDots = function (a) {
	return {$: 10, a: a};
};
var author$project$Main$Input = function (a) {
	return {$: 8, a: a};
};
var author$project$Main$Modal = function (a) {
	return {$: 12, a: a};
};
var author$project$Main$Radio = function (a) {
	return {$: 15, a: a};
};
var author$project$Main$SearchBox = function (a) {
	return {$: 14, a: a};
};
var author$project$Main$Select = function (a) {
	return {$: 11, a: a};
};
var author$project$Checkbox$checkboxModel = {_: false, aY: false, a1: 'Hello'};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var author$project$Dropdown$dropdownModel = {J: false, an: elm$core$Dict$empty, aN: ''};
var author$project$DropdownDots$initModel = {M: 1, J: false};
var author$project$Input$inputModel = {ad: false, cz: ''};
var author$project$Main$Buttons = {$: 2};
var author$project$Main$Colors = {$: 5};
var author$project$Main$Icons = {$: 3};
var author$project$Main$Loader = {$: 7};
var author$project$Main$NotFound = {$: 0};
var author$project$Main$Scrollbars = {$: 13};
var author$project$Main$Typography = {$: 6};
var author$project$SearchBox$searchBoxModel = {ad: false, cz: ''};
var author$project$Select$selectModel = {ad: false, c4: false, cz: ''};
var elm$core$String$length = _String_length;
var elm$core$String$slice = _String_slice;
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var author$project$Main$urlToPage = function (url) {
	var _n0 = A2(elm$core$String$dropLeft, 12, url.de);
	switch (_n0) {
		case '/home':
			return author$project$Main$Home;
		case '/buttons':
			return author$project$Main$Buttons;
		case '/icons':
			return author$project$Main$Icons;
		case '/checkbox':
			return author$project$Main$Checkbox(author$project$Checkbox$checkboxModel);
		case '/colors':
			return author$project$Main$Colors;
		case '/typography':
			return author$project$Main$Typography;
		case '/input':
			return author$project$Main$Input(author$project$Input$inputModel);
		case '/dropdown':
			return author$project$Main$Dropdown(author$project$Dropdown$dropdownModel);
		case '/loader':
			return author$project$Main$Loader;
		case '/dropdownDots':
			return author$project$Main$DropdownDots(author$project$DropdownDots$initModel);
		case '/select':
			return author$project$Main$Select(author$project$Select$selectModel);
		case '/modal':
			return author$project$Main$Modal(false);
		case '/scrollbars':
			return author$project$Main$Scrollbars;
		case '/searchBox':
			return author$project$Main$SearchBox(author$project$SearchBox$searchBoxModel);
		case '/radio':
			return author$project$Main$Radio(0);
		default:
			return author$project$Main$NotFound;
	}
};
var author$project$Modal$update = F2(
	function (msg, model) {
		if (!msg) {
			return true;
		} else {
			return false;
		}
	});
var author$project$Radio$update = F2(
	function (msg, _n0) {
		var val = msg;
		return val;
	});
var author$project$SearchBox$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				var newVal = msg.a;
				return _Utils_update(
					model,
					{cz: newVal});
			case 1:
				return _Utils_update(
					model,
					{ad: true});
			default:
				return _Utils_update(
					model,
					{ad: false});
		}
	});
var author$project$Select$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				var newVal = msg.a;
				return _Utils_update(
					model,
					{c4: false, cz: newVal});
			case 1:
				return _Utils_update(
					model,
					{ad: true});
			case 2:
				return _Utils_update(
					model,
					{ad: false});
			case 3:
				return _Utils_update(
					model,
					{c4: !model.c4});
			case 4:
				return _Utils_update(
					model,
					{c4: false});
			default:
				return model;
		}
	});
var elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var elm$browser$Browser$Dom$NotFound = elm$core$Basics$identity;
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$core$Task$Perform = elm$core$Basics$identity;
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$core$Task$init = elm$core$Task$succeed(0);
var elm$core$List$foldrHelper = F4(
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
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
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
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return 0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0;
		return A2(elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			A2(elm$core$Task$map, toMessage, task));
	});
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$map2 = _Json_map2;
var elm$json$Json$Decode$succeed = _Json_succeed;
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var elm$core$String$startsWith = _String_startsWith;
var elm$url$Url$Http = 0;
var elm$url$Url$Https = 1;
var elm$core$String$indexes = _String_indexes;
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var elm$core$String$contains = _String_contains;
var elm$core$String$toInt = _String_toInt;
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {bO: fragment, bQ: host, de: path, cd: port_, ch: protocol, ci: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 1) {
						return elm$core$Maybe$Nothing;
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		0,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		1,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$Navigation$load = _Browser_load;
var elm$browser$Browser$Navigation$pushUrl = _Browser_pushUrl;
var elm$url$Url$addPort = F2(
	function (maybePort, starter) {
		if (maybePort.$ === 1) {
			return starter;
		} else {
			var port_ = maybePort.a;
			return starter + (':' + elm$core$String$fromInt(port_));
		}
	});
var elm$url$Url$addPrefixed = F3(
	function (prefix, maybeSegment, starter) {
		if (maybeSegment.$ === 1) {
			return starter;
		} else {
			var segment = maybeSegment.a;
			return _Utils_ap(
				starter,
				_Utils_ap(prefix, segment));
		}
	});
var elm$url$Url$toString = function (url) {
	var http = function () {
		var _n0 = url.ch;
		if (!_n0) {
			return 'http://';
		} else {
			return 'https://';
		}
	}();
	return A3(
		elm$url$Url$addPrefixed,
		'#',
		url.bO,
		A3(
			elm$url$Url$addPrefixed,
			'?',
			url.ci,
			_Utils_ap(
				A2(
					elm$url$Url$addPort,
					url.cd,
					_Utils_ap(http, url.bQ)),
				url.de)));
};
var author$project$Main$update = F2(
	function (msg, model) {
		var _n0 = _Utils_Tuple2(msg, model.q);
		_n0$10:
		while (true) {
			switch (_n0.a.$) {
				case 1:
					var url = _n0.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								q: author$project$Main$urlToPage(url),
								bs: url
							}),
						elm$core$Platform$Cmd$none);
				case 0:
					var urlRequest = _n0.a.a;
					if (!urlRequest.$) {
						var url = urlRequest.a;
						return _Utils_Tuple2(
							model,
							A2(
								elm$browser$Browser$Navigation$pushUrl,
								model.bk,
								elm$url$Url$toString(url)));
					} else {
						var href = urlRequest.a;
						return _Utils_Tuple2(
							model,
							elm$browser$Browser$Navigation$load(href));
					}
				case 2:
					if (_n0.b.$ === 4) {
						var checkboxMsg = _n0.a.a;
						var checkboxModel = _n0.b.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									q: author$project$Main$Checkbox(
										A2(author$project$Checkbox$update, checkboxMsg, checkboxModel))
								}),
							elm$core$Platform$Cmd$none);
					} else {
						break _n0$10;
					}
				case 3:
					if (_n0.b.$ === 8) {
						var inputMsg = _n0.a.a;
						var inputModel = _n0.b.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									q: author$project$Main$Input(
										A2(author$project$Input$update, inputMsg, inputModel))
								}),
							elm$core$Platform$Cmd$none);
					} else {
						break _n0$10;
					}
				case 4:
					if (_n0.b.$ === 9) {
						var dropdownMsg = _n0.a.a;
						var dropdownModel = _n0.b.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									q: author$project$Main$Dropdown(
										A2(author$project$Dropdown$update, dropdownMsg, dropdownModel))
								}),
							elm$core$Platform$Cmd$none);
					} else {
						break _n0$10;
					}
				case 5:
					if (_n0.b.$ === 10) {
						var dropdownDotsMsg = _n0.a.a;
						var dropdownDotsModel = _n0.b.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									q: author$project$Main$DropdownDots(
										A2(author$project$DropdownDots$update, dropdownDotsMsg, dropdownDotsModel))
								}),
							elm$core$Platform$Cmd$none);
					} else {
						break _n0$10;
					}
				case 6:
					if (_n0.b.$ === 11) {
						var selectMsg = _n0.a.a;
						var selectModel = _n0.b.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									q: author$project$Main$Select(
										A2(author$project$Select$update, selectMsg, selectModel))
								}),
							elm$core$Platform$Cmd$none);
					} else {
						break _n0$10;
					}
				case 7:
					if (_n0.b.$ === 12) {
						var modalMsg = _n0.a.a;
						var open = _n0.b.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									q: author$project$Main$Modal(
										A2(author$project$Modal$update, modalMsg, open))
								}),
							elm$core$Platform$Cmd$none);
					} else {
						break _n0$10;
					}
				case 8:
					if (_n0.b.$ === 14) {
						var searchBoxMsg = _n0.a.a;
						var searchBoxModel = _n0.b.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									q: author$project$Main$SearchBox(
										A2(author$project$SearchBox$update, searchBoxMsg, searchBoxModel))
								}),
							elm$core$Platform$Cmd$none);
					} else {
						break _n0$10;
					}
				default:
					if (_n0.b.$ === 15) {
						var radioMsg = _n0.a.a;
						var radioModel = _n0.b.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									q: author$project$Main$Radio(
										A2(author$project$Radio$update, radioMsg, radioModel))
								}),
							elm$core$Platform$Cmd$none);
					} else {
						break _n0$10;
					}
			}
		}
		return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
	});
var elm$core$Result$map = F2(
	function (func, ra) {
		if (!ra.$) {
			var a = ra.a;
			return elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return elm$core$Result$Err(e);
		}
	});
var elm$core$Result$withDefault = F2(
	function (def, result) {
		if (!result.$) {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var elm$html$Html$div = _VirtualDom_node('div');
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$HCode = elm$core$Basics$identity;
var elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {bG: col, ce: problem, cn: row};
	});
var elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3(elm$parser$Parser$DeadEnd, p.cn, p.bG, p.ce);
};
var elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 0:
					return list;
				case 1:
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2(elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2(elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var elm$parser$Parser$Advanced$run = F2(
	function (_n0, src) {
		var parse = _n0;
		var _n1 = parse(
			{bG: 1, f: _List_Nil, g: 1, b: 0, cn: 1, a: src});
		if (!_n1.$) {
			var value = _n1.b;
			return elm$core$Result$Ok(value);
		} else {
			var bag = _n1.b;
			return elm$core$Result$Err(
				A2(elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var elm$parser$Parser$run = F2(
	function (parser, source) {
		var _n0 = A2(elm$parser$Parser$Advanced$run, parser, source);
		if (!_n0.$) {
			var a = _n0.a;
			return elm$core$Result$Ok(a);
		} else {
			var problems = _n0.a;
			return elm$core$Result$Err(
				A2(elm$core$List$map, elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style1 = 2;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style2 = 3;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style3 = 4;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style4 = 5;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style5 = 6;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style6 = 7;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$syntaxToStyle = function (syntax) {
	switch (syntax) {
		case 0:
			return _Utils_Tuple2(3, 'elm-s');
		case 1:
			return _Utils_Tuple2(4, 'elm-bs');
		case 2:
			return _Utils_Tuple2(5, 'elm-gs');
		case 3:
			return _Utils_Tuple2(7, 'elm-c');
		case 4:
			return _Utils_Tuple2(4, 'elm-k');
		case 5:
			return _Utils_Tuple2(6, 'elm-f');
		case 6:
			return _Utils_Tuple2(5, 'elm-ts');
		default:
			return _Utils_Tuple2(2, 'elm-n');
	}
};
var elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var elm$parser$Parser$Advanced$Parser = elm$core$Basics$identity;
var elm$parser$Parser$Advanced$map = F2(
	function (func, _n0) {
		var parse = _n0;
		return function (s0) {
			var _n1 = parse(s0);
			if (!_n1.$) {
				var p = _n1.a;
				var a = _n1.b;
				var s1 = _n1.c;
				return A3(
					elm$parser$Parser$Advanced$Good,
					p,
					func(a),
					s1);
			} else {
				var p = _n1.a;
				var x = _n1.b;
				return A2(elm$parser$Parser$Advanced$Bad, p, x);
			}
		};
	});
var elm$parser$Parser$map = elm$parser$Parser$Advanced$map;
var elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 1, a: a};
};
var elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 0, a: a};
};
var elm$parser$Parser$toAdvancedStep = function (step) {
	if (!step.$) {
		var s = step.a;
		return elm$parser$Parser$Advanced$Loop(s);
	} else {
		var a = step.a;
		return elm$parser$Parser$Advanced$Done(a);
	}
};
var elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _n0 = callback(state);
			var parse = _n0;
			var _n1 = parse(s0);
			if (!_n1.$) {
				var p1 = _n1.a;
				var step = _n1.b;
				var s1 = _n1.c;
				if (!step.$) {
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
					return A3(elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _n1.a;
				var x = _n1.b;
				return A2(elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return function (s) {
			return A4(elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
		};
	});
var elm$parser$Parser$loop = F2(
	function (state, callback) {
		return A2(
			elm$parser$Parser$Advanced$loop,
			state,
			function (s) {
				return A2(
					elm$parser$Parser$map,
					elm$parser$Parser$toAdvancedStep,
					callback(s));
			});
	});
var elm$parser$Parser$Done = function (a) {
	return {$: 1, a: a};
};
var elm$parser$Parser$Loop = function (a) {
	return {$: 0, a: a};
};
var elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _n0) {
		var parseA = _n0;
		return function (s0) {
			var _n1 = parseA(s0);
			if (_n1.$ === 1) {
				var p = _n1.a;
				var x = _n1.b;
				return A2(elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _n1.a;
				var a = _n1.b;
				var s1 = _n1.c;
				var _n2 = callback(a);
				var parseB = _n2;
				var _n3 = parseB(s1);
				if (_n3.$ === 1) {
					var p2 = _n3.a;
					var x = _n3.b;
					return A2(elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _n3.a;
					var b = _n3.b;
					var s2 = _n3.c;
					return A3(elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
				}
			}
		};
	});
var elm$parser$Parser$andThen = elm$parser$Parser$Advanced$andThen;
var elm$parser$Parser$Advanced$Empty = {$: 0};
var elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2(elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a;
				var remainingParsers = parsers.b;
				var _n1 = parse(s0);
				if (!_n1.$) {
					var step = _n1;
					return step;
				} else {
					var step = _n1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2(elm$parser$Parser$Advanced$Append, bag, x),
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
var elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return function (s) {
		return A3(elm$parser$Parser$Advanced$oneOfHelp, s, elm$parser$Parser$Advanced$Empty, parsers);
	};
};
var elm$parser$Parser$oneOf = elm$parser$Parser$Advanced$oneOf;
var elm$parser$Parser$Advanced$succeed = function (a) {
	return function (s) {
		return A3(elm$parser$Parser$Advanced$Good, false, a, s);
	};
};
var elm$parser$Parser$succeed = elm$parser$Parser$Advanced$succeed;
var elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var elm$core$Basics$always = F2(
	function (a, _n0) {
		return a;
	});
var elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _n0) {
		var parse = _n0;
		return function (s0) {
			var _n1 = parse(s0);
			if (_n1.$ === 1) {
				var p = _n1.a;
				var x = _n1.b;
				return A2(elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p = _n1.a;
				var a = _n1.b;
				var s1 = _n1.c;
				return A3(
					elm$parser$Parser$Advanced$Good,
					p,
					A2(
						func,
						A3(elm$core$String$slice, s0.b, s1.b, s0.a),
						a),
					s1);
			}
		};
	});
var elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2(elm$parser$Parser$Advanced$mapChompedString, elm$core$Basics$always, parser);
};
var elm$parser$Parser$getChompedString = elm$parser$Parser$Advanced$getChompedString;
var elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 8, a: a};
};
var elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {bG: col, cO: contextStack, ce: problem, cn: row};
	});
var elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			elm$parser$Parser$Advanced$AddRight,
			elm$parser$Parser$Advanced$Empty,
			A4(elm$parser$Parser$Advanced$DeadEnd, s.cn, s.bG, x, s.f));
	});
var elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var elm$parser$Parser$Advanced$token = function (_n0) {
	var str = _n0.a;
	var expecting = _n0.b;
	var progress = !elm$core$String$isEmpty(str);
	return function (s) {
		var _n1 = A5(elm$parser$Parser$Advanced$isSubString, str, s.b, s.cn, s.bG, s.a);
		var newOffset = _n1.a;
		var newRow = _n1.b;
		var newCol = _n1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			elm$parser$Parser$Advanced$Bad,
			false,
			A2(elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{bG: newCol, f: s.f, g: s.g, b: newOffset, cn: newRow, a: s.a});
	};
};
var elm$parser$Parser$Advanced$symbol = elm$parser$Parser$Advanced$token;
var elm$parser$Parser$symbol = function (str) {
	return elm$parser$Parser$Advanced$symbol(
		A2(
			elm$parser$Parser$Advanced$Token,
			str,
			elm$parser$Parser$ExpectingSymbol(str)));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak = function (c) {
	return c === '\n';
};
var elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3(elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.a);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.b, offset) < 0,
					0,
					{bG: col, f: s0.f, g: s0.g, b: offset, cn: row, a: s0.a});
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
var elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return function (s) {
		return A5(elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.b, s.cn, s.bG, s);
	};
};
var elm$parser$Parser$chompWhile = elm$parser$Parser$Advanced$chompWhile;
var elm$parser$Parser$Advanced$map2 = F3(
	function (func, _n0, _n1) {
		var parseA = _n0;
		var parseB = _n1;
		return function (s0) {
			var _n2 = parseA(s0);
			if (_n2.$ === 1) {
				var p = _n2.a;
				var x = _n2.b;
				return A2(elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _n2.a;
				var a = _n2.b;
				var s1 = _n2.c;
				var _n3 = parseB(s1);
				if (_n3.$ === 1) {
					var p2 = _n3.a;
					var x = _n3.b;
					return A2(elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _n3.a;
					var b = _n3.b;
					var s2 = _n3.c;
					return A3(
						elm$parser$Parser$Advanced$Good,
						p1 || p2,
						A2(func, a, b),
						s2);
				}
			}
		};
	});
var elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3(elm$parser$Parser$Advanced$map2, elm$core$Basics$always, keepParser, ignoreParser);
	});
var elm$parser$Parser$ignorer = elm$parser$Parser$Advanced$ignorer;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile = F2(
	function (isNotRelevant, previousParser) {
		return A2(
			elm$parser$Parser$ignorer,
			previousParser,
			elm$parser$Parser$chompWhile(isNotRelevant));
	});
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Comment = {$: 1};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$inlineComment = A2(
	elm$parser$Parser$map,
	function (b) {
		return _List_fromArray(
			[
				_Utils_Tuple2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Comment, b)
			]);
	},
	elm$parser$Parser$getChompedString(
		A2(
			pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
			A2(elm$core$Basics$composeL, elm$core$Basics$not, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak),
			elm$parser$Parser$symbol('--'))));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak = {$: 2};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreakList = A2(
	elm$parser$Parser$map,
	function (_n0) {
		return _List_fromArray(
			[
				_Utils_Tuple2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak, '\n')
			]);
	},
	elm$parser$Parser$symbol('\n'));
var elm$core$Basics$neq = _Utils_notEqual;
var elm$parser$Parser$Problem = function (a) {
	return {$: 12, a: a};
};
var elm$parser$Parser$Advanced$problem = function (x) {
	return function (s) {
		return A2(
			elm$parser$Parser$Advanced$Bad,
			false,
			A2(elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var elm$parser$Parser$problem = function (msg) {
	return elm$parser$Parser$Advanced$problem(
		elm$parser$Parser$Problem(msg));
};
var elm$parser$Parser$UnexpectedChar = {$: 11};
var elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return function (s) {
			var newOffset = A3(elm$parser$Parser$Advanced$isSubChar, isGood, s.b, s.a);
			return _Utils_eq(newOffset, -1) ? A2(
				elm$parser$Parser$Advanced$Bad,
				false,
				A2(elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
				elm$parser$Parser$Advanced$Good,
				true,
				0,
				{bG: 1, f: s.f, g: s.g, b: s.b + 1, cn: s.cn + 1, a: s.a}) : A3(
				elm$parser$Parser$Advanced$Good,
				true,
				0,
				{bG: s.bG + 1, f: s.f, g: s.g, b: newOffset, cn: s.cn, a: s.a}));
		};
	});
var elm$parser$Parser$chompIf = function (isGood) {
	return A2(elm$parser$Parser$Advanced$chompIf, isGood, elm$parser$Parser$UnexpectedChar);
};
var elm$parser$Parser$ExpectingEnd = {$: 10};
var elm$parser$Parser$Advanced$end = function (x) {
	return function (s) {
		return _Utils_eq(
			elm$core$String$length(s.a),
			s.b) ? A3(elm$parser$Parser$Advanced$Good, false, 0, s) : A2(
			elm$parser$Parser$Advanced$Bad,
			false,
			A2(elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var elm$parser$Parser$end = elm$parser$Parser$Advanced$end(elm$parser$Parser$ExpectingEnd);
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$addThen = F3(
	function (f, list, plist) {
		return A2(
			elm$parser$Parser$andThen,
			function (n) {
				return f(
					_Utils_ap(n, list));
			},
			plist);
	});
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$consThen = F3(
	function (f, list, pn) {
		return A2(
			elm$parser$Parser$andThen,
			function (n) {
				return f(
					A2(elm$core$List$cons, n, list));
			},
			pn);
	});
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedUnnestable = F2(
	function (options, revAList) {
		var defaultMap = options.bI;
		var isNotRelevant = options.bY;
		var end = options.bJ;
		var innerParsers = options.bU;
		return elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					elm$parser$Parser$map,
					elm$core$Basics$always(
						A2(
							elm$core$List$cons,
							defaultMap(end),
							revAList)),
					elm$parser$Parser$symbol(end)),
					A2(
					elm$parser$Parser$map,
					elm$core$Basics$always(revAList),
					elm$parser$Parser$end),
					A3(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$addThen,
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedUnnestable(options),
					revAList,
					elm$parser$Parser$oneOf(innerParsers)),
					A3(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$consThen,
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedUnnestable(options),
					revAList,
					A2(
						elm$parser$Parser$map,
						defaultMap,
						elm$parser$Parser$getChompedString(
							A2(
								pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
								isNotRelevant,
								elm$parser$Parser$chompIf(
									elm$core$Basics$always(true))))))
				]));
	});
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedNestable = F3(
	function (nestLevel, options, revAList) {
		var defaultMap = options.bI;
		var isNotRelevant = options.bY;
		var start = options.bp;
		var end = options.bJ;
		var innerParsers = options.bU;
		return elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					elm$parser$Parser$andThen,
					function (n) {
						return (nestLevel === 1) ? elm$parser$Parser$succeed(n) : A3(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedNestable, nestLevel - 1, options, n);
					},
					A2(
						elm$parser$Parser$map,
						elm$core$Basics$always(
							A2(
								elm$core$List$cons,
								defaultMap(end),
								revAList)),
						elm$parser$Parser$symbol(end))),
					A3(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$consThen,
					A2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedNestable, nestLevel + 1, options),
					revAList,
					A2(
						elm$parser$Parser$map,
						defaultMap,
						elm$parser$Parser$getChompedString(
							A2(
								pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
								isNotRelevant,
								elm$parser$Parser$symbol(start))))),
					A3(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$addThen,
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedUnnestable(options),
					revAList,
					elm$parser$Parser$oneOf(innerParsers)),
					A2(
					elm$parser$Parser$map,
					elm$core$Basics$always(revAList),
					elm$parser$Parser$end),
					A3(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$consThen,
					A2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedNestable, nestLevel, options),
					revAList,
					A2(
						elm$parser$Parser$map,
						defaultMap,
						elm$parser$Parser$getChompedString(
							A2(
								pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
								isNotRelevant,
								elm$parser$Parser$chompIf(
									elm$core$Basics$always(true))))))
				]));
	});
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedHelp = F2(
	function (options, revAList) {
		var start = options.bp;
		var end = options.bJ;
		var isNotRelevant = options.bY;
		var _n0 = _Utils_Tuple2(
			elm$core$String$uncons(options.bp),
			elm$core$String$uncons(options.bJ));
		if (_n0.a.$ === 1) {
			var _n1 = _n0.a;
			return elm$parser$Parser$problem('Trying to parse a delimited helper, but the start token cannot be an empty string!');
		} else {
			if (_n0.b.$ === 1) {
				var _n2 = _n0.b;
				return elm$parser$Parser$problem('Trying to parse a delimited helper, but the end token cannot be an empty string!');
			} else {
				var _n3 = _n0.a.a;
				var startChar = _n3.a;
				var _n4 = _n0.b.a;
				var endChar = _n4.a;
				return options.bX ? A3(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedNestable,
					1,
					_Utils_update(
						options,
						{
							bY: function (c) {
								return isNotRelevant(c) && ((!_Utils_eq(c, startChar)) && (!_Utils_eq(c, endChar)));
							}
						}),
					revAList) : A2(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedUnnestable,
					_Utils_update(
						options,
						{
							bY: function (c) {
								return isNotRelevant(c) && (!_Utils_eq(c, endChar));
							}
						}),
					revAList);
			}
		}
	});
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited = function (options) {
	var start = options.bp;
	var isNotRelevant = options.bY;
	var defaultMap = options.bI;
	return A2(
		elm$parser$Parser$andThen,
		function (n) {
			return A2(
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimitedHelp,
				options,
				_List_fromArray(
					[n]));
		},
		A2(
			elm$parser$Parser$map,
			elm$core$Basics$always(
				defaultMap(start)),
			elm$parser$Parser$symbol(start)));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$multilineComment = pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	{
		bI: function (b) {
			return _Utils_Tuple2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Comment, b);
		},
		bJ: '-}',
		bU: _List_fromArray(
			[pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreakList]),
		bX: true,
		bY: function (c) {
			return !pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c);
		},
		bp: '{-'
	});
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$comment = elm$parser$Parser$oneOf(
	_List_fromArray(
		[pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$inlineComment, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$multilineComment]));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$BasicSymbol = 1;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Capitalized = 3;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$GroupSymbol = 2;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Keyword = 4;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Number = 7;
var elm$core$Dict$member = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$get, key, dict);
		if (!_n0.$) {
			return true;
		} else {
			return false;
		}
	});
var elm$core$Set$member = F2(
	function (key, _n0) {
		var dict = _n0;
		return A2(elm$core$Dict$member, key, dict);
	});
var elm$core$Set$Set_elm_builtin = elm$core$Basics$identity;
var elm$core$Set$empty = elm$core$Dict$empty;
var elm$core$Set$insert = F2(
	function (key, _n0) {
		var dict = _n0;
		return A3(elm$core$Dict$insert, key, 0, dict);
	});
var elm$core$Set$fromList = function (list) {
	return A3(elm$core$List$foldl, elm$core$Set$insert, elm$core$Set$empty, list);
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$basicSymbols = elm$core$Set$fromList(
	_List_fromArray(
		['|', '.', '=', '\\', '/', '(', ')', '-', '>', '<', ':', '+', '!', '$', '%', '&', '*']));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isBasicSymbol = function (c) {
	return A2(elm$core$Set$member, c, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$basicSymbols);
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile = function (isNotRelevant) {
	return A2(
		elm$parser$Parser$ignorer,
		A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(0),
			elm$parser$Parser$chompIf(isNotRelevant)),
		elm$parser$Parser$chompWhile(isNotRelevant));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$basicSymbol = elm$parser$Parser$getChompedString(
	pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isBasicSymbol));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$groupSymbols = elm$core$Set$fromList(
	_List_fromArray(
		[',', '[', ']', '{', '}']));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isGroupSymbol = function (c) {
	return A2(elm$core$Set$member, c, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$groupSymbols);
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isStringLiteralChar = function (c) {
	return (c === '\"') || (c === '\'');
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isSpace = function (c) {
	return (c === ' ') || (c === '\t');
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace = function (c) {
	return pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isSpace(c) || pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c);
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isVariableChar = function (c) {
	return !(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c) || (pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isBasicSymbol(c) || (pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isGroupSymbol(c) || pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isStringLiteralChar(c))));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$capitalized = elm$parser$Parser$getChompedString(
	A2(
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isVariableChar,
		elm$parser$Parser$chompIf(elm$core$Char$isUpper)));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$groupSymbol = elm$parser$Parser$getChompedString(
	pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isGroupSymbol));
var elm$parser$Parser$Advanced$backtrackable = function (_n0) {
	var parse = _n0;
	return function (s0) {
		var _n1 = parse(s0);
		if (_n1.$ === 1) {
			var x = _n1.b;
			return A2(elm$parser$Parser$Advanced$Bad, false, x);
		} else {
			var a = _n1.b;
			var s1 = _n1.c;
			return A3(elm$parser$Parser$Advanced$Good, false, a, s1);
		}
	};
};
var elm$parser$Parser$backtrackable = elm$parser$Parser$Advanced$backtrackable;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$Function = 5;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$infixSet = elm$core$Set$fromList(
	_List_fromArray(
		['+', '-', '/', '*', '=', '.', '$', '<', '>', ':', '&', '|', '^', '?', '%', '#', '@', '~', '!', ',']));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isInfixChar = function (c) {
	return A2(elm$core$Set$member, c, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$infixSet);
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C = function (a) {
	return {$: 3, a: a};
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$infixParser = A2(
	elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2(
			pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(5),
			b);
	},
	elm$parser$Parser$getChompedString(
		A2(
			elm$parser$Parser$ignorer,
			A2(
				elm$parser$Parser$ignorer,
				A2(
					elm$parser$Parser$ignorer,
					elm$parser$Parser$succeed(0),
					elm$parser$Parser$backtrackable(
						elm$parser$Parser$symbol('('))),
				elm$parser$Parser$backtrackable(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isInfixChar))),
			elm$parser$Parser$backtrackable(
				elm$parser$Parser$symbol(')')))));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$keywordSet = elm$core$Set$fromList(
	_List_fromArray(
		['as', 'where', 'let', 'in', 'if', 'else', 'then', 'case', 'of', 'type', 'alias']));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isKeyword = function (str) {
	return A2(elm$core$Set$member, str, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$keywordSet);
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$variable = elm$parser$Parser$getChompedString(
	A2(
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isVariableChar,
		elm$parser$Parser$chompIf(elm$core$Char$isLower)));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$weirdText = elm$parser$Parser$getChompedString(
	pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isVariableChar));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isNumber = function (c) {
	return elm$core$Char$isDigit(c) || (c === '.');
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$positiveNumber = A2(
	elm$parser$Parser$ignorer,
	A2(
		elm$parser$Parser$ignorer,
		elm$parser$Parser$succeed(0),
		elm$parser$Parser$chompIf(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isNumber)),
	elm$parser$Parser$chompWhile(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isNumber));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$negativeNumber = A2(
	elm$parser$Parser$ignorer,
	A2(
		elm$parser$Parser$ignorer,
		elm$parser$Parser$succeed(0),
		elm$parser$Parser$backtrackable(
			elm$parser$Parser$symbol('-'))),
	pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$positiveNumber);
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$number = elm$parser$Parser$oneOf(
	_List_fromArray(
		[pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$positiveNumber, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$negativeNumber]));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal = {$: 0};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBodyContent = elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(7),
					b);
			},
			elm$parser$Parser$getChompedString(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$number)),
			A2(
			elm$parser$Parser$map,
			elm$core$Basics$always(
				_Utils_Tuple2(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(3),
					'()')),
			elm$parser$Parser$symbol('()')),
			pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$infixParser,
			A2(
			elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(1),
					b);
			},
			pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$basicSymbol),
			A2(
			elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(2),
					b);
			},
			pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$groupSymbol),
			A2(
			elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(3),
					b);
			},
			pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$capitalized),
			A2(
			elm$parser$Parser$map,
			function (n) {
				return pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isKeyword(n) ? _Utils_Tuple2(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(4),
					n) : _Utils_Tuple2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, n);
			},
			pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$variable),
			A2(
			elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
			},
			pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$weirdText)
		]));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$String = 0;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$escapableSet = elm$core$Set$fromList(
	_List_fromArray(
		['\'', '\"', '\\', 'n', 'r', 't', 'b', 'f', 'v']));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapableChar = function (c) {
	return A2(elm$core$Set$member, c, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$escapableSet);
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$escapable = A2(
	elm$parser$Parser$ignorer,
	A2(
		elm$parser$Parser$ignorer,
		elm$parser$Parser$succeed(0),
		elm$parser$Parser$backtrackable(
			elm$parser$Parser$symbol('\\'))),
	elm$parser$Parser$chompIf(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapableChar));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$elmEscapable = A2(
	elm$parser$Parser$map,
	function (b) {
		return _List_fromArray(
			[
				_Utils_Tuple2(
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(3),
				b)
			]);
	},
	elm$parser$Parser$getChompedString(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$escapable));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapable = function (c) {
	return c === '\\';
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringDelimiter = {
	bI: function (b) {
		return _Utils_Tuple2(
			pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(0),
			b);
	},
	bJ: '\"',
	bU: _List_fromArray(
		[pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreakList, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$elmEscapable]),
	bX: false,
	bY: function (c) {
		return !(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c) || pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isEscapable(c));
	},
	bp: '\"'
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$doubleQuote = pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringDelimiter);
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$quote = pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	_Utils_update(
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringDelimiter,
		{bJ: '\'', bp: '\''}));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$tripleDoubleQuote = pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$delimited(
	_Utils_update(
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringDelimiter,
		{bJ: '\"\"\"', bp: '\"\"\"'}));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringLiteral = elm$parser$Parser$oneOf(
	_List_fromArray(
		[pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$tripleDoubleQuote, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$doubleQuote, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$quote]));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreak = A2(
	elm$parser$Parser$map,
	function (_n0) {
		return _Utils_Tuple2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak, '\n');
	},
	elm$parser$Parser$symbol('\n'));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$space = A2(
	elm$parser$Parser$map,
	function (b) {
		return _Utils_Tuple2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
	},
	elm$parser$Parser$getChompedString(
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isSpace)));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$checkContext = function (revTokens) {
	return elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				elm$parser$Parser$succeed(
				elm$parser$Parser$Done(revTokens))
			]));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep = function (revTokens) {
	return elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				elm$parser$Parser$map,
				function (n) {
					return elm$parser$Parser$Loop(
						A2(elm$core$List$cons, n, revTokens));
				},
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$space),
				A2(
				elm$parser$Parser$andThen,
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$checkContext,
				A2(
					elm$parser$Parser$map,
					function (n) {
						return A2(elm$core$List$cons, n, revTokens);
					},
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreak)),
				A2(
				elm$parser$Parser$map,
				function (n) {
					return elm$parser$Parser$Loop(
						_Utils_ap(n, revTokens));
				},
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$comment)
			]));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody = function (revTokens) {
	return elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				elm$parser$Parser$map,
				function (ns) {
					return elm$parser$Parser$Loop(
						_Utils_ap(ns, revTokens));
				},
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringLiteral),
				A2(
				elm$parser$Parser$map,
				function (n) {
					return elm$parser$Parser$Loop(
						A2(elm$core$List$cons, n, revTokens));
				},
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBodyContent),
				elm$parser$Parser$succeed(
				elm$parser$Parser$Done(revTokens))
			]));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$TypeSignature = 6;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigIsNotRelevant = function (c) {
	return !(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c) || ((c === '(') || ((c === ')') || ((c === '-') || (c === ',')))));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigContentHelp = elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			elm$parser$Parser$map,
			elm$core$Basics$always(
				_Utils_Tuple2(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(6),
					'()')),
			elm$parser$Parser$symbol('()')),
			A2(
			elm$parser$Parser$map,
			elm$core$Basics$always(
				_Utils_Tuple2(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(1),
					'->')),
			elm$parser$Parser$symbol('->')),
			A2(
			elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
			},
			elm$parser$Parser$getChompedString(
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
					function (c) {
						return (c === '(') || ((c === ')') || ((c === '-') || (c === ',')));
					}))),
			A2(
			elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(6),
					b);
			},
			elm$parser$Parser$getChompedString(
				A2(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigIsNotRelevant,
					elm$parser$Parser$chompIf(elm$core$Char$isUpper)))),
			A2(
			elm$parser$Parser$map,
			function (b) {
				return _Utils_Tuple2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
			},
			elm$parser$Parser$getChompedString(
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigIsNotRelevant)))
		]));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigContent = function (revTokens) {
	return elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				elm$parser$Parser$map,
				function (n) {
					return elm$parser$Parser$Loop(
						A2(elm$core$List$cons, n, revTokens));
				},
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigContentHelp),
				elm$parser$Parser$succeed(
				elm$parser$Parser$Done(revTokens))
			]));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionSignature = function (revTokens) {
	return elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				elm$parser$Parser$map,
				elm$parser$Parser$Done,
				A2(
					elm$parser$Parser$andThen,
					function (ns) {
						return A2(elm$parser$Parser$loop, ns, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$fnSigContent);
					},
					A2(
						elm$parser$Parser$map,
						elm$core$Basics$always(
							A2(
								elm$core$List$cons,
								_Utils_Tuple2(
									pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(1),
									':'),
								revTokens)),
						elm$parser$Parser$symbol(':')))),
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				elm$parser$Parser$map,
				elm$parser$Parser$Done,
				A2(elm$parser$Parser$loop, revTokens, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody)),
				elm$parser$Parser$succeed(
				elm$parser$Parser$Done(revTokens))
			]));
};
var elm$parser$Parser$ExpectingKeyword = function (a) {
	return {$: 9, a: a};
};
var elm$parser$Parser$Advanced$keyword = function (_n0) {
	var kwd = _n0.a;
	var expecting = _n0.b;
	var progress = !elm$core$String$isEmpty(kwd);
	return function (s) {
		var _n1 = A5(elm$parser$Parser$Advanced$isSubString, kwd, s.b, s.cn, s.bG, s.a);
		var newOffset = _n1.a;
		var newRow = _n1.b;
		var newCol = _n1.c;
		return (_Utils_eq(newOffset, -1) || (0 <= A3(
			elm$parser$Parser$Advanced$isSubChar,
			function (c) {
				return elm$core$Char$isAlphaNum(c) || (c === '_');
			},
			newOffset,
			s.a))) ? A2(
			elm$parser$Parser$Advanced$Bad,
			false,
			A2(elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{bG: newCol, f: s.f, g: s.g, b: newOffset, cn: newRow, a: s.a});
	};
};
var elm$parser$Parser$keyword = function (kwd) {
	return elm$parser$Parser$Advanced$keyword(
		A2(
			elm$parser$Parser$Advanced$Token,
			kwd,
			elm$parser$Parser$ExpectingKeyword(kwd)));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isCommentChar = function (c) {
	return (c === '-') || (c === '{');
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$commentChar = elm$parser$Parser$getChompedString(
	elm$parser$Parser$chompIf(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isCommentChar));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecIsNotRelevant = function (c) {
	return !(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c) || (pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isCommentChar(c) || (c === '(')));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mdpIsNotRelevant = function (c) {
	return !(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isWhitespace(c) || (pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isCommentChar(c) || ((c === '(') || ((c === ')') || ((c === ',') || (c === '.'))))));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mdpnIsSpecialChar = function (c) {
	return pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$isLineBreak(c) || (pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isCommentChar(c) || ((c === '(') || (c === ')')));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$checkContextNested = function (_n1) {
	var nestLevel = _n1.a;
	var revTokens = _n1.b;
	return elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStepNested(
				_Utils_Tuple2(nestLevel, revTokens)),
				elm$parser$Parser$succeed(
				elm$parser$Parser$Done(revTokens))
			]));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStepNested = function (_n0) {
	var nestLevel = _n0.a;
	var revTokens = _n0.b;
	return elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				elm$parser$Parser$map,
				function (n) {
					return elm$parser$Parser$Loop(
						_Utils_Tuple2(
							nestLevel,
							A2(elm$core$List$cons, n, revTokens)));
				},
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$space),
				A2(
				elm$parser$Parser$andThen,
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$checkContextNested,
				A2(
					elm$parser$Parser$map,
					function (n) {
						return _Utils_Tuple2(
							nestLevel,
							A2(elm$core$List$cons, n, revTokens));
					},
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreak)),
				A2(
				elm$parser$Parser$map,
				function (n) {
					return elm$parser$Parser$Loop(
						_Utils_Tuple2(
							nestLevel,
							_Utils_ap(n, revTokens)));
				},
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$comment)
			]));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecParNest = function (_n0) {
	var nestLevel = _n0.a;
	var revTokens = _n0.b;
	return elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStepNested(
				_Utils_Tuple2(nestLevel, revTokens)),
				A2(
				elm$parser$Parser$map,
				function (ns) {
					return elm$parser$Parser$Loop(
						_Utils_Tuple2(nestLevel + 1, ns));
				},
				A2(
					elm$parser$Parser$map,
					elm$core$Basics$always(
						A2(
							elm$core$List$cons,
							_Utils_Tuple2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, '('),
							revTokens)),
					elm$parser$Parser$symbol('('))),
				A2(
				elm$parser$Parser$map,
				function (ns) {
					return (!nestLevel) ? elm$parser$Parser$Done(ns) : elm$parser$Parser$Loop(
						_Utils_Tuple2(nestLevel - 1, ns));
				},
				A2(
					elm$parser$Parser$map,
					elm$core$Basics$always(
						A2(
							elm$core$List$cons,
							_Utils_Tuple2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, ')'),
							revTokens)),
					elm$parser$Parser$symbol(')'))),
				A2(
				elm$parser$Parser$map,
				function (n) {
					return elm$parser$Parser$Loop(
						_Utils_Tuple2(
							nestLevel,
							A2(elm$core$List$cons, n, revTokens)));
				},
				elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							A2(
							elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
							},
							pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$commentChar),
							A2(
							elm$parser$Parser$map,
							function (s) {
								return _Utils_Tuple2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, s);
							},
							elm$parser$Parser$getChompedString(
								pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
									A2(elm$core$Basics$composeL, elm$core$Basics$not, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mdpnIsSpecialChar))))
						]))),
				elm$parser$Parser$succeed(
				elm$parser$Parser$Done(revTokens))
			]));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecParentheses = function (revTokens) {
	return elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				elm$parser$Parser$map,
				elm$parser$Parser$Done,
				A2(
					elm$parser$Parser$map,
					elm$core$Basics$always(
						A2(
							elm$core$List$cons,
							_Utils_Tuple2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, ')'),
							revTokens)),
					elm$parser$Parser$symbol(')'))),
				A2(
				elm$parser$Parser$map,
				function (n) {
					return elm$parser$Parser$Loop(
						A2(elm$core$List$cons, n, revTokens));
				},
				elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$infixParser,
							A2(
							elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
							},
							pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$commentChar),
							A2(
							elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
							},
							elm$parser$Parser$getChompedString(
								pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(
									function (c) {
										return (c === ',') || (c === '.');
									}))),
							A2(
							elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2(
									pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(6),
									b);
							},
							elm$parser$Parser$getChompedString(
								A2(
									pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$thenChompWhile,
									pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mdpIsNotRelevant,
									elm$parser$Parser$chompIf(elm$core$Char$isUpper)))),
							A2(
							elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2(
									pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(5),
									b);
							},
							elm$parser$Parser$getChompedString(
								pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mdpIsNotRelevant)))
						]))),
				A2(
				elm$parser$Parser$map,
				elm$parser$Parser$Loop,
				A2(
					elm$parser$Parser$andThen,
					function (n) {
						return A2(
							elm$parser$Parser$loop,
							_Utils_Tuple2(0, n),
							pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecParNest);
					},
					A2(
						elm$parser$Parser$map,
						elm$core$Basics$always(
							A2(
								elm$core$List$cons,
								_Utils_Tuple2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, '('),
								revTokens)),
						elm$parser$Parser$symbol('(')))),
				elm$parser$Parser$succeed(
				elm$parser$Parser$Done(revTokens))
			]));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$moduleDeclaration = function (revTokens) {
	return elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				elm$parser$Parser$map,
				elm$parser$Parser$Loop,
				A2(
					elm$parser$Parser$andThen,
					function (n) {
						return A2(elm$parser$Parser$loop, n, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecParentheses);
					},
					A2(
						elm$parser$Parser$map,
						elm$core$Basics$always(
							A2(
								elm$core$List$cons,
								_Utils_Tuple2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, '('),
								revTokens)),
						elm$parser$Parser$symbol('(')))),
				A2(
				elm$parser$Parser$map,
				function (n) {
					return elm$parser$Parser$Loop(
						A2(elm$core$List$cons, n, revTokens));
				},
				elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							A2(
							elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
							},
							pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$commentChar),
							A2(
							elm$parser$Parser$map,
							elm$core$Basics$always(
								_Utils_Tuple2(
									pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(4),
									'exposing')),
							elm$parser$Parser$keyword('exposing')),
							A2(
							elm$parser$Parser$map,
							elm$core$Basics$always(
								_Utils_Tuple2(
									pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(4),
									'as')),
							elm$parser$Parser$keyword('as')),
							A2(
							elm$parser$Parser$map,
							function (b) {
								return _Utils_Tuple2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$Normal, b);
							},
							elm$parser$Parser$getChompedString(
								pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Helpers$chompIfThenWhile(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$modDecIsNotRelevant)))
						]))),
				elm$parser$Parser$succeed(
				elm$parser$Parser$Done(revTokens))
			]));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$portDeclarationHelp = F2(
	function (revTokens, str) {
		return (str === 'module') ? A2(
			elm$parser$Parser$loop,
			A2(
				elm$core$List$cons,
				_Utils_Tuple2(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(4),
					str),
				revTokens),
			pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$moduleDeclaration) : A2(
			elm$parser$Parser$loop,
			A2(
				elm$core$List$cons,
				_Utils_Tuple2(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(5),
					str),
				revTokens),
			pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionSignature);
	});
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$portDeclaration = function (revTokens) {
	return elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$whitespaceOrCommentStep(revTokens),
				A2(
				elm$parser$Parser$map,
				elm$parser$Parser$Done,
				A2(
					elm$parser$Parser$andThen,
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$portDeclarationHelp(revTokens),
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$variable)),
				A2(
				elm$parser$Parser$map,
				elm$parser$Parser$Done,
				A2(elm$parser$Parser$loop, revTokens, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody)),
				elm$parser$Parser$succeed(
				elm$parser$Parser$Done(revTokens))
			]));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineStartVariable = F2(
	function (revTokens, n) {
		return ((n === 'module') || (n === 'import')) ? A2(
			elm$parser$Parser$loop,
			A2(
				elm$core$List$cons,
				_Utils_Tuple2(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(4),
					n),
				revTokens),
			pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$moduleDeclaration) : ((n === 'port') ? A2(
			elm$parser$Parser$loop,
			A2(
				elm$core$List$cons,
				_Utils_Tuple2(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(4),
					n),
				revTokens),
			pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$portDeclaration) : (pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$isKeyword(n) ? A2(
			elm$parser$Parser$loop,
			A2(
				elm$core$List$cons,
				_Utils_Tuple2(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(4),
					n),
				revTokens),
			pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody) : A2(
			elm$parser$Parser$loop,
			A2(
				elm$core$List$cons,
				_Utils_Tuple2(
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$C(5),
					n),
				revTokens),
			pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionSignature)));
	});
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mainLoop = function (revTokens) {
	return elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				elm$parser$Parser$map,
				function (n) {
					return elm$parser$Parser$Loop(
						A2(elm$core$List$cons, n, revTokens));
				},
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$space),
				A2(
				elm$parser$Parser$map,
				function (n) {
					return elm$parser$Parser$Loop(
						A2(elm$core$List$cons, n, revTokens));
				},
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineBreak),
				A2(
				elm$parser$Parser$map,
				function (n) {
					return elm$parser$Parser$Loop(
						_Utils_ap(n, revTokens));
				},
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$comment),
				A2(
				elm$parser$Parser$map,
				elm$parser$Parser$Loop,
				A2(
					elm$parser$Parser$andThen,
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$lineStartVariable(revTokens),
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$variable)),
				A2(
				elm$parser$Parser$map,
				elm$parser$Parser$Loop,
				A2(
					elm$parser$Parser$andThen,
					function (s) {
						return A2(
							elm$parser$Parser$loop,
							_Utils_ap(s, revTokens),
							pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody);
					},
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$stringLiteral)),
				A2(
				elm$parser$Parser$map,
				elm$parser$Parser$Loop,
				A2(
					elm$parser$Parser$andThen,
					function (s) {
						return A2(
							elm$parser$Parser$loop,
							A2(elm$core$List$cons, s, revTokens),
							pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBody);
					},
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$functionBodyContent)),
				elm$parser$Parser$succeed(
				elm$parser$Parser$Done(revTokens))
			]));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$toRevTokens = A2(elm$parser$Parser$loop, _List_Nil, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$mainLoop);
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$newLine = function (fragments) {
	return {cZ: fragments, c$: elm$core$Maybe$Nothing};
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Comment = 1;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Default = 0;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toFragment = F2(
	function (toStyle, _n0) {
		var syntax = _n0.a;
		var text = _n0.b;
		switch (syntax.$) {
			case 0:
				return {cD: '', dg: 0, dv: text};
			case 1:
				return {cD: '', dg: 1, dv: text};
			case 2:
				return {cD: '', dg: 0, dv: text};
			default:
				var c = syntax.a;
				var _n2 = toStyle(c);
				var requiredStyle = _n2.a;
				var additionalClass = _n2.b;
				return {cD: additionalClass, dg: requiredStyle, dv: text};
		}
	});
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLinesHelp = F3(
	function (toStyle, _n0, _n1) {
		var syntax = _n0.a;
		var text = _n0.b;
		var lines = _n1.a;
		var fragments = _n1.b;
		var maybeLastSyntax = _n1.c;
		if (_Utils_eq(syntax, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Type$LineBreak)) {
			return _Utils_Tuple3(
				A2(
					elm$core$List$cons,
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$newLine(fragments),
					lines),
				_List_fromArray(
					[
						A2(
						pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toFragment,
						toStyle,
						_Utils_Tuple2(syntax, text))
					]),
				elm$core$Maybe$Nothing);
		} else {
			if (_Utils_eq(
				elm$core$Maybe$Just(syntax),
				maybeLastSyntax)) {
				if (fragments.b) {
					var headFrag = fragments.a;
					var tailFrags = fragments.b;
					return _Utils_Tuple3(
						lines,
						A2(
							elm$core$List$cons,
							_Utils_update(
								headFrag,
								{
									dv: _Utils_ap(text, headFrag.dv)
								}),
							tailFrags),
						maybeLastSyntax);
				} else {
					return _Utils_Tuple3(
						lines,
						A2(
							elm$core$List$cons,
							A2(
								pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toFragment,
								toStyle,
								_Utils_Tuple2(syntax, text)),
							fragments),
						maybeLastSyntax);
				}
			} else {
				return _Utils_Tuple3(
					lines,
					A2(
						elm$core$List$cons,
						A2(
							pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toFragment,
							toStyle,
							_Utils_Tuple2(syntax, text)),
						fragments),
					elm$core$Maybe$Just(syntax));
			}
		}
	});
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLines = F2(
	function (toStyle, revTokens) {
		return function (_n0) {
			var lines = _n0.a;
			var frags = _n0.b;
			return A2(
				elm$core$List$cons,
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$newLine(frags),
				lines);
		}(
			A3(
				elm$core$List$foldl,
				pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLinesHelp(toStyle),
				_Utils_Tuple3(_List_Nil, _List_Nil, elm$core$Maybe$Nothing),
				revTokens));
	});
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$toLines = A2(
	elm$core$Basics$composeR,
	elm$parser$Parser$run(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$toRevTokens),
	elm$core$Result$map(
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Helpers$toLines(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$syntaxToStyle)));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$elm = A2(
	elm$core$Basics$composeR,
	pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$toLines,
	elm$core$Result$map(elm$core$Basics$identity));
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme = elm$core$Basics$identity;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex = function (a) {
	return {$: 1, a: a};
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$DefaultColor = {$: 0};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$backgroundColor = function (background) {
	return {aB: background, ai: false, aj: false, aH: false, dv: pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$DefaultColor};
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$noEmphasis = F2(
	function (text, background) {
		return {aB: background, ai: false, aj: false, aH: false, dv: text};
	});
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor = function (text) {
	return {aB: pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$DefaultColor, ai: false, aj: false, aH: false, dv: text};
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$GitHub$requiredStyles = {
	cC: pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$backgroundColor(
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#eaffea')),
	cN: pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#969896')),
	cS: A2(
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$noEmphasis,
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#24292e'),
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#ffffff')),
	cT: pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$backgroundColor(
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#ffecec')),
	c$: pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$backgroundColor(
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#fffbdd')),
	dn: pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#005cc5')),
	$7: pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#df5000')),
	dp: pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#d73a49')),
	dq: pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#0086b3')),
	dr: pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#63a35c')),
	ds: pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#005cc5')),
	dt: pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$textColor(
		pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Hex('#795da3'))
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$GitHub$theme = {cP: _List_Nil, dh: pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$GitHub$requiredStyles};
var elm$core$Tuple$mapFirst = F2(
	function (func, _n0) {
		var x = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var elm$core$String$concat = function (strings) {
	return A2(elm$core$String$join, '', strings);
};
var elm$core$String$fromFloat = _String_fromNumber;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$colorToCss = F2(
	function (property, color) {
		switch (color.$) {
			case 0:
				return '';
			case 1:
				var hex = color.a;
				return property + (hex + ';');
			case 2:
				var r = color.a;
				var g = color.b;
				var b = color.c;
				return elm$core$String$concat(
					_List_fromArray(
						[
							property,
							'rgb(',
							elm$core$String$fromInt(r),
							', ',
							elm$core$String$fromInt(g),
							',',
							elm$core$String$fromInt(b),
							');'
						]));
			default:
				var r = color.a;
				var g = color.b;
				var b = color.c;
				var a = color.d;
				return elm$core$String$concat(
					_List_fromArray(
						[
							property,
							'rgba(',
							elm$core$String$fromInt(r),
							', ',
							elm$core$String$fromInt(g),
							',',
							elm$core$String$fromInt(b),
							', ',
							elm$core$String$fromFloat(a),
							');'
						]));
		}
	});
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$emptyIfFalse = F2(
	function (bool, str) {
		return bool ? str : '';
	});
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$styleToCss = function (_n0) {
	var isBold = _n0.ai;
	var isItalic = _n0.aj;
	var isUnderline = _n0.aH;
	var text = _n0.dv;
	var background = _n0.aB;
	return elm$core$String$concat(
		_List_fromArray(
			[
				A2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$emptyIfFalse, isBold, 'font-weight: bold;'),
				A2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$emptyIfFalse, isItalic, 'font-style: italic;'),
				A2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$emptyIfFalse, isUnderline, 'text-decoration: underline;'),
				A2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$colorToCss, 'color: ', text),
				A2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$colorToCss, 'background: ', background)
			]));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$toCssClass = function (_n0) {
	var selectors = _n0.a;
	var style = _n0.b;
	return elm$core$String$isEmpty(selectors) ? '' : (selectors + (' {' + (pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$styleToCss(style) + '}')));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$toCss = function (classes) {
	return elm$core$String$concat(
		A2(elm$core$List$map, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$toCssClass, classes));
};
var elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						elm$core$List$cons,
						sep,
						A2(elm$core$List$cons, x, rest));
				});
			var spersed = A3(elm$core$List$foldr, step, _List_Nil, tl);
			return A2(elm$core$List$cons, hd, spersed);
		}
	});
var elm$core$Tuple$second = function (_n0) {
	var y = _n0.b;
	return y;
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$atRuleToFragment = function (a) {
	switch (a) {
		case 0:
			return _Utils_Tuple2(4, 'css-ar-i');
		case 1:
			return _Utils_Tuple2(6, 'css-ar-p');
		case 2:
			return _Utils_Tuple2(4, 'css-ar-k');
		default:
			return _Utils_Tuple2(5, 'css-ar-v');
	}
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attributeSelectorToFragment = function (att) {
	switch (att) {
		case 0:
			return _Utils_Tuple2(6, 'css-s-a-an');
		case 1:
			return _Utils_Tuple2(3, 'css-s-a-av');
		default:
			return _Utils_Tuple2(4, 'css-s-a-o');
	}
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$Style7 = 8;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$selectorToFragment = function (s) {
	switch (s.$) {
		case 0:
			return _Utils_Tuple2(4, 'css-s-e');
		case 1:
			return _Utils_Tuple2(6, 'css-s-i');
		case 2:
			return _Utils_Tuple2(6, 'css-s-cl');
		case 3:
			return _Utils_Tuple2(8, 'css-s-c');
		case 4:
			return _Utils_Tuple2(4, 'css-s-u');
		case 5:
			var att = s.a;
			return pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$attributeSelectorToFragment(att);
		case 6:
			return _Utils_Tuple2(0, 'css-s-pe');
		default:
			return _Utils_Tuple2(0, 'css-s-pc');
	}
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$syntaxToStyle = function (syntax) {
	switch (syntax.$) {
		case 0:
			return _Utils_Tuple2(3, 'css-s');
		case 1:
			var a = syntax.a;
			return pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$atRuleToFragment(a);
		case 2:
			var s = syntax.a;
			return pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$selectorToFragment(s);
		case 3:
			return _Utils_Tuple2(5, 'css-p');
		case 4:
			return _Utils_Tuple2(5, 'css-pv');
		case 5:
			return _Utils_Tuple2(2, 'css-n');
		default:
			return _Utils_Tuple2(4, 'css-u');
	}
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$syntaxToStyle = function (syntax) {
	switch (syntax) {
		case 0:
			return _Utils_Tuple2(2, 'js-n');
		case 1:
			return _Utils_Tuple2(3, 'js-s');
		case 2:
			return _Utils_Tuple2(4, 'js-k');
		case 3:
			return _Utils_Tuple2(5, 'js-dk');
		case 4:
			return _Utils_Tuple2(5, 'js-fe');
		case 5:
			return _Utils_Tuple2(6, 'js-f');
		case 6:
			return _Utils_Tuple2(7, 'js-lk');
		case 7:
			return _Utils_Tuple2(8, 'js-p');
		default:
			return _Utils_Tuple2(6, 'js-ce');
	}
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$syntaxToStyle = function (syntax) {
	switch (syntax) {
		case 0:
			return _Utils_Tuple2(2, 'py-n');
		case 1:
			return _Utils_Tuple2(3, 'py-s');
		case 2:
			return _Utils_Tuple2(4, 'py-k');
		case 3:
			return _Utils_Tuple2(5, 'py-dk');
		case 5:
			return _Utils_Tuple2(6, 'py-f');
		case 6:
			return _Utils_Tuple2(7, 'py-lk');
		case 7:
			return _Utils_Tuple2(8, 'py-p');
		default:
			return _Utils_Tuple2(0, 'py-fe');
	}
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$syntaxToStyle = function (syntax) {
	switch (syntax) {
		case 0:
			return _Utils_Tuple2(4, 'xml-t');
		case 1:
			return _Utils_Tuple2(6, 'xml-a');
		default:
			return _Utils_Tuple2(3, 'xlm-av');
	}
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$syntaxToSelector = function (syntax) {
	switch (syntax.$) {
		case 0:
			var elmSyntax = syntax.a;
			return pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Elm$syntaxToStyle(elmSyntax).b;
		case 1:
			var xmlSyntax = syntax.a;
			return pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Xml$syntaxToStyle(xmlSyntax).b;
		case 2:
			var jsSyntax = syntax.a;
			return pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Javascript$syntaxToStyle(jsSyntax).b;
		case 3:
			var cssSyntax = syntax.a;
			return pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Css$syntaxToStyle(cssSyntax).b;
		default:
			var pythonSyntax = syntax.a;
			return pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Language$Python$syntaxToStyle(pythonSyntax).b;
	}
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$syntaxesToSelectors = function (syntaxes) {
	return elm$core$String$concat(
		A2(
			elm$core$List$intersperse,
			', ',
			A2(
				elm$core$List$map,
				elm$core$Basics$append('.elmsh-'),
				A2(elm$core$List$map, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$syntaxToSelector, syntaxes))));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$toCss = function (_n0) {
	var requiredStyles = _n0.dh;
	var customStyles = _n0.cP;
	return pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Style$toCss(
		_Utils_ap(
			_List_fromArray(
				[
					_Utils_Tuple2('.elmsh', requiredStyles.cS),
					_Utils_Tuple2('.elmsh-hl', requiredStyles.c$),
					_Utils_Tuple2('.elmsh-add', requiredStyles.cC),
					_Utils_Tuple2('.elmsh-del', requiredStyles.cT),
					_Utils_Tuple2('.elmsh-comm', requiredStyles.cN),
					_Utils_Tuple2('.elmsh1', requiredStyles.dn),
					_Utils_Tuple2('.elmsh2', requiredStyles.$7),
					_Utils_Tuple2('.elmsh3', requiredStyles.dp),
					_Utils_Tuple2('.elmsh4', requiredStyles.dq),
					_Utils_Tuple2('.elmsh5', requiredStyles.dr),
					_Utils_Tuple2('.elmsh6', requiredStyles.ds),
					_Utils_Tuple2('.elmsh7', requiredStyles.dt)
				]),
			A2(
				elm$core$List$map,
				elm$core$Tuple$mapFirst(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$syntaxesToSelectors),
				customStyles)));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$GitHub$css = pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$Type$toCss(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$GitHub$theme);
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$gitHub = pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$GitHub$css;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$gitHub = pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme$gitHub;
var elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var elm$html$Html$code = _VirtualDom_node('code');
var elm$html$Html$pre = _VirtualDom_node('pre');
var elm$json$Json$Encode$string = _Json_wrap;
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty('className');
var elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var elm$html$Html$Attributes$attribute = elm$virtual_dom$VirtualDom$attribute;
var elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var elm$html$Html$Attributes$classList = function (classes) {
	return elm$html$Html$Attributes$class(
		A2(
			elm$core$String$join,
			' ',
			A2(
				elm$core$List$map,
				elm$core$Tuple$first,
				A2(elm$core$List$filter, elm$core$Tuple$second, classes))));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Add = 1;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Del = 2;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Line$Normal = 0;
var elm$html$Html$span = _VirtualDom_node('span');
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$requiredStyleToString = function (required) {
	return 'elmsh' + function () {
		switch (required) {
			case 0:
				return '0';
			case 1:
				return '-comm';
			case 2:
				return '1';
			case 3:
				return '2';
			case 4:
				return '3';
			case 5:
				return '4';
			case 6:
				return '5';
			case 7:
				return '6';
			default:
				return '7';
		}
	}();
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$fragmentView = function (_n0) {
	var text = _n0.dv;
	var requiredStyle = _n0.dg;
	var additionalClass = _n0.cD;
	return ((!requiredStyle) && elm$core$String$isEmpty(additionalClass)) ? elm$html$Html$text(text) : A2(
		elm$html$Html$span,
		_List_fromArray(
			[
				elm$html$Html$Attributes$classList(
				_List_fromArray(
					[
						_Utils_Tuple2(
						pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$requiredStyleToString(requiredStyle),
						requiredStyle),
						_Utils_Tuple2('elmsh-' + additionalClass, additionalClass !== '')
					]))
			]),
		_List_fromArray(
			[
				elm$html$Html$text(text)
			]));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$lineView = F3(
	function (start, index, _n0) {
		var fragments = _n0.cZ;
		var highlight = _n0.c$;
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2('elmsh-line', true),
							_Utils_Tuple2(
							'elmsh-hl',
							_Utils_eq(
								highlight,
								elm$core$Maybe$Just(0))),
							_Utils_Tuple2(
							'elmsh-add',
							_Utils_eq(
								highlight,
								elm$core$Maybe$Just(1))),
							_Utils_Tuple2(
							'elmsh-del',
							_Utils_eq(
								highlight,
								elm$core$Maybe$Just(2)))
						])),
					A2(
					elm$html$Html$Attributes$attribute,
					'data-elmsh-lc',
					elm$core$String$fromInt(start + index))
				]),
			A2(elm$core$List$map, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$fragmentView, fragments));
	});
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var elm$core$List$concat = function (lists) {
	return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists);
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$toInlineHtml = function (lines) {
	return A2(
		elm$html$Html$code,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('elmsh')
			]),
		elm$core$List$concat(
			A2(
				elm$core$List$map,
				function (_n0) {
					var highlight = _n0.c$;
					var fragments = _n0.cZ;
					return _Utils_eq(highlight, elm$core$Maybe$Nothing) ? A2(elm$core$List$map, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$fragmentView, fragments) : _List_fromArray(
						[
							A2(
							elm$html$Html$span,
							_List_fromArray(
								[
									elm$html$Html$Attributes$classList(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'elmsh-hl',
											_Utils_eq(
												highlight,
												elm$core$Maybe$Just(0))),
											_Utils_Tuple2(
											'elmsh-add',
											_Utils_eq(
												highlight,
												elm$core$Maybe$Just(1))),
											_Utils_Tuple2(
											'elmsh-del',
											_Utils_eq(
												highlight,
												elm$core$Maybe$Just(2)))
										]))
								]),
							A2(elm$core$List$map, pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$fragmentView, fragments))
						]);
				},
				lines)));
};
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$toBlockHtml = F2(
	function (maybeStart, lines) {
		if (maybeStart.$ === 1) {
			return A2(
				elm$html$Html$pre,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('elmsh')
					]),
				_List_fromArray(
					[
						pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$toInlineHtml(lines)
					]));
		} else {
			var start = maybeStart.a;
			return A2(
				elm$html$Html$pre,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('elmsh')
					]),
				elm$core$List$singleton(
					A2(
						elm$html$Html$code,
						_List_Nil,
						A2(
							elm$core$List$indexedMap,
							pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$lineView(start),
							lines))));
		}
	});
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$toBlockHtml = F2(
	function (maybeStart, _n0) {
		var lines = _n0;
		return A2(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$View$toBlockHtml, maybeStart, lines);
	});
var elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var elm$html$Html$node = elm$virtual_dom$VirtualDom$node;
var pablohirafuji$elm_syntax_highlight$SyntaxHighlight$useTheme = function (_n0) {
	var theme = _n0;
	return A3(
		elm$html$Html$node,
		'style',
		_List_Nil,
		_List_fromArray(
			[
				elm$html$Html$text(theme)
			]));
};
var author$project$DocsLayout$highLighted = F2(
	function (code, num) {
		return A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					pablohirafuji$elm_syntax_highlight$SyntaxHighlight$useTheme(pablohirafuji$elm_syntax_highlight$SyntaxHighlight$gitHub),
					A2(
					elm$core$Result$withDefault,
					elm$html$Html$text(code),
					A2(
						elm$core$Result$map,
						pablohirafuji$elm_syntax_highlight$SyntaxHighlight$toBlockHtml(num),
						pablohirafuji$elm_syntax_highlight$SyntaxHighlight$elm(code)))
				]));
	});
var author$project$Isdc$Ui$Colors$Hex$grayB = '#E5E5E5';
var elm$core$String$foldr = _String_foldr;
var elm$core$String$toList = function (string) {
	return A3(elm$core$String$foldr, elm$core$List$cons, _List_Nil, string);
};
var elm$core$String$cons = _String_cons;
var rtfeldman$elm_css$Css$withPrecedingHash = function (str) {
	return A2(elm$core$String$startsWith, '#', str) ? str : A2(elm$core$String$cons, '#', str);
};
var rtfeldman$elm_css$Css$Structure$Compatible = 0;
var rtfeldman$elm_css$Css$erroneousHex = function (str) {
	return {
		aA: 1,
		aD: 0,
		x: 0,
		aG: 0,
		aM: 0,
		cz: rtfeldman$elm_css$Css$withPrecedingHash(str)
	};
};
var elm$core$String$fromList = _String_fromList;
var elm$core$String$toLower = _String_toLower;
var elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(xs);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$Result$mapError = F2(
	function (f, result) {
		if (!result.$) {
			var v = result.a;
			return elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return elm$core$Result$Err(
				f(e));
		}
	});
var elm$core$Basics$pow = _Basics_pow;
var elm$core$String$fromChar = function (_char) {
	return A2(elm$core$String$cons, _char, '');
};
var rtfeldman$elm_hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		fromStringHelp:
		while (true) {
			if (!chars.b) {
				return elm$core$Result$Ok(accumulated);
			} else {
				var _char = chars.a;
				var rest = chars.b;
				switch (_char) {
					case '0':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated;
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '1':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + A2(elm$core$Basics$pow, 16, position);
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '2':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (2 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '3':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (3 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '4':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (4 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '5':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (5 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '6':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (6 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '7':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (7 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '8':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (8 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '9':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (9 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'a':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (10 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'b':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (11 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'c':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (12 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'd':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (13 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'e':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (14 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'f':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (15 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					default:
						var nonHex = _char;
						return elm$core$Result$Err(
							elm$core$String$fromChar(nonHex) + ' is not a valid hexadecimal character.');
				}
			}
		}
	});
var rtfeldman$elm_hex$Hex$fromString = function (str) {
	if (elm$core$String$isEmpty(str)) {
		return elm$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var result = function () {
			if (A2(elm$core$String$startsWith, '-', str)) {
				var list = A2(
					elm$core$Maybe$withDefault,
					_List_Nil,
					elm$core$List$tail(
						elm$core$String$toList(str)));
				return A2(
					elm$core$Result$map,
					elm$core$Basics$negate,
					A3(
						rtfeldman$elm_hex$Hex$fromStringHelp,
						elm$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					rtfeldman$elm_hex$Hex$fromStringHelp,
					elm$core$String$length(str) - 1,
					elm$core$String$toList(str),
					0);
			}
		}();
		var formatError = function (err) {
			return A2(
				elm$core$String$join,
				' ',
				_List_fromArray(
					['\"' + (str + '\"'), 'is not a valid hexadecimal string because', err]));
		};
		return A2(elm$core$Result$mapError, formatError, result);
	}
};
var rtfeldman$elm_css$Css$validHex = F5(
	function (str, _n0, _n1, _n2, _n3) {
		var r1 = _n0.a;
		var r2 = _n0.b;
		var g1 = _n1.a;
		var g2 = _n1.b;
		var b1 = _n2.a;
		var b2 = _n2.b;
		var a1 = _n3.a;
		var a2 = _n3.b;
		var toResult = A2(
			elm$core$Basics$composeR,
			elm$core$String$fromList,
			A2(elm$core$Basics$composeR, elm$core$String$toLower, rtfeldman$elm_hex$Hex$fromString));
		var results = _Utils_Tuple2(
			_Utils_Tuple2(
				toResult(
					_List_fromArray(
						[r1, r2])),
				toResult(
					_List_fromArray(
						[g1, g2]))),
			_Utils_Tuple2(
				toResult(
					_List_fromArray(
						[b1, b2])),
				toResult(
					_List_fromArray(
						[a1, a2]))));
		if ((((!results.a.a.$) && (!results.a.b.$)) && (!results.b.a.$)) && (!results.b.b.$)) {
			var _n5 = results.a;
			var red = _n5.a.a;
			var green = _n5.b.a;
			var _n6 = results.b;
			var blue = _n6.a.a;
			var alpha = _n6.b.a;
			return {
				aA: alpha / 255,
				aD: blue,
				x: 0,
				aG: green,
				aM: red,
				cz: rtfeldman$elm_css$Css$withPrecedingHash(str)
			};
		} else {
			return rtfeldman$elm_css$Css$erroneousHex(str);
		}
	});
var rtfeldman$elm_css$Css$hex = function (str) {
	var withoutHash = A2(elm$core$String$startsWith, '#', str) ? A2(elm$core$String$dropLeft, 1, str) : str;
	var _n0 = elm$core$String$toList(withoutHash);
	_n0$4:
	while (true) {
		if ((_n0.b && _n0.b.b) && _n0.b.b.b) {
			if (!_n0.b.b.b.b) {
				var r = _n0.a;
				var _n1 = _n0.b;
				var g = _n1.a;
				var _n2 = _n1.b;
				var b = _n2.a;
				return A5(
					rtfeldman$elm_css$Css$validHex,
					str,
					_Utils_Tuple2(r, r),
					_Utils_Tuple2(g, g),
					_Utils_Tuple2(b, b),
					_Utils_Tuple2('f', 'f'));
			} else {
				if (!_n0.b.b.b.b.b) {
					var r = _n0.a;
					var _n3 = _n0.b;
					var g = _n3.a;
					var _n4 = _n3.b;
					var b = _n4.a;
					var _n5 = _n4.b;
					var a = _n5.a;
					return A5(
						rtfeldman$elm_css$Css$validHex,
						str,
						_Utils_Tuple2(r, r),
						_Utils_Tuple2(g, g),
						_Utils_Tuple2(b, b),
						_Utils_Tuple2(a, a));
				} else {
					if (_n0.b.b.b.b.b.b) {
						if (!_n0.b.b.b.b.b.b.b) {
							var r1 = _n0.a;
							var _n6 = _n0.b;
							var r2 = _n6.a;
							var _n7 = _n6.b;
							var g1 = _n7.a;
							var _n8 = _n7.b;
							var g2 = _n8.a;
							var _n9 = _n8.b;
							var b1 = _n9.a;
							var _n10 = _n9.b;
							var b2 = _n10.a;
							return A5(
								rtfeldman$elm_css$Css$validHex,
								str,
								_Utils_Tuple2(r1, r2),
								_Utils_Tuple2(g1, g2),
								_Utils_Tuple2(b1, b2),
								_Utils_Tuple2('f', 'f'));
						} else {
							if (_n0.b.b.b.b.b.b.b.b && (!_n0.b.b.b.b.b.b.b.b.b)) {
								var r1 = _n0.a;
								var _n11 = _n0.b;
								var r2 = _n11.a;
								var _n12 = _n11.b;
								var g1 = _n12.a;
								var _n13 = _n12.b;
								var g2 = _n13.a;
								var _n14 = _n13.b;
								var b1 = _n14.a;
								var _n15 = _n14.b;
								var b2 = _n15.a;
								var _n16 = _n15.b;
								var a1 = _n16.a;
								var _n17 = _n16.b;
								var a2 = _n17.a;
								return A5(
									rtfeldman$elm_css$Css$validHex,
									str,
									_Utils_Tuple2(r1, r2),
									_Utils_Tuple2(g1, g2),
									_Utils_Tuple2(b1, b2),
									_Utils_Tuple2(a1, a2));
							} else {
								break _n0$4;
							}
						}
					} else {
						break _n0$4;
					}
				}
			}
		} else {
			break _n0$4;
		}
	}
	return rtfeldman$elm_css$Css$erroneousHex(str);
};
var author$project$Isdc$Ui$Colors$Css$grayB = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$grayB);
var author$project$Isdc$Ui$Colors$Hex$grayF = '#0A0A0';
var author$project$Isdc$Ui$Colors$Css$grayF = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$grayF);
var rtfeldman$elm_css$Css$auto = {cE: 0, c: 0, ac: 0, a0: 0, c5: 0, ak: 0, F: 0, y: 0, ao: 0, v: 0, a8: 0, av: 0, t: 0, cz: 'auto'};
var rtfeldman$elm_css$Css$Preprocess$AppendProperty = function (a) {
	return {$: 0, a: a};
};
var rtfeldman$elm_css$Css$property = F2(
	function (key, value) {
		return rtfeldman$elm_css$Css$Preprocess$AppendProperty(key + (':' + value));
	});
var rtfeldman$elm_css$Css$prop3 = F4(
	function (key, argA, argB, argC) {
		return A2(
			rtfeldman$elm_css$Css$property,
			key,
			A2(
				elm$core$String$join,
				' ',
				_List_fromArray(
					[argA.cz, argB.cz, argC.cz])));
	});
var rtfeldman$elm_css$Css$border3 = rtfeldman$elm_css$Css$prop3('border');
var rtfeldman$elm_css$Css$prop1 = F2(
	function (key, arg) {
		return A2(rtfeldman$elm_css$Css$property, key, arg.cz);
	});
var rtfeldman$elm_css$Css$borderRadius = rtfeldman$elm_css$Css$prop1('border-radius');
var rtfeldman$elm_css$Css$borderTop3 = rtfeldman$elm_css$Css$prop3('border-top');
var rtfeldman$elm_css$Css$color = function (c) {
	return A2(rtfeldman$elm_css$Css$property, 'color', c.cz);
};
var rtfeldman$elm_css$Css$fontFamily = rtfeldman$elm_css$Css$prop1('font-family');
var rtfeldman$elm_css$Css$prop2 = F3(
	function (key, argA, argB) {
		return A2(
			rtfeldman$elm_css$Css$property,
			key,
			A2(
				elm$core$String$join,
				' ',
				_List_fromArray(
					[argA.cz, argB.cz])));
	});
var rtfeldman$elm_css$Css$margin2 = rtfeldman$elm_css$Css$prop2('margin');
var rtfeldman$elm_css$Css$marginBottom = rtfeldman$elm_css$Css$prop1('margin-bottom');
var rtfeldman$elm_css$Css$marginTop = rtfeldman$elm_css$Css$prop1('margin-top');
var rtfeldman$elm_css$Css$overflow = rtfeldman$elm_css$Css$prop1('overflow');
var rtfeldman$elm_css$Css$padding = rtfeldman$elm_css$Css$prop1('padding');
var rtfeldman$elm_css$Css$padding2 = rtfeldman$elm_css$Css$prop2('padding');
var rtfeldman$elm_css$Css$preWrap = {cz: 'pre-wrap', L: 0};
var rtfeldman$elm_css$Css$PxUnits = 0;
var rtfeldman$elm_css$Css$Internal$lengthConverter = F3(
	function (units, unitLabel, numericValue) {
		return {
			bt: 0,
			bD: 0,
			ac: 0,
			o: 0,
			aI: 0,
			ak: 0,
			F: 0,
			al: 0,
			am: 0,
			P: 0,
			Q: 0,
			y: 0,
			I: numericValue,
			au: 0,
			aw: unitLabel,
			aT: units,
			cz: _Utils_ap(
				elm$core$String$fromFloat(numericValue),
				unitLabel)
		};
	});
var rtfeldman$elm_css$Css$px = A2(rtfeldman$elm_css$Css$Internal$lengthConverter, 0, 'px');
var rtfeldman$elm_css$Css$sansSerif = {N: 0, cz: 'sans-serif'};
var rtfeldman$elm_css$Css$solid = {r: 0, U: 0, cz: 'solid'};
var rtfeldman$elm_css$Css$whiteSpace = rtfeldman$elm_css$Css$prop1('white-space');
var rtfeldman$elm_css$Css$UnitlessInteger = 0;
var rtfeldman$elm_css$Css$zero = {aI: 0, ak: 0, F: 0, al: 0, am: 0, P: 0, Q: 0, aK: 0, I: 0, a4: 0, aw: '', aT: 0, cz: '0'};
var rtfeldman$elm_css$VirtualDom$Styled$Node = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var rtfeldman$elm_css$VirtualDom$Styled$node = rtfeldman$elm_css$VirtualDom$Styled$Node;
var rtfeldman$elm_css$Html$Styled$node = rtfeldman$elm_css$VirtualDom$Styled$node;
var rtfeldman$elm_css$Html$Styled$div = rtfeldman$elm_css$Html$Styled$node('div');
var rtfeldman$elm_css$VirtualDom$Styled$Unstyled = function (a) {
	return {$: 4, a: a};
};
var rtfeldman$elm_css$VirtualDom$Styled$unstyledNode = rtfeldman$elm_css$VirtualDom$Styled$Unstyled;
var rtfeldman$elm_css$Html$Styled$fromUnstyled = rtfeldman$elm_css$VirtualDom$Styled$unstyledNode;
var rtfeldman$elm_css$Html$Styled$h1 = rtfeldman$elm_css$Html$Styled$node('h1');
var rtfeldman$elm_css$Html$Styled$h3 = rtfeldman$elm_css$Html$Styled$node('h3');
var rtfeldman$elm_css$VirtualDom$Styled$text = function (str) {
	return rtfeldman$elm_css$VirtualDom$Styled$Unstyled(
		elm$virtual_dom$VirtualDom$text(str));
};
var rtfeldman$elm_css$Html$Styled$text = rtfeldman$elm_css$VirtualDom$Styled$text;
var elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var rtfeldman$elm_css$VirtualDom$Styled$Attribute = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var Skinney$murmur3$Murmur3$HashData = F4(
	function (shift, seed, hash, charsProcessed) {
		return {Z: charsProcessed, ag: hash, T: seed, ar: shift};
	});
var elm$core$Bitwise$and = _Bitwise_and;
var elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var Skinney$murmur3$Murmur3$mur = F2(
	function (c, h) {
		return 4294967295 & (((h & 65535) * c) + ((65535 & ((h >>> 16) * c)) << 16));
	});
var elm$core$Bitwise$or = _Bitwise_or;
var elm$core$Bitwise$xor = _Bitwise_xor;
var Skinney$murmur3$Murmur3$mix = F2(
	function (h1, h2) {
		var k1 = A2(Skinney$murmur3$Murmur3$mur, 3432918353, h2);
		return h1 ^ A2(Skinney$murmur3$Murmur3$mur, 461845907, (k1 >>> 17) | (k1 << 15));
	});
var Skinney$murmur3$Murmur3$finalize = function (data) {
	var acc = data.ag ? A2(Skinney$murmur3$Murmur3$mix, data.T, data.ag) : data.T;
	var h1 = acc ^ data.Z;
	var h2 = A2(Skinney$murmur3$Murmur3$mur, 2246822507, h1 ^ (h1 >>> 16));
	var h3 = A2(Skinney$murmur3$Murmur3$mur, 3266489909, h2 ^ (h2 >>> 13));
	return (h3 ^ (h3 >>> 16)) >>> 0;
};
var Skinney$murmur3$Murmur3$step = function (acc) {
	var h1 = A2(Skinney$murmur3$Murmur3$mur, 5, (acc >>> 19) | (acc << 13));
	return ((h1 & 65535) + 27492) + ((65535 & ((h1 >>> 16) + 58964)) << 16);
};
var Skinney$murmur3$Murmur3$hashFold = F2(
	function (c, data) {
		var res = data.ag | (c << data.ar);
		var _n0 = data.ar;
		if (_n0 === 24) {
			var newHash = Skinney$murmur3$Murmur3$step(
				A2(Skinney$murmur3$Murmur3$mix, data.T, res));
			return {Z: data.Z + 1, ag: 0, T: newHash, ar: 0};
		} else {
			return {Z: data.Z + 1, ag: res, T: data.T, ar: data.ar + 8};
		}
	});
var elm$core$Basics$ge = _Utils_ge;
var Skinney$murmur3$UTF8$accumulate = F3(
	function (add, _char, _n0) {
		var acc = _n0.a;
		var combine = _n0.b;
		if (combine.$ === 1) {
			return (_char < 128) ? _Utils_Tuple2(
				A2(add, _char, acc),
				elm$core$Maybe$Nothing) : ((_char < 2048) ? _Utils_Tuple2(
				A2(
					add,
					128 | (63 & _char),
					A2(add, 192 | (_char >>> 6), acc)),
				elm$core$Maybe$Nothing) : (((_char < 55296) || (_char >= 57344)) ? _Utils_Tuple2(
				A2(
					add,
					128 | (63 & _char),
					A2(
						add,
						128 | (63 & (_char >>> 6)),
						A2(add, 224 | (_char >>> 12), acc))),
				elm$core$Maybe$Nothing) : _Utils_Tuple2(
				acc,
				elm$core$Maybe$Just(_char))));
		} else {
			var prev = combine.a;
			var combined = ((1023 & _char) | ((1023 & prev) << 10)) + 65536;
			return _Utils_Tuple2(
				A2(
					add,
					128 | (63 & combined),
					A2(
						add,
						128 | (63 & (combined >>> 6)),
						A2(
							add,
							128 | (63 & (combined >>> 12)),
							A2(add, 240 | (combined >>> 18), acc)))),
				elm$core$Maybe$Nothing);
		}
	});
var elm$core$String$foldl = _String_foldl;
var Skinney$murmur3$UTF8$foldl = F3(
	function (op, acc, input) {
		var helper = F2(
			function (_char, res) {
				return A3(
					Skinney$murmur3$UTF8$accumulate,
					op,
					elm$core$Char$toCode(_char),
					res);
			});
		return A3(
			elm$core$String$foldl,
			helper,
			_Utils_Tuple2(acc, elm$core$Maybe$Nothing),
			input).a;
	});
var Skinney$murmur3$Murmur3$hashString = F2(
	function (seed, str) {
		return Skinney$murmur3$Murmur3$finalize(
			A3(
				Skinney$murmur3$UTF8$foldl,
				Skinney$murmur3$Murmur3$hashFold,
				A4(Skinney$murmur3$Murmur3$HashData, 0, seed, 0, 0),
				str));
	});
var elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var rtfeldman$elm_css$Css$Preprocess$stylesheet = function (snippets) {
	return {bF: elm$core$Maybe$Nothing, bR: _List_Nil, b3: _List_Nil, cq: snippets};
};
var elm$core$List$concatMap = F2(
	function (f, list) {
		return elm$core$List$concat(
			A2(elm$core$List$map, f, list));
	});
var rtfeldman$elm_css$Css$Preprocess$unwrapSnippet = function (_n0) {
	var declarations = _n0;
	return declarations;
};
var elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(x);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$List$takeReverse = F3(
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
						$temp$kept = A2(elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var elm$core$List$takeTailRec = F2(
	function (n, list) {
		return elm$core$List$reverse(
			A3(elm$core$List$takeReverse, n, list, _List_Nil));
	});
var elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _n0 = _Utils_Tuple2(n, list);
			_n0$1:
			while (true) {
				_n0$5:
				while (true) {
					if (!_n0.b.b) {
						return list;
					} else {
						if (_n0.b.b.b) {
							switch (_n0.a) {
								case 1:
									break _n0$1;
								case 2:
									var _n2 = _n0.b;
									var x = _n2.a;
									var _n3 = _n2.b;
									var y = _n3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_n0.b.b.b.b) {
										var _n4 = _n0.b;
										var x = _n4.a;
										var _n5 = _n4.b;
										var y = _n5.a;
										var _n6 = _n5.b;
										var z = _n6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _n0$5;
									}
								default:
									if (_n0.b.b.b.b && _n0.b.b.b.b.b) {
										var _n7 = _n0.b;
										var x = _n7.a;
										var _n8 = _n7.b;
										var y = _n8.a;
										var _n9 = _n8.b;
										var z = _n9.a;
										var _n10 = _n9.b;
										var w = _n10.a;
										var tl = _n10.b;
										return (ctr > 1000) ? A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A2(elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A3(elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _n0$5;
									}
							}
						} else {
							if (_n0.a === 1) {
								break _n0$1;
							} else {
								break _n0$5;
							}
						}
					}
				}
				return list;
			}
			var _n1 = _n0.b;
			var x = _n1.a;
			return _List_fromArray(
				[x]);
		}
	});
var elm$core$List$take = F2(
	function (n, list) {
		return A3(elm$core$List$takeFast, 0, n, list);
	});
var elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return elm$core$Maybe$Just(
				f(value));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors = function (declarations) {
	collectSelectors:
	while (true) {
		if (!declarations.b) {
			return _List_Nil;
		} else {
			if (!declarations.a.$) {
				var _n1 = declarations.a.a;
				var firstSelector = _n1.a;
				var otherSelectors = _n1.b;
				var rest = declarations.b;
				return _Utils_ap(
					A2(elm$core$List$cons, firstSelector, otherSelectors),
					rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(rest));
			} else {
				var rest = declarations.b;
				var $temp$declarations = rest;
				declarations = $temp$declarations;
				continue collectSelectors;
			}
		}
	}
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$last = function (list) {
	last:
	while (true) {
		if (!list.b) {
			return elm$core$Maybe$Nothing;
		} else {
			if (!list.b.b) {
				var singleton = list.a;
				return elm$core$Maybe$Just(singleton);
			} else {
				var rest = list.b;
				var $temp$list = rest;
				list = $temp$list;
				continue last;
			}
		}
	}
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration = function (declarations) {
	lastDeclaration:
	while (true) {
		if (!declarations.b) {
			return elm$core$Maybe$Nothing;
		} else {
			if (!declarations.b.b) {
				var x = declarations.a;
				return elm$core$Maybe$Just(
					_List_fromArray(
						[x]));
			} else {
				var xs = declarations.b;
				var $temp$declarations = xs;
				declarations = $temp$declarations;
				continue lastDeclaration;
			}
		}
	}
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$oneOf = function (maybes) {
	oneOf:
	while (true) {
		if (!maybes.b) {
			return elm$core$Maybe$Nothing;
		} else {
			var maybe = maybes.a;
			var rest = maybes.b;
			if (maybe.$ === 1) {
				var $temp$maybes = rest;
				maybes = $temp$maybes;
				continue oneOf;
			} else {
				return maybe;
			}
		}
	}
};
var rtfeldman$elm_css$Css$Structure$FontFeatureValues = function (a) {
	return {$: 9, a: a};
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues = function (tuples) {
	var expandTuples = function (tuplesToExpand) {
		if (!tuplesToExpand.b) {
			return _List_Nil;
		} else {
			var properties = tuplesToExpand.a;
			var rest = tuplesToExpand.b;
			return A2(
				elm$core$List$cons,
				properties,
				expandTuples(rest));
		}
	};
	var newTuples = expandTuples(tuples);
	return _List_fromArray(
		[
			rtfeldman$elm_css$Css$Structure$FontFeatureValues(newTuples)
		]);
};
var rtfeldman$elm_css$Css$Structure$DocumentRule = F5(
	function (a, b, c, d, e) {
		return {$: 3, a: a, b: b, c: c, d: d, e: e};
	});
var rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule = F5(
	function (str1, str2, str3, str4, declaration) {
		if (!declaration.$) {
			var structureStyleBlock = declaration.a;
			return A5(rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4, structureStyleBlock);
		} else {
			return declaration;
		}
	});
var rtfeldman$elm_css$Css$Structure$MediaRule = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var rtfeldman$elm_css$Css$Structure$SupportsRule = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule = F2(
	function (mediaQueries, declaration) {
		switch (declaration.$) {
			case 0:
				var structureStyleBlock = declaration.a;
				return A2(
					rtfeldman$elm_css$Css$Structure$MediaRule,
					mediaQueries,
					_List_fromArray(
						[structureStyleBlock]));
			case 1:
				var newMediaQueries = declaration.a;
				var structureStyleBlocks = declaration.b;
				return A2(
					rtfeldman$elm_css$Css$Structure$MediaRule,
					_Utils_ap(mediaQueries, newMediaQueries),
					structureStyleBlocks);
			case 2:
				var str = declaration.a;
				var declarations = declaration.b;
				return A2(
					rtfeldman$elm_css$Css$Structure$SupportsRule,
					str,
					A2(
						elm$core$List$map,
						rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule(mediaQueries),
						declarations));
			case 3:
				var str1 = declaration.a;
				var str2 = declaration.b;
				var str3 = declaration.c;
				var str4 = declaration.d;
				var structureStyleBlock = declaration.e;
				return A5(rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4, structureStyleBlock);
			case 4:
				return declaration;
			case 5:
				return declaration;
			case 6:
				return declaration;
			case 7:
				return declaration;
			case 8:
				return declaration;
			default:
				return declaration;
		}
	});
var rtfeldman$elm_css$Css$Structure$CounterStyle = function (a) {
	return {$: 8, a: a};
};
var rtfeldman$elm_css$Css$Structure$FontFace = function (a) {
	return {$: 5, a: a};
};
var rtfeldman$elm_css$Css$Structure$Keyframes = function (a) {
	return {$: 6, a: a};
};
var rtfeldman$elm_css$Css$Structure$PageRule = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var rtfeldman$elm_css$Css$Structure$Selector = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var rtfeldman$elm_css$Css$Structure$StyleBlock = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration = function (a) {
	return {$: 0, a: a};
};
var rtfeldman$elm_css$Css$Structure$Viewport = function (a) {
	return {$: 7, a: a};
};
var rtfeldman$elm_css$Css$Structure$mapLast = F2(
	function (update, list) {
		if (!list.b) {
			return list;
		} else {
			if (!list.b.b) {
				var only = list.a;
				return _List_fromArray(
					[
						update(only)
					]);
			} else {
				var first = list.a;
				var rest = list.b;
				return A2(
					elm$core$List$cons,
					first,
					A2(rtfeldman$elm_css$Css$Structure$mapLast, update, rest));
			}
		}
	});
var rtfeldman$elm_css$Css$Structure$withPropertyAppended = F2(
	function (property, _n0) {
		var firstSelector = _n0.a;
		var otherSelectors = _n0.b;
		var properties = _n0.c;
		return A3(
			rtfeldman$elm_css$Css$Structure$StyleBlock,
			firstSelector,
			otherSelectors,
			_Utils_ap(
				properties,
				_List_fromArray(
					[property])));
	});
var rtfeldman$elm_css$Css$Structure$appendProperty = F2(
	function (property, declarations) {
		if (!declarations.b) {
			return declarations;
		} else {
			if (!declarations.b.b) {
				switch (declarations.a.$) {
					case 0:
						var styleBlock = declarations.a.a;
						return _List_fromArray(
							[
								rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
								A2(rtfeldman$elm_css$Css$Structure$withPropertyAppended, property, styleBlock))
							]);
					case 1:
						var _n1 = declarations.a;
						var mediaQueries = _n1.a;
						var styleBlocks = _n1.b;
						return _List_fromArray(
							[
								A2(
								rtfeldman$elm_css$Css$Structure$MediaRule,
								mediaQueries,
								A2(
									rtfeldman$elm_css$Css$Structure$mapLast,
									rtfeldman$elm_css$Css$Structure$withPropertyAppended(property),
									styleBlocks))
							]);
					default:
						return declarations;
				}
			} else {
				var first = declarations.a;
				var rest = declarations.b;
				return A2(
					elm$core$List$cons,
					first,
					A2(rtfeldman$elm_css$Css$Structure$appendProperty, property, rest));
			}
		}
	});
var rtfeldman$elm_css$Css$Structure$appendToLastSelector = F2(
	function (f, styleBlock) {
		if (!styleBlock.b.b) {
			var only = styleBlock.a;
			var properties = styleBlock.c;
			return _List_fromArray(
				[
					A3(rtfeldman$elm_css$Css$Structure$StyleBlock, only, _List_Nil, properties),
					A3(
					rtfeldman$elm_css$Css$Structure$StyleBlock,
					f(only),
					_List_Nil,
					_List_Nil)
				]);
		} else {
			var first = styleBlock.a;
			var rest = styleBlock.b;
			var properties = styleBlock.c;
			var newRest = A2(elm$core$List$map, f, rest);
			var newFirst = f(first);
			return _List_fromArray(
				[
					A3(rtfeldman$elm_css$Css$Structure$StyleBlock, first, rest, properties),
					A3(rtfeldman$elm_css$Css$Structure$StyleBlock, newFirst, newRest, _List_Nil)
				]);
		}
	});
var rtfeldman$elm_css$Css$Structure$applyPseudoElement = F2(
	function (pseudo, _n0) {
		var sequence = _n0.a;
		var selectors = _n0.b;
		return A3(
			rtfeldman$elm_css$Css$Structure$Selector,
			sequence,
			selectors,
			elm$core$Maybe$Just(pseudo));
	});
var rtfeldman$elm_css$Css$Structure$appendPseudoElementToLastSelector = F2(
	function (pseudo, styleBlock) {
		return A2(
			rtfeldman$elm_css$Css$Structure$appendToLastSelector,
			rtfeldman$elm_css$Css$Structure$applyPseudoElement(pseudo),
			styleBlock);
	});
var rtfeldman$elm_css$Css$Structure$CustomSelector = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var rtfeldman$elm_css$Css$Structure$TypeSelectorSequence = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence = function (a) {
	return {$: 1, a: a};
};
var rtfeldman$elm_css$Css$Structure$appendRepeatable = F2(
	function (selector, sequence) {
		switch (sequence.$) {
			case 0:
				var typeSelector = sequence.a;
				var list = sequence.b;
				return A2(
					rtfeldman$elm_css$Css$Structure$TypeSelectorSequence,
					typeSelector,
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
			case 1:
				var list = sequence.a;
				return rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
			default:
				var str = sequence.a;
				var list = sequence.b;
				return A2(
					rtfeldman$elm_css$Css$Structure$CustomSelector,
					str,
					_Utils_ap(
						list,
						_List_fromArray(
							[selector])));
		}
	});
var rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator = F2(
	function (selector, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			if (!list.b.b) {
				var _n1 = list.a;
				var combinator = _n1.a;
				var sequence = _n1.b;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						combinator,
						A2(rtfeldman$elm_css$Css$Structure$appendRepeatable, selector, sequence))
					]);
			} else {
				var first = list.a;
				var rest = list.b;
				return A2(
					elm$core$List$cons,
					first,
					A2(rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator, selector, rest));
			}
		}
	});
var rtfeldman$elm_css$Css$Structure$appendRepeatableSelector = F2(
	function (repeatableSimpleSelector, selector) {
		if (!selector.b.b) {
			var sequence = selector.a;
			var pseudoElement = selector.c;
			return A3(
				rtfeldman$elm_css$Css$Structure$Selector,
				A2(rtfeldman$elm_css$Css$Structure$appendRepeatable, repeatableSimpleSelector, sequence),
				_List_Nil,
				pseudoElement);
		} else {
			var firstSelector = selector.a;
			var tuples = selector.b;
			var pseudoElement = selector.c;
			return A3(
				rtfeldman$elm_css$Css$Structure$Selector,
				firstSelector,
				A2(rtfeldman$elm_css$Css$Structure$appendRepeatableWithCombinator, repeatableSimpleSelector, tuples),
				pseudoElement);
		}
	});
var rtfeldman$elm_css$Css$Structure$appendRepeatableToLastSelector = F2(
	function (selector, styleBlock) {
		return A2(
			rtfeldman$elm_css$Css$Structure$appendToLastSelector,
			rtfeldman$elm_css$Css$Structure$appendRepeatableSelector(selector),
			styleBlock);
	});
var rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock = F2(
	function (update, declarations) {
		_n0$12:
		while (true) {
			if (!declarations.b) {
				return declarations;
			} else {
				if (!declarations.b.b) {
					switch (declarations.a.$) {
						case 0:
							var styleBlock = declarations.a.a;
							return A2(
								elm$core$List$map,
								rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration,
								update(styleBlock));
						case 1:
							if (declarations.a.b.b) {
								if (!declarations.a.b.b.b) {
									var _n1 = declarations.a;
									var mediaQueries = _n1.a;
									var _n2 = _n1.b;
									var styleBlock = _n2.a;
									return _List_fromArray(
										[
											A2(
											rtfeldman$elm_css$Css$Structure$MediaRule,
											mediaQueries,
											update(styleBlock))
										]);
								} else {
									var _n3 = declarations.a;
									var mediaQueries = _n3.a;
									var _n4 = _n3.b;
									var first = _n4.a;
									var rest = _n4.b;
									var _n5 = A2(
										rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock,
										update,
										_List_fromArray(
											[
												A2(rtfeldman$elm_css$Css$Structure$MediaRule, mediaQueries, rest)
											]));
									if ((_n5.b && (_n5.a.$ === 1)) && (!_n5.b.b)) {
										var _n6 = _n5.a;
										var newMediaQueries = _n6.a;
										var newStyleBlocks = _n6.b;
										return _List_fromArray(
											[
												A2(
												rtfeldman$elm_css$Css$Structure$MediaRule,
												newMediaQueries,
												A2(elm$core$List$cons, first, newStyleBlocks))
											]);
									} else {
										var newDeclarations = _n5;
										return newDeclarations;
									}
								}
							} else {
								break _n0$12;
							}
						case 2:
							var _n7 = declarations.a;
							var str = _n7.a;
							var nestedDeclarations = _n7.b;
							return _List_fromArray(
								[
									A2(
									rtfeldman$elm_css$Css$Structure$SupportsRule,
									str,
									A2(rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, update, nestedDeclarations))
								]);
						case 3:
							var _n8 = declarations.a;
							var str1 = _n8.a;
							var str2 = _n8.b;
							var str3 = _n8.c;
							var str4 = _n8.d;
							var styleBlock = _n8.e;
							return A2(
								elm$core$List$map,
								A4(rtfeldman$elm_css$Css$Structure$DocumentRule, str1, str2, str3, str4),
								update(styleBlock));
						case 4:
							var _n9 = declarations.a;
							return declarations;
						case 5:
							return declarations;
						case 6:
							return declarations;
						case 7:
							return declarations;
						case 8:
							return declarations;
						default:
							return declarations;
					}
				} else {
					break _n0$12;
				}
			}
		}
		var first = declarations.a;
		var rest = declarations.b;
		return A2(
			elm$core$List$cons,
			first,
			A2(rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, update, rest));
	});
var rtfeldman$elm_css$Css$Structure$styleBlockToMediaRule = F2(
	function (mediaQueries, declaration) {
		if (!declaration.$) {
			var styleBlock = declaration.a;
			return A2(
				rtfeldman$elm_css$Css$Structure$MediaRule,
				mediaQueries,
				_List_fromArray(
					[styleBlock]));
		} else {
			return declaration;
		}
	});
var rtfeldman$elm_css$Hash$murmurSeed = 15739;
var elm$core$Basics$modBy = _Basics_modBy;
var rtfeldman$elm_hex$Hex$unsafeToDigit = function (num) {
	unsafeToDigit:
	while (true) {
		switch (num) {
			case 0:
				return '0';
			case 1:
				return '1';
			case 2:
				return '2';
			case 3:
				return '3';
			case 4:
				return '4';
			case 5:
				return '5';
			case 6:
				return '6';
			case 7:
				return '7';
			case 8:
				return '8';
			case 9:
				return '9';
			case 10:
				return 'a';
			case 11:
				return 'b';
			case 12:
				return 'c';
			case 13:
				return 'd';
			case 14:
				return 'e';
			case 15:
				return 'f';
			default:
				var $temp$num = num;
				num = $temp$num;
				continue unsafeToDigit;
		}
	}
};
var rtfeldman$elm_hex$Hex$unsafePositiveToDigits = F2(
	function (digits, num) {
		unsafePositiveToDigits:
		while (true) {
			if (num < 16) {
				return A2(
					elm$core$List$cons,
					rtfeldman$elm_hex$Hex$unsafeToDigit(num),
					digits);
			} else {
				var $temp$digits = A2(
					elm$core$List$cons,
					rtfeldman$elm_hex$Hex$unsafeToDigit(
						A2(elm$core$Basics$modBy, 16, num)),
					digits),
					$temp$num = (num / 16) | 0;
				digits = $temp$digits;
				num = $temp$num;
				continue unsafePositiveToDigits;
			}
		}
	});
var rtfeldman$elm_hex$Hex$toString = function (num) {
	return elm$core$String$fromList(
		(num < 0) ? A2(
			elm$core$List$cons,
			'-',
			A2(rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, -num)) : A2(rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, num));
};
var rtfeldman$elm_css$Hash$fromString = function (str) {
	return A2(
		elm$core$String$cons,
		'_',
		rtfeldman$elm_hex$Hex$toString(
			A2(Skinney$murmur3$Murmur3$hashString, rtfeldman$elm_css$Hash$murmurSeed, str)));
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast = F4(
	function (nestedStyles, rest, f, declarations) {
		var withoutParent = function (decls) {
			return A2(
				elm$core$Maybe$withDefault,
				_List_Nil,
				elm$core$List$tail(decls));
		};
		var nextResult = A2(
			rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
			rest,
			A2(
				elm$core$Maybe$withDefault,
				_List_Nil,
				rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration(declarations)));
		var newDeclarations = function () {
			var _n14 = _Utils_Tuple2(
				elm$core$List$head(nextResult),
				rtfeldman$elm_css$Css$Preprocess$Resolve$last(declarations));
			if ((!_n14.a.$) && (!_n14.b.$)) {
				var nextResultParent = _n14.a.a;
				var originalParent = _n14.b.a;
				return _Utils_ap(
					A2(
						elm$core$List$take,
						elm$core$List$length(declarations) - 1,
						declarations),
					_List_fromArray(
						[
							(!_Utils_eq(originalParent, nextResultParent)) ? nextResultParent : originalParent
						]));
			} else {
				return declarations;
			}
		}();
		var insertStylesToNestedDecl = function (lastDecl) {
			return elm$core$List$concat(
				A2(
					rtfeldman$elm_css$Css$Structure$mapLast,
					rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles(nestedStyles),
					A2(
						elm$core$List$map,
						elm$core$List$singleton,
						A2(rtfeldman$elm_css$Css$Structure$concatMapLastStyleBlock, f, lastDecl))));
		};
		var initialResult = A2(
			elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				elm$core$Maybe$map,
				insertStylesToNestedDecl,
				rtfeldman$elm_css$Css$Preprocess$Resolve$lastDeclaration(declarations)));
		return _Utils_ap(
			newDeclarations,
			_Utils_ap(
				withoutParent(initialResult),
				withoutParent(nextResult)));
	});
var rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles = F2(
	function (styles, declarations) {
		if (!styles.b) {
			return declarations;
		} else {
			switch (styles.a.$) {
				case 0:
					var property = styles.a.a;
					var rest = styles.b;
					return A2(
						rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						rest,
						A2(rtfeldman$elm_css$Css$Structure$appendProperty, property, declarations));
				case 1:
					var _n4 = styles.a;
					var selector = _n4.a;
					var nestedStyles = _n4.b;
					var rest = styles.b;
					return A4(
						rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast,
						nestedStyles,
						rest,
						rtfeldman$elm_css$Css$Structure$appendRepeatableToLastSelector(selector),
						declarations);
				case 2:
					var _n5 = styles.a;
					var selectorCombinator = _n5.a;
					var snippets = _n5.b;
					var rest = styles.b;
					var chain = F2(
						function (_n9, _n10) {
							var originalSequence = _n9.a;
							var originalTuples = _n9.b;
							var originalPseudoElement = _n9.c;
							var newSequence = _n10.a;
							var newTuples = _n10.b;
							var newPseudoElement = _n10.c;
							return A3(
								rtfeldman$elm_css$Css$Structure$Selector,
								originalSequence,
								_Utils_ap(
									originalTuples,
									A2(
										elm$core$List$cons,
										_Utils_Tuple2(selectorCombinator, newSequence),
										newTuples)),
								rtfeldman$elm_css$Css$Preprocess$Resolve$oneOf(
									_List_fromArray(
										[newPseudoElement, originalPseudoElement])));
						});
					var expandDeclaration = function (declaration) {
						switch (declaration.$) {
							case 0:
								var _n7 = declaration.a;
								var firstSelector = _n7.a;
								var otherSelectors = _n7.b;
								var nestedStyles = _n7.c;
								var newSelectors = A2(
									elm$core$List$concatMap,
									function (originalSelector) {
										return A2(
											elm$core$List$map,
											chain(originalSelector),
											A2(elm$core$List$cons, firstSelector, otherSelectors));
									},
									rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(declarations));
								var newDeclarations = function () {
									if (!newSelectors.b) {
										return _List_Nil;
									} else {
										var first = newSelectors.a;
										var remainder = newSelectors.b;
										return _List_fromArray(
											[
												rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
												A3(rtfeldman$elm_css$Css$Structure$StyleBlock, first, remainder, _List_Nil))
											]);
									}
								}();
								return A2(rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, nestedStyles, newDeclarations);
							case 1:
								var mediaQueries = declaration.a;
								var styleBlocks = declaration.b;
								return A2(rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule, mediaQueries, styleBlocks);
							case 2:
								var str = declaration.a;
								var otherSnippets = declaration.b;
								return A2(rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule, str, otherSnippets);
							case 3:
								var str1 = declaration.a;
								var str2 = declaration.b;
								var str3 = declaration.c;
								var str4 = declaration.d;
								var styleBlock = declaration.e;
								return A2(
									elm$core$List$map,
									A4(rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule, str1, str2, str3, str4),
									rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
							case 4:
								var str = declaration.a;
								var properties = declaration.b;
								return _List_fromArray(
									[
										A2(rtfeldman$elm_css$Css$Structure$PageRule, str, properties)
									]);
							case 5:
								var properties = declaration.a;
								return _List_fromArray(
									[
										rtfeldman$elm_css$Css$Structure$FontFace(properties)
									]);
							case 6:
								var properties = declaration.a;
								return _List_fromArray(
									[
										rtfeldman$elm_css$Css$Structure$Viewport(properties)
									]);
							case 7:
								var properties = declaration.a;
								return _List_fromArray(
									[
										rtfeldman$elm_css$Css$Structure$CounterStyle(properties)
									]);
							default:
								var tuples = declaration.a;
								return rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues(tuples);
						}
					};
					return elm$core$List$concat(
						_Utils_ap(
							_List_fromArray(
								[
									A2(rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, declarations)
								]),
							A2(
								elm$core$List$map,
								expandDeclaration,
								A2(elm$core$List$concatMap, rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets))));
				case 3:
					var _n11 = styles.a;
					var pseudoElement = _n11.a;
					var nestedStyles = _n11.b;
					var rest = styles.b;
					return A4(
						rtfeldman$elm_css$Css$Preprocess$Resolve$applyNestedStylesToLast,
						nestedStyles,
						rest,
						rtfeldman$elm_css$Css$Structure$appendPseudoElementToLastSelector(pseudoElement),
						declarations);
				case 5:
					var str = styles.a.a;
					var rest = styles.b;
					var name = rtfeldman$elm_css$Hash$fromString(str);
					var newProperty = 'animation-name:' + name;
					var newDeclarations = A2(
						rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						rest,
						A2(rtfeldman$elm_css$Css$Structure$appendProperty, newProperty, declarations));
					return A2(
						elm$core$List$append,
						newDeclarations,
						_List_fromArray(
							[
								rtfeldman$elm_css$Css$Structure$Keyframes(
								{cQ: str, c8: name})
							]));
				case 4:
					var _n12 = styles.a;
					var mediaQueries = _n12.a;
					var nestedStyles = _n12.b;
					var rest = styles.b;
					var extraDeclarations = function () {
						var _n13 = rtfeldman$elm_css$Css$Preprocess$Resolve$collectSelectors(declarations);
						if (!_n13.b) {
							return _List_Nil;
						} else {
							var firstSelector = _n13.a;
							var otherSelectors = _n13.b;
							return A2(
								elm$core$List$map,
								rtfeldman$elm_css$Css$Structure$styleBlockToMediaRule(mediaQueries),
								A2(
									rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
									nestedStyles,
									elm$core$List$singleton(
										rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
											A3(rtfeldman$elm_css$Css$Structure$StyleBlock, firstSelector, otherSelectors, _List_Nil)))));
						}
					}();
					return _Utils_ap(
						A2(rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles, rest, declarations),
						extraDeclarations);
				default:
					var otherStyles = styles.a.a;
					var rest = styles.b;
					return A2(
						rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
						_Utils_ap(otherStyles, rest),
						declarations);
			}
		}
	});
var rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock = function (_n2) {
	var firstSelector = _n2.a;
	var otherSelectors = _n2.b;
	var styles = _n2.c;
	return A2(
		rtfeldman$elm_css$Css$Preprocess$Resolve$applyStyles,
		styles,
		_List_fromArray(
			[
				rtfeldman$elm_css$Css$Structure$StyleBlockDeclaration(
				A3(rtfeldman$elm_css$Css$Structure$StyleBlock, firstSelector, otherSelectors, _List_Nil))
			]));
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$extract = function (snippetDeclarations) {
	if (!snippetDeclarations.b) {
		return _List_Nil;
	} else {
		var first = snippetDeclarations.a;
		var rest = snippetDeclarations.b;
		return _Utils_ap(
			rtfeldman$elm_css$Css$Preprocess$Resolve$toDeclarations(first),
			rtfeldman$elm_css$Css$Preprocess$Resolve$extract(rest));
	}
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule = F2(
	function (mediaQueries, styleBlocks) {
		var handleStyleBlock = function (styleBlock) {
			return A2(
				elm$core$List$map,
				rtfeldman$elm_css$Css$Preprocess$Resolve$toMediaRule(mediaQueries),
				rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
		};
		return A2(elm$core$List$concatMap, handleStyleBlock, styleBlocks);
	});
var rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule = F2(
	function (str, snippets) {
		var declarations = rtfeldman$elm_css$Css$Preprocess$Resolve$extract(
			A2(elm$core$List$concatMap, rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets));
		return _List_fromArray(
			[
				A2(rtfeldman$elm_css$Css$Structure$SupportsRule, str, declarations)
			]);
	});
var rtfeldman$elm_css$Css$Preprocess$Resolve$toDeclarations = function (snippetDeclaration) {
	switch (snippetDeclaration.$) {
		case 0:
			var styleBlock = snippetDeclaration.a;
			return rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock);
		case 1:
			var mediaQueries = snippetDeclaration.a;
			var styleBlocks = snippetDeclaration.b;
			return A2(rtfeldman$elm_css$Css$Preprocess$Resolve$resolveMediaRule, mediaQueries, styleBlocks);
		case 2:
			var str = snippetDeclaration.a;
			var snippets = snippetDeclaration.b;
			return A2(rtfeldman$elm_css$Css$Preprocess$Resolve$resolveSupportsRule, str, snippets);
		case 3:
			var str1 = snippetDeclaration.a;
			var str2 = snippetDeclaration.b;
			var str3 = snippetDeclaration.c;
			var str4 = snippetDeclaration.d;
			var styleBlock = snippetDeclaration.e;
			return A2(
				elm$core$List$map,
				A4(rtfeldman$elm_css$Css$Preprocess$Resolve$toDocumentRule, str1, str2, str3, str4),
				rtfeldman$elm_css$Css$Preprocess$Resolve$expandStyleBlock(styleBlock));
		case 4:
			var str = snippetDeclaration.a;
			var properties = snippetDeclaration.b;
			return _List_fromArray(
				[
					A2(rtfeldman$elm_css$Css$Structure$PageRule, str, properties)
				]);
		case 5:
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					rtfeldman$elm_css$Css$Structure$FontFace(properties)
				]);
		case 6:
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					rtfeldman$elm_css$Css$Structure$Viewport(properties)
				]);
		case 7:
			var properties = snippetDeclaration.a;
			return _List_fromArray(
				[
					rtfeldman$elm_css$Css$Structure$CounterStyle(properties)
				]);
		default:
			var tuples = snippetDeclaration.a;
			return rtfeldman$elm_css$Css$Preprocess$Resolve$resolveFontFeatureValues(tuples);
	}
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$toStructure = function (_n0) {
	var charset = _n0.bF;
	var imports = _n0.bR;
	var namespaces = _n0.b3;
	var snippets = _n0.cq;
	var declarations = rtfeldman$elm_css$Css$Preprocess$Resolve$extract(
		A2(elm$core$List$concatMap, rtfeldman$elm_css$Css$Preprocess$unwrapSnippet, snippets));
	return {bF: charset, cR: declarations, bR: imports, b3: namespaces};
};
var elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			elm$core$List$any,
			A2(elm$core$Basics$composeL, elm$core$Basics$not, isOkay),
			list);
	});
var rtfeldman$elm_css$Css$Structure$compactHelp = F2(
	function (declaration, _n0) {
		var keyframesByName = _n0.a;
		var declarations = _n0.b;
		switch (declaration.$) {
			case 0:
				var _n2 = declaration.a;
				var properties = _n2.c;
				return elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			case 1:
				var styleBlocks = declaration.b;
				return A2(
					elm$core$List$all,
					function (_n3) {
						var properties = _n3.c;
						return elm$core$List$isEmpty(properties);
					},
					styleBlocks) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			case 2:
				var otherDeclarations = declaration.b;
				return elm$core$List$isEmpty(otherDeclarations) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			case 3:
				return _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			case 4:
				var properties = declaration.b;
				return elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			case 5:
				var properties = declaration.a;
				return elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			case 6:
				var record = declaration.a;
				return elm$core$String$isEmpty(record.cQ) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					A3(elm$core$Dict$insert, record.c8, record.cQ, keyframesByName),
					declarations);
			case 7:
				var properties = declaration.a;
				return elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			case 8:
				var properties = declaration.a;
				return elm$core$List$isEmpty(properties) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
			default:
				var tuples = declaration.a;
				return A2(
					elm$core$List$all,
					function (_n4) {
						var properties = _n4.b;
						return elm$core$List$isEmpty(properties);
					},
					tuples) ? _Utils_Tuple2(keyframesByName, declarations) : _Utils_Tuple2(
					keyframesByName,
					A2(elm$core$List$cons, declaration, declarations));
		}
	});
var rtfeldman$elm_css$Css$Structure$withKeyframeDeclarations = F2(
	function (keyframesByName, compactedDeclarations) {
		return A2(
			elm$core$List$append,
			A2(
				elm$core$List$map,
				function (_n0) {
					var name = _n0.a;
					var decl = _n0.b;
					return rtfeldman$elm_css$Css$Structure$Keyframes(
						{cQ: decl, c8: name});
				},
				elm$core$Dict$toList(keyframesByName)),
			compactedDeclarations);
	});
var rtfeldman$elm_css$Css$Structure$compactStylesheet = function (_n0) {
	var charset = _n0.bF;
	var imports = _n0.bR;
	var namespaces = _n0.b3;
	var declarations = _n0.cR;
	var _n1 = A3(
		elm$core$List$foldr,
		rtfeldman$elm_css$Css$Structure$compactHelp,
		_Utils_Tuple2(elm$core$Dict$empty, _List_Nil),
		declarations);
	var keyframesByName = _n1.a;
	var compactedDeclarations = _n1.b;
	var finalDeclarations = A2(rtfeldman$elm_css$Css$Structure$withKeyframeDeclarations, keyframesByName, compactedDeclarations);
	return {bF: charset, cR: finalDeclarations, bR: imports, b3: namespaces};
};
var rtfeldman$elm_css$Css$Structure$Output$charsetToString = function (charset) {
	return A2(
		elm$core$Maybe$withDefault,
		'',
		A2(
			elm$core$Maybe$map,
			function (str) {
				return '@charset \"' + (str + '\"');
			},
			charset));
};
var rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString = function (expression) {
	return '(' + (expression.bM + (A2(
		elm$core$Maybe$withDefault,
		'',
		A2(
			elm$core$Maybe$map,
			elm$core$Basics$append(': '),
			expression.cz)) + ')'));
};
var rtfeldman$elm_css$Css$Structure$Output$mediaTypeToString = function (mediaType) {
	switch (mediaType) {
		case 0:
			return 'print';
		case 1:
			return 'screen';
		default:
			return 'speech';
	}
};
var rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString = function (mediaQuery) {
	var prefixWith = F3(
		function (str, mediaType, expressions) {
			return str + (' ' + A2(
				elm$core$String$join,
				' and ',
				A2(
					elm$core$List$cons,
					rtfeldman$elm_css$Css$Structure$Output$mediaTypeToString(mediaType),
					A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString, expressions))));
		});
	switch (mediaQuery.$) {
		case 0:
			var expressions = mediaQuery.a;
			return A2(
				elm$core$String$join,
				' and ',
				A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$mediaExpressionToString, expressions));
		case 1:
			var mediaType = mediaQuery.a;
			var expressions = mediaQuery.b;
			return A3(prefixWith, 'only', mediaType, expressions);
		case 2:
			var mediaType = mediaQuery.a;
			var expressions = mediaQuery.b;
			return A3(prefixWith, 'not', mediaType, expressions);
		default:
			var str = mediaQuery.a;
			return str;
	}
};
var rtfeldman$elm_css$Css$Structure$Output$importMediaQueryToString = F2(
	function (name, mediaQuery) {
		return '@import \"' + (name + (rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString(mediaQuery) + '\"'));
	});
var rtfeldman$elm_css$Css$Structure$Output$importToString = function (_n0) {
	var name = _n0.a;
	var mediaQueries = _n0.b;
	return A2(
		elm$core$String$join,
		'\n',
		A2(
			elm$core$List$map,
			rtfeldman$elm_css$Css$Structure$Output$importMediaQueryToString(name),
			mediaQueries));
};
var rtfeldman$elm_css$Css$Structure$Output$namespaceToString = function (_n0) {
	var prefix = _n0.a;
	var str = _n0.b;
	return '@namespace ' + (prefix + ('\"' + (str + '\"')));
};
var rtfeldman$elm_css$Css$Structure$Output$spaceIndent = '    ';
var rtfeldman$elm_css$Css$Structure$Output$indent = function (str) {
	return _Utils_ap(rtfeldman$elm_css$Css$Structure$Output$spaceIndent, str);
};
var rtfeldman$elm_css$Css$Structure$Output$noIndent = '';
var rtfeldman$elm_css$Css$Structure$Output$emitProperty = function (str) {
	return str + ';';
};
var rtfeldman$elm_css$Css$Structure$Output$emitProperties = function (properties) {
	return A2(
		elm$core$String$join,
		'\n',
		A2(
			elm$core$List$map,
			A2(elm$core$Basics$composeL, rtfeldman$elm_css$Css$Structure$Output$indent, rtfeldman$elm_css$Css$Structure$Output$emitProperty),
			properties));
};
var elm$core$String$append = _String_append;
var rtfeldman$elm_css$Css$Structure$Output$pseudoElementToString = function (_n0) {
	var str = _n0;
	return '::' + str;
};
var rtfeldman$elm_css$Css$Structure$Output$combinatorToString = function (combinator) {
	switch (combinator) {
		case 0:
			return '+';
		case 1:
			return '~';
		case 2:
			return '>';
		default:
			return '';
	}
};
var rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString = function (repeatableSimpleSelector) {
	switch (repeatableSimpleSelector.$) {
		case 0:
			var str = repeatableSimpleSelector.a;
			return '.' + str;
		case 1:
			var str = repeatableSimpleSelector.a;
			return '#' + str;
		case 2:
			var str = repeatableSimpleSelector.a;
			return ':' + str;
		default:
			var str = repeatableSimpleSelector.a;
			return '[' + (str + ']');
	}
};
var rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString = function (simpleSelectorSequence) {
	switch (simpleSelectorSequence.$) {
		case 0:
			var str = simpleSelectorSequence.a;
			var repeatableSimpleSelectors = simpleSelectorSequence.b;
			return A2(
				elm$core$String$join,
				'',
				A2(
					elm$core$List$cons,
					str,
					A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, repeatableSimpleSelectors)));
		case 1:
			var repeatableSimpleSelectors = simpleSelectorSequence.a;
			return elm$core$List$isEmpty(repeatableSimpleSelectors) ? '*' : A2(
				elm$core$String$join,
				'',
				A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, repeatableSimpleSelectors));
		default:
			var str = simpleSelectorSequence.a;
			var repeatableSimpleSelectors = simpleSelectorSequence.b;
			return A2(
				elm$core$String$join,
				'',
				A2(
					elm$core$List$cons,
					str,
					A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$repeatableSimpleSelectorToString, repeatableSimpleSelectors)));
	}
};
var rtfeldman$elm_css$Css$Structure$Output$selectorChainToString = function (_n0) {
	var combinator = _n0.a;
	var sequence = _n0.b;
	return A2(
		elm$core$String$join,
		' ',
		_List_fromArray(
			[
				rtfeldman$elm_css$Css$Structure$Output$combinatorToString(combinator),
				rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString(sequence)
			]));
};
var rtfeldman$elm_css$Css$Structure$Output$selectorToString = function (_n0) {
	var simpleSelectorSequence = _n0.a;
	var chain = _n0.b;
	var pseudoElement = _n0.c;
	var segments = A2(
		elm$core$List$cons,
		rtfeldman$elm_css$Css$Structure$Output$simpleSelectorSequenceToString(simpleSelectorSequence),
		A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$selectorChainToString, chain));
	var pseudoElementsString = A2(
		elm$core$String$join,
		'',
		_List_fromArray(
			[
				A2(
				elm$core$Maybe$withDefault,
				'',
				A2(elm$core$Maybe$map, rtfeldman$elm_css$Css$Structure$Output$pseudoElementToString, pseudoElement))
			]));
	return A2(
		elm$core$String$append,
		A2(
			elm$core$String$join,
			' ',
			A2(
				elm$core$List$filter,
				A2(elm$core$Basics$composeL, elm$core$Basics$not, elm$core$String$isEmpty),
				segments)),
		pseudoElementsString);
};
var rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock = F2(
	function (indentLevel, _n0) {
		var firstSelector = _n0.a;
		var otherSelectors = _n0.b;
		var properties = _n0.c;
		var selectorStr = A2(
			elm$core$String$join,
			', ',
			A2(
				elm$core$List$map,
				rtfeldman$elm_css$Css$Structure$Output$selectorToString,
				A2(elm$core$List$cons, firstSelector, otherSelectors)));
		return A2(
			elm$core$String$join,
			'',
			_List_fromArray(
				[
					selectorStr,
					' {\n',
					indentLevel,
					rtfeldman$elm_css$Css$Structure$Output$emitProperties(properties),
					'\n',
					indentLevel,
					'}'
				]));
	});
var rtfeldman$elm_css$Css$Structure$Output$prettyPrintDeclaration = function (decl) {
	switch (decl.$) {
		case 0:
			var styleBlock = decl.a;
			return A2(rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock, rtfeldman$elm_css$Css$Structure$Output$noIndent, styleBlock);
		case 1:
			var mediaQueries = decl.a;
			var styleBlocks = decl.b;
			var query = A2(
				elm$core$String$join,
				',\n',
				A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$mediaQueryToString, mediaQueries));
			var blocks = A2(
				elm$core$String$join,
				'\n\n',
				A2(
					elm$core$List$map,
					A2(
						elm$core$Basics$composeL,
						rtfeldman$elm_css$Css$Structure$Output$indent,
						rtfeldman$elm_css$Css$Structure$Output$prettyPrintStyleBlock(rtfeldman$elm_css$Css$Structure$Output$spaceIndent)),
					styleBlocks));
			return '@media ' + (query + (' {\n' + (blocks + '\n}')));
		case 2:
			return 'TODO';
		case 3:
			return 'TODO';
		case 4:
			return 'TODO';
		case 5:
			return 'TODO';
		case 6:
			var name = decl.a.c8;
			var declaration = decl.a.cQ;
			return '@keyframes ' + (name + (' {\n' + (declaration + '\n}')));
		case 7:
			return 'TODO';
		case 8:
			return 'TODO';
		default:
			return 'TODO';
	}
};
var rtfeldman$elm_css$Css$Structure$Output$prettyPrint = function (_n0) {
	var charset = _n0.bF;
	var imports = _n0.bR;
	var namespaces = _n0.b3;
	var declarations = _n0.cR;
	return A2(
		elm$core$String$join,
		'\n\n',
		A2(
			elm$core$List$filter,
			A2(elm$core$Basics$composeL, elm$core$Basics$not, elm$core$String$isEmpty),
			_List_fromArray(
				[
					rtfeldman$elm_css$Css$Structure$Output$charsetToString(charset),
					A2(
					elm$core$String$join,
					'\n',
					A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$importToString, imports)),
					A2(
					elm$core$String$join,
					'\n',
					A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$namespaceToString, namespaces)),
					A2(
					elm$core$String$join,
					'\n\n',
					A2(elm$core$List$map, rtfeldman$elm_css$Css$Structure$Output$prettyPrintDeclaration, declarations))
				])));
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$compileHelp = function (sheet) {
	return rtfeldman$elm_css$Css$Structure$Output$prettyPrint(
		rtfeldman$elm_css$Css$Structure$compactStylesheet(
			rtfeldman$elm_css$Css$Preprocess$Resolve$toStructure(sheet)));
};
var rtfeldman$elm_css$Css$Preprocess$Resolve$compile = function (styles) {
	return A2(
		elm$core$String$join,
		'\n\n',
		A2(elm$core$List$map, rtfeldman$elm_css$Css$Preprocess$Resolve$compileHelp, styles));
};
var rtfeldman$elm_css$Css$Preprocess$Snippet = elm$core$Basics$identity;
var rtfeldman$elm_css$Css$Preprocess$StyleBlock = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration = function (a) {
	return {$: 0, a: a};
};
var rtfeldman$elm_css$VirtualDom$Styled$makeSnippet = F2(
	function (styles, sequence) {
		var selector = A3(rtfeldman$elm_css$Css$Structure$Selector, sequence, _List_Nil, elm$core$Maybe$Nothing);
		return _List_fromArray(
			[
				rtfeldman$elm_css$Css$Preprocess$StyleBlockDeclaration(
				A3(rtfeldman$elm_css$Css$Preprocess$StyleBlock, selector, _List_Nil, styles))
			]);
	});
var rtfeldman$elm_css$VirtualDom$Styled$murmurSeed = 15739;
var rtfeldman$elm_css$VirtualDom$Styled$getClassname = function (styles) {
	return elm$core$List$isEmpty(styles) ? 'unstyled' : A2(
		elm$core$String$cons,
		'_',
		rtfeldman$elm_hex$Hex$toString(
			A2(
				Skinney$murmur3$Murmur3$hashString,
				rtfeldman$elm_css$VirtualDom$Styled$murmurSeed,
				rtfeldman$elm_css$Css$Preprocess$Resolve$compile(
					elm$core$List$singleton(
						rtfeldman$elm_css$Css$Preprocess$stylesheet(
							elm$core$List$singleton(
								A2(
									rtfeldman$elm_css$VirtualDom$Styled$makeSnippet,
									styles,
									rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(_List_Nil)))))))));
};
var rtfeldman$elm_css$Html$Styled$Internal$css = function (styles) {
	var classname = rtfeldman$elm_css$VirtualDom$Styled$getClassname(styles);
	var classProperty = A2(
		elm$virtual_dom$VirtualDom$property,
		'className',
		elm$json$Json$Encode$string(classname));
	return A3(rtfeldman$elm_css$VirtualDom$Styled$Attribute, classProperty, styles, classname);
};
var rtfeldman$elm_css$Html$Styled$Attributes$css = rtfeldman$elm_css$Html$Styled$Internal$css;
var author$project$DocsLayout$story = function (doc) {
	return A2(
		rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				rtfeldman$elm_css$Html$Styled$Attributes$css(
				_List_fromArray(
					[
						rtfeldman$elm_css$Css$fontFamily(rtfeldman$elm_css$Css$sansSerif),
						rtfeldman$elm_css$Css$padding(
						rtfeldman$elm_css$Css$px(20))
					]))
			]),
		_List_fromArray(
			[
				A3(
				rtfeldman$elm_css$Html$Styled$node,
				'style',
				_List_Nil,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$text('\n.elmsh-line:before {\n    content: attr(data-elmsh-lc);\n    display: inline-block;\n    text-align: right;\n    width: 30px;\n    padding: 0 20px 0 0;\n    opacity: 0.3;\n}\n\npre {\n    margin: 0\n}\n')
					])),
				A2(
				rtfeldman$elm_css$Html$Styled$h1,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$Attributes$css(
						_List_fromArray(
							[
								rtfeldman$elm_css$Css$marginTop(rtfeldman$elm_css$Css$zero)
							]))
					]),
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$text(doc.dw)
					])),
				A2(
				rtfeldman$elm_css$Html$Styled$div,
				_List_Nil,
				A2(
					elm$core$List$map,
					function (chapter) {
						return A2(
							rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											A2(
											rtfeldman$elm_css$Css$padding2,
											rtfeldman$elm_css$Css$px(30),
											rtfeldman$elm_css$Css$zero),
											A3(
											rtfeldman$elm_css$Css$borderTop3,
											rtfeldman$elm_css$Css$px(1),
											rtfeldman$elm_css$Css$solid,
											author$project$Isdc$Ui$Colors$Css$grayB)
										]))
								]),
							_List_fromArray(
								[
									A2(
									rtfeldman$elm_css$Html$Styled$h3,
									_List_fromArray(
										[
											rtfeldman$elm_css$Html$Styled$Attributes$css(
											_List_fromArray(
												[
													rtfeldman$elm_css$Css$marginTop(rtfeldman$elm_css$Css$zero)
												]))
										]),
									_List_fromArray(
										[
											rtfeldman$elm_css$Html$Styled$fromUnstyled(
											A2(author$project$DocsLayout$highLighted, chapter.bh, elm$core$Maybe$Nothing))
										])),
									A2(
									rtfeldman$elm_css$Html$Styled$div,
									_List_fromArray(
										[
											rtfeldman$elm_css$Html$Styled$Attributes$css(
											_List_fromArray(
												[
													A2(
													rtfeldman$elm_css$Css$margin2,
													rtfeldman$elm_css$Css$px(10),
													rtfeldman$elm_css$Css$zero),
													A3(
													rtfeldman$elm_css$Css$border3,
													rtfeldman$elm_css$Css$px(1),
													rtfeldman$elm_css$Css$solid,
													author$project$Isdc$Ui$Colors$Css$grayB),
													rtfeldman$elm_css$Css$borderRadius(
													rtfeldman$elm_css$Css$px(3)),
													rtfeldman$elm_css$Css$color(author$project$Isdc$Ui$Colors$Css$grayF),
													rtfeldman$elm_css$Css$marginBottom(
													rtfeldman$elm_css$Css$px(10)),
													rtfeldman$elm_css$Css$whiteSpace(rtfeldman$elm_css$Css$preWrap),
													rtfeldman$elm_css$Css$overflow(rtfeldman$elm_css$Css$auto)
												]))
										]),
									_List_fromArray(
										[
											rtfeldman$elm_css$Html$Styled$fromUnstyled(
											A2(
												author$project$DocsLayout$highLighted,
												chapter.bd,
												elm$core$Maybe$Just(1)))
										])),
									chapter.be
								]));
					},
					doc.cK))
			]));
};
var rtfeldman$elm_css$Css$Preprocess$ApplyStyles = function (a) {
	return {$: 6, a: a};
};
var rtfeldman$elm_css$Css$batch = rtfeldman$elm_css$Css$Preprocess$ApplyStyles;
var rtfeldman$elm_css$Css$fontSize = rtfeldman$elm_css$Css$prop1('font-size');
var rtfeldman$elm_css$Css$fontWeight = function (_n0) {
	var value = _n0.cz;
	return A2(rtfeldman$elm_css$Css$property, 'font-weight', value);
};
var rtfeldman$elm_css$Css$int = function (val) {
	return {
		E: 0,
		a0: 0,
		Q: 0,
		y: 0,
		aK: 0,
		I: val,
		aw: '',
		aT: 0,
		cz: elm$core$String$fromInt(val)
	};
};
var rtfeldman$elm_css$Css$letterSpacing = rtfeldman$elm_css$Css$prop1('letter-spacing');
var rtfeldman$elm_css$Css$lineHeight = rtfeldman$elm_css$Css$prop1('line-height');
var author$project$Isdc$Ui$Typography$body1 = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			rtfeldman$elm_css$Css$fontSize(
			rtfeldman$elm_css$Css$px(14)),
			rtfeldman$elm_css$Css$lineHeight(
			rtfeldman$elm_css$Css$px(20)),
			rtfeldman$elm_css$Css$fontWeight(
			rtfeldman$elm_css$Css$int(400)),
			rtfeldman$elm_css$Css$letterSpacing(
			rtfeldman$elm_css$Css$px(0.5))
		]));
var rtfeldman$elm_css$Css$border = rtfeldman$elm_css$Css$prop1('border');
var rtfeldman$elm_css$Css$cursor = rtfeldman$elm_css$Css$prop1('cursor');
var rtfeldman$elm_css$Css$margin = rtfeldman$elm_css$Css$prop1('margin');
var rtfeldman$elm_css$Css$outline = rtfeldman$elm_css$Css$prop1('outline');
var rtfeldman$elm_css$Css$pointer = {c: 0, cz: 'pointer'};
var rtfeldman$elm_css$Css$textTransform = rtfeldman$elm_css$Css$prop1('text-transform');
var rtfeldman$elm_css$Css$uppercase = {V: 0, cz: 'uppercase'};
var author$project$Isdc$Ui$Buttons$baseButtonStyles = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			rtfeldman$elm_css$Css$borderRadius(
			rtfeldman$elm_css$Css$px(3)),
			author$project$Isdc$Ui$Typography$body1,
			A2(
			rtfeldman$elm_css$Css$padding2,
			rtfeldman$elm_css$Css$px(10),
			rtfeldman$elm_css$Css$px(19)),
			rtfeldman$elm_css$Css$margin(
			rtfeldman$elm_css$Css$px(5)),
			rtfeldman$elm_css$Css$border(rtfeldman$elm_css$Css$zero),
			rtfeldman$elm_css$Css$outline(rtfeldman$elm_css$Css$zero),
			rtfeldman$elm_css$Css$cursor(rtfeldman$elm_css$Css$pointer),
			rtfeldman$elm_css$Css$textTransform(rtfeldman$elm_css$Css$uppercase)
		]));
var rtfeldman$elm_css$Css$cssFunction = F2(
	function (funcName, args) {
		return funcName + ('(' + (A2(elm$core$String$join, ', ', args) + ')'));
	});
var rtfeldman$elm_css$Css$rgba = F4(
	function (r, g, b, alpha) {
		return {
			aA: alpha,
			aD: b,
			x: 0,
			aG: g,
			aM: r,
			cz: A2(
				rtfeldman$elm_css$Css$cssFunction,
				'rgba',
				_Utils_ap(
					A2(
						elm$core$List$map,
						elm$core$String$fromInt,
						_List_fromArray(
							[r, g, b])),
					_List_fromArray(
						[
							elm$core$String$fromFloat(alpha)
						])))
		};
	});
var author$project$Isdc$Ui$Colors$Css$black40 = A4(rtfeldman$elm_css$Css$rgba, 0, 0, 0, 0.4);
var author$project$Isdc$Ui$Colors$Hex$green = '#3AB676';
var author$project$Isdc$Ui$Colors$Css$green = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$green);
var author$project$Isdc$Ui$Colors$Hex$greenB = '#34A369';
var author$project$Isdc$Ui$Colors$Css$greenB = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$greenB);
var author$project$Isdc$Ui$Colors$Css$greenC10 = A4(rtfeldman$elm_css$Css$rgba, 42, 145, 94, 0.1);
var author$project$Isdc$Ui$Colors$Hex$white = '#FFFFFF';
var author$project$Isdc$Ui$Colors$Css$white = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$white);
var author$project$Isdc$Ui$Colors$Css$white90 = A4(rtfeldman$elm_css$Css$rgba, 255, 255, 255, 0.9);
var rtfeldman$elm_css$Css$Preprocess$ExtendSelector = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var rtfeldman$elm_css$Css$Structure$PseudoClassSelector = function (a) {
	return {$: 2, a: a};
};
var rtfeldman$elm_css$Css$pseudoClass = function (_class) {
	return rtfeldman$elm_css$Css$Preprocess$ExtendSelector(
		rtfeldman$elm_css$Css$Structure$PseudoClassSelector(_class));
};
var rtfeldman$elm_css$Css$active = rtfeldman$elm_css$Css$pseudoClass('active');
var rtfeldman$elm_css$Css$backgroundColor = function (c) {
	return A2(rtfeldman$elm_css$Css$property, 'background-color', c.cz);
};
var rtfeldman$elm_css$Css$boxShadow = rtfeldman$elm_css$Css$prop1('box-shadow');
var rtfeldman$elm_css$Css$prop4 = F5(
	function (key, argA, argB, argC, argD) {
		return A2(
			rtfeldman$elm_css$Css$property,
			key,
			A2(
				elm$core$String$join,
				' ',
				_List_fromArray(
					[argA.cz, argB.cz, argC.cz, argD.cz])));
	});
var rtfeldman$elm_css$Css$boxShadow4 = rtfeldman$elm_css$Css$prop4('box-shadow');
var rtfeldman$elm_css$Css$prop5 = F6(
	function (key, argA, argB, argC, argD, argE) {
		return A2(
			rtfeldman$elm_css$Css$property,
			key,
			A2(
				elm$core$String$join,
				' ',
				_List_fromArray(
					[argA.cz, argB.cz, argC.cz, argD.cz, argE.cz])));
	});
var rtfeldman$elm_css$Css$boxShadow5 = rtfeldman$elm_css$Css$prop5('box-shadow');
var rtfeldman$elm_css$Css$disabled = rtfeldman$elm_css$Css$pseudoClass('disabled');
var rtfeldman$elm_css$Css$hover = rtfeldman$elm_css$Css$pseudoClass('hover');
var rtfeldman$elm_css$Css$none = {X: 0, bB: 0, r: 0, c: 0, j: 0, c0: 0, bS: 0, bi: 0, am: 0, P: 0, y: 0, e: 0, d: 0, bl: 0, a4: 0, df: 0, v: 0, a5: 0, dk: 0, at: 0, V: 0, t: 0, i: 0, dz: 0, cz: 'none'};
var rtfeldman$elm_css$Css$Transitions$BackgroundColor = 1;
var rtfeldman$elm_css$Css$Transitions$Transition = elm$core$Basics$identity;
var rtfeldman$elm_css$Css$Transitions$durationTransition = F2(
	function (animation, duration) {
		return {aV: animation, aX: elm$core$Maybe$Nothing, aZ: duration, a9: elm$core$Maybe$Nothing};
	});
var rtfeldman$elm_css$Css$Transitions$backgroundColor = rtfeldman$elm_css$Css$Transitions$durationTransition(1);
var rtfeldman$elm_css$Css$Transitions$BoxShadow = 25;
var rtfeldman$elm_css$Css$Transitions$boxShadow = rtfeldman$elm_css$Css$Transitions$durationTransition(25);
var rtfeldman$elm_css$Css$Transitions$propToString = function (prop) {
	switch (prop) {
		case 0:
			return 'background';
		case 1:
			return 'background-color';
		case 2:
			return 'background-position';
		case 3:
			return 'background-size';
		case 4:
			return 'border';
		case 5:
			return 'border-bottom';
		case 6:
			return 'border-bottom-color';
		case 7:
			return 'border-bottom-left-radius';
		case 8:
			return 'border-bottom-right-radius';
		case 9:
			return 'border-bottom-width';
		case 10:
			return 'border-color';
		case 11:
			return 'border-left';
		case 12:
			return 'border-left-color';
		case 13:
			return 'border-left-width';
		case 14:
			return 'border-radius';
		case 15:
			return 'border-right';
		case 16:
			return 'border-right-color';
		case 17:
			return 'border-right-width';
		case 18:
			return 'border-top';
		case 19:
			return 'border-top-color';
		case 20:
			return 'border-top-left-radius';
		case 21:
			return 'border-top-right-radius';
		case 22:
			return 'border-top-width';
		case 23:
			return 'border-width';
		case 24:
			return 'bottom';
		case 25:
			return 'box-shadow';
		case 26:
			return 'caret-color';
		case 27:
			return 'clip';
		case 28:
			return 'clip-path';
		case 29:
			return 'color';
		case 30:
			return 'column-count';
		case 31:
			return 'column-gap';
		case 32:
			return 'column-rule';
		case 33:
			return 'column-rule-color';
		case 34:
			return 'column-rule-width';
		case 35:
			return 'column-width';
		case 36:
			return 'columns';
		case 37:
			return 'filter';
		case 38:
			return 'flex';
		case 39:
			return 'flex-basis';
		case 40:
			return 'flex-grow';
		case 41:
			return 'flex-shrink';
		case 42:
			return 'font';
		case 43:
			return 'font-size';
		case 44:
			return 'font-size-adjust';
		case 45:
			return 'font-stretch';
		case 46:
			return 'font-variation-settings';
		case 47:
			return 'font-weight';
		case 48:
			return 'grid-column-gap';
		case 49:
			return 'grid-gap';
		case 50:
			return 'grid-row-gap';
		case 51:
			return 'height';
		case 52:
			return 'left';
		case 53:
			return 'letter-spacing';
		case 54:
			return 'line-height';
		case 55:
			return 'margin';
		case 56:
			return 'margin-bottom';
		case 57:
			return 'margin-left';
		case 58:
			return 'margin-right';
		case 59:
			return 'margin-top';
		case 60:
			return 'mask';
		case 61:
			return 'mask-position';
		case 62:
			return 'mask-size';
		case 63:
			return 'max-height';
		case 64:
			return 'max-width';
		case 65:
			return 'min-height';
		case 66:
			return 'min-width';
		case 67:
			return 'object-position';
		case 68:
			return 'offset';
		case 69:
			return 'offset-anchor';
		case 70:
			return 'offset-distance';
		case 71:
			return 'offset-path';
		case 72:
			return 'offset-rotate';
		case 73:
			return 'opacity';
		case 74:
			return 'order';
		case 75:
			return 'outline';
		case 76:
			return 'outline-color';
		case 77:
			return 'outline-offset';
		case 78:
			return 'outline-width';
		case 79:
			return 'padding';
		case 80:
			return 'padding-bottom';
		case 81:
			return 'padding-left';
		case 82:
			return 'padding-right';
		case 83:
			return 'padding-top';
		case 84:
			return 'right';
		case 85:
			return 'tab-size';
		case 86:
			return 'text-indent';
		case 87:
			return 'text-shadow';
		case 88:
			return 'top';
		case 89:
			return 'transform';
		case 90:
			return 'transform-origin';
		case 91:
			return 'vertical-align';
		case 92:
			return 'visibility';
		case 93:
			return 'width';
		case 94:
			return 'word-spacing';
		default:
			return 'z-index';
	}
};
var rtfeldman$elm_css$Css$Transitions$timeToString = function (time) {
	return elm$core$String$fromFloat(time) + 'ms';
};
var rtfeldman$elm_css$Css$Transitions$timingFunctionToString = function (tf) {
	switch (tf.$) {
		case 0:
			return 'ease';
		case 1:
			return 'linear';
		case 2:
			return 'ease-in';
		case 3:
			return 'ease-out';
		case 4:
			return 'ease-in-out';
		case 5:
			return 'step-start';
		case 6:
			return 'step-end';
		default:
			var _float = tf.a;
			var float2 = tf.b;
			var float3 = tf.c;
			var float4 = tf.d;
			return 'cubic-bezier(' + (elm$core$String$fromFloat(_float) + (' , ' + (elm$core$String$fromFloat(float2) + (' , ' + (elm$core$String$fromFloat(float3) + (' , ' + (elm$core$String$fromFloat(float4) + ')')))))));
	}
};
var rtfeldman$elm_css$Css$Transitions$transition = function (options) {
	var v = A3(
		elm$core$String$slice,
		0,
		-1,
		A3(
			elm$core$List$foldl,
			F2(
				function (_n0, s) {
					var animation = _n0.aV;
					var duration = _n0.aZ;
					var delay = _n0.aX;
					var timing = _n0.a9;
					return s + (A2(
						elm$core$String$join,
						' ',
						_List_fromArray(
							[
								rtfeldman$elm_css$Css$Transitions$propToString(animation),
								rtfeldman$elm_css$Css$Transitions$timeToString(duration),
								A2(
								elm$core$Maybe$withDefault,
								'',
								A2(elm$core$Maybe$map, rtfeldman$elm_css$Css$Transitions$timeToString, delay)),
								A2(
								elm$core$Maybe$withDefault,
								'',
								A2(elm$core$Maybe$map, rtfeldman$elm_css$Css$Transitions$timingFunctionToString, timing))
							])) + ',');
				}),
			'',
			options));
	return A2(rtfeldman$elm_css$Css$property, 'transition', v);
};
var author$project$Isdc$Ui$Buttons$greenButtonStyles = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			author$project$Isdc$Ui$Buttons$baseButtonStyles,
			rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$green),
			rtfeldman$elm_css$Css$color(author$project$Isdc$Ui$Colors$Css$white),
			A4(
			rtfeldman$elm_css$Css$boxShadow4,
			rtfeldman$elm_css$Css$zero,
			rtfeldman$elm_css$Css$zero,
			rtfeldman$elm_css$Css$zero,
			A4(rtfeldman$elm_css$Css$rgba, 0, 0, 0, 0)),
			rtfeldman$elm_css$Css$Transitions$transition(
			_List_fromArray(
				[
					rtfeldman$elm_css$Css$Transitions$boxShadow(200),
					rtfeldman$elm_css$Css$Transitions$backgroundColor(200)
				])),
			rtfeldman$elm_css$Css$hover(
			_List_fromArray(
				[
					A5(
					rtfeldman$elm_css$Css$boxShadow5,
					rtfeldman$elm_css$Css$zero,
					rtfeldman$elm_css$Css$px(2),
					rtfeldman$elm_css$Css$px(6),
					rtfeldman$elm_css$Css$px(-1),
					author$project$Isdc$Ui$Colors$Css$black40),
					rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$greenB)
				])),
			rtfeldman$elm_css$Css$disabled(
			_List_fromArray(
				[
					rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$greenC10),
					rtfeldman$elm_css$Css$color(author$project$Isdc$Ui$Colors$Css$white90),
					rtfeldman$elm_css$Css$boxShadow(rtfeldman$elm_css$Css$none)
				])),
			rtfeldman$elm_css$Css$active(
			_List_fromArray(
				[
					rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$green)
				]))
		]));
var author$project$Isdc$Ui$Colors$Css$green10 = A4(rtfeldman$elm_css$Css$rgba, 58, 182, 118, 0.1);
var author$project$Isdc$Ui$Colors$Css$white40 = A4(rtfeldman$elm_css$Css$rgba, 255, 255, 255, 0.4);
var author$project$Isdc$Ui$Buttons$greenButtonOverDarkStyles = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			author$project$Isdc$Ui$Buttons$greenButtonStyles,
			rtfeldman$elm_css$Css$disabled(
			_List_fromArray(
				[
					rtfeldman$elm_css$Css$color(author$project$Isdc$Ui$Colors$Css$white40),
					rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$green10)
				]))
		]));
var author$project$Isdc$Ui$Buttons$whiteButtonStyles = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			author$project$Isdc$Ui$Buttons$baseButtonStyles,
			rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$white),
			rtfeldman$elm_css$Css$color(author$project$Isdc$Ui$Colors$Css$black40),
			rtfeldman$elm_css$Css$hover(
			_List_fromArray(
				[
					rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$green10)
				]))
		]));
var author$project$Isdc$Ui$Colors$Hex$darkBlueC = '#21353B';
var author$project$Isdc$Ui$Colors$Css$darkBlueC = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$darkBlueC);
var rtfeldman$elm_css$Html$Styled$button = rtfeldman$elm_css$Html$Styled$node('button');
var elm$json$Json$Encode$bool = _Json_wrap;
var rtfeldman$elm_css$VirtualDom$Styled$property = F2(
	function (key, value) {
		return A3(
			rtfeldman$elm_css$VirtualDom$Styled$Attribute,
			A2(elm$virtual_dom$VirtualDom$property, key, value),
			_List_Nil,
			'');
	});
var rtfeldman$elm_css$Html$Styled$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			rtfeldman$elm_css$VirtualDom$Styled$property,
			key,
			elm$json$Json$Encode$bool(bool));
	});
var rtfeldman$elm_css$Html$Styled$Attributes$disabled = rtfeldman$elm_css$Html$Styled$Attributes$boolProperty('disabled');
var author$project$Buttons$view = function (_n0) {
	return author$project$DocsLayout$story(
		{
			cK: _List_fromArray(
				[
					{
					bd: 'div []\n[ button [ css [ greenButtonStyles ] ]\n    [ text "Hello world" ]\n, button\n    [ css [ greenButtonStyles ], disabled True ]\n    [ text "Hello world" ]\n]',
					be: A2(
						rtfeldman$elm_css$Html$Styled$div,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								rtfeldman$elm_css$Html$Styled$button,
								_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$Attributes$css(
										_List_fromArray(
											[author$project$Isdc$Ui$Buttons$greenButtonStyles]))
									]),
								_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$text('Hello world')
									])),
								A2(
								rtfeldman$elm_css$Html$Styled$button,
								_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$Attributes$css(
										_List_fromArray(
											[author$project$Isdc$Ui$Buttons$greenButtonStyles])),
										rtfeldman$elm_css$Html$Styled$Attributes$disabled(true)
									]),
								_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$text('Hello world')
									]))
							])),
					bh: 'greenButtonStyles : Css.Style'
				},
					{
					bd: 'button [ css [ greenButtonOverDarkStyles ], disabled True ] [ text \"Hello world\" ]',
					be: A2(
						rtfeldman$elm_css$Html$Styled$div,
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[
										rtfeldman$elm_css$Css$padding(
										rtfeldman$elm_css$Css$px(10)),
										rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$darkBlueC)
									]))
							]),
						_List_fromArray(
							[
								A2(
								rtfeldman$elm_css$Html$Styled$button,
								_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$Attributes$css(
										_List_fromArray(
											[author$project$Isdc$Ui$Buttons$greenButtonOverDarkStyles])),
										rtfeldman$elm_css$Html$Styled$Attributes$disabled(true)
									]),
								_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$text('Hello world')
									]))
							])),
					bh: 'greenButtonOverDarkStyles : Css.Style'
				},
					{
					bd: 'button [ css [ whiteButtonStyles ] ] [ text \"Hello world\" ]',
					be: A2(
						rtfeldman$elm_css$Html$Styled$button,
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[author$project$Isdc$Ui$Buttons$whiteButtonStyles]))
							]),
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$text('Hello world')
							])),
					bh: 'whiteButtonStyles : Css.Style'
				}
				]),
			dw: 'Isdc.Ui.Buttons exposing (..)'
		});
};
var author$project$Checkbox$ValueChange = 0;
var rtfeldman$elm_css$Css$border2 = rtfeldman$elm_css$Css$prop2('border');
var rtfeldman$elm_css$Css$height = rtfeldman$elm_css$Css$prop1('height');
var rtfeldman$elm_css$Css$marginRight = rtfeldman$elm_css$Css$prop1('margin-right');
var rtfeldman$elm_css$Css$position = rtfeldman$elm_css$Css$prop1('position');
var rtfeldman$elm_css$Css$relative = {aL: 0, cz: 'relative'};
var rtfeldman$elm_css$Css$width = rtfeldman$elm_css$Css$prop1('width');
var author$project$Isdc$Ui$Checkbox$baseCheckboxStyles = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			rtfeldman$elm_css$Css$width(
			rtfeldman$elm_css$Css$px(18)),
			rtfeldman$elm_css$Css$height(
			rtfeldman$elm_css$Css$px(18)),
			A2(
			rtfeldman$elm_css$Css$border2,
			rtfeldman$elm_css$Css$px(2),
			rtfeldman$elm_css$Css$solid),
			rtfeldman$elm_css$Css$borderRadius(
			rtfeldman$elm_css$Css$px(2)),
			rtfeldman$elm_css$Css$outline(rtfeldman$elm_css$Css$zero),
			rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$relative),
			rtfeldman$elm_css$Css$marginRight(
			rtfeldman$elm_css$Css$px(11)),
			rtfeldman$elm_css$Css$cursor(rtfeldman$elm_css$Css$pointer),
			rtfeldman$elm_css$Css$borderRadius(
			rtfeldman$elm_css$Css$px(2))
		]));
var rtfeldman$elm_css$Css$absolute = {aL: 0, cz: 'absolute'};
var rtfeldman$elm_css$Css$borderBottom3 = rtfeldman$elm_css$Css$prop3('border-bottom');
var rtfeldman$elm_css$Css$borderColor = function (c) {
	return A2(rtfeldman$elm_css$Css$property, 'border-color', c.cz);
};
var rtfeldman$elm_css$Css$borderLeft3 = rtfeldman$elm_css$Css$prop3('border-left');
var rtfeldman$elm_css$Css$angleConverter = F2(
	function (suffix, angleVal) {
		return {
			cF: 0,
			w: 0,
			cz: _Utils_ap(
				elm$core$String$fromFloat(angleVal),
				suffix)
		};
	});
var rtfeldman$elm_css$Css$deg = rtfeldman$elm_css$Css$angleConverter('deg');
var rtfeldman$elm_css$Css$left = rtfeldman$elm_css$Css$prop1('left');
var rtfeldman$elm_css$Css$PercentageUnits = 0;
var rtfeldman$elm_css$Css$pct = A2(rtfeldman$elm_css$Css$Internal$lengthConverter, 0, '%');
var rtfeldman$elm_css$Css$rotate = function (_n0) {
	var value = _n0.cz;
	return {
		i: 0,
		cz: A2(
			rtfeldman$elm_css$Css$cssFunction,
			'rotate',
			_List_fromArray(
				[value]))
	};
};
var rtfeldman$elm_css$Css$top = rtfeldman$elm_css$Css$prop1('top');
var rtfeldman$elm_css$Css$valuesOrNone = function (list) {
	return elm$core$List$isEmpty(list) ? {cz: 'none'} : {
		cz: A2(
			elm$core$String$join,
			' ',
			A2(
				elm$core$List$map,
				function ($) {
					return $.cz;
				},
				list))
	};
};
var rtfeldman$elm_css$Css$transforms = A2(
	elm$core$Basics$composeL,
	rtfeldman$elm_css$Css$prop1('transform'),
	rtfeldman$elm_css$Css$valuesOrNone);
var rtfeldman$elm_css$Css$translate2 = F2(
	function (tx, ty) {
		return {
			i: 0,
			cz: A2(
				rtfeldman$elm_css$Css$cssFunction,
				'translate',
				_List_fromArray(
					[tx.cz, ty.cz]))
		};
	});
var rtfeldman$elm_css$Html$Styled$span = rtfeldman$elm_css$Html$Styled$node('span');
var rtfeldman$elm_css$Html$Styled$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			rtfeldman$elm_css$VirtualDom$Styled$property,
			key,
			elm$json$Json$Encode$string(string));
	});
var rtfeldman$elm_css$Html$Styled$Attributes$class = rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('className');
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var rtfeldman$elm_css$VirtualDom$Styled$on = F2(
	function (eventName, handler) {
		return A3(
			rtfeldman$elm_css$VirtualDom$Styled$Attribute,
			A2(elm$virtual_dom$VirtualDom$on, eventName, handler),
			_List_Nil,
			'');
	});
var rtfeldman$elm_css$Html$Styled$Events$on = F2(
	function (event, decoder) {
		return A2(
			rtfeldman$elm_css$VirtualDom$Styled$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var rtfeldman$elm_css$Html$Styled$Events$onClick = function (msg) {
	return A2(
		rtfeldman$elm_css$Html$Styled$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var author$project$Isdc$Ui$Checkbox$checkBox = function (options) {
	return A2(
		rtfeldman$elm_css$Html$Styled$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				rtfeldman$elm_css$Html$Styled$button,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$Attributes$css(
						options._ ? _List_fromArray(
							[
								rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$green),
								author$project$Isdc$Ui$Checkbox$baseCheckboxStyles,
								rtfeldman$elm_css$Css$borderColor(author$project$Isdc$Ui$Colors$Css$green)
							]) : _List_fromArray(
							[
								author$project$Isdc$Ui$Checkbox$baseCheckboxStyles,
								rtfeldman$elm_css$Css$borderColor(author$project$Isdc$Ui$Colors$Css$black40)
							])),
						rtfeldman$elm_css$Html$Styled$Events$onClick(options.db),
						rtfeldman$elm_css$Html$Styled$Attributes$class('pb-test__checkbox')
					]),
				options._ ? _List_fromArray(
					[
						A2(
						rtfeldman$elm_css$Html$Styled$span,
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[
										A3(
										rtfeldman$elm_css$Css$borderBottom3,
										rtfeldman$elm_css$Css$px(2),
										rtfeldman$elm_css$Css$solid,
										author$project$Isdc$Ui$Colors$Css$white),
										A3(
										rtfeldman$elm_css$Css$borderLeft3,
										rtfeldman$elm_css$Css$px(2),
										rtfeldman$elm_css$Css$solid,
										author$project$Isdc$Ui$Colors$Css$white),
										rtfeldman$elm_css$Css$width(
										rtfeldman$elm_css$Css$px(10)),
										rtfeldman$elm_css$Css$height(
										rtfeldman$elm_css$Css$px(5)),
										rtfeldman$elm_css$Css$transforms(
										_List_fromArray(
											[
												A2(
												rtfeldman$elm_css$Css$translate2,
												rtfeldman$elm_css$Css$pct(-50),
												rtfeldman$elm_css$Css$pct(-65)),
												rtfeldman$elm_css$Css$rotate(
												rtfeldman$elm_css$Css$deg(-45))
											])),
										rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$absolute),
										rtfeldman$elm_css$Css$top(
										rtfeldman$elm_css$Css$pct(50)),
										rtfeldman$elm_css$Css$left(
										rtfeldman$elm_css$Css$pct(50))
									]))
							]),
						_List_Nil)
					]) : _List_Nil),
				rtfeldman$elm_css$Html$Styled$text(options.a1)
			]));
};
var author$project$Checkbox$view = function (model) {
	return author$project$DocsLayout$story(
		{
			cK: _List_fromArray(
				[
					{
					bd: '\ncheckBox\n    { checked = model.checked\n    , disabled = False\n    , onValueChange = ValueChange\n    , label = "Hello"\n    }\n',
					be: A2(
						rtfeldman$elm_css$Html$Styled$div,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Isdc$Ui$Checkbox$checkBox(
								{_: model._, aY: model.aY, a1: model.a1, db: 0})
							])),
					bh: 'checkBox : CheckboxOptions msg -> Html msg'
				}
				]),
			dw: 'Isdc.Ui.Checkbox exposing (..)'
		});
};
var author$project$Isdc$Ui$Colors$Hex$black = '#000000';
var author$project$Isdc$Ui$Colors$Css$black = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$black);
var author$project$Isdc$Ui$Colors$Css$black10 = A4(rtfeldman$elm_css$Css$rgba, 0, 0, 0, 0.1);
var author$project$Isdc$Ui$Colors$Css$black4 = A4(rtfeldman$elm_css$Css$rgba, 0, 0, 0, 4.0e-2);
var author$project$Isdc$Ui$Colors$Css$black60 = A4(rtfeldman$elm_css$Css$rgba, 0, 0, 0, 0.6);
var author$project$Isdc$Ui$Colors$Css$black90 = A4(rtfeldman$elm_css$Css$rgba, 0, 0, 0, 0.9);
var author$project$Isdc$Ui$Colors$Hex$blue = '#0075B8';
var author$project$Isdc$Ui$Colors$Css$blue = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$blue);
var author$project$Isdc$Ui$Colors$Css$blue10 = A4(rtfeldman$elm_css$Css$rgba, 0, 117, 184, 0.1);
var author$project$Isdc$Ui$Colors$Css$blue40 = A4(rtfeldman$elm_css$Css$rgba, 0, 117, 184, 0.4);
var author$project$Isdc$Ui$Colors$Hex$darkBlue = '#2A434A';
var author$project$Isdc$Ui$Colors$Css$darkBlue = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$darkBlue);
var author$project$Isdc$Ui$Colors$Css$darkBlue40 = A4(rtfeldman$elm_css$Css$rgba, 42, 67, 74, 0.4);
var author$project$Isdc$Ui$Colors$Hex$darkBlueB = '#435960';
var author$project$Isdc$Ui$Colors$Css$darkBlueB = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$darkBlueB);
var author$project$Isdc$Ui$Colors$Css$darkBlueB40 = A4(rtfeldman$elm_css$Css$rgba, 67, 89, 96, 0.4);
var author$project$Isdc$Ui$Colors$Css$darkBlueC40 = A4(rtfeldman$elm_css$Css$rgba, 33, 53, 59, 0.4);
var author$project$Isdc$Ui$Colors$Hex$darkBlueD = '#1D2E33';
var author$project$Isdc$Ui$Colors$Css$darkBlueD = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$darkBlueD);
var author$project$Isdc$Ui$Colors$Css$darkBlueD40 = A4(rtfeldman$elm_css$Css$rgba, 29, 46, 51, 0.4);
var author$project$Isdc$Ui$Colors$Hex$darkBlueE = '#080D0E';
var author$project$Isdc$Ui$Colors$Css$darkBlueE = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$darkBlueE);
var author$project$Isdc$Ui$Colors$Css$darkBlueE40 = A4(rtfeldman$elm_css$Css$rgba, 8, 13, 14, 0.4);
var author$project$Isdc$Ui$Colors$Hex$grayA = '#F5F5F5';
var author$project$Isdc$Ui$Colors$Css$grayA = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$grayA);
var author$project$Isdc$Ui$Colors$Hex$grayC = '#999999';
var author$project$Isdc$Ui$Colors$Css$grayC = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$grayC);
var author$project$Isdc$Ui$Colors$Hex$grayD = '#666666';
var author$project$Isdc$Ui$Colors$Css$grayD = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$grayD);
var author$project$Isdc$Ui$Colors$Hex$grayE = '#191919';
var author$project$Isdc$Ui$Colors$Css$grayE = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$grayE);
var author$project$Isdc$Ui$Colors$Css$green40 = A4(rtfeldman$elm_css$Css$rgba, 58, 182, 118, 0.4);
var author$project$Isdc$Ui$Colors$Hex$greenC = '#2A915E';
var author$project$Isdc$Ui$Colors$Css$greenC = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$greenC);
var author$project$Isdc$Ui$Colors$Hex$orange = '#F18B14';
var author$project$Isdc$Ui$Colors$Css$orange = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$orange);
var author$project$Isdc$Ui$Colors$Css$orange10 = A4(rtfeldman$elm_css$Css$rgba, 241, 139, 20, 0.1);
var author$project$Isdc$Ui$Colors$Css$orange40 = A4(rtfeldman$elm_css$Css$rgba, 241, 139, 20, 0.4);
var author$project$Isdc$Ui$Colors$Hex$red = '#EA5959';
var author$project$Isdc$Ui$Colors$Css$red = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$red);
var author$project$Isdc$Ui$Colors$Css$red10 = A4(rtfeldman$elm_css$Css$rgba, 234, 89, 89, 0.1);
var author$project$Isdc$Ui$Colors$Css$red40 = A4(rtfeldman$elm_css$Css$rgba, 234, 89, 89, 0.4);
var author$project$Isdc$Ui$Colors$Hex$tron = '#00C9FF';
var author$project$Isdc$Ui$Colors$Css$tron = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$tron);
var author$project$Isdc$Ui$Colors$Css$tron10 = A4(rtfeldman$elm_css$Css$rgba, 0, 201, 255, 0.1);
var author$project$Isdc$Ui$Colors$Css$tron40 = A4(rtfeldman$elm_css$Css$rgba, 0, 201, 255, 0.4);
var author$project$Isdc$Ui$Colors$Hex$tronB = '#006580';
var author$project$Isdc$Ui$Colors$Css$tronB = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$tronB);
var author$project$Isdc$Ui$Colors$Hex$tronC = '#004A5E';
var author$project$Isdc$Ui$Colors$Css$tronC = rtfeldman$elm_css$Css$hex(author$project$Isdc$Ui$Colors$Hex$tronC);
var author$project$Isdc$Ui$Colors$Css$white10 = A4(rtfeldman$elm_css$Css$rgba, 255, 255, 255, 0.1);
var author$project$Isdc$Ui$Colors$Css$white4 = A4(rtfeldman$elm_css$Css$rgba, 255, 255, 255, 4.0e-2);
var author$project$Isdc$Ui$Colors$Css$white60 = A4(rtfeldman$elm_css$Css$rgba, 255, 255, 255, 0.6);
var author$project$Colors$colors = _List_fromArray(
	[
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$green, 'green'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$greenB, 'greenB'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$greenC, 'greenC'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$greenC10, 'greenC10'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$green40, 'green40'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$green10, 'green10'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$blue, 'blue'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$blue40, 'blue40'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$blue10, 'blue10'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$orange, 'orange'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$orange40, 'orange40'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$orange10, 'orange10'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$red, 'red'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$red40, 'red40'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$red10, 'red10'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$tron, 'tron'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$tronB, 'tronB'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$tronC, 'tronC'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$tron40, 'tron40'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$tron10, 'tron10'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$darkBlue, 'darkBlue'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$darkBlue40, 'darkBlue40'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$darkBlueB, 'darkBlueB'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$darkBlueB40, 'darkBlueB40'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$darkBlueC, 'darkBlueC'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$darkBlueC40, 'darkBlueC40'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$darkBlueD, 'darkBlueD'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$darkBlueD40, 'darkBlueD40'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$darkBlueE, 'darkBlueE'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$darkBlueE40, 'darkBlueE40'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$grayA, 'grayA'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$grayB, 'grayB'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$grayC, 'grayC'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$grayD, 'grayD'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$grayE, 'grayE'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$grayF, 'grayF'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$black, 'black'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$black90, 'black90'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$black60, 'black60'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$black40, 'black40'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$black10, 'black10'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$black4, 'black4'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$white, 'white'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$white90, 'white90'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$white60, 'white60'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$white40, 'white40'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$white10, 'white10'),
		_Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$white4, 'white4')
	]);
var author$project$Colors$view = function (_n0) {
	return author$project$DocsLayout$story(
		{
			cK: A2(
				elm$core$List$map,
				function (color) {
					return {
						bd: '\ndiv\n    [ css\n        [ backgroundColor ' + (color.b + '\n        , width (px 100)\n        , height (px 100)\n        ]\n    ]\n                            '),
						be: A2(
							rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											rtfeldman$elm_css$Css$backgroundColor(color.a),
											rtfeldman$elm_css$Css$width(
											rtfeldman$elm_css$Css$px(100)),
											rtfeldman$elm_css$Css$height(
											rtfeldman$elm_css$Css$px(100))
										]))
								]),
							_List_Nil),
						bh: color.b + ' : Css.Color'
					};
				},
				author$project$Colors$colors),
			dw: 'Isdc.Ui.Colors.Css exposing (..)'
		});
};
var author$project$Dropdown$Cancel = {$: 1};
var author$project$Dropdown$Open = {$: 0};
var author$project$Dropdown$Save = {$: 2};
var author$project$Dropdown$Search = function (a) {
	return {$: 4, a: a};
};
var author$project$Dropdown$Toggle = function (a) {
	return {$: 3, a: a};
};
var author$project$Dropdown$dropdownProps = function (model) {
	return {
		cI: author$project$Dropdown$Cancel,
		cU: 'Some value you determine',
		c6: 'Hello world',
		J: model.J,
		dc: author$project$Dropdown$Open,
		dd: _List_fromArray(
			[
				{
				_: A2(
					elm$core$Maybe$withDefault,
					false,
					A2(elm$core$Dict$get, 'foo', model.an)),
				a1: 'Foo',
				cz: 'foo'
			},
				{
				_: A2(
					elm$core$Maybe$withDefault,
					false,
					A2(elm$core$Dict$get, 'bar', model.an)),
				a1: 'Bar',
				cz: 'bar'
			}
			]),
		dj: author$project$Dropdown$Save,
		aN: model.aN,
		dm: author$project$Dropdown$Search,
		dx: author$project$Dropdown$Toggle
	};
};
var author$project$Isdc$Ui$Dropdown$multiCheckDropdownItem = F2(
	function (option, toggleMessage) {
		return A2(
			rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							A2(
							rtfeldman$elm_css$Css$margin2,
							rtfeldman$elm_css$Css$px(10),
							rtfeldman$elm_css$Css$px(0))
						]))
				]),
			_List_fromArray(
				[
					author$project$Isdc$Ui$Checkbox$checkBox(
					{
						_: option._,
						aY: false,
						a1: option.a1,
						db: toggleMessage(option.cz)
					})
				]));
	});
var author$project$Isdc$Ui$Icons$iconBackgroundPath = 'M0 0h24v24H0z';
var elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var elm$svg$Svg$path = elm$svg$Svg$trustedNode('path');
var elm$svg$Svg$svg = elm$svg$Svg$trustedNode('svg');
var elm$svg$Svg$text = elm$virtual_dom$VirtualDom$text;
var elm$svg$Svg$title = elm$svg$Svg$trustedNode('title');
var elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var author$project$Isdc$Ui$Icons$searchIcon = F3(
	function (w, h, f) {
		var searchIconPath = 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z';
		return A2(
			elm$svg$Svg$svg,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$height(h),
					elm$svg$Svg$Attributes$width(w),
					elm$svg$Svg$Attributes$fill(f),
					elm$svg$Svg$Attributes$viewBox('0 0 24 24')
				]),
			_List_fromArray(
				[
					A2(
					elm$svg$Svg$title,
					_List_Nil,
					_List_fromArray(
						[
							elm$svg$Svg$text('Search Icon')
						])),
					A2(
					elm$svg$Svg$path,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$d(searchIconPath)
						]),
					_List_Nil),
					A2(
					elm$svg$Svg$path,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$d(author$project$Isdc$Ui$Icons$iconBackgroundPath),
							elm$svg$Svg$Attributes$fill('none')
						]),
					_List_Nil)
				]));
	});
var author$project$Isdc$Ui$Typography$caption = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			rtfeldman$elm_css$Css$fontSize(
			rtfeldman$elm_css$Css$px(12)),
			rtfeldman$elm_css$Css$lineHeight(
			rtfeldman$elm_css$Css$px(16)),
			rtfeldman$elm_css$Css$fontWeight(
			rtfeldman$elm_css$Css$int(400)),
			rtfeldman$elm_css$Css$letterSpacing(
			rtfeldman$elm_css$Css$px(0.5))
		]));
var rtfeldman$elm_css$Css$Internal$property = F2(
	function (key, value) {
		return rtfeldman$elm_css$Css$Preprocess$AppendProperty(key + (':' + value));
	});
var rtfeldman$elm_css$Css$Internal$getOverloadedProperty = F3(
	function (functionName, desiredKey, style) {
		getOverloadedProperty:
		while (true) {
			switch (style.$) {
				case 0:
					var str = style.a;
					var key = A2(
						elm$core$Maybe$withDefault,
						'',
						elm$core$List$head(
							A2(elm$core$String$split, ':', str)));
					return A2(rtfeldman$elm_css$Css$Internal$property, desiredKey, key);
				case 1:
					var selector = style.a;
					return A2(rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-selector'));
				case 2:
					var combinator = style.a;
					return A2(rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-combinator'));
				case 3:
					var pseudoElement = style.a;
					return A2(rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-pseudo-element setter'));
				case 4:
					return A2(rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-media-query'));
				case 5:
					return A2(rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-inapplicable-Style-for-keyframes'));
				default:
					if (!style.a.b) {
						return A2(rtfeldman$elm_css$Css$Internal$property, desiredKey, 'elm-css-error-cannot-apply-' + (functionName + '-with-empty-Style'));
					} else {
						if (!style.a.b.b) {
							var _n1 = style.a;
							var only = _n1.a;
							var $temp$functionName = functionName,
								$temp$desiredKey = desiredKey,
								$temp$style = only;
							functionName = $temp$functionName;
							desiredKey = $temp$desiredKey;
							style = $temp$style;
							continue getOverloadedProperty;
						} else {
							var _n2 = style.a;
							var first = _n2.a;
							var rest = _n2.b;
							var $temp$functionName = functionName,
								$temp$desiredKey = desiredKey,
								$temp$style = rtfeldman$elm_css$Css$Preprocess$ApplyStyles(rest);
							functionName = $temp$functionName;
							desiredKey = $temp$desiredKey;
							style = $temp$style;
							continue getOverloadedProperty;
						}
					}
			}
		}
	});
var rtfeldman$elm_css$Css$Internal$IncompatibleUnits = 0;
var rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty = A3(rtfeldman$elm_css$Css$Internal$lengthConverter, 0, '', 0);
var rtfeldman$elm_css$Css$alignItems = function (fn) {
	return A3(
		rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'alignItems',
		'align-items',
		fn(rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var rtfeldman$elm_css$Css$borderBox = {bc: 0, aW: 0, cz: 'border-box'};
var rtfeldman$elm_css$Css$borderRight3 = rtfeldman$elm_css$Css$prop3('border-right');
var rtfeldman$elm_css$Css$bottom = rtfeldman$elm_css$Css$prop1('bottom');
var rtfeldman$elm_css$Css$boxSizing = rtfeldman$elm_css$Css$prop1('box-sizing');
var rtfeldman$elm_css$Css$center = rtfeldman$elm_css$Css$prop1('center');
var rtfeldman$elm_css$Css$displayFlex = A2(rtfeldman$elm_css$Css$property, 'display', 'flex');
var rtfeldman$elm_css$Css$fixed = {aC: 0, aL: 0, a8: 0, cz: 'fixed'};
var rtfeldman$elm_css$Css$flexEnd = rtfeldman$elm_css$Css$prop1('flex-end');
var rtfeldman$elm_css$Css$justifyContent = function (fn) {
	return A3(
		rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'justifyContent',
		'justify-content',
		fn(rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var rtfeldman$elm_css$Css$maxHeight = rtfeldman$elm_css$Css$prop1('max-height');
var rtfeldman$elm_css$Css$minWidth = rtfeldman$elm_css$Css$prop1('min-width');
var rtfeldman$elm_css$Css$paddingTop = rtfeldman$elm_css$Css$prop1('padding-top');
var rtfeldman$elm_css$Css$rgb = F3(
	function (r, g, b) {
		return {
			aA: 1,
			aD: b,
			x: 0,
			aG: g,
			aM: r,
			cz: A2(
				rtfeldman$elm_css$Css$cssFunction,
				'rgb',
				A2(
					elm$core$List$map,
					elm$core$String$fromInt,
					_List_fromArray(
						[r, g, b])))
		};
	});
var rtfeldman$elm_css$Css$right = rtfeldman$elm_css$Css$prop1('right');
var rtfeldman$elm_css$Css$textAlign = function (fn) {
	return A3(
		rtfeldman$elm_css$Css$Internal$getOverloadedProperty,
		'textAlign',
		'text-align',
		fn(rtfeldman$elm_css$Css$Internal$lengthForOverloadedProperty));
};
var rtfeldman$elm_css$Css$transform = function (only) {
	return rtfeldman$elm_css$Css$transforms(
		_List_fromArray(
			[only]));
};
var rtfeldman$elm_css$Css$translateY = function (_n0) {
	var value = _n0.cz;
	return {
		i: 0,
		cz: A2(
			rtfeldman$elm_css$Css$cssFunction,
			'translateY',
			_List_fromArray(
				[value]))
	};
};
var rtfeldman$elm_css$Css$transparent = {x: 0, cz: 'transparent'};
var rtfeldman$elm_css$Css$zIndex = rtfeldman$elm_css$Css$prop1('z-index');
var rtfeldman$elm_css$Html$Styled$input = rtfeldman$elm_css$Html$Styled$node('input');
var rtfeldman$elm_css$Html$Styled$label = rtfeldman$elm_css$Html$Styled$node('label');
var rtfeldman$elm_css$Html$Styled$Attributes$placeholder = rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('placeholder');
var rtfeldman$elm_css$Html$Styled$Attributes$value = rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('value');
var rtfeldman$elm_css$Html$Styled$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 1, a: a};
};
var rtfeldman$elm_css$Html$Styled$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			rtfeldman$elm_css$VirtualDom$Styled$on,
			event,
			elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var elm$json$Json$Decode$field = _Json_decodeField;
var elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3(elm$core$List$foldr, elm$json$Json$Decode$field, decoder, fields);
	});
var elm$json$Json$Decode$string = _Json_decodeString;
var rtfeldman$elm_css$Html$Styled$Events$targetValue = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	elm$json$Json$Decode$string);
var rtfeldman$elm_css$Html$Styled$Events$onInput = function (tagger) {
	return A2(
		rtfeldman$elm_css$Html$Styled$Events$stopPropagationOn,
		'input',
		A2(
			elm$json$Json$Decode$map,
			rtfeldman$elm_css$Html$Styled$Events$alwaysStop,
			A2(elm$json$Json$Decode$map, tagger, rtfeldman$elm_css$Html$Styled$Events$targetValue)));
};
var author$project$Isdc$Ui$Dropdown$multiCheckDropdown = function (dropDownArgs) {
	var _n0 = dropDownArgs;
	var labelText = _n0.c6;
	var dropDownValue = _n0.cU;
	var options = _n0.dd;
	var open = _n0.J;
	var openMessage = _n0.dc;
	var toggleMessage = _n0.dx;
	var searchMessage = _n0.dm;
	var search = _n0.aN;
	var saveMessage = _n0.dj;
	var cancelMessage = _n0.cI;
	return A2(
		rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				rtfeldman$elm_css$Html$Styled$Attributes$css(
				_List_fromArray(
					[
						rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$relative)
					]))
			]),
		_List_fromArray(
			[
				A2(
				rtfeldman$elm_css$Html$Styled$label,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$Attributes$css(
						_List_fromArray(
							[author$project$Isdc$Ui$Typography$caption]))
					]),
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$text(labelText)
					])),
				A2(
				rtfeldman$elm_css$Html$Styled$button,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$Attributes$css(
						_List_fromArray(
							[
								rtfeldman$elm_css$Css$color(author$project$Isdc$Ui$Colors$Css$black60),
								rtfeldman$elm_css$Css$fontSize(
								rtfeldman$elm_css$Css$px(16)),
								rtfeldman$elm_css$Css$border(rtfeldman$elm_css$Css$zero),
								A3(
								rtfeldman$elm_css$Css$borderBottom3,
								rtfeldman$elm_css$Css$px(1),
								rtfeldman$elm_css$Css$solid,
								author$project$Isdc$Ui$Colors$Css$black60),
								rtfeldman$elm_css$Css$width(
								rtfeldman$elm_css$Css$pct(100)),
								rtfeldman$elm_css$Css$textAlign(rtfeldman$elm_css$Css$left),
								rtfeldman$elm_css$Css$outline(rtfeldman$elm_css$Css$zero),
								rtfeldman$elm_css$Css$cursor(rtfeldman$elm_css$Css$pointer),
								A2(
								rtfeldman$elm_css$Css$padding2,
								rtfeldman$elm_css$Css$px(10),
								rtfeldman$elm_css$Css$zero)
							])),
						rtfeldman$elm_css$Html$Styled$Events$onClick(openMessage)
					]),
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$text(dropDownValue),
						A2(
						rtfeldman$elm_css$Html$Styled$span,
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[
										rtfeldman$elm_css$Css$width(rtfeldman$elm_css$Css$zero),
										rtfeldman$elm_css$Css$height(rtfeldman$elm_css$Css$zero),
										A3(
										rtfeldman$elm_css$Css$borderLeft3,
										rtfeldman$elm_css$Css$px(5),
										rtfeldman$elm_css$Css$solid,
										rtfeldman$elm_css$Css$transparent),
										A3(
										rtfeldman$elm_css$Css$borderRight3,
										rtfeldman$elm_css$Css$px(5),
										rtfeldman$elm_css$Css$solid,
										rtfeldman$elm_css$Css$transparent),
										A3(
										rtfeldman$elm_css$Css$borderTop3,
										rtfeldman$elm_css$Css$px(5),
										rtfeldman$elm_css$Css$solid,
										author$project$Isdc$Ui$Colors$Css$black60),
										rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$absolute),
										rtfeldman$elm_css$Css$top(
										rtfeldman$elm_css$Css$pct(50)),
										rtfeldman$elm_css$Css$right(
										rtfeldman$elm_css$Css$px(10)),
										rtfeldman$elm_css$Css$transform(
										rtfeldman$elm_css$Css$translateY(
											rtfeldman$elm_css$Css$pct(-50)))
									]))
							]),
						_List_Nil)
					])),
				open ? A2(
				rtfeldman$elm_css$Html$Styled$div,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						rtfeldman$elm_css$Html$Styled$div,
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[
										rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$fixed),
										rtfeldman$elm_css$Css$top(rtfeldman$elm_css$Css$zero),
										rtfeldman$elm_css$Css$left(rtfeldman$elm_css$Css$zero),
										rtfeldman$elm_css$Css$bottom(rtfeldman$elm_css$Css$zero),
										rtfeldman$elm_css$Css$right(rtfeldman$elm_css$Css$zero),
										rtfeldman$elm_css$Css$zIndex(
										rtfeldman$elm_css$Css$int(100))
									])),
								rtfeldman$elm_css$Html$Styled$Events$onClick(openMessage)
							]),
						_List_Nil),
						A2(
						rtfeldman$elm_css$Html$Styled$div,
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[
										rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$absolute),
										rtfeldman$elm_css$Css$top(rtfeldman$elm_css$Css$zero),
										A4(
										rtfeldman$elm_css$Css$boxShadow4,
										rtfeldman$elm_css$Css$px(2),
										rtfeldman$elm_css$Css$px(4),
										rtfeldman$elm_css$Css$px(10),
										author$project$Isdc$Ui$Colors$Css$black40),
										rtfeldman$elm_css$Css$backgroundColor(
										A3(rtfeldman$elm_css$Css$rgb, 255, 255, 255)),
										rtfeldman$elm_css$Css$padding(
										rtfeldman$elm_css$Css$px(15)),
										rtfeldman$elm_css$Css$zIndex(
										rtfeldman$elm_css$Css$int(101)),
										rtfeldman$elm_css$Css$width(
										rtfeldman$elm_css$Css$pct(100)),
										rtfeldman$elm_css$Css$boxSizing(rtfeldman$elm_css$Css$borderBox),
										rtfeldman$elm_css$Css$borderRadius(
										rtfeldman$elm_css$Css$px(3))
									]))
							]),
						_List_fromArray(
							[
								A2(
								rtfeldman$elm_css$Html$Styled$div,
								_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$Attributes$css(
										_List_fromArray(
											[
												A3(
												rtfeldman$elm_css$Css$border3,
												rtfeldman$elm_css$Css$px(1),
												rtfeldman$elm_css$Css$solid,
												author$project$Isdc$Ui$Colors$Css$black40),
												rtfeldman$elm_css$Css$borderRadius(
												rtfeldman$elm_css$Css$px(3)),
												rtfeldman$elm_css$Css$alignItems(rtfeldman$elm_css$Css$center),
												rtfeldman$elm_css$Css$displayFlex
											]))
									]),
								_List_fromArray(
									[
										A2(
										rtfeldman$elm_css$Html$Styled$span,
										_List_fromArray(
											[
												rtfeldman$elm_css$Html$Styled$Attributes$css(
												_List_fromArray(
													[
														rtfeldman$elm_css$Css$displayFlex,
														A2(
														rtfeldman$elm_css$Css$margin2,
														rtfeldman$elm_css$Css$zero,
														rtfeldman$elm_css$Css$px(6)),
														rtfeldman$elm_css$Css$alignItems(rtfeldman$elm_css$Css$center)
													]))
											]),
										_List_fromArray(
											[
												rtfeldman$elm_css$Html$Styled$fromUnstyled(
												A3(author$project$Isdc$Ui$Icons$searchIcon, '24px', '24px', author$project$Isdc$Ui$Colors$Hex$grayC))
											])),
										A2(
										rtfeldman$elm_css$Html$Styled$input,
										_List_fromArray(
											[
												rtfeldman$elm_css$Html$Styled$Attributes$css(
												_List_fromArray(
													[
														rtfeldman$elm_css$Css$border(rtfeldman$elm_css$Css$zero),
														author$project$Isdc$Ui$Typography$body1,
														rtfeldman$elm_css$Css$outline(rtfeldman$elm_css$Css$zero),
														rtfeldman$elm_css$Css$height(
														rtfeldman$elm_css$Css$px(36)),
														rtfeldman$elm_css$Css$color(author$project$Isdc$Ui$Colors$Css$black40)
													])),
												rtfeldman$elm_css$Html$Styled$Events$onInput(searchMessage),
												rtfeldman$elm_css$Html$Styled$Attributes$value(search),
												rtfeldman$elm_css$Html$Styled$Attributes$placeholder('Search')
											]),
										_List_Nil)
									])),
								A2(
								rtfeldman$elm_css$Html$Styled$div,
								_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$Attributes$css(
										_List_fromArray(
											[
												rtfeldman$elm_css$Css$paddingTop(
												rtfeldman$elm_css$Css$px(10))
											]))
									]),
								_List_fromArray(
									[
										A2(
										rtfeldman$elm_css$Html$Styled$div,
										_List_fromArray(
											[
												rtfeldman$elm_css$Html$Styled$Attributes$css(
												_List_fromArray(
													[
														rtfeldman$elm_css$Css$maxHeight(
														rtfeldman$elm_css$Css$px(200)),
														rtfeldman$elm_css$Css$overflow(rtfeldman$elm_css$Css$auto)
													]))
											]),
										A2(
											elm$core$List$map,
											function (option) {
												return A2(author$project$Isdc$Ui$Dropdown$multiCheckDropdownItem, option, toggleMessage);
											},
											options)),
										A2(
										rtfeldman$elm_css$Html$Styled$div,
										_List_fromArray(
											[
												rtfeldman$elm_css$Html$Styled$Attributes$css(
												_List_fromArray(
													[
														rtfeldman$elm_css$Css$displayFlex,
														rtfeldman$elm_css$Css$justifyContent(rtfeldman$elm_css$Css$flexEnd)
													]))
											]),
										_List_fromArray(
											[
												A2(
												rtfeldman$elm_css$Html$Styled$button,
												_List_fromArray(
													[
														rtfeldman$elm_css$Html$Styled$Attributes$css(
														_List_fromArray(
															[
																author$project$Isdc$Ui$Buttons$whiteButtonStyles,
																rtfeldman$elm_css$Css$minWidth(
																rtfeldman$elm_css$Css$px(88))
															])),
														rtfeldman$elm_css$Html$Styled$Events$onClick(cancelMessage)
													]),
												_List_fromArray(
													[
														rtfeldman$elm_css$Html$Styled$text('Cancel')
													])),
												A2(
												rtfeldman$elm_css$Html$Styled$button,
												_List_fromArray(
													[
														rtfeldman$elm_css$Html$Styled$Attributes$css(
														_List_fromArray(
															[
																author$project$Isdc$Ui$Buttons$greenButtonStyles,
																rtfeldman$elm_css$Css$minWidth(
																rtfeldman$elm_css$Css$px(88))
															])),
														rtfeldman$elm_css$Html$Styled$Events$onClick(saveMessage)
													]),
												_List_fromArray(
													[
														rtfeldman$elm_css$Html$Styled$text('Save')
													]))
											]))
									]))
							])),
						A2(rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_Nil)
					])) : A2(rtfeldman$elm_css$Html$Styled$div, _List_Nil, _List_Nil)
			]));
};
var author$project$Dropdown$view = function (model) {
	var props = author$project$Dropdown$dropdownProps(model);
	return author$project$DocsLayout$story(
		{
			cK: _List_fromArray(
				[
					{
					bd: '\nlet model =\n    { labelText = "Hello world"\n    , dropDownValue = "Some value you determine"\n    , options =\n        [ { label = "Foo"\n          , value = "foo"\n          , checked = False\n          }\n        , { label = "Bar"\n          , value = "bar"\n          , checked = False\n          }\n        ]\n    , open = False\n    , openMessage = Open\n    , toggleMessage = Toggle\n    , searchMessage = Search\n    , saveMessage = Save\n    , cancelMessage = Cancel\n    , search = ""\n    }\n\nin multiCheckDropdown model',
					be: A2(
						rtfeldman$elm_css$Html$Styled$div,
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[
										rtfeldman$elm_css$Css$marginBottom(
										rtfeldman$elm_css$Css$px(200))
									]))
							]),
						_List_fromArray(
							[
								author$project$Isdc$Ui$Dropdown$multiCheckDropdown(props)
							])),
					bh: 'multiCheckDropdown : DropDownProperties msg -> Html msg'
				}
				]),
			dw: 'Isdc.Ui.Dropdown exposing (..)'
		});
};
var author$project$DropdownDots$Choose = function (a) {
	return {$: 0, a: a};
};
var author$project$DropdownDots$Close = {$: 2};
var author$project$DropdownDots$Open = {$: 1};
var author$project$DropdownDots$ToggleDirection = {$: 3};
var rtfeldman$elm_css$Css$block = {j: 0, cz: 'block'};
var rtfeldman$elm_css$Css$display = rtfeldman$elm_css$Css$prop1('display');
var author$project$Isdc$Ui$DropdownDots$dot = A2(
	rtfeldman$elm_css$Html$Styled$span,
	_List_fromArray(
		[
			rtfeldman$elm_css$Html$Styled$Attributes$css(
			_List_fromArray(
				[
					rtfeldman$elm_css$Css$width(
					rtfeldman$elm_css$Css$px(4)),
					rtfeldman$elm_css$Css$height(
					rtfeldman$elm_css$Css$px(4)),
					rtfeldman$elm_css$Css$borderRadius(
					rtfeldman$elm_css$Css$pct(50)),
					rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$white60),
					A2(
					rtfeldman$elm_css$Css$margin2,
					rtfeldman$elm_css$Css$px(2),
					rtfeldman$elm_css$Css$zero),
					rtfeldman$elm_css$Css$display(rtfeldman$elm_css$Css$block),
					rtfeldman$elm_css$Css$cursor(rtfeldman$elm_css$Css$pointer)
				]))
		]),
	_List_Nil);
var rtfeldman$elm_css$Css$Preprocess$WithPseudoElement = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var rtfeldman$elm_css$Css$Structure$PseudoElement = elm$core$Basics$identity;
var rtfeldman$elm_css$Css$pseudoElement = function (element) {
	return rtfeldman$elm_css$Css$Preprocess$WithPseudoElement(element);
};
var rtfeldman$elm_css$Css$after = rtfeldman$elm_css$Css$pseudoElement('after');
var author$project$Isdc$Ui$DropdownDots$dropdownBoxCss = function (direction) {
	return rtfeldman$elm_css$Css$batch(
		_List_fromArray(
			[
				rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$white),
				rtfeldman$elm_css$Css$borderRadius(
				rtfeldman$elm_css$Css$px(3)),
				rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$absolute),
				function () {
				if (!direction) {
					return rtfeldman$elm_css$Css$bottom;
				} else {
					return rtfeldman$elm_css$Css$top;
				}
			}()(
				rtfeldman$elm_css$Css$pct(100)),
				rtfeldman$elm_css$Css$right(rtfeldman$elm_css$Css$zero),
				rtfeldman$elm_css$Css$minWidth(
				rtfeldman$elm_css$Css$px(120)),
				A2(
				rtfeldman$elm_css$Css$padding2,
				rtfeldman$elm_css$Css$px(12),
				rtfeldman$elm_css$Css$zero),
				rtfeldman$elm_css$Css$zIndex(
				rtfeldman$elm_css$Css$int(10)),
				rtfeldman$elm_css$Css$after(
				_List_fromArray(
					[
						rtfeldman$elm_css$Css$width(rtfeldman$elm_css$Css$zero),
						rtfeldman$elm_css$Css$height(rtfeldman$elm_css$Css$zero),
						A3(
						rtfeldman$elm_css$Css$borderLeft3,
						rtfeldman$elm_css$Css$px(4),
						rtfeldman$elm_css$Css$solid,
						rtfeldman$elm_css$Css$transparent),
						A3(
						rtfeldman$elm_css$Css$borderRight3,
						rtfeldman$elm_css$Css$px(4),
						rtfeldman$elm_css$Css$solid,
						rtfeldman$elm_css$Css$transparent),
						rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$absolute),
						function () {
						if (!direction) {
							return rtfeldman$elm_css$Css$batch(
								_List_fromArray(
									[
										A3(
										rtfeldman$elm_css$Css$borderTop3,
										rtfeldman$elm_css$Css$px(4),
										rtfeldman$elm_css$Css$solid,
										author$project$Isdc$Ui$Colors$Css$white),
										rtfeldman$elm_css$Css$top(
										rtfeldman$elm_css$Css$pct(100))
									]));
						} else {
							return rtfeldman$elm_css$Css$batch(
								_List_fromArray(
									[
										A3(
										rtfeldman$elm_css$Css$borderBottom3,
										rtfeldman$elm_css$Css$px(4),
										rtfeldman$elm_css$Css$solid,
										author$project$Isdc$Ui$Colors$Css$white),
										rtfeldman$elm_css$Css$bottom(
										rtfeldman$elm_css$Css$pct(100))
									]));
						}
					}(),
						rtfeldman$elm_css$Css$right(
						rtfeldman$elm_css$Css$px(14)),
						A2(rtfeldman$elm_css$Css$property, 'content', '\'\'')
					]))
			]));
};
var author$project$Isdc$Ui$Typography$subhead1 = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			rtfeldman$elm_css$Css$fontSize(
			rtfeldman$elm_css$Css$px(16)),
			rtfeldman$elm_css$Css$lineHeight(
			rtfeldman$elm_css$Css$px(24)),
			rtfeldman$elm_css$Css$fontWeight(
			rtfeldman$elm_css$Css$int(400)),
			rtfeldman$elm_css$Css$letterSpacing(
			rtfeldman$elm_css$Css$px(0.5))
		]));
var rtfeldman$elm_css$Css$noWrap = {aF: 0, a_: 0, cz: 'nowrap', L: 0};
var rtfeldman$elm_css$Css$padding4 = rtfeldman$elm_css$Css$prop4('padding');
var author$project$Isdc$Ui$DropdownDots$dropDown = F4(
	function (fields, choose, direction, close) {
		return A2(
			rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							author$project$Isdc$Ui$DropdownDots$dropdownBoxCss(direction)
						]))
				]),
			A2(
				elm$core$List$map,
				function (field) {
					return A2(
						rtfeldman$elm_css$Html$Styled$div,
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$Events$onClick(
								choose(field.cz)),
								rtfeldman$elm_css$Html$Styled$Attributes$class('pb-test__select-option'),
								rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[
										author$project$Isdc$Ui$Typography$subhead1,
										rtfeldman$elm_css$Css$border(rtfeldman$elm_css$Css$zero),
										rtfeldman$elm_css$Css$cursor(rtfeldman$elm_css$Css$pointer),
										rtfeldman$elm_css$Css$width(
										rtfeldman$elm_css$Css$pct(100)),
										rtfeldman$elm_css$Css$whiteSpace(rtfeldman$elm_css$Css$noWrap),
										A4(
										rtfeldman$elm_css$Css$padding4,
										rtfeldman$elm_css$Css$px(6),
										rtfeldman$elm_css$Css$px(24),
										rtfeldman$elm_css$Css$px(6),
										rtfeldman$elm_css$Css$px(10)),
										rtfeldman$elm_css$Css$textAlign(rtfeldman$elm_css$Css$left),
										rtfeldman$elm_css$Css$color(author$project$Isdc$Ui$Colors$Css$black90),
										rtfeldman$elm_css$Css$boxSizing(rtfeldman$elm_css$Css$borderBox),
										rtfeldman$elm_css$Css$hover(
										_List_fromArray(
											[
												rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$grayB)
											]))
									]))
							]),
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$text(field.a1)
							]));
				},
				fields));
	});
var rtfeldman$elm_css$Css$inlineBlock = {j: 0, cz: 'inline-block'};
var rtfeldman$elm_css$Html$Styled$Events$onBlur = function (msg) {
	return A2(
		rtfeldman$elm_css$Html$Styled$Events$on,
		'blur',
		elm$json$Json$Decode$succeed(msg));
};
var author$project$Isdc$Ui$DropdownDots$dropdownDots = function (dropdownOptions) {
	var _n0 = dropdownOptions;
	var fields = _n0.cX;
	var choose = _n0.cL;
	var close = _n0.cM;
	var open = _n0.J;
	var isOpen = _n0.c4;
	var direction = _n0.M;
	return A2(
		rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				rtfeldman$elm_css$Html$Styled$Attributes$css(
				_List_fromArray(
					[
						rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$relative)
					]))
			]),
		_List_fromArray(
			[
				A2(
				rtfeldman$elm_css$Html$Styled$button,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$Attributes$css(
						_List_fromArray(
							[
								A2(
								rtfeldman$elm_css$Css$padding2,
								rtfeldman$elm_css$Css$px(5),
								rtfeldman$elm_css$Css$px(15)),
								rtfeldman$elm_css$Css$display(rtfeldman$elm_css$Css$inlineBlock),
								rtfeldman$elm_css$Css$cursor(rtfeldman$elm_css$Css$pointer),
								rtfeldman$elm_css$Css$outline(rtfeldman$elm_css$Css$zero),
								rtfeldman$elm_css$Css$border(rtfeldman$elm_css$Css$zero),
								rtfeldman$elm_css$Css$backgroundColor(rtfeldman$elm_css$Css$transparent)
							])),
						rtfeldman$elm_css$Html$Styled$Attributes$class('pb-test__toggle-menu'),
						rtfeldman$elm_css$Html$Styled$Events$onBlur(close),
						rtfeldman$elm_css$Html$Styled$Events$onClick(
						isOpen ? close : open)
					]),
				_List_fromArray(
					[
						author$project$Isdc$Ui$DropdownDots$dot,
						author$project$Isdc$Ui$DropdownDots$dot,
						author$project$Isdc$Ui$DropdownDots$dot,
						isOpen ? A4(author$project$Isdc$Ui$DropdownDots$dropDown, fields, choose, direction, close) : rtfeldman$elm_css$Html$Styled$text('')
					]))
			]));
};
var author$project$DropdownDots$view = function (model) {
	return author$project$DocsLayout$story(
		{
			cK: _List_fromArray(
				[
					{
					bd: '\ndropdownDots\n            { fields =\n                [ { label = "Foo"\n                    , value = "Bar"\n                    }\n                ]\n            , choose = Choose\n            , close = Close\n            , open = Open\n            , isOpen = model.open\n            , direction = model.direction\n            }\n',
					be: A2(
						rtfeldman$elm_css$Html$Styled$div,
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[
										rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$darkBlueC),
										rtfeldman$elm_css$Css$height(
										rtfeldman$elm_css$Css$px(300)),
										rtfeldman$elm_css$Css$displayFlex,
										rtfeldman$elm_css$Css$justifyContent(rtfeldman$elm_css$Css$flexEnd),
										rtfeldman$elm_css$Css$alignItems(rtfeldman$elm_css$Css$center)
									]))
							]),
						_List_fromArray(
							[
								author$project$Isdc$Ui$DropdownDots$dropdownDots(
								{
									cL: author$project$DropdownDots$Choose,
									cM: author$project$DropdownDots$Close,
									M: model.M,
									cX: _List_fromArray(
										[
											{a1: 'Foo', cz: 'Bar'}
										]),
									c4: model.J,
									J: author$project$DropdownDots$Open
								}),
								A2(
								rtfeldman$elm_css$Html$Styled$button,
								_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$Attributes$css(
										_List_fromArray(
											[author$project$Isdc$Ui$Buttons$greenButtonStyles])),
										rtfeldman$elm_css$Html$Styled$Events$onClick(author$project$DropdownDots$ToggleDirection)
									]),
								_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$text('Toggle Direction')
									]))
							])),
					bh: 'dropdownDots : DropdownOptions a msg -> Html msg'
				}
				]),
			dw: 'Isdc.Ui.DropdownDots exposing (..)'
		});
};
var author$project$Isdc$Ui$Icons$addCircleIcon = F3(
	function (w, h, f) {
		var addCircleIconPath = 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z';
		return A2(
			elm$svg$Svg$svg,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$height(h),
					elm$svg$Svg$Attributes$width(w),
					elm$svg$Svg$Attributes$fill(f),
					elm$svg$Svg$Attributes$viewBox('0 0 24 24')
				]),
			_List_fromArray(
				[
					A2(
					elm$svg$Svg$title,
					_List_Nil,
					_List_fromArray(
						[
							elm$svg$Svg$text('Add Circle Icon')
						])),
					A2(
					elm$svg$Svg$path,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$d(author$project$Isdc$Ui$Icons$iconBackgroundPath),
							elm$svg$Svg$Attributes$fill('none')
						]),
					_List_Nil),
					A2(
					elm$svg$Svg$path,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$d(addCircleIconPath)
						]),
					_List_Nil)
				]));
	});
var author$project$Isdc$Ui$Icons$chevronRightIcon = F4(
	function (w, h, f, arrowColor) {
		var chevronRightIconPath = 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z';
		return A2(
			elm$svg$Svg$svg,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$height(h),
					elm$svg$Svg$Attributes$width(w),
					elm$svg$Svg$Attributes$fill(f),
					elm$svg$Svg$Attributes$viewBox('0 0 24 24')
				]),
			_List_fromArray(
				[
					A2(
					elm$svg$Svg$title,
					_List_Nil,
					_List_fromArray(
						[
							elm$svg$Svg$text('Chevron Right Icon')
						])),
					A2(
					elm$svg$Svg$path,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$d(author$project$Isdc$Ui$Icons$iconBackgroundPath),
							elm$svg$Svg$Attributes$fill('none')
						]),
					_List_Nil),
					A2(
					elm$svg$Svg$path,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$d(chevronRightIconPath),
							elm$svg$Svg$Attributes$fill(arrowColor)
						]),
					_List_Nil)
				]));
	});
var author$project$Isdc$Ui$Icons$domain = F3(
	function (w, h, f) {
		return A2(
			elm$svg$Svg$svg,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$height(h),
					elm$svg$Svg$Attributes$width(w),
					elm$svg$Svg$Attributes$fill(f),
					elm$svg$Svg$Attributes$viewBox('0 0 48 48')
				]),
			_List_fromArray(
				[
					A2(
					elm$svg$Svg$path,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$d('M0 0h48v48H0z'),
							elm$svg$Svg$Attributes$fill('none')
						]),
					_List_Nil),
					A2(
					elm$svg$Svg$path,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$d('M24 14V6H4v36h40V14H24zM12 38H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm8 24h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm20 24H24v-4h4v-4h-4v-4h4v-4h-4v-4h16v20zm-4-16h-4v4h4v-4zm0 8h-4v4h4v-4z')
						]),
					_List_Nil)
				]));
	});
var author$project$Isdc$Ui$Icons$emailFilled = F3(
	function (w, h, f) {
		return A2(
			elm$svg$Svg$svg,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$height(h),
					elm$svg$Svg$Attributes$width(w),
					elm$svg$Svg$Attributes$fill(f),
					elm$svg$Svg$Attributes$viewBox('0 0 24 24')
				]),
			_List_fromArray(
				[
					A2(
					elm$svg$Svg$path,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$d('M0 0h24v24H0z'),
							elm$svg$Svg$Attributes$fill('none')
						]),
					_List_Nil),
					A2(
					elm$svg$Svg$path,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$d('M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z')
						]),
					_List_Nil)
				]));
	});
var author$project$Isdc$Ui$Icons$microsoftIcon = F2(
	function (w, h) {
		return A2(
			elm$svg$Svg$svg,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$height(h),
					elm$svg$Svg$Attributes$width(w),
					elm$svg$Svg$Attributes$viewBox('0 0 49 49')
				]),
			_List_fromArray(
				[
					A2(
					elm$svg$Svg$path,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$d('M0,0 L23.7179487,0 C23.7165242,7.92857143 23.7179487,15.8571429 23.7165242,23.7857143 L0,23.7857143 L0,0 Z'),
							elm$svg$Svg$Attributes$fill('#F35325')
						]),
					_List_Nil),
					A2(
					elm$svg$Svg$path,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$d('M26.1396011,0 L49.8575499,0 C49.8575499,7.92857143 49.8589744,15.8571429 49.8561254,23.7857143 C41.951567,23.7842857 34.045584,23.7857143 26.1410256,23.7857143 C26.1381766,15.8571429 26.1396011,7.92857143 26.1396011,0'),
							elm$svg$Svg$Attributes$fill('#81BC06')
						]),
					_List_Nil),
					A2(
					elm$svg$Svg$path,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$d('M0,26.2128571 C7.90598291,26.2157143 15.8119658,26.2114286 23.7179487,26.2157143 C23.7193732,34.1442857 23.7179487,42.0714286 23.7179487,50 L0,50 L0,26.2128571 Z'),
							elm$svg$Svg$Attributes$fill('#05A6F0')
						]),
					_List_Nil),
					A2(
					elm$svg$Svg$path,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$d('M26.1410256,26.2157143 C34.045584,26.2128571 41.951567,26.2142857 49.8575499,26.2142857 L49.8575499,50 L26.1396011,50 C26.1410256,42.0714286 26.1381766,34.1428571 26.1410256,26.2157143'),
							elm$svg$Svg$Attributes$fill('#FFBA08')
						]),
					_List_Nil)
				]));
	});
var author$project$Isdc$Ui$Icons$salesforceIconFilled = F3(
	function (w, h, f) {
		return A2(
			elm$svg$Svg$svg,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$height(h),
					elm$svg$Svg$Attributes$width(w),
					elm$svg$Svg$Attributes$viewBox('0 0 24 17')
				]),
			_List_fromArray(
				[
					A2(
					elm$svg$Svg$path,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$fill(f),
							elm$svg$Svg$Attributes$d('M17.2537812,2.13648574 C16.5710413,2.13648574 15.9222386,2.28276274 15.335835,2.54556633 C14.6611354,1.33941221 13.394557,0.527042717 11.942409,0.527042717 C10.8500547,0.527042717 9.86247175,0.987060371 9.15319372,1.72869219 C8.37248969,0.704505677 7.14147623,0.0436603434 5.75621614,0.0436603434 C3.39698744,0.0436603434 1.4841713,1.96065633 1.4841713,4.32499758 C1.4841713,4.9303517 1.60956143,5.50585641 1.83553004,6.02784997 C0.73804574,6.67146878 9.86547002e-06,7.87440529 9.86547002e-06,9.25252769 C9.86547002e-06,11.3083755 1.64354798,12.9748937 3.67109955,12.9748937 C3.92972287,12.9748937 4.18218027,12.9476184 4.42561076,12.8960378 C4.98261525,14.412715 6.43412197,15.4939767 8.13714888,15.4939767 C9.77225202,15.4939767 11.1756152,14.4970656 11.777557,13.0754313 C12.2359561,13.2999702 12.750243,13.4258031 13.2940278,13.4258031 C14.593557,13.4258031 15.7256691,12.707239 16.3195211,11.6441443 C16.6217991,11.7051302 16.9340906,11.7375537 17.2537812,11.7375537 C19.8726691,11.7375537 21.9959157,9.58829652 21.9959157,6.93684644 C21.9959157,4.28574287 19.8726691,2.13648574 17.2537812,2.13648574 L17.2537812,2.13648574 Z')
						]),
					_List_Nil)
				]));
	});
var author$project$Isdc$Ui$Icons$vpnKey = F3(
	function (w, h, f) {
		return A2(
			elm$svg$Svg$svg,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$height(h),
					elm$svg$Svg$Attributes$width(w),
					elm$svg$Svg$Attributes$fill(f),
					elm$svg$Svg$Attributes$viewBox('0 0 24 24')
				]),
			_List_fromArray(
				[
					A2(
					elm$svg$Svg$path,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$d('M0 0h24v24H0z'),
							elm$svg$Svg$Attributes$fill('none')
						]),
					_List_Nil),
					A2(
					elm$svg$Svg$path,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$d('M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z')
						]),
					_List_Nil)
				]));
	});
var author$project$Icons$view = function (_n0) {
	return author$project$DocsLayout$story(
		{
			cK: _List_fromArray(
				[
					{
					bd: 'searchIcon \"100px\" \"100px\" \"#000000\"',
					be: rtfeldman$elm_css$Html$Styled$fromUnstyled(
						A3(author$project$Isdc$Ui$Icons$searchIcon, '100px', '100px', '#000000')),
					bh: 'searchIcon : String -> String -> String -> Html.Html msg'
				},
					{
					bd: 'addCircleIcon \"100px\" \"100px\" \"#000000\"',
					be: rtfeldman$elm_css$Html$Styled$fromUnstyled(
						A3(author$project$Isdc$Ui$Icons$addCircleIcon, '100px', '100px', '#000000')),
					bh: 'addCircleIcon : String -> String -> String -> Html.Html msg'
				},
					{
					bd: 'chevronRightIcon \"100px\" \"100px\" \"#000000\" grayD',
					be: rtfeldman$elm_css$Html$Styled$fromUnstyled(
						A4(author$project$Isdc$Ui$Icons$chevronRightIcon, '100px', '100px', '#000000', author$project$Isdc$Ui$Colors$Hex$grayD)),
					bh: 'chevronRightIcon : String -> String -> String -> String -> Html.Html msg'
				},
					{
					bd: 'emailFilled \"100px\" \"100px\" \"#000000\"',
					be: rtfeldman$elm_css$Html$Styled$fromUnstyled(
						A3(author$project$Isdc$Ui$Icons$emailFilled, '100px', '100px', '#000000')),
					bh: 'emailFilled : String -> String -> String -> Html.Html msg'
				},
					{
					bd: 'salesforceIconFilled \"100px\" \"100px\" \"#000000\"',
					be: rtfeldman$elm_css$Html$Styled$fromUnstyled(
						A3(author$project$Isdc$Ui$Icons$salesforceIconFilled, '100px', '100px', '#000000')),
					bh: 'salesforceIconFilled : String -> String -> String -> Html.Html msg'
				},
					{
					bd: 'vpnKey \"100px\" \"100px\" \"#000000\"',
					be: rtfeldman$elm_css$Html$Styled$fromUnstyled(
						A3(author$project$Isdc$Ui$Icons$vpnKey, '100px', '100px', '#000000')),
					bh: 'vpnKey : String -> String -> String -> Html.Html msg'
				},
					{
					bd: 'microsoftIcon \"100px\" \"100px\" \"#000000\"',
					be: rtfeldman$elm_css$Html$Styled$fromUnstyled(
						A2(author$project$Isdc$Ui$Icons$microsoftIcon, '100px', '100px')),
					bh: 'microsoftIcon : String -> String -> Html.Html msg'
				},
					{
					bd: 'domain \"100px\" \"100px\" \"#000000\"',
					be: rtfeldman$elm_css$Html$Styled$fromUnstyled(
						A3(author$project$Isdc$Ui$Icons$domain, '100px', '100px', '#000000')),
					bh: 'domain : String -> String -> Html.Html msg'
				}
				]),
			dw: 'Isdc.Ui.Icons exposing (..)'
		});
};
var author$project$Input$Blur = {$: 2};
var author$project$Input$Focus = {$: 1};
var author$project$Input$ValueChange = function (a) {
	return {$: 0, a: a};
};
var author$project$Isdc$Ui$V2$Input$Dark = 0;
var author$project$Isdc$Ui$V2$Input$Light = 1;
var author$project$Isdc$Ui$V2$Input$Focused = function (a) {
	return {$: 7, a: a};
};
var author$project$Isdc$Ui$V2$Input$focused = author$project$Isdc$Ui$V2$Input$Focused;
var author$project$Isdc$Ui$V2$Input$inputContainerCss = F2(
	function (theme, isFocused) {
		var _n0 = function () {
			if (!theme) {
				return _Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$darkBlue, author$project$Isdc$Ui$Colors$Css$white60);
			} else {
				return _Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$grayA, author$project$Isdc$Ui$Colors$Css$black40);
			}
		}();
		var bgColor = _n0.a;
		var inputBorderColor = _n0.b;
		return _List_fromArray(
			[
				rtfeldman$elm_css$Css$backgroundColor(bgColor),
				rtfeldman$elm_css$Css$borderRadius(
				rtfeldman$elm_css$Css$px(2)),
				A3(
				rtfeldman$elm_css$Css$borderBottom3,
				rtfeldman$elm_css$Css$px(2),
				rtfeldman$elm_css$Css$solid,
				isFocused ? author$project$Isdc$Ui$Colors$Css$green : inputBorderColor),
				rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$relative)
			]);
	});
var rtfeldman$elm_css$Css$padding3 = rtfeldman$elm_css$Css$prop3('padding');
var author$project$Isdc$Ui$V2$Input$inputCss = function (theme) {
	var primaryColor = function () {
		if (!theme) {
			return author$project$Isdc$Ui$Colors$Css$white90;
		} else {
			return author$project$Isdc$Ui$Colors$Css$black90;
		}
	}();
	return _List_fromArray(
		[
			rtfeldman$elm_css$Css$color(primaryColor),
			author$project$Isdc$Ui$Typography$subhead1,
			rtfeldman$elm_css$Css$height(
			rtfeldman$elm_css$Css$px(54)),
			A3(
			rtfeldman$elm_css$Css$padding3,
			rtfeldman$elm_css$Css$px(24),
			rtfeldman$elm_css$Css$px(16),
			rtfeldman$elm_css$Css$px(4)),
			rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$relative),
			rtfeldman$elm_css$Css$zIndex(
			rtfeldman$elm_css$Css$int(1)),
			rtfeldman$elm_css$Css$backgroundColor(rtfeldman$elm_css$Css$transparent),
			rtfeldman$elm_css$Css$outline(rtfeldman$elm_css$Css$zero),
			rtfeldman$elm_css$Css$border(rtfeldman$elm_css$Css$zero),
			rtfeldman$elm_css$Css$boxSizing(rtfeldman$elm_css$Css$borderBox),
			rtfeldman$elm_css$Css$width(
			rtfeldman$elm_css$Css$pct(100))
		]);
};
var rtfeldman$elm_css$Css$focus = rtfeldman$elm_css$Css$pseudoClass('focus');
var rtfeldman$elm_css$Css$Transitions$FontSize = 43;
var rtfeldman$elm_css$Css$Transitions$fontSize = rtfeldman$elm_css$Css$Transitions$durationTransition(43);
var rtfeldman$elm_css$Css$Transitions$LetterSpacing = 53;
var rtfeldman$elm_css$Css$Transitions$letterSpacing = rtfeldman$elm_css$Css$Transitions$durationTransition(53);
var rtfeldman$elm_css$Css$Transitions$LineHeight = 54;
var rtfeldman$elm_css$Css$Transitions$lineHeight = rtfeldman$elm_css$Css$Transitions$durationTransition(54);
var rtfeldman$elm_css$Css$Transitions$Top = 88;
var rtfeldman$elm_css$Css$Transitions$top = rtfeldman$elm_css$Css$Transitions$durationTransition(88);
var author$project$Isdc$Ui$V2$Input$labelCss = F3(
	function (theme, inputLabelText, isFocused) {
		var labelColor = function () {
			if (isFocused) {
				return author$project$Isdc$Ui$Colors$Css$green;
			} else {
				if (!theme) {
					return author$project$Isdc$Ui$Colors$Css$white60;
				} else {
					return author$project$Isdc$Ui$Colors$Css$black60;
				}
			}
		}();
		var hasText = (inputLabelText !== '') || isFocused;
		var _n0 = hasText ? _Utils_Tuple2(
			rtfeldman$elm_css$Css$px(10),
			author$project$Isdc$Ui$Typography$caption) : _Utils_Tuple2(
			rtfeldman$elm_css$Css$px(15),
			author$project$Isdc$Ui$Typography$subhead1);
		var topOffset = _n0.a;
		var labelSize = _n0.b;
		return _List_fromArray(
			[
				rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$absolute),
				rtfeldman$elm_css$Css$top(topOffset),
				rtfeldman$elm_css$Css$left(
				rtfeldman$elm_css$Css$px(16)),
				labelSize,
				rtfeldman$elm_css$Css$color(labelColor),
				rtfeldman$elm_css$Css$Transitions$transition(
				_List_fromArray(
					[
						rtfeldman$elm_css$Css$Transitions$top(140),
						rtfeldman$elm_css$Css$Transitions$fontSize(140),
						rtfeldman$elm_css$Css$Transitions$lineHeight(140),
						rtfeldman$elm_css$Css$Transitions$letterSpacing(140)
					])),
				rtfeldman$elm_css$Css$focus(
				_List_fromArray(
					[
						rtfeldman$elm_css$Css$top(
						rtfeldman$elm_css$Css$px(10)),
						author$project$Isdc$Ui$Typography$caption
					]))
			]);
	});
var author$project$Isdc$Ui$V2$Input$mayAttrToAppend = function (attr) {
	return A2(
		elm$core$Basics$composeR,
		elm$core$Maybe$map(
			function (a) {
				return elm$core$List$cons(
					attr(a));
			}),
		elm$core$Maybe$withDefault(elm$core$Basics$identity));
};
var author$project$Isdc$Ui$V2$Input$recordFromInputOptions = function (options) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (cur, acc) {
				switch (cur.$) {
					case 0:
						var theme = cur.a;
						return _Utils_update(
							acc,
							{cv: theme});
					case 1:
						var disabled = cur.a;
						return _Utils_update(
							acc,
							{aY: disabled});
					case 2:
						var val = cur.a;
						return _Utils_update(
							acc,
							{bV: val});
					case 3:
						var text = cur.a;
						return _Utils_update(
							acc,
							{c6: text});
					case 4:
						var message = cur.a;
						return _Utils_update(
							acc,
							{
								db: elm$core$Maybe$Just(message)
							});
					case 5:
						var message = cur.a;
						return _Utils_update(
							acc,
							{
								b7: elm$core$Maybe$Just(message)
							});
					case 6:
						var message = cur.a;
						return _Utils_update(
							acc,
							{
								b6: elm$core$Maybe$Just(message)
							});
					case 7:
						var inputFocused = cur.a;
						return _Utils_update(
							acc,
							{ad: inputFocused});
					default:
						var givenType = cur.a;
						return _Utils_update(
							acc,
							{a$: givenType});
				}
			}),
		{aY: false, ad: false, a$: 'text', bV: '', c6: '', b6: elm$core$Maybe$Nothing, b7: elm$core$Maybe$Nothing, db: elm$core$Maybe$Nothing, cv: 1},
		options);
};
var rtfeldman$elm_css$Html$Styled$Attributes$type_ = rtfeldman$elm_css$Html$Styled$Attributes$stringProperty('type');
var rtfeldman$elm_css$Html$Styled$Events$onFocus = function (msg) {
	return A2(
		rtfeldman$elm_css$Html$Styled$Events$on,
		'focus',
		elm$json$Json$Decode$succeed(msg));
};
var author$project$Isdc$Ui$V2$Input$inputBox = function (options) {
	var recordOptions = author$project$Isdc$Ui$V2$Input$recordFromInputOptions(options);
	return A2(
		rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				rtfeldman$elm_css$Html$Styled$Attributes$css(
				A2(author$project$Isdc$Ui$V2$Input$inputContainerCss, recordOptions.cv, recordOptions.ad))
			]),
		_List_fromArray(
			[
				A2(
				rtfeldman$elm_css$Html$Styled$label,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$Attributes$css(
						A3(author$project$Isdc$Ui$V2$Input$labelCss, recordOptions.cv, recordOptions.bV, recordOptions.ad))
					]),
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$text(recordOptions.c6)
					])),
				A2(
				rtfeldman$elm_css$Html$Styled$input,
				A3(
					author$project$Isdc$Ui$V2$Input$mayAttrToAppend,
					rtfeldman$elm_css$Html$Styled$Events$onInput,
					recordOptions.db,
					A3(
						author$project$Isdc$Ui$V2$Input$mayAttrToAppend,
						rtfeldman$elm_css$Html$Styled$Events$onBlur,
						recordOptions.b6,
						A3(
							author$project$Isdc$Ui$V2$Input$mayAttrToAppend,
							rtfeldman$elm_css$Html$Styled$Events$onFocus,
							recordOptions.b7,
							_List_fromArray(
								[
									rtfeldman$elm_css$Html$Styled$Attributes$value(recordOptions.bV),
									rtfeldman$elm_css$Html$Styled$Attributes$css(
									author$project$Isdc$Ui$V2$Input$inputCss(recordOptions.cv)),
									rtfeldman$elm_css$Html$Styled$Attributes$type_(recordOptions.a$)
								])))),
				_List_Nil)
			]));
};
var author$project$Isdc$Ui$V2$Input$Disabled = function (a) {
	return {$: 1, a: a};
};
var author$project$Isdc$Ui$V2$Input$inputDisabled = author$project$Isdc$Ui$V2$Input$Disabled;
var author$project$Isdc$Ui$V2$Input$Theme = function (a) {
	return {$: 0, a: a};
};
var author$project$Isdc$Ui$V2$Input$inputTheme = author$project$Isdc$Ui$V2$Input$Theme;
var author$project$Isdc$Ui$V2$Input$Type = function (a) {
	return {$: 8, a: a};
};
var author$project$Isdc$Ui$V2$Input$inputType = author$project$Isdc$Ui$V2$Input$Type;
var author$project$Isdc$Ui$V2$Input$InputValue = function (a) {
	return {$: 2, a: a};
};
var author$project$Isdc$Ui$V2$Input$inputValue = author$project$Isdc$Ui$V2$Input$InputValue;
var author$project$Isdc$Ui$V2$Input$LabelText = function (a) {
	return {$: 3, a: a};
};
var author$project$Isdc$Ui$V2$Input$labelText = author$project$Isdc$Ui$V2$Input$LabelText;
var author$project$Isdc$Ui$V2$Input$OnInputBlur = function (a) {
	return {$: 6, a: a};
};
var author$project$Isdc$Ui$V2$Input$onInputBlur = author$project$Isdc$Ui$V2$Input$OnInputBlur;
var author$project$Isdc$Ui$V2$Input$OnInputFocus = function (a) {
	return {$: 5, a: a};
};
var author$project$Isdc$Ui$V2$Input$onInputFocus = author$project$Isdc$Ui$V2$Input$OnInputFocus;
var author$project$Isdc$Ui$V2$Input$OnValueChange = function (a) {
	return {$: 4, a: a};
};
var author$project$Isdc$Ui$V2$Input$onValueChange = author$project$Isdc$Ui$V2$Input$OnValueChange;
var author$project$Input$view = function (model) {
	return author$project$DocsLayout$story(
		{
			cK: _List_fromArray(
				[
					{
					bd: '\ninputBox\n    [ inputTheme Dark\n    , inputDisabled False\n    , inputValue model.value\n    , labelText "Hello world"\n    , onValueChange ValueChange\n    , onInputFocus Focus\n    , onInputBlur Blur\n    , focused model.focused\n    , inputType "text"\n    ]\n\n inputBox\n    [ inputTheme Light\n    , inputDisabled False\n    , inputValue model.value\n    , labelText "Hello world"\n    , onValueChange ValueChange\n    , onInputFocus Focus\n    , onInputBlur Blur\n    , focused model.focused\n    , inputType "text"\n    ]\n',
					be: A2(
						rtfeldman$elm_css$Html$Styled$div,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Isdc$Ui$V2$Input$inputBox(
								_List_fromArray(
									[
										author$project$Isdc$Ui$V2$Input$inputTheme(0),
										author$project$Isdc$Ui$V2$Input$inputDisabled(false),
										author$project$Isdc$Ui$V2$Input$inputValue(model.cz),
										author$project$Isdc$Ui$V2$Input$labelText('Hello world'),
										author$project$Isdc$Ui$V2$Input$onValueChange(author$project$Input$ValueChange),
										author$project$Isdc$Ui$V2$Input$onInputFocus(author$project$Input$Focus),
										author$project$Isdc$Ui$V2$Input$onInputBlur(author$project$Input$Blur),
										author$project$Isdc$Ui$V2$Input$focused(model.ad),
										author$project$Isdc$Ui$V2$Input$inputType('text')
									])),
								A2(
								rtfeldman$elm_css$Html$Styled$div,
								_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$Attributes$css(
										_List_fromArray(
											[
												rtfeldman$elm_css$Css$paddingTop(
												rtfeldman$elm_css$Css$px(10))
											]))
									]),
								_List_fromArray(
									[
										author$project$Isdc$Ui$V2$Input$inputBox(
										_List_fromArray(
											[
												author$project$Isdc$Ui$V2$Input$inputTheme(1),
												author$project$Isdc$Ui$V2$Input$inputDisabled(false),
												author$project$Isdc$Ui$V2$Input$inputValue(model.cz),
												author$project$Isdc$Ui$V2$Input$labelText('Hello world'),
												author$project$Isdc$Ui$V2$Input$onValueChange(author$project$Input$ValueChange),
												author$project$Isdc$Ui$V2$Input$onInputFocus(author$project$Input$Focus),
												author$project$Isdc$Ui$V2$Input$onInputBlur(author$project$Input$Blur),
												author$project$Isdc$Ui$V2$Input$focused(model.ad),
												author$project$Isdc$Ui$V2$Input$inputType('text')
											]))
									]))
							])),
					bh: 'inputBox : InputOptions msg -> Html msg'
				}
				]),
			dw: 'Isdc.Ui.V2.Input exposing (..)'
		});
};
var author$project$Isdc$Ui$Loader$Large = 2;
var author$project$Isdc$Ui$Loader$Medium = 1;
var author$project$Isdc$Ui$Loader$Small = 0;
var rtfeldman$elm_css$Css$scale = function (x) {
	return {
		i: 0,
		cz: A2(
			rtfeldman$elm_css$Css$cssFunction,
			'scale',
			_List_fromArray(
				[
					elm$core$String$fromFloat(x)
				]))
	};
};
var rtfeldman$elm_css$Css$Internal$Property = elm$core$Basics$identity;
var rtfeldman$elm_css$Css$Animations$transform = function (values) {
	return elm$core$List$isEmpty(values) ? 'transform:none' : ('transform:' + A2(
		elm$core$String$join,
		' ',
		A2(
			elm$core$List$map,
			function ($) {
				return $.cz;
			},
			values)));
};
var author$project$Isdc$Ui$Loader$transformTo = function (val) {
	return rtfeldman$elm_css$Css$Animations$transform(
		_List_fromArray(
			[
				rtfeldman$elm_css$Css$scale(val)
			]));
};
var rtfeldman$elm_css$Css$Preprocess$WithKeyframes = function (a) {
	return {$: 5, a: a};
};
var rtfeldman$elm_css$Css$animationName = function (arg) {
	return ((arg.cz === 'none') || ((arg.cz === 'inherit') || ((arg.cz === 'unset') || (arg.cz === 'initial')))) ? A2(rtfeldman$elm_css$Css$prop1, 'animation-name', arg) : rtfeldman$elm_css$Css$Preprocess$WithKeyframes(arg.cz);
};
var rtfeldman$elm_css$Css$Internal$printKeyframeSelector = function (_n0) {
	var percentage = _n0.a;
	var properties = _n0.b;
	var propertiesStr = A2(
		elm$core$String$join,
		'',
		A2(
			elm$core$List$map,
			function (_n1) {
				var prop = _n1;
				return prop + ';';
			},
			properties));
	var percentageStr = elm$core$String$fromInt(percentage) + '%';
	return percentageStr + (' {' + (propertiesStr + '}'));
};
var rtfeldman$elm_css$Css$Internal$compileKeyframes = function (tuples) {
	return A2(
		elm$core$String$join,
		'\n\n',
		A2(elm$core$List$map, rtfeldman$elm_css$Css$Internal$printKeyframeSelector, tuples));
};
var rtfeldman$elm_css$Css$Animations$keyframes = function (tuples) {
	return elm$core$List$isEmpty(tuples) ? {bi: 0, bl: 0, cz: 'none'} : {
		bi: 0,
		bl: 0,
		cz: rtfeldman$elm_css$Css$Internal$compileKeyframes(tuples)
	};
};
var author$project$Isdc$Ui$Loader$loaderBubbleCss = F2(
	function (delay, size) {
		return _List_fromArray(
			[
				rtfeldman$elm_css$Css$width(
				rtfeldman$elm_css$Css$px(size)),
				rtfeldman$elm_css$Css$height(
				rtfeldman$elm_css$Css$px(size)),
				rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$green),
				rtfeldman$elm_css$Css$borderRadius(
				rtfeldman$elm_css$Css$pct(50)),
				rtfeldman$elm_css$Css$display(rtfeldman$elm_css$Css$inlineBlock),
				A2(rtfeldman$elm_css$Css$property, 'animation-duration', '1.4s'),
				A2(rtfeldman$elm_css$Css$property, 'animation-timing-function', 'ease-in-out'),
				A2(
				rtfeldman$elm_css$Css$property,
				'animation-delay',
				elm$core$String$fromFloat(delay) + 's'),
				A2(rtfeldman$elm_css$Css$property, 'animation-iteration-count', 'infinite'),
				A2(rtfeldman$elm_css$Css$property, 'animation-fill-mode', 'BOTH'),
				rtfeldman$elm_css$Css$animationName(
				rtfeldman$elm_css$Css$Animations$keyframes(
					_List_fromArray(
						[
							_Utils_Tuple2(
							0,
							_List_fromArray(
								[
									author$project$Isdc$Ui$Loader$transformTo(0)
								])),
							_Utils_Tuple2(
							80,
							_List_fromArray(
								[
									author$project$Isdc$Ui$Loader$transformTo(0)
								])),
							_Utils_Tuple2(
							100,
							_List_fromArray(
								[
									author$project$Isdc$Ui$Loader$transformTo(0)
								])),
							_Utils_Tuple2(
							40,
							_List_fromArray(
								[
									author$project$Isdc$Ui$Loader$transformTo(1)
								]))
						])))
			]);
	});
var author$project$Isdc$Ui$Loader$loader = function (size) {
	var _n0 = function () {
		switch (size) {
			case 0:
				return _Utils_Tuple2(40, 10);
			case 1:
				return _Utils_Tuple2(55, 18);
			default:
				return _Utils_Tuple2(80, 20);
		}
	}();
	var totalWidth = _n0.a;
	var radius = _n0.b;
	return A2(
		rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				rtfeldman$elm_css$Html$Styled$Attributes$css(
				_List_fromArray(
					[
						A2(rtfeldman$elm_css$Css$margin2, rtfeldman$elm_css$Css$zero, rtfeldman$elm_css$Css$auto),
						rtfeldman$elm_css$Css$width(
						rtfeldman$elm_css$Css$px(totalWidth)),
						rtfeldman$elm_css$Css$textAlign(rtfeldman$elm_css$Css$center)
					]))
			]),
		_List_fromArray(
			[
				A2(
				rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$Attributes$css(
						A2(author$project$Isdc$Ui$Loader$loaderBubbleCss, -0.32, radius))
					]),
				_List_Nil),
				A2(
				rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$Attributes$css(
						A2(author$project$Isdc$Ui$Loader$loaderBubbleCss, -0.16, radius))
					]),
				_List_Nil),
				A2(
				rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$Attributes$css(
						A2(author$project$Isdc$Ui$Loader$loaderBubbleCss, 0, radius))
					]),
				_List_Nil)
			]));
};
var author$project$Loader$view = function (_n0) {
	return author$project$DocsLayout$story(
		{
			cK: _List_fromArray(
				[
					{
					bd: '\ndiv []\n        [ loader Large\n        , loader Medium\n        , loader Small\n]\n',
					be: A2(
						rtfeldman$elm_css$Html$Styled$div,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Isdc$Ui$Loader$loader(2),
								author$project$Isdc$Ui$Loader$loader(1),
								author$project$Isdc$Ui$Loader$loader(0)
							])),
					bh: 'loader : Size -> Html.Html msg'
				}
				]),
			dw: 'Isdc.Ui.Loader exposing (..)'
		});
};
var author$project$Main$CheckboxUpdate = function (a) {
	return {$: 2, a: a};
};
var author$project$Main$DropdownDotsUpdate = function (a) {
	return {$: 5, a: a};
};
var author$project$Main$DropdownUpdate = function (a) {
	return {$: 4, a: a};
};
var author$project$Main$InputUpdate = function (a) {
	return {$: 3, a: a};
};
var author$project$Main$ModalUpdate = function (a) {
	return {$: 7, a: a};
};
var author$project$Main$RadioUpdate = function (a) {
	return {$: 9, a: a};
};
var author$project$Main$SearchBoxUpdate = function (a) {
	return {$: 8, a: a};
};
var author$project$Main$SelectModelUpdate = function (a) {
	return {$: 6, a: a};
};
var rtfeldman$elm_css$Css$borderBottom = rtfeldman$elm_css$Css$prop1('border-bottom');
var rtfeldman$elm_css$Css$lastChild = rtfeldman$elm_css$Css$pseudoClass('last-child');
var rtfeldman$elm_css$Css$textDecoration = rtfeldman$elm_css$Css$prop1('text-decoration');
var rtfeldman$elm_css$Html$Styled$a = rtfeldman$elm_css$Html$Styled$node('a');
var rtfeldman$elm_css$Html$Styled$li = rtfeldman$elm_css$Html$Styled$node('li');
var rtfeldman$elm_css$Html$Styled$Attributes$href = function (url) {
	return A2(rtfeldman$elm_css$Html$Styled$Attributes$stringProperty, 'href', url);
};
var author$project$Main$viewLink = F2(
	function (path, label) {
		return A2(
			rtfeldman$elm_css$Html$Styled$li,
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							rtfeldman$elm_css$Css$display(rtfeldman$elm_css$Css$block),
							A2(
							rtfeldman$elm_css$Css$padding2,
							rtfeldman$elm_css$Css$px(10),
							rtfeldman$elm_css$Css$zero),
							A3(
							rtfeldman$elm_css$Css$borderBottom3,
							rtfeldman$elm_css$Css$px(1),
							rtfeldman$elm_css$Css$solid,
							author$project$Isdc$Ui$Colors$Css$grayC),
							rtfeldman$elm_css$Css$lastChild(
							_List_fromArray(
								[
									rtfeldman$elm_css$Css$borderBottom(rtfeldman$elm_css$Css$zero)
								]))
						]))
				]),
			_List_fromArray(
				[
					A2(
					rtfeldman$elm_css$Html$Styled$a,
					_List_fromArray(
						[
							rtfeldman$elm_css$Html$Styled$Attributes$href('/isdc-elm-ui' + path),
							rtfeldman$elm_css$Html$Styled$Attributes$css(
							_List_fromArray(
								[
									rtfeldman$elm_css$Css$color(author$project$Isdc$Ui$Colors$Css$grayD),
									rtfeldman$elm_css$Css$textDecoration(rtfeldman$elm_css$Css$none)
								]))
						]),
					_List_fromArray(
						[
							rtfeldman$elm_css$Html$Styled$text(label)
						]))
				]));
	});
var author$project$Isdc$Ui$Modal$modal = F3(
	function (options, close, body) {
		var _n0 = function () {
			if (options.$ === 1) {
				return {
					b0: rtfeldman$elm_css$Css$px(24),
					b1: rtfeldman$elm_css$Css$px(360)
				};
			} else {
				var justOptions = options.a;
				return justOptions;
			}
		}();
		var modalWidth = _n0.b1;
		var modalPadding = _n0.b0;
		return A2(
			rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$fixed),
							rtfeldman$elm_css$Css$top(rtfeldman$elm_css$Css$zero),
							rtfeldman$elm_css$Css$left(rtfeldman$elm_css$Css$zero),
							rtfeldman$elm_css$Css$right(rtfeldman$elm_css$Css$zero),
							rtfeldman$elm_css$Css$bottom(rtfeldman$elm_css$Css$zero),
							rtfeldman$elm_css$Css$displayFlex,
							rtfeldman$elm_css$Css$alignItems(rtfeldman$elm_css$Css$center),
							rtfeldman$elm_css$Css$justifyContent(rtfeldman$elm_css$Css$center)
						]))
				]),
			_List_fromArray(
				[
					A2(
					rtfeldman$elm_css$Html$Styled$div,
					_List_fromArray(
						[
							rtfeldman$elm_css$Html$Styled$Attributes$css(
							_List_fromArray(
								[
									rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$black40),
									rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$absolute),
									rtfeldman$elm_css$Css$top(rtfeldman$elm_css$Css$zero),
									rtfeldman$elm_css$Css$left(rtfeldman$elm_css$Css$zero),
									rtfeldman$elm_css$Css$right(rtfeldman$elm_css$Css$zero),
									rtfeldman$elm_css$Css$bottom(rtfeldman$elm_css$Css$zero),
									rtfeldman$elm_css$Css$zIndex(
									rtfeldman$elm_css$Css$int(10))
								])),
							rtfeldman$elm_css$Html$Styled$Events$onClick(close)
						]),
					_List_Nil),
					A2(
					rtfeldman$elm_css$Html$Styled$div,
					_List_fromArray(
						[
							rtfeldman$elm_css$Html$Styled$Attributes$css(
							_List_fromArray(
								[
									rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$white),
									rtfeldman$elm_css$Css$borderRadius(
									rtfeldman$elm_css$Css$px(3)),
									rtfeldman$elm_css$Css$boxSizing(rtfeldman$elm_css$Css$borderBox),
									rtfeldman$elm_css$Css$width(modalWidth),
									rtfeldman$elm_css$Css$padding(modalPadding),
									A5(
									rtfeldman$elm_css$Css$boxShadow5,
									rtfeldman$elm_css$Css$zero,
									rtfeldman$elm_css$Css$px(19),
									rtfeldman$elm_css$Css$px(38),
									rtfeldman$elm_css$Css$zero,
									author$project$Isdc$Ui$Colors$Css$black40),
									rtfeldman$elm_css$Css$zIndex(
									rtfeldman$elm_css$Css$int(20))
								]))
						]),
					body)
				]));
	});
var author$project$Modal$Close = 1;
var author$project$Modal$Open = 0;
var author$project$Modal$view = function (open) {
	return author$project$DocsLayout$story(
		{
			cK: _List_fromArray(
				[
					{
					bd: '\nmodal Nothing Close\n',
					be: A2(
						rtfeldman$elm_css$Html$Styled$div,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								rtfeldman$elm_css$Html$Styled$button,
								_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$Attributes$css(
										_List_fromArray(
											[author$project$Isdc$Ui$Buttons$greenButtonStyles])),
										rtfeldman$elm_css$Html$Styled$Events$onClick(0)
									]),
								_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$text('Open')
									])),
								open ? A3(
								author$project$Isdc$Ui$Modal$modal,
								elm$core$Maybe$Nothing,
								1,
								_List_fromArray(
									[
										A2(
										rtfeldman$elm_css$Html$Styled$button,
										_List_fromArray(
											[
												rtfeldman$elm_css$Html$Styled$Attributes$css(
												_List_fromArray(
													[author$project$Isdc$Ui$Buttons$greenButtonStyles])),
												rtfeldman$elm_css$Html$Styled$Events$onClick(1)
											]),
										_List_fromArray(
											[
												rtfeldman$elm_css$Html$Styled$text('Close')
											]))
									])) : rtfeldman$elm_css$Html$Styled$text('')
							])),
					bh: 'modal : Maybe a -> msg -> List (Html msg) -> Html msg'
				}
				]),
			dw: 'Isdc.Ui.Modal exposing (..)'
		});
};
var author$project$Isdc$Ui$Typography$body2 = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			rtfeldman$elm_css$Css$fontSize(
			rtfeldman$elm_css$Css$px(14)),
			rtfeldman$elm_css$Css$lineHeight(
			rtfeldman$elm_css$Css$px(24)),
			rtfeldman$elm_css$Css$fontWeight(
			rtfeldman$elm_css$Css$int(500)),
			rtfeldman$elm_css$Css$letterSpacing(
			rtfeldman$elm_css$Css$px(0.5))
		]));
var rtfeldman$elm_css$Css$firstChild = rtfeldman$elm_css$Css$pseudoClass('first-child');
var rtfeldman$elm_css$Css$stretch = rtfeldman$elm_css$Css$prop1('stretch');
var author$project$Isdc$Ui$Radio$radio = F3(
	function (radioContent, currentValue, select) {
		var _n0 = radioContent;
		var label = _n0.a1;
		var value = _n0.cz;
		var selected = _Utils_eq(currentValue, value);
		return A2(
			rtfeldman$elm_css$Html$Styled$button,
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							rtfeldman$elm_css$Css$color(author$project$Isdc$Ui$Colors$Css$black60),
							rtfeldman$elm_css$Css$displayFlex,
							rtfeldman$elm_css$Css$width(
							rtfeldman$elm_css$Css$pct(100)),
							rtfeldman$elm_css$Css$outline(rtfeldman$elm_css$Css$zero),
							A2(
							rtfeldman$elm_css$Css$padding2,
							rtfeldman$elm_css$Css$px(8),
							rtfeldman$elm_css$Css$px(10)),
							rtfeldman$elm_css$Css$justifyContent(rtfeldman$elm_css$Css$stretch),
							author$project$Isdc$Ui$Typography$body2,
							A2(
							rtfeldman$elm_css$Css$margin2,
							rtfeldman$elm_css$Css$px(10),
							rtfeldman$elm_css$Css$zero),
							rtfeldman$elm_css$Css$border(rtfeldman$elm_css$Css$zero),
							rtfeldman$elm_css$Css$alignItems(rtfeldman$elm_css$Css$center),
							rtfeldman$elm_css$Css$cursor(rtfeldman$elm_css$Css$pointer),
							rtfeldman$elm_css$Css$focus(
							_List_fromArray(
								[
									selected ? rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$green40) : rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$green10)
								])),
							selected ? rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$green40) : rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$grayA),
							rtfeldman$elm_css$Css$firstChild(
							_List_fromArray(
								[
									rtfeldman$elm_css$Css$marginTop(rtfeldman$elm_css$Css$zero)
								])),
							rtfeldman$elm_css$Css$lastChild(
							_List_fromArray(
								[
									rtfeldman$elm_css$Css$marginBottom(rtfeldman$elm_css$Css$zero)
								]))
						])),
					rtfeldman$elm_css$Html$Styled$Events$onClick(
					select(value)),
					rtfeldman$elm_css$Html$Styled$Attributes$class('pb-test__radio')
				]),
			_List_fromArray(
				[
					A2(
					rtfeldman$elm_css$Html$Styled$div,
					_List_fromArray(
						[
							rtfeldman$elm_css$Html$Styled$Attributes$css(
							_List_fromArray(
								[
									A3(
									rtfeldman$elm_css$Css$border3,
									rtfeldman$elm_css$Css$px(2),
									rtfeldman$elm_css$Css$solid,
									author$project$Isdc$Ui$Colors$Css$black),
									rtfeldman$elm_css$Css$borderRadius(
									rtfeldman$elm_css$Css$pct(50)),
									rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$white),
									rtfeldman$elm_css$Css$marginRight(
									rtfeldman$elm_css$Css$px(10)),
									rtfeldman$elm_css$Css$displayFlex,
									rtfeldman$elm_css$Css$alignItems(rtfeldman$elm_css$Css$center),
									rtfeldman$elm_css$Css$justifyContent(rtfeldman$elm_css$Css$center),
									rtfeldman$elm_css$Css$width(
									rtfeldman$elm_css$Css$px(20)),
									rtfeldman$elm_css$Css$height(
									rtfeldman$elm_css$Css$px(20)),
									rtfeldman$elm_css$Css$boxSizing(rtfeldman$elm_css$Css$borderBox)
								]))
						]),
					selected ? _List_fromArray(
						[
							A2(
							rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$green),
											rtfeldman$elm_css$Css$borderRadius(
											rtfeldman$elm_css$Css$pct(50)),
											rtfeldman$elm_css$Css$width(
											rtfeldman$elm_css$Css$px(10)),
											rtfeldman$elm_css$Css$height(
											rtfeldman$elm_css$Css$px(10))
										]))
								]),
							_List_Nil)
						]) : _List_Nil),
					label
				]));
	});
var author$project$Isdc$Ui$Radio$radioList = F3(
	function (radios, currentValue, select) {
		return A2(
			rtfeldman$elm_css$Html$Styled$div,
			_List_Nil,
			A2(
				elm$core$List$map,
				function (radioContent) {
					return A3(author$project$Isdc$Ui$Radio$radio, radioContent, currentValue, select);
				},
				radios));
	});
var author$project$Radio$ValueChange = elm$core$Basics$identity;
var author$project$Radio$whiteBackground = function (html) {
	return A2(
		rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				rtfeldman$elm_css$Html$Styled$Attributes$css(
				_List_fromArray(
					[
						rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$white),
						rtfeldman$elm_css$Css$padding(
						rtfeldman$elm_css$Css$px(10))
					]))
			]),
		_List_fromArray(
			[html]));
};
var author$project$Radio$view = function (model) {
	return author$project$DocsLayout$story(
		{
			cK: _List_fromArray(
				[
					{
					bd: '\nlet\n    radioContent =\n        { label = text "Foo"\n        , value = 0\n        }\nin\nradio radioContent model ValueChange\n',
					be: author$project$Radio$whiteBackground(
						function () {
							var radioContent = {
								a1: rtfeldman$elm_css$Html$Styled$text('Foo'),
								cz: 0
							};
							return A3(author$project$Isdc$Ui$Radio$radio, radioContent, model, elm$core$Basics$identity);
						}()),
					bh: 'radio : Radio a msg -> a -> (a -> msg) -> Html msg'
				},
					{
					bd: '\nlet\n    radios =\n        [ { label = text "Foo"\n            , value = 0\n            }\n        , { label = text "Bar"\n            , value = 1\n            }\n        , { label = text "Baz"\n            , value = 2\n            }\n        ]\nin\nradioList radios model ValueChange\n',
					be: author$project$Radio$whiteBackground(
						function () {
							var radios = _List_fromArray(
								[
									{
									a1: rtfeldman$elm_css$Html$Styled$text('Foo'),
									cz: 0
								},
									{
									a1: rtfeldman$elm_css$Html$Styled$text('Bar'),
									cz: 1
								},
									{
									a1: rtfeldman$elm_css$Html$Styled$text('Baz'),
									cz: 2
								}
								]);
							return A3(author$project$Isdc$Ui$Radio$radioList, radios, model, elm$core$Basics$identity);
						}()),
					bh: 'radioList : List (Radio a msg) -> (a -> msg) -> Html msg'
				}
				]),
			dw: 'Isdc.Ui.Checkbox exposing (radio, radioList)'
		});
};
var author$project$Isdc$Ui$Scrollbars$Dark = 1;
var rtfeldman$elm_css$Css$backgroundClip = rtfeldman$elm_css$Css$prop1('background-clip');
var rtfeldman$elm_css$Css$borderLeft = rtfeldman$elm_css$Css$prop1('border-left');
var rtfeldman$elm_css$Css$contentBox = {bc: 0, aW: 0, cz: 'content-box'};
var author$project$Isdc$Ui$Scrollbars$scrollbarStyles = function (color) {
	return rtfeldman$elm_css$Css$batch(
		_List_fromArray(
			[
				A2(
				rtfeldman$elm_css$Css$pseudoElement,
				'-webkit-scrollbar',
				_List_fromArray(
					[
						rtfeldman$elm_css$Css$backgroundColor(rtfeldman$elm_css$Css$transparent),
						rtfeldman$elm_css$Css$borderLeft(rtfeldman$elm_css$Css$zero),
						rtfeldman$elm_css$Css$marginRight(
						rtfeldman$elm_css$Css$px(10)),
						rtfeldman$elm_css$Css$width(
						rtfeldman$elm_css$Css$px(10)),
						rtfeldman$elm_css$Css$height(
						rtfeldman$elm_css$Css$px(10))
					])),
				A2(
				rtfeldman$elm_css$Css$pseudoElement,
				'-webkit-scrollbar-button',
				_List_fromArray(
					[
						rtfeldman$elm_css$Css$width(rtfeldman$elm_css$Css$zero),
						rtfeldman$elm_css$Css$height(rtfeldman$elm_css$Css$zero)
					])),
				A2(
				rtfeldman$elm_css$Css$pseudoElement,
				'-webkit-scrollbar-thumb',
				_List_fromArray(
					[
						rtfeldman$elm_css$Css$backgroundClip(rtfeldman$elm_css$Css$contentBox),
						rtfeldman$elm_css$Css$backgroundColor(
						function () {
							if (color === 1) {
								return author$project$Isdc$Ui$Colors$Css$black40;
							} else {
								return author$project$Isdc$Ui$Colors$Css$white40;
							}
						}()),
						A3(
						rtfeldman$elm_css$Css$border3,
						rtfeldman$elm_css$Css$px(1),
						rtfeldman$elm_css$Css$solid,
						rtfeldman$elm_css$Css$transparent),
						rtfeldman$elm_css$Css$borderRadius(
						rtfeldman$elm_css$Css$px(5))
					])),
				A2(
				rtfeldman$elm_css$Css$pseudoElement,
				'-webkit-scrollbar-corner',
				_List_fromArray(
					[
						rtfeldman$elm_css$Css$backgroundColor(rtfeldman$elm_css$Css$transparent)
					]))
			]));
};
var author$project$Isdc$Ui$Scrollbars$darkScrollBarStyles = author$project$Isdc$Ui$Scrollbars$scrollbarStyles(1);
var author$project$Isdc$Ui$Scrollbars$Light = 0;
var author$project$Isdc$Ui$Scrollbars$lightScrollBarStyles = author$project$Isdc$Ui$Scrollbars$scrollbarStyles(0);
var rtfeldman$elm_css$Css$scroll = {aC: 0, bB: 0, bS: 0, ao: 0, dl: 0, cz: 'scroll'};
var author$project$Scrollbars$scrollingElement = function (scrollbarCss) {
	return A2(
		rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				rtfeldman$elm_css$Html$Styled$Attributes$css(
				_List_fromArray(
					[
						rtfeldman$elm_css$Css$overflow(rtfeldman$elm_css$Css$scroll),
						rtfeldman$elm_css$Css$height(
						rtfeldman$elm_css$Css$px(200)),
						scrollbarCss,
						rtfeldman$elm_css$Css$padding(
						rtfeldman$elm_css$Css$px(10))
					]))
			]),
		_List_fromArray(
			[
				A2(
				rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$Attributes$css(
						_List_fromArray(
							[
								rtfeldman$elm_css$Css$height(
								rtfeldman$elm_css$Css$px(500))
							]))
					]),
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$text('hello world')
					]))
			]));
};
var author$project$Scrollbars$view = function (_n0) {
	return author$project$DocsLayout$story(
		{
			cK: _List_fromArray(
				[
					{
					bd: '\ndiv\n    [ css\n        [ overflow scroll\n        , height <| px 200\n        , backgroundColor Colors.darkBlueC\n        , color Colors.white\n        , lightScrollBarStyles\n        , padding <| px 10\n        ]\n    ]\n    [ div\n        [ css\n            [ height <| px 500\n            ]\n        ]\n        [ text "hello world" ]\n    ]\n',
					be: A2(
						rtfeldman$elm_css$Html$Styled$div,
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$Attributes$css(
								_List_fromArray(
									[
										rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$darkBlueC),
										rtfeldman$elm_css$Css$color(author$project$Isdc$Ui$Colors$Css$white)
									]))
							]),
						_List_fromArray(
							[
								author$project$Scrollbars$scrollingElement(author$project$Isdc$Ui$Scrollbars$lightScrollBarStyles)
							])),
					bh: 'lightScrollBarStyles : Css.Style'
				},
					{
					bd: '\ndiv\n    [ css\n        [ overflow scroll\n        , height <| px 200\n        , darkScrollBarStyles\n        , padding <| px 10\n        ]\n    ]\n    [ div\n        [ css\n            [ height <| px 500\n            ]\n        ]\n        [ text "hello world" ]\n    ]\n',
					be: author$project$Scrollbars$scrollingElement(author$project$Isdc$Ui$Scrollbars$darkScrollBarStyles),
					bh: 'darkScrollBarStyles : Css.Style'
				}
				]),
			dw: 'Isdc.Ui.Scrollbars exposing (..)'
		});
};
var author$project$Isdc$Ui$SearchBox$Dark = 0;
var author$project$Isdc$Ui$SearchBox$Light = 1;
var author$project$Isdc$Ui$SearchBox$iconSize = 24;
var author$project$Isdc$Ui$SearchBox$iconSizeStr = elm$core$String$fromInt(author$project$Isdc$Ui$SearchBox$iconSize) + 'px';
var rtfeldman$elm_css$Css$paddingLeft = rtfeldman$elm_css$Css$prop1('padding-left');
var author$project$Isdc$Ui$SearchBox$inputCss = function (theme) {
	var _n0 = function () {
		if (!theme) {
			return _Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$white90, author$project$Isdc$Ui$Colors$Css$white40);
		} else {
			return _Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$black90, author$project$Isdc$Ui$Colors$Css$black60);
		}
	}();
	var primaryColor = _n0.a;
	var placeholderColor = _n0.b;
	return _List_fromArray(
		[
			rtfeldman$elm_css$Css$color(primaryColor),
			rtfeldman$elm_css$Css$paddingLeft(
			rtfeldman$elm_css$Css$px(8)),
			author$project$Isdc$Ui$Typography$subhead1,
			rtfeldman$elm_css$Css$zIndex(
			rtfeldman$elm_css$Css$int(1)),
			rtfeldman$elm_css$Css$backgroundColor(rtfeldman$elm_css$Css$transparent),
			rtfeldman$elm_css$Css$outline(rtfeldman$elm_css$Css$zero),
			rtfeldman$elm_css$Css$border(rtfeldman$elm_css$Css$zero),
			rtfeldman$elm_css$Css$boxSizing(rtfeldman$elm_css$Css$borderBox),
			A2(
			rtfeldman$elm_css$Css$pseudoElement,
			'placeholder',
			_List_fromArray(
				[
					rtfeldman$elm_css$Css$color(placeholderColor)
				])),
			A4(
			rtfeldman$elm_css$Css$padding4,
			rtfeldman$elm_css$Css$zero,
			rtfeldman$elm_css$Css$zero,
			rtfeldman$elm_css$Css$zero,
			rtfeldman$elm_css$Css$px(40)),
			rtfeldman$elm_css$Css$lineHeight(
			rtfeldman$elm_css$Css$px(34)),
			rtfeldman$elm_css$Css$width(
			rtfeldman$elm_css$Css$pct(100))
		]);
};
var rtfeldman$elm_css$Css$flexDirection = rtfeldman$elm_css$Css$prop1('flex-direction');
var rtfeldman$elm_css$Css$row = {bg: 0, aF: 0, cz: 'row'};
var author$project$Isdc$Ui$SearchBox$searchBoxContainerCss = F2(
	function (theme, focused) {
		var _n0 = function () {
			if (!theme) {
				return _Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$darkBlue, author$project$Isdc$Ui$Colors$Css$white60);
			} else {
				return _Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$grayA, author$project$Isdc$Ui$Colors$Css$black40);
			}
		}();
		var bgColor = _n0.a;
		var inputBorderColor = _n0.b;
		return _List_fromArray(
			[
				rtfeldman$elm_css$Css$backgroundColor(bgColor),
				rtfeldman$elm_css$Css$borderRadius(
				rtfeldman$elm_css$Css$px(3)),
				A3(
				rtfeldman$elm_css$Css$borderBottom3,
				rtfeldman$elm_css$Css$px(2),
				rtfeldman$elm_css$Css$solid,
				focused ? author$project$Isdc$Ui$Colors$Css$green : inputBorderColor),
				rtfeldman$elm_css$Css$boxSizing(rtfeldman$elm_css$Css$borderBox),
				rtfeldman$elm_css$Css$height(
				rtfeldman$elm_css$Css$px(36)),
				rtfeldman$elm_css$Css$displayFlex,
				rtfeldman$elm_css$Css$flexDirection(rtfeldman$elm_css$Css$row),
				rtfeldman$elm_css$Css$alignItems(rtfeldman$elm_css$Css$center),
				rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$relative)
			]);
	});
var author$project$Isdc$Ui$SearchBox$searchBoxCss = _List_fromArray(
	[
		rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$absolute),
		rtfeldman$elm_css$Css$left(
		rtfeldman$elm_css$Css$px(8)),
		rtfeldman$elm_css$Css$top(rtfeldman$elm_css$Css$zero),
		rtfeldman$elm_css$Css$bottom(rtfeldman$elm_css$Css$zero),
		rtfeldman$elm_css$Css$margin(rtfeldman$elm_css$Css$auto),
		rtfeldman$elm_css$Css$height(
		rtfeldman$elm_css$Css$px(author$project$Isdc$Ui$SearchBox$iconSize))
	]);
var author$project$Isdc$Ui$SearchBox$searchBox = function (_n0) {
	var theme = _n0.cv;
	var disabled = _n0.aY;
	var inputValue = _n0.bV;
	var onValueChange = _n0.db;
	var placeholderText = _n0.cc;
	var onInputFocus = _n0.b7;
	var onInputBlur = _n0.b6;
	var focused = _n0.ad;
	return A2(
		rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				rtfeldman$elm_css$Html$Styled$Attributes$css(
				A2(author$project$Isdc$Ui$SearchBox$searchBoxContainerCss, theme, focused))
			]),
		_List_fromArray(
			[
				A2(
				rtfeldman$elm_css$Html$Styled$span,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$Attributes$css(author$project$Isdc$Ui$SearchBox$searchBoxCss)
					]),
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$fromUnstyled(
						A3(author$project$Isdc$Ui$Icons$searchIcon, author$project$Isdc$Ui$SearchBox$iconSizeStr, author$project$Isdc$Ui$SearchBox$iconSizeStr, author$project$Isdc$Ui$Colors$Hex$grayC))
					])),
				A2(
				rtfeldman$elm_css$Html$Styled$input,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$Events$onFocus(onInputFocus),
						rtfeldman$elm_css$Html$Styled$Events$onBlur(onInputBlur),
						rtfeldman$elm_css$Html$Styled$Events$onInput(onValueChange),
						rtfeldman$elm_css$Html$Styled$Attributes$placeholder(placeholderText),
						rtfeldman$elm_css$Html$Styled$Attributes$value(inputValue),
						rtfeldman$elm_css$Html$Styled$Attributes$css(
						author$project$Isdc$Ui$SearchBox$inputCss(theme)),
						rtfeldman$elm_css$Html$Styled$Attributes$class('pb-test__search-box-input')
					]),
				_List_Nil)
			]));
};
var author$project$SearchBox$Blur = {$: 2};
var author$project$SearchBox$Focus = {$: 1};
var author$project$SearchBox$ValueChange = function (a) {
	return {$: 0, a: a};
};
var author$project$SearchBox$view = function (model) {
	return author$project$DocsLayout$story(
		{
			cK: _List_fromArray(
				[
					{
					bd: '\nsearchBox\n    { theme = Dark\n    , disabled = False\n    , inputValue = model.value\n    , placeholderText = "Search"\n    , onValueChange = ValueChange\n    , onInputFocus = Focus\n    , onInputBlur = Blur\n    , focused = model.focused\n    }\n\nsearchBox\n    { theme = Light\n    , disabled = False\n    , inputValue = model.value\n    , placeholderText = "Hello world"\n    , onValueChange = ValueChange\n    , onInputFocus = Focus\n    , onInputBlur = Blur\n    , focused = model.focused\n    }\n',
					be: A2(
						rtfeldman$elm_css$Html$Styled$div,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								rtfeldman$elm_css$Html$Styled$div,
								_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$Attributes$css(
										_List_fromArray(
											[
												rtfeldman$elm_css$Css$backgroundColor(
												rtfeldman$elm_css$Css$hex('#fff')),
												rtfeldman$elm_css$Css$padding(
												rtfeldman$elm_css$Css$px(10))
											]))
									]),
								_List_fromArray(
									[
										author$project$Isdc$Ui$SearchBox$searchBox(
										{aY: false, ad: model.ad, bV: model.cz, b6: author$project$SearchBox$Blur, b7: author$project$SearchBox$Focus, db: author$project$SearchBox$ValueChange, cc: 'Search', cv: 0})
									])),
								A2(
								rtfeldman$elm_css$Html$Styled$div,
								_List_fromArray(
									[
										rtfeldman$elm_css$Html$Styled$Attributes$css(
										_List_fromArray(
											[
												rtfeldman$elm_css$Css$backgroundColor(
												rtfeldman$elm_css$Css$hex('#fff')),
												rtfeldman$elm_css$Css$padding(
												rtfeldman$elm_css$Css$px(10))
											]))
									]),
								_List_fromArray(
									[
										author$project$Isdc$Ui$SearchBox$searchBox(
										{aY: false, ad: model.ad, bV: model.cz, b6: author$project$SearchBox$Blur, b7: author$project$SearchBox$Focus, db: author$project$SearchBox$ValueChange, cc: 'Search', cv: 1})
									]))
							])),
					bh: 'searchBox : SearchBoxOptions msg -> Html msg'
				}
				]),
			dw: 'Isdc.Ui.SearchBox exposing (..)'
		});
};
var author$project$Isdc$Ui$Select$Dark = 0;
var author$project$Isdc$Ui$Select$Light = 1;
var author$project$Isdc$Ui$Select$String = function (a) {
	return {$: 0, a: a};
};
var author$project$Isdc$Ui$Select$caret = F2(
	function (isOpen, theme) {
		var _n0 = isOpen ? _Utils_Tuple2(
			rtfeldman$elm_css$Css$borderBottom3,
			function () {
				if (theme === 1) {
					return author$project$Isdc$Ui$Colors$Css$black60;
				} else {
					return author$project$Isdc$Ui$Colors$Css$white60;
				}
			}()) : _Utils_Tuple2(
			rtfeldman$elm_css$Css$borderTop3,
			function () {
				if (theme === 1) {
					return author$project$Isdc$Ui$Colors$Css$black40;
				} else {
					return author$project$Isdc$Ui$Colors$Css$white40;
				}
			}());
		var borderVert = _n0.a;
		var caretColor = _n0.b;
		return A2(
			rtfeldman$elm_css$Html$Styled$div,
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							A3(
							borderVert,
							rtfeldman$elm_css$Css$px(5),
							rtfeldman$elm_css$Css$solid,
							caretColor),
							A3(
							rtfeldman$elm_css$Css$borderLeft3,
							rtfeldman$elm_css$Css$px(5),
							rtfeldman$elm_css$Css$solid,
							rtfeldman$elm_css$Css$transparent),
							A3(
							rtfeldman$elm_css$Css$borderRight3,
							rtfeldman$elm_css$Css$px(5),
							rtfeldman$elm_css$Css$solid,
							rtfeldman$elm_css$Css$transparent),
							rtfeldman$elm_css$Css$right(
							rtfeldman$elm_css$Css$px(24)),
							rtfeldman$elm_css$Css$top(
							rtfeldman$elm_css$Css$pct(50)),
							rtfeldman$elm_css$Css$width(rtfeldman$elm_css$Css$zero),
							rtfeldman$elm_css$Css$height(rtfeldman$elm_css$Css$zero),
							rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$absolute)
						]))
				]),
			_List_Nil);
	});
var author$project$Isdc$Ui$Select$inputContainerCss = F2(
	function (theme, focused) {
		var _n0 = function () {
			if (!theme) {
				return _Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$darkBlue, author$project$Isdc$Ui$Colors$Css$white60);
			} else {
				return _Utils_Tuple2(author$project$Isdc$Ui$Colors$Css$grayA, author$project$Isdc$Ui$Colors$Css$black40);
			}
		}();
		var bgColor = _n0.a;
		var inputBorderColor = _n0.b;
		return _List_fromArray(
			[
				rtfeldman$elm_css$Css$backgroundColor(bgColor),
				rtfeldman$elm_css$Css$borderRadius(
				rtfeldman$elm_css$Css$px(2)),
				A3(
				rtfeldman$elm_css$Css$borderBottom3,
				rtfeldman$elm_css$Css$px(2),
				rtfeldman$elm_css$Css$solid,
				focused ? author$project$Isdc$Ui$Colors$Css$green : inputBorderColor),
				rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$relative)
			]);
	});
var author$project$Isdc$Ui$Select$labelCss = F3(
	function (theme, labelText, focused) {
		var labelColor = function () {
			if (focused) {
				return author$project$Isdc$Ui$Colors$Css$green;
			} else {
				if (!theme) {
					return author$project$Isdc$Ui$Colors$Css$white60;
				} else {
					return author$project$Isdc$Ui$Colors$Css$black60;
				}
			}
		}();
		var hasText = labelText !== '';
		var _n0 = hasText ? _Utils_Tuple2(
			rtfeldman$elm_css$Css$px(10),
			author$project$Isdc$Ui$Typography$caption) : _Utils_Tuple2(
			rtfeldman$elm_css$Css$px(15),
			author$project$Isdc$Ui$Typography$subhead1);
		var topOffset = _n0.a;
		var labelSize = _n0.b;
		return _List_fromArray(
			[
				rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$absolute),
				rtfeldman$elm_css$Css$top(topOffset),
				rtfeldman$elm_css$Css$left(
				rtfeldman$elm_css$Css$px(16)),
				labelSize,
				rtfeldman$elm_css$Css$color(labelColor),
				rtfeldman$elm_css$Css$Transitions$transition(
				_List_fromArray(
					[
						rtfeldman$elm_css$Css$Transitions$top(140),
						rtfeldman$elm_css$Css$Transitions$fontSize(140),
						rtfeldman$elm_css$Css$Transitions$lineHeight(140),
						rtfeldman$elm_css$Css$Transitions$letterSpacing(140)
					])),
				rtfeldman$elm_css$Css$focus(
				_List_fromArray(
					[
						rtfeldman$elm_css$Css$top(
						rtfeldman$elm_css$Css$px(10)),
						author$project$Isdc$Ui$Typography$caption
					]))
			]);
	});
var rtfeldman$elm_css$Css$ellipsis = {cu: 0, cz: 'ellipsis'};
var rtfeldman$elm_css$Css$hidden = {r: 0, ao: 0, cz: 'hidden', aU: 0};
var rtfeldman$elm_css$Css$textOverflow = rtfeldman$elm_css$Css$prop1('text-overflow');
var author$project$Isdc$Ui$Select$cutOffText = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			rtfeldman$elm_css$Css$whiteSpace(rtfeldman$elm_css$Css$noWrap),
			rtfeldman$elm_css$Css$textOverflow(rtfeldman$elm_css$Css$ellipsis),
			rtfeldman$elm_css$Css$overflow(rtfeldman$elm_css$Css$hidden)
		]));
var author$project$Isdc$Ui$Select$selectCss = function (theme) {
	var primaryColor = function () {
		if (!theme) {
			return author$project$Isdc$Ui$Colors$Css$white90;
		} else {
			return author$project$Isdc$Ui$Colors$Css$black90;
		}
	}();
	return _List_fromArray(
		[
			rtfeldman$elm_css$Css$color(primaryColor),
			author$project$Isdc$Ui$Typography$subhead1,
			rtfeldman$elm_css$Css$height(
			rtfeldman$elm_css$Css$px(54)),
			A4(
			rtfeldman$elm_css$Css$padding4,
			rtfeldman$elm_css$Css$px(24),
			rtfeldman$elm_css$Css$px(40),
			rtfeldman$elm_css$Css$px(4),
			rtfeldman$elm_css$Css$px(16)),
			rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$relative),
			rtfeldman$elm_css$Css$zIndex(
			rtfeldman$elm_css$Css$int(1)),
			rtfeldman$elm_css$Css$backgroundColor(rtfeldman$elm_css$Css$transparent),
			rtfeldman$elm_css$Css$outline(rtfeldman$elm_css$Css$zero),
			rtfeldman$elm_css$Css$border(rtfeldman$elm_css$Css$zero),
			rtfeldman$elm_css$Css$boxSizing(rtfeldman$elm_css$Css$borderBox),
			rtfeldman$elm_css$Css$width(
			rtfeldman$elm_css$Css$pct(100)),
			rtfeldman$elm_css$Css$outline(rtfeldman$elm_css$Css$zero),
			rtfeldman$elm_css$Css$textAlign(rtfeldman$elm_css$Css$left),
			author$project$Isdc$Ui$Select$cutOffText,
			rtfeldman$elm_css$Css$cursor(rtfeldman$elm_css$Css$pointer)
		]);
};
var rtfeldman$elm_css$Css$UnitlessFloat = 0;
var rtfeldman$elm_css$Css$num = function (val) {
	return {
		Q: 0,
		y: 0,
		aK: 0,
		I: val,
		aw: '',
		aT: 0,
		cz: elm$core$String$fromFloat(val)
	};
};
var rtfeldman$elm_css$Css$opacity = rtfeldman$elm_css$Css$prop1('opacity');
var rtfeldman$elm_css$Css$Animations$opacity = function (_n0) {
	var value = _n0.cz;
	return 'opacity:' + value;
};
var author$project$Isdc$Ui$Select$selectOption = F4(
	function (onValueChange, length, index, option) {
		var label = function () {
			var _n0 = option.a1;
			switch (_n0.$) {
				case 0:
					var str = _n0.a;
					return rtfeldman$elm_css$Html$Styled$text(str);
				case 1:
					var _int = _n0.a;
					return rtfeldman$elm_css$Html$Styled$text(
						elm$core$String$fromInt(_int));
				default:
					var html = _n0.a;
					return html;
			}
		}();
		return A2(
			rtfeldman$elm_css$Html$Styled$button,
			_List_fromArray(
				[
					rtfeldman$elm_css$Html$Styled$Events$onClick(
					onValueChange(option.cz)),
					rtfeldman$elm_css$Html$Styled$Attributes$class('pb-test__select-input'),
					rtfeldman$elm_css$Html$Styled$Attributes$css(
					_List_fromArray(
						[
							author$project$Isdc$Ui$Typography$subhead1,
							A2(
							rtfeldman$elm_css$Css$padding2,
							rtfeldman$elm_css$Css$zero,
							rtfeldman$elm_css$Css$px(24)),
							rtfeldman$elm_css$Css$display(rtfeldman$elm_css$Css$block),
							rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$white),
							rtfeldman$elm_css$Css$border(rtfeldman$elm_css$Css$zero),
							rtfeldman$elm_css$Css$outline(rtfeldman$elm_css$Css$zero),
							rtfeldman$elm_css$Css$width(
							rtfeldman$elm_css$Css$pct(100)),
							rtfeldman$elm_css$Css$textAlign(rtfeldman$elm_css$Css$left),
							rtfeldman$elm_css$Css$lineHeight(
							rtfeldman$elm_css$Css$px(36)),
							author$project$Isdc$Ui$Select$cutOffText,
							rtfeldman$elm_css$Css$cursor(rtfeldman$elm_css$Css$pointer),
							rtfeldman$elm_css$Css$hover(
							_List_fromArray(
								[
									rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$grayB)
								])),
							A2(rtfeldman$elm_css$Css$property, 'animation-duration', '0.3s'),
							A2(rtfeldman$elm_css$Css$property, 'animation-timing-function', 'ease-in-out'),
							A2(rtfeldman$elm_css$Css$property, 'animation-fill-mode', 'forwards'),
							rtfeldman$elm_css$Css$opacity(rtfeldman$elm_css$Css$zero),
							A2(
							rtfeldman$elm_css$Css$property,
							'animation-delay',
							function (f) {
								return f + 's';
							}(
								elm$core$String$fromFloat(0.284 * ((1 + index) / (length + 1))))),
							rtfeldman$elm_css$Css$animationName(
							rtfeldman$elm_css$Css$Animations$keyframes(
								_List_fromArray(
									[
										_Utils_Tuple2(
										0,
										_List_fromArray(
											[
												rtfeldman$elm_css$Css$Animations$opacity(rtfeldman$elm_css$Css$zero)
											])),
										_Utils_Tuple2(
										100,
										_List_fromArray(
											[
												rtfeldman$elm_css$Css$Animations$opacity(
												rtfeldman$elm_css$Css$num(1))
											]))
									])))
						]))
				]),
			_List_fromArray(
				[label]));
	});
var rtfeldman$elm_css$Css$scaleY = function (y) {
	return {
		i: 0,
		cz: A2(
			rtfeldman$elm_css$Css$cssFunction,
			'scaleY',
			_List_fromArray(
				[
					elm$core$String$fromFloat(y)
				]))
	};
};
var author$project$Isdc$Ui$Select$selectOptions = F3(
	function (options, onValueChange, onClose) {
		return A2(
			rtfeldman$elm_css$Html$Styled$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					rtfeldman$elm_css$Html$Styled$div,
					_List_fromArray(
						[
							rtfeldman$elm_css$Html$Styled$Attributes$css(
							_List_fromArray(
								[
									rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$fixed),
									rtfeldman$elm_css$Css$top(rtfeldman$elm_css$Css$zero),
									rtfeldman$elm_css$Css$bottom(rtfeldman$elm_css$Css$zero),
									rtfeldman$elm_css$Css$left(rtfeldman$elm_css$Css$zero),
									rtfeldman$elm_css$Css$right(rtfeldman$elm_css$Css$zero)
								])),
							rtfeldman$elm_css$Html$Styled$Events$onClick(onClose),
							rtfeldman$elm_css$Html$Styled$Attributes$class('pb-test__select-input-option')
						]),
					_List_Nil),
					A2(
					rtfeldman$elm_css$Html$Styled$div,
					_List_fromArray(
						[
							rtfeldman$elm_css$Html$Styled$Attributes$css(
							_List_fromArray(
								[
									A2(
									rtfeldman$elm_css$Css$padding2,
									rtfeldman$elm_css$Css$px(8),
									rtfeldman$elm_css$Css$zero),
									rtfeldman$elm_css$Css$maxHeight(
									rtfeldman$elm_css$Css$px(200)),
									rtfeldman$elm_css$Css$overflow(rtfeldman$elm_css$Css$auto),
									rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$absolute),
									rtfeldman$elm_css$Css$top(
									rtfeldman$elm_css$Css$pct(100)),
									rtfeldman$elm_css$Css$left(rtfeldman$elm_css$Css$zero),
									rtfeldman$elm_css$Css$width(
									rtfeldman$elm_css$Css$pct(100)),
									rtfeldman$elm_css$Css$zIndex(
									rtfeldman$elm_css$Css$int(10)),
									A4(
									rtfeldman$elm_css$Css$boxShadow4,
									rtfeldman$elm_css$Css$px(2),
									rtfeldman$elm_css$Css$px(4),
									rtfeldman$elm_css$Css$px(10),
									author$project$Isdc$Ui$Colors$Css$black40),
									rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$white),
									author$project$Isdc$Ui$Scrollbars$darkScrollBarStyles,
									A2(rtfeldman$elm_css$Css$property, 'animation-duration', '0.16s'),
									A2(rtfeldman$elm_css$Css$property, 'animation-timing-function', 'linear'),
									A2(rtfeldman$elm_css$Css$property, 'animation-fill-mode', 'forwards'),
									A2(rtfeldman$elm_css$Css$property, 'transform-origin', 'center 8px 0px'),
									rtfeldman$elm_css$Css$animationName(
									rtfeldman$elm_css$Css$Animations$keyframes(
										_List_fromArray(
											[
												_Utils_Tuple2(
												0,
												_List_fromArray(
													[
														rtfeldman$elm_css$Css$Animations$transform(
														_List_fromArray(
															[
																rtfeldman$elm_css$Css$translateY(
																rtfeldman$elm_css$Css$px(-24)),
																rtfeldman$elm_css$Css$scaleY(0.4)
															])),
														rtfeldman$elm_css$Css$Animations$opacity(rtfeldman$elm_css$Css$zero)
													])),
												_Utils_Tuple2(
												40,
												_List_fromArray(
													[
														rtfeldman$elm_css$Css$Animations$opacity(
														rtfeldman$elm_css$Css$num(1))
													])),
												_Utils_Tuple2(
												100,
												_List_fromArray(
													[
														rtfeldman$elm_css$Css$Animations$transform(
														_List_fromArray(
															[
																rtfeldman$elm_css$Css$translateY(rtfeldman$elm_css$Css$zero),
																rtfeldman$elm_css$Css$scaleY(1)
															]))
													]))
											])))
								]))
						]),
					A2(
						elm$core$List$indexedMap,
						A2(
							author$project$Isdc$Ui$Select$selectOption,
							onValueChange,
							elm$core$List$length(options)),
						options))
				]));
	});
var author$project$Isdc$Ui$Select$selectBox = function (selectBoxOptions) {
	var _n0 = selectBoxOptions;
	var theme = _n0.cv;
	var disabled = _n0.aY;
	var inputValue = _n0.bV;
	var labelText = _n0.c6;
	var onValueChange = _n0.db;
	var onSelectFocus = _n0.b9;
	var onSelectBlur = _n0.b8;
	var focused = _n0.ad;
	var isOpen = _n0.c4;
	var options = _n0.dd;
	var onToggle = _n0.ca;
	var onClose = _n0.b5;
	return A2(
		rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				rtfeldman$elm_css$Html$Styled$Attributes$css(
				_List_fromArray(
					[
						rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$relative)
					]))
			]),
		_List_fromArray(
			[
				A2(
				rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$Attributes$css(
						A2(author$project$Isdc$Ui$Select$inputContainerCss, theme, focused))
					]),
				_List_fromArray(
					[
						A2(
						rtfeldman$elm_css$Html$Styled$label,
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$Attributes$css(
								A3(author$project$Isdc$Ui$Select$labelCss, theme, inputValue, focused))
							]),
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$text(labelText)
							])),
						A2(
						rtfeldman$elm_css$Html$Styled$button,
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$Events$onFocus(onSelectFocus),
								rtfeldman$elm_css$Html$Styled$Events$onBlur(onSelectBlur),
								rtfeldman$elm_css$Html$Styled$Attributes$css(
								author$project$Isdc$Ui$Select$selectCss(theme)),
								rtfeldman$elm_css$Html$Styled$Events$onClick(onToggle)
							]),
						_List_fromArray(
							[
								rtfeldman$elm_css$Html$Styled$text(inputValue),
								A2(author$project$Isdc$Ui$Select$caret, isOpen, theme)
							]))
					])),
				isOpen ? A3(author$project$Isdc$Ui$Select$selectOptions, options, onValueChange, onClose) : rtfeldman$elm_css$Html$Styled$text('')
			]));
};
var author$project$Select$Blur = {$: 2};
var author$project$Select$Close = {$: 4};
var author$project$Select$Focus = {$: 1};
var author$project$Select$Toggle = {$: 3};
var author$project$Select$ValueChange = function (a) {
	return {$: 0, a: a};
};
var rtfeldman$elm_css$Css$column = _Utils_update(
	rtfeldman$elm_css$Css$row,
	{cz: 'column'});
var rtfeldman$elm_css$Css$spaceBetween = rtfeldman$elm_css$Css$prop1('space-between');
var author$project$Select$view = function (model) {
	return author$project$DocsLayout$story(
		{
			cK: _List_fromArray(
				[
					{
					bd: '\nselectBox\n    { theme = Dark\n    , disabled = False\n    , inputValue = model.value\n    , labelText = "Hello world"\n    , onValueChange = ValueChange\n    , onSelectFocus = Focus\n    , onSelectBlur = Blur\n    , focused = model.focused\n    }\n\nselectBox\n    { theme = Light\n    , disabled = False\n    , inputValue = model.value\n    , labelText = "Hello world"\n    , onValueChange = ValueChange\n    , onSelectFocus = Focus\n    , onSelectBlur = Blur\n    , focused = model.focused\n    }\n',
					be: function () {
						var options = _List_fromArray(
							[
								{
								a1: author$project$Isdc$Ui$Select$String('hello world'),
								cz: 'HI'
							},
								{
								a1: author$project$Isdc$Ui$Select$String('hello world 2'),
								cz: 'HI 2'
							},
								{
								a1: author$project$Isdc$Ui$Select$String('hello world 3'),
								cz: 'HI 3'
							},
								{
								a1: author$project$Isdc$Ui$Select$String('hello world 4'),
								cz: 'HI 4'
							},
								{
								a1: author$project$Isdc$Ui$Select$String('hello world 5'),
								cz: 'HI 5'
							},
								{
								a1: author$project$Isdc$Ui$Select$String('hello world 6'),
								cz: 'HI 6'
							},
								{
								a1: author$project$Isdc$Ui$Select$String('hello world 7 really really really really really really really really really really really really really long string'),
								cz: 'hello world 7 really really really really really really really really really really really really really long string'
							}
							]);
						return A2(
							rtfeldman$elm_css$Html$Styled$div,
							_List_fromArray(
								[
									rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[
											rtfeldman$elm_css$Css$height(
											rtfeldman$elm_css$Css$px(400)),
											rtfeldman$elm_css$Css$displayFlex,
											rtfeldman$elm_css$Css$flexDirection(rtfeldman$elm_css$Css$column),
											rtfeldman$elm_css$Css$justifyContent(rtfeldman$elm_css$Css$spaceBetween)
										]))
								]),
							_List_fromArray(
								[
									author$project$Isdc$Ui$Select$selectBox(
									{aY: false, ad: model.ad, bV: model.cz, c4: model.c4, c6: 'Hello world', b5: author$project$Select$Close, b8: author$project$Select$Blur, b9: author$project$Select$Focus, ca: author$project$Select$Toggle, db: author$project$Select$ValueChange, dd: options, cv: 0}),
									A2(
									rtfeldman$elm_css$Html$Styled$div,
									_List_fromArray(
										[
											rtfeldman$elm_css$Html$Styled$Attributes$css(
											_List_fromArray(
												[
													rtfeldman$elm_css$Css$paddingTop(
													rtfeldman$elm_css$Css$px(10))
												]))
										]),
									_List_fromArray(
										[
											author$project$Isdc$Ui$Select$selectBox(
											{aY: false, ad: model.ad, bV: model.cz, c4: model.c4, c6: 'Hello world', b5: author$project$Select$Close, b8: author$project$Select$Blur, b9: author$project$Select$Focus, ca: author$project$Select$Toggle, db: author$project$Select$ValueChange, dd: options, cv: 1})
										]))
								]));
					}(),
					bh: 'selectBox : SelectOptions msg -> Html msg'
				}
				]),
			dw: 'Isdc.Ui.Select exposing (..)'
		});
};
var author$project$Isdc$Ui$Typography$bodyCompact = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			rtfeldman$elm_css$Css$fontSize(
			rtfeldman$elm_css$Css$px(14)),
			rtfeldman$elm_css$Css$lineHeight(
			rtfeldman$elm_css$Css$px(16)),
			rtfeldman$elm_css$Css$fontWeight(
			rtfeldman$elm_css$Css$int(400)),
			rtfeldman$elm_css$Css$letterSpacing(
			rtfeldman$elm_css$Css$px(0.5))
		]));
var author$project$Isdc$Ui$Typography$display1 = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			rtfeldman$elm_css$Css$fontSize(
			rtfeldman$elm_css$Css$px(34)),
			rtfeldman$elm_css$Css$lineHeight(
			rtfeldman$elm_css$Css$px(40)),
			rtfeldman$elm_css$Css$fontWeight(
			rtfeldman$elm_css$Css$int(400))
		]));
var author$project$Isdc$Ui$Typography$display2 = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			rtfeldman$elm_css$Css$fontSize(
			rtfeldman$elm_css$Css$px(24)),
			rtfeldman$elm_css$Css$lineHeight(
			rtfeldman$elm_css$Css$px(52)),
			rtfeldman$elm_css$Css$fontWeight(
			rtfeldman$elm_css$Css$int(400))
		]));
var author$project$Isdc$Ui$Typography$headline = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			rtfeldman$elm_css$Css$fontSize(
			rtfeldman$elm_css$Css$px(24)),
			rtfeldman$elm_css$Css$lineHeight(
			rtfeldman$elm_css$Css$px(32)),
			rtfeldman$elm_css$Css$fontWeight(
			rtfeldman$elm_css$Css$int(400))
		]));
var author$project$Isdc$Ui$Typography$subhead2 = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			rtfeldman$elm_css$Css$fontSize(
			rtfeldman$elm_css$Css$px(16)),
			rtfeldman$elm_css$Css$lineHeight(
			rtfeldman$elm_css$Css$px(28)),
			rtfeldman$elm_css$Css$fontWeight(
			rtfeldman$elm_css$Css$int(700)),
			rtfeldman$elm_css$Css$letterSpacing(
			rtfeldman$elm_css$Css$px(0.5))
		]));
var author$project$Isdc$Ui$Typography$title = rtfeldman$elm_css$Css$batch(
	_List_fromArray(
		[
			rtfeldman$elm_css$Css$fontSize(
			rtfeldman$elm_css$Css$px(20)),
			rtfeldman$elm_css$Css$lineHeight(
			rtfeldman$elm_css$Css$px(28)),
			rtfeldman$elm_css$Css$fontWeight(
			rtfeldman$elm_css$Css$int(500)),
			rtfeldman$elm_css$Css$letterSpacing(
			rtfeldman$elm_css$Css$px(0.5))
		]));
var author$project$Typography$fonts = _List_fromArray(
	[
		_Utils_Tuple2(author$project$Isdc$Ui$Typography$display2, 'display2'),
		_Utils_Tuple2(author$project$Isdc$Ui$Typography$display1, 'display1'),
		_Utils_Tuple2(author$project$Isdc$Ui$Typography$headline, 'headline'),
		_Utils_Tuple2(author$project$Isdc$Ui$Typography$title, 'title'),
		_Utils_Tuple2(author$project$Isdc$Ui$Typography$subhead1, 'subhead1'),
		_Utils_Tuple2(author$project$Isdc$Ui$Typography$subhead2, 'subhead2'),
		_Utils_Tuple2(author$project$Isdc$Ui$Typography$body2, 'body2'),
		_Utils_Tuple2(author$project$Isdc$Ui$Typography$body1, 'body1'),
		_Utils_Tuple2(author$project$Isdc$Ui$Typography$bodyCompact, 'bodyCompact'),
		_Utils_Tuple2(author$project$Isdc$Ui$Typography$caption, 'caption')
	]);
var rtfeldman$elm_css$Html$Styled$p = rtfeldman$elm_css$Html$Styled$node('p');
var author$project$Typography$view = function (_n0) {
	return author$project$DocsLayout$story(
		{
			cK: A2(
				elm$core$List$map,
				function (font) {
					return {
						bd: 'p [ css [ ' + (font.b + ' ] ] [ text \"The quick brown fox jumps over the lazy dog\" ]'),
						be: A2(
							rtfeldman$elm_css$Html$Styled$p,
							_List_fromArray(
								[
									rtfeldman$elm_css$Html$Styled$Attributes$css(
									_List_fromArray(
										[font.a]))
								]),
							_List_fromArray(
								[
									rtfeldman$elm_css$Html$Styled$text('The quick brown fox jumps over the lazy dog')
								])),
						bh: font.b + ' : Css.Style'
					};
				},
				author$project$Typography$fonts),
			dw: 'Isdc.Ui.Typography exposing (..)'
		});
};
var rtfeldman$elm_css$Css$flexGrow = rtfeldman$elm_css$Css$prop1('flex-grow');
var elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var rtfeldman$elm_css$VirtualDom$Styled$KeyedNode = F3(
	function (a, b, c) {
		return {$: 2, a: a, b: b, c: c};
	});
var rtfeldman$elm_css$VirtualDom$Styled$KeyedNodeNS = F4(
	function (a, b, c, d) {
		return {$: 3, a: a, b: b, c: c, d: d};
	});
var rtfeldman$elm_css$VirtualDom$Styled$NodeNS = F4(
	function (a, b, c, d) {
		return {$: 1, a: a, b: b, c: c, d: d};
	});
var elm$virtual_dom$VirtualDom$mapAttribute = _VirtualDom_mapAttribute;
var rtfeldman$elm_css$VirtualDom$Styled$mapAttribute = F2(
	function (transform, _n0) {
		var prop = _n0.a;
		var styles = _n0.b;
		var classname = _n0.c;
		return A3(
			rtfeldman$elm_css$VirtualDom$Styled$Attribute,
			A2(elm$virtual_dom$VirtualDom$mapAttribute, transform, prop),
			styles,
			classname);
	});
var rtfeldman$elm_css$VirtualDom$Styled$map = F2(
	function (transform, vdomNode) {
		switch (vdomNode.$) {
			case 0:
				var elemType = vdomNode.a;
				var properties = vdomNode.b;
				var children = vdomNode.c;
				return A3(
					rtfeldman$elm_css$VirtualDom$Styled$Node,
					elemType,
					A2(
						elm$core$List$map,
						rtfeldman$elm_css$VirtualDom$Styled$mapAttribute(transform),
						properties),
					A2(
						elm$core$List$map,
						rtfeldman$elm_css$VirtualDom$Styled$map(transform),
						children));
			case 1:
				var ns = vdomNode.a;
				var elemType = vdomNode.b;
				var properties = vdomNode.c;
				var children = vdomNode.d;
				return A4(
					rtfeldman$elm_css$VirtualDom$Styled$NodeNS,
					ns,
					elemType,
					A2(
						elm$core$List$map,
						rtfeldman$elm_css$VirtualDom$Styled$mapAttribute(transform),
						properties),
					A2(
						elm$core$List$map,
						rtfeldman$elm_css$VirtualDom$Styled$map(transform),
						children));
			case 2:
				var elemType = vdomNode.a;
				var properties = vdomNode.b;
				var children = vdomNode.c;
				return A3(
					rtfeldman$elm_css$VirtualDom$Styled$KeyedNode,
					elemType,
					A2(
						elm$core$List$map,
						rtfeldman$elm_css$VirtualDom$Styled$mapAttribute(transform),
						properties),
					A2(
						elm$core$List$map,
						function (_n1) {
							var key = _n1.a;
							var child = _n1.b;
							return _Utils_Tuple2(
								key,
								A2(rtfeldman$elm_css$VirtualDom$Styled$map, transform, child));
						},
						children));
			case 3:
				var ns = vdomNode.a;
				var elemType = vdomNode.b;
				var properties = vdomNode.c;
				var children = vdomNode.d;
				return A4(
					rtfeldman$elm_css$VirtualDom$Styled$KeyedNodeNS,
					ns,
					elemType,
					A2(
						elm$core$List$map,
						rtfeldman$elm_css$VirtualDom$Styled$mapAttribute(transform),
						properties),
					A2(
						elm$core$List$map,
						function (_n2) {
							var key = _n2.a;
							var child = _n2.b;
							return _Utils_Tuple2(
								key,
								A2(rtfeldman$elm_css$VirtualDom$Styled$map, transform, child));
						},
						children));
			default:
				var vdom = vdomNode.a;
				return rtfeldman$elm_css$VirtualDom$Styled$Unstyled(
					A2(elm$virtual_dom$VirtualDom$map, transform, vdom));
		}
	});
var rtfeldman$elm_css$Html$Styled$map = rtfeldman$elm_css$VirtualDom$Styled$map;
var rtfeldman$elm_css$Html$Styled$ul = rtfeldman$elm_css$Html$Styled$node('ul');
var author$project$Main$body = function (model) {
	return A2(
		rtfeldman$elm_css$Html$Styled$div,
		_List_fromArray(
			[
				rtfeldman$elm_css$Html$Styled$Attributes$css(
				_List_fromArray(
					[
						rtfeldman$elm_css$Css$position(rtfeldman$elm_css$Css$relative),
						rtfeldman$elm_css$Css$height(
						rtfeldman$elm_css$Css$pct(100)),
						rtfeldman$elm_css$Css$displayFlex,
						rtfeldman$elm_css$Css$alignItems(rtfeldman$elm_css$Css$stretch),
						rtfeldman$elm_css$Css$justifyContent(rtfeldman$elm_css$Css$stretch),
						rtfeldman$elm_css$Css$fontFamily(rtfeldman$elm_css$Css$sansSerif)
					]))
			]),
		_List_fromArray(
			[
				A2(
				rtfeldman$elm_css$Html$Styled$ul,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$Attributes$css(
						_List_fromArray(
							[
								rtfeldman$elm_css$Css$width(
								rtfeldman$elm_css$Css$px(230)),
								rtfeldman$elm_css$Css$backgroundColor(author$project$Isdc$Ui$Colors$Css$grayA),
								rtfeldman$elm_css$Css$margin(rtfeldman$elm_css$Css$zero),
								rtfeldman$elm_css$Css$padding(
								rtfeldman$elm_css$Css$px(20)),
								rtfeldman$elm_css$Css$boxSizing(rtfeldman$elm_css$Css$borderBox)
							]))
					]),
				_List_fromArray(
					[
						A2(author$project$Main$viewLink, '/home', 'Home'),
						A2(author$project$Main$viewLink, '/icons', 'Icons'),
						A2(author$project$Main$viewLink, '/buttons', 'Buttons'),
						A2(author$project$Main$viewLink, '/checkbox', 'Checkbox'),
						A2(author$project$Main$viewLink, '/colors', 'Colors'),
						A2(author$project$Main$viewLink, '/input', 'Input'),
						A2(author$project$Main$viewLink, '/dropdown', 'Dropdown'),
						A2(author$project$Main$viewLink, '/loader', 'Loader'),
						A2(author$project$Main$viewLink, '/dropdownDots', 'DropdownDots'),
						A2(author$project$Main$viewLink, '/select', 'Select'),
						A2(author$project$Main$viewLink, '/typography', 'Typography'),
						A2(author$project$Main$viewLink, '/modal', 'Modal'),
						A2(author$project$Main$viewLink, '/scrollbars', 'Scrollbars'),
						A2(author$project$Main$viewLink, '/searchBox', 'SearchBox'),
						A2(author$project$Main$viewLink, '/radio', 'Radio')
					])),
				A2(
				rtfeldman$elm_css$Html$Styled$div,
				_List_fromArray(
					[
						rtfeldman$elm_css$Html$Styled$Attributes$css(
						_List_fromArray(
							[
								rtfeldman$elm_css$Css$flexGrow(
								rtfeldman$elm_css$Css$num(1)),
								rtfeldman$elm_css$Css$maxHeight(
								rtfeldman$elm_css$Css$pct(100)),
								rtfeldman$elm_css$Css$overflow(rtfeldman$elm_css$Css$auto)
							]))
					]),
				_List_fromArray(
					[
						function () {
						var _n0 = model.q;
						switch (_n0.$) {
							case 1:
								return A2(
									rtfeldman$elm_css$Html$Styled$h1,
									_List_fromArray(
										[
											rtfeldman$elm_css$Html$Styled$Attributes$css(
											_List_fromArray(
												[
													rtfeldman$elm_css$Css$padding(
													rtfeldman$elm_css$Css$px(20)),
													rtfeldman$elm_css$Css$marginTop(rtfeldman$elm_css$Css$zero)
												]))
										]),
									_List_fromArray(
										[
											rtfeldman$elm_css$Html$Styled$text('Isdc Elm Ui Docs')
										]));
							case 2:
								return author$project$Buttons$view(elm$core$Maybe$Nothing);
							case 3:
								return author$project$Icons$view(elm$core$Maybe$Nothing);
							case 4:
								var checkboxModel = _n0.a;
								return A2(
									rtfeldman$elm_css$Html$Styled$map,
									function (msg) {
										return author$project$Main$CheckboxUpdate(msg);
									},
									author$project$Checkbox$view(checkboxModel));
							case 5:
								return author$project$Colors$view(elm$core$Maybe$Nothing);
							case 0:
								return rtfeldman$elm_css$Html$Styled$text('404');
							case 6:
								return author$project$Typography$view(elm$core$Maybe$Nothing);
							case 8:
								var inputModel = _n0.a;
								return A2(
									rtfeldman$elm_css$Html$Styled$map,
									function (msg) {
										return author$project$Main$InputUpdate(msg);
									},
									author$project$Input$view(inputModel));
							case 9:
								var dropdownModel = _n0.a;
								return A2(
									rtfeldman$elm_css$Html$Styled$map,
									function (msg) {
										return author$project$Main$DropdownUpdate(msg);
									},
									author$project$Dropdown$view(dropdownModel));
							case 10:
								var dropdownDotsModel = _n0.a;
								return A2(
									rtfeldman$elm_css$Html$Styled$map,
									function (msg) {
										return author$project$Main$DropdownDotsUpdate(msg);
									},
									author$project$DropdownDots$view(dropdownDotsModel));
							case 7:
								return author$project$Loader$view(elm$core$Maybe$Nothing);
							case 11:
								var selectModel = _n0.a;
								return A2(
									rtfeldman$elm_css$Html$Styled$map,
									function (msg) {
										return author$project$Main$SelectModelUpdate(msg);
									},
									author$project$Select$view(selectModel));
							case 12:
								var open = _n0.a;
								return A2(
									rtfeldman$elm_css$Html$Styled$map,
									function (msg) {
										return author$project$Main$ModalUpdate(msg);
									},
									author$project$Modal$view(open));
							case 13:
								return author$project$Scrollbars$view(elm$core$Maybe$Nothing);
							case 14:
								var searchBoxModel = _n0.a;
								return A2(
									rtfeldman$elm_css$Html$Styled$map,
									function (msg) {
										return author$project$Main$SearchBoxUpdate(msg);
									},
									author$project$SearchBox$view(searchBoxModel));
							default:
								var currentValue = _n0.a;
								return A2(
									rtfeldman$elm_css$Html$Styled$map,
									function (msg) {
										return author$project$Main$RadioUpdate(msg);
									},
									author$project$Radio$view(currentValue));
						}
					}()
					]))
			]));
};
var elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var elm$virtual_dom$VirtualDom$keyedNodeNS = F2(
	function (namespace, tag) {
		return A2(
			_VirtualDom_keyedNodeNS,
			namespace,
			_VirtualDom_noScript(tag));
	});
var elm$virtual_dom$VirtualDom$nodeNS = function (tag) {
	return _VirtualDom_nodeNS(
		_VirtualDom_noScript(tag));
};
var rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles = F2(
	function (_n0, styles) {
		var newStyles = _n0.b;
		var classname = _n0.c;
		return elm$core$List$isEmpty(newStyles) ? styles : A3(elm$core$Dict$insert, classname, newStyles, styles);
	});
var rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute = function (_n0) {
	var val = _n0.a;
	return val;
};
var rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml = F2(
	function (_n6, _n7) {
		var key = _n6.a;
		var html = _n6.b;
		var pairs = _n7.a;
		var styles = _n7.b;
		switch (html.$) {
			case 4:
				var vdom = html.a;
				return _Utils_Tuple2(
					A2(
						elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					styles);
			case 0:
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n9 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n9.a;
				var finalStyles = _n9.b;
				var vdom = A3(
					elm$virtual_dom$VirtualDom$node,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			case 1:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n10 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n10.a;
				var finalStyles = _n10.b;
				var vdom = A4(
					elm$virtual_dom$VirtualDom$nodeNS,
					ns,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			case 2:
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n11 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n11.a;
				var finalStyles = _n11.b;
				var vdom = A3(
					elm$virtual_dom$VirtualDom$keyedNode,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
			default:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n12 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n12.a;
				var finalStyles = _n12.b;
				var vdom = A4(
					elm$virtual_dom$VirtualDom$keyedNodeNS,
					ns,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(
						elm$core$List$cons,
						_Utils_Tuple2(key, vdom),
						pairs),
					finalStyles);
		}
	});
var rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml = F2(
	function (html, _n0) {
		var nodes = _n0.a;
		var styles = _n0.b;
		switch (html.$) {
			case 4:
				var vdomNode = html.a;
				return _Utils_Tuple2(
					A2(elm$core$List$cons, vdomNode, nodes),
					styles);
			case 0:
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n2 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n2.a;
				var finalStyles = _n2.b;
				var vdomNode = A3(
					elm$virtual_dom$VirtualDom$node,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			case 1:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n3 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n3.a;
				var finalStyles = _n3.b;
				var vdomNode = A4(
					elm$virtual_dom$VirtualDom$nodeNS,
					ns,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			case 2:
				var elemType = html.a;
				var properties = html.b;
				var children = html.c;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n4 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n4.a;
				var finalStyles = _n4.b;
				var vdomNode = A3(
					elm$virtual_dom$VirtualDom$keyedNode,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(elm$core$List$cons, vdomNode, nodes),
					finalStyles);
			default:
				var ns = html.a;
				var elemType = html.b;
				var properties = html.c;
				var children = html.d;
				var combinedStyles = A3(elm$core$List$foldl, rtfeldman$elm_css$VirtualDom$Styled$accumulateStyles, styles, properties);
				var _n5 = A3(
					elm$core$List$foldl,
					rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
					_Utils_Tuple2(_List_Nil, combinedStyles),
					children);
				var childNodes = _n5.a;
				var finalStyles = _n5.b;
				var vdomNode = A4(
					elm$virtual_dom$VirtualDom$keyedNodeNS,
					ns,
					elemType,
					A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties),
					elm$core$List$reverse(childNodes));
				return _Utils_Tuple2(
					A2(elm$core$List$cons, vdomNode, nodes),
					finalStyles);
		}
	});
var elm$core$Dict$singleton = F2(
	function (key, value) {
		return A5(elm$core$Dict$RBNode_elm_builtin, 1, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
	});
var rtfeldman$elm_css$VirtualDom$Styled$stylesFromPropertiesHelp = F2(
	function (candidate, properties) {
		stylesFromPropertiesHelp:
		while (true) {
			if (!properties.b) {
				return candidate;
			} else {
				var _n1 = properties.a;
				var styles = _n1.b;
				var classname = _n1.c;
				var rest = properties.b;
				if (elm$core$String$isEmpty(classname)) {
					var $temp$candidate = candidate,
						$temp$properties = rest;
					candidate = $temp$candidate;
					properties = $temp$properties;
					continue stylesFromPropertiesHelp;
				} else {
					var $temp$candidate = elm$core$Maybe$Just(
						_Utils_Tuple2(classname, styles)),
						$temp$properties = rest;
					candidate = $temp$candidate;
					properties = $temp$properties;
					continue stylesFromPropertiesHelp;
				}
			}
		}
	});
var rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties = function (properties) {
	var _n0 = A2(rtfeldman$elm_css$VirtualDom$Styled$stylesFromPropertiesHelp, elm$core$Maybe$Nothing, properties);
	if (_n0.$ === 1) {
		return elm$core$Dict$empty;
	} else {
		var _n1 = _n0.a;
		var classname = _n1.a;
		var styles = _n1.b;
		return A2(elm$core$Dict$singleton, classname, styles);
	}
};
var rtfeldman$elm_css$Css$Structure$ClassSelector = function (a) {
	return {$: 0, a: a};
};
var rtfeldman$elm_css$VirtualDom$Styled$snippetFromPair = function (_n0) {
	var classname = _n0.a;
	var styles = _n0.b;
	return A2(
		rtfeldman$elm_css$VirtualDom$Styled$makeSnippet,
		styles,
		rtfeldman$elm_css$Css$Structure$UniversalSelectorSequence(
			_List_fromArray(
				[
					rtfeldman$elm_css$Css$Structure$ClassSelector(classname)
				])));
};
var rtfeldman$elm_css$VirtualDom$Styled$toDeclaration = function (dict) {
	return rtfeldman$elm_css$Css$Preprocess$Resolve$compile(
		elm$core$List$singleton(
			rtfeldman$elm_css$Css$Preprocess$stylesheet(
				A2(
					elm$core$List$map,
					rtfeldman$elm_css$VirtualDom$Styled$snippetFromPair,
					elm$core$Dict$toList(dict)))));
};
var rtfeldman$elm_css$VirtualDom$Styled$toStyleNode = function (styles) {
	return A3(
		elm$virtual_dom$VirtualDom$node,
		'style',
		_List_Nil,
		elm$core$List$singleton(
			elm$virtual_dom$VirtualDom$text(
				rtfeldman$elm_css$VirtualDom$Styled$toDeclaration(styles))));
};
var rtfeldman$elm_css$VirtualDom$Styled$unstyle = F3(
	function (elemType, properties, children) {
		var unstyledProperties = A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _n0 = A3(
			elm$core$List$foldl,
			rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			children);
		var childNodes = _n0.a;
		var styles = _n0.b;
		var styleNode = rtfeldman$elm_css$VirtualDom$Styled$toStyleNode(styles);
		return A3(
			elm$virtual_dom$VirtualDom$node,
			elemType,
			unstyledProperties,
			A2(
				elm$core$List$cons,
				styleNode,
				elm$core$List$reverse(childNodes)));
	});
var rtfeldman$elm_css$VirtualDom$Styled$containsKey = F2(
	function (key, pairs) {
		containsKey:
		while (true) {
			if (!pairs.b) {
				return false;
			} else {
				var _n1 = pairs.a;
				var str = _n1.a;
				var rest = pairs.b;
				if (_Utils_eq(key, str)) {
					return true;
				} else {
					var $temp$key = key,
						$temp$pairs = rest;
					key = $temp$key;
					pairs = $temp$pairs;
					continue containsKey;
				}
			}
		}
	});
var rtfeldman$elm_css$VirtualDom$Styled$getUnusedKey = F2(
	function (_default, pairs) {
		getUnusedKey:
		while (true) {
			if (!pairs.b) {
				return _default;
			} else {
				var _n1 = pairs.a;
				var firstKey = _n1.a;
				var rest = pairs.b;
				var newKey = '_' + firstKey;
				if (A2(rtfeldman$elm_css$VirtualDom$Styled$containsKey, newKey, rest)) {
					var $temp$default = newKey,
						$temp$pairs = rest;
					_default = $temp$default;
					pairs = $temp$pairs;
					continue getUnusedKey;
				} else {
					return newKey;
				}
			}
		}
	});
var rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode = F2(
	function (allStyles, keyedChildNodes) {
		var styleNodeKey = A2(rtfeldman$elm_css$VirtualDom$Styled$getUnusedKey, '_', keyedChildNodes);
		var finalNode = rtfeldman$elm_css$VirtualDom$Styled$toStyleNode(allStyles);
		return _Utils_Tuple2(styleNodeKey, finalNode);
	});
var rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyed = F3(
	function (elemType, properties, keyedChildren) {
		var unstyledProperties = A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _n0 = A3(
			elm$core$List$foldl,
			rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			keyedChildren);
		var keyedChildNodes = _n0.a;
		var styles = _n0.b;
		var keyedStyleNode = A2(rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode, styles, keyedChildNodes);
		return A3(
			elm$virtual_dom$VirtualDom$keyedNode,
			elemType,
			unstyledProperties,
			A2(
				elm$core$List$cons,
				keyedStyleNode,
				elm$core$List$reverse(keyedChildNodes)));
	});
var rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyedNS = F4(
	function (ns, elemType, properties, keyedChildren) {
		var unstyledProperties = A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _n0 = A3(
			elm$core$List$foldl,
			rtfeldman$elm_css$VirtualDom$Styled$accumulateKeyedStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			keyedChildren);
		var keyedChildNodes = _n0.a;
		var styles = _n0.b;
		var keyedStyleNode = A2(rtfeldman$elm_css$VirtualDom$Styled$toKeyedStyleNode, styles, keyedChildNodes);
		return A4(
			elm$virtual_dom$VirtualDom$keyedNodeNS,
			ns,
			elemType,
			unstyledProperties,
			A2(
				elm$core$List$cons,
				keyedStyleNode,
				elm$core$List$reverse(keyedChildNodes)));
	});
var rtfeldman$elm_css$VirtualDom$Styled$unstyleNS = F4(
	function (ns, elemType, properties, children) {
		var unstyledProperties = A2(elm$core$List$map, rtfeldman$elm_css$VirtualDom$Styled$extractUnstyledAttribute, properties);
		var initialStyles = rtfeldman$elm_css$VirtualDom$Styled$stylesFromProperties(properties);
		var _n0 = A3(
			elm$core$List$foldl,
			rtfeldman$elm_css$VirtualDom$Styled$accumulateStyledHtml,
			_Utils_Tuple2(_List_Nil, initialStyles),
			children);
		var childNodes = _n0.a;
		var styles = _n0.b;
		var styleNode = rtfeldman$elm_css$VirtualDom$Styled$toStyleNode(styles);
		return A4(
			elm$virtual_dom$VirtualDom$nodeNS,
			ns,
			elemType,
			unstyledProperties,
			A2(
				elm$core$List$cons,
				styleNode,
				elm$core$List$reverse(childNodes)));
	});
var rtfeldman$elm_css$VirtualDom$Styled$toUnstyled = function (vdom) {
	switch (vdom.$) {
		case 4:
			var plainNode = vdom.a;
			return plainNode;
		case 0:
			var elemType = vdom.a;
			var properties = vdom.b;
			var children = vdom.c;
			return A3(rtfeldman$elm_css$VirtualDom$Styled$unstyle, elemType, properties, children);
		case 1:
			var ns = vdom.a;
			var elemType = vdom.b;
			var properties = vdom.c;
			var children = vdom.d;
			return A4(rtfeldman$elm_css$VirtualDom$Styled$unstyleNS, ns, elemType, properties, children);
		case 2:
			var elemType = vdom.a;
			var properties = vdom.b;
			var children = vdom.c;
			return A3(rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyed, elemType, properties, children);
		default:
			var ns = vdom.a;
			var elemType = vdom.b;
			var properties = vdom.c;
			var children = vdom.d;
			return A4(rtfeldman$elm_css$VirtualDom$Styled$unstyleKeyedNS, ns, elemType, properties, children);
	}
};
var rtfeldman$elm_css$Html$Styled$toUnstyled = rtfeldman$elm_css$VirtualDom$Styled$toUnstyled;
var author$project$Main$view = function (model) {
	return {
		cH: _List_fromArray(
			[
				A2(elm$core$Basics$composeR, author$project$Main$body, rtfeldman$elm_css$Html$Styled$toUnstyled)(model)
			]),
		dw: 'Isdc Elm UI'
	};
};
var elm$browser$Browser$application = _Browser_application;
var author$project$Main$main = elm$browser$Browser$application(
	{c2: author$project$Main$init, c9: author$project$Main$UrlChanged, da: author$project$Main$LinkClicked, du: author$project$Main$subscriptions, dy: author$project$Main$update, dA: author$project$Main$view});
_Platform_export({'Main':{'init':author$project$Main$main(
	elm$json$Json$Decode$succeed(0))(0)}});}(this));
/*
NOT MY CODE 
From a memoization library
https://github.com/caiogondim/fast-memoize.js
*/
function memoize(fn, options) {
	let cache = options && options.cache ? options.cache : cacheDefault;

	let serializer =
		options && options.serializer
			? options.serializer
			: serializerDefault;

	let strategy =
		options && options.strategy ? options.strategy : strategyDefault;

	return strategy(fn, {
		cache: cache,
		serializer: serializer,
	});
}

function isPrimitive(value) {
	return (
		value == null ||
		typeof value === 'number' ||
		typeof value === 'boolean'
	); // || typeof value === "string" 'unsafe' primitive for our needs
}

function monadic(fn, cache, serializer, arg) {
	let cacheKey = isPrimitive(arg) ? arg : serializer(arg);

	let computedValue = cache.get(cacheKey);
	if (typeof computedValue === 'undefined') {
		computedValue = fn.call(this, arg);
		cache.set(cacheKey, computedValue);
	}

	return computedValue;
}

function variadic(fn, cache, serializer) {
	let args = Array.prototype.slice.call(arguments, 3);
	let cacheKey = serializer(args);

	let computedValue = cache.get(cacheKey);
	if (typeof computedValue === 'undefined') {
		computedValue = fn.apply(this, args);
		cache.set(cacheKey, computedValue);
	}

	return computedValue;
}

function assemble(fn, context, strategy, cache, serialize) {
	return strategy.bind(context, fn, cache, serialize);
}

function strategyDefault(fn, options) {
	let strategy = fn.length === 1 ? monadic : variadic;

	return assemble(
		fn,
		this,
		strategy,
		options.cache.create(),
		options.serializer,
	);
}

function strategyVariadic(fn, options) {
	let strategy = variadic;

	return assemble(
		fn,
		this,
		strategy,
		options.cache.create(),
		options.serializer,
	);
}

function strategyMonadic(fn, options) {
	let strategy = monadic;

	return assemble(
		fn,
		this,
		strategy,
		options.cache.create(),
		options.serializer,
	);
}

function serializerDefault() {
	return JSON.stringify(arguments);
}

function ObjectWithoutPrototypeCache() {
	this.cache = Object.create(null);
}

ObjectWithoutPrototypeCache.prototype.has = function(key) {
	return key in this.cache;
};

ObjectWithoutPrototypeCache.prototype.get = function(key) {
	return this.cache[key];
};

ObjectWithoutPrototypeCache.prototype.set = function(key, value) {
	this.cache[key] = value;
};

let cacheDefault = {
	create: function create() {
		return new ObjectWithoutPrototypeCache();
	},
};

export default memoize;
export const strategies = {
	variadic: strategyVariadic,
	monadic: strategyMonadic,
};

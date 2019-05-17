// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"functions/cache.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strategies = exports.default = void 0;

function memoize(fn, options) {
  var cache = options && options.cache ? options.cache : cacheDefault;
  var serializer = options && options.serializer ? options.serializer : serializerDefault;
  var strategy = options && options.strategy ? options.strategy : strategyDefault;
  return strategy(fn, {
    cache: cache,
    serializer: serializer
  });
}

function isPrimitive(value) {
  return value == null || typeof value === 'number' || typeof value === 'boolean'; // || typeof value === "string" 'unsafe' primitive for our needs
}

function monadic(fn, cache, serializer, arg) {
  var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
  var computedValue = cache.get(cacheKey);

  if (typeof computedValue === 'undefined') {
    computedValue = fn.call(this, arg);
    cache.set(cacheKey, computedValue);
  }

  return computedValue;
}

function variadic(fn, cache, serializer) {
  var args = Array.prototype.slice.call(arguments, 3);
  var cacheKey = serializer(args);
  var computedValue = cache.get(cacheKey);

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
  var strategy = fn.length === 1 ? monadic : variadic;
  return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}

function strategyVariadic(fn, options) {
  var strategy = variadic;
  return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}

function strategyMonadic(fn, options) {
  var strategy = monadic;
  return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}

function serializerDefault() {
  return JSON.stringify(arguments);
}

function ObjectWithoutPrototypeCache() {
  this.cache = Object.create(null);
}

ObjectWithoutPrototypeCache.prototype.has = function (key) {
  return key in this.cache;
};

ObjectWithoutPrototypeCache.prototype.get = function (key) {
  return this.cache[key];
};

ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
  this.cache[key] = value;
};

var cacheDefault = {
  create: function create() {
    return new ObjectWithoutPrototypeCache();
  }
};
var _default = memoize;
exports.default = _default;
var strategies = {
  variadic: strategyVariadic,
  monadic: strategyMonadic
};
exports.strategies = strategies;
},{}],"draw/DrawBackground.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawBackground = void 0;

var _cache = _interopRequireDefault(require("../functions/cache.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _drawBackground(canvas, color) {
  var background = document.createElement('canvas');
  background.width = canvas.width;
  background.height = canvas.height;
  var ctx = background.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, background.width, background.height);
  return background;
}

var drawBackground = (0, _cache.default)(_drawBackground);
exports.drawBackground = drawBackground;
},{"../functions/cache.js":"functions/cache.js"}],"GameFiles/Levels.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameInfo = void 0;
var GameInfo = {
  Rules: ["you", "push", "win", "stop", "sink"],
  drawn: {
    level: false,
    background: false,
    nouns: false,
    verbs: false,
    is: false,
    sprite: false
  },
  Sprite: {
    baba: "white",
    rock: "saddleBrown",
    wall: "Gray",
    flag: "yellow",
    floor: "darkSlateGray",
    water: "blue"
  },
  Text: {
    baba: "Hotpink",
    you: "Hotpink",
    flag: "yellow",
    win: "yellow",
    wall: "lightgray",
    stop: "lightGray",
    rock: "saddleBrown",
    push: "saddleBrown",
    is: "white",
    water: "blue",
    sink: "blue"
  },
  Levels: {
    "debug": {
      blocks: {
        horizantal: [[4, 9, 9, "wall", "Sprite"], [0, 4, 20, "water", "Sprite"]],
        Vertical: [[10, 10, 15, "rock", "Sprite"]],
        Sprites: [[12, 15, "baba", "Sprite"]],
        Verbs: [[6, 15, "stop", "verb"], [5, 16, "you", "verb"], [16, 15, "push", "verb"], [16, 17, "sink", "verb"]],
        Nouns: [[4, 15, "wall", "noun"], [5, 14, "baba", "noun"], [14, 15, "rock", "noun"], [14, 17, "water", "noun"]],
        is: [[5, 15], [15, 15], [15, 17]]
      }
    },
    0: {
      blocks: {
        horizantal: [//[4, 9, 9, "floor", "Sprite"],
        //[4, 10, 9, "floor", "Sprite"],
        //[4, 11, 9, "floor", "Sprite"],
        [4, 8, 15, "wall", "Sprite"], [4, 12, 15, "wall", "Sprite"]],
        Vertical: [[9, 9, 12, "rock", "Sprite"]],
        Sprites: [[5, 10, "baba", "Sprite"], [13, 10, "flag", "Sprite"]],
        Verbs: [[14, 6, "win", "verb"], [6, 6, "you", "verb"], [6, 14, "stop", "verb"], [14, 14, "push", "verb"]],
        Nouns: [[12, 6, "flag", "noun"], [4, 6, "baba", "noun"], [4, 14, "wall", "noun"], [12, 14, "rock", "noun"]],
        is: [[13, 6], [5, 6], [5, 14], [13, 14]]
      }
    },
    1: {
      blocks: {
        horizantal: [[9, 3, 16, "wall", "Sprite"], [5, 11, 16, "wall", "Sprite"], [5, 7, 10, "wall", "sprite"], [9, 17, 16, "wall", "sprite"]],
        Vertical: [[9, 4, 7, "wall", "Sprite"], [15, 4, 12, "wall", "Sprite"], [5, 8, 12, "wall", "Sprite"], [9, 12, 17, "wall", "Sprite"], [15, 12, 17, "wall", "Sprite"]],
        Sprites: [[11, 9, "flag", "noun"], [13, 14, "baba", "noun"]],
        Verbs: [[13, 7, "win", "verb"], [6, 15, "you", "verb"], [11, 15, "stop", "verb"]],
        Nouns: [[7, 9, "flag", "noun"], [6, 13, "baba", "noun"], [11, 13, "wall", "noun"]],
        is: [[11, 5], [6, 14], [11, 14]]
      }
    },
    2: {
      blocks: {
        horizantal: [[9, 3, 17, "flag", "Sprite"], [5, 11, 16, "flag", "Sprite"], [5, 7, 10, "flag", "sprite"], [9, 17, 14, "flag", "sprite"], [13, 16, 17, "flag", "Sprite"]],
        Vertical: [[9, 4, 7, "flag", "Sprite"], [16, 4, 12, "flag", "Sprite"], [5, 8, 12, "flag", "Sprite"], [9, 12, 17, "flag", "Sprite"], [16, 12, 16, "flag", "Sprite"]],
        Sprites: [, [13, 14, "wall", "noun"]],
        Verbs: [[13, 7, "win", "verb"], [6, 15, "you", "verb"], [11, 15, "stop", "verb"]],
        Nouns: [[7, 9, "baba", "noun"], [6, 13, "wall", "noun"], [11, 13, "flag", "noun"]],
        is: [[11, 5], [6, 14], [11, 14]]
      }
    },
    3: {
      blocks: {
        horizantal: [[0, 3, 2, "wall", "Sprite"], [7, 2, 13, "wall", "Sprite"]],
        Vertical: [[2, 0, 4, "wall", "Sprite"]],
        Sprites: [],
        Verbs: [[0, 2, "you", "verb"], [1, 2, "stop", "verb"]],
        Nouns: [[0, 0, "baba", "noun"], [1, 0, "wall", "noun"]],
        is: [[1, 1], [0, 1]]
      }
    }
  },
  tiles: 20
};
exports.GameInfo = GameInfo;
},{}],"blocks/BlocksCache.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allBlocks = exports.operatorBlocks = exports.verbBlocks = exports.nounBlocks = exports.spriteBlocks = void 0;
var spriteBlocks = [];
exports.spriteBlocks = spriteBlocks;
var nounBlocks = [];
exports.nounBlocks = nounBlocks;
var verbBlocks = [];
exports.verbBlocks = verbBlocks;
var operatorBlocks = [];
exports.operatorBlocks = operatorBlocks;
var allBlocks = [spriteBlocks, nounBlocks, verbBlocks, operatorBlocks];
exports.allBlocks = allBlocks;
},{}],"Math/Vector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vector = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class Vector
 * @param x - Contains the x Value for the vector
 * @param y - Contains the y Value for the Vector
 * @method add - Adds Two Vectors Together X+X Y+Y
 * @method mult - Multiplies Either Two Vecors (X * X , Y * Y) or by a scala (X * S , Y * S)
 * @method div - The inverse of Mult Divides Either by a Vector or a Scala!
 * @method limit -Forces the Magnatude of the vector to a specified number if it is greater
 */
var Vector =
/*#__PURE__*/
function () {
  function Vector() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Vector);

    this.x = x || 0;
    this.y = y || 0;
  }

  _createClass(Vector, [{
    key: "add",
    value: function add(v) {
      this.x += v.x;
      this.y += v.y;
    }
  }, {
    key: "mult",
    value: function mult(factor) {
      if (factor instanceof Vector) {
        this.x *= factor.x;
        this.y *= factor.y;
      } else {
        this.x *= factor;
        this.y *= factor;
        return this;
      }
    }
  }, {
    key: "div",
    value: function div(divisor) {
      if (divisor instanceof Vector) {
        this.x /= divisor.x;
        this.y /= divisor.y;
      } else {
        this.x /= divisor;
        this.y /= divisor;
      }
    }
  }, {
    key: "limit",
    value: function limit(max) {
      var mSq = this.x * this.x + this.y * this.y;

      if (mSq > max * max) {
        this.div(Math.sqrt(mSq)); //normalize it

        this.mult(max);
      }

      return this;
    }
  }, {
    key: "same",
    value: function same(Other) {
      if (Other instanceof Vector) {
        if (Other.x === this.x && Other.y === this.y) {
          return true;
        } else {
          return false;
        }
      }
    }
  }]);

  return Vector;
}();

exports.Vector = Vector;
},{}],"functions/CreateId.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniqueid = uniqueid;

function uniqueid() {
  // always start with a letter (for DOM friendlyness)
  var idstr = String.fromCharCode(Math.floor(Math.random() * 25 + 65));

  do {
    // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
    var ascicode = Math.floor(Math.random() * 42 + 48);

    if (ascicode < 58 || ascicode > 64) {
      // exclude all chars between : (58) and @ (64)
      idstr += String.fromCharCode(ascicode);
    }
  } while (idstr.length < 32);

  return idstr;
}
},{}],"MessageCenter/message.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = function Message(to, from, type, data) {
  _classCallCheck(this, Message);

  this.to = to;
  this.from = from;
  this.type = type;
  this.data = data;
};

exports.Message = Message;
},{}],"functions/SpriteCollide.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpriteCollision = SpriteCollision;

var _Vector = require("../Math/Vector.js");

var _BlocksCache = require("../blocks/BlocksCache.js");

var _message5 = require("../MessageCenter/message.js");

var _Main = require("../Main.js");

function SpriteCollision(other) {
  var x = other.position.x;
  var y = other.position.y;
  var left = new _Vector.Vector(x - 1, y);
  var right = new _Vector.Vector(x + 1, y);
  var up = new _Vector.Vector(x, y - 1);
  var down = new _Vector.Vector(x, y + 1);

  _BlocksCache.spriteBlocks.forEach(function (block) {
    if (block.stop) {
      if (block.position.same(left)) {
        var message = new _message5.Message(other.id, "collision", "left", true);

        _Main.Level.msgCenter.add(message);
      } else if (block.position.same(right)) {
        var _message = new _message5.Message(other.id, "collision", "right", true);

        _Main.Level.msgCenter.add(_message);
      } else if (block.position.same(up)) {
        var _message2 = new _message5.Message(other.id, "collision", "up", true);

        _Main.Level.msgCenter.add(_message2);
      } else if (block.position.same(down)) {
        var _message3 = new _message5.Message(other.id, "collision", "down", true);

        _Main.Level.msgCenter.add(_message3);
      } else {
        var _message4 = new _message5.Message(other.name, "collision", "none", false);
      }
    }
  });
}
},{"../Math/Vector.js":"Math/Vector.js","../blocks/BlocksCache.js":"blocks/BlocksCache.js","../MessageCenter/message.js":"MessageCenter/message.js","../Main.js":"Main.js"}],"functions/blockPush.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pushBlock = pushBlock;

var _BlocksCache = require("../blocks/BlocksCache.js");

var _Vector = require("../Math/Vector.js");

var _message = require("../MessageCenter/message.js");

var _Main = require("../Main.js");

function pushBlock(other, keyPressed) {
  // other = you
  var x = other.position.x;
  var y = other.position.y; // cardinal directions

  var left = new _Vector.Vector(x - 1, y);
  var right = new _Vector.Vector(x + 1, y);
  var up = new _Vector.Vector(x, y - 1);
  var down = new _Vector.Vector(x, y + 1);
  var controls = {
    KeyW: up,
    KeyS: down,
    KeyA: left,
    KeyD: right,
    ArrowUp: up,
    ArrowDown: down,
    ArrowLeft: left,
    ArrowRight: right
  };
  var direction = controls[keyPressed] === up ? 'up' : controls[keyPressed] === down ? 'down' : controls[keyPressed] === left ? 'left' : 'right';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _BlocksCache.allBlocks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var arr = _step.value;
      arr.forEach(function (block) {
        if (block.id !== other.id) {
          if (block.push) {
            if (block.position.same(controls[keyPressed])) {
              var msg = new _message.Message(block.id, 'push', block.type, direction);

              if (block.type === 'is') {
                console.log("Sending message to is block");
                console.log(block);
                console.log(msg);
              }

              _Main.Level.msgCenter.add(msg);

              pushBlock(block, keyPressed);
            }
          }
        }
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
},{"../blocks/BlocksCache.js":"blocks/BlocksCache.js","../Math/Vector.js":"Math/Vector.js","../MessageCenter/message.js":"MessageCenter/message.js","../Main.js":"Main.js"}],"functions/collision.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runCollisions = runCollisions;

var _BlocksCache = require("../blocks/BlocksCache.js");

var _SpriteCollide = require("./SpriteCollide.js.js");

var _blockPush = require("./blockPush.js.js");

function runCollisions(msg) {
  _BlocksCache.spriteBlocks.forEach(function (block) {
    if (block.you === true) {
      (0, _SpriteCollide.SpriteCollision)(block);
      (0, _blockPush.pushBlock)(block, msg);
    }
  });
}
},{"../blocks/BlocksCache.js":"blocks/BlocksCache.js","./SpriteCollide.js":"functions/SpriteCollide.js","./blockPush.js":"functions/blockPush.js"}],"functions/Controls.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controls = void 0;

var _message = require("../MessageCenter/message.js");

var _Main = require("../Main.js");

var _collision = require("./collision.js.js");

var _Restart = require("./Restart.js.js");

var controls = {
  name: 'controls',
  KeyW: false,
  KeyS: false,
  KeyA: false,
  KeyD: false,
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
  click: false,
  KeyR: false,
  onMessage: function onMessage(message) {
    if (message.to === 'controls') {
      if (message.from === 'EventListener') {
        var direction;

        switch (message.data) {
          case 'ArrowRight':
          case 'KeyD':
            direction = 'right';
            break;

          case 'ArrowLeft':
          case 'KeyA':
            direction = 'left';
            break;

          case 'ArrowUp':
          case 'KeyW':
            direction = 'up';
            break;

          case 'ArrowDown':
          case 'KeyS':
            direction = 'down';
            break;
        }

        var msg = new _message.Message('you', 'movement', message.type, direction);

        _Main.Level.msgCenter.add(msg);
      }
    }
  },
  addControls: function addControls() {
    var _this = this;

    document.addEventListener('keydown', function (event) {
      if (Object.keys(_this).includes("".concat(event.code))) {
        event.preventDefault();

        if (event.code === "KeyR") {
          (0, _Restart.Restart)(true);
        }

        (0, _collision.runCollisions)(event.code);
        var msg = new _message.Message('controls', 'EventListener', 'keyPress', event.code);

        _Main.Level.msgCenter.add(msg);
      }
    });
    document.addEventListener('keyup', function (event) {
      if (Object.keys(_this).includes("".concat(event.code))) {
        event.preventDefault();
        _this[event.code] = false;
      }
    });
    document.addEventListener('click', function () {
      _this.click = true;
    });
  }
};
exports.controls = controls;
},{"../MessageCenter/message.js":"MessageCenter/message.js","../Main.js":"Main.js","./collision.js":"functions/collision.js","./Restart.js":"functions/Restart.js"}],"functions/Restart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Restart = Restart;

var _BlocksCache = require("../blocks/BlocksCache.js");

var _Levels = require("../GameFiles/Levels.js");

var _Controls = require("./Controls.js.js");

var _Main = require("../Main.js");

function Restart() {
  var lvlChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (_Controls.controls.KeyR || lvlChange) {
    while (_BlocksCache.nounBlocks.length) {
      _BlocksCache.nounBlocks.pop();
    }

    while (_BlocksCache.verbBlocks.length) {
      _BlocksCache.verbBlocks.pop();
    }

    while (_BlocksCache.operatorBlocks.length) {
      _BlocksCache.operatorBlocks.pop();
    }

    while (_BlocksCache.spriteBlocks.length) {
      _BlocksCache.spriteBlocks.pop();
    }

    _Levels.GameInfo.drawn.level = false;

    _Main.Level.msgCenter.purge();

    console.log("Game Redrawn");
  }
}
},{"../blocks/BlocksCache.js":"blocks/BlocksCache.js","../GameFiles/Levels.js":"GameFiles/Levels.js","./Controls.js":"functions/Controls.js","../Main.js":"Main.js"}],"functions/win.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.win = win;

var _Main = require("../Main.js");

var _Levels = require("../GameFiles/Levels.js");

var _Restart = require("./Restart.js.js");

function win() {
  _Main.Level.num++;
  _Levels.GameInfo.drawn.level = false;
  console.log("You Win!");
  (0, _Restart.Restart)(true);
}
},{"../Main.js":"Main.js","../GameFiles/Levels.js":"GameFiles/Levels.js","./Restart.js":"functions/Restart.js"}],"blocks/Block.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Vector = require("../Math/Vector.js");

var _CreateId = require("../functions/CreateId.js");

var _BlocksCache = require("./BlocksCache.js.js");

var _win = require("../functions/win.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Block =
/*#__PURE__*/
function () {
  function Block(x, y, name, type) {
    var id = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : (0, _CreateId.uniqueid)();

    _classCallCheck(this, Block);

    this.position = new _Vector.Vector(x, y);
    this.name = name;
    this.id = id;
    this.type = type;
    this.you = false;
    this.push = false;
    this.win = false;
    this.stop = false;
    this.sink = false;
    this.right = false;
    this.left = false;
    this.up = false;
    this.down = false;
  }

  _createClass(Block, [{
    key: "move",
    value: function move(message) {
      var _this = this;

      if (this.you || message.to === this.id) {
        if (message.from === 'push' || !this[message.data]) {
          switch (message.data) {
            case 'right':
              this.position.x += 1;
              break;

            case 'left':
              this.position.x -= 1;
              break;

            case 'up':
              this.position.y -= 1;
              break;

            case 'down':
              this.position.y += 1;
              break;
          }
        }
      }

      this.left = false;
      this.right = false;
      this.up = false;
      this.down = false;

      if (this.win) {
        _BlocksCache.spriteBlocks.forEach(function (block) {
          if (block.you) {
            if (block.position.same(_this.position)) {
              (0, _win.win)();
            }
          }
        });
      }

      if (this.sink) {
        for (var i = 0; i < _BlocksCache.spriteBlocks.length; i++) {
          var block = _BlocksCache.spriteBlocks[i];

          if (this.position.same(block.position) && this.id !== block.id) {
            _BlocksCache.spriteBlocks.splice(i, 1);

            if (this.id === block.id) {
              console.log(this.name);
            }
          }
        }
      }
    }
  }, {
    key: "onMessage",
    value: function onMessage(msg) {
      var from = msg.from;
      var to = msg.to;

      switch (from) {
        case 'collision':
          if (to === this.id) {
            this[msg.type] = msg.data;
          }

          break;

        case 'push':
          if (to === this.id) {
            this.move(msg);
          }

          break;

        case 'movement':
          if (to === 'you') {
            this.move(msg);
          }

          break;
      }
    }
  }]);

  return Block;
}();

exports.default = Block;
},{"../Math/Vector.js":"Math/Vector.js","../functions/CreateId.js":"functions/CreateId.js","./BlocksCache.js":"blocks/BlocksCache.js","../functions/win.js":"functions/win.js"}],"blocks/NounBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Block2 = _interopRequireDefault(require("./Block.js.js"));

var _Levels = require("../GameFiles/Levels.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NounBlock =
/*#__PURE__*/
function (_Block) {
  _inherits(NounBlock, _Block);

  function NounBlock(x, y, name) {
    var _this;

    _classCallCheck(this, NounBlock);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NounBlock).call(this, x, y, name, "noun"));
    _this.push = true;
    return _this;
  }

  _createClass(NounBlock, [{
    key: "show",
    value: function show(canvas, context, cells) {
      context.fillStyle = _Levels.GameInfo.Text[this.name];
      context.textBaseline = 'top';
      context.font = "20px 'arial'";
      context.fillText(this.name, this.position.x * canvas.width / cells + 2, this.position.y * canvas.height / cells, canvas.width / cells);
    }
  }]);

  return NounBlock;
}(_Block2.default);

exports.default = NounBlock;
},{"./Block.js":"blocks/Block.js","../GameFiles/Levels.js":"GameFiles/Levels.js"}],"blocks/VerbBlocks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verbBlock = void 0;

var _Levels = require("../GameFiles/Levels.js");

var _Block2 = _interopRequireDefault(require("./Block.js.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var verbBlock =
/*#__PURE__*/
function (_Block) {
  _inherits(verbBlock, _Block);

  function verbBlock(x, y, name) {
    var _this;

    _classCallCheck(this, verbBlock);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(verbBlock).call(this, x, y, name, "verb"));
    _this.push = true;
    return _this;
  }

  _createClass(verbBlock, [{
    key: "show",
    value: function show(canvas, context, cells) {
      context.fillStyle = _Levels.GameInfo.Text[this.name];
      context.textBaseline = "top";
      context.font = "20px 'arial'";
      context.fillRect(this.position.x * canvas.width / cells, this.position.y * canvas.height / cells, canvas.width / cells, canvas.height / cells);
      context.fillStyle = "black";
      context.fillText(this.name, this.position.x * canvas.width / cells + .5, this.position.y * canvas.height / cells, canvas.width / cells);
    }
  }]);

  return verbBlock;
}(_Block2.default);

exports.verbBlock = verbBlock;
},{"../GameFiles/Levels.js":"GameFiles/Levels.js","./Block.js":"blocks/Block.js"}],"blocks/IsBlocks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBlock = void 0;

var _Vector = require("../Math/Vector.js");

var _Block2 = _interopRequireDefault(require("./Block.js.js"));

var _Levels = require("../GameFiles/Levels.js");

var _BlocksCache = require("./BlocksCache.js.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var isBlock =
/*#__PURE__*/
function (_Block) {
  _inherits(isBlock, _Block);

  function isBlock(x, y) {
    var _this;

    _classCallCheck(this, isBlock);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(isBlock).call(this, x, y, 'is', 'is'));
    _this.push = true;
    _this.ruleOne = [];
    _this.ruleTwo = [];
    return _this;
  }

  _createClass(isBlock, [{
    key: "show",
    value: function show(canvas, context, cells) {
      context.fillStyle = _Levels.GameInfo.Text[this.name];
      context.textBaseline = 'top';
      context.font = "20px 'arial'";
      context.fillText(this.name, this.position.x * canvas.width / cells + 6, this.position.y * canvas.height / cells + 3, canvas.width / cells);
    }
  }, {
    key: "rules",
    value: function rules() {
      var _this2 = this;

      var x = this.position.x;
      var y = this.position.y;
      var neighborUp = new _Vector.Vector(x, y - 1);
      var neighborDown = new _Vector.Vector(x, y + 1);
      var neighborLeft = new _Vector.Vector(x - 1, y);
      var neighborRight = new _Vector.Vector(x + 1, y);
      this.ruleOne = [];
      this.ruleTwo = [];

      _BlocksCache.nounBlocks.forEach(function (block) {
        if (neighborLeft.same(block.position)) {
          _this2.ruleOne.unshift(block.name);
        }

        if (neighborUp.same(block.position)) {
          _this2.ruleTwo.unshift(block.name);
        }
      });

      _BlocksCache.verbBlocks.forEach(function (block) {
        if (neighborRight.same(block.position)) {
          _this2.ruleOne.push(block.name);
        }

        if (neighborDown.same(block.position)) {
          _this2.ruleTwo.push(block.name);
        }
      });

      if (this.ruleOne.includes(undefined)) {
        console.log(this.ruleOne);
        this.ruleOne = [];
      }

      if (this.ruleTwo.includes(undefined)) {
        console.log(this.ruleTwo);
        this.ruleTwo = [];
      }
    }
  }]);

  return isBlock;
}(_Block2.default);

exports.isBlock = isBlock;
},{"../Math/Vector.js":"Math/Vector.js","./Block.js":"blocks/Block.js","../GameFiles/Levels.js":"GameFiles/Levels.js","./BlocksCache.js":"blocks/BlocksCache.js"}],"blocks/SpriteBlocks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpriteBlock = void 0;

var _Block2 = _interopRequireDefault(require("./Block.js.js"));

var _Levels = require("../GameFiles/Levels.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SpriteBlock =
/*#__PURE__*/
function (_Block) {
  _inherits(SpriteBlock, _Block);

  function SpriteBlock(x, y, name) {
    _classCallCheck(this, SpriteBlock);

    return _possibleConstructorReturn(this, _getPrototypeOf(SpriteBlock).call(this, x, y, name, "Sprite"));
  }

  _createClass(SpriteBlock, [{
    key: "show",
    value: function show(canvas, context, Cells) {
      context.fillStyle = _Levels.GameInfo.Sprite[this.name];
      context.fillRect(this.position.x * canvas.width / Cells, this.position.y * canvas.height / Cells, canvas.width / Cells, canvas.height / Cells);
    }
  }]);

  return SpriteBlock;
}(_Block2.default);

exports.SpriteBlock = SpriteBlock;
},{"./Block.js":"blocks/Block.js","../GameFiles/Levels.js":"GameFiles/Levels.js"}],"blockMakers/MakeBlocks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeNounBlocks = makeNounBlocks;
exports.makeVerbBlocks = makeVerbBlocks;
exports.makeIsBlocks = makeIsBlocks;
exports.makeSpritesBlocks = makeSpritesBlocks;

var _BlocksCache = require("../blocks/BlocksCache.js");

var _Levels = require("../GameFiles/Levels.js");

var _NounBlock = _interopRequireDefault(require("../blocks/NounBlock.js"));

var _VerbBlocks = require("../blocks/VerbBlocks.js");

var _IsBlocks = require("../blocks/IsBlocks.js");

var _SpriteBlocks = require("../blocks/SpriteBlocks.js");

var _Main = require("../Main.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function makeNounBlocks() {
  _Levels.GameInfo.Levels[_Main.Level.num].blocks.Nouns.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
        x = _ref2[0],
        y = _ref2[1],
        name = _ref2[2];

    return _BlocksCache.nounBlocks.push(new _NounBlock.default(x, y, name));
  });
}

function makeVerbBlocks() {
  _Levels.GameInfo.Levels[_Main.Level.num].blocks.Verbs.forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 3),
        x = _ref4[0],
        y = _ref4[1],
        name = _ref4[2];

    return _BlocksCache.verbBlocks.push(new _VerbBlocks.verbBlock(x, y, name));
  });
}

function makeIsBlocks() {
  _Levels.GameInfo.Levels[_Main.Level.num].blocks.is.forEach(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        x = _ref6[0],
        y = _ref6[1];

    return _BlocksCache.operatorBlocks.push(new _IsBlocks.isBlock(x, y));
  });
}

function makeSpritesBlocks() {
  _Levels.GameInfo.Levels[_Main.Level.num].blocks.Sprites.forEach(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 3),
        x = _ref8[0],
        y = _ref8[1],
        name = _ref8[2];

    return _BlocksCache.spriteBlocks.push(new _SpriteBlocks.SpriteBlock(x, y, name));
  });
}
},{"../blocks/BlocksCache.js":"blocks/BlocksCache.js","../GameFiles/Levels.js":"GameFiles/Levels.js","../blocks/NounBlock.js":"blocks/NounBlock.js","../blocks/VerbBlocks.js":"blocks/VerbBlocks.js","../blocks/IsBlocks.js":"blocks/IsBlocks.js","../blocks/SpriteBlocks.js":"blocks/SpriteBlocks.js","../Main.js":"Main.js"}],"blockMakers/MakeColumns.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeColumns = makeColumns;

var _BlocksCache = require("../blocks/BlocksCache.js");

var _SpriteBlocks = require("../blocks/SpriteBlocks.js");

function makeColumns(startX, startY, finishY, name, type) {
  for (var i = startY; i < finishY; i++) {
    var block = new _SpriteBlocks.SpriteBlock(startX, i, name, type);

    _BlocksCache.spriteBlocks.push(block);
  }
}
},{"../blocks/BlocksCache.js":"blocks/BlocksCache.js","../blocks/SpriteBlocks.js":"blocks/SpriteBlocks.js"}],"blockMakers/MakeRows.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeRows = makeRows;

var _BlocksCache = require("../blocks/BlocksCache.js");

var _SpriteBlocks = require("../blocks/SpriteBlocks.js");

function makeRows(startX, startY, finishX, name, type) {
  for (var i = startX; i < finishX; i++) {
    var block = new _SpriteBlocks.SpriteBlock(i, startY, name, type);

    _BlocksCache.spriteBlocks.push(block);
  }
}
},{"../blocks/BlocksCache.js":"blocks/BlocksCache.js","../blocks/SpriteBlocks.js":"blocks/SpriteBlocks.js"}],"blockMakers/MakeGroup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addGroup = addGroup;

var _MakeColumns = require("./MakeColumns.js.js");

var _MakeRows = require("./MakeRows.js.js");

var _Main = require("../Main.js");

var _Levels = require("../GameFiles/Levels.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function addGroup() {
  _Levels.GameInfo.Levels[_Main.Level.num].blocks.Vertical.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 4),
        x = _ref2[0],
        y = _ref2[1],
        y2 = _ref2[2],
        name = _ref2[3];

    (0, _MakeColumns.makeColumns)(x, y, y2, name);
  });

  _Levels.GameInfo.Levels[_Main.Level.num].blocks.horizantal.forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 4),
        x = _ref4[0],
        y = _ref4[1],
        y2 = _ref4[2],
        name = _ref4[3];

    (0, _MakeRows.makeRows)(x, y, y2, name);
  });
}
},{"./MakeColumns.js":"blockMakers/MakeColumns.js","./MakeRows.js":"blockMakers/MakeRows.js","../Main.js":"Main.js","../GameFiles/Levels.js":"GameFiles/Levels.js"}],"blockMakers/MakeLevel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeLevel = makeLevel;

var _Levels = require("../GameFiles/Levels.js");

var _MakeBlocks = require("./MakeBlocks.js.js");

var _MakeGroup = require("./MakeGroup.js.js");

var _Main = require("../Main.js");

function makeLevel() {
  if (!_Levels.GameInfo.drawn.level) {
    (0, _MakeGroup.addGroup)();
    (0, _MakeBlocks.makeNounBlocks)();
    (0, _MakeBlocks.makeIsBlocks)();
    (0, _MakeBlocks.makeSpritesBlocks)();
    (0, _MakeBlocks.makeVerbBlocks)();

    _Main.Level.msgCenter.addEntities();

    _Levels.GameInfo.drawn.level = true;
  }
}
},{"../GameFiles/Levels.js":"GameFiles/Levels.js","./MakeBlocks.js":"blockMakers/MakeBlocks.js","./MakeGroup.js":"blockMakers/MakeGroup.js","../Main.js":"Main.js"}],"debugTools/Hitboxes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collisionHelper = collisionHelper;

function collisionHelper(actor, ctx, canvas, cells) {
  ctx.strokeStyle = "blue";
  ctx.strokeRect(actor.position.x * canvas.width / cells, actor.position.y * canvas.width / cells, canvas.width / cells, 1);
  ctx.strokeStyle = "red";
  ctx.strokeRect(actor.position.x * canvas.width / cells, actor.position.y * canvas.width / cells, 1, canvas.width / cells);
  ctx.strokeStyle = "purple";
  ctx.strokeRect(actor.position.x * canvas.width / cells, actor.position.y * canvas.width / cells + canvas.width / cells, canvas.width / cells, 1);
  ctx.strokeStyle = "green";
  ctx.strokeRect(actor.position.x * canvas.width / cells + canvas.width / cells, actor.position.y * canvas.width / cells, 1, canvas.width / cells);
}
},{}],"draw/DrawBlocks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawBlocks = drawBlocks;

var _BlocksCache = require("../blocks/BlocksCache.js");

var _Hitboxes = require("../debugTools/Hitboxes.js");

function drawBlocks(canvas, context, cells) {
  drawNouns(canvas, context, cells);
  drawVerbs(canvas, context, cells);
  drawOperators(canvas, context, cells);
  drawSprites(canvas, context, cells);
}

function drawNouns(canvas, context, cells) {
  _BlocksCache.nounBlocks.forEach(function (block) {
    block.show(canvas, context, cells);
  });
}

function drawVerbs(canvas, context, cells) {
  _BlocksCache.verbBlocks.forEach(function (block) {
    block.show(canvas, context, cells);
  });
}

function drawOperators(canvas, context, cells) {
  _BlocksCache.operatorBlocks.forEach(function (block) {
    block.show(canvas, context, cells);
  });
}

function drawSprites(canvas, context, cells) {
  _BlocksCache.spriteBlocks.forEach(function (block) {
    block.show(canvas, context, cells); // collisionHelper(block,context,canvas,cells);
  });
}
},{"../blocks/BlocksCache.js":"blocks/BlocksCache.js","../debugTools/Hitboxes.js":"debugTools/Hitboxes.js"}],"Blocks/BlockLogic.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blockLogic = blockLogic;

var _BlocksCache = require("../blocks/BlocksCache.js");

function blockLogic() {
  operatorLogic();
}

function operatorLogic() {
  _BlocksCache.operatorBlocks.forEach(function (block) {
    block.rules();
  });
}
},{"../blocks/BlocksCache.js":"blocks/BlocksCache.js"}],"GameFiles/Rules.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setRules = setRules;
exports.Rules = void 0;

var _BlocksCache = require("../blocks/BlocksCache.js");

var _Levels = require("./Levels.js.js");

var Rules = {};
exports.Rules = Rules;

function setRules() {
  exports.Rules = Rules = {};

  var _loop = function _loop(i) {
    _Levels.GameInfo.Rules.forEach(function (rule) {
      return _BlocksCache.spriteBlocks[i][rule] = false;
    });
  };

  for (var i = 0; i < _BlocksCache.spriteBlocks.length; i++) {
    _loop(i);
  }

  _BlocksCache.operatorBlocks.forEach(function (block) {
    Rules[block.ruleOne[0]] = [block.ruleOne[1]];
    Rules[block.ruleTwo[0]] = [block.ruleTwo[1]];
  });

  applyRules();
}

function applyRules() {
  var rules = Object.values(Rules);
  var names = Object.keys(Rules);

  for (var i = 0; i < _BlocksCache.spriteBlocks.length; i++) {
    for (var j = 0; j < rules.length; j++) {
      if (_BlocksCache.spriteBlocks[i].name === names[j]) {
        _BlocksCache.spriteBlocks[i][rules[j]] = true;
      }
    }
  }
}
},{"../blocks/BlocksCache.js":"blocks/BlocksCache.js","./Levels.js":"GameFiles/Levels.js"}],"MessageCenter/MessageQueue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageQueue = void 0;

var _BlocksCache = require("../blocks/BlocksCache.js");

var _Controls = require("../functions/Controls.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MessageQueue =
/*#__PURE__*/
function () {
  function MessageQueue() {
    _classCallCheck(this, MessageQueue);

    this.messages = [];
    this.entities = [];
  }

  _createClass(MessageQueue, [{
    key: "add",
    value: function add(msg) {
      this.messages.push(msg);
    }
  }, {
    key: "addEntities",
    value: function addEntities() {
      var _this = this;

      for (var i = 0; i < 4; i++) {
        _BlocksCache.allBlocks[i].forEach(function (block) {
          return _this.entities.push(block);
        });
      }

      _Controls.controls.addControls;
      this.entities.push(_Controls.controls);
    }
  }, {
    key: "dispatch",
    value: function dispatch() {
      var _this2 = this;

      var _loop = function _loop(i) {
        var msg = _this2.messages[i];

        _this2.entities.forEach(function (entity) {
          console.info("\n                        Message From : ".concat(msg.from, ". \n                        Message To : ").concat(msg.to, "  \n                        Type: ").concat(msg.type, " \n                        Data: ").concat(msg.data, " "));
          entity.onMessage(msg);
        });

        _this2.messages.splice(i, 1);
      };

      for (var i = 0; i < this.messages.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "purge",
    value: function purge() {
      this.entities = [];
    }
  }]);

  return MessageQueue;
}();

exports.MessageQueue = MessageQueue;
},{"../blocks/BlocksCache.js":"blocks/BlocksCache.js","../functions/Controls.js":"functions/Controls.js"}],"Main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Level = void 0;

var _DrawBackground = require("./draw/DrawBackground.js.js");

var _Levels = require("./GameFiles/Levels.js.js");

var _MakeLevel = require("./blockMakers/MakeLevel.js.js");

var _DrawBlocks = require("./draw/DrawBlocks.js.js");

var _BlockLogic = require("./Blocks/BlockLogic.js.js");

var _Controls = require("./functions/Controls.js.js");

var _Rules = require("./GameFiles/Rules.js.js");

var _Restart = require("./functions/Restart.js.js");

var _MessageQueue = require("./MessageCenter/MessageQueue.js.js");

//import { drawGrid } from "./debugTools/GridLines.js";
//import { gridGuide } from "./debugTools/DrawNumber.js";
var Level = {
  num: 0,
  msgCenter: new _MessageQueue.MessageQueue()
};
exports.Level = Level;
var canvas = document.getElementById("screen");
var context = canvas.getContext("2d");

function setup() {
  _Controls.controls.addControls();

  draw();
}

function draw() {
  // Draw BackGround
  context.drawImage((0, _DrawBackground.drawBackground)(canvas, "black"), 0, 0); // Draw Grid
  //context.drawImage(drawGrid(canvas,GameInfo.tiles),0,0);
  // context.drawImage(gridGuide(canvas,GameInfo.tiles),0,0)
  // Gets level data from Level Object and makes the level

  (0, _MakeLevel.makeLevel)(); // Draws all the blocks

  (0, _DrawBlocks.drawBlocks)(canvas, context, _Levels.GameInfo.tiles); // checks the rules

  (0, _BlockLogic.blockLogic)(); // sends all of the messages

  Level.msgCenter.dispatch(); // sets all of the rules

  (0, _Rules.setRules)();
  (0, _Restart.Restart)();
  loop(draw);
}

function loop(name) {
  requestAnimationFrame(name);
}

setup();
},{"./draw/DrawBackground.js":"draw/DrawBackground.js","./GameFiles/Levels.js":"GameFiles/Levels.js","./blockMakers/MakeLevel.js":"blockMakers/MakeLevel.js","./draw/DrawBlocks.js":"draw/DrawBlocks.js","./Blocks/BlockLogic.js":"Blocks/BlockLogic.js","./functions/Controls.js":"functions/Controls.js","./GameFiles/Rules.js":"GameFiles/Rules.js","./functions/Restart.js":"functions/Restart.js","./MessageCenter/MessageQueue.js":"MessageCenter/MessageQueue.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63730" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","Main.js"], null)
//# sourceMappingURL=/Main.edc4ea10.js.map
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _index = _interopRequireDefault(require("../models/index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var getListLevel = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
              var listLevel, _iterator, _step, level, listLevelTopic, listTopicId, listTopic;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return _index["default"].Level.findAll({
                      raw: true
                    })["catch"](function (err) {
                      console.log(err);
                      resolve({
                        errCode: 2,
                        message: "Error in BE!",
                        error: err
                      });
                    });
                  case 3:
                    listLevel = _context.sent;
                    _iterator = _createForOfIteratorHelper(listLevel);
                    _context.prev = 5;
                    _iterator.s();
                  case 7:
                    if ((_step = _iterator.n()).done) {
                      _context.next = 19;
                      break;
                    }
                    level = _step.value;
                    _context.next = 11;
                    return _index["default"].Level_Topic.findAll({
                      where: {
                        levelId: level.id
                      }
                    });
                  case 11:
                    listLevelTopic = _context.sent;
                    listTopicId = listLevelTopic.map(function (levelTopic) {
                      return levelTopic.topicId;
                    });
                    _context.next = 15;
                    return _index["default"].Topic.findAll({
                      where: {
                        id: listTopicId
                      }
                    });
                  case 15:
                    listTopic = _context.sent;
                    level.listTopicId = listTopic;
                  case 17:
                    _context.next = 7;
                    break;
                  case 19:
                    _context.next = 24;
                    break;
                  case 21:
                    _context.prev = 21;
                    _context.t0 = _context["catch"](5);
                    _iterator.e(_context.t0);
                  case 24:
                    _context.prev = 24;
                    _iterator.f();
                    return _context.finish(24);
                  case 27:
                    resolve({
                      errCode: 0,
                      message: "Get list level successfully!",
                      listLevel: listLevel
                    });
                    _context.next = 34;
                    break;
                  case 30:
                    _context.prev = 30;
                    _context.t1 = _context["catch"](0);
                    console.log(_context.t1);
                    reject({
                      errCode: 3,
                      message: "Get list level unsuccessfully!",
                      error: _context.t1
                    });
                  case 34:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[0, 30], [5, 21, 24, 27]]);
            }));
            return function (_x, _x2) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getListLevel() {
    return _ref.apply(this, arguments);
  };
}();
var createLevel = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(listLevel) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return _index["default"].Level.bulkCreate(listLevel)["catch"](function (err) {
                      console.log(err);
                    });
                  case 3:
                    resolve({
                      errCode: 0,
                      message: "Create listLevel successfully!"
                    });
                    _context3.next = 9;
                    break;
                  case 6:
                    _context3.prev = 6;
                    _context3.t0 = _context3["catch"](0);
                    reject({
                      errCode: 2,
                      message: "Create listLevel unsuccessfully!",
                      error: _context3.t0
                    });
                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, null, [[0, 6]]);
            }));
            return function (_x4, _x5) {
              return _ref4.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function createLevel(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteLevel = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(listId) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;
                    _context5.next = 3;
                    return _index["default"].Level.destroy({
                      where: {
                        id: listId
                      }
                    })["catch"](function (err) {
                      return resolve({
                        errCode: 2,
                        message: "Delete list level unsuccessfully!"
                      });
                    });
                  case 3:
                    return _context5.abrupt("return", resolve({
                      errCode: 0,
                      message: "Delete level id: ".concat(listId, " successfully!")
                    }));
                  case 6:
                    _context5.prev = 6;
                    _context5.t0 = _context5["catch"](0);
                    console.log(_context5.t0);
                    return _context5.abrupt("return", reject({
                      errCode: 3,
                      message: "Delete list level unsuccessfully!",
                      error: _context5.t0
                    }));
                  case 10:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, null, [[0, 6]]);
            }));
            return function (_x7, _x8) {
              return _ref6.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function deleteLevel(_x6) {
    return _ref5.apply(this, arguments);
  };
}();
var updateLevel = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(levelId, levelName) {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          return _context8.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.prev = 0;
                    _context7.next = 3;
                    return _index["default"].Level.update({
                      name: levelName
                    }, {
                      where: {
                        id: levelId
                      }
                    })["catch"](function (err) {
                      console.log(err);
                      resolve({
                        errCode: 0,
                        message: "Update level unsuccessfully!"
                      });
                    });
                  case 3:
                    resolve({
                      errCode: 0,
                      message: "Update level ".concat(levelId, " successfully!")
                    });
                    _context7.next = 9;
                    break;
                  case 6:
                    _context7.prev = 6;
                    _context7.t0 = _context7["catch"](0);
                    reject({
                      errCode: 3,
                      message: "Update school ".concat(levelId, " unsuccessfully!"),
                      error: _context7.t0
                    });
                  case 9:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, null, [[0, 6]]);
            }));
            return function (_x11, _x12) {
              return _ref8.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function updateLevel(_x9, _x10) {
    return _ref7.apply(this, arguments);
  };
}();
var addTopicLevel = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(levelId, listTopicId) {
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          return _context10.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
              var listLevelTopic;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.prev = 0;
                    listLevelTopic = listTopicId.map(function (topicId) {
                      return {
                        levelId: levelId,
                        topicId: topicId
                      };
                    });
                    _context9.next = 4;
                    return _index["default"].Level_Topic.bulkCreate(listLevelTopic)["catch"](function (err) {
                      console.log(err);
                    });
                  case 4:
                    resolve({
                      errCode: 0,
                      message: "Add topics to level ".concat(levelId, " successfully!")
                    });
                    _context9.next = 10;
                    break;
                  case 7:
                    _context9.prev = 7;
                    _context9.t0 = _context9["catch"](0);
                    resolve({
                      errCode: 0,
                      message: "Add topics to level ".concat(levelId, " unsuccessfully!"),
                      error: _context9.t0
                    });
                  case 10:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, null, [[0, 7]]);
            }));
            return function (_x15, _x16) {
              return _ref10.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function addTopicLevel(_x13, _x14) {
    return _ref9.apply(this, arguments);
  };
}();
var deleteTopicLevel = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(levelId, listTopicId) {
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          return _context12.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.prev = 0;
                    _context11.next = 3;
                    return _index["default"].Level_Topic.destroy({
                      where: {
                        levelId: levelId,
                        topicId: listTopicId
                      }
                    })["catch"](function (error) {
                      return resolve({
                        errCode: 2,
                        message: "Delete list topic from level unsuccessfully!",
                        error: error
                      });
                    });
                  case 3:
                    resolve({
                      errCode: 0,
                      message: "Delete topics from level ".concat(levelId, " successfully!")
                    });
                    _context11.next = 9;
                    break;
                  case 6:
                    _context11.prev = 6;
                    _context11.t0 = _context11["catch"](0);
                    return _context11.abrupt("return", resolve({
                      errCode: 3,
                      message: "Delete list topic from level unsuccessfully!",
                      error: _context11.t0
                    }));
                  case 9:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11, null, [[0, 6]]);
            }));
            return function (_x19, _x20) {
              return _ref12.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function deleteTopicLevel(_x17, _x18) {
    return _ref11.apply(this, arguments);
  };
}();
var unlockLevel = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(levelId, studentId) {
    var isUnlock;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return _index["default"].Level.findOne({
            where: {
              id: levelId
            }
          });
        case 2:
          _context13.next = 4;
          return _index["default"].Unlock.findOne({
            where: {
              studentId: studentId,
              levelId: levelId
            }
          });
        case 4:
          isUnlock = _context13.sent;
          if (isUnlock) {
            _context13.next = 11;
            break;
          }
          _context13.next = 8;
          return _index["default"].Unlock.create({
            studentId: studentId,
            levelId: levelId
          })["catch"](function (err) {
            console.log(err);
          });
        case 8:
          console.log("Màn này chưa chơi");
          _context13.next = 12;
          break;
        case 11:
          console.log("Màn này đã chơi rồi");
        case 12:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function unlockLevel(_x21, _x22) {
    return _ref13.apply(this, arguments);
  };
}();
var getMaxScoreTimeOfLevel = function getMaxScoreTimeOfLevel(studentId, levelId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(resolve, reject) {
      var maxScore, records, recordWithMinTimeDifference;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _context14.next = 3;
            return _index["default"].Game.max("score", {
              where: {
                studentId: studentId,
                levelId: levelId
              }
            });
          case 3:
            maxScore = _context14.sent;
            _context14.next = 6;
            return _index["default"].Game.findAll({
              attributes: ["score", [_index["default"].sequelize.literal("TIMESTAMPDIFF(SECOND, `createdAt`, `updatedAt`)"), "timeDifference"]],
              where: {
                score: maxScore,
                studentId: studentId,
                levelId: levelId
              }
            });
          case 6:
            records = _context14.sent;
            // Tìm người dùng có timeDifference nhỏ nhất trong số những người có max age
            recordWithMinTimeDifference = records.reduce(function (minRecord, currentRecord) {
              return currentRecord.timeDifference < minRecord.timeDifference ? currentRecord : minRecord;
            }, records[0]);
            return _context14.abrupt("return", resolve(recordWithMinTimeDifference));
          case 11:
            _context14.prev = 11;
            _context14.t0 = _context14["catch"](0);
            console.log("🚀 ~ returnnewPromise ~ error:", _context14.t0);
            resolve("Error in BE");
          case 15:
          case "end":
            return _context14.stop();
        }
      }, _callee14, null, [[0, 11]]);
    }));
    return function (_x23, _x24) {
      return _ref14.apply(this, arguments);
    };
  }());
};
var currentLevel = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(studentId) {
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          return _context16.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(resolve, reject) {
              var levelMatrix, scoreTimeMatrix, listLevelId, _iterator2, _step2, levelId, row, col, levelTimeScore;
              return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                while (1) switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.prev = 0;
                    //! Tạo ma trận level
                    levelMatrix = Array.from({
                      length: 3
                    }, function () {
                      return Array(20).fill(0);
                    });
                    scoreTimeMatrix = Array.from({
                      length: 3
                    }, function () {
                      return Array(20).fill(0);
                    });
                    _context15.next = 5;
                    return _index["default"].Unlock.findAll({
                      where: {
                        studentId: studentId
                      },
                      attributes: ["levelId"],
                      raw: true
                    })["catch"](function (err) {
                      console.log(err);
                    });
                  case 5:
                    listLevelId = _context15.sent;
                    listLevelId = listLevelId.map(function (element) {
                      return element.levelId;
                    });
                    _iterator2 = _createForOfIteratorHelper(listLevelId);
                    _context15.prev = 8;
                    _iterator2.s();
                  case 10:
                    if ((_step2 = _iterator2.n()).done) {
                      _context15.next = 21;
                      break;
                    }
                    levelId = _step2.value;
                    row = levelId % 3 - 1;
                    col = Math.ceil(levelId / 3) - 1;
                    levelMatrix[row][col] = 1;
                    _context15.next = 17;
                    return getMaxScoreTimeOfLevel(studentId, levelId)["catch"](function (err) {
                      console.log(err);
                    });
                  case 17:
                    levelTimeScore = _context15.sent;
                    scoreTimeMatrix[row][col] = levelTimeScore;
                  case 19:
                    _context15.next = 10;
                    break;
                  case 21:
                    _context15.next = 26;
                    break;
                  case 23:
                    _context15.prev = 23;
                    _context15.t0 = _context15["catch"](8);
                    _iterator2.e(_context15.t0);
                  case 26:
                    _context15.prev = 26;
                    _iterator2.f();
                    return _context15.finish(26);
                  case 29:
                    resolve({
                      errCode: 0,
                      message: "Get current level of student ".concat(studentId, " successfully!"),
                      levelMatrix: levelMatrix,
                      scoreTimeMatrix: scoreTimeMatrix
                    });
                    _context15.next = 35;
                    break;
                  case 32:
                    _context15.prev = 32;
                    _context15.t1 = _context15["catch"](0);
                    resolve({
                      errCode: 0,
                      message: "Get current level of student ".concat(studentId, " unsuccessfully!"),
                      error: _context15.t1
                    });
                  case 35:
                  case "end":
                    return _context15.stop();
                }
              }, _callee15, null, [[0, 32], [8, 23, 26, 29]]);
            }));
            return function (_x26, _x27) {
              return _ref16.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function currentLevel(_x25) {
    return _ref15.apply(this, arguments);
  };
}();
module.exports = {
  getListLevel: getListLevel,
  createLevel: createLevel,
  deleteLevel: deleteLevel,
  updateLevel: updateLevel,
  addTopicLevel: addTopicLevel,
  deleteTopicLevel: deleteTopicLevel,
  unlockLevel: unlockLevel,
  currentLevel: currentLevel
};
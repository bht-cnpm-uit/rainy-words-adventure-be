"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveGame = exports.getRandomWords = exports.getLeaderboardByGame = exports.getLeaderboardAllGame = exports.currentItemsOfStudent = void 0;
var _index = _interopRequireDefault(require("../models/index"));
var _levelService = require("./levelService");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var getLeaderboardByGame = exports.getLeaderboardByGame = function getLeaderboardByGame(levelId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _index["default"].Game.findAll({
              where: {
                levelId: levelId
              },
              include: {
                model: _index["default"].Student,
                attributes: ["name", "grade", "phonenumber"]
              },
              attributes: ["score", "updatedAt"],
              order: [["score", "DESC"]]
            });
          case 3:
            result = _context.sent;
            if (result.length > 0) {
              resolve({
                message: "Get learderboard successfully!",
                errCode: 0,
                leaderboard: result
              });
            } else {
              resolve({
                message: "Level does not have any student passing!",
                errCode: 1,
                leaderboard: result
              });
            }
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            reject({
              message: "Fail to get leaderboard!",
              errCode: 2,
              output: _context.t0
            });
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
var getLeaderboardAllGame = exports.getLeaderboardAllGame = function getLeaderboardAllGame() {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var query, result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            query = "\n        SELECT\n            students.id,\n            students.name AS Name,\n            schools.name AS School,\n            students.grade AS Grade,\n            SUM(score) AS Score,\n            DATE_FORMAT(MAX(games.LastTime),\n            '%d/%m/%Y') AS LastTime,\n            totalTime as TotalTime\n        FROM\n            students\n        INNER JOIN(\n            WITH\n                ranked_scores AS(\n                SELECT\n                    studentId,\n                    levelId,\n                    score,\n                    updatedAt,\n                    TIMESTAMPDIFF(SECOND, createdAt, updatedAt) AS totalTime,\n                    ROW_NUMBER() OVER(\n                    PARTITION BY studentId,\n                    levelId\n                ORDER BY\n                    score\n                DESC\n                    ,\n                    TIMESTAMPDIFF(SECOND, createdAt, updatedAt) ASC\n                ) AS row_num\n            FROM\n                games)\n                SELECT\n                    studentId,\n                    levelId,\n                    score,\n                    totalTime,\n                updatedAt as LastTime\n                FROM\n                    ranked_scores\n                WHERE\n                    row_num = 1\n            ) AS games\n        ON\n            students.id = games.studentId\n        INNER JOIN schools ON students.schoolId = schools.id\n        GROUP BY\n            students.id,\n            students.name,\n            schools.name\n        ORDER BY\n            score\n        DESC\n      ";
            _context2.next = 4;
            return _index["default"].sequelize.query(query, {
              type: _index["default"].sequelize.QueryTypes.SELECT
            });
          case 4:
            result = _context2.sent;
            if (result.length > 0) {
              resolve({
                message: "Get leaderboard successfully!",
                errCode: 0,
                leaderboard: result
              });
            } else {
              resolve({
                message: "Leaderboard has no records!",
                errCode: 2,
                leaderboard: []
              });
            }
            _context2.next = 12;
            break;
          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            reject({
              message: "Fail to get leaderboard!",
              errCode: 2,
              output: _context2.t0
            });
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 8]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var getWordsByProbability = function getWordsByProbability(words, probabilities, numWords) {
  // Phân loại các từ theo mức độ khó
  var levels = {
    Easy: [],
    Medium: [],
    Hard: []
  };
  words.forEach(function (word) {
    if (levels[word.levelVocab]) {
      levels[word.levelVocab].push(word);
    }
  });

  // Tính số lượng từ cần lấy cho mỗi mức độ khó
  var easyCount = Math.floor(probabilities[0] * numWords);
  var mediumCount = Math.floor(probabilities[1] * numWords);
  var hardCount = Math.floor(probabilities[2] * numWords);
  var result = [];

  // Hàm để lấy từ từ mức độ khó cụ thể
  var getWords = function getWords(level, count) {
    var selectedWords = [];
    while (count > 0) {
      if (levels[level].length > 0) {
        selectedWords.push(levels[level].shift());
        count--;
      } else {
        if (level === "Hard") {
          level = "Medium";
        } else if (level === "Medium") {
          level = "Easy";
        } else {
          break;
        }
      }
    }
    return selectedWords;
  };
  result = result.concat(getWords("Hard", hardCount));
  result = result.concat(getWords("Medium", mediumCount));
  result = result.concat(getWords("Easy", easyCount));

  // Kiểm tra nếu vẫn chưa đủ số lượng từ yêu cầu thì lấy thêm từ mức độ Beginner
  if (result.length < numWords) {
    result = result.concat(getWords("Easy", numWords - result.length));
  }
  if (result.length < numWords) {
    result = result.concat(getWords("Medium", numWords - result.length));
  }
  if (result.length < numWords) {
    result = result.concat(getWords("Hard", numWords - result.length));
  }
  return result;
};
var getRandomWords = exports.getRandomWords = function getRandomWords(levelId, probabilities, numWords) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var listTopic, listRandomWord, _iterator, _step, topicId, listWord, listRandomWordByProbability;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _index["default"].Level_Topic.findAll({
              where: {
                levelId: levelId
              },
              raw: true
            }).then(function (levels) {
              return levels.map(function (level) {
                return level.topicId;
              });
            });
          case 3:
            listTopic = _context3.sent;
            console.log(listTopic);
            listRandomWord = [];
            _iterator = _createForOfIteratorHelper(listTopic);
            _context3.prev = 7;
            _iterator.s();
          case 9:
            if ((_step = _iterator.n()).done) {
              _context3.next = 17;
              break;
            }
            topicId = _step.value;
            _context3.next = 13;
            return _index["default"].Word.findAll({
              where: {
                topicId: topicId
              },
              order: _index["default"].Sequelize.literal("rand()")
            });
          case 13:
            listWord = _context3.sent;
            listRandomWord = listRandomWord.concat(listWord);
          case 15:
            _context3.next = 9;
            break;
          case 17:
            _context3.next = 22;
            break;
          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](7);
            _iterator.e(_context3.t0);
          case 22:
            _context3.prev = 22;
            _iterator.f();
            return _context3.finish(22);
          case 25:
            listRandomWordByProbability = getWordsByProbability(listRandomWord, probabilities, numWords);
            console.log("chck random: ", listRandomWordByProbability);
            resolve({
              message: "Get list word successfully!",
              errCode: 0,
              listWord: listRandomWordByProbability
            });
            _context3.next = 34;
            break;
          case 30:
            _context3.prev = 30;
            _context3.t1 = _context3["catch"](0);
            console.log(_context3.t1);
            resolve(_context3.t1);
          case 34:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 30], [7, 19, 22, 25]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var getAchievement = function getAchievement(cup) {
  // nothing
  if (cup <= 0) return 0;
  // Khung xanh + hồng
  if (cup == 1) return 1;
  // Đồng
  if (cup == 2) return 2;
  // Bạc
  if (cup == 3) return 3;
  // Vàng
  if (cup >= 4 && cup < 6) return 4;
  //Kim cương
  if (cup >= 6) return 5;
};
var getAchievementsByListId = function getAchievementsByListId(listId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var listAchievement;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            console.log(listId);
            _context4.next = 4;
            return _index["default"].Achievement.findAll({
              where: {
                id: _defineProperty({}, _index["default"].Sequelize.Op["in"], listId)
              },
              raw: true,
              attributes: ["id", "name"]
            });
          case 4:
            listAchievement = _context4.sent;
            return _context4.abrupt("return", resolve(listAchievement));
          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log("Looix e");
            console.log(_context4.t0);
            reject(_context4.t0);
          case 13:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 8]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var getItemsByListId = function getItemsByListId(listId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var listItem;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _index["default"].Item.findAll({
              where: {
                id: _defineProperty({}, _index["default"].Sequelize.Op["in"], listId)
              },
              raw: true,
              attributes: ["id", "name"]
            });
          case 3:
            listItem = _context5.sent;
            return _context5.abrupt("return", resolve(listItem));
          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log("Looix e");
            console.log(_context5.t0);
            reject(_context5.t0);
          case 12:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 7]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};
var saveListAchievement = function saveListAchievement(studentId, listId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var listStudentAchievement;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            listStudentAchievement = listId.map(function (achievementId) {
              return {
                studentId: studentId,
                achievementId: achievementId
              };
            });
            _context6.next = 4;
            return _index["default"].Achievement_Student.bulkCreate(listStudentAchievement)["catch"](function (err) {
              console.log(err);
            });
          case 4:
            return _context6.abrupt("return", resolve(1));
          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            return _context6.abrupt("return", resolve(0));
          case 11:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 7]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
};
var saveGame = exports.saveGame = function saveGame(levelId, studentId, score, items, time) {
  var minScore = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 200;
  return new Promise( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
      var beforeItem, endTime, startTime, game, isPassLevel, afterItem, gainedCup, listItemId, i, countBefore, countAfter, listItemTriggerCup, student, beforeCup, beforeAchievement, afterAchievement, listAchievementId, j, listAchievement;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return currentItemsOfStudent(studentId);
          case 3:
            beforeItem = _context7.sent;
            endTime = new Date();
            startTime = new Date(endTime.getTime() - time * 1000); //! Lưu record game
            _context7.next = 8;
            return _index["default"].Game.create({
              levelId: levelId,
              studentId: studentId,
              score: score,
              createdAt: startTime
            })["catch"](function (err) {
              console.log(err);
            });
          case 8:
            game = _context7.sent;
            //! Nếu điểm lớn hơn điểm tối thiểu thì unlock level
            isPassLevel = true;
            if (score > minScore) {
              (0, _levelService.unlockLevel)(levelId, studentId);

              //console.log("Vượt qua level");
            } else {
              isPassLevel = false;
              //console.log("Không vượt qua level");
            }

            //! Thêm student id vào
            items = items.map(function (element) {
              return _objectSpread(_objectSpread({}, element), {}, {
                studentId: studentId
              });
            });

            //! Lưu số item kiếm được
            _context7.next = 14;
            return _index["default"].Student_Item.bulkCreate(items)["catch"](function (err) {
              console.log(err);
            });
          case 14:
            _context7.next = 16;
            return currentItemsOfStudent(studentId);
          case 16:
            afterItem = _context7.sent;
            gainedCup = 0;
            listItemId = [];
            for (i = 0; i < 6; i++) {
              countBefore = parseInt(beforeItem[i].count) < 500;
              countAfter = parseInt(afterItem[i].count) >= 500;
              if (countBefore && countAfter) {
                gainedCup++;
                listItemId.push(i + 1);
              }
            }

            //! Get items info that trigger getting new cup
            _context7.next = 22;
            return getItemsByListId(listItemId);
          case 22:
            listItemTriggerCup = _context7.sent;
            _context7.next = 25;
            return _index["default"].Student.findOne({
              where: {
                id: studentId
              }
            });
          case 25:
            student = _context7.sent;
            beforeCup = student.cup;
            beforeAchievement = getAchievement(beforeCup);
            afterAchievement = getAchievement(beforeCup + gainedCup);
            listAchievementId = [];
            if (beforeAchievement != afterAchievement && afterAchievement >= 2) {
              console.log("Them danh hieu");
              for (j = beforeAchievement; j < afterAchievement; j++) {
                listAchievementId.push(j + 1);
              }
            }
            _context7.next = 33;
            return saveListAchievement(studentId, listAchievementId);
          case 33:
            _context7.next = 35;
            return getAchievementsByListId(listAchievementId)["catch"](function (err) {
              console.log(err);
            });
          case 35:
            listAchievement = _context7.sent;
            if (!(gainedCup > 0)) {
              _context7.next = 39;
              break;
            }
            _context7.next = 39;
            return _index["default"].Student.increment({
              cup: gainedCup
            }, {
              where: {
                id: studentId
              }
            });
          case 39:
            // Logic get achievement

            resolve({
              message: "Create game successfully!",
              errCode: 0,
              game: game,
              isPassLevel: isPassLevel,
              listAchievement: listAchievement,
              itemsGetCup: listItemTriggerCup
            });
            _context7.next = 46;
            break;
          case 42:
            _context7.prev = 42;
            _context7.t0 = _context7["catch"](0);
            console.log("🚀 ~ returnnewPromise ~ error:", _context7.t0);
            resolve({
              message: "Create game unsuccessfully!",
              errCode: 1
            });
          case 46:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 42]]);
    }));
    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }());
};
var currentItemsOfStudent = exports.currentItemsOfStudent = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(studentId) {
    var query, currentItem;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          query = "\n        SELECT id, name, count\n    FROM items LEFT JOIN\n        (SELECT itemId, SUM(quantity) AS \"count\" \n        FROM student_item\n        WHERE studentId = ?\n        GROUP BY itemId \n        ORDER BY itemId) AS COUNT_ITEM\n    ON items.id = COUNT_ITEM.itemId\n  ";
          _context8.next = 3;
          return _index["default"].sequelize.query(query, {
            replacements: [studentId],
            type: _index["default"].sequelize.QueryTypes.SELECT
          });
        case 3:
          currentItem = _context8.sent;
          currentItem = currentItem.map(function (element) {
            return _objectSpread(_objectSpread({}, element), {}, {
              count: element.count || 0
            });
          });
          return _context8.abrupt("return", currentItem);
        case 6:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function currentItemsOfStudent(_x15) {
    return _ref8.apply(this, arguments);
  };
}();
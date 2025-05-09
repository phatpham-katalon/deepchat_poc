function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n2 = 0, F = function F() {}; return { s: F, n: function n() { return _n2 >= r.length ? { done: !0 } : { done: !1, value: r[_n2++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Un = /*#__PURE__*/function () {
  function Un() {
    _classCallCheck(this, Un);
  }
  return _createClass(Un, null, [{
    key: "render",
    value: function render(e, t) {
      var i = document.createElement("div");
      i.id = "error-view", i.innerText = t, e.replaceChildren(i);
    }
  }]);
}();
var gi = /*#__PURE__*/function () {
  function gi() {
    _classCallCheck(this, gi);
  }
  return _createClass(gi, null, [{
    key: "onLoad",
    value: function onLoad(e) {
      e.innerHTML = '<div id="loading-validate-key-property"></div>';
    }
  }, {
    key: "createElements",
    value: function createElements() {
      var e = document.createElement("div");
      return e.id = "validate-property-key-view", e;
    }
  }, {
    key: "render",
    value: function render(e, t, i) {
      var s = gi.createElements(),
        r = {
          onSuccess: t,
          onFail: Un.render.bind(this, e, "Your 'key' has failed authentication"),
          onLoad: gi.onLoad.bind(this, s)
        };
      i.key && i.verifyKey(i.key, r), e.replaceChildren(s);
    }
  }]);
}();
var I = /*#__PURE__*/function () {
  function I() {
    _classCallCheck(this, I);
  }
  return _createClass(I, null, [{
    key: "unsetStyle",
    value: function unsetStyle(e, t) {
      var i = Object.keys(t).reduce(function (s, r) {
        return s[r] = "", s;
      }, {});
      Object.assign(e.style, i);
    }
  }, {
    key: "unsetActivityCSSMouseStates",
    value: function unsetActivityCSSMouseStates(e, t) {
      t.click && I.unsetStyle(e, t.click), t.hover && I.unsetStyle(e, t.hover);
    }
  }, {
    key: "unsetAllCSSMouseStates",
    value: function unsetAllCSSMouseStates(e, t) {
      I.unsetActivityCSSMouseStates(e, t), t["default"] && I.unsetStyle(e, t["default"]);
    }
    // if you want to asdd default styling - use pure css classes
  }, {
    key: "processStateful",
    value: function processStateful(e) {
      var t = e["default"] || {},
        i = Object.assign(JSON.parse(JSON.stringify(t)), e == null ? void 0 : e.hover),
        s = Object.assign(JSON.parse(JSON.stringify(i)), e == null ? void 0 : e.click);
      return {
        "default": t,
        hover: i,
        click: s
      };
    }
  }, {
    key: "mergeStatefulStyles",
    value: function mergeStatefulStyles(e) {
      var t = {
        "default": {},
        hover: {},
        click: {}
      };
      return e.forEach(function (i) {
        t["default"] = Object.assign(t["default"], i["default"]), t.hover = Object.assign(t.hover, i.hover), t.click = Object.assign(t.click, i.click);
      }), t;
    }
  }, {
    key: "overwriteDefaultWithAlreadyApplied",
    value: function overwriteDefaultWithAlreadyApplied(e, t) {
      Object.keys(e["default"] || []).forEach(function (i) {
        var r;
        var s = i;
        t.style[s] && (r = e["default"]) != null && r[s] && (e["default"][i] = t.style[s]);
      });
    }
  }, {
    key: "applyToStyleIfNotDefined",
    value: function applyToStyleIfNotDefined(e, t) {
      for (var i in t) {
        var s = t[i];
        e[i] === "" && s && (e[i] = s);
      }
    }
  }]);
}();
var We = /*#__PURE__*/function () {
  function We() {
    _classCallCheck(this, We);
  }
  return _createClass(We, null, [{
    key: "attemptAppendStyleSheetToHead",
    value: function attemptAppendStyleSheetToHead(e) {
      if (e.fontFamily && e.fontFamily !== We.DEFAULT_FONT_FAMILY) return;
      var t = document.getElementsByTagName("head")[0];
      if (!Array.from(t.getElementsByTagName("link")).some(function (s) {
        return s.getAttribute("href") === We.FONT_URL;
      })) {
        var s = document.createElement("link");
        s.rel = "stylesheet", s.href = We.FONT_URL, t.appendChild(s);
      }
    }
  }]);
}();
We.FONT_URL = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap", We.DEFAULT_FONT_FAMILY = "'Inter', sans-serif, Avenir, Helvetica, Arial";
var bi = We;
var dt = /*#__PURE__*/function () {
  function dt() {
    _classCallCheck(this, dt);
  }
  return _createClass(dt, null, [{
    key: "apply",
    value: function apply(e, t) {
      if (t) try {
        dt.applyStyleSheet(e, t);
      } catch (_unused) {
        dt.addStyleElement(e, t);
      }
    }
  }, {
    key: "applyStyleSheet",
    value: function applyStyleSheet(e, t) {
      var i = new CSSStyleSheet();
      i.replaceSync(e), t.adoptedStyleSheets.push(i);
    }
  }, {
    key: "addStyleElement",
    value: function addStyleElement(e, t) {
      var i = document.createElement("style");
      i.innerHTML = e, t.appendChild(i);
    }
  }, {
    key: "applyDefaultStyleToComponent",
    value: function applyDefaultStyleToComponent(e, t) {
      t && I.applyToStyleIfNotDefined(e, t), I.applyToStyleIfNotDefined(e, dt.DEFAULT_COMPONENT_STYLE);
    }
  }]);
}();
dt.DEFAULT_COMPONENT_STYLE = {
  height: "350px",
  width: "320px",
  borderTop: "1px solid #cacaca",
  borderRight: "1px solid #cacaca",
  borderLeft: "1px solid #cacaca",
  borderBottom: "1px solid #cacaca",
  fontFamily: bi.DEFAULT_FONT_FAMILY,
  fontSize: "0.9rem",
  backgroundColor: "white",
  position: "relative",
  // this is used to prevent inputAreaStyle background color from going beyond the container's rounded border
  // it will cause issues if there are elements that are meant to be outside of the chat component and in
  // that instance they should overwrite this
  // this is also causing the chat to squeeze when there is no space
  overflow: "hidden"
};
var Ht = dt;
var $t = /*#__PURE__*/_createClass(function $t() {
  _classCallCheck(this, $t);
});
$t.IS_SAFARI = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), $t.IS_CHROMIUM = window.chrome, $t.IS_MOBILE = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var De = $t;
var U = /* @__PURE__ */function (n) {
  return n.ESCAPE = "Escape", n.ENTER = "Enter", n.TAB = "Tab", n.ARROW_UP = "ArrowUp", n.ARROW_DOWN = "ArrowDown", n.ARROW_RIGHT = "ArrowRight", n.ARROW_LEFT = "ArrowLeft", n.BACKSPACE = "Backspace", n.DELETE = "Delete", n.META = "Meta", n.CONTROL = "Control", n;
}(U || {});
var Je = /*#__PURE__*/function () {
  function Je() {
    _classCallCheck(this, Je);
  }
  return _createClass(Je, null, [{
    key: "add",
    value:
    // prettier-ignore
    function add(e, t, i, s) {
      i !== void 0 && e.addEventListener("keydown", Je.onKeyDown.bind(this, i)), e.oninput = Je.onInput.bind(this, i, s), e.addEventListener("paste", function (r) {
        var o;
        r.preventDefault(), (o = r.clipboardData) != null && o.files.length && t.addFilesToAnyType(Array.from(r.clipboardData.files));
      });
    }
    // preventing insertion early for a nicer UX
    // prettier-ignore
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e, t) {
      var s = t.target.textContent;
      s && s.length >= e && !Je.PERMITTED_KEYS.has(t.key) && !Je.isKeyCombinationPermitted(t) && t.preventDefault();
    }
  }, {
    key: "isKeyCombinationPermitted",
    value: function isKeyCombinationPermitted(e) {
      return e.key === "a" ? e.ctrlKey || e.metaKey : !1;
    }
  }, {
    key: "onInput",
    value: function onInput(e, t, i) {
      var s = i.target,
        r = s.textContent || "";
      e !== void 0 && r.length > e && (s.textContent = r.substring(0, e), ai.focusEndOfInput(s)), t == null || t();
    }
  }]);
}();
Je.PERMITTED_KEYS = /* @__PURE__ */new Set([U.BACKSPACE, U.DELETE, U.ARROW_RIGHT, U.ARROW_LEFT, U.ARROW_DOWN, U.ARROW_UP, U.META, U.CONTROL, U.ENTER]);
var Yi = Je;
var jn = /*#__PURE__*/function () {
  function jn() {
    _classCallCheck(this, jn);
  }
  return _createClass(jn, null, [{
    key: "sanitizePastedTextContent",
    value: function sanitizePastedTextContent(e) {
      var i, s;
      e.preventDefault();
      var t = (i = e.clipboardData) == null ? void 0 : i.getData("text/plain");
      t && ((s = document.execCommand) == null || s.call(document, "insertText", !1, t));
    }
  }]);
}();
var Xe = /*#__PURE__*/function () {
  function Xe(e, t, i) {
    var _this = this;
    _classCallCheck(this, Xe);
    var r, o;
    this._isComposing = !1;
    var s = Xe.processConfig(t, e.textInput);
    this.elementRef = Xe.createContainerElement((r = s == null ? void 0 : s.styles) == null ? void 0 : r.container), this._config = s, this.inputElementRef = this.createInputElement(), this.elementRef.appendChild(this.inputElementRef), e.setPlaceholderText = this.setPlaceholderText.bind(this), e.setPlaceholderText(((o = this._config.placeholder) == null ? void 0 : o.text) || "Ask me anything!"), setTimeout(function () {
      Yi.add(_this.inputElementRef, i, _this._config.characterLimit, e._validationHandler);
    });
  }
  return _createClass(Xe, [{
    key: "clear",
    value:
    // this also similarly prevents scroll up
    function clear() {
      var t;
      var e = window.scrollY;
      this.inputElementRef.classList.contains("text-input-disabled") || (Object.assign(this.inputElementRef.style, (t = this._config.placeholder) == null ? void 0 : t.style), this.inputElementRef.textContent = "", ai.focusEndOfInput(this.inputElementRef)), De.IS_CHROMIUM && window.scrollTo({
        top: e
      });
    }
  }, {
    key: "createInputElement",
    value: function createInputElement() {
      var t, i, s, r;
      var e = document.createElement("div");
      return e.id = Xe.TEXT_INPUT_ID, e.classList.add("text-input-styling"), e.role = "textbox", De.IS_CHROMIUM && Xe.preventAutomaticScrollUpOnNewLine(e), typeof this._config.disabled == "boolean" && this._config.disabled === !0 ? (e.contentEditable = "false", e.classList.add("text-input-disabled"), e.setAttribute("aria-disabled", "true")) : (e.contentEditable = "true", e.removeAttribute("aria-disabled"), this.addEventListeners(e)), Object.assign(e.style, (t = this._config.styles) == null ? void 0 : t.text), Object.assign(e.style, (i = this._config.placeholder) == null ? void 0 : i.style), (r = (s = this._config.placeholder) == null ? void 0 : s.style) != null && r.color || e.setAttribute("textcolor", ""), e;
    }
  }, {
    key: "removePlaceholderStyle",
    value: function removePlaceholderStyle() {
      var e, t, i, s;
      !this.inputElementRef.classList.contains("text-input-disabled") && (e = this._config.placeholder) != null && e.style && (I.unsetStyle(this.inputElementRef, (t = this._config.placeholder) == null ? void 0 : t.style), Object.assign(this.inputElementRef.style, (s = (i = this._config) == null ? void 0 : i.styles) == null ? void 0 : s.text));
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners(e) {
      var _this2 = this;
      var t, i;
      (t = this._config.styles) != null && t.focus && (e.onfocus = function () {
        var s;
        return Object.assign(_this2.elementRef.style, (s = _this2._config.styles) == null ? void 0 : s.focus);
      }, e.onblur = this.onBlur.bind(this, this._config.styles.focus, (i = this._config.styles) == null ? void 0 : i.container)), e.addEventListener("keydown", this.onKeydown.bind(this)), e.addEventListener("input", this.onInput.bind(this)), e.addEventListener("paste", jn.sanitizePastedTextContent), e.addEventListener("compositionstart", function () {
        return _this2._isComposing = !0;
      }), e.addEventListener("compositionend", function () {
        return _this2._isComposing = !1;
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur(e, t) {
      I.unsetStyle(this.elementRef, e), t && Object.assign(this.elementRef.style, t);
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(e) {
      var t;
      e.key === U.ENTER && !De.IS_MOBILE && !this._isComposing && !e.ctrlKey && !e.shiftKey && (e.preventDefault(), (t = this.submit) == null || t.call(this));
    }
  }, {
    key: "onInput",
    value: function onInput() {
      var e;
      this.isTextInputEmpty() ? Object.assign(this.inputElementRef.style, (e = this._config.placeholder) == null ? void 0 : e.style) : this.removePlaceholderStyle();
    }
  }, {
    key: "setPlaceholderText",
    value: function setPlaceholderText(e) {
      this.inputElementRef.setAttribute("deep-chat-placeholder-text", e), this.inputElementRef.setAttribute("aria-label", e);
    }
  }, {
    key: "isTextInputEmpty",
    value: function isTextInputEmpty() {
      return this.inputElementRef.textContent === "";
    }
  }], [{
    key: "processConfig",
    value: function processConfig(e, t) {
      var _t$disabled, _t$placeholder, _i$text;
      var i;
      return t !== null && t !== void 0 ? t : t = {}, (_t$disabled = t.disabled) !== null && _t$disabled !== void 0 ? _t$disabled : t.disabled = e.isTextInputDisabled, (_t$placeholder = t.placeholder) !== null && _t$placeholder !== void 0 ? _t$placeholder : t.placeholder = {}, (_i$text = (i = t.placeholder).text) !== null && _i$text !== void 0 ? _i$text : i.text = e.textInputPlaceholderText, t;
    }
  }, {
    key: "createContainerElement",
    value: function createContainerElement(e) {
      var t = document.createElement("div");
      return t.id = "text-input-container", Object.assign(t.style, e), t;
    }
    // this is is a bug fix where if the browser is scrolled down and the user types in text that creates new line
    // the browser scrollbar will move up which leads to undesirable UX.
    // More details in this Stack Overflow question:
    // https://stackoverflow.com/questions/76285135/prevent-automatic-scroll-when-text-is-inserted-into-contenteditable-div
    // prettier-ignore
  }, {
    key: "preventAutomaticScrollUpOnNewLine",
    value: function preventAutomaticScrollUpOnNewLine(e) {
      var t;
      e.addEventListener("keydown", function () {
        t = window.scrollY;
      }), e.addEventListener("input", function () {
        t !== window.scrollY && window.scrollTo({
          top: t
        });
      });
    }
  }]);
}();
Xe.TEXT_INPUT_ID = "text-input";
var vi = Xe;
var ai = /*#__PURE__*/function () {
  function ai() {
    _classCallCheck(this, ai);
  }
  return _createClass(ai, null, [{
    key: "focusEndOfInput",
    value: function focusEndOfInput(e) {
      var t = document.createRange();
      t.selectNodeContents(e), t.collapse(!1);
      var i = window.getSelection();
      i == null || i.removeAllRanges(), i == null || i.addRange(t);
    }
  }, {
    key: "focusFromParentElement",
    value: function focusFromParentElement(e) {
      var t = e.querySelector("#".concat(vi.TEXT_INPUT_ID));
      t && (De.IS_SAFARI && t.focus(), ai.focusEndOfInput(t));
    }
  }]);
}();
function Os(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function qn(n) {
  return n && JSON.stringify(n);
}
function bs(n, e, t, i) {
  var s = "\n".concat(Os(e), " message: ").concat(JSON.stringify(n), " \n"),
    r = t ? "".concat(Os(e), " message after interceptor: ").concat(qn(i), " \n") : "";
  return s + r;
}
function Hn(n, e, t, i) {
  return "".concat(bs(n, e, t, i), "Make sure the ").concat(e, " message is using the Response format: https://deepchat.dev/docs/connect/#Response \nYou can also augment it using the responseInterceptor property: https://deepchat.dev/docs/interceptors#responseInterceptor");
}
function zn(n, e, t) {
  var i = "response";
  return "".concat(bs(n, i, e, t), "Make sure the ").concat(i, " message is using the {text: string} format, e.g: {text: \"Model Response\"}");
}
function Gn(n, e) {
  var t = "request";
  return "".concat(bs(n, t, e), "Make sure the ").concat(t, " message is using the {body: {text: string}} format, e.g: {body: {text: \"Model Response\"}}");
}
var Ps = "Make sure the events are using {text: string} or {html: string} format.\nYou can also augment them using the responseInterceptor property: https://deepchat.dev/docs/interceptors#responseInterceptor",
  k = {
    INVALID_KEY: "Invalid API Key",
    CONNECTION_FAILED: "Failed to connect",
    INVALID_RESPONSE: Hn,
    INVALID_MODEL_REQUEST: Gn,
    INVALID_MODEL_RESPONSE: zn,
    INVALID_STREAM_ARRAY_RESPONSE: "Multi-response arrays are not supported for streaming",
    INVALID_STREAM_EVENT: Ps,
    INVALID_STREAM_EVENT_MIX: "Cannot mix {text: string} and {html: string} responses.",
    NO_VALID_STREAM_EVENTS_SENT: "No valid stream events were sent.\n".concat(Ps),
    READABLE_STREAM_CONNECTION_ERROR: "Readable Stream connection error."
  },
  Di = /*#__PURE__*/function () {
    function Di() {
      _classCallCheck(this, Di);
    }
    return _createClass(Di, null, [{
      key: "addElements",
      value: function addElements(e) {
        for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          t[_key - 1] = arguments[_key];
        }
        t.forEach(function (i) {
          return e.appendChild(i);
        });
      }
    }, {
      key: "isScrollbarAtBottomOfElement",
      value: function isScrollbarAtBottomOfElement(e) {
        var t = e.scrollHeight,
          i = e.clientHeight,
          s = e.scrollTop,
          r = t - i;
        return s >= r - Di.CODE_SNIPPET_GENERATION_JUMP;
      }
    }, {
      key: "cloneElement",
      value: function cloneElement(e) {
        var t = e.cloneNode(!0);
        return e.parentNode.replaceChild(t, e), t;
      }
    }, {
      key: "scrollToBottom",
      value: function scrollToBottom(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        t ? e.scrollTo({
          left: 0,
          top: e.scrollHeight,
          behavior: "smooth"
        }) : e.scrollTop = e.scrollHeight;
      }
    }, {
      key: "scrollToTop",
      value: function scrollToTop(e) {
        e.scrollTop = 0;
      }
    }]);
  }();
Di.CODE_SNIPPET_GENERATION_JUMP = 0.5;
var X = Di;
var Bi = /*#__PURE__*/function () {
  function Bi() {
    _classCallCheck(this, Bi);
  }
  return _createClass(Bi, null, [{
    key: "speak",
    value: function speak(e, t) {
      if (window.SpeechSynthesisUtterance) {
        var i = new SpeechSynthesisUtterance(e);
        Object.assign(i, t), speechSynthesis.speak(i);
      }
    }
  }, {
    key: "processConfig",
    value: function processConfig(e, t) {
      var i = {};
      setTimeout(function () {
        if (_typeof(e) == "object" && (e.lang && (i.lang = e.lang), e.pitch && (i.pitch = e.pitch), e.rate && (i.rate = e.rate), e.volume && (i.volume = e.volume), e.voiceName)) {
          var s = window.speechSynthesis.getVoices().find(function (r) {
            var o;
            return r.name.toLocaleLowerCase() === ((o = e.voiceName) == null ? void 0 : o.toLocaleLowerCase());
          });
          s && (i.voice = s);
        }
        t(i);
      }, Bi.LOAD_VOICES_MS);
    }
  }]);
}();
Bi.LOAD_VOICES_MS = 200;
var gt = Bi;
var ht = /*#__PURE__*/function () {
  function ht() {
    _classCallCheck(this, ht);
  }
  return _createClass(ht, null, [{
    key: "colorToHex",
    value: function colorToHex(e) {
      var t = document.createElement("div");
      return t.style.color = e, document.body.appendChild(t), "#".concat(window.getComputedStyle(t).color.match(/\d+/g).map(function (r) {
        return parseInt(r).toString(16).padStart(2, "0");
      }).join(""));
    }
  }, {
    key: "setDots",
    value: function setDots(e, t) {
      var i, s, r, o;
      if ((o = (r = (s = (i = t == null ? void 0 : t.loading) == null ? void 0 : i.message) == null ? void 0 : s.styles) == null ? void 0 : r.bubble) != null && o.color) {
        var a = ht.colorToHex(t.loading.message.styles.bubble.color);
        e.style.setProperty("--loading-message-color", a), e.style.setProperty("--loading-message-color-fade", "".concat(a, "33"));
      } else e.style.setProperty("--loading-message-color", "#848484"), e.style.setProperty("--loading-message-color-fade", "#55555533");
    }
  }, {
    key: "setRing",
    value: function setRing(e, t) {
      var _ref = t || {},
        i = _ref.color,
        s = _ref.width,
        r = _ref.height,
        o = _ref.margin,
        a = _ref.border;
      if (i) {
        var l = ht.colorToHex(i);
        e.style.setProperty("--loading-history-color", l);
      } else e.style.setProperty("--loading-history-color", "#dbdbdb");
      e.style.setProperty("--loading-history-height", r || "57px"), e.style.setProperty("--loading-history-width", s || "57px"), e.style.setProperty("--loading-history-margin", o || "7px"), e.style.setProperty("--loading-history-border", a || "6px solid");
    }
  }]);
}();
ht.BUBBLE_CLASS = "deep-chat-loading-message-bubble", ht.DOTS_CONTAINER_CLASS = "deep-chat-loading-message-dots-container";
var Ne = ht;
var ce = /*#__PURE__*/function () {
  function ce() {
    _classCallCheck(this, ce);
  }
  return _createClass(ce, null, [{
    key: "setElementProps",
    value:
    // prettier-ignore
    function setElementProps(e, t, i, s) {
      var r;
      i !== "loading" && (e.applyCustomStyles(t, s, !0, (r = e.messageStyles) == null ? void 0 : r[i]), t.bubbleElement.classList.add(ce.FILE_BUBBLE_CLASS));
    }
    // prettier-ignore
  }, {
    key: "addMessage",
    value: function addMessage(e, t, i, s, r) {
      ce.setElementProps(e, t, i, s), r || (e.appendOuterContainerElemet(t.outerContainer), e.focusMode || (e.elementRef.scrollTop = e.elementRef.scrollHeight));
    }
  }, {
    key: "wrapInLink",
    value: function wrapInLink(e, t, i) {
      var s = document.createElement("a");
      return s.href = t, s.download = i || ce.DEFAULT_FILE_NAME, s.target = "_blank", s.appendChild(e), s;
    }
  }, {
    key: "isNonLinkableDataUrl",
    value: function isNonLinkableDataUrl(e, t) {
      return !t.startsWith("data") || e === "image" ? !1 : e === "any" && t.startsWith("data:text/javascript") || !t.startsWith("data:image") && !t.startsWith("data:application");
    }
  }, {
    key: "processContent",
    value: function processContent(e, t, i, s) {
      return !i || ce.isNonLinkableDataUrl(e, i) ? t : ce.wrapInLink(t, i, s);
    }
  }, {
    key: "waitToLoadThenScroll",
    value: function waitToLoadThenScroll(e) {
      setTimeout(function () {
        e.scrollTop = e.scrollHeight;
      }, 60);
    }
  }, {
    key: "scrollDownOnImageLoad",
    value: function scrollDownOnImageLoad(e, t) {
      if (e.startsWith("data")) ce.waitToLoadThenScroll(t);else try {
        fetch(e, {
          mode: "no-cors"
        })["catch"](function () {})["finally"](function () {
          ce.waitToLoadThenScroll(t);
        });
      } catch (_unused2) {
        t.scrollTop = t.scrollHeight;
      }
    }
    // The strategy is to emit the actual file reference in the `onMessage` event for the user to inspect it
    // But it is not actually used by anything in the chat, hence it is removed when adding a message
    // after the body has been stringified and parsed - the file reference will disappear, hence this readds it
  }, {
    key: "reAddFileRefToObject",
    value: function reAddFileRefToObject(e, t) {
      var i;
      (i = e.files) == null || i.forEach(function (s, r) {
        var o;
        s.ref && (o = t.message.files) != null && o[r] && (t.message.files[r].ref = s.ref);
      });
    }
    // the chat does not use the actual file
  }, {
    key: "removeFileRef",
    value: function removeFileRef(e) {
      var t = _objectSpread({}, e);
      return delete t.ref, t;
    }
  }, {
    key: "isAudioFile",
    value: function isAudioFile(e) {
      var t = /\.(mp3|ogg|wav|aac|webm|4a)$/i,
        i = e.type,
        s = e.src;
      return i === "audio" || (s == null ? void 0 : s.startsWith("data:audio")) || s && t.test(s);
    }
  }, {
    key: "isImageFile",
    value: function isImageFile(e) {
      var t = e.type,
        i = e.src;
      return t === "image" || (i == null ? void 0 : i.startsWith("data:image")) || i && ce.isImageFileExtension(i);
    }
  }, {
    key: "isImageFileExtension",
    value: function isImageFileExtension(e) {
      return /\.(jpg|jpeg|png|gif|bmp)$/i.test(e);
    }
  }]);
}();
ce.DEFAULT_FILE_NAME = "file", ce.FILE_BUBBLE_CLASS = "file-message";
var H = ce;
var te = /*#__PURE__*/function () {
  function te() {
    _classCallCheck(this, te);
  }
  return _createClass(te, null, [{
    key: "checkForContainerStyles",
    value: function checkForContainerStyles(e, t) {
      var i = e.containerStyle;
      i && (Object.assign(t.style, i), console.error("The containerStyle property is deprecated since version 1.3.14."), console.error("Please change to using the style property instead: https://deepchat.dev/docs/styles#style"));
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "handleResponseProperty",
    value: function handleResponseProperty(e) {
      return console.error("The {result: ....} response object type is deprecated since version 1.3.0."), console.error("Please change to using the new response object: https://deepchat.dev/docs/connect#Response"), e.result;
    }
  }, {
    key: "processHistory",
    value: function processHistory(e) {
      var t = e.initialMessages;
      if (t) return console.error("The initialMessages property is deprecated since version 2.0.0."), console.error("Please change to using the history property instead: https://deepchat.dev/docs/messages/#history"), t;
    }
  }, {
    key: "processHistoryFile",
    value: function processHistoryFile(e) {
      var t = e.file;
      t && (console.error("The file property in MessageContent is deprecated since version 1.3.17."), console.error("Please change to using the files array property: https://deepchat.dev/docs/messages/#MessageContent"), e.files = [t]);
    }
  }, {
    key: "processValidateInput",
    value: function processValidateInput(e) {
      var t = e.validateMessageBeforeSending;
      if (t) return console.error("The validateMessageBeforeSending property is deprecated since version 1.3.24."), console.error("Please change to using validateInput: https://deepchat.dev/docs/interceptors#validateInput"), t;
    }
  }, {
    key: "processSubmitUserMessage",
    value: function processSubmitUserMessage(e) {
      return console.error("The submitUserMessage(text: string) argument string type is deprecated since version 1.4.4."), console.error("Please change to using the new argument type: https://deepchat.dev/docs/methods#submitUserMessage"), {
        text: e
      };
    }
  }, {
    key: "flagHTMLUpdateClass",
    value: function flagHTMLUpdateClass(e) {
      var t;
      (t = e.children[0]) != null && t.classList.contains("deep-chat-update-message") && (console.error('The "deep-chat-update-message" html class is deprecated since version 1.4.4.'), console.error("Please change to using {..., overwrite: true} object: https://deepchat.dev/docs/connect#Response"));
    }
  }, {
    key: "processConnect",
    value: function processConnect(e) {
      var t = e;
      t.request && (t.connect ? Object.assign(t.connect, t.request) : t.connect = t.request, console.error("The request property is deprecated since version 2.0.0."), console.error("Please see the connect object: https://deepchat.dev/docs/connect#connect-1"));
    }
  }, {
    key: "checkForStream",
    value: function checkForStream(e) {
      var t = e.stream;
      if (t) return console.error("The stream property has been moved to the connect object in version 2.0.0."), console.error("Please see the connect object: https://deepchat.dev/docs/connect#connect-1"), t;
    }
  }, {
    key: "fireOnNewMessage",
    value: function fireOnNewMessage(e, t) {
      var s;
      var i = e;
      i.onNewMessage && (console.error("The onNewMessage event has been deprecated since version 2.0.0."), console.error("Please see the onMessage event: https://deepchat.dev/docs/events#onMessage"), (s = i.onNewMessage) == null || s.call(i, t)), e.dispatchEvent(new CustomEvent("new-message", {
        detail: t
      }));
    }
  }, {
    key: "processFileConfigConnect",
    value: function processFileConfigConnect(e) {
      var t = e;
      t.request && (console.error("The request property in file configuration is deprecated since version 2.0.0."), console.error("Please use the connect property instead: https://deepchat.dev/docs/files"), t.connect || (t.connect = t.request));
    }
  }, {
    key: "processMessageStyles",
    value: function processMessageStyles(e) {
      if (!e) return;
      var t = JSON.parse(JSON.stringify(e)),
        i = t.loading;
      return i && (i.outerContainer || i.innerContainer || i.bubble || i.media) && (console.error("The loading message styles are defined using LoadingMessageStyles interface since version 2.1.0."), console.error("Check it out here: https://deepchat.dev/docs/messages/styles#LoadingMessageStyles"), t.loading = {
        message: {
          styles: i
        }
      }), t;
    }
  }, {
    key: "processDemo",
    value: function processDemo(e) {
      return typeof e == "boolean" || e.displayLoadingBubble && (console.error("The demo displayLoadingBubble property is deprecated since version 2.1.0."), console.error("Please use displayLoading instead: https://deepchat.dev/docs/modes#demo"), e.displayLoading = {
        message: !0
      }), e;
    }
  }]);
}();
var Ke = /*#__PURE__*/function () {
  function Ke() {
    _classCallCheck(this, Ke);
  }
  return _createClass(Ke, null, [{
    key: "mouseUp",
    value: function mouseUp(e, t) {
      I.unsetAllCSSMouseStates(e, t), Object.assign(e.style, t["default"]), Object.assign(e.style, t.hover);
    }
  }, {
    key: "mouseDown",
    value: function mouseDown(e, t) {
      Object.assign(e.style, t.click);
    }
  }, {
    key: "mouseLeave",
    value: function mouseLeave(e, t) {
      I.unsetAllCSSMouseStates(e, t), Object.assign(e.style, t["default"]);
    }
  }, {
    key: "mouseEnter",
    value: function mouseEnter(e, t) {
      Object.assign(e.style, t.hover);
    }
  }, {
    key: "add",
    value: function add(e, t) {
      e.addEventListener("mouseenter", Ke.mouseEnter.bind(this, e, t)), e.addEventListener("mouseleave", Ke.mouseLeave.bind(this, e, t)), e.addEventListener("mousedown", Ke.mouseDown.bind(this, e, t)), e.addEventListener("mouseup", Ke.mouseUp.bind(this, e, t));
    }
  }]);
}();
var Vn = "deep-chat-temporary-message",
  Kn = "deep-chat-suggestion-button",
  Zi = {
    "deep-chat-button": {
      styles: {
        "default": {
          backgroundColor: "white",
          padding: "5px",
          paddingLeft: "7px",
          paddingRight: "7px",
          border: "1px solid #c2c2c2",
          borderRadius: "6px",
          cursor: "pointer"
        },
        hover: {
          backgroundColor: "#fafafa"
        },
        click: {
          backgroundColor: "#f1f1f1"
        }
      }
    }
  },
  Ns = Object.keys(Zi);
var Se = /*#__PURE__*/function () {
  function Se() {
    _classCallCheck(this, Se);
  }
  return _createClass(Se, null, [{
    key: "applySuggestionEvent",
    value: function applySuggestionEvent(e, t) {
      setTimeout(function () {
        t.addEventListener("click", function () {
          var i, s;
          (s = e.submitUserMessage) == null || s.call(e, {
            text: ((i = t.textContent) == null ? void 0 : i.trim()) || ""
          });
        });
      });
    }
  }, {
    key: "isElementTemporary",
    value: function isElementTemporary(e) {
      var t;
      return e ? (t = e.bubbleElement.children[0]) == null ? void 0 : t.classList.contains(Vn) : !1;
    }
  }, {
    key: "doesElementContainDeepChatClass",
    value: function doesElementContainDeepChatClass(e) {
      return Ns.find(function (t) {
        return e.classList.contains(t);
      });
    }
  }, {
    key: "applyEvents",
    value: function applyEvents(e, t) {
      var i = Zi[t].events;
      Object.keys(i || []).forEach(function (s) {
        e.addEventListener(s, i == null ? void 0 : i[s]);
      });
    }
  }, {
    key: "getProcessedStyles",
    value: function getProcessedStyles(e, t, i) {
      var s = Array.from(t.classList).reduce(function (a, l) {
          var d;
          var c = (d = e[l]) == null ? void 0 : d.styles;
          return c && e[l].styles && a.push(c), a;
        }, []),
        r = Zi[i].styles;
      if (r) {
        var a = JSON.parse(JSON.stringify(r));
        a["default"] && I.overwriteDefaultWithAlreadyApplied(a, t), s.unshift(a);
      }
      var o = I.mergeStatefulStyles(s);
      return I.processStateful(o);
    }
  }, {
    key: "applyDeepChatUtilities",
    value: function applyDeepChatUtilities(e, t, i) {
      Ns.forEach(function (r) {
        var o = i.getElementsByClassName(r);
        Array.from(o || []).forEach(function (a) {
          var l = Se.getProcessedStyles(t, a, r);
          J.applyStylesToElement(a, l), Se.applyEvents(a, r);
        });
      });
      var s = i.getElementsByClassName(Kn);
      Array.from(s).forEach(function (r) {
        return Se.applySuggestionEvent(e, r);
      });
    }
  }]);
}();
var J = /*#__PURE__*/function () {
  function J() {
    _classCallCheck(this, J);
  }
  return _createClass(J, null, [{
    key: "applyStylesToElement",
    value: function applyStylesToElement(e, t) {
      var i = I.processStateful(t);
      Ke.add(e, i), Object.assign(e.style, i["default"]);
    }
  }, {
    key: "applyEventsToElement",
    value: function applyEventsToElement(e, t) {
      Object.keys(t).forEach(function (i) {
        var s = t[i];
        s && e.addEventListener(i, s);
      });
    }
  }, {
    key: "applyClassUtilitiesToElement",
    value: function applyClassUtilitiesToElement(e, t) {
      var i = t.events,
        s = t.styles;
      i && J.applyEventsToElement(e, i), s && !Se.doesElementContainDeepChatClass(e) && J.applyStylesToElement(e, s);
    }
  }, {
    key: "applyCustomClassUtilities",
    value: function applyCustomClassUtilities(e, t) {
      Object.keys(e).forEach(function (i) {
        var s = t.getElementsByClassName(i);
        Array.from(s).forEach(function (r) {
          e[i] && J.applyClassUtilitiesToElement(r, e[i]);
        });
      });
    }
  }, {
    key: "apply",
    value: function apply(e, t) {
      Se.applyDeepChatUtilities(e, e.htmlClassUtilities, t), J.applyCustomClassUtilities(e.htmlClassUtilities, t);
    }
  }, {
    key: "traverseNodes",
    value: function traverseNodes(e, t) {
      e.nodeType === Node.ELEMENT_NODE && t.push(e.outerHTML), e.childNodes.forEach(function (i) {
        J.traverseNodes(i, t);
      });
    }
  }, {
    key: "splitHTML",
    value: function splitHTML(e) {
      var i = new DOMParser().parseFromString(e, "text/html"),
        s = [];
      return i.body.childNodes.forEach(function (r) {
        J.traverseNodes(r, s);
      }), s;
    }
  }, {
    key: "isTemporaryBasedOnHTML",
    value: function isTemporaryBasedOnHTML(e) {
      var t = document.createElement("div");
      return t.innerHTML = e, Se.isElementTemporary({
        outerContainer: t,
        bubbleElement: t,
        innerContainer: t
      });
    }
    // useful for removing event listeners
  }, {
    key: "replaceElementWithNewClone",
    value: function replaceElementWithNewClone(e, t) {
      var s;
      var i = (t || e).cloneNode(!0);
      return (s = e.parentNode) == null || s.replaceChild(i, e), i;
    }
  }]);
}();
var ke = /*#__PURE__*/function () {
  function ke() {
    _classCallCheck(this, ke);
  }
  return _createClass(ke, null, [{
    key: "addElement",
    value: function addElement(e, t) {
      e.appendOuterContainerElemet(t), e.focusMode || (e.elementRef.scrollTop = e.elementRef.scrollHeight);
    }
  }, {
    key: "createElements",
    value: function createElements(e, t, i, s) {
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
      var o = e.createMessageElementsOnOrientation("", i, s, r);
      return o.bubbleElement.classList.add(ke.HTML_BUBBLE_CLASS), o.bubbleElement.innerHTML = t, o;
    }
  }, {
    key: "overwriteElements",
    value: function overwriteElements(e, t, i) {
      i.bubbleElement.innerHTML = t, J.apply(e, i.outerContainer), te.flagHTMLUpdateClass(i.bubbleElement);
    }
    // prettier-ignore
  }, {
    key: "overwrite",
    value: function overwrite(e, t, i, s) {
      var r = e.messageToElements,
        o = y.overwriteMessage(r, s, t, i, "html", ke.HTML_BUBBLE_CLASS);
      return o && ke.overwriteElements(e, t, o), o;
    }
  }, {
    key: "create",
    value: function create(e, t, i) {
      var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
      var o;
      var r = ke.createElements(e, t, i, s);
      return y.fillEmptyMessageElement(r.bubbleElement, t), J.apply(e, r.outerContainer), te.flagHTMLUpdateClass(r.bubbleElement), e.applyCustomStyles(r, i, !1, (o = e.messageStyles) == null ? void 0 : o.html), r;
    }
  }, {
    key: "add",
    value: function add(e, t, i, s) {
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
      if (s != null && s.status) {
        var a = this.overwrite(e, t, i, e.messageElementRefs);
        if (a) return a;
        s.status = !1;
      }
      if (r && e.messageElementRefs.length > 0 && J.isTemporaryBasedOnHTML(t)) return;
      var o = ke.create(e, t, i, r);
      return r || ke.addElement(e, o.outerContainer), o;
    }
  }]);
}();
ke.HTML_BUBBLE_CLASS = "html-message";
var _e = ke;
var hi;
function En(n) {
  return hi = hi || document.createElement("textarea"), hi.innerHTML = "&" + n + ";", hi.value;
}
var $n = Object.prototype.hasOwnProperty;
function Wn(n, e) {
  return n ? $n.call(n, e) : !1;
}
function Sn(n) {
  var e = [].slice.call(arguments, 1);
  return e.forEach(function (t) {
    if (t) {
      if (_typeof(t) != "object") throw new TypeError(t + "must be object");
      Object.keys(t).forEach(function (i) {
        n[i] = t[i];
      });
    }
  }), n;
}
var Jn = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
function Qt(n) {
  return n.indexOf("\\") < 0 ? n : n.replace(Jn, "$1");
}
function _n(n) {
  return !(n >= 55296 && n <= 57343 || n >= 64976 && n <= 65007 || (n & 65535) === 65535 || (n & 65535) === 65534 || n >= 0 && n <= 8 || n === 11 || n >= 14 && n <= 31 || n >= 127 && n <= 159 || n > 1114111);
}
function Qi(n) {
  if (n > 65535) {
    n -= 65536;
    var e = 55296 + (n >> 10),
      t = 56320 + (n & 1023);
    return String.fromCharCode(e, t);
  }
  return String.fromCharCode(n);
}
var Xn = /&([a-z#][a-z0-9]{1,31});/gi,
  Yn = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
function Zn(n, e) {
  var t = 0,
    i = En(e);
  return e !== i ? i : e.charCodeAt(0) === 35 && Yn.test(e) && (t = e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10), _n(t)) ? Qi(t) : n;
}
function st(n) {
  return n.indexOf("&") < 0 ? n : n.replace(Xn, Zn);
}
var Qn = /[&<>"]/,
  er = /[&<>"]/g,
  tr = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
function ir(n) {
  return tr[n];
}
function ee(n) {
  return Qn.test(n) ? n.replace(er, ir) : n;
}
var v = {};
v.blockquote_open = function () {
  return "<blockquote>\n";
};
v.blockquote_close = function (n, e) {
  return "</blockquote>" + rt(n, e);
};
v.code = function (n, e) {
  return n[e].block ? "<pre><code>" + ee(n[e].content) + "</code></pre>" + rt(n, e) : "<code>" + ee(n[e].content) + "</code>";
};
v.fence = function (n, e, t, i, s) {
  var r = n[e],
    o = "",
    a = t.langPrefix,
    l = "",
    c,
    d,
    u;
  if (r.params) {
    if (c = r.params.split(/\s+/g), d = c.join(" "), Wn(s.rules.fence_custom, c[0])) return s.rules.fence_custom[c[0]](n, e, t, i, s);
    l = ee(st(Qt(d))), o = ' class="' + a + l + '"';
  }
  return t.highlight ? u = t.highlight.apply(t.highlight, [r.content].concat(c)) || ee(r.content) : u = ee(r.content), "<pre><code" + o + ">" + u + "</code></pre>" + rt(n, e);
};
v.fence_custom = {};
v.heading_open = function (n, e) {
  return "<h" + n[e].hLevel + ">";
};
v.heading_close = function (n, e) {
  return "</h" + n[e].hLevel + ">\n";
};
v.hr = function (n, e, t) {
  return (t.xhtmlOut ? "<hr />" : "<hr>") + rt(n, e);
};
v.bullet_list_open = function () {
  return "<ul>\n";
};
v.bullet_list_close = function (n, e) {
  return "</ul>" + rt(n, e);
};
v.list_item_open = function () {
  return "<li>";
};
v.list_item_close = function () {
  return "</li>\n";
};
v.ordered_list_open = function (n, e) {
  var t = n[e],
    i = t.order > 1 ? ' start="' + t.order + '"' : "";
  return "<ol" + i + ">\n";
};
v.ordered_list_close = function (n, e) {
  return "</ol>" + rt(n, e);
};
v.paragraph_open = function (n, e) {
  return n[e].tight ? "" : "<p>";
};
v.paragraph_close = function (n, e) {
  var t = !(n[e].tight && e && n[e - 1].type === "inline" && !n[e - 1].content);
  return (n[e].tight ? "" : "</p>") + (t ? rt(n, e) : "");
};
v.link_open = function (n, e, t) {
  var i = n[e].title ? ' title="' + ee(st(n[e].title)) + '"' : "",
    s = t.linkTarget ? ' target="' + t.linkTarget + '"' : "";
  return '<a href="' + ee(n[e].href) + '"' + i + s + ">";
};
v.link_close = function () {
  return "</a>";
};
v.image = function (n, e, t) {
  var i = ' src="' + ee(n[e].src) + '"',
    s = n[e].title ? ' title="' + ee(st(n[e].title)) + '"' : "",
    r = ' alt="' + (n[e].alt ? ee(st(Qt(n[e].alt))) : "") + '"',
    o = t.xhtmlOut ? " /" : "";
  return "<img" + i + r + s + o + ">";
};
v.table_open = function () {
  return "<table>\n";
};
v.table_close = function () {
  return "</table>\n";
};
v.thead_open = function () {
  return "<thead>\n";
};
v.thead_close = function () {
  return "</thead>\n";
};
v.tbody_open = function () {
  return "<tbody>\n";
};
v.tbody_close = function () {
  return "</tbody>\n";
};
v.tr_open = function () {
  return "<tr>";
};
v.tr_close = function () {
  return "</tr>\n";
};
v.th_open = function (n, e) {
  var t = n[e];
  return "<th" + (t.align ? ' style="text-align:' + t.align + '"' : "") + ">";
};
v.th_close = function () {
  return "</th>";
};
v.td_open = function (n, e) {
  var t = n[e];
  return "<td" + (t.align ? ' style="text-align:' + t.align + '"' : "") + ">";
};
v.td_close = function () {
  return "</td>";
};
v.strong_open = function () {
  return "<strong>";
};
v.strong_close = function () {
  return "</strong>";
};
v.em_open = function () {
  return "<em>";
};
v.em_close = function () {
  return "</em>";
};
v.del_open = function () {
  return "<del>";
};
v.del_close = function () {
  return "</del>";
};
v.ins_open = function () {
  return "<ins>";
};
v.ins_close = function () {
  return "</ins>";
};
v.mark_open = function () {
  return "<mark>";
};
v.mark_close = function () {
  return "</mark>";
};
v.sub = function (n, e) {
  return "<sub>" + ee(n[e].content) + "</sub>";
};
v.sup = function (n, e) {
  return "<sup>" + ee(n[e].content) + "</sup>";
};
v.hardbreak = function (n, e, t) {
  return t.xhtmlOut ? "<br />\n" : "<br>\n";
};
v.softbreak = function (n, e, t) {
  return t.breaks ? t.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
};
v.text = function (n, e) {
  return ee(n[e].content);
};
v.htmlblock = function (n, e) {
  return n[e].content;
};
v.htmltag = function (n, e) {
  return n[e].content;
};
v.abbr_open = function (n, e) {
  return '<abbr title="' + ee(st(n[e].title)) + '">';
};
v.abbr_close = function () {
  return "</abbr>";
};
v.footnote_ref = function (n, e) {
  var t = Number(n[e].id + 1).toString(),
    i = "fnref" + t;
  return n[e].subId > 0 && (i += ":" + n[e].subId), '<sup class="footnote-ref"><a href="#fn' + t + '" id="' + i + '">[' + t + "]</a></sup>";
};
v.footnote_block_open = function (n, e, t) {
  var i = t.xhtmlOut ? "<hr class=\"footnotes-sep\" />\n" : "<hr class=\"footnotes-sep\">\n";
  return i + "<section class=\"footnotes\">\n<ol class=\"footnotes-list\">\n";
};
v.footnote_block_close = function () {
  return "</ol>\n</section>\n";
};
v.footnote_open = function (n, e) {
  var t = Number(n[e].id + 1).toString();
  return '<li id="fn' + t + '"  class="footnote-item">';
};
v.footnote_close = function () {
  return "</li>\n";
};
v.footnote_anchor = function (n, e) {
  var t = Number(n[e].id + 1).toString(),
    i = "fnref" + t;
  return n[e].subId > 0 && (i += ":" + n[e].subId), ' <a href="#' + i + '" class="footnote-backref">↩</a>';
};
v.dl_open = function () {
  return "<dl>\n";
};
v.dt_open = function () {
  return "<dt>";
};
v.dd_open = function () {
  return "<dd>";
};
v.dl_close = function () {
  return "</dl>\n";
};
v.dt_close = function () {
  return "</dt>\n";
};
v.dd_close = function () {
  return "</dd>\n";
};
function xn(n, e) {
  return ++e >= n.length - 2 ? e : n[e].type === "paragraph_open" && n[e].tight && n[e + 1].type === "inline" && n[e + 1].content.length === 0 && n[e + 2].type === "paragraph_close" && n[e + 2].tight ? xn(n, e + 2) : e;
}
var rt = v.getBreak = function (e, t) {
  return t = xn(e, t), t < e.length && e[t].type === "list_item_close" ? "" : "\n";
};
function vs() {
  this.rules = Sn({}, v), this.getBreak = v.getBreak;
}
vs.prototype.renderInline = function (n, e, t) {
  for (var i = this.rules, s = n.length, r = 0, o = ""; s--;) o += i[n[r].type](n, r++, e, t, this);
  return o;
};
vs.prototype.render = function (n, e, t) {
  for (var i = this.rules, s = n.length, r = -1, o = ""; ++r < s;) n[r].type === "inline" ? o += this.renderInline(n[r].children, e, t) : o += i[n[r].type](n, r, e, t, this);
  return o;
};
function oe() {
  this.__rules__ = [], this.__cache__ = null;
}
oe.prototype.__find__ = function (n) {
  for (var e = this.__rules__.length, t = -1; e--;) if (this.__rules__[++t].name === n) return t;
  return -1;
};
oe.prototype.__compile__ = function () {
  var n = this,
    e = [""];
  n.__rules__.forEach(function (t) {
    t.enabled && t.alt.forEach(function (i) {
      e.indexOf(i) < 0 && e.push(i);
    });
  }), n.__cache__ = {}, e.forEach(function (t) {
    n.__cache__[t] = [], n.__rules__.forEach(function (i) {
      i.enabled && (t && i.alt.indexOf(t) < 0 || n.__cache__[t].push(i.fn));
    });
  });
};
oe.prototype.at = function (n, e, t) {
  var i = this.__find__(n),
    s = t || {};
  if (i === -1) throw new Error("Parser rule not found: " + n);
  this.__rules__[i].fn = e, this.__rules__[i].alt = s.alt || [], this.__cache__ = null;
};
oe.prototype.before = function (n, e, t, i) {
  var s = this.__find__(n),
    r = i || {};
  if (s === -1) throw new Error("Parser rule not found: " + n);
  this.__rules__.splice(s, 0, {
    name: e,
    enabled: !0,
    fn: t,
    alt: r.alt || []
  }), this.__cache__ = null;
};
oe.prototype.after = function (n, e, t, i) {
  var s = this.__find__(n),
    r = i || {};
  if (s === -1) throw new Error("Parser rule not found: " + n);
  this.__rules__.splice(s + 1, 0, {
    name: e,
    enabled: !0,
    fn: t,
    alt: r.alt || []
  }), this.__cache__ = null;
};
oe.prototype.push = function (n, e, t) {
  var i = t || {};
  this.__rules__.push({
    name: n,
    enabled: !0,
    fn: e,
    alt: i.alt || []
  }), this.__cache__ = null;
};
oe.prototype.enable = function (n, e) {
  n = Array.isArray(n) ? n : [n], e && this.__rules__.forEach(function (t) {
    t.enabled = !1;
  }), n.forEach(function (t) {
    var i = this.__find__(t);
    if (i < 0) throw new Error("Rules manager: invalid rule name " + t);
    this.__rules__[i].enabled = !0;
  }, this), this.__cache__ = null;
};
oe.prototype.disable = function (n) {
  n = Array.isArray(n) ? n : [n], n.forEach(function (e) {
    var t = this.__find__(e);
    if (t < 0) throw new Error("Rules manager: invalid rule name " + e);
    this.__rules__[t].enabled = !1;
  }, this), this.__cache__ = null;
};
oe.prototype.getRules = function (n) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[n] || [];
};
function sr(n) {
  n.inlineMode ? n.tokens.push({
    type: "inline",
    content: n.src.replace(/\n/g, " ").trim(),
    level: 0,
    lines: [0, 1],
    children: []
  }) : n.block.parse(n.src, n.options, n.env, n.tokens);
}
function ot(n, e, t, i, s) {
  this.src = n, this.env = i, this.options = t, this.parser = e, this.tokens = s, this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = [], this.isInLabel = !1, this.linkLevel = 0, this.linkContent = "", this.labelUnmatchedScopes = 0;
}
ot.prototype.pushPending = function () {
  this.tokens.push({
    type: "text",
    content: this.pending,
    level: this.pendingLevel
  }), this.pending = "";
};
ot.prototype.push = function (n) {
  this.pending && this.pushPending(), this.tokens.push(n), this.pendingLevel = this.level;
};
ot.prototype.cacheSet = function (n, e) {
  for (var t = this.cache.length; t <= n; t++) this.cache.push(0);
  this.cache[n] = e;
};
ot.prototype.cacheGet = function (n) {
  return n < this.cache.length ? this.cache[n] : 0;
};
function ei(n, e) {
  var t,
    i,
    s,
    r = -1,
    o = n.posMax,
    a = n.pos,
    l = n.isInLabel;
  if (n.isInLabel) return -1;
  if (n.labelUnmatchedScopes) return n.labelUnmatchedScopes--, -1;
  for (n.pos = e + 1, n.isInLabel = !0, t = 1; n.pos < o;) {
    if (s = n.src.charCodeAt(n.pos), s === 91) t++;else if (s === 93 && (t--, t === 0)) {
      i = !0;
      break;
    }
    n.parser.skipToken(n);
  }
  return i ? (r = n.pos, n.labelUnmatchedScopes = 0) : n.labelUnmatchedScopes = t - 1, n.pos = a, n.isInLabel = l, r;
}
function nr(n, e, t, i) {
  var s, r, o, a, l, c;
  if (n.charCodeAt(0) !== 42 || n.charCodeAt(1) !== 91 || n.indexOf("]:") === -1 || (s = new ot(n, e, t, i, []), r = ei(s, 1), r < 0 || n.charCodeAt(r + 1) !== 58)) return -1;
  for (a = s.posMax, o = r + 2; o < a && s.src.charCodeAt(o) !== 10; o++);
  return l = n.slice(2, r), c = n.slice(r + 2, o).trim(), c.length === 0 ? -1 : (i.abbreviations || (i.abbreviations = {}), _typeof(i.abbreviations[":" + l]) > "u" && (i.abbreviations[":" + l] = c), o);
}
function rr(n) {
  var e = n.tokens,
    t,
    i,
    s,
    r;
  if (!n.inlineMode) {
    for (t = 1, i = e.length - 1; t < i; t++) if (e[t - 1].type === "paragraph_open" && e[t].type === "inline" && e[t + 1].type === "paragraph_close") {
      for (s = e[t].content; s.length && (r = nr(s, n.inline, n.options, n.env), !(r < 0));) s = s.slice(r).trim();
      e[t].content = s, s.length || (e[t - 1].tight = !0, e[t + 1].tight = !0);
    }
  }
}
function es(n) {
  var e = st(n);
  try {
    e = decodeURI(e);
  } catch (_unused3) {}
  return encodeURI(e);
}
function wn(n, e) {
  var t,
    i,
    s,
    r = e,
    o = n.posMax;
  if (n.src.charCodeAt(e) === 60) {
    for (e++; e < o;) {
      if (t = n.src.charCodeAt(e), t === 10) return !1;
      if (t === 62) return s = es(Qt(n.src.slice(r + 1, e))), n.parser.validateLink(s) ? (n.pos = e + 1, n.linkContent = s, !0) : !1;
      if (t === 92 && e + 1 < o) {
        e += 2;
        continue;
      }
      e++;
    }
    return !1;
  }
  for (i = 0; e < o && (t = n.src.charCodeAt(e), !(t === 32 || t < 32 || t === 127));) {
    if (t === 92 && e + 1 < o) {
      e += 2;
      continue;
    }
    if (t === 40 && (i++, i > 1) || t === 41 && (i--, i < 0)) break;
    e++;
  }
  return r === e || (s = Qt(n.src.slice(r, e)), !n.parser.validateLink(s)) ? !1 : (n.linkContent = s, n.pos = e, !0);
}
function An(n, e) {
  var t,
    i = e,
    s = n.posMax,
    r = n.src.charCodeAt(e);
  if (r !== 34 && r !== 39 && r !== 40) return !1;
  for (e++, r === 40 && (r = 41); e < s;) {
    if (t = n.src.charCodeAt(e), t === r) return n.pos = e + 1, n.linkContent = Qt(n.src.slice(i + 1, e)), !0;
    if (t === 92 && e + 1 < s) {
      e += 2;
      continue;
    }
    e++;
  }
  return !1;
}
function Tn(n) {
  return n.trim().replace(/\s+/g, " ").toUpperCase();
}
function or(n, e, t, i) {
  var s, r, o, a, l, c, d, u, h;
  if (n.charCodeAt(0) !== 91 || n.indexOf("]:") === -1 || (s = new ot(n, e, t, i, []), r = ei(s, 0), r < 0 || n.charCodeAt(r + 1) !== 58)) return -1;
  for (a = s.posMax, o = r + 2; o < a && (l = s.src.charCodeAt(o), !(l !== 32 && l !== 10)); o++);
  if (!wn(s, o)) return -1;
  for (d = s.linkContent, o = s.pos, c = o, o = o + 1; o < a && (l = s.src.charCodeAt(o), !(l !== 32 && l !== 10)); o++);
  for (o < a && c !== o && An(s, o) ? (u = s.linkContent, o = s.pos) : (u = "", o = c); o < a && s.src.charCodeAt(o) === 32;) o++;
  return o < a && s.src.charCodeAt(o) !== 10 ? -1 : (h = Tn(n.slice(1, r)), _typeof(i.references[h]) > "u" && (i.references[h] = {
    title: u,
    href: d
  }), o);
}
function ar(n) {
  var e = n.tokens,
    t,
    i,
    s,
    r;
  if (n.env.references = n.env.references || {}, !n.inlineMode) {
    for (t = 1, i = e.length - 1; t < i; t++) if (e[t].type === "inline" && e[t - 1].type === "paragraph_open" && e[t + 1].type === "paragraph_close") {
      for (s = e[t].content; s.length && (r = or(s, n.inline, n.options, n.env), !(r < 0));) s = s.slice(r).trim();
      e[t].content = s, s.length || (e[t - 1].tight = !0, e[t + 1].tight = !0);
    }
  }
}
function lr(n) {
  var e = n.tokens,
    t,
    i,
    s;
  for (i = 0, s = e.length; i < s; i++) t = e[i], t.type === "inline" && n.inline.parse(t.content, n.options, n.env, t.children);
}
function cr(n) {
  var e,
    t,
    i,
    s,
    r,
    o,
    a,
    l,
    c,
    d = 0,
    u = !1,
    h = {};
  if (n.env.footnotes && (n.tokens = n.tokens.filter(function (f) {
    return f.type === "footnote_reference_open" ? (u = !0, l = [], c = f.label, !1) : f.type === "footnote_reference_close" ? (u = !1, h[":" + c] = l, !1) : (u && l.push(f), !u);
  }), !!n.env.footnotes.list)) {
    for (o = n.env.footnotes.list, n.tokens.push({
      type: "footnote_block_open",
      level: d++
    }), e = 0, t = o.length; e < t; e++) {
      for (n.tokens.push({
        type: "footnote_open",
        id: e,
        level: d++
      }), o[e].tokens ? (a = [], a.push({
        type: "paragraph_open",
        tight: !1,
        level: d++
      }), a.push({
        type: "inline",
        content: "",
        level: d,
        children: o[e].tokens
      }), a.push({
        type: "paragraph_close",
        tight: !1,
        level: --d
      })) : o[e].label && (a = h[":" + o[e].label]), n.tokens = n.tokens.concat(a), n.tokens[n.tokens.length - 1].type === "paragraph_close" ? r = n.tokens.pop() : r = null, s = o[e].count > 0 ? o[e].count : 1, i = 0; i < s; i++) n.tokens.push({
        type: "footnote_anchor",
        id: e,
        subId: i,
        level: d
      });
      r && n.tokens.push(r), n.tokens.push({
        type: "footnote_close",
        level: --d
      });
    }
    n.tokens.push({
      type: "footnote_block_close",
      level: --d
    });
  }
}
var Ds = " \n()[]'\".,!?-";
function $i(n) {
  return n.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1");
}
function dr(n) {
  var e,
    t,
    i,
    s,
    r,
    o,
    a,
    l,
    c,
    d,
    u,
    h,
    f = n.tokens;
  if (n.env.abbreviations) {
    for (n.env.abbrRegExp || (h = "(^|[" + Ds.split("").map($i).join("") + "])(" + Object.keys(n.env.abbreviations).map(function (m) {
      return m.substr(1);
    }).sort(function (m, p) {
      return p.length - m.length;
    }).map($i).join("|") + ")($|[" + Ds.split("").map($i).join("") + "])", n.env.abbrRegExp = new RegExp(h, "g")), d = n.env.abbrRegExp, t = 0, i = f.length; t < i; t++) if (f[t].type === "inline") {
      for (s = f[t].children, e = s.length - 1; e >= 0; e--) if (r = s[e], r.type === "text") {
        for (l = 0, o = r.content, d.lastIndex = 0, c = r.level, a = []; u = d.exec(o);) d.lastIndex > l && a.push({
          type: "text",
          content: o.slice(l, u.index + u[1].length),
          level: c
        }), a.push({
          type: "abbr_open",
          title: n.env.abbreviations[":" + u[2]],
          level: c++
        }), a.push({
          type: "text",
          content: u[2],
          level: c
        }), a.push({
          type: "abbr_close",
          level: --c
        }), l = d.lastIndex - u[3].length;
        a.length && (l < o.length && a.push({
          type: "text",
          content: o.slice(l),
          level: c
        }), f[t].children = s = [].concat(s.slice(0, e), a, s.slice(e + 1)));
      }
    }
  }
}
var hr = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
  ur = /\((c|tm|r|p)\)/ig,
  fr = {
    c: "©",
    r: "®",
    p: "§",
    tm: "™"
  };
function pr(n) {
  return n.indexOf("(") < 0 ? n : n.replace(ur, function (e, t) {
    return fr[t.toLowerCase()];
  });
}
function mr(n) {
  var e, t, i, s, r;
  if (n.options.typographer) {
    for (r = n.tokens.length - 1; r >= 0; r--) if (n.tokens[r].type === "inline") for (s = n.tokens[r].children, e = s.length - 1; e >= 0; e--) t = s[e], t.type === "text" && (i = t.content, i = pr(i), hr.test(i) && (i = i.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/mg, "$1—$2").replace(/(^|\s)--(\s|$)/mg, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/mg, "$1–$2")), t.content = i);
  }
}
var gr = /['"]/,
  Bs = /['"]/g,
  br = /[-\s()\[\]]/,
  Fs = "’";
function Us(n, e) {
  return e < 0 || e >= n.length ? !1 : !br.test(n[e]);
}
function ct(n, e, t) {
  return n.substr(0, e) + t + n.substr(e + 1);
}
function vr(n) {
  var e, t, i, s, r, o, a, l, c, d, u, h, f, m, p, g, b;
  if (n.options.typographer) {
    for (b = [], p = n.tokens.length - 1; p >= 0; p--) if (n.tokens[p].type === "inline") {
      for (g = n.tokens[p].children, b.length = 0, e = 0; e < g.length; e++) if (t = g[e], !(t.type !== "text" || gr.test(t.text))) {
        for (a = g[e].level, f = b.length - 1; f >= 0 && !(b[f].level <= a); f--);
        b.length = f + 1, i = t.content, r = 0, o = i.length;
        e: for (; r < o && (Bs.lastIndex = r, s = Bs.exec(i), !!s);) {
          if (l = !Us(i, s.index - 1), r = s.index + 1, m = s[0] === "'", c = !Us(i, r), !c && !l) {
            m && (t.content = ct(t.content, s.index, Fs));
            continue;
          }
          if (u = !c, h = !l, h) {
            for (f = b.length - 1; f >= 0 && (d = b[f], !(b[f].level < a)); f--) if (d.single === m && b[f].level === a) {
              d = b[f], m ? (g[d.token].content = ct(g[d.token].content, d.pos, n.options.quotes[2]), t.content = ct(t.content, s.index, n.options.quotes[3])) : (g[d.token].content = ct(g[d.token].content, d.pos, n.options.quotes[0]), t.content = ct(t.content, s.index, n.options.quotes[1])), b.length = f;
              continue e;
            }
          }
          u ? b.push({
            token: e,
            pos: s.index,
            single: m,
            level: a
          }) : h && m && (t.content = ct(t.content, s.index, Fs));
        }
      }
    }
  }
}
var Wi = [["block", sr], ["abbr", rr], ["references", ar], ["inline", lr], ["footnote_tail", cr], ["abbr2", dr], ["replacements", mr], ["smartquotes", vr]];
function Cn() {
  this.options = {}, this.ruler = new oe();
  for (var n = 0; n < Wi.length; n++) this.ruler.push(Wi[n][0], Wi[n][1]);
}
Cn.prototype.process = function (n) {
  var e, t, i;
  for (i = this.ruler.getRules(""), e = 0, t = i.length; e < t; e++) i[e](n);
};
function at(n, e, t, i, s) {
  var r, o, a, l, c, d, u;
  for (this.src = n, this.parser = e, this.options = t, this.env = i, this.tokens = s, this.bMarks = [], this.eMarks = [], this.tShift = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.parentType = "root", this.ddIndent = -1, this.level = 0, this.result = "", o = this.src, d = 0, u = !1, a = l = d = 0, c = o.length; l < c; l++) {
    if (r = o.charCodeAt(l), !u) if (r === 32) {
      d++;
      continue;
    } else u = !0;
    (r === 10 || l === c - 1) && (r !== 10 && l++, this.bMarks.push(a), this.eMarks.push(l), this.tShift.push(d), u = !1, d = 0, a = l + 1);
  }
  this.bMarks.push(o.length), this.eMarks.push(o.length), this.tShift.push(0), this.lineMax = this.bMarks.length - 1;
}
at.prototype.isEmpty = function (e) {
  return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
};
at.prototype.skipEmptyLines = function (e) {
  for (var t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++);
  return e;
};
at.prototype.skipSpaces = function (e) {
  for (var t = this.src.length; e < t && this.src.charCodeAt(e) === 32; e++);
  return e;
};
at.prototype.skipChars = function (e, t) {
  for (var i = this.src.length; e < i && this.src.charCodeAt(e) === t; e++);
  return e;
};
at.prototype.skipCharsBack = function (e, t, i) {
  if (e <= i) return e;
  for (; e > i;) if (t !== this.src.charCodeAt(--e)) return e + 1;
  return e;
};
at.prototype.getLines = function (e, t, i, s) {
  var r,
    o,
    a,
    l,
    c,
    d = e;
  if (e >= t) return "";
  if (d + 1 === t) return o = this.bMarks[d] + Math.min(this.tShift[d], i), a = s ? this.eMarks[d] + 1 : this.eMarks[d], this.src.slice(o, a);
  for (l = new Array(t - e), r = 0; d < t; d++, r++) c = this.tShift[d], c > i && (c = i), c < 0 && (c = 0), o = this.bMarks[d] + c, d + 1 < t || s ? a = this.eMarks[d] + 1 : a = this.eMarks[d], l[r] = this.src.slice(o, a);
  return l.join("");
};
function yr(n, e, t) {
  var i, s;
  if (n.tShift[e] - n.blkIndent < 4) return !1;
  for (s = i = e + 1; i < t;) {
    if (n.isEmpty(i)) {
      i++;
      continue;
    }
    if (n.tShift[i] - n.blkIndent >= 4) {
      i++, s = i;
      continue;
    }
    break;
  }
  return n.line = i, n.tokens.push({
    type: "code",
    content: n.getLines(e, s, 4 + n.blkIndent, !0),
    block: !0,
    lines: [e, n.line],
    level: n.level
  }), !0;
}
function Er(n, e, t, i) {
  var s,
    r,
    o,
    a,
    l,
    c = !1,
    d = n.bMarks[e] + n.tShift[e],
    u = n.eMarks[e];
  if (d + 3 > u || (s = n.src.charCodeAt(d), s !== 126 && s !== 96) || (l = d, d = n.skipChars(d, s), r = d - l, r < 3) || (o = n.src.slice(d, u).trim(), o.indexOf("`") >= 0)) return !1;
  if (i) return !0;
  for (a = e; a++, !(a >= t || (d = l = n.bMarks[a] + n.tShift[a], u = n.eMarks[a], d < u && n.tShift[a] < n.blkIndent));) if (n.src.charCodeAt(d) === s && !(n.tShift[a] - n.blkIndent >= 4) && (d = n.skipChars(d, s), !(d - l < r) && (d = n.skipSpaces(d), !(d < u)))) {
    c = !0;
    break;
  }
  return r = n.tShift[e], n.line = a + (c ? 1 : 0), n.tokens.push({
    type: "fence",
    params: o,
    content: n.getLines(e + 1, a, r, !0),
    lines: [e, n.line],
    level: n.level
  }), !0;
}
function Sr(n, e, t, i) {
  var s,
    r,
    o,
    a,
    l,
    c,
    d,
    u,
    h,
    f,
    m,
    p = n.bMarks[e] + n.tShift[e],
    g = n.eMarks[e];
  if (p > g || n.src.charCodeAt(p++) !== 62 || n.level >= n.options.maxNesting) return !1;
  if (i) return !0;
  for (n.src.charCodeAt(p) === 32 && p++, l = n.blkIndent, n.blkIndent = 0, a = [n.bMarks[e]], n.bMarks[e] = p, p = p < g ? n.skipSpaces(p) : p, r = p >= g, o = [n.tShift[e]], n.tShift[e] = p - n.bMarks[e], u = n.parser.ruler.getRules("blockquote"), s = e + 1; s < t && (p = n.bMarks[s] + n.tShift[s], g = n.eMarks[s], !(p >= g)); s++) {
    if (n.src.charCodeAt(p++) === 62) {
      n.src.charCodeAt(p) === 32 && p++, a.push(n.bMarks[s]), n.bMarks[s] = p, p = p < g ? n.skipSpaces(p) : p, r = p >= g, o.push(n.tShift[s]), n.tShift[s] = p - n.bMarks[s];
      continue;
    }
    if (r) break;
    for (m = !1, h = 0, f = u.length; h < f; h++) if (u[h](n, s, t, !0)) {
      m = !0;
      break;
    }
    if (m) break;
    a.push(n.bMarks[s]), o.push(n.tShift[s]), n.tShift[s] = -1337;
  }
  for (c = n.parentType, n.parentType = "blockquote", n.tokens.push({
    type: "blockquote_open",
    lines: d = [e, 0],
    level: n.level++
  }), n.parser.tokenize(n, e, s), n.tokens.push({
    type: "blockquote_close",
    level: --n.level
  }), n.parentType = c, d[1] = n.line, h = 0; h < o.length; h++) n.bMarks[h + e] = a[h], n.tShift[h + e] = o[h];
  return n.blkIndent = l, !0;
}
function _r(n, e, t, i) {
  var s,
    r,
    o,
    a = n.bMarks[e],
    l = n.eMarks[e];
  if (a += n.tShift[e], a > l || (s = n.src.charCodeAt(a++), s !== 42 && s !== 45 && s !== 95)) return !1;
  for (r = 1; a < l;) {
    if (o = n.src.charCodeAt(a++), o !== s && o !== 32) return !1;
    o === s && r++;
  }
  return r < 3 ? !1 : (i || (n.line = e + 1, n.tokens.push({
    type: "hr",
    lines: [e, n.line],
    level: n.level
  })), !0);
}
function js(n, e) {
  var t, i, s;
  return i = n.bMarks[e] + n.tShift[e], s = n.eMarks[e], i >= s || (t = n.src.charCodeAt(i++), t !== 42 && t !== 45 && t !== 43) || i < s && n.src.charCodeAt(i) !== 32 ? -1 : i;
}
function qs(n, e) {
  var t,
    i = n.bMarks[e] + n.tShift[e],
    s = n.eMarks[e];
  if (i + 1 >= s || (t = n.src.charCodeAt(i++), t < 48 || t > 57)) return -1;
  for (;;) {
    if (i >= s) return -1;
    if (t = n.src.charCodeAt(i++), !(t >= 48 && t <= 57)) {
      if (t === 41 || t === 46) break;
      return -1;
    }
  }
  return i < s && n.src.charCodeAt(i) !== 32 ? -1 : i;
}
function xr(n, e) {
  var t,
    i,
    s = n.level + 2;
  for (t = e + 2, i = n.tokens.length - 2; t < i; t++) n.tokens[t].level === s && n.tokens[t].type === "paragraph_open" && (n.tokens[t + 2].tight = !0, n.tokens[t].tight = !0, t += 2);
}
function wr(n, e, t, i) {
  var s,
    r,
    o,
    a,
    l,
    c,
    d,
    u,
    h,
    f,
    m,
    p,
    g,
    b,
    M,
    Y,
    je,
    ae,
    Ce = !0,
    ye,
    ie,
    Is,
    Ki;
  if ((u = qs(n, e)) >= 0) g = !0;else if ((u = js(n, e)) >= 0) g = !1;else return !1;
  if (n.level >= n.options.maxNesting) return !1;
  if (p = n.src.charCodeAt(u - 1), i) return !0;
  for (M = n.tokens.length, g ? (d = n.bMarks[e] + n.tShift[e], m = Number(n.src.substr(d, u - d - 1)), n.tokens.push({
    type: "ordered_list_open",
    order: m,
    lines: je = [e, 0],
    level: n.level++
  })) : n.tokens.push({
    type: "bullet_list_open",
    lines: je = [e, 0],
    level: n.level++
  }), s = e, Y = !1, ye = n.parser.ruler.getRules("list"); s < t && (b = n.skipSpaces(u), h = n.eMarks[s], b >= h ? f = 1 : f = b - u, f > 4 && (f = 1), f < 1 && (f = 1), r = u - n.bMarks[s] + f, n.tokens.push({
    type: "list_item_open",
    lines: ae = [e, 0],
    level: n.level++
  }), a = n.blkIndent, l = n.tight, o = n.tShift[e], c = n.parentType, n.tShift[e] = b - n.bMarks[e], n.blkIndent = r, n.tight = !0, n.parentType = "list", n.parser.tokenize(n, e, t, !0), (!n.tight || Y) && (Ce = !1), Y = n.line - e > 1 && n.isEmpty(n.line - 1), n.blkIndent = a, n.tShift[e] = o, n.tight = l, n.parentType = c, n.tokens.push({
    type: "list_item_close",
    level: --n.level
  }), s = e = n.line, ae[1] = s, b = n.bMarks[e], !(s >= t || n.isEmpty(s) || n.tShift[s] < n.blkIndent));) {
    for (Ki = !1, ie = 0, Is = ye.length; ie < Is; ie++) if (ye[ie](n, s, t, !0)) {
      Ki = !0;
      break;
    }
    if (Ki) break;
    if (g) {
      if (u = qs(n, s), u < 0) break;
    } else if (u = js(n, s), u < 0) break;
    if (p !== n.src.charCodeAt(u - 1)) break;
  }
  return n.tokens.push({
    type: g ? "ordered_list_close" : "bullet_list_close",
    level: --n.level
  }), je[1] = s, n.line = s, Ce && xr(n, M), !0;
}
function Ar(n, e, t, i) {
  var s,
    r,
    o,
    a,
    l,
    c = n.bMarks[e] + n.tShift[e],
    d = n.eMarks[e];
  if (c + 4 > d || n.src.charCodeAt(c) !== 91 || n.src.charCodeAt(c + 1) !== 94 || n.level >= n.options.maxNesting) return !1;
  for (a = c + 2; a < d; a++) {
    if (n.src.charCodeAt(a) === 32) return !1;
    if (n.src.charCodeAt(a) === 93) break;
  }
  return a === c + 2 || a + 1 >= d || n.src.charCodeAt(++a) !== 58 ? !1 : (i || (a++, n.env.footnotes || (n.env.footnotes = {}), n.env.footnotes.refs || (n.env.footnotes.refs = {}), l = n.src.slice(c + 2, a - 2), n.env.footnotes.refs[":" + l] = -1, n.tokens.push({
    type: "footnote_reference_open",
    label: l,
    level: n.level++
  }), s = n.bMarks[e], r = n.tShift[e], o = n.parentType, n.tShift[e] = n.skipSpaces(a) - a, n.bMarks[e] = a, n.blkIndent += 4, n.parentType = "footnote", n.tShift[e] < n.blkIndent && (n.tShift[e] += n.blkIndent, n.bMarks[e] -= n.blkIndent), n.parser.tokenize(n, e, t, !0), n.parentType = o, n.blkIndent -= 4, n.tShift[e] = r, n.bMarks[e] = s, n.tokens.push({
    type: "footnote_reference_close",
    level: --n.level
  })), !0);
}
function Tr(n, e, t, i) {
  var s,
    r,
    o,
    a = n.bMarks[e] + n.tShift[e],
    l = n.eMarks[e];
  if (a >= l || (s = n.src.charCodeAt(a), s !== 35 || a >= l)) return !1;
  for (r = 1, s = n.src.charCodeAt(++a); s === 35 && a < l && r <= 6;) r++, s = n.src.charCodeAt(++a);
  return r > 6 || a < l && s !== 32 ? !1 : (i || (l = n.skipCharsBack(l, 32, a), o = n.skipCharsBack(l, 35, a), o > a && n.src.charCodeAt(o - 1) === 32 && (l = o), n.line = e + 1, n.tokens.push({
    type: "heading_open",
    hLevel: r,
    lines: [e, n.line],
    level: n.level
  }), a < l && n.tokens.push({
    type: "inline",
    content: n.src.slice(a, l).trim(),
    level: n.level + 1,
    lines: [e, n.line],
    children: []
  }), n.tokens.push({
    type: "heading_close",
    hLevel: r,
    level: n.level
  })), !0);
}
function Cr(n, e, t) {
  var i,
    s,
    r,
    o = e + 1;
  return o >= t || n.tShift[o] < n.blkIndent || n.tShift[o] - n.blkIndent > 3 || (s = n.bMarks[o] + n.tShift[o], r = n.eMarks[o], s >= r) || (i = n.src.charCodeAt(s), i !== 45 && i !== 61) || (s = n.skipChars(s, i), s = n.skipSpaces(s), s < r) ? !1 : (s = n.bMarks[e] + n.tShift[e], n.line = o + 1, n.tokens.push({
    type: "heading_open",
    hLevel: i === 61 ? 1 : 2,
    lines: [e, n.line],
    level: n.level
  }), n.tokens.push({
    type: "inline",
    content: n.src.slice(s, n.eMarks[e]).trim(),
    level: n.level + 1,
    lines: [e, n.line - 1],
    children: []
  }), n.tokens.push({
    type: "heading_close",
    hLevel: i === 61 ? 1 : 2,
    level: n.level
  }), !0);
}
var Rn = {};
["article", "aside", "button", "blockquote", "body", "canvas", "caption", "col", "colgroup", "dd", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "iframe", "li", "map", "object", "ol", "output", "p", "pre", "progress", "script", "section", "style", "table", "tbody", "td", "textarea", "tfoot", "th", "tr", "thead", "ul", "video"].forEach(function (n) {
  Rn[n] = !0;
});
var Rr = /^<([a-zA-Z]{1,15})[\s\/>]/,
  Mr = /^<\/([a-zA-Z]{1,15})[\s>]/;
function kr(n) {
  var e = n | 32;
  return e >= 97 && e <= 122;
}
function Lr(n, e, t, i) {
  var s,
    r,
    o,
    a = n.bMarks[e],
    l = n.eMarks[e],
    c = n.tShift[e];
  if (a += c, !n.options.html || c > 3 || a + 2 >= l || n.src.charCodeAt(a) !== 60) return !1;
  if (s = n.src.charCodeAt(a + 1), s === 33 || s === 63) {
    if (i) return !0;
  } else if (s === 47 || kr(s)) {
    if (s === 47) {
      if (r = n.src.slice(a, l).match(Mr), !r) return !1;
    } else if (r = n.src.slice(a, l).match(Rr), !r) return !1;
    if (Rn[r[1].toLowerCase()] !== !0) return !1;
    if (i) return !0;
  } else return !1;
  for (o = e + 1; o < n.lineMax && !n.isEmpty(o);) o++;
  return n.line = o, n.tokens.push({
    type: "htmlblock",
    level: n.level,
    lines: [e, n.line],
    content: n.getLines(e, o, 0, !0)
  }), !0;
}
function Ji(n, e) {
  var t = n.bMarks[e] + n.blkIndent,
    i = n.eMarks[e];
  return n.src.substr(t, i - t);
}
function Ir(n, e, t, i) {
  var s, r, o, a, l, c, d, u, h, f, m;
  if (e + 2 > t || (l = e + 1, n.tShift[l] < n.blkIndent) || (o = n.bMarks[l] + n.tShift[l], o >= n.eMarks[l]) || (s = n.src.charCodeAt(o), s !== 124 && s !== 45 && s !== 58) || (r = Ji(n, e + 1), !/^[-:| ]+$/.test(r)) || (c = r.split("|"), c <= 2)) return !1;
  for (u = [], a = 0; a < c.length; a++) {
    if (h = c[a].trim(), !h) {
      if (a === 0 || a === c.length - 1) continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(h)) return !1;
    h.charCodeAt(h.length - 1) === 58 ? u.push(h.charCodeAt(0) === 58 ? "center" : "right") : h.charCodeAt(0) === 58 ? u.push("left") : u.push("");
  }
  if (r = Ji(n, e).trim(), r.indexOf("|") === -1 || (c = r.replace(/^\||\|$/g, "").split("|"), u.length !== c.length)) return !1;
  if (i) return !0;
  for (n.tokens.push({
    type: "table_open",
    lines: f = [e, 0],
    level: n.level++
  }), n.tokens.push({
    type: "thead_open",
    lines: [e, e + 1],
    level: n.level++
  }), n.tokens.push({
    type: "tr_open",
    lines: [e, e + 1],
    level: n.level++
  }), a = 0; a < c.length; a++) n.tokens.push({
    type: "th_open",
    align: u[a],
    lines: [e, e + 1],
    level: n.level++
  }), n.tokens.push({
    type: "inline",
    content: c[a].trim(),
    lines: [e, e + 1],
    level: n.level,
    children: []
  }), n.tokens.push({
    type: "th_close",
    level: --n.level
  });
  for (n.tokens.push({
    type: "tr_close",
    level: --n.level
  }), n.tokens.push({
    type: "thead_close",
    level: --n.level
  }), n.tokens.push({
    type: "tbody_open",
    lines: m = [e + 2, 0],
    level: n.level++
  }), l = e + 2; l < t && !(n.tShift[l] < n.blkIndent || (r = Ji(n, l).trim(), r.indexOf("|") === -1)); l++) {
    for (c = r.replace(/^\||\|$/g, "").split("|"), n.tokens.push({
      type: "tr_open",
      level: n.level++
    }), a = 0; a < c.length; a++) n.tokens.push({
      type: "td_open",
      align: u[a],
      level: n.level++
    }), d = c[a].substring(c[a].charCodeAt(0) === 124 ? 1 : 0, c[a].charCodeAt(c[a].length - 1) === 124 ? c[a].length - 1 : c[a].length).trim(), n.tokens.push({
      type: "inline",
      content: d,
      level: n.level,
      children: []
    }), n.tokens.push({
      type: "td_close",
      level: --n.level
    });
    n.tokens.push({
      type: "tr_close",
      level: --n.level
    });
  }
  return n.tokens.push({
    type: "tbody_close",
    level: --n.level
  }), n.tokens.push({
    type: "table_close",
    level: --n.level
  }), f[1] = m[1] = l, n.line = l, !0;
}
function ui(n, e) {
  var t,
    i,
    s = n.bMarks[e] + n.tShift[e],
    r = n.eMarks[e];
  return s >= r || (i = n.src.charCodeAt(s++), i !== 126 && i !== 58) || (t = n.skipSpaces(s), s === t) || t >= r ? -1 : t;
}
function Or(n, e) {
  var t,
    i,
    s = n.level + 2;
  for (t = e + 2, i = n.tokens.length - 2; t < i; t++) n.tokens[t].level === s && n.tokens[t].type === "paragraph_open" && (n.tokens[t + 2].tight = !0, n.tokens[t].tight = !0, t += 2);
}
function Pr(n, e, t, i) {
  var s, r, o, a, l, c, d, u, h, f, m, p, g, b;
  if (i) return n.ddIndent < 0 ? !1 : ui(n, e) >= 0;
  if (d = e + 1, n.isEmpty(d) && ++d > t || n.tShift[d] < n.blkIndent || (s = ui(n, d), s < 0) || n.level >= n.options.maxNesting) return !1;
  c = n.tokens.length, n.tokens.push({
    type: "dl_open",
    lines: l = [e, 0],
    level: n.level++
  }), o = e, r = d;
  e: for (;;) {
    for (b = !0, g = !1, n.tokens.push({
      type: "dt_open",
      lines: [o, o],
      level: n.level++
    }), n.tokens.push({
      type: "inline",
      content: n.getLines(o, o + 1, n.blkIndent, !1).trim(),
      level: n.level + 1,
      lines: [o, o],
      children: []
    }), n.tokens.push({
      type: "dt_close",
      level: --n.level
    });;) {
      if (n.tokens.push({
        type: "dd_open",
        lines: a = [d, 0],
        level: n.level++
      }), p = n.tight, h = n.ddIndent, u = n.blkIndent, m = n.tShift[r], f = n.parentType, n.blkIndent = n.ddIndent = n.tShift[r] + 2, n.tShift[r] = s - n.bMarks[r], n.tight = !0, n.parentType = "deflist", n.parser.tokenize(n, r, t, !0), (!n.tight || g) && (b = !1), g = n.line - r > 1 && n.isEmpty(n.line - 1), n.tShift[r] = m, n.tight = p, n.parentType = f, n.blkIndent = u, n.ddIndent = h, n.tokens.push({
        type: "dd_close",
        level: --n.level
      }), a[1] = d = n.line, d >= t || n.tShift[d] < n.blkIndent) break e;
      if (s = ui(n, d), s < 0) break;
      r = d;
    }
    if (d >= t || (o = d, n.isEmpty(o)) || n.tShift[o] < n.blkIndent || (r = o + 1, r >= t) || (n.isEmpty(r) && r++, r >= t) || n.tShift[r] < n.blkIndent || (s = ui(n, r), s < 0)) break;
  }
  return n.tokens.push({
    type: "dl_close",
    level: --n.level
  }), l[1] = d, n.line = d, b && Or(n, c), !0;
}
function Nr(n, e) {
  var t,
    i,
    s,
    r,
    o,
    a = e + 1,
    l;
  if (t = n.lineMax, a < t && !n.isEmpty(a)) {
    for (l = n.parser.ruler.getRules("paragraph"); a < t && !n.isEmpty(a); a++) if (!(n.tShift[a] - n.blkIndent > 3)) {
      for (s = !1, r = 0, o = l.length; r < o; r++) if (l[r](n, a, t, !0)) {
        s = !0;
        break;
      }
      if (s) break;
    }
  }
  return i = n.getLines(e, a, n.blkIndent, !1).trim(), n.line = a, i.length && (n.tokens.push({
    type: "paragraph_open",
    tight: !1,
    lines: [e, n.line],
    level: n.level
  }), n.tokens.push({
    type: "inline",
    content: i,
    level: n.level + 1,
    lines: [e, n.line],
    children: []
  }), n.tokens.push({
    type: "paragraph_close",
    tight: !1,
    level: n.level
  })), !0;
}
var fi = [["code", yr], ["fences", Er, ["paragraph", "blockquote", "list"]], ["blockquote", Sr, ["paragraph", "blockquote", "list"]], ["hr", _r, ["paragraph", "blockquote", "list"]], ["list", wr, ["paragraph", "blockquote"]], ["footnote", Ar, ["paragraph"]], ["heading", Tr, ["paragraph", "blockquote"]], ["lheading", Cr], ["htmlblock", Lr, ["paragraph", "blockquote"]], ["table", Ir, ["paragraph"]], ["deflist", Pr, ["paragraph"]], ["paragraph", Nr]];
function ys() {
  this.ruler = new oe();
  for (var n = 0; n < fi.length; n++) this.ruler.push(fi[n][0], fi[n][1], {
    alt: (fi[n][2] || []).slice()
  });
}
ys.prototype.tokenize = function (n, e, t) {
  for (var i = this.ruler.getRules(""), s = i.length, r = e, o = !1, a, l; r < t && (n.line = r = n.skipEmptyLines(r), !(r >= t || n.tShift[r] < n.blkIndent));) {
    for (l = 0; l < s && (a = i[l](n, r, t, !1), !a); l++);
    if (n.tight = !o, n.isEmpty(n.line - 1) && (o = !0), r = n.line, r < t && n.isEmpty(r)) {
      if (o = !0, r++, r < t && n.parentType === "list" && n.isEmpty(r)) break;
      n.line = r;
    }
  }
};
var Dr = /[\n\t]/g,
  Br = /\r[\n\u0085]|[\u2424\u2028\u0085]/g,
  Fr = /\u00a0/g;
ys.prototype.parse = function (n, e, t, i) {
  var s,
    r = 0,
    o = 0;
  if (!n) return [];
  n = n.replace(Fr, " "), n = n.replace(Br, "\n"), n.indexOf("	") >= 0 && (n = n.replace(Dr, function (a, l) {
    var c;
    return n.charCodeAt(l) === 10 ? (r = l + 1, o = 0, a) : (c = "    ".slice((l - r - o) % 4), o = l - r + 1, c);
  })), s = new at(n, this, e, t, i), this.tokenize(s, s.line, s.lineMax);
};
function Ur(n) {
  switch (n) {
    case 10:
    case 92:
    case 96:
    case 42:
    case 95:
    case 94:
    case 91:
    case 93:
    case 33:
    case 38:
    case 60:
    case 62:
    case 123:
    case 125:
    case 36:
    case 37:
    case 64:
    case 126:
    case 43:
    case 61:
    case 58:
      return !0;
    default:
      return !1;
  }
}
function jr(n, e) {
  for (var t = n.pos; t < n.posMax && !Ur(n.src.charCodeAt(t));) t++;
  return t === n.pos ? !1 : (e || (n.pending += n.src.slice(n.pos, t)), n.pos = t, !0);
}
function qr(n, e) {
  var t,
    i,
    s = n.pos;
  if (n.src.charCodeAt(s) !== 10) return !1;
  if (t = n.pending.length - 1, i = n.posMax, !e) if (t >= 0 && n.pending.charCodeAt(t) === 32) {
    if (t >= 1 && n.pending.charCodeAt(t - 1) === 32) {
      for (var r = t - 2; r >= 0; r--) if (n.pending.charCodeAt(r) !== 32) {
        n.pending = n.pending.substring(0, r + 1);
        break;
      }
      n.push({
        type: "hardbreak",
        level: n.level
      });
    } else n.pending = n.pending.slice(0, -1), n.push({
      type: "softbreak",
      level: n.level
    });
  } else n.push({
    type: "softbreak",
    level: n.level
  });
  for (s++; s < i && n.src.charCodeAt(s) === 32;) s++;
  return n.pos = s, !0;
}
var Es = [];
for (var Hs = 0; Hs < 256; Hs++) Es.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (n) {
  Es[n.charCodeAt(0)] = 1;
});
function Hr(n, e) {
  var t,
    i = n.pos,
    s = n.posMax;
  if (n.src.charCodeAt(i) !== 92) return !1;
  if (i++, i < s) {
    if (t = n.src.charCodeAt(i), t < 256 && Es[t] !== 0) return e || (n.pending += n.src[i]), n.pos += 2, !0;
    if (t === 10) {
      for (e || n.push({
        type: "hardbreak",
        level: n.level
      }), i++; i < s && n.src.charCodeAt(i) === 32;) i++;
      return n.pos = i, !0;
    }
  }
  return e || (n.pending += "\\"), n.pos++, !0;
}
function zr(n, e) {
  var t,
    i,
    s,
    r,
    o,
    a = n.pos,
    l = n.src.charCodeAt(a);
  if (l !== 96) return !1;
  for (t = a, a++, i = n.posMax; a < i && n.src.charCodeAt(a) === 96;) a++;
  for (s = n.src.slice(t, a), r = o = a; (r = n.src.indexOf("`", o)) !== -1;) {
    for (o = r + 1; o < i && n.src.charCodeAt(o) === 96;) o++;
    if (o - r === s.length) return e || n.push({
      type: "code",
      content: n.src.slice(a, r).replace(/[ \n]+/g, " ").trim(),
      block: !1,
      level: n.level
    }), n.pos = o, !0;
  }
  return e || (n.pending += s), n.pos += s.length, !0;
}
function Gr(n, e) {
  var t,
    i,
    s,
    r = n.posMax,
    o = n.pos,
    a,
    l;
  if (n.src.charCodeAt(o) !== 126 || e || o + 4 >= r || n.src.charCodeAt(o + 1) !== 126 || n.level >= n.options.maxNesting || (a = o > 0 ? n.src.charCodeAt(o - 1) : -1, l = n.src.charCodeAt(o + 2), a === 126) || l === 126 || l === 32 || l === 10) return !1;
  for (i = o + 2; i < r && n.src.charCodeAt(i) === 126;) i++;
  if (i > o + 3) return n.pos += i - o, e || (n.pending += n.src.slice(o, i)), !0;
  for (n.pos = o + 2, s = 1; n.pos + 1 < r;) {
    if (n.src.charCodeAt(n.pos) === 126 && n.src.charCodeAt(n.pos + 1) === 126 && (a = n.src.charCodeAt(n.pos - 1), l = n.pos + 2 < r ? n.src.charCodeAt(n.pos + 2) : -1, l !== 126 && a !== 126 && (a !== 32 && a !== 10 ? s-- : l !== 32 && l !== 10 && s++, s <= 0))) {
      t = !0;
      break;
    }
    n.parser.skipToken(n);
  }
  return t ? (n.posMax = n.pos, n.pos = o + 2, e || (n.push({
    type: "del_open",
    level: n.level++
  }), n.parser.tokenize(n), n.push({
    type: "del_close",
    level: --n.level
  })), n.pos = n.posMax + 2, n.posMax = r, !0) : (n.pos = o, !1);
}
function Vr(n, e) {
  var t,
    i,
    s,
    r = n.posMax,
    o = n.pos,
    a,
    l;
  if (n.src.charCodeAt(o) !== 43 || e || o + 4 >= r || n.src.charCodeAt(o + 1) !== 43 || n.level >= n.options.maxNesting || (a = o > 0 ? n.src.charCodeAt(o - 1) : -1, l = n.src.charCodeAt(o + 2), a === 43) || l === 43 || l === 32 || l === 10) return !1;
  for (i = o + 2; i < r && n.src.charCodeAt(i) === 43;) i++;
  if (i !== o + 2) return n.pos += i - o, e || (n.pending += n.src.slice(o, i)), !0;
  for (n.pos = o + 2, s = 1; n.pos + 1 < r;) {
    if (n.src.charCodeAt(n.pos) === 43 && n.src.charCodeAt(n.pos + 1) === 43 && (a = n.src.charCodeAt(n.pos - 1), l = n.pos + 2 < r ? n.src.charCodeAt(n.pos + 2) : -1, l !== 43 && a !== 43 && (a !== 32 && a !== 10 ? s-- : l !== 32 && l !== 10 && s++, s <= 0))) {
      t = !0;
      break;
    }
    n.parser.skipToken(n);
  }
  return t ? (n.posMax = n.pos, n.pos = o + 2, e || (n.push({
    type: "ins_open",
    level: n.level++
  }), n.parser.tokenize(n), n.push({
    type: "ins_close",
    level: --n.level
  })), n.pos = n.posMax + 2, n.posMax = r, !0) : (n.pos = o, !1);
}
function Kr(n, e) {
  var t,
    i,
    s,
    r = n.posMax,
    o = n.pos,
    a,
    l;
  if (n.src.charCodeAt(o) !== 61 || e || o + 4 >= r || n.src.charCodeAt(o + 1) !== 61 || n.level >= n.options.maxNesting || (a = o > 0 ? n.src.charCodeAt(o - 1) : -1, l = n.src.charCodeAt(o + 2), a === 61) || l === 61 || l === 32 || l === 10) return !1;
  for (i = o + 2; i < r && n.src.charCodeAt(i) === 61;) i++;
  if (i !== o + 2) return n.pos += i - o, e || (n.pending += n.src.slice(o, i)), !0;
  for (n.pos = o + 2, s = 1; n.pos + 1 < r;) {
    if (n.src.charCodeAt(n.pos) === 61 && n.src.charCodeAt(n.pos + 1) === 61 && (a = n.src.charCodeAt(n.pos - 1), l = n.pos + 2 < r ? n.src.charCodeAt(n.pos + 2) : -1, l !== 61 && a !== 61 && (a !== 32 && a !== 10 ? s-- : l !== 32 && l !== 10 && s++, s <= 0))) {
      t = !0;
      break;
    }
    n.parser.skipToken(n);
  }
  return t ? (n.posMax = n.pos, n.pos = o + 2, e || (n.push({
    type: "mark_open",
    level: n.level++
  }), n.parser.tokenize(n), n.push({
    type: "mark_close",
    level: --n.level
  })), n.pos = n.posMax + 2, n.posMax = r, !0) : (n.pos = o, !1);
}
function zs(n) {
  return n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122;
}
function Gs(n, e) {
  var t = e,
    i,
    s,
    r,
    o = !0,
    a = !0,
    l = n.posMax,
    c = n.src.charCodeAt(e);
  for (i = e > 0 ? n.src.charCodeAt(e - 1) : -1; t < l && n.src.charCodeAt(t) === c;) t++;
  return t >= l && (o = !1), r = t - e, r >= 4 ? o = a = !1 : (s = t < l ? n.src.charCodeAt(t) : -1, (s === 32 || s === 10) && (o = !1), (i === 32 || i === 10) && (a = !1), c === 95 && (zs(i) && (o = !1), zs(s) && (a = !1))), {
    can_open: o,
    can_close: a,
    delims: r
  };
}
function $r(n, e) {
  var t,
    i,
    s,
    r,
    o,
    a,
    l,
    c = n.posMax,
    d = n.pos,
    u = n.src.charCodeAt(d);
  if (u !== 95 && u !== 42 || e) return !1;
  if (l = Gs(n, d), t = l.delims, !l.can_open) return n.pos += t, e || (n.pending += n.src.slice(d, n.pos)), !0;
  if (n.level >= n.options.maxNesting) return !1;
  for (n.pos = d + t, a = [t]; n.pos < c;) {
    if (n.src.charCodeAt(n.pos) === u) {
      if (l = Gs(n, n.pos), i = l.delims, l.can_close) {
        for (r = a.pop(), o = i; r !== o;) {
          if (o < r) {
            a.push(r - o);
            break;
          }
          if (o -= r, a.length === 0) break;
          n.pos += r, r = a.pop();
        }
        if (a.length === 0) {
          t = r, s = !0;
          break;
        }
        n.pos += i;
        continue;
      }
      l.can_open && a.push(i), n.pos += i;
      continue;
    }
    n.parser.skipToken(n);
  }
  return s ? (n.posMax = n.pos, n.pos = d + t, e || ((t === 2 || t === 3) && n.push({
    type: "strong_open",
    level: n.level++
  }), (t === 1 || t === 3) && n.push({
    type: "em_open",
    level: n.level++
  }), n.parser.tokenize(n), (t === 1 || t === 3) && n.push({
    type: "em_close",
    level: --n.level
  }), (t === 2 || t === 3) && n.push({
    type: "strong_close",
    level: --n.level
  })), n.pos = n.posMax + t, n.posMax = c, !0) : (n.pos = d, !1);
}
var Wr = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
function Jr(n, e) {
  var t,
    i,
    s = n.posMax,
    r = n.pos;
  if (n.src.charCodeAt(r) !== 126 || e || r + 2 >= s || n.level >= n.options.maxNesting) return !1;
  for (n.pos = r + 1; n.pos < s;) {
    if (n.src.charCodeAt(n.pos) === 126) {
      t = !0;
      break;
    }
    n.parser.skipToken(n);
  }
  return !t || r + 1 === n.pos || (i = n.src.slice(r + 1, n.pos), i.match(/(^|[^\\])(\\\\)*\s/)) ? (n.pos = r, !1) : (n.posMax = n.pos, n.pos = r + 1, e || n.push({
    type: "sub",
    level: n.level,
    content: i.replace(Wr, "$1")
  }), n.pos = n.posMax + 1, n.posMax = s, !0);
}
var Xr = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
function Yr(n, e) {
  var t,
    i,
    s = n.posMax,
    r = n.pos;
  if (n.src.charCodeAt(r) !== 94 || e || r + 2 >= s || n.level >= n.options.maxNesting) return !1;
  for (n.pos = r + 1; n.pos < s;) {
    if (n.src.charCodeAt(n.pos) === 94) {
      t = !0;
      break;
    }
    n.parser.skipToken(n);
  }
  return !t || r + 1 === n.pos || (i = n.src.slice(r + 1, n.pos), i.match(/(^|[^\\])(\\\\)*\s/)) ? (n.pos = r, !1) : (n.posMax = n.pos, n.pos = r + 1, e || n.push({
    type: "sup",
    level: n.level,
    content: i.replace(Xr, "$1")
  }), n.pos = n.posMax + 1, n.posMax = s, !0);
}
function Zr(n, e) {
  var t,
    i,
    s,
    r,
    o,
    a,
    l,
    c,
    d = !1,
    u = n.pos,
    h = n.posMax,
    f = n.pos,
    m = n.src.charCodeAt(f);
  if (m === 33 && (d = !0, m = n.src.charCodeAt(++f)), m !== 91 || n.level >= n.options.maxNesting || (t = f + 1, i = ei(n, f), i < 0)) return !1;
  if (a = i + 1, a < h && n.src.charCodeAt(a) === 40) {
    for (a++; a < h && (c = n.src.charCodeAt(a), !(c !== 32 && c !== 10)); a++);
    if (a >= h) return !1;
    for (f = a, wn(n, a) ? (r = n.linkContent, a = n.pos) : r = "", f = a; a < h && (c = n.src.charCodeAt(a), !(c !== 32 && c !== 10)); a++);
    if (a < h && f !== a && An(n, a)) for (o = n.linkContent, a = n.pos; a < h && (c = n.src.charCodeAt(a), !(c !== 32 && c !== 10)); a++);else o = "";
    if (a >= h || n.src.charCodeAt(a) !== 41) return n.pos = u, !1;
    a++;
  } else {
    if (n.linkLevel > 0) return !1;
    for (; a < h && (c = n.src.charCodeAt(a), !(c !== 32 && c !== 10)); a++);
    if (a < h && n.src.charCodeAt(a) === 91 && (f = a + 1, a = ei(n, a), a >= 0 ? s = n.src.slice(f, a++) : a = f - 1), s || (_typeof(s) > "u" && (a = i + 1), s = n.src.slice(t, i)), l = n.env.references[Tn(s)], !l) return n.pos = u, !1;
    r = l.href, o = l.title;
  }
  return e || (n.pos = t, n.posMax = i, d ? n.push({
    type: "image",
    src: r,
    title: o,
    alt: n.src.substr(t, i - t),
    level: n.level
  }) : (n.push({
    type: "link_open",
    href: r,
    title: o,
    level: n.level++
  }), n.linkLevel++, n.parser.tokenize(n), n.linkLevel--, n.push({
    type: "link_close",
    level: --n.level
  }))), n.pos = a, n.posMax = h, !0;
}
function Qr(n, e) {
  var t,
    i,
    s,
    r,
    o = n.posMax,
    a = n.pos;
  return a + 2 >= o || n.src.charCodeAt(a) !== 94 || n.src.charCodeAt(a + 1) !== 91 || n.level >= n.options.maxNesting || (t = a + 2, i = ei(n, a + 1), i < 0) ? !1 : (e || (n.env.footnotes || (n.env.footnotes = {}), n.env.footnotes.list || (n.env.footnotes.list = []), s = n.env.footnotes.list.length, n.pos = t, n.posMax = i, n.push({
    type: "footnote_ref",
    id: s,
    level: n.level
  }), n.linkLevel++, r = n.tokens.length, n.parser.tokenize(n), n.env.footnotes.list[s] = {
    tokens: n.tokens.splice(r)
  }, n.linkLevel--), n.pos = i + 1, n.posMax = o, !0);
}
function eo(n, e) {
  var t,
    i,
    s,
    r,
    o = n.posMax,
    a = n.pos;
  if (a + 3 > o || !n.env.footnotes || !n.env.footnotes.refs || n.src.charCodeAt(a) !== 91 || n.src.charCodeAt(a + 1) !== 94 || n.level >= n.options.maxNesting) return !1;
  for (i = a + 2; i < o; i++) {
    if (n.src.charCodeAt(i) === 32 || n.src.charCodeAt(i) === 10) return !1;
    if (n.src.charCodeAt(i) === 93) break;
  }
  return i === a + 2 || i >= o || (i++, t = n.src.slice(a + 2, i - 1), _typeof(n.env.footnotes.refs[":" + t]) > "u") ? !1 : (e || (n.env.footnotes.list || (n.env.footnotes.list = []), n.env.footnotes.refs[":" + t] < 0 ? (s = n.env.footnotes.list.length, n.env.footnotes.list[s] = {
    label: t,
    count: 0
  }, n.env.footnotes.refs[":" + t] = s) : s = n.env.footnotes.refs[":" + t], r = n.env.footnotes.list[s].count, n.env.footnotes.list[s].count++, n.push({
    type: "footnote_ref",
    id: s,
    subId: r,
    level: n.level
  })), n.pos = i, n.posMax = o, !0);
}
var to = ["coap", "doi", "javascript", "aaa", "aaas", "about", "acap", "cap", "cid", "crid", "data", "dav", "dict", "dns", "file", "ftp", "geo", "go", "gopher", "h323", "http", "https", "iax", "icap", "im", "imap", "info", "ipp", "iris", "iris.beep", "iris.xpc", "iris.xpcs", "iris.lwz", "ldap", "mailto", "mid", "msrp", "msrps", "mtqp", "mupdate", "news", "nfs", "ni", "nih", "nntp", "opaquelocktoken", "pop", "pres", "rtsp", "service", "session", "shttp", "sieve", "sip", "sips", "sms", "snmp", "soap.beep", "soap.beeps", "tag", "tel", "telnet", "tftp", "thismessage", "tn3270", "tip", "tv", "urn", "vemmi", "ws", "wss", "xcon", "xcon-userid", "xmlrpc.beep", "xmlrpc.beeps", "xmpp", "z39.50r", "z39.50s", "adiumxtra", "afp", "afs", "aim", "apt", "attachment", "aw", "beshare", "bitcoin", "bolo", "callto", "chrome", "chrome-extension", "com-eventbrite-attendee", "content", "cvs", "dlna-playsingle", "dlna-playcontainer", "dtn", "dvb", "ed2k", "facetime", "feed", "finger", "fish", "gg", "git", "gizmoproject", "gtalk", "hcp", "icon", "ipn", "irc", "irc6", "ircs", "itms", "jar", "jms", "keyparc", "lastfm", "ldaps", "magnet", "maps", "market", "message", "mms", "ms-help", "msnim", "mumble", "mvn", "notes", "oid", "palm", "paparazzi", "platform", "proxy", "psyc", "query", "res", "resource", "rmi", "rsync", "rtmp", "secondlife", "sftp", "sgn", "skype", "smb", "soldat", "spotify", "ssh", "steam", "svn", "teamspeak", "things", "udp", "unreal", "ut2004", "ventrilo", "view-source", "webcal", "wtai", "wyciwyg", "xfire", "xri", "ymsgr"],
  io = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,
  so = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
function no(n, e) {
  var t,
    i,
    s,
    r,
    o,
    a = n.pos;
  return n.src.charCodeAt(a) !== 60 || (t = n.src.slice(a), t.indexOf(">") < 0) ? !1 : (i = t.match(so), i ? to.indexOf(i[1].toLowerCase()) < 0 || (r = i[0].slice(1, -1), o = es(r), !n.parser.validateLink(r)) ? !1 : (e || (n.push({
    type: "link_open",
    href: o,
    level: n.level
  }), n.push({
    type: "text",
    content: r,
    level: n.level + 1
  }), n.push({
    type: "link_close",
    level: n.level
  })), n.pos += i[0].length, !0) : (s = t.match(io), s ? (r = s[0].slice(1, -1), o = es("mailto:" + r), n.parser.validateLink(o) ? (e || (n.push({
    type: "link_open",
    href: o,
    level: n.level
  }), n.push({
    type: "text",
    content: r,
    level: n.level + 1
  }), n.push({
    type: "link_close",
    level: n.level
  })), n.pos += s[0].length, !0) : !1) : !1));
}
function Ui(n, e) {
  return n = n.source, e = e || "", function t(i, s) {
    return i ? (s = s.source || s, n = n.replace(i, s), t) : new RegExp(n, e);
  };
}
var ro = /[a-zA-Z_:][a-zA-Z0-9:._-]*/,
  oo = /[^"'=<>`\x00-\x20]+/,
  ao = /'[^']*'/,
  lo = /"[^"]*"/,
  co = Ui(/(?:unquoted|single_quoted|double_quoted)/)("unquoted", oo)("single_quoted", ao)("double_quoted", lo)(),
  ho = Ui(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name", ro)("attr_value", co)(),
  uo = Ui(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)("attribute", ho)(),
  fo = /<\/[A-Za-z][A-Za-z0-9]*\s*>/,
  po = /<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->/,
  mo = /<[?].*?[?]>/,
  go = /<![A-Z]+\s+[^>]*>/,
  bo = /<!\[CDATA\[[\s\S]*?\]\]>/,
  vo = Ui(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag", uo)("close_tag", fo)("comment", po)("processing", mo)("declaration", go)("cdata", bo)();
function yo(n) {
  var e = n | 32;
  return e >= 97 && e <= 122;
}
function Eo(n, e) {
  var t,
    i,
    s,
    r = n.pos;
  return !n.options.html || (s = n.posMax, n.src.charCodeAt(r) !== 60 || r + 2 >= s) || (t = n.src.charCodeAt(r + 1), t !== 33 && t !== 63 && t !== 47 && !yo(t)) || (i = n.src.slice(r).match(vo), !i) ? !1 : (e || n.push({
    type: "htmltag",
    content: n.src.slice(r, r + i[0].length),
    level: n.level
  }), n.pos += i[0].length, !0);
}
var So = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,
  _o = /^&([a-z][a-z0-9]{1,31});/i;
function xo(n, e) {
  var t,
    i,
    s,
    r = n.pos,
    o = n.posMax;
  if (n.src.charCodeAt(r) !== 38) return !1;
  if (r + 1 < o) {
    if (t = n.src.charCodeAt(r + 1), t === 35) {
      if (s = n.src.slice(r).match(So), s) return e || (i = s[1][0].toLowerCase() === "x" ? parseInt(s[1].slice(1), 16) : parseInt(s[1], 10), n.pending += _n(i) ? Qi(i) : Qi(65533)), n.pos += s[0].length, !0;
    } else if (s = n.src.slice(r).match(_o), s) {
      var a = En(s[1]);
      if (s[1] !== a) return e || (n.pending += a), n.pos += s[0].length, !0;
    }
  }
  return e || (n.pending += "&"), n.pos++, !0;
}
var Xi = [["text", jr], ["newline", qr], ["escape", Hr], ["backticks", zr], ["del", Gr], ["ins", Vr], ["mark", Kr], ["emphasis", $r], ["sub", Jr], ["sup", Yr], ["links", Zr], ["footnote_inline", Qr], ["footnote_ref", eo], ["autolink", no], ["htmltag", Eo], ["entity", xo]];
function ji() {
  this.ruler = new oe();
  for (var n = 0; n < Xi.length; n++) this.ruler.push(Xi[n][0], Xi[n][1]);
  this.validateLink = wo;
}
ji.prototype.skipToken = function (n) {
  var e = this.ruler.getRules(""),
    t = e.length,
    i = n.pos,
    s,
    r;
  if ((r = n.cacheGet(i)) > 0) {
    n.pos = r;
    return;
  }
  for (s = 0; s < t; s++) if (e[s](n, !0)) {
    n.cacheSet(i, n.pos);
    return;
  }
  n.pos++, n.cacheSet(i, n.pos);
};
ji.prototype.tokenize = function (n) {
  for (var e = this.ruler.getRules(""), t = e.length, i = n.posMax, s, r; n.pos < i;) {
    for (r = 0; r < t && (s = e[r](n, !1), !s); r++);
    if (s) {
      if (n.pos >= i) break;
      continue;
    }
    n.pending += n.src[n.pos++];
  }
  n.pending && n.pushPending();
};
ji.prototype.parse = function (n, e, t, i) {
  var s = new ot(n, this, e, t, i);
  this.tokenize(s);
};
function wo(n) {
  var e = ["vbscript", "javascript", "file", "data"],
    t = n.trim().toLowerCase();
  return t = st(t), !(t.indexOf(":") !== -1 && e.indexOf(t.split(":")[0]) !== -1);
}
var Ao = {
    options: {
      html: !1,
      // Enable HTML tags in source
      xhtmlOut: !1,
      // Use '/' to close single tags (<br />)
      breaks: !1,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkTarget: "",
      // set target to open link in
      // Enable some language-neutral replacements + quotes beautification
      typographer: !1,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
      quotes: "“”‘’",
      // Highlighter function. Should return escaped HTML,
      // or '' if input not changed
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20
      // Internal protection, recursion limit
    },
    components: {
      core: {
        rules: ["block", "inline", "references", "replacements", "smartquotes", "references", "abbr2", "footnote_tail"]
      },
      block: {
        rules: ["blockquote", "code", "fences", "footnote", "heading", "hr", "htmlblock", "lheading", "list", "paragraph", "table"]
      },
      inline: {
        rules: ["autolink", "backticks", "del", "emphasis", "entity", "escape", "footnote_ref", "htmltag", "links", "newline", "text"]
      }
    }
  },
  To = {
    options: {
      html: !1,
      // Enable HTML tags in source
      xhtmlOut: !1,
      // Use '/' to close single tags (<br />)
      breaks: !1,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkTarget: "",
      // set target to open link in
      // Enable some language-neutral replacements + quotes beautification
      typographer: !1,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
      quotes: "“”‘’",
      // Highlighter function. Should return escaped HTML,
      // or '' if input not changed
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20
      // Internal protection, recursion limit
    },
    components: {
      // Don't restrict core/block/inline rules
      core: {},
      block: {},
      inline: {}
    }
  },
  Co = {
    options: {
      html: !0,
      // Enable HTML tags in source
      xhtmlOut: !0,
      // Use '/' to close single tags (<br />)
      breaks: !1,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkTarget: "",
      // set target to open link in
      // Enable some language-neutral replacements + quotes beautification
      typographer: !1,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
      quotes: "“”‘’",
      // Highlighter function. Should return escaped HTML,
      // or '' if input not changed
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20
      // Internal protection, recursion limit
    },
    components: {
      core: {
        rules: ["block", "inline", "references", "abbr2"]
      },
      block: {
        rules: ["blockquote", "code", "fences", "heading", "hr", "htmlblock", "lheading", "list", "paragraph"]
      },
      inline: {
        rules: ["autolink", "backticks", "emphasis", "entity", "escape", "htmltag", "links", "newline", "text"]
      }
    }
  },
  Ro = {
    "default": Ao,
    full: To,
    commonmark: Co
  };
function Mn(n, e, t) {
  this.src = e, this.env = t, this.options = n.options, this.tokens = [], this.inlineMode = !1, this.inline = n.inline, this.block = n.block, this.renderer = n.renderer, this.typographer = n.typographer;
}
function xe(n, e) {
  typeof n != "string" && (e = n, n = "default"), e && e.linkify != null && console.warn("linkify option is removed. Use linkify plugin instead:\n\nimport Remarkable from 'remarkable';\nimport linkify from 'remarkable/linkify';\nnew Remarkable().use(linkify)\n"), this.inline = new ji(), this.block = new ys(), this.core = new Cn(), this.renderer = new vs(), this.ruler = new oe(), this.options = {}, this.configure(Ro[n]), this.set(e || {});
}
xe.prototype.set = function (n) {
  Sn(this.options, n);
};
xe.prototype.configure = function (n) {
  var e = this;
  if (!n) throw new Error("Wrong `remarkable` preset, check name/content");
  n.options && e.set(n.options), n.components && Object.keys(n.components).forEach(function (t) {
    n.components[t].rules && e[t].ruler.enable(n.components[t].rules, !0);
  });
};
xe.prototype.use = function (n, e) {
  return n(this, e), this;
};
xe.prototype.parse = function (n, e) {
  var t = new Mn(this, n, e);
  return this.core.process(t), t.tokens;
};
xe.prototype.render = function (n, e) {
  return e = e || {}, this.renderer.render(this.parse(n, e), this.options, e);
};
xe.prototype.parseInline = function (n, e) {
  var t = new Mn(this, n, e);
  return t.inlineMode = !0, this.core.process(t), t.tokens;
};
xe.prototype.renderInline = function (n, e) {
  return e = e || {}, this.renderer.render(this.parseInline(n, e), this.options, e);
};
var ut = /*#__PURE__*/function () {
  function ut() {
    _classCallCheck(this, ut);
  }
  return _createClass(ut, null, [{
    key: "instantiate",
    value: function instantiate(e) {
      if (e) return new xe(_objectSpread(_objectSpread({}, ut.DEFAULT_PROPERTIES), e));
      if (window.hljs) {
        var t = window.hljs;
        return new xe({
          highlight: function highlight(i, s) {
            if (s && t.getLanguage(s)) try {
              return t.highlight(i, {
                language: s
              }).value;
            } catch (_unused4) {
              console.error("failed to setup the highlight dependency");
            }
            try {
              return t.highlightAuto(i).value;
            } catch (_unused5) {
              console.error("failed to automatically highlight messages");
            }
            return "";
          },
          html: !1,
          // Enable HTML tags in source
          xhtmlOut: !1,
          // Use '/' to close single tags (<br />)
          breaks: !0,
          // Convert '\n' in paragraphs into <br>
          langPrefix: "language-",
          // CSS language prefix for fenced blocks
          linkTarget: "_blank",
          // set target to open in a new tab
          typographer: !0
          // Enable smartypants and other sweet transforms
        });
      } else return new xe(ut.DEFAULT_PROPERTIES);
    }
  }, {
    key: "createNew",
    value: function createNew(e) {
      var t = ut.instantiate(e);
      return t.inline.validateLink = function () {
        return !0;
      }, t;
    }
  }]);
}();
ut.DEFAULT_PROPERTIES = {
  breaks: !0,
  linkTarget: "_blank"
  // set target to open in a new tab
};
var ti = ut;
var W = /*#__PURE__*/function () {
  function W() {
    _classCallCheck(this, W);
  }
  return _createClass(W, null, [{
    key: "applyCustomStylesToElements",
    value: function applyCustomStylesToElements(e, t, i) {
      if (i && (Object.assign(e.outerContainer.style, i.outerContainer), Object.assign(e.innerContainer.style, i.innerContainer), Object.assign(e.bubbleElement.style, i.bubble), t)) {
        var s = e.bubbleElement.children[0],
          r = s.tagName.toLocaleLowerCase() !== "a" ? s : s.children[0];
        Object.assign(r.style, i.media);
      }
    }
  }, {
    key: "applySideStyles",
    value: function applySideStyles(e, t, i, s) {
      s && (W.applyCustomStylesToElements(e, i, s.shared), t === y.USER_ROLE ? W.applyCustomStylesToElements(e, i, s.user) : (W.applyCustomStylesToElements(e, i, s.ai), W.applyCustomStylesToElements(e, i, s[t])));
    }
  }, {
    key: "isElementsStyles",
    value: function isElementsStyles(e) {
      return !!(e.outerContainer || e.innerContainer || e.bubble || e.media);
    }
    // prettier-ignore
  }, {
    key: "applyCustomStyles",
    value: function applyCustomStyles(e, t, i, s, r) {
      var o;
      r && e["default"] !== r ? W.isElementsStyles(r) ? (W.applyCustomStylesToElements(t, s, (o = e["default"]) == null ? void 0 : o.shared), W.applyCustomStylesToElements(t, s, r)) : (W.applySideStyles(t, i, s, e["default"]), W.applySideStyles(t, i, s, r)) : W.applySideStyles(t, i, s, e["default"]);
    }
    // prettier-ignore
  }, {
    key: "extractParticularSharedStyles",
    value: function extractParticularSharedStyles(e, t) {
      if (!(t != null && t.shared)) return;
      var i = t.shared,
        s = {
          outerContainer: {},
          innerContainer: {},
          bubble: {},
          media: {}
        };
      return e.forEach(function (r) {
        var o, a, l, c;
        s.outerContainer[r] = ((o = i.outerContainer) == null ? void 0 : o[r]) || "", s.innerContainer[r] = ((a = i.innerContainer) == null ? void 0 : a[r]) || "", s.bubble[r] = ((l = i.bubble) == null ? void 0 : l[r]) || "", s.media[r] = ((c = i.media) == null ? void 0 : c[r]) || "";
      }), s;
    }
  }]);
}();
var yi = /*#__PURE__*/function () {
  function yi() {
    _classCallCheck(this, yi);
  }
  return _createClass(yi, null, [{
    key: "onMessage",
    value: function onMessage(e, t, i) {
      var r;
      var s = JSON.parse(JSON.stringify({
        message: t,
        isHistory: i,
        isInitial: i
      }));
      H.reAddFileRefToObject(t, s), (r = e.onMessage) == null || r.call(e, s), e.dispatchEvent(new CustomEvent("message", {
        detail: s
      })), te.fireOnNewMessage(e, s);
    }
  }, {
    key: "onClearMessages",
    value: function onClearMessages(e) {
      var t;
      (t = e.onClearMessages) == null || t.call(e), e.dispatchEvent(new CustomEvent("clear-messages"));
    }
  }, {
    key: "onRender",
    value: function onRender(e) {
      var t;
      (t = e.onComponentRender) == null || t.call(e, e), e.dispatchEvent(new CustomEvent("render", {
        detail: e
      }));
    }
  }, {
    key: "onError",
    value: function onError(e, t) {
      var i;
      (i = e.onError) == null || i.call(e, t), e.dispatchEvent(new CustomEvent("error", {
        detail: t
      }));
    }
  }]);
}();
var F = /*#__PURE__*/function () {
  function F() {
    _classCallCheck(this, F);
  }
  return _createClass(F, null, [{
    key: "generateLoadingRingElement",
    value: function generateLoadingRingElement() {
      var e = document.createElement("div");
      return e.classList.add("loading-history"), e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), e;
    }
  }, {
    key: "apply",
    value: function apply(e, t, i) {
      Ne.setRing(t.bubbleElement, i == null ? void 0 : i.bubble), i != null && i.bubble && (i = JSON.parse(JSON.stringify(i)), delete i.bubble), e.applyCustomStyles(t, "history", !1, i);
    }
  }, {
    key: "addLoadHistoryMessage",
    value: function addLoadHistoryMessage(e, t) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      var o, a, l, c, d, u, h, f;
      e.bubbleElement.classList.add(F.CLASS);
      var s = i ? F.FULL_VIEW_CLASS : F.SMALL_CLASS;
      e.outerContainer.classList.add(s);
      var r = i ? (c = (l = (a = (o = t.messageStyles) == null ? void 0 : o.loading) == null ? void 0 : a.history) == null ? void 0 : l.full) == null ? void 0 : c.styles : (f = (h = (u = (d = t.messageStyles) == null ? void 0 : d.loading) == null ? void 0 : u.history) == null ? void 0 : h.small) == null ? void 0 : f.styles;
      F.apply(t, e, r), t.elementRef.prepend(e.outerContainer);
    }
  }, {
    key: "createDefaultElements",
    value: function createDefaultElements(e) {
      var t = e.createMessageElements("", y.AI_ROLE),
        i = t.bubbleElement,
        s = F.generateLoadingRingElement();
      return i.appendChild(s), t;
    }
  }, {
    key: "addMessage",
    value: function addMessage(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var r, o, a, l;
      var i = (l = (a = (o = (r = e.messageStyles) == null ? void 0 : r.loading) == null ? void 0 : o.history) == null ? void 0 : a.full) == null ? void 0 : l.html,
        s = i ? _e.createElements(e, i, y.AI_ROLE, !0, !0) : F.createDefaultElements(e);
      return F.addLoadHistoryMessage(s, e, t), y.softRemRoleElements(s.innerContainer, e.avatar, e.name), s;
    }
  }, {
    key: "tryChangeViewToSmall",
    value: function tryChangeViewToSmall(e, t) {
      var i, s, r, o, a, l, c, d;
      if (t != null && t.outerContainer.classList.contains(F.FULL_VIEW_CLASS)) {
        t.outerContainer.classList.replace(F.FULL_VIEW_CLASS, F.SMALL_CLASS);
        var u = (o = (r = (s = (i = e.messageStyles) == null ? void 0 : i.loading) == null ? void 0 : s.history) == null ? void 0 : r.small) == null ? void 0 : o.styles;
        u && F.apply(e, t, u);
        var h = (d = (c = (l = (a = e.messageStyles) == null ? void 0 : a.loading) == null ? void 0 : l.history) == null ? void 0 : c.small) == null ? void 0 : d.html;
        return h && (t.bubbleElement.innerHTML = h), !0;
      }
      return !1;
    }
  }, {
    key: "changeFullViewToSmall",
    value: function changeFullViewToSmall(e) {
      var t = e.messageElementRefs[e.messageElementRefs.length - 1];
      F.tryChangeViewToSmall(e, t) || F.tryChangeViewToSmall(e, e.messageElementRefs[0]);
    }
  }]);
}();
F.CLASS = "loading-history-message", F.FULL_VIEW_CLASS = "loading-history-message-full-view", F.SMALL_CLASS = "loading-history-message-small";
var Be = F;
var Wt = /*#__PURE__*/function () {
  function Wt() {
    _classCallCheck(this, Wt);
  }
  return _createClass(Wt, null, [{
    key: "setFade",
    value: function setFade(e, t) {
      e.style.transitionDuration = typeof t == "number" ? "".concat(t, "ms") : "".concat(Wt.DEFAULT_FADE_MS, "ms");
    }
  }, {
    key: "fadeAnimation",
    value: function () {
      var _fadeAnimation = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e, t) {
        var i;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              e.style.opacity = "0";
              i = typeof t == "number" ? t : Wt.DEFAULT_FADE_MS;
              _context.next = 4;
              return new Promise(function (s) {
                setTimeout(function () {
                  return s();
                }, i);
              });
            case 4:
              e.style.opacity = "1";
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function fadeAnimation(_x, _x2) {
        return _fadeAnimation.apply(this, arguments);
      }
      return fadeAnimation;
    }()
  }]);
}();
Wt.DEFAULT_FADE_MS = 500;
var Ei = Wt;
var Vs = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3csvg%20fill='%23000000'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2032%2032'%20xml:space='preserve'%3e%3cpath%20d='M23,30.36H9c-2.404,0-4.36-1.956-4.36-4.36V15c0-2.404,1.956-4.36,4.36-4.36h3.659%20c0.167-1.566,1.415-2.813,2.981-2.981V5.333c-1.131-0.174-2-1.154-2-2.333c0-1.301,1.059-2.36,2.36-2.36%20c1.302,0,2.36,1.059,2.36,2.36c0,1.179-0.869,2.159-2,2.333V7.66c1.566,0.167,2.814,1.415,2.981,2.981H23%20c2.404,0,4.36,1.956,4.36,4.36v11C27.36,28.404,25.404,30.36,23,30.36z%20M9,11.36c-2.007,0-3.64,1.633-3.64,3.64v11%20c0,2.007,1.633,3.64,3.64,3.64h14c2.007,0,3.64-1.633,3.64-3.64V15c0-2.007-1.633-3.64-3.64-3.64H9z%20M13.384,10.64h5.231%20C18.439,9.354,17.334,8.36,16,8.36C14.667,8.36,13.561,9.354,13.384,10.64z%20M16,1.36c-0.904,0-1.64,0.736-1.64,1.64%20S15.096,4.64,16,4.64c0.904,0,1.64-0.736,1.64-1.64S16.904,1.36,16,1.36z%20M20,27.36h-8c-1.301,0-2.36-1.059-2.36-2.36%20s1.059-2.36,2.36-2.36h8c1.302,0,2.36,1.059,2.36,2.36S21.302,27.36,20,27.36z%20M12,23.36c-0.904,0-1.64,0.735-1.64,1.64%20s0.736,1.64,1.64,1.64h8c0.904,0,1.64-0.735,1.64-1.64s-0.735-1.64-1.64-1.64H12z%20M31,23.86h-2c-0.199,0-0.36-0.161-0.36-0.36V15%20c0-0.199,0.161-0.36,0.36-0.36h2c0.199,0,0.36,0.161,0.36,0.36v8.5C31.36,23.699,31.199,23.86,31,23.86z%20M29.36,23.14h1.279v-7.78%20H29.36V23.14z%20M3,23.86H1c-0.199,0-0.36-0.161-0.36-0.36V15c0-0.199,0.161-0.36,0.36-0.36h2c0.199,0,0.36,0.161,0.36,0.36v8.5%20C3.36,23.699,3.199,23.86,3,23.86z%20M1.36,23.14h1.28v-7.78H1.36V23.14z%20M20,20.36c-1.302,0-2.36-1.059-2.36-2.36%20s1.059-2.36,2.36-2.36s2.36,1.059,2.36,2.36C22.36,19.302,21.302,20.36,20,20.36z%20M20,16.36c-0.904,0-1.64,0.736-1.64,1.64%20s0.735,1.64,1.64,1.64s1.64-0.735,1.64-1.64S20.904,16.36,20,16.36z%20M12,20.36c-1.301,0-2.36-1.059-2.36-2.36s1.059-2.36,2.36-2.36%20s2.36,1.059,2.36,2.36C14.36,19.302,13.301,20.36,12,20.36z%20M12,16.36c-0.904,0-1.64,0.736-1.64,1.64s0.736,1.64,1.64,1.64%20s1.64-0.735,1.64-1.64S12.904,16.36,12,16.36z'/%3e%3crect%20style='fill:none;'%20width='32'%20height='32'/%3e%3c/svg%3e",
  ts = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAMAAAC/MqoPAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAADNQTFRF////9vX18vLy/Pz86enp4+Li2tnZ1tbWzczM+fn57Ozs4N/f09LS0M/P5uXl7+/v3dzcwtncCAAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAAEgAAABIAEbJaz4AAAZNSURBVHja7d3bdtsqEABQYABZSLH9/3+ZpnUsIcF5iOM6PfElNoMHMfPQdq3GmL0GkLhEUqLaUExnOtOZznSmM53pTGc605nOdKYznelMZzrTmV4LXSqllKyJDkob26xWq8Zae/iH0QoWTm9d1xur4WuypQJtTd+5dqn0VjcxzNO5/57mEBvdLo8Oron6aseWOjYOFkVvjQs3DmgyONMuht52EfztP+4hdu0i6LCO808/M8c1lE/fuPGej41uUzgdtoO/75N+2ELJ9I3b3//hPXbiMenm3pR/Jt4USgcLBIp4Bh10gqKVhvLo0klCxeSky96nKcj3siw6pJIL4XsoiQ7apyvMY/V3HHrSRioLopvEhSpTCn2TPEuwKYMOIX0tAxRBf/Hpa+lfSqBv9gi1FPsNfTrMAiVmIE/vJhz61FGnQxRIEYE4vfNYdN8Rp6MlHaHotHTn8ejekaZPAjEmyvQWdZFTtYTpXqCGJ0zvcek9Yfoel76nS0ffv1NMp1ca+pkgyfRCGind4L7OWWc605l+cxjsyhqy9AGbPpClc1/nvl5VX0c/3Alk6RU3+Am7shNZ+h6bvidLr7jBB+zKBrL0irOOudmIUDzTmf5gIP+iEuXtRuTVaEmY/oZLfyNMrzjryPc0gerMTdpVg0tvjJUU6bLPcGOoUv46SLL6Wi8yhLf06C7TUyekI0efRaaYqdFltkeNpPumRPSMDxgBYvSM035FrKAmH72hRW99PrpvSdEHkTEGUvSsK3yKVDkuJ92RohcZaehzzirPpOg+J92Tolfc4Cumx5xVXpGiZ34+ICX6W84qv5GiR5NPbiIpOv6BCoSvSkTX+eiaGP092zINvBOj4x8mSf9FqejvNo/cvpOji19ZbmviL0GPLsYMFzgzCor0+Bv/ePDvSJKOb9dJ5UlnbnEHiHgzv6cdTpJOWuc/u3FEucLDOL75xGtBiefrcwgoC9NDSH/jkH6pAuXmBqPQ9HSUPVdZBH1GGOrMXAQdYxcKZfxAoK+KKBKFLosoEoX+u4giUehz8jlcnAuhp78I46yDYNAd+QLR6K+pr+yvxdBTHyVDubQh0UfSxaHSd0lbvNkVRE87JGOtc+PQd2QLQ6fHhJkKsSh6yg13tO08JPprsgrrXWH0dJd2vH1MLPprot4eXoujpzrdhngiD40ek2y92lggPcnWa8qN1Yz0BFuvZhRl0uOfR0v4Ewuli/Bg4Qr3lArqGdndQ3UPO1EunXYwnelMZzrTmc50pjOd6UxnOtOZznSmM53pTGf6kuj6oedFKV0s3fX6sX1S3bsi6a4PD7+/YAqYeBw6pIB/4qEgOqxdSPbGiim4NRRCbzs3Jj0L4UfXtQXQVRfn5IdA/Bw7RZzurEV6EtdsLeGXkIPuA+K1UoVeA0l62zmN/LqfSSft9KkepmoRuvi3nd5uKNFB9zbbXEANqdr941XO0NJx2v2jdJenpf+/3bvn0ts16ph+sd6hX7dPo2+2cZzE02Ia43bzDHqr+2Evnhz74ZHU30ffbKOeng1/NPV30Ns1gYQnSP2P6e65Pfxc6h02XZqXQCjhJ6kPL6bFo4NrGvAU4UII4SE2P1vQuZkuOxckVfehisF1MjUddN/MZBN+kvq5uf0O/xa66gyNS9ktMWlz44rO1Z8C19i5FPdHzPamXn+F3hryPfxMr78+4F+kq22kO6Rf6fUQt+puuustyWv4rbG3l/duztFB96GYoe1cTBdXMr+nw9qVM6ZfxOvzezff0nXi/ZOndvrR6Zvpm0c3h6nhdb+5iS7tsIim/qXZD9+97/Jf+rpZ5BET1ayv0GUzLhEuhBBjIy/RdVPgndutIRt9nt7p5cKFEEJ3Z+jQFDZL+XnMDXxHB73gxn5s9Kc3d3/pFciFkN/QTSXHJpX5l66gDrkQoP6hL3xsPw39la4qOiV8tH78XeSbue6N9mvWa6J/ybpc1CT1Wnh5Qq9meP8IOKH3ddH7E/ri1iYux/SXDrXR4UiPdck/wUpU+FtPf6/orja6O9KL3l56LOvVxe5Ib2qjN0d6Vbex4ghWlU3bPqI90If66MNng680FNpbJijH6kCvaF3uMzQ3+IrpFerV4Y9dffQdN3im10ivbuImhD3Qq5u4HdZkua8znelMZ/pS4z9CPVKkxowNxgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wMy0yN1QxNTo0NToxNSswMDowMN1xSg4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDMtMjdUMTU6NDU6MTUrMDA6MDCsLPKyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg==";
var kn = /*#__PURE__*/function () {
  function kn(e) {
    _classCallCheck(this, kn);
    this.className = e;
  }
  return _createClass(kn, [{
    key: "tryHide",
    value: function tryHide(e) {
      var t;
      (t = e.getElementsByClassName(this.className)[0].style).visibility || (t.visibility = "hidden");
    }
  }, {
    key: "tryReveal",
    value: function tryReveal(e) {
      e.getElementsByClassName(this.className)[0].style.visibility = "";
    }
  }, {
    key: "trySoftRem",
    value: function trySoftRem(e) {
      e.getElementsByClassName(this.className)[0].classList.add("role-hidden");
    }
  }]);
}();
var Re = /*#__PURE__*/function (_kn) {
  function Re(e) {
    var _this3;
    _classCallCheck(this, Re);
    _this3 = _callSuper(this, Re, ["avatar-container"]), _this3._avatars = e;
    return _this3;
  }
  _inherits(Re, _kn);
  return _createClass(Re, [{
    key: "addBesideMsg",
    value: function addBesideMsg(e, t) {
      var i = typeof this._avatars == "boolean" ? void 0 : this._avatars,
        s = this.createAvatar(t, i),
        r = this.getPosition(t, i);
      s.classList.add(r === "left" ? "left-item-position" : "right-item-position"), e.insertAdjacentElement(r === "left" ? "beforebegin" : "afterend", s);
    }
  }, {
    key: "createAvatar",
    value: function createAvatar(e, t) {
      var r, o, a, l, c;
      var i = document.createElement("img");
      e === y.USER_ROLE ? (i.src = ((r = t == null ? void 0 : t.user) == null ? void 0 : r.src) || ((o = t == null ? void 0 : t["default"]) == null ? void 0 : o.src) || ts, i.onerror = Re.errorFallback.bind(this, ts)) : (i.src = ((a = t == null ? void 0 : t[e]) == null ? void 0 : a.src) || ((l = t == null ? void 0 : t.ai) == null ? void 0 : l.src) || ((c = t == null ? void 0 : t["default"]) == null ? void 0 : c.src) || Vs, i.onerror = Re.errorFallback.bind(this, Vs)), i.classList.add("avatar"), i.alt = "".concat(e, " avatar");
      var s = document.createElement("div");
      return s.classList.add(this.className), s.appendChild(i), t && Re.applyCustomStyles(s, i, t, e), s;
    }
  }, {
    key: "getPosition",
    value: function getPosition(e, t) {
      var s, r, o, a, l, c;
      var i = (r = (s = t == null ? void 0 : t[e]) == null ? void 0 : s.styles) == null ? void 0 : r.position;
      return e !== y.USER_ROLE && (i !== null && i !== void 0 ? i : i = (a = (o = t == null ? void 0 : t.ai) == null ? void 0 : o.styles) == null ? void 0 : a.position), i !== null && i !== void 0 ? i : i = (c = (l = t == null ? void 0 : t["default"]) == null ? void 0 : l.styles) == null ? void 0 : c.position, i !== null && i !== void 0 ? i : i = e === y.USER_ROLE ? "right" : "left", i;
    }
  }], [{
    key: "errorFallback",
    value: function errorFallback(e, t) {
      var i = t.target;
      i.onerror = null, i.src = e;
    }
  }, {
    key: "applyCustomStylesToElements",
    value: function applyCustomStylesToElements(e, t, i) {
      Object.assign(e.style, i.container), Object.assign(t.style, i.avatar);
    }
  }, {
    key: "applyCustomStyles",
    value: function applyCustomStyles(e, t, i, s) {
      var r, o, a, l;
      if ((r = i["default"]) != null && r.styles && Re.applyCustomStylesToElements(e, t, i["default"].styles), s === y.USER_ROLE) (o = i.user) != null && o.styles && Re.applyCustomStylesToElements(e, t, i.user.styles);else {
        (a = i.ai) != null && a.styles && Re.applyCustomStylesToElements(e, t, i.ai.styles);
        var c = (l = i[s]) == null ? void 0 : l.styles;
        c && Re.applyCustomStylesToElements(e, t, c);
      }
    }
  }]);
}(kn);
var zt = /*#__PURE__*/function (_kn2) {
  function zt(e) {
    var _this4;
    _classCallCheck(this, zt);
    _this4 = _callSuper(this, zt, ["name"]), _this4._names = e;
    return _this4;
  }
  _inherits(zt, _kn2);
  return _createClass(zt, [{
    key: "addBesideMsg",
    value: function addBesideMsg(e, t) {
      var i = typeof this._names == "boolean" ? {} : this._names,
        s = this.createName(t, i),
        r = zt.getPosition(t, i);
      s.classList.add(r === "left" ? "left-item-position" : "right-item-position"), e.insertAdjacentElement(r === "left" ? "beforebegin" : "afterend", s);
    }
  }, {
    key: "createName",
    value: function createName(e, t) {
      var i = document.createElement("div");
      return i.classList.add(this.className), i.textContent = zt.getNameText(e, t), zt.applyStyle(i, e, t), i;
    }
  }], [{
    key: "getPosition",
    value: function getPosition(e, t) {
      var s, r, o;
      var i = (s = t == null ? void 0 : t[e]) == null ? void 0 : s.position;
      return e !== y.USER_ROLE && (i !== null && i !== void 0 ? i : i = (r = t == null ? void 0 : t.ai) == null ? void 0 : r.position), i !== null && i !== void 0 ? i : i = (o = t == null ? void 0 : t["default"]) == null ? void 0 : o.position, i !== null && i !== void 0 ? i : i = e === y.USER_ROLE ? "right" : "left", i;
    }
  }, {
    key: "applyStyle",
    value: function applyStyle(e, t, i) {
      var s, r, o, a;
      Object.assign(e.style, (s = i["default"]) == null ? void 0 : s.style), t === y.USER_ROLE ? Object.assign(e.style, (r = i.user) == null ? void 0 : r.style) : (Object.assign(e.style, (o = i.ai) == null ? void 0 : o.style), Object.assign(e.style, (a = i[t]) == null ? void 0 : a.style));
    }
  }, {
    key: "getNameText",
    value: function getNameText(e, t) {
      var i, s, r, o, a, l;
      return e === y.USER_ROLE ? ((i = t.user) == null ? void 0 : i.text) || ((s = t["default"]) == null ? void 0 : s.text) || "User" : e === y.AI_ROLE ? ((r = t.ai) == null ? void 0 : r.text) || ((o = t["default"]) == null ? void 0 : o.text) || "AI" : ((a = t[e]) == null ? void 0 : a.text) || ((l = t["default"]) == null ? void 0 : l.text) || e;
    }
  }]);
}(kn);
var Z = /*#__PURE__*/function () {
  function Z(e) {
    var _this5 = this;
    _classCallCheck(this, Z);
    var t;
    this.messageElementRefs = [], this.htmlClassUtilities = {}, this.messageToElements = [], this.elementRef = Z.createContainerElement(), this.messageStyles = te.processMessageStyles(e.messageStyles), this._remarkable = ti.createNew(e.remarkable), e.avatars && (this.avatar = new Re(e.avatars)), e.names && (this.name = new zt(e.names)), this._onMessage = yi.onMessage.bind(this, e), e.htmlClassUtilities && (this.htmlClassUtilities = e.htmlClassUtilities), this.focusMode = e.focusMode, this.focusMode || (this._lastGroupMessagesElement = document.createElement("div")), typeof this.focusMode != "boolean" && (t = this.focusMode) != null && t.fade && Ei.setFade(this.elementRef, this.focusMode.fade), setTimeout(function () {
      _this5.submitUserMessage = e.submitUserMessage;
    });
  }
  return _createClass(Z, [{
    key: "addNewTextMessage",
    value: function addNewTextMessage(e, t, i) {
      var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
      if (i != null && i.status) {
        var o = this.overwriteText(t, e, this.messageElementRefs);
        if (o) return o;
        i.status = !1;
      }
      var r = s ? this.createAndPrependNewMessageElement(e, t, s) : this.createAndAppendNewMessageElement(e, t);
      return r.bubbleElement.classList.add(Z.TEXT_BUBBLE_CLASS), this.applyCustomStyles(r, t, !1), y.fillEmptyMessageElement(r.bubbleElement, e), r;
    }
    // prettier-ignore
  }, {
    key: "overwriteText",
    value: function overwriteText(e, t, i) {
      var s = y.overwriteMessage(this.messageToElements, i, t, e, "text", Z.TEXT_BUBBLE_CLASS);
      return s && this.renderText(s.bubbleElement, t), s;
    }
  }, {
    key: "createAndAppendNewMessageElement",
    value: function createAndAppendNewMessageElement(e, t) {
      return this.focusMode ? this.appendNewMessageElementFocusMode(e, t) : this.createAndAppendNewMessageElementDefault(e, t);
    }
  }, {
    key: "appendNewMessageElementFocusMode",
    value: function appendNewMessageElementFocusMode(e, t) {
      var _this6 = this;
      var s;
      var i = this.createNewMessageElement(e, t);
      if (this.appendOuterContainerElemet(i.outerContainer, t), t === "user") {
        var r = typeof this.focusMode != "boolean" && ((s = this.focusMode) == null ? void 0 : s.scroll);
        setTimeout(function () {
          return X.scrollToBottom(_this6.elementRef, r);
        });
      }
      return i;
    }
  }, {
    key: "createNewGroupElementFocusMode",
    value: function createNewGroupElementFocusMode() {
      var t;
      (t = this._lastGroupMessagesElement) == null || t.classList.remove(Z.LAST_GROUP_MESSAGES_ACTIVE);
      var e = document.createElement("div");
      this._lastGroupMessagesElement && e.classList.add(Z.LAST_GROUP_MESSAGES_ACTIVE), this._lastGroupMessagesElement = e;
    }
  }, {
    key: "createAndAppendNewMessageElementDefault",
    value: function createAndAppendNewMessageElementDefault(e, t) {
      var _this7 = this;
      var i = this.createNewMessageElement(e, t);
      return this.appendOuterContainerElemet(i.outerContainer), setTimeout(function () {
        return X.scrollToBottom(_this7.elementRef);
      }), i;
    }
  }, {
    key: "appendOuterContainerElemet",
    value: function appendOuterContainerElemet(e, t) {
      var i;
      this.focusMode && (t === "user" || !this._lastGroupMessagesElement) && this.createNewGroupElementFocusMode(), (i = this._lastGroupMessagesElement) == null || i.appendChild(e), this.elementRef.appendChild(this._lastGroupMessagesElement);
    }
  }, {
    key: "createAndPrependNewMessageElement",
    value: function createAndPrependNewMessageElement(e, t, i) {
      var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
      var o;
      var r = this.createNewMessageElement(e, t, i, s);
      if (i && (o = this.elementRef.firstChild) != null && o.classList.contains(Z.INTRO_CLASS)) {
        this.elementRef.firstChild.insertAdjacentElement("afterend", r.outerContainer);
        var a = this.messageElementRefs[0];
        this.messageElementRefs[0] = this.messageElementRefs[1], this.messageElementRefs[1] = a;
      } else this.elementRef.insertBefore(r.outerContainer, this.elementRef.firstChild);
      return r;
    }
  }, {
    key: "createMessageElementsOnOrientation",
    value: function createMessageElementsOnOrientation(e, t, i) {
      var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
      return i ? this.createAndPrependNewMessageElement(e, t, !0, s) : this.createNewMessageElement(e, t, s);
    }
  }, {
    key: "createNewMessageElement",
    value: function createNewMessageElement(e, t) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
      var o;
      s || (o = this._introPanel) == null || o.hide();
      var r = this.messageElementRefs[this.messageElementRefs.length - 1];
      return Be.changeFullViewToSmall(this), !i && Z.isTemporaryElement(r) && (this.revealRoleElementsIfTempRemoved(r, t), this.removeLastMessage()), this.createMessageElements(e, t, i);
    }
    // this can be tested by having an ai message, then a temp ai message with html that submits new user message:
    // https://github.com/OvidijusParsiunas/deep-chat/issues/258
    // prettier-ignore
  }, {
    key: "revealRoleElementsIfTempRemoved",
    value: function revealRoleElementsIfTempRemoved(e, t) {
      if ((this.avatar || this.name) && Se.isElementTemporary(e)) {
        var i = this.messageElementRefs[this.messageElementRefs.length - 2];
        i && this.messageToElements.length > 0 && !e.bubbleElement.classList.contains(y.getRoleClass(t)) && y.revealRoleElements(i.innerContainer, this.avatar, this.name);
      }
    }
  }, {
    key: "createElements",
    value: function createElements(e, t) {
      var i = Z.createBaseElements(t),
        s = i.outerContainer,
        r = i.innerContainer,
        o = i.bubbleElement;
      return s.appendChild(r), this.addInnerContainerElements(o, e, t), i;
    }
  }, {
    key: "createMessageElements",
    value: function createMessageElements(e, t) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      var s = this.createElements(e, t);
      return y.updateRefArr(this.messageElementRefs, s, i), y.classifyRoleMessages(this.messageElementRefs, t), s;
    }
  }, {
    key: "addInnerContainerElements",
    value:
    // prettier-ignore
    function addInnerContainerElements(e, t, i) {
      var s = this.messageElementRefs[this.messageElementRefs.length - 1];
      return y.areOuterContainerClassRolesSame(i, s) && !this.isLastMessageError() && y.hideRoleElements(s.innerContainer, this.avatar, this.name), e.classList.add("message-bubble", y.getRoleClass(i), i === y.USER_ROLE ? "user-message-text" : "ai-message-text"), this.renderText(e, t), y.addRoleElements(e, i, this.avatar, this.name), {
        bubbleElement: e
      };
    }
    // prettier-ignore
  }, {
    key: "applyCustomStyles",
    value: function applyCustomStyles(e, t, i, s) {
      e && this.messageStyles && W.applyCustomStyles(this.messageStyles, e, t, i, s);
    }
  }, {
    key: "removeMessage",
    value: function removeMessage(e) {
      e.outerContainer.remove();
      var t = this.messageElementRefs.findIndex(function (i) {
        return i === e;
      });
      this.messageElementRefs.splice(t, 1);
    }
  }, {
    key: "removeLastMessage",
    value: function removeLastMessage() {
      this.messageElementRefs[this.messageElementRefs.length - 1].outerContainer.remove(), this.messageElementRefs.pop();
    }
  }, {
    key: "isLastMessageError",
    value: function isLastMessageError() {
      var e;
      return (e = y.getLastMessageBubbleElement(this.elementRef)) == null ? void 0 : e.classList.contains(y.ERROR_MESSAGE_TEXT_CLASS);
    }
  }, {
    key: "sendClientUpdate",
    value: function sendClientUpdate(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      var i;
      (i = this._onMessage) == null || i.call(this, e, t);
    }
  }, {
    key: "renderText",
    value: function renderText(e, t) {
      e.innerHTML = this._remarkable.render(t), e.innerText.trim().length === 0 && (e.innerText = t);
    }
    // this is mostly used for enabling highlight.js to highlight code if it downloads later
  }, {
    key: "refreshTextMessages",
    value: function refreshTextMessages(e) {
      var _this8 = this;
      this._remarkable = ti.createNew(e), this.messageToElements.forEach(function (t) {
        t[1].text && t[0].text && _this8.renderText(t[1].text.bubbleElement, t[0].text);
      });
    }
  }], [{
    key: "createContainerElement",
    value: function createContainerElement() {
      var e = document.createElement("div");
      return e.id = "messages", e;
    }
  }, {
    key: "isTemporaryElement",
    value: function isTemporaryElement(e) {
      return Z.isLoadingMessage(e) || Se.isElementTemporary(e);
    }
  }, {
    key: "createBaseElements",
    value: function createBaseElements(e) {
      var t = document.createElement("div"),
        i = document.createElement("div");
      i.classList.add("inner-message-container"), t.appendChild(i), t.classList.add("outer-message-container"), t.classList.add(y.buildRoleOuterContainerClass(e));
      var s = document.createElement("div");
      return s.classList.add("message-bubble"), i.appendChild(s), {
        outerContainer: t,
        innerContainer: i,
        bubbleElement: s
      };
    }
  }, {
    key: "createMessageContent",
    value: function createMessageContent(e) {
      var t = e.text,
        i = e.files,
        s = e.html,
        r = e.custom,
        o = e._sessionId,
        a = e.role,
        l = {
          role: a || y.AI_ROLE
        };
      return t && (l.text = t), i && (l.files = i), s && (l.html = s), !t && !i && !s && (l.text = ""), r && (l.custom = r), o && (l._sessionId = o), l;
    }
  }, {
    key: "isLoadingMessage",
    value: function isLoadingMessage(e) {
      return e == null ? void 0 : e.bubbleElement.classList.contains(Ne.BUBBLE_CLASS);
    }
  }]);
}();
Z.TEXT_BUBBLE_CLASS = "text-message", Z.INTRO_CLASS = "deep-chat-intro", Z.LAST_GROUP_MESSAGES_ACTIVE = "deep-chat-last-group-messages-active";
var he = Z;
var _ = /*#__PURE__*/function () {
  function _() {
    _classCallCheck(this, _);
  }
  return _createClass(_, null, [{
    key: "getLastElementsByClass",
    value: function getLastElementsByClass(e, t, i) {
      var _loop = function _loop() {
          var r = e[s];
          if (r.bubbleElement.classList.contains(t[0]) && !t.slice(1).find(function (a) {
            return !r.bubbleElement.classList.contains(a);
          })) if (i) {
            if (!i.find(function (l) {
              return r.bubbleElement.classList.contains(l);
            })) return {
              v: r
            };
          } else return {
            v: r
          };
        },
        _ret;
      for (var s = e.length - 1; s >= 0; s -= 1) {
        _ret = _loop();
        if (_ret) return _ret.v;
      }
    }
  }, {
    key: "getLastMessage",
    value: function getLastMessage(e, t, i) {
      for (var s = e.length - 1; s >= 0; s -= 1) if (e[s][0].role === t) if (i) {
        if (e[s][0][i]) return e[s][0];
      } else return e[s][0];
    }
  }, {
    key: "getLastTextToElement",
    value: function getLastTextToElement(e, t) {
      for (var i = e.length - 1; i >= 0; i -= 1) if (e[i][0] === t) return e[i];
    }
    // IMPORTANT: If the overwrite message does not contain a role property it will look for the last 'ai' role message
    // and if messages have custom roles, it will still look to update the last 'ai' role message
    // prettier-ignore
  }, {
    key: "overwriteMessage",
    value: function overwriteMessage(e, t, i, s, r, o) {
      var a = _.getLastElementsByClass(t, [_.getRoleClass(s), o], [Ne.BUBBLE_CLASS]),
        l = _.getLastMessage(e, s, r);
      return l && (l[r] = i), a;
    }
  }, {
    key: "getRoleClass",
    value: function getRoleClass(e) {
      return "".concat(e, "-message");
    }
    // makes sure the bubble has dimensions when there is no text
  }, {
    key: "fillEmptyMessageElement",
    value: function fillEmptyMessageElement(e, t) {
      t.trim().length === 0 && (e.classList.add(_.EMPTY_MESSAGE_CLASS), e.innerHTML = '<div style="color:#00000000">.</div>');
    }
  }, {
    key: "unfillEmptyMessageElement",
    value: function unfillEmptyMessageElement(e, t) {
      e.classList.contains(_.EMPTY_MESSAGE_CLASS) && t.trim().length > 0 && e.replaceChildren();
    }
  }, {
    key: "getLastMessageBubbleElement",
    value: function getLastMessageBubbleElement(e) {
      var t, i, s, r;
      return (r = Array.from(((s = (i = (t = _.getLastMessageElement(e)) == null ? void 0 : t.children) == null ? void 0 : i[0]) == null ? void 0 : s.children) || []).map(function (o) {
        return Array.from((o == null ? void 0 : o.children) || []).find(function (a) {
          return a.classList.contains("message-bubble");
        });
      })) == null ? void 0 : r[0];
    }
  }, {
    key: "getLastMessageElement",
    value: function getLastMessageElement(e) {
      return e.children[e.children.length - 1];
    }
  }, {
    key: "addRoleElements",
    value: function addRoleElements(e, t, i, s) {
      i == null || i.addBesideMsg(e, t), s == null || s.addBesideMsg(e, t);
    }
  }, {
    key: "hideRoleElements",
    value: function hideRoleElements(e, t, i) {
      t == null || t.tryHide(e), i == null || i.tryHide(e);
    }
  }, {
    key: "revealRoleElements",
    value: function revealRoleElements(e, t, i) {
      t == null || t.tryReveal(e), i == null || i.tryReveal(e);
    }
  }, {
    key: "softRemRoleElements",
    value: function softRemRoleElements(e, t, i) {
      t == null || t.trySoftRem(e), i == null || i.trySoftRem(e);
    }
  }, {
    key: "updateRefArr",
    value: function updateRefArr(e, t, i) {
      i ? e.unshift(t) : e.push(t);
    }
  }, {
    key: "buildRoleOuterContainerClass",
    value: function buildRoleOuterContainerClass(e) {
      return "".concat(_.OUTER_CONTAINER_CLASS_ROLE_PREFIX).concat(e);
    }
  }, {
    key: "addNewPositionClasses",
    value: function addNewPositionClasses(e, t) {
      var _e$outerContainer$cla;
      e.outerContainer.classList.remove(_.POSITION_TOP_MESSAGE_CLASS, _.POSITION_MIDDLE_MESSAGE_CLASS, _.POSITION_BOTTOM_MESSAGE_CLASS), (_e$outerContainer$cla = e.outerContainer.classList).add.apply(_e$outerContainer$cla, _toConsumableArray(t));
    }
  }, {
    key: "getNumberOfElements",
    value: function getNumberOfElements(e) {
      var t = 0;
      return e.text !== void 0 && (t += 1), e.html !== void 0 && (t += 1), e.files && (t += e.files.length), t;
    }
  }, {
    key: "filterdMessageElements",
    value: function filterdMessageElements(e, t) {
      return e.filter(function (i) {
        return i.bubbleElement.classList.contains(t);
      });
    }
  }, {
    key: "findMessageElements",
    value: function findMessageElements(e, t) {
      return e.find(function (i) {
        return i.bubbleElement.classList.contains(t);
      });
    }
  }, {
    key: "generateMessageBodyElements",
    value: function generateMessageBodyElements(e, t) {
      var i = {};
      return e.text && (i.text = _.findMessageElements(t, he.TEXT_BUBBLE_CLASS)), e.html && (i.html = _.findMessageElements(t, _e.HTML_BUBBLE_CLASS)), e.files && (i.files = _.filterdMessageElements(t, H.FILE_BUBBLE_CLASS)), i;
    }
  }, {
    key: "generateMessageBody",
    value: function generateMessageBody(e, t) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      var s = _.getNumberOfElements(e),
        r = i ? t.slice(0, s) : t.slice(t.length - s);
      return _.generateMessageBodyElements(e, r);
    }
    // if role not present - traverse all, if present - traverse last messages
  }, {
    key: "classifyRoleMessages",
    value: function classifyRoleMessages(e, t) {
      var i = t ? _.buildRoleOuterContainerClass(t) : void 0;
      for (var s = e.length - 1; s >= 0; s -= 1) {
        if (t || (i = Array.from(e[s].outerContainer.classList).find(function (u) {
          return u.startsWith(_.OUTER_CONTAINER_CLASS_ROLE_PREFIX);
        })), !i) continue;
        var r = e[s],
          o = r.outerContainer.classList.contains(i),
          a = e[s - 1],
          l = e[s + 1],
          c = a == null ? void 0 : a.outerContainer.classList.contains(i),
          d = l == null ? void 0 : l.outerContainer.classList.contains(i);
        if (o) !c && d ? _.addNewPositionClasses(r, [_.POSITION_TOP_MESSAGE_CLASS]) : c && d ? _.addNewPositionClasses(r, [_.POSITION_MIDDLE_MESSAGE_CLASS]) : c && !d ? _.addNewPositionClasses(r, [_.POSITION_BOTTOM_MESSAGE_CLASS]) : !c && !d && _.addNewPositionClasses(r, [_.POSITION_TOP_MESSAGE_CLASS, _.POSITION_BOTTOM_MESSAGE_CLASS]);else if (t) break;
      }
    }
  }, {
    key: "areOuterContainerClassRolesSame",
    value: function areOuterContainerClassRolesSame(e, t) {
      return t ? Array.from(t.outerContainer.classList).find(function (s) {
        return s.startsWith(_.OUTER_CONTAINER_CLASS_ROLE_PREFIX);
      }) === _.buildRoleOuterContainerClass(e) : !1;
    }
  }, {
    key: "resetAllRoleElements",
    value: function resetAllRoleElements(e, t, i) {
      if (!t && !i) return;
      var s = "";
      e.forEach(function (r, o) {
        r.bubbleElement.classList.contains(_.ERROR_MESSAGE_TEXT_CLASS) || _.revealRoleElements(r.innerContainer, t, i);
        var a = Array.from(r.outerContainer.classList).find(function (l) {
          return l.startsWith(_.OUTER_CONTAINER_CLASS_ROLE_PREFIX);
        });
        s === a && _.hideRoleElements(e[o - 1].innerContainer, t, i), s = a;
      });
    }
  }]);
}();
_.AI_ROLE = "ai", _.USER_ROLE = "user", _.ERROR_MESSAGE_TEXT_CLASS = "error-message-text", _.OUTER_CONTAINER_CLASS_ROLE_PREFIX = "deep-chat-outer-container-role-", _.EMPTY_MESSAGE_CLASS = "empty-message", _.POSITION_TOP_MESSAGE_CLASS = "deep-chat-top-message", _.POSITION_MIDDLE_MESSAGE_CLASS = "deep-chat-middle-message", _.POSITION_BOTTOM_MESSAGE_CLASS = "deep-chat-bottom-message";
var y = _;
var ft = /*#__PURE__*/function () {
  function ft(e) {
    _classCallCheck(this, ft);
    this._fileAdded = !1, this._streamType = "", this._hasStreamEnded = !1, this._messages = e;
  }
  return _createClass(ft, [{
    key: "upsertStreamedMessage",
    value: function upsertStreamedMessage(e) {
      var r;
      if (this._hasStreamEnded) return;
      if ((e == null ? void 0 : e.text) === void 0 && (e == null ? void 0 : e.html) === void 0) return console.error(k.INVALID_STREAM_EVENT);
      e != null && e.custom && this._message && (this._message.custom = e.custom);
      var t = (e == null ? void 0 : e.text) || (e == null ? void 0 : e.html) || "",
        i = X.isScrollbarAtBottomOfElement(this._messages.elementRef),
        s = (e == null ? void 0 : e.text) !== void 0 ? "text" : "html";
      if (!this._elements && !this._message) this.setInitialState(s, t, e == null ? void 0 : e.role);else {
        if (this._streamType !== s) return console.error(k.INVALID_STREAM_EVENT_MIX);
        this.updateBasedOnType(t, s, (r = this._elements) == null ? void 0 : r.bubbleElement, e == null ? void 0 : e.overwrite);
      }
      i && X.scrollToBottom(this._messages.elementRef);
    }
  }, {
    key: "setInitialState",
    value: function setInitialState(e, t, i) {
      this._streamType = e, i !== null && i !== void 0 ? i : i = y.AI_ROLE, this._elements = e === "text" ? this._messages.addNewTextMessage(t, i) : _e.add(this._messages, t, i), this._elements && (this._elements.bubbleElement.classList.add(ft.MESSAGE_CLASS), this._activeMessageRole = i, this._message = _defineProperty({
        role: this._activeMessageRole
      }, e, t), this._messages.messageToElements.push([this._message, _defineProperty({}, e, this._elements)]));
    }
  }, {
    key: "updateBasedOnType",
    value: function updateBasedOnType(e, t, i) {
      var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
      y.unfillEmptyMessageElement(i, e), (t === "text" ? this.updateText : this.updateHTML).bind(this)(e, i, s);
    }
  }, {
    key: "updateText",
    value: function updateText(e, t, i) {
      this._message && (this._message.text = i ? e : this._message.text + e, this._messages.renderText(t, this._message.text));
    }
  }, {
    key: "updateHTML",
    value: function updateHTML(e, t, i) {
      if (this._message) if (i) this._message.html = e, t.innerHTML = e;else {
        var s = document.createElement("span");
        s.innerHTML = e, t.appendChild(s), this._message.html = (t == null ? void 0 : t.innerHTML) || "";
      }
    }
  }, {
    key: "finaliseStreamedMessage",
    value: function finaliseStreamedMessage() {
      var e;
      if (!(this._endStreamAfterOperation || !this._message) && !(this._fileAdded && !this._elements)) {
        if (!this._elements) throw Error(k.NO_VALID_STREAM_EVENTS_SENT);
        (e = this._elements.bubbleElement) != null && e.classList.contains(ft.MESSAGE_CLASS) && (this._streamType === "text" ? this._messages.textToSpeech && gt.speak(this._message.text || "", this._messages.textToSpeech) : this._streamType === "html" && this._elements && J.apply(this._messages, this._elements.outerContainer), this._elements.bubbleElement.classList.remove(ft.MESSAGE_CLASS), this._message && this._messages.sendClientUpdate(he.createMessageContent(this._message), !1), this._hasStreamEnded = !0);
      }
    }
  }, {
    key: "markFileAdded",
    value: function markFileAdded() {
      this._fileAdded = !0;
    }
  }, {
    key: "newMessage",
    value: function newMessage() {
      this.finaliseStreamedMessage(), this._elements = void 0, delete this._message, this._fileAdded = !1, this._hasStreamEnded = !1, this._activeMessageRole = void 0;
    }
    // prettier-ignore
  }, {
    key: "endStreamAfterFileDownloaded",
    value: function () {
      var _endStreamAfterFileDownloaded = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e, t) {
        var r, _yield$t, i, s;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              this._endStreamAfterOperation = !0;
              _context2.next = 3;
              return t();
            case 3:
              _yield$t = _context2.sent;
              i = _yield$t.text;
              s = _yield$t.files;
              i && this.updateBasedOnType(i, "text", (r = this._elements) == null ? void 0 : r.bubbleElement, !0), this._endStreamAfterOperation = !1, this.finaliseStreamedMessage(), s && e.addNewMessage({
                files: s
              });
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function endStreamAfterFileDownloaded(_x3, _x4) {
        return _endStreamAfterFileDownloaded.apply(this, arguments);
      }
      return endStreamAfterFileDownloaded;
    }()
  }]);
}();
ft.MESSAGE_CLASS = "streamed-message";
var we = ft;
var qe = /*#__PURE__*/function () {
  function qe() {
    _classCallCheck(this, qe);
  }
  return _createClass(qe, null, [{
    key: "tempRemoveContentHeader",
    value: // need to pass stringifyBody boolean separately as binding is throwing an error for some reason
    // prettier-ignore
    function () {
      var _tempRemoveContentHeader = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e, t, i) {
        var s, r;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (e != null && e.headers) {
                _context3.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              s = e.headers[qe.CONTENT_TYPE];
              delete e.headers[qe.CONTENT_TYPE];
              _context3.prev = 4;
              _context3.next = 7;
              return t(i);
            case 7:
              r = _context3.sent;
              _context3.next = 13;
              break;
            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](4);
              throw e.headers[qe.CONTENT_TYPE] = s, _context3.t0;
            case 13:
              return _context3.abrupt("return", (e.headers[qe.CONTENT_TYPE] = s, r));
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[4, 10]]);
      }));
      function tempRemoveContentHeader(_x9, _x10, _x11) {
        return _tempRemoveContentHeader.apply(this, arguments);
      }
      return tempRemoveContentHeader;
    }()
  }, {
    key: "displayError",
    value: function displayError(e, t) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Service error, please try again.";
      if (console.error(t), _typeof(t) == "object") return t instanceof Error ? e.addNewErrorMessage("service", t.message) : Array.isArray(t) || typeof t.error == "string" ? e.addNewErrorMessage("service", t) : Object.keys(t).length === 0 ? e.addNewErrorMessage("service", i) : e.addNewErrorMessage("service", JSON.stringify(t));
      e.addNewErrorMessage("service", t);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x5, _x6, _x7, _x8) {
        return _fetch.apply(this, arguments);
      }
      fetch.toString = function () {
        return _fetch.toString();
      };
      return fetch;
    }(function (e, t, i, s) {
      var o, a;
      var r = {
        method: ((o = e.connectSettings) == null ? void 0 : o.method) || "POST",
        headers: t
      };
      return r.method !== "GET" && (r.body = i ? JSON.stringify(s) : s), e.connectSettings.credentials && (r.credentials = e.connectSettings.credentials), fetch(((a = e.connectSettings) == null ? void 0 : a.url) || e.url || "", r);
    })
  }, {
    key: "processResponseByType",
    value: function processResponseByType(e) {
      var t = e.headers.get("content-type");
      return t != null && t.includes("application/json") ? e.json() : t != null && t.includes("text/plain") || !t ? e : e.blob();
    }
  }, {
    key: "processRequestInterceptor",
    value: function () {
      var _processRequestInterceptor = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e, t) {
        var o, i, s, r;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (o = e.requestInterceptor) == null ? void 0 : o.call(e, t);
            case 2:
              _context4.t0 = _context4.sent;
              if (_context4.t0) {
                _context4.next = 5;
                break;
              }
              _context4.t0 = t;
            case 5:
              i = _context4.t0;
              s = i;
              r = i;
              return _context4.abrupt("return", {
                body: s.body,
                headers: s.headers,
                error: r.error
              });
            case 9:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function processRequestInterceptor(_x12, _x13) {
        return _processRequestInterceptor.apply(this, arguments);
      }
      return processRequestInterceptor;
    }()
  }, {
    key: "validateResponseFormat",
    value: function validateResponseFormat(e, t) {
      if (!e) return !1;
      var i = Array.isArray(e) ? e : [e];
      return t && i.length > 1 ? (console.error(k.INVALID_STREAM_ARRAY_RESPONSE), !1) : !i.find(function (r) {
        return _typeof(r) != "object" || !(typeof r.error == "string" || typeof r.text == "string" || typeof r.html == "string" || Array.isArray(r.files));
      });
    }
  }, {
    key: "onInterceptorError",
    value: function onInterceptorError(e, t, i) {
      e.addNewErrorMessage("service", t), i == null || i();
    }
    // prettier-ignore
  }, {
    key: "basicResponseProcessing",
    value: function () {
      var _basicResponseProcessing = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(e, t) {
        var i,
          s,
          _i$displayError,
          r,
          _i$useRI,
          o,
          a,
          l,
          c,
          d,
          _args5 = arguments;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              i = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {};
              s = i.io, _i$displayError = i.displayError, r = _i$displayError === void 0 ? !0 : _i$displayError, _i$useRI = i.useRI, o = _i$useRI === void 0 ? !0 : _i$useRI;
              if (s != null && s.extractResultData) {
                _context5.next = 4;
                break;
              }
              return _context5.abrupt("return", t);
            case 4:
              a = o ? s.deepChat.responseInterceptor : void 0;
              _context5.next = 7;
              return a == null ? void 0 : a(t);
            case 7:
              _context5.t0 = _context5.sent;
              if (_context5.t0) {
                _context5.next = 10;
                break;
              }
              _context5.t0 = t;
            case 10:
              l = _context5.t0;
              _context5.next = 13;
              return s.extractResultData(l);
            case 13:
              c = _context5.sent;
              if (!(!c || _typeof(c) != "object" && !Array.isArray(c))) {
                _context5.next = 17;
                break;
              }
              if (r) {
                d = k.INVALID_RESPONSE(t, "response", !!a, l);
                qe.displayError(e, d);
              }
              return _context5.abrupt("return");
            case 17:
              return _context5.abrupt("return", c);
            case 18:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function basicResponseProcessing(_x14, _x15) {
        return _basicResponseProcessing.apply(this, arguments);
      }
      return basicResponseProcessing;
    }()
  }]);
}();
qe.CONTENT_TYPE = "Content-Type";
var E = qe;
function Mo(_x16, _x17) {
  return _Mo.apply(this, arguments);
}
function _Mo() {
  _Mo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee138(n, e) {
    var t, i;
    return _regeneratorRuntime().wrap(function _callee138$(_context138) {
      while (1) switch (_context138.prev = _context138.next) {
        case 0:
          t = n.getReader();
        case 1:
          _context138.next = 3;
          return t.read();
        case 3:
          if ((i = _context138.sent).done) {
            _context138.next = 7;
            break;
          }
          e(i.value);
        case 5:
          _context138.next = 1;
          break;
        case 7:
        case "end":
          return _context138.stop();
      }
    }, _callee138);
  }));
  return _Mo.apply(this, arguments);
}
function ko(n) {
  var e,
    t,
    i,
    s = !1;
  return function (o) {
    e === void 0 ? (e = o, t = 0, i = -1) : e = Io(e, o);
    var a = e.length;
    var l = 0;
    for (; t < a;) {
      s && (e[t] === 10 && (l = ++t), s = !1);
      var c = -1;
      for (; t < a && c === -1; ++t) switch (e[t]) {
        case 58:
          i === -1 && (i = t - l);
          break;
        case 13:
          s = !0;
        case 10:
          c = t;
          break;
      }
      if (c === -1) break;
      n(e.subarray(l, c), i), l = t, i = -1;
    }
    l === a ? e = void 0 : l !== 0 && (e = e.subarray(l), t -= l);
  };
}
function Lo(n, e, t) {
  var i = Ks();
  var s = new TextDecoder();
  return function (o, a) {
    if (o.length === 0) t == null || t(i), i = Ks();else if (a > 0) {
      var l = s.decode(o.subarray(0, a)),
        c = a + (o[a + 1] === 32 ? 2 : 1),
        d = s.decode(o.subarray(c));
      switch (l) {
        case "data":
          i.data = i.data ? i.data + "\n" + d : d;
          break;
        case "event":
          i.event = d;
          break;
        case "id":
          n(i.id = d);
          break;
        case "retry":
          var u = parseInt(d, 10);
          isNaN(u) || e(i.retry = u);
          break;
      }
    }
  };
}
function Io(n, e) {
  var t = new Uint8Array(n.length + e.length);
  return t.set(n), t.set(e, n.length), t;
}
function Ks() {
  return {
    data: "",
    event: "",
    id: "",
    retry: void 0
  };
}
var Oo = function Oo(n, e) {
  var t = {};
  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var s = 0, i = Object.getOwnPropertySymbols(n); s < i.length; s++) e.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[s]) && (t[i[s]] = n[i[s]]);
  return t;
};
var is = "text/event-stream",
  Po = 1e3,
  $s = "last-event-id";
function No(n, e) {
  var t = e.signal,
    i = e.headers,
    s = e.onopen,
    r = e.onmessage,
    o = e.onclose,
    a = e.onerror,
    l = e.openWhenHidden,
    c = e.fetch,
    d = Oo(e, ["signal", "headers", "onopen", "onmessage", "onclose", "onerror", "openWhenHidden", "fetch"]);
  return new Promise(function (u, h) {
    var f = Object.assign({}, i);
    f.accept || (f.accept = is);
    var m;
    function p() {
      m.abort(), document.hidden || ae();
    }
    l || document.addEventListener("visibilitychange", p);
    var g = Po,
      b = 0;
    function M() {
      document.removeEventListener("visibilitychange", p), window.clearTimeout(b), m.abort();
    }
    t == null || t.addEventListener("abort", function () {
      M(), u();
    });
    var Y = c !== null && c !== void 0 ? c : window.fetch,
      je = s !== null && s !== void 0 ? s : Do;
    function ae() {
      return _ae.apply(this, arguments);
    }
    function _ae() {
      _ae = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var Ce, ye, ie;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              m = new AbortController();
              _context6.prev = 1;
              _context6.next = 4;
              return Y(n, Object.assign(Object.assign({}, d), {
                headers: f,
                signal: m.signal
              }));
            case 4:
              ye = _context6.sent;
              _context6.next = 7;
              return je(ye);
            case 7:
              _context6.next = 9;
              return Mo(ye.body, ko(Lo(function (ie) {
                ie ? f[$s] = ie : delete f[$s];
              }, function (ie) {
                g = ie;
              }, r)));
            case 9:
              o == null || o();
              M();
              u();
              _context6.next = 17;
              break;
            case 14:
              _context6.prev = 14;
              _context6.t0 = _context6["catch"](1);
              if (!m.signal.aborted) try {
                ie = (Ce = a == null ? void 0 : a(_context6.t0)) !== null && Ce !== void 0 ? Ce : g;
                window.clearTimeout(b), b = window.setTimeout(ae, ie);
              } catch (ie) {
                M(), h(ie);
              }
            case 17:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[1, 14]]);
      }));
      return _ae.apply(this, arguments);
    }
    ae();
  });
}
function Do(n) {
  var e = n.headers.get("content-type");
  if (!(e != null && e.startsWith(is))) throw new Error("Expected content-type to be ".concat(is, ", Actual: ").concat(e));
}
var A = /*#__PURE__*/function () {
  function A() {
    _classCallCheck(this, A);
  }
  return _createClass(A, null, [{
    key: "request",
    value: // prettier-ignore
    function () {
      var _request = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(e, t, i) {
        var s,
          r,
          f,
          m,
          p,
          g,
          b,
          o,
          _yield$E$processReque,
          a,
          l,
          c,
          d,
          u,
          h,
          _args7 = arguments;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              s = _args7.length > 3 && _args7[3] !== undefined ? _args7[3] : !0;
              r = _args7.length > 4 && _args7[4] !== undefined ? _args7[4] : !1;
              o = {
                body: t,
                headers: (f = e.connectSettings) == null ? void 0 : f.headers
              };
              _context7.next = 5;
              return E.processRequestInterceptor(e.deepChat, o);
            case 5:
              _yield$E$processReque = _context7.sent;
              a = _yield$E$processReque.body;
              l = _yield$E$processReque.headers;
              c = _yield$E$processReque.error;
              if (!c) {
                _context7.next = 11;
                break;
              }
              return _context7.abrupt("return", E.onInterceptorError(i, c, e.streamHandlers.onClose));
            case 11:
              if (!((m = e.connectSettings) != null && m.handler)) {
                _context7.next = 13;
                break;
              }
              return _context7.abrupt("return", be.stream(e, a, i));
            case 13:
              if (!(((p = e.connectSettings) == null ? void 0 : p.url) === ve.URL)) {
                _context7.next = 15;
                break;
              }
              return _context7.abrupt("return", ve.requestStream(i, e));
            case 15:
              d = new we(i), u = E.fetch.bind(this, e, l, s), h = {
                method: ((g = e.connectSettings) == null ? void 0 : g.method) || "POST",
                headers: l,
                credentials: (b = e.connectSettings) == null ? void 0 : b.credentials,
                body: s ? JSON.stringify(a) : a
              };
              return _context7.abrupt("return", (_typeof(e.stream) == "object" && e.stream.readable ? A.handleReadableStream(e, i, d, h, r, u, a) : A.handleEventStream(e, i, d, h, r, u, a), d));
            case 17:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function request(_x18, _x19, _x20) {
        return _request.apply(this, arguments);
      }
      return request;
    }() // prettier-ignore
  }, {
    key: "handleReadableStream",
    value: function handleReadableStream(e, t, i, s, r, o, a) {
      var h;
      var _e$streamHandlers = e.streamHandlers,
        l = _e$streamHandlers.onOpen,
        c = _e$streamHandlers.onClose,
        d = _e$streamHandlers.abortStream;
      var u = !1;
      fetch(((h = e.connectSettings) == null ? void 0 : h.url) || e.url || "", s).then(/*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(f) {
          var b, M, m, p, g, _yield$m$read, Y, je, ae, Ce, ye;
          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                if (f.body) {
                  _context8.next = 2;
                  break;
                }
                throw new Error(k.READABLE_STREAM_CONNECTION_ERROR);
              case 2:
                m = f.body.getReader(), p = new TextDecoder();
                l();
                g = !1;
              case 5:
                if (!(!g && !u)) {
                  _context8.next = 26;
                  break;
                }
                _context8.next = 8;
                return m.read();
              case 8:
                _yield$m$read = _context8.sent;
                Y = _yield$m$read.value;
                je = _yield$m$read.done;
                if (!(g = je, g)) {
                  _context8.next = 15;
                  break;
                }
                A.handleClose(e, i, c, r);
                _context8.next = 24;
                break;
              case 15:
                ae = p.decode(Y, {
                  stream: !0
                });
                _context8.next = 18;
                return (M = (b = e.deepChat).responseInterceptor) == null ? void 0 : M.call(b, ae);
              case 18:
                _context8.t0 = _context8.sent;
                if (_context8.t0) {
                  _context8.next = 21;
                  break;
                }
                _context8.t0 = ae;
              case 21:
                Ce = _context8.t0;
                ye = _typeof(Ce) == "object" ? Ce : {
                  text: ae
                };
                A.handleMessage(e, t, i, c, ye, o, a);
              case 24:
                _context8.next = 5;
                break;
              case 26:
              case "end":
                return _context8.stop();
            }
          }, _callee8);
        }));
        return function (_x21) {
          return _ref3.apply(this, arguments);
        };
      }())["catch"](function (f) {
        A.handleError(e, t, f);
      }), d.abort = function () {
        u = !0;
      };
    }
    // prettier-ignore
  }, {
    key: "handleEventStream",
    value: function handleEventStream(e, t, i, s, r, o, a) {
      var u;
      var _e$streamHandlers2 = e.streamHandlers,
        l = _e$streamHandlers2.onOpen,
        c = _e$streamHandlers2.onClose,
        d = _e$streamHandlers2.abortStream;
      No(((u = e.connectSettings) == null ? void 0 : u.url) || e.url || "", _objectSpread(_objectSpread({}, s), {}, {
        openWhenHidden: !0,
        // keep stream open when browser tab not open
        onopen: function onopen(h) {
          return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  if (!h.ok) {
                    _context9.next = 2;
                    break;
                  }
                  return _context9.abrupt("return", l());
                case 2:
                  _context9.next = 4;
                  return E.processResponseByType(h);
                case 4:
                  throw _context9.sent;
                case 5:
                case "end":
                  return _context9.stop();
              }
            }, _callee9);
          }))();
        },
        onmessage: function onmessage(h) {
          return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            var f, m, p, g;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  if (!(JSON.stringify(h.data) !== JSON.stringify("[DONE]"))) {
                    _context10.next = 9;
                    break;
                  }
                  try {
                    p = JSON.parse(h.data);
                  } catch (_unused6) {
                    p = {};
                  }
                  _context10.next = 4;
                  return (m = (f = e.deepChat).responseInterceptor) == null ? void 0 : m.call(f, p);
                case 4:
                  _context10.t0 = _context10.sent;
                  if (_context10.t0) {
                    _context10.next = 7;
                    break;
                  }
                  _context10.t0 = p;
                case 7:
                  g = _context10.t0;
                  A.handleMessage(e, t, i, c, g, o, a);
                case 9:
                case "end":
                  return _context10.stop();
              }
            }, _callee10);
          }))();
        },
        onerror: function onerror(h) {
          throw c(), h;
        },
        onclose: function onclose() {
          A.handleClose(e, i, c, r);
        },
        signal: d.signal
      }))["catch"](function (h) {
        A.handleError(e, t, h);
      });
    }
    //prettier-ignore
  }, {
    key: "handleMessage",
    value: function handleMessage(e, t, i, s, r, o, a) {
      var l;
      (l = e.extractResultData) == null || l.call(e, r, o, a).then(function (c) {
        e.asyncCallInProgress && c && c.text !== "" ? (A.simulate(t, e.streamHandlers, c), s(), e.asyncCallInProgress = !1) : A.upsertWFiles(t, i.upsertStreamedMessage.bind(i), i, c);
      })["catch"](function (c) {
        return E.displayError(t, c);
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "handleError",
    value: function handleError(e, t, i) {
      var s;
      t.isLastMessageError() || (s = e.extractResultData) == null || s.call(e, i).then(function () {
        E.displayError(t, i);
      })["catch"](function (r) {
        E.displayError(t, r);
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose(e, t, i, s) {
      if (!e.asyncCallInProgress) try {
        t.finaliseStreamedMessage(), i();
      } catch (r) {
        if (!s) throw r;
      }
    }
    // io is only passed for demo to simulate a real stream
  }, {
    key: "simulate",
    value: function () {
      var _simulate = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(e, t, i, s) {
        var r, o, _o2, _o3;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              r = t;
              _context11.next = 3;
              return E.basicResponseProcessing(e, i, {
                io: s,
                useRI: !1
              });
            case 3:
              if (_context11.sent) {
                _context11.next = 5;
                break;
              }
              return _context11.abrupt("return", t.onClose());
            case 5:
              if (!(Array.isArray(i) && (i = i[0]), i.files)) {
                _context11.next = 10;
                break;
              }
              _context11.next = 8;
              return E.basicResponseProcessing(e, {
                files: i.files
              }, {
                io: s
              });
            case 8:
              o = _context11.sent;
              e.addNewMessage(_objectSpread({
                sendUpdate: !1,
                ignoreText: !0
              }, o), !1);
            case 10:
              if (i.text) {
                t.onOpen();
                _o2 = i.text.split("");
                A.populateMessages(e, _o2, new we(e), r, "text", 0, s);
              }
              if (i.html) {
                t.onOpen();
                _o3 = J.splitHTML(i.html);
                _o3.length === 0 && (_o3 = i.html.split("")), A.populateMessages(e, _o3, new we(e), r, "html", 0, s);
              }
              i.error && (E.displayError(e, i.error), t.onClose());
            case 13:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      function simulate(_x22, _x23, _x24, _x25) {
        return _simulate.apply(this, arguments);
      }
      return simulate;
    }() // prettier-ignore
    // io is only passed for demo to simulate a real stream
  }, {
    key: "populateMessages",
    value: function () {
      var _populateMessages = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(e, t, i, s, r, o, a) {
        var l, c, d;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              l = t[o];
              if (!l) {
                _context12.next = 10;
                break;
              }
              _context12.next = 4;
              return E.basicResponseProcessing(e, _defineProperty({}, r, l), {
                io: a
              });
            case 4:
              c = _context12.sent;
              A.upsertWFiles(e, i.upsertStreamedMessage.bind(i), i, c);
              d = setTimeout(function () {
                A.populateMessages(e, t, i, s, r, o + 1, a);
              }, s.simulationInterim || 6);
              s.abortStream.abort = function () {
                A.abort(d, i, s.onClose);
              };
              _context12.next = 11;
              break;
            case 10:
              i.finaliseStreamedMessage(), s.onClose();
            case 11:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }));
      function populateMessages(_x26, _x27, _x28, _x29, _x30, _x31, _x32) {
        return _populateMessages.apply(this, arguments);
      }
      return populateMessages;
    }()
  }, {
    key: "isSimulation",
    value: function isSimulation(e) {
      return _typeof(e) == "object" && !!e.simulation;
    }
  }, {
    key: "isSimulatable",
    value: function isSimulatable(e, t) {
      return A.isSimulation(e) && t && (t.text || t.html);
    }
  }, {
    key: "abort",
    value: function abort(e, t, i) {
      clearTimeout(e), t.finaliseStreamedMessage(), i();
    }
  }, {
    key: "upsertWFiles",
    value: function upsertWFiles(e, t, i, s) {
      if (s && Array.isArray(s) && (s = s[0]), s != null && s.text || s != null && s.html) {
        var r = t(s);
        i !== null && i !== void 0 ? i : i = r || void 0;
      }
      s != null && s.files && (e.addNewMessage({
        files: s.files
      }), i == null || i.markFileAdded());
    }
  }]);
}();
var Ye = /*#__PURE__*/function () {
  function Ye() {
    _classCallCheck(this, Ye);
  }
  return _createClass(Ye, null, [{
    key: "generateResponse",
    value: function generateResponse(e) {
      var t = e[e.length - 1][0];
      if (t.files && t.files.length > 0) {
        if (t.files.length > 1) return "These are interesting files!";
        var i = t.files[0];
        return i.src && i.src.startsWith("data:image/gif") ? "That is a nice gif!" : i.type === "image" ? "That is a nice image!" : i.type === "audio" ? "I like the sound of that!" : "That is an interesting file!";
      }
      if (t.text) {
        if (t.text.charAt(t.text.length - 1) === "?") return "I'm sorry but I can't answer that question...";
        if (t.text.includes("updog")) return "What's updog?";
      }
      return "Hi there! This is a demo response!";
    }
  }, {
    key: "getCustomResponse",
    value: function getCustomResponse(e, t) {
      return typeof e == "function" ? e(t) : e;
    }
  }, {
    key: "getResponse",
    value: function getResponse(_ref4) {
      var e = _ref4.customDemoResponse,
        t = _ref4.messageToElements;
      return e ? Ye.getCustomResponse(e, t[t.length - 1][0]) : {
        text: Ye.generateResponse(t)
      };
    }
    // timeout is used to simulate a timeout for a response to come back
  }, {
    key: "request",
    value: function request(e, t) {
      var i = Ye.getResponse(t);
      setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        var s, r, o;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return E.basicResponseProcessing(t, i, {
                io: e
              });
            case 2:
              s = _context13.sent;
              if (s) {
                _context13.next = 5;
                break;
              }
              return _context13.abrupt("return", e.completionsHandlers.onFinish());
            case 5:
              r = Array.isArray(s) ? s : [s], o = r.find(function (a) {
                return typeof a.error == "string";
              });
              o ? (t.addNewErrorMessage("service", o.error), e.completionsHandlers.onFinish()) : A.isSimulatable(e.stream, s) ? A.simulate(t, e.streamHandlers, s) : (r.forEach(function (a) {
                return t.addNewMessage(a);
              }), e.completionsHandlers.onFinish());
            case 7:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      })), 400);
    }
    // timeout is used to simulate a timeout for a response to come back
  }, {
    key: "requestStream",
    value: function requestStream(e, t) {
      setTimeout(function () {
        var i = Ye.getResponse(e);
        A.simulate(e, t.streamHandlers, i, t);
      }, 400);
    }
  }]);
}();
Ye.URL = "deep-chat-demo";
var ve = Ye;
var q = /*#__PURE__*/function () {
  function q() {
    _classCallCheck(this, q);
  }
  return _createClass(q, null, [{
    key: "setup",
    value: function setup(e) {
      e.permittedErrorPrefixes = ["Connection error", "Error in server message"], e.websocket = "pending";
    }
  }, {
    key: "isElementPresentInDOM",
    value: function isElementPresentInDOM(e) {
      return e.getRootNode({
        composed: !0
      }) instanceof Document;
    }
  }, {
    key: "createConnection",
    value: function createConnection(e, t) {
      if (!q.isElementPresentInDOM(e.deepChat)) return;
      var i = e.connectSettings.websocket;
      if (i) {
        if (e.connectSettings.handler) return be.websocket(e, t);
        try {
          var s = typeof i != "boolean" ? i : void 0,
            r = new WebSocket(e.connectSettings.url || "", s);
          e.websocket = r, e.websocket.onopen = function () {
            var o, a;
            t.removeError(), e.websocket && _typeof(e.websocket) == "object" && q.assignListeners(e, r, t), (a = (o = e.deepChat)._validationHandler) == null || a.call(o);
          }, e.websocket.onerror = function (o) {
            console.error(o), q.retryConnection(e, t);
          };
        } catch (s) {
          console.error(s), q.retryConnection(e, t);
        }
      }
    }
  }, {
    key: "retryConnection",
    value: function retryConnection(e, t) {
      var i, s;
      (s = (i = e.deepChat)._validationHandler) == null || s.call(i), q.isElementPresentInDOM(e.deepChat) && (e.websocket = "pending", t.isLastMessageError() || t.addNewErrorMessage("service", "Connection error"), setTimeout(function () {
        q.createConnection(e, t);
      }, 5e3));
    }
  }, {
    key: "assignListeners",
    value: function assignListeners(e, t, i) {
      var _this9 = this;
      var s = {};
      t.onmessage = /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(r) {
          var o, a, l, c, _l, _c;
          return _regeneratorRuntime().wrap(function _callee14$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
              case 0:
                if (!e.extractResultData) {
                  _context14.next = 22;
                  break;
                }
                _context14.prev = 1;
                o = JSON.parse(r.data);
                _context14.next = 5;
                return E.basicResponseProcessing(i, o, {
                  io: e,
                  displayError: !1
                });
              case 5:
                a = _context14.sent;
                if (a) {
                  _context14.next = 8;
                  break;
                }
                throw Error(k.INVALID_RESPONSE(o, "server", !!e.deepChat.responseInterceptor, a));
              case 8:
                if (!A.isSimulation(e.stream)) {
                  _context14.next = 13;
                  break;
                }
                l = q.stream.bind(_this9, e, i, s), c = s[o.role || y.AI_ROLE];
                A.upsertWFiles(i, l, c, a);
                _context14.next = 17;
                break;
              case 13:
                _l = Array.isArray(a) ? a : [a], _c = _l.find(function (d) {
                  return typeof d.error == "string";
                });
                if (!_c) {
                  _context14.next = 16;
                  break;
                }
                throw _c.error;
              case 16:
                _l.forEach(function (d) {
                  return i.addNewMessage(d);
                });
              case 17:
                _context14.next = 22;
                break;
              case 19:
                _context14.prev = 19;
                _context14.t0 = _context14["catch"](1);
                E.displayError(i, _context14.t0, "Error in server message");
              case 22:
              case "end":
                return _context14.stop();
            }
          }, _callee14, null, [[1, 19]]);
        }));
        return function (_x33) {
          return _ref6.apply(this, arguments);
        };
      }(), t.onclose = function () {
        console.error("Connection closed"), i.isLastMessageError() || i.addNewErrorMessage("service", "Connection error"), e.stream && e.streamHandlers.abortStream.abort(), q.createConnection(e, i);
      };
    }
  }, {
    key: "sendWebsocket",
    value: function () {
      var _sendWebsocket = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(e, t, i) {
        var s,
          d,
          u,
          r,
          o,
          _yield$E$processReque2,
          a,
          l,
          c,
          _args15 = arguments;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              s = _args15.length > 3 && _args15[3] !== undefined ? _args15[3] : !0;
              if (!(((d = e.connectSettings) == null ? void 0 : d.url) === ve.URL)) {
                _context15.next = 3;
                break;
              }
              return _context15.abrupt("return", ve.request(e, i));
            case 3:
              r = e.websocket;
              if (!(!r || r === "pending")) {
                _context15.next = 6;
                break;
              }
              return _context15.abrupt("return");
            case 6:
              o = {
                body: t,
                headers: (u = e.connectSettings) == null ? void 0 : u.headers
              };
              _context15.next = 9;
              return E.processRequestInterceptor(e.deepChat, o);
            case 9:
              _yield$E$processReque2 = _context15.sent;
              a = _yield$E$processReque2.body;
              l = _yield$E$processReque2.error;
              if (!l) {
                _context15.next = 14;
                break;
              }
              return _context15.abrupt("return", i.addNewErrorMessage("service", l));
            case 14:
              if (q.isWebSocket(r)) {
                _context15.next = 16;
                break;
              }
              return _context15.abrupt("return", r.newUserMessage.listener(a));
            case 16:
              c = s ? JSON.stringify(a) : a;
              r.readyState === void 0 || r.readyState !== r.OPEN ? (console.error("Connection is not open"), i.isLastMessageError() || i.addNewErrorMessage("service", "Connection error")) : (r.send(JSON.stringify(c)), e.completionsHandlers.onFinish());
            case 18:
            case "end":
              return _context15.stop();
          }
        }, _callee15);
      }));
      function sendWebsocket(_x34, _x35, _x36) {
        return _sendWebsocket.apply(this, arguments);
      }
      return sendWebsocket;
    }()
  }, {
    key: "canSendMessage",
    value: function canSendMessage(e) {
      return e ? e === "pending" ? !1 : q.isWebSocket(e) ? e.readyState !== void 0 && e.readyState === e.OPEN : e.isOpen : !0;
    }
    // if false then it is the internal websocket handler
  }, {
    key: "isWebSocket",
    value: function isWebSocket(e) {
      return e.send !== void 0;
    }
  }, {
    key: "stream",
    value: function stream(e, t, i, s) {
      if (!s) return;
      var r = e.stream.simulation;
      if (typeof r == "string") {
        var _i$o;
        var o = s.role || y.AI_ROLE,
          a = i[o];
        s.text === r || s.html === r ? (a == null || a.finaliseStreamedMessage(), delete i[o]) : ((_i$o = i[o]) !== null && _i$o !== void 0 ? _i$o : i[o] = new we(t), i[o].upsertStreamedMessage(s));
      } else A.simulate(t, e.streamHandlers, s);
    }
  }]);
}();
var be = /*#__PURE__*/function () {
  function be() {
    _classCallCheck(this, be);
  }
  return _createClass(be, null, [{
    key: "request",
    value: function () {
      var _request2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(e, t, i) {
        var a, l, s, r, o;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              s = !0;
              r = /*#__PURE__*/function () {
                var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(c) {
                  var d, u, h;
                  return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                    while (1) switch (_context16.prev = _context16.next) {
                      case 0:
                        if (s) {
                          _context16.next = 2;
                          break;
                        }
                        return _context16.abrupt("return");
                      case 2:
                        s = !1;
                        _context16.next = 5;
                        return E.basicResponseProcessing(i, c, {
                          io: e,
                          displayError: !1
                        });
                      case 5:
                        d = _context16.sent;
                        if (!d) console.error(k.INVALID_RESPONSE(c, "server", !!e.deepChat.responseInterceptor, d)), i.addNewErrorMessage("service", "Error in server message"), e.completionsHandlers.onFinish();else {
                          u = Array.isArray(d) ? d : [d], h = u.find(function (f) {
                            return typeof f.error == "string";
                          });
                          h ? (console.error(h.error), i.addNewErrorMessage("service", h.error), e.completionsHandlers.onFinish()) : A.isSimulatable(e.stream, d) ? A.simulate(i, e.streamHandlers, d) : (u.forEach(function (f) {
                            return i.addNewMessage(f);
                          }), e.completionsHandlers.onFinish());
                        }
                      case 7:
                      case "end":
                        return _context16.stop();
                    }
                  }, _callee16);
                }));
                return function r(_x40) {
                  return _ref7.apply(this, arguments);
                };
              }(), o = be.generateOptionalSignals();
              (l = (a = e.connectSettings).handler) == null || l.call(a, t, _objectSpread(_objectSpread({}, o), {}, {
                onResponse: r
              }));
            case 3:
            case "end":
              return _context17.stop();
          }
        }, _callee17);
      }));
      function request(_x37, _x38, _x39) {
        return _request2.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "attemptToFinaliseStream",
    value: function attemptToFinaliseStream(e, t) {
      try {
        var i = t.messageElementRefs[t.messageElementRefs.length - 1];
        he.isLoadingMessage(i) ? t.removeLastMessage() : e.finaliseStreamedMessage();
      } catch (i) {
        console.error(i), t.addNewErrorMessage("service", i);
      }
    }
    // prettier-ignore
  }, {
    key: "stream",
    value: function stream(e, t, i) {
      var u, h;
      var s = !0,
        r = !1;
      var o = new we(i),
        a = function a() {
          r || !s || (e.streamHandlers.onOpen(), r = !0);
        },
        l = function l() {
          s && (be.attemptToFinaliseStream(o, i), e.streamHandlers.onClose(), s = !1);
        },
        c = /*#__PURE__*/function () {
          var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(f) {
            var m, p;
            return _regeneratorRuntime().wrap(function _callee18$(_context18) {
              while (1) switch (_context18.prev = _context18.next) {
                case 0:
                  if (s) {
                    _context18.next = 2;
                    break;
                  }
                  return _context18.abrupt("return");
                case 2:
                  _context18.next = 4;
                  return E.basicResponseProcessing(i, f, {
                    io: e,
                    displayError: !1
                  });
                case 4:
                  m = _context18.sent;
                  if (m) m.error ? (be.streamError(m.error, o, e, i), s = !1) : A.upsertWFiles(i, o.upsertStreamedMessage.bind(o), o, m);else {
                    p = k.INVALID_RESPONSE(f, "server", !!e.deepChat.responseInterceptor, m);
                    be.streamError(p, o, e, i), s = !1;
                  }
                case 6:
                case "end":
                  return _context18.stop();
              }
            }, _callee18);
          }));
          return function c(_x41) {
            return _ref8.apply(this, arguments);
          };
        }();
      e.streamHandlers.abortStream.abort = function () {
        be.attemptToFinaliseStream(o, i), e.streamHandlers.onClose(), s = !1;
      };
      var d = be.generateOptionalSignals();
      (h = (u = e.connectSettings).handler) == null || h.call(u, t, _objectSpread(_objectSpread({}, d), {}, {
        onOpen: a,
        onResponse: c,
        onClose: l,
        stopClicked: e.streamHandlers.stopClicked
      }));
    }
  }, {
    key: "streamError",
    value: function streamError(e, t, i, s) {
      console.error(e), t.finaliseStreamedMessage(), s.addNewErrorMessage("service", e), i.streamHandlers.onClose();
    }
    // prettier-ignore
  }, {
    key: "websocket",
    value: function websocket(e, t) {
      var _this10 = this;
      var l, c;
      var i = {
        isOpen: !1,
        newUserMessage: {
          listener: function listener() {}
        },
        roleToStream: {}
      };
      e.websocket = i;
      var s = function s() {
          t.removeError(), i.isOpen = !0;
        },
        r = function r() {
          i.isOpen = !1;
        },
        o = /*#__PURE__*/function () {
          var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(d) {
            var u, h, f, m, p, g;
            return _regeneratorRuntime().wrap(function _callee19$(_context19) {
              while (1) switch (_context19.prev = _context19.next) {
                case 0:
                  if (i.isOpen) {
                    _context19.next = 2;
                    break;
                  }
                  return _context19.abrupt("return");
                case 2:
                  _context19.next = 4;
                  return E.basicResponseProcessing(t, d, {
                    io: e,
                    displayError: !1
                  });
                case 4:
                  u = _context19.sent;
                  if (!u) console.error(k.INVALID_RESPONSE(d, "server", !!e.deepChat.responseInterceptor, u)), t.addNewErrorMessage("service", "Error in server message");else {
                    h = Array.isArray(u) ? u : [u], f = h.find(function (m) {
                      return typeof m.error == "string";
                    });
                    if (f) console.error(f.error), t.isLastMessageError() || t.addNewErrorMessage("service", f.error);else if (A.isSimulation(e.stream)) {
                      m = u, p = q.stream.bind(_this10, e, t, i.roleToStream), g = i.roleToStream[m.role || y.AI_ROLE];
                      A.upsertWFiles(t, p, g, m);
                    } else h.forEach(function (m) {
                      return t.addNewMessage(m);
                    });
                  }
                case 6:
                case "end":
                  return _context19.stop();
              }
            }, _callee19);
          }));
          return function o(_x42) {
            return _ref9.apply(this, arguments);
          };
        }(),
        a = be.generateOptionalSignals();
      (c = (l = e.connectSettings).handler) == null || c.call(l, void 0, _objectSpread(_objectSpread({}, a), {}, {
        onOpen: s,
        onResponse: o,
        onClose: r,
        newUserMessage: i.newUserMessage
      }));
    }
  }, {
    key: "generateOptionalSignals",
    value: function generateOptionalSignals() {
      return {
        onClose: function onClose() {},
        onOpen: function onOpen() {},
        stopClicked: {
          listener: function listener() {}
        },
        newUserMessage: {
          listener: function listener() {}
        }
      };
    }
  }]);
}();
var R = /*#__PURE__*/function () {
  function R() {
    _classCallCheck(this, R);
  }
  return _createClass(R, null, [{
    key: "request",
    value: // prettier-ignore
    function () {
      var _request3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(e, t, i) {
        var s,
          h,
          f,
          m,
          r,
          _yield$E$processReque3,
          o,
          a,
          l,
          c,
          d,
          u,
          _args21 = arguments;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              s = _args21.length > 3 && _args21[3] !== undefined ? _args21[3] : !0;
              r = {
                body: t,
                headers: (h = e.connectSettings) == null ? void 0 : h.headers
              };
              _context21.next = 4;
              return E.processRequestInterceptor(e.deepChat, r);
            case 4:
              _yield$E$processReque3 = _context21.sent;
              o = _yield$E$processReque3.body;
              a = _yield$E$processReque3.headers;
              l = _yield$E$processReque3.error;
              c = e.completionsHandlers.onFinish;
              if (!l) {
                _context21.next = 11;
                break;
              }
              return _context21.abrupt("return", E.onInterceptorError(i, l, c));
            case 11:
              if (!((f = e.connectSettings) != null && f.handler)) {
                _context21.next = 13;
                break;
              }
              return _context21.abrupt("return", be.request(e, o, i));
            case 13:
              if (!(((m = e.connectSettings) == null ? void 0 : m.url) === ve.URL)) {
                _context21.next = 15;
                break;
              }
              return _context21.abrupt("return", ve.request(e, i));
            case 15:
              d = !0;
              u = E.fetch.bind(this, e, a, s);
              u(o).then(function (p) {
                return d = !!p.ok, p;
              }).then(function (p) {
                return E.processResponseByType(p);
              }).then(/*#__PURE__*/function () {
                var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(p) {
                  var M, Y, g, b;
                  return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                    while (1) switch (_context20.prev = _context20.next) {
                      case 0:
                        if (e.extractResultData) {
                          _context20.next = 2;
                          break;
                        }
                        return _context20.abrupt("return");
                      case 2:
                        _context20.next = 4;
                        return (Y = (M = e.deepChat).responseInterceptor) == null ? void 0 : Y.call(M, p);
                      case 4:
                        _context20.t0 = _context20.sent;
                        if (_context20.t0) {
                          _context20.next = 7;
                          break;
                        }
                        _context20.t0 = p;
                      case 7:
                        g = _context20.t0;
                        _context20.next = 10;
                        return e.extractResultData(g, u, o);
                      case 10:
                        b = _context20.sent;
                        if (d) {
                          _context20.next = 13;
                          break;
                        }
                        throw p;
                      case 13:
                        if (!(!b || _typeof(b) != "object" && !Array.isArray(b))) {
                          _context20.next = 15;
                          break;
                        }
                        throw Error(k.INVALID_RESPONSE(p, "response", !!e.deepChat.responseInterceptor, g));
                      case 15:
                        b.makingAnotherRequest || (A.isSimulatable(e.stream, b) ? A.simulate(i, e.streamHandlers, b) : ((Array.isArray(b) ? b : [b]).forEach(function (ae) {
                          return i.addNewMessage(ae);
                        }), c()));
                      case 16:
                      case "end":
                        return _context20.stop();
                    }
                  }, _callee20);
                }));
                return function (_x46) {
                  return _ref10.apply(this, arguments);
                };
              }())["catch"](function (p) {
                E.displayError(i, p), c();
              });
            case 18:
            case "end":
              return _context21.stop();
          }
        }, _callee21, this);
      }));
      function request(_x43, _x44, _x45) {
        return _request3.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "executePollRequest",
    value: function executePollRequest(e, t, i, s) {
      var r = e.completionsHandlers.onFinish;
      fetch(t, i).then(function (o) {
        return o.json();
      }).then(/*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(o) {
          var l, c, a;
          return _regeneratorRuntime().wrap(function _callee22$(_context22) {
            while (1) switch (_context22.prev = _context22.next) {
              case 0:
                if (e.extractPollResultData) {
                  _context22.next = 2;
                  break;
                }
                return _context22.abrupt("return");
              case 2:
                _context22.t0 = e;
                _context22.next = 5;
                return (c = (l = e.deepChat).responseInterceptor) == null ? void 0 : c.call(l, o);
              case 5:
                _context22.t1 = _context22.sent;
                if (_context22.t1) {
                  _context22.next = 8;
                  break;
                }
                _context22.t1 = o;
              case 8:
                _context22.t2 = _context22.t1;
                _context22.next = 11;
                return _context22.t0.extractPollResultData.call(_context22.t0, _context22.t2);
              case 11:
                a = _context22.sent;
                a.timeoutMS ? setTimeout(function () {
                  R.executePollRequest(e, t, i, s);
                }, a.timeoutMS) : A.isSimulatable(e.stream, a) ? A.simulate(s, e.streamHandlers, a) : (s.addNewMessage(a), r());
              case 13:
              case "end":
                return _context22.stop();
            }
          }, _callee22);
        }));
        return function (_x47) {
          return _ref11.apply(this, arguments);
        };
      }())["catch"](function (o) {
        E.displayError(s, o), r();
      });
    }
    // prettier-ignore
  }, {
    key: "poll",
    value: function () {
      var _poll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(e, t, i) {
        var s,
          f,
          m,
          p,
          r,
          _yield$E$processReque4,
          o,
          a,
          l,
          c,
          d,
          u,
          h,
          _args23 = arguments;
        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) switch (_context23.prev = _context23.next) {
            case 0:
              s = _args23.length > 3 && _args23[3] !== undefined ? _args23[3] : !0;
              r = {
                body: t,
                headers: (f = e.connectSettings) == null ? void 0 : f.headers
              };
              _context23.next = 4;
              return E.processRequestInterceptor(e.deepChat, r);
            case 4:
              _yield$E$processReque4 = _context23.sent;
              o = _yield$E$processReque4.body;
              a = _yield$E$processReque4.headers;
              l = _yield$E$processReque4.error;
              if (!l) {
                _context23.next = 10;
                break;
              }
              return _context23.abrupt("return", E.onInterceptorError(i, l));
            case 10:
              c = ((m = e.connectSettings) == null ? void 0 : m.url) || e.url || "", d = ((p = e.connectSettings) == null ? void 0 : p.method) || "POST", u = s ? JSON.stringify(o) : o, h = {
                method: d,
                body: u,
                headers: a
              };
              e.connectSettings.credentials && (h.credentials = e.connectSettings.credentials), R.executePollRequest(e, c, h, i);
            case 12:
            case "end":
              return _context23.stop();
          }
        }, _callee23);
      }));
      function poll(_x48, _x49, _x50) {
        return _poll.apply(this, arguments);
      }
      return poll;
    }() // prettier-ignore
  }, {
    key: "verifyKey",
    value: function verifyKey(e, t, i, s, r, o, a, l, c) {
      if (e === "") return o(k.INVALID_KEY);
      a(), fetch(t, {
        method: s,
        headers: i,
        body: c || null
      }).then(function (d) {
        return E.processResponseByType(d);
      }).then(function (d) {
        l(d, e, r, o);
      })["catch"](function (d) {
        o(k.CONNECTION_FAILED), console.error(d);
      });
    }
  }]);
}();
var He = /*#__PURE__*/function () {
  function He(e, t, i) {
    _classCallCheck(this, He);
    this._isLoading = !1, this._isPaginationComplete = !1, this._index = 0, this._messages = t, i.fetchHistory && this.fetchHistory(i.fetchHistory), e.loadHistory && this.setupLoadHistoryOnScroll(e.loadHistory), this.setupInitialHistory(e);
  }
  return _createClass(He, [{
    key: "fetchHistory",
    value: function () {
      var _fetchHistory = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(e) {
        var _this11 = this;
        var t, i;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              t = Be.addMessage(this._messages);
              _context24.next = 3;
              return e();
            case 3:
              i = _context24.sent;
              this._messages.removeMessage(t), He.displayIntroMessages(this._messages.messageElementRefs), i.forEach(function (s) {
                return _this11._messages.addAnyMessage(s, !0);
              }), setTimeout(function () {
                return X.scrollToBottom(_this11._messages.elementRef);
              }, 0);
            case 5:
            case "end":
              return _context24.stop();
          }
        }, _callee24, this);
      }));
      function fetchHistory(_x51) {
        return _fetchHistory.apply(this, arguments);
      }
      return fetchHistory;
    }()
  }, {
    key: "processLoadedHistory",
    value: function processLoadedHistory(e) {
      var _this12 = this;
      var a;
      var _this$_messages = this._messages,
        t = _this$_messages.messageElementRefs,
        i = _this$_messages.messageToElements,
        s = _this$_messages.elementRef,
        r = (a = t.find(function (l) {
          return !l.outerContainer.classList.contains(he.INTRO_CLASS);
        })) == null ? void 0 : a.outerContainer,
        o = s.scrollTop;
      e == null || e.reverse().map(function (l) {
        var c = _this12._messages.addAnyMessage(_objectSpread(_objectSpread({}, l), {}, {
          sendUpdate: !0
        }), !0, !0);
        if (c) {
          var d = y.generateMessageBody(c, t, !0);
          i.unshift([c, d]);
        }
        return c;
      }).filter(function (l) {
        return !!l;
      }).reverse().forEach(function (l) {
        return _this12._messages.sendClientUpdate(l, !0);
      }), r && (s.scrollTop = o + r.offsetTop - 40);
    }
  }, {
    key: "populateMessages",
    value: function populateMessages(e, t) {
      this._messages.removeMessage(e), this._isPaginationComplete = t.findIndex(function (a) {
        return !a;
      }) < 0;
      var i = t.filter(function (a) {
        return !!a;
      });
      this.processLoadedHistory(i);
      var _this$_messages2 = this._messages,
        s = _this$_messages2.messageElementRefs,
        r = _this$_messages2.avatar,
        o = _this$_messages2.name;
      y.resetAllRoleElements(s, r, o);
    }
  }, {
    key: "setupLoadHistoryOnScroll",
    value: function () {
      var _setupLoadHistoryOnScroll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(e) {
        var _this13 = this;
        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
          while (1) switch (_context26.prev = _context26.next) {
            case 0:
              this._messages.elementRef.onscroll = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
                var t, i;
                return _regeneratorRuntime().wrap(function _callee25$(_context25) {
                  while (1) switch (_context25.prev = _context25.next) {
                    case 0:
                      if (!(!_this13._isLoading && !_this13._isPaginationComplete && _this13._messages.elementRef.scrollTop === 0)) {
                        _context25.next = 13;
                        break;
                      }
                      _this13._isLoading = !0;
                      t = Be.addMessage(_this13._messages, !1);
                      _context25.prev = 3;
                      _context25.next = 6;
                      return e(_this13._index++);
                    case 6:
                      i = _context25.sent;
                      _this13.populateMessages(t, i), _this13._isLoading = !1;
                      _context25.next = 13;
                      break;
                    case 10:
                      _context25.prev = 10;
                      _context25.t0 = _context25["catch"](3);
                      _this13._messages.removeMessage(t), _this13._isPaginationComplete = !0, _this13._messages.addNewErrorMessage("service", He.FAILED_ERROR_MESSAGE, !0), console.error(_context25.t0);
                    case 13:
                    case "end":
                      return _context25.stop();
                  }
                }, _callee25, null, [[3, 10]]);
              }));
            case 1:
            case "end":
              return _context26.stop();
          }
        }, _callee26, this);
      }));
      function setupLoadHistoryOnScroll(_x52) {
        return _setupLoadHistoryOnScroll.apply(this, arguments);
      }
      return setupLoadHistoryOnScroll;
    }()
  }, {
    key: "populateInitialHistory",
    value: function populateInitialHistory(e) {
      var _this14 = this;
      e.forEach(function (t) {
        te.processHistoryFile(t), _this14._messages.addAnyMessage(t, !0);
      });
    }
  }, {
    key: "loadInitialHistory",
    value: function () {
      var _loadInitialHistory = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(e) {
        var _this15 = this;
        var t, i, s;
        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) switch (_context27.prev = _context27.next) {
            case 0:
              this._isLoading = !0;
              t = Be.addMessage(this._messages);
              _context27.prev = 2;
              _context27.next = 5;
              return e(this._index++);
            case 5:
              i = _context27.sent;
              s = this._messages.elementRef.scrollTop;
              this.populateMessages(t, i), s === 0 && setTimeout(function () {
                return X.scrollToBottom(_this15._messages.elementRef);
              }, 0);
              _context27.next = 13;
              break;
            case 10:
              _context27.prev = 10;
              _context27.t0 = _context27["catch"](2);
              this._messages.removeMessage(t), this._isPaginationComplete = !0, this._messages.addNewErrorMessage("service", He.FAILED_ERROR_MESSAGE, !0), console.error(_context27.t0);
            case 13:
              He.displayIntroMessages(this._messages.messageElementRefs), this._isLoading = !1;
            case 14:
            case "end":
              return _context27.stop();
          }
        }, _callee27, this, [[2, 10]]);
      }));
      function loadInitialHistory(_x53) {
        return _loadInitialHistory.apply(this, arguments);
      }
      return loadInitialHistory;
    }()
  }, {
    key: "setupInitialHistory",
    value: function () {
      var _setupInitialHistory = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28(e) {
        var t;
        return _regeneratorRuntime().wrap(function _callee28$(_context28) {
          while (1) switch (_context28.prev = _context28.next) {
            case 0:
              e.loadHistory && this.loadInitialHistory(e.loadHistory);
              t = e.history || te.processHistory(e);
              t && (this.populateInitialHistory(t), this._index += 1);
            case 3:
            case "end":
              return _context28.stop();
          }
        }, _callee28, this);
      }));
      function setupInitialHistory(_x54) {
        return _setupInitialHistory.apply(this, arguments);
      }
      return setupInitialHistory;
    }()
  }], [{
    key: "addErrorPrefix",
    value: function addErrorPrefix(e) {
      var _e$permittedErrorPref;
      (_e$permittedErrorPref = e.permittedErrorPrefixes) !== null && _e$permittedErrorPref !== void 0 ? _e$permittedErrorPref : e.permittedErrorPrefixes = [], e.permittedErrorPrefixes.push(He.FAILED_ERROR_MESSAGE);
    }
  }, {
    key: "displayIntroMessages",
    value: function displayIntroMessages(e) {
      for (var t = 0; t < e.length; t += 1) {
        var i = e[0];
        if (i.outerContainer.classList.contains(he.INTRO_CLASS)) i.outerContainer.style.display = "";else break;
      }
    }
  }]);
}();
He.FAILED_ERROR_MESSAGE = "Failed to load history";
var ii = He;
var vt = /*#__PURE__*/function () {
  function vt() {
    _classCallCheck(this, vt);
  }
  return _createClass(vt, null, [{
    key: "getCharacterLimitMessages",
    value: function getCharacterLimitMessages(e, t) {
      var r;
      if (t === -1) return e;
      var i = 0,
        s = e.length - 1;
      for (s; s >= 0; s -= 1) {
        var o = (r = e[s]) == null ? void 0 : r.text;
        if (o !== void 0 && (i += o.length, i > t)) {
          e[s].text = o.substring(0, o.length - (i - t));
          break;
        }
      }
      return e.slice(Math.max(s, 0));
    }
  }, {
    key: "getMaxMessages",
    value: function getMaxMessages(e, t) {
      return e.slice(Math.max(e.length - t, 0));
    }
    // if maxMessages is not defined we send all messages
    // if maxMessages above 0 we send that number
    // if maxMessages 0 or below we send only what is in the request
  }, {
    key: "processMessages",
    value: function processMessages(e, t, i) {
      return t !== void 0 ? t > 0 && (e = vt.getMaxMessages(e, t)) : e = [e[e.length - 1]], e = JSON.parse(JSON.stringify(e)), i === void 0 ? e : vt.getCharacterLimitMessages(e, i);
    }
  }]);
}();
var B = /*#__PURE__*/function () {
  function B() {
    _classCallCheck(this, B);
  }
  return _createClass(B, null, [{
    key: "parseConfig",
    value:
    // prettier-ignore
    function parseConfig(e, t, i, s) {
      var o;
      var r = {
        files: t
      };
      if (_typeof(s) == "object") {
        te.processFileConfigConnect(s);
        var a = s.files,
          l = s.connect,
          c = s.button;
        a && (a.infoModal && (r.files.infoModal = a.infoModal, (o = a.infoModal) != null && o.textMarkDown && (r.infoModalTextMarkUp = i.render(a.infoModal.textMarkDown))), a.acceptedFormats && (r.files.acceptedFormats = a.acceptedFormats), a.maxNumberOfFiles && (r.files.maxNumberOfFiles = a.maxNumberOfFiles)), r.button = c, l && (l.headers || l.method || l.url || l.credentials || e.headers || e.method || e.url || e.credentials) && (r.connect = {
          url: (l == null ? void 0 : l.url) || e.url,
          method: (l == null ? void 0 : l.method) || e.method,
          headers: (l == null ? void 0 : l.headers) || e.headers,
          credentials: (l == null ? void 0 : l.credentials) || e.credentials
        });
      }
      return r;
    }
  }, {
    key: "processMixedFiles",
    value: function processMixedFiles(e, t, i) {
      if (i) {
        var s = {
          acceptedFormats: ""
        };
        e.fileTypes.mixedFiles = B.parseConfig(e.connectSettings, s, t, i);
      }
    }
    // needs to be set after audio to overwrite maxNumberOfFiles
    // prettier-ignore
  }, {
    key: "processMicrophone",
    value: function processMicrophone(e, t, i, s) {
      var _l$files, _h$maxNumberOfFiles;
      var a, l, c, d, u, h;
      var o = _objectSpread({
        acceptedFormats: "audio/*"
      }, ((a = e.fileTypes.audio) == null ? void 0 : a.files) || {});
      i && (navigator.mediaDevices.getUserMedia !== void 0 ? (e.recordAudio = B.parseConfig(e.connectSettings, o, t, i), _typeof(i) == "object" && i.files && ((_l$files = (l = e.recordAudio).files) !== null && _l$files !== void 0 ? _l$files : l.files = {}, e.recordAudio.files.format = (c = i.files) == null ? void 0 : c.format, e.recordAudio.files.maxDurationSeconds = (d = i.files) == null ? void 0 : d.maxDurationSeconds, (u = e.fileTypes.audio) != null && u.files && ((_h$maxNumberOfFiles = (h = e.fileTypes.audio.files).maxNumberOfFiles) !== null && _h$maxNumberOfFiles !== void 0 ? _h$maxNumberOfFiles : h.maxNumberOfFiles = i.files.maxNumberOfFiles))) : s || (e.fileTypes.audio = B.parseConfig(e.connectSettings, o, t, i)));
    }
    // prettier-ignore
  }, {
    key: "processAudioConfig",
    value: function processAudioConfig(e, t, i, s) {
      if (!i && !s) return;
      var o = _objectSpread({
        acceptedFormats: "audio/*"
      }, (s == null ? void 0 : s.files) || {});
      e.fileTypes.audio = B.parseConfig(e.connectSettings, o, t, i);
    }
    // prettier-ignore
  }, {
    key: "processGifConfig",
    value: function processGifConfig(e, t, i, s) {
      if (!i && !s) return;
      var o = _objectSpread({
        acceptedFormats: "image/gif"
      }, (s == null ? void 0 : s.files) || {});
      e.fileTypes.gifs = B.parseConfig(e.connectSettings, o, t, i);
    }
    // needs to be set after images to overwrite maxNumberOfFiles
    // prettier-ignore
  }, {
    key: "processCamera",
    value: function processCamera(e, t, i, s) {
      var _l$files2;
      var a, l, c, d;
      var o = _objectSpread({
        acceptedFormats: "image/*"
      }, ((a = e.fileTypes.images) == null ? void 0 : a.files) || {});
      i && (navigator.mediaDevices.getUserMedia !== void 0 ? (e.camera = B.parseConfig(e.connectSettings, o, t, i), _typeof(i) == "object" && (e.camera.modalContainerStyle = i.modalContainerStyle, i.files && ((_l$files2 = (l = e.camera).files) !== null && _l$files2 !== void 0 ? _l$files2 : l.files = {}, e.camera.files.format = (c = i.files) == null ? void 0 : c.format, e.camera.files.dimensions = (d = i.files) == null ? void 0 : d.dimensions))) : s || (e.fileTypes.images = B.parseConfig(e.connectSettings, o, t, i)));
    }
    // prettier-ignore
  }, {
    key: "processImagesConfig",
    value: function processImagesConfig(e, t, i, s) {
      if (!i && !s) return;
      var o = _objectSpread({
        acceptedFormats: "image/*"
      }, (s == null ? void 0 : s.files) || {});
      e.fileTypes.images = B.parseConfig(e.connectSettings, o, t, i);
    }
    // default for direct service
  }, {
    key: "populateDefaultFileIO",
    value: function populateDefaultFileIO(e, t) {
      var _e$files, _i$acceptedFormats, _s$maxNumberOfFiles;
      var i, s;
      e && ((_e$files = e.files) !== null && _e$files !== void 0 ? _e$files : e.files = {}, (_i$acceptedFormats = (i = e.files).acceptedFormats) !== null && _i$acceptedFormats !== void 0 ? _i$acceptedFormats : i.acceptedFormats = t, (_s$maxNumberOfFiles = (s = e.files).maxNumberOfFiles) !== null && _s$maxNumberOfFiles !== void 0 ? _s$maxNumberOfFiles : s.maxNumberOfFiles = 1);
    }
  }, {
    key: "set",
    value: function set(e, t, i) {
      B.populateDefaultFileIO(i == null ? void 0 : i.audio, ".4a,.mp3,.webm,.mp4,.mpga,.wav,.mpeg,.m4a"), B.populateDefaultFileIO(i == null ? void 0 : i.images, ".png,.jpg");
      var s = ti.createNew(e.remarkable);
      B.processImagesConfig(t, s, e.images, i == null ? void 0 : i.images), B.processCamera(t, s, e.camera, e.images), B.processGifConfig(t, s, e.gifs, i == null ? void 0 : i.gifs), B.processAudioConfig(t, s, e.audio, i == null ? void 0 : i.audio), B.processMicrophone(t, s, e.microphone, e.audio), B.processMixedFiles(t, s, e.mixedFiles);
    }
  }]);
}();
var nt = /*#__PURE__*/function () {
  function nt(e, t, i) {
    var _a$url;
    _classCallCheck(this, nt);
    var s, r, o, a, l;
    this.rawBody = {}, this.validateKeyProperty = !1, this.canSendMessage = nt.canSendMessage, this.connectSettings = {}, this.fileTypes = {}, this.completionsHandlers = {}, this.streamHandlers = {}, this.deepChat = e, this.demo = i, Object.assign(this.rawBody, (s = e.connect) == null ? void 0 : s.additionalBodyProps), this.totalMessagesMaxCharLength = (r = e == null ? void 0 : e.requestBodyLimits) == null ? void 0 : r.totalMessagesMaxCharLength, this.maxMessages = (o = e == null ? void 0 : e.requestBodyLimits) == null ? void 0 : o.maxMessages, B.set(e, this, t), e.connect && (this.connectSettings = e.connect), this.demo && ((_a$url = (a = this.connectSettings).url) !== null && _a$url !== void 0 ? _a$url : a.url = ve.URL), this.connectSettings.websocket && q.setup(this), this.stream = ((l = this.deepChat.connect) == null ? void 0 : l.stream) || te.checkForStream(this.deepChat), e.loadHistory && ii.addErrorPrefix(this);
  }
  return _createClass(nt, [{
    key: "verifyKey",
    value: function verifyKey(e, t) {}
  }, {
    key: "getServiceIOByType",
    value: function getServiceIOByType(e) {
      if (e.type.startsWith("audio") && this.fileTypes.audio) return this.fileTypes.audio;
      if (e.type.startsWith("image")) {
        if (this.fileTypes.gifs && e.type.endsWith("/gif")) return this.fileTypes.gifs;
        if (this.fileTypes.images) return this.fileTypes.images;
        if (this.camera) return this.camera;
      }
      return this.fileTypes.mixedFiles;
    }
  }, {
    key: "request",
    value: function () {
      var _request4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29(e, t) {
        var i,
          _args29 = arguments;
        return _regeneratorRuntime().wrap(function _callee29$(_context29) {
          while (1) switch (_context29.prev = _context29.next) {
            case 0:
              i = _args29.length > 2 && _args29[2] !== undefined ? _args29[2] : !0;
              return _context29.abrupt("return", this.stream && !A.isSimulation(this.stream) ? A.request(this, e, t, i) : R.request(this, e, t, i));
            case 2:
            case "end":
              return _context29.stop();
          }
        }, _callee29, this);
      }));
      function request(_x55, _x56) {
        return _request4.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "callAPIWithText",
    value: function () {
      var _callAPIWithText = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30(e, t) {
        var _o$headers, _a$ContentType;
        var r, o, a, l, i, s;
        return _regeneratorRuntime().wrap(function _callee30$(_context30) {
          while (1) switch (_context30.prev = _context30.next) {
            case 0:
              i = _objectSpread({
                messages: t
              }, this.rawBody);
              s = !1;
              (r = this.connectSettings.headers) != null && r["Content-Type"] || ((_o$headers = (o = this.connectSettings).headers) !== null && _o$headers !== void 0 ? _o$headers : o.headers = {}, (_a$ContentType = (a = this.connectSettings.headers)["Content-Type"]) !== null && _a$ContentType !== void 0 ? _a$ContentType : a["Content-Type"] = "application/json", s = !0);
              _context30.next = 5;
              return this.request(i, e);
            case 5:
              s && ((l = this.connectSettings.headers) == null || delete l["Content-Type"]);
            case 6:
            case "end":
              return _context30.stop();
          }
        }, _callee30, this);
      }));
      function callAPIWithText(_x57, _x58) {
        return _callAPIWithText.apply(this, arguments);
      }
      return callAPIWithText;
    }()
  }, {
    key: "callApiWithFiles",
    value: function () {
      var _callApiWithFiles = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee31(e, t, i) {
        var s, r, o;
        return _regeneratorRuntime().wrap(function _callee31$(_context31) {
          while (1) switch (_context31.prev = _context31.next) {
            case 0:
              s = nt.createCustomFormDataBody(this.rawBody, t, i), r = this.connectSettings, o = this.getServiceIOByType(i[0]);
              this.connectSettings = (o == null ? void 0 : o.connect) || this.connectSettings;
              _context31.next = 4;
              return this.request(s, e, !1);
            case 4:
              this.connectSettings = r;
            case 5:
            case "end":
              return _context31.stop();
          }
        }, _callee31, this);
      }));
      function callApiWithFiles(_x59, _x60, _x61) {
        return _callApiWithFiles.apply(this, arguments);
      }
      return callApiWithFiles;
    }()
  }, {
    key: "callServiceAPI",
    value: function () {
      var _callServiceAPI = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee32(e, t, i) {
        return _regeneratorRuntime().wrap(function _callee32$(_context32) {
          while (1) switch (_context32.prev = _context32.next) {
            case 0:
              i ? this.callApiWithFiles(e, t, i) : this.callAPIWithText(e, t);
            case 1:
            case "end":
              return _context32.stop();
          }
        }, _callee32, this);
      }));
      function callServiceAPI(_x62, _x63, _x64) {
        return _callServiceAPI.apply(this, arguments);
      }
      return callServiceAPI;
    }() // prettier-ignore
  }, {
    key: "callAPI",
    value: function () {
      var _callAPI = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee33(e, t) {
        var i, s;
        return _regeneratorRuntime().wrap(function _callee33$(_context33) {
          while (1) switch (_context33.prev = _context33.next) {
            case 0:
              if (this.connectSettings) {
                _context33.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              i = vt.processMessages(t.messageToElements.map(function (_ref13) {
                var _ref14 = _slicedToArray(_ref13, 1),
                  s = _ref14[0];
                return s;
              }), this.maxMessages, this.totalMessagesMaxCharLength);
              if (this.connectSettings.websocket && (!this.connectSettings.handler || this.connectSettings.url !== ve.URL)) {
                s = _objectSpread({
                  messages: i
                }, this.rawBody);
                q.sendWebsocket(this, s, t, !1);
              } else this.callServiceAPI(t, i, e.files);
            case 4:
            case "end":
              return _context33.stop();
          }
        }, _callee33, this);
      }));
      function callAPI(_x65, _x66) {
        return _callAPI.apply(this, arguments);
      }
      return callAPI;
    }()
  }, {
    key: "extractResultData",
    value: function () {
      var _extractResultData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee34(e) {
        return _regeneratorRuntime().wrap(function _callee34$(_context34) {
          while (1) switch (_context34.prev = _context34.next) {
            case 0:
              if (!e.result) {
                _context34.next = 2;
                break;
              }
              return _context34.abrupt("return", te.handleResponseProperty(e));
            case 2:
              if (!E.validateResponseFormat(e, !!this.stream)) {
                _context34.next = 4;
                break;
              }
              return _context34.abrupt("return", e);
            case 4:
            case "end":
              return _context34.stop();
          }
        }, _callee34, this);
      }));
      function extractResultData(_x67) {
        return _extractResultData.apply(this, arguments);
      }
      return extractResultData;
    }()
  }, {
    key: "isDirectConnection",
    value: function isDirectConnection() {
      return !1;
    }
  }, {
    key: "isWebModel",
    value: function isWebModel() {
      return !1;
    }
  }, {
    key: "isCustomView",
    value: function isCustomView() {
      return !1;
    }
  }], [{
    key: "canSendMessage",
    value: function canSendMessage(e, t, i) {
      return i ? !0 : !!(e && e.trim() !== "") || !!(t && t.length > 0);
    }
  }, {
    key: "createCustomFormDataBody",
    value: function createCustomFormDataBody(e, t, i) {
      var s = new FormData();
      i.forEach(function (a) {
        return s.append("files", a);
      }), Object.keys(e).forEach(function (a) {
        return s.append(a, String(e[a]));
      });
      var r = 0;
      t.slice(0, t.length - 1).forEach(function (a) {
        s.append("message".concat(r += 1), JSON.stringify(a));
      });
      var o = t[t.length - 1];
      return o.text && (delete o.files, s.append("message".concat(r += 1), JSON.stringify(o))), s;
    }
  }]);
}();
var G = /*#__PURE__*/function (_nt) {
  // prettier-ignore
  function G(e, t, i, s, r) {
    var _this16;
    _classCallCheck(this, G);
    var o;
    _this16 = _callSuper(this, G, [e, r]), _this16.insertKeyPlaceholderText = "API Key", _this16.keyHelpUrl = "", Object.assign(_this16.rawBody, (o = e.connect) == null ? void 0 : o.additionalBodyProps), _this16.keyVerificationDetails = t, _this16.buildHeadersFunc = i, s && _this16.setApiKeyProperties(s), _this16.connectSettings = _this16.buildConnectSettings(_this16.key || "", e.connect);
    return _this16;
  }
  _inherits(G, _nt);
  return _createClass(G, [{
    key: "setApiKeyProperties",
    value: function setApiKeyProperties(e) {
      this.key = e.key, e.validateKeyProperty && (this.validateKeyProperty = e.validateKeyProperty);
    }
  }, {
    key: "buildConnectSettings",
    value: function buildConnectSettings(e, t) {
      var _i$headers;
      var i = t !== null && t !== void 0 ? t : {};
      return (_i$headers = i.headers) !== null && _i$headers !== void 0 ? _i$headers : i.headers = {}, Object.assign(i.headers, this.buildHeadersFunc(e)), i;
    }
  }, {
    key: "keyAuthenticated",
    value: function keyAuthenticated(e, t) {
      this.connectSettings = this.buildConnectSettings(t, this.connectSettings), this.key = t, e();
    }
    // prettier-ignore
  }, {
    key: "verifyKey",
    value: function verifyKey(e, t) {
      var _this$keyVerification = this.keyVerificationDetails,
        i = _this$keyVerification.url,
        s = _this$keyVerification.method,
        r = _this$keyVerification.handleVerificationResult,
        o = _this$keyVerification.createHeaders,
        a = _this$keyVerification.body,
        l = (o == null ? void 0 : o(e)) || this.buildHeadersFunc(e);
      R.verifyKey(e, i, l, s, this.keyAuthenticated.bind(this, t.onSuccess), t.onFail, t.onLoad, r, a);
    }
  }, {
    key: "isDirectConnection",
    value: function isDirectConnection() {
      return !0;
    }
  }]);
}(nt);
var Si = /*#__PURE__*/function () {
  function Si() {
    _classCallCheck(this, Si);
  }
  return _createClass(Si, null, [{
    key: "waitForPropertiesToBeUpdatedBeforeRender",
    value: function waitForPropertiesToBeUpdatedBeforeRender(e) {
      e._propUpdated_ = !1, setTimeout(function () {
        e._propUpdated_ ? Si.waitForPropertiesToBeUpdatedBeforeRender(e) : (e._waitingToRender_ = !1, e.onRender());
      });
    }
  }, {
    key: "attemptRender",
    value: function attemptRender(e) {
      e._propUpdated_ = !0, e._waitingToRender_ || (e._waitingToRender_ = !0, Si.waitForPropertiesToBeUpdatedBeforeRender(e));
    }
  }]);
}();
var Le = /*#__PURE__*/function (_HTMLElement) {
  // If this is not working, try using propertyName directly
  function Le() {
    var _this17;
    _classCallCheck(this, Le);
    _this17 = _callSuper(this, Le), _this17._waitingToRender_ = !1, _this17._propUpdated_ = !1, Object.keys(Le._attributeToProperty_).forEach(function (e) {
      var t = Le._attributeToProperty_[e];
      _this17.constructPropertyAccessors(t), _this17.hasOwnProperty(e) || _this17.constructPropertyAccessors(t, e);
    });
    return _this17;
  }
  _inherits(Le, _HTMLElement);
  return _createClass(Le, [{
    key: "constructPropertyAccessors",
    value:
    // need to be called here as accessors need to be set for the class instance
    function constructPropertyAccessors(e, t) {
      var i;
      Object.defineProperty(this, t || e, {
        get: function get() {
          return i;
        },
        set: function set(o) {
          i = o, t ? this[e] = o : Si.attemptRender(this);
        }
      });
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(e, t, i) {
      if (t === i) return;
      var s = Le._attributes_[e](i),
        r = Le._attributeToProperty_[e];
      this[r] = s;
    }
  }, {
    key: "onRender",
    value: function onRender() {}
  }], [{
    key: "observedAttributes",
    get: function get() {
      return Object.keys(Le._attributes_) || [];
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
Le._attributes_ = {}, Le._attributeToProperty_ = {};
var ss = Le;
var Bo = "<?xml version=\"1.0\" standalone=\"no\"?>\n<svg version=\"1.1\"\n\txmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\n\txmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"0.9em\" height=\"0.9em\"\n\tviewBox=\"0 0 1200 1200\" enable-background=\"new 0 0 1200 1200\">\n\t\t<path d=\"\n\t\t\tM669.727,273.516c-22.891-2.476-46.15-3.895-69.727-4.248c-103.025,0.457-209.823,25.517-310.913,73.536\n\t\t\tc-75.058,37.122-148.173,89.529-211.67,154.174C46.232,529.978,6.431,577.76,0,628.74c0.76,44.162,48.153,98.67,77.417,131.764\n\t\t\tc59.543,62.106,130.754,113.013,211.67,154.174c2.75,1.335,5.51,2.654,8.276,3.955l-75.072,131.102l102.005,60.286l551.416-960.033\n\t\t\tl-98.186-60.008L669.727,273.516z M902.563,338.995l-74.927,129.857c34.47,44.782,54.932,100.006,54.932,159.888\n\t\t\tc0,149.257-126.522,270.264-282.642,270.264c-6.749,0-13.29-0.728-19.922-1.172l-49.585,85.84c22.868,2.449,45.99,4.233,69.58,4.541\n\t\t\tc103.123-0.463,209.861-25.812,310.84-73.535c75.058-37.122,148.246-89.529,211.743-154.174\n\t\t\tc31.186-32.999,70.985-80.782,77.417-131.764c-0.76-44.161-48.153-98.669-77.417-131.763\n\t\t\tc-59.543-62.106-130.827-113.013-211.743-154.175C908.108,341.478,905.312,340.287,902.563,338.995L902.563,338.995z\n\t\t\tM599.927,358.478c6.846,0,13.638,0.274,20.361,0.732l-58.081,100.561c-81.514,16.526-142.676,85.88-142.676,168.897\n\t\t\tc0,20.854,3.841,40.819,10.913,59.325c0.008,0.021-0.008,0.053,0,0.074l-58.228,100.854\n\t\t\tc-34.551-44.823-54.932-100.229-54.932-160.182C317.285,479.484,443.808,358.477,599.927,358.478L599.927,358.478z M768.896,570.513\n\t\t\tL638.013,797.271c81.076-16.837,141.797-85.875,141.797-168.603C779.81,608.194,775.724,588.729,768.896,570.513L768.896,570.513z\"\n\t\t\t/>\n</svg>\n",
  Fo = "<?xml version=\"1.0\" standalone=\"no\"?>\n<svg version=\"1.1\"\n\txmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\n\txmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"0.9em\" height=\"0.9em\"\n\tviewBox=\"0 0 1200 1200\" enable-background=\"new 0 0 1200 1200\">\n\t\t<path id=\"path6686\" inkscape:connector-curvature=\"0\" d=\"M779.843,599.925c0,95.331-80.664,172.612-180.169,172.612\n\t\t\tc-99.504,0-180.168-77.281-180.168-172.612c0-95.332,80.664-172.612,180.168-172.612\n\t\t\tC699.179,427.312,779.843,504.594,779.843,599.925z M600,240.521c-103.025,0.457-209.814,25.538-310.904,73.557\n\t\t\tc-75.058,37.122-148.206,89.496-211.702,154.141C46.208,501.218,6.431,549,0,599.981c0.76,44.161,48.13,98.669,77.394,131.763\n\t\t\tc59.543,62.106,130.786,113.018,211.702,154.179c94.271,45.751,198.616,72.092,310.904,73.557\n\t\t\tc103.123-0.464,209.888-25.834,310.866-73.557c75.058-37.122,148.243-89.534,211.74-154.179\n\t\t\tc31.185-32.999,70.962-80.782,77.394-131.763c-0.76-44.161-48.13-98.671-77.394-131.764\n\t\t\tc-59.543-62.106-130.824-112.979-211.74-154.141C816.644,268.36,712.042,242.2,600,240.521z M599.924,329.769\n\t\t\tc156.119,0,282.675,120.994,282.675,270.251c0,149.256-126.556,270.25-282.675,270.25S317.249,749.275,317.249,600.02\n\t\t\tC317.249,450.763,443.805,329.769,599.924,329.769L599.924,329.769z\"/>\n</svg>\n";
var Fe = /*#__PURE__*/function () {
  function Fe() {
    _classCallCheck(this, Fe);
  }
  return _createClass(Fe, null, [{
    key: "createSVGElement",
    value: function createSVGElement(e) {
      return new DOMParser().parseFromString(e, "image/svg+xml").documentElement;
    }
  }]);
}();
var ze = /*#__PURE__*/function () {
  function ze() {
    _classCallCheck(this, ze);
  }
  return _createClass(ze, null, [{
    key: "changeVisibility",
    value:
    // prettier-ignore
    function changeVisibility(e, t, i, s) {
      s.target.id === ze.VISIBLE_ICON_ID ? (t.style.display = "none", i.style.display = "block", e.type = "password") : (t.style.display = "block", i.style.display = "none", e.type = "text");
    }
  }, {
    key: "createIconElement",
    value: function createIconElement(e, t) {
      var i = Fe.createSVGElement(e);
      return i.id = t, i.classList.add("visibility-icon"), i;
    }
    // prettier-ignore
  }, {
    key: "create",
    value: function create(e) {
      var t = document.createElement("div");
      t.id = "visibility-icon-container";
      var i = ze.createIconElement(Fo, ze.VISIBLE_ICON_ID);
      i.style.display = "none", t.appendChild(i);
      var s = ze.createIconElement(Bo, "not-visible-icon");
      return t.appendChild(s), t.onclick = ze.changeVisibility.bind(this, e, i, s), t;
    }
  }]);
}();
ze.VISIBLE_ICON_ID = "visible-icon";
var ns = ze;
var V = /*#__PURE__*/function () {
  function V() {
    _classCallCheck(this, V);
  }
  return _createClass(V, null, [{
    key: "createCautionText",
    value: function createCautionText() {
      var e = document.createElement("a");
      return e.classList.add("insert-key-input-help-text"), e.innerText = "Please exercise CAUTION when inserting your API key outside of deepchat.dev or localhost!!", e;
    }
  }, {
    key: "createHelpLink",
    value: function createHelpLink(e) {
      var t = document.createElement("a");
      return t.classList.add("insert-key-input-help-text"), t.href = e, t.innerText = "Find more info here", t.target = "_blank", t;
    }
  }, {
    key: "createFailText",
    value: function createFailText() {
      var e = document.createElement("div");
      return e.id = "insert-key-input-invalid-text", e.style.display = "none", e;
    }
  }, {
    key: "createHelpTextContainer",
    value: function createHelpTextContainer(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var i = document.createElement("div");
      i.id = "insert-key-help-text-container";
      var s = document.createElement("div");
      s.id = "insert-key-help-text-contents";
      var r = V.createFailText();
      if (s.appendChild(r), e) {
        var o = V.createHelpLink(e);
        s.appendChild(o);
      }
      if (t === !0) {
        var _o4 = V.createCautionText();
        s.appendChild(_o4);
      }
      return i.appendChild(s), {
        helpTextContainerElement: i,
        failTextElement: r
      };
    }
  }, {
    key: "onFail",
    value: function onFail(e, t, i, s) {
      e.classList.replace("insert-key-input-valid", "insert-key-input-invalid"), i.innerText = s, i.style.display = "block", t.innerText = "Start", e.classList.remove("loading");
    }
  }, {
    key: "onLoad",
    value: function onLoad(e, t) {
      e.classList.add("loading"), t.innerHTML = '<div id="loading-key"></div>';
    }
    // prettier-ignore
  }, {
    key: "verifyKey",
    value: function verifyKey(e, t, i) {
      var s = e.value.trim();
      i.verifyKey(s, t);
    }
    // prettier-ignore
  }, {
    key: "addVerificationEvents",
    value: function addVerificationEvents(e, t, i, s, r) {
      var o = {
          onSuccess: s,
          onFail: V.onFail.bind(this, e, t, i),
          onLoad: V.onLoad.bind(this, e, t)
        },
        a = V.verifyKey.bind(this, e, o, r);
      t.onclick = a, e.onkeydown = function (l) {
        !e.classList.contains("loading") && l.key === U.ENTER && a();
      };
    }
  }, {
    key: "createStartButton",
    value: function createStartButton() {
      var e = document.createElement("div");
      return e.id = "start-button", e.innerText = "Start", e;
    }
  }, {
    key: "onInputFocus",
    value: function onInputFocus(e) {
      e.target.classList.replace("insert-key-input-invalid", "insert-key-input-valid");
    }
  }, {
    key: "createInput",
    value: function createInput(e) {
      var t = document.createElement("div");
      t.id = "insert-key-input-container";
      var i = document.createElement("input");
      return i.id = "insert-key-input", i.placeholder = e || "API Key", i.type = "password", i.classList.add("insert-key-input-valid"), i.onfocus = V.onInputFocus, t.appendChild(i), t;
    }
    // prettier-ignore
  }, {
    key: "createContents",
    value: function createContents(e, t) {
      var d;
      var i = document.createElement("div");
      i.id = "insert-key-contents";
      var s = V.createInput(t.insertKeyPlaceholderText),
        r = s.children[0],
        o = ns.create(r);
      s.appendChild(o), i.appendChild(s);
      var a = V.createStartButton(),
        _V$createHelpTextCont = V.createHelpTextContainer(t.keyHelpUrl, (d = t.deepChat._insertKeyViewStyles) == null ? void 0 : d.displayCautionText),
        l = _V$createHelpTextCont.helpTextContainerElement,
        c = _V$createHelpTextCont.failTextElement;
      return i.appendChild(a), i.appendChild(l), V.addVerificationEvents(r, a, c, e, t), i;
    }
  }, {
    key: "createElements",
    value: function createElements(e, t) {
      var i = document.createElement("div");
      i.id = "insert-key-view";
      var s = V.createContents(e, t);
      return i.appendChild(s), i;
    }
  }, {
    key: "render",
    value: function render(e, t, i) {
      var s = V.createElements(t, i);
      e.replaceChildren(s);
    }
  }]);
}();
var se = /*#__PURE__*/function () {
  function se() {
    _classCallCheck(this, se);
  }
  return _createClass(se, null, [{
    key: "enableButtons",
    value: function enableButtons(e, t) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      window.webLLM ? (e && (e.disabled = !1), t && (t.disabled = !1)) : i < si.MODULE_SEARCH_LIMIT_S * 4 && setTimeout(function () {
        return se.enableButtons(e, t, i + 1);
      }, 250);
    }
    // prettier-ignore
  }, {
    key: "setUpInitial",
    value: function setUpInitial(e, t, i, s) {
      var r = (t == null ? void 0 : t.downloadClass) || se.DOWNLOAD_BUTTON_CLASS,
        o = (t == null ? void 0 : t.uploadClass) || se.UPLOAD_BUTTON_CLASS,
        a = (t == null ? void 0 : t.fileInputClass) || se.FILE_INPUT_CLASS;
      return setTimeout(function () {
        var l = i == null ? void 0 : i.getElementsByClassName(r)[0],
          c = i == null ? void 0 : i.getElementsByClassName(a)[0],
          d = i == null ? void 0 : i.getElementsByClassName(o)[0];
        l && (l.onclick = function () {
          return e();
        }), c && (c.onchange = function () {
          c.files && c.files.length > 0 && e(c.files);
        }), d && (d.onclick = function () {
          return c.click();
        }), (l || d) && se.enableButtons(l, d);
      }), (t == null ? void 0 : t.initialHtml) || "<div>\n        Download or upload a web model that will run entirely on your browser: <br/> \n        <button disabled class=\"".concat(r, " deep-chat-button deep-chat-web-model-button\">Download</button>\n        ").concat(s ? "" : "<input type=\"file\" class=\"".concat(a, "\" hidden multiple />\n          <button disabled class=\"").concat(o, " deep-chat-button deep-chat-web-model-button\">Upload</button>"), "\n      </div>");
    }
  }, {
    key: "exportFile",
    value: function exportFile(e) {
      var t = document.createElement("a"),
        i = 4;
      var _loop2 = function _loop2(s) {
        setTimeout(function () {
          var r = s * i;
          for (var o = r; o < Math.min(r + i, e.length); o += 1) {
            var a = URL.createObjectURL(e[o]);
            t.href = a, t.download = e[o].name, document.body.appendChild(t), t.click(), URL.revokeObjectURL(a);
          }
        }, 500 * s);
      };
      for (var s = 0; s < e.length / i; s += 1) {
        _loop2(s);
      }
    }
    // prettier-ignore
  }, {
    key: "setUpAfterLoad",
    value: function setUpAfterLoad(e, t, i, s) {
      var r = (t == null ? void 0 : t.exportFilesClass) || se.EXPORT_BUTTON_CLASS;
      return setTimeout(function () {
        var o = i == null ? void 0 : i.getElementsByClassName(r)[0];
        o && (o.onclick = function () {
          return se.exportFile(e);
        });
      }), (t == null ? void 0 : t.afterLoadHtml) || "<div>\n        Model loaded successfully and has been cached for future requests.\n        ".concat(s ? "" : "<br/> <button style=\"margin-top: 5px\" class=\"".concat(r, " deep-chat-button\">Export</button>"), "\n      </div>");
    }
  }]);
}();
se.DOWNLOAD_BUTTON_CLASS = "deep-chat-download-button", se.UPLOAD_BUTTON_CLASS = "deep-chat-upload-button", se.FILE_INPUT_CLASS = "deep-chat-file-input", se.EXPORT_BUTTON_CLASS = "deep-chat-export-button";
var _i = se;
var Ws = {
    model_list: [
    // Llama-2
    {
      model_url: "https://huggingface.co/mlc-ai/Llama-2-7b-chat-hf-q4f32_1-MLC/resolve/main/",
      local_id: "Llama-2-7b-chat-hf-q4f32_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-7b-chat-hf/Llama-2-7b-chat-hf-q4f32_1-ctx4k_cs1k-webgpu.wasm",
      vram_required_MB: 9109.03,
      low_resource_required: !1
    }, {
      model_url: "https://huggingface.co/mlc-ai/Llama-2-7b-chat-hf-q4f16_1-MLC/resolve/main/",
      local_id: "Llama-2-7b-chat-hf-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-7b-chat-hf/Llama-2-7b-chat-hf-q4f16_1-ctx4k_cs1k-webgpu.wasm",
      vram_required_MB: 6749.02,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    }, {
      model_url: "https://huggingface.co/mlc-ai/Llama-2-7b-chat-hf-q4f16_1-MLC/resolve/main/",
      local_id: "Llama-2-7b-chat-hf-q4f16_1-1k",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-7b-chat-hf/Llama-2-7b-chat-hf-q4f16_1-ctx1k-webgpu.wasm",
      vram_required_MB: 4618.52,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    }, {
      model_url: "https://huggingface.co/mlc-ai/Llama-2-13b-chat-hf-q4f16_1-MLC/resolve/main/",
      local_id: "Llama-2-13b-chat-hf-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-13b-chat-hf/Llama-2-13b-chat-hf-q4f16_1-ctx4k_cs1k-webgpu.wasm",
      vram_required_MB: 11814.09,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    }, {
      model_url: "https://huggingface.co/mlc-ai/Llama-2-70b-chat-hf-q4f16_1-MLC/resolve/main/",
      local_id: "Llama-2-70b-chat-hf-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-70b-chat-hf/Llama-2-70b-chat-hf-q4f16_1-ctx4k_cs1k-webgpu.wasm",
      vram_required_MB: 43729.05,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    // RedPajama
    {
      model_url: "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f16_1-MLC/resolve/main/",
      local_id: "RedPajama-INCITE-Chat-3B-v1-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1/RedPajama-INCITE-Chat-3B-v1-q4f16_1-ctx2k-webgpu.wasm",
      vram_required_MB: 2972.09,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    }, {
      model_url: "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f32_1-MLC/resolve/main/",
      local_id: "RedPajama-INCITE-Chat-3B-v1-q4f32_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1/RedPajama-INCITE-Chat-3B-v1-q4f32_1-ctx2k-webgpu.wasm",
      vram_required_MB: 3928.09,
      low_resource_required: !1
    }, {
      model_url: "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f16_1-MLC/resolve/main/",
      local_id: "RedPajama-INCITE-Chat-3B-v1-q4f16_1-1k",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1/RedPajama-INCITE-Chat-3B-v1-q4f16_1-ctx1k-webgpu.wasm",
      vram_required_MB: 2041.09,
      low_resource_required: !0,
      required_features: ["shader-f16"]
    }, {
      model_url: "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f32_1-MLC/resolve/main/",
      local_id: "RedPajama-INCITE-Chat-3B-v1-q4f32_1-1k",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1/RedPajama-INCITE-Chat-3B-v1-q4f32_1-ctx1k-webgpu.wasm",
      vram_required_MB: 2558.09,
      low_resource_required: !0
    },
    // Mistral variants
    {
      model_url: "https://huggingface.co/mlc-ai/WizardMath-7B-V1.1-q4f16_1-MLC/resolve/main/",
      local_id: "WizardMath-7B-V1.1-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.2/Mistral-7B-Instruct-v0.2-q4f16_1-sw4k_cs1k-webgpu.wasm",
      vram_required_MB: 6079.02,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    }, {
      model_url: "https://huggingface.co/mlc-ai/Mistral-7B-Instruct-v0.2-q4f16_1-MLC/resolve/main/",
      local_id: "Mistral-7B-Instruct-v0.2-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.2/Mistral-7B-Instruct-v0.2-q4f16_1-sw4k_cs1k-webgpu.wasm",
      vram_required_MB: 6079.02,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    }, {
      model_url: "https://huggingface.co/mlc-ai/OpenHermes-2.5-Mistral-7B-q4f16_1-MLC/resolve/main/",
      local_id: "OpenHermes-2.5-Mistral-7B-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.2/Mistral-7B-Instruct-v0.2-q4f16_1-sw4k_cs1k-webgpu.wasm",
      vram_required_MB: 6079.02,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    }, {
      model_url: "https://huggingface.co/mlc-ai/NeuralHermes-2.5-Mistral-7B-q4f16_1-MLC/resolve/main/",
      local_id: "NeuralHermes-2.5-Mistral-7B-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.2/Mistral-7B-Instruct-v0.2-q4f16_1-sw4k_cs1k-webgpu.wasm",
      vram_required_MB: 6079.02,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    // TinyLlama
    {
      model_url: "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q0f16-MLC/resolve/main/",
      local_id: "TinyLlama-1.1B-Chat-v0.4-q0f16",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/TinyLlama-1.1B-Chat-v0.4/TinyLlama-1.1B-Chat-v0.4-q0f16-ctx2k-webgpu.wasm",
      vram_required_MB: 5063.52,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    }, {
      model_url: "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q0f32-MLC/resolve/main/",
      local_id: "TinyLlama-1.1B-Chat-v0.4-q0f32",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/TinyLlama-1.1B-Chat-v0.4/TinyLlama-1.1B-Chat-v0.4-q0f32-ctx2k-webgpu.wasm",
      vram_required_MB: 5394.53,
      low_resource_required: !1
    }, {
      model_url: "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC/resolve/main/",
      local_id: "TinyLlama-1.1B-Chat-v0.4-q4f16_1-1k",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/TinyLlama-1.1B-Chat-v0.4/TinyLlama-1.1B-Chat-v0.4-q4f16_1-ctx1k-webgpu.wasm",
      vram_required_MB: 899.11,
      low_resource_required: !0,
      required_features: ["shader-f16"]
    }, {
      model_url: "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q4f32_1-MLC/resolve/main/",
      local_id: "TinyLlama-1.1B-Chat-v0.4-q4f32_1-1k",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/TinyLlama-1.1B-Chat-v0.4/TinyLlama-1.1B-Chat-v0.4-q4f32_1-ctx1k-webgpu.wasm",
      vram_required_MB: 992.11,
      low_resource_required: !0
    }],
    use_web_worker: !0
  },
  T = /*#__PURE__*/function (_nt2) {
    function T(e) {
      var _this18;
      _classCallCheck(this, T);
      var t, i;
      _this18 = _callSuper(this, T, [e]), _this18._isModelLoaded = !1, _this18._isModelLoading = !1, _this18._loadOnFirstMessage = !1, _this18._webModel = {}, _this18.permittedErrorPrefixes = [T.MULTIPLE_MODELS_ERROR, T.WEB_LLM_NOT_FOUND_ERROR, T.GENERIC_ERROR], _this18._conversationHistory = [], _typeof(e.webModel) == "object" && (_this18._webModel = e.webModel), (t = _this18._webModel.load) != null && t.clearCache && T.clearAllCache(), _this18.findModelInWindow(e), _this18.canSendMessage = _this18.canSubmit.bind(_assertThisInitialized(_this18)), _this18._chatEl = (i = e.shadowRoot) == null ? void 0 : i.children[0], e.history && T.setUpHistory(_this18._conversationHistory, e.history);
      return _this18;
    }
    // need ref of messages object as web model exhibits unique behaviour to manipulate chat
    _inherits(T, _nt2);
    return _createClass(T, [{
      key: "setUpMessages",
      value: function setUpMessages(e) {
        var _this19 = this;
        this._messages = e, this._removeIntro = function () {
          e.removeIntroductoryMessage(), _this19._removeIntro = void 0;
        };
      }
    }, {
      key: "findModelInWindow",
      value: function findModelInWindow(e) {
        var _this20 = this;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var i;
        window.webLLM ? this.configureInit(this.shouldAddIntroMessage(e.introMessage)) : t > T.MODULE_SEARCH_LIMIT_S ? ((i = this._messages) == null || i.addNewErrorMessage("service", T.WEB_LLM_NOT_FOUND_ERROR), console.error("The deep-chat-web-llm module has not been attached to the window object. Please see the following guide:"), console.error("https://deepchat.dev/examples/externalModules")) : setTimeout(function () {
          return _this20.findModelInWindow(e, t + 1);
        }, 1e3);
      }
    }, {
      key: "shouldAddIntroMessage",
      value: function shouldAddIntroMessage(e) {
        var t;
        return !e && this._webModel && ((t = this._webModel.introMessage) == null ? void 0 : t.displayed) !== !1;
      }
    }, {
      key: "scrollToTop",
      value: function scrollToTop(e) {
        var _this21 = this;
        var t;
        ((t = this._webModel.introMessage) == null ? void 0 : t.autoScroll) !== !1 && setTimeout(function () {
          var i, s;
          (i = _this21._messages) != null && i.elementRef && X.scrollToTop((s = _this21._messages) == null ? void 0 : s.elementRef);
        }, e);
      }
      // prettier-ignore
    }, {
      key: "getIntroMessage",
      value: function getIntroMessage(e) {
        if (!this.shouldAddIntroMessage(e) || !this._chatEl) return;
        var t = _i.setUpInitial(this.init.bind(this), this._webModel.introMessage, this._chatEl, !!this._webModel.worker);
        return this.scrollToTop(1), {
          role: y.AI_ROLE,
          html: t,
          sendUpdate: !1
        };
      }
    }, {
      key: "configureInit",
      value: function () {
        var _configureInit = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee35(e) {
          var t;
          return _regeneratorRuntime().wrap(function _callee35$(_context35) {
            while (1) switch (_context35.prev = _context35.next) {
              case 0:
                t = this._webModel.load;
                if (!t) {
                  _context35.next = 8;
                  break;
                }
                if (!t.onInit) {
                  _context35.next = 5;
                  break;
                }
                this.init();
                return _context35.abrupt("return");
              case 5:
                if (!t.onMessage) {
                  _context35.next = 8;
                  break;
                }
                this._loadOnFirstMessage = !0;
                return _context35.abrupt("return");
              case 8:
                e || this.init();
              case 9:
              case "end":
                return _context35.stop();
            }
          }, _callee35, this);
        }));
        function configureInit(_x68) {
          return _configureInit.apply(this, arguments);
        }
        return configureInit;
      }()
    }, {
      key: "init",
      value: function () {
        var _init = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee36(e) {
          var i, t;
          return _regeneratorRuntime().wrap(function _callee36$(_context36) {
            while (1) switch (_context36.prev = _context36.next) {
              case 0:
                (i = this._messages) == null || i.removeError();
                t = this.attemptToCreateChat();
                _context36.t0 = t;
                if (!_context36.t0) {
                  _context36.next = 6;
                  break;
                }
                _context36.next = 6;
                return this.loadModel(t, e);
              case 6:
              case "end":
                return _context36.stop();
            }
          }, _callee36, this);
        }));
        function init(_x69) {
          return _init.apply(this, arguments);
        }
        return init;
      }()
    }, {
      key: "attemptToCreateChat",
      value: function attemptToCreateChat() {
        var t;
        if (T.chat) {
          (t = this._messages) == null || t.addNewErrorMessage("service", T.MULTIPLE_MODELS_ERROR), console.error(T.MULTIPLE_MODELS_ERROR);
          return;
        }
        if (this._isModelLoaded || this._isModelLoading) return;
        var e = this._webModel.worker;
        return Ws.use_web_worker && e ? new window.webLLM.ChatWorkerClient(e) : new window.webLLM.ChatModule();
      }
    }, {
      key: "getConfig",
      value: function getConfig() {
        var i;
        var e = T.DEFAULT_MODEL;
        this._webModel.model && (e = this._webModel.model);
        var t = JSON.parse(JSON.stringify(Ws));
        if (this._webModel.urls) {
          var s = t.model_list.find(function (r) {
            return r.local_id = e;
          });
          s && (this._webModel.urls.model && (s.model_url = this._webModel.urls.model), this._webModel.urls.wasm && (s.model_lib_url = this._webModel.urls.wasm));
        }
        return (i = this._webModel.load) != null && i.skipCache && (t.use_cache = !1), {
          model: e,
          appConfig: t
        };
      }
      // prettier-ignore
    }, {
      key: "loadModel",
      value: function () {
        var _loadModel = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee37(e, t) {
          var _this22 = this;
          var o, a, l, c, d, u, h, i, s, r, _this$getConfig, f, m, p, _f;
          return _regeneratorRuntime().wrap(function _callee37$(_context37) {
            while (1) switch (_context37.prev = _context37.next) {
              case 0:
                this.scrollToTop(), T.chat = e, this._isModelLoading = !0;
                i = ((o = this._webModel.introMessage) == null ? void 0 : o.displayed) === !1;
                s = function s(f) {
                  var m;
                  (m = _this22._messages) == null || m.addNewMessage({
                    html: "<div>".concat(f.text, "</div>"),
                    overwrite: !0,
                    sendUpdate: !1
                  }), i && (setTimeout(function () {
                    var p;
                    return X.scrollToBottom((p = _this22._messages) == null ? void 0 : p.elementRef);
                  }), i = !1);
                };
                T.chat.setInitProgressCallback(s);
                _context37.prev = 4;
                _this$getConfig = this.getConfig(), f = _this$getConfig.model, m = _this$getConfig.appConfig, p = {};
                this._webModel.instruction && (p.conv_config = {
                  system: this._webModel.instruction
                });
                this._conversationHistory.length > 0 && (p.conversation_history = this._conversationHistory);
                _context37.next = 10;
                return T.chat.reload(f, p, m, t);
              case 10:
                r = _context37.sent;
                _context37.next = 16;
                break;
              case 13:
                _context37.prev = 13;
                _context37.t0 = _context37["catch"](4);
                return _context37.abrupt("return", this.unloadChat(_context37.t0));
              case 16:
                if ((l = (a = this.deepChat)._validationHandler) == null || l.call(a), (c = this._webModel.introMessage) != null && c.removeAfterLoad) this._webModel.introMessage.displayed === !1 ? (u = this._messages) == null || u.removeLastMessage() : (h = this._removeIntro) == null || h.call(this);else {
                  _f = _i.setUpAfterLoad(r, this._webModel.introMessage, this._chatEl, !!this._webModel.worker);
                  (d = this._messages) == null || d.addNewMessage({
                    html: _f,
                    overwrite: !0,
                    sendUpdate: !1
                  });
                }
                this._isModelLoaded = !0, this._isModelLoading = !1;
              case 18:
              case "end":
                return _context37.stop();
            }
          }, _callee37, this, [[4, 13]]);
        }));
        function loadModel(_x70, _x71) {
          return _loadModel.apply(this, arguments);
        }
        return loadModel;
      }()
    }, {
      key: "unloadChat",
      value: function () {
        var _unloadChat = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee38(e) {
          var t;
          return _regeneratorRuntime().wrap(function _callee38$(_context38) {
            while (1) switch (_context38.prev = _context38.next) {
              case 0:
                (t = this._messages) == null || t.addNewErrorMessage("service", T.GENERIC_ERROR);
                console.error(e);
                this._isModelLoaded = !1;
                this._isModelLoading = !1;
                _context38.t0 = T.chat;
                if (!_context38.t0) {
                  _context38.next = 9;
                  break;
                }
                _context38.next = 8;
                return T.chat.unload();
              case 8:
                T.chat = void 0;
              case 9:
              case "end":
                return _context38.stop();
            }
          }, _callee38, this);
        }));
        function unloadChat(_x72) {
          return _unloadChat.apply(this, arguments);
        }
        return unloadChat;
      }()
    }, {
      key: "immediateResp",
      value: function () {
        var _immediateResp = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee39(e, t, i) {
          var s, r;
          return _regeneratorRuntime().wrap(function _callee39$(_context39) {
            while (1) switch (_context39.prev = _context39.next) {
              case 0:
                _context39.next = 2;
                return i.generate(t, void 0, 0);
              case 2:
                _context39.t0 = _context39.sent;
                s = {
                  text: _context39.t0
                };
                _context39.next = 6;
                return T.processResponse(this.deepChat, e, s);
              case 6:
                r = _context39.sent;
                r && r.forEach(function (o) {
                  return e.addNewMessage(o);
                }), this.completionsHandlers.onFinish();
              case 8:
              case "end":
                return _context39.stop();
            }
          }, _callee39, this);
        }));
        function immediateResp(_x73, _x74, _x75) {
          return _immediateResp.apply(this, arguments);
        }
        return immediateResp;
      }()
    }, {
      key: "streamResp",
      value: function () {
        var _streamResp = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee41(e, t, i) {
          var _this23 = this;
          var s;
          return _regeneratorRuntime().wrap(function _callee41$(_context41) {
            while (1) switch (_context41.prev = _context41.next) {
              case 0:
                this.streamHandlers.abortStream.abort = function () {
                  i.interruptGenerate();
                }, this.streamHandlers.onOpen();
                s = new we(e);
                _context41.next = 4;
                return i.generate(t, /*#__PURE__*/function () {
                  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee40(r, o) {
                    var a;
                    return _regeneratorRuntime().wrap(function _callee40$(_context40) {
                      while (1) switch (_context40.prev = _context40.next) {
                        case 0:
                          _context40.next = 2;
                          return T.processResponse(_this23.deepChat, e, {
                            text: o
                          });
                        case 2:
                          a = _context40.sent;
                          a && s.upsertStreamedMessage({
                            text: a[0].text,
                            overwrite: !0
                          });
                        case 4:
                        case "end":
                          return _context40.stop();
                      }
                    }, _callee40);
                  }));
                  return function (_x79, _x80) {
                    return _ref15.apply(this, arguments);
                  };
                }());
              case 4:
                s.finaliseStreamedMessage();
                this.streamHandlers.onClose();
              case 6:
              case "end":
                return _context41.stop();
            }
          }, _callee41, this);
        }));
        function streamResp(_x76, _x77, _x78) {
          return _streamResp.apply(this, arguments);
        }
        return streamResp;
      }()
    }, {
      key: "generateRespByType",
      value: function () {
        var _generateRespByType = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee42(e, t, i, s) {
          var r;
          return _regeneratorRuntime().wrap(function _callee42$(_context42) {
            while (1) switch (_context42.prev = _context42.next) {
              case 0:
                _context42.prev = 0;
                if (!i) {
                  _context42.next = 6;
                  break;
                }
                _context42.next = 4;
                return this.streamResp(e, t, s);
              case 4:
                _context42.next = 8;
                break;
              case 6:
                _context42.next = 8;
                return this.immediateResp(e, t, s);
              case 8:
                _context42.next = 13;
                break;
              case 10:
                _context42.prev = 10;
                _context42.t0 = _context42["catch"](0);
                (r = this._messages) == null || r.addNewErrorMessage("service"), console.log(_context42.t0);
              case 13:
              case "end":
                return _context42.stop();
            }
          }, _callee42, this, [[0, 10]]);
        }));
        function generateRespByType(_x81, _x82, _x83, _x84) {
          return _generateRespByType.apply(this, arguments);
        }
        return generateRespByType;
      }()
    }, {
      key: "generateResp",
      value: function () {
        var _generateResp = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee43(e, t, i) {
          var s, _yield$E$processReque5, r, o, a, l, c;
          return _regeneratorRuntime().wrap(function _callee43$(_context43) {
            while (1) switch (_context43.prev = _context43.next) {
              case 0:
                s = t[t.length - 1].text;
                _context43.next = 3;
                return E.processRequestInterceptor(this.deepChat, {
                  body: {
                    text: s
                  }
                });
              case 3:
                _yield$E$processReque5 = _context43.sent;
                r = _yield$E$processReque5.body;
                o = _yield$E$processReque5.error;
                a = !!this.stream;
                try {
                  if (o) E.displayError(e, new Error(o)), (a ? this.streamHandlers.onClose : this.completionsHandlers.onFinish)();else if (!r || !r.text) {
                    l = k.INVALID_MODEL_REQUEST({
                      body: r
                    }, !1);
                    console.error(l);
                    c = a ? this.streamHandlers.onClose : this.completionsHandlers.onFinish;
                    E.onInterceptorError(e, l, c);
                  } else this.generateRespByType(e, r.text, !!this.stream, i);
                } catch (l) {
                  this.unloadChat(l);
                }
              case 8:
              case "end":
                return _context43.stop();
            }
          }, _callee43, this);
        }));
        function generateResp(_x85, _x86, _x87) {
          return _generateResp.apply(this, arguments);
        }
        return generateResp;
      }()
    }, {
      key: "callServiceAPI",
      value: function () {
        var _callServiceAPI2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee44(e, t) {
          var i, s;
          return _regeneratorRuntime().wrap(function _callee44$(_context44) {
            while (1) switch (_context44.prev = _context44.next) {
              case 0:
                if (this._isModelLoaded) {
                  _context44.next = 7;
                  break;
                }
                if (!this._loadOnFirstMessage) {
                  _context44.next = 6;
                  break;
                }
                _context44.next = 4;
                return this.init();
              case 4:
                _context44.next = 7;
                break;
              case 6:
                return _context44.abrupt("return");
              case 7:
                !T.chat || this._isModelLoading || ((i = this._webModel.introMessage) != null && i.removeAfterMessage && ((s = this._removeIntro) == null || s.call(this)), e.addLoadingMessage(), this.generateResp(e, t, T.chat));
              case 8:
              case "end":
                return _context44.stop();
            }
          }, _callee44, this);
        }));
        function callServiceAPI(_x88, _x89) {
          return _callServiceAPI2.apply(this, arguments);
        }
        return callServiceAPI;
      }()
    }, {
      key: "canSubmit",
      value: function canSubmit(e) {
        return !(e != null && e.trim()) || this._isModelLoading ? !1 : this._loadOnFirstMessage ? !0 : !!this._isModelLoaded;
      }
    }, {
      key: "isWebModel",
      value: function isWebModel() {
        return !0;
      }
    }], [{
      key: "setUpHistory",
      value: function setUpHistory(e, t) {
        t.forEach(function (i, s) {
          if (i.role === y.USER_ROLE && i.text) {
            var r = t[s + 1];
            r != null && r.text && r.role !== y.USER_ROLE && e.push([i.text, r.text]);
          }
        });
      }
    }, {
      key: "processResponse",
      value: function () {
        var _processResponse = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee45(e, t, i) {
          var a, l, s, r, o, d;
          return _regeneratorRuntime().wrap(function _callee45$(_context45) {
            while (1) switch (_context45.prev = _context45.next) {
              case 0:
                _context45.next = 2;
                return (a = e.responseInterceptor) == null ? void 0 : a.call(e, i);
              case 2:
                _context45.t0 = _context45.sent;
                if (_context45.t0) {
                  _context45.next = 5;
                  break;
                }
                _context45.t0 = i;
              case 5:
                s = _context45.t0;
                if (!((l = e.connect) != null && l.stream && Array.isArray(s) && s.length > 1)) {
                  _context45.next = 9;
                  break;
                }
                console.error(k.INVALID_STREAM_ARRAY_RESPONSE);
                return _context45.abrupt("return");
              case 9:
                r = Array.isArray(s) ? s : [s], o = r.find(function (c) {
                  return typeof c.error == "string";
                });
                if (!o) {
                  _context45.next = 15;
                  break;
                }
                E.displayError(t, new Error(o.error));
                return _context45.abrupt("return");
              case 15:
                if (!r.find(function (d) {
                  return !d || !d.text;
                })) {
                  _context45.next = 19;
                  break;
                }
                d = k.INVALID_MODEL_RESPONSE(i, !!e.responseInterceptor, s);
                E.displayError(t, new Error(d));
                return _context45.abrupt("return");
              case 19:
                return _context45.abrupt("return", r);
              case 20:
              case "end":
                return _context45.stop();
            }
          }, _callee45);
        }));
        function processResponse(_x90, _x91, _x92) {
          return _processResponse.apply(this, arguments);
        }
        return processResponse;
      }()
    }, {
      key: "clearAllCache",
      value: function clearAllCache() {
        T.clearCache("webllm/model"), T.clearCache("webllm/wasm");
      }
    }, {
      key: "clearCache",
      value: function clearCache(e) {
        caches.open(e).then(function (t) {
          t.keys().then(function (i) {
            i.forEach(function (s) {
              t["delete"](s);
            });
          });
        });
      }
    }]);
  }(nt);
T.GENERIC_ERROR = "Error, please check the [troubleshooting](https://deepchat.dev/docs/webModel#troubleshooting) section of documentation for help.", T.MULTIPLE_MODELS_ERROR = "Cannot run multiple web models", T.WEB_LLM_NOT_FOUND_ERROR = "WebLLM module not found", T.DEFAULT_MODEL = "Llama-2-7b-chat-hf-q4f32_1", T.MODULE_SEARCH_LIMIT_S = 5;
var si = T;
var xi = /*#__PURE__*/function () {
  function xi() {
    _classCallCheck(this, xi);
  }
  return _createClass(xi, null, [{
    key: "buildHeaders",
    value: function buildHeaders(e) {
      return {
        Authorization: "Bearer ".concat(e),
        "Content-Type": "application/json"
        // bigcode/santacoder expects this so adding just-in-case
      };
    }
    // prettier-ignore
  }, {
    key: "handleVerificationResult",
    value: function handleVerificationResult(e, t, i, s) {
      var r = e;
      Array.isArray(r.error) && r.error[0] === "Error in `parameters`: field required" ? i(t) : s(k.INVALID_KEY);
    }
  }, {
    key: "buildKeyVerificationDetails",
    value: function buildKeyVerificationDetails() {
      return {
        url: "https://api-inference.huggingface.co/models/gpt2",
        method: "POST",
        handleVerificationResult: xi.handleVerificationResult
      };
    }
  }]);
}();
var Jt = /*#__PURE__*/function (_G) {
  // prettier-ignore
  function Jt(e, t, i, s, r, o) {
    var _this24;
    _classCallCheck(this, Jt);
    _this24 = _callSuper(this, Jt, [e, xi.buildKeyVerificationDetails(), xi.buildHeaders, r, o]), _this24.insertKeyPlaceholderText = "Hugging Face Token", _this24.keyHelpUrl = "https://huggingface.co/settings/tokens", _this24.introPanelMarkUp = "\n    <div style=\"width: 100%; text-align: center; margin-left: -10px\"><b>Hugging Face</b></div>\n    <p>First message may take an extented amount of time to complete as the model needs to be initialized.</p>", _this24.permittedErrorPrefixes = ["Authorization header"], _this24.url = "".concat(Jt.URL_PREFIX).concat(i), _this24.textInputPlaceholderText = t, _typeof(s) == "object" && (s.model && (_this24.url = "".concat(Jt.URL_PREFIX).concat(s.model)), s.options && (_this24.rawBody.options = s.options), s.parameters && (_this24.rawBody.parameters = s.parameters));
    return _this24;
  }
  // prettier-ignore
  _inherits(Jt, _G);
  return _createClass(Jt, [{
    key: "preprocessBody",
    value: function preprocessBody(e, t, i) {
      var _s$options;
      var s = JSON.parse(JSON.stringify(e)),
        r = t[t.length - 1].text;
      if (r) return (_s$options = s.options) !== null && _s$options !== void 0 ? _s$options : s.options = {}, s.options.wait_for_model = !0, _objectSpread({
        inputs: r
      }, s);
    }
  }, {
    key: "callServiceAPI",
    value: function () {
      var _callServiceAPI3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee46(e, t, i) {
        var s;
        return _regeneratorRuntime().wrap(function _callee46$(_context46) {
          while (1) switch (_context46.prev = _context46.next) {
            case 0:
              if (this.connectSettings) {
                _context46.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              s = this.preprocessBody(this.rawBody, t, i);
              R.request(this, s, e);
            case 4:
            case "end":
              return _context46.stop();
          }
        }, _callee46, this);
      }));
      function callServiceAPI(_x93, _x94, _x95) {
        return _callServiceAPI3.apply(this, arguments);
      }
      return callServiceAPI;
    }()
  }]);
}(G);
Jt.URL_PREFIX = "https://api-inference.huggingface.co/models/";
var Ue = Jt;
var li = /*#__PURE__*/function (_Ue) {
  // prettier-ignore
  function li(e, t, i, s, r, o) {
    var _this25;
    _classCallCheck(this, li);
    _this25 = _callSuper(this, li, [e, t, i, s, r, o]), _this25.isTextInputDisabled = !0, _this25.canSendMessage = li.canSendFile;
    return _this25;
  }
  _inherits(li, _Ue);
  return _createClass(li, [{
    key: "preprocessBody",
    value: function preprocessBody(e, t, i) {
      return i[0];
    }
    // prettier-ignore
  }, {
    key: "callServiceAPI",
    value: function () {
      var _callServiceAPI4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee47(e, t, i) {
        return _regeneratorRuntime().wrap(function _callee47$(_context47) {
          while (1) switch (_context47.prev = _context47.next) {
            case 0:
              if (this.connectSettings) {
                _context47.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (i != null && i[0]) {
                _context47.next = 4;
                break;
              }
              throw new Error("No file was added");
            case 4:
              R.poll(this, i[0], e, !1);
            case 5:
            case "end":
              return _context47.stop();
          }
        }, _callee47, this);
      }));
      function callServiceAPI(_x96, _x97, _x98) {
        return _callServiceAPI4.apply(this, arguments);
      }
      return callServiceAPI;
    }()
  }], [{
    key: "canSendFile",
    value: function canSendFile(e, t) {
      return !!(t != null && t[0]);
    }
  }]);
}(Ue);
var Uo = /*#__PURE__*/function (_li) {
  // prettier-ignore
  function Uo(e) {
    _classCallCheck(this, Uo);
    var s, r, o;
    var t = (r = (s = e.directConnection) == null ? void 0 : s.huggingFace) == null ? void 0 : r.audioClassification,
      i = (o = e.directConnection) == null ? void 0 : o.huggingFace;
    return _callSuper(this, Uo, [e, "Attach an audio file", "ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition", t, i, {
      audio: {}
    }]);
  }
  _inherits(Uo, _li);
  return _createClass(Uo, [{
    key: "extractPollResultData",
    value: function () {
      var _extractPollResultData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee48(e) {
        var t;
        return _regeneratorRuntime().wrap(function _callee48$(_context48) {
          while (1) switch (_context48.prev = _context48.next) {
            case 0:
              if (!e.estimated_time) {
                _context48.next = 2;
                break;
              }
              return _context48.abrupt("return", {
                timeoutMS: (e.estimated_time + 1) * 1e3
              });
            case 2:
              if (!e.error) {
                _context48.next = 4;
                break;
              }
              throw e.error;
            case 4:
              return _context48.abrupt("return", {
                text: ((t = e[0]) == null ? void 0 : t.label) || ""
              });
            case 5:
            case "end":
              return _context48.stop();
          }
        }, _callee48);
      }));
      function extractPollResultData(_x99) {
        return _extractPollResultData.apply(this, arguments);
      }
      return extractPollResultData;
    }()
  }]);
}(li);
var jo = /*#__PURE__*/function (_li2) {
  function jo(e) {
    _classCallCheck(this, jo);
    var s, r, o;
    var t = (r = (s = e.directConnection) == null ? void 0 : s.huggingFace) == null ? void 0 : r.imageClassification,
      i = (o = e.directConnection) == null ? void 0 : o.huggingFace;
    return _callSuper(this, jo, [e, "Attach an image file", "google/vit-base-patch16-224", t, i, {
      images: {}
    }]);
  }
  _inherits(jo, _li2);
  return _createClass(jo, [{
    key: "extractPollResultData",
    value: function () {
      var _extractPollResultData2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee49(e) {
        var t;
        return _regeneratorRuntime().wrap(function _callee49$(_context49) {
          while (1) switch (_context49.prev = _context49.next) {
            case 0:
              if (!e.estimated_time) {
                _context49.next = 2;
                break;
              }
              return _context49.abrupt("return", {
                timeoutMS: (e.estimated_time + 1) * 1e3
              });
            case 2:
              if (!e.error) {
                _context49.next = 4;
                break;
              }
              throw e.error;
            case 4:
              return _context49.abrupt("return", {
                text: ((t = e[0]) == null ? void 0 : t.label) || ""
              });
            case 5:
            case "end":
              return _context49.stop();
          }
        }, _callee49);
      }));
      function extractPollResultData(_x100) {
        return _extractPollResultData2.apply(this, arguments);
      }
      return extractPollResultData;
    }()
  }]);
}(li);
var ci = "data:image/png;base64,";
var Te = /*#__PURE__*/function () {
  function Te() {
    _classCallCheck(this, Te);
  }
  return _createClass(Te, null, [{
    key: "buildHeaders",
    value: function buildHeaders(e) {
      return {
        Authorization: "Bearer ".concat(e),
        "Content-Type": "application/json"
      };
    }
    // prettier-ignore
  }, {
    key: "handleVerificationResult",
    value: function handleVerificationResult(e, t, i, s) {
      e.message ? s(k.INVALID_KEY) : i(t);
    }
  }, {
    key: "buildKeyVerificationDetails",
    value: function buildKeyVerificationDetails() {
      return {
        url: "https://api.stability.ai/v1/engines/list",
        method: "GET",
        handleVerificationResult: Te.handleVerificationResult
      };
    }
  }]);
}();
var qi = /*#__PURE__*/function (_G2) {
  // prettier-ignore
  function qi(e, t, i, s, r) {
    var _this26;
    _classCallCheck(this, qi);
    _this26 = _callSuper(this, qi, [e, t, i, s, r]), _this26.insertKeyPlaceholderText = "Stability AI API Key", _this26.keyHelpUrl = "https://platform.stability.ai/docs/getting-started/authentication", _this26.permittedErrorPrefixes = ["Incorrect", "invalid_"];
    return _this26;
  }
  _inherits(qi, _G2);
  return _createClass(qi);
}(G);
var wi = /*#__PURE__*/function (_qi) {
  function wi(e) {
    var _this27;
    _classCallCheck(this, wi);
    var o;
    var t = JSON.parse(JSON.stringify(e.directConnection)),
      i = t == null ? void 0 : t.stabilityAI,
      s = {
        images: {
          files: {
            acceptedFormats: ".png",
            maxNumberOfFiles: 1
          }
        }
      };
    _this27 = _callSuper(this, wi, [e, Te.buildKeyVerificationDetails(), Te.buildHeaders, i, s]), _this27.url = "https://api.stability.ai/v1/generation/esrgan-v1-x2plus/image-to-image/upscale", _this27.textInputPlaceholderText = "Describe image changes", _this27.introPanelMarkUp = "\n    <div style=\"width: 100%; text-align: center; margin-left: -10px\"><b>Stability AI</b></div>\n    <div style=\"width: 100%; text-align: center; margin-left: -10px; margin-top: 5px\"><b>Image to Image Upscale</b></div>\n    <p>Upload an image to generate a new one with higher resolution.</p>\n    <p>Click <a href=\"https://platform.stability.ai/\">here</a> for more info.</p>";
    var r = (o = t == null ? void 0 : t.stabilityAI) == null ? void 0 : o.imageToImageUpscale;
    _typeof(r) == "object" && (r.engine_id && (_this27.url = "https://api.stability.ai/v1/generation/".concat(r.engine_id, "/image-to-image/upscale")), wi.cleanConfig(r), Object.assign(_this27.rawBody, r)), _this27.canSendMessage = wi.canSendFileMessage;
    return _this27;
  }
  _inherits(wi, _qi);
  return _createClass(wi, [{
    key: "createFormDataBody",
    value: function createFormDataBody(e, t) {
      var i = new FormData();
      return i.append("image", t), Object.keys(e).forEach(function (s) {
        i.append(s, String(e[s]));
      }), i;
    }
    // prettier-ignore
  }, {
    key: "callServiceAPI",
    value: function () {
      var _callServiceAPI5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee50(e, t, i) {
        var s;
        return _regeneratorRuntime().wrap(function _callee50$(_context50) {
          while (1) switch (_context50.prev = _context50.next) {
            case 0:
              if (this.connectSettings) {
                _context50.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (i) {
                _context50.next = 4;
                break;
              }
              throw new Error("Image was not found");
            case 4:
              s = this.createFormDataBody(this.rawBody, i[0]);
              E.tempRemoveContentHeader(this.connectSettings, R.request.bind(this, this, s, e), !1);
            case 6:
            case "end":
              return _context50.stop();
          }
        }, _callee50, this);
      }));
      function callServiceAPI(_x101, _x102, _x103) {
        return _callServiceAPI5.apply(this, arguments);
      }
      return callServiceAPI;
    }()
  }, {
    key: "extractResultData",
    value: function () {
      var _extractResultData2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee51(e) {
        return _regeneratorRuntime().wrap(function _callee51$(_context51) {
          while (1) switch (_context51.prev = _context51.next) {
            case 0:
              if (!e.message) {
                _context51.next = 2;
                break;
              }
              throw e.message;
            case 2:
              return _context51.abrupt("return", {
                files: e.artifacts.map(function (i) {
                  return {
                    src: "".concat(ci).concat(i.base64),
                    type: "image"
                  };
                })
              });
            case 3:
            case "end":
              return _context51.stop();
          }
        }, _callee51);
      }));
      function extractResultData(_x104) {
        return _extractResultData2.apply(this, arguments);
      }
      return extractResultData;
    }()
  }], [{
    key: "cleanConfig",
    value: function cleanConfig(e) {
      delete e.engine_id;
    }
  }, {
    key: "canSendFileMessage",
    value: function canSendFileMessage(e, t) {
      return !!(t != null && t[0]);
    }
  }]);
}(qi);
var Ai = /*#__PURE__*/function (_qi2) {
  function Ai(e) {
    var _this28;
    _classCallCheck(this, Ai);
    var o;
    var t = JSON.parse(JSON.stringify(e.directConnection)),
      i = t == null ? void 0 : t.stabilityAI,
      s = {
        images: {
          files: {
            acceptedFormats: ".png",
            maxNumberOfFiles: 2
          }
        }
      };
    _this28 = _callSuper(this, Ai, [e, Te.buildKeyVerificationDetails(), Te.buildHeaders, i, s]), _this28.url = "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/image-to-image/masking", _this28._maskSource = "MASK_IMAGE_WHITE", _this28.textInputPlaceholderText = "Describe image changes", _this28.introPanelMarkUp = "\n    <div style=\"width: 100%; text-align: center; margin-left: -10px\"><b>Stability AI</b></div>\n    <div style=\"width: 100%; text-align: center; margin-left: -10px; margin-top: 5px\"><b>Image to Image Masking</b></div>\n    <p>Upload an image, its mask image to create a new one based on the changes you have described for the mask area.</p>\n    <p>Click <a href=\"https://platform.stability.ai/\">here</a> for more info.</p>";
    var r = (o = t == null ? void 0 : t.stabilityAI) == null ? void 0 : o.imageToImageMasking;
    _typeof(r) == "object" && (r.engine_id && (_this28.url = "https://api.stability.ai/v1/generation/".concat(r.engine_id, "/image-to-image/masking")), r.weight !== void 0 && r.weight !== null && (_this28._imageWeight = r.weight), r.mask_source !== void 0 && r.mask_source !== null && (_this28._maskSource = r.mask_source), Ai.cleanConfig(r), Object.assign(_this28.rawBody, r)), _this28.canSendMessage = Ai.canSendFileTextMessage;
    return _this28;
  }
  _inherits(Ai, _qi2);
  return _createClass(Ai, [{
    key: "createFormDataBody",
    value: function createFormDataBody(e, t, i, s) {
      var r = new FormData();
      return r.append("init_image", t), r.append("mask_source", String(this._maskSource)), r.append("mask_image", i), s && s !== "" && r.append("text_prompts[0][text]", s), this._imageWeight !== void 0 && this._imageWeight !== null && r.append("text_prompts[0][weight]", String(this._imageWeight)), Object.keys(e).forEach(function (o) {
        r.append(o, String(e[o]));
      }), r.get("weight") === void 0 && r.append("weight", String(1)), r;
    }
    // prettier-ignore
  }, {
    key: "callServiceAPI",
    value: function () {
      var _callServiceAPI6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee52(e, t, i) {
        var o, a, s, r;
        return _regeneratorRuntime().wrap(function _callee52$(_context52) {
          while (1) switch (_context52.prev = _context52.next) {
            case 0:
              if (this.connectSettings) {
                _context52.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (!(!i || !i[0] || !i[1])) {
                _context52.next = 4;
                break;
              }
              throw new Error("Image was not found");
            case 4:
              s = (a = (o = t[t.length - 1]) == null ? void 0 : o.text) == null ? void 0 : a.trim(), r = this.createFormDataBody(this.rawBody, i[0], i[1], s);
              E.tempRemoveContentHeader(this.connectSettings, R.request.bind(this, this, r, e), !1);
            case 6:
            case "end":
              return _context52.stop();
          }
        }, _callee52, this);
      }));
      function callServiceAPI(_x105, _x106, _x107) {
        return _callServiceAPI6.apply(this, arguments);
      }
      return callServiceAPI;
    }()
  }, {
    key: "extractResultData",
    value: function () {
      var _extractResultData3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee53(e) {
        return _regeneratorRuntime().wrap(function _callee53$(_context53) {
          while (1) switch (_context53.prev = _context53.next) {
            case 0:
              if (!e.message) {
                _context53.next = 2;
                break;
              }
              throw e.message;
            case 2:
              return _context53.abrupt("return", {
                files: e.artifacts.map(function (i) {
                  return {
                    src: "".concat(ci).concat(i.base64),
                    type: "image"
                  };
                })
              });
            case 3:
            case "end":
              return _context53.stop();
          }
        }, _callee53);
      }));
      function extractResultData(_x108) {
        return _extractResultData3.apply(this, arguments);
      }
      return extractResultData;
    }()
  }], [{
    key: "cleanConfig",
    value: function cleanConfig(e) {
      delete e.engine_id, delete e.weight;
    }
  }, {
    key: "canSendFileTextMessage",
    value: function canSendFileTextMessage(e, t) {
      return !!(t != null && t[0]) && !!(e && e.trim() !== "");
    }
  }]);
}(qi);
var qo = /*#__PURE__*/function (_li3) {
  function qo(e) {
    _classCallCheck(this, qo);
    var s, r, o;
    var t = (r = (s = e.directConnection) == null ? void 0 : s.huggingFace) == null ? void 0 : r.audioSpeechRecognition,
      i = (o = e.directConnection) == null ? void 0 : o.huggingFace;
    return _callSuper(this, qo, [e, "Attach an audio file", "facebook/wav2vec2-large-960h-lv60-self", t, i, {
      audio: {}
    }]);
  }
  _inherits(qo, _li3);
  return _createClass(qo, [{
    key: "extractPollResultData",
    value: function () {
      var _extractPollResultData3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee54(e) {
        return _regeneratorRuntime().wrap(function _callee54$(_context54) {
          while (1) switch (_context54.prev = _context54.next) {
            case 0:
              if (!e.estimated_time) {
                _context54.next = 2;
                break;
              }
              return _context54.abrupt("return", {
                timeoutMS: (e.estimated_time + 1) * 1e3
              });
            case 2:
              if (!e.error) {
                _context54.next = 4;
                break;
              }
              throw e.error;
            case 4:
              return _context54.abrupt("return", {
                text: e.text || ""
              });
            case 5:
            case "end":
              return _context54.stop();
          }
        }, _callee54);
      }));
      function extractPollResultData(_x109) {
        return _extractPollResultData3.apply(this, arguments);
      }
      return extractPollResultData;
    }()
  }]);
}(li);
var Ho = /*#__PURE__*/function (_Ue2) {
  function Ho(e) {
    _classCallCheck(this, Ho);
    var s, r, o;
    var t = (r = (s = e.directConnection) == null ? void 0 : s.huggingFace) == null ? void 0 : r.textGeneration,
      i = (o = e.directConnection) == null ? void 0 : o.huggingFace;
    return _callSuper(this, Ho, [e, "Once upon a time", "gpt2", t, i]);
  }
  _inherits(Ho, _Ue2);
  return _createClass(Ho, [{
    key: "extractResultData",
    value: function () {
      var _extractResultData4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee55(e) {
        var t;
        return _regeneratorRuntime().wrap(function _callee55$(_context55) {
          while (1) switch (_context55.prev = _context55.next) {
            case 0:
              if (!e.error) {
                _context55.next = 2;
                break;
              }
              throw e.error;
            case 2:
              return _context55.abrupt("return", {
                text: ((t = e[0]) == null ? void 0 : t.generated_text) || ""
              });
            case 3:
            case "end":
              return _context55.stop();
          }
        }, _callee55);
      }));
      function extractResultData(_x110) {
        return _extractResultData4.apply(this, arguments);
      }
      return extractResultData;
    }()
  }]);
}(Ue);
var zo = /*#__PURE__*/function (_Ue3) {
  function zo(e) {
    var _this29;
    _classCallCheck(this, zo);
    var s, r, o;
    var t = (r = (s = e.directConnection) == null ? void 0 : s.huggingFace) == null ? void 0 : r.questionAnswer,
      i = (o = e.directConnection) == null ? void 0 : o.huggingFace;
    _this29 = _callSuper(this, zo, [e, "Ask a question", "bert-large-uncased-whole-word-masking-finetuned-squad", t, i]), _this29.permittedErrorPrefixes = ["Authorization header", "Error in"], _this29.context = t.context;
    return _this29;
  }
  _inherits(zo, _Ue3);
  return _createClass(zo, [{
    key: "preprocessBody",
    value: function preprocessBody(e, t) {
      var i = t[t.length - 1].text;
      if (i) return {
        inputs: {
          question: i,
          context: this.context,
          options: {
            wait_for_model: !0
          }
        }
      };
    }
  }, {
    key: "extractResultData",
    value: function () {
      var _extractResultData5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee56(e) {
        return _regeneratorRuntime().wrap(function _callee56$(_context56) {
          while (1) switch (_context56.prev = _context56.next) {
            case 0:
              if (!e.error) {
                _context56.next = 2;
                break;
              }
              throw e.error;
            case 2:
              return _context56.abrupt("return", {
                text: e.answer || ""
              });
            case 3:
            case "end":
              return _context56.stop();
          }
        }, _callee56);
      }));
      function extractResultData(_x111) {
        return _extractResultData5.apply(this, arguments);
      }
      return extractResultData;
    }()
  }]);
}(Ue);
var Go = /*#__PURE__*/function (_Ue4) {
  function Go(e) {
    _classCallCheck(this, Go);
    var s, r, o;
    var t = (r = (s = e.directConnection) == null ? void 0 : s.huggingFace) == null ? void 0 : r.summarization,
      i = (o = e.directConnection) == null ? void 0 : o.huggingFace;
    return _callSuper(this, Go, [e, "Insert text to summarize", "facebook/bart-large-cnn", t, i]);
  }
  _inherits(Go, _Ue4);
  return _createClass(Go, [{
    key: "extractResultData",
    value: function () {
      var _extractResultData6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee57(e) {
        var t;
        return _regeneratorRuntime().wrap(function _callee57$(_context57) {
          while (1) switch (_context57.prev = _context57.next) {
            case 0:
              if (!e.error) {
                _context57.next = 2;
                break;
              }
              throw e.error;
            case 2:
              return _context57.abrupt("return", {
                text: ((t = e[0]) == null ? void 0 : t.summary_text) || ""
              });
            case 3:
            case "end":
              return _context57.stop();
          }
        }, _callee57);
      }));
      function extractResultData(_x112) {
        return _extractResultData6.apply(this, arguments);
      }
      return extractResultData;
    }()
  }]);
}(Ue);
var Vo = /*#__PURE__*/function (_Ue5) {
  function Vo(e) {
    var _this30$maxMessages;
    var _this30;
    _classCallCheck(this, Vo);
    var s, r, o;
    var t = (r = (s = e.directConnection) == null ? void 0 : s.huggingFace) == null ? void 0 : r.conversation,
      i = (o = e.directConnection) == null ? void 0 : o.huggingFace;
    _this30 = _callSuper(this, Vo, [e, "Ask me anything!", "facebook/blenderbot-400M-distill", t, i]), (_this30$maxMessages = _this30.maxMessages) !== null && _this30$maxMessages !== void 0 ? _this30$maxMessages : _this30.maxMessages = -1;
    return _this30;
  }
  // prettier-ignore
  _inherits(Vo, _Ue5);
  return _createClass(Vo, [{
    key: "processMessages",
    value: function processMessages(e) {
      var t = e.filter(function (a) {
          return a.text;
        }),
        i = t[t.length - 1].text,
        s = t.slice(0, t.length - 1);
      if (!i) return;
      var r = s.filter(function (a) {
          return a.role === "user";
        }).map(function (a) {
          return a.text;
        }),
        o = s.filter(function (a) {
          return a.role === "ai";
        }).map(function (a) {
          return a.text;
        });
      return {
        past_user_inputs: r,
        generated_responses: o,
        mostRecentMessageText: i
      };
    }
    // prettier-ignore
  }, {
    key: "preprocessBody",
    value: function preprocessBody(e, t) {
      var _i$options;
      var i = JSON.parse(JSON.stringify(e)),
        s = this.processMessages(t);
      if (s) return (_i$options = i.options) !== null && _i$options !== void 0 ? _i$options : i.options = {}, i.options.wait_for_model = !0, _objectSpread({
        inputs: {
          past_user_inputs: s.past_user_inputs,
          generated_responses: s.generated_responses,
          text: s.mostRecentMessageText
        }
      }, i);
    }
  }, {
    key: "extractResultData",
    value: function () {
      var _extractResultData7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee58(e) {
        return _regeneratorRuntime().wrap(function _callee58$(_context58) {
          while (1) switch (_context58.prev = _context58.next) {
            case 0:
              if (!e.error) {
                _context58.next = 2;
                break;
              }
              throw e.error;
            case 2:
              return _context58.abrupt("return", {
                text: e.generated_text || ""
              });
            case 3:
            case "end":
              return _context58.stop();
          }
        }, _callee58);
      }));
      function extractResultData(_x113) {
        return _extractResultData7.apply(this, arguments);
      }
      return extractResultData;
    }()
  }]);
}(Ue);
var Ti = /*#__PURE__*/function (_qi3) {
  function Ti(e) {
    var _this31;
    _classCallCheck(this, Ti);
    var o;
    var t = JSON.parse(JSON.stringify(e.directConnection)),
      i = t.stabilityAI,
      s = {
        images: {
          files: {
            acceptedFormats: ".png",
            maxNumberOfFiles: 1
          }
        }
      };
    _this31 = _callSuper(this, Ti, [e, Te.buildKeyVerificationDetails(), Te.buildHeaders, i, s]), _this31.url = "https://api.stability.ai/v1/generation/stable-diffusion-v1-6/image-to-image", _this31.textInputPlaceholderText = "Describe image changes", _this31.introPanelMarkUp = "\n    <div style=\"width: 100%; text-align: center; margin-left: -10px\"><b>Stability AI: Image to Image</b></div>\n    <p>Upload an image to create a new one with the changes you have described.</p>\n    <p>Click <a href=\"https://platform.stability.ai/\">here</a> for more info.</p>";
    var r = (o = t.stabilityAI) == null ? void 0 : o.imageToImage;
    _typeof(r) == "object" && (r.engine_id && (_this31.url = "https://api.stability.ai/v1/generation/".concat(r.engine_id, "/text-to-image")), r.weight !== void 0 && r.weight !== null && (_this31._imageWeight = r.weight), Ti.cleanConfig(r), Object.assign(_this31.rawBody, r)), _this31.canSendMessage = Ti.canSendFileTextMessage;
    return _this31;
  }
  _inherits(Ti, _qi3);
  return _createClass(Ti, [{
    key: "createFormDataBody",
    value: function createFormDataBody(e, t, i) {
      var s = new FormData();
      return s.append("init_image", t), i && i !== "" && s.append("text_prompts[0][text]", i), this._imageWeight !== void 0 && this._imageWeight !== null && s.append("text_prompts[0][weight]", String(this._imageWeight)), Object.keys(e).forEach(function (r) {
        s.append(r, String(e[r]));
      }), s.get("weight") === void 0 && s.append("weight", String(1)), s;
    }
    // prettier-ignore
  }, {
    key: "callServiceAPI",
    value: function () {
      var _callServiceAPI7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee59(e, t, i) {
        var o, a, s, r;
        return _regeneratorRuntime().wrap(function _callee59$(_context59) {
          while (1) switch (_context59.prev = _context59.next) {
            case 0:
              if (this.connectSettings) {
                _context59.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (i) {
                _context59.next = 4;
                break;
              }
              throw new Error("Image was not found");
            case 4:
              s = (a = (o = t[t.length - 1]) == null ? void 0 : o.text) == null ? void 0 : a.trim(), r = this.createFormDataBody(this.rawBody, i[0], s);
              E.tempRemoveContentHeader(this.connectSettings, R.request.bind(this, this, r, e), !1);
            case 6:
            case "end":
              return _context59.stop();
          }
        }, _callee59, this);
      }));
      function callServiceAPI(_x114, _x115, _x116) {
        return _callServiceAPI7.apply(this, arguments);
      }
      return callServiceAPI;
    }()
  }, {
    key: "extractResultData",
    value: function () {
      var _extractResultData8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee60(e) {
        return _regeneratorRuntime().wrap(function _callee60$(_context60) {
          while (1) switch (_context60.prev = _context60.next) {
            case 0:
              if (!e.message) {
                _context60.next = 2;
                break;
              }
              throw e.message;
            case 2:
              return _context60.abrupt("return", {
                files: e.artifacts.map(function (i) {
                  return {
                    src: "".concat(ci).concat(i.base64),
                    type: "image"
                  };
                })
              });
            case 3:
            case "end":
              return _context60.stop();
          }
        }, _callee60);
      }));
      function extractResultData(_x117) {
        return _extractResultData8.apply(this, arguments);
      }
      return extractResultData;
    }()
  }], [{
    key: "cleanConfig",
    value: function cleanConfig(e) {
      delete e.engine_id, delete e.weight;
    }
  }, {
    key: "canSendFileTextMessage",
    value: function canSendFileTextMessage(e, t) {
      return !!(t != null && t[0]) && !!(e && e.trim() !== "");
    }
  }]);
}(qi);
var Ko = /*#__PURE__*/function (_Ue6) {
  function Ko(e) {
    _classCallCheck(this, Ko);
    var s, r, o;
    var t = (r = (s = e.directConnection) == null ? void 0 : s.huggingFace) == null ? void 0 : r.translation,
      i = (o = e.directConnection) == null ? void 0 : o.huggingFace;
    return _callSuper(this, Ko, [e, "Insert text to translate", "Helsinki-NLP/opus-tatoeba-en-ja", t, i]);
  }
  _inherits(Ko, _Ue6);
  return _createClass(Ko, [{
    key: "extractResultData",
    value: function () {
      var _extractResultData9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee61(e) {
        var t;
        return _regeneratorRuntime().wrap(function _callee61$(_context61) {
          while (1) switch (_context61.prev = _context61.next) {
            case 0:
              if (!e.error) {
                _context61.next = 2;
                break;
              }
              throw e.error;
            case 2:
              return _context61.abrupt("return", {
                text: ((t = e[0]) == null ? void 0 : t.translation_text) || ""
              });
            case 3:
            case "end":
              return _context61.stop();
          }
        }, _callee61);
      }));
      function extractResultData(_x118) {
        return _extractResultData9.apply(this, arguments);
      }
      return extractResultData;
    }()
  }]);
}(Ue);
var Ci = /*#__PURE__*/function (_qi4) {
  function Ci(e) {
    var _this32;
    _classCallCheck(this, Ci);
    var r;
    var t = JSON.parse(JSON.stringify(e.directConnection)),
      i = t.stabilityAI;
    _this32 = _callSuper(this, Ci, [e, Te.buildKeyVerificationDetails(), Te.buildHeaders, i]), _this32.url = "https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image", _this32.textInputPlaceholderText = "Describe an image", _this32.introPanelMarkUp = "\n    <div style=\"width: 100%; text-align: center; margin-left: -10px\"><b>Stability AI: Text to Image</b></div>\n    <p>Insert text to generate an image.</p>\n    <p>Click <a href=\"https://platform.stability.ai/\">here</a> for more info.</p>";
    var s = (r = t.stabilityAI) == null ? void 0 : r.textToImage;
    _typeof(s) == "object" && (s.engine_id && (_this32.url = "https://api.stability.ai/v1/generation/".concat(s.engine_id, "/text-to-image")), s.weight !== void 0 && s.weight !== null && (_this32._imageWeight = s.weight), Ci.cleanConfig(s), Object.assign(_this32.rawBody, s)), _this32.canSendMessage = Ci.canSendTextMessage;
    return _this32;
  }
  _inherits(Ci, _qi4);
  return _createClass(Ci, [{
    key: "preprocessBody",
    value: function preprocessBody(e, t) {
      var i = JSON.parse(JSON.stringify(e)),
        s = {
          text: t
        };
      return this._imageWeight && (s.weight = this._imageWeight), i.text_prompts = [s], i;
    }
  }, {
    key: "callServiceAPI",
    value: function () {
      var _callServiceAPI8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee62(e, t) {
        var i;
        return _regeneratorRuntime().wrap(function _callee62$(_context62) {
          while (1) switch (_context62.prev = _context62.next) {
            case 0:
              if (this.connectSettings) {
                _context62.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              i = this.preprocessBody(this.rawBody, t[t.length - 1].text);
              R.request(this, i, e);
            case 4:
            case "end":
              return _context62.stop();
          }
        }, _callee62, this);
      }));
      function callServiceAPI(_x119, _x120) {
        return _callServiceAPI8.apply(this, arguments);
      }
      return callServiceAPI;
    }()
  }, {
    key: "extractResultData",
    value: function () {
      var _extractResultData10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee63(e) {
        return _regeneratorRuntime().wrap(function _callee63$(_context63) {
          while (1) switch (_context63.prev = _context63.next) {
            case 0:
              if (!e.message) {
                _context63.next = 2;
                break;
              }
              throw e.message;
            case 2:
              return _context63.abrupt("return", {
                files: e.artifacts.map(function (i) {
                  return {
                    src: "".concat(ci).concat(i.base64),
                    type: "image"
                  };
                })
              });
            case 3:
            case "end":
              return _context63.stop();
          }
        }, _callee63);
      }));
      function extractResultData(_x121) {
        return _extractResultData10.apply(this, arguments);
      }
      return extractResultData;
    }()
  }], [{
    key: "cleanConfig",
    value: function cleanConfig(e) {
      delete e.engine_id, delete e.weight;
    }
  }, {
    key: "canSendTextMessage",
    value: function canSendTextMessage(e) {
      return !!(e && e.trim() !== "");
    }
  }]);
}(qi);
var $o = /*#__PURE__*/function (_Ue7) {
  function $o(e) {
    var _this33;
    _classCallCheck(this, $o);
    var s, r, o;
    var t = (r = (s = e.directConnection) == null ? void 0 : s.huggingFace) == null ? void 0 : r.fillMask,
      i = (o = e.directConnection) == null ? void 0 : o.huggingFace;
    _this33 = _callSuper(this, $o, [e, "The goal of life is [MASK].", "bert-base-uncased", t, i]), _this33.introPanelMarkUp = "\n    <div style=\"width: 100%; text-align: center; margin-left: -10px\"><b>Hugging Face</b></div>\n    <p>Insert a sentence with the word [MASK] and the model will try to fill it for you. E.g. I want [MASK].</p>\n    <p>First message may take an extented amount of time to complete as the model needs to be initialized.</p>", _this33.permittedErrorPrefixes = ["Authorization header", "No mask_token"];
    return _this33;
  }
  _inherits($o, _Ue7);
  return _createClass($o, [{
    key: "extractResultData",
    value: function () {
      var _extractResultData11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee64(e) {
        var t;
        return _regeneratorRuntime().wrap(function _callee64$(_context64) {
          while (1) switch (_context64.prev = _context64.next) {
            case 0:
              if (!e.error) {
                _context64.next = 2;
                break;
              }
              throw e.error;
            case 2:
              return _context64.abrupt("return", {
                text: ((t = e[0]) == null ? void 0 : t.sequence) || ""
              });
            case 3:
            case "end":
              return _context64.stop();
          }
        }, _callee64);
      }));
      function extractResultData(_x122) {
        return _extractResultData11.apply(this, arguments);
      }
      return extractResultData;
    }()
  }]);
}(Ue);
var Xt = /*#__PURE__*/function () {
  function Xt() {
    _classCallCheck(this, Xt);
  }
  return _createClass(Xt, null, [{
    key: "buildHeaders",
    value: function buildHeaders(e) {
      return {
        Authorization: "Bearer ".concat(e),
        "Content-Type": "application/json"
      };
    }
    // prettier-ignore
  }, {
    key: "handleVerificationResult",
    value: function handleVerificationResult(e, t, i, s) {
      var r = e;
      r.error ? r.error.code === "invalid_api_key" ? s(k.INVALID_KEY) : s(k.CONNECTION_FAILED) : i(t);
    }
  }, {
    key: "buildKeyVerificationDetails",
    value: function buildKeyVerificationDetails() {
      return {
        url: "https://api.openai.com/v1/models",
        method: "GET",
        handleVerificationResult: Xt.handleVerificationResult
      };
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "directFetch",
    value: function () {
      var _directFetch = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee65(e, t, i) {
        var s,
          r,
          _args65 = arguments;
        return _regeneratorRuntime().wrap(function _callee65$(_context65) {
          while (1) switch (_context65.prev = _context65.next) {
            case 0:
              s = _args65.length > 3 && _args65[3] !== undefined ? _args65[3] : !0;
              e.connectSettings.method = i;
              _context65.next = 4;
              return E.fetch(e, e.connectSettings.headers, s, t).then(function (o) {
                return E.processResponseByType(o);
              });
            case 4:
              r = _context65.sent;
              if (!r.error) {
                _context65.next = 7;
                break;
              }
              throw r.error.message;
            case 7:
              return _context65.abrupt("return", r);
            case 8:
            case "end":
              return _context65.stop();
          }
        }, _callee65);
      }));
      function directFetch(_x123, _x124, _x125) {
        return _directFetch.apply(this, arguments);
      }
      return directFetch;
    }()
  }]);
}();
Xt.FUNCTION_TOOL_RESP_ERROR = "Response object must either be {response: string}[] for each individual function or {text: string} for a direct response, see https://deepchat.dev/docs/directConnection/OpenAI#FunctionHandler.", Xt.FUNCTION_TOOL_RESP_ARR_ERROR = "Arrays are not accepted in handler responses";
var L = Xt;
var ne = /*#__PURE__*/function () {
  function ne() {
    _classCallCheck(this, ne);
  }
  return _createClass(ne, null, [{
    key: "storeFiles",
    value: function () {
      var _storeFiles = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee67(e, t, i, s) {
        var r, o, a, l;
        return _regeneratorRuntime().wrap(function _callee67$(_context67) {
          while (1) switch (_context67.prev = _context67.next) {
            case 0:
              r = e.connectSettings.headers;
              if (r) {
                _context67.next = 3;
                break;
              }
              return _context67.abrupt("return");
            case 3:
              e.url = s;
              o = r[E.CONTENT_TYPE];
              delete r[E.CONTENT_TYPE];
              a = i.map(/*#__PURE__*/function () {
                var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee66(l) {
                  var c;
                  return _regeneratorRuntime().wrap(function _callee66$(_context66) {
                    while (1) switch (_context66.prev = _context66.next) {
                      case 0:
                        c = new FormData();
                        return _context66.abrupt("return", (c.append("purpose", "assistants"), c.append("file", l), new Promise(function (d) {
                          d(L.directFetch(e, c, "POST", !1));
                        })));
                      case 2:
                      case "end":
                        return _context66.stop();
                    }
                  }, _callee66);
                }));
                return function (_x130) {
                  return _ref16.apply(this, arguments);
                };
              }());
              _context67.prev = 7;
              _context67.next = 10;
              return Promise.all(a);
            case 10:
              l = _context67.sent.map(function (c) {
                return {
                  id: c.id,
                  name: c.filename
                };
              });
              return _context67.abrupt("return", (r[E.CONTENT_TYPE] = o, l));
            case 14:
              _context67.prev = 14;
              _context67.t0 = _context67["catch"](7);
              throw r[E.CONTENT_TYPE] = o, E.displayError(t, _context67.t0), e.completionsHandlers.onFinish(), _context67.t0;
            case 17:
            case "end":
              return _context67.stop();
          }
        }, _callee67, null, [[7, 14]]);
      }));
      function storeFiles(_x126, _x127, _x128, _x129) {
        return _storeFiles.apply(this, arguments);
      }
      return storeFiles;
    }()
  }, {
    key: "getType",
    value: function getType(e, t) {
      var i = e[t].path;
      return !i || i.endsWith("png") ? "image" : "any";
    }
  }, {
    key: "getFiles",
    value: function () {
      var _getFiles = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee68(e, t, i, s) {
        var r, a;
        return _regeneratorRuntime().wrap(function _callee68$(_context68) {
          while (1) switch (_context68.prev = _context68.next) {
            case 0:
              r = t.map(function (_ref17) {
                var l = _ref17.fileId;
                return e.url = "".concat(i).concat(l).concat(s), new Promise(function (c) {
                  c(L.directFetch(e, void 0, "GET", !1));
                });
              });
              _context68.next = 3;
              return Promise.all(r);
            case 3:
              a = _context68.sent.map(function (l, c) {
                return new Promise(function (d) {
                  var u = new FileReader();
                  u.readAsDataURL(l), u.onload = function (h) {
                    d({
                      src: h.target.result,
                      name: t[c].name,
                      type: ne.getType(t, c)
                    });
                  };
                });
              });
              _context68.next = 6;
              return Promise.all(a);
            case 6:
              return _context68.abrupt("return", _context68.sent);
            case 7:
            case "end":
              return _context68.stop();
          }
        }, _callee68);
      }));
      function getFiles(_x131, _x132, _x133, _x134) {
        return _getFiles.apply(this, arguments);
      }
      return getFiles;
    }()
  }, {
    key: "getFileName",
    value: function getFileName(e) {
      var t = e.split("/");
      return t[t.length - 1];
    }
    // prettier-ignore
  }, {
    key: "getFilesAndNewText",
    value: function () {
      var _getFilesAndNewText = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee69(e, t, i, s, r) {
        var c, d, o, a, l;
        return _regeneratorRuntime().wrap(function _callee69$(_context69) {
          while (1) switch (_context69.prev = _context69.next) {
            case 0:
              a = i.getFilesPrefix, l = i.getFilesPostfix;
              _context69.t0 = t.length > 0;
              if (!_context69.t0) {
                _context69.next = 7;
                break;
              }
              _context69.next = 5;
              return ne.getFiles(e, t, a, l);
            case 5:
              o = _context69.sent;
              (c = r == null ? void 0 : r.text) != null && c.value && o.forEach(function (u, h) {
                var m;
                if (!u.src) return;
                var f = t[h].path;
                (m = r == null ? void 0 : r.text) != null && m.value && f && (r.text.value = r.text.value.replace(f, u.src));
              });
            case 7:
              return _context69.abrupt("return", (d = r == null ? void 0 : r.text) != null && d.value ? {
                text: r.text.value,
                role: s
              } : {
                files: o,
                role: s
              });
            case 8:
            case "end":
              return _context69.stop();
          }
        }, _callee69);
      }));
      function getFilesAndNewText(_x135, _x136, _x137, _x138, _x139) {
        return _getFilesAndNewText.apply(this, arguments);
      }
      return getFilesAndNewText;
    }() // Noticed an issue where text contains a sandbox hyperlink to a csv, but no annotation provided
    // To reproduce use the following text:
    // give example data for a csv and create a suitable bar chart for it with a link
    // Don't think it can be fixed and it is something on OpenAI side of things
    // prettier-ignore
  }, {
    key: "getFileDetails",
    value: function getFileDetails(e, t) {
      var s;
      var i = [];
      return (s = t == null ? void 0 : t.text) != null && s.value && e.content.forEach(function (r) {
        var o, a;
        (a = (o = r.text) == null ? void 0 : o.annotations) == null || a.forEach(function (l) {
          var c;
          l.text && l.text.startsWith("sandbox:") && (c = l.file_path) != null && c.file_id && i.push({
            path: l.text,
            fileId: l.file_path.file_id,
            name: ne.getFileName(l.text)
          });
        });
      }), t != null && t.image_file && i.push({
        fileId: t.image_file.file_id
      }), i;
    }
    // prettier-ignore
  }, {
    key: "getFilesAndText",
    value: function () {
      var _getFilesAndText = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee70(e, t, i, s) {
        var r;
        return _regeneratorRuntime().wrap(function _callee70$(_context70) {
          while (1) switch (_context70.prev = _context70.next) {
            case 0:
              r = ne.getFileDetails(t, s);
              _context70.next = 3;
              return ne.getFilesAndNewText(e, r, i, t.role, s);
            case 3:
              return _context70.abrupt("return", _context70.sent);
            case 4:
            case "end":
              return _context70.stop();
          }
        }, _callee70);
      }));
      function getFilesAndText(_x140, _x141, _x142, _x143) {
        return _getFilesAndText.apply(this, arguments);
      }
      return getFilesAndText;
    }()
  }, {
    key: "parseResult",
    value: function parseResult(e, t) {
      var i = [];
      if (t) i = e.data;else for (var s = 0; s < e.data.length; s += 1) {
        var r = e.data[s];
        if (r.role === "assistant") i.push(r);else break;
      }
      return i.reverse();
    }
    // test this using this prompt and it should give 2 text mesages and a file:
    // "give example data for a csv and create a suitable bar chart"
  }, {
    key: "parseMessages",
    value: function parseMessages(e, t, i) {
      var s = [];
      return t.forEach(/*#__PURE__*/function () {
        var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee72(r) {
          return _regeneratorRuntime().wrap(function _callee72$(_context72) {
            while (1) switch (_context72.prev = _context72.next) {
              case 0:
                r.content.filter(function (o) {
                  return !!o.text || !!o.image_file;
                }).sort(function (o) {
                  return o.text ? -1 : o.image_file ? 1 : 0;
                }).forEach(/*#__PURE__*/function () {
                  var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee71(o) {
                    return _regeneratorRuntime().wrap(function _callee71$(_context71) {
                      while (1) switch (_context71.prev = _context71.next) {
                        case 0:
                          s.push(ne.getFilesAndText(e, r, i, o));
                        case 1:
                        case "end":
                          return _context71.stop();
                      }
                    }, _callee71);
                  }));
                  return function (_x145) {
                    return _ref19.apply(this, arguments);
                  };
                }());
              case 1:
              case "end":
                return _context72.stop();
            }
          }, _callee72);
        }));
        return function (_x144) {
          return _ref18.apply(this, arguments);
        };
      }()), Promise.all(s);
    }
  }, {
    key: "processStreamMessages",
    value: function () {
      var _processStreamMessages = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee73(e, t, i) {
        return _regeneratorRuntime().wrap(function _callee73$(_context73) {
          while (1) switch (_context73.prev = _context73.next) {
            case 0:
              return _context73.abrupt("return", ne.parseMessages(e, [{
                content: t,
                role: "assistant"
              }], i));
            case 1:
            case "end":
              return _context73.stop();
          }
        }, _callee73);
      }));
      function processStreamMessages(_x146, _x147, _x148) {
        return _processStreamMessages.apply(this, arguments);
      }
      return processStreamMessages;
    }() // prettier-ignore
  }, {
    key: "processAPIMessages",
    value: function () {
      var _processAPIMessages = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee74(e, t, i, s) {
        var r;
        return _regeneratorRuntime().wrap(function _callee74$(_context74) {
          while (1) switch (_context74.prev = _context74.next) {
            case 0:
              r = ne.parseResult(t, i);
              return _context74.abrupt("return", ne.parseMessages(e, r, s));
            case 2:
            case "end":
              return _context74.stop();
          }
        }, _callee74);
      }));
      function processAPIMessages(_x149, _x150, _x151, _x152) {
        return _processAPIMessages.apply(this, arguments);
      }
      return processAPIMessages;
    }()
  }]);
}();
ne.FILES_WITH_TEXT_ERROR = "content with type `text` must have `text` values", ne.FUNCTION_TOOL_RESP_ERROR = "Response must contain an array of strings for each individual function/tool_call, see https://deepchat.dev/docs/directConnection/OpenAI/#assistant-functions.";
var Me = ne;
var Ge = /*#__PURE__*/function (_G3) {
  // prettier-ignore
  function Ge(e, t, i, s, r, o) {
    var _this34;
    _classCallCheck(this, Ge);
    if (_this34 = _callSuper(this, Ge, [e, s, r, o]), _this34.insertKeyPlaceholderText = "OpenAI API Key", _this34.keyHelpUrl = "https://platform.openai.com/account/api-keys", _this34.url = "", _this34.permittedErrorPrefixes = ["Incorrect", "Please send text", ii.FAILED_ERROR_MESSAGE], _this34.shouldFetchHistory = !1, _this34.searchedForThreadId = !1, _this34.config = {}, _this34.newAssistantDetails = {
      model: "gpt-4"
    }, _this34.waitingForStreamResponse = !1, _this34.isSSEStream = !1, _this34.urlSegments = i, _typeof(t) == "object") {
      _this34.config = t;
      var _this34$config = _this34.config,
        a = _this34$config.new_assistant,
        l = _this34$config.thread_id,
        c = _this34$config.load_thread_history;
      Object.assign(_this34.newAssistantDetails, a), l && (_this34.sessionId = l), c && (_this34.shouldFetchHistory = !0);
    }
    _this34.maxMessages = 1, _this34.isSSEStream = !!(_this34.stream && (_typeof(_this34.stream) != "object" || !_this34.stream.simulation));
    return _this34;
  }
  _inherits(Ge, _G3);
  return _createClass(Ge, [{
    key: "fetchHistoryFunc",
    value: function () {
      var _fetchHistoryFunc = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee75() {
        var _this35 = this;
        var e;
        return _regeneratorRuntime().wrap(function _callee75$(_context75) {
          while (1) switch (_context75.prev = _context75.next) {
            case 0:
              setTimeout(function () {
                return _this35.deepChat.disableSubmitButton();
              }, 2);
              _context75.prev = 1;
              _context75.next = 4;
              return this.getThreadMessages(this.sessionId, !0);
            case 4:
              e = _context75.sent;
              return _context75.abrupt("return", (this.deepChat.disableSubmitButton(!1), e));
            case 8:
              _context75.prev = 8;
              _context75.t0 = _context75["catch"](1);
              return _context75.abrupt("return", [{
                error: "Failed to fetch history"
              }]);
            case 11:
            case "end":
              return _context75.stop();
          }
        }, _callee75, this, [[1, 8]]);
      }));
      function fetchHistoryFunc() {
        return _fetchHistoryFunc.apply(this, arguments);
      }
      return fetchHistoryFunc;
    }()
  }, {
    key: "processMessage",
    value: function processMessage(e, t) {
      var i = this.totalMessagesMaxCharLength || -1,
        s = vt.getCharacterLimitMessages(e, i)[0];
      if (t && t.length > 0) {
        var r = this.filesToolType;
        if (typeof this.filesToolType == "function") {
          var a = this.filesToolType(t.map(function (_ref20) {
            var l = _ref20.name;
            return l;
          }));
          a === "code_interpreter" || a === "file_search" || a === "images" ? r = a : (console.error("Tool type \"".concat(a, "\" is not valid")), console.error('Expected "code_interpreter" or "file_search" or "images". Going to default to "images"'));
        }
        if (r === "file_search") return Ge.processAttachmentsMessage(s, t, "file_search");
        if (r === "code_interpreter") return Ge.processAttachmentsMessage(s, t, "code_interpreter");
        if (t.find(function (_ref21) {
          var a = _ref21.name;
          return !H.isImageFileExtension(a);
        })) console.error("The uploaded files contained a non-image file"), console.error('Make sure only images can be uploaded or define a "code_interpreter" or "file_search" value in the "files_tool_type" property'), console.warn('Make sure your existing assistant supports these "tools" or specify them in the "new_assistant" property');else {
          var _a2 = Ge.processImageMessage(s, t);
          if (_a2) return _a2;
        }
      }
      return {
        content: s.text || "",
        role: "user"
      };
    }
  }, {
    key: "createNewThreadMessages",
    value: function createNewThreadMessages(e, t, i) {
      var s = JSON.parse(JSON.stringify(e)),
        r = this.processMessage(t, i);
      return s.thread = {
        messages: [r]
      }, s;
    }
  }, {
    key: "callService",
    value: function callService(e, t, i) {
      if (this.messages = e, this.sessionId) {
        this.url = "".concat(this.urlSegments.threadsPrefix, "/").concat(this.sessionId, "/messages").concat(this.urlSegments.createMessagePostfix);
        var s = this.processMessage(t, i);
        R.request(this, s, e);
      } else {
        this.url = "".concat(this.urlSegments.threadsPrefix, "/runs").concat(this.urlSegments.threadsPosfix);
        var _s2 = this.createNewThreadMessages(this.rawBody, t, i);
        this.isSSEStream ? this.createStreamRun(_s2) : R.request(this, _s2, e);
      }
    }
  }, {
    key: "callServiceAPI",
    value: function () {
      var _callServiceAPI9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee76(e, t, i) {
        var _r$assistant_id;
        var r, s;
        return _regeneratorRuntime().wrap(function _callee76$(_context76) {
          while (1) switch (_context76.prev = _context76.next) {
            case 0:
              if (!(this.waitingForStreamResponse = !1, !this.connectSettings)) {
                _context76.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (!((_r$assistant_id = (r = this.rawBody).assistant_id) !== null && _r$assistant_id !== void 0)) {
                _context76.next = 6;
                break;
              }
              _r$assistant_id;
              _context76.next = 12;
              break;
            case 6:
              _context76.t0 = this.config.assistant_id;
              if (_context76.t0) {
                _context76.next = 11;
                break;
              }
              _context76.next = 10;
              return this.createNewAssistant();
            case 10:
              _context76.t0 = _context76.sent;
            case 11:
              r.assistant_id = _context76.t0;
            case 12:
              this.searchedForThreadId || this.searchPreviousMessagesForThreadId(e.messageToElements);
              if (!i) {
                _context76.next = 19;
                break;
              }
              _context76.next = 16;
              return Me.storeFiles(this, e, i, this.urlSegments.storeFiles);
            case 16:
              _context76.t1 = _context76.sent;
              _context76.next = 20;
              break;
            case 19:
              _context76.t1 = void 0;
            case 20:
              s = _context76.t1;
              this.connectSettings.method = "POST", this.callService(e, t, s);
            case 22:
            case "end":
              return _context76.stop();
          }
        }, _callee76, this);
      }));
      function callServiceAPI(_x153, _x154, _x155) {
        return _callServiceAPI9.apply(this, arguments);
      }
      return callServiceAPI;
    }()
  }, {
    key: "createNewAssistant",
    value: function () {
      var _createNewAssistant = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee77() {
        var e;
        return _regeneratorRuntime().wrap(function _callee77$(_context77) {
          while (1) switch (_context77.prev = _context77.next) {
            case 0:
              _context77.prev = 0;
              this.url = this.urlSegments.newAssistantUrl;
              _context77.next = 4;
              return L.directFetch(this, JSON.parse(JSON.stringify(this.newAssistantDetails)), "POST");
            case 4:
              e = _context77.sent;
              return _context77.abrupt("return", (this.config.assistant_id = e.id, this.config.assistant_id));
            case 8:
              _context77.prev = 8;
              _context77.t0 = _context77["catch"](0);
              console.error(_context77.t0), console.error("Failed to create a new assistant");
            case 11:
            case "end":
              return _context77.stop();
          }
        }, _callee77, this, [[0, 8]]);
      }));
      function createNewAssistant() {
        return _createNewAssistant.apply(this, arguments);
      }
      return createNewAssistant;
    }()
  }, {
    key: "searchPreviousMessagesForThreadId",
    value: function searchPreviousMessagesForThreadId(e) {
      var t = e.find(function (_ref22) {
        var _ref23 = _slicedToArray(_ref22, 1),
          i = _ref23[0];
        return i._sessionId;
      });
      t && (this.sessionId = t[0]._sessionId), this.searchedForThreadId = !0;
    }
    // prettier-ignore
  }, {
    key: "extractResultData",
    value: function () {
      var _extractResultData12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee78(e) {
        var s, t, i;
        return _regeneratorRuntime().wrap(function _callee78$(_context78) {
          while (1) switch (_context78.prev = _context78.next) {
            case 0:
              if (!(this.waitingForStreamResponse || this.isSSEStream && this.sessionId)) {
                _context78.next = 4;
                break;
              }
              _context78.next = 3;
              return this.handleStream(e);
            case 3:
              return _context78.abrupt("return", _context78.sent);
            case 4:
              if (!e.error) {
                _context78.next = 6;
                break;
              }
              throw e.error.message.startsWith(Me.FILES_WITH_TEXT_ERROR) ? Error("Please send text with your file(s)") : e.error.message;
            case 6:
              _context78.next = 8;
              return this.assignThreadAndRun(e);
            case 8:
              t = "".concat(this.urlSegments.threadsPrefix, "/").concat(this.sessionId, "/runs/").concat(this.run_id).concat(this.urlSegments.threadsPosfix), i = {
                method: "GET",
                headers: (s = this.connectSettings) == null ? void 0 : s.headers
              };
              return _context78.abrupt("return", (R.executePollRequest(this, t, i, this.messages), {
                makingAnotherRequest: !0
              }));
            case 10:
            case "end":
              return _context78.stop();
          }
        }, _callee78, this);
      }));
      function extractResultData(_x156) {
        return _extractResultData12.apply(this, arguments);
      }
      return extractResultData;
    }()
  }, {
    key: "assignThreadAndRun",
    value: function () {
      var _assignThreadAndRun = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee79(e) {
        var t;
        return _regeneratorRuntime().wrap(function _callee79$(_context79) {
          while (1) switch (_context79.prev = _context79.next) {
            case 0:
              if (!this.sessionId) {
                _context79.next = 8;
                break;
              }
              this.url = "".concat(this.urlSegments.threadsPrefix, "/").concat(this.sessionId, "/runs").concat(this.urlSegments.threadsPosfix);
              _context79.next = 4;
              return L.directFetch(this, JSON.parse(JSON.stringify(this.rawBody)), "POST");
            case 4:
              t = _context79.sent;
              this.run_id = t.id;
              _context79.next = 9;
              break;
            case 8:
              this.sessionId = e.thread_id, this.run_id = e.id, this.messages && this.messages.messageToElements.length > 0 && (this.messages.messageToElements[this.messages.messageToElements.length - 1][0]._sessionId = this.sessionId);
            case 9:
            case "end":
              return _context79.stop();
          }
        }, _callee79, this);
      }));
      function assignThreadAndRun(_x157) {
        return _assignThreadAndRun.apply(this, arguments);
      }
      return assignThreadAndRun;
    }()
  }, {
    key: "getThreadMessages",
    value: function () {
      var _getThreadMessages = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee80(e) {
        var t,
          s,
          r,
          i,
          _args80 = arguments;
        return _regeneratorRuntime().wrap(function _callee80$(_context80) {
          while (1) switch (_context80.prev = _context80.next) {
            case 0:
              t = _args80.length > 1 && _args80[1] !== undefined ? _args80[1] : !1;
              this.url = "".concat(this.urlSegments.threadsPrefix, "/").concat(e, "/messages?").concat(this.urlSegments.listMessagesPostfix);
              _context80.next = 4;
              return L.directFetch(this, {}, "GET");
            case 4:
              i = _context80.sent;
              _context80.t0 = !t && this.deepChat.responseInterceptor;
              if (!_context80.t0) {
                _context80.next = 10;
                break;
              }
              _context80.next = 9;
              return (r = (s = this.deepChat).responseInterceptor) == null ? void 0 : r.call(s, i);
            case 9:
              i = _context80.sent;
            case 10:
              return _context80.abrupt("return", Me.processAPIMessages(this, i, t, this.urlSegments));
            case 11:
            case "end":
              return _context80.stop();
          }
        }, _callee80, this);
      }));
      function getThreadMessages(_x158) {
        return _getThreadMessages.apply(this, arguments);
      }
      return getThreadMessages;
    }()
  }, {
    key: "extractPollResultData",
    value: function () {
      var _extractPollResultData4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee81(e) {
        var _this36 = this;
        var r, t, i, o, _o$shift, a, l, s;
        return _regeneratorRuntime().wrap(function _callee81$(_context81) {
          while (1) switch (_context81.prev = _context81.next) {
            case 0:
              t = e.status, i = e.required_action;
              if (!(t === "queued" || t === "in_progress")) {
                _context81.next = 3;
                break;
              }
              return _context81.abrupt("return", {
                timeoutMS: Ge.POLLING_TIMEOUT_MS
              });
            case 3:
              if (!(t === "completed" && this.messages)) {
                _context81.next = 11;
                break;
              }
              _context81.next = 6;
              return this.getThreadMessages(e.thread_id);
            case 6:
              o = _context81.sent;
              _o$shift = o.shift();
              a = _o$shift.text;
              l = _o$shift.files;
              return _context81.abrupt("return", (setTimeout(function () {
                o.forEach(function (c) {
                  return _this36.deepChat.addMessage(c);
                });
              }), {
                text: a,
                _sessionId: this.sessionId,
                files: l
              }));
            case 11:
              s = (r = i == null ? void 0 : i.submit_tool_outputs) == null ? void 0 : r.tool_calls;
              if (!(t === "requires_action" && s)) {
                _context81.next = 16;
                break;
              }
              _context81.next = 15;
              return this.handleTools(s);
            case 15:
              return _context81.abrupt("return", _context81.sent);
            case 16:
              throw Error("Thread run status: ".concat(t));
            case 17:
            case "end":
              return _context81.stop();
          }
        }, _callee81, this);
      }));
      function extractPollResultData(_x159) {
        return _extractPollResultData4.apply(this, arguments);
      }
      return extractPollResultData;
    }() // prettier-ignore
  }, {
    key: "handleTools",
    value: function () {
      var _handleTools = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee82(e) {
        var t, i, s, r, o, a;
        return _regeneratorRuntime().wrap(function _callee82$(_context82) {
          while (1) switch (_context82.prev = _context82.next) {
            case 0:
              if (this.functionHandler) {
                _context82.next = 2;
                break;
              }
              throw Error("Please define the `function_handler` property inside the [openAI](https://deepchat.dev/docs/directConnection/openAI#Assistant) object.");
            case 2:
              t = e.map(function (l) {
                return {
                  name: l["function"].name,
                  arguments: l["function"].arguments
                };
              });
              _context82.next = 5;
              return this.functionHandler(t);
            case 5:
              i = _context82.sent;
              if (!(!Array.isArray(i) || e.length !== i.length)) {
                _context82.next = 8;
                break;
              }
              throw Error(Me.FUNCTION_TOOL_RESP_ERROR);
            case 8:
              _context82.next = 10;
              return Promise.all(i);
            case 10:
              s = _context82.sent;
              if (!s.find(function (l) {
                return typeof l != "string";
              })) {
                _context82.next = 13;
                break;
              }
              throw Error(Me.FUNCTION_TOOL_RESP_ERROR);
            case 13:
              r = s.map(function (l, c) {
                return {
                  tool_call_id: e[c].id,
                  output: l
                };
              }), o = "".concat(this.urlSegments.threadsPrefix, "/").concat(this.sessionId), a = "/runs/".concat(this.run_id, "/submit_tool_outputs").concat(this.urlSegments.threadsPosfix);
              this.url = "".concat(o).concat(a);
              if (!this.isSSEStream) {
                _context82.next = 20;
                break;
              }
              _context82.next = 18;
              return this.createStreamRun({
                tool_outputs: r
              });
            case 18:
              _context82.next = 22;
              break;
            case 20:
              _context82.next = 22;
              return L.directFetch(this, {
                tool_outputs: r
              }, "POST");
            case 22:
              return _context82.abrupt("return", {
                timeoutMS: Ge.POLLING_TIMEOUT_MS
              });
            case 23:
            case "end":
              return _context82.stop();
          }
        }, _callee82, this);
      }));
      function handleTools(_x160) {
        return _handleTools.apply(this, arguments);
      }
      return handleTools;
    }()
  }, {
    key: "handleStream",
    value: function () {
      var _handleStream = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee83(e) {
        var i, s, t, r;
        return _regeneratorRuntime().wrap(function _callee83$(_context83) {
          while (1) switch (_context83.prev = _context83.next) {
            case 0:
              t = (s = (i = e.required_action) == null ? void 0 : i.submit_tool_outputs) == null ? void 0 : s.tool_calls;
              if (!(e.status === "requires_action" && t)) {
                _context83.next = 6;
                break;
              }
              this.run_id = e.id;
              _context83.next = 5;
              return this.handleTools(t);
            case 5:
              return _context83.abrupt("return", _context83.sent);
            case 6:
              if (!this.waitingForStreamResponse) {
                _context83.next = 8;
                break;
              }
              return _context83.abrupt("return", this.parseStreamResult(e));
            case 8:
              if (this.isSSEStream && this.sessionId) {
                this.url = "".concat(this.urlSegments.threadsPrefix, "/").concat(this.sessionId, "/runs").concat(this.urlSegments.threadsPosfix);
                r = JSON.parse(JSON.stringify(this.rawBody));
                this.createStreamRun(r);
              }
              return _context83.abrupt("return", {
                makingAnotherRequest: !0
              });
            case 10:
            case "end":
              return _context83.stop();
          }
        }, _callee83, this);
      }));
      function handleStream(_x161) {
        return _handleStream.apply(this, arguments);
      }
      return handleStream;
    }() // prettier-ignore
  }, {
    key: "parseStreamResult",
    value: function () {
      var _parseStreamResult = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee84(e) {
        var t, i, s, r, o, a, l, c, _a3, _l2;
        return _regeneratorRuntime().wrap(function _callee84$(_context84) {
          while (1) switch (_context84.prev = _context84.next) {
            case 0:
              if (!(e.content && e.content.length > 0 && this.messages)) {
                _context84.next = 5;
                break;
              }
              a = e.content.find(function (l) {
                return l.text;
              });
              if (!((t = a == null ? void 0 : a.text) != null && t.annotations && a.text.annotations.length > 0)) {
                _context84.next = 5;
                break;
              }
              l = e.content.find(function (d) {
                return !!d.text;
              }) || e.content[0], c = Me.getFilesAndText.bind(this, this, {
                role: "assistant",
                content: e.content
              }, this.urlSegments, l);
              return _context84.abrupt("return", ((i = this.messageStream) == null || i.endStreamAfterFileDownloaded(this.messages, c), {
                text: ""
              }));
            case 5:
              if (!((s = e.delta) != null && s.content)) {
                _context84.next = 14;
                break;
              }
              if (!(e.delta.content.length > 1)) {
                _context84.next = 13;
                break;
              }
              _a3 = e.delta.content.find(function (l) {
                return l.text;
              });
              if (!((r = _a3 == null ? void 0 : _a3.text) != null && r.annotations && _a3.text.annotations.length === 0)) {
                _context84.next = 13;
                break;
              }
              _context84.next = 11;
              return Me.processStreamMessages(this, e.delta.content, this.urlSegments);
            case 11:
              _l2 = _context84.sent;
              return _context84.abrupt("return", {
                text: _l2[0].text,
                files: _l2[1].files
              });
            case 13:
              return _context84.abrupt("return", {
                text: (o = e.delta.content[0].text) == null ? void 0 : o.value
              });
            case 14:
              return _context84.abrupt("return", (!this.sessionId && e.thread_id && (this.sessionId = e.thread_id), {
                makingAnotherRequest: !0
              }));
            case 15:
            case "end":
              return _context84.stop();
          }
        }, _callee84, this);
      }));
      function parseStreamResult(_x162) {
        return _parseStreamResult.apply(this, arguments);
      }
      return parseStreamResult;
    }() // https://platform.openai.com/docs/api-reference/assistants-streaming
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "createStreamRun",
    value: function () {
      var _createStreamRun = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee85(e) {
        return _regeneratorRuntime().wrap(function _callee85$(_context85) {
          while (1) switch (_context85.prev = _context85.next) {
            case 0:
              e.stream = !0;
              this.waitingForStreamResponse = !0;
              _context85.next = 4;
              return A.request(this, e, this.messages, !0, !0);
            case 4:
              this.messageStream = _context85.sent;
            case 5:
            case "end":
              return _context85.stop();
          }
        }, _callee85, this);
      }));
      function createStreamRun(_x163) {
        return _createStreamRun.apply(this, arguments);
      }
      return createStreamRun;
    }()
  }], [{
    key: "processImageMessage",
    value: function processImageMessage(e, t) {
      var i = t == null ? void 0 : t.filter(function (s) {
        return H.isImageFileExtension(s.name);
      }).map(function (s) {
        return {
          type: "image_file",
          image_file: {
            file_id: s.id
          }
        };
      });
      if (i && i.length > 0) return e.text && e.text.length > 0 && i.push({
        type: "text",
        text: e.text
      }), {
        content: i,
        role: "user"
      };
    }
  }, {
    key: "processAttachmentsMessage",
    value: function processAttachmentsMessage(e, t, i) {
      return {
        attachments: t.map(function (r) {
          return {
            tools: [{
              type: i
            }],
            file_id: r.id
          };
        }),
        content: [{
          type: "text",
          text: e.text
        }],
        role: "user"
      };
    }
  }]);
}(G);
Ge.POLLING_TIMEOUT_MS = 500;
var Ri = Ge;
var Ss = /*#__PURE__*/function (_Ri) {
  function Ss(e) {
    var _a$headers, _l$OpenAIBeta;
    var _this37;
    _classCallCheck(this, Ss);
    var o, a, l, c, d;
    var t = JSON.parse(JSON.stringify(e.directConnection)),
      i = t.openAI,
      s = (o = t.openAI) == null ? void 0 : o.assistant,
      r = Ss.buildUrlSegments(s);
    if (_this37 = _callSuper(this, Ss, [e, s, r, L.buildKeyVerificationDetails(), L.buildHeaders, i]), (_a$headers = (a = _this37.connectSettings).headers) !== null && _a$headers !== void 0 ? _a$headers : a.headers = {}, (_l$OpenAIBeta = (l = _this37.connectSettings.headers)["OpenAI-Beta"]) !== null && _l$OpenAIBeta !== void 0 ? _l$OpenAIBeta : l["OpenAI-Beta"] = "assistants=v2", _this37.shouldFetchHistory && _this37.sessionId && (_this37.fetchHistory = _this37.fetchHistoryFunc.bind(_assertThisInitialized(_this37))), _typeof(s) == "object") {
      var _ref24 = (d = (c = e.directConnection) == null ? void 0 : c.openAI) == null ? void 0 : d.assistant,
        u = _ref24.function_handler,
        h = _ref24.files_tool_type;
      u && (_this37.functionHandler = u), h && (_this37.filesToolType = h);
    }
    return _this37;
  }
  _inherits(Ss, _Ri);
  return _createClass(Ss, null, [{
    key: "buildUrlSegments",
    value: function buildUrlSegments(e) {
      var t = _typeof(e) == "object" && e.custom_base_url || "https://api.openai.com/v1";
      return {
        threadsPrefix: "".concat(t, "/threads"),
        threadsPosfix: "",
        newAssistantUrl: "".concat(t, "/assistants"),
        createMessagePostfix: "",
        listMessagesPostfix: "order=desc",
        storeFiles: "".concat(t, "/files"),
        getFilesPrefix: "".concat(t, "/files/"),
        getFilesPostfix: "/content"
      };
    }
  }]);
}(Ri);
var Mi = /*#__PURE__*/function () {
  function Mi() {
    _classCallCheck(this, Mi);
  }
  return _createClass(Mi, null, [{
    key: "buildHeaders",
    value: function buildHeaders(e) {
      return {
        Authorization: "Bearer ".concat(e),
        "Content-Type": "application/json",
        accept: "application/json"
      };
    }
    // prettier-ignore
  }, {
    key: "handleVerificationResult",
    value: function handleVerificationResult(e, t, i, s) {
      var o;
      (o = e.message) != null && o.includes("invalid request: prompt must be at least 1 token long") ? i(t) : s(k.INVALID_KEY);
    }
  }, {
    key: "buildKeyVerificationDetails",
    value: function buildKeyVerificationDetails() {
      return {
        url: "https://api.cohere.ai/v1/generate",
        method: "POST",
        handleVerificationResult: Mi.handleVerificationResult,
        body: JSON.stringify({
          prompt: ""
        })
      };
    }
  }]);
}();
var _s = /*#__PURE__*/function (_G4) {
  function _s(e, t, i, s, r) {
    var _this38;
    _classCallCheck(this, _s);
    _this38 = _callSuper(this, _s, [e, Mi.buildKeyVerificationDetails(), Mi.buildHeaders, r]), _this38.insertKeyPlaceholderText = "Cohere API Key", _this38.keyHelpUrl = "https://dashboard.cohere.ai/api-keys", _this38.permittedErrorPrefixes = ["invalid"], _this38.url = t, _this38.textInputPlaceholderText = i, s && _typeof(s) == "object" && Object.assign(_this38.rawBody, s);
    return _this38;
  }
  _inherits(_s, _G4);
  return _createClass(_s);
}(G);
var Wo = /*#__PURE__*/function (_s3) {
  function Wo(e) {
    _classCallCheck(this, Wo);
    var s, r, o;
    var t = (r = (s = e.directConnection) == null ? void 0 : s.cohere) == null ? void 0 : r.textGeneration,
      i = (o = e.directConnection) == null ? void 0 : o.cohere;
    return _callSuper(this, Wo, [e, "https://api.cohere.ai/v1/generate", "Once upon a time", t, i]);
  }
  _inherits(Wo, _s3);
  return _createClass(Wo, [{
    key: "preprocessBody",
    value: function preprocessBody(e, t) {
      var i = JSON.parse(JSON.stringify(e)),
        s = t[t.length - 1].text;
      if (s) return _objectSpread({
        prompt: s
      }, i);
    }
  }, {
    key: "callServiceAPI",
    value: function () {
      var _callServiceAPI10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee86(e, t) {
        var i;
        return _regeneratorRuntime().wrap(function _callee86$(_context86) {
          while (1) switch (_context86.prev = _context86.next) {
            case 0:
              if (this.connectSettings) {
                _context86.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              i = this.preprocessBody(this.rawBody, t);
              R.request(this, i, e);
            case 4:
            case "end":
              return _context86.stop();
          }
        }, _callee86, this);
      }));
      function callServiceAPI(_x164, _x165) {
        return _callServiceAPI10.apply(this, arguments);
      }
      return callServiceAPI;
    }()
  }, {
    key: "extractResultData",
    value: function () {
      var _extractResultData13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee87(e) {
        var t;
        return _regeneratorRuntime().wrap(function _callee87$(_context87) {
          while (1) switch (_context87.prev = _context87.next) {
            case 0:
              if (!e.message) {
                _context87.next = 2;
                break;
              }
              throw e.message;
            case 2:
              return _context87.abrupt("return", {
                text: ((t = e.generations) == null ? void 0 : t[0].text) || ""
              });
            case 3:
            case "end":
              return _context87.stop();
          }
        }, _callee87);
      }));
      function extractResultData(_x166) {
        return _extractResultData13.apply(this, arguments);
      }
      return extractResultData;
    }()
  }]);
}(_s);
var ks = /*#__PURE__*/function () {
  function ks() {
    _classCallCheck(this, ks);
  }
  return _createClass(ks, null, [{
    key: "buildHeaders",
    value: function buildHeaders(e) {
      return {
        "api-key": e,
        "Content-Type": "application/json"
      };
    }
  }, {
    key: "buildKeyVerificationDetails",
    value: function buildKeyVerificationDetails(e) {
      return {
        url: "".concat(e.endpoint, "/openai/models?api-version=").concat(e.version),
        method: "GET",
        handleVerificationResult: L.handleVerificationResult
      };
    }
  }, {
    key: "validateURLDetails",
    value: function validateURLDetails(e) {
      var t = e.endpoint,
        i = e.version,
        s = e.deploymentId;
      return t && i && s;
    }
  }]);
}();
ks.URL_DETAILS_ERROR_MESSAGE = "Please define the Azure URL Details. [More Information](https://deepchat.dev/docs/directConnection/Azure)";
var ue = ks;
var pt = /*#__PURE__*/function (_Ri2) {
  function pt(e) {
    var _g$headers;
    var _this39;
    _classCallCheck(this, pt);
    var c, d, u, h, f, m, p, g;
    var t = JSON.parse(JSON.stringify(e.directConnection)),
      i = t.azure,
      s = (c = t.azure) == null ? void 0 : c.openAI,
      r = (s == null ? void 0 : s.urlDetails) || {},
      o = "".concat((d = s == null ? void 0 : s.urlDetails) == null ? void 0 : d.endpoint, "/openai/"),
      a = "?api-version=".concat((u = s == null ? void 0 : s.urlDetails) == null ? void 0 : u.version),
      l = {
        threadsPrefix: "".concat(o).concat(pt.THREAD_RESOURCE),
        threadsPosfix: a,
        newAssistantUrl: "".concat(o).concat(pt.NEW_ASSISTANT_RESOURCE).concat(a),
        createMessagePostfix: a,
        listMessagesPostfix: "order=desc&api-version=".concat((h = s == null ? void 0 : s.urlDetails) == null ? void 0 : h.version),
        storeFiles: "".concat(o, "files").concat(a),
        getFilesPrefix: "".concat(o, "files/"),
        getFilesPostfix: "/content".concat(a)
      };
    if (_this39 = _callSuper(this, pt, [e, s == null ? void 0 : s.assistant, l, ue.buildKeyVerificationDetails(r), ue.buildHeaders, i]), _this39.permittedErrorPrefixes = [ue.URL_DETAILS_ERROR_MESSAGE], _this39.insertKeyPlaceholderText = "Azure OpenAI API Key", _this39.keyHelpUrl = "https://learn.microsoft.com/en-us/answers/questions/1193991/how-to-get-the-value-of-openai-api-key", _this39.isTextInputDisabled = !1, _typeof(s == null ? void 0 : s.assistant) == "object") {
      var _ref25 = (p = (m = (f = e.directConnection) == null ? void 0 : f.azure) == null ? void 0 : m.openAI) == null ? void 0 : p.assistant,
        b = _ref25.function_handler,
        M = _ref25.files_tool_type;
      b && (_this39.functionHandler = b), M && (_this39.filesToolType = M);
    }
    ue.validateURLDetails(r) ? (_g$headers = (g = _this39.connectSettings).headers) !== null && _g$headers !== void 0 ? _g$headers : g.headers = {} : (_this39.isTextInputDisabled = !0, _this39.canSendMessage = function () {
      return !1;
    }, setTimeout(function () {
      e.addMessage({
        error: ue.URL_DETAILS_ERROR_MESSAGE
      });
    }));
    return _this39;
  }
  _inherits(pt, _Ri2);
  return _createClass(pt);
}(Ri);
pt.THREAD_RESOURCE = "threads", pt.NEW_ASSISTANT_RESOURCE = "assistants";
var rs = pt;
var Jo = /*#__PURE__*/function (_s4) {
  function Jo(e) {
    _classCallCheck(this, Jo);
    var s, r, o;
    var t = (r = (s = e.directConnection) == null ? void 0 : s.cohere) == null ? void 0 : r.summarization,
      i = (o = e.directConnection) == null ? void 0 : o.cohere;
    return _callSuper(this, Jo, [e, "https://api.cohere.ai/v1/summarize", "Insert text to summarize", t, i]);
  }
  _inherits(Jo, _s4);
  return _createClass(Jo, [{
    key: "preprocessBody",
    value: function preprocessBody(e, t) {
      var i = JSON.parse(JSON.stringify(e)),
        s = t[t.length - 1].text;
      if (s) return _objectSpread({
        text: s
      }, i);
    }
  }, {
    key: "callServiceAPI",
    value: function () {
      var _callServiceAPI11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee88(e, t) {
        var i;
        return _regeneratorRuntime().wrap(function _callee88$(_context88) {
          while (1) switch (_context88.prev = _context88.next) {
            case 0:
              if (this.connectSettings) {
                _context88.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              i = this.preprocessBody(this.rawBody, t);
              R.request(this, i, e);
            case 4:
            case "end":
              return _context88.stop();
          }
        }, _callee88, this);
      }));
      function callServiceAPI(_x167, _x168) {
        return _callServiceAPI11.apply(this, arguments);
      }
      return callServiceAPI;
    }()
  }, {
    key: "extractResultData",
    value: function () {
      var _extractResultData14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee89(e) {
        return _regeneratorRuntime().wrap(function _callee89$(_context89) {
          while (1) switch (_context89.prev = _context89.next) {
            case 0:
              if (!e.message) {
                _context89.next = 2;
                break;
              }
              throw e.message;
            case 2:
              return _context89.abrupt("return", {
                text: e.summary || ""
              });
            case 3:
            case "end":
              return _context89.stop();
          }
        }, _callee89);
      }));
      function extractResultData(_x169) {
        return _extractResultData14.apply(this, arguments);
      }
      return extractResultData;
    }()
  }]);
}(_s);
var N = /*#__PURE__*/function () {
  function N() {
    _classCallCheck(this, N);
  }
  return _createClass(N, null, [{
    key: "addAttributes",
    value: function addAttributes(e) {
      e.role = "button", e.setAttribute("tabindex", "0");
    }
  }, {
    key: "addAriaBusy",
    value: function addAriaBusy(e) {
      e.setAttribute("aria-busy", "true");
    }
  }, {
    key: "removeAriaBusy",
    value: function removeAriaBusy(e) {
      e.removeAttribute("aria-busy");
    }
  }, {
    key: "addAriaDisabled",
    value: function addAriaDisabled(e) {
      e.setAttribute("aria-disabled", "true");
    }
  }, {
    key: "removeAriaDisabled",
    value: function removeAriaDisabled(e) {
      e.removeAttribute("aria-disabled");
    }
  }, {
    key: "removeAriaAttributes",
    value: function removeAriaAttributes(e) {
      N.removeAriaBusy(e), N.removeAriaDisabled(e);
    }
  }]);
}();
var Ln = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<svg height=\"1.4em\" width=\"1.4em\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\t viewBox=\"0 0 490.9 490.9\" xml:space=\"preserve\">\n\t<g>\n\t\t<g>\n\t\t\t<path d=\"M245.5,322.9c53,0,96.2-43.2,96.2-96.2V96.2c0-53-43.2-96.2-96.2-96.2s-96.2,43.2-96.2,96.2v130.5\n\t\t\t\tC149.3,279.8,192.5,322.9,245.5,322.9z M173.8,96.2c0-39.5,32.2-71.7,71.7-71.7s71.7,32.2,71.7,71.7v130.5\n\t\t\t\tc0,39.5-32.2,71.7-71.7,71.7s-71.7-32.2-71.7-71.7V96.2z\"/>\n\t\t\t<path d=\"M94.4,214.5c-6.8,0-12.3,5.5-12.3,12.3c0,85.9,66.7,156.6,151.1,162.8v76.7h-63.9c-6.8,0-12.3,5.5-12.3,12.3\n\t\t\t\ts5.5,12.3,12.3,12.3h152.3c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3h-63.9v-76.7c84.4-6.3,151.1-76.9,151.1-162.8\n\t\t\t\tc0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3c0,76.6-62.3,138.9-138.9,138.9s-138.9-62.3-138.9-138.9\n\t\t\t\tC106.6,220,101.2,214.5,94.4,214.5z\"/>\n\t\t</g>\n\t</g>\n</svg>\n",
  re = /*#__PURE__*/function () {
    function re() {
      _classCallCheck(this, re);
    }
    return _createClass(re, null, [{
      key: "createTextElement",
      value: function createTextElement(e) {
        var t = document.createElement("div");
        return t.classList.add(re.INPUT_BUTTON_INNER_TEXT_CLASS), t.innerText = e, t;
      }
    }, {
      key: "tryAddSVGElement",
      value: function tryAddSVGElement(e, t, i, s) {
        i ? e.push(Fe.createSVGElement(i)) : i !== "" && s && e.push(t);
      }
    }, {
      key: "createCustomElements",
      value: function createCustomElements(e, t, i) {
        var l, c;
        var s = i == null ? void 0 : i[e],
          r = (l = s == null ? void 0 : s.text) == null ? void 0 : l.content,
          o = (c = s == null ? void 0 : s.svg) == null ? void 0 : c.content,
          a = [];
        return re.tryAddSVGElement(a, t, o, r), r && a.push(re.createTextElement(r)), a.length > 0 ? a : void 0;
      }
    }, {
      key: "reassignClassBasedOnChildren",
      value: function reassignClassBasedOnChildren(e, t) {
        e.classList.remove(re.INPUT_BUTTON_SVG_CLASS, re.INPUT_BUTTON_SVG_TEXT_CLASS), t.find(function (i) {
          return i.classList.contains(re.INPUT_BUTTON_INNER_TEXT_CLASS);
        }) ? t.length > 1 && e.classList.add(re.INPUT_BUTTON_SVG_TEXT_CLASS) : e.classList.add(re.INPUT_BUTTON_SVG_CLASS);
      }
    }]);
  }();
re.INPUT_BUTTON_SVG_TEXT_CLASS = "input-button-svg-text", re.INPUT_BUTTON_INNER_TEXT_CLASS = "text-button", re.INPUT_BUTTON_SVG_CLASS = "input-button-svg";
var Ae = re;
var Gt = /*#__PURE__*/function () {
  function Gt() {
    _classCallCheck(this, Gt);
  }
  return _createClass(Gt, null, [{
    key: "parseSVGTextElements",
    value: function parseSVGTextElements(e) {
      return {
        svg: e.find(function (t) {
          return t.tagName.toLowerCase() === "svg";
        }),
        text: e.find(function (t) {
          return t.tagName.toLowerCase() === "div";
        })
      };
    }
  }]);
}();
var D = /*#__PURE__*/function () {
  function D() {
    _classCallCheck(this, D);
  }
  return _createClass(D, null, [{
    key: "unsetAllCSS",
    value: function unsetAllCSS(e, t) {
      var r, o;
      t.container && I.unsetAllCSSMouseStates(e, t.container);
      var _Gt$parseSVGTextEleme = Gt.parseSVGTextElements(Array.from(e.children)),
        i = _Gt$parseSVGTextEleme.svg,
        s = _Gt$parseSVGTextEleme.text;
      (r = t.svg) != null && r.styles && i && I.unsetAllCSSMouseStates(i, t.svg.styles), (o = t.text) != null && o.styles && s && I.unsetAllCSSMouseStates(s, t.text.styles);
    }
  }, {
    key: "unsetActionCSS",
    value: function unsetActionCSS(e, t) {
      var r, o;
      t.container && I.unsetActivityCSSMouseStates(e, t.container);
      var _Gt$parseSVGTextEleme2 = Gt.parseSVGTextElements(Array.from(e.children)),
        i = _Gt$parseSVGTextEleme2.svg,
        s = _Gt$parseSVGTextEleme2.text;
      (r = t.svg) != null && r.styles && i && I.unsetActivityCSSMouseStates(i, t.svg.styles), (o = t.text) != null && o.styles && s && I.unsetActivityCSSMouseStates(s, t.text.styles);
    }
  }, {
    key: "setElementsCSS",
    value: function setElementsCSS(e, t, i) {
      var o, a, l, c, d;
      Object.assign(e.style, (o = t.container) == null ? void 0 : o[i]);
      var _Gt$parseSVGTextEleme3 = Gt.parseSVGTextElements(Array.from(e.children)),
        s = _Gt$parseSVGTextEleme3.svg,
        r = _Gt$parseSVGTextEleme3.text;
      s && Object.assign(s.style, (l = (a = t.svg) == null ? void 0 : a.styles) == null ? void 0 : l[i]), r && Object.assign(r.style, (d = (c = t.text) == null ? void 0 : c.styles) == null ? void 0 : d[i]);
    }
  }, {
    key: "setElementCssUpToState",
    value: function setElementCssUpToState(e, t, i) {
      D.setElementsCSS(e, t, "default"), i !== "default" && (D.setElementsCSS(e, t, "hover"), i !== "hover" && D.setElementsCSS(e, t, "click"));
    }
  }]);
}();
var lt = /*#__PURE__*/function () {
  function lt(e, t, i, s, r) {
    _classCallCheck(this, lt);
    this._mouseState = {
      state: "default"
    }, this.isCustom = !1, N.addAttributes(e), this.elementRef = e, this.svg = Fe.createSVGElement(t), this.customStyles = s, this.position = i, this.dropupText = r;
  }
  return _createClass(lt, [{
    key: "buttonMouseLeave",
    value: function buttonMouseLeave(e) {
      this._mouseState.state = "default", e && (D.unsetAllCSS(this.elementRef, e), D.setElementsCSS(this.elementRef, e, "default"));
    }
  }, {
    key: "buttonMouseEnter",
    value: function buttonMouseEnter(e) {
      this._mouseState.state = "hover", e && D.setElementsCSS(this.elementRef, e, "hover");
    }
  }, {
    key: "buttonMouseUp",
    value: function buttonMouseUp(e) {
      e && D.unsetActionCSS(this.elementRef, e), this.buttonMouseEnter(e);
    }
  }, {
    key: "buttonMouseDown",
    value: function buttonMouseDown(e) {
      this._mouseState.state = "click", e && D.setElementsCSS(this.elementRef, e, "click");
    }
    // be careful not to use onclick as that is used for button functionality
  }, {
    key: "setEvents",
    value: function setEvents(e) {
      this.elementRef.onmousedown = this.buttonMouseDown.bind(this, e), this.elementRef.onmouseup = this.buttonMouseUp.bind(this, e), this.elementRef.onmouseenter = this.buttonMouseEnter.bind(this, e), this.elementRef.onmouseleave = this.buttonMouseLeave.bind(this, e);
    }
  }, {
    key: "unsetCustomStateStyles",
    value: function unsetCustomStateStyles(e) {
      if (this.customStyles) for (var t = 0; t < e.length; t += 1) {
        var _i2 = e[t],
          s = _i2 && this.customStyles[_i2];
        s && D.unsetActionCSS(this.elementRef, s);
      }
    }
  }, {
    key: "reapplyStateStyle",
    value: function reapplyStateStyle(e, t) {
      if (!this.customStyles) return;
      t && this.unsetCustomStateStyles(t);
      var i = this.customStyles[e];
      i && D.setElementCssUpToState(this.elementRef, i, this._mouseState.state), this.setEvents(i);
    }
  }, {
    key: "changeElementsByState",
    value: function changeElementsByState(e) {
      var _this$elementRef;
      (_this$elementRef = this.elementRef).replaceChildren.apply(_this$elementRef, _toConsumableArray(e)), Ae.reassignClassBasedOnChildren(this.elementRef, e);
    }
  }, {
    key: "buildDefaultIconElement",
    value: function buildDefaultIconElement(e) {
      var t = this.svg.cloneNode(!0);
      return t.id = e, [t];
    }
  }, {
    key: "createInnerElements",
    value: function createInnerElements(e, t, i) {
      var s = Ae.createCustomElements(t, this.svg, i);
      if (s && s.length > 0) {
        if (this.position === "dropup-menu") {
          var r = this.svg.cloneNode(!0);
          r.id = s[0] === this.svg ? e : "dropup-menu-item-icon-element-custom", s[0] = r;
        }
        return s;
      }
      return this.buildDefaultIconElement(e);
    }
  }]);
}();
var Fi = /*#__PURE__*/function (_lt) {
  function Fi(e) {
    var _this40;
    _classCallCheck(this, Fi);
    var i, s;
    var t = ((s = (i = e == null ? void 0 : e["default"]) == null ? void 0 : i.svg) == null ? void 0 : s.content) || Fi.EMPTY_SVG;
    _this40 = _callSuper(this, Fi, [document.createElement("div"), t, void 0, e]), _this40.isActive = !1, _this40._innerElements = _this40.createInnerElementsForStates(_this40.customStyles), _this40.changeToDefault();
    return _this40;
  }
  _inherits(Fi, _lt);
  return _createClass(Fi, [{
    key: "createInnerElementsForStates",
    value: function createInnerElementsForStates(e) {
      return {
        "default": this.createInnerButtonElements("default", e),
        active: this.createInnerButtonElements("active", e),
        unavailable: this.createInnerButtonElements("unavailable", e)
      };
    }
  }, {
    key: "createInnerButtonElements",
    value: function createInnerButtonElements(e, t) {
      return Ae.createCustomElements(e, this.svg, t) || [this.svg];
    }
  }, {
    key: "changeState",
    value: function changeState(e) {
      this.changeElementsByState(e), this.elementRef.classList.replace(Ae.INPUT_BUTTON_SVG_CLASS, "deep-chat-openai-realtime-button");
    }
  }, {
    key: "changeToActive",
    value: function changeToActive() {
      this.changeState(this._innerElements.active), this.reapplyStateStyle("active", ["unavailable", "default"]), this.isActive = !0;
    }
  }, {
    key: "changeToDefault",
    value: function changeToDefault() {
      var e, t, i, s;
      this.changeState(this._innerElements["default"]), (e = this.customStyles) != null && e.active && D.unsetAllCSS(this.elementRef, (t = this.customStyles) == null ? void 0 : t.active), (i = this.customStyles) != null && i.unavailable && D.unsetAllCSS(this.elementRef, (s = this.customStyles) == null ? void 0 : s.unavailable), this.reapplyStateStyle("default", ["active", "unavailable"]), this.isActive = !1;
    }
  }, {
    key: "changeToUnavailable",
    value: function changeToUnavailable() {
      var e, t, i, s;
      this.changeState(this._innerElements.unavailable), (e = this.customStyles) != null && e.active && D.unsetAllCSS(this.elementRef, (t = this.customStyles) == null ? void 0 : t.active), (i = this.customStyles) != null && i["default"] && D.unsetAllCSS(this.elementRef, (s = this.customStyles) == null ? void 0 : s["default"]), this.reapplyStateStyle("unavailable", ["default", "active"]), this.isActive = !1;
    }
  }]);
}(lt);
Fi.EMPTY_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"></svg>';
var ki = Fi;
var z = /*#__PURE__*/function () {
  function z() {
    _classCallCheck(this, z);
  }
  return _createClass(z, null, [{
    key: "setPropertyValueIfDoesNotExist",
    value: function setPropertyValueIfDoesNotExist(e, t, i) {
      var _e$s, _e$s2;
      var s = t[0];
      t.length === 1 ? (_e$s = e[s]) !== null && _e$s !== void 0 ? _e$s : e[s] = i : ((_e$s2 = e[s]) !== null && _e$s2 !== void 0 ? _e$s2 : e[s] = {}, t.shift(), z.setPropertyValueIfDoesNotExist(e[s], t, i));
    }
  }, {
    key: "setPropertyValue",
    value: function setPropertyValue(e, t, i) {
      var _e$s3;
      var s = t[0];
      t.length === 1 ? e[s] = i : ((_e$s3 = e[s]) !== null && _e$s3 !== void 0 ? _e$s3 : e[s] = {}, t.shift(), z.setPropertyValue(e[s], t, i));
    }
  }, {
    key: "getObjectValue",
    value: function getObjectValue(e, t) {
      var i = t[0],
        s = e[i];
      return s === void 0 || t.length === 1 ? s : z.getObjectValue(s, t.slice(1));
    }
  }, {
    key: "overwritePropertyObjectFromAnother",
    value: function overwritePropertyObjectFromAnother(e, t, i) {
      var s = z.getObjectValue(t, i);
      if (s) {
        var r = _objectSpread(_objectSpread({}, s), z.getObjectValue(e, i) || {});
        z.setPropertyValue(e, i, r);
      }
    }
  }, {
    key: "isJson",
    value: function isJson(e) {
      try {
        return JSON.stringify(e), !0;
      } catch (_unused8) {
        return !1;
      }
    }
    // prettier-ignore
  }, {
    key: "assignPropertyFromOneToAnother",
    value: function assignPropertyFromOneToAnother(e, t, i) {
      var _t$e;
      (_t$e = t[e]) !== null && _t$e !== void 0 ? _t$e : t[e] = {}, Object.assign(t[e], i == null ? void 0 : i[e]);
    }
  }]);
}();
var In = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<svg viewBox=\"0 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z\"></path>\n</svg>",
  os = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<svg viewBox=\"0 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.92 24.096q0 0.832 0.576 1.408t1.44 0.608h16.128q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-16.128q-0.832 0-1.44 0.576t-0.576 1.44v16.16z\"></path>\n</svg>",
  C = /*#__PURE__*/function (_G5) {
    function C(e) {
      var _l$model;
      var _this41;
      _classCallCheck(this, C);
      var r, o, a, l;
      var t = JSON.parse(JSON.stringify(e.directConnection)),
        i = C.getKey(e);
      _this41 = _callSuper(this, C, [e, L.buildKeyVerificationDetails(), L.buildHeaders, {
        key: i
      }]), _this41.insertKeyPlaceholderText = "OpenAI API Key", _this41.keyHelpUrl = "https://platform.openai.com/account/api-keys", _this41._microphoneButton = null, _this41._toggleButton = null, _this41._errorElement = null, _this41._loadingElement = null, _this41._pc = null, _this41._mediaStream = null, _this41._isMuted = !1;
      var s = (r = t.openAI) == null ? void 0 : r.realtime;
      if (_typeof(s) == "object") {
        _this41._avatarConfig = s.avatar, _this41._ephemeralKey = s.ephemeralKey, _this41._errorConfig = s.error, _this41._loadingConfig = s.loading, Object.assign(_this41.rawBody, s.config);
        var _ref26 = ((a = (o = e.directConnection) == null ? void 0 : o.openAI) == null ? void 0 : a.realtime).config || {},
          c = _ref26.function_handler;
        c && (_this41._functionHandler = c);
      }
      (_l$model = (l = _this41.rawBody).model) !== null && _l$model !== void 0 ? _l$model : l.model = "gpt-4o-realtime-preview-2024-12-17", _this41._avatarConfig = C.buildAvatarConfig(s), _this41._buttonsConfig = C.buildButtonsConfig(s), _this41._avatarEl = C.createAvatar(_this41._avatarConfig), _this41._containerEl = _this41.createContainer(), _this41._deepChat = e;
      return _this41;
    }
    _inherits(C, _G5);
    return _createClass(C, [{
      key: "setUpView",
      value:
      // called after API key was inserted
      function setUpView(e, t) {
        e.style.display = "none", t.appendChild(this._containerEl), this.setup();
      }
    }, {
      key: "setup",
      value: function () {
        var _setup = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee90() {
          var s, e, t, i;
          return _regeneratorRuntime().wrap(function _callee90$(_context90) {
            while (1) switch (_context90.prev = _context90.next) {
              case 0:
                e = (s = this._deepChat.directConnection) == null ? void 0 : s.openAI;
                if (e) {
                  _context90.next = 3;
                  break;
                }
                return _context90.abrupt("return");
              case 3:
                t = e == null ? void 0 : e.realtime;
                if (!(_typeof(t) != "object" || !t.autoStart && !t.autoFetchEphemeralKey)) {
                  _context90.next = 6;
                  break;
                }
                return _context90.abrupt("return");
              case 6:
                i = this.key || e.key;
                (t.fetchEphemeralKey || i) && t.autoStart && (this.changeToUnavailable(), this.displayLoading()), this.fetchEphemeralKey(t.autoStart);
              case 8:
              case "end":
                return _context90.stop();
            }
          }, _callee90, this);
        }));
        function setup() {
          return _setup.apply(this, arguments);
        }
        return setup;
      }()
    }, {
      key: "fetchEphemeralKey",
      value: function () {
        var _fetchEphemeralKey = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee91(e) {
          var o, t, i, s, r, a;
          return _regeneratorRuntime().wrap(function _callee91$(_context91) {
            while (1) switch (_context91.prev = _context91.next) {
              case 0:
                t = (o = this._deepChat.directConnection) == null ? void 0 : o.openAI, i = _typeof(t == null ? void 0 : t.realtime) == "object" ? t == null ? void 0 : t.realtime.fetchEphemeralKey : void 0, s = t == null ? void 0 : t.realtime, r = this.key || t.key;
                if (!(_typeof(s) == "object")) {
                  _context91.next = 26;
                  break;
                }
                if (this._ephemeralKey) {
                  _context91.next = 23;
                  break;
                }
                _context91.prev = 3;
                if (!i) {
                  _context91.next = 12;
                  break;
                }
                a = i();
                a.then && (this._retrievingEphemeralKey = a);
                _context91.next = 9;
                return a;
              case 9:
                this._ephemeralKey = _context91.sent;
                _context91.next = 18;
                break;
              case 12:
                _context91.t0 = r;
                if (!_context91.t0) {
                  _context91.next = 18;
                  break;
                }
                this._retrievingEphemeralKey = this.getEphemeralKey(r);
                _context91.next = 17;
                return this._retrievingEphemeralKey;
              case 17:
                this._ephemeralKey = _context91.sent;
              case 18:
                _context91.next = 23;
                break;
              case 20:
                _context91.prev = 20;
                _context91.t1 = _context91["catch"](3);
                this.displayFailedToRetrieveEphemeralKey(_context91.t1);
              case 23:
                this._ephemeralKey && (e ? this.init(this._ephemeralKey) : this.changeToAvailable());
                _context91.next = 38;
                break;
              case 26:
                if (!r) {
                  _context91.next = 38;
                  break;
                }
                _context91.prev = 27;
                this._retrievingEphemeralKey = this.getEphemeralKey(r);
                _context91.next = 31;
                return this._retrievingEphemeralKey;
              case 31:
                this._ephemeralKey = _context91.sent;
                e && this.init(this._ephemeralKey);
                _context91.next = 38;
                break;
              case 35:
                _context91.prev = 35;
                _context91.t2 = _context91["catch"](27);
                this.displayFailedToRetrieveEphemeralKey(_context91.t2);
              case 38:
              case "end":
                return _context91.stop();
            }
          }, _callee91, this, [[3, 20], [27, 35]]);
        }));
        function fetchEphemeralKey(_x170) {
          return _fetchEphemeralKey.apply(this, arguments);
        }
        return fetchEphemeralKey;
      }()
    }, {
      key: "getEphemeralKey",
      value: function () {
        var _getEphemeralKey = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee92(e) {
          return _regeneratorRuntime().wrap(function _callee92$(_context92) {
            while (1) switch (_context92.prev = _context92.next) {
              case 0:
                _context92.next = 2;
                return fetch("https://api.openai.com/v1/realtime/sessions", {
                  method: "POST",
                  body: JSON.stringify(this.rawBody),
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(e)
                  }
                });
              case 2:
                _context92.next = 4;
                return _context92.sent.json();
              case 4:
                return _context92.abrupt("return", _context92.sent.client_secret.value);
              case 5:
              case "end":
                return _context92.stop();
            }
          }, _callee92, this);
        }));
        function getEphemeralKey(_x171) {
          return _getEphemeralKey.apply(this, arguments);
        }
        return getEphemeralKey;
      }()
    }, {
      key: "createContainer",
      value: function createContainer() {
        var e = document.createElement("div");
        return e.id = "deep-chat-openai-realtime-container", e.appendChild(this.createAvatarContainer()), e.appendChild(this.createButtonsContainer()), e.appendChild(this.createError()), e;
      }
    }, {
      key: "createAvatarContainer",
      value: function createAvatarContainer() {
        var t, i;
        var e = document.createElement("div");
        return e.id = "deep-chat-openai-realtime-avatar-container", Object.assign(e.style, (i = (t = this._avatarConfig) == null ? void 0 : t.styles) == null ? void 0 : i.container), e.appendChild(this._avatarEl), e;
      }
    }, {
      key: "createButtonsContainer",
      value: function createButtonsContainer() {
        var s;
        var e = document.createElement("div");
        e.id = "deep-chat-openai-realtime-buttons-container", Object.assign(e.style, (s = this._buttonsConfig) == null ? void 0 : s.container), this._microphoneButton = this.createMicophoneButton();
        var t = C.createButtonContainer(this._microphoneButton.elementRef);
        this._toggleButton = this.createToggleButton();
        var i = C.createButtonContainer(this._toggleButton.elementRef);
        return e.appendChild(t), e.appendChild(i), e.appendChild(this.createLoading()), e;
      }
    }, {
      key: "createMicophoneButton",
      value: function createMicophoneButton() {
        var _this42 = this;
        var t;
        var e = new ki((t = this._buttonsConfig) == null ? void 0 : t.microphone);
        return e.elementRef.classList.add(C.BUTTON_DEFAULT, "deep-chat-openai-realtime-microphone"), e.elementRef.onclick = function () {
          e.isActive ? (_this42.toggleMicorphone(!0), e.elementRef.classList.replace(C.MICROPHONE_ACTIVE, C.BUTTON_DEFAULT), e.changeToDefault(), _this42._isMuted = !1) : (_this42.toggleMicorphone(!1), e.elementRef.classList.replace(C.BUTTON_DEFAULT, C.MICROPHONE_ACTIVE), N.removeAriaAttributes(e.elementRef), e.changeToActive(), _this42._isMuted = !0);
        }, e;
      }
    }, {
      key: "toggleMicorphone",
      value: function toggleMicorphone(e) {
        var t;
        (t = this._mediaStream) == null || t.getAudioTracks().forEach(function (i) {
          return i.enabled = e;
        });
      }
    }, {
      key: "createToggleButton",
      value: function createToggleButton() {
        var _this43 = this;
        var t;
        var e = new ki((t = this._buttonsConfig) == null ? void 0 : t.toggle);
        return e.elementRef.classList.add(C.BUTTON_DEFAULT, "deep-chat-openai-realtime-toggle"), e.elementRef.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee93() {
          var i, s;
          return _regeneratorRuntime().wrap(function _callee93$(_context93) {
            while (1) switch (_context93.prev = _context93.next) {
              case 0:
                if (!e.isActive) {
                  _context93.next = 4;
                  break;
                }
                e.changeToDefault(), _this43.stop();
                _context93.next = 30;
                break;
              case 4:
                _context93.prev = 4;
                if (!_this43._ephemeralKey) {
                  _context93.next = 11;
                  break;
                }
                _this43.displayLoading();
                _context93.next = 9;
                return _this43.init(_this43._ephemeralKey);
              case 9:
                _context93.next = 25;
                break;
              case 11:
                if (!_this43._retrievingEphemeralKey) {
                  _context93.next = 22;
                  break;
                }
                _this43.displayLoading();
                _context93.next = 15;
                return _this43._retrievingEphemeralKey;
              case 15:
                s = _context93.sent;
                _context93.t0 = (i = _this43._toggleButton) != null && i.isActive;
                if (!_context93.t0) {
                  _context93.next = 20;
                  break;
                }
                _context93.next = 20;
                return _this43.init(s);
              case 20:
                _context93.next = 25;
                break;
              case 22:
                _this43.displayLoading();
                _context93.next = 25;
                return _this43.fetchEphemeralKey(!0);
              case 25:
                _context93.next = 30;
                break;
              case 27:
                _context93.prev = 27;
                _context93.t1 = _context93["catch"](4);
                console.error("Failed to start conversation:", _context93.t1), _this43.displayError(), _this43.hideLoading();
              case 30:
              case "end":
                return _context93.stop();
            }
          }, _callee93, null, [[4, 27]]);
        })), e;
      }
    }, {
      key: "init",
      value: function () {
        var _init2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee96(e) {
          var _this44 = this;
          var t, i, s, r, o, a, l, c, d;
          return _regeneratorRuntime().wrap(function _callee96$(_context96) {
            while (1) switch (_context96.prev = _context96.next) {
              case 0:
                t = new RTCPeerConnection();
                this._pc = t;
                i = document.createElement("audio");
                i.autoplay = !0;
                s = new AudioContext(), r = s.createAnalyser();
                r.fftSize = 256;
                o = new Uint8Array(r.frequencyBinCount);
                this._pc.ontrack = /*#__PURE__*/function () {
                  var _ref28 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee94(l) {
                    var c;
                    return _regeneratorRuntime().wrap(function _callee94$(_context94) {
                      while (1) switch (_context94.prev = _context94.next) {
                        case 0:
                          if (!l.streams[0]) {
                            _context94.next = 11;
                            break;
                          }
                          i.srcObject = l.streams[0];
                          c = s.createMediaStreamSource(l.streams[0]);
                          _context94.t0 = s.state === "suspended";
                          if (!_context94.t0) {
                            _context94.next = 7;
                            break;
                          }
                          _context94.next = 7;
                          return s.resume();
                        case 7:
                          c.connect(r);
                          _this44.monitorFrequencies(r, o);
                          _context94.next = 12;
                          break;
                        case 11:
                          console.error("No streams found in the ontrack event."), _this44.displayError();
                        case 12:
                        case "end":
                          return _context94.stop();
                      }
                    }, _callee94);
                  }));
                  return function (_x173) {
                    return _ref28.apply(this, arguments);
                  };
                }();
                _context96.next = 10;
                return navigator.mediaDevices.getUserMedia({
                  audio: !0
                }).then(function (l) {
                  var c;
                  t === _this44._pc && (_this44._mediaStream = l, (c = _this44._pc) == null || c.addTrack(_this44._mediaStream.getTracks()[0]), _this44._isMuted && _this44.toggleMicorphone(!1));
                })["catch"](function (l) {
                  console.error("Error accessing microphone:", l), _this44.displayError();
                });
              case 10:
                a = this._pc.createDataChannel("oai-events");
                a.addEventListener("message", /*#__PURE__*/function () {
                  var _ref29 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee95(l) {
                    var d, c, h, f, m;
                    return _regeneratorRuntime().wrap(function _callee95$(_context95) {
                      while (1) switch (_context95.prev = _context95.next) {
                        case 0:
                          c = JSON.parse(l.data);
                          if (!(c.type === "session.created")) {
                            _context95.next = 5;
                            break;
                          }
                          _this44.removeUnavailable(), _this44._toggleButton && (N.removeAriaAttributes(_this44._toggleButton.elementRef), _this44._toggleButton.changeToActive()), _this44.hideLoading();
                          _context95.next = 20;
                          break;
                        case 5:
                          if (!(c.type === "response.done")) {
                            _context95.next = 19;
                            break;
                          }
                          h = (d = JSON.parse(l.data).response.output) == null ? void 0 : d[0];
                          if (!((h == null ? void 0 : h.type) === "function_call")) {
                            _context95.next = 17;
                            break;
                          }
                          f = h.name, m = h.call_id;
                          _context95.prev = 9;
                          _context95.next = 12;
                          return _this44.handleTool(f, h.arguments, m, a);
                        case 12:
                          _context95.next = 17;
                          break;
                        case 14:
                          _context95.prev = 14;
                          _context95.t0 = _context95["catch"](9);
                          _this44.stopOnError(_context95.t0);
                        case 17:
                          _context95.next = 20;
                          break;
                        case 19:
                          c.type === "error" ? _this44.stopOnError(c.error.message) : c.type === "invalid_request_error" ? _this44.stopOnError(c.message) : c.type;
                        case 20:
                        case "end":
                          return _context95.stop();
                      }
                    }, _callee95, null, [[9, 14]]);
                  }));
                  return function (_x174) {
                    return _ref29.apply(this, arguments);
                  };
                }());
                _context96.prev = 12;
                _context96.next = 15;
                return this._pc.createOffer();
              case 15:
                l = _context96.sent;
                _context96.t0 = t !== this._pc;
                if (_context96.t0) {
                  _context96.next = 21;
                  break;
                }
                _context96.next = 20;
                return this._pc.setLocalDescription(l);
              case 20:
                _context96.t0 = t !== this._pc;
              case 21:
                if (!_context96.t0) {
                  _context96.next = 23;
                  break;
                }
                return _context96.abrupt("return");
              case 23:
                _context96.next = 25;
                return fetch("https://api.openai.com/v1/realtime", {
                  method: "POST",
                  body: l.sdp,
                  headers: {
                    Authorization: "Bearer ".concat(e),
                    "Content-Type": "application/sdp"
                  }
                });
              case 25:
                c = _context96.sent;
                if (!(t !== this._pc)) {
                  _context96.next = 28;
                  break;
                }
                return _context96.abrupt("return");
              case 28:
                _context96.next = 30;
                return c.text();
              case 30:
                _context96.t1 = _context96.sent;
                d = {
                  type: "answer",
                  sdp: _context96.t1
                };
                _context96.t2 = t !== this._pc;
                if (_context96.t2) {
                  _context96.next = 37;
                  break;
                }
                _context96.next = 36;
                return this._pc.setRemoteDescription(d);
              case 36:
                _context96.t2 = t !== this._pc;
              case 37:
                if (!_context96.t2) {
                  _context96.next = 39;
                  break;
                }
                return _context96.abrupt("return");
              case 39:
                _context96.next = 44;
                break;
              case 41:
                _context96.prev = 41;
                _context96.t3 = _context96["catch"](12);
                console.error(_context96.t3), this.displayError();
              case 44:
              case "end":
                return _context96.stop();
            }
          }, _callee96, this, [[12, 41]]);
        }));
        function init(_x172) {
          return _init2.apply(this, arguments);
        }
        return init;
      }() // there is a bug where sometimes upon refreshing the browser too many times the frequencyData is all 0s
      // in such instance please wait and refresh at a later time
    }, {
      key: "monitorFrequencies",
      value: function monitorFrequencies(e, t) {
        var _this45 = this;
        var i = function (_i3) {
          function i() {
            return _i3.apply(this, arguments);
          }
          i.toString = function () {
            return _i3.toString();
          };
          return i;
        }(function () {
          var c;
          e.getByteFrequencyData(t);
          var s = t.reduce(function (d, u) {
              return d + u;
            }, 0),
            r = t.length * 255,
            o = s / r * 100,
            a = 1,
            l = a + o / 100 * (((c = _this45._avatarConfig) == null ? void 0 : c.maxScale) - a);
          _this45._avatarEl.style.transform = "scale(".concat(l, ")"), requestAnimationFrame(i);
        });
        i();
      }
    }, {
      key: "stopOnError",
      value: function stopOnError(e) {
        this.stop(), console.error(e), this.displayError();
      }
    }, {
      key: "stop",
      value: function stop() {
        var e;
        (e = this._mediaStream) == null || e.getTracks().forEach(function (t) {
          return t.stop();
        }), this._mediaStream = null, this._pc && (this._pc.close(), this._pc = null);
      }
    }, {
      key: "changeToUnavailable",
      value: function changeToUnavailable() {
        this._microphoneButton && C.changeButtonToUnavailable(this._microphoneButton), this._toggleButton && C.changeButtonToUnavailable(this._toggleButton);
      }
    }, {
      key: "changeToAvailable",
      value: function changeToAvailable() {
        this._microphoneButton && C.changeButtonToAvailable(this._microphoneButton), this._toggleButton && C.changeButtonToAvailable(this._toggleButton);
      }
    }, {
      key: "removeUnavailable",
      value: function removeUnavailable() {
        this._microphoneButton && C.removeButtonUnavailable(this._microphoneButton), this._toggleButton && C.removeButtonUnavailable(this._toggleButton);
      }
    }, {
      key: "createError",
      value: function createError() {
        var t;
        var e = document.createElement("div");
        return e.id = "deep-chat-openai-realtime-error", Object.assign(e.style, (t = this._errorConfig) == null ? void 0 : t.style), this._errorElement = e, e;
      }
    }, {
      key: "displayFailedToRetrieveEphemeralKey",
      value: function displayFailedToRetrieveEphemeralKey(e) {
        console.error("Failed to retrieve ephemeral key"), console.error(e), this.displayError();
      }
    }, {
      key: "displayError",
      value: function displayError() {
        var e;
        this._errorElement && (this._errorElement.style.display = "block", this._errorElement.textContent = ((e = this._errorConfig) == null ? void 0 : e.text) || "Error", this.changeToUnavailable()), this.hideLoading();
      }
    }, {
      key: "createLoading",
      value: function createLoading() {
        var t, i;
        var e = document.createElement("div");
        return e.id = "deep-chat-openai-realtime-loading", this._loadingElement = e, (t = this._loadingConfig) != null && t.html && (this._loadingElement.innerHTML = this._loadingConfig.html), Object.assign(e.style, (i = this._loadingConfig) == null ? void 0 : i.style), e.style.display = "none", e;
      }
    }, {
      key: "displayLoading",
      value: function displayLoading() {
        var e, t, i;
        this._toggleButton && (this._toggleButton.changeToActive(), this._toggleButton.elementRef.classList.add(C.BUTTON_LOADING), N.removeAriaDisabled(this._toggleButton.elementRef), N.addAriaBusy(this._toggleButton.elementRef)), (typeof ((e = this._loadingConfig) == null ? void 0 : e.display) != "boolean" || this._loadingConfig.display) && this._loadingElement && (this._loadingElement.style.display = "block", (t = this._loadingConfig) != null && t.html || (this._loadingElement.textContent = ((i = this._loadingConfig) == null ? void 0 : i.text) || "Loading"));
      }
    }, {
      key: "hideLoading",
      value: function hideLoading() {
        this._toggleButton && (this._toggleButton.elementRef.classList.remove(C.BUTTON_LOADING), N.removeAriaBusy(this._toggleButton.elementRef)), this._loadingElement && (this._loadingElement.style.display = "none");
      }
      // https://platform.openai.com/docs/guides/function-calling?api-mode=responses
    }, {
      key: "handleTool",
      value: function () {
        var _handleTool = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee97(e, t, i, s) {
          var r, o, a;
          return _regeneratorRuntime().wrap(function _callee97$(_context97) {
            while (1) switch (_context97.prev = _context97.next) {
              case 0:
                if (this._functionHandler) {
                  _context97.next = 2;
                  break;
                }
                throw Error("Please define the `function_handler` property inside the [openAI](https://deepchat.dev/docs/directConnection/OpenAI/OpenAIRealtime#OpenAIRealtimeFunction) object.");
              case 2:
                _context97.next = 4;
                return this._functionHandler({
                  name: e,
                  arguments: t
                });
              case 4:
                r = _context97.sent;
                if (!(_typeof(r) != "object" || !z.isJson(r))) {
                  _context97.next = 7;
                  break;
                }
                throw Error('The `function_handler` response must be a JSON object, e.g. {response: "My response"}');
              case 7:
                o = JSON.stringify({
                  type: "conversation.item.create",
                  item: {
                    type: "function_call_output",
                    call_id: i,
                    output: JSON.stringify(r)
                  }
                });
                s.send(o);
                a = {
                  type: "response.create"
                };
                s.send(JSON.stringify(a));
              case 11:
              case "end":
                return _context97.stop();
            }
          }, _callee97, this);
        }));
        function handleTool(_x175, _x176, _x177, _x178) {
          return _handleTool.apply(this, arguments);
        }
        return handleTool;
      }()
    }, {
      key: "isCustomView",
      value: function isCustomView() {
        return !0;
      }
    }], [{
      key: "getKey",
      value: function getKey(e) {
        var t = e.directConnection.openAI;
        if (t != null && t.key) return t.key;
        var i = t == null ? void 0 : t.realtime;
        if (_typeof(i) == "object" && (i.ephemeralKey || i.fetchEphemeralKey)) return "placeholder";
      }
    }, {
      key: "buildAvatarConfig",
      value: function buildAvatarConfig(e) {
        var t = _typeof(e) == "object" && e.avatar ? JSON.parse(JSON.stringify(e.avatar)) : {};
        return t.maxScale = t.maxScale && t.maxScale >= 1 ? t.maxScale : 2.5, t;
      }
    }, {
      key: "buildButtonsConfig",
      value: function buildButtonsConfig(e) {
        var _t$microphone, _o$default, _a$svg, _l$content, _t$toggle, _h$default, _f$svg, _m$content, _p$active, _g$svg, _b$content;
        var i, s, r, o, a, l, c, d, u, h, f, m, p, g, b;
        var t = _typeof(e) == "object" && e.buttons ? JSON.parse(JSON.stringify(e.buttons)) : {};
        return (r = (s = (i = t.microphone) == null ? void 0 : i["default"]) == null ? void 0 : s.text) != null && r.content || ((_t$microphone = t.microphone) !== null && _t$microphone !== void 0 ? _t$microphone : t.microphone = {}, (_o$default = (o = t.microphone)["default"]) !== null && _o$default !== void 0 ? _o$default : o["default"] = {}, (_a$svg = (a = t.microphone["default"]).svg) !== null && _a$svg !== void 0 ? _a$svg : a.svg = {}, (_l$content = (l = t.microphone["default"].svg).content) !== null && _l$content !== void 0 ? _l$content : l.content = Ln), (u = (d = (c = t.toggle) == null ? void 0 : c["default"]) == null ? void 0 : d.text) != null && u.content || ((_t$toggle = t.toggle) !== null && _t$toggle !== void 0 ? _t$toggle : t.toggle = {}, (_h$default = (h = t.toggle)["default"]) !== null && _h$default !== void 0 ? _h$default : h["default"] = {}, (_f$svg = (f = t.toggle["default"]).svg) !== null && _f$svg !== void 0 ? _f$svg : f.svg = {}, (_m$content = (m = t.toggle["default"].svg).content) !== null && _m$content !== void 0 ? _m$content : m.content = In, (_p$active = (p = t.toggle).active) !== null && _p$active !== void 0 ? _p$active : p.active = {}, (_g$svg = (g = t.toggle.active).svg) !== null && _g$svg !== void 0 ? _g$svg : g.svg = {}, (_b$content = (b = t.toggle.active.svg).content) !== null && _b$content !== void 0 ? _b$content : b.content = os), t;
      }
    }, {
      key: "createAvatar",
      value: function createAvatar(e) {
        var i;
        var t = document.createElement("img");
        return t.id = "deep-chat-openai-realtime-avatar", Object.assign(t.style, (i = e == null ? void 0 : e.styles) == null ? void 0 : i.image), t.src = (e == null ? void 0 : e.src) || ts, t;
      }
    }, {
      key: "createButtonContainer",
      value: function createButtonContainer(e) {
        var t = document.createElement("div");
        return t.classList.add("deep-chat-openai-realtime-button-container"), t.appendChild(e), t;
      }
    }, {
      key: "changeButtonToUnavailable",
      value: function changeButtonToUnavailable(e) {
        e.elementRef.classList.add(C.UNAVAILABLE), N.removeAriaBusy(e.elementRef), N.addAriaDisabled(e.elementRef), e.changeToUnavailable();
      }
    }, {
      key: "changeButtonToAvailable",
      value: function changeButtonToAvailable(e) {
        C.removeButtonUnavailable(e), e.changeToDefault();
      }
    }, {
      key: "removeButtonUnavailable",
      value: function removeButtonUnavailable(e) {
        N.removeAriaDisabled(e.elementRef), e.elementRef.classList.remove(C.UNAVAILABLE);
      }
    }]);
  }(G);
C.BUTTON_DEFAULT = "deep-chat-openai-realtime-button-default", C.BUTTON_LOADING = "deep-chat-openai-realtime-button-loading", C.MICROPHONE_ACTIVE = "deep-chat-openai-realtime-microphone-active", C.UNAVAILABLE = "deep-chat-openai-realtime-button-unavailable";
var as = C;
var mt = /*#__PURE__*/function (_G6) {
  function mt(e) {
    var _o$model, _a$voice;
    var _this46;
    _classCallCheck(this, mt);
    var r, o, a;
    var t = JSON.parse(JSON.stringify(e.directConnection)),
      i = t == null ? void 0 : t.openAI;
    _this46 = _callSuper(this, mt, [e, L.buildKeyVerificationDetails(), L.buildHeaders, i]), _this46.insertKeyPlaceholderText = "OpenAI API Key", _this46.keyHelpUrl = "https://platform.openai.com/account/api-keys", _this46.url = "https://api.openai.com/v1/audio/speech", _this46.permittedErrorPrefixes = ["Invalid"], _this46.introPanelMarkUp = "\n    <div style=\"width: 100%; text-align: center; margin-left: -10px\"><b>OpenAI : Text To Speech</b></div>\n    <p>Generate an audio file based on your text input.</p>\n    <p>Click <a href=\"https://platform.openai.com/docs/guides/text-to-speech\">here</a> for more information.</p>";
    var s = (r = t == null ? void 0 : t.openAI) == null ? void 0 : r.textToSpeech;
    _typeof(s) == "object" && Object.assign(_this46.rawBody, s), (_o$model = (o = _this46.rawBody).model) !== null && _o$model !== void 0 ? _o$model : o.model = mt.DEFAULT_MODEL, (_a$voice = (a = _this46.rawBody).voice) !== null && _a$voice !== void 0 ? _a$voice : a.voice = mt.DEFAULT_VOIDE, _this46.textInputPlaceholderText = "Insert text to generate audio", _this46.rawBody.response_format = "mp3";
    return _this46;
  }
  _inherits(mt, _G6);
  return _createClass(mt, [{
    key: "preprocessBody",
    value: function preprocessBody(e, t) {
      var r, o;
      var i = JSON.parse(JSON.stringify(e)),
        s = (o = (r = t[t.length - 1]) == null ? void 0 : r.text) == null ? void 0 : o.trim();
      return s && s !== "" && (i.input = s), i;
    }
  }, {
    key: "callServiceAPI",
    value: function () {
      var _callServiceAPI12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee98(e, t) {
        var s, i;
        return _regeneratorRuntime().wrap(function _callee98$(_context98) {
          while (1) switch (_context98.prev = _context98.next) {
            case 0:
              if ((s = this.connectSettings) != null && s.headers) {
                _context98.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              this.url = this.connectSettings.url || this.url;
              i = this.preprocessBody(this.rawBody, t);
              R.request(this, i, e);
            case 5:
            case "end":
              return _context98.stop();
          }
        }, _callee98, this);
      }));
      function callServiceAPI(_x179, _x180) {
        return _callServiceAPI12.apply(this, arguments);
      }
      return callServiceAPI;
    }()
  }, {
    key: "extractResultData",
    value: function () {
      var _extractResultData15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee99(e) {
        return _regeneratorRuntime().wrap(function _callee99$(_context99) {
          while (1) switch (_context99.prev = _context99.next) {
            case 0:
              if (!(e instanceof Blob)) {
                _context99.next = 2;
                break;
              }
              return _context99.abrupt("return", new Promise(function (t) {
                var i = new FileReader();
                i.readAsDataURL(e), i.onload = function (s) {
                  t({
                    files: [{
                      src: s.target.result,
                      type: "audio"
                    }]
                  });
                };
              }));
            case 2:
              if (!e.error) {
                _context99.next = 4;
                break;
              }
              throw e.error.message;
            case 4:
              return _context99.abrupt("return", {
                error: "error"
              });
            case 5:
            case "end":
              return _context99.stop();
          }
        }, _callee99);
      }));
      function extractResultData(_x181) {
        return _extractResultData15.apply(this, arguments);
      }
      return extractResultData;
    }()
  }]);
}(G);
mt.DEFAULT_MODEL = "tts-1", mt.DEFAULT_VOIDE = "alloy";
var ls = mt;
var pe = /*#__PURE__*/function (_G7) {
  function pe(e) {
    var _o$model2;
    var _this47;
    _classCallCheck(this, pe);
    var r, o;
    var t = JSON.parse(JSON.stringify(e.directConnection)),
      i = t == null ? void 0 : t.openAI;
    _this47 = _callSuper(this, pe, [e, L.buildKeyVerificationDetails(), L.buildHeaders, i, {
      audio: {}
    }]), _this47.insertKeyPlaceholderText = "OpenAI API Key", _this47.keyHelpUrl = "https://platform.openai.com/account/api-keys", _this47.introPanelMarkUp = "\n    <div style=\"width: 100%; text-align: center; margin-left: -10px\"><b>OpenAI : Speech To Text</b></div>\n    <p><b>Upload an audio file</b> to transcribe it into text. You can optionally provide text to guide the audio\n      processing.\n    <p>Click <a href=\"https://platform.openai.com/docs/guides/speech-to-text\">here</a> for more info.</p>", _this47.url = "", _this47.permittedErrorPrefixes = ["Invalid"], _this47.textInputPlaceholderText = "Upload an audio file", _this47._service_url = pe.AUDIO_TRANSCRIPTIONS_URL;
    var s = (r = t == null ? void 0 : t.openAI) == null ? void 0 : r.audio;
    _typeof(s) == "object" && (_this47.processConfig(s), pe.cleanConfig(s), Object.assign(_this47.rawBody, s)), (_o$model2 = (o = _this47.rawBody).model) !== null && _o$model2 !== void 0 ? _o$model2 : o.model = pe.DEFAULT_MODEL, _this47.rawBody.response_format = "json", _this47.canSendMessage = pe.canSendFileMessage;
    return _this47;
  }
  _inherits(pe, _G7);
  return _createClass(pe, [{
    key: "processConfig",
    value: function processConfig(e) {
      e != null && e.type && e.type === "translation" && (this._service_url = pe.AUDIO_TRANSLATIONS_URL, delete e.language);
    }
  }, {
    key: "preprocessBody",
    value: function preprocessBody(e, t) {
      var r, o;
      var i = JSON.parse(JSON.stringify(e)),
        s = (o = (r = t[t.length - 1]) == null ? void 0 : r.text) == null ? void 0 : o.trim();
      return s && s !== "" && (i.prompt = s), i;
    }
    // prettier-ignore
  }, {
    key: "callServiceAPI",
    value: function () {
      var _callServiceAPI13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee100(e, t, i) {
        var o, s, r;
        return _regeneratorRuntime().wrap(function _callee100$(_context100) {
          while (1) switch (_context100.prev = _context100.next) {
            case 0:
              if ((o = this.connectSettings) != null && o.headers) {
                _context100.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (i != null && i[0]) {
                _context100.next = 4;
                break;
              }
              throw new Error("No file was added");
            case 4:
              this.url = this.connectSettings.url || this._service_url;
              s = this.preprocessBody(this.rawBody, t), r = pe.createFormDataBody(s, i[0]);
              E.tempRemoveContentHeader(this.connectSettings, R.request.bind(this, this, r, e), !1);
            case 7:
            case "end":
              return _context100.stop();
          }
        }, _callee100, this);
      }));
      function callServiceAPI(_x182, _x183, _x184) {
        return _callServiceAPI13.apply(this, arguments);
      }
      return callServiceAPI;
    }()
  }, {
    key: "extractResultData",
    value: function () {
      var _extractResultData16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee101(e) {
        return _regeneratorRuntime().wrap(function _callee101$(_context101) {
          while (1) switch (_context101.prev = _context101.next) {
            case 0:
              if (!e.error) {
                _context101.next = 2;
                break;
              }
              throw e.error.message;
            case 2:
              return _context101.abrupt("return", {
                text: e.text
              });
            case 3:
            case "end":
              return _context101.stop();
          }
        }, _callee101);
      }));
      function extractResultData(_x185) {
        return _extractResultData16.apply(this, arguments);
      }
      return extractResultData;
    }()
  }], [{
    key: "canSendFileMessage",
    value: function canSendFileMessage(e, t) {
      return !!(t != null && t[0]);
    }
  }, {
    key: "cleanConfig",
    value: function cleanConfig(e) {
      delete e.type;
    }
  }, {
    key: "createFormDataBody",
    value: function createFormDataBody(e, t) {
      var i = new FormData();
      return i.append("file", t), Object.keys(e).forEach(function (s) {
        i.append(s, String(e[s]));
      }), i;
    }
  }]);
}(G);
pe.AUDIO_TRANSCRIPTIONS_URL = "https://api.openai.com/v1/audio/transcriptions", pe.AUDIO_TRANSLATIONS_URL = "https://api.openai.com/v1/audio/translations", pe.DEFAULT_MODEL = "whisper-1";
var cs = pe;
var fe = /*#__PURE__*/function () {
  function fe() {
    _classCallCheck(this, fe);
  }
  return _createClass(fe, null, [{
    key: "buildTextToSpeechHeaders",
    value: function buildTextToSpeechHeaders(e, t) {
      return {
        "Ocp-Apim-Subscription-Key": t,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": e
      };
    }
  }, {
    key: "buildSpeechToTextHeaders",
    value: function buildSpeechToTextHeaders(e) {
      return {
        "Ocp-Apim-Subscription-Key": e,
        Accept: "application/json"
      };
    }
    // prettier-ignore
  }, {
    key: "handleSpeechVerificationResult",
    value: function handleSpeechVerificationResult(e, t, i, s) {
      e.error ? s(k.INVALID_KEY) : i(t);
    }
  }, {
    key: "buildSpeechKeyVerificationDetails",
    value: function buildSpeechKeyVerificationDetails(e) {
      return {
        url: "https://".concat(e, ".api.cognitive.microsoft.com/sts/v1.0/issuetoken"),
        method: "POST",
        createHeaders: function createHeaders(t) {
          return {
            "Ocp-Apim-Subscription-Key": "".concat(t)
          };
        },
        handleVerificationResult: fe.handleSpeechVerificationResult
      };
    }
  }, {
    key: "buildSummarizationHeader",
    value: function buildSummarizationHeader(e) {
      return {
        "Ocp-Apim-Subscription-Key": e,
        "Content-Type": "application/json"
      };
    }
    // prettier-ignore
  }, {
    key: "handleLanguageVerificationResult",
    value: function handleLanguageVerificationResult(e, t, i, s) {
      var o;
      ((o = e.error) == null ? void 0 : o.code) === "401" ? s(k.INVALID_KEY) : i(t);
    }
  }, {
    key: "buildLanguageKeyVerificationDetails",
    value: function buildLanguageKeyVerificationDetails(e) {
      return {
        url: "".concat(e, "/language/analyze-text/jobs?api-version=2022-10-01-preview"),
        method: "POST",
        createHeaders: function createHeaders(t) {
          return {
            "Ocp-Apim-Subscription-Key": "".concat(t)
          };
        },
        handleVerificationResult: fe.handleLanguageVerificationResult
      };
    }
    // prettier-ignore
  }, {
    key: "handleTranslationVerificationResult",
    value: function handleTranslationVerificationResult(e, t, i, s) {
      e.json().then(function (o) {
        !Array.isArray(o) && o.error.code === 401e3 ? s(k.INVALID_KEY) : i(t);
      });
    }
  }, {
    key: "buildTranslationKeyVerificationDetails",
    value: function buildTranslationKeyVerificationDetails(e) {
      return {
        url: "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=es",
        method: "POST",
        createHeaders: function createHeaders(t) {
          return fe.buildTranslationHeaders(e, t);
        },
        handleVerificationResult: fe.handleTranslationVerificationResult
      };
    }
  }, {
    key: "buildTranslationHeaders",
    value: function buildTranslationHeaders(e, t) {
      var i = {
        "Ocp-Apim-Subscription-Key": t,
        "Content-Type": "application/json"
      };
      return e && (i["Ocp-Apim-Subscription-Region"] = e), i;
    }
  }]);
}();
var Xo = /*#__PURE__*/function (_G8) {
  // prettier-ignore
  function Xo(e, t, i, s, r) {
    var _this48;
    _classCallCheck(this, Xo);
    _this48 = _callSuper(this, Xo, [e, fe.buildLanguageKeyVerificationDetails(i), t, s, r]), _this48.insertKeyPlaceholderText = "Azure Language Subscription Key", _this48.keyHelpUrl =
    // eslint-disable-next-line max-len
    "https://learn.microsoft.com/en-us/azure/api-management/api-management-subscriptions#create-and-manage-subscriptions-in-azure-portal", _this48.permittedErrorPrefixes = ["Access"];
    return _this48;
  }
  _inherits(Xo, _G8);
  return _createClass(Xo);
}(G);
var Yt = /*#__PURE__*/function (_Xo) {
  function Yt(e) {
    var _a$language;
    var _this49;
    _classCallCheck(this, Yt);
    var s, r, o, a;
    var t = (r = (s = e.directConnection) == null ? void 0 : s.azure) == null ? void 0 : r.summarization,
      i = (o = e.directConnection) == null ? void 0 : o.azure;
    _this49 = _callSuper(this, Yt, [e, fe.buildSummarizationHeader, t.endpoint, i]), _this49.permittedErrorPrefixes = [Yt.ENDPOINT_ERROR_MESSAGE], _this49.url = "", _this49.textInputPlaceholderText = "Insert text to summarize", _this49.isTextInputDisabled = !1, t.endpoint ? ((_a$language = (a = _this49.rawBody).language) !== null && _a$language !== void 0 ? _a$language : a.language = "en", Object.assign(_this49.rawBody, t), _this49.url = "".concat(t.endpoint, "/language/analyze-text/jobs?api-version=2022-10-01-preview")) : (_this49.isTextInputDisabled = !0, _this49.canSendMessage = function () {
      return !1;
    }, setTimeout(function () {
      e.addMessage({
        error: Yt.ENDPOINT_ERROR_MESSAGE
      });
    }));
    return _this49;
  }
  _inherits(Yt, _Xo);
  return _createClass(Yt, [{
    key: "preprocessBody",
    value: function preprocessBody(e, t) {
      var i = t[t.length - 1].text;
      if (i) return {
        analysisInput: {
          documents: [{
            id: "1",
            language: e.language,
            text: i
          }]
        },
        tasks: [{
          kind: "ExtractiveSummarization"
        }]
      };
    }
  }, {
    key: "callServiceAPI",
    value: function () {
      var _callServiceAPI14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee102(e, t) {
        var i;
        return _regeneratorRuntime().wrap(function _callee102$(_context102) {
          while (1) switch (_context102.prev = _context102.next) {
            case 0:
              if (this.connectSettings) {
                _context102.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              i = this.preprocessBody(this.rawBody, t);
              R.request(this, i, e), this.messages = e;
            case 4:
            case "end":
              return _context102.stop();
          }
        }, _callee102, this);
      }));
      function callServiceAPI(_x186, _x187) {
        return _callServiceAPI14.apply(this, arguments);
      }
      return callServiceAPI;
    }()
  }, {
    key: "extractResultData",
    value: function () {
      var _extractResultData17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee103(e) {
        var t, _i4, s;
        return _regeneratorRuntime().wrap(function _callee103$(_context103) {
          while (1) switch (_context103.prev = _context103.next) {
            case 0:
              if (!e.error) {
                _context103.next = 2;
                break;
              }
              throw e.error.message;
            case 2:
              if (this.messages && this.completionsHandlers) {
                _i4 = e.headers.get("operation-location"), s = {
                  method: "GET",
                  headers: (t = this.connectSettings) == null ? void 0 : t.headers
                };
                R.executePollRequest(this, _i4, s, this.messages);
              }
              return _context103.abrupt("return", {
                makingAnotherRequest: !0
              });
            case 4:
            case "end":
              return _context103.stop();
          }
        }, _callee103, this);
      }));
      function extractResultData(_x188) {
        return _extractResultData17.apply(this, arguments);
      }
      return extractResultData;
    }()
  }, {
    key: "extractPollResultData",
    value: function () {
      var _extractPollResultData5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee104(e) {
        var t, _iterator, _step, _i5;
        return _regeneratorRuntime().wrap(function _callee104$(_context104) {
          while (1) switch (_context104.prev = _context104.next) {
            case 0:
              if (!e.error) {
                _context104.next = 2;
                break;
              }
              throw e.error;
            case 2:
              if (!(e.status === "running")) {
                _context104.next = 4;
                break;
              }
              return _context104.abrupt("return", {
                timeoutMS: 2e3
              });
            case 4:
              if (!(e.errors.length > 0)) {
                _context104.next = 6;
                break;
              }
              throw e.errors[0];
            case 6:
              if (!(e.tasks.items[0].results.errors.length > 0)) {
                _context104.next = 8;
                break;
              }
              throw e.tasks.items[0].results.errors[0];
            case 8:
              t = "";
              _iterator = _createForOfIteratorHelper(e.tasks.items[0].results.documents[0].sentences);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  _i5 = _step.value;
                  t += _i5.text;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              return _context104.abrupt("return", {
                text: t || ""
              });
            case 12:
            case "end":
              return _context104.stop();
          }
        }, _callee104);
      }));
      function extractPollResultData(_x189) {
        return _extractPollResultData5.apply(this, arguments);
      }
      return extractPollResultData;
    }()
  }]);
}(Xo);
Yt.ENDPOINT_ERROR_MESSAGE =
// eslint-disable-next-line max-len
"Please define the azure endpoint. [More Information](https://deepchat.dev/docs/directConnection/Azure#Summarization)";
var ds = Yt;
var Vt = /*#__PURE__*/function () {
  function Vt() {
    _classCallCheck(this, Vt);
  }
  return _createClass(Vt, null, [{
    key: "poll",
    value: function () {
      var _poll2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee105(e, t) {
        var i, a, l, d;
        return _regeneratorRuntime().wrap(function _callee105$(_context105) {
          while (1) switch (_context105.prev = _context105.next) {
            case 0:
              i = {
                authorization: e,
                "content-type": "application/json"
              };
              _context105.t0 = "https://api.assemblyai.com/v2/transcript/";
              _context105.next = 4;
              return fetch("https://api.assemblyai.com/v2/transcript", {
                method: "POST",
                body: JSON.stringify({
                  audio_url: t
                }),
                headers: i
              });
            case 4:
              _context105.next = 6;
              return _context105.sent.json();
            case 6:
              _context105.t1 = _context105.sent.id;
              a = _context105.t0.concat.call(_context105.t0, _context105.t1);
            case 8:
              if (l) {
                _context105.next = 24;
                break;
              }
              _context105.next = 11;
              return fetch(a, {
                headers: i
              });
            case 11:
              _context105.next = 13;
              return _context105.sent.json();
            case 13:
              d = _context105.sent;
              if (!(d.status === "completed")) {
                _context105.next = 18;
                break;
              }
              l = d;
              _context105.next = 22;
              break;
            case 18:
              if (!(d.status === "error")) {
                _context105.next = 20;
                break;
              }
              throw new Error("Transcription failed: ".concat(d.error));
            case 20:
              _context105.next = 22;
              return new Promise(function (u) {
                return setTimeout(u, 3e3);
              });
            case 22:
              _context105.next = 8;
              break;
            case 24:
              return _context105.abrupt("return", l);
            case 25:
            case "end":
              return _context105.stop();
          }
        }, _callee105);
      }));
      function poll(_x190, _x191) {
        return _poll2.apply(this, arguments);
      }
      return poll;
    }()
  }, {
    key: "buildHeaders",
    value: function buildHeaders(e) {
      return {
        Authorization: e,
        "Content-Type": "application/octet-stream"
      };
    }
    // prettier-ignore
  }, {
    key: "handleVerificationResult",
    value: function handleVerificationResult(e, t, i, s) {
      var r = e;
      r.error ? r.error.code === "invalid_api_key" ? s(k.INVALID_KEY) : s(k.CONNECTION_FAILED) : i(t);
    }
  }, {
    key: "buildKeyVerificationDetails",
    value: function buildKeyVerificationDetails() {
      return {
        url: "https://api.assemblyai.com/v2/upload",
        method: "POST",
        handleVerificationResult: Vt.handleVerificationResult
      };
    }
  }]);
}();
var xs = /*#__PURE__*/function (_G9) {
  function xs(e) {
    var _this50;
    _classCallCheck(this, xs);
    var i;
    var t = (i = e.directConnection) == null ? void 0 : i.assemblyAI;
    _this50 = _callSuper(this, xs, [e, Vt.buildKeyVerificationDetails(), Vt.buildHeaders, t, {
      audio: {}
    }]), _this50.insertKeyPlaceholderText = "AssemblyAI API Key", _this50.keyHelpUrl = "https://www.assemblyai.com/app/account", _this50.introPanelMarkUp = "\n    <div style=\"width: 100%; text-align: center; margin-left: -10px\"><b>AssemblyAI Audio</b></div>\n    <p><b>Upload an audio file</b> to transcribe it into text.\n    <p>\n      Click <a href=\"https://www.assemblyai.com/docs/Guides/transcribing_an_audio_file#get-started\">here</a> for more info.\n    </p>", _this50.url = "https://api.assemblyai.com/v2/upload", _this50.isTextInputDisabled = !0, _this50.textInputPlaceholderText = "Upload an audio file", _this50.permittedErrorPrefixes = ["Authentication", "Invalid"], _this50.canSendMessage = xs.canFileSendMessage;
    return _this50;
  }
  _inherits(xs, _G9);
  return _createClass(xs, [{
    key: "callServiceAPI",
    value: function () {
      var _callServiceAPI15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee106(e, t, i) {
        var s;
        return _regeneratorRuntime().wrap(function _callee106$(_context106) {
          while (1) switch (_context106.prev = _context106.next) {
            case 0:
              if ((s = this.connectSettings) != null && s.headers) {
                _context106.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (i != null && i[0]) {
                _context106.next = 4;
                break;
              }
              throw new Error("No file was added");
            case 4:
              R.request(this, i[0], e, !1);
            case 5:
            case "end":
              return _context106.stop();
          }
        }, _callee106, this);
      }));
      function callServiceAPI(_x192, _x193, _x194) {
        return _callServiceAPI15.apply(this, arguments);
      }
      return callServiceAPI;
    }()
  }, {
    key: "extractResultData",
    value: function () {
      var _extractResultData18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee107(e) {
        var s, r, t;
        return _regeneratorRuntime().wrap(function _callee107$(_context107) {
          while (1) switch (_context107.prev = _context107.next) {
            case 0:
              if (!e.error) {
                _context107.next = 2;
                break;
              }
              throw e.error;
            case 2:
              t = (r = (s = this.connectSettings) == null ? void 0 : s.headers) == null ? void 0 : r.Authorization;
              _context107.next = 5;
              return Vt.poll(t, e.upload_url);
            case 5:
              _context107.t0 = _context107.sent.text;
              return _context107.abrupt("return", {
                text: _context107.t0
              });
            case 7:
            case "end":
              return _context107.stop();
          }
        }, _callee107, this);
      }));
      function extractResultData(_x195) {
        return _extractResultData18.apply(this, arguments);
      }
      return extractResultData;
    }()
  }], [{
    key: "canFileSendMessage",
    value: function canFileSendMessage(e, t) {
      return !!(t != null && t[0]);
    }
  }]);
}(G);
var On = /*#__PURE__*/function (_G10) {
  // prettier-ignore
  function On(e, t, i, s, r) {
    var _this51;
    _classCallCheck(this, On);
    _this51 = _callSuper(this, On, [e, fe.buildSpeechKeyVerificationDetails(i), t, s, r]), _this51.insertKeyPlaceholderText = "Azure Speech Subscription Key", _this51.keyHelpUrl =
    // eslint-disable-next-line max-len
    "https://learn.microsoft.com/en-us/azure/api-management/api-management-subscriptions#create-and-manage-subscriptions-in-azure-portal";
    return _this51;
  }
  _inherits(On, _G10);
  return _createClass(On);
}(G);
var Ze = /*#__PURE__*/function (_On) {
  // prettier-ignore
  function Ze(e) {
    var _a$lang, _l$name, _c$gender;
    var _this52;
    _classCallCheck(this, Ze);
    var s, r, o, a, l, c;
    var t = (r = (s = e.directConnection) == null ? void 0 : s.azure) == null ? void 0 : r.textToSpeech,
      i = (o = e.directConnection) == null ? void 0 : o.azure;
    _this52 = _callSuper(this, Ze, [e, fe.buildTextToSpeechHeaders.bind({}, (t == null ? void 0 : t.outputFormat) || "audio-16khz-128kbitrate-mono-mp3"), t.region, i]), _this52.permittedErrorPrefixes = [Ze.REGION_ERROR_MESSAGE], _this52.introPanelMarkUp = "\n    <div style=\"width: 100%; text-align: center; margin-left: -10px\"><b>Azure Text To Speech</b></div>\n    <p>Insert text to synthesize it to audio.\n    <p>\n      Click <a href=\"".concat(Ze.HELP_LINK, "\">here</a> for more info.\n    </p>"), _this52.isTextInputDisabled = !1, _this52.url = "", t.region ? (Object.assign(_this52.rawBody, t), (_a$lang = (a = _this52.rawBody).lang) !== null && _a$lang !== void 0 ? _a$lang : a.lang = "en-US", (_l$name = (l = _this52.rawBody).name) !== null && _l$name !== void 0 ? _l$name : l.name = "en-US-JennyNeural", (_c$gender = (c = _this52.rawBody).gender) !== null && _c$gender !== void 0 ? _c$gender : c.gender = "Female", _this52.url = "https://".concat(t.region, ".tts.speech.microsoft.com/cognitiveservices/v1")) : (_this52.isTextInputDisabled = !0, _this52.canSendMessage = function () {
      return !1;
    }, setTimeout(function () {
      e.addMessage({
        error: Ze.REGION_ERROR_MESSAGE
      });
    }));
    return _this52;
  }
  _inherits(Ze, _On);
  return _createClass(Ze, [{
    key: "preprocessBody",
    value: function preprocessBody(e, t) {
      var i = t[t.length - 1].text;
      if (i) return "<speak version='1.0' xml:lang='".concat(e.lang, "'>\n      <voice xml:lang='").concat(e.lang, "' xml:gender='").concat(e.gender, "' name='").concat(e.name, "'>\n        ").concat(i, "\n      </voice>\n    </speak>");
    }
  }, {
    key: "callServiceAPI",
    value: function () {
      var _callServiceAPI16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee108(e, t) {
        var i;
        return _regeneratorRuntime().wrap(function _callee108$(_context108) {
          while (1) switch (_context108.prev = _context108.next) {
            case 0:
              if (this.connectSettings) {
                _context108.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              i = this.preprocessBody(this.rawBody, t);
              R.request(this, i, e, !1);
            case 4:
            case "end":
              return _context108.stop();
          }
        }, _callee108, this);
      }));
      function callServiceAPI(_x196, _x197) {
        return _callServiceAPI16.apply(this, arguments);
      }
      return callServiceAPI;
    }()
  }, {
    key: "extractResultData",
    value: function () {
      var _extractResultData19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee109(e) {
        return _regeneratorRuntime().wrap(function _callee109$(_context109) {
          while (1) switch (_context109.prev = _context109.next) {
            case 0:
              return _context109.abrupt("return", new Promise(function (t) {
                var i = new FileReader();
                i.readAsDataURL(e), i.onload = function (s) {
                  t({
                    files: [{
                      src: s.target.result,
                      type: "audio"
                    }]
                  });
                };
              }));
            case 1:
            case "end":
              return _context109.stop();
          }
        }, _callee109);
      }));
      function extractResultData(_x198) {
        return _extractResultData19.apply(this, arguments);
      }
      return extractResultData;
    }()
  }]);
}(On);
Ze.HELP_LINK =
// eslint-disable-next-line max-len
"https://learn.microsoft.com/en-GB/azure/cognitive-services/speech-service/get-started-text-to-speech?tabs=windows%2Cterminal&pivots=programming-language-rest", Ze.REGION_ERROR_MESSAGE =
// eslint-disable-next-line max-len
"Please define a region config property. [More Information](https://deepchat.dev/docs/directConnection/Azure#TextToSpeech)";
var hs = Ze;
var Ve = /*#__PURE__*/function (_On2) {
  function Ve(e) {
    var _this53;
    _classCallCheck(this, Ve);
    var r, o, a;
    var t = (o = (r = e.directConnection) == null ? void 0 : r.azure) == null ? void 0 : o.speechToText,
      i = (a = e.directConnection) == null ? void 0 : a.azure,
      s = {
        audio: {
          files: {
            acceptedFormats: ".wav,.ogg"
          }
        }
      };
    if (_this53 = _callSuper(this, Ve, [e, fe.buildSpeechToTextHeaders, t.region, i, s]), _this53.permittedErrorPrefixes = [Ve.REGION_ERROR_MESSAGE], _this53.introPanelMarkUp = "\n    <div style=\"width: 100%; text-align: center; margin-left: -10px\"><b>Azure Speech To Text</b></div>\n    <p><b>Upload a .wav or .ogg audio file</b> to transcribe it into text.\n    <p>\n      Click <a href=\"".concat(Ve.HELP_LINK, "\">here</a> for more info.\n    </p>"), _this53.url = "", _this53.isTextInputDisabled = !0, _this53.textInputPlaceholderText = "Upload an audio file", !t.region) _this53.isTextInputDisabled = !0, _this53.canSendMessage = function () {
      return !1;
    }, setTimeout(function () {
      e.addMessage({
        error: Ve.REGION_ERROR_MESSAGE
      });
    });else {
      _this53.canSendMessage = Ve.canFileSendMessage;
      var l = t.lang || "en-US";
      _this53.url = "https://".concat(t.region, ".stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=").concat(l, "&format=detailed"), _this53.recordAudio = void 0;
    }
    return _this53;
  }
  _inherits(Ve, _On2);
  return _createClass(Ve, [{
    key: "callServiceAPI",
    value: function () {
      var _callServiceAPI17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee110(e, t, i) {
        var s, r;
        return _regeneratorRuntime().wrap(function _callee110$(_context110) {
          while (1) switch (_context110.prev = _context110.next) {
            case 0:
              if ((s = this.connectSettings) != null && s.headers) {
                _context110.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (i != null && i[0]) {
                _context110.next = 4;
                break;
              }
              throw new Error("No file was added");
            case 4:
              (r = this.connectSettings) != null && r.headers && (this.connectSettings.headers["Content-Type"] = i[0].name.toLocaleLowerCase().endsWith(".wav") ? "audio/wav; codecs=audio/pcm; samplerate=16000" : "audio/ogg; codecs=opus"), R.request(this, i[0], e, !1);
            case 5:
            case "end":
              return _context110.stop();
          }
        }, _callee110, this);
      }));
      function callServiceAPI(_x199, _x200, _x201) {
        return _callServiceAPI17.apply(this, arguments);
      }
      return callServiceAPI;
    }()
  }, {
    key: "extractResultData",
    value: function () {
      var _extractResultData20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee111(e) {
        return _regeneratorRuntime().wrap(function _callee111$(_context111) {
          while (1) switch (_context111.prev = _context111.next) {
            case 0:
              if (!e.error) {
                _context111.next = 2;
                break;
              }
              throw e.error;
            case 2:
              return _context111.abrupt("return", {
                text: e.DisplayText || ""
              });
            case 3:
            case "end":
              return _context111.stop();
          }
        }, _callee111);
      }));
      function extractResultData(_x202) {
        return _extractResultData20.apply(this, arguments);
      }
      return extractResultData;
    }()
  }], [{
    key: "canFileSendMessage",
    value: function canFileSendMessage(e, t) {
      return !!(t != null && t[0]);
    }
  }]);
}(On);
Ve.HELP_LINK =
// eslint-disable-next-line max-len
"https://learn.microsoft.com/en-GB/azure/cognitive-services/speech-service/get-started-text-to-speech?tabs=windows%2Cterminal&pivots=programming-language-rest", Ve.REGION_ERROR_MESSAGE =
// eslint-disable-next-line max-len
"Please define a region config property. [More Information](https://deepchat.dev/docs/directConnection/Azure#SpeechToText)";
var us = Ve;
var Yo = /*#__PURE__*/function (_G11) {
  // prettier-ignore
  function Yo(e) {
    var _this54;
    _classCallCheck(this, Yo);
    var s, r, o;
    var t = (r = (s = e.directConnection) == null ? void 0 : s.azure) == null ? void 0 : r.translation,
      i = (o = e.directConnection) == null ? void 0 : o.azure;
    _this54 = _callSuper(this, Yo, [e, fe.buildTranslationKeyVerificationDetails(t.region), fe.buildTranslationHeaders.bind({}, t == null ? void 0 : t.region), i]), _this54.insertKeyPlaceholderText = "Azure Translate Subscription Key", _this54.keyHelpUrl =
    // eslint-disable-next-line max-len
    "https://learn.microsoft.com/en-us/azure/api-management/api-management-subscriptions#create-and-manage-subscriptions-in-azure-portal", _this54.url = "", _this54.url = "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=".concat(t.language || "es");
    return _this54;
  }
  _inherits(Yo, _G11);
  return _createClass(Yo, [{
    key: "preprocessBody",
    value: function preprocessBody(e) {
      var t = e[e.length - 1].text;
      if (t) return [{
        Text: t
      }];
    }
  }, {
    key: "callServiceAPI",
    value: function () {
      var _callServiceAPI18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee112(e, t) {
        var i;
        return _regeneratorRuntime().wrap(function _callee112$(_context112) {
          while (1) switch (_context112.prev = _context112.next) {
            case 0:
              if (this.connectSettings) {
                _context112.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              i = this.preprocessBody(t);
              R.request(this, i, e);
            case 4:
            case "end":
              return _context112.stop();
          }
        }, _callee112, this);
      }));
      function callServiceAPI(_x203, _x204) {
        return _callServiceAPI18.apply(this, arguments);
      }
      return callServiceAPI;
    }()
  }, {
    key: "extractResultData",
    value: function () {
      var _extractResultData21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee113(e) {
        var t;
        return _regeneratorRuntime().wrap(function _callee113$(_context113) {
          while (1) switch (_context113.prev = _context113.next) {
            case 0:
              if (!Array.isArray(e)) {
                _context113.next = 2;
                break;
              }
              return _context113.abrupt("return", {
                text: ((t = e[0].translations) == null ? void 0 : t[0].text) || ""
              });
            case 2:
              throw e.error;
            case 3:
            case "end":
              return _context113.stop();
          }
        }, _callee113);
      }));
      function extractResultData(_x205) {
        return _extractResultData21.apply(this, arguments);
      }
      return extractResultData;
    }()
  }]);
}(G);
var bt = /*#__PURE__*/function (_G12) {
  // prettier-ignore
  function bt(e, t, i, s, r) {
    var _this55$maxMessages, _p$model;
    var _this55;
    _classCallCheck(this, bt);
    var u, h, f, m, p;
    var o = JSON.parse(JSON.stringify(e.directConnection)),
      a = t || L.buildKeyVerificationDetails(),
      l = i || L.buildHeaders,
      c = s || o.openAI;
    _this55 = _callSuper(this, bt, [e, a, l, c]), _this55.insertKeyPlaceholderText = "OpenAI API Key", _this55.keyHelpUrl = "https://platform.openai.com/account/api-keys", _this55.url = "https://api.openai.com/v1/chat/completions", _this55.permittedErrorPrefixes = ["Incorrect"], _this55.asyncCallInProgress = !1, _this55._systemMessage = bt.generateSystemMessage("You are a helpful assistant.");
    var d = r || ((u = o.openAI) == null ? void 0 : u.chat);
    if (_typeof(d) == "object") {
      d.system_prompt && (_this55._systemMessage = bt.generateSystemMessage(d.system_prompt));
      var g = (m = (f = (h = e.directConnection) == null ? void 0 : h.openAI) == null ? void 0 : f.chat) == null ? void 0 : m.function_handler;
      g && (_this55._functionHandler = g), _this55.cleanConfig(d), Object.assign(_this55.rawBody, d);
    }
    (_this55$maxMessages = _this55.maxMessages) !== null && _this55$maxMessages !== void 0 ? _this55$maxMessages : _this55.maxMessages = -1, (_p$model = (p = _this55.rawBody).model) !== null && _p$model !== void 0 ? _p$model : p.model = "gpt-4o";
    return _this55;
  }
  _inherits(bt, _G12);
  return _createClass(bt, [{
    key: "cleanConfig",
    value: function cleanConfig(e) {
      delete e.system_prompt, delete e.function_handler;
    }
  }, {
    key: "preprocessBody",
    value:
    // prettier-ignore
    function preprocessBody(e, t) {
      var _i$max_tokens;
      var i = JSON.parse(JSON.stringify(e)),
        s = vt.getCharacterLimitMessages(t, this.totalMessagesMaxCharLength ? this.totalMessagesMaxCharLength - this._systemMessage.content.length : -1).map(function (r) {
          return {
            content: bt.getContent(r),
            role: r.role === y.USER_ROLE ? "user" : "assistant"
          };
        });
      return t.find(function (r) {
        return r.files && r.files.length > 0;
      }) && ((_i$max_tokens = i.max_tokens) !== null && _i$max_tokens !== void 0 ? _i$max_tokens : i.max_tokens = 300), i.messages = [this._systemMessage].concat(_toConsumableArray(s)), i;
    }
  }, {
    key: "callServiceAPI",
    value: function () {
      var _callServiceAPI19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee114(e, t) {
        var i, s;
        return _regeneratorRuntime().wrap(function _callee114$(_context114) {
          while (1) switch (_context114.prev = _context114.next) {
            case 0:
              if (this.connectSettings) {
                _context114.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              i = this.preprocessBody(this.rawBody, t), s = this.stream;
              s && (_typeof(s) != "object" || !s.simulation) || i.stream ? (i.stream = !0, A.request(this, i, e)) : R.request(this, i, e);
            case 4:
            case "end":
              return _context114.stop();
          }
        }, _callee114, this);
      }));
      function callServiceAPI(_x206, _x207) {
        return _callServiceAPI19.apply(this, arguments);
      }
      return callServiceAPI;
    }() // prettier-ignore
  }, {
    key: "extractResultData",
    value: function () {
      var _extractResultData22 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee115(e, t, i) {
        var s, r, o, a;
        return _regeneratorRuntime().wrap(function _callee115$(_context115) {
          while (1) switch (_context115.prev = _context115.next) {
            case 0:
              if (!e.error) {
                _context115.next = 2;
                break;
              }
              throw e.error.message;
            case 2:
              return _context115.abrupt("return", (r = (s = e.choices) == null ? void 0 : s[0]) != null && r.delta ? this.extractStreamResult(e.choices[0], t, i) : (a = (o = e.choices) == null ? void 0 : o[0]) != null && a.message ? e.choices[0].message.tool_calls ? this.handleTools(e.choices[0].message, t, i) : {
                text: e.choices[0].message.content
              } : {
                text: ""
              });
            case 3:
            case "end":
              return _context115.stop();
          }
        }, _callee115, this);
      }));
      function extractResultData(_x208, _x209, _x210) {
        return _extractResultData22.apply(this, arguments);
      }
      return extractResultData;
    }()
  }, {
    key: "extractStreamResult",
    value: function () {
      var _extractStreamResult = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee116(e, t, i) {
        var _this56 = this;
        var s, r, o;
        return _regeneratorRuntime().wrap(function _callee116$(_context116) {
          while (1) switch (_context116.prev = _context116.next) {
            case 0:
              s = e.delta, r = e.finish_reason;
              if (!(r === "tool_calls")) {
                _context116.next = 7;
                break;
              }
              this.asyncCallInProgress = !0;
              o = {
                tool_calls: this._streamToolCalls
              };
              return _context116.abrupt("return", (this._streamToolCalls = void 0, this.handleTools(o, t, i)));
            case 7:
              s != null && s.tool_calls && (this._streamToolCalls ? s.tool_calls.forEach(function (o, a) {
                _this56._streamToolCalls && (_this56._streamToolCalls[a]["function"].arguments += o["function"].arguments);
              }) : this._streamToolCalls = s.tool_calls);
            case 8:
              return _context116.abrupt("return", {
                text: (s == null ? void 0 : s.content) || ""
              });
            case 9:
            case "end":
              return _context116.stop();
          }
        }, _callee116, this);
      }));
      function extractStreamResult(_x211, _x212, _x213) {
        return _extractStreamResult.apply(this, arguments);
      }
      return extractStreamResult;
    }() // prettier-ignore
  }, {
    key: "handleTools",
    value: function () {
      var _handleTools2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee117(e, t, i) {
        var l, c, d, u, h, s, r, o, f, m, a, _f2;
        return _regeneratorRuntime().wrap(function _callee117$(_context117) {
          while (1) switch (_context117.prev = _context117.next) {
            case 0:
              if (!(!e.tool_calls || !t || !i || !this._functionHandler)) {
                _context117.next = 2;
                break;
              }
              throw Error("Please define the `function_handler` property inside the [openAI](https://deepchat.dev/docs/directConnection/openAI#Chat) object.");
            case 2:
              s = JSON.parse(JSON.stringify(i));
              r = e.tool_calls.map(function (f) {
                return {
                  name: f["function"].name,
                  arguments: f["function"].arguments
                };
              });
              _context117.next = 6;
              return (l = this._functionHandler) == null ? void 0 : l.call(this, r);
            case 6:
              o = _context117.sent;
              if (Array.isArray(o)) {
                _context117.next = 20;
                break;
              }
              if (!o.text) {
                _context117.next = 19;
                break;
              }
              f = {
                text: o.text
              };
              _context117.next = 12;
              return (d = (c = this.deepChat).responseInterceptor) == null ? void 0 : d.call(c, f);
            case 12:
              _context117.t0 = _context117.sent;
              if (_context117.t0) {
                _context117.next = 15;
                break;
              }
              _context117.t0 = f;
            case 15:
              m = _context117.t0;
              if (!Array.isArray(m)) {
                _context117.next = 18;
                break;
              }
              throw Error(L.FUNCTION_TOOL_RESP_ARR_ERROR);
            case 18:
              return _context117.abrupt("return", m);
            case 19:
              throw Error(L.FUNCTION_TOOL_RESP_ERROR);
            case 20:
              _context117.next = 22;
              return Promise.all(o);
            case 22:
              a = _context117.sent;
              if (!(s.messages.push({
                tool_calls: e.tool_calls,
                role: "assistant",
                content: null
              }), !a.find(function (_ref30) {
                var f = _ref30.response;
                return typeof f != "string";
              }) && r.length === a.length)) {
                _context117.next = 43;
                break;
              }
              a.forEach(function (f, m) {
                var g;
                var p = (g = e.tool_calls) == null ? void 0 : g[m];
                s == null || s.messages.push({
                  role: "tool",
                  tool_call_id: p == null ? void 0 : p.id,
                  name: p == null ? void 0 : p["function"].name,
                  content: f.response
                });
              }), delete s.tools, delete s.tool_choice, delete s.stream;
              _context117.prev = 25;
              _context117.next = 28;
              return t == null ? void 0 : t(s).then(function (m) {
                return E.processResponseByType(m);
              });
            case 28:
              _f2 = _context117.sent;
              _context117.next = 31;
              return (h = (u = this.deepChat).responseInterceptor) == null ? void 0 : h.call(u, _f2);
            case 31:
              _context117.t1 = _context117.sent;
              if (_context117.t1) {
                _context117.next = 34;
                break;
              }
              _context117.t1 = _f2;
            case 34:
              _f2 = _context117.t1;
              if (!_f2.error) {
                _context117.next = 37;
                break;
              }
              throw _f2.error.message;
            case 37:
              return _context117.abrupt("return", {
                text: _f2.choices[0].message.content || ""
              });
            case 40:
              _context117.prev = 40;
              _context117.t2 = _context117["catch"](25);
              throw this.asyncCallInProgress = !1, _context117.t2;
            case 43:
              throw Error(L.FUNCTION_TOOL_RESP_ERROR);
            case 44:
            case "end":
              return _context117.stop();
          }
        }, _callee117, this, [[25, 40]]);
      }));
      function handleTools(_x214, _x215, _x216) {
        return _handleTools2.apply(this, arguments);
      }
      return handleTools;
    }()
  }], [{
    key: "generateSystemMessage",
    value: function generateSystemMessage(e) {
      return {
        role: "system",
        content: e
      };
    }
  }, {
    key: "getContent",
    value: function getContent(e) {
      if (e.files && e.files.length > 0) {
        var t = e.files.map(function (i) {
          return {
            type: "image_url",
            image_url: {
              url: i.src
            }
          };
        });
        return e.text && e.text.trim().length > 0 && t.unshift({
          type: "text",
          text: e.text
        }), t;
      }
      return e.text;
    }
  }]);
}(G);
var ws = /*#__PURE__*/function (_bt) {
  function ws(e) {
    var _this57;
    _classCallCheck(this, ws);
    var o, a, l, c, d, u, h;
    var t = JSON.parse(JSON.stringify(e.directConnection)),
      i = t.azure,
      s = ((a = (o = t.azure) == null ? void 0 : o.openAI) == null ? void 0 : a.urlDetails) || {},
      r = (c = (l = t.azure) == null ? void 0 : l.openAI) == null ? void 0 : c.chat;
    if (_this57 = _callSuper(this, ws, [e, ue.buildKeyVerificationDetails(s), ue.buildHeaders, i, r]), _this57.permittedErrorPrefixes = [ue.URL_DETAILS_ERROR_MESSAGE], _this57.isTextInputDisabled = !1, _typeof(r) == "object") {
      var _ref31 = (h = (u = (d = e.directConnection) == null ? void 0 : d.azure) == null ? void 0 : u.openAI) == null ? void 0 : h.chat,
        f = _ref31.function_handler;
      f && (_this57._functionHandler = f);
    }
    ue.validateURLDetails(s) ? _this57.url = ws.buildURL(s) : (_this57.isTextInputDisabled = !0, _this57.canSendMessage = function () {
      return !1;
    }, setTimeout(function () {
      e.addMessage({
        error: ue.URL_DETAILS_ERROR_MESSAGE
      });
    }));
    return _this57;
  }
  _inherits(ws, _bt);
  return _createClass(ws, null, [{
    key: "buildURL",
    value: function buildURL(e) {
      var t = e.endpoint,
        i = e.deploymentId,
        s = e.version;
      return "".concat(t, "/openai/deployments/").concat(i, "/completions?api-version=").concat(s);
    }
  }]);
}(bt);
var me = /*#__PURE__*/function (_G13) {
  function me(e) {
    var _this58;
    _classCallCheck(this, me);
    var o;
    var t = e.directConnection,
      i = t == null ? void 0 : t.openAI,
      s = {
        images: {
          files: {
            acceptedFormats: ".png",
            maxNumberOfFiles: 2
          }
        }
      };
    _this58 = _callSuper(this, me, [e, L.buildKeyVerificationDetails(), L.buildHeaders, i, s]), _this58.insertKeyPlaceholderText = "OpenAI API Key", _this58.keyHelpUrl = "https://platform.openai.com/account/api-keys", _this58.introPanelMarkUp = "\n    <div style=\"width: 100%; text-align: center; margin-left: -10px\"><b>OpenAI DALL\xB7E</b></div>\n    <p><b>Insert text</b> to generate an image.</p>\n    <p><b>Upload 1</b> PNG image to generate its variation and optionally insert text to specify the change.</p>\n    <p><b>Upload 2</b> PNG images where the second is a copy of the first with a transparent area where the edit should\n      take place and text to specify the edit.</p>\n    <p>Click <a href=\"https://platform.openai.com/docs/guides/images/introduction\">here</a> for more info.</p>", _this58.url = "", _this58.permittedErrorPrefixes = ["Incorrect", "Invalid input image"];
    var r = (o = t == null ? void 0 : t.openAI) == null ? void 0 : o.images;
    if (_this58.camera) {
      var a = _typeof(r) == "object" && r.size ? Number.parseInt(r.size) : 1024;
      _this58.camera.files = {
        dimensions: {
          width: a,
          height: a
        }
      };
    }
    _typeof(r) == "object" && Object.assign(_this58.rawBody, r), _this58.canSendMessage = me.canFileSendMessage;
    return _this58;
  }
  _inherits(me, _G13);
  return _createClass(me, [{
    key: "preprocessBody",
    value: function preprocessBody(e, t) {
      var i = JSON.parse(JSON.stringify(e));
      return t && t !== "" && (i.prompt = t), i;
    }
    // prettier-ignore
  }, {
    key: "callApiWithImage",
    value: function callApiWithImage(e, t, i) {
      var o, a;
      var s;
      var r = (a = (o = t[t.length - 1]) == null ? void 0 : o.text) == null ? void 0 : a.trim();
      if (i[1] || r && r !== "") {
        this.url = me.IMAGE_EDIT_URL;
        var l = this.preprocessBody(this.rawBody, r);
        s = me.createFormDataBody(l, i[0], i[1]);
      } else this.url = me.IMAGE_VARIATIONS_URL, s = me.createFormDataBody(this.rawBody, i[0]);
      E.tempRemoveContentHeader(this.connectSettings, R.request.bind(this, this, s, e), !1);
    }
  }, {
    key: "callServiceAPI",
    value: function () {
      var _callServiceAPI20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee118(e, t, i) {
        var s, r;
        return _regeneratorRuntime().wrap(function _callee118$(_context118) {
          while (1) switch (_context118.prev = _context118.next) {
            case 0:
              if ((s = this.connectSettings) != null && s.headers) {
                _context118.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              if (!(i != null && i[0])) {
                _context118.next = 6;
                break;
              }
              this.callApiWithImage(e, t, i);
              _context118.next = 11;
              break;
            case 6:
              if (this.connectSettings) {
                _context118.next = 8;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 8:
              this.url = me.IMAGE_GENERATION_URL;
              r = this.preprocessBody(this.rawBody, t[t.length - 1].text);
              R.request(this, r, e);
            case 11:
            case "end":
              return _context118.stop();
          }
        }, _callee118, this);
      }));
      function callServiceAPI(_x217, _x218, _x219) {
        return _callServiceAPI20.apply(this, arguments);
      }
      return callServiceAPI;
    }()
  }, {
    key: "extractResultData",
    value: function () {
      var _extractResultData23 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee119(e) {
        return _regeneratorRuntime().wrap(function _callee119$(_context119) {
          while (1) switch (_context119.prev = _context119.next) {
            case 0:
              if (!e.error) {
                _context119.next = 2;
                break;
              }
              throw e.error.message;
            case 2:
              return _context119.abrupt("return", {
                files: e.data.map(function (i) {
                  return i.url ? {
                    src: i.url,
                    type: "image"
                  } : {
                    src: "".concat(ci).concat(i.b64_json),
                    type: "image"
                  };
                })
              });
            case 3:
            case "end":
              return _context119.stop();
          }
        }, _callee119);
      }));
      function extractResultData(_x220) {
        return _extractResultData23.apply(this, arguments);
      }
      return extractResultData;
    }() // private static readonly MODAL_MARKDOWN = `
    // 1 image:
    // - With text - edits image based on the text
    // - No text - creates a variation of the image
    // 2 images:
    // - The second image needs to be a copy of the first with a transparent area where the edit should take place.
    // Add text to describe the required modification.
    // Click here for [more info](https://platform.openai.com/docs/guides/images/introduction).
    //   `;
  }], [{
    key: "canFileSendMessage",
    value: function canFileSendMessage(e, t) {
      return !!(t != null && t[0]) || !!(e && e.trim() !== "");
    }
  }, {
    key: "createFormDataBody",
    value: function createFormDataBody(e, t, i) {
      var s = new FormData();
      return s.append("image", t), i && s.append("mask", i), Object.keys(e).forEach(function (r) {
        s.append(r, String(e[r]));
      }), s;
    }
  }]);
}(G);
me.IMAGE_GENERATION_URL = "https://api.openai.com/v1/images/generations", me.IMAGE_VARIATIONS_URL = "https://api.openai.com/v1/images/variations", me.IMAGE_EDIT_URL = "https://api.openai.com/v1/images/edits";
var fs = me;
var Zo = /*#__PURE__*/function (_s5) {
  function Zo(e) {
    var _this59$maxMessages;
    var _this59;
    _classCallCheck(this, Zo);
    var r;
    var t = JSON.parse(JSON.stringify(e.directConnection)),
      i = (r = t.cohere) == null ? void 0 : r.chat,
      s = t.cohere;
    _this59 = _callSuper(this, Zo, [e, "https://api.cohere.ai/v1/chat", "Ask me anything!", i, s]), _typeof(i) == "object" && Object.assign(_this59.rawBody, i), (_this59$maxMessages = _this59.maxMessages) !== null && _this59$maxMessages !== void 0 ? _this59$maxMessages : _this59.maxMessages = -1;
    return _this59;
  }
  _inherits(Zo, _s5);
  return _createClass(Zo, [{
    key: "preprocessBody",
    value: function preprocessBody(e, t) {
      var i = JSON.parse(JSON.stringify(e)),
        s = t.filter(function (r) {
          return r.text;
        });
      return i.query = s[s.length - 1].text, i.chat_history = s.slice(0, s.length - 1).map(function (r) {
        return {
          text: r.text,
          user_name: r.role === "ai" ? "CHATBOT" : "USER"
        };
      }), i;
    }
  }, {
    key: "callServiceAPI",
    value: function () {
      var _callServiceAPI21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee120(e, t) {
        var i;
        return _regeneratorRuntime().wrap(function _callee120$(_context120) {
          while (1) switch (_context120.prev = _context120.next) {
            case 0:
              if (this.connectSettings) {
                _context120.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              i = this.preprocessBody(this.rawBody, t);
              R.request(this, i, e);
            case 4:
            case "end":
              return _context120.stop();
          }
        }, _callee120, this);
      }));
      function callServiceAPI(_x221, _x222) {
        return _callServiceAPI21.apply(this, arguments);
      }
      return callServiceAPI;
    }()
  }, {
    key: "extractResultData",
    value: function () {
      var _extractResultData24 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee121(e) {
        return _regeneratorRuntime().wrap(function _callee121$(_context121) {
          while (1) switch (_context121.prev = _context121.next) {
            case 0:
              if (!e.message) {
                _context121.next = 2;
                break;
              }
              throw e.message;
            case 2:
              return _context121.abrupt("return", {
                text: e.text
              });
            case 3:
            case "end":
              return _context121.stop();
          }
        }, _callee121);
      }));
      function extractResultData(_x223) {
        return _extractResultData24.apply(this, arguments);
      }
      return extractResultData;
    }()
  }]);
}(_s);
var Li = /*#__PURE__*/function () {
  function Li() {
    _classCallCheck(this, Li);
  }
  return _createClass(Li, null, [{
    key: "buildHeaders",
    value: function buildHeaders(e) {
      return {
        Authorization: "Bearer ".concat(e),
        "Content-Type": "application/json",
        accept: "application/json"
      };
    }
    // prettier-ignore
  }, {
    key: "handleVerificationResult",
    value: function handleVerificationResult(e, t, i, s) {
      var o;
      (o = e.message) != null && o.includes("invalid request: prompt must be at least 1 token long") ? i(t) : s(k.INVALID_KEY);
    }
  }, {
    key: "buildKeyVerificationDetails",
    value: function buildKeyVerificationDetails() {
      return {
        url: "https://api.mistral.ai/v1/models",
        method: "GET",
        handleVerificationResult: Li.handleVerificationResult
      };
    }
  }]);
}();
var Qo = /*#__PURE__*/function (_G14) {
  function Qo(e) {
    var _this60$maxMessages, _s$model;
    var _this60;
    _classCallCheck(this, Qo);
    var s;
    var i = JSON.parse(JSON.stringify(e.directConnection)).mistral;
    _this60 = _callSuper(this, Qo, [e, Li.buildKeyVerificationDetails(), Li.buildHeaders, i]), _this60.insertKeyPlaceholderText = "Mistral API Key", _this60.keyHelpUrl = "https://console.mistral.ai/api-keys/", _this60.url = "https://api.mistral.ai/v1/chat/completions", _this60.permittedErrorPrefixes = ["invalid"], i && (_this60.cleanConfig(i), Object.assign(_this60.rawBody, i)), (_this60$maxMessages = _this60.maxMessages) !== null && _this60$maxMessages !== void 0 ? _this60$maxMessages : _this60.maxMessages = -1, (_s$model = (s = _this60.rawBody).model) !== null && _s$model !== void 0 ? _s$model : s.model = "open-mistral-7b";
    return _this60;
  }
  _inherits(Qo, _G14);
  return _createClass(Qo, [{
    key: "cleanConfig",
    value: function cleanConfig(e) {
      delete e.key;
    }
    // build a single string for user
  }, {
    key: "preprocessBody",
    value: function preprocessBody(e, t) {
      var i = JSON.parse(JSON.stringify(e)),
        s = t.filter(function (r) {
          return r.text;
        });
      return i.messages = s.slice(0, s.length - 1).map(function (r) {
        return {
          text: r.text,
          user_name: r.role === "ai" ? "system" : "user"
        };
      }), i;
    }
  }, {
    key: "callServiceAPI",
    value: function () {
      var _callServiceAPI22 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee122(e, t) {
        var i;
        return _regeneratorRuntime().wrap(function _callee122$(_context122) {
          while (1) switch (_context122.prev = _context122.next) {
            case 0:
              if (this.connectSettings) {
                _context122.next = 2;
                break;
              }
              throw new Error("Request settings have not been set up");
            case 2:
              i = this.preprocessBody(this.rawBody, t);
              R.request(this, i, e);
            case 4:
            case "end":
              return _context122.stop();
          }
        }, _callee122, this);
      }));
      function callServiceAPI(_x224, _x225) {
        return _callServiceAPI22.apply(this, arguments);
      }
      return callServiceAPI;
    }()
  }, {
    key: "extractResultData",
    value: function () {
      var _extractResultData25 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee123(e) {
        return _regeneratorRuntime().wrap(function _callee123$(_context123) {
          while (1) switch (_context123.prev = _context123.next) {
            case 0:
              if (!e.message) {
                _context123.next = 2;
                break;
              }
              throw e.message;
            case 2:
              return _context123.abrupt("return", {
                text: e.text
              });
            case 3:
            case "end":
              return _context123.stop();
          }
        }, _callee123);
      }));
      function extractResultData(_x226) {
        return _extractResultData25.apply(this, arguments);
      }
      return extractResultData;
    }()
  }]);
}(G);
var ea = /*#__PURE__*/function () {
  function ea() {
    _classCallCheck(this, ea);
  }
  return _createClass(ea, null, [{
    key: "create",
    value:
    // this should only be called when no _activeService is set or is demo as otherwise we don't want to reconnect
    function create(e) {
      var t = e.directConnection,
        i = e.connect,
        s = e.demo,
        r = e.webModel;
      if (r) return new si(e);
      if (t) {
        if (t.openAI) return t.openAI.images ? new fs(e) : t.openAI.speechToText ? new cs(e) : t.openAI.textToSpeech ? new ls(e) : t.openAI.assistant ? new Ss(e) : t.openAI.realtime ? new as(e) : new bt(e);
        if (t.assemblyAI) return new xs(e);
        if (t.cohere) return t.cohere.textGeneration ? new Wo(e) : t.cohere.summarization ? new Jo(e) : new Zo(e);
        if (t.huggingFace) return t.huggingFace.textGeneration ? new Ho(e) : t.huggingFace.summarization ? new Go(e) : t.huggingFace.translation ? new Ko(e) : t.huggingFace.fillMask ? new $o(e) : t.huggingFace.questionAnswer ? new zo(e) : t.huggingFace.audioSpeechRecognition ? new qo(e) : t.huggingFace.audioClassification ? new Uo(e) : t.huggingFace.imageClassification ? new jo(e) : new Vo(e);
        if (t.azure) {
          if (t.azure.openAI) {
            if (t.azure.openAI.chat) return new ws(e);
            if (t.azure.openAI.assistant) return new rs(e);
          }
          if (t.azure.speechToText) return new us(e);
          if (t.azure.textToSpeech) return new hs(e);
          if (t.azure.summarization) return new ds(e);
          if (t.azure.translation) return new Yo(e);
        }
        if (t.stabilityAI) return t.stabilityAI.imageToImage ? new Ti(e) : t.stabilityAI.imageToImageUpscale ? new wi(e) : t.stabilityAI.imageToImageMasking ? new Ai(e) : new Ci(e);
        if (t.mistral) return new Qo(e);
      }
      return i && Object.keys(i).length > 0 && !s ? new nt(e) : new nt(e, void 0, s || !0);
    }
  }]);
}();
var Ls = /*#__PURE__*/_createClass(function Ls() {
  _classCallCheck(this, Ls);
});
Ls.attibutes = {
  string: function string(e) {
    return e;
  },
  number: function number(e) {
    return parseFloat(e);
  },
  "boolean": function boolean(e) {
    return e === "true";
  },
  object: function object(e) {
    return JSON.parse(e);
  },
  array: function array(e) {
    return JSON.parse(e);
  },
  "function": function _function(e) {
    return new Function("return ".concat(e))();
  }
};
var ps = Ls;
function x(n) {
  return function (e, t) {
    Object.defineProperty(e, t, {});
    var i = e.constructor,
      s = t.toLocaleLowerCase();
    i._attributes_[s] = ps.attibutes[n], i._attributeToProperty_[s] = t;
  };
}
var Ii = /*#__PURE__*/function () {
  function Ii(e, t, i) {
    _classCallCheck(this, Ii);
    this._isDisplayed = !1, e ? (this._elementRef = this.createIntroPanelWithChild(e, i), this._isDisplayed = !0) : t && (this._elementRef = this.createInternalIntroPanel(t, i), this._isDisplayed = !0);
  }
  return _createClass(Ii, [{
    key: "createIntroPanelWithChild",
    value: function createIntroPanelWithChild(e, t) {
      var i = Ii.createIntroPanel(t);
      return e.style.display === "none" && (e.style.display = "block"), i.appendChild(e), i;
    }
  }, {
    key: "createInternalIntroPanel",
    value: function createInternalIntroPanel(e, t) {
      var i = Ii.createIntroPanel(t);
      return i.id = "internal-intro-panel", i.innerHTML = e, i;
    }
  }, {
    key: "hide",
    value: function hide() {
      this._isDisplayed && this._elementRef && (this._elementRef.style.display = "none", this._isDisplayed = !1);
    }
  }, {
    key: "display",
    value: function display() {
      !this._isDisplayed && this._elementRef && (this._elementRef.style.display = "", this._isDisplayed = !0);
    }
  }], [{
    key: "createIntroPanel",
    value: function createIntroPanel(e) {
      var t = document.createElement("div");
      return t.classList.add("intro-panel"), Object.assign(t.style, e), t;
    }
  }]);
}();
var ta = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" \n\t viewBox=\"50 30 420 450\" xml:space=\"preserve\">\n<g filter=\"brightness(0) saturate(100%) invert(16%) sepia(0%) saturate(1942%) hue-rotate(215deg) brightness(99%) contrast(93%)\">\n\t<g>\n\t\t<path d=\"M447.933,103.629c-0.034-3.076-1.224-6.09-3.485-8.352L352.683,3.511c-0.004-0.004-0.007-0.005-0.011-0.008\n\t\t\tC350.505,1.338,347.511,0,344.206,0H89.278C75.361,0,64.04,11.32,64.04,25.237v461.525c0,13.916,11.32,25.237,25.237,25.237\n\t\t\th333.444c13.916,0,25.237-11.32,25.237-25.237V103.753C447.96,103.709,447.937,103.672,447.933,103.629z M356.194,40.931\n\t\t\tl50.834,50.834h-49.572c-0.695,0-1.262-0.567-1.262-1.262V40.931z M423.983,486.763c0,0.695-0.566,1.261-1.261,1.261H89.278\n\t\t\tc-0.695,0-1.261-0.566-1.261-1.261V25.237c0-0.695,0.566-1.261,1.261-1.261h242.94v66.527c0,13.916,11.322,25.239,25.239,25.239\n\t\t\th66.527V486.763z\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path d=\"M362.088,164.014H149.912c-6.62,0-11.988,5.367-11.988,11.988c0,6.62,5.368,11.988,11.988,11.988h212.175\n\t\t\tc6.62,0,11.988-5.368,11.988-11.988C374.076,169.381,368.707,164.014,362.088,164.014z\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path d=\"M362.088,236.353H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.62,5.368,11.988,11.988,11.988h212.175\n\t\t\tc6.62,0,11.988-5.368,11.988-11.988C374.076,241.721,368.707,236.353,362.088,236.353z\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path d=\"M362.088,308.691H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.621,5.368,11.988,11.988,11.988h212.175\n\t\t\tc6.62,0,11.988-5.367,11.988-11.988C374.076,314.06,368.707,308.691,362.088,308.691z\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path d=\"M256,381.031H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.621,5.368,11.988,11.988,11.988H256\n\t\t\tc6.62,0,11.988-5.367,11.988-11.988C267.988,386.398,262.62,381.031,256,381.031z\"/>\n\t</g>\n</g>\n</svg>",
  $ = /*#__PURE__*/function () {
    function $() {
      _classCallCheck(this, $);
    }
    return _createClass($, null, [{
      key: "createImage",
      value: function createImage(e, t, i) {
        var s = new Image();
        return s.src = e.src, i && H.scrollDownOnImageLoad(s.src, t), H.processContent("image", s, s.src, e.name);
      }
      // WORK - image still does not scroll down when loaded
    }, {
      key: "createImageMessage",
      value: function createImageMessage(e, t, i, s) {
        var r = $.createImage(t, e.elementRef, !s && !e.focusMode),
          o = e.createNewMessageElement("", i);
        return o.bubbleElement.appendChild(r), o.bubbleElement.classList.add($.IMAGE_BUBBLE_CLASS), {
          type: "image",
          elements: o
        };
      }
    }, {
      key: "createAudioElement",
      value: function createAudioElement(e, t) {
        var i = document.createElement("audio");
        return i.src = e.src, i.classList.add("audio-player"), i.controls = !0, De.IS_SAFARI && (i.classList.add("audio-player-safari"), i.classList.add(t === y.USER_ROLE ? "audio-player-safari-right" : "audio-player-safari-left")), i;
      }
    }, {
      key: "createNewAudioMessage",
      value: function createNewAudioMessage(e, t, i, s) {
        var r = $.createAudioElement(t, i),
          o = e.createMessageElementsOnOrientation("", i, s);
        return o.bubbleElement.appendChild(r), o.bubbleElement.classList.add($.AUDIO_BUBBLE_CLASS), {
          type: "audio",
          elements: o
        };
      }
    }, {
      key: "createAnyFile",
      value: function createAnyFile(e) {
        var t = document.createElement("div");
        t.classList.add("any-file-message-contents");
        var i = document.createElement("div");
        i.classList.add("any-file-message-icon-container");
        var s = Fe.createSVGElement(ta);
        s.classList.add("any-file-message-icon"), i.appendChild(s);
        var r = document.createElement("div");
        return r.classList.add("any-file-message-text"), r.textContent = e.name || H.DEFAULT_FILE_NAME, t.appendChild(i), t.appendChild(r), H.processContent("any", t, e.src, r.textContent);
      }
    }, {
      key: "createNewAnyFileMessage",
      value: function createNewAnyFileMessage(e, t, i, s) {
        var r = e.createMessageElementsOnOrientation("", i, s),
          o = $.createAnyFile(t);
        return r.bubbleElement.classList.add($.ANY_FILE_BUBBLE_CLASS), r.bubbleElement.appendChild(o), {
          type: "file",
          elements: r
        };
      }
    }, {
      key: "createMessages",
      value: function createMessages(e, t, i) {
        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
        return t.map(function (r) {
          return r.ref && (r = H.removeFileRef(r)), H.isAudioFile(r) ? $.createNewAudioMessage(e, r, i, s) : H.isImageFile(r) ? $.createImageMessage(e, r, i, s) : $.createNewAnyFileMessage(e, r, i, s);
        });
      }
      // no overwrite previous message logic as it is complex to track which files are to be overwritten
    }, {
      key: "addMessages",
      value: function addMessages(e, t, i, s) {
        $.createMessages(e, t, i, s).forEach(function (_ref32) {
          var o = _ref32.type,
            a = _ref32.elements;
          H.addMessage(e, a, o, i, s);
        });
      }
    }]);
  }();
$.IMAGE_BUBBLE_CLASS = "image-message", $.AUDIO_BUBBLE_CLASS = "audio-message", $.ANY_FILE_BUBBLE_CLASS = "any-file-message";
var Oi = $;
var le = /*#__PURE__*/function () {
  function le() {
    _classCallCheck(this, le);
  }
  return _createClass(le, null, [{
    key: "removeElements",
    value: function removeElements(e, t) {
      if (!t) return;
      var i = e.findIndex(function (s) {
        return s === t;
      });
      e.splice(i, 1), t == null || t.outerContainer.remove();
    }
  }, {
    key: "removeFilesMessages",
    value: function removeFilesMessages(e, t) {
      var i;
      (i = t[1].files) == null || i.forEach(function (s) {
        le.removeElements(e.messageElementRefs, s);
      }), delete t[0].files, delete t[1].files;
    }
  }, {
    key: "removeTextHTMLMessage",
    value: function removeTextHTMLMessage(e, t, i) {
      var s = t[1][i];
      le.removeElements(e.messageElementRefs, s), delete t[0][i], delete t[1][i];
    }
  }, {
    key: "updateHTMLMessage",
    value: function updateHTMLMessage(e, t, i) {
      var s, r, o;
      if (t[1].html) _e.overwriteElements(e, i, t[1].html);else {
        var a = _e.create(e, i, t[0].role),
          l = ((r = t[1].files) == null ? void 0 : r[((s = t[1].files) == null ? void 0 : s.length) - 1]) || t[1].text,
          c = l.outerContainer.nextSibling;
        (o = c == null ? void 0 : c.parentElement) == null || o.insertBefore(a.outerContainer, c), e.messageElementRefs.splice(e.messageElementRefs.length - 1, 1);
        var d = e.messageElementRefs.findIndex(function (u) {
          return u === l;
        });
        e.messageElementRefs.splice(d + 1, 0, a), t[1].html = a;
      }
      t[0].html = i;
    }
    // finds beforeElement, creates new elements, remove old and adds new ones
  }, {
    key: "updateFileMessages",
    value: function updateFileMessages(e, t, i) {
      var u, h;
      var s = t[0].role,
        r = Oi.createMessages(e, i, s),
        o = t[1].html,
        a = ((h = t[1].files) == null ? void 0 : h[((u = t[1].files) == null ? void 0 : u.length) - 1]) || t[1].text,
        l = o || a;
      var c = e.messageElementRefs.findIndex(function (f) {
        return f === l;
      });
      a && (c += 1);
      var d = (o == null ? void 0 : o.outerContainer) || (a == null ? void 0 : a.outerContainer.nextSibling);
      r.forEach(function (_ref33, p) {
        var f = _ref33.type,
          m = _ref33.elements;
        var g;
        H.setElementProps(e, m, f, s), (g = d.parentElement) == null || g.insertBefore(m.outerContainer, d), e.messageElementRefs.splice(e.messageElementRefs.length - 1, 1), e.messageElementRefs.splice(c + p, 0, m);
      }), le.removeFilesMessages(e, t), t[1].files = r.map(function (_ref34) {
        var f = _ref34.elements;
        return f;
      }), t[0].files = i;
    }
  }, {
    key: "updateTextMessage",
    value: function updateTextMessage(e, t, i) {
      var s, r;
      if (t[1].text) e.renderText(t[1].text.bubbleElement, i);else {
        var o = e.createElements(i, t[0].role),
          a = ((s = t[1].files) == null ? void 0 : s[0]) || t[1].html;
        (r = a.outerContainer.parentElement) == null || r.insertBefore(o.outerContainer, a.outerContainer);
        var l = e.messageElementRefs.findIndex(function (c) {
          return c === a;
        });
        e.messageElementRefs.splice(l, 0, o), t[1].text = o;
      }
      t[0].text = i;
    }
  }, {
    key: "isElementActive",
    value: function isElementActive(e) {
      var t, i;
      return de.isActiveElement((t = e.text) == null ? void 0 : t.bubbleElement.classList) || de.isActiveElement((i = e.html) == null ? void 0 : i.bubbleElement.classList);
    }
    // note that overwrite and 'deep-chat-temporary-message' are used to remove a message
  }, {
    key: "update",
    value: function update(e, t, i) {
      var s = e.messageToElements[i];
      if (s) {
        if (le.isElementActive(s[1])) return console.error("Cannot update a message that is being streamed");
        t.text && le.updateTextMessage(e, s, t.text), t.files ? le.updateFileMessages(e, s, t.files) : le.removeFilesMessages(e, s), t.html && le.updateHTMLMessage(e, s, t.html), !t.text && s[1].text && le.removeTextHTMLMessage(e, s, "text"), !t.html && s[1].html && le.removeTextHTMLMessage(e, s, "html");
        var r = e.messageElementRefs,
          o = e.avatar,
          a = e.name;
        y.classifyRoleMessages(r), y.resetAllRoleElements(r, o, a);
      } else console.error("Message index not found. Please use the `getMessages` method to find the correct index");
    }
  }]);
}();
var ia = /*#__PURE__*/function () {
  function ia() {
    _classCallCheck(this, ia);
  }
  return _createClass(ia, null, [{
    key: "getText",
    value: function getText(e, t) {
      var i;
      if (!e.directConnection && !e.connect && !e.webModel && !e.demo) return "Connect to any API using the [connect](https://deepchat.dev/docs/connect#connect-1) property or a popular service via [directConnection](https://deepchat.dev/docs/directConnection/#directConnection).\n Host AI entirely on your browser via a [webModel](https://deepchat.dev/docs/webModel).\n To get started checkout the [Start](https://deepchat.dev/start) page and live code [examples](https://deepchat.dev/examples/frameworks).\n To remove this message set the [demo](https://deepchat.dev/docs/modes#demo) property to true.";
      if (e.directConnection) {
        if (!t.isDirectConnection()) return "Please define a valid service inside\n          the [directConnection](https://deepchat.dev/docs/directConnection/#directConnection) object.";
        var s = (i = e.directConnection.openAI) == null ? void 0 : i.chat;
        if (_typeof(s) == "object" && s.tools && !s.function_handler) return "Please define the `function_handler` property inside the openAI [chat](https://deepchat.dev/docs/directConnection/openAI#Chat) object.";
      } else if (e.connect && !e.connect.url && !e.connect.handler) return "Please define a `url` or a `handler` property inside the [connect](https://deepchat.dev/docs/connect#connect-1) object.";
      return null;
    }
  }]);
}();
var de = /*#__PURE__*/function (_he) {
  function de(e, t, i) {
    var _this61;
    _classCallCheck(this, de);
    var a, l;
    _this61 = _callSuper(this, de, [e]);
    var s = t.permittedErrorPrefixes,
      r = t.introPanelMarkUp,
      o = t.demo;
    _this61._errorMessageOverrides = (a = e.errorMessages) == null ? void 0 : a.overrides, _this61._onClearMessages = yi.onClearMessages.bind(_this61, e), _this61._onError = yi.onError.bind(_this61, e), _this61._isLoadingMessageAllowed = de.getDefaultDisplayLoadingMessage(e, t), _typeof(e.displayLoadingBubble) == "object" && e.displayLoadingBubble.toggle && (e.displayLoadingBubble.toggle = _this61.setLoadingToggle.bind(_this61)), _this61._permittedErrorPrefixes = s, _this61.addSetupMessageIfNeeded(e, t) || _this61.populateIntroPanel(i, r, e.introPanelStyle), o && _this61.prepareDemo(te.processDemo(o), e.loadHistory), _this61.addIntroductoryMessages(e, t), new ii(e, _this61, t), _this61._displayServiceErrorMessages = (l = e.errorMessages) == null ? void 0 : l.displayServiceErrorMessages, e.getMessages = function () {
      return JSON.parse(JSON.stringify(_this61.messageToElements.map(function (_ref35) {
        var _ref36 = _slicedToArray(_ref35, 1),
          c = _ref36[0];
        return c;
      })));
    }, e.clearMessages = _this61.clearMessages.bind(_this61, t), e.refreshMessages = _this61.refreshTextMessages.bind(_this61, e.remarkable), e.scrollToBottom = X.scrollToBottom.bind(_this61, _this61.elementRef), e.addMessage = function (c, d) {
      _this61.addAnyMessage(_objectSpread(_objectSpread({}, c), {}, {
        sendUpdate: !!d
      }), !d);
    }, e.updateMessage = function (c, d) {
      return le.update(_this61, c, d);
    }, t.isWebModel() && t.setUpMessages(_this61), e.textToSpeech && gt.processConfig(e.textToSpeech, function (c) {
      _this61.textToSpeech = c;
    });
    return _this61;
  }
  _inherits(de, _he);
  return _createClass(de, [{
    key: "setLoadingToggle",
    value: function setLoadingToggle() {
      var e = this.messageElementRefs[this.messageElementRefs.length - 1];
      he.isLoadingMessage(e) ? this.removeLastMessage() : this.addLoadingMessage(!0);
    }
  }, {
    key: "prepareDemo",
    value: function prepareDemo(e, t) {
      var i;
      if (_typeof(e) == "object") {
        if (!t && e.displayLoading) {
          var s = e.displayLoading.history;
          s != null && s.small && Be.addMessage(this, !1), s != null && s.full && Be.addMessage(this);
        }
        e.displayErrors && (e.displayErrors["default"] && this.addNewErrorMessage("", ""), e.displayErrors.service && this.addNewErrorMessage("service", ""), e.displayErrors.speechToText && this.addNewErrorMessage("speechToText", "")), (i = e.displayLoading) != null && i.message && this.addLoadingMessage(), e.response && (this.customDemoResponse = e.response);
      }
    }
  }, {
    key: "addSetupMessageIfNeeded",
    value: function addSetupMessageIfNeeded(e, t) {
      var i = ia.getText(e, t);
      if (i) {
        var s = this.createAndAppendNewMessageElement(i, y.AI_ROLE);
        this.applyCustomStyles(s, y.AI_ROLE, !1);
      }
      return !!i;
    }
    // WORK - const file for deep chat classes
  }, {
    key: "addIntroductoryMessages",
    value: function addIntroductoryMessages(e, t) {
      var _this62 = this;
      e != null && e.shadowRoot && (this._introMessage = e.introMessage);
      var i = this._introMessage;
      t != null && t.isWebModel() && (i !== null && i !== void 0 ? i : i = t.getIntroMessage(i));
      var s = !(e != null && e.history) && !!(e != null && e.loadHistory || t != null && t.fetchHistory);
      i && (Array.isArray(i) ? i.forEach(function (r, o) {
        if (o !== 0) {
          var a = _this62.messageElementRefs[_this62.messageElementRefs.length - 1].innerContainer;
          y.hideRoleElements(a, _this62.avatar, _this62.name);
        }
        _this62.addIntroductoryMessage(r, s);
      }) : this.addIntroductoryMessage(i, s));
    }
  }, {
    key: "addIntroductoryMessage",
    value: function addIntroductoryMessage(e, t) {
      var s;
      var i;
      return e != null && e.text ? i = this.createAndAppendNewMessageElement(e.text, y.AI_ROLE) : e != null && e.html && (i = _e.add(this, e.html, y.AI_ROLE)), i && (this.applyCustomStyles(i, y.AI_ROLE, !1, (s = this.messageStyles) == null ? void 0 : s.intro), i.outerContainer.classList.add(he.INTRO_CLASS), t && (i.outerContainer.style.display = "none")), i;
    }
  }, {
    key: "removeIntroductoryMessage",
    value: function removeIntroductoryMessage() {
      var e = this.messageElementRefs[0];
      e.outerContainer.classList.contains(he.INTRO_CLASS) && (e.outerContainer.remove(), this.messageElementRefs.shift());
    }
  }, {
    key: "addAnyMessage",
    value: function addAnyMessage(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      return e.error ? this.addNewErrorMessage("service", e.error, i) : this.addNewMessage(e, t, i);
    }
  }, {
    key: "tryAddTextMessage",
    value: function tryAddTextMessage(e, t, i) {
      var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
      !i.ignoreText && e.text !== void 0 && i.text !== null && (this.addNewTextMessage(e.text, e.role, t, r), !s && this.textToSpeech && e.role !== y.USER_ROLE && gt.speak(e.text, this.textToSpeech));
    }
  }, {
    key: "tryAddFileMessages",
    value: function tryAddFileMessages(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      e.files && Array.isArray(e.files) && Oi.addMessages(this, e.files, e.role, t);
    }
  }, {
    key: "tryAddHTMLMessage",
    value: function tryAddHTMLMessage(e, t) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      if (e.html !== void 0 && e.html !== null) {
        var s = _e.add(this, e.html, e.role, t, i);
        i && Se.isElementTemporary(s) && delete e.html;
      }
    }
    // this should not be activated by streamed messages
  }, {
    key: "addNewMessage",
    value: function addNewMessage(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      var s = de.createMessageContent(e),
        r = {
          status: e.overwrite
        };
      return i ? (this.tryAddHTMLMessage(s, r, i), this.tryAddFileMessages(s, i), this.tryAddTextMessage(s, r, e, t, i)) : (this.tryAddTextMessage(s, r, e, t, i), this.tryAddFileMessages(s, i), this.tryAddHTMLMessage(s, r, i)), this.isValidMessageContent(s) && !i && this.updateStateOnMessage(s, e.overwrite, e.sendUpdate, t), s;
    }
  }, {
    key: "isValidMessageContent",
    value: function isValidMessageContent(e) {
      return e.text || e.html || e.files && e.files.length > 0;
    }
  }, {
    key: "updateStateOnMessage",
    value: function updateStateOnMessage(e, t) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
      if (!t) {
        var r = y.generateMessageBody(e, this.messageElementRefs);
        this.messageToElements.push([e, r]);
      }
      i && this.sendClientUpdate(e, s);
    }
    // prettier-ignore
  }, {
    key: "removeMessageOnError",
    value: function removeMessageOnError() {
      var e = this.messageElementRefs[this.messageElementRefs.length - 1],
        t = e == null ? void 0 : e.bubbleElement;
      (t != null && t.classList.contains(we.MESSAGE_CLASS) && t.textContent === "" || de.isTemporaryElement(e)) && this.removeLastMessage();
    }
    // prettier-ignore
  }, {
    key: "addNewErrorMessage",
    value: function addNewErrorMessage(e, t) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      var c, d, u, h, f;
      this.removeMessageOnError();
      var s = this.getPermittedMessage(t) || ((c = this._errorMessageOverrides) == null ? void 0 : c[e]) || ((d = this._errorMessageOverrides) == null ? void 0 : d["default"]) || "Error, please try again.",
        r = this.createMessageElementsOnOrientation(s, "error", i);
      y.hideRoleElements(r.innerContainer, this.avatar, this.name);
      var o = r.bubbleElement,
        a = r.outerContainer;
      o.classList.add(y.ERROR_MESSAGE_TEXT_CLASS), this.renderText(o, s);
      var l = W.extractParticularSharedStyles(["fontSize", "fontFamily"], (u = this.messageStyles) == null ? void 0 : u["default"]);
      W.applyCustomStylesToElements(r, !1, l), W.applyCustomStylesToElements(r, !1, (h = this.messageStyles) == null ? void 0 : h.error), i || this.appendOuterContainerElemet(a), this.textToSpeech && gt.speak(s, this.textToSpeech), (f = this._onError) == null || f.call(this, s);
    }
  }, {
    key: "getPermittedMessage",
    value: function getPermittedMessage(e) {
      if (e) {
        var t = de.extractErrorMessages(e);
        for (var _i6 = 0; _i6 < t.length; _i6 += 1) {
          var s = t[_i6];
          if (typeof s == "string") {
            if (this._displayServiceErrorMessages) return s;
            if (this._permittedErrorPrefixes) {
              var r = de.checkPermittedErrorPrefixes(this._permittedErrorPrefixes, s);
              if (r) return r;
            }
          }
        }
      }
    }
  }, {
    key: "removeError",
    value: function removeError() {
      this.isLastMessageError() && y.getLastMessageElement(this.elementRef).remove();
    }
  }, {
    key: "addDefaultLoadingMessage",
    value: function addDefaultLoadingMessage() {
      var e = this.createMessageElements("", y.AI_ROLE),
        t = e.bubbleElement;
      e.bubbleElement.classList.add(Ne.DOTS_CONTAINER_CLASS);
      var i = document.createElement("div");
      return i.classList.add("loading-message-dots"), t.appendChild(i), Ne.setDots(t, this.messageStyles), e;
    }
  }, {
    key: "addLoadingMessage",
    value: function addLoadingMessage() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      var r, o, a, l, c, d;
      var t = this.messageElementRefs[this.messageElementRefs.length - 1];
      if (he.isLoadingMessage(t) || !e && !this._isLoadingMessageAllowed) return;
      var i = (a = (o = (r = this.messageStyles) == null ? void 0 : r.loading) == null ? void 0 : o.message) == null ? void 0 : a.html,
        s = i ? _e.createElements(this, i, y.AI_ROLE, !1) : this.addDefaultLoadingMessage();
      this.appendOuterContainerElemet(s.outerContainer), s.bubbleElement.classList.add(Ne.BUBBLE_CLASS), this.applyCustomStyles(s, y.AI_ROLE, !1, (d = (c = (l = this.messageStyles) == null ? void 0 : l.loading) == null ? void 0 : c.message) == null ? void 0 : d.styles), this.focusMode || X.scrollToBottom(this.elementRef);
    }
  }, {
    key: "populateIntroPanel",
    value: function populateIntroPanel(e, t, i) {
      (e || t) && (this._introPanel = new Ii(e, t, i), this._introPanel._elementRef && (J.apply(this, this._introPanel._elementRef), this.elementRef.appendChild(this._introPanel._elementRef)));
    }
  }, {
    key: "addMultipleFiles",
    value: function () {
      var _addMultipleFiles = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee124(e) {
        return _regeneratorRuntime().wrap(function _callee124$(_context124) {
          while (1) switch (_context124.prev = _context124.next) {
            case 0:
              return _context124.abrupt("return", Promise.all((e || []).map(function (t) {
                return new Promise(function (i) {
                  if (!t.type || t.type === "any") {
                    var s = t.file.name || H.DEFAULT_FILE_NAME;
                    i({
                      name: s,
                      type: "any",
                      ref: t.file
                    });
                  } else {
                    var _s6 = new FileReader();
                    _s6.readAsDataURL(t.file), _s6.onload = function () {
                      i({
                        src: _s6.result,
                        type: t.type,
                        ref: t.file
                      });
                    };
                  }
                });
              })));
            case 1:
            case "end":
              return _context124.stop();
          }
        }, _callee124);
      }));
      function addMultipleFiles(_x227) {
        return _addMultipleFiles.apply(this, arguments);
      }
      return addMultipleFiles;
    }()
  }, {
    key: "clearMessages",
    value:
    // WORK - update all message classes to use deep-chat prefix
    function clearMessages(e, t) {
      var _this$messageToElemen;
      var r, o;
      var i = [];
      this.messageElementRefs.forEach(function (a) {
        de.isActiveElement(a.bubbleElement.classList) ? i.push(a) : a.outerContainer.remove();
      }), Array.from(this.elementRef.children).forEach(function (a) {
        var c;
        var l = (c = a.children[0]) == null ? void 0 : c.children[0];
        l != null && l.classList.contains(y.ERROR_MESSAGE_TEXT_CLASS) && a.remove();
      }), this.messageElementRefs = i;
      var s = this.messageToElements.filter(function (a) {
        return a[1].text && de.isActiveElement(a[1].text.bubbleElement.classList) || a[1].html && de.isActiveElement(a[1].html.bubbleElement.classList);
      });
      (_this$messageToElemen = this.messageToElements).splice.apply(_this$messageToElemen, [0, this.messageToElements.length].concat(_toConsumableArray(s))), t !== !1 && ((r = this._introPanel) != null && r._elementRef && this._introPanel.display(), this.addIntroductoryMessages()), (o = this._onClearMessages) == null || o.call(this), delete e.sessionId;
    }
  }], [{
    key: "getDefaultDisplayLoadingMessage",
    value: function getDefaultDisplayLoadingMessage(e, t) {
      var _ref37;
      return t.websocket ? !!e.displayLoadingBubble : (_ref37 = _typeof(e.displayLoadingBubble) == "object" || e.displayLoadingBubble) !== null && _ref37 !== void 0 ? _ref37 : !0;
    }
  }, {
    key: "checkPermittedErrorPrefixes",
    value: function checkPermittedErrorPrefixes(e, t) {
      for (var _i7 = 0; _i7 < e.length; _i7 += 1) if (t.startsWith(e[_i7])) return t;
    }
  }, {
    key: "extractErrorMessages",
    value: function extractErrorMessages(e) {
      return Array.isArray(e) ? e : e instanceof Error ? [e.message] : typeof e == "string" ? [e] : _typeof(e) == "object" && e.error ? [e.error] : [];
    }
  }, {
    key: "isActiveElement",
    value: function isActiveElement(e) {
      return e ? e.contains(Ne.BUBBLE_CLASS) || e.contains(Be.CLASS) || e.contains(we.MESSAGE_CLASS) : !1;
    }
  }]);
}(he);
var j = /*#__PURE__*/function () {
  function j() {
    _classCallCheck(this, j);
  }
  return _createClass(j, null, [{
    key: "adjustInputPadding",
    value: function adjustInputPadding(e, t) {
      t["inside-left"].length > 0 && e.classList.add("text-input-inner-left-adjustment"), t["inside-right"].length > 0 && e.classList.add("text-input-inner-right-adjustment");
    }
  }, {
    key: "adjustForOutsideButton",
    value: function adjustForOutsideButton(e, t, i) {
      i["outside-right"].length === 0 && i["outside-left"].length > 0 ? (e[0].classList.add(j.INPUT_OUTSIDE_LEFT_SMALL_ADJUSTMENT_CLASS), t.classList.add(j.INPUT_OUTSIDE_LEFT_SMALL_ADJUSTMENT_CLASS)) : i["outside-left"].length === 0 && i["outside-right"].length > 0 && (e[3].classList.add(j.INPUT_OUTSIDE_RIGHT_SMALL_ADJUSTMENT_CLASS), t.classList.add(j.INPUT_OUTSIDE_RIGHT_SMALL_ADJUSTMENT_CLASS));
    }
    // when submit is the only button
    // when submit button is outside by itself - we increase the height for a better look
  }, {
    key: "adjustOutsideSubmit",
    value: function adjustOutsideSubmit(e, t, i) {
      if (!(i["inside-left"].length > 0 || i["inside-right"].length > 0)) {
        if (i["outside-right"].length === 0 && i["outside-left"].length > 0) return e[0].classList.add(j.INPUT_OUTSIDE_LEFT_ADJUSTMENT_CLASS), t.classList.add(j.INPUT_OUTSIDE_LEFT_ADJUSTMENT_CLASS), i["outside-left"].map(function (s) {
          return s.button.elementRef.classList.add("submit-button-enlarged");
        });
        if (i["outside-left"].length === 0 && i["outside-right"].length > 0) return e[3].classList.add(j.INPUT_OUTSIDE_RIGHT_ADJUSTMENT_CLASS), t.classList.add(j.INPUT_OUTSIDE_RIGHT_ADJUSTMENT_CLASS), i["outside-right"].map(function (s) {
          return s.button.elementRef.classList.add("submit-button-enlarged");
        });
      }
    }
    // prettier-ignore
  }, {
    key: "set",
    value: function set(e, t, i, s) {
      !!j.adjustOutsideSubmit(t, i, s) || j.adjustForOutsideButton(t, i, s), j.adjustInputPadding(e, s);
    }
  }]);
}();
j.INPUT_OUTSIDE_LEFT_ADJUSTMENT_CLASS = "text-input-container-left-adjustment", j.INPUT_OUTSIDE_RIGHT_ADJUSTMENT_CLASS = "text-input-container-right-adjustment", j.INPUT_OUTSIDE_LEFT_SMALL_ADJUSTMENT_CLASS = "text-input-container-left-small-adjustment", j.INPUT_OUTSIDE_RIGHT_SMALL_ADJUSTMENT_CLASS = "text-input-container-right-small-adjustment";
var ms = j;
var yt = /*#__PURE__*/function () {
  function yt() {
    _classCallCheck(this, yt);
  }
  return _createClass(yt, null, [{
    key: "create",
    value: function create() {
      return Array.from({
        length: 4
      }).map(function (e, t) {
        var i = document.createElement("div");
        return i.classList.add("input-button-container"), (t === 0 || t === 3) && i.classList.add("outer-button-container"), (t === 1 || t === 2) && i.classList.add("inner-button-container"), i;
      });
    }
  }, {
    key: "add",
    value: function add(e, t) {
      e.insertBefore(t[1], e.firstChild), e.insertBefore(t[0], e.firstChild), e.appendChild(t[2]), e.appendChild(t[3]);
    }
  }, {
    key: "getContainerIndex",
    value: function getContainerIndex(e) {
      return e === "outside-left" ? 0 : e === "inside-left" ? 1 : e === "inside-right" ? 2 : 3;
    }
  }, {
    key: "addButton",
    value: function addButton(e, t, i) {
      t.classList.add(i);
      var s = yt.getContainerIndex(i);
      e[s].appendChild(t), s === 3 && t.classList.add("outside-right");
    }
  }]);
}();
var Js = ["camera", "gifs", "images", "audio", "mixedFiles", "submit", "microphone"],
  sa = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\" fill=\"none\">\n  <rect x=\"2.5\" y=\"2.5\" width=\"17\" height=\"17\" rx=\"2\" stroke=\"#000000\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n",
  Q = /*#__PURE__*/function () {
    function Q() {
      _classCallCheck(this, Q);
    }
    return _createClass(Q, null, [{
      key: "addItemEvents",
      value: function addItemEvents(e, t, i, s) {
        Ke.add(t, s), t.addEventListener("click", function () {
          i.click();
        }), t.addEventListener("mouseenter", function (r) {
          e.highlightedItem = r.target;
        }), t.addEventListener("mouseleave", function () {
          e.highlightedItem = void 0;
        });
      }
    }, {
      key: "createItemText",
      value: function createItemText(e, t) {
        var i = document.createElement("div");
        return Object.assign(i.style, t), i.classList.add(Q.TEXT_CLASS), i.textContent = e || "File", i;
      }
    }, {
      key: "createItemIcon",
      value: function createItemIcon(e, t) {
        var i = document.createElement("div");
        return Object.assign(i.style, t), i.classList.add(Q.ICON_CLASS), i.appendChild(e), i;
      }
    }, {
      key: "populateItem",
      value: function populateItem(e, t, i) {
        var s = e.elementRef,
          r = e.dropupText,
          o = e.svg,
          a = e.customStyles,
          l = s.children[0],
          c = a && Object.values(a).find(function (d) {
            var u;
            return ((u = d.svg) == null ? void 0 : u.content) === "";
          });
        l.classList.contains(Ae.INPUT_BUTTON_INNER_TEXT_CLASS) ? (c || t.appendChild(Q.createItemIcon(o, i == null ? void 0 : i.iconContainer)), t.appendChild(Q.createItemText(l.textContent, i == null ? void 0 : i.text))) : (c || t.appendChild(Q.createItemIcon(s.children[0], i == null ? void 0 : i.iconContainer)), t.appendChild(Q.createItemText(r, i == null ? void 0 : i.text)));
      }
    }, {
      key: "createItem",
      value: function createItem(e, t, i) {
        var o;
        var s = document.createElement("div");
        Object.assign(s.style, (o = i == null ? void 0 : i.item) == null ? void 0 : o["default"]), Q.populateItem(t, s, i), s.classList.add(Q.MENU_ITEM_CLASS);
        var r = t.elementRef;
        if (t.isCustom) t.setDropupItem(s);else {
          var a = I.processStateful((i == null ? void 0 : i.item) || {});
          Q.addItemEvents(e, s, r, a);
        }
        return s;
      }
    }]);
  }();
Q.MENU_ITEM_CLASS = "dropup-menu-item", Q.TEXT_CLASS = "dropup-menu-item-text", Q.ICON_CLASS = "dropup-menu-item-icon";
var Ee = Q;
var O = /*#__PURE__*/function (_lt2) {
  function O(e, t, i, s) {
    var _this63;
    _classCallCheck(this, O);
    var a, l, c, d, u, h;
    var r = ((d = (c = (l = (a = e == null ? void 0 : e.styles) == null ? void 0 : a.button) == null ? void 0 : l["default"]) == null ? void 0 : c.text) == null ? void 0 : d.content) || "Custom ".concat(t),
      o = sa;
    _this63 = _callSuper(this, O, [O.createButtonElement(), o, e == null ? void 0 : e.position, (u = e == null ? void 0 : e.styles) == null ? void 0 : u.button, r]), _this63._state = "default", _this63.isCustom = !0, _this63._innerElements = _this63.createInnerElementsForStates(_this63.customStyles), _this63._menuStyles = s, _this63._onClick = e.onClick, _this63._dropupStyles = (h = e.styles) == null ? void 0 : h.dropup, _this63.setSetState(e), _this63.addClickListener(i), _this63.changeState(e.initialState, !0);
    return _this63;
  }
  _inherits(O, _lt2);
  return _createClass(O, [{
    key: "createInnerElementsForStates",
    value: function createInnerElementsForStates(e) {
      var t = "custom-icon",
        i = this.createInnerElements(t, "default", e);
      return {
        "default": i,
        active: this.genStateInnerElements(t, "active", i, e),
        disabled: this.genStateInnerElements(t, "disabled", i, e)
      };
    }
  }, {
    key: "setSetState",
    value: function setSetState(e) {
      var _this64 = this;
      e.setState = function (t) {
        t === "default" && _this64.changeToDefault(), t === "active" && _this64.changeToActive(), t === "disabled" && _this64.changeToDisabled();
      };
    }
  }, {
    key: "addClickListener",
    value: function addClickListener(e) {
      var _this65 = this;
      this.elementRef.addEventListener("click", function () {
        var i;
        var t = (i = _this65._onClick) == null ? void 0 : i.call(_this65, _this65._state);
        e == null || e(), (t === "default" || t === "active" || t === "disabled") && _this65.changeState(t);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(e, t) {
      e === "disabled" ? this.changeToDisabled(t) : e === "active" ? this.changeToActive(t) : this.changeToDefault(t);
    }
  }, {
    key: "applyDropupContentStyles",
    value: function applyDropupContentStyles(e) {
      var t = Array.from(this.elementRef.children);
      if (e != null && e.text) {
        var _i8 = t.find(function (s) {
          return s.classList.contains(Ee.TEXT_CLASS);
        });
        _i8 && Object.assign(_i8.style, e.text);
      }
      if (e != null && e.iconContainer) {
        var _i9 = t.find(function (s) {
          return s.classList.contains(Ee.ICON_CLASS);
        });
        _i9 && Object.assign(_i9.style, e.iconContainer);
      }
    }
  }, {
    key: "resetDropupItem",
    value: function resetDropupItem(e) {
      var i, s, r;
      this.elementRef = J.replaceElementWithNewClone(this.elementRef, this._originalElementRef), this.elementRef.innerHTML = "", ((i = e == null ? void 0 : e.svg) == null ? void 0 : i.content) === "" || this.elementRef.appendChild(Ee.createItemIcon(this.svg, (s = this._menuStyles) == null ? void 0 : s.iconContainer)), this.elementRef.appendChild(Ee.createItemText(this.dropupText, (r = this._menuStyles) == null ? void 0 : r.text));
    }
  }, {
    key: "assignDropupItemStyle",
    value: function assignDropupItemStyle(e, t) {
      var s;
      this.elementRef.parentElement && this._originalElementRef && this.resetDropupItem(t), this.applyDropupContentStyles(e), Object.assign(this.elementRef.style, (s = e == null ? void 0 : e.item) == null ? void 0 : s["default"]);
      var i = I.processStateful((e == null ? void 0 : e.item) || {});
      Ke.add(this.elementRef, i), this.addClickListener();
    }
  }, {
    key: "changeToDefault",
    value: function changeToDefault(e) {
      var t, i, s, r, o, a;
      !e && this._state === "default" || (this.elementRef.classList.contains(Ee.MENU_ITEM_CLASS) ? this.assignDropupItemStyle((t = this._dropupStyles) == null ? void 0 : t["default"], (i = this.customStyles) == null ? void 0 : i["default"]) : (this.changeElementsByState(this._innerElements["default"]), (s = this.customStyles) != null && s.active && D.unsetAllCSS(this.elementRef, (r = this.customStyles) == null ? void 0 : r.active), (o = this.customStyles) != null && o.disabled && D.unsetAllCSS(this.elementRef, (a = this.customStyles) == null ? void 0 : a.disabled), this.reapplyStateStyle("default", ["active", "disabled"])), this.elementRef.classList.remove(O.DISABLED_CONTAINER_CLASS, O.ACTIVE_CONTAINER_CLASS), this.elementRef.classList.add(O.DEFAULT_CONTAINER_CLASS), N.removeAriaDisabled(this.elementRef), this._state = "default");
    }
  }, {
    key: "changeToActive",
    value: function changeToActive(e) {
      var t, i;
      !e && this._state === "active" || (this.elementRef.classList.contains(Ee.MENU_ITEM_CLASS) ? this.assignDropupItemStyle((t = this._dropupStyles) == null ? void 0 : t.active, (i = this.customStyles) == null ? void 0 : i.active) : (this.changeElementsByState(this._innerElements.active), this.reapplyStateStyle("active", ["disabled", "default"])), this.elementRef.classList.remove(O.DISABLED_CONTAINER_CLASS, O.DEFAULT_CONTAINER_CLASS), this.elementRef.classList.add(O.ACTIVE_CONTAINER_CLASS), N.removeAriaDisabled(this.elementRef), this._state = "active");
    }
  }, {
    key: "changeToDisabled",
    value: function changeToDisabled(e) {
      var t, i, s, r, o, a;
      !e && this._state === "disabled" || (this.elementRef.classList.contains(Ee.MENU_ITEM_CLASS) ? this.assignDropupItemStyle((t = this._dropupStyles) == null ? void 0 : t.disabled, (i = this.customStyles) == null ? void 0 : i.disabled) : (this.changeElementsByState(this._innerElements.disabled), (s = this.customStyles) != null && s.active && D.unsetAllCSS(this.elementRef, (r = this.customStyles) == null ? void 0 : r.active), (o = this.customStyles) != null && o["default"] && D.unsetAllCSS(this.elementRef, (a = this.customStyles) == null ? void 0 : a["default"]), this.reapplyStateStyle("disabled", ["default", "active"])), this.elementRef.classList.remove(O.ACTIVE_CONTAINER_CLASS, O.DEFAULT_CONTAINER_CLASS), this.elementRef.classList.add(O.DISABLED_CONTAINER_CLASS), N.addAriaDisabled(this.elementRef), this._state = "disabled");
    }
    // called after class is initialised
  }, {
    key: "setDropupItem",
    value: function setDropupItem(e) {
      this.elementRef = e, this._originalElementRef = e.cloneNode(!0), this.changeState(this._state, !0);
    }
  }, {
    key: "genStateInnerElements",
    value: function genStateInnerElements(e, t, i, s) {
      var l, c, d, u;
      var r = this.createInnerElements(e, t, s);
      var o = (c = (l = s == null ? void 0 : s[t]) == null ? void 0 : l.svg) == null ? void 0 : c.content,
        a = (u = (d = s == null ? void 0 : s[t]) == null ? void 0 : d.text) == null ? void 0 : u.content;
      if (o === void 0 || a === void 0) {
        var _Gt$parseSVGTextEleme4 = Gt.parseSVGTextElements(i),
          h = _Gt$parseSVGTextEleme4.svg,
          f = _Gt$parseSVGTextEleme4.text,
          _Gt$parseSVGTextEleme5 = Gt.parseSVGTextElements(r),
          m = _Gt$parseSVGTextEleme5.svg,
          p = _Gt$parseSVGTextEleme5.text,
          g = [];
        O.addToInnerElements(g, o, h, m), O.addToInnerElements(g, a, f, p), r = g;
      }
      return r;
    }
  }], [{
    key: "createButtonElement",
    value: function createButtonElement() {
      var e = document.createElement("div");
      return e.classList.add("input-button", O.BUTTON_CLASS), e;
    }
  }, {
    key: "addToInnerElements",
    value: function addToInnerElements(e, t, i, s) {
      t === void 0 && i ? e.push(i.cloneNode(!0)) : s && e.push(s);
    }
  }, {
    key: "add",
    value: function add(e, t) {
      var i = e.customButtons,
        s = e.focusInput,
        r = e.dropupStyles;
      i == null || i.forEach(function (o, a) {
        var l = {
          button: new O(o, a + 1, s, r == null ? void 0 : r.menu)
        };
        t["".concat(O.INDICATOR_PREFIX).concat(a + 1)] = l;
      });
    }
  }]);
}(lt);
O.INDICATOR_PREFIX = "custom", O.BUTTON_CLASS = "custom-button", O.DISABLED_CONTAINER_CLASS = "custom-button-container-disabled", O.DEFAULT_CONTAINER_CLASS = "custom-button-container-default", O.ACTIVE_CONTAINER_CLASS = "custom-button-container-active";
var it = O;
var na = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<svg viewBox=\"0 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23 15h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z\"></path>\n</svg>";
var ni = /*#__PURE__*/function () {
  function ni() {
    _classCallCheck(this, ni);
  }
  return _createClass(ni, null, [{
    key: "focusItemWhenOnEdge",
    value: function focusItemWhenOnEdge(e, t) {
      var i = t ? e.children[0] : e.children[e.children.length - 1];
      ni.focusSiblingItem(i, e, t, !0);
    }
    // isEdgeItem means is it a start or end item
    // prettier-ignore
  }, {
    key: "focusSiblingItem",
    value: function focusSiblingItem(e, t, i) {
      var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
      var r = s ? e : e[i ? "nextSibling" : "previousSibling"];
      r ? (e.dispatchEvent(new MouseEvent("mouseleave")), r.dispatchEvent(new MouseEvent("mouseenter"))) : (e.dispatchEvent(new MouseEvent("mouseleave")), ni.focusItemWhenOnEdge(t, i));
    }
  }]);
}();
var As = /*#__PURE__*/function () {
  function As(e, t) {
    var _this66 = this;
    _classCallCheck(this, As);
    var i;
    this._isOpen = !0, this._styles = t, this.elementRef = As.createElement((i = this._styles) == null ? void 0 : i.container), this.close(), setTimeout(function () {
      return _this66.addWindowEvents(e);
    });
  }
  return _createClass(As, [{
    key: "open",
    value: function open() {
      this.elementRef.style.display = "block", this._isOpen = !0;
    }
  }, {
    key: "close",
    value: function close() {
      this._isOpen && (this.elementRef.style.display = "none", this._isOpen = !1);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this._isOpen ? this.close() : this.open();
    }
  }, {
    key: "addItem",
    value: function addItem(e) {
      var t = Ee.createItem(this, e, this._styles);
      this.elementRef.appendChild(t);
    }
    // prettier-ignore
  }, {
    key: "addWindowEvents",
    value: function addWindowEvents(e) {
      this.clickEvent = this.windowClick.bind(this, e), window.addEventListener("click", this.clickEvent), this.keyDownEvent = this.windowKeyDown.bind(this, e), window.addEventListener("keydown", this.keyDownEvent);
    }
  }, {
    key: "windowClick",
    value: function windowClick(e, t) {
      var i;
      !e.isConnected && this.clickEvent ? window.removeEventListener("click", this.clickEvent) : e.parentElement !== ((i = t.target.shadowRoot) == null ? void 0 : i.children[0]) && this.close();
    }
    // prettier-ignore
  }, {
    key: "windowKeyDown",
    value: function windowKeyDown(e, t) {
      var i, s, r;
      !e.isConnected && this.keyDownEvent ? window.removeEventListener("keydown", this.keyDownEvent) : this._isOpen && (t.key === U.ESCAPE ? (this.close(), (i = this.highlightedItem) == null || i.dispatchEvent(new MouseEvent("mouseleave"))) : t.key === U.ENTER ? ((s = this.highlightedItem) == null || s.click(), (r = this.highlightedItem) == null || r.dispatchEvent(new MouseEvent("mouseleave"))) : t.key === U.ARROW_DOWN ? ni.focusSiblingItem(this.highlightedItem || this.elementRef.children[this.elementRef.children.length - 1], this.elementRef, !0) : t.key === U.ARROW_UP && ni.focusSiblingItem(this.highlightedItem || this.elementRef.children[0], this.elementRef, !1));
    }
  }], [{
    key: "createElement",
    value: function createElement(e) {
      var t = document.createElement("div");
      return t.id = "dropup-menu", Object.assign(t.style, e), t;
    }
  }]);
}();
var Qe = /*#__PURE__*/function (_lt3) {
  function Qe(e, t) {
    var _this67;
    _classCallCheck(this, Qe);
    var s;
    _this67 = _callSuper(this, Qe, [Qe.createButtonElement(), na, void 0, {
      styles: (s = t == null ? void 0 : t.button) == null ? void 0 : s.styles
    }]);
    var i = _this67.createInnerElementsForStates(_this67.customStyles);
    _this67._menu = new As(e, t == null ? void 0 : t.menu), _this67.addClickEvent(), _this67.buttonContainer = Qe.createButtonContainer(), _this67.changeElementsByState(i.styles), _this67.buttonContainer.appendChild(_this67.elementRef), _this67.elementRef.classList.add(Qe.BUTTON_ICON_CLASS), _this67.buttonContainer.appendChild(_this67._menu.elementRef), _this67.reapplyStateStyle("styles"), _this67.addContainerEvents(e);
    return _this67;
  }
  _inherits(Qe, _lt3);
  return _createClass(Qe, [{
    key: "createInnerElementsForStates",
    value: function createInnerElementsForStates(e) {
      return {
        styles: this.createInnerElements("dropup-icon", "styles", e)
      };
    }
  }, {
    key: "addClickEvent",
    value: function addClickEvent() {
      this.elementRef.onclick = this._menu.toggle.bind(this._menu);
    }
  }, {
    key: "addItem",
    value: function addItem(e) {
      this._menu.addItem(e);
    }
  }, {
    key: "addContainerEvents",
    value: function addContainerEvents(e) {
      var _this68 = this;
      e.addEventListener("click", function (t) {
        var i = t.target.classList;
        !i.contains(Qe.BUTTON_ICON_CLASS) && !i.contains(it.DISABLED_CONTAINER_CLASS) && _this68._menu.close();
      });
    }
  }], [{
    key: "createButtonElement",
    value: function createButtonElement() {
      var e = document.createElement("div");
      return e.classList.add("input-button"), e;
    }
  }, {
    key: "createButtonContainer",
    value: function createButtonContainer() {
      var e = document.createElement("div");
      return e.id = "dropup-container", e;
    }
  }, {
    key: "getPosition",
    value: function getPosition(e, t) {
      var i, s;
      return (i = t == null ? void 0 : t.button) != null && i.position ? (s = t == null ? void 0 : t.button) == null ? void 0 : s.position : e["outside-left"].length > 0 && e["outside-right"].length === 0 ? "outside-right" : "outside-left";
    }
  }]);
}(lt);
Qe.BUTTON_ICON_CLASS = "dropup-button";
var Pi = Qe;
var K = /*#__PURE__*/function () {
  function K() {
    _classCallCheck(this, K);
  }
  return _createClass(K, null, [{
    key: "addToDropup",
    value:
    // prettier-ignore
    function addToDropup(e, t, i, s) {
      var r = new Pi(i, s);
      Js.forEach(function (a) {
        var l = t["dropup-menu"].findIndex(function (d) {
            return d.buttonType === a;
          }),
          c = t["dropup-menu"][l];
        c && (r.addItem(c.button), t["dropup-menu"].splice(l, 1));
      }), t["dropup-menu"].forEach(function (_ref38) {
        var a = _ref38.button;
        return r.addItem(a);
      });
      var o = Pi.getPosition(t, s);
      yt.addButton(e, r.buttonContainer, o), t[o].push({});
    }
  }, {
    key: "addToSideContainer",
    value: function addToSideContainer(e, t) {
      ["inside-left", "inside-right", "outside-left", "outside-right"].forEach(function (s) {
        var r = s;
        t[r].forEach(function (o) {
          yt.addButton(e, o.button.elementRef, r);
        });
      });
    }
  }, {
    key: "setPosition",
    value: function setPosition(e, t, i) {
      var s = _objectSpread(_objectSpread({}, e[t]), {}, {
        buttonType: t
      });
      i.push(s), delete e[t];
    }
  }, {
    key: "createPositionsToButtonsObj",
    value: function createPositionsToButtonsObj() {
      return {
        "dropup-menu": [],
        "outside-left": [],
        "inside-left": [],
        "inside-right": [],
        "outside-right": []
      };
    }
    // prettier-ignore
  }, {
    key: "generatePositionToButtons",
    value: function generatePositionToButtons(e) {
      var t = K.createPositionsToButtonsObj();
      Object.keys(e).forEach(function (s) {
        var o;
        var r = (o = e[s]) == null ? void 0 : o.button.position;
        r && K.setPosition(e, s, t[r]);
      }), t["inside-right"].length === 0 && e.submit && K.setPosition(e, "submit", t["inside-right"]), t["outside-right"].length === 0 && (e.submit ? K.setPosition(e, "submit", t["outside-right"]) : e.microphone ? K.setPosition(e, "microphone", t["outside-right"]) : e.camera ? K.setPosition(e, "camera", t["outside-right"]) : e["".concat(it.INDICATOR_PREFIX, "1")] && K.setPosition(e, "".concat(it.INDICATOR_PREFIX, "1"), t["outside-right"])), e.submit && K.setPosition(e, "submit", t["outside-left"].length === 0 ? t["outside-left"] : t["inside-right"]), e.microphone && K.setPosition(e, "microphone", t["outside-left"].length === 0 ? t["outside-left"] : t["inside-right"]);
      var i = Object.keys(e);
      return i.length > 1 || t["dropup-menu"].length > 0 ? (Js.forEach(function (s) {
        e[s] && t["dropup-menu"].push(_objectSpread(_objectSpread({}, e[s]), {}, {
          buttonType: s
        }));
      }), i.forEach(function (s) {
        var r = s;
        r.startsWith(it.INDICATOR_PREFIX) && e[r] && t["dropup-menu"].push(_objectSpread(_objectSpread({}, e[r]), {}, {
          customType: r
        }));
      })) : i.length === 1 && K.setPosition(e, i[0], t["outside-right"].length === 0 ? t["outside-right"] : t["outside-left"]), t;
    }
    // prettier-ignore
  }, {
    key: "addButtons",
    value: function addButtons(e, t, i, s) {
      var r = K.generatePositionToButtons(t);
      return K.addToSideContainer(e, r), r["dropup-menu"].length > 0 && K.addToDropup(e, r, i, s), r;
    }
  }]);
}();
var ra = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M20 10.9696L11.9628 18.5497C10.9782 19.4783 9.64274 20 8.25028 20C6.85782 20 5.52239 19.4783 4.53777 18.5497C3.55315 17.6211 3 16.3616 3 15.0483C3 13.7351 3.55315 12.4756 4.53777 11.547L12.575 3.96687C13.2314 3.34779 14.1217 3 15.05 3C15.9783 3 16.8686 3.34779 17.525 3.96687C18.1814 4.58595 18.5502 5.4256 18.5502 6.30111C18.5502 7.17662 18.1814 8.01628 17.525 8.63535L9.47904 16.2154C9.15083 16.525 8.70569 16.6989 8.24154 16.6989C7.77738 16.6989 7.33224 16.525 7.00403 16.2154C6.67583 15.9059 6.49144 15.4861 6.49144 15.0483C6.49144 14.6106 6.67583 14.1907 7.00403 13.8812L14.429 6.88674\" stroke=\"#000000\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>",
  oa = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M20,15.2928932 L20,5.5 C20,4.67157288 19.3284271,4 18.5,4 L5.5,4 C4.67157288,4 4,4.67157288 4,5.5 L4,12.2928932 L7.14644661,9.14644661 C7.34170876,8.95118446 7.65829124,8.95118446 7.85355339,9.14644661 L13.5,14.7928932 L16.1464466,12.1464466 C16.3417088,11.9511845 16.6582912,11.9511845 16.8535534,12.1464466 L20,15.2928932 Z M20,16.7071068 L16.5,13.2071068 L13.8535534,15.8535534 C13.6582912,16.0488155 13.3417088,16.0488155 13.1464466,15.8535534 L7.5,10.2071068 L4,13.7071068 L4,18.5 C4,19.3284271 4.67157288,20 5.5,20 L18.5,20 C19.3284271,20 20,19.3284271 20,18.5 L20,16.7071068 Z M3,5.5 C3,4.11928813 4.11928813,3 5.5,3 L18.5,3 C19.8807119,3 21,4.11928813 21,5.5 L21,18.5 C21,19.8807119 19.8807119,21 18.5,21 L5.5,21 C4.11928813,21 3,19.8807119 3,18.5 L3,5.5 Z M15,6 L17,6 C17.5522847,6 18,6.44771525 18,7 L18,9 C18,9.55228475 17.5522847,10 17,10 L15,10 C14.4477153,10 14,9.55228475 14,9 L14,7 C14,6.44771525 14.4477153,6 15,6 Z M15,7 L15,9 L17,9 L17,7 L15,7 Z\"/>\n</svg>\n",
  aa = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"-49.49 -49.49 593.87 593.87\" stroke-width=\"3.95908\" transform=\"rotate(0)\">\n  <g stroke-width=\"0\"></g>\n  <g stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"0.98977\"></g>\n  <g>\n    <g>\n      <g>\n        <path d=\"M163.205,76.413v293.301c-3.434-3.058-7.241-5.867-11.486-8.339c-21.38-12.452-49.663-15.298-77.567-7.846 c-49.038,13.096-80.904,54.519-71.038,92.337c4.019,15.404,14.188,28.221,29.404,37.087c13.553,7.894,29.87,11.933,47.115,11.933 c9.962,0,20.231-1.356,30.447-4.087c42.74-11.406,72.411-44.344,72.807-77.654h0.011v-0.162c0.002-0.166,0-0.331,0-0.496V187.072 l290.971-67.3v178.082c-3.433-3.055-7.238-5.863-11.481-8.334c-21.385-12.452-49.654-15.308-77.567-7.846 c-49.038,13.087-80.904,54.519-71.038,92.356c4.019,15.385,14.183,28.212,29.404,37.067c13.548,7.894,29.875,11.933,47.115,11.933 c9.962,0,20.231-1.356,30.452-4.087c42.74-11.413,72.411-44.346,72.804-77.654h0.004v-0.065c0.003-0.236,0.001-0.469,0-0.704V0 L163.205,76.413z M104.999,471.779c-22.543,6.038-45.942,3.846-62.572-5.846c-10.587-6.163-17.591-14.817-20.255-25.038 c-7.144-27.375,18.452-58.029,57.062-68.346c8.409-2.25,16.938-3.346,25.188-3.346c13.87,0,26.962,3.115,37.389,9.192 c10.587,6.163,17.591,14.817,20.255,25.029c0.809,3.102,1.142,6.248,1.139,9.4v0.321h0.014 C162.99,437.714,139.082,462.678,104.999,471.779z M182.898,166.853V92.067l290.971-67.298v74.784L182.898,166.853z M415.677,399.923c-22.558,6.038-45.942,3.837-62.587-5.846c-10.587-6.163-17.587-14.817-20.25-25.019 c-7.144-27.385,18.452-58.058,57.058-68.365c8.414-2.25,16.942-3.346,25.192-3.346c13.875,0,26.962,3.115,37.385,9.192 c10.596,6.163,17.596,14.817,20.26,25.029v0.01c0.796,3.05,1.124,6.144,1.135,9.244v0.468h0.02 C473.668,365.851,449.763,390.814,415.677,399.923z\">\n        </path>\n      </g>\n    </g>\n  </g>\n</svg>",
  la = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 5.9266752 5.6408391\" height=\"21.31971\" width=\"22.4\">\n  <g>\n    <path d=\"m 5.2564627,1.548212 c -3.1136005,-0.4796804 -1.5568006,-0.2398402 0,0 z M 2.0001198,2.0922063 c 0.1556781,0 0.2657489,0.020893 0.3917849,0.080366 0.081154,0.038347 0.1153492,0.134065 0.076377,0.2138602 -0.038973,0.07979 -0.1363527,0.1134129 -0.2175069,0.075091 -0.078199,-0.036919 -0.1407455,-0.048792 -0.250655,-0.048792 -0.2260486,0 -0.3921482,0.2042182 -0.3921482,0.4801409 0,0.2761822 0.1663188,0.4810688 0.3921482,0.4810688 0.1117901,0 0.2064255,-0.046133 0.255659,-0.1284198 l 0.00162,-0.00389 V 3.0534032 l -0.098011,1.75e-4 c -0.081844,0 -0.1495979,-0.059305 -0.1612403,-0.1365887 l -0.00175,-0.023683 c 0,-0.08047 0.060311,-0.1470874 0.1389194,-0.1585331 l 0.024085,-0.00195 h 0.2612303 c 0.081842,0 0.149598,0.059305 0.1612404,0.1365891 l 0.00175,0.023683 -3.398e-4,0.3968809 v 0 l -0.00168,0.014211 v 0 l -0.00553,0.023034 v 0 l -0.00532,0.014145 c -0.098178,0.22826 -0.3236506,0.3528713 -0.5706303,0.3528713 -0.4240855,0 -0.7181621,-0.3622714 -0.7181621,-0.8016063 0,-0.4391857 0.2940275,-0.8006848 0.7181621,-0.8006848 z m 1.2034759,0.031275 c 0.081843,0 0.1495977,0.059305 0.1612403,0.1365891 l 0.00175,0.023683 v 1.2211775 c 0,0.088516 -0.07298,0.1602721 -0.1630073,0.1602721 -0.081841,0 -0.1495972,-0.059305 -0.1612397,-0.1365892 L 3.040589,3.5049308 V 2.2837527 c 0,-0.088516 0.07298,-0.1602721 0.1630067,-0.1602714 z m 0.7813442,0 0.5209469,0.00195 c 0.090025,3.048e-4 0.1627543,0.072306 0.1624458,0.1608234 -2.809e-4,0.08047 -0.06083,0.1468798 -0.1394772,0.158066 l -0.024092,0.00195 -0.3575326,-0.0013 v 0.4497782 l 0.2928918,2.27e-4 c 0.081842,0 0.1495979,0.059305 0.1612403,0.136589 l 0.00175,0.023683 c 0,0.080469 -0.06031,0.1470871 -0.1389193,0.1585393 l -0.024092,0.00195 -0.2928919,-2.336e-4 1.563e-4,0.2860316 c 0,0.080471 -0.06031,0.1470873 -0.1389193,0.1585395 l -0.024085,0.00195 c -0.081843,0 -0.1495979,-0.059305 -0.1612403,-0.1365826 l -0.00175,-0.023691 V 2.2841354 c 2.798e-4,-0.08047 0.060829,-0.1468797 0.1394758,-0.1580594 z\"/>\n    <path d=\"m 5.0894191,1.0943261 c 0,-0.21918999 -0.177687,-0.39686999 -0.396876,-0.39686999 h -3.43959 c -0.2191879,0 -0.391262,0.1777519 -0.3968759,0.39686999 l -0.027082,3.4379266 c 0.040152,0.2939927 0.4235456,0.409415 0.4235456,0.409415 l 3.4785583,-0.00851 c 0,0 0.3008506,-0.1402998 0.3236271,-0.4201576 0.042911,-0.5272495 0.034693,-1.6106146 0.034693,-3.4186761 z m -4.49792494,0 c 0,-0.36530999 0.29614504,-0.66145999 0.66145894,-0.66145999 h 3.43959 c 0.365314,0 0.66146,0.29615 0.66146,0.66145999 v 3.43959 c 0,0.36532 -0.296146,0.66146 -0.66146,0.66146 h -3.43959 c -0.3653139,0 -0.66145894,-0.29614 -0.66145894,-0.66146 z\"/>\n  </g>\n</svg>\n",
  ca = {
    images: {
      id: "upload-images-icon",
      svgString: oa,
      dropupText: "Image"
    },
    gifs: {
      id: "upload-gifs-icon",
      svgString: la,
      dropupText: "GIF"
    },
    audio: {
      id: "upload-audio-icon",
      svgString: aa,
      dropupText: "Audio"
    },
    mixedFiles: {
      id: "upload-mixed-files-icon",
      svgString: ra,
      dropupText: "File"
    }
  };
var Hi = /*#__PURE__*/function (_lt4) {
  function Hi(e) {
    var _this69;
    _classCallCheck(this, Hi);
    (e == null ? void 0 : e.position) === "dropup-menu" && (e.position = "outside-right"), _this69 = _callSuper(this, Hi, [Hi.createMicrophoneElement(), Ln, e == null ? void 0 : e.position, e]), _this69.isActive = !1, _this69._innerElements = _this69.createInnerElementsForStates(_this69.customStyles), _this69.changeToDefault();
    return _this69;
  }
  _inherits(Hi, _lt4);
  return _createClass(Hi, [{
    key: "createInnerElementsForStates",
    value: function createInnerElementsForStates(e) {
      var t = "microphone-icon";
      return {
        "default": this.createInnerElements(t, "default", e),
        active: this.createInnerElements(t, "active", e),
        unsupported: this.createInnerElements(t, "unsupported", e),
        commandMode: this.createInnerElements(t, "commandMode", e)
      };
    }
  }, {
    key: "changeToActive",
    value: function changeToActive() {
      this.changeElementsByState(this._innerElements.active), this.toggleIconFilter("active"), this.reapplyStateStyle("active", ["default", "commandMode"]), this.isActive = !0;
    }
  }, {
    key: "changeToDefault",
    value: function changeToDefault() {
      this.changeElementsByState(this._innerElements["default"]), this.toggleIconFilter("default"), this.reapplyStateStyle("default", ["active", "commandMode"]), this.isActive = !1;
    }
  }, {
    key: "changeToCommandMode",
    value: function changeToCommandMode() {
      this.changeElementsByState(this._innerElements.commandMode), this.toggleIconFilter("command"), this.reapplyStateStyle("commandMode", ["active"]);
    }
  }, {
    key: "changeToUnsupported",
    value: function changeToUnsupported() {
      this.changeElementsByState(this._innerElements.unsupported), this.elementRef.classList.add("unsupported-microphone"), this.reapplyStateStyle("unsupported", ["active"]);
    }
  }, {
    key: "toggleIconFilter",
    value: function toggleIconFilter(e) {
      var t = this.elementRef.children[0];
      if (t.tagName.toLocaleLowerCase() === "svg") switch (e) {
        case "default":
          t.classList.remove("active-microphone-icon", "command-microphone-icon"), t.classList.add("default-microphone-icon");
          break;
        case "active":
          t.classList.remove("default-microphone-icon", "command-microphone-icon"), t.classList.add("active-microphone-icon");
          break;
        case "command":
          t.classList.remove("active-microphone-icon", "default-microphone-icon"), t.classList.add("command-microphone-icon");
          break;
      }
    }
  }], [{
    key: "createMicrophoneElement",
    value: function createMicrophoneElement() {
      var e = document.createElement("div");
      return e.id = "microphone-button", e.classList.add("input-button"), e;
    }
  }]);
}(lt);
function da(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n["default"] : n;
}
var pi = {},
  Et = {},
  St = {},
  _t = {},
  xt = {},
  Xs;
function zi() {
  if (Xs) return xt;
  Xs = 1, Object.defineProperty(xt, "__esModule", {
    value: !0
  }), xt.Text = void 0;
  var n = /*#__PURE__*/function () {
    function n() {
      _classCallCheck(this, n);
    }
    return _createClass(n, null, [{
      key: "capitalize",
      value: function capitalize(t) {
        return t.replace(n.FIRST_CHAR_REGEX, function (i) {
          return i.toUpperCase();
        });
      }
    }, {
      key: "lineBreak",
      value: function lineBreak(t) {
        return t.replace(n.DOUBLE_LINE, "<p></p>").replace(n.ONE_LINE, "<br>");
      }
    }, {
      key: "isCharDefined",
      value: function isCharDefined(t) {
        return t !== void 0 && t !== " " && t !== " " && t !== "\n" && t !== "";
      }
    }, {
      key: "breakupIntoWordsArr",
      value: function breakupIntoWordsArr(t) {
        return t.split(/(\W+)/);
      }
    }]);
  }();
  return xt.Text = n, n.FIRST_CHAR_REGEX = /\S/, n.DOUBLE_LINE = /\n\n/g, n.ONE_LINE = /\n/g, xt;
}
var Ys;
function Pn() {
  if (Ys) return _t;
  Ys = 1, Object.defineProperty(_t, "__esModule", {
    value: !0
  }), _t.Translate = void 0;
  var n = zi();
  var e = /*#__PURE__*/function () {
    function e() {
      _classCallCheck(this, e);
    }
    return _createClass(e, null, [{
      key: "translate",
      value: function translate(i, s) {
        var r = n.Text.breakupIntoWordsArr(i);
        for (var o = 0; o < r.length; o += 1) s[r[o]] && (r[o] = s[r[o]]);
        return r.join("");
      }
    }]);
  }();
  return _t.Translate = e, _t;
}
var Zs;
function ha() {
  if (Zs) return St;
  Zs = 1, Object.defineProperty(St, "__esModule", {
    value: !0
  }), St.WebSpeechTranscript = void 0;
  var n = Pn();
  var e = /*#__PURE__*/function () {
    function e() {
      _classCallCheck(this, e);
    }
    return _createClass(e, null, [{
      key: "extract",
      value: function extract(i, s, r) {
        var o = "";
        for (var a = i.resultIndex; a < i.results.length; ++a) {
          var l = i.results[a][0].transcript;
          r && (l = n.Translate.translate(l, r)), i.results[a].isFinal ? s += l : o += l;
        }
        return {
          interimTranscript: o,
          finalTranscript: s,
          newText: o || s
        };
      }
    }, {
      key: "extractSafari",
      value: function extractSafari(i, s, r) {
        var o = "";
        var a = "";
        for (var l = i.resultIndex; l < i.results.length; ++l) {
          var c = i.results[l][0].transcript;
          r && (c = n.Translate.translate(c, r)), o += c;
        }
        return {
          interimTranscript: a,
          finalTranscript: o,
          newText: a || o
        };
      }
    }]);
  }();
  return St.WebSpeechTranscript = e, St;
}
var wt = {},
  Qs;
function Ts() {
  if (Qs) return wt;
  Qs = 1, Object.defineProperty(wt, "__esModule", {
    value: !0
  }), wt.Browser = void 0;
  var n = /*#__PURE__*/_createClass(function n() {
    _classCallCheck(this, n);
  });
  return wt.Browser = n, n.IS_SAFARI = function () {
    return n._IS_SAFARI === void 0 && (n._IS_SAFARI = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), n._IS_SAFARI;
  }, wt;
}
var At = {},
  Tt = {},
  en;
function ua() {
  if (en) return Tt;
  en = 1, Object.defineProperty(Tt, "__esModule", {
    value: !0
  }), Tt.EventListeners = void 0;
  var n = /*#__PURE__*/function () {
    function n() {
      _classCallCheck(this, n);
    }
    return _createClass(n, null, [{
      key: "getElementIfFocusedOnAvailable",
      value: function getElementIfFocusedOnAvailable(t, i) {
        return Array.isArray(t) ? t.find(function (s) {
          return i === s;
        }) : i === t ? t : void 0;
      }
    }, {
      key: "keyDownWindow",
      value: function keyDownWindow(t) {
        var _this70 = this;
        t.element && n.getElementIfFocusedOnAvailable(t.element, document.activeElement) && (n.KEY_DOWN_TIMEOUT !== null && clearTimeout(n.KEY_DOWN_TIMEOUT), n.KEY_DOWN_TIMEOUT = setTimeout(function () {
          n.KEY_DOWN_TIMEOUT = null, _this70.resetRecording(t);
        }, 500));
      }
    }, {
      key: "mouseDownWindow",
      value: function mouseDownWindow(t, i) {
        this.mouseDownElement = n.getElementIfFocusedOnAvailable(t, i.target);
      }
    }, {
      key: "mouseUpWindow",
      value: function mouseUpWindow(t) {
        this.mouseDownElement && this.resetRecording(t), this.mouseDownElement = void 0;
      }
    }, {
      key: "add",
      value: function add(t, i) {
        var s = (i == null ? void 0 : i.insertInCursorLocation) === void 0 || (i == null ? void 0 : i.insertInCursorLocation);
        i != null && i.element && s && (t.mouseDownEvent = n.mouseDownWindow.bind(t, i.element), document.addEventListener("mousedown", t.mouseDownEvent), t.mouseUpEvent = n.mouseUpWindow.bind(t, i), document.addEventListener("mouseup", t.mouseUpEvent), t.keyDownEvent = n.keyDownWindow.bind(t, i), document.addEventListener("keydown", t.keyDownEvent));
      }
    }, {
      key: "remove",
      value: function remove(t) {
        document.removeEventListener("mousedown", t.mouseDownEvent), document.removeEventListener("mouseup", t.mouseUpEvent), document.removeEventListener("keydown", t.keyDownEvent);
      }
    }]);
  }();
  return Tt.EventListeners = n, n.KEY_DOWN_TIMEOUT = null, Tt;
}
var Ct = {},
  tn;
function fa() {
  if (tn) return Ct;
  tn = 1, Object.defineProperty(Ct, "__esModule", {
    value: !0
  }), Ct.PreResultUtils = void 0;
  var n = /*#__PURE__*/function () {
    function n() {
      _classCallCheck(this, n);
    }
    return _createClass(n, null, [{
      key: "process",
      value: function process(t, i, s, r, o) {
        var a = r == null ? void 0 : r(i, s);
        return a ? (setTimeout(function () {
          a.restart ? t.resetRecording(o) : a.stop && t.stop();
        }), (a.stop || a.restart) && a.removeNewText) : !1;
      }
    }]);
  }();
  return Ct.PreResultUtils = n, Ct;
}
var Rt = {},
  Mt = {},
  sn;
function Nn() {
  if (sn) return Mt;
  sn = 1, Object.defineProperty(Mt, "__esModule", {
    value: !0
  }), Mt.AutoScroll = void 0;
  var n = /*#__PURE__*/function () {
    function n() {
      _classCallCheck(this, n);
    }
    return _createClass(n, null, [{
      key: "changeStateIfNeeded",
      value: function changeStateIfNeeded(t, i) {
        i && !t.isCursorAtEnd && (t.endPadding = "", t.scrollingSpan.innerHTML = "&nbsp;");
      }
    }, {
      key: "scrollGeneric",
      value: function scrollGeneric(t, i) {
        t.isCursorAtEnd ? i.scrollTop = i.scrollHeight : t.scrollingSpan.scrollIntoView({
          block: "nearest"
        });
      }
      // primitives don't need to be scrolled except in safari
      // they can only safely be scrolled to the end
    }, {
      key: "scrollSafariPrimitiveToEnd",
      value: function scrollSafariPrimitiveToEnd(t) {
        t.scrollLeft = t.scrollWidth, t.scrollTop = t.scrollHeight;
      }
    }, {
      key: "isElementOverflown",
      value: function isElementOverflown(t) {
        return t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth;
      }
    }, {
      key: "isRequired",
      value: function isRequired(t, i) {
        return t && n.isElementOverflown(i);
      }
    }]);
  }();
  return Mt.AutoScroll = n, Mt;
}
var kt = {},
  nn;
function Gi() {
  if (nn) return kt;
  nn = 1, Object.defineProperty(kt, "__esModule", {
    value: !0
  }), kt.Elements = void 0;
  var n = /*#__PURE__*/function () {
    function n() {
      _classCallCheck(this, n);
    }
    return _createClass(n, null, [{
      key: "isPrimitiveElement",
      value: function isPrimitiveElement(t) {
        return t.tagName === "INPUT" || t.tagName === "TEXTAREA";
      }
    }, {
      key: "createInterimSpan",
      value: function createInterimSpan() {
        var t = document.createElement("span");
        return t.style.color = "grey", t.style.pointerEvents = "none", t;
      }
    }, {
      key: "createGenericSpan",
      value: function createGenericSpan() {
        var t = document.createElement("span");
        return t.style.pointerEvents = "none", t;
      }
    }, {
      key: "appendSpans",
      value: function appendSpans(t, i) {
        if (t.spansPopulated = !0, t.insertInCursorLocation && document.activeElement === i) {
          var s = window.getSelection();
          if (s != null && s.focusNode) {
            var r = s.getRangeAt(0);
            r.insertNode(t.scrollingSpan), r.insertNode(t.interimSpan), r.insertNode(t.finalSpan), r.collapse(!1), s.removeAllRanges(), s.addRange(r);
            return;
          }
        }
        i.appendChild(t.finalSpan), i.appendChild(t.interimSpan), i.appendChild(t.scrollingSpan);
      }
    }, {
      key: "applyCustomColors",
      value: function applyCustomColors(t, i) {
        i.interim && (t.interimSpan.style.color = i.interim), i["final"] && (t.finalSpan.style.color = i["final"]);
      }
    }, {
      key: "isInsideShadowDOM",
      value: function isInsideShadowDOM(t) {
        return t.getRootNode() instanceof ShadowRoot;
      }
    }]);
  }();
  return kt.Elements = n, kt;
}
var Lt = {},
  rn;
function Vi() {
  if (rn) return Lt;
  rn = 1, Object.defineProperty(Lt, "__esModule", {
    value: !0
  }), Lt.Cursor = void 0;
  var n = /*#__PURE__*/function () {
    function n() {
      _classCallCheck(this, n);
    }
    return _createClass(n, null, [{
      key: "setOffsetForGeneric",
      value: function setOffsetForGeneric(t, i) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var r = 0;
        for (var o = 0; o < t.childNodes.length; o += 1) {
          var a = t.childNodes[o];
          if (a.childNodes.length > 0) {
            var l = n.setOffsetForGeneric(a, i, s);
            if (l === -1) return -1;
            s += l;
          } else if (a.textContent !== null) {
            if (s + a.textContent.length > i) {
              var _l3 = document.createRange();
              _l3.setStart(a, i - s), _l3.collapse(!0);
              var c = window.getSelection();
              return c == null || c.removeAllRanges(), c == null || c.addRange(_l3), t.focus(), -1;
            }
            s += a.textContent.length, r += a.textContent.length;
          }
        }
        return r;
      }
    }, {
      key: "focusEndOfGeneric",
      value: function focusEndOfGeneric(t) {
        var i = document.createRange();
        i.selectNodeContents(t), i.collapse(!1);
        var s = window.getSelection();
        s && (s.removeAllRanges(), s.addRange(i));
      }
    }, {
      key: "setOffsetForSafariGeneric",
      value: function setOffsetForSafariGeneric(t, i) {
        var s = window.getSelection();
        if (s) {
          var r = n.getGenericElementCursorOffset(t, s, !0);
          n.setOffsetForGeneric(t, r + i);
        }
      }
      // set to automatically scroll to cursor (scroll does not work in Safari)
    }, {
      key: "setOffsetForPrimitive",
      value: function setOffsetForPrimitive(t, i, s) {
        s && t.blur(), t.setSelectionRange(i, i), t.focus();
      }
      // Scroll Input in Safari - does not work for TextArea and uses span which can have a different style
      // private static getCursorOffsetFromLeft(inputElement: HTMLInputElement, position: number) {
      //   // Get the value of the input element up to the cursor position
      //   const valueUpToCursor = inputElement.value.substring(0, position);
      //   // Create a temporary span element to measure the width of the text
      //   const tempSpan = document.createElement('span');
      //   tempSpan.textContent = valueUpToCursor;
      //   tempSpan.style.visibility = 'hidden';
      //   tempSpan.style.position = 'absolute';
      //   document.body.appendChild(tempSpan);
      //   // Measure the width of the text up to the cursor position
      //   const offsetWidth = tempSpan.offsetWidth;
      //   const offsetHeight = tempSpan.offsetHeight;
      //   // Clean up the temporary span element
      //   document.body.removeChild(tempSpan);
      //   return {left: offsetWidth, top: offsetHeight};
      // }
    }, {
      key: "getGenericElementCursorOffset",
      value: function getGenericElementCursorOffset(t, i, s) {
        var r = 0;
        if (i.rangeCount > 0) {
          var o = i.getRangeAt(0),
            a = o.cloneRange();
          a.selectNodeContents(t), s ? a.setEnd(o.startContainer, o.startOffset) : a.setEnd(o.endContainer, o.endOffset), r = a.toString().length;
        }
        return r;
      }
    }]);
  }();
  return Lt.Cursor = n, Lt;
}
var on;
function Dn() {
  if (on) return Rt;
  on = 1, Object.defineProperty(Rt, "__esModule", {
    value: !0
  }), Rt.CommandUtils = void 0;
  var n = Nn(),
    e = Gi(),
    t = Ts(),
    i = Vi(),
    s = zi();
  var r = /*#__PURE__*/function () {
    function r() {
      _classCallCheck(this, r);
    }
    return _createClass(r, null, [{
      key: "processCommand",
      value: function processCommand(a, l) {
        return (!l || !l.caseSensitive) && (a = a.toLowerCase()), (l == null ? void 0 : l.substrings) === !1 ? s.Text.breakupIntoWordsArr(a) : a;
      }
    }, {
      key: "process",
      value: function process(a) {
        var l;
        return ((l = a.settings) === null || l === void 0 ? void 0 : l.caseSensitive) === !0 ? a : Object.keys(a).reduce(function (d, u) {
          var h = a[u];
          return d[u] = typeof h == "string" ? r.processCommand(h, a.settings) : h, d;
        }, {});
      }
    }, {
      key: "toggleCommandModeOn",
      value: function toggleCommandModeOn(a) {
        var l;
        a.isWaitingForCommand = !0, (l = a.onCommandModeTrigger) === null || l === void 0 || l.call(a, !0);
      }
    }, {
      key: "toggleCommandModeOff",
      value: function toggleCommandModeOff(a) {
        var l;
        a.isWaitingForCommand && ((l = a.onCommandModeTrigger) === null || l === void 0 || l.call(a, !1), a.isWaitingForCommand = !1);
      }
    }, {
      key: "setText",
      value: function setText(a, l, c, d) {
        r.toggleCommandModeOff(a), e.Elements.isPrimitiveElement(d) ? (d.value = c, a.isTargetInShadow || i.Cursor.setOffsetForPrimitive(d, c.length, !0), t.Browser.IS_SAFARI() && a.autoScroll && n.AutoScroll.scrollSafariPrimitiveToEnd(d)) : (d.textContent = c, a.isTargetInShadow || i.Cursor.focusEndOfGeneric(d), setTimeout(function () {
          return n.AutoScroll.scrollGeneric(a, d);
        })), a.resetRecording(l);
      }
    }, {
      key: "checkIfMatchesSubstring",
      value: function checkIfMatchesSubstring(a, l) {
        return l.includes(a);
      }
    }, {
      key: "checkIfMatchesWord",
      value: function checkIfMatchesWord(a, l, c) {
        var d = a;
        for (var u = c.length - 1; u >= 0; u -= 1) {
          var h = u,
            f = d.length - 1;
          for (; c[h] === d[f] && f >= 0;) h -= 1, f -= 1;
          if (f < 0) return !0;
        }
        return !1;
      }
      // prettier-ignore
    }, {
      key: "execCommand",
      value: function execCommand(a, l, c, d, u) {
        var h, f, m;
        var p = a.commands;
        if (!p || !d || !c) return;
        var g = ((h = p.settings) === null || h === void 0 ? void 0 : h.caseSensitive) === !0 ? l : l.toLowerCase(),
          b = s.Text.breakupIntoWordsArr(g),
          M = ((f = p.settings) === null || f === void 0 ? void 0 : f.substrings) === !1 ? r.checkIfMatchesWord : r.checkIfMatchesSubstring;
        if (p.commandMode && M(p.commandMode, g, b)) return a.setInterimColorToFinal(), setTimeout(function () {
          return r.toggleCommandModeOn(a);
        }), {
          doNotProcessTranscription: !1
        };
        if (!(p.commandMode && !a.isWaitingForCommand)) {
          if (p.stop && M(p.stop, g, b)) return r.toggleCommandModeOff(a), setTimeout(function () {
            return a.stop();
          }), {
            doNotProcessTranscription: !1
          };
          if (p.pause && M(p.pause, g, b)) return r.toggleCommandModeOff(a), a.setInterimColorToFinal(), setTimeout(function () {
            var Y;
            a.isPaused = !0, (Y = a.onPauseTrigger) === null || Y === void 0 || Y.call(a, !0);
          }), {
            doNotProcessTranscription: !1
          };
          if (p.resume && M(p.resume, g, b)) return a.isPaused = !1, (m = a.onPauseTrigger) === null || m === void 0 || m.call(a, !1), r.toggleCommandModeOff(a), a.resetRecording(c), {
            doNotProcessTranscription: !0
          };
          if (p.reset && M(p.reset, g, b)) return u !== void 0 && r.setText(a, c, u, d), {
            doNotProcessTranscription: !0
          };
          if (p.removeAllText && M(p.removeAllText, g, b)) return r.setText(a, c, "", d), {
            doNotProcessTranscription: !0
          };
        }
      }
    }]);
  }();
  return Rt.CommandUtils = r, Rt;
}
var It = {},
  an;
function pa() {
  if (an) return It;
  an = 1, Object.defineProperty(It, "__esModule", {
    value: !0
  }), It.Highlight = void 0;
  var n = Gi(),
    e = Vi();
  var t = /*#__PURE__*/function () {
    function t() {
      _classCallCheck(this, t);
    }
    return _createClass(t, null, [{
      key: "setStateForPrimitive",
      value: function setStateForPrimitive(s, r) {
        var o, a;
        r.selectionStart !== null && (o = r.selectionStart), r.selectionEnd !== null && (a = r.selectionEnd), s.isHighlighted = o !== a;
      }
    }, {
      key: "setStateForGeneric",
      value: function setStateForGeneric(s, r) {
        var o = window.getSelection();
        if (o != null && o.focusNode) {
          var a = e.Cursor.getGenericElementCursorOffset(r, o, !0),
            l = e.Cursor.getGenericElementCursorOffset(r, o, !1);
          s.isHighlighted = a !== l;
        }
      }
    }, {
      key: "setState",
      value: function setState(s, r) {
        document.activeElement === r && (n.Elements.isPrimitiveElement(r) ? t.setStateForPrimitive(s, r) : t.setStateForGeneric(s, r));
      }
    }, {
      key: "removeForGeneric",
      value: function removeForGeneric(s, r) {
        var o = window.getSelection();
        if (o) {
          var a = e.Cursor.getGenericElementCursorOffset(r, o, !0);
          o.deleteFromDocument(), e.Cursor.setOffsetForGeneric(r, a), s.isHighlighted = !1;
        }
      }
    }, {
      key: "removeForPrimitive",
      value: function removeForPrimitive(s, r) {
        var o = r.selectionStart,
          a = r.selectionEnd,
          l = r.value;
        if (o && a) {
          var c = l.substring(0, o) + l.substring(a);
          r.value = c, e.Cursor.setOffsetForPrimitive(r, o, s.autoScroll);
        }
        s.isHighlighted = !1;
      }
    }]);
  }();
  return It.Highlight = t, It;
}
var Ot = {},
  ln;
function ma() {
  if (ln) return Ot;
  ln = 1, Object.defineProperty(Ot, "__esModule", {
    value: !0
  }), Ot.Padding = void 0;
  var n = Gi(),
    e = Vi(),
    t = zi();
  var i = /*#__PURE__*/function () {
    function i() {
      _classCallCheck(this, i);
    }
    return _createClass(i, null, [{
      key: "setStateForPrimitiveElement",
      value: function setStateForPrimitiveElement(r, o) {
        if (document.activeElement === o && o.selectionStart !== null) {
          var l = o.selectionStart,
            c = o.value[l - 1],
            d = o.selectionEnd === null ? l : o.selectionEnd,
            u = o.value[d];
          t.Text.isCharDefined(c) && (r.startPadding = " ", r.numberOfSpacesBeforeNewText = 1), t.Text.isCharDefined(u) && (r.endPadding = " ", r.numberOfSpacesAfterNewText = 1), r.isCursorAtEnd = o.value.length === d;
          return;
        }
        var a = o.value[o.value.length - 1];
        t.Text.isCharDefined(a) && (r.startPadding = " ", r.numberOfSpacesBeforeNewText = 1), r.isCursorAtEnd = !0;
      }
    }, {
      key: "setStateForGenericElement",
      value: function setStateForGenericElement(r, o) {
        var a, l, c;
        if (document.activeElement === o) {
          var u = window.getSelection();
          if (u != null && u.focusNode) {
            var h = e.Cursor.getGenericElementCursorOffset(o, u, !0),
              f = (a = o.textContent) === null || a === void 0 ? void 0 : a[h - 1],
              m = e.Cursor.getGenericElementCursorOffset(o, u, !1),
              p = (l = o.textContent) === null || l === void 0 ? void 0 : l[m];
            t.Text.isCharDefined(f) && (r.startPadding = " "), t.Text.isCharDefined(p) && (r.endPadding = " "), r.isCursorAtEnd = ((c = o.textContent) === null || c === void 0 ? void 0 : c.length) === m;
            return;
          }
        }
        var d = o.innerText.charAt(o.innerText.length - 1);
        t.Text.isCharDefined(d) && (r.startPadding = " "), r.isCursorAtEnd = !0;
      }
    }, {
      key: "setState",
      value: function setState(r, o) {
        n.Elements.isPrimitiveElement(o) ? i.setStateForPrimitiveElement(r, o) : i.setStateForGenericElement(r, o);
      }
    }, {
      key: "adjustStateAfterRecodingPrimitiveElement",
      value: function adjustStateAfterRecodingPrimitiveElement(r, o) {
        if (r.primitiveTextRecorded = !0, r.insertInCursorLocation && document.activeElement === o && (o.selectionEnd !== null && (r.endPadding = r.endPadding + o.value.slice(o.selectionEnd)), o.selectionStart !== null)) {
          r.startPadding = o.value.slice(0, o.selectionStart) + r.startPadding;
          return;
        }
        r.startPadding = o.value + r.startPadding;
      }
    }, {
      key: "adjustSateForNoTextPrimitiveElement",
      value: function adjustSateForNoTextPrimitiveElement(r) {
        r.numberOfSpacesBeforeNewText === 1 && (r.startPadding = r.startPadding.substring(0, r.startPadding.length - 1), r.numberOfSpacesBeforeNewText = 0), r.numberOfSpacesAfterNewText === 1 && (r.endPadding = r.endPadding.substring(1), r.numberOfSpacesAfterNewText = 0);
      }
    }]);
  }();
  return Ot.Padding = i, Ot;
}
var cn;
function Bn() {
  if (cn) return At;
  cn = 1, Object.defineProperty(At, "__esModule", {
    value: !0
  }), At.Speech = void 0;
  var n = ua(),
    e = fa(),
    t = Dn(),
    i = Nn(),
    s = pa(),
    r = Gi(),
    o = ma(),
    a = Ts(),
    l = Vi(),
    c = zi();
  var d = /*#__PURE__*/function () {
    function d() {
      _classCallCheck(this, d);
      this.finalTranscript = "", this.interimSpan = r.Elements.createInterimSpan(), this.finalSpan = r.Elements.createGenericSpan(), this.scrollingSpan = r.Elements.createGenericSpan(), this.isCursorAtEnd = !1, this.spansPopulated = !1, this.startPadding = "", this.endPadding = "", this.numberOfSpacesBeforeNewText = 0, this.numberOfSpacesAfterNewText = 0, this.isHighlighted = !1, this.primitiveTextRecorded = !1, this.recognizing = !1, this._displayInterimResults = !0, this.insertInCursorLocation = !0, this.autoScroll = !0, this.isRestarting = !1, this.isPaused = !1, this.isWaitingForCommand = !1, this.isTargetInShadow = !1, this.cannotBeStopped = !1, this.resetState();
    }
    return _createClass(d, [{
      key: "prepareBeforeStart",
      value: function prepareBeforeStart(h) {
        var f, m;
        if (h != null && h.element) if (n.EventListeners.add(this, h), Array.isArray(h.element)) {
          var g = h.element.find(function (b) {
            return b === document.activeElement;
          }) || h.element[0];
          if (!g) return;
          this.prepare(g);
        } else this.prepare(h.element);
        (h == null ? void 0 : h.displayInterimResults) !== void 0 && (this._displayInterimResults = h.displayInterimResults), h != null && h.textColor && (this._finalTextColor = (f = h == null ? void 0 : h.textColor) === null || f === void 0 ? void 0 : f["final"], r.Elements.applyCustomColors(this, h.textColor)), (h == null ? void 0 : h.insertInCursorLocation) !== void 0 && (this.insertInCursorLocation = h.insertInCursorLocation), (h == null ? void 0 : h.autoScroll) !== void 0 && (this.autoScroll = h.autoScroll), this._onResult = h == null ? void 0 : h.onResult, this._onPreResult = h == null ? void 0 : h.onPreResult, this._onStart = h == null ? void 0 : h.onStart, this._onStop = h == null ? void 0 : h.onStop, this._onError = h == null ? void 0 : h.onError, this.onCommandModeTrigger = h == null ? void 0 : h.onCommandModeTrigger, this.onPauseTrigger = h == null ? void 0 : h.onPauseTrigger, this._options = h, !((m = this._options) === null || m === void 0) && m.commands && (this.commands = t.CommandUtils.process(this._options.commands));
      }
    }, {
      key: "prepare",
      value: function prepare(h) {
        o.Padding.setState(this, h), s.Highlight.setState(this, h), this.isTargetInShadow = r.Elements.isInsideShadowDOM(h), r.Elements.isPrimitiveElement(h) ? (this._primitiveElement = h, this._originalText = this._primitiveElement.value) : (this._genericElement = h, this._originalText = this._genericElement.textContent);
      }
      // there was an attempt to optimize this by not having to restart the service and just reset state:
      // unfortunately it did not work because the service would still continue firing the intermediate and final results
      // into the new position
    }, {
      key: "resetRecording",
      value: function resetRecording(h) {
        this.isRestarting = !0, this.stop(!0), this.resetState(!0), this.start(h, !0);
      }
      // prettier-ignore
    }, {
      key: "updateElements",
      value: function updateElements(h, f, m) {
        var p;
        var g = c.Text.capitalize(f);
        if (this.finalTranscript === g && h === "") return;
        e.PreResultUtils.process(this, m, h === "", this._onPreResult, this._options) && (h = "", m = "");
        var b = this.commands && t.CommandUtils.execCommand(this, m, this._options, this._primitiveElement || this._genericElement, this._originalText);
        if (b) {
          if (b.doNotProcessTranscription) return;
          h = "", m = "";
        }
        if (this.isPaused || this.isWaitingForCommand) return;
        (p = this._onResult) === null || p === void 0 || p.call(this, m, h === ""), this.finalTranscript = g, this._displayInterimResults || (h = "");
        var M = this.finalTranscript === "" && h === "";
        this._primitiveElement ? this.updatePrimitiveElement(this._primitiveElement, h, M) : this._genericElement && this.updateGenericElement(this._genericElement, h, M);
      }
      // prettier-ignore
      // remember that padding values here contain actual text left and right
    }, {
      key: "updatePrimitiveElement",
      value: function updatePrimitiveElement(h, f, m) {
        this.isHighlighted && s.Highlight.removeForPrimitive(this, h), this.primitiveTextRecorded || o.Padding.adjustStateAfterRecodingPrimitiveElement(this, h), m && o.Padding.adjustSateForNoTextPrimitiveElement(this);
        var p = this.startPadding + this.finalTranscript + f;
        if (h.value = p + this.endPadding, !this.isTargetInShadow) {
          var g = p.length + this.numberOfSpacesAfterNewText;
          l.Cursor.setOffsetForPrimitive(h, g, this.autoScroll);
        }
        this.autoScroll && a.Browser.IS_SAFARI() && this.isCursorAtEnd && i.AutoScroll.scrollSafariPrimitiveToEnd(h);
      }
    }, {
      key: "updateGenericElement",
      value: function updateGenericElement(h, f, m) {
        this.isHighlighted && s.Highlight.removeForGeneric(this, h), this.spansPopulated || r.Elements.appendSpans(this, h);
        var p = (m ? "" : this.startPadding) + c.Text.lineBreak(this.finalTranscript);
        this.finalSpan.innerHTML = p;
        var g = i.AutoScroll.isRequired(this.autoScroll, h);
        i.AutoScroll.changeStateIfNeeded(this, g);
        var b = c.Text.lineBreak(f) + (m ? "" : this.endPadding);
        this.interimSpan.innerHTML = b, a.Browser.IS_SAFARI() && this.insertInCursorLocation && l.Cursor.setOffsetForSafariGeneric(h, p.length + b.length), g && i.AutoScroll.scrollGeneric(this, h), m && (this.scrollingSpan.innerHTML = "");
      }
    }, {
      key: "finalise",
      value: function finalise(h) {
        this._genericElement && (h ? (this.finalSpan = r.Elements.createGenericSpan(), this.setInterimColorToFinal(), this.interimSpan = r.Elements.createInterimSpan(), this.scrollingSpan = r.Elements.createGenericSpan()) : this._genericElement.textContent = this._genericElement.textContent, this.spansPopulated = !1), n.EventListeners.remove(this);
      }
    }, {
      key: "setInterimColorToFinal",
      value: function setInterimColorToFinal() {
        this.interimSpan.style.color = this._finalTextColor || "black";
      }
    }, {
      key: "resetState",
      value: function resetState(h) {
        this._primitiveElement = void 0, this._genericElement = void 0, this.finalTranscript = "", this.finalSpan.innerHTML = "", this.interimSpan.innerHTML = "", this.scrollingSpan.innerHTML = "", this.startPadding = "", this.endPadding = "", this.isHighlighted = !1, this.primitiveTextRecorded = !1, this.numberOfSpacesBeforeNewText = 0, this.numberOfSpacesAfterNewText = 0, h || (this.stopTimeout = void 0);
      }
    }, {
      key: "setStateOnStart",
      value: function setStateOnStart() {
        var h;
        this.recognizing = !0, this.isRestarting ? this.isRestarting = !1 : (h = this._onStart) === null || h === void 0 || h.call(this);
      }
    }, {
      key: "setStateOnStop",
      value: function setStateOnStop() {
        var h;
        this.recognizing = !1, this.isRestarting || (h = this._onStop) === null || h === void 0 || h.call(this);
      }
    }, {
      key: "setStateOnError",
      value: function setStateOnError(h) {
        var f;
        (f = this._onError) === null || f === void 0 || f.call(this, h), this.recognizing = !1;
      }
    }]);
  }();
  return At.Speech = d, At;
}
var dn;
function ga() {
  if (dn) return Et;
  dn = 1, Object.defineProperty(Et, "__esModule", {
    value: !0
  }), Et.WebSpeech = void 0;
  var n = ha(),
    e = Ts(),
    t = Bn();
  var i = /*#__PURE__*/function (_t$Speech) {
    function i() {
      _classCallCheck(this, i);
      return _callSuper(this, i);
    }
    _inherits(i, _t$Speech);
    return _createClass(i, [{
      key: "start",
      value: function start(r) {
        var o;
        this._extractText === void 0 && (this._extractText = e.Browser.IS_SAFARI() ? n.WebSpeechTranscript.extractSafari : n.WebSpeechTranscript.extract), this.validate() && (this.prepareBeforeStart(r), this.instantiateService(r), (o = this._service) === null || o === void 0 || o.start(), this._translations = r == null ? void 0 : r.translations);
      }
    }, {
      key: "validate",
      value: function validate() {
        return i.getAPI() ? !0 : (this.error("Speech Recognition is unsupported"), !1);
      }
    }, {
      key: "instantiateService",
      value: function instantiateService(r) {
        var o, a;
        var l = i.getAPI();
        this._service = new l(), this._service.continuous = !0, this._service.interimResults = (o = r == null ? void 0 : r.displayInterimResults) !== null && o !== void 0 ? o : !0, this._service.lang = ((a = r == null ? void 0 : r.language) === null || a === void 0 ? void 0 : a.trim()) || "en-US", this.setEvents();
      }
    }, {
      key: "setEvents",
      value: function setEvents() {
        var _this71 = this;
        this._service && (this._service.onstart = function () {
          _this71.setStateOnStart();
        }, this._service.onerror = function (r) {
          e.Browser.IS_SAFARI() && r.message === "Another request is started" || r.error === "aborted" && _this71.isRestarting || r.error !== "no-speech" && _this71.error(r.message || r.error);
        }, this._service.onaudioend = function () {
          _this71.setStateOnStop();
        }, this._service.onend = function () {
          _this71._stopping = !1;
        }, this._service.onresult = function (r) {
          if (_typeof(r.results) > "u" && _this71._service) _this71._service.onend = null, _this71._service.stop();else if (_this71._extractText && !_this71._stopping) {
            var _this71$_extractText = _this71._extractText(r, _this71.finalTranscript, _this71._translations),
              o = _this71$_extractText.interimTranscript,
              a = _this71$_extractText.finalTranscript,
              l = _this71$_extractText.newText;
            _this71.updateElements(o, a, l);
          }
        });
      }
    }, {
      key: "stop",
      value: function stop(r) {
        var o;
        this._stopping = !0, (o = this._service) === null || o === void 0 || o.stop(), this.finalise(r);
      }
    }, {
      key: "error",
      value: function error(r) {
        console.error(r), this.setStateOnError(r), this.stop();
      }
    }], [{
      key: "getAPI",
      value: function getAPI() {
        return window.webkitSpeechRecognition || window.SpeechRecognition;
      }
    }]);
  }(t.Speech);
  return Et.WebSpeech = i, Et;
}
var Pt = {},
  hn;
function ba() {
  if (hn) return Pt;
  hn = 1, Object.defineProperty(Pt, "__esModule", {
    value: !0
  }), Pt.GlobalState = void 0;
  var n = /*#__PURE__*/function () {
    function n() {
      _classCallCheck(this, n);
    }
    return _createClass(n, null, [{
      key: "doubleClickDetector",
      value: function doubleClickDetector() {
        return n.doubleClickPending ? !0 : (n.doubleClickPending = !0, setTimeout(function () {
          n.doubleClickPending = !1;
        }, 300), !1);
      }
    }]);
  }();
  return Pt.GlobalState = n, n.doubleClickPending = !1, Pt;
}
var Nt = {},
  Dt = {},
  un;
function va() {
  if (un) return Dt;
  un = 1, Object.defineProperty(Dt, "__esModule", {
    value: !0
  }), Dt.PreventConnectionStop = void 0;
  var n = /*#__PURE__*/function () {
    function n() {
      _classCallCheck(this, n);
    }
    return _createClass(n, null, [{
      key: "applyPrevention",
      value: function applyPrevention(t) {
        clearTimeout(t._manualConnectionStopPrevention), t.cannotBeStopped = !0, t._manualConnectionStopPrevention = setTimeout(function () {
          t.cannotBeStopped = !1;
        }, 800);
      }
    }, {
      key: "clearPrevention",
      value: function clearPrevention(t) {
        clearTimeout(t._manualConnectionStopPrevention), t.cannotBeStopped = !1;
      }
    }]);
  }();
  return Dt.PreventConnectionStop = n, Dt;
}
var Bt = {},
  Ft = {},
  fn;
function ya() {
  return fn || (fn = 1, Object.defineProperty(Ft, "__esModule", {
    value: !0
  }), Ft.README_URL = void 0, Ft.README_URL = "https://github.com/OvidijusParsiunas/speech-to-element"), Ft;
}
var pn;
function Ea() {
  if (pn) return Bt;
  pn = 1, Object.defineProperty(Bt, "__esModule", {
    value: !0
  }), Bt.AzureSpeechConfig = void 0;
  var n = ya();
  var e = /*#__PURE__*/function () {
    function e() {
      _classCallCheck(this, e);
    }
    return _createClass(e, null, [{
      key: "validateOptions",
      value: function validateOptions(i, s) {
        return s ? !s.subscriptionKey && !s.token && !s.retrieveToken ? (i("Please define a 'subscriptionKey', 'token' or 'retrieveToken' property - more info: ".concat(n.README_URL)), !1) : s.region ? !0 : (i("Please define a 'region' property - more info: ".concat(n.README_URL)), !1) : (i("Please provide subscription details - more info: ".concat(n.README_URL)), !1);
      }
    }, {
      key: "getNewSpeechConfig",
      value: function () {
        var _getNewSpeechConfig = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee125(i, s) {
          return _regeneratorRuntime().wrap(function _callee125$(_context125) {
            while (1) switch (_context125.prev = _context125.next) {
              case 0:
                if (!s.region) {
                  _context125.next = 2;
                  break;
                }
                return _context125.abrupt("return", s.subscriptionKey ? i.fromSubscription(s.subscriptionKey.trim(), s.region.trim()) : s.token ? i.fromAuthorizationToken(s.token.trim(), s.region.trim()) : s.retrieveToken ? s.retrieveToken().then(function (r) {
                  return s.region ? i.fromAuthorizationToken((r == null ? void 0 : r.trim()) || "", s.region.trim()) : null;
                })["catch"](function (r) {
                  return console.error(r), null;
                }) : null);
              case 2:
              case "end":
                return _context125.stop();
            }
          }, _callee125);
        }));
        function getNewSpeechConfig(_x228, _x229) {
          return _getNewSpeechConfig.apply(this, arguments);
        }
        return getNewSpeechConfig;
      }()
    }, {
      key: "process",
      value: function process(i, s) {
        s.endpointId && (i.endpointId = s.endpointId.trim()), s.language && (i.speechRecognitionLanguage = s.language.trim());
      }
    }, {
      key: "get",
      value: function () {
        var _get = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee126(i, s) {
          var r;
          return _regeneratorRuntime().wrap(function _callee126$(_context126) {
            while (1) switch (_context126.prev = _context126.next) {
              case 0:
                _context126.next = 2;
                return e.getNewSpeechConfig(i, s);
              case 2:
                r = _context126.sent;
                return _context126.abrupt("return", (r && e.process(r, s), r));
              case 4:
              case "end":
                return _context126.stop();
            }
          }, _callee126);
        }));
        function get(_x230, _x231) {
          return _get.apply(this, arguments);
        }
        return get;
      }()
    }]);
  }();
  return Bt.AzureSpeechConfig = e, Bt;
}
var Ut = {},
  mn;
function Sa() {
  if (mn) return Ut;
  mn = 1, Object.defineProperty(Ut, "__esModule", {
    value: !0
  }), Ut.StopTimeout = void 0;
  var n = /*#__PURE__*/function () {
    function n() {
      _classCallCheck(this, n);
    }
    return _createClass(n, null, [{
      key: "set",
      value: function set(t) {
        t.stopTimeout = setTimeout(function () {
          return t.stop();
        }, t.stopTimeoutMS);
      }
    }, {
      key: "reset",
      value: function reset(t, i) {
        t.stopTimeoutMS = i || n.DEFAULT_MS, n.stop(t), n.set(t);
      }
    }, {
      key: "stop",
      value: function stop(t) {
        t.stopTimeout && clearTimeout(t.stopTimeout);
      }
    }]);
  }();
  return Ut.StopTimeout = n, n.DEFAULT_MS = 2e4, Ut;
}
var jt = {},
  gn;
function _a() {
  if (gn) return jt;
  gn = 1, Object.defineProperty(jt, "__esModule", {
    value: !0
  }), jt.AzureAudioConfig = void 0;
  var n = /*#__PURE__*/function () {
    function n() {
      _classCallCheck(this, n);
    }
    return _createClass(n, null, [{
      key: "get",
      value: function get(t, i) {
        return i ? t.fromMicrophoneInput(i) : t.fromDefaultMicrophoneInput();
      }
    }]);
  }();
  return jt.AzureAudioConfig = n, jt;
}
var qt = {},
  bn;
function xa() {
  if (bn) return qt;
  bn = 1, Object.defineProperty(qt, "__esModule", {
    value: !0
  }), qt.AzureTranscript = void 0;
  var n = Pn();
  var e = /*#__PURE__*/function () {
    function e() {
      _classCallCheck(this, e);
    }
    return _createClass(e, null, [{
      key: "extract",
      value:
      // newText is used to only send new text in onResult as finalTranscript is continuously accumulated
      function extract(i, s, r, o) {
        return o && (i = n.Translate.translate(i, o)), r ? {
          interimTranscript: "",
          finalTranscript: s + i,
          newText: i
        } : {
          interimTranscript: i,
          finalTranscript: s,
          newText: i
        };
      }
    }]);
  }();
  return qt.AzureTranscript = e, qt;
}
var vn;
function wa() {
  if (vn) return Nt;
  vn = 1, Object.defineProperty(Nt, "__esModule", {
    value: !0
  }), Nt.Azure = void 0;
  var n = va(),
    e = Ea(),
    t = Sa(),
    i = _a(),
    s = xa(),
    r = Bn();
  var o = /*#__PURE__*/function (_r$Speech) {
    function o() {
      var _this72;
      _classCallCheck(this, o);
      _this72 = _callSuper(this, o, arguments), _this72._newTextPadding = "";
      return _this72;
    }
    _inherits(o, _r$Speech);
    return _createClass(o, [{
      key: "start",
      value: function start(l, c) {
        this._newTextPadding = "", this.stopTimeout === void 0 && t.StopTimeout.reset(this, l == null ? void 0 : l.stopAfterSilenceMs), this.prepareBeforeStart(l), this.startAsync(l), c || n.PreventConnectionStop.applyPrevention(this);
      }
    }, {
      key: "startAsync",
      value: function () {
        var _startAsync = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee127(l) {
          var c;
          return _regeneratorRuntime().wrap(function _callee127$(_context127) {
            while (1) switch (_context127.prev = _context127.next) {
              case 0:
                _context127.t0 = this.validate(l);
                if (!_context127.t0) {
                  _context127.next = 6;
                  break;
                }
                _context127.next = 4;
                return this.instantiateService(l);
              case 4:
                this._translations = l == null ? void 0 : l.translations;
                (c = this._service) === null || c === void 0 || c.startContinuousRecognitionAsync(function () {}, this.error);
              case 6:
              case "end":
                return _context127.stop();
            }
          }, _callee127, this);
        }));
        function startAsync(_x232) {
          return _startAsync.apply(this, arguments);
        }
        return startAsync;
      }()
    }, {
      key: "validate",
      value: function validate(l) {
        return o.getAPI() ? e.AzureSpeechConfig.validateOptions(this.error.bind(this), l) : (this.moduleNotFound(), !1);
      }
    }, {
      key: "instantiateService",
      value: function () {
        var _instantiateService = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee128(l) {
          var c, d, u, h, _l$autoLanguage, f, m, p, g;
          return _regeneratorRuntime().wrap(function _callee128$(_context128) {
            while (1) switch (_context128.prev = _context128.next) {
              case 0:
                c = o.getAPI();
                d = i.AzureAudioConfig.get(c.AudioConfig, l.deviceId);
                _context128.next = 4;
                return e.AzureSpeechConfig.get(c.SpeechConfig, l);
              case 4:
                u = _context128.sent;
                if (u) {
                  if (l.autoLanguage && l.autoLanguage.languages.length > 0) {
                    _l$autoLanguage = l.autoLanguage, f = _l$autoLanguage.type, m = _l$autoLanguage.languages, p = m.slice(0, f === "Continuous" ? 10 : 4), g = c.AutoDetectSourceLanguageConfig.fromLanguages(p);
                    f === "Continuous" && (g.mode = 1), h = c.SpeechRecognizer.FromConfig(u, g, d);
                  } else h = new c.SpeechRecognizer(u, d);
                  this.setEvents(h), this._service = h, l.retrieveToken && this.retrieveTokenInterval(l.retrieveToken);
                } else this.error("Unable to contact Azure server");
              case 6:
              case "end":
                return _context128.stop();
            }
          }, _callee128, this);
        }));
        function instantiateService(_x233) {
          return _instantiateService.apply(this, arguments);
        }
        return instantiateService;
      }()
    }, {
      key: "setEvents",
      value: function setEvents(l) {
        l.recognizing = this.onRecognizing.bind(this), l.recognized = this.onRecognized.bind(this), l.sessionStarted = this.onSessionStarted.bind(this), l.canceled = this.onCanceled.bind(this), l.sessionStopped = this.onSessionStopped.bind(this);
      }
      // prettier-ignore
    }, {
      key: "onRecognizing",
      value: function onRecognizing(l, c) {
        if (this._stopping) return;
        var _s$AzureTranscript$ex = s.AzureTranscript.extract(this._newTextPadding + c.result.text, this.finalTranscript, !1, this._translations),
          d = _s$AzureTranscript$ex.interimTranscript,
          u = _s$AzureTranscript$ex.finalTranscript,
          h = _s$AzureTranscript$ex.newText;
        t.StopTimeout.reset(this, this.stopTimeoutMS), this.updateElements(d, u, h);
      }
      // prettier-ignore
    }, {
      key: "onRecognized",
      value: function onRecognized(l, c) {
        var d = c.result;
        switch (d.reason) {
          case window.SpeechSDK.ResultReason.Canceled:
            break;
          case window.SpeechSDK.ResultReason.RecognizedSpeech:
            if (d.text && !this._stopping) {
              var _s$AzureTranscript$ex2 = s.AzureTranscript.extract(this._newTextPadding + d.text, this.finalTranscript, !0, this._translations),
                u = _s$AzureTranscript$ex2.interimTranscript,
                h = _s$AzureTranscript$ex2.finalTranscript,
                f = _s$AzureTranscript$ex2.newText;
              t.StopTimeout.reset(this, this.stopTimeoutMS), this.updateElements(u, h, f), h !== "" && (this._newTextPadding = " ");
            }
            break;
        }
      }
    }, {
      key: "onCanceled",
      value: function onCanceled(l, c) {
        c.reason === window.SpeechSDK.CancellationReason.Error && this.error(c.errorDetails);
      }
    }, {
      key: "onSessionStarted",
      value: function onSessionStarted() {
        n.PreventConnectionStop.clearPrevention(this), this.setStateOnStart();
      }
    }, {
      key: "onSessionStopped",
      value: function onSessionStopped() {
        this._retrieveTokenInterval || clearInterval(this._retrieveTokenInterval), this._stopping = !1, this.setStateOnStop();
      }
    }, {
      key: "retrieveTokenInterval",
      value: function retrieveTokenInterval(l) {
        var _this73 = this;
        this._retrieveTokenInterval = setInterval(function () {
          l == null || l().then(function (c) {
            _this73._service && (_this73._service.authorizationToken = (c == null ? void 0 : c.trim()) || "");
          })["catch"](function (c) {
            _this73.error(c);
          });
        }, 1e4);
      }
    }, {
      key: "stop",
      value: function stop(l) {
        var c;
        !l && this._retrieveTokenInterval && clearInterval(this._retrieveTokenInterval), this._stopping = !0, (c = this._service) === null || c === void 0 || c.stopContinuousRecognitionAsync(), t.StopTimeout.stop(this), this.finalise(l);
      }
    }, {
      key: "moduleNotFound",
      value: function moduleNotFound() {
        console.error("speech recognition module not found:"), console.error("please install the 'microsoft-cognitiveservices-speech-sdk' npm package or add a script tag: <script src=\"https://aka.ms/csspeech/jsbrowserpackageraw\"></script>"), this.setStateOnError("speech recognition module not found");
      }
    }, {
      key: "error",
      value: function error(l) {
        this._retrieveTokenInterval && clearInterval(this._retrieveTokenInterval), console.error(l), this.setStateOnError(l), this.stop();
      }
    }], [{
      key: "getAPI",
      value: function getAPI() {
        return window.SpeechSDK;
      }
    }]);
  }(r.Speech);
  return Nt.Azure = o, Nt;
}
var yn;
function Aa() {
  if (yn) return pi;
  yn = 1, Object.defineProperty(pi, "__esModule", {
    value: !0
  });
  var n = ga(),
    e = Dn(),
    t = ba(),
    i = wa();
  var s = /*#__PURE__*/function () {
    function s() {
      _classCallCheck(this, s);
    }
    return _createClass(s, null, [{
      key: "toggle",
      value: function toggle(o, a) {
        var l, c;
        var d = o.toLocaleLowerCase().trim();
        !((l = t.GlobalState.service) === null || l === void 0) && l.recognizing ? this.stop() : d === "webspeech" ? s.startWebSpeech(a) : d === "azure" ? s.startAzure(a) : (console.error("service not found - must be either 'webspeech' or 'azure'"), (c = a == null ? void 0 : a.onError) === null || c === void 0 || c.call(a, "service not found - must be either 'webspeech' or 'azure'"));
      }
    }, {
      key: "startWebSpeech",
      value: function startWebSpeech(o) {
        s.stop() || (t.GlobalState.service = new n.WebSpeech(), t.GlobalState.service.start(o));
      }
    }, {
      key: "isWebSpeechSupported",
      value: function isWebSpeechSupported() {
        return !!n.WebSpeech.getAPI();
      }
    }, {
      key: "startAzure",
      value: function startAzure(o) {
        var a;
        s.stop() || !((a = t.GlobalState.service) === null || a === void 0) && a.cannotBeStopped || (t.GlobalState.service = new i.Azure(), t.GlobalState.service.start(o));
      }
    }, {
      key: "stop",
      value: function stop() {
        var o;
        return t.GlobalState.doubleClickDetector() ? !0 : (!((o = t.GlobalState.service) === null || o === void 0) && o.recognizing && t.GlobalState.service.stop(), !1);
      }
    }, {
      key: "endCommandMode",
      value: function endCommandMode() {
        t.GlobalState.service && e.CommandUtils.toggleCommandModeOff(t.GlobalState.service);
      }
    }]);
  }();
  return pi["default"] = s, pi;
}
var Ta = Aa();
var mi = /* @__PURE__ */da(Ta);
var Ca = /*#__PURE__*/function () {
  function Ca(e, t) {
    _classCallCheck(this, Ca);
    this.silenceMS = 2e3, this.stop = !0, typeof t == "boolean" && t === !1 && (this.stop = !1), typeof e == "number" && (this.silenceMS = e);
  }
  return _createClass(Ca, [{
    key: "setSilenceTimeout",
    value: function setSilenceTimeout(e, t) {
      var _this74 = this;
      this._silenceTimeout = setTimeout(function () {
        var i;
        (i = e.submit) == null || i.call(e), mi.stop(), _this74.stop || setTimeout(t, ri.MICROPHONE_RESET_TIMEOUT_MS);
      }, this.silenceMS);
    }
  }, {
    key: "clearSilenceTimeout",
    value: function clearSilenceTimeout() {
      this._silenceTimeout && clearTimeout(this._silenceTimeout);
    }
  }, {
    key: "resetSilenceTimeout",
    value: function resetSilenceTimeout(e, t) {
      this.clearSilenceTimeout(), this.setSilenceTimeout(e, t);
    }
  }, {
    key: "onPause",
    value: function onPause(e, t, i) {
      e ? this.resetSilenceTimeout(t, i) : this.clearSilenceTimeout();
    }
  }]);
}();
var Zt = /*#__PURE__*/function (_Hi) {
  function Zt(e, t, i) {
    var _this75;
    _classCallCheck(this, Zt);
    var s = _typeof(e.speechToText) == "object" ? e.speechToText : {};
    _this75 = _callSuper(this, Zt, [s == null ? void 0 : s.button]);
    var _this75$processConfig = _this75.processConfiguration(t, e.speechToText),
      r = _this75$processConfig.serviceName,
      o = _this75$processConfig.processedConfig;
    if (_this75._addErrorMessage = i, r === "webspeech" && !mi.isWebSpeechSupported()) _this75.changeToUnsupported();else {
      var a = !e.textInput || !e.textInput.disabled;
      _this75.elementRef.onclick = _this75.buttonClick.bind(_this75, t, a, r, o);
    }
    setTimeout(function () {
      _this75._validationHandler = e._validationHandler;
    });
    return _this75;
  }
  // prettier-ignore
  _inherits(Zt, _Hi);
  return _createClass(Zt, [{
    key: "processConfiguration",
    value: function processConfiguration(e, t) {
      var _i$displayInterimResu, _i$textColor, _i$translations, _i$commands, _i$events;
      var c;
      var i = _typeof(t) == "object" ? t : {},
        s = _typeof(i.webSpeech) == "object" ? i.webSpeech : {},
        r = i.azure || {},
        o = _objectSpread(_objectSpread({
          displayInterimResults: (_i$displayInterimResu = i.displayInterimResults) !== null && _i$displayInterimResu !== void 0 ? _i$displayInterimResu : void 0,
          textColor: (_i$textColor = i.textColor) !== null && _i$textColor !== void 0 ? _i$textColor : void 0,
          translations: (_i$translations = i.translations) !== null && _i$translations !== void 0 ? _i$translations : void 0,
          commands: (_i$commands = i.commands) !== null && _i$commands !== void 0 ? _i$commands : void 0,
          events: (_i$events = i.events) !== null && _i$events !== void 0 ? _i$events : void 0
        }, s), r),
        a = (c = i.commands) == null ? void 0 : c.submit;
      return a && (o.onPreResult = function (d) {
        return d.toLowerCase().includes(a) ? (setTimeout(function () {
          var u;
          return (u = e.submit) == null ? void 0 : u.call(e);
        }), mi.endCommandMode(), {
          restart: !0,
          removeNewText: !0
        }) : null;
      }), i.submitAfterSilence && (this._silenceSubmit = new Ca(i.submitAfterSilence, i.stopAfterSubmit)), {
        serviceName: Zt.getServiceName(i),
        processedConfig: o
      };
    }
  }, {
    key: "buttonClick",
    value: function buttonClick(e, t, i, s) {
      var _this76 = this;
      var r = s == null ? void 0 : s.events;
      e.removePlaceholderStyle(), mi.toggle(i, _objectSpread({
        insertInCursorLocation: !1,
        element: t ? e.inputElementRef : void 0,
        onError: function onError() {
          var o;
          _this76.onError(), (o = _this76._silenceSubmit) == null || o.clearSilenceTimeout();
        },
        onStart: function onStart() {
          var o;
          _this76.changeToActive(), (o = r == null ? void 0 : r.onStart) == null || o.call(r);
        },
        onStop: function onStop() {
          var o, a, l;
          (o = _this76._validationHandler) == null || o.call(_this76), (a = _this76._silenceSubmit) == null || a.clearSilenceTimeout(), _this76.changeToDefault(), (l = r == null ? void 0 : r.onStop) == null || l.call(r);
        },
        onPauseTrigger: function onPauseTrigger(o) {
          var a, l;
          (a = _this76._silenceSubmit) == null || a.onPause(o, e, _this76.elementRef.onclick), (l = r == null ? void 0 : r.onPauseTrigger) == null || l.call(r, o);
        },
        onPreResult: function onPreResult(o, a) {
          var l;
          (l = r == null ? void 0 : r.onPreResult) == null || l.call(r, o, a);
        },
        onResult: function onResult(o, a) {
          var l, c, d;
          a && ((l = _this76._validationHandler) == null || l.call(_this76)), (c = _this76._silenceSubmit) == null || c.resetSilenceTimeout(e, _this76.elementRef.onclick), (d = r == null ? void 0 : r.onResult) == null || d.call(r, o, a);
        },
        onCommandModeTrigger: function onCommandModeTrigger(o) {
          var a;
          _this76.onCommandModeTrigger(o), (a = r == null ? void 0 : r.onCommandModeTrigger) == null || a.call(r, o);
        }
      }, s));
    }
  }, {
    key: "onCommandModeTrigger",
    value: function onCommandModeTrigger(e) {
      e ? this.changeToCommandMode() : this.changeToActive();
    }
  }, {
    key: "onError",
    value: function onError() {
      this._addErrorMessage("speechToText", "speech input error");
    }
  }], [{
    key: "getServiceName",
    value: function getServiceName(e) {
      return e.azure ? "azure" : "webspeech";
    }
  }, {
    key: "toggleSpeechAfterSubmit",
    value: function toggleSpeechAfterSubmit(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      e.click(), t || setTimeout(function () {
        return e.click();
      }, Zt.MICROPHONE_RESET_TIMEOUT_MS);
    }
  }]);
}(Hi);
Zt.MICROPHONE_RESET_TIMEOUT_MS = 300;
var ri = Zt;
var Pe = /*#__PURE__*/function () {
  // prettier-ignore
  function Pe(e, t, i, s) {
    var _this77 = this;
    _classCallCheck(this, Pe);
    this._attachments = [], this._fileCountLimit = 99, this._acceptedFormat = "", t.maxNumberOfFiles && (this._fileCountLimit = t.maxNumberOfFiles), this._toggleContainerDisplay = i, this._fileAttachmentsContainerRef = s, t.acceptedFormats && (this._acceptedFormat = t.acceptedFormats), setTimeout(function () {
      _this77._validationHandler = e._validationHandler;
    });
  }
  return _createClass(Pe, [{
    key: "attemptAddFile",
    value: function attemptAddFile(e, t) {
      return Pe.isFileTypeValid(e, this._acceptedFormat) ? (this.addAttachmentBasedOnType(e, t, !0), !0) : !1;
    }
  }, {
    key: "addAttachmentBasedOnType",
    value: function addAttachmentBasedOnType(e, t, i) {
      var s = Pe.getTypeFromBlob(e);
      if (s === "image") {
        var r = Pe.createImageAttachment(t);
        this.addFileAttachment(e, "image", r, i);
      } else if (s === "audio") {
        var _r2 = oi.createAudioAttachment(t);
        this.addFileAttachment(e, "audio", _r2, i);
      } else {
        var _r3 = Pe.createAnyFileAttachment(e.name);
        this.addFileAttachment(e, "any", _r3, i);
      }
    }
  }, {
    key: "addFileAttachment",
    value: function addFileAttachment(e, t, i, s) {
      var a;
      var r = Pe.createContainer(i);
      if (this._attachments.length >= this._fileCountLimit) {
        var l = this._attachments[this._attachments.length - 1].removeButton;
        l == null || l.click();
        var c = this._fileAttachmentsContainerRef.children;
        this._fileAttachmentsContainerRef.insertBefore(r, c[0]);
      } else this._fileAttachmentsContainerRef.appendChild(r);
      var o = {
        file: e,
        attachmentContainerElement: r,
        fileType: t
      };
      return s && (o.removeButton = this.createRemoveAttachmentButton(o), r.appendChild(o.removeButton)), this._toggleContainerDisplay(!0), this._attachments.push(o), this._fileAttachmentsContainerRef.scrollTop = this._fileAttachmentsContainerRef.scrollHeight, (a = this._validationHandler) == null || a.call(this), o;
    }
  }, {
    key: "createRemoveAttachmentButton",
    value: function createRemoveAttachmentButton(e) {
      var t = document.createElement("div");
      t.classList.add("remove-file-attachment-button"), t.onclick = this.removeAttachment.bind(this, e);
      var i = document.createElement("div");
      return i.classList.add("x-icon"), i.innerText = "×", t.appendChild(i), t;
    }
  }, {
    key: "removeAttachment",
    value: function removeAttachment(e) {
      var s;
      var t = this._attachments.findIndex(function (r) {
          return r === e;
        }),
        i = this._attachments[t].attachmentContainerElement;
      this._attachments.splice(t, 1), oi.stopAttachmentPlayback(i), i.remove(), this._toggleContainerDisplay(!1), (s = this._validationHandler) == null || s.call(this);
    }
  }, {
    key: "getFiles",
    value: function getFiles() {
      return Array.from(this._attachments).map(function (e) {
        return {
          file: e.file,
          type: e.fileType
        };
      });
    }
  }, {
    key: "removeAllAttachments",
    value: function removeAllAttachments() {
      this._attachments.forEach(function (e) {
        setTimeout(function () {
          var t;
          return (t = e.removeButton) == null ? void 0 : t.click();
        });
      });
    }
  }], [{
    key: "isFileTypeValid",
    value: function isFileTypeValid(e, t) {
      if (t === "") return !0;
      var i = t.split(",");
      for (var s = 0; s < i.length; s++) {
        var r = i[s].trim();
        if (e.type === r) return !0;
        if (r.startsWith(".")) {
          var o = r.slice(1);
          if (e.name.endsWith(o)) return !0;
        } else {
          if (e.name.endsWith(r)) return !0;
          if (r.endsWith("/*") && e.type.startsWith(r.slice(0, -2))) return !0;
        }
      }
      return !1;
    }
  }, {
    key: "getTypeFromBlob",
    value: function getTypeFromBlob(e) {
      var t = e.type;
      return t.startsWith("image") ? "image" : t.startsWith("audio") ? "audio" : "any";
    }
  }, {
    key: "createImageAttachment",
    value: function createImageAttachment(e) {
      var t = new Image();
      return t.src = e, t.classList.add("image-attachment"), t;
    }
  }, {
    key: "createAnyFileAttachment",
    value: function createAnyFileAttachment(e) {
      var t = document.createElement("div");
      t.classList.add("border-bound-attachment"), De.IS_SAFARI && t.classList.add("border-bound-attachment-safari");
      var i = document.createElement("div");
      i.classList.add("any-file-attachment-text");
      var s = document.createElement("div");
      return s.classList.add("file-attachment-text-container"), s.appendChild(i), i.textContent = e, t.appendChild(s), t;
    }
  }, {
    key: "createContainer",
    value: function createContainer(e) {
      var t = document.createElement("div");
      return t.classList.add("file-attachment"), t.appendChild(e), t;
    }
  }]);
}();
var Ie = /*#__PURE__*/function (_Pe) {
  // prettier-ignore
  function Ie(e, t, i, s) {
    _classCallCheck(this, Ie);
    return _callSuper(this, Ie, [e, t, i, s]);
  }
  _inherits(Ie, _Pe);
  return _createClass(Ie, [{
    key: "createTimer",
    value: function createTimer(e, t) {
      var _this78 = this;
      var i = 0;
      var s = t !== void 0 && t < Ie.TIMER_LIMIT_S ? t : Ie.TIMER_LIMIT_S;
      return setInterval(function () {
        var a;
        i += 1, i === s && ((a = _this78.stopPlaceholderCallback) == null || a.call(_this78), _this78.clearTimer()), i === 600 && e.classList.add("audio-placeholder-text-4-digits");
        var r = Math.floor(i / 60),
          o = (i % 60).toString().padStart(2, "0");
        e.textContent = "".concat(r, ":").concat(o);
      }, 1e3);
    }
  }, {
    key: "createPlaceholderAudioAttachment",
    value: function createPlaceholderAudioAttachment(e) {
      var t = Ie.createAudioContainer(),
        i = document.createElement("div");
      i.classList.add("audio-placeholder-text-3-digits");
      var s = document.createElement("div");
      s.classList.add("file-attachment-text-container", "audio-placeholder-text-3-digits-container"), s.appendChild(i);
      var r = Fe.createSVGElement(os);
      return r.classList.add("attachment-icon", "stop-icon", "not-removable-attachment-icon"), i.textContent = "0:00", this._activePlaceholderTimer = this.createTimer(i, e), t.appendChild(s), this.addPlaceholderAudioAttachmentEvents(t, r, s), t;
    }
  }, {
    key: "addPlaceholderAudioAttachmentEvents",
    value: function addPlaceholderAudioAttachmentEvents(e, t, i) {
      var _this79 = this;
      var s = function s() {
        return e.replaceChildren(t);
      };
      e.addEventListener("mouseenter", s);
      var r = function r() {
        return e.replaceChildren(i);
      };
      e.addEventListener("mouseleave", r);
      var o = function o() {
        var a;
        return (a = _this79.stopPlaceholderCallback) == null ? void 0 : a.call(_this79);
      };
      e.addEventListener("click", o);
    }
  }, {
    key: "addPlaceholderAttachment",
    value: function addPlaceholderAttachment(e, t) {
      var i = this.createPlaceholderAudioAttachment(t);
      this._activePlaceholderAttachment = this.addFileAttachment(new File([], ""), "audio", i, !1), this.stopPlaceholderCallback = e;
    }
    // prettier-ignore
  }, {
    key: "completePlaceholderAttachment",
    value: function completePlaceholderAttachment(e, t) {
      var i = this._activePlaceholderAttachment;
      i && (i.file = e, Ie.addAudioElements(i.attachmentContainerElement.children[0], t), i.removeButton = this.createRemoveAttachmentButton(i), i.attachmentContainerElement.appendChild(i.removeButton), this._activePlaceholderAttachment = void 0, this.clearTimer());
    }
  }, {
    key: "removePlaceholderAttachment",
    value: function removePlaceholderAttachment() {
      this._activePlaceholderAttachment && (this.removeAttachment(this._activePlaceholderAttachment), this._activePlaceholderAttachment = void 0, this.clearTimer());
    }
  }, {
    key: "clearTimer",
    value: function clearTimer() {
      this._activePlaceholderTimer !== void 0 && (clearInterval(this._activePlaceholderTimer), this._activePlaceholderTimer = void 0, this.stopPlaceholderCallback = void 0);
    }
  }], [{
    key: "createAudioContainer",
    value: function createAudioContainer() {
      var e = document.createElement("div");
      return e.classList.add("border-bound-attachment", "audio-attachment-icon-container"), De.IS_SAFARI && e.classList.add("border-bound-attachment-safari"), e;
    }
  }, {
    key: "addAudioElements",
    value: function addAudioElements(e, t) {
      var i = e.parentElement ? X.cloneElement(e) : e,
        s = document.createElement("audio");
      s.src = t;
      var r = Fe.createSVGElement(In);
      r.classList.add("attachment-icon", "play-icon");
      var o = Fe.createSVGElement(os);
      o.classList.add("attachment-icon", "stop-icon"), i.replaceChildren(r), s.onplay = function () {
        i.replaceChildren(o);
      }, s.onpause = function () {
        i.replaceChildren(r), s.currentTime = 0;
      }, s.onended = function () {
        i.replaceChildren(r);
      }, i.onclick = function () {
        s.paused ? s.play() : s.pause();
      };
    }
  }, {
    key: "createAudioAttachment",
    value: function createAudioAttachment(e) {
      var t = Ie.createAudioContainer();
      return Ie.addAudioElements(t, e), t;
    }
  }, {
    key: "stopAttachmentPlayback",
    value: function stopAttachmentPlayback(e) {
      var t, i, s;
      (s = (i = (t = e.children[0]) == null ? void 0 : t.children) == null ? void 0 : i[0]) != null && s.classList.contains("stop-icon") && e.children[0].click();
    }
  }]);
}(Pe);
Ie.TIMER_LIMIT_S = 5999;
var oi = Ie;
var Ra = /*#__PURE__*/function () {
  function Ra() {
    _classCallCheck(this, Ra);
  }
  return _createClass(Ra, null, [{
    key: "create",
    value:
    // prettier-ignore
    function create(e, t, i, s, r) {
      return r === "audio" ? new oi(e, t, i, s) : new Pe(e, t, i, s);
    }
  }]);
}();
var di = /*#__PURE__*/function () {
  function di(e, t, i) {
    _classCallCheck(this, di);
    this._fileAttachmentsTypes = [], this.elementRef = this.createAttachmentContainer();
    var s = _typeof(i) == "object" && !!i.displayFileAttachmentContainer;
    this.toggleContainerDisplay(s), e.appendChild(this.elementRef), t && Object.assign(this.elementRef.style, t);
  }
  // prettier-ignore
  return _createClass(di, [{
    key: "addType",
    value: function addType(e, t, i) {
      var s = Ra.create(e, t, this.toggleContainerDisplay.bind(this), this.elementRef, i);
      return this._fileAttachmentsTypes.push(s), s;
    }
  }, {
    key: "createAttachmentContainer",
    value: function createAttachmentContainer() {
      var e = document.createElement("div");
      return e.id = "file-attachment-container", e;
    }
  }, {
    key: "toggleContainerDisplay",
    value: function toggleContainerDisplay(e) {
      e ? this.elementRef.style.display = "block" : this.elementRef.children.length === 0 && (this.elementRef.style.display = "none");
    }
  }, {
    key: "getAllFileData",
    value: function getAllFileData() {
      var e = this._fileAttachmentsTypes.map(function (t) {
        return t.getFiles();
      }).flat();
      return e.length > 0 ? e : void 0;
    }
  }, {
    key: "completePlaceholders",
    value: function () {
      var _completePlaceholders = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee130() {
        return _regeneratorRuntime().wrap(function _callee130$(_context130) {
          while (1) switch (_context130.prev = _context130.next) {
            case 0:
              _context130.next = 2;
              return Promise.all(this._fileAttachmentsTypes.map(/*#__PURE__*/function () {
                var _ref39 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee129(e) {
                  var t;
                  return _regeneratorRuntime().wrap(function _callee129$(_context129) {
                    while (1) switch (_context129.prev = _context129.next) {
                      case 0:
                        return _context129.abrupt("return", (t = e.stopPlaceholderCallback) == null ? void 0 : t.call(e));
                      case 1:
                      case "end":
                        return _context129.stop();
                    }
                  }, _callee129);
                }));
                return function (_x234) {
                  return _ref39.apply(this, arguments);
                };
              }()));
            case 2:
            case "end":
              return _context130.stop();
          }
        }, _callee130, this);
      }));
      function completePlaceholders() {
        return _completePlaceholders.apply(this, arguments);
      }
      return completePlaceholders;
    }()
  }, {
    key: "addFilesToAnyType",
    value: function addFilesToAnyType(e) {
      di.addFilesToType(e, this._fileAttachmentsTypes);
    }
  }, {
    key: "removeAllFiles",
    value: function removeAllFiles() {
      this._fileAttachmentsTypes.forEach(function (e) {
        return e.removeAllAttachments();
      }), this.elementRef.replaceChildren(), this.toggleContainerDisplay(!1);
    }
  }, {
    key: "getNumberOfTypes",
    value: function getNumberOfTypes() {
      return this._fileAttachmentsTypes.length;
    }
  }], [{
    key: "addFilesToType",
    value: function addFilesToType(e, t) {
      e.forEach(function (i) {
        var s = new FileReader();
        s.readAsDataURL(i), s.onload = function (r) {
          for (var o = 0; o < t.length && !t[o].attemptAddFile(i, r.target.result); o += 1);
        };
      });
    }
  }]);
}();
var ge = /*#__PURE__*/function () {
  function ge(e, t, i) {
    _classCallCheck(this, ge);
    this._isOpen = !1, this._contentRef = ge.createModalContent(t, i == null ? void 0 : i.backgroundColor), this._buttonPanel = ge.createButtonPanel(i == null ? void 0 : i.backgroundColor), this._elementRef = ge.createContainer(this._contentRef, i), this._elementRef.appendChild(this._buttonPanel), e.appendChild(this._elementRef), this._backgroundPanelRef = ge.createDarkBackgroundPanel(), e.appendChild(this._backgroundPanelRef), this.addWindowEvents(e);
  }
  return _createClass(ge, [{
    key: "isOpen",
    value: function isOpen() {
      return this._isOpen;
    }
  }, {
    key: "addButtons",
    value: function addButtons() {
      var _this80 = this;
      for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        e[_key2] = arguments[_key2];
      }
      e.forEach(function (t) {
        N.addAttributes(t), _this80._buttonPanel.appendChild(t);
      });
    }
  }, {
    key: "close",
    value: function close() {
      var _this81 = this;
      this._elementRef.classList.remove("show-modal"), this._elementRef.classList.add("hide-modal"), this._backgroundPanelRef.classList.remove("show-modal-background"), this._backgroundPanelRef.classList.add("hide-modal-background"), this._isOpen = !1, setTimeout(function () {
        _this81._elementRef.style.display = "none", _this81._backgroundPanelRef.style.display = "none";
      }, ge.MODAL_CLOSE_TIMEOUT_MS);
    }
  }, {
    key: "displayModalElements",
    value: function displayModalElements() {
      this._elementRef.style.display = "flex", this._elementRef.classList.remove("hide-modal"), this._elementRef.classList.add("show-modal"), this._backgroundPanelRef.style.display = "block", this._backgroundPanelRef.classList.remove("hide-modal-background"), this._backgroundPanelRef.classList.add("show-modal-background"), this._isOpen = !0;
    }
  }, {
    key: "openTextModal",
    value: function openTextModal(e) {
      this._contentRef.innerHTML = e, this.displayModalElements();
    }
  }, {
    key: "addCloseButton",
    value: function addCloseButton(e, t, i) {
      var _this82 = this;
      var s = t ? ge.createSVGButton(e) : ge.createTextButton(e);
      return this.addButtons(s), s.onclick = function () {
        _this82.close(), setTimeout(function () {
          i == null || i();
        }, 140);
      }, s;
    }
  }, {
    key: "addWindowEvents",
    value: function addWindowEvents(e) {
      this.keyDownEvent = this.windowKeyDown.bind(this, e), window.addEventListener("keydown", this.keyDownEvent);
    }
  }, {
    key: "windowKeyDown",
    value: function windowKeyDown(e, t) {
      var i, s;
      !e.isConnected && this.keyDownEvent ? window.removeEventListener("keydown", this.keyDownEvent) : this._isOpen && (t.key === U.ESCAPE ? (this.close(), (i = this.extensionCloseCallback) == null || i.call(this)) : t.key === U.ENTER && (this.close(), (s = this.extensionCloseCallback) == null || s.call(this)));
    }
  }], [{
    key: "createContainer",
    value: function createContainer(e, t) {
      var i = document.createElement("div");
      return i.classList.add("modal"), i.appendChild(e), t && delete t.backgroundColor, Object.assign(i.style, t), i;
    }
  }, {
    key: "createModalContent",
    value: function createModalContent(e, t) {
      var _i$classList;
      var i = document.createElement("div");
      return (_i$classList = i.classList).add.apply(_i$classList, _toConsumableArray(e)), t && (i.style.backgroundColor = t), document.createElement("div").appendChild(i), i;
    }
  }, {
    key: "createButtonPanel",
    value: function createButtonPanel(e) {
      var t = document.createElement("div");
      return t.classList.add("modal-button-panel"), e && (t.style.backgroundColor = e), t;
    }
  }, {
    key: "createDarkBackgroundPanel",
    value: function createDarkBackgroundPanel() {
      var e = document.createElement("div");
      return e.id = "modal-background-panel", e;
    }
  }, {
    key: "createTextButton",
    value: function createTextButton(e) {
      var t = document.createElement("div");
      return t.classList.add("modal-button"), t.textContent = e, t;
    }
  }, {
    key: "createSVGButton",
    value: function createSVGButton(e) {
      var t = document.createElement("div");
      t.classList.add("modal-button", "modal-svg-button");
      var i = Fe.createSVGElement(e);
      return i.classList.add("modal-svg-button-icon"), t.appendChild(i), t;
    }
  }, {
    key: "createTextModalFunc",
    value: function createTextModalFunc(e, t, i) {
      var s;
      if (_typeof(t) == "object" && (s = t.files) != null && s.infoModal) {
        var r = new ge(e, ["modal-content"], t.files.infoModal.containerStyle);
        return r.addCloseButton("OK", !1, i), r.openTextModal.bind(r, t.infoModalTextMarkUp || "");
      }
    }
  }]);
}();
ge.MODAL_CLOSE_TIMEOUT_MS = 190;
var et = ge;
var Ni = /*#__PURE__*/function (_lt5) {
  // prettier-ignore
  function Ni(e, t, i, s, r, o) {
    var _this83;
    _classCallCheck(this, Ni);
    var d, u, h, f, m, p, g, b, M;
    var a = (d = i == null ? void 0 : i.button) == null ? void 0 : d.position,
      l = ((f = (h = (u = i == null ? void 0 : i.button) == null ? void 0 : u.styles) == null ? void 0 : h.text) == null ? void 0 : f.content) || o;
    _this83 = _callSuper(this, Ni, [Ni.createButtonElement(), r, a, i.button, l]);
    var c = _this83.createInnerElementsForStates(s, _this83.customStyles);
    _this83._inputElement = Ni.createInputElement((m = i == null ? void 0 : i.files) == null ? void 0 : m.acceptedFormats), _this83.addClickEvent(e, i), _this83.changeElementsByState(c.styles), _this83.reapplyStateStyle("styles"), _this83._fileAttachmentsType = t, _this83._openModalOnce = ((g = (p = i.files) == null ? void 0 : p.infoModal) == null ? void 0 : g.openModalOnce) === !1 || (M = (b = i.files) == null ? void 0 : b.infoModal) == null ? void 0 : M.openModalOnce;
    return _this83;
  }
  _inherits(Ni, _lt5);
  return _createClass(Ni, [{
    key: "createInnerElementsForStates",
    value: function createInnerElementsForStates(e, t) {
      return {
        styles: this.createInnerElements(e, "styles", t)
      };
    }
  }, {
    key: "triggerImportPrompt",
    value: function triggerImportPrompt(e) {
      e.onchange = this["import"].bind(this, e), e.click();
    }
  }, {
    key: "import",
    value: function _import(e) {
      di.addFilesToType(Array.from(e.files || []), [this._fileAttachmentsType]), e.value = "";
    }
  }, {
    key: "addClickEvent",
    value: function addClickEvent(e, t) {
      var i = this.triggerImportPrompt.bind(this, this._inputElement),
        s = et.createTextModalFunc(e, t, i);
      this.elementRef.onclick = this.click.bind(this, s);
    }
  }, {
    key: "click",
    value: function click(e) {
      e && (this._openModalOnce === void 0 || this._openModalOnce === !0) ? (e(), this._openModalOnce === !0 && (this._openModalOnce = !1)) : this.triggerImportPrompt(this._inputElement);
    }
  }], [{
    key: "createInputElement",
    value: function createInputElement(e) {
      var t = document.createElement("input");
      return t.type = "file", t.accept = e || "", t.hidden = !0, t.multiple = !0, t;
    }
  }, {
    key: "createButtonElement",
    value: function createButtonElement() {
      var e = document.createElement("div");
      return e.classList.add("input-button"), e;
    }
  }]);
}(lt);
var Oe = /*#__PURE__*/function () {
  function Oe() {
    _classCallCheck(this, Oe);
  }
  return _createClass(Oe, null, [{
    key: "create",
    value: function create(e, t, i) {
      var s = Oe.createElement(i);
      Oe.addEvents(s, e, t), e.appendChild(s);
    }
  }, {
    key: "createElement",
    value: function createElement(e) {
      var t = document.createElement("div");
      return t.id = "drag-and-drop", _typeof(e) == "object" && Object.assign(t.style, e), t;
    }
  }, {
    key: "addEvents",
    value: function addEvents(e, t, i) {
      t.ondragenter = function (s) {
        s.preventDefault(), Oe.display(e);
      }, e.ondragleave = function (s) {
        s.preventDefault(), Oe.hide(e);
      }, e.ondragover = function (s) {
        s.preventDefault();
      }, e.ondrop = function (s) {
        s.preventDefault(), Oe.uploadFile(i, s), Oe.hide(e);
      };
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(e, t) {
      var s;
      var i = (s = t.dataTransfer) == null ? void 0 : s.files;
      i && e.addFilesToAnyType(Array.from(i));
    }
  }, {
    key: "display",
    value: function display(e) {
      e.style.display = "block";
    }
  }, {
    key: "hide",
    value: function hide(e) {
      e.style.display = "none";
    }
  }, {
    key: "isEnabled",
    value: function isEnabled(e, t) {
      return t !== void 0 && t === !1 ? !1 : !!t || e.getNumberOfTypes() > 0;
    }
  }]);
}();
var $e = /*#__PURE__*/function () {
  function $e() {
    _classCallCheck(this, $e);
  }
  return _createClass($e, null, [{
    key: "validate",
    value:
    // prettier-ignore
    function validate(e, t, i, s, r) {
      var o = e(i, s, r);
      return o ? t.changeToSubmitIcon() : t.changeToDisabledIcon(), o;
    }
    // prettier-ignore
  }, {
    key: "useValidationFunc",
    value: function () {
      var _useValidationFunc = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee131(e, t, i, s) {
        var r, o, a;
        return _regeneratorRuntime().wrap(function _callee131$(_context131) {
          while (1) switch (_context131.prev = _context131.next) {
            case 0:
              r = t.isTextInputEmpty() ? "" : t.inputElementRef.textContent;
              _context131.next = 3;
              return i.completePlaceholders();
            case 3:
              o = i.getAllFileData(), a = o == null ? void 0 : o.map(function (l) {
                return l.file;
              });
              return _context131.abrupt("return", $e.validate(e, s, r, a));
            case 5:
            case "end":
              return _context131.stop();
          }
        }, _callee131);
      }));
      function useValidationFunc(_x235, _x236, _x237, _x238) {
        return _useValidationFunc.apply(this, arguments);
      }
      return useValidationFunc;
    }() // prettier-ignore
  }, {
    key: "useValidationFuncProgrammatic",
    value: function () {
      var _useValidationFuncProgrammatic = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee132(e, t, i) {
        var r, s;
        return _regeneratorRuntime().wrap(function _callee132$(_context132) {
          while (1) switch (_context132.prev = _context132.next) {
            case 0:
              s = (r = t.files) == null ? void 0 : r.map(function (o) {
                return o.file;
              });
              return _context132.abrupt("return", $e.validate(e, i, t.text, s, !0));
            case 2:
            case "end":
              return _context132.stop();
          }
        }, _callee132);
      }));
      function useValidationFuncProgrammatic(_x239, _x240, _x241) {
        return _useValidationFuncProgrammatic.apply(this, arguments);
      }
      return useValidationFuncProgrammatic;
    }()
  }, {
    key: "validateWebsocket",
    value: function validateWebsocket(e, t) {
      var i = e.websocket,
        s = e.connectSettings;
      return i && s.url !== ve.URL && !q.canSendMessage(i) ? (t.changeToDisabledIcon(), !1) : !0;
    }
    // prettier-ignore
  }, {
    key: "attach",
    value: function attach(e, t, i, s, r) {
      var o = e.validateInput || te.processValidateInput(e);
      e._validationHandler = /*#__PURE__*/function () {
        var _ref40 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee133(a) {
          var l;
          return _regeneratorRuntime().wrap(function _callee133$(_context133) {
            while (1) switch (_context133.prev = _context133.next) {
              case 0:
                if (!(r.status.loadingActive || r.status.requestInProgress || t.isSubmitProgrammaticallyDisabled === !0 || !$e.validateWebsocket(t, r))) {
                  _context133.next = 2;
                  break;
                }
                return _context133.abrupt("return", !1);
              case 2:
                l = o || t.canSendMessage;
                return _context133.abrupt("return", l ? a ? $e.useValidationFuncProgrammatic(l, a, r) : $e.useValidationFunc(l, i, s, r) : null);
              case 4:
              case "end":
                return _context133.stop();
            }
          }, _callee133);
        }));
        return function (_x242) {
          return _ref40.apply(this, arguments);
        };
      }();
    }
  }]);
}();
var Fn = /*#__PURE__*/function () {
  function Fn() {
    _classCallCheck(this, Fn);
  }
  return _createClass(Fn, null, [{
    key: "getFileName",
    value: function getFileName(e, t) {
      var i = /* @__PURE__ */new Date(),
        s = String(i.getHours()).padStart(2, "0"),
        r = String(i.getMinutes()).padStart(2, "0"),
        o = String(i.getSeconds()).padStart(2, "0");
      return "".concat(e, "-").concat(s, "-").concat(r, "-").concat(o, ".").concat(t);
    }
  }]);
}();
var Ma = /*#__PURE__*/function (_Hi2) {
  function Ma(e, t) {
    var _this84;
    _classCallCheck(this, Ma);
    var i, s;
    _this84 = _callSuper(this, Ma, [t.button]), _this84._waitingForBrowserApproval = !1, _this84._audioType = e, _this84._extension = ((i = t.files) == null ? void 0 : i.format) || "mp3", _this84._maxDurationSeconds = (s = t.files) == null ? void 0 : s.maxDurationSeconds, _this84.elementRef.onclick = _this84.buttonClick.bind(_assertThisInitialized(_this84));
    return _this84;
  }
  _inherits(Ma, _Hi2);
  return _createClass(Ma, [{
    key: "buttonClick",
    value: function buttonClick() {
      this._waitingForBrowserApproval || (this.isActive ? this.stop() : (this._waitingForBrowserApproval = !0, this.record()));
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this85 = this;
      return new Promise(function (e) {
        var t, i;
        _this85.changeToDefault(), (t = _this85._mediaRecorder) == null || t.stop(), (i = _this85._mediaStream) == null || i.getTracks().forEach(function (s) {
          return s.stop();
        }), setTimeout(function () {
          e();
        }, 10);
      });
    }
  }, {
    key: "record",
    value: function record() {
      var _this86 = this;
      navigator.mediaDevices.getUserMedia({
        audio: !0
      }).then(function (e) {
        _this86.changeToActive(), _this86._mediaRecorder = new MediaRecorder(e), _this86._audioType.addPlaceholderAttachment(_this86.stop.bind(_this86), _this86._maxDurationSeconds), _this86._mediaStream = e, _this86._mediaRecorder.addEventListener("dataavailable", function (t) {
          _this86.createFile(t);
        }), _this86._mediaRecorder.start();
      })["catch"](function (e) {
        console.error(e), _this86.stop();
      })["finally"](function () {
        _this86._waitingForBrowserApproval = !1;
      });
    }
  }, {
    key: "createFile",
    value: function createFile(e) {
      var _this87 = this;
      var t = new Blob([e.data], {
          type: "audio/".concat(this._extension)
        }),
        i = Fn.getFileName(this._newFilePrefix || "audio", this._extension),
        s = new File([t], i, {
          type: t.type
        }),
        r = new FileReader();
      r.readAsDataURL(s), r.onload = function (o) {
        _this87._audioType.completePlaceholderAttachment(s, o.target.result);
      };
    }
  }]);
}(Hi);
var ka = "<?xml version=\"1.0\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.0//EN\" \"http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"1\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n  <line x1=\"22\" y1=\"2\" x2=\"11\" y2=\"14\"></line>\n  <polygon points=\"22 2 15 22 11 14 2 10 22 2\"></polygon>\n</svg>\n";
var tt = /*#__PURE__*/function () {
  function tt() {
    _classCallCheck(this, tt);
  }
  return _createClass(tt, null, [{
    key: "resetSubmit",
    value: function resetSubmit(e, t) {
      t ? e.unsetCustomStateStyles(["loading", "submit"]) : e.unsetCustomStateStyles(["stop", "loading", "submit"]), e.reapplyStateStyle("submit");
    }
  }, {
    key: "overwriteDefaultStyleWithSubmit",
    value: function overwriteDefaultStyleWithSubmit(e, t) {
      if (!e.submit) return;
      var i = JSON.parse(JSON.stringify(e[t] || {}));
      z.overwritePropertyObjectFromAnother(i, e.submit, ["container", "default"]), z.overwritePropertyObjectFromAnother(i, e.submit, ["text", "styles", "default"]), z.overwritePropertyObjectFromAnother(i, e.submit, ["svg", "styles", "default"]), e[t] = i;
    }
    // prettier-ignore
  }, {
    key: "setUpDisabledButton",
    value: function setUpDisabledButton(e) {
      z.setPropertyValueIfDoesNotExist(e, ["submit", "container", "default", "backgroundColor"], ""), z.setPropertyValueIfDoesNotExist(e, ["disabled", "container", "default", "backgroundColor"], "unset"), z.setPropertyValueIfDoesNotExist(e.submit, ["svg", "styles", "default", "filter"], ""), z.setPropertyValueIfDoesNotExist(e.disabled, ["svg", "styles", "default", "filter"], "brightness(0) saturate(100%) invert(70%) sepia(0%) saturate(5564%) hue-rotate(207deg) brightness(100%) contrast(97%)"), z.setPropertyValueIfDoesNotExist(e.disabled, ["text", "styles", "default", "color"], "grey"), tt.overwriteDefaultStyleWithSubmit(e, "disabled");
    }
  }, {
    key: "process",
    value: function process(e) {
      var t = JSON.parse(JSON.stringify(e || {}));
      return tt.overwriteDefaultStyleWithSubmit(t, "loading"), tt.overwriteDefaultStyleWithSubmit(t, "stop"), e != null && e.alwaysEnabled || tt.setUpDisabledButton(t), t;
    }
  }]);
}();
var P = /*#__PURE__*/function (_lt6) {
  // prettier-ignore
  function P(e, t, i, s, r, o) {
    var _this88;
    _classCallCheck(this, P);
    var a = tt.process(e.submitButtonStyles),
      l = ka;
    _this88 = _callSuper(this, P, [P.createButtonContainerElement(), l, a == null ? void 0 : a.position, a]), _this88._isSVGLoadingIconOverriden = !1, _this88.status = {
      requestInProgress: !1,
      loadingActive: !1
    }, _this88._messages = i, _this88._textInput = t, _this88._fileAttachments = r, _this88._innerElements = _this88.createInnerElementsForStates(), _this88._abortStream = new AbortController(), _this88._stopClicked = {
      listener: function listener() {}
    }, _this88._serviceIO = s, _this88._alwaysEnabled = !!(a != null && a.alwaysEnabled), e.disableSubmitButton = _this88.disableSubmitButton.bind(_assertThisInitialized(_this88), s), _this88.attemptOverwriteLoadingStyle(e), o.microphone && _this88.setUpSpeechToText(o.microphone.button, e.speechToText), setTimeout(function () {
      var c;
      _this88._validationHandler = e._validationHandler, _this88.assignHandlers(_this88._validationHandler), (c = _this88._validationHandler) == null || c.call(_assertThisInitialized(_this88));
    });
    return _this88;
  }
  _inherits(P, _lt6);
  return _createClass(P, [{
    key: "createInnerElementsForStates",
    value: function createInnerElementsForStates() {
      var _this$createCustomEle = this.createCustomElements(),
        e = _this$createCustomEle.submit,
        t = _this$createCustomEle.loading,
        i = _this$createCustomEle.stop;
      return {
        submit: e,
        loading: t || [P.createLoadingIconElement()],
        stop: i || [P.createStopIconElement()],
        disabled: this.createDisabledIconElement(e)
      };
    }
  }, {
    key: "createCustomElements",
    value: function createCustomElements() {
      var _this89 = this;
      var e = Ae.createCustomElements("submit", this.svg, this.customStyles),
        t = {
          loading: void 0,
          stop: void 0
        };
      return Object.keys(t).forEach(function (i) {
        var s = i,
          r = Ae.createCustomElements(s, _this89.svg, _this89.customStyles);
        r && (t[s] = r);
      }), t.submit = e || this.buildDefaultIconElement("submit-icon"), t;
    }
  }, {
    key: "createDisabledIconElement",
    value: function createDisabledIconElement(e) {
      return Ae.createCustomElements("disabled", this.svg, this.customStyles) || [e[0].cloneNode(!0)];
    }
    // prettier-ignore
  }, {
    key: "attemptOverwriteLoadingStyle",
    value: function attemptOverwriteLoadingStyle(e) {
      var t, i, s, r, o, a, l, c, d;
      if (!((i = (t = this.customStyles) == null ? void 0 : t.submit) != null && i.svg || (o = (r = (s = this.customStyles) == null ? void 0 : s.loading) == null ? void 0 : r.svg) != null && o.content || (c = (l = (a = this.customStyles) == null ? void 0 : a.loading) == null ? void 0 : l.text) != null && c.content) && (e.displayLoadingBubble === void 0 || e.displayLoadingBubble === !0)) {
        var u = document.createElement("style");
        u.textContent = "\n        .loading-button > * {\n          filter: brightness(0) saturate(100%) invert(72%) sepia(0%) saturate(3044%) hue-rotate(322deg) brightness(100%)\n            contrast(96%) !important;\n        }", (d = e.shadowRoot) == null || d.appendChild(u), this._isSVGLoadingIconOverriden = !0;
      }
    }
  }, {
    key: "assignHandlers",
    value: function assignHandlers(e) {
      this._serviceIO.completionsHandlers = {
        onFinish: this.resetSubmit.bind(this, e)
      }, this._serviceIO.streamHandlers = {
        onOpen: this.changeToStopIcon.bind(this),
        onClose: this.resetSubmit.bind(this, e),
        abortStream: this._abortStream,
        stopClicked: this._stopClicked
      };
      var t = this._serviceIO.stream;
      _typeof(t) == "object" && typeof t.simulation == "number" && (this._serviceIO.streamHandlers.simulationInterim = t.simulation);
    }
  }, {
    key: "setUpSpeechToText",
    value: function setUpSpeechToText(e, t) {
      this._microphoneButton = e, this._stopSTTAfterSubmit = _typeof(t) == "object" ? t.stopAfterSubmit : !1;
    }
  }, {
    key: "resetSubmit",
    value: function resetSubmit(e) {
      this.status.requestInProgress = !1, this.status.loadingActive = !1, e();
    }
  }, {
    key: "submitFromInput",
    value: function () {
      var _submitFromInput = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee134() {
        var e, t;
        return _regeneratorRuntime().wrap(function _callee134$(_context134) {
          while (1) switch (_context134.prev = _context134.next) {
            case 0:
              _context134.next = 2;
              return this._fileAttachments.completePlaceholders();
            case 2:
              e = this._fileAttachments.getAllFileData();
              if (this._textInput.isTextInputEmpty()) this.attemptSubmit({
                text: "",
                files: e
              });else {
                t = this._textInput.inputElementRef.innerText.trim();
                this.attemptSubmit({
                  text: t,
                  files: e
                });
              }
            case 4:
            case "end":
              return _context134.stop();
          }
        }, _callee134, this);
      }));
      function submitFromInput() {
        return _submitFromInput.apply(this, arguments);
      }
      return submitFromInput;
    }()
  }, {
    key: "programmaticSubmit",
    value: function () {
      var _programmaticSubmit = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee135(e) {
        var _this90 = this;
        var t;
        return _regeneratorRuntime().wrap(function _callee135$(_context135) {
          while (1) switch (_context135.prev = _context135.next) {
            case 0:
              typeof e == "string" && (e = te.processSubmitUserMessage(e));
              t = {
                text: e.text
              };
              e.files && (t.files = Array.from(e.files).map(function (i) {
                return {
                  file: i,
                  type: Pe.getTypeFromBlob(i)
                };
              })), setTimeout(function () {
                return _this90.attemptSubmit(t, !0);
              });
            case 3:
            case "end":
              return _context135.stop();
          }
        }, _callee135);
      }));
      function programmaticSubmit(_x243) {
        return _programmaticSubmit.apply(this, arguments);
      }
      return programmaticSubmit;
    }() // TO-DO - should be disabled when loading history
  }, {
    key: "attemptSubmit",
    value: function () {
      var _attemptSubmit = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee136(e) {
        var t,
          r,
          o,
          a,
          l,
          i,
          s,
          _args136 = arguments;
        return _regeneratorRuntime().wrap(function _callee136$(_context136) {
          while (1) switch (_context136.prev = _context136.next) {
            case 0:
              t = _args136.length > 1 && _args136[1] !== undefined ? _args136[1] : !1;
              _context136.next = 3;
              return (r = this._validationHandler) == null ? void 0 : r.call(this, t ? e : void 0);
            case 3:
              _context136.t0 = _context136.sent;
              _context136.t1 = !1;
              if (!(_context136.t0 === _context136.t1)) {
                _context136.next = 7;
                break;
              }
              return _context136.abrupt("return");
            case 7:
              this.changeToLoadingIcon();
              this._textInput.clear();
              _context136.t2 = typeof this._messages.focusMode != "boolean" && (o = this._messages.focusMode) != null && o.fade;
              if (!_context136.t2) {
                _context136.next = 13;
                break;
              }
              _context136.next = 13;
              return Ei.fadeAnimation(this._messages.elementRef, this._messages.focusMode.fade);
            case 13:
              _context136.next = 15;
              return this.addNewMessage(e);
            case 15:
              this._serviceIO.isWebModel() || this._messages.addLoadingMessage();
              i = (a = e.files) == null ? void 0 : a.map(function (c) {
                return c.file;
              }), s = {
                text: e.text === "" ? void 0 : e.text,
                files: i
              };
              _context136.next = 19;
              return this._serviceIO.callAPI(s, this._messages);
            case 19:
              (l = this._fileAttachments) == null || l.removeAllFiles();
            case 20:
            case "end":
              return _context136.stop();
          }
        }, _callee136, this);
      }));
      function attemptSubmit(_x244) {
        return _attemptSubmit.apply(this, arguments);
      }
      return attemptSubmit;
    }()
  }, {
    key: "addNewMessage",
    value: function () {
      var _addNewMessage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee137(_ref41) {
        var e, t, i;
        return _regeneratorRuntime().wrap(function _callee137$(_context137) {
          while (1) switch (_context137.prev = _context137.next) {
            case 0:
              e = _ref41.text, t = _ref41.files;
              i = {
                role: y.USER_ROLE
              };
              e && (i.text = e);
              _context137.t0 = t;
              if (!_context137.t0) {
                _context137.next = 8;
                break;
              }
              _context137.next = 7;
              return this._messages.addMultipleFiles(t);
            case 7:
              i.files = _context137.sent;
            case 8:
              this._serviceIO.sessionId && (i._sessionId = this._serviceIO.sessionId);
              Object.keys(i).length > 0 && this._messages.addNewMessage(i);
            case 10:
            case "end":
              return _context137.stop();
          }
        }, _callee137, this);
      }));
      function addNewMessage(_x245) {
        return _addNewMessage.apply(this, arguments);
      }
      return addNewMessage;
    }()
  }, {
    key: "stopStream",
    value: function stopStream() {
      var e;
      this._abortStream.abort(), (e = this._stopClicked) == null || e.listener(), this._validationHandler && this.resetSubmit(this._validationHandler);
    }
  }, {
    key: "changeToStopIcon",
    value: function changeToStopIcon() {
      this._serviceIO.websocket || (this.elementRef.classList.remove(P.LOADING_CLASS, P.DISABLED_CLASS, P.SUBMIT_CLASS), N.removeAriaAttributes(this.elementRef), this.changeElementsByState(this._innerElements.stop), this.reapplyStateStyle("stop", ["loading", "submit"]), this.elementRef.onclick = this.stopStream.bind(this), this.status.loadingActive = !1);
    }
  }, {
    key: "changeToLoadingIcon",
    value: function changeToLoadingIcon() {
      this._serviceIO.websocket || (this._isSVGLoadingIconOverriden || this.changeElementsByState(this._innerElements.loading), this.elementRef.classList.remove(P.SUBMIT_CLASS, P.DISABLED_CLASS), N.removeAriaDisabled(this.elementRef), this.elementRef.classList.add(P.LOADING_CLASS), N.addAriaBusy(this.elementRef), this.reapplyStateStyle("loading", ["submit"]), this.elementRef.onclick = function () {}, this.status.requestInProgress = !0, this.status.loadingActive = !0);
    }
    // called every time when user triggers an input via ValidationHandler - hence use class to check if not already present
  }, {
    key: "changeToSubmitIcon",
    value: function changeToSubmitIcon() {
      var _this91 = this;
      this.elementRef.classList.contains(P.SUBMIT_CLASS) || (this.elementRef.classList.remove(P.LOADING_CLASS, P.DISABLED_CLASS), N.removeAriaAttributes(this.elementRef), this.elementRef.classList.add(P.SUBMIT_CLASS), this.changeElementsByState(this._innerElements.submit), tt.resetSubmit(this, this.status.loadingActive), this.elementRef.onclick = function () {
        var e;
        _this91.submitFromInput(), (e = _this91._microphoneButton) != null && e.isActive && ri.toggleSpeechAfterSubmit(_this91._microphoneButton.elementRef, !!_this91._stopSTTAfterSubmit);
      });
    }
    // called every time when user triggers an input via ValidationHandler - hence use class to check if not already present
  }, {
    key: "changeToDisabledIcon",
    value: function changeToDisabledIcon() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      this._alwaysEnabled && !e ? this.changeToSubmitIcon() : this.elementRef.classList.contains(P.DISABLED_CLASS) || (this.elementRef.classList.remove(P.LOADING_CLASS, P.SUBMIT_CLASS), N.removeAriaBusy(this.elementRef), this.elementRef.classList.add(P.DISABLED_CLASS), N.addAriaDisabled(this.elementRef), this.changeElementsByState(this._innerElements.disabled), this.reapplyStateStyle("disabled", ["submit"]), this.elementRef.onclick = function () {});
    }
  }, {
    key: "disableSubmitButton",
    value: function disableSubmitButton(e, t) {
      var i;
      e.isSubmitProgrammaticallyDisabled = t !== !1, !(this.status.requestInProgress || this.status.loadingActive) && (t === !1 ? (i = this._validationHandler) == null || i.call(this) : this.changeToDisabledIcon(!0));
    }
  }], [{
    key: "createButtonContainerElement",
    value: function createButtonContainerElement() {
      var e = document.createElement("div");
      return e.classList.add("input-button"), e;
    }
  }, {
    key: "createLoadingIconElement",
    value: function createLoadingIconElement() {
      var e = document.createElement("div");
      return e.classList.add("loading-submit-button"), e;
    }
  }, {
    key: "createStopIconElement",
    value: function createStopIconElement() {
      var e = document.createElement("div");
      return e.id = "stop-icon", e;
    }
  }]);
}(lt);
P.SUBMIT_CLASS = "submit-button", P.LOADING_CLASS = "loading-button", P.DISABLED_CLASS = "disabled-button";
var gs = P;
var La = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M27.1 14.313V5.396L24.158 8.34c-2.33-2.325-5.033-3.503-8.11-3.503C9.902 4.837 4.901 9.847 4.899 16c.001 6.152 5.003 11.158 11.15 11.16 4.276 0 9.369-2.227 10.836-8.478l.028-.122h-3.23l-.022.068c-1.078 3.242-4.138 5.421-7.613 5.421a8 8 0 0 1-5.691-2.359A7.993 7.993 0 0 1 8 16.001c0-4.438 3.611-8.049 8.05-8.049 2.069 0 3.638.58 5.924 2.573l-3.792 3.789H27.1z\"/>\n</svg>\n",
  Ia = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<svg viewBox=\"0 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M0 16q0 3.264 1.28 6.208t3.392 5.12 5.12 3.424 6.208 1.248 6.208-1.248 5.12-3.424 3.392-5.12 1.28-6.208-1.28-6.208-3.392-5.12-5.088-3.392-6.24-1.28q-3.264 0-6.208 1.28t-5.12 3.392-3.392 5.12-1.28 6.208zM4 16q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016-1.6 6.048-4.384 4.352-6.016 1.6-6.016-1.6-4.384-4.352-1.6-6.048z\"></path>\n</svg>\n",
  Oa = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z\"/>\n</svg>",
  Pa = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M4.89163 13.2687L9.16582 17.5427L18.7085 8\" stroke=\"#000000\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>";
var Cs = /*#__PURE__*/function (_et) {
  // prettier-ignore
  function Cs(e, t, i, s) {
    var _this92;
    _classCallCheck(this, Cs);
    _this92 = _callSuper(this, Cs, [e, ["modal-content", "modal-camera-content"], i]), _this92._stopped = !1, _this92._format = "image/png", _this92._canvas = document.createElement("canvas"), _this92._canvas.classList.add("camera-modal-canvas");
    var _this92$addButtonsAnd = _this92.addButtonsAndTheirEvents(t),
      r = _this92$addButtonsAnd.captureButton,
      o = _this92$addButtonsAnd.submitButton;
    _this92._captureButton = r, _this92._submitButton = o, _this92._captureIcon = _this92._captureButton.children[0], _this92._refreshIcon = Fe.createSVGElement(La), _this92._refreshIcon.classList.add("modal-svg-button-icon", "modal-svg-refresh-icon"), (s == null ? void 0 : s.format) === "jpeg" && (_this92._format = "image/jpeg"), s != null && s.dimensions && (_this92._dimensions = s.dimensions), _this92._contentRef.appendChild(_this92._canvas), _this92.extensionCloseCallback = _this92.stop;
    return _this92;
  }
  _inherits(Cs, _et);
  return _createClass(Cs, [{
    key: "addButtonsAndTheirEvents",
    value: function addButtonsAndTheirEvents(e) {
      var t = et.createSVGButton(Ia);
      t.classList.add("modal-svg-camera-button"), t.children[0].classList.add("modal-svg-camera-icon");
      var i = this.addCloseButton(Oa, !0);
      i.classList.add("modal-svg-close-button"), i.children[0].classList.add("modal-svg-close-icon");
      var s = et.createSVGButton(Pa);
      return s.classList.add("modal-svg-submit-button"), this.addButtons(t, s), this.addButtonEvents(t, i, s, e), {
        captureButton: t,
        submitButton: s
      };
    }
    // prettier-ignore
  }, {
    key: "addButtonEvents",
    value: function addButtonEvents(e, t, i, s) {
      var _this93 = this;
      e.onclick = function () {
        _this93.capture();
      }, t.addEventListener("click", this.stop.bind(this)), i.onclick = function () {
        var r = _this93.getFile();
        r && di.addFilesToType([r], [s]), _this93.stop(), _this93.close();
      };
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this94 = this;
      this._mediaStream && this._mediaStream.getTracks().forEach(function (e) {
        return e.stop();
      }), this._stopped = !0, setTimeout(function () {
        _this94._captureButton.replaceChildren(_this94._captureIcon), _this94._captureButton.classList.replace("modal-svg-refresh-button", "modal-svg-camera-button");
        var e = _this94._canvas.getContext("2d");
        e == null || e.clearRect(0, 0, _this94._canvas.width, _this94._canvas.height);
      }, et.MODAL_CLOSE_TIMEOUT_MS);
    }
  }, {
    key: "start",
    value: function start() {
      var _this95 = this;
      this._dataURL = void 0, this._submitButton.classList.add("modal-svg-submit-disabled"), this._stopped = !1, navigator.mediaDevices.getUserMedia({
        video: this._dimensions || !0
      }).then(function (e) {
        if (_this95._mediaStream = e, !_this95.isOpen()) return _this95.stop();
        var t = document.createElement("video");
        t.srcObject = e, t.play(), requestAnimationFrame(_this95.updateCanvas.bind(_this95, t, _this95._canvas));
      })["catch"](function (e) {
        console.error(e), _this95.stop(), _this95.close();
      });
    }
  }, {
    key: "capture",
    value: function capture() {
      this._dataURL ? (this._captureButton.replaceChildren(this._captureIcon), this._captureButton.classList.replace("modal-svg-refresh-button", "modal-svg-camera-button"), this._submitButton.classList.add("modal-svg-submit-disabled"), this._dataURL = void 0) : (this._captureButton.replaceChildren(this._refreshIcon), this._captureButton.classList.replace("modal-svg-camera-button", "modal-svg-refresh-button"), this._submitButton.classList.remove("modal-svg-submit-disabled"), this._dataURL = this._canvas.toDataURL());
    }
  }, {
    key: "getFile",
    value: function getFile() {
      if (this._dataURL) {
        var e = atob(this._dataURL.split(",")[1]),
          t = new Array(e.length);
        for (var a = 0; a < e.length; a++) t[a] = e.charCodeAt(a);
        var _i10 = new Uint8Array(t),
          s = new Blob([_i10], {
            type: this._format
          }),
          r = this._format === "image/jpeg" ? "jpeg" : "png",
          o = Fn.getFileName(this._newFilePrefix || "photo", r);
        return new File([s], o, {
          type: s.type
        });
      }
    }
  }, {
    key: "updateCanvas",
    value: function updateCanvas(e, t) {
      if (!this._stopped) {
        if (!this._dataURL) {
          t.width = e.videoWidth, t.height = e.videoHeight;
          var _i11 = t.getContext("2d");
          _i11 == null || _i11.drawImage(e, 0, 0, t.width, t.height);
        }
        requestAnimationFrame(this.updateCanvas.bind(this, e, t));
      }
    }
  }, {
    key: "openCameraModal",
    value: function openCameraModal(e) {
      this.displayModalElements(), e.start();
    }
    // prettier-ignore
  }], [{
    key: "createCameraModalFunc",
    value: function createCameraModalFunc(e, t, i, s) {
      var r = new Cs(e, t, i, s);
      return r.openCameraModal.bind(r, r);
    }
  }]);
}(et);
var Na = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<svg viewBox=\"0 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M29 7h-4.599l-2.401-4h-12l-2.4 4h-4.6c-1 0-3 1-3 2.969v16.031c0 1.657 1.5 3 2.792 3h26.271c1.313 0 2.938-1.406 2.938-2.968v-16.032c0-1-1-3-3-3zM30 26.032c0 0.395-0.639 0.947-0.937 0.969h-26.265c-0.232-0.019-0.797-0.47-0.797-1v-16.031c0-0.634 0.851-0.953 1-0.969h5.732l2.4-4h9.802l1.785 3.030 0.55 0.97h5.731c0.705 0 0.99 0.921 1 1v16.032zM16 10c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zM16 22c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z\"></path>\n</svg>";
var Rs = /*#__PURE__*/function (_lt7) {
  function Rs(e, t, i) {
    var _this96;
    _classCallCheck(this, Rs);
    var a, l, c, d;
    var s = (a = i == null ? void 0 : i.button) == null ? void 0 : a.position,
      r = ((d = (c = (l = i == null ? void 0 : i.button) == null ? void 0 : l.styles) == null ? void 0 : c.text) == null ? void 0 : d.content) || "Photo";
    _this96 = _callSuper(this, Rs, [Rs.createButtonElement(), Na, s, (i == null ? void 0 : i.button) || {}, r]);
    var o = _this96.createInnerElementsForStates(_this96.customStyles);
    i && _this96.addClickEvent(e, t, i.modalContainerStyle, i.files), _this96.changeElementsByState(o.styles), _this96.reapplyStateStyle("styles");
    return _this96;
  }
  _inherits(Rs, _lt7);
  return _createClass(Rs, [{
    key: "createInnerElementsForStates",
    value: function createInnerElementsForStates(e) {
      return {
        styles: this.createInnerElements("camera-icon", "styles", e)
      };
    }
  }, {
    key: "addClickEvent",
    value:
    // prettier-ignore
    function addClickEvent(e, t, i, s) {
      var r = Cs.createCameraModalFunc(e, t, i, s);
      this.elementRef.onclick = r;
    }
  }], [{
    key: "createButtonElement",
    value: function createButtonElement() {
      var e = document.createElement("div");
      return e.classList.add("input-button"), e;
    }
  }]);
}(lt);
var Kt = /*#__PURE__*/function () {
  function Kt(e, t, i, s) {
    _classCallCheck(this, Kt);
    this.elementRef = Kt.createPanelElement(e.inputAreaStyle);
    var r = {},
      o = this.createFileUploadComponents(e, i, s, r),
      a = new vi(e, i, o);
    e.speechToText && !r.microphone && (r.microphone = {
      button: new ri(e, a, t.addNewErrorMessage.bind(t))
    });
    var l = new gs(e, a, t, i, o, r);
    a.submit = l.submitFromInput.bind(l), $e.attach(e, i, a, o, l), e.submitUserMessage = l.programmaticSubmit.bind(l), r.submit = {
      button: l
    }, e.customButtons && it.add(e, r), Kt.addElements(this.elementRef, a, r, s, o, e.dropupStyles);
  }
  return _createClass(Kt, [{
    key: "createFileUploadComponents",
    value:
    // prettier-ignore
    function createFileUploadComponents(e, t, i, s) {
      var o, a, l, c;
      var r = new di(this.elementRef, e.attachmentContainerStyle, t.demo);
      if (Kt.createUploadButtons(e, t.fileTypes || {}, r, i, s), (o = t.camera) != null && o.files) {
        var d = ((a = s.images) == null ? void 0 : a.fileType) || r.addType(e, t.camera.files, "images");
        s.camera = {
          button: new Rs(i, d, t.camera)
        };
      }
      if ((l = t.recordAudio) != null && l.files) {
        var _d = ((c = s.audio) == null ? void 0 : c.fileType) || r.addType(e, t.recordAudio.files, "audio");
        s.microphone = {
          button: new Ma(_d, t.recordAudio)
        };
      }
      return Oe.isEnabled(r, e.dragAndDrop) && Oe.create(i, r, e.dragAndDrop), r;
    }
    // prettier-ignore
  }], [{
    key: "createPanelElement",
    value: function createPanelElement(e) {
      var t = document.createElement("div");
      return t.id = "input", Object.assign(t.style, e), t;
    }
  }, {
    key: "createUploadButtons",
    value: function createUploadButtons(e, t, i, s, r) {
      Object.keys(t).forEach(function (o) {
        var a = o,
          l = t[a];
        if (l.files) {
          var c = i.addType(e, l.files, a),
            _ca$a = ca[a],
            d = _ca$a.id,
            u = _ca$a.svgString,
            h = _ca$a.dropupText,
            f = new Ni(s, c, l, d, u, h);
          r[a] = {
            button: f,
            fileType: c
          };
        }
      });
    }
    // prettier-ignore
  }, {
    key: "addElements",
    value: function addElements(e, t, i, s, r, o) {
      X.addElements(e, t.elementRef);
      var a = yt.create(),
        l = K.addButtons(a, i, s, o);
      ms.set(t.inputElementRef, a, r.elementRef, l), yt.add(e, a);
    }
  }]);
}();
var Ms = /*#__PURE__*/function () {
  function Ms() {
    _classCallCheck(this, Ms);
  }
  return _createClass(Ms, null, [{
    key: "createElements",
    value: function createElements(e, t, i) {
      var s = document.createElement("div");
      s.id = "chat-view";
      var r = new de(e, t, i);
      t.websocket && q.createConnection(t, r);
      var o = new Kt(e, r, t, s);
      return X.addElements(s, r.elementRef, o.elementRef), s;
    }
  }, {
    key: "render",
    value: function render(e, t, i, s) {
      var r = Ms.createElements(e, i, s);
      t.replaceChildren(r), i.isCustomView() && i.setUpView(r, t);
    }
  }]);
}();
var Da = "#validate-property-key-view{height:100%;position:relative;display:flex;justify-content:center;align-items:center;padding:8px}#loading-validate-key-property{display:inline-block;width:50px;height:50px}#loading-validate-key-property:after{content:\" \";display:block;width:38px;height:38px;margin:1px;border-radius:50%;border:5px solid #5fb2ff;border-color:#5fb2ff transparent #5fb2ff transparent;animation:loading-spinner 1.4s linear infinite}#deep-chat-openai-realtime-container{height:100%;width:100%}#deep-chat-openai-realtime-avatar-container{height:60%;width:100%;display:flex;justify-content:center;align-items:center}#deep-chat-openai-realtime-avatar{border-radius:50%;height:110px;border:1px solid rgb(215,215,215);padding:8px;-webkit-user-select:none;user-select:none;margin-top:20px}#deep-chat-openai-realtime-buttons-container{height:40%;display:flex;position:relative}.deep-chat-openai-realtime-button-container{height:100%;width:50%;display:flex;justify-content:center;align-items:center}.deep-chat-openai-realtime-button{width:70px;height:70px;border-radius:50%;display:flex;justify-content:center;align-items:center;cursor:pointer}.deep-chat-openai-realtime-button-default{background-color:#e3e3e3}.deep-chat-openai-realtime-button-default:hover{background-color:#d4d4d4}.deep-chat-openai-realtime-button-default:active{background-color:#c5c5c5}.deep-chat-openai-realtime-button-loading{opacity:.7;pointer-events:none}.deep-chat-openai-realtime-microphone-active{background-color:#ffe7e7}.deep-chat-openai-realtime-microphone-active:hover{background-color:#ffdede}.deep-chat-openai-realtime-microphone-active:active{background-color:#ffd2d2}.deep-chat-openai-realtime-microphone>*{height:30px;width:30px}.deep-chat-openai-realtime-microphone-active>*{filter:brightness(0) saturate(100%) invert(35%) sepia(60%) saturate(1360%) hue-rotate(325deg) brightness(95%) contrast(92%)}.deep-chat-openai-realtime-toggle>*{height:32px;width:32px;padding-left:3px;filter:brightness(0) saturate(100%) invert(22%) sepia(0%) saturate(4537%) hue-rotate(208deg) brightness(105%) contrast(91%)}.deep-chat-openai-realtime-button-unavailable{opacity:.45;pointer-events:none}#deep-chat-openai-realtime-error{color:red;position:absolute;top:calc(50% + 40px);left:50%;transform:translate(-50%,-50%);font-size:17px}#deep-chat-openai-realtime-loading{position:absolute;font-size:15px;top:50%;left:50%;transform:translate(-50%,-50%)}#insert-key-view{height:100%;position:relative}#insert-key-contents{text-align:center;position:absolute;top:44%;left:50%;transform:translate(-50%,-50%);width:82%;display:flex;max-width:700px}#insert-key-title{margin-bottom:15px}#insert-key-input-container{margin-right:2.7em;width:calc(100% - 80px)}#insert-key-input{padding:.3em 1.7em .3em .3em;border-width:1px;border-style:solid;border-radius:3px;width:100%;font-size:inherit}.insert-key-input-valid{border-color:gray}.insert-key-input-invalid{border-color:red}#visibility-icon-container{position:relative;float:right;cursor:pointer;-webkit-user-select:none;user-select:none}.visibility-icon{filter:brightness(0) saturate(100%) invert(63%) sepia(1%) saturate(9%) hue-rotate(43deg) brightness(98%) contrast(92%);position:absolute;right:-1.7em;top:-1.43em}#visible-icon{top:-1.4em}.visibility-icon:hover{filter:unset}.visibility-icon>*{pointer-events:none}#start-button{border:1px solid grey;color:#454545;border-radius:4px;width:3em;display:flex;justify-content:center;align-items:center;cursor:pointer;padding:.28em .3em;-webkit-user-select:none;user-select:none;background-color:#fff}#start-button:hover{background-color:#f2f2f2}#start-button:active{background-color:#d2d2d2}#insert-key-help-text-container{width:100%;position:absolute;margin-top:32px;margin-bottom:20px}#insert-key-help-text-contents{width:100%;position:absolute}#insert-key-input-invalid-text{display:block;margin-top:1em;margin-bottom:.5em;color:red}.insert-key-input-help-text{display:block;margin-top:16px}#loading-key{display:inline-block;width:16px;height:16px}#loading-key:after{content:\" \";display:block;width:11px;height:11px;margin:1px;border-radius:50%;border:2px solid #0084ff;border-color:#0084ff transparent #0084ff transparent;animation:loading-spinner 1.2s linear infinite}#error-view{color:red;font-size:1.2em;line-height:1.3em;margin-top:-5px;text-align:center;height:100%;display:flex;justify-content:center;align-items:center;padding-left:8px;padding-right:8px}@keyframes loading-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.intro-panel{position:absolute;display:flex;justify-content:center;right:0;bottom:0;left:0;margin:auto;height:fit-content;top:-2.5em}#internal-intro-panel{width:250px;height:min-content;display:block;border-radius:5px;overflow:auto;border:1px solid rgb(203,203,203);padding:10px;max-height:calc(100% - 6.8em)}#internal-intro-panel>p{margin-block-start:.8em;margin-block-end:.8em}pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!\n  Theme: a11y-dark\n  Author: @ericwbailey\n  Maintainer: @ericwbailey\n\n  Based on the Tomorrow Night Eighties theme: https://github.com/isagalaev/highlight.js/blob/master/src/styles/tomorrow-night-eighties.css\n*/.hljs{background:#2b2b2b;color:#f8f8f2}.hljs-comment,.hljs-quote{color:#d4d0ab}.hljs-deletion,.hljs-name,.hljs-regexp,.hljs-selector-class,.hljs-selector-id,.hljs-tag,.hljs-template-variable,.hljs-variable{color:#ffa07a}.hljs-built_in,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-type{color:#f5ab35}.hljs-attribute{color:gold}.hljs-addition,.hljs-bullet,.hljs-string,.hljs-symbol{color:#abe338}.hljs-section,.hljs-title{color:#00e0e0}.hljs-keyword,.hljs-selector-tag{color:#dcc6e0}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}@media screen and (-ms-high-contrast: active){.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-bullet,.hljs-comment,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-quote,.hljs-string,.hljs-symbol,.hljs-type{color:highlight}.hljs-keyword,.hljs-selector-tag{font-weight:700}}#messages{overflow:auto}.outer-message-container:last-child{margin-bottom:5px}.inner-message-container{display:flex;margin-left:auto;margin-right:auto;width:calc(97.5% - 24px);max-width:100%}.message-bubble{margin-top:10px;word-wrap:break-word;width:fit-content;max-width:60%;border-radius:10px;padding:.42em .55em;height:fit-content;line-height:1.26em}.user-message-text{color:#fff;background-color:#0084ff;margin-right:0;margin-left:auto}.ai-message-text{color:#000;background-color:#e4e6eb;margin-left:0;margin-right:auto}.deep-chat-last-group-messages-active{height:100%}.loading-history-message-full-view{position:absolute;height:70%;width:100%;display:flex;align-items:center}.loading-history-message-small{height:20px;margin-bottom:30px}.loading-history-message-small>div>div{scale:.6}.loading-history-message{margin-top:0;width:100%;max-width:100%;display:flex;justify-content:center;background-color:unset}.loading-history{width:70px}.loading-history div{position:absolute;width:var(--loading-history-width);height:var(--loading-history-height);margin:var(--loading-history-margin);border:var(--loading-history-border);border-radius:50%;animation:loading-spinner 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:var(--loading-history-color) transparent transparent transparent}.loading-history div:nth-child(1){animation-delay:-.45s}.loading-history div:nth-child(2){animation-delay:-.3s}.loading-history div:nth-child(3){animation-delay:-.15s}.html-message{max-width:unset}.error-message-text{margin:14px auto 10px;background-color:#f4c0c0;color:#474747;text-align:center;max-width:95%}.deep-chat-loading-message-dots-container{width:1em;padding:.6em .75em .6em 1.3em}.loading-message-dots{position:relative;width:.45em;height:.45em;border-radius:5px;background-color:var(--loading-message-color);color:var(--loading-message-color);animation:loading-message-dots 1s infinite linear alternate;animation-delay:.5s}.loading-message-dots:before,.loading-message-dots:after{content:\"\";display:inline-block;position:absolute;top:0}.loading-message-dots:before{left:-.7em;width:.45em;height:.45em;border-radius:5px;background-color:var(--loading-message-color);color:var(--loading-message-color);animation:loading-message-dots 1s infinite alternate;animation-delay:0s}.loading-message-dots:after{left:.7em;width:.45em;height:.45em;border-radius:5px;background-color:var(--loading-message-color);color:var(--loading-message-color);animation:loading-message-dots 1s infinite alternate;animation-delay:1s}@keyframes loading-message-dots{0%{background-color:var(--loading-message-color)}50%,to{background-color:var(--loading-message-color-fade)}}.message-bubble>p:first-child{margin-top:0}.message-bubble>p:last-child{margin-bottom:0}pre{overflow:auto;display:block;word-break:break-all;word-wrap:break-word;border-radius:7px;background:#2b2b2b;color:#f8f8f2;margin-top:.8em;margin-bottom:.8em;padding:.6em;font-size:.9em;line-height:1.5em}.image-message{padding:0;display:flex;background-color:#ddd}.image-message>*,.image-message>*>*{width:100%;border-radius:8px;display:flex}.audio-message{width:60%;max-width:300px;height:2.2em;max-height:54px;padding:0;background-color:unset}.audio-player{width:100%;height:100%}.audio-player-safari{height:fit-content;width:40px}.audio-player-safari-left{float:left}.audio-player-safari-right{float:right}.any-file-message{padding:1px}.any-file-message-contents{display:flex}.any-file-message-icon-container{width:1.3em;min-width:1.3em;position:relative;border-radius:4px;margin-left:6px;margin-right:2px}.any-file-message-icon{background-color:#fff;border-radius:4px;position:absolute;width:1em;height:1.25em;padding:1px;margin-top:auto;margin-bottom:auto;top:0;bottom:0}.any-file-message-text{padding-top:5px;overflow-wrap:anywhere;padding-bottom:5px;padding-right:7px}.message-bubble>a{color:inherit}.left-item-position{margin-right:10px}.right-item-position{margin-left:10px}.role-hidden{display:none}.avatar{padding-top:5px;width:1.5em;height:1.5em;border-radius:1px}.avatar-container{margin-top:9px}.name{margin-top:16px;font-size:15px}#drag-and-drop{position:absolute;display:none;z-index:10;height:calc(100% - 10px);width:calc(100% - 10px);background-color:#70c6ff4d;border:5px dashed #6dafff}#file-attachment-container{position:absolute;height:3.6em;width:calc(80% - 4px);top:-2.5em;border-radius:5px;overflow:auto;text-align:left;background-color:#d7d7d73b;padding-left:4px}.file-attachment{width:2.85em;height:2.85em;display:inline-flex;margin-right:.6em;margin-bottom:.44em;margin-top:4px;position:relative;background-color:#fff;border-radius:5px}.image-attachment{width:100%;height:100%;object-fit:cover;border-radius:5px}.border-bound-attachment{width:calc(100% - 2px);height:calc(100% - 2px);border:1px solid #c3c3c3;border-radius:5px;overflow:hidden}.border-bound-attachment-safari{width:calc(100% - 1px);height:calc(100% - 1px)}.audio-attachment-icon-container{cursor:pointer}.audio-attachment-icon-container:hover{background-color:#f8f8f8}.attachment-icon{left:0;right:0;bottom:0;top:2px;margin:auto;position:absolute;width:25px;-webkit-user-select:none;user-select:none}.not-removable-attachment-icon{top:0;right:0;bottom:0;left:0}.play-icon{filter:brightness(0) saturate(100%) invert(17%) sepia(0%) saturate(1392%) hue-rotate(67deg) brightness(98%) contrast(97%)}.stop-icon{filter:brightness(0) saturate(100%) invert(29%) sepia(90%) saturate(1228%) hue-rotate(198deg) brightness(93%) contrast(98%)}.audio-placeholder-text-3-digits{padding-left:.26rem}.audio-placeholder-text-4-digits{padding-left:.1rem}.any-file-attachment{padding:2px 0}.file-attachment-text-container{position:absolute;width:inherit;display:flex;align-items:center;height:100%;top:-1px}.audio-placeholder-text-3-digits-container{padding-top:1px;cursor:default}.any-file-attachment-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;padding-left:.13em;margin-left:auto;margin-right:auto}.remove-file-attachment-button{height:1.25em;width:1.25em;border:1px solid #cfcfcf;border-radius:25px;background-color:#fff;top:-4px;right:-5px;position:absolute;display:flex;justify-content:center;cursor:pointer;-webkit-user-select:none;user-select:none}.remove-file-attachment-button:hover{background-color:#e4e4e4}.remove-file-attachment-button:active{background-color:#d7d7d7}.x-icon{color:#4e4e4e;top:-.075em;position:relative;font-size:1.05em}.modal{display:none;flex-direction:column;align-items:center;justify-content:center;position:absolute;width:80%;max-width:420px;max-height:80%;margin:auto;top:0;right:0;bottom:0;left:0;z-index:3}.modal-content{border-top:1px solid rgb(217,217,217);border-left:1px solid rgb(217,217,217);border-right:1px solid rgb(217,217,217);border-top-left-radius:inherit;border-top-right-radius:inherit;background-color:#fff;overflow-y:auto;height:fit-content;max-height:calc(100% - 3.3em);width:100%}.modal-content>p{margin-left:1em;margin-right:1em}.modal-content>ul{margin-right:1em}.modal-button-panel{height:3.3em;border:1px solid;border-color:rgb(223,223,223) rgb(217,217,217) rgb(217,217,217);border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;background-color:#fff;text-align:center;justify-content:center;display:flex;width:100%}.modal-button{min-width:2.5em;text-align:center;color:#fff;border-radius:5px;padding:.4em .4em .3em;height:1.25em;background-color:#3279b2;top:0;bottom:0;cursor:pointer;-webkit-user-select:none;user-select:none;margin:auto .31em}.modal-button:hover{background-color:#276da7}.modal-button:active{background-color:#1b5687}.modal-svg-button{padding:0 0 2px;width:2em;height:1.8em}.modal-svg-button-icon{width:100%;height:100%;filter:brightness(0) saturate(100%) invert(100%) sepia(15%) saturate(4%) hue-rotate(346deg) brightness(101%) contrast(102%)}#modal-background-panel{position:absolute;width:100%;height:100%;background-color:#00000042;z-index:2;display:none}.show-modal-background{animation:fadeInBackground .3s ease-in-out}@keyframes fadeInBackground{0%{opacity:0}to{opacity:1}}.show-modal{animation:fadeInModal .3s ease-in-out}@keyframes fadeInModal{0%{opacity:0;scale:.95}to{opacity:1;scale:1}}.hide-modal-background{animation:fadeOutBackground .2s ease-in-out}@keyframes fadeOutBackground{0%{opacity:1}to{opacity:0}}.hide-modal{animation:fadeOutModal .2s ease-in-out}@keyframes fadeOutModal{0%{opacity:1;scale:1}to{opacity:0;scale:.95}}.modal-camera-content{overflow:hidden;text-align:center;border:unset;height:100%;background-color:#2a2a2a;display:flex;justify-content:center}.camera-modal-canvas{max-width:100%;max-height:100%;margin-top:auto;margin-bottom:auto}.modal-svg-submit-button{background-color:green}.modal-svg-submit-button:hover{background-color:#007500}.modal-svg-submit-button:active{background-color:#006500}.modal-svg-submit-disabled{pointer-events:none;background-color:#747474}.modal-svg-close-button{height:1.56em;padding-top:.37em;padding-bottom:0;background-color:#c13e3e}.modal-svg-close-button:hover{background-color:#b43434}.modal-svg-close-button:active{background-color:#972929}.modal-svg-close-icon{width:80%;height:80%}.modal-svg-camera-button{height:1.6em;padding-top:.38em;padding-bottom:0}.modal-svg-camera-icon{height:76%}.modal-svg-refresh-icon{height:105%}.modal-svg-refresh-button{height:1.66em;padding-top:.11em;padding-bottom:.21em}.input-button-container{position:relative;z-index:1}.inside-right{position:absolute;right:calc(10% + .35em);bottom:.85em}.inside-left{position:absolute;left:calc(10% + .35em);bottom:.85em}.outside-left{position:absolute;right:calc(11px - .55em);bottom:.88em}.outside-right{position:absolute;left:calc(11px - .55em);bottom:.88em}#upload-images-icon{position:absolute;pointer-events:none;width:1.45em;height:1.45em;left:.11em;bottom:.08em;filter:brightness(0) saturate(100%) invert(43%) sepia(0%) saturate(740%) hue-rotate(77deg) brightness(99%) contrast(92%)}#upload-gifs-icon{position:absolute;pointer-events:none;width:1.5em;height:1.48em;left:.07em;bottom:.08em;filter:brightness(0) saturate(100%) invert(49%) sepia(0%) saturate(2586%) hue-rotate(12deg) brightness(93%) contrast(90%)}#upload-audio-icon{position:absolute;pointer-events:none;width:1.21em;height:1.21em;left:.17em;bottom:.2em;filter:brightness(0) saturate(100%) invert(15%) sepia(0%) saturate(337%) hue-rotate(125deg) brightness(91%) contrast(94%);transform:scaleX(.95)}#camera-icon{position:absolute;pointer-events:none;width:1.21em;height:1.21em;left:.23em;bottom:.2em;filter:brightness(0) saturate(100%) invert(52%) sepia(0%) saturate(161%) hue-rotate(164deg) brightness(91%) contrast(92%);transform:scaleX(.95)}#upload-mixed-files-icon{position:absolute;pointer-events:none;width:1.21em;height:1.21em;left:.25em;bottom:.2em;filter:brightness(0) saturate(100%) invert(53%) sepia(0%) saturate(36%) hue-rotate(74deg) brightness(98%) contrast(93%);transform:scaleX(.95)}#interim-text{color:gray}#microphone-button{padding-top:.5px}.outer-button-container>#microphone-button{padding-bottom:1px}#microphone-icon{position:absolute;pointer-events:none;width:1.21em;height:1.21em;left:.25em;bottom:.25em}.default-microphone-icon{filter:brightness(0) saturate(100%) invert(32%) sepia(0%) saturate(924%) hue-rotate(46deg) brightness(95%) contrast(99%)}.active-microphone-icon{filter:brightness(0) saturate(100%) invert(10%) sepia(97%) saturate(7495%) hue-rotate(0deg) brightness(101%) contrast(107%);border-radius:10px}.command-microphone-icon{filter:brightness(0) saturate(100%) invert(42%) sepia(96%) saturate(1067%) hue-rotate(77deg) brightness(99%) contrast(102%)}.unsupported-microphone{display:none}#submit-icon{height:100%;filter:brightness(0) saturate(100%) invert(32%) sepia(0%) saturate(924%) hue-rotate(46deg) brightness(95%) contrast(99%);width:1.21em}#stop-icon{background-color:#acacac;position:absolute;width:.95em;height:.95em;left:.35em;bottom:.35em;border-radius:2px}.submit-button-enlarged{scale:1.1;margin-right:.3em;margin-left:.3em}.loading-submit-button{position:relative;left:calc(-9990px + .275em);width:.22em;height:.22em;border-radius:5px;background-color:#848484;color:#848484;box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484;animation:loading-submit-button 1.5s infinite linear;bottom:-.75em}@keyframes loading-submit-button{0%{box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}16.667%{box-shadow:9990px -6px #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}33.333%{box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}50%{box-shadow:9990px 0 #848484,calc(9990px + .44em) -6px 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}66.667%{box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}83.333%{box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) -6px 0 0 #848484}to{box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}}.input-button{border-radius:4px;cursor:pointer;margin-bottom:.2em;-webkit-user-select:none;user-select:none}.input-button-svg{width:1.65em;height:1.65em}.input-button-svg-text{padding:1px;height:1.65em;display:flex}.input-button-svg-text>svg{padding:.22rem}.input-button-svg-text>div{margin-left:2px}.input-button:hover,.input-button:focus-visible{background-color:#9c9c9c2e}.input-button:active{background-color:#9c9c9c5e}.input-button:active:not(:hover){background-color:transparent}.loading-button{cursor:auto}.loading-button:hover{background-color:unset}.text-button{filter:unset!important;display:flex;justify-content:center;align-items:center;margin-left:4px;margin-right:4px;height:1.6em;width:max-content}#custom-icon{height:100%;width:1.2em}.custom-button-container-default{color:#505050}.custom-button-container-default>.dropup-menu-item-icon{color:unset}.custom-button-container-default>svg{filter:brightness(0) saturate(100%) invert(39%) sepia(1%) saturate(0%) hue-rotate(83deg) brightness(93%) contrast(90%)}.custom-button-container-default>.dropup-menu-item-icon>svg{position:absolute;left:.2em}.custom-button-container-active{background-color:#edf7ff;color:#0285ff}.custom-button-container-active:hover,.custom-button-container-active:focus-visible{background-color:#def0ff}.custom-button-container-active:active{background-color:#d2eaff}.custom-button-container-active>svg{filter:brightness(0) saturate(100%) invert(32%) sepia(34%) saturate(4196%) hue-rotate(196deg) brightness(107%) contrast(104%)}.custom-button-container-disabled{color:#aeaeae;cursor:auto}.custom-button-container-disabled>div{pointer-events:none}.custom-button-container-disabled:hover,.custom-button-container-disabled:focus-visible{background-color:transparent}.custom-button-container-disabled:active{background-color:transparent}.custom-button-container-disabled>svg{filter:brightness(0) saturate(100%) invert(67%) sepia(0%) saturate(818%) hue-rotate(28deg) brightness(102%) contrast(100%)}#text-input-container{background-color:#fff;width:80%;display:flex;border:1px solid #0000001a;border-radius:5px;margin-top:.8em;margin-bottom:.8em;box-shadow:#959da533 0 1px 12px;overflow-y:auto;max-height:200px;position:relative}.text-input-container-left-adjustment{margin-left:1.5em}.text-input-container-right-adjustment{margin-right:1.5em}.text-input-container-left-small-adjustment{margin-left:1.1em}.text-input-container-left-small-adjustment>.outside-left{right:calc(14px - .55em)}.text-input-container-right-small-adjustment{margin-right:1.1em}.text-input-container-right-small-adjustment>.outside-right{left:calc(14px - .55em)}#text-input{text-align:left;outline:none;word-wrap:break-word;line-break:auto}.text-input-styling{padding:.4em .5em;overflow:overlay;width:100%}.text-input-inner-left-adjustment{padding-left:2.2em}.text-input-inner-right-adjustment{padding-right:2em}.text-input-disabled{pointer-events:none;-webkit-user-select:none;user-select:none}[contenteditable]:empty:before{content:attr(deep-chat-placeholder-text);pointer-events:none}[contenteditable][textcolor]:empty:before{color:gray}.outside-right>#dropup-menu,.inside-right>#dropup-menu{right:0}#dropup-icon{position:absolute;pointer-events:none;width:1.16em;height:1.2em;left:.265em;bottom:.43em;filter:brightness(0) saturate(100%) invert(54%) sepia(0%) saturate(724%) hue-rotate(6deg) brightness(92%) contrast(90%)}.dropup-button>*{pointer-events:none}#dropup-menu{background-color:#fff;position:absolute;transform:translateY(-100%);border-radius:5px;z-index:1;top:-.49em;box-shadow:#0003 -1px 2px 10px,#0000001a 0 2px 4px;cursor:pointer;-webkit-user-select:none;user-select:none}.dropup-menu-item{height:1.4em;padding:.28em .84em .28em .35em;display:flex;position:relative}.dropup-menu-item:hover,.dropup-menu-item:focus-visible{background-color:#f3f3f3}.dropup-menu-item:active{background-color:#ebebeb}.dropup-menu-item:active:not(:hover){background-color:transparent}.dropup-menu-item:first-child{padding-top:.49em;border-top-left-radius:inherit;border-top-right-radius:inherit}.dropup-menu-item:last-child{padding-bottom:.45em;border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.dropup-menu-item-icon{width:1.39em;position:relative}.dropup-menu-item-icon>svg{bottom:0!important;top:0!important;margin-bottom:auto;margin-top:auto}#dropup-menu-item-icon-element-custom{position:absolute;pointer-events:none;width:1.21em;height:1.21em;left:.28em;filter:brightness(0) saturate(100%) invert(15%) sepia(0%) saturate(337%) hue-rotate(125deg) brightness(91%) contrast(94%)}.dropup-menu-item-text{margin-left:.56em;margin-top:.08em;width:max-content}#input{width:100%;display:inline-flex;text-align:center;margin-left:auto;margin-right:auto;margin-top:auto;position:relative;justify-content:center}#chat-view{height:100%;display:grid;grid-template-columns:100%}::-webkit-scrollbar{width:9px;height:9px}::-webkit-scrollbar-thumb{background-color:#d0d0d0;border-radius:5px}::-webkit-scrollbar-track{background-color:#f2f2f2}.deep-chat-web-model-button{margin-top:10px;margin-bottom:5px;margin-left:1px}:host{all:initial;display:table-cell}#container{height:inherit;width:inherit;overflow:hidden}";
var Ba = Object.defineProperty,
  w = function w(n, e, t, i) {
    for (var s = void 0, r = n.length - 1, o; r >= 0; r--) (o = n[r]) && (s = o(e, t, s) || s);
    return s && Ba(e, t, s), s;
  };
var S = /*#__PURE__*/function (_ss) {
  function S() {
    var _this97;
    _classCallCheck(this, S);
    _this97 = _callSuper(this, S), _this97.getMessages = function () {
      return [];
    }, _this97.submitUserMessage = function () {
      return console.warn("submitUserMessage failed - please wait for chat view to render before calling this property.");
    }, _this97.addMessage = function () {
      return console.warn("addMessage failed - please wait for chat view to render before calling this property.");
    }, _this97.updateMessage = function () {}, _this97.clearMessages = function () {}, _this97.focusInput = function () {
      return ai.focusFromParentElement(_this97._elementRef);
    }, _this97.refreshMessages = function () {}, _this97.scrollToBottom = function () {}, _this97.disableSubmitButton = function () {}, _this97.setPlaceholderText = function () {}, _this97._hasBeenRendered = !1, _this97._auxiliaryStyleApplied = !1, _this97._elementRef = document.createElement("div"), _this97._elementRef.id = "container", _this97.attachShadow({
      mode: "open"
    }).appendChild(_this97._elementRef), Ht.apply(Da, _this97.shadowRoot), setTimeout(function () {
      _this97._hasBeenRendered || _this97.onRender();
    }, 20);
    return _this97;
  }
  _inherits(S, _ss);
  return _createClass(S, [{
    key: "changeToChatView",
    value: function changeToChatView() {
      this._activeService && (this._activeService.validateKeyProperty = !1), this.onRender();
    }
    // prettier-ignore
  }, {
    key: "onRender",
    value: function onRender() {
      var _this$_childElement;
      bi.attemptAppendStyleSheetToHead(this.style), te.processConnect(this), (!this._activeService || this._activeService.demo) && (this._activeService = ea.create(this)), this.auxiliaryStyle && !this._auxiliaryStyleApplied && (Ht.apply(this.auxiliaryStyle, this.shadowRoot), this._auxiliaryStyleApplied = !0), Ht.applyDefaultStyleToComponent(this.style, this.chatStyle), te.checkForContainerStyles(this, this._elementRef), this._activeService.key && this._activeService.validateKeyProperty ? gi.render(this._elementRef, this.changeToChatView.bind(this), this._activeService) : !(this._activeService instanceof G) || this._activeService.key ? ((_this$_childElement = this._childElement) !== null && _this$_childElement !== void 0 ? _this$_childElement : this._childElement = this.children[0], Ms.render(this, this._elementRef, this._activeService, this._childElement)) : this._activeService instanceof G && V.render(this._elementRef, this.changeToChatView.bind(this), this._activeService), this._hasBeenRendered || yi.onRender(this), this._hasBeenRendered = !0;
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      si.chat = void 0;
    }
  }]);
}(ss);
w([x("object")], S.prototype, "connect");
w([x("object")], S.prototype, "directConnection");
w([x("object")], S.prototype, "webModel");
w([x("object")], S.prototype, "requestBodyLimits");
w([x("function")], S.prototype, "requestInterceptor");
w([x("function")], S.prototype, "responseInterceptor");
w([x("function")], S.prototype, "validateInput");
w([x("function")], S.prototype, "loadHistory");
w([x("object")], S.prototype, "chatStyle");
w([x("object")], S.prototype, "attachmentContainerStyle");
w([x("object")], S.prototype, "dropupStyles");
w([x("object")], S.prototype, "inputAreaStyle");
w([x("object")], S.prototype, "textInput");
w([x("object")], S.prototype, "submitButtonStyles");
w([x("object")], S.prototype, "customButtons");
w([x("string")], S.prototype, "auxiliaryStyle");
w([x("array")], S.prototype, "history");
w([x("object")], S.prototype, "introMessage");
w([x("object")], S.prototype, "avatars");
w([x("object")], S.prototype, "names");
w([x("object")], S.prototype, "displayLoadingBubble");
w([x("object")], S.prototype, "errorMessages");
w([x("object")], S.prototype, "messageStyles");
w([x("object")], S.prototype, "textToSpeech");
w([x("object")], S.prototype, "speechToText");
w([x("object")], S.prototype, "images");
w([x("object")], S.prototype, "gifs");
w([x("object")], S.prototype, "camera");
w([x("object")], S.prototype, "audio");
w([x("object")], S.prototype, "microphone");
w([x("object")], S.prototype, "mixedFiles");
w([x("object")], S.prototype, "dragAndDrop");
w([x("object")], S.prototype, "introPanelStyle");
w([x("object")], S.prototype, "htmlClassUtilities");
w([x("object")], S.prototype, "remarkable");
w([x("object")], S.prototype, "focusMode");
w([x("function")], S.prototype, "onMessage");
w([x("function")], S.prototype, "onClearMessages");
w([x("function")], S.prototype, "onComponentRender");
w([x("function")], S.prototype, "onError");
w([x("object")], S.prototype, "demo");
w([x("object")], S.prototype, "_insertKeyViewStyles");
customElements.define("deep-chat", S);
export { S as DeepChat };

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/js/forms.js":
/*!*************************!*\
  !*** ./src/js/forms.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
 // If page is Login or Register, validate form

if (document.getElementById('login-page') || document.getElementById('register-page')) {
  window.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    var formType = form.name;
    var formFields = [];

    if (formType === 'login') {
      formFields = ['email', 'password'];
    } else {
      formFields = ['fname', 'lname', 'email', 'password', 'confirm_password'];
    }

    var validator = new _utils__WEBPACK_IMPORTED_MODULE_0__.FormValidator(form, formType, formFields);
    validator.initialize();
  });
}

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");




var heroSliderInit = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var slidesData, sliderWrapper;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.callApi)('GET', 'banners');

          case 2:
            slidesData = _context.sent;
            sliderWrapper = document.querySelector('#hero_section #slider');
            slidesData.forEach(function (slide) {
              var imgParent = document.createElement('div');
              var sliderImg = document.createElement('img');
              imgParent.className = 'offer_img';
              sliderImg.src = "../..".concat(slide.bannerImageUrl);
              sliderImg.alt = slide.bannerImageAlt;
              imgParent.appendChild(sliderImg);
              sliderWrapper.appendChild(imgParent);
            });
            $('#hero_section #slider').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              accessibility: true,
              autoplay: true,
              arrows: true,
              dots: true,
              pauseOnHover: false,
              infinite: true,
              nextArrow: '<button type="button" class="slick-next">Next</button>',
              prevArrow: '<button type="button" class="slick-prev">Prev</button>',
              responsive: [{
                breakpoint: 767,
                settings: {
                  arrows: false,
                  dots: true
                }
              }]
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function heroSliderInit() {
    return _ref.apply(this, arguments);
  };
}();

var categorySectionInit = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var categories, categoryWrapper;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.callApi)('GET', 'categories');

          case 2:
            categories = _context2.sent;
            categoryWrapper = document.querySelector('#category_section .container');
            categories.forEach(function (category, index) {
              // Parent
              var categoryParent = document.createElement('div');
              categoryParent.className = "category_item flex_view_xs middle ".concat(index % 2 === 0 ? 'odd' : 'even'); // Image

              var categoryImgParent = document.createElement('div');
              categoryImgParent.className = 'category_img';
              var categoryImg = document.createElement('img');
              categoryImg.src = "../..".concat(category.imageUrl);
              categoryImg.alt = "../..".concat(category.key);
              categoryImgParent.appendChild(categoryImg); // Details

              var categoryDetailParent = document.createElement('div');
              categoryDetailParent.className = 'category_detail';
              var categoryTitleElem = document.createElement('h3');
              categoryTitleElem.classList = 'category_title';
              var categoryDescrElem = document.createElement('p');
              categoryDescrElem.classList = 'descr';
              var categoryButtonElem = document.createElement('a');
              categoryButtonElem.classList = 'btn explore_btn'; // Set URL of Button

              var pathArr = window.location.pathname.split('/');
              pathArr[pathArr.length - 1] = 'product-listing.html';
              var productPagePath = pathArr.join('/');
              categoryButtonElem.href = "".concat(window.location.origin).concat(productPagePath, "?category=").concat(category.id); // Append to DOM

              categoryTitleElem.appendChild(document.createTextNode(category.name));
              categoryDescrElem.appendChild(document.createTextNode(category.description));
              categoryButtonElem.appendChild(document.createTextNode("Explore ".concat(category.key)));
              categoryDetailParent.appendChild(categoryTitleElem);
              categoryDetailParent.appendChild(categoryDescrElem);
              categoryDetailParent.appendChild(categoryButtonElem);
              categoryParent.appendChild(categoryImgParent);
              categoryParent.appendChild(categoryDetailParent);
              categoryWrapper.appendChild(categoryParent);
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function categorySectionInit() {
    return _ref2.apply(this, arguments);
  };
}();

if (document.URL.includes("home.html")) {
  heroSliderInit();
  categorySectionInit();
}

;

/***/ }),

/***/ "./src/js/product-list.js":
/*!********************************!*\
  !*** ./src/js/product-list.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");



var activeCategory = null;
var isMobileDevice = screen.width < 768; // Toggle Categoy Products on Click

var showCategoryProducts = function showCategoryProducts(productID, categoryLI, categoryName) {
  var allCategoryLI = Array.from(document.querySelectorAll('.category_ul .category_item'));
  var allProducts = Array.from(document.querySelectorAll(".product_list .product_item"));
  var matchedProducts = Array.from(document.querySelectorAll(".product_list .product_item[data-categoryid=\"".concat(productID, "\"]")));
  var activeCategoryDropdown = document.querySelector('.active_category');
  var categoryUL = document.querySelector('.side_nav .category_ul');

  if (activeCategory === productID) {
    // Show all Products on Category Click toggle
    activeCategory = null;
    allCategoryLI.forEach(function (category) {
      return category.classList.remove('active');
    });
    allProducts.forEach(function (product) {
      return product.classList.remove('hide');
    });
    categoryLI.classList.remove('active');
    activeCategoryDropdown.innerHTML = 'Select Category';
  } else {
    // Show Category Products on Category Click toggle
    activeCategory = productID;
    allCategoryLI.forEach(function (category) {
      return category.classList.remove('active');
    });
    allProducts.forEach(function (product) {
      return product.classList.add('hide');
    });
    matchedProducts.forEach(function (product) {
      return product.classList.remove('hide');
    });
    categoryLI.classList.add('active');
    activeCategoryDropdown.innerText = categoryName;
  }

  isMobileDevice ? categoryUL.classList.add('hide') : null;
}; // Toggle Category Dropdown


var toggleCategoryDropdownXS = function toggleCategoryDropdownXS(dropdownElem) {
  dropdownElem.classList.toggle('active');
  document.querySelector('.side_nav .category_ul').classList.toggle('hide');
}; // Fetch Categoy List in Sidebar


var showCategoryList = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var categoryList, categorySection, sideNavParent, sideNavUl, categoryParam, elem, target;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.callApi)('GET', 'categories');

          case 2:
            categoryList = _context.sent;
            categorySection = document.querySelector('#category_list .section_wrapper');
            sideNavParent = document.createElement('aside');
            sideNavParent.className = "side_nav";
            sideNavUl = document.createElement('ul');
            sideNavUl.className = "category_ul ".concat(isMobileDevice ? 'hide' : '');
            categoryParam = new URL(location.href).searchParams.get('category');
            categoryList.forEach(function (category, index) {
              var sideNavListItem = document.createElement('li');
              sideNavListItem.className = "category_item ".concat(category.id === categoryParam ? 'active' : null);
              sideNavListItem.appendChild(document.createTextNode("".concat(category.name)));
              sideNavListItem.setAttribute('data-id', category.id);
              sideNavListItem.addEventListener('click', function () {
                return showCategoryProducts(category.id, sideNavListItem, category.name);
              });
              sideNavUl.appendChild(sideNavListItem);
            });
            sideNavParent.appendChild(sideNavUl);
            categorySection.appendChild(sideNavParent); // Creating dropdown for mobile view

            elem = document.createElement('p');
            elem.className = "active_category xs-show";
            elem.innerText = 'Select Category';
            target = document.querySelector('.category_ul');
            target.parentNode.insertBefore(elem, target);
            elem.addEventListener('click', function () {
              return toggleCategoryDropdownXS(elem);
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function showCategoryList() {
    return _ref.apply(this, arguments);
  };
}(); // Fetch Product List


var showProductList = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var products, categoryWrapper, productsUl, categoryParam, _activeCategory;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.callApi)('GET', 'products');

          case 2:
            products = _context2.sent;
            categoryWrapper = document.querySelector('#category_list .section_wrapper');
            productsUl = document.createElement('ul');
            productsUl.className = "product_list flex_view_xs";
            products.forEach(function (product, index) {
              // LI
              var productLi = document.createElement('li');
              productLi.className = "product_item";
              productLi.setAttribute('data-categoryid', product.category); // Inner

              var productWrapper = document.createElement('div');
              productWrapper.className = "inner"; // Product Title

              var productTitle = document.createElement('h3');
              productTitle.className = "title";
              productTitle.appendChild(document.createTextNode(product.name));
              productWrapper.appendChild(productTitle); // Product Image

              var productImage = document.createElement('img');
              productImage.src = "../..".concat(product.imageURL);
              productImage.className = "xs-hide";
              productImage.alt = "../..".concat(product.name);
              productWrapper.appendChild(productImage); // Product Description

              var productDescription = document.createElement('div');
              productDescription.className = "descr xs-hide";
              var productDescriptionText = document.createElement('p');
              productDescriptionText.appendChild(document.createTextNode(product.description));
              productDescription.appendChild(productDescriptionText);
              productWrapper.appendChild(productDescription); // Buy Product Button

              var productBuy = document.createElement('div');
              productBuy.className = "buy flex_view middle space-between xs-hide";
              var productPrice = document.createElement('p');
              productPrice.className = "price";
              productPrice.appendChild(document.createTextNode("MRP Rs. ".concat(product.price)));
              productBuy.appendChild(productPrice);
              var productBuyBtn = document.createElement('button');
              productBuyBtn.className = "btn buy_btn";
              productBuyBtn.setAttribute('data-id', product.id);
              productBuyBtn.appendChild(document.createTextNode("Buy Now"));
              productBuy.appendChild(productBuyBtn);
              productWrapper.appendChild(productBuy); // Adding wrapper to Mobile Device

              var productMobileWrapper = document.createElement('div');
              productMobileWrapper.className = "descr_xs flex_view_xs xs-show"; // Image XS

              var productMobileImagewrapper = document.createElement('div');
              productMobileImagewrapper.className = "product_img_xs";
              var productImageXS = document.createElement('img');
              productImageXS.src = "../..".concat(product.imageURL);
              productImageXS.className = "xs-show";
              productImageXS.alt = "../..".concat(product.name);
              productMobileImagewrapper.appendChild(productImageXS);
              productMobileWrapper.appendChild(productMobileImagewrapper);
              productWrapper.appendChild(productMobileWrapper); // Description XS

              var productDescriptionXS = document.createElement('div');
              productDescriptionXS.className = "product_descr_xs";
              var productDescriptionTextXs = document.createElement('p');
              productDescriptionTextXs.appendChild(document.createTextNode(product.description));
              productDescriptionXS.appendChild(productDescriptionTextXs);
              productMobileWrapper.appendChild(productDescriptionXS); // Buy Button XS

              var productBuyBtnXS = document.createElement('button');
              productBuyBtnXS.className = "btn buy_btn_xs btn-full";
              productBuyBtnXS.setAttribute('data-id', product.id);
              productBuyBtnXS.appendChild(document.createTextNode("Buy Now @ MRP Rs. ".concat(product.price)));
              productDescriptionXS.appendChild(productBuyBtnXS); // Buy Button Click

              productBuyBtn.addEventListener('click', function (event) {
                return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.addToCart)(product, event);
              });
              productBuyBtnXS.addEventListener('click', function (event) {
                return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.addToCart)(product, event);
              }); // Append All Elements

              productLi.appendChild(productWrapper);
              productsUl.appendChild(productLi);
            });
            categoryWrapper.appendChild(productsUl); // iF there is Category Parameter in URL string, load products of that category

            categoryParam = new URL(location.href).searchParams.get('category');

            if (categoryParam) {
              _activeCategory = document.querySelector(".category_ul .category_item[data-id=\"".concat(categoryParam, "\"]"));

              _activeCategory.click();
            }

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function showProductList() {
    return _ref2.apply(this, arguments);
  };
}();

var loadProductListingPage = /*#__PURE__*/function () {
  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return showCategoryList();

          case 2:
            _context3.next = 4;
            return showProductList();

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function loadProductListingPage() {
    return _ref3.apply(this, arguments);
  };
}();

if (document.URL.includes("product-listing.html")) {
  loadProductListingPage(); // Toggle Category Side nav visibility based on window resize

  window.addEventListener('resize', function () {
    isMobileDevice = screen.width < 768;
    var categoryUL = document.querySelector('.side_nav .category_ul');
    isMobileDevice ? categoryUL.classList.add('hide') : categoryUL.classList.remove('hide');
  });
}

;

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormValidator": () => (/* binding */ FormValidator),
/* harmony export */   "addToCart": () => (/* binding */ addToCart),
/* harmony export */   "calculateTotalCartPrice": () => (/* binding */ calculateTotalCartPrice),
/* harmony export */   "callApi": () => (/* binding */ callApi),
/* harmony export */   "toggleCartVisibility": () => (/* binding */ toggleCartVisibility),
/* harmony export */   "updateCart": () => (/* binding */ updateCart),
/* harmony export */   "updateCartCounts": () => (/* binding */ updateCartCounts),
/* harmony export */   "updateCartQuantity": () => (/* binding */ updateCartQuantity),
/* harmony export */   "updateLocalStorage": () => (/* binding */ updateLocalStorage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);






var cart; // First Check Cart items in Localstorage

var currentCartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).allItems : [];

if (currentCartItems.length > 0) {
  cart = {
    allItems: currentCartItems
  };
} else {
  cart = {
    allItems: []
  };
}

var updateLocalStorage = function updateLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
};
var FormValidator = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(function FormValidator(form, _formType, formFields) {
  var _this = this;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, FormValidator);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "initialize", function () {
    // Highlight the inputs when they're focused and have value
    _this.formFields.forEach(function (input) {
      var inputElem = document.querySelector("#".concat(input));
      inputElem.addEventListener("input", function () {
        return _this.highlightInput(inputElem);
      });
    });

    _this.validateOnSubmit();

    _this.validateOnInput();
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "highlightInput", function (input) {
    input.value.length > 0 ? input.classList.add("highlight") : input.classList.remove("highlight");
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "validateOnSubmit", function () {
    _this.form.addEventListener("submit", function (event) {
      event.preventDefault();

      _this.formFields.forEach(function (field) {
        _this.validateField(_this.formType, document.querySelector("#".concat(field)));
      });

      var formHasError = document.querySelectorAll("form .form_group.has_error").length > 0;

      if (!formHasError) {
        _this.form.submit();
      }
    });
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "validateOnInput", function () {
    _this.formFields.forEach(function (field) {
      var inputElem = document.querySelector("#".concat(field));
      inputElem.addEventListener("input", function (event) {
        _this.validateField(_this.formType, inputElem);
      });
    });
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "validateField", function (formType, field) {
    _this.checkRequired(field);

    _this.checkEmail(field);

    _this.checkPassword(field);

    if (formType === "register") {
      _this.checkName(field);
    }
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "checkRequired", function (field) {
    if (field.value.trim() === "") {
      // For Dynamically getting field name to display error. E.G: "Email" can't be empty
      // const fieldID = field.id[0].toUpperCase() + field.id.substring(1);
      var errors = "Required";

      _this.showErrorMessages(field, errors);
    } else {
      _this.fieldValid(field);
    }
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "checkName", function (field) {
    if (field.id.includes("name") && field.value.trim().length > 0) {
      var nameRegex = /[0-9]/;

      if (nameRegex.test(field.value)) {
        var errors = "Name can't have number";

        _this.showErrorMessages(field, errors);
      }
    }
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "checkEmail", function (field) {
    if (field.type === "email") {
      var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var isEmailValid = emailRegex.test(field.value.trim());

      if (!isEmailValid) {
        var errors = "Please enter a valid email address";

        _this.showErrorMessages(field, errors);
      } else {
        _this.fieldValid(field);
      }
    }
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "checkPassword", function (field) {
    // For login page, only required field validation is done for password field.
    // Complete Password Type validation is done for Signup page.
    if (field.type === "password" && _this.formType !== "login") {
      var password = document.querySelector("form #password").value.trim();
      var isPasswordEmpty = password.length === 0;

      if (field.id.includes("confirm")) {
        // Check for Confirm Password Field
        var confrmPwd = field.value.trim();

        if (!isPasswordEmpty && confrmPwd !== password) {
          var errors = "Password and confirmation password do not match.";

          _this.showErrorMessages(field, errors);
        } else if (confrmPwd === "") {
          var _errors = "Required";

          _this.showErrorMessages(field, _errors);
        } else {
          _this.fieldValid(field);
        }
      } else {
        var pwdLength = 6;
        var numbers = /[0-9]/;
        var alphabet = /[a-zA-Z]/;
        var spaces = /\s/;
        var _errors2 = [];

        if (!alphabet.test(field.value)) {
          _errors2.push("Password must contain an alphabet");
        }

        if (!numbers.test(field.value)) {
          _errors2.push("Password must contain a number");
        }

        if (spaces.test(field.value)) {
          _errors2.push("Password cannnot have white spaces");
        }

        if (field.value.length < pwdLength) {
          _errors2.push("Password must be of minimum 6 characters");
        }

        _errors2.length > 0 ? _this.showErrorMessages(field, _errors2) : _this.fieldValid(field);
      }
    }
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "fieldValid", function (field) {
    field.closest(".form_group").classList.remove("has_error");
    var errorParent = field.closest(".form_group").querySelector(".error_msg");
    errorParent.innerHTML = "";
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "showErrorMessages", function (field, errors) {
    field.closest(".form_group").classList.add("has_error");
    var errorParent = field.closest(".form_group").querySelector(".error_msg");
    errorParent.innerHTML = "";

    if (Array.isArray(errors)) {
      errors.forEach(function (error) {
        var errorElem = document.createElement("p");
        errorElem.appendChild(document.createTextNode(error));
        errorParent.appendChild(errorElem);
      });
    } else {
      var errorElem = document.createElement("p");
      errorElem.appendChild(document.createTextNode(errors));
      errorParent.appendChild(errorElem);
    } // Focus on 1st Invalid input on form Submit


    if (event.type === "submit") {
      document.querySelector("form .form_group.has_error input").focus();
    }
  });

  this.form = form;
  this.formType = _formType;
  this.formFields = formFields;
});
var callApi = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee(reqType, endpoint) {
    var baseUrl, response, options, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            baseUrl = "http://localhost:5000";
            _context.prev = 1;

            if (!(reqType === "GET")) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return fetch("".concat(baseUrl, "/").concat(endpoint));

          case 5:
            response = _context.sent;
            _context.next = 12;
            break;

          case 8:
            options = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
              }
            };
            _context.next = 11;
            return fetch("".concat(baseUrl, "/").concat(endpoint), options);

          case 11:
            response = _context.sent;

          case 12:
            _context.next = 14;
            return response.json();

          case 14:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 18]]);
  }));

  return function callApi(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Toggle Side Cart Overlay on Click in Header

var toggleCartVisibility = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee2() {
    var cartBtn, cartClose, shopBtn, checkoutBtn;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cartBtn = document.querySelector("#site_header .cart_btn");
            cartClose = document.querySelector(".sidecart .close");
            shopBtn = document.querySelector(".sidecart .footer_btns button#shop_btn");
            checkoutBtn = document.querySelector(".sidecart .footer_btns button#checkout_btn");

            if (shopBtn) {
              shopBtn.onclick = function () {
                document.body.classList.remove("show_sidecart");
              };
            }

            if (checkoutBtn) {
              checkoutBtn.onclick = function () {
                document.body.classList.remove("show_sidecart");
              };
            }

            cartBtn.onclick = function () {
              document.body.classList.toggle("show_sidecart");
            }; // Close Cart on close icon click


            cartClose.onclick = function () {
              document.body.classList.remove("show_sidecart");
            };

            updateCart();

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function toggleCartVisibility() {
    return _ref2.apply(this, arguments);
  };
}();
var calculateTotalCartPrice = function calculateTotalCartPrice() {
  var cartStorageItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).allItems : [];
  var totalCartPrice = cartStorageItems.map(function (product) {
    return product.price;
  }).reduce(function (total, amount) {
    return total + amount;
  });
  var totalPriceElem = document.querySelector(".sidecart .footer_btns #checkout_btn .totalCartAmount .amount");
  totalPriceElem.innerHTML = "".concat(totalCartPrice);
  return totalCartPrice;
};
var updateCartQuantity = function updateCartQuantity() {
  var type = event.target.textContent;
  var productID = event.target.closest(".qty_div").getAttribute("data-id");
  var cartStorageItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).allItems : [];

  if (type === "+") {
    var matchedProduct = cartStorageItems.find(function (product) {
      return product.id === productID;
    });
    cart.allItems = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(cart.allItems), [matchedProduct]);
  } else {
    var isSingleProduct = cartStorageItems.filter(function (product) {
      return product.id === productID;
    }).length === 1;

    if (isSingleProduct) {
      var newCartItems = cart.allItems.filter(function (product) {
        return product.id !== productID;
      });
      cart.allItems = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(newCartItems);
    } else {
      var matchedItems = cartStorageItems.filter(function (product) {
        if (product.id === productID) {
          return product;
        }
      });
      matchedItems.pop();
      var restItems = cartStorageItems.filter(function (product) {
        return product.id !== productID;
      });
      cart.allItems = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(restItems), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(matchedItems));
    }
  }

  updateLocalStorage();
  updateCart();
};
var updateCart = function updateCart() {
  var cartStorageItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).allItems : [];
  var isCartEmpty = cartStorageItems.length === 0;
  var emptyNote = document.querySelector(".sidecart .cart_note");
  var cartItemList = document.querySelector(".sidecart .cart_item_list");
  var cartItemListUl = document.querySelector(".sidecart .cart_item_list ul");
  var lowestPriceElem = document.querySelector(".sidecart .lowest_price");
  var promoText = document.querySelector(".sidecart .footer_btns .note");
  var shopBtn = document.querySelector(".sidecart .footer_btns #shop_btn");
  var checkoutBtn = document.querySelector(".sidecart .footer_btns #checkout_btn");
  cartItemListUl.innerHTML = "";

  if (!isCartEmpty) {
    emptyNote.classList.add("hide");
    cartItemList.classList.remove("hide");
    lowestPriceElem.classList.remove("hide");
    shopBtn.classList.add("hide");
    checkoutBtn.classList.remove("hide");
    promoText.classList.remove("hide");
    var cartItemsToDisplay = [];
    var itemFound;
    cartStorageItems.forEach(function (cartItem) {
      itemFound = cartItemsToDisplay.find(function (item) {
        return item.id === cartItem.id;
      });

      if (!itemFound) {
        cartItemsToDisplay.push(cartItem);
      }
    });
    cartItemsToDisplay.forEach(function (item) {
      var getCurrentQuantity = cart.allItems.filter(function (storageItem) {
        return storageItem.id === item.id;
      }).length;
      var documentFragment = document.createRange().createContextualFragment("\n                <li class=\"cart_item flex_view_xs end space-between\">\n                    <div class=\"item_info flex_view_xs middle\">\n                        <div class=\"cart_img\">\n                            <img src=\"../..".concat(item.imageURL, "\" alt=\"").concat(item.name, "\">\n                        </div>\n\n                        <div class=\"info\">\n                            <h3 class=\"title\">").concat(item.name, "</h3>\n                            <div class=\"qty_div flex_view_xs middle\" data-id=\"").concat(item.id, "\">\n                                <button class=\"btn decrease_qty\">-</button>\n                                <span class=\"qty_count\">").concat(getCurrentQuantity, "</span>\n                                <button class=\"btn increase_qty\">+</button>\n                                <span class=\"multiply\">x</span>\n                                <span class=\"item_price\">Rs. <span class=\"price\">").concat(item.price, "</span></span>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"item_total_price\">Rs. ").concat(item.price * getCurrentQuantity, "</div>\n                </li>\n            "));
      cartItemListUl.appendChild(documentFragment);
    });
    calculateTotalCartPrice();
  } else {
    emptyNote.classList.remove("hide");
    cartItemList.classList.add("hide");
    lowestPriceElem.classList.add("hide");
    shopBtn.classList.remove("hide");
    checkoutBtn.classList.add("hide");
    promoText.classList.add("hide");
  }

  var qtyDecreaseBtns = Array.from(document.querySelectorAll(".sidecart .item_info .btn"));
  qtyDecreaseBtns.forEach(function (qtyBtn) {
    qtyBtn.addEventListener("click", updateCartQuantity);
  });
  updateLocalStorage();
  updateCartCounts();
};
var updateCartCounts = function updateCartCounts() {
  var headerCartCount = document.querySelector("header .cart_btn .cart_count");
  var sideCartCount = document.querySelector(".sidecart .count");
  var cartStorageItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).allItems : [];
  headerCartCount.innerHTML = cartStorageItems.length;
  sideCartCount.innerHTML = cartStorageItems.length;
};
var addToCart = function addToCart(product, event) {
  // check if product already exists in cart
  var matchedProductFromCart = cart.allItems.filter(function (item) {
    return item.id === product.id;
  });
  var productAlreadyExist = matchedProductFromCart.length > 0;
  productAlreadyExist ? matchedProductFromCart[0].quantity += 1 : product.quantity = 1;
  cart.allItems = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(cart.allItems), [product]);
  updateCartCounts();
  updateLocalStorage();
  alert("".concat(product.name, " added to cart successfully"));
  updateCart();
};
toggleCartVisibility();

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _js_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/forms */ "./src/js/forms.js");
/* harmony import */ var _js_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/home */ "./src/js/home.js");
/* harmony import */ var _js_product_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/product-list */ "./src/js/product-list.js");
 // import './js/forms'




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/Tile.js":
/*!******************************!*\
  !*** ./resources/js/Tile.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tile)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tile = /*#__PURE__*/function () {
  // correct, present, absent
  function Tile(position) {
    _classCallCheck(this, Tile);

    _defineProperty(this, "letter", "");

    _defineProperty(this, "status", "");

    this.position = position;
  }

  _createClass(Tile, [{
    key: "fill",
    value: function fill(key) {
      this.letter = key.toLowerCase();
    }
  }, {
    key: "empty",
    value: function empty() {
      this.letter = "";
    }
  }], [{
    key: "updateStatusesForRow",
    value: function updateStatusesForRow(row, theWord) {
      theWord = theWord.split(""); // check for correct letters...

      var _iterator = _createForOfIteratorHelper(row),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tile = _step.value;

          if (theWord[tile.position] === tile.letter) {
            tile.status = "correct";
            theWord[tile.position] = null;
          }
        } // check for present letters...

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(row),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _tile = _step2.value;

          if (theWord.includes(_tile.letter)) {
            _tile.status = "present";
            theWord[theWord.indexOf(_tile.letter)] = null;
          }
        } // anything that remains is absent...

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = _createForOfIteratorHelper(row.filter(function (tile) {
        return !tile.status;
      })),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _tile2 = _step3.value;
          _tile2.status = "absent";
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }]);

  return Tile;
}();



/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./resources/js/game.js");

document.addEventListener('alpine:init', function () {
  Alpine.data('game', function () {
    return _game__WEBPACK_IMPORTED_MODULE_0__["default"];
  });
});

/***/ }),

/***/ "./resources/js/game.js":
/*!******************************!*\
  !*** ./resources/js/game.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tile */ "./resources/js/Tile.js");
/* harmony import */ var _words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./words */ "./resources/js/words.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  guessesAllowed: 3,
  theWord: _words__WEBPACK_IMPORTED_MODULE_1__.theWords[Math.floor(Math.random() * _words__WEBPACK_IMPORTED_MODULE_1__.theWords.length)],
  currentRowIndex: 0,
  state: "active",
  errors: false,
  message: "",
  letters: ["QWERTYUIOP".split(""), "ASDFGHJKL".split(""), ["Enter"].concat(_toConsumableArray("ZXCVBNM".split("")), ["Backspace"])],

  get currentRow() {
    return this.board[this.currentRowIndex];
  },

  get currentGuess() {
    return this.currentRow.map(function (tile) {
      return tile.letter;
    }).join("");
  },

  get remainingGuesses() {
    return this.guessesAllowed - this.currentRowIndex - 1;
  },

  init: function init() {
    var _this = this;

    this.board = Array.from({
      length: this.guessesAllowed
    }, function () {
      return Array.from({
        length: _this.theWord.length
      }, function (item, index) {
        return new _Tile__WEBPACK_IMPORTED_MODULE_0__["default"](index);
      });
    });
  },
  onKeyPress: function onKeyPress(key) {
    this.message = "";
    this.errors = false;

    if (/^[A-z]$/.test(key)) {
      this.fillTile(key);
    } else if (key === "Backspace") {
      this.emptyTile();
    } else if (key === "Enter") {
      this.submitGuess();
    }
  },
  fillTile: function fillTile(key) {
    var _iterator = _createForOfIteratorHelper(this.currentRow),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var tile = _step.value;

        if (!tile.letter) {
          tile.fill(key);
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },
  emptyTile: function emptyTile() {
    var _iterator2 = _createForOfIteratorHelper(_toConsumableArray(this.currentRow).reverse()),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var tile = _step2.value;

        if (tile.letter) {
          tile.empty();
          break;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  },
  submitGuess: function submitGuess() {
    if (this.currentGuess.length < this.theWord.length) {
      return;
    }

    if (!_words__WEBPACK_IMPORTED_MODULE_1__.allWords.includes(this.currentGuess.toUpperCase())) {
      this.errors = true;
      this.message = "Invalid word...";
      return;
    }

    _Tile__WEBPACK_IMPORTED_MODULE_0__["default"].updateStatusesForRow(this.currentRow, this.theWord);

    if (this.currentGuess === this.theWord) {
      this.state = "complete";
      this.message = "You Win!";
    } else if (this.remainingGuesses === 0) {
      this.state = "complete";
      this.message = "Game Over. You Lose. (".concat(this.theWord, ")");
    } else {
      this.currentRowIndex++;
      this.message = "Incorrect";
    }
  },
  matchingTileForKey: function matchingTileForKey(key) {
    return this.board.flat().filter(function (tile) {
      return tile.status;
    }).sort(function (t1, t2) {
      return t2.status === "correct";
    }).find(function (tile) {
      return tile.letter === key.toLowerCase();
    });
  }
});

/***/ }),

/***/ "./resources/js/words.js":
/*!*******************************!*\
  !*** ./resources/js/words.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allWords": () => (/* binding */ allWords),
/* harmony export */   "theWords": () => (/* binding */ theWords)
/* harmony export */ });
var theWords = ["cat", "dog", "kid", "mom", "dad", "big", "hat"];
var allWords = ["AAH", "AAL", "AAS", "ABA", "ABB", "ABO", "ABS", "ABY", "ACE", "ACH", "ACT", "ADD", "ADO", "ADS", "ADZ", "AFF", "AFT", "AGA", "AGE", "AGO", "AGS", "AHA", "AHI", "AHS", "AIA", "AID", "AIL", "AIM", "AIN", "AIR", "AIS", "AIT", "AKA", "AKE", "ALA", "ALB", "ALE", "ALF", "ALL", "ALP", "ALS", "ALT", "AMA", "AMI", "AMP", "AMU", "ANA", "AND", "ANE", "ANI", "ANN", "ANT", "ANY", "APE", "APO", "APP", "APT", "ARB", "ARC", "ARD", "ARE", "ARF", "ARK", "ARM", "ARS", "ART", "ARY", "ASH", "ASK", "ASP", "ASS", "ATE", "ATT", "AUA", "AUE", "AUF", "AUK", "AVA", "AVE", "AVO", "AWA", "AWE", "AWL", "AWN", "AXE", "AYE", "AYS", "AYU", "AZO", "BAA", "BAC", "BAD", "BAG", "BAH", "BAL", "BAM", "BAN", "BAP", "BAR", "BAS", "BAT", "BAY", "BED", "BEE", "BEG", "BEL", "BEN", "BES", "BET", "BEY", "BEZ", "BIB", "BID", "BIG", "BIN", "BIO", "BIS", "BIT", "BIZ", "BOA", "BOB", "BOD", "BOG", "BOH", "BOI", "BOK", "BON", "BOO", "BOP", "BOR", "BOS", "BOT", "BOW", "BOX", "BOY", "BRA", "BRO", "BRR", "BRU", "BUB", "BUD", "BUG", "BUM", "BUN", "BUR", "BUS", "BUT", "BUY", "BYE", "BYS", "CAA", "CAB", "CAD", "CAG", "CAM", "CAN", "CAP", "CAR", "CAT", "CAW", "CAY", "CAZ", "CEE", "CEL", "CEP", "CHA", "CHE", "CHI", "CID", "CIG", "CIS", "CIT", "CLY", "COB", "COD", "COG", "COL", "CON", "COO", "COP", "COR", "COS", "COT", "COW", "COX", "COY", "COZ", "CRU", "CRY", "CUB", "CUD", "CUE", "CUM", "CUP", "CUR", "CUT", "CUZ", "CWM", "DAB", "DAD", "DAE", "DAG", "DAH", "DAK", "DAL", "DAM", "DAN", "DAP", "DAS", "DAW", "DAY", "DEB", "DEE", "DEF", "DEG", "DEI", "DEL", "DEN", "DEV", "DEW", "DEX", "DEY", "DIB", "DID", "DIE", "DIF", "DIG", "DIM", "DIN", "DIP", "DIS", "DIT", "DIV", "DOB", "DOC", "DOD", "DOE", "DOF", "DOG", "DOH", "DOL", "DOM", "DON", "DOO", "DOP", "DOR", "DOS", "DOT", "DOW", "DOY", "DRY", "DSO", "DUB", "DUD", "DUE", "DUG", "DUH", "DUI", "DUN", "DUO", "DUP", "DUX", "DYE", "DZO", "EAN", "EAR", "EAS", "EAT", "EAU", "EBB", "ECH", "ECO", "ECU", "EDH", "EDS", "EEK", "EEL", "EEN", "EFF", "EFS", "EFT", "EGG", "EGO", "EHS", "EIK", "EKE", "ELD", "ELF", "ELK", "ELL", "ELM", "ELS", "ELT", "EME", "EMO", "EMS", "EMU", "END", "ENE", "ENG", "ENS", "EON", "ERA", "ERE", "ERF", "ERG", "ERK", "ERN", "ERR", "ERS", "ESS", "EST", "ETA", "ETH", "EUK", "EVE", "EVO", "EWE", "EWK", "EWT", "EXO", "EYE", "FAA", "FAB", "FAD", "FAE", "FAG", "FAH", "FAN", "FAP", "FAR", "FAS", "FAT", "FAW", "FAX", "FAY", "FED", "FEE", "FEG", "FEH", "FEM", "FEN", "FER", "FES", "FET", "FEU", "FEW", "FEY", "FEZ", "FIB", "FID", "FIE", "FIG", "FIL", "FIN", "FIR", "FIT", "FIX", "FIZ", "FLU", "FLY", "FOB", "FOE", "FOG", "FOH", "FON", "FOP", "FOR", "FOU", "FOX", "FOY", "FRA", "FRO", "FRY", "FUB", "FUD", "FUG", "FUM", "FUN", "FUR", "GAB", "GAD", "GAE", "GAG", "GAL", "GAM", "GAN", "GAP", "GAR", "GAS", "GAT", "GAU", "GAY", "GED", "GEE", "GEL", "GEM", "GEN", "GEO", "GET", "GEY", "GHI", "GIB", "GID", "GIE", "GIF", "GIG", "GIN", "GIO", "GIP", "GIS", "GIT", "GJU", "GNU", "GOA", "GOB", "GOD", "GOE", "GON", "GOO", "GOR", "GOS", "GOT", "GOV", "GOX", "GOY", "GUB", "GUE", "GUL", "GUM", "GUN", "GUP", "GUR", "GUS", "GUT", "GUV", "GUY", "GYM", "GYP", "HAD", "HAE", "HAG", "HAH", "HAJ", "HAM", "HAN", "HAO", "HAP", "HAS", "HAT", "HAW", "HAY", "HEH", "HEM", "HEN", "HEP", "HER", "HES", "HET", "HEW", "HEX", "HEY", "HIC", "HID", "HIE", "HIM", "HIN", "HIP", "HIS", "HIT", "HMM", "HOA", "HOB", "HOC", "HOD", "HOE", "HOG", "HOH", "HOI", "HOM", "HON", "HOO", "HOP", "HOS", "HOT", "HOW", "HOX", "HOY", "HUB", "HUE", "HUG", "HUH", "HUI", "HUM", "HUN", "HUP", "HUT", "HYE", "HYP", "ICE", "ICH", "ICK", "ICY", "IDE", "IDS", "IFF", "IFS", "IGG", "ILK", "ILL", "IMP", "INK", "INN", "INS", "ION", "IOS", "IRE", "IRK", "ISH", "ISM", "ISO", "ITA", "ITS", "IVY", "IWI", "JAB", "JAG", "JAI", "JAK", "JAM", "JAP", "JAR", "JAW", "JAY", "JEE", "JET", "JEU", "JEW", "JIB", "JIG", "JIN", "JIZ", "JOB", "JOE", "JOG", "JOL", "JOR", "JOT", "JOW", "JOY", "JUD", "JUG", "JUN", "JUS", "JUT", "KAB", "KAE", "KAF", "KAI", "KAK", "KAM", "KAS", "KAT", "KAW", "KAY", "KEA", "KEB", "KED", "KEF", "KEG", "KEN", "KEP", "KET", "KEX", "KEY", "KHI", "KID", "KIF", "KIN", "KIP", "KIR", "KIS", "KIT", "KOA", "KOB", "KOI", "KON", "KOP", "KOR", "KOS", "KOW", "KUE", "KYE", "KYU", "LAB", "LAC", "LAD", "LAG", "LAH", "LAM", "LAP", "LAR", "LAS", "LAT", "LAV", "LAW", "LAX", "LAY", "LEA", "LED", "LEE", "LEG", "LEI", "LEK", "LEP", "LES", "LET", "LEU", "LEV", "LEW", "LEX", "LEY", "LEZ", "LIB", "LID", "LIE", "LIG", "LIN", "LIP", "LIS", "LIT", "LOB", "LOD", "LOG", "LOO", "LOP", "LOR", "LOS", "LOT", "LOU", "LOW", "LOX", "LOY", "LUD", "LUG", "LUM", "LUR", "LUV", "LUX", "LUZ", "LYE", "LYM", "MAA", "MAC", "MAD", "MAE", "MAG", "MAK", "MAL", "MAM", "MAN", "MAP", "MAR", "MAS", "MAT", "MAW", "MAX", "MAY", "MED", "MEE", "MEG", "MEL", "MEM", "MEN", "MES", "MET", "MEU", "MEW", "MHO", "MIB", "MIC", "MID", "MIG", "MIL", "MIM", "MIR", "MIS", "MIX", "MIZ", "MNA", "MOA", "MOB", "MOC", "MOD", "MOE", "MOG", "MOI", "MOL", "MOM", "MON", "MOO", "MOP", "MOR", "MOS", "MOT", "MOU", "MOW", "MOY", "MOZ", "MUD", "MUG", "MUM", "MUN", "MUS", "MUT", "MUX", "MYC", "NAB", "NAE", "NAG", "NAH", "NAM", "NAN", "NAP", "NAS", "NAT", "NAW", "NAY", "NEB", "NED", "NEE", "NEF", "NEG", "NEK", "NEP", "NET", "NEW", "NIB", "NID", "NIE", "NIL", "NIM", "NIP", "NIS", "NIT", "NIX", "NOB", "NOD", "NOG", "NOH", "NOM", "NON", "NOO", "NOR", "NOS", "NOT", "NOW", "NOX", "NOY", "NTH", "NUB", "NUN", "NUR", "NUS", "NUT", "NYE", "NYS", "OAF", "OAK", "OAR", "OAT", "OBA", "OBE", "OBI", "OBO", "OBS", "OCA", "OCH", "ODA", "ODD", "ODE", "ODS", "OES", "OFF", "OFT", "OHM", "OHO", "OHS", "OIK", "OIL", "OKA", "OKE", "OLD", "OLE", "OLM", "OMS", "ONE", "ONO", "ONS", "ONY", "OOF", "OOH", "OOM", "OON", "OOP", "OOR", "OOS", "OOT", "OPE", "OPS", "OPT", "ORA", "ORB", "ORC", "ORD", "ORE", "ORF", "ORS", "ORT", "OSE", "OUD", "OUK", "OUP", "OUR", "OUS", "OUT", "OVA", "OWE", "OWL", "OWN", "OWT", "OXO", "OXY", "OYE", "OYS", "PAC", "PAD", "PAH", "PAL", "PAM", "PAN", "PAP", "PAR", "PAS", "PAT", "PAV", "PAW", "PAX", "PAY", "PEA", "PEC", "PED", "PEE", "PEG", "PEH", "PEN", "PEP", "PER", "PES", "PET", "PEW", "PHI", "PHO", "PHT", "PIA", "PIC", "PIE", "PIG", "PIN", "PIP", "PIR", "PIS", "PIT", "PIU", "PIX", "PLU", "PLY", "POA", "POD", "POH", "POI", "POL", "POM", "POO", "POP", "POS", "POT", "POW", "POX", "POZ", "PRE", "PRO", "PRY", "PSI", "PST", "PUB", "PUD", "PUG", "PUH", "PUL", "PUN", "PUP", "PUR", "PUS", "PUT", "PUY", "PYA", "PYE", "PYX", "QAT", "QIS", "QUA", "RAD", "RAG", "RAH", "RAI", "RAJ", "RAM", "RAN", "RAP", "RAS", "RAT", "RAW", "RAX", "RAY", "REB", "REC", "RED", "REE", "REF", "REG", "REH", "REI", "REM", "REN", "REO", "REP", "RES", "RET", "REV", "REW", "REX", "REZ", "RHO", "RHY", "RIA", "RIB", "RID", "RIF", "RIG", "RIM", "RIN", "RIP", "RIT", "RIZ", "ROB", "ROC", "ROD", "ROE", "ROK", "ROM", "ROO", "ROT", "ROW", "RUB", "RUC", "RUD", "RUE", "RUG", "RUM", "RUN", "RUT", "RYA", "RYE", "SAB", "SAC", "SAD", "SAE", "SAG", "SAI", "SAL", "SAM", "SAN", "SAP", "SAR", "SAT", "SAU", "SAV", "SAW", "SAX", "SAY", "SAZ", "SEA", "SEC", "SED", "SEE", "SEG", "SEI", "SEL", "SEN", "SER", "SET", "SEW", "SEX", "SEY", "SEZ", "SHA", "SHE", "SHH", "SHY", "SIB", "SIC", "SIF", "SIK", "SIM", "SIN", "SIP", "SIR", "SIS", "SIT", "SIX", "SKA", "SKI", "SKY", "SLY", "SMA", "SNY", "SOB", "SOC", "SOD", "SOG", "SOH", "SOL", "SOM", "SON", "SOP", "SOS", "SOT", "SOU", "SOV", "SOW", "SOX", "SOY", "SPA", "SPY", "SRI", "STY", "SUB", "SUD", "SUE", "SUI", "SUK", "SUM", "SUN", "SUP", "SUQ", "SUR", "SUS", "SWY", "SYE", "SYN", "TAB", "TAD", "TAE", "TAG", "TAI", "TAJ", "TAK", "TAM", "TAN", "TAO", "TAP", "TAR", "TAS", "TAT", "TAU", "TAV", "TAW", "TAX", "TAY", "TEA", "TEC", "TED", "TEE", "TEF", "TEG", "TEL", "TEN", "TES", "TET", "TEW", "TEX", "THE", "THO", "THY", "TIC", "TID", "TIE", "TIG", "TIL", "TIN", "TIP", "TIS", "TIT", "TIX", "TOC", "TOD", "TOE", "TOG", "TOM", "TON", "TOO", "TOP", "TOR", "TOT", "TOW", "TOY", "TRY", "TSK", "TUB", "TUG", "TUI", "TUM", "TUN", "TUP", "TUT", "TUX", "TWA", "TWO", "TWP", "TYE", "TYG", "UDO", "UDS", "UEY", "UFO", "UGH", "UGS", "UKE", "ULE", "ULU", "UMM", "UMP", "UMU", "UNI", "UNS", "UPO", "UPS", "URB", "URD", "URE", "URN", "URP", "USE", "UTA", "UTE", "UTS", "UTU", "UVA", "VAC", "VAE", "VAG", "VAN", "VAR", "VAS", "VAT", "VAU", "VAV", "VAW", "VEE", "VEG", "VET", "VEX", "VIA", "VID", "VIE", "VIG", "VIM", "VIN", "VIS", "VLY", "VOE", "VOL", "VOR", "VOW", "VOX", "VUG", "VUM", "WAB", "WAD", "WAE", "WAG", "WAI", "WAN", "WAP", "WAR", "WAS", "WAT", "WAW", "WAX", "WAY", "WEB", "WED", "WEE", "WEM", "WEN", "WET", "WEX", "WEY", "WHA", "WHO", "WHY", "WIG", "WIN", "WIS", "WIT", "WIZ", "WOE", "WOF", "WOG", "WOK", "WON", "WOO", "WOP", "WOS", "WOT", "WOW", "WOX", "WRY", "WUD", "WUS", "WYE", "WYN", "XIS", "YAD", "YAE", "YAG", "YAH", "YAK", "YAM", "YAP", "YAR", "YAW", "YAY", "YEA", "YEH", "YEN", "YEP", "YES", "YET", "YEW", "YEX", "YGO", "YID", "YIN", "YIP", "YOB", "YOD", "YOK", "YOM", "YON", "YOS", "YOU", "YOW", "YUG", "YUK", "YUM", "YUP", "YUS", "ZAG", "ZAP", "ZAS", "ZAX", "ZEA", "ZED", "ZEE", "ZEK", "ZEL", "ZEP", "ZEX", "ZHO", "ZIG", "ZIN", "ZIP", "ZIT", "ZIZ", "ZOA", "ZOL", "ZOO", "ZOS", "ZUZ", "ZZZ"];

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
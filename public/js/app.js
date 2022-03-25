(()=>{"use strict";var t,A={405:()=>{function t(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return A(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var O=0,E=function(){};return{s:E,n:function(){return O>=t.length?{done:!0}:{done:!1,value:t[O++]}},e:function(t){throw t},f:E}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o=!0,i=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){i=!0,n=t},f:function(){try{o||null==r.return||r.return()}finally{if(i)throw n}}}}function A(t,A){(null==A||A>t.length)&&(A=t.length);for(var e=0,r=new Array(A);e<A;e++)r[e]=t[e];return r}function e(t,A){for(var e=0;e<A.length;e++){var r=A[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,A,e){return A in t?Object.defineProperty(t,A,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[A]=e,t}var O=function(){function A(t){!function(t,A){if(!(t instanceof A))throw new TypeError("Cannot call a class as a function")}(this,A),r(this,"letter",""),r(this,"status",""),this.position=t}var O,E,n;return O=A,n=[{key:"updateStatusesForRow",value:function(A,e){e=e.split("");var r,O=t(A);try{for(O.s();!(r=O.n()).done;){var E=r.value;e[E.position]===E.letter&&(E.status="correct",e[E.position]=null)}}catch(t){O.e(t)}finally{O.f()}var n,o=t(A.filter((function(t){return!t.status})));try{for(o.s();!(n=o.n()).done;){var i=n.value;e.includes(i.letter)&&(i.status="present",e[i.position]=null)}}catch(t){o.e(t)}finally{o.f()}var I,S=t(A.filter((function(t){return!t.status})));try{for(S.s();!(I=S.n()).done;)I.value.status="absent"}catch(t){S.e(t)}finally{S.f()}}}],(E=[{key:"fill",value:function(t){this.letter=t.toLowerCase()}},{key:"empty",value:function(){this.letter=""}}])&&e(O.prototype,E),n&&e(O,n),Object.defineProperty(O,"prototype",{writable:!1}),A}(),E=["cat","dog","kid","mom","dad","big","hat","pig","boy","yay","can","arm","ran","run","sun","fun","hit","sit"],n=["AAH","AAL","AAS","ABA","ABB","ABO","ABS","ABY","ACE","ACH","ACT","ADD","ADO","ADS","ADZ","AFF","AFT","AGA","AGE","AGO","AGS","AHA","AHI","AHS","AIA","AID","AIL","AIM","AIN","AIR","AIS","AIT","AKA","AKE","ALA","ALB","ALE","ALF","ALL","ALP","ALS","ALT","AMA","AMI","AMP","AMU","ANA","AND","ANE","ANI","ANN","ANT","ANY","APE","APO","APP","APT","ARB","ARC","ARD","ARE","ARF","ARK","ARM","ARS","ART","ARY","ASH","ASK","ASP","ASS","ATE","ATT","AUA","AUE","AUF","AUK","AVA","AVE","AVO","AWA","AWE","AWL","AWN","AXE","AYE","AYS","AYU","AZO","BAA","BAC","BAD","BAG","BAH","BAL","BAM","BAN","BAP","BAR","BAS","BAT","BAY","BED","BEE","BEG","BEL","BEN","BES","BET","BEY","BEZ","BIB","BID","BIG","BIN","BIO","BIS","BIT","BIZ","BOA","BOB","BOD","BOG","BOH","BOI","BOK","BON","BOO","BOP","BOR","BOS","BOT","BOW","BOX","BOY","BRA","BRO","BRR","BRU","BUB","BUD","BUG","BUM","BUN","BUR","BUS","BUT","BUY","BYE","BYS","CAA","CAB","CAD","CAG","CAM","CAN","CAP","CAR","CAT","CAW","CAY","CAZ","CEE","CEL","CEP","CHA","CHE","CHI","CID","CIG","CIS","CIT","CLY","COB","COD","COG","COL","CON","COO","COP","COR","COS","COT","COW","COX","COY","COZ","CRU","CRY","CUB","CUD","CUE","CUM","CUP","CUR","CUT","CUZ","CWM","DAB","DAD","DAE","DAG","DAH","DAK","DAL","DAM","DAN","DAP","DAS","DAW","DAY","DEB","DEE","DEF","DEG","DEI","DEL","DEN","DEV","DEW","DEX","DEY","DIB","DID","DIE","DIF","DIG","DIM","DIN","DIP","DIS","DIT","DIV","DOB","DOC","DOD","DOE","DOF","DOG","DOH","DOL","DOM","DON","DOO","DOP","DOR","DOS","DOT","DOW","DOY","DRY","DSO","DUB","DUD","DUE","DUG","DUH","DUI","DUN","DUO","DUP","DUX","DYE","DZO","EAN","EAR","EAS","EAT","EAU","EBB","ECH","ECO","ECU","EDH","EDS","EEK","EEL","EEN","EFF","EFS","EFT","EGG","EGO","EHS","EIK","EKE","ELD","ELF","ELK","ELL","ELM","ELS","ELT","EME","EMO","EMS","EMU","END","ENE","ENG","ENS","EON","ERA","ERE","ERF","ERG","ERK","ERN","ERR","ERS","ESS","EST","ETA","ETH","EUK","EVE","EVO","EWE","EWK","EWT","EXO","EYE","FAA","FAB","FAD","FAE","FAG","FAH","FAN","FAP","FAR","FAS","FAT","FAW","FAX","FAY","FED","FEE","FEG","FEH","FEM","FEN","FER","FES","FET","FEU","FEW","FEY","FEZ","FIB","FID","FIE","FIG","FIL","FIN","FIR","FIT","FIX","FIZ","FLU","FLY","FOB","FOE","FOG","FOH","FON","FOP","FOR","FOU","FOX","FOY","FRA","FRO","FRY","FUB","FUD","FUG","FUM","FUN","FUR","GAB","GAD","GAE","GAG","GAL","GAM","GAN","GAP","GAR","GAS","GAT","GAU","GAY","GED","GEE","GEL","GEM","GEN","GEO","GET","GEY","GHI","GIB","GID","GIE","GIF","GIG","GIN","GIO","GIP","GIS","GIT","GJU","GNU","GOA","GOB","GOD","GOE","GON","GOO","GOR","GOS","GOT","GOV","GOX","GOY","GUB","GUE","GUL","GUM","GUN","GUP","GUR","GUS","GUT","GUV","GUY","GYM","GYP","HAD","HAE","HAG","HAH","HAJ","HAM","HAN","HAO","HAP","HAS","HAT","HAW","HAY","HEH","HEM","HEN","HEP","HER","HES","HET","HEW","HEX","HEY","HIC","HID","HIE","HIM","HIN","HIP","HIS","HIT","HMM","HOA","HOB","HOC","HOD","HOE","HOG","HOH","HOI","HOM","HON","HOO","HOP","HOS","HOT","HOW","HOX","HOY","HUB","HUE","HUG","HUH","HUI","HUM","HUN","HUP","HUT","HYE","HYP","ICE","ICH","ICK","ICY","IDE","IDS","IFF","IFS","IGG","ILK","ILL","IMP","INK","INN","INS","ION","IOS","IRE","IRK","ISH","ISM","ISO","ITA","ITS","IVY","IWI","JAB","JAG","JAI","JAK","JAM","JAP","JAR","JAW","JAY","JEE","JET","JEU","JEW","JIB","JIG","JIN","JIZ","JOB","JOE","JOG","JOL","JOR","JOT","JOW","JOY","JUD","JUG","JUN","JUS","JUT","KAB","KAE","KAF","KAI","KAK","KAM","KAS","KAT","KAW","KAY","KEA","KEB","KED","KEF","KEG","KEN","KEP","KET","KEX","KEY","KHI","KID","KIF","KIN","KIP","KIR","KIS","KIT","KOA","KOB","KOI","KON","KOP","KOR","KOS","KOW","KUE","KYE","KYU","LAB","LAC","LAD","LAG","LAH","LAM","LAP","LAR","LAS","LAT","LAV","LAW","LAX","LAY","LEA","LED","LEE","LEG","LEI","LEK","LEP","LES","LET","LEU","LEV","LEW","LEX","LEY","LEZ","LIB","LID","LIE","LIG","LIN","LIP","LIS","LIT","LOB","LOD","LOG","LOO","LOP","LOR","LOS","LOT","LOU","LOW","LOX","LOY","LUD","LUG","LUM","LUR","LUV","LUX","LUZ","LYE","LYM","MAA","MAC","MAD","MAE","MAG","MAK","MAL","MAM","MAN","MAP","MAR","MAS","MAT","MAW","MAX","MAY","MED","MEE","MEG","MEL","MEM","MEN","MES","MET","MEU","MEW","MHO","MIB","MIC","MID","MIG","MIL","MIM","MIR","MIS","MIX","MIZ","MNA","MOA","MOB","MOC","MOD","MOE","MOG","MOI","MOL","MOM","MON","MOO","MOP","MOR","MOS","MOT","MOU","MOW","MOY","MOZ","MUD","MUG","MUM","MUN","MUS","MUT","MUX","MYC","NAB","NAE","NAG","NAH","NAM","NAN","NAP","NAS","NAT","NAW","NAY","NEB","NED","NEE","NEF","NEG","NEK","NEP","NET","NEW","NIB","NID","NIE","NIL","NIM","NIP","NIS","NIT","NIX","NOB","NOD","NOG","NOH","NOM","NON","NOO","NOR","NOS","NOT","NOW","NOX","NOY","NTH","NUB","NUN","NUR","NUS","NUT","NYE","NYS","OAF","OAK","OAR","OAT","OBA","OBE","OBI","OBO","OBS","OCA","OCH","ODA","ODD","ODE","ODS","OES","OFF","OFT","OHM","OHO","OHS","OIK","OIL","OKA","OKE","OLD","OLE","OLM","OMS","ONE","ONO","ONS","ONY","OOF","OOH","OOM","OON","OOP","OOR","OOS","OOT","OPE","OPS","OPT","ORA","ORB","ORC","ORD","ORE","ORF","ORS","ORT","OSE","OUD","OUK","OUP","OUR","OUS","OUT","OVA","OWE","OWL","OWN","OWT","OXO","OXY","OYE","OYS","PAC","PAD","PAH","PAL","PAM","PAN","PAP","PAR","PAS","PAT","PAV","PAW","PAX","PAY","PEA","PEC","PED","PEE","PEG","PEH","PEN","PEP","PER","PES","PET","PEW","PHI","PHO","PHT","PIA","PIC","PIE","PIG","PIN","PIP","PIR","PIS","PIT","PIU","PIX","PLU","PLY","POA","POD","POH","POI","POL","POM","POO","POP","POS","POT","POW","POX","POZ","PRE","PRO","PRY","PSI","PST","PUB","PUD","PUG","PUH","PUL","PUN","PUP","PUR","PUS","PUT","PUY","PYA","PYE","PYX","QAT","QIS","QUA","RAD","RAG","RAH","RAI","RAJ","RAM","RAN","RAP","RAS","RAT","RAW","RAX","RAY","REB","REC","RED","REE","REF","REG","REH","REI","REM","REN","REO","REP","RES","RET","REV","REW","REX","REZ","RHO","RHY","RIA","RIB","RID","RIF","RIG","RIM","RIN","RIP","RIT","RIZ","ROB","ROC","ROD","ROE","ROK","ROM","ROO","ROT","ROW","RUB","RUC","RUD","RUE","RUG","RUM","RUN","RUT","RYA","RYE","SAB","SAC","SAD","SAE","SAG","SAI","SAL","SAM","SAN","SAP","SAR","SAT","SAU","SAV","SAW","SAX","SAY","SAZ","SEA","SEC","SED","SEE","SEG","SEI","SEL","SEN","SER","SET","SEW","SEX","SEY","SEZ","SHA","SHE","SHH","SHY","SIB","SIC","SIF","SIK","SIM","SIN","SIP","SIR","SIS","SIT","SIX","SKA","SKI","SKY","SLY","SMA","SNY","SOB","SOC","SOD","SOG","SOH","SOL","SOM","SON","SOP","SOS","SOT","SOU","SOV","SOW","SOX","SOY","SPA","SPY","SRI","STY","SUB","SUD","SUE","SUI","SUK","SUM","SUN","SUP","SUQ","SUR","SUS","SWY","SYE","SYN","TAB","TAD","TAE","TAG","TAI","TAJ","TAK","TAM","TAN","TAO","TAP","TAR","TAS","TAT","TAU","TAV","TAW","TAX","TAY","TEA","TEC","TED","TEE","TEF","TEG","TEL","TEN","TES","TET","TEW","TEX","THE","THO","THY","TIC","TID","TIE","TIG","TIL","TIN","TIP","TIS","TIT","TIX","TOC","TOD","TOE","TOG","TOM","TON","TOO","TOP","TOR","TOT","TOW","TOY","TRY","TSK","TUB","TUG","TUI","TUM","TUN","TUP","TUT","TUX","TWA","TWO","TWP","TYE","TYG","UDO","UDS","UEY","UFO","UGH","UGS","UKE","ULE","ULU","UMM","UMP","UMU","UNI","UNS","UPO","UPS","URB","URD","URE","URN","URP","USE","UTA","UTE","UTS","UTU","UVA","VAC","VAE","VAG","VAN","VAR","VAS","VAT","VAU","VAV","VAW","VEE","VEG","VET","VEX","VIA","VID","VIE","VIG","VIM","VIN","VIS","VLY","VOE","VOL","VOR","VOW","VOX","VUG","VUM","WAB","WAD","WAE","WAG","WAI","WAN","WAP","WAR","WAS","WAT","WAW","WAX","WAY","WEB","WED","WEE","WEM","WEN","WET","WEX","WEY","WHA","WHO","WHY","WIG","WIN","WIS","WIT","WIZ","WOE","WOF","WOG","WOK","WON","WOO","WOP","WOS","WOT","WOW","WOX","WRY","WUD","WUS","WYE","WYN","XIS","YAD","YAE","YAG","YAH","YAK","YAM","YAP","YAR","YAW","YAY","YEA","YEH","YEN","YEP","YES","YET","YEW","YEX","YGO","YID","YIN","YIP","YOB","YOD","YOK","YOM","YON","YOS","YOU","YOW","YUG","YUK","YUM","YUP","YUS","ZAG","ZAP","ZAS","ZAX","ZEA","ZED","ZEE","ZEK","ZEL","ZEP","ZEX","ZHO","ZIG","ZIN","ZIP","ZIT","ZIZ","ZOA","ZOL","ZOO","ZOS","ZUZ","ZZZ"];function o(t,A){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=I(t))||A&&t&&"number"==typeof t.length){e&&(t=e);var r=0,O=function(){};return{s:O,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:O}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var E,n=!0,o=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return n=t.done,t},e:function(t){o=!0,E=t},f:function(){try{n||null==e.return||e.return()}finally{if(o)throw E}}}}function i(t){return function(t){if(Array.isArray(t))return S(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||I(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,A){if(t){if("string"==typeof t)return S(t,A);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?S(t,A):void 0}}function S(t,A){(null==A||A>t.length)&&(A=t.length);for(var e=0,r=new Array(A);e<A;e++)r[e]=t[e];return r}const a={guessesAllowed:5,theWord:E[Math.floor(Math.random()*E.length)],currentRowIndex:0,state:"active",errors:!1,message:"",letters:["QWERTYUIOP".split(""),"ASDFGHJKL".split(""),["Enter"].concat(i("ZXCVBNM".split("")),["Backspace"])],get currentRow(){return this.board[this.currentRowIndex]},get currentGuess(){return this.currentRow.map((function(t){return t.letter})).join("")},get remainingGuesses(){return this.guessesAllowed-this.currentRowIndex-1},init:function(){var t=this;this.board=Array.from({length:this.guessesAllowed},(function(){return Array.from({length:t.theWord.length},(function(t,A){return new O(A)}))}))},onKeyPress:function(t){this.message="",this.errors=!1,/^[A-z]$/.test(t)?this.fillTile(t):"Backspace"===t?this.emptyTile():"Enter"===t&&this.submitGuess()},fillTile:function(t){var A,e=o(this.currentRow);try{for(e.s();!(A=e.n()).done;){var r=A.value;if(!r.letter){r.fill(t);break}}}catch(t){e.e(t)}finally{e.f()}},emptyTile:function(){var t,A=o(i(this.currentRow).reverse());try{for(A.s();!(t=A.n()).done;){var e=t.value;if(e.letter){e.empty();break}}}catch(t){A.e(t)}finally{A.f()}},submitGuess:function(){if(!(this.currentGuess.length<this.theWord.length)){if(!n.includes(this.currentGuess.toUpperCase()))return this.errors=!0,void(this.message="Invalid word...");O.updateStatusesForRow(this.currentRow,this.theWord),this.currentGuess===this.theWord?(this.state="complete",this.message="You Win!"):0===this.remainingGuesses?(this.state="complete",this.message="Game Over. You Lose. (".concat(this.theWord,")")):this.currentRowIndex++}},matchingTileForKey:function(t){return this.board.flat().filter((function(t){return t.status})).sort((function(t,A){return"correct"===A.status})).find((function(A){return A.letter===t.toLowerCase()}))}};document.addEventListener("alpine:init",(function(){Alpine.data("game",(function(){return a}))}));var U=function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))};window.addEventListener("load",U),window.addEventListener("resize",U),document.addEventListener("DOMContentLoaded",(function(){document.querySelector("main").style.maxHeight="calc(var(--vh, 1vh) * 90)"}))},662:()=>{}},e={};function r(t){var O=e[t];if(void 0!==O)return O.exports;var E=e[t]={exports:{}};return A[t](E,E.exports,r),E.exports}r.m=A,t=[],r.O=(A,e,O,E)=>{if(!e){var n=1/0;for(S=0;S<t.length;S++){for(var[e,O,E]=t[S],o=!0,i=0;i<e.length;i++)(!1&E||n>=E)&&Object.keys(r.O).every((t=>r.O[t](e[i])))?e.splice(i--,1):(o=!1,E<n&&(n=E));if(o){t.splice(S--,1);var I=O();void 0!==I&&(A=I)}}return A}E=E||0;for(var S=t.length;S>0&&t[S-1][2]>E;S--)t[S]=t[S-1];t[S]=[e,O,E]},r.o=(t,A)=>Object.prototype.hasOwnProperty.call(t,A),(()=>{var t={773:0,170:0};r.O.j=A=>0===t[A];var A=(A,e)=>{var O,E,[n,o,i]=e,I=0;if(n.some((A=>0!==t[A]))){for(O in o)r.o(o,O)&&(r.m[O]=o[O]);if(i)var S=i(r)}for(A&&A(e);I<n.length;I++)E=n[I],r.o(t,E)&&t[E]&&t[E][0](),t[E]=0;return r.O(S)},e=self.webpackChunk=self.webpackChunk||[];e.forEach(A.bind(null,0)),e.push=A.bind(null,e.push.bind(e))})(),r.O(void 0,[170],(()=>r(405)));var O=r.O(void 0,[170],(()=>r(662)));O=r.O(O)})();
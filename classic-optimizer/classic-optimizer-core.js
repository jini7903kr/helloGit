"use strict";
var ClassicOptimizer = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // scripts/html-entry.ts
  var html_entry_exports = {};
  __export(html_entry_exports, {
    ATTR_KO: () => ATTR_KO,
    CATEGORIES: () => CATEGORIES,
    CATEGORY_KO: () => CATEGORY_KO,
    EXECUTION_KO: () => EXECUTION_KO,
    FOOTWORK_TABLE: () => FOOTWORK_TABLE,
    QOE_KO: () => QOE_KO,
    SPOKEN: () => SPOKEN,
    attributeRules: () => attributeRules,
    formatPoints: () => formatPoints,
    optimizeProgram: () => optimizeProgram,
    tricks: () => tricks
  });

  // src/data/tricks.json
  var tricks_default = [
    {
      code: "CRA",
      name: "Crab",
      category: "JUMP",
      base: 1,
      tap: 0.7,
      under: 0.5,
      combo: 1.2,
      comboTap: 0.84,
      comboUnder: 0.6,
      qoe: {
        "3": 0.3,
        "2": 0.2,
        "1": 0.1,
        "0": 0,
        "-1": -0.1,
        "-2": -0.2,
        "-3": -0.3
      },
      distance: {
        "50cm": 0,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        Cross: 20
      },
      video: "https://youtu.be/yJs-txClLuk"
    },
    {
      code: "Kaz",
      name: "Kazaciok",
      category: "JUMP",
      base: 2.5,
      tap: 1.75,
      under: 1.25,
      combo: 3,
      comboTap: 2.1,
      comboUnder: 1.5,
      qoe: {
        "3": 0.75,
        "2": 0.5,
        "1": 0.25,
        "0": 0,
        "-1": -0.25,
        "-2": -0.5,
        "-3": -0.75
      },
      distance: {
        "50cm": 0,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        Cross: 20,
        Back: 30,
        Double: 20,
        Christie: 200
      },
      video: "https://www.youtube.com/watch"
    },
    {
      code: "WIP",
      name: "Wiper",
      category: "JUMP",
      base: 3,
      tap: 2.1,
      under: 1.5,
      combo: 3.6,
      comboTap: 2.52,
      comboUnder: 1.8,
      qoe: {
        "3": 0.9,
        "2": 0.6,
        "1": 0.3,
        "0": 0,
        "-1": -0.3,
        "-2": -0.6,
        "-3": -0.9
      },
      distance: {
        "50cm": 0,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        Toe: 20,
        Heel: 21,
        Sit: 20,
        Reverse: 15,
        Left: 0,
        Right: 0
      },
      video: "https://youtu.be/3Kpag94qiIk"
    },
    {
      code: "BUT",
      name: "Butterfly",
      category: "OTHERS",
      base: 3,
      tap: 2.1,
      under: 1.5,
      combo: 3.6,
      comboTap: 2.52,
      comboUnder: 1.8,
      qoe: {
        "3": 0.9,
        "2": 0.6,
        "1": 0.3,
        "0": 0,
        "-1": -0.3,
        "-2": -0.6,
        "-3": -0.9
      },
      distance: {
        "50cm": 5,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        Reverse: 20,
        Cross: 20,
        "2 Wheels HH": 15,
        "2 Wheels TT": 15
      },
      video: "https://youtu.be/Ac91wpOwuFI"
    },
    {
      code: "COB",
      name: "Cobra",
      category: "OTHERS",
      base: 2,
      tap: 1.4,
      under: 1,
      combo: 2.4,
      comboTap: 1.68,
      comboUnder: 1.2,
      qoe: {
        "3": 0.6,
        "2": 0.4,
        "1": 0.2,
        "0": 0,
        "-1": -0.2,
        "-2": -0.4,
        "-3": -0.6
      },
      distance: {
        "50cm": 10,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        Back: 20,
        Cross: 20,
        "2 Wheels TH": 15,
        Sit: 45
      },
      video: "https://youtu.be/UGQ9f6myDvQ"
    },
    {
      code: "EAG",
      name: "Eagle",
      category: "OTHERS",
      base: 1,
      tap: 0.7,
      under: 0.5,
      combo: 1.2,
      comboTap: 0.84,
      comboUnder: 0.6,
      qoe: {
        "3": 0.3,
        "2": 0.2,
        "1": 0.1,
        "0": 0,
        "-1": -0.1,
        "-2": -0.2,
        "-3": -0.3
      },
      distance: {
        "50cm": 0,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        Reverse: 20,
        Cross: 20,
        "5 Wheels": 10,
        "2 Wheels TH": 15,
        "2 Wheels HH": 15,
        "2 Wheels TT": 15
      },
      video: "https://youtu.be/7HYC_zdKSmQ"
    },
    {
      code: "IXS",
      name: "X",
      category: "OTHERS",
      base: 1.5,
      tap: 1.05,
      under: 0.75,
      combo: 1.8,
      comboTap: 1.26,
      comboUnder: 0.9,
      qoe: {
        "3": 0.45,
        "2": 0.3,
        "1": 0.15,
        "0": 0,
        "-1": -0.15,
        "-2": -0.3,
        "-3": -0.45
      },
      distance: {
        "50cm": 0,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        "2 Wheels HH": 15,
        "2 Wheels TT": 15,
        "2 Wheels TH": 15,
        Jump: 30
      },
      video: "https://youtu.be/vJGXm5T0fu8"
    },
    {
      code: "ZEA",
      name: "Z-Eagle",
      category: "OTHERS",
      base: 1.5,
      tap: 1.05,
      under: 0.75,
      combo: 1.8,
      comboTap: 1.26,
      comboUnder: 0.9,
      qoe: {
        "3": 0.45,
        "2": 0.3,
        "1": 0.15,
        "0": 0,
        "-1": -0.15,
        "-2": -0.3,
        "-3": -0.45
      },
      distance: {
        "50cm": 5,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        "5 Wheels": 5,
        "2 Wheels TH": 15,
        "2 Wheels HH": 15,
        "2 Wheels TT": 15
      },
      video: ""
    },
    {
      code: "FOO",
      name: "Footgun",
      category: "SITTING",
      base: 3,
      tap: 2.1,
      under: 1.5,
      combo: 3.6,
      comboTap: 2.52,
      comboUnder: 1.8,
      qoe: {
        "3": 0.9,
        "2": 0.6,
        "1": 0.3,
        "0": 0,
        "-1": -0.3,
        "-2": -0.6,
        "-3": -0.9
      },
      distance: {
        "50cm": 0,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        Toe: 50,
        Heel: 50,
        Back: 30,
        Christie: 200,
        "2 Wheels TH": 15,
        "5 Wheels": 10
      },
      video: "https://www.youtube.com/watch"
    },
    {
      code: "SUP",
      name: "Superman",
      category: "SITTING",
      base: 2,
      tap: 1.4,
      under: 1,
      combo: 2.4,
      comboTap: 1.68,
      comboUnder: 1.2,
      qoe: {
        "3": 0.6,
        "2": 0.4,
        "1": 0.2,
        "0": 0,
        "-1": -0.2,
        "-2": -0.4,
        "-3": -0.6
      },
      distance: {
        "50cm": 0,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        Toe: 50,
        Heel: 50,
        Back: 30,
        "2 Wheels HH": 15,
        "2 Wheels TT": 15,
        "2 Wheels TH": 15
      },
      video: "https://youtu.be/wCk__c5vUnQ"
    },
    {
      code: "TEA",
      name: "Teapot",
      category: "SITTING",
      base: 2,
      tap: 1.4,
      under: 1,
      combo: 2.4,
      comboTap: 1.68,
      comboUnder: 1.2,
      qoe: {
        "3": 0.6,
        "2": 0.4,
        "1": 0.2,
        "0": 0,
        "-1": -0.2,
        "-2": -0.4,
        "-3": -0.6
      },
      distance: {
        "50cm": 0,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        Back: 30,
        Heel: 50,
        Toe: 50
      },
      video: "https://youtu.be/fmFaW3R1qbM"
    },
    {
      code: "SEV",
      name: "7",
      category: "SPINS",
      base: 3,
      tap: 2.1,
      under: 1.5,
      combo: 3.6,
      comboTap: 2.52,
      comboUnder: 1.8,
      qoe: {
        "3": 0.9,
        "2": 0.6,
        "1": 0.3,
        "0": 0,
        "-1": -0.3,
        "-2": -0.6,
        "-3": -0.9
      },
      distance: {
        "50cm": 0,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        "1 Cone": 5,
        "1 Cone foreward": 15,
        Back: 20,
        Christie: 40,
        Double: 10,
        Ext: 5,
        Grab: 1,
        Heel: 21,
        Int: 10,
        Jump: 20,
        Left: 0,
        Right: 0,
        Sit: 20,
        Toe: 20,
        Cross: 20
      },
      video: "https://youtu.be/Ba4i1hNTFnk"
    },
    {
      code: "INF",
      name: "Infinity",
      category: "SPINS",
      base: 3.15,
      tap: 2.2,
      under: 1.57,
      combo: 3.78,
      comboTap: 2.65,
      comboUnder: 1.89,
      qoe: {
        "3": 0.94,
        "2": 0.63,
        "1": 0.32,
        "0": 0,
        "-1": -0.32,
        "-2": -0.63,
        "-3": -0.94
      },
      distance: {
        "50cm": 0,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        Back: 30,
        Toe: 20,
        Heel: 21
      },
      video: "https://youtu.be/mixo7Qz_XNI"
    },
    {
      code: "SPI",
      name: "Spin",
      category: "SPINS",
      base: 1.2,
      tap: 0.84,
      under: 0.6,
      combo: 1.44,
      comboTap: 1.01,
      comboUnder: 0.72,
      qoe: {
        "3": 0.36,
        "2": 0.24,
        "1": 0.12,
        "0": 0,
        "-1": -0.12,
        "-2": -0.24,
        "-3": -0.36
      },
      distance: {
        "50cm": 5,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        "1 Cone": 5,
        Double: 10,
        Ext: 5,
        Int: 10,
        Left: 0,
        Right: 0,
        "5 Wheels": 5,
        "1 Cone foreward": 15,
        Back: 30,
        Cross: 20,
        "2 Wheels HH": 15,
        "2 Wheels TT": 15,
        "2 Wheels TH": 15
      },
      video: "https://youtu.be/X21_A2AWZtM"
    },
    {
      code: "DAY",
      name: "DayNight",
      category: "WHEELING",
      base: 2.55,
      tap: 1.78,
      under: 1.27,
      combo: 3.06,
      comboTap: 2.14,
      comboUnder: 1.53,
      qoe: {
        "3": 0.76,
        "2": 0.51,
        "1": 0.26,
        "0": 0,
        "-1": -0.26,
        "-2": -0.51,
        "-3": -0.76
      },
      distance: {
        "50cm": 0,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        Heel: 21,
        Jump: 20,
        Left: 0,
        Reverse: 15,
        Right: 0,
        Sit: 20,
        Toe: 20,
        Christie: 30
      },
      video: "https://www.youtube.com/watch"
    },
    {
      code: "FLI",
      name: "Flip/Fish",
      category: "WHEELING",
      base: 2.4,
      tap: 1.68,
      under: 1.2,
      combo: 2.88,
      comboTap: 2.02,
      comboUnder: 1.44,
      qoe: {
        "3": 0.72,
        "2": 0.48,
        "1": 0.24,
        "0": 0,
        "-1": -0.24,
        "-2": -0.48,
        "-3": -0.72
      },
      distance: {
        "50cm": 0,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        Back: 20,
        Ext: 5,
        Heel: 21,
        Int: 10,
        Jump: 20,
        Left: 0,
        Reverse: 15,
        Right: 0,
        Sit: 20,
        Toe: 20,
        Christie: 30
      },
      video: "https://www.youtube.com/watch"
    },
    {
      code: "FRE",
      name: "French Shift",
      category: "WHEELING",
      base: 2.55,
      tap: 1.78,
      under: 1.27,
      combo: 3.06,
      comboTap: 2.14,
      comboUnder: 1.53,
      qoe: {
        "3": 0.76,
        "2": 0.51,
        "1": 0.26,
        "0": 0,
        "-1": -0.26,
        "-2": -0.51,
        "-3": -0.76
      },
      distance: {
        "50cm": 0,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        Int: 0,
        Ext: 0,
        Left: 0,
        Right: 0,
        Reverse: 20,
        Heel: 21,
        Toe: 20,
        Christie: 30,
        Sit: 20,
        Jump: 10
      },
      video: "https://www.youtube.com/watch"
    },
    {
      code: "LEA",
      name: "Leaf",
      category: "WHEELING",
      base: 3.1,
      tap: 2.17,
      under: 1.55,
      combo: 3.72,
      comboTap: 2.6,
      comboUnder: 1.86,
      qoe: {
        "3": 0.93,
        "2": 0.62,
        "1": 0.31,
        "0": 0,
        "-1": -0.31,
        "-2": -0.62,
        "-3": -0.93
      },
      distance: {
        "50cm": 0,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        Back: 30,
        Front: 5,
        Heel: 80,
        Jump: 30,
        Left: 0,
        Right: 0,
        Toe: 80,
        Reverse: 30
      },
      video: "https://youtu.be/3cqKYjS9zBo"
    },
    {
      code: "WHE",
      name: "One Foot",
      category: "WHEELING",
      base: 1,
      tap: 0.7,
      under: 0.5,
      combo: 1.2,
      comboTap: 0.84,
      comboUnder: 0.6,
      qoe: {
        "3": 0.3,
        "2": 0.2,
        "1": 0.1,
        "0": 0,
        "-1": -0.1,
        "-2": -0.2,
        "-3": -0.3
      },
      distance: {
        "50cm": 0,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        Toe: 20,
        Left: 0,
        Int: 10,
        Right: 0,
        Jump: 20,
        Heel: 21,
        Ext: 5,
        Back: 20
      },
      video: "https://youtu.be/R8cvbOClULc"
    },
    {
      code: "SHI",
      name: "Shift",
      category: "WHEELING",
      base: 3,
      tap: 2.1,
      under: 1.5,
      combo: 3.6,
      comboTap: 2.52,
      comboUnder: 1.8,
      qoe: {
        "3": 0.9,
        "2": 0.6,
        "1": 0.3,
        "0": 0,
        "-1": -0.3,
        "-2": -0.6,
        "-3": -0.9
      },
      distance: {
        "50cm": 0,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        Christie: 40,
        Ext: 5,
        Int: 10,
        Heel: 21,
        Jump: 20,
        Left: 0,
        Reverse: 15,
        Right: 0,
        Sit: 20,
        Toe: 20
      },
      video: "https://youtu.be/LJNM4p3fspM"
    },
    {
      code: "SNK",
      name: "Snake",
      category: "WHEELING",
      base: 1,
      tap: 0.7,
      under: 0.5,
      combo: 1.2,
      comboTap: 0.84,
      comboUnder: 0.6,
      qoe: {
        "3": 0.3,
        "2": 0.2,
        "1": 0.1,
        "0": 0,
        "-1": -0.1,
        "-2": -0.2,
        "-3": -0.3
      },
      distance: {
        "50cm": 0,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        "5 Wheels": 5,
        Back: 20,
        "2 Wheels TH": 15,
        "2 Wheels HH": 15,
        "2 Wheels TT": 15
      },
      video: "https://youtu.be/5ogWCKXiVVE"
    },
    {
      code: "SQR",
      name: "Square",
      category: "WHEELING",
      base: 1.5,
      tap: 1.05,
      under: 0.75,
      combo: 1.8,
      comboTap: 1.26,
      comboUnder: 0.9,
      qoe: {
        "3": 0.45,
        "2": 0.3,
        "1": 0.15,
        "0": 0,
        "-1": -0.15,
        "-2": -0.3,
        "-3": -0.45
      },
      distance: {
        "50cm": 0,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        Left: 0,
        Right: 0,
        Toe: 20,
        Back: 20,
        Heel: 21,
        Front: 5,
        Sit: 45
      },
      video: "https://youtu.be/5okJmV0--M8"
    },
    {
      code: "TRI",
      name: "Triangle",
      category: "WHEELING",
      base: 2.1,
      tap: 1.47,
      under: 1.05,
      combo: 2.52,
      comboTap: 1.76,
      comboUnder: 1.26,
      qoe: {
        "3": 0.63,
        "2": 0.42,
        "1": 0.21,
        "0": 0,
        "-1": -0.21,
        "-2": -0.42,
        "-3": -0.63
      },
      distance: {
        "50cm": 0,
        "80cm": 0,
        "120cm": 0
      },
      attributes: {
        Toe: 20,
        Right: 0,
        Sit: 20,
        Left: 0,
        Reverse: 15,
        Jump: 20,
        Int: 10,
        Heel: 21,
        Ext: 5,
        Back: 20,
        Christie: 30,
        Front: 5
      },
      video: "https://youtu.be/feOstXzHka8"
    }
  ];

  // src/data/attributes.json
  var attributes_default = [
    {
      name: "Back",
      group: "Direction",
      exclusiveWith: [
        "Front"
      ]
    },
    {
      name: "Front",
      group: "Direction",
      exclusiveWith: [
        "Back"
      ]
    },
    {
      name: "Reverse",
      group: "Direction",
      exclusiveWith: []
    },
    {
      name: "Ext",
      group: "Edges",
      exclusiveWith: [
        "Int"
      ]
    },
    {
      name: "Int",
      group: "Edges",
      exclusiveWith: [
        "Ext"
      ]
    },
    {
      name: "Left",
      group: "Legs",
      exclusiveWith: [
        "Right"
      ]
    },
    {
      name: "Right",
      group: "Legs",
      exclusiveWith: [
        "Left"
      ]
    },
    {
      name: "Cross",
      group: "Others",
      exclusiveWith: []
    },
    {
      name: "Grab",
      group: "Others",
      exclusiveWith: []
    },
    {
      name: "Jump",
      group: "Others",
      exclusiveWith: [
        "Kick"
      ]
    },
    {
      name: "Kick",
      group: "Others",
      exclusiveWith: [
        "Jump"
      ]
    },
    {
      name: "Christie",
      group: "Position",
      exclusiveWith: []
    },
    {
      name: "Sit",
      group: "Position",
      exclusiveWith: [
        "Christie"
      ]
    },
    {
      name: "1 Cone",
      group: "Rotations",
      exclusiveWith: [
        "Double",
        "1 Cone foreward"
      ]
    },
    {
      name: "1 Cone foreward",
      group: "Rotations",
      exclusiveWith: [
        "1 Cone",
        "Double"
      ]
    },
    {
      name: "Double",
      group: "Rotations",
      exclusiveWith: [
        "One Cone",
        "1 Cone",
        "1 Cone foreward"
      ]
    },
    {
      name: "2 Wheels HH",
      group: "Wheels",
      exclusiveWith: [
        "2 Wheels TH",
        "2 Wheels TT",
        "5 Wheels"
      ]
    },
    {
      name: "2 Wheels TH",
      group: "Wheels",
      exclusiveWith: [
        "2 Wheels TT",
        "5 Wheels",
        "2 Wheels HH"
      ]
    },
    {
      name: "2 Wheels TT",
      group: "Wheels",
      exclusiveWith: [
        "5 Wheels",
        "2 Wheels HH",
        "2 Wheels TH"
      ]
    },
    {
      name: "5 Wheels",
      group: "Wheels",
      exclusiveWith: [
        "2 Wheels"
      ]
    },
    {
      name: "Heel",
      group: "Wheels",
      exclusiveWith: [
        "Toe"
      ]
    },
    {
      name: "Toe",
      group: "Wheels",
      exclusiveWith: [
        "Heel"
      ]
    }
  ];

  // src/lib/utils.ts
  function round2(value) {
    return Math.round((value + Number.EPSILON) * 100) / 100;
  }

  // src/lib/score.ts
  var tricks = tricks_default;
  var attributeRules = attributes_default;
  var CATEGORIES = [
    "OTHERS",
    "SITTING",
    "JUMP",
    "WHEELING",
    "SPINS"
  ];
  var CATEGORY_KO = {
    JUMP: "\uC810\uD504",
    OTHERS: "\uC544\uB354\uC2A4",
    SITTING: "\uC2DC\uD305",
    SPINS: "\uC2A4\uD540",
    WHEELING: "\uD720\uB9C1"
  };
  var SPOKEN = {
    WIP: "\uC640\uC774\uD37C",
    Kaz: "\uCE74\uC790\uCE58\uC625",
    CRA: "\uD06C\uB7A9",
    BUT: "\uBC84\uD130\uD50C\uB77C\uC774",
    COB: "\uCF54\uBE0C\uB77C",
    IXS: "\uC5D1\uC2A4",
    ZEA: "\uC9C0\uC774\uAE00",
    EAG: "\uC774\uAE00",
    FOO: "\uD48B\uAC74",
    SUP: "\uC288\uD37C\uB9E8",
    TEA: "\uD2F0\uD31F",
    INF: "\uC778\uD53C\uB2C8\uD2F0",
    SEV: "\uC138\uBE10",
    SPI: "\uC2A4\uD540",
    LEA: "\uB9AC\uD504",
    SHI: "\uC2DC\uD504\uD2B8",
    DAY: "\uB370\uC774\uB098\uC787",
    FRE: "\uD504\uB80C\uCE58 \uC2DC\uD504\uD2B8",
    FLI: "\uD50C\uB9BD / \uD53C\uC26C",
    TRI: "\uD2B8\uB77C\uC774\uC575\uAE00",
    SQR: "\uC2A4\uD018\uC5B4",
    SNK: "\uC2A4\uB124\uC774\uD06C",
    WHE: "\uC6D0\uD48B"
  };
  var ATTR_KO = {
    Back: "\uBC31",
    Front: "\uD504\uB860\uD2B8",
    Reverse: "\uB9AC\uBC84\uC2A4",
    Sit: "\uC2DC\uD2B8",
    Christie: "\uD06C\uB9AC\uC2A4\uD2F0",
    Grab: "\uADF8\uB7A9",
    Cross: "\uD06C\uB85C\uC2A4",
    Jump: "\uC810\uD504",
    Kick: "\uD0A5",
    Toe: "\uD1A0",
    Heel: "\uD790",
    "2 Wheels HH": "2\uD720 HH",
    "2 Wheels TH": "2\uD720 TH",
    "2 Wheels TT": "2\uD720 TT",
    "5 Wheels": "5\uD720",
    "1 Cone": "\uC6D0 \uCF58",
    "1 Cone foreward": "\uC6D0 \uCF58 \uD3EC\uC6CC\uB4DC",
    Double: "\uB354\uBE14",
    Int: "\uC778",
    Ext: "\uC544\uC6C3",
    Right: "\uC624\uB978\uBC1C",
    Left: "\uC67C\uBC1C"
  };
  var EXECUTION_KO = {
    base: "\uBCA0\uC774\uC2A4",
    under: "\uC5B8\uB354",
    tap: "\uD0ED",
    combo: "\uCF64\uBCF4 \uBCA0\uC774\uC2A4",
    "combo-under": "\uCF64\uBCF4 \uC5B8\uB354",
    "combo-tap": "\uCF64\uBCF4 \uD0ED"
  };
  var QOE_KO = {
    "3": "\uD0C1\uC6D4 (+3)",
    "2": "\uC6B0\uC218 (+2)",
    "1": "\uC591\uD638 (+1)",
    "0": "\uD45C\uC900 (0)",
    "-1": "\uACBD\uBBF8\uD55C \uACB0\uD568 (\u22121)",
    "-2": "\uACB0\uD568 (\u22122)",
    "-3": "\uBD88\uB7C9 (\u22123)"
  };
  var WHEEL_FAMILY = ["2 Wheels HH", "2 Wheels TH", "2 Wheels TT", "5 Wheels"];
  function expandExclusive(name) {
    return name === "2 Wheels" ? WHEEL_FAMILY : [name];
  }
  function initialValue(trick, execution) {
    switch (execution) {
      case "base":
        return trick.base;
      case "under":
        return trick.under;
      case "tap":
        return trick.tap;
      case "combo":
        return trick.combo;
      case "combo-under":
        return trick.comboUnder;
      case "combo-tap":
        return trick.comboTap;
    }
  }
  function blockedAttributes(selected) {
    const blocked = /* @__PURE__ */ new Set();
    const byName = new Map(
      attributeRules.map((rule) => [rule.name, rule.exclusiveWith])
    );
    for (const name of selected) {
      for (const other of byName.get(name) ?? []) {
        for (const expanded of expandExclusive(other)) {
          if (expanded !== name) blocked.add(expanded);
        }
      }
    }
    for (const rule of attributeRules) {
      if (selected.includes(rule.name)) continue;
      const hits = rule.exclusiveWith.flatMap(expandExclusive).some((name) => selected.includes(name));
      if (hits) blocked.add(rule.name);
    }
    return blocked;
  }
  function scoreTrick(input) {
    const initial = initialValue(input.trick, input.execution);
    const distancePercent = input.trick.distance[input.distance] ?? 0;
    const withDistance = initial * (1 + distancePercent / 100);
    const qoePoints = input.qoe.reduce((sum, level) => sum + input.trick.qoe[level], 0) / 3;
    const withQoe = withDistance + qoePoints;
    const attributePercent = input.attributes.reduce(
      (sum, name) => sum + (input.trick.attributes[name] ?? 0),
      0
    );
    const withAttributes = withQoe * (1 + attributePercent / 100);
    const total = input.overtime ? withAttributes * 1.1 : withAttributes;
    return {
      initial,
      distancePercent,
      withDistance,
      qoePoints,
      withQoe,
      attributePercent,
      withAttributes,
      overtime: input.overtime,
      total: round2(total)
    };
  }
  function formatPoints(value) {
    return value.toLocaleString("ko-KR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
  function attributeKey(attributes) {
    return [...attributes].sort().join("|");
  }
  function identityKey(code, attributes, distance) {
    return `${code}::${attributeKey(attributes)}::${distance}`;
  }
  function enumerateAttributeSets(available, maxSize = available.length) {
    const results = [[]];
    const sorted = [...available].sort();
    function walk(start, current) {
      if (current.length >= maxSize) return;
      for (let i = start; i < sorted.length; i += 1) {
        const name = sorted[i];
        if (blockedAttributes(current).has(name)) continue;
        const next = [...current, name];
        results.push(next);
        walk(i + 1, next);
      }
    }
    walk(0, []);
    return results;
  }
  var FOOTWORK_TABLE = [
    { score: 5, multiplier: 1.25, label: "+5.0 \xB7 1.25\xD7" },
    { score: 4, multiplier: 1.18, label: "+4.0 \xB7 1.18\xD7" },
    { score: 3, multiplier: 1.1, label: "+3.0 \xB7 1.10\xD7" },
    { score: 2, multiplier: 1.06, label: "+2.0 \xB7 1.06\xD7" },
    { score: 1, multiplier: 1, label: "+1.0 \xB7 1.00\xD7" },
    { score: 0, multiplier: 0.95, label: "0.0 \xB7 0.95\xD7" }
  ];

  // src/lib/optimize.ts
  var DISTANCES = ["50cm", "80cm", "120cm"];
  function phaseLimits(phase) {
    if (phase === "trial") {
      return {
        maxTricks: 15,
        maxLongCombos: 2,
        maxComboSize: 5,
        minLongComboSize: 3
      };
    }
    return {
      maxTricks: 10,
      maxLongCombos: 1,
      maxComboSize: 3,
      minLongComboSize: 3
    };
  }
  function qoeTriple(level) {
    return [level, level, level];
  }
  function pointsFor(trick, attributes, distance, execution, qoe, overtime) {
    return scoreTrick({
      trick,
      attributes,
      distance,
      execution,
      qoe: qoeTriple(qoe),
      overtime
    }).total;
  }
  function buildCandidates(options) {
    const allowedTricks = tricks.filter(
      (trick) => options.allowedTrickCodes ? options.allowedTrickCodes.includes(trick.code) : true
    );
    const pool = [];
    for (const trick of allowedTricks) {
      const attrNames = Object.keys(trick.attributes).filter(
        (name) => options.allowedAttributes ? options.allowedAttributes.includes(name) : true
      );
      const sets = enumerateAttributeSets(attrNames);
      for (const attributes of sets) {
        for (const distance of DISTANCES) {
          const basePoints = pointsFor(
            trick,
            attributes,
            distance,
            "base",
            options.qoe,
            false
          );
          const comboPoints = pointsFor(
            trick,
            attributes,
            distance,
            "combo",
            options.qoe,
            false
          );
          const attributePercent = attributes.reduce(
            (sum, name) => sum + (trick.attributes[name] ?? 0),
            0
          );
          pool.push({
            trick,
            attributes,
            distance,
            basePoints,
            comboPoints,
            attributePercent,
            identity: identityKey(trick.code, attributes, distance)
          });
        }
      }
    }
    const byTrick = /* @__PURE__ */ new Map();
    for (const item of pool) {
      const list = byTrick.get(item.trick.code) ?? [];
      list.push(item);
      byTrick.set(item.trick.code, list);
    }
    const selected = [];
    for (const list of byTrick.values()) {
      list.sort((a, b) => {
        const aBest = Math.max(a.basePoints, a.comboPoints);
        const bBest = Math.max(b.basePoints, b.comboPoints);
        return bBest - aBest || b.attributePercent - a.attributePercent;
      });
      const kept = [];
      const seen = /* @__PURE__ */ new Set();
      for (const item of list) {
        if (seen.has(item.identity)) continue;
        seen.add(item.identity);
        kept.push(item);
        if (kept.length >= 6) break;
      }
      selected.push(...kept);
    }
    selected.sort(
      (a, b) => Math.max(b.basePoints, b.comboPoints) - Math.max(a.basePoints, a.comboPoints)
    );
    return selected;
  }
  function pickCoveringSet(candidates, maxTricks) {
    const chosen = [];
    const usedIdentity = /* @__PURE__ */ new Set();
    const covered = /* @__PURE__ */ new Set();
    for (const category of CATEGORIES) {
      const best = candidates.find(
        (item) => item.trick.category === category && !usedIdentity.has(item.identity)
      );
      if (!best) continue;
      chosen.push(best);
      usedIdentity.add(best.identity);
      covered.add(category);
    }
    for (const item of candidates) {
      if (chosen.length >= maxTricks) break;
      if (usedIdentity.has(item.identity)) continue;
      chosen.push(item);
      usedIdentity.add(item.identity);
      covered.add(item.trick.category);
    }
    if (chosen.length > maxTricks) {
      const must = CATEGORIES.map(
        (category) => chosen.find((item) => item.trick.category === category)
      ).filter(Boolean);
      const rest = chosen.filter((item) => !must.includes(item)).sort(
        (a, b) => Math.max(b.basePoints, b.comboPoints) - Math.max(a.basePoints, a.comboPoints)
      );
      return [...must, ...rest].slice(0, maxTricks);
    }
    return chosen;
  }
  function planCombos(items, options, limits) {
    if (!options.preferCombo || items.length < 2) {
      return { items, comboIds: items.map(() => null) };
    }
    const ordered = [...items].sort((a, b) => {
      const aGain = a.comboPoints - a.basePoints;
      const bGain = b.comboPoints - b.basePoints;
      return bGain - aGain || b.comboPoints - a.comboPoints;
    });
    const comboIds = ordered.map(() => null);
    let comboCounter = 1;
    let longCombos = 0;
    let i = 0;
    while (i < ordered.length) {
      const remaining = ordered.length - i;
      if (remaining < 2) break;
      let bestSize = 0;
      let bestGain = 0;
      const maxSize = Math.min(limits.maxComboSize, remaining);
      for (let size = 2; size <= maxSize; size += 1) {
        if (size >= limits.minLongComboSize && longCombos >= limits.maxLongCombos) {
          continue;
        }
        const slice = ordered.slice(i, i + size);
        const baseSum = slice.reduce((sum, item) => sum + item.basePoints, 0);
        const comboSum = slice.reduce((sum, item) => sum + item.comboPoints, 0);
        const gain = comboSum - baseSum;
        if (gain > bestGain + 1e-9) {
          bestGain = gain;
          bestSize = size;
        }
      }
      if (bestSize >= 2 && bestGain > 0) {
        const id = comboCounter;
        comboCounter += 1;
        for (let j = 0; j < bestSize; j += 1) comboIds[i + j] = id;
        if (bestSize >= limits.minLongComboSize) longCombos += 1;
        i += bestSize;
      } else {
        i += 1;
      }
    }
    return { items: ordered, comboIds };
  }
  function applyOvertimeOrder(items, comboIds, overtimeCount) {
    if (overtimeCount <= 0 || items.length === 0) {
      return { items, comboIds, overtimeFlags: items.map(() => false) };
    }
    const blocks = [];
    let cursor = 0;
    while (cursor < items.length) {
      const id = comboIds[cursor];
      if (id == null) {
        const item = items[cursor];
        blocks.push({
          indices: [cursor],
          value: Math.max(item.basePoints, item.comboPoints),
          size: 1
        });
        cursor += 1;
        continue;
      }
      const indices = [];
      while (cursor < items.length && comboIds[cursor] === id) {
        indices.push(cursor);
        cursor += 1;
      }
      const value = indices.reduce((sum, index) => {
        const item = items[index];
        return sum + item.comboPoints;
      }, 0);
      blocks.push({ indices, value, size: indices.length });
    }
    const otSlots = Math.min(overtimeCount, items.length);
    const lateBlocks = [];
    const earlyBlocks = [];
    let filled = 0;
    const ranked = [...blocks].sort((a, b) => b.value - a.value);
    const lateSet = /* @__PURE__ */ new Set();
    for (const block of ranked) {
      if (filled >= otSlots) break;
      if (filled + block.size <= otSlots || block.size === 1) {
        lateSet.add(block);
        filled += Math.min(block.size, otSlots - filled);
      }
    }
    for (const block of blocks) {
      if (lateSet.has(block)) lateBlocks.push(block);
      else earlyBlocks.push(block);
    }
    const newOrder = [...earlyBlocks, ...lateBlocks].flatMap(
      (block) => block.indices
    );
    const newItems = newOrder.map((index) => items[index]);
    const newComboIds = newOrder.map((index) => comboIds[index]);
    const overtimeFlags = newItems.map(
      (_, index) => index >= newItems.length - otSlots
    );
    return { items: newItems, comboIds: newComboIds, overtimeFlags };
  }
  function enforceComboLimits(planned, limits) {
    const combos = /* @__PURE__ */ new Map();
    for (const item of planned) {
      if (item.comboId == null) continue;
      const list = combos.get(item.comboId) ?? [];
      list.push(item);
      combos.set(item.comboId, list);
    }
    const long = [...combos.entries()].map(([id, list]) => ({
      id,
      list,
      size: list.length,
      value: list.reduce((sum, item) => sum + item.points, 0)
    })).filter((item) => item.size >= limits.minLongComboSize).sort((a, b) => b.value - a.value);
    for (const item of long.slice(limits.maxLongCombos)) {
      for (const trick of item.list) {
        trick.valid = false;
        trick.points = 0;
        trick.zeroReason = "ERR C \xB7 \uAE34 \uCF64\uBCF4 \uAC1C\uC218 \uCD08\uACFC";
      }
    }
    for (const [, list] of combos) {
      if (list.length <= limits.maxComboSize) continue;
      for (const trick of list) {
        trick.valid = false;
        trick.points = 0;
        trick.zeroReason = "ERR C \xB7 \uCF64\uBCF4 \uAE38\uC774 \uCD08\uACFC";
      }
    }
  }
  function enforceDuplicatesAndLimit(planned, maxTricks) {
    const bestByIdentity = /* @__PURE__ */ new Map();
    for (const item of planned) {
      if (!item.valid) continue;
      const prev = bestByIdentity.get(item.identity);
      if (!prev || item.points > prev.points) bestByIdentity.set(item.identity, item);
    }
    for (const item of planned) {
      if (!item.valid) continue;
      const best = bestByIdentity.get(item.identity);
      if (best && best !== item) {
        item.valid = false;
        item.points = 0;
        item.zeroReason = "ERR \xB7 \uB3D9\uC77C \uAE30\uC220\xB7\uC18D\uC131\xB7\uAC04\uACA9 \uBC18\uBCF5";
      }
    }
    const counted = planned.filter((item) => item.valid).sort((a, b) => a.order - b.order);
    if (counted.length > maxTricks) {
      for (const item of counted.slice(maxTricks)) {
        item.valid = false;
        item.points = 0;
        item.zeroReason = "LIMIT \xB7 \uAE30\uC220 \uC218 \uC0C1\uD55C \uCD08\uACFC";
      }
    }
  }
  function optimizeProgram(options) {
    const limits = phaseLimits(options.phase);
    const overtimeCount = Math.max(
      0,
      Math.min(options.overtimeCount, limits.maxTricks)
    );
    const candidates = buildCandidates(options);
    const notes = [];
    if (candidates.length === 0) {
      return {
        phase: options.phase,
        mode: options.mode,
        tricks: [],
        tesRaw: 0,
        tesCounted: 0,
        footworkMultiplier: options.footworkMultiplier,
        tesAfterFootwork: 0,
        pcsSum: 0,
        mac: options.mac,
        pcsContribution: 0,
        missingCategories: [...CATEGORIES],
        autoPenalty: -2 * CATEGORIES.length + (options.musicOk ? 0 : -10),
        total: round2(-2 * CATEGORIES.length + (options.musicOk ? 0 : -10)),
        notes: ["\uC120\uD0DD \uAC00\uB2A5\uD55C \uAE30\uC220\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uD544\uD130\uB97C \uB113\uD600 \uC8FC\uC138\uC694."]
      };
    }
    const picked = pickCoveringSet(candidates, limits.maxTricks);
    const comboPlan = planCombos(picked, options, limits);
    const ordered = applyOvertimeOrder(
      comboPlan.items,
      comboPlan.comboIds,
      overtimeCount
    );
    const planned = ordered.items.map((item, index) => {
      const comboId = ordered.comboIds[index];
      const inCombo = comboId != null;
      const execution = inCombo ? "combo" : "base";
      const overtime = ordered.overtimeFlags[index];
      const points = pointsFor(
        item.trick,
        item.attributes,
        item.distance,
        execution,
        options.qoe,
        overtime
      );
      const comboMembers = ordered.comboIds.map((id, memberIndex) => id === comboId ? memberIndex : -1).filter((memberIndex) => memberIndex >= 0);
      const comboIndex = comboId == null ? null : comboMembers.indexOf(index) + 1;
      const comboSize = comboId == null ? null : comboMembers.length;
      return {
        order: index + 1,
        trick: item.trick,
        attributes: item.attributes,
        distance: item.distance,
        execution,
        overtime,
        comboId,
        comboIndex,
        comboSize,
        points,
        valid: true,
        zeroReason: null,
        identity: item.identity
      };
    });
    enforceComboLimits(planned, limits);
    enforceDuplicatesAndLimit(planned, limits.maxTricks);
    const covered = new Set(
      planned.filter((item) => item.valid).map((item) => item.trick.category)
    );
    const missingCategories = CATEGORIES.filter((category) => !covered.has(category));
    const tesCounted = round2(
      planned.filter((item) => item.valid).reduce((sum, item) => sum + item.points, 0)
    );
    const tesRaw = round2(planned.reduce((sum, item) => sum + item.points, 0));
    let autoPenalty = -2 * missingCategories.length;
    if (!options.musicOk) autoPenalty -= 10;
    const pcsSum = round2(
      options.pcsFlow + options.pcsComposition + options.pcsPerformance
    );
    const pcsContribution = round2(pcsSum * options.mac);
    const footworkMultiplier = options.footworkMultiplier;
    const tesAfterFootwork = round2(tesCounted * footworkMultiplier);
    let total = tesCounted;
    if (options.mode === "tes-footwork" || options.mode === "final") {
      total = tesAfterFootwork;
    }
    if (options.mode === "final") {
      total = round2(tesAfterFootwork + pcsContribution + autoPenalty);
    } else if (options.mode === "tes") {
      total = tesCounted;
    }
    notes.push(
      options.phase === "trial" ? "\uC2DC\uD5D8 \uB2E8\uACC4: \uAE30\uC220 15\uAC1C, 3\u20135\uAC1C \uCF64\uBCF4 \uCD5C\uB300 2\uAC1C." : "\uD5A5\uD6C4 \uACF5\uC2DD: \uAE30\uC220 10\uAC1C, 3\uAC1C \uCF64\uBCF4 \uCD5C\uB300 1\uAC1C."
    );
    notes.push(
      `QoE \uAC00\uC815 ${options.qoe}, \uC624\uBC84\uD0C0\uC784 \uC2AC\uB86F ${overtimeCount}\uAC1C(\xD71.10).`
    );
    if (options.mode !== "tes") {
      notes.push(`\uD48B\uC6CC\uD06C \uBC30\uC218 ${footworkMultiplier.toFixed(2)}\xD7 \uC801\uC6A9.`);
    }
    if (options.mode === "final") {
      notes.push(
        `PCS ${pcsSum.toFixed(1)} \xD7 MAC ${options.mac.toFixed(1)} = ${pcsContribution.toFixed(2)}.`
      );
    }
    if (missingCategories.length) {
      notes.push(
        `\uBBF8\uC218\uD589 \uBD80\uBB38 ${missingCategories.length}\uAC1C \u2192 \uC790\uB3D9 \uAC10\uC810 ${(-2 * missingCategories.length).toFixed(1)}.`
      );
    }
    return {
      phase: options.phase,
      mode: options.mode,
      tricks: planned,
      tesRaw,
      tesCounted,
      footworkMultiplier,
      tesAfterFootwork,
      pcsSum,
      mac: options.mac,
      pcsContribution,
      missingCategories,
      autoPenalty,
      total,
      notes
    };
  }
  return __toCommonJS(html_entry_exports);
})();

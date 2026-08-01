/**
 * Hand-scribble marks
 *
 * These are the centerlines, meant to be stroked with
 * round caps and joins so they can be drawn on with stroke-dashoffset.
 */

export const SCRIBBLE_VIEWBOX = { width: 193, height: 104 };

export const SCRIBBLES = [
  "M106 4 L5 89 L108 29 L46 95 L155 34 L74 93 L190 33 L126 99",
  "M82 5 L8 95 L139 26 L67 98 L191 26 L129 91",
  "M104 4 L15 89 L142 32 L74 91 L183 27 L137 96",
  "M82 5 L0 91 L116 26 L44 97 L150 34 L95 92 L185 27 L138 95",
  "M101 7 L9 100 L125 33 L47 96 L150 29 L80 100 L179 33 L120 91",
  "M12 96 L112 12 L20 78 L131 20 L58 92 L168 24 L98 97 L188 40",
  "M16 88 L56 10 L44 94 L94 14 L82 92 L134 12 L122 95 L176 16 L164 92",
  "M14 26 L178 40 L26 66 L170 30 L40 92 L162 70",
  "M100 6 L22 92 L140 24 L52 98 L176 28 L104 94 L164 66",
  "M14 84 L74 18 L52 90 L128 22 L96 96 L166 26 L140 88",
];

export const randomScribble = () =>
  SCRIBBLES[Math.floor(Math.random() * SCRIBBLES.length)];

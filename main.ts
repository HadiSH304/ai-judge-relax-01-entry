// ai-judge-relax-01 entry (Node 22, standard library only): writes one short text,
// a single unhurried scene, to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// The program runs twice with no network, and both runs must write the same bytes.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The last ferry is tied up for the night.',
  'Its ropes creak once, then settle.',
  'The water goes flat against the hull, and stays flat.',
  'A gull sleeps on the railing, head tucked under one wing.',
  'The lights along the pier come on one by one, small and yellow.',
  'A rope end drips into the water, one drop at a time.',
  'The timetable flaps once against the shelter glass, then hangs still.',
  'No one is waiting. No one is coming.',
  'The ticket window is dark. The gangway is up.',
  'Below, in the engine room, the metal ticks as it cools.',
  'Out past the breakwater, the sea keeps its own slow time.',
  'And all night the ferry rocks a little in the dark,',
  'the water flat, the ropes quiet, nothing left to carry.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);

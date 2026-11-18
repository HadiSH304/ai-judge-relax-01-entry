// ai-judge-relax-01 entry (Node 22, standard library only): writes one short text,
// the "cat asleep on your lap" scene — you staying put while evening turns to
// night — to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// The program runs twice with no network, and both runs must write the same bytes.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'You meant to get up. The kettle is waiting, but the cat is asleep on your lap, and you stay.',
  '',
  'She came up in the late light, turned twice, and settled, her weight warm through your jeans. Your hand lies on her side, rising with her breath, and falling, and rising again a little later.',
  '',
  'Once, the tip of her tail lifts, and comes down. A long while later it lifts again, and comes down. Then it lifts halfway, and stops there, as if the rest can wait.',
  '',
  'The light leaves the wall, then the rug, then the chair arm. The room goes the colour of the inside of a cupboard, and the cat does not stir. You do not go to it.',
  '',
  'At seven the house ticks once, and is quiet. At eight the street goes quiet too, and the only sound left is her breathing, each gap a little longer than the last.',
  '',
  'Your hand stays on her side, going up and down with her, and her warmth has soaked through your clothes, and you are still in the chair, and none of it needs you to move.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);

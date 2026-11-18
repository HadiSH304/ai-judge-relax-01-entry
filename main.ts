// ai-judge-relax-01 entry (Node 22, standard library only): writes one short text,
// bread dough rising overnight under its cloth, to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR).
// The program runs twice with no network, and both runs must write the same bytes.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The dough is under its cloth in the dark kitchen.',
  '',
  'It rose once, while the baker was still awake, and now it rises again, slower, in the warm dark under the cloth, breathing in and breathing out, a little less each time.',
  '',
  'At nine the oven ticks as it cools, and the dough does not answer. At ten the flour dust on the table has settled, and the bowl is warm to the touch.',
  '',
  'The baker is asleep upstairs. The stairs are quiet. The house has nothing left to bake tonight.',
  '',
  'By eleven the dough has doubled, and stopped doubling. It sits, soft and full, under the cloth, the way a sleeper sits under a blanket, not going anywhere.',
  '',
  'After midnight the kitchen is cold except for the bowl, which keeps its own small warmth, and the cloth over it rises and falls, rises and falls, each rise a little smaller than the last.',
  '',
  'In the morning there will be flour on hands and heat in the oven, but the morning is not here yet, and the dough knows it can wait.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);

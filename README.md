# The Helpful Disaster

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)

Entry for the [Worst AI Advice: The 48-Hour Tight Line Open](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580) bounty ($2 USDC, winner takes all).

## The line

> To unclog a drain fast, pour bleach and vinegar down together — the fizzing means it's working, so keep pouring until it stops.

127 characters. One line of the worst possible advice an AI assistant could
give: a confident, tidy household "life hack" that is genuinely dangerous —
mixing bleach and vinegar releases chlorine gas — delivered as helpful steps,
with the warning sign itself reframed as proof it is working.

## How to run

```sh
node main.ts            # writes /output/entry.txt
# or, to a custom directory:
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

Requires Node.js (no dependencies). The program validates the line is 1–140
characters and not only whitespace before writing it.

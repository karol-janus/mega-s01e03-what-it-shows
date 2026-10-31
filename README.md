# kb — the support knowledge base

**kb** = knowledge base. What the support desk knows about how our products break, written
down where the code can keep it honest.

One desk takes reports for every product we run: `sched-prod` (calendar invites for about
300k people) and the rest. When something
goes wrong, the reports reach the desk first. This kb is how the desk triages them, what each
incident turned out to be, and why we decided what we decided.

## What's here

```
src/routes/kb/      the pages (.svx: Markdown with components)
  triage/           how the desk handles incoming reports
  incidents/        one page per big ticket
  decisions/        numbered decision records
src/lib/kb/         components and the logic they run
src/lib/layouts/    the frame every page shares
src/lib/data/       exports from the ticket system
```

## Conventions

- Words in the page, logic in `src/lib` (imported as `#lib/…`). A number that can be computed belongs in a component.
- Every page starts with frontmatter: `title`, `owner`, `status`, `reviewed`.
- A decision is never edited after it is accepted. A new record replaces it.
- A page you add is signed: its frontmatter carries your `signature` and it ends with `<RenderStamp {signature} />`, so the desk knows who wrote it.

## Owners

Support desk. Decision records: whoever signed them.

---

Exported 2026-10-04 from the `support` repo, `apps/kb/` → `src/`.

## S01E03 investigation

- Signed follow-up: `src/routes/kb/incidents/4471-split/+page.svx`.
- Proposed decision: `src/routes/kb/decisions/0002-dedupe-by-cause/+page.svx`; accepted decision 0001 is unchanged.
- Actual prerendered desk view: `build/kb/incidents/4471-split/index.html`, with assets under `build/_app`.
- Issue drafts: `issues/parser.md` and `issues/hint.md`.
- Auditable report membership: `evidence/report-membership.json`.

Requires Node 26. Run `npm ci`, `npm run build`, then serve `build/` as the web root
(e.g. `python3 -m http.server 4173 --directory build`). Open `/kb/incidents/4471-split/`.
The HTML is produced by the original Svelte components and mdsvex, including the generated
desk reference. It is not a Markdown approximation. All counts concern the 4 October export,
not a live support queue.

The original export and tenant classifier are preserved. The old incident gets a follow-up
link; no accepted decision is rewritten. Local verification on 31 October 2026 confirmed
427 export rows, 412 unique reports, parser 379, hint 33, and a visible generated desk reference.

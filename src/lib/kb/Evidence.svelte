<script lang="ts">
  import reports from '#lib/data/reports-4471.json';
  import notes from '#lib/data/desk-notes.json';
  import { uniqueById, type Report } from '#lib/kb/causes';
  const merged = uniqueById(reports as Report[]).filter(r => r.mergedInto === 4471);
  const overlap = reports.length - uniqueById(reports as Report[]).length;
  const beforeMerge = merged.filter(r => r.receivedAt.slice(0, 10) < '2026-07-02').length;
  const julyMerge = merged.filter(r => r.mergedAt?.startsWith('2026-07-02')).length;
  const unusual = merged.filter(r => notes.oneDayMove.includes(r.id));
</script>

<p>{reports.length} export rows − {overlap} repeated IDs = {merged.length} unique reports.
{beforeMerge} reports arrived before 2 July; {julyMerge} were merged that day.</p>
<details>
  <summary>Reports needing closer investigation ({unusual.length})</summary>
  <ul>{#each unusual as r (r.id)}<li><code>{r.id}</code> · {r.tenant} · {r.channel}: {r.body}</li>{/each}</ul>
</details>

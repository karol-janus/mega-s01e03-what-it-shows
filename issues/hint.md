Source ticket: #4471
Cause: hint
Reports: 33

# hint: separate cause in source ticket #4471

Reports covered: **33** unique report IDs from the 4 October 2026 export.

The booking-v3 date field prints MM/DD/YYYY for day-first tenants while interpreting input in the tenant's day-first order. People following the visible hint get the wrong day/month. This is a separate cause hidden in source ticket #4471.

Example: R-41230, copper.studio, form: “My client came on 1 June instead of 6 January.” Tenant locale es-ES is day-first; form booking-v3. Affected tenants are alder.physio (de-DE), copper.studio (es-ES) and pale.harbour (pt-PT), through the form channel only. Their app/email paths remain in the parser group.

Expected: the hint and actual parsing use the same tenant-aware date order. Actual: the hint advertises month-first input and parsing is day-first.

Proposed fix: align booking-v3's hint with the locale-aware form parser. Verify 06/01-type ambiguous input in all three tenants and verify booking-v2 and app/email controls. A fix to the shared month-first parser alone does not correct this form path.

## Counting and evidence

- Deduplicated by report ID before filtering mergedInto === 4471: 427 rows, 412 reports.
- Classified by the original causes.ts with tenant locale/form and channel; not browser locale, subject or intakeTag.
- This group: 33 reports, 3 tenants; received 2026-04-17 to 2026-09-22.
- Intake tags within this group: parser: 15, hint: 18.
- Full membership: [report-membership.json](https://github.com/karol-janus/mega-s01e03-what-it-shows/blob/main/evidence/report-membership.json).
- Signed KB source: [4471-split](https://github.com/karol-janus/mega-s01e03-what-it-shows/blob/main/src/routes/kb/incidents/4471-split/%2Bpage.svx).
- Rendered page: [HTML](https://github.com/karol-janus/mega-s01e03-what-it-shows/blob/main/build/kb/incidents/4471-split/index.html).

## Report IDs

R-41230, R-41241, R-41251, R-41259, R-41262, R-41275, R-41294, R-41305, R-41308, R-41366, R-41372, R-41384, R-41387, R-41396, R-41400, R-41406, R-41415, R-41416, R-41418, R-41428, R-41439, R-41441, R-41449, R-41453, R-41456, R-41460, R-41472, R-41485, R-41493, R-41539, R-41572, R-41582, R-41584

## Resolution

Not planned (won't fix): the course desk update reports booking-v3 retired, so the hint was not corrected.

Source: https://hq.mega.dev/challenges/what-it-shows (checked 31 October 2026).

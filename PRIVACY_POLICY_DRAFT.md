# ParkSpoting privacy policy — release-candidate draft

**Not published and not legally approved.** This source-of-truth draft describes the current
implementation. The initial release is technically scoped to the United States and users aged 18
or older. The owner must supply the legal entity/contact, effective date, processor list and
legally reviewed wording before beta or store submission. Lawful-basis and international-transfer
conclusions are **LEGAL REVIEW REQUIRED**.

## Local-first parking data

ParkSpoting processes motion/activity classifications and bounded location observations to help
detect parking and departure. Parking coordinates, uncertainty, time, confidence, notes, garage
details, resolved address and optional photos are stored on the device. They are not automatically
uploaded. Past parking history is retained locally for 30 days by default; the active parking
record remains until resolved. Photos follow their parking record's deletion and retention.

The operating system controls motion, foreground/background location, notifications, camera,
photo-library selection and optional Bluetooth access. Permissions are requested progressively
after a user action. Bluetooth is limited to an association the user deliberately selects. The app
does not claim uninterrupted background delivery.

## Community availability and accounts

Community sharing is optional. Only after the user confirms a vacancy does the app send its
coordinate, uncertainty, departure time, bounded confidence/source category and an idempotency
key. The service stores a private account-to-publication receipt for abuse prevention and exposes
only an expiring public availability projection without account, device, vehicle, route, notes or
photo linkage. Availability confirmations likewise retain a private, short-lived receipt.

Cloud use creates an anonymous account. A user may optionally link an email, Apple or Google
identity. Authentication and attestation data are used for account access, fraud/security controls
and protected writes, never advertising or tracking. Account deletion removes the cloud identity,
private receipts and challenges, plus an active public record when that account is its sole
attributable publisher. A clustered record survives only when another account independently
published into it; the deleted account's private linkage is removed.

## Diagnostics and analytics

Analytics and crash diagnostics are separate controls and default off unless a particular build's
crash default has received legal approval. Allowed diagnostics are coarse, enumerated product and
health fields. Coordinates, routes, raw sensor streams, Bluetooth identifiers, notes, photos,
addresses, account identity, advertising IDs and stable device IDs are forbidden. The local
diagnostic ID is random, separate from authentication and rotates every seven days. Queued raw
diagnostics are capped at 250 events and 30 days. Withdrawal deletes queued non-essential events;
the all-observability switch clears the queue and disables transport.

## Deletion, access and export

Users can export their private product data as a ZIP containing human-readable JSON/CSV and their
photos. Raw sensor/security/attestation internals, diagnostic identifiers and other users' data are
excluded. Full deletion removes domain data/photos, pending/outbox/replay state, native inbox and
association checkpoints, sessions/auth material, telemetry/settings/IDs and attestation references.
Provider-side backup aging and the owner-approved rights-request contact must still be verified.

## Sharing, sale and tracking

ParkSpoting does not sell data and does not use data for cross-app tracking or targeted advertising.
The final policy must name every enabled processor (for example Supabase and, only when configured,
Sentry), their roles, transfer locations and retention/deletion commitments. No provider is enabled
merely by being named in this draft.

## Children, security, changes and contact

The initial release is United States only and restricted to users aged 18 or older. Reasonable
technical safeguards include authentication,
deny-by-default database access, one-time attestation challenges, data minimization and incident
controls, but no system is perfectly secure. The published policy needs an effective date, change
notice process, accountable legal entity, privacy contact and jurisdiction-specific rights text.
Those legal details, lawful bases and international-transfer conclusions remain **LEGAL REVIEW
REQUIRED** and are not asserted here.

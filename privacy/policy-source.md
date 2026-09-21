---
layout: default
title: ParkSpoting Privacy Policy
---

# ParkSpoting Privacy Policy

Last updated: September 18, 2026

ParkSpoting is a local-first parking assistance app. We design the product to keep the majority of parking-related data on your device and only share what is necessary for optional community availability features and service integrity.

This page explains what we collect, how we use it, what we do not collect, how long data is kept, and the choices you have to delete or control it.

## 1. Overview

ParkSpoting helps users identify parking availability and departure timing based on local device data. The app stores parking-related information on the device by default and may use cloud services only for optional features such as community parking availability and account-based service operations.

We aim to minimize data collection and avoid using personal information for advertising or cross-app tracking.

## 2. Information we collect

### A. Data stored on your device

ParkSpoting may store local parking information on your device, including:

- parking coordinates and estimated uncertainty
- parking time and departure time
- confidence level, source category and status
- garage details, resolved address information, or notes you add
- optional photos associated with a parking record
- local motion and activity classification data used to detect parking and departure

This data is primarily stored locally and is retained for your own app experience. The active parking record remains until it is resolved or removed. Recent local parking history is kept for a limited retention window by default.

### B. Optional community availability data

If you choose to share a parking spot as available, ParkSpoting may send a limited availability record to cloud services. This may include:

- parking coordinate
- estimated uncertainty
- departure time
- confidence and source category
- a generated idempotency key for duplicate prevention

We do not expose account identity, vehicle identity, route history, notes, or photos in the public availability listing.

### C. Account and authentication data

To protect community-sharing features, we may create a cloud account and, if provided, allow users to sign in with an email, Apple, or Google identity. This is used for:

- account access and security
- abuse prevention
- protected writes and service integrity
- challenge and verification flows

We do not use this account data for advertising or tracking.

### D. Diagnostics data

Crash and product diagnostics are separate and disabled by default unless explicitly enabled in a particular build or release. When enabled, diagnostics are limited to coarse health and product-level fields. We do not collect:

- raw sensor streams
- raw location routes
- raw Bluetooth identifiers
- notes or freeform text
- photos or addresses
- advertising IDs
- stable device identifiers used for cross-app tracking

A rotating local diagnostic identifier, separate from authentication, may be used for limited troubleshooting. This identifier rotates periodically and does not identify the user across apps.

## 3. How we use your information

We use data to:

- detect parking activity and parking departure
- provide local parking history and status
- support optional community availability sharing
- prevent abuse, spam, and unauthorized writes
- maintain reliability, debugging, and service security

We do not sell personal data and do not use personal data for cross-app advertising or targeted marketing.

## 4. Local-first design

ParkSpoting is designed to keep parking data on the device whenever possible. Cloud storage is used only for specific optional features that require shared availability or account-based verification.

This means the app prioritizes:

- device-local processing
- limited cloud transmission
- minimal retention
- user-controlled deletion and account management

## 5. Retention and deletion

Retention is limited to what is necessary for the product to function and for security or abuse-prevention purposes.

- local parking history is retained on-device for a defined limited period
- active parking records remain until resolved or removed
- optional community availability records are kept only for the period needed to provide the feature and prevent abuse
- diagnostic data is minimized and limited to short retention periods
- account deletion removes associated cloud identity, private receipts, and service-side references that are directly attributable to the account

Users may delete their account and associated cloud data through the app or by contacting the developer. Local device data can also be removed from the device through the app settings and account-management flows.

## 6. Sharing with third parties

ParkSpoting may use cloud infrastructure providers to support account management, data storage, diagnostics, and security functions. We minimize what is sent and do not share personal data for advertising or profiling.

Third-party providers may be used only to support the product, and only the minimum necessary data is transmitted.

## 7. Security

We use reasonable technical safeguards, including account protection, data minimization, authentication, and access restrictions. No system is perfectly secure, but we take steps to reduce the risk of unauthorized access, misuse, or accidental disclosure.

## 8. Your choices and rights

Depending on your jurisdiction, you may have rights to:

- access your personal data
- request correction of inaccurate data
- request deletion of personal data
- withdraw consent for optional diagnostics or community sharing
- object to certain processing activities

If you want to exercise a privacy request, contact the app owner using the contact information below.

## 9. Children and age restrictions

ParkSpoting is intended for users age 18 and older in the initial release scope. We do not knowingly market or provide the service to children under the age limit defined by the applicable laws.

## 10. Changes to this policy

We may update this policy from time to time to reflect product changes, legal requirements, or new features. When updated, the date at the top of this page will be revised.

## 11. Contact

For questions, privacy requests, or account deletion requests, contact:

- Developer: Thaddeus Elms
- Email: privacy@parkspoting.app

If an email address is not yet active for your production deployment, use the app owner’s verified contact method before public launch.

## 12. Important note

This policy is intended as a public-facing privacy statement for the ParkSpoting app and supporting services. It should be reviewed and approved by the product owner and legal counsel before use as the final production legal policy for store submission or public distribution.

---

If you are a developer setting up the public site, the repo is configured for GitHub Pages deployment to the project site and this page is the landing page for the public privacy policy.

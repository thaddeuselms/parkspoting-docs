---
layout: default
title: ParkSpoting Privacy Policy
---

# ParkSpoting Privacy Policy

Last updated: September 24, 2026

ParkSpoting is a local-first parking assistance app. We design the product to keep the majority of parking-related data on your device while using cloud services for community availability, nearby searches, authentication, and service integrity.

This page explains what we collect, how we use it, what is shared, and the choices you have to delete or control it.

## 1. Overview

ParkSpoting helps users identify parking availability and departure timing based on local device data. The app stores parking-related information on the device by default and uses cloud services for features such as community parking availability, nearby searches, and account-based service operations.

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

Your saved Find My Car record, including associated notes, garage details, and photos, is stored locally and is not published as a community listing. ParkSpoting does not maintain a dedicated cloud record of your currently parked car. Local storage may be subject to your device’s operating-system backup and transfer settings.

### B. Optional community availability data

When community sharing is enabled, ParkSpoting can send an availability report after detecting or confirming that you have left a parking spot. Sharing may happen automatically according to your settings. Reports may include:

- parking coordinate
- estimated uncertainty
- departure time
- confidence and source category
- a generated idempotency key for duplicate prevention

Public availability listings do not include account identifiers, vehicle identity, route history, notes, or photos. Shared availability can be accessed through our app, website, and public availability services; access is not limited to signed-in app members.

Internal service records can associate submitted reports with an account identifier. Duplicate-prevention identifiers may also contain parking coordinates and parking-event times. Reports should therefore not be considered fully anonymous.

An “occupied” status describes a parking spot, not an identified person or vehicle currently using it. If you confirm a spot’s availability, we process the spot identifier, your response, the time, and information used to authenticate the request and prevent duplicates.

### C. Account and authentication data

To protect community-sharing features, we may create a cloud account and, if provided, allow users to sign in with an email, Apple, or Google identity. This is used for:

- account access and security
- abuse prevention
- protected writes and service integrity
- challenge and verification flows

Account and authentication records can include an account identifier, session information, IP address, and browser or device information. An automatically created account can exist even if you have not provided a name or email address. If you choose an available email or social sign-in option, we may also process information supplied through that sign-in.

We do not use this account data for advertising or cross-app tracking.

### D. Diagnostics data

Crash and product diagnostics are separate from the location and sensor processing needed for parking features. Diagnostic availability depends on the app build and your settings. Diagnostic submissions are designed to be limited to coarse health and product-level fields and to exclude:

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

## 4. Location searches and private places

Searching for nearby parking sends your current coordinates to our service to find relevant spots. This is separate from publishing your saved parked-car record.

Private-place labels, addresses, coordinates, and boundaries are stored on your device. These settings help prevent parking records and community vacancy reports from being generated at designated locations, such as your home. They do not disable all location processing, nearby searches, address lookup, or navigation services you choose to use.

## 5. Deletion and data controls

You can use the app’s settings and account-management controls to delete local parking data or request account deletion. You can also contact us with a deletion request.

Account deletion is designed to remove your authentication account and associated private service records. Some shared availability records may remain, including records that can no longer be attributed exclusively to your account. Turning off community sharing stops future sharing but does not itself delete previous reports. A report disappearing from the map does not necessarily mean its underlying database record has been deleted.

The in-app parking export covers parking history and associated photos; it is not a complete export of every local setting or cloud record. Contact us for broader access requests.

## 6. Sharing with third parties

ParkSpoting uses Supabase for cloud database and authentication services. Depending on the app build and enabled settings, diagnostic services such as Sentry may process limited diagnostic information.

Address lookup can send addresses or coordinates to platform geocoding services. Opening directions sends the destination and related labels to your selected mapping service, such as Apple Maps or Google Maps. A destination may be your saved car location. These providers process information under their own privacy policies.

Infrastructure providers may also process operational and security information, including service logs and backups. Deleting a record from the live database does not necessarily remove copies from provider logs or backups at the same time.

We do not share personal data for advertising or cross-app profiling.

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
- Email: privacy@parkspoting.com

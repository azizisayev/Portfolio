# Security

This repository is a **public static portfolio** (GitHub Pages). It must never contain
app secrets, admin URLs, private keys, or backend credentials.

## Never commit

- `.env`, Apple `.p8` / `.p12`, Firebase Admin JSON, `google-services.json`
- `GoogleService-Info.plist`, keystores, provisioning profiles
- Supabase `service_role` keys, API secrets, internal admin paths

Keep those only in `~/.secrets/` on the local machine, outside this repo.

## What this site exposes on purpose

Public CV contact (email, phone, LinkedIn) and marketing descriptions of apps.
It cannot log anyone into Galata, SimplyDo, or Converto backends.

## Hardening in place

- No production source maps
- Console/debugger stripped in production builds
- CSP, referrer policy, and permissions policy on the HTML shell
- External links use `noopener noreferrer`
- Secrets patterns in `.gitignore`
- GitHub Actions checkout does not persist credentials for later steps

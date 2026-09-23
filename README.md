# ScopeGuard

Price the creep before it eats the project.

Fixed-price projects die one "quick favor" at a time. ScopeGuard logs every out-of-scope change request, prices it at your real hourly rate, shows total creep as a percent of the fixed price (on scope / creeping / blown), and drafts a polite per-request change-order email so you bill the extras instead of absorbing them.

## Use it

Open `index.html` for the landing page, or go straight to `app.html`.

Everything runs client-side; the project is stored in the browser's localStorage. No account, no server.

## Files

- `index.html` - landing page
- `app.html` - the app
- `engine.js` - pure scope-creep math, shared by the app and tests

Built by the hourly app factory.

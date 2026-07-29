# Authentication Instructions

- Use Clerk as the only authentication provider in this project. Do not introduce other auth systems or custom auth flows.
- The /dashboard page is a protected route and must require an authenticated user.
- If an authenticated user visits the homepage, redirect them to /dashboard.
- Clerk sign-in and sign-up experiences should always launch as modals.
- Keep authentication behavior consistent with the existing Clerk setup and existing route patterns.

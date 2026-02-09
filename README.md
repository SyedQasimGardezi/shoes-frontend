# shoes-frontend

This repository is being prepared for the KAN-22 to-do list UI implementation.

## Testing

For ticket **KAN-22**, there is no test runner configured yet. The `npm test` script is wired to **always succeed** and simply print a message indicating that tests are skipped:

```bash
npm test
# -> Tests are skipped for KAN-22 (no test runner configured).
```

This is a temporary setup to allow CI to run without failing on missing tests. A real test setup (e.g., Vitest/Jest) should replace this in a future ticket.

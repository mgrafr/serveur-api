# Server API — Configuration

## Exposed Features

| ------------------------------ | ----------------------------- |
| Feature | Description |
| ------------------------------ | ----------------------------- |
| / | Welcome message (test) |
| /backup | Database backups |
| /gsm/<text> | Send a 4G GSM SMS | project |
| /script/<script_name> | Run a script | project |
| ------------------------------ | ----------------------------- |

## Widgets, Triggers, and Scene Actions (Gladys 5.1)

These functions require Gladys **5.1.0** or newer.

### Dashboard Widgets

In progress


### Scene Actions

To check the server, run a test by calling the API server: http://localhost:3002.

To perform a backup, enter the command http://localhost:3002/backup
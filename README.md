# Hookenger

## What is this?

Hookenger is a small express app designed to forward alert messages from
`Grafana` to a `Matrix` room via a webhook trigger.

## Configuration

This app is configured for local development via a `.env` file. It is however
also possible to use Hookenger as a cloud function (tested with GCP). In this
case it is recommended you supply your environment variables using your cloud
provider's utility for managing runtime environment variables.

Configuration values:

```
ENVIRONMENT=Local # For local develolpment.
PORT=6969 # For local development

MATRIX_URL="https://matrix.org"
ROOM_ID="!roomid:matrix.org"
USER_ID="@bot-id:matrix.org"
USER_ACCESS_TOKEN="bot-access-token"

```

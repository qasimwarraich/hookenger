# Hookenger

## What is this?

Hookenger is a small express app designed to forward alert messages from
`Grafana` to a `Matrix` room via a webhook trigger.

## Configuration

This app is configured via a `.env` file.

Configuration values:

```
PORT=6969
MATRIX_URL="https://matrix.org"
ROOM_ID="!roomid:matrix.org"
USER_ID="@bot-id:matrix.org"
USER_ACCESS_TOKEN="bot-access-token"

```

# WP Planning

A Node.js service that periodically fetches posts from a WordPress REST API, caches them in a local SQLite database, and exposes them via an Express HTTP API with Socket.io support.

## Features

- Polls the WordPress REST API on a 5-minute cron schedule
- Full pagination support via `X-WP-TotalPages`
- Upserts posts into SQLite (no duplicates on re-sync)
- Featured image URL extracted via `_embed`
- REST API with pagination and title search
- Socket.io wired up for real-time sync events

## Requirements

- Node.js 18+
- A publicly accessible WordPress site with the REST API enabled

## Setup

```bash
npm install
cp .env.example .env
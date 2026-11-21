-- Neon PostgreSQL schema for the Kaung Htet Zan Thar portfolio.
-- Project: kaung-portfolio (region aws-ap-southeast-1, Postgres 17)
-- Database: neondb, branch: main.
-- Apply with: psql "$DATABASE_URL" -f db/schema.sql

CREATE TABLE IF NOT EXISTS profile (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  location TEXT,
  email TEXT,
  phone TEXT,
  bio TEXT,
  availability TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS skills (
  id SERIAL PRIMARY KEY,
  category TEXT NOT NULL,
  name TEXT NOT NULL,
  sort_order INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS experience (
  id SERIAL PRIMARY KEY,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  period TEXT,
  duration TEXT,
  description TEXT,
  highlight TEXT,
  tech TEXT,
  sort_order INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  role TEXT,
  period TEXT,
  description TEXT,
  highlight TEXT,
  tech TEXT,
  sort_order INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS services (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  sort_order INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS education (
  id SERIAL PRIMARY KEY,
  school TEXT NOT NULL,
  degree TEXT,
  period TEXT,
  sort_order INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS socials (
  id SERIAL PRIMARY KEY,
  platform TEXT NOT NULL,
  url TEXT NOT NULL,
  sort_order INT DEFAULT 0
);

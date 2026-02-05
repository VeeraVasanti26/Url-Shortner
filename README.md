# 🔗 URL Shortener with Click Tracking

## 🧠 Overview

This project is a **backend-focused URL Shortener service** that allows users to convert long URLs into short, shareable links while tracking detailed click analytics.

It is built using **Node.js, Express.js, and MongoDB**, following **RESTful API principles** and a clean **MVC-style architecture**.  
The service supports **URL redirection**, **click tracking**, **rate limiting**, and is fully **Dockerized** for easy deployment.

---

## 🚀 Features

* 🔗 Shorten long URLs into compact short links
* 🔁 Redirect short URLs to original destinations
* 📊 Track total click count and visit timestamps
* 🛡️ Rate limiting to prevent API abuse
* ✅ URL validation and error handling
* ⚡ Fast redirection using MongoDB indexing
* 🧩 Modular MVC-based project structure
* 🐳 Docker & Docker Compose support
* 🔌 Backend-only REST API (Postman / frontend ready)

---

## 🏗️ System Architecture

```mermaid
flowchart TB

U["Client / User"]
A["Express API Server"]
R["Rate Limiter Middleware"]
C["Controller Layer"]
S["Service Layer"]
M["MongoDB Database"]

U --> A
A --> R
R --> C
C --> S
S --> M
M --> S
S --> C
C --> A
A --> U

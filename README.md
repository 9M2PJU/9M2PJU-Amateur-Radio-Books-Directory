# 📻 9M2PJU Ham Radio Books Library
> A premium, modern, and mobile-native digital library for Amateur Radio enthusiasts.

<p align="center">
  <img src="public/logo.png" width="180" alt="9M2PJU Logo">
</p>

## ✨ Highlights
- **Modern UI**: Sleek glassmorphism design with a responsive grid/list view.
- **Native App Experience**: Fully PWA-compliant with "Install to Home Screen" support.
- **Lightning Fast**: Instant search and smooth transitions.
- **Organized**: Automatic indexing of your Radio archive with beautiful folder navigation.
- **Branded**: Custom branding and high-end typography (Plus Jakarta Sans).

---

## 🛠️ Architecture
The library uses a modern decoupled architecture for maximum stability and performance.

### System Workflow
```mermaid
graph TD
    A[User Browser/PWA] -->|Fetches UI| B[Nginx Server]
    B -->|Serves Static Files| C[Public/ folder]
    A -->|Requests JSON Index| D[Nginx Autoindex API]
    D -->|Scans Filesystem| E[/media/Apps/Amatur/books/]
    A -->|Direct Download| F[Nginx Data Endpoint]
    F -->|Streams PDF| E
```

### Component Breakdown
```mermaid
pie title Project Composition
    "Frontend (HTML/JS)" : 45
    "CSS/Branding" : 30
    "Nginx Config" : 15
    "Docker/Ops" : 10
```

---

## 🚀 Features Matrix

| Feature | Description | Status |
| :--- | :--- | :---: |
| **Glassmorphism** | Semi-transparent panels with Blur effects | ✅ |
| **PWA Support** | Installable as a native app on iOS/Android | ✅ |
| **Instant Search** | Filter hundreds of books in real-time | ✅ |
| **Breadcrumbs** | Easy navigation in deep folder structures | ✅ |
| **Dark Mode** | Default midnight theme for low-light reading | ✅ |
| **Safe Areas** | Mobile support for notches & safe zones | ✅ |

---

## 👨‍💻 Developed By
**Served to you by 9M2PJU**
Visit us at [hamradio.my](https://hamradio.my)

---

### 📡 Roadmap
```mermaid
gantt
    title Development Roadmap
    dateFormat  YYYY-MM-DD
    section Core
    UI Modernization      :done, 2026-02-01, 1d
    PWA Integration       :done, 2026-02-01, 1d
    section Future
    Offline PDF Caching   :active, 2026-03-01, 30d
    Search In-Book        :2026-04-01, 45d
```

---
*73 and Good DX!* 📻📡

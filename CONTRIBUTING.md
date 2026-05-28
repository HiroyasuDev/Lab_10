# Contributing to Lapaki Second Brain & Swarm

Thank you for your interest in contributing to Lapaki! This project follows structured engineering conventions to maintain device-native layouts, rapid responsiveness, and clean multi-agent execution telemetry.

## 🚀 Branching Strategy

Our release and development cycle is managed through 5 active branches. Please target your contributions appropriately:

1. **`develop`**: All active feature development, agent refining, and layout adjustments. Always create feature branches from `develop` and submit your Pull Requests (PRs) back to `develop`.
2. **`staging`**: Integrates features from `develop` for comprehensive integration testing, classroom reviews, and pre-release audits.
3. **`main`**: The stable, production-ready release branch. Only direct fast-forward merges from `staging` are pushed to `main`.
4. **`prototype`**: Sandbox for testing new experimental prompt refineries, LLM instructions, or MCP bridges.
5. **`baseline`**: Reference blueprints and foundational templates.

---

## 💅 Styling and Code Conventions

We maintain a zero-dependency, local-first HTML5 and client-side JavaScript design.

### 1. CSS & Layouts (No Tailwind)
- Use standard vanilla CSS and custom HSL variables.
- Prioritize **Fluid Typography**: Use relative `rem`/`em` and viewport-relative units (`vw`/`vh`) rather than fixed pixels (`px`).
- Always define media queries for Mobile Native (`<= 480px`), Tablet Native (`481px` to `1024px`), and Desktop Native (`> 1024px`).
- **Touch-safe Guidelines**: Tap targets, selectors, text inputs, and navigation buttons must be at least `48px` high on mobile devices.

### 2. Code Quality Tooling
Before submitting a PR, ensure your changes are linted and formatted:
```bash
# Format code using Prettier
npm run format

# Audit JavaScript using ESLint
npm run lint
```

---

## 🔍 Pull Request Process

1. Create a detailed descriptive branch named `feat/your-feature` or `fix/your-fix`.
2. Commit your modifications with meaningful [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) messages (e.g. `feat: add Logistics Agent system prompt setting override`).
3. Ensure no local system configuration assets (like `.DS_Store`) or environment files are staged.
4. Verify layout integrity across all device viewports (Desktop, Tablet, Mobile) using developer browser emulation.
5. Submit a Pull Request targeting the `develop` branch.

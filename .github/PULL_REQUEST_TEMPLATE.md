## Description

Please include a detailed summary of the changes made, the rationale behind the technical decisions, and the components affected.

Fixes # (issue number)

## Type of Change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Refactoring (style changes, performance optimizations, no API changes)
- [ ] Documentation update

## 📱 Device Nativity & Layout Verification

Please confirm that you have emulated and tested your layout changes on the following viewports:

- [ ] **Desktop Native (>1024px)**: Generous spacing, horizontal progress bars, bipartite alignment.
- [ ] **Tablet Native (481px to 1024px)**: Single-column fallbacks, clean scrolls, no font overlap.
- [ ] **Mobile Native (<= 480px)**: Root typography scales dynamically to `13.5px`, tap targets $\ge$ 48px height, horizontal pipeline adapts to vertical rendering without truncation.

## Checklist

- [ ] My code follows the code conventions of this project (`npm run format` & `npm run lint` passes).
- [ ] I have updated the documentation accordingly (including `README.md` diagrams if necessary).
- [ ] My changes generate no new browser console errors or warning messages.
- [ ] I have verified that all live Gemini API calls are properly handled, and robust JSON extraction filters are maintained.

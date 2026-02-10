---
trigger: always_on
---

# Quartz 4 Development Standards

- **Documentation First**: Before suggesting structural changes to layout or components, always reference https://quartz.jzhao.xyz/.
- **Component Architecture**: All components must follow the `QuartzComponent` functional pattern.
- **Styling**: Use SCSS variables located in `quartz/styles/variables.scss` for global changes. Do not use inline styles.
- **Build Validation**: Every code modification must be followed by `npx quartz build` to verify TypeScript integrity.
- **Pathing**: Ensure all internal links within the `/content` directory utilize Obsidian-style [[wikilinks]].
import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img src={`https://${cfg.baseUrl}/static/icon.png`} alt={title} class="page-icon" />
        {title}
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.page-title a {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.page-icon {
  width: 150px;
  height: 150px;
  object-fit: contain;
  mix-blend-mode: multiply; /* Hides white background in light mode */
}

.page-icon {
  width: 150px;
  height: 150px;
  object-fit: contain;
  mix-blend-mode: multiply; /* Light mode: White becomes transparent */
  display: block; /* Ensure no inline spacing issues */
  opacity: 0.9; /* Slight transparency for texture blend */
}

/* Dark Mode: Invert (Black->White, White->Black) then Screen (Black becomes transparent) */
:root[data-theme="dark"] .page-icon {
  filter: invert(1) grayscale(1); 
  mix-blend-mode: screen; 
  opacity: 0.8;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor

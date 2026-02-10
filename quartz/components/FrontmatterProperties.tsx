import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/frontmatterProperties.scss"

interface FrontmatterPropertiesOptions {
    properties: string[]
}

const defaultOptions: FrontmatterPropertiesOptions = {
    properties: ["related_models", "category"]
}

export default ((opts?: Partial<FrontmatterPropertiesOptions>) => {
    const options = { ...defaultOptions, ...opts }

    const FrontmatterProperties: QuartzComponent = ({
        fileData,
        displayClass
    }: QuartzComponentProps) => {
        const frontmatter = fileData.frontmatter
        if (!frontmatter) return null

        const propertiesToShow: { key: string; values: any[] }[] = []

        // Process each configured property
        options.properties.forEach(prop => {
            const value = frontmatter[prop]
            if (!value) return

            let values: any[] = []

            // Handle arrays
            if (Array.isArray(value)) {
                values = value
            } else {
                values = [value]
            }

            if (values.length > 0) {
                propertiesToShow.push({ key: prop, values })
            }
        })

        if (propertiesToShow.length === 0) return null

        // Helper function to format property names
        const formatPropertyName = (key: string): string => {
            return key
                .split('_')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
        }

        // Helper function to parse wiki-style links [[Note Name]]
        const parseWikiLink = (text: string): { isLink: boolean; text: string; href?: string } => {
            const wikiLinkMatch = text.match(/^\[\[(.+?)\]\]$/)
            if (wikiLinkMatch) {
                const linkText = wikiLinkMatch[1]
                // Convert to URL-friendly slug
                const slug = linkText.toLowerCase().replace(/\s+/g, '-')
                return { isLink: true, text: linkText, href: slug }
            }
            return { isLink: false, text }
        }

        return (
            <div class={`frontmatter-properties ${displayClass ?? ""}`}>
                {propertiesToShow.map(({ key, values }) => (
                    <div class="property-row">
                        <span class="property-label">{formatPropertyName(key)}:</span>
                        <span class="property-values">
                            {values.map((val, idx) => {
                                const parsed = parseWikiLink(String(val))
                                return (
                                    <>
                                        {parsed.isLink ? (
                                            <a href={parsed.href} class="internal">
                                                {parsed.text}
                                            </a>
                                        ) : (
                                            <span class="property-value">{String(val)}</span>
                                        )}
                                        {idx < values.length - 1 && <span class="separator"> · </span>}
                                    </>
                                )
                            })}
                        </span>
                    </div>
                ))}
            </div>
        )
    }

    return FrontmatterProperties
}) satisfies QuartzComponentConstructor
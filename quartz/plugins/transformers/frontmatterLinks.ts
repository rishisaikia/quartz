import { QuartzTransformerPlugin } from "../types"
import { Root } from "mdast"
import { visit } from "unist-util-visit"

export interface Options {
    properties: string[]
}

const defaultOptions: Options = {
    properties: ["related_models"]
}

export const FrontmatterLinks: QuartzTransformerPlugin<Partial<Options> | undefined> = (userOpts) => {
    const opts = { ...defaultOptions, ...userOpts }

    return {
        name: "FrontmatterLinks",
        markdownPlugins() {
            return [
                () => {
                    return (tree: Root, file) => {
                        const frontmatter = file.data.frontmatter as Record<string, any>

                        if (!frontmatter) return

                        // Collect all wiki-style links from properties
                        const linksToAdd: string[] = []

                        opts.properties.forEach(prop => {
                            const value = frontmatter[prop]
                            if (!value) return

                            const values = Array.isArray(value) ? value : [value]

                            values.forEach((val: any) => {
                                const strVal = String(val)
                                const wikiLinkMatch = strVal.match(/^\[\[(.+?)\]\]$/)
                                if (wikiLinkMatch) {
                                    linksToAdd.push(wikiLinkMatch[1])
                                }
                            })
                        })

                        // If we found links, add them as actual wiki-link nodes in the AST
                        // This way CrawlLinks plugin will pick them up
                        if (linksToAdd.length > 0) {
                            // Create a hidden paragraph with the links at the end of the document
                            const linkNodes = linksToAdd.map(link => ({
                                type: "wikiLink" as const,
                                value: link,
                                data: {
                                    alias: link,
                                    hName: "a",
                                    hProperties: {
                                        className: ["internal"],
                                        href: link,
                                        "data-slug": link,
                                    }
                                }
                            }))

                            // Add links as actual nodes in the tree
                            // We'll wrap them in a hidden div
                            tree.children.push({
                                type: "html",
                                value: `<!-- frontmatter-links: ${linksToAdd.join(", ")} -->`
                            })

                            // Add each link as a wikiLink node
                            linksToAdd.forEach(link => {
                                tree.children.push({
                                    type: "paragraph",
                                    children: [
                                        {
                                            type: "wikiLink",
                                            value: link,
                                            data: {
                                                alias: link,
                                            }
                                        } as any
                                    ],
                                    data: {
                                        hProperties: {
                                            className: ["frontmatter-graph-link"],
                                            style: "display: none;"
                                        }
                                    }
                                } as any)
                            })
                        }
                    }
                }
            ]
        },
    }
}

export default FrontmatterLinks
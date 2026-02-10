import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface VerticalSpacerOptions {
    height: string
}

const defaultOptions: VerticalSpacerOptions = {
    height: "2rem",
}

export default ((opts?: Partial<VerticalSpacerOptions>) => {
    const options: VerticalSpacerOptions = { ...defaultOptions, ...opts }
    function VerticalSpacer({ displayClass }: QuartzComponentProps) {
        return <div class={classNames(displayClass, "vertical-spacer")} style={{ height: options.height, display: "block", width: "100%" }} />
    }
    return VerticalSpacer
}) satisfies QuartzComponentConstructor

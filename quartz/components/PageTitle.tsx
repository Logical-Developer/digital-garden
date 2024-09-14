import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { fileURLToPath } from "node:url"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  return (
    <h1 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}> {title} </a>
      <a href={baseDir}> <img src= "../asset/img/logo1.jpg" width={"250px"}></img> </a>
    </h1>
    
  )

}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor

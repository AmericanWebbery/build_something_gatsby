import { graphql, useStaticQuery } from "gatsby"

function useSiteMeta() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMeta

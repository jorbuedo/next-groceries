export function parseUriTemplate(
  uriTemplate: string,
  params: Record<string, string>,
): string {
  const regex = /:(\w+)/g
  return uriTemplate.replace(regex, (_, p1) => params[p1] || `:${p1}`)
}

export function parseUriTemplateWithQuery(
  uriTemplate: string,
  {
    params,
    query,
  }: { params?: Record<string, string>; query?: Record<string, string> },
): string {
  const queryString = new URLSearchParams(query).toString()
  return `${parseUriTemplate(uriTemplate, params || {})}${
    queryString ? '?' : ''
  }${queryString}`
}

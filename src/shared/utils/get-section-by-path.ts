const getSectionByPath = <Sections extends Record<string, Record<string, string>>>(
  paths: Sections,
  path: string
): keyof Sections | null => {
  for (const [section, routes] of Object.entries(paths) as [keyof Sections, Record<string, string>][]) {
    if (Object.values(routes).includes(path)) {
      return section;
    }
  }
  return null;
}

export default getSectionByPath;

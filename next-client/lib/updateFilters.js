export default function (filters = {}, [key, value]) {
  if (!key) return filters;

  const filterObject = { ...filters };
  filterObject[key] = value;
  return filterObject;
}

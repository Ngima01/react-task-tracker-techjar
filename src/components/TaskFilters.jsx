export default function TaskFilters({
  filter,
  setFilter,
  sortBy,
  setSortBy,
  search,
  setSearch,
}) {
  return (
    <div className="filters">
      <select onChange={e => setFilter(e.target.value)}>
        <option>All</option>
        <option>Pending</option>
        <option>Done</option>
      </select>

      <select onChange={e => setSortBy(e.target.value)}>
        <option value="date">Sort by Date</option>
        <option value="name">Sort by Name</option>
      </select>

      <input
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
}

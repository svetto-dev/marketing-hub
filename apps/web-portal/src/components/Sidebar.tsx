function Sidebar() {
  return (
    <aside
      style={{
        borderRight: "1px solid #e5e7eb",
        padding: "16px"
      }}
    >
      <nav>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gap: "8px"
          }}
        >
          <li>🏠 Dashboard</li>
          <li>📈 Campaigns</li>
          <li>🧲 Leads</li>
          <li>📂 Files</li>
          <li>📅 Meetings</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
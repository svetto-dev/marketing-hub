import './App.css'

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "240px 1fr",
        gridTemplateRows: "auto 1fr",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      }}
    >
      {/* Header */}
      <header
        style={{
          gridColumn: "1 / 3",
          padding: "16px 24px",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <h1 style={{ fontSize: "20px", fontWeight: 600 }}>Marketing Hub – Client Portal</h1>
        <span style={{ fontSize: "14px", color: "#6b7280" }}>v0.1 • WIP</span>
      </header>

      {/* Sidebar */}
      <aside
        style={{
          borderRight: "1px solid #e5e7eb",
          padding: "16px"
        }}
      >
        <nav>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "8px" }}>
            <li>🏠 Dashboard</li>
            <li>📈 Campaigns</li>
            <li>🧲 Leads</li>
            <li>📂 Files</li>
            <li>📅 Meetings</li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main style={{ padding: "24px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px" }}>
          Welcome to your client portal
        </h2>
        <p style={{ color: "#4b5563", fontSize: "14px", maxWidth: "520px" }}>
          Here you&apos;ll soon be able to see your active campaigns, leads, files, and book meetings
          with your account manager. This is just the first layout skeleton.
        </p>
      </main>
    </div>
  );
}

export default App;

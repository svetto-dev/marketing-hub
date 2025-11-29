function Header() {
  return (
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
      <h1 style={{ fontSize: "20px", fontWeight: 600 }}>
        Marketing Hub – Client Portal
      </h1>
      <span style={{ fontSize: "14px", color: "#6b7280" }}>v0.1 • WIP</span>
    </header>
  );
}

export default Header;

function Dashboard() {
  return (
    <div>
      <h2
        style={{
          fontSize: "18px",
          fontWeight: 600,
          marginBottom: "8px"
        }}
      >
        Dashboard
      </h2>
      <p style={{ color: "#4b5563", fontSize: "14px", marginBottom: "16px" }}>
        Overview of your activity (dummy data for now).
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "12px"
        }}
      >
        <div style={{ padding: "12px", border: "1px solid #e5e7eb", borderRadius: "8px" }}>
          <div style={{ fontSize: "12px", color: "#6b7280" }}>Active campaigns</div>
          <div style={{ fontSize: "20px", fontWeight: 600 }}>4</div>
        </div>
        <div style={{ padding: "12px", border: "1px solid #e5e7eb", borderRadius: "8px" }}>
          <div style={{ fontSize: "12px", color: "#6b7280" }}>Leads this month</div>
          <div style={{ fontSize: "20px", fontWeight: 600 }}>128</div>
        </div>
        <div style={{ padding: "12px", border: "1px solid #e5e7eb", borderRadius: "8px" }}>
          <div style={{ fontSize: "12px", color: "#6b7280" }}>Upcoming meetings</div>
          <div style={{ fontSize: "20px", fontWeight: 600 }}>3</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
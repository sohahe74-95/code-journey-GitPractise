import React, { useState } from "react";

export default function TeamList() {
  const [show, setShow] = useState(false);
  const [team, setTeam] = useState(["Soha", "maryam", "parsa"]);
  const [name, setName] = useState("");

  const toggleShow = () => setShow(!show);

  const addMember = () => {
    if (name.trim() !== "") {
      setTeam([...team, name]);
      setName("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h1>Code Journey</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <button onClick={addMember} style={{ padding: "5px 10px" }}>
          Add Member
        </button>
      </div>

      <button onClick={toggleShow} style={{ margin: "10px", padding: "10px" }}>
        {show ? "Hide members" : "Show members"}
      </button>

      {show && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          {team.map((member, index) => (
            <div
              key={index}
              style={{
                margin: "5px 0",
                padding: "5px 20px",
                border: "1px solid #4caf50",
                borderRadius: "5px",
                display: "inline-block",
              }}
            >
              {member}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

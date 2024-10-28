import React from "react";

const MyResume = () => {
  const pdfUrl =
    "https://firebasestorage.googleapis.com/v0/b/person-resume.appspot.com/o/ayman-resume.pdf?alt=media&token=2a19b9ba-ae7b-45ed-a08d-660c0db24409";

  return (
    <div style={styles.container}>
      <h1>Ayman Ali's Resume</h1>
      <a href={pdfUrl} download style={styles.link}>
        View and Download Resume
      </a>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
  },
  link: {
    marginTop: "20px",
    textDecoration: "none",
    color: "#007BFF",
    fontSize: "20px",
  },
};

export default MyResume;

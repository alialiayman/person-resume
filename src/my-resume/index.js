import {
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import { doc, setDoc } from "firebase/firestore"; // Import Firestore functions
import React, { useState } from "react";
import { db } from "../firebase"; // Import your Firebase configuration

const MyResume = ({ userId }) => {
  const [resumeData, setResumeData] = useState(null);
  const [newEducation, setNewEducation] = useState("");
  const [newOverview, setNewOverview] = useState("");
  const [newContactInfo, setNewContactInfo] = useState("");
  const [newEmployer, setNewEmployer] = useState({
    company: "",
    position: "",
    date: "",
    location: "",
  });
  const [newSkill, setNewSkill] = useState("");

  // useEffect(() => {
  //   const fetchResumeData = async () => {
  //     const docRef = doc(db, "resumes", userId);
  //     const docSnap = await getDoc(docRef);

  //     if (docSnap.exists()) {
  //       setResumeData(docSnap.data());
  //     } else {
  //       // Initialize with empty data
  //       setResumeData({
  //         education: "",
  //         overview: "",
  //         contactInfo: "",
  //         previousEmployers: [],
  //         skills: [],
  //       });
  //     }
  //   };

  //   // fetchResumeData();
  // }, [userId]);

  const handleSave = async () => {
    if (resumeData) {
      await setDoc(doc(db, "resumes", userId), resumeData);
    }
  };

  const handleAddEducation = () => {
    if (newEducation.trim()) {
      setResumeData((prevData) => ({ ...prevData, education: newEducation }));
      setNewEducation("");
    }
  };

  const handleAddOverview = () => {
    if (newOverview.trim()) {
      setResumeData((prevData) => ({ ...prevData, overview: newOverview }));
      setNewOverview("");
    }
  };

  const handleAddContactInfo = () => {
    if (newContactInfo.trim()) {
      setResumeData((prevData) => ({
        ...prevData,
        contactInfo: newContactInfo,
      }));
      setNewContactInfo("");
    }
  };

  const handleAddPreviousEmployer = () => {
    if (newEmployer.company && newEmployer.position) {
      setResumeData((prevData) => ({
        ...prevData,
        previousEmployers: [...prevData.previousEmployers, newEmployer],
      }));
      setNewEmployer({ company: "", position: "", date: "", location: "" });
    }
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setResumeData((prevData) => ({
        ...prevData,
        skills: [...prevData.skills, newSkill],
      }));
      setNewSkill("");
    }
  };

  return (
    <Grid2 container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          My Resume
        </Typography>
      </Grid>

      {/* Education Section */}
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">Education</Typography>
            {resumeData?.education ? (
              <Typography variant="body1">{resumeData.education}</Typography>
            ) : (
              <Button onClick={handleAddEducation}>
                Add Your First Education
              </Button>
            )}
            <TextField
              fullWidth
              value={newEducation}
              onChange={(e) => setNewEducation(e.target.value)}
              variant="outlined"
              placeholder="Enter your education"
              style={{ marginTop: 10 }}
            />
          </CardContent>
        </Card>
      </Grid>

      {/* Overview Section */}
      <Grid2 item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">Overview</Typography>
            {resumeData?.overview ? (
              <Typography variant="body1">{resumeData.overview}</Typography>
            ) : (
              <Button onClick={handleAddOverview}>
                Add Your First Overview
              </Button>
            )}
            <TextField
              fullWidth
              value={newOverview}
              onChange={(e) => setNewOverview(e.target.value)}
              variant="outlined"
              placeholder="Enter your overview"
              style={{ marginTop: 10 }}
            />
          </CardContent>
        </Card>
      </Grid2>

      {/* Contact Information Section */}
      <Grid2 item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">Contact Information</Typography>
            {resumeData?.contactInfo ? (
              <Typography variant="body1">{resumeData.contactInfo}</Typography>
            ) : (
              <Button onClick={handleAddContactInfo}>
                Add Your First Contact Info
              </Button>
            )}
            <TextField
              fullWidth
              value={newContactInfo}
              onChange={(e) => setNewContactInfo(e.target.value)}
              variant="outlined"
              placeholder="Enter your contact information"
              style={{ marginTop: 10 }}
            />
          </CardContent>
        </Card>
      </Grid2>

      {/* Previous Employers Section */}
      <Grid2 item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5">Previous Employers</Typography>
            {resumeData?.previousEmployers.length > 0 ? (
              resumeData.previousEmployers.map((employer, index) => (
                <Typography key={index} variant="body1">
                  {employer.position} at {employer.company} ({employer.date}) -{" "}
                  {employer.location}
                </Typography>
              ))
            ) : (
              <Button onClick={handleAddPreviousEmployer}>
                Add Your First Employer
              </Button>
            )}
            <TextField
              label="Company"
              value={newEmployer.company}
              onChange={(e) =>
                setNewEmployer({ ...newEmployer, company: e.target.value })
              }
              variant="outlined"
              style={{ marginTop: 10 }}
            />
            <TextField
              label="Position"
              value={newEmployer.position}
              onChange={(e) =>
                setNewEmployer({ ...newEmployer, position: e.target.value })
              }
              variant="outlined"
              style={{ marginTop: 10 }}
            />
            <TextField
              label="Date Range"
              value={newEmployer.date}
              onChange={(e) =>
                setNewEmployer({ ...newEmployer, date: e.target.value })
              }
              variant="outlined"
              style={{ marginTop: 10 }}
            />
            <TextField
              label="Location"
              value={newEmployer.location}
              onChange={(e) =>
                setNewEmployer({ ...newEmployer, location: e.target.value })
              }
              variant="outlined"
              style={{ marginTop: 10 }}
            />
            <Button
              onClick={handleAddPreviousEmployer}
              style={{ marginTop: 10 }}
            >
              Add Employer
            </Button>
          </CardContent>
        </Card>
      </Grid2>

      {/* Skills Section */}
      <Grid2 item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5">Skills</Typography>
            {resumeData?.skills.length > 0 ? (
              resumeData.skills.map((skill, index) => (
                <Chip key={index} label={skill} style={{ margin: "5px" }} />
              ))
            ) : (
              <Button onClick={handleAddSkill}>Add Your First Skill</Button>
            )}
            <TextField
              label="Add Skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              variant="outlined"
              style={{ marginTop: 10 }}
            />
            <Button onClick={handleAddSkill} style={{ marginTop: 10 }}>
              Add Skill
            </Button>
          </CardContent>
        </Card>
      </Grid2>

      <Button variant="contained" color="primary" onClick={handleSave}>
        Save Resume
      </Button>
    </Grid2>
  );
};

export default MyResume;

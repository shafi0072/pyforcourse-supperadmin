import { TextField } from "@mui/material";
import React, { useState } from "react";
import CollectionsIcon from '@mui/icons-material/Collections';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

const BasicInfo = () => {

    // cover photo 
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
      // Do something with the selected file, e.g., upload it.
    };
  return (
    <div className="w-[40%]">
      <p>Course Name</p>
      <TextField
        className="w-full my-2"
        id="outlined-basic"
        label="Course Name"
        variant="outlined"
      />
      <p>Course Description</p>
      <TextField
        className="my-2"
        variant="outlined"
        fullWidth
        multiline
        minRows={3}
        size="small"
      />
      <p>Course Price</p>
      <TextField
        className="w-full my-2"
        id="outlined-basic"
        label="Course Price"
        variant="outlined"
      />
      <p>Course Duration</p>
      <TextField
        className="w-full my-2"
        id="outlined-basic"
        label="Course Duration"
        variant="outlined"
      />
     <div
      className="w-full border-2 border-dotted h-44 my-4 text-center flex flex-col items-center justify-center"
      style={{ cursor: 'pointer' }}
    >
      <label>
        <input
          type="file"
          className="hidden"
          accept="image/*"
        />
        <CollectionsIcon fontSize="large" />
        <p>Drop your Cover image here or select</p>
        <p className="text-green-400">Click to browse</p>
      </label>
      {selectedFile && (
        <p>Selected File: {selectedFile.name}</p>
      )}
    </div>
    <div
      className="w-full border-2 border-dotted h-32 text-center flex flex-col items-center justify-center"
      style={{ cursor: 'pointer' }}
    >
      <label>
        <input
          type="file"
          className="hidden"
          accept="video/*"
        />
        <VideoLibraryIcon fontSize="large" />
        <p>Drop your introduction video here or select</p>
        <p className="text-green-400">Click to browse</p>
      </label>
    </div>

    </div>
  );
};

export default BasicInfo;

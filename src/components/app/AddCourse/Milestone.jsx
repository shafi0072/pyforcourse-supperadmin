import { TextField } from "@mui/material";
import React from "react";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CollectionsIcon from "@mui/icons-material/Collections";
import mitt from "next/dist/shared/lib/mitt";

const Milestone = () => {
  return (
    <div className="mt-2 w-1/3 ">
      <div className="border-2 p-4 milestone mb-4">
        <p className="mt-4">Milestone Name*</p>
        <TextField
          className="w-full my-2"
          id="outlined-basic"
          label="MileStone Name"
          variant="outlined"
        />
        <div className="module">
          <p className="mt-4">Module Name*</p>
          <TextField
            className="w-full my-2"
            id="outlined-basic"
            label="Module Name"
            variant="outlined"
          />
          <div className="videos">
            <p>Add Video</p>
            <TextField
              className="w-full my-2"
              id="outlined-basic"
              label="Video Name"
              variant="outlined"
            />
            <div
              className="w-full border-2 border-dotted h-16 text-center flex  items-center justify-center mb-2"
              style={{ cursor: "pointer" }}
            >
              <label className="flex gap-3 items-center">
                <input type="file" className="hidden" accept="video/*" />
                <CollectionsIcon fontSize="large" />
                <p className="text-green-400">Click to Add Thumbnail</p>
              </label>
            </div>
            <div
              className="w-full border-2 border-dotted h-16 text-center flex  items-center justify-center"
              style={{ cursor: "pointer" }}
            >
              <label className="flex gap-3 items-center">
                <input type="file" className="hidden" accept="video/*" />
                <VideoLibraryIcon fontSize="large" />
                <p className="text-green-400">Click to Add Video</p>
              </label>
            </div>
            <button className="px-4 py-2 text-black bg-green-400 my-2 rounded-md">
              Add more video
            </button>
          </div>

          <div className="quiz">
            <p className="mt-4">Quiz</p>
            <TextField
              className="w-full my-2"
              id="outlined-basic"
              label="Quiz"
              variant="outlined"
            />
            <p>Options</p>
            <TextField
              className="w-full my-2"
              id="outlined-basic"
              label="Option 1"
              variant="outlined"
            />
            <TextField
              className="w-full my-2"
              id="outlined-basic"
              label="Option 2"
              variant="outlined"
            />
            <TextField
              className="w-full my-2"
              id="outlined-basic"
              label="Option 3"
              variant="outlined"
            />
            <TextField
              className="w-full my-2"
              id="outlined-basic"
              label="Option 4"
              variant="outlined"
            />
            <button className="px-4 py-2 text-black bg-green-400 my-2 rounded-md">
              Add more quiz
            </button>
          </div>
          <button className="px-4 py-2 text-black bg-green-400 my-2 rounded-md">
            Add more module
          </button>
        </div>
      </div>
      <button
        onClick={hanldeMilestone}
        className="px-4 py-2 text-black bg-green-400 my-2 rounded-md"
      >
        Add more milestone
      </button>
    </div>
  );
};

export default Milestone;

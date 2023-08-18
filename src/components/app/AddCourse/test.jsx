const admin = [
    {
      userName:'john',
      email:'john@example.com',   
      password:'password',
      phone:'123',
      courses:[
        {
          name:'web Development',
          details:'web Development',
          price:'100 BDT',
          duration:'10 mins',
          coverPhoto:'http://example.com',
          introductionVideo:'',
          courseFlow:[
            {
              milestone:1,
              modues:[
                {
                  nameOfModule:'web Development',
                  videos:[
                    {
                      name:'web development part 1',
                      thubnail:'1',
                      video:'http://example.com',
                    }
                  ],
                 Quize:[
                  {
                    questions:'what is html',
                    options:['Html'],
                    answer:'Html',
                  }
                 ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]



  //


  import React, { useState } from "react";
  import { TextField } from "@mui/material";
  import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
  import CollectionsIcon from '@mui/icons-material/Collections';
  
  const CourseFlow = () => {
    const [milestones, setMilestones] = useState([
      {
        milestoneName: "",
        modules: [
          {
            moduleName: "",
            videos: [{ videoName: "", thumbnail: "" }],
          },
        ],
        quizzes: [""],
      },
    ]);
  
    const handleMilestoneChange = (index, field, value) => {
      const newMilestones = [...milestones];
      newMilestones[index][field] = value;
      setMilestones(newMilestones);
    };
  
    const addModule = (milestoneIndex) => {
      const newMilestones = [...milestones];
      newMilestones[milestoneIndex].modules.push({
        moduleName: "",
        videos: [{ videoName: "", thumbnail: "" }],
      });
      setMilestones(newMilestones);
    };
  
    const addVideo = (milestoneIndex, moduleIndex) => {
      const newMilestones = [...milestones];
      newMilestones[milestoneIndex].modules[moduleIndex].videos.push({
        videoName: "",
        thumbnail: "",
      });
      setMilestones(newMilestones);
    };
  
    const addQuiz = (milestoneIndex) => {
      const newMilestones = [...milestones];
      newMilestones[milestoneIndex].quizzes.push("");
      setMilestones(newMilestones);
    };
  
    const addMilestone = () => {
      setMilestones([
        ...milestones,
        {
          milestoneName: "",
          modules: [
            {
              moduleName: "",
              videos: [{ videoName: "", thumbnail: "" }],
            },
          ],
          quizzes: [""],
        },
      ]);
    };
  
    const renderMilestones = () => {
      return milestones.map((milestone, milestoneIndex) => (
        <div key={milestoneIndex} className="border-2 p-4 milestone">
          <p className="mt-4">Milestone Name*</p>
          <TextField
            className="w-full my-2"
            label="Milestone Name"
            variant="outlined"
            value={milestone.milestoneName}
            onChange={(e) =>
              handleMilestoneChange(milestoneIndex, "milestoneName", e.target.value)
            }
          />
          <div className="module">
            {milestone.modules.map((module, moduleIndex) => (
              <div key={moduleIndex}>
                <p className="mt-4">Module Name*</p>
                <TextField
                  className="w-full my-2"
                  label="Module Name"
                  variant="outlined"
                  value={module.moduleName}
                  onChange={(e) =>
                    handleMilestoneChange(
                      milestoneIndex,
                      "modules",
                      milestone.modules.map((m, i) =>
                        i === moduleIndex ? { ...m, moduleName: e.target.value } : m
                      )
                    )
                  }
                />
                <div className="videos">
                  {module.videos.map((videoItem, videoIndex) => (
                    <div key={videoIndex}>
                      <p>Add Video</p>
                      <TextField
                        className="w-full my-2"
                        label="Video Name"
                        variant="outlined"
                        value={videoItem.videoName}
                        onChange={(e) =>
                          handleMilestoneChange(
                            milestoneIndex,
                            "modules",
                            milestone.modules.map((m, i) =>
                              i === moduleIndex
                                ? {
                                    ...m,
                                    videos: m.videos.map((v, vi) =>
                                      vi === videoIndex
                                        ? { ...v, videoName: e.target.value }
                                        : v
                                    ),
                                  }
                                : m
                            )
                          )
                        }
                      />
                      <div
                        className="w-full border-2 border-dotted h-16 text-center flex  items-center justify-center mb-2"
                        style={{ cursor: "pointer" }}
                      >
                        <label className="flex gap-3 items-center">
                          <input type="file" className="hidden" accept="image/*" />
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
                    </div>
                  ))}
                  <button
                    className="px-4 py-2 text-black bg-green-400 my-2 rounded-md"
                    onClick={() => addVideo(milestoneIndex, moduleIndex)}
                  >
                    Add more video
                  </button>
                </div>
              </div>
            ))}
            <button
              className="px-4 py-2 text-black bg-green-400 my-2 rounded-md"
              onClick={() => addModule(milestoneIndex)}
            >
              Add more module
            </button>
          </div>
          <div className="quiz">
            {milestone.quizzes.map((quiz, quizIndex) => (
              <div key={quizIndex}>
                <p className="mt-4">Quiz</p>
                <TextField
                  className="w-full my-2"
                  label="Quiz"
                  variant="outlined"
                  value={quiz}
                  onChange={(e) =>
                    handleMilestoneChange(
                      milestoneIndex,
                      "quizzes",
                      milestone.quizzes.map((q, i) =>
                        i === quizIndex ? e.target.value : q
                      )
                    )
                  }
                />
                {/* Options */}
                {[1, 2, 3, 4].map((optionIndex) => (
                  <TextField
                    key={optionIndex}
                    className="w-full my-2"
                    label={`Option ${optionIndex}`}
                    variant="outlined"
                  />
                ))}
              </div>
            ))}
            <button
              className="px-4 py-2 text-black bg-red-400 my-2 rounded-md"
              onClick={() => addQuiz(milestoneIndex)}
            >
              Add more quiz
            </button>
          </div>
        </div>
      ));
    };
  
    return (
      <div className="mt-2 w-1/3">
        <h2 className="text-2xl font-semibold">Add Course Flow</h2>
        <div>{renderMilestones()}</div>
        <button
          className="px-4 py-2 text-black bg-[rgb(0,140,172)] my-2 rounded-md"
          onClick={addMilestone}
        >
          Add more milestone
        </button>
      </div>
    );
  };
  
  export default CourseFlow;
  ``
  
  //
  import { TextField } from "@mui/material";
import React from "react";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CollectionsIcon from '@mui/icons-material/Collections';

const CourseFlow = () => {
  return (
    <div className="mt-2 w-1/3">
      <h2 className="text-2xl font-semibold">Add Course Flow</h2>
      <div className="border-2 p-4 milestone">
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
            <button className="px-4 py-2 text-black bg-green-400 my-2 rounded-md">Add more video</button>
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
            <button className="px-4 py-2 text-black bg-green-400 my-2 rounded-md">Add more quiz</button>
          </div>
          <button className="px-4 py-2 text-black bg-green-400 my-2 rounded-md">Add more module</button>
        </div>
        <button className="px-4 py-2 text-black bg-green-400 my-2 rounded-md">Add more milestone</button>
      </div>
    </div>
  );
};

export default CourseFlow;


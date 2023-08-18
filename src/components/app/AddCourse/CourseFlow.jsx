import { TextField } from "@mui/material";
import React, { useState } from "react";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CollectionsIcon from "@mui/icons-material/Collections";

const CourseFlow = () => {
  
  const [milestones, setMilestones] = useState([
    {
      milestoneName: "",
      modules: [
        {
          moduleName: "",
          videos: [
            {
              videoName: "",
              thumbnail: "",
              videoFile: null, 
            },
          ],
          quizzes: [
            {
              quizName: "",
              options: ["", "", "", ""],
            },
          ],
        },
      ],
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
      videos: [
        {
          videoName: "",
          thumbnail: "",
          videoFile: null, // New field for video file
        },
      ],
      quizzes: [
        {
          quizName: "",
          options: ["", "", "", ""],
        },
      ],
    });
    setMilestones(newMilestones);
  };

  const addVideo = (milestoneIndex, moduleIndex) => {
    const newMilestones = [...milestones];
    newMilestones[milestoneIndex].modules[moduleIndex].videos.push({
      videoName: "",
      thumbnail: "",
      videoFile: null, // New field for video file
    });
    setMilestones(newMilestones);
  };

  const addQuiz = (milestoneIndex, moduleIndex) => {
    const newMilestones = [...milestones];
    newMilestones[milestoneIndex].modules[moduleIndex].quizzes.push({
      quizName: "",
      options: ["", "", "", ""],
    });
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
            videos: [
              {
                videoName: "",
                thumbnail: "",
                videoFile: null, // New field for video file
              },
            ],
            quizzes: [
              {
                quizName: "",
                options: ["", "", "", ""],
              },
            ],
          },
        ],
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
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
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
                                          ? { ...v, thumbnail: e.target.files[0] }
                                          : v
                                      ),
                                    }
                                  : m
                              )
                            )
                          }
                        />
                        <CollectionsIcon fontSize="large" />
                        <p className="text-green-400">Click to Add Thumbnail</p>
                      </label>
                    </div>
                    <div
                      className="w-full border-2 border-dotted h-16 text-center flex  items-center justify-center"
                      style={{ cursor: "pointer" }}
                    >
                      <label className="flex gap-3 items-center">
                        <input
                          type="file"
                          className="hidden"
                          accept="video/*"
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
                                          ? { ...v, videoFile: e.target.files[0] }
                                          : v
                                      ),
                                    }
                                  : m
                              )
                            )
                          }
                        />
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

              <div className="quiz">
                {module.quizzes.map((quizItem, quizIndex) => (
                  <div key={quizIndex}>
                    <p className="mt-4">Quiz</p>
                    <TextField
                      className="w-full my-2"
                      label="Quiz Name"
                      variant="outlined"
                      value={quizItem.quizName}
                      onChange={(e) =>
                        handleMilestoneChange(
                          milestoneIndex,
                          "modules",
                          milestone.modules.map((m, i) =>
                            i === moduleIndex
                              ? {
                                  ...m,
                                  quizzes: m.quizzes.map((q, qi) =>
                                    qi === quizIndex
                                      ? { ...q, quizName: e.target.value }
                                      : q
                                  ),
                                }
                              : m
                          )
                        )
                      }
                    />
                    {/* Options */}
                    {quizItem.options.map((optionValue, optionIndex) => (
                      <TextField
                        key={optionIndex}
                        className="w-full my-2"
                        label={`Option ${optionIndex + 1}`}
                        variant="outlined"
                        value={optionValue}
                        onChange={(e) =>
                          handleMilestoneChange(
                            milestoneIndex,
                            "modules",
                            milestone.modules.map((m, i) =>
                              i === moduleIndex
                                ? {
                                    ...m,
                                    quizzes: m.quizzes.map((q, qi) =>
                                      qi === quizIndex
                                        ? {
                                            ...q,
                                            options: q.options.map((o, oi) =>
                                              oi === optionIndex
                                                ? e.target.value
                                                : o
                                            ),
                                          }
                                        : q
                                    ),
                                  }
                                : m
                            )
                          )
                        }
                      />
                    ))}
                  </div>
                ))}
                <button
                  className="px-4 py-2 text-black bg-red-400 my-2 rounded-md"
                  onClick={() => addQuiz(milestoneIndex, moduleIndex)}
                >
                  Add more quiz
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
      </div>
    ));
  };

  return (
    <div className="mt-2 w-[45%]">
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

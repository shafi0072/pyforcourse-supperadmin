import React, { useState } from "react";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import DeleteIcon from "@mui/icons-material/Delete";
import Milestone from "./Milestone";
import BasicInfo from "./BasicInfo";
import CourseFlow from "./CourseFlow";



const AddCourse = () => {
  
  return (
    <div className="mt-12 h-screen">
      <div className="py-8 ">
        <div className="flex gap-3 items-center border-b-2 pb-4">
          <CorporateFareIcon fontSize="large" />
          <div>
            <h3 className="text-2xl font-semibold">Add New Course</h3>
          </div>
        </div>
      </div>
      {/* fields ----------- */}
      <div className="flex gap-36">
        <BasicInfo/>
        <CourseFlow/>
        {/* <Milestone setMilestone={setMilestone}  milestone={milestone}/> */}
      </div>
    </div>
  );
};

export default AddCourse;

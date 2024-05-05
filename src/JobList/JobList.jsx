import React from "react";
import JdCard from "./JdCard";

const JobList = ({ jobList = [], isLoadingJobList = false }) => {
    console.log("jobList", jobList)
    return <div className="jd-list-wrapper">{
        Array.isArray(jobList) && (jobList.length > 0) && jobList.map((cardItem) => {
            const { jdUid = "" } = cardItem;
            return <JdCard {...cardItem} key={jdUid} />
        })
    }
        {isLoadingJobList && <div className="dot-loader">Loading...</div>}
    </div>
}

export default JobList;
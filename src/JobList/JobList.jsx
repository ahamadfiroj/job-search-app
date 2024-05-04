import React from "react";
import JdCard from "./JdCard";

const JobList = ({jobList = []})=>{
    console.log("jobList", jobList)
    return <div className="jd-list-wrapper">{
        Array.isArray(jobList) && jobList.length >0 && jobList.map((cardItem)=>{
             const {jdUid=""}=cardItem;
             return <JdCard {...cardItem} key={jdUid}/>
        })
    }</div>
}

export default JobList;
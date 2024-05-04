import React, { useEffect, useState } from "react";
import JobList from "../JobList";
import SearchFilters from "../SearchFilters";
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobList } from "./JobSearchPage.action";
import { fetchApi } from "./Utils";
import { 
    GET_JOB_LIST_FAILED, 
    GET_JOB_LIST_INIT, 
    GET_JOB_LIST_SUCCESS 
} from "../JobList/JobList.constant";
import './JobSearchPage.css';

const JobSearchPage = () => {
    const [offset, setOffset] = useState(0);
    const dispatch = useDispatch();
    const {jobList, isLoadingJobList} = useSelector(state => state);

    const jobListSuccess = (response)=>{
        dispatch(fetchJobList({type:GET_JOB_LIST_SUCCESS, payload:response}));
        setOffset((prev)=>prev + 1)
    }
    const jobListError = (error)=>{
        dispatch(fetchJobList({type:GET_JOB_LIST_FAILED, payload:error}));
    }

    const fetchData=()=>{
        dispatch({type:GET_JOB_LIST_INIT});
        const apiParams= {
            limit:9,
            offset:offset,
        }
        fetchApi(apiParams, jobListSuccess, jobListError)
    }

    useEffect(() => {
        fetchData()
    }, [])
    const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight * 0.2 ||
          isLoadingJobList
        ) {
          return;
        }
        fetchData();
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [isLoadingJobList]);
      
    return <div className="page-layout">
        <SearchFilters jobList={jobList}/>
        <JobList jobList={jobList}/> 
    </div>

}

export default JobSearchPage;
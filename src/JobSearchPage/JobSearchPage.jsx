import React, { useEffect, useState } from "react";
import JobList from "../JobList";
import SearchFilters from "../SearchFilters";
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobList } from "./JobSearchPage.action";
import { fetchApi,  getFilterJdList, throttle } from "./Utils";
import {
    GET_JOB_LIST_FAILED,
    GET_JOB_LIST_INIT,
    GET_JOB_LIST_SUCCESS
} from "../JobList/JobList.constant";
import './JobSearchPage.css';

const JobSearchPage = () => {
    let offset = 0
    const [jdListData, setJdListData] = useState([])
    const [isFilterActive, setIsFilterActive] = useState(false)
    const [selectedFiltersObj, setSelectedFiltersObj] = useState({})

    const dispatch = useDispatch();
    const { jobList, isLoadingJobList } = useSelector(state => state);
    const stringJdList = JSON.stringify(jobList)

    useEffect(()=>{
        if(Array.isArray(jobList) && jobList.length >0 ){
            if(Object.keys(selectedFiltersObj).length > 0){
                const filteredJdList = getFilterJdList(JSON.parse(JSON.stringify(jobList)), selectedFiltersObj)
                setJdListData(filteredJdList)
            }else{
                setJdListData(jobList)
            }
        }
    }, [stringJdList])

    useEffect(()=>{
        if(isFilterActive ){
            const filteredJdList = getFilterJdList(JSON.parse(JSON.stringify(jobList)), selectedFiltersObj)
            setJdListData(filteredJdList)
            setIsFilterActive(false)
        }
    }, [isFilterActive])


    const jobListSuccess = (response) => {
        dispatch(fetchJobList({ type: GET_JOB_LIST_SUCCESS, payload: response }));
        offset++
    }
    const jobListError = (error) => {
        dispatch(fetchJobList({ type: GET_JOB_LIST_FAILED, payload: error }));
    }

    const fetchData = () => {
        dispatch({ type: GET_JOB_LIST_INIT });
        const apiParams = {
            limit: 9,
            offset: offset,
        }
        fetchApi(apiParams, jobListSuccess, jobListError)
    }
    const throttledAPICall = throttle(fetchData, 2000);

    useEffect(() => {
        throttledAPICall()
    }, [])

    const handleScroll = () => {
        if (
            document.documentElement.scrollTop < document.documentElement.offsetHeight - window.innerHeight ||
            isLoadingJobList
        ) {
            return;
        }
        throttledAPICall();
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const onChangeHandler = (selectedValue, name)=>{
        setSelectedFiltersObj({
            ...selectedFiltersObj,
            [name]:selectedValue,
        })
        setIsFilterActive(true)
    }
    return <div className="page-layout">
        <SearchFilters onChangeHandler={onChangeHandler} selectedFiltersObj={selectedFiltersObj}/>
        <JobList jobList={jdListData} isLoadingJobList={isLoadingJobList}/>
    </div>

}

export default JobSearchPage;
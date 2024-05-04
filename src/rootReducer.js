import { 
    GET_JOB_LIST_FAILED, 
    GET_JOB_LIST_INIT, 
    GET_JOB_LIST_SUCCESS 
} from "./JobList/JobList.constant";

const initialState = {
  jobList: [],
  isLoadingJobList:false,
  totalCount:0,
};

const rootReducer =(state = initialState, action) =>{
  switch (action.type) {
    case GET_JOB_LIST_INIT:
      return {
        ...state,
        isLoadingJobList: true
      };
    case GET_JOB_LIST_SUCCESS:
      return {
        ...state,
        jobList: [...action.payload?.jdList],
        totalCount:action.payload?.totalCount,
        isLoadingJobList: false
      };
    case GET_JOB_LIST_FAILED:
      return {
        ...state,
        isLoadingJobList: false
      };
    default:
      return state;
  }
}

export default rootReducer;

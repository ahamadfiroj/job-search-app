import { 
    GET_JOB_LIST_FAILED, 
    GET_JOB_LIST_INIT, 
    GET_JOB_LIST_SUCCESS 
} from "./JobList/JobList.constant";

const initialState = {
  jobList: [],
  isLoadingJobList:false,
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
        jobList: [...state["jobList"], ...action.data],
        isLoadingJobList: false
      };
    case GET_JOB_LIST_FAILED:
      return {
        ...state,
        jobList: [...state["jobList"]],
        isLoadingJobList: false
      };
    default:
      return state;
  }
}

export default rootReducer;
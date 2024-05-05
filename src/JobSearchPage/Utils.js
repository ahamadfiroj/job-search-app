// function to fetch api data
export const fetchApi = (apiParams = {}, successCb = () => { }, errorCb = () => { }) => {
    const body = JSON.stringify(apiParams);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
    };
    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
        .then((response) => response.json())
        .then((result) => successCb(result))
        .catch((error) => errorCb(error));
}

// throttle function for api fetch
export const throttle = (func, limit) =>{
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}

//get cumulative unique data 
export const getCumulativeJdList = (state, response)=>{
     let updatedRes = [...state]
     const getIds = updatedRes.length > 0 && updatedRes.map((item)=>item.jdUid) || [];
     const apiResponse = response?.jdList || []
     apiResponse.length > 0 && apiResponse.map((resItem)=>{
        if(!getIds.includes(resItem.jdUid)){
            updatedRes.push(resItem)
        }
     })
    return [...updatedRes]
}

// formatting filter values as useable for filtering
const arrayObjToKeys = (selectedFiltersObj)=>{
    let filtersObj = {}
    const keysArray = Object.keys(selectedFiltersObj)
    keysArray.length > 0 && keysArray.map((itemKey)=>{
        const valueObj = selectedFiltersObj[itemKey]
        filtersObj[itemKey] = []
        if(Array.isArray(valueObj) && valueObj.length> 0){
            valueObj.map((item)=>{
                item.value && filtersObj[itemKey].push(item.value )
            })
        }else{
            valueObj.value && filtersObj[itemKey].push(valueObj.value)
        }
    })
    return {...filtersObj}
}

//filtering data
export const getFilterJdList = (jobList = [], selectedFiltersObj = {})=>{
    let filteredList = [...jobList]
    const {
        roles=[], 
        numberOfEmployee=[], 
        experience=[], 
        workPreference=[],
        basePaySalary = [],
        location=[]
    } = arrayObjToKeys(selectedFiltersObj)
    if(Array.isArray(roles) && roles.length > 0 ){
        filteredList = filteredList.filter((item)=>roles.includes(item.jobRole))
    }
    if(Array.isArray(numberOfEmployee) && numberOfEmployee.length > 0 ){
        filteredList = filteredList.filter((item)=>numberOfEmployee.includes(item.numberOfEmployee))
    }
    if(Array.isArray(experience) && experience.length >0 ){
        filteredList = filteredList.filter((item)=>Number(experience[0]) > Number(item.minExp))
    }
    if(Array.isArray(workPreference) && workPreference.length >0 ){
        filteredList = filteredList.filter((item)=>workPreference.includes(item.location)) // in list not any key for preference some location are shows as remote
    }
    if(Array.isArray(basePaySalary) && basePaySalary.length >0 ){
        filteredList = filteredList.filter((item)=>Number(basePaySalary[0].split("L")[0]) > Number(item.maxJdSalary))
    }
    if(Array.isArray(location) && location.length >0 ){
        filteredList = filteredList.filter((item)=>location.includes(item.location))
    }
    return [...filteredList]
}
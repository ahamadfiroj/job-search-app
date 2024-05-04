export const ROLE_OPTIONS = [
    { value: 'Senior Engineer', label: 'Senior Engineer' },
    { value: 'Backend Engineer', label: 'Backend Engineer' },
    { value: 'Frontend Engineer', label: 'Frontend Engineer' },
    { value: 'Founding Engineer', label: 'Founding Engineer' },
    { value: 'Product Manager', label: 'Product Manager' },
    { value: 'Fullstack Engineer', label: 'Fullstack Engineer' },
    { value: 'Product Designer', label: 'Product Designer' },
    { value: 'Android Developer', label: 'Android Developer' },
    { value: 'Platform Engineer', label: 'Platform Engineer' }
]

export const NUMBER_OF_EMPLOYEE_OPTIONS =[
    { value: '1-10', label: '1-10' },
    { value: '11-20', label: '11-20' },
    { value: '21-50', label: '21-50' },
    { value: '51-100', label: '51-100' },
    { value: '101-200', label: '101-200' },
    { value: '201-500', label: '201-500' },
    { value: '500+', label: '500+' },
]

export const EXPERIENCE_OPTIONS =[
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' }
]

export const WORK_PREFERENCE_OPTIONS =[
    { value: 'Remote', label: 'Remote' },
    { value: 'Hybrid', label: 'Hybrid' },
    { value: 'In-office', label: 'In-office' },
]
export const BASE_PAY_OPTIONS =[
    { value: '0L', label: '0L' },
    { value: '10L', label: '10L' },
    { value: '20L', label: '20L' },
    { value: '30L', label: '30L' },
    { value: '40L', label: '40L' },
    { value: '50L', label: '50L' },
    { value: '60L', label: '60L' },
    { value: '70L', label: '70L' },
]

export const LOCATIONS_OPTIONS =[
    { value: 'India', label: 'India' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Gurgaon', label: 'Gurgaon' },
    { value: 'Chennai', label: 'Chennai' },
    { value: 'New delhi', label: 'New delhi' },
    { value: 'Mumbai', label: 'Mumbai' },
]



export const FILTERS_FORMS = {
    roles: {
        defaultValue: [],
        isMulti: true,
        name: "roles",
        options: [...ROLE_OPTIONS],
        className: "basic-multi-select",
        placeholder: "Roles",

    },
    numberOfEmployee: {
        defaultValue: [],
        isMulti: true,
        name: "numberOfEmployee",
        options: [...NUMBER_OF_EMPLOYEE_OPTIONS],
        className: "basic-multi-select",
        placeholder: "Number of employee",
    },
    experience: {
        defaultValue: [],
        isMulti: false,
        name: "experience",
        options: [...EXPERIENCE_OPTIONS],
        className: "basic-multi-select",
        placeholder: "Experience",
    },
    workPreference: {
        defaultValue: [],
        isMulti: true,
        name: "workPreference",
        options: [...WORK_PREFERENCE_OPTIONS],
        className: "basic-multi-select",
        placeholder: "Remote",
    },
    basePaySalary: {
        defaultValue: [],
        isMulti: false,
        name: "basePaySalary",
        options: [...BASE_PAY_OPTIONS],
        className: "basic-multi-select",
        placeholder: "Min base pay salary",
    },
    location: {
        defaultValue: [],
        isMulti: true,
        name: "location",
        options: [...LOCATIONS_OPTIONS],
        className: "basic-multi-select",
        placeholder: "Location",
    }
}



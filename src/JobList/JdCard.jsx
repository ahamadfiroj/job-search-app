import React, { Fragment, useState } from "react";

const JdCard = ({
    jdLink = "",
    jobDetailsFromCompany = "",
    maxJdSalary = "",
    minJdSalary = 0,
    location = "",
    minExp = "",
    jobRole = "",
    companyName = "",
    logoUrl = "",
}) => {
    
    const [isViewMore, setIsViewMore] = useState(false)
    const viewMoreHandler = () => {
        setIsViewMore(!isViewMore)
    }

    return <Fragment>
        <div className="jd-card">
            <div className="jd-card-header">
                <img src={logoUrl} alt="" />
                <div className="company-details">
                    <h3 className="company-name">{companyName}</h3>
                    <h2 className="company-role">{jobRole}</h2>
                    <div className="company-city">{location}</div>
                </div>
            </div>
            <div className="estimated-salary">Estimated Salary: <span>{`₹${minJdSalary || 0} - ${maxJdSalary} LPA`}</span></div>
            <div className="description-details">
                <h2>About Company:</h2>
                <h4>about:</h4>
                <p>{jobDetailsFromCompany}</p>
                <button onClick={viewMoreHandler} className="view-more-button">View job</button>
            </div>
            <div className="min-experience"><h3>Minimum Experience</h3><span className="min-years">{`${minExp || 0} years`}</span></div>
            <a href={jdLink} className="jd-link">Easy apply</a>
        </div>
        {isViewMore && <div className="description-details-popup jd-card">
            <div className="close-button"><button onClick={viewMoreHandler}>x</button></div>
            <div className="company-details">
                <h3 className="company-name">{companyName}</h3>
                <h2 className="company-role">{jobRole}</h2>
                <div className="company-city">{location}</div>
            </div>
            <h2>About Company:</h2>
            <h4>about:</h4>
            <p>{jobDetailsFromCompany}</p>
        </div>}
    </Fragment>
}

export default JdCard;
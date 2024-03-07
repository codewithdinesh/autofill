import React, { useState } from 'react';
import axios from "axios";
import fs from 'fs';

const ResumeExtractor = ({ setFormData }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {

            setIsLoading(true);

            let formdata = new FormData();
            formdata.append("pdf", file);

            let bodyContent = formdata;

            let reqOptions = {
                url: "http://localhost:3000/pdf_to_text",
                method: "POST",

                data: bodyContent,
            }

            let response = await axios.request(reqOptions);
            console.log(response.data.text);

            handlePDFextraction(response.data.text);
            setIsLoading(false);

        } else {
            alert("Please Select Resume");
        }
    };

    const handlePDFextraction = (text) => {
        const name = extractName(text);
        const email = extractEmail(text);
        const contact = extractContact(text);
        const address = extractAddress(text);
        const summary = extractSummary(text);
        const education = extractEducation(text);
        const skills = extractSkills(text);
        const experience = extractExperience(text);
        const projects = extractProjects(text);
        const achievements = extractAchievements(text);


        setFormData({
            name: name ? name : "",
            email: email ? email : '',
            contact: contact ? contact : "",
            address: address ? address : "",
            education: education || "",
            skills: skills || '',
            experience: experience || '',
            projects: projects || ''
        })

        console.log({
            name,
            email,
            contact,
            address,
            summary,
            education,
            skills,
            experience,
            projects,
            achievements
        });
    };

    // assuming name is in starting
    // function extractName(text) {

    //     return text.split('\n')[0].trim();
    // }

    // function extractEmail(text) {
    //     const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    //     const emails = text.match(emailRegex);
    //     return emails ? emails[0] : null;
    // }



    // Resume Flow
    // name, city, email, phone number
    // summary
    // education
    // skills
    // Achievements
    // projects


    function extractName(text) {
        // const nameRegex = /(\b[A-Z][a-zA-Z]+ [A-Z][a-zA-Z]+\b)/;
        const nameRegex = /(\b[A-Z][a-zA-Z]+[A-Z][a-zA-Z]+\b)/;
        const name = text.match(nameRegex)[0];
        return name;
    }


    // Extracting Location
    const extractAddress = (text) => {
        // const locationRegex = /([A-Z][a-zA-Z]+);
        const locationRegex = /([A-Z][a-zA-Z]+) \|/;
        const location = text.match(locationRegex)[1];
        return location
    };


    function extractEmail(text) {
        const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
        const emailMatch = text.match(emailRegex);
        return emailMatch ? emailMatch[0] : null;
    }

    function extractContact(text) {

        const phoneRegex = /(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}/g;
        const phones = text.match(phoneRegex);
        return phones ? phones[0] : null;

    }

    function extractSummary(text) {
        const summaryRegex = /SummaRy\/Objective([\s\S]+?)Education/;
        const summaryMatch = text.match(summaryRegex);
        return summaryMatch ? summaryMatch[1].trim() : null;
    }

    function extractEducation(text) {
        const educationRegex = /Education([\s\S]+?)SKills/;
        const educationMatch = text.match(educationRegex);
        return educationMatch ? educationMatch[1].trim() : null;
    }

    function extractSkills(text) {
        const skillsRegex = /SKills([\s\S]+?)WoRK ExpeRience/;
        const skillsMatch = text.match(skillsRegex);
        return skillsMatch ? skillsMatch[1].trim() : null;
    }

    function extractExperience(text) {
        const experienceRegex = /WoRK ExpeRience([\s\S]+?)Achievements/;
        const experienceMatch = text.match(experienceRegex);
        return experienceMatch ? experienceMatch[1].trim() : null;
    }

    function extractAchievements(text) {
        const achievementsRegex = /Achievements([\s\S]+?)PRojects/;
        const achievementsMatch = text.match(achievementsRegex);
        return achievementsMatch ? achievementsMatch[1].trim() : null;
    }

    function extractProjects(text) {
        const projectsRegex = /PRojects([\s\S]+)/;
        const projectsMatch = text.match(projectsRegex);
        return projectsMatch ? projectsMatch[1].trim() : null;
    }

    return (
        <div className='flex p-3 rounded-md'>
            <div className="flex justify-center items-center">
                <input type="file" id="file" className="hidden" onChange={handleFileChange} />
                <label htmlFor="file" className="cursor-pointer bg-blue-500 text-white rounded-lg p-2.5">Upload Resume</label>
            </div>
            {
                isLoading ?
                    <div className='flex p-3 '>
                        <div className="border-gray-300  h-11 w-11 animate-spin rounded-full border-8 border-t-blue-600" />
                    </div> : null
            }
        </div>
    );
};

export default ResumeExtractor;

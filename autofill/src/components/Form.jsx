import React, { useState } from 'react'
import ResumeExtractor from '../lib/ResumeExtractor';



const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    education: '',
    skills: '',
    experience: '',
    projects: '',
    achievements: "",
  });

  // handle input change
  const handleChange = (e) => {
    console.log(e.target.value)
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div className='p-3 rounded-md m-3 bg-[#edf2f7] dark:bg-[#38424d] shadow-md '>

      <ResumeExtractor setFormData={setFormData} />

      <form>

        <div className="grid gap-6 mb-6 md:grid-cols-2">


          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input type="text" id="name" value={formData.name} onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your name" required />

          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input type="email" id="email" value={formData.email} onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email" required />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Contact Number
            </label>
            <input type='tel' id="contact" value={formData.contact} onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your contact number" required />
          </div>


          {/* Address */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Address
            </label>
            <textarea id="address" value={formData.address} onChange={handleChange} rows="4" cols="50"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your address" required />
          </div>

          {/* Education */}

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Education
            </label>

            <textarea id="education" value={formData.education} onChange={handleChange} rows="4" cols="50"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your education" required />

          </div>

          {/* Skills */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Skills
            </label>

            <textarea id="skills" value={formData.skills} onChange={handleChange} rows="4" cols="50"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your skills" required />
          </div>

          {/* Experience */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Experience
            </label>

            <textarea id="experience" value={formData.experience} onChange={handleChange} rows="4" cols="50"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your experience" required />
          </div>

          {/* Projects */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Projects
            </label>

            <textarea id="projects" value={formData.projects} onChange={handleChange} rows="4" cols="50"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your projects" required />
          </div>

        </div>

        <div className="flex justify-center">
          <button onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Submit
          </button>
        </div>

      </form>

    </div>
  )
}

export default Form
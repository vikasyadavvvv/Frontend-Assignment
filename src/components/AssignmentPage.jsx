import React from "react";
import { useState } from "react";
import { FiHome, FiSend, FiUsers, FiSettings, FiMail, FiLogOut, FiSearch, FiMic, FiCopy, FiRefreshCw } from "react-icons/fi";
import { BsRocket } from "react-icons/bs";
import { TbNotes } from "react-icons/tb"; // Example note icon
import { HiOutlineRefresh } from "react-icons/hi"; // Refresh icon
import { AiFillStar } from "react-icons/ai"; // Star icon
import { FiEdit } from "react-icons/fi";


export default function AssignmentPage() {
  const [form, setForm] = useState({
    headcount: "",
    location: "",
    revenue: "",
    department: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
<div className="flex flex-col lg:flex-row h-screen bg-gray-50">
  {/* Sidebar */}
  <aside className="w-full lg:w-25 bg-white border-r border-gray-200 flex flex-row lg:flex-col items-center lg:py-6 px-4 lg:px-0 shadow-md">

  {/* Star / Logo */}
  <AiFillStar className="text-yellow-500 text-xl mb-2 lg:mb-6" />

  {/* Profile Pic */}
  <img
    src="https://randomuser.me/api/portraits/women/1.jpg"
    alt="profile"
    className="w-10 h-10 rounded-full mb-2 lg:mb-6"
  />

  {/* Menu Icons */}
  <div className="flex flex-row lg:flex-col items-center lg:space-y-6 justify-start w-full space-x-4 lg:space-x-0">

    {/* Top & Middle Icons */}
    <div className="flex flex-row lg:flex-col items-center lg:space-y-6 space-x-4 lg:space-x-0">
      <div className="p-2 bg-yellow-50 rounded-full shadow-sm">
        <FiHome className="text-yellow-500 text-xl cursor-pointer" />
      </div>
      <BsRocket className="text-gray-500 text-xl hover:text-yellow-500 cursor-pointer" />
      <TbNotes className="text-gray-500 text-xl hover:text-yellow-500 cursor-pointer" />
      <FiUsers className="text-gray-500 text-xl hover:text-yellow-500 cursor-pointer" />
      <HiOutlineRefresh className="text-gray-500 text-xl hover:text-yellow-500 cursor-pointer" />
      <FiMail className="text-gray-500 text-xl hover:text-yellow-500 cursor-pointer" />
    </div>

    {/* Bottom Icons */}
    <div className="flex flex-row lg:flex-col items-center lg:space-y-6 space-x-4 lg:space-x-0 mt-2 lg:mt-40">
      <FiSettings className="text-gray-500 text-xl hover:text-yellow-500 cursor-pointer" />
      <FiLogOut className="text-gray-500 text-xl hover:text-yellow-500 cursor-pointer" />
    </div>

  </div>
</aside>


      {/* Main Content */}
  <main className="flex flex-col flex-1">
        {/* Header */}
    <header className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 lg:px-6 py-4 border-b border-gray-200 bg-white shadow-md space-y-3 lg:space-y-0 ">
  {/* Left: Title Button */}
 <div className="flex justify-center lg:justify-start px-4 lg:px-6 py-4">
  <button className="border rounded border-gray-300 px-3 py-1 text-sm flex items-center justify-between w-max shadow-sm hover:shadow-md transition">
    Untitled List <FiEdit className="ml-2" />
  </button>
</div>

  {/* Center: Step Progress Bar */}
 <div className="flex flex-wrap lg:flex-nowrap items-center space-x-4 lg:space-x-8 mt-2 lg:mt-0">
        {["Who", "What/Why", "Where", "When"].map((step, index) => (
          <div key={index} className="flex flex-col items-center group cursor-pointer">
            <span
              className={`w-20 h-1 rounded-full shadow-sm ${
                index === 0
                  ? "bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600"
                  : "bg-gray-300 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:via-amber-500 group-hover:to-yellow-600 transition-all duration-300"
              }`}
            ></span>
            <span
              className={`mt-1 ${
                index === 0
                  ? "text-yellow-500 font-medium"
                  : "text-black group-hover:text-yellow-500 transition-colors duration-300"
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
  {/* Right: Buttons */}
{/* Right: Buttons */}
 <div className="flex flex-wrap lg:flex-nowrap space-x-2 lg:space-x-3 mt-2 lg:mt-0">
        <button className="text-gray-600 bg-white px-4 py-2 rounded-lg border border-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-amber-500 hover:to-yellow-600 transition-all duration-300 shadow-sm hover:shadow-md">
          Save
        </button>

        <button className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          Make Campaign
        </button>
      </div>
</header>



          <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
      {/* Chat Section (60%) */}
   <section className="w-full lg:w-3/5 p-6 overflow-y-auto relative border-r border-gray-200 shadow-sm bg-white min-h-[80vh] lg:min-h-[70vh] flex flex-col">
  {/* Title Centered */}
  <h2 className="text-3xl font-semibold flex items-center justify-center space-x-2 mb-6 lg:mb-6">
    <span>✨</span> <span>Oslo chat</span>
  </h2>

  {/* Chat for small screens */}
  <div className="flex flex-col space-y-2 mb-4 lg:hidden flex-1 overflow-y-auto mt-2">
    {/* Chat Bubble */}
    <div className="max-w-xs bg-white text-gray-800 rounded-lg px-4 py-2 shadow-sm self-start">
      Hello, I'm Oslo! Tell me what's on your mind.
    </div>

    {/* Buttons above input, left aligned */}
    <div className="flex space-x-2 mt-2">
      <button className="flex items-center px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 transition">
        <FiCopy className="mr-1" />
      </button>
      <button className="flex items-center px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 transition">
        <FiRefreshCw className="mr-1" />
      </button>
    </div>
  </div>

  {/* Chat for large screens */}
  <div className="hidden lg:flex flex-col space-y-2 flex-1 overflow-y-auto mt-4">
    <div className="max-w-xs bg-white text-gray-800 rounded-lg px-4 py-2 shadow-sm self-start">
      Hello, I'm Oslo! Tell me what's on your mind.
    </div>
    <div className="flex space-x-2 mt-2">
      <button className="flex items-center px-3 py-1 bg-white rounded hover:bg-gray-200 transition">
        <FiCopy className="mr-1 text-sm" />
      </button>
      <button className="flex items-center px-3 py-1 bg-white rounded hover:bg-gray-200 transition">
        <FiRefreshCw className="mr-1 text-sm" />
      </button>
    </div>
  </div>

  {/* Chat Input */}
  <div className="mt-4 lg:mt-auto w-full flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md">
    <FiSearch className="text-gray-500 text-lg mr-2" />
    <input
      type="text"
      className="flex-1 outline-none"
      placeholder="Type a message..."
    />
    <button className="ml-2">
      <FiMic className="text-yellow-500 text-lg" />
    </button>
  </div>
</section>


  {/* Right Panel (40%) */}
      <aside className="w-full lg:w-2/5 border-l border-gray-200 bg-white p-6 overflow-y-auto shadow-sm">

  <h3 className="text-2xl font-semibold mb-2">
    Let’s define your{" "}
    <span className="text-yellow-500 text-2xl">targets</span>
  </h3>
  <p className="text-gray-500 text-sm mb-6">
    Focus on the most relevant fields to shape your ICP — all fields are
    optional
  </p>

  {/* Company Profile Card */}
  <div className="bg-white p-4 rounded-xl shadow-md space-y-4">
    <h4 className="text-gray-800 text-xl font-medium">Company Profile</h4>

    {/* Headcount */}
    <div className="flex flex-col space-y-1">
      <label className="text-gray-700 font-medium">Company Headcount</label>
      <select
        name="headcount"
        value={form.headcount}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none text-gray-700"
      >
        <option value="" disabled selected className="text-gray-400">1-10</option>
        <option>1-10</option>
        <option>11-50</option>
        <option>51-200</option>
      </select>
    </div>

    {/* Location */}
    <div className="flex flex-col space-y-1">
      <label className="text-gray-700 font-medium">Company HQ Location</label>
      <select
        name="location"
        value={form.location}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none text-gray-700"
      >
        <option value="" disabled selected className="text-gray-400">India</option>
        <option>India</option>
        <option>USA</option>
        <option>Europe</option>
      </select>
    </div>

    {/* Revenue */}
    <div className="flex flex-col space-y-1">
      <label className="text-gray-700 font-medium">Revenue Range</label>
      <select
        name="revenue"
        value={form.revenue}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none text-gray-700"
      >
        <option value="" disabled selected className="text-gray-400">50L - 1Cr</option>
        <option>50L - 1Cr</option>
        <option>1Cr - 10Cr</option>
        <option>10Cr+</option>
      </select>
    </div>
  </div>

  {/* Prospect Profile */}
  <div className="mt-8 bg-white p-4 rounded-xl shadow-md space-y-4 max-h-96">
  <h4 className="text-gray-800 text-xl font-medium">Prospect Profile</h4>

  {/* Department */}
  <div className="flex flex-col space-y-1">
    <label className="text-gray-700 font-medium">Department</label>
    <select
      name="department"
      value={form.department}
      onChange={handleChange}
      className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none text-gray-700"
    >
      <option value="" disabled className="text-gray-400">Select department</option>
      <option>Engineering</option>
      <option>Sales</option>
      <option>Marketing</option>
      <option>Human Resources</option>
      <option>Finance</option>
      <option>Operations</option>
      <option>IT Support</option>
      <option>Customer Service</option>
    </select>
  </div>

  {/* Job Title */}
  <div className="flex flex-col space-y-1">
    <label className="text-gray-700 font-medium">Job Title</label>
    <select
      name="jobTitle"
      value={form.jobTitle}
      onChange={handleChange}
      className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none text-gray-700"
    >
      <option value="" disabled className="text-gray-400">Select job title</option>
      <option>Manager</option>
      <option>Team Lead</option>
      <option>Senior Engineer</option>
      <option>Junior Engineer</option>
      <option>Intern</option>
      <option>Director</option>
      <option>VP</option>
    </select>
  </div>

  {/* Seniority Level */}
  <div className="flex flex-col space-y-1">
    <label className="text-gray-700 font-medium">Seniority Level</label>
    <select
      name="seniority"
      value={form.seniority}
      onChange={handleChange}
      className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none text-gray-700"
    >
      <option value="" disabled className="text-gray-400">Select seniority</option>
      <option>Entry Level</option>
      <option>Mid Level</option>
      <option>Senior Level</option>
      <option>Executive</option>
    </select>
  </div>

  {/* Experience */}
  <div className="flex flex-col space-y-1">
    <label className="text-gray-700 font-medium">Years of Experience</label>
    <select
      name="experience"
      value={form.experience}
      onChange={handleChange}
      className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none text-gray-700"
    >
      <option value="" disabled className="text-gray-400">Select experience</option>
      <option>0-1 years</option>
      <option>2-5 years</option>
      <option>6-10 years</option>
      <option>10+ years</option>
    </select>
  </div>

  {/* Skills */}
  <div className="flex flex-col space-y-1">
    <label className="text-gray-700 font-medium">Key Skills</label>
    <select
      name="skills"
      value={form.skills}
      onChange={handleChange}
      className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none text-gray-700"
    >
      <option value="" disabled className="text-gray-400">Select skill</option>
      <option>JavaScript</option>
      <option>Python</option>
      <option>React</option>
      <option>Node.js</option>
      <option>Marketing</option>
      <option>Sales</option>
      <option>Design</option>
    </select>
  </div>
</div>

</aside>

</div>

      </main>
    </div>
  );
}

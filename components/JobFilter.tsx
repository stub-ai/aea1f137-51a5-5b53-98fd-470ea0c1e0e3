import { useState } from 'react';

const JobFilter = () => {
  const [selectedJobType, setSelectedJobType] = useState('All');
  const jobTypes = ['All', 'New Graduate', 'Short-term Intern', 'Long-term Intern', 'Event/Seminar'];

  return (
    <div className="w-full md:w-1/4 p-4">
      <div className="hidden md:block">
        {jobTypes.map((jobType) => (
          <div key={jobType}>
            <input
              type="radio"
              id={jobType}
              name="jobType"
              value={jobType}
              checked={selectedJobType === jobType}
              onChange={() => setSelectedJobType(jobType)}
              className="mr-2"
            />
            <label
              htmlFor={jobType}
              className={`cursor-pointer ${selectedJobType === jobType ? 'text-white' : 'text-#424242'} font-inter font-normal text-sm`}
              style={{ wordWrap: 'break-word' }}
            >
              {jobType}
            </label>
          </div>
        ))}
      </div>
      <div className="md:hidden">
        <select
          value={selectedJobType}
          onChange={(e) => setSelectedJobType(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md font-inter font-normal text-sm text-#424242"
        >
          {jobTypes.map((jobType) => (
            <option key={jobType} value={jobType}>
              {jobType}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default JobFilter;
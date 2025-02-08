import React from 'react';

const WorkExp = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
      {/* List your experiences here */}
      <div className="experience">
        {/* Example experience */}
        <h3>Software Engineer at ExampleTech</h3>
        <p>Jan 2020 - Present</p>
        <ul>
          <li>Developed and maintained code for in-house and client websites primarily using HTML, CSS, JavaScript, and React.</li>
          <li>Managed time-sensitive updates, including content changes and database upgrades.</li>
          <li>Planned, wrote, and debugged web applications and software with complete accuracy.</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExp;

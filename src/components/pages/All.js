import Header from "../Header";


const All = () => {
    const allCourses = [
        {
            technology: 'Node.js',
            description: 'JavaScript runtime built on Chrome\'s V8 engine for server-side development.',
          },
          {
            technology: 'React',
            description: 'JavaScript library for building user interfaces, commonly used for the front end of web applications.',
          },
          {
            technology: 'Express.js',
            description: 'A minimal and flexible Node.js web application framework used for building APIs and web applications.',
          },
          {
            technology: 'MongoDB',
            description: 'NoSQL database program that uses JSON-like documents with optional schemas, often used in full-stack development.',
          },
          {
            technology: 'Angular',
            description: 'A TypeScript-based open-source web application framework developed by Google.',
          },
          {
            technology: 'Vue.js',
            description: 'JavaScript framework for building user interfaces, providing a flexible and efficient way to create interactive web applications.',
          },
          {
            technology: 'Django',
            description: 'High-level Python web framework that encourages rapid development and clean, pragmatic design.',
          },
          {
            technology: 'Spring Boot',
            description: 'An extension of the Spring framework designed to simplify the development of production-ready, Java-based applications.',
          },
          {
            technology: 'GraphQL',
            description: 'A query language for APIs and a runtime for executing those queries with existing data, often used alongside front-end and back-end technologies.',
          },
          {
            technology: 'Docker',
            description: 'A platform for developing, shipping, and running applications in containers, enabling consistency across different environments.',
          },
          {
            technology: 'Machine Learning',
            description: 'A subset of artificial intelligence that focuses on developing algorithms and statistical models to enable computers to perform tasks without explicit programming.',
          },
          {
            technology: 'Data Analysis',
            // 
            description: 'The process of inspecting, cleaning, transforming, and modeling data to discover useful information, draw conclusions, and support decision-making.',
          },
          {
            technology: 'Data Visualization',
            description: 'The presentation of data in a graphical or visual format to help people understand the significance of the data.',
          },
          {
            technology: 'Big Data',
            description: 'Refers to the processing and analysis of large and complex datasets that traditional data processing applications cannot handle efficiently.',
          },
          {
            technology: 'Statistical Modeling',
            description: 'The use of statistical techniques to create models that can make predictions or inferences from data.',
          },
          {
            technology: 'Natural Language Processing (NLP)',
            description: 'A field of artificial intelligence that focuses on the interaction between computers and humans through natural language, enabling computers to understand, interpret, and generate human-like text.',
          },
          {
            technology: 'Data Mining',
            description: 'The process of discovering patterns, correlations, or useful information from large datasets using a variety of techniques, including machine learning and statistical analysis.',
          },
          {
            technology: 'Feature Engineering',
            description: 'The process of selecting and transforming variables or features in a dataset to improve the performance of machine learning models.',
          },
          {
            technology: 'Time Series Analysis',
            description: 'A statistical technique for analyzing time-ordered data points to identify patterns, trends, and make predictions about future values.',
          },
          {
            technology: 'A/B Testing',
            description: 'A method of comparing two versions of a product or webpage to determine which performs better in terms of user engagement or other metrics.',
          },
          {
            technology: 'Network Security',
            description: 'Focuses on protecting computer networks and infrastructure from unauthorized access or attacks.',
          },
          {
            technology: 'Firewall',
            description: 'A network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules.',
          },
          {
            technology: 'Malware Analysis',
            description: 'The process of studying and understanding malicious software to develop ways to detect and mitigate its impact.',
          },
          {
            technology: 'Encryption',
            description: 'The process of converting information into a code to prevent unauthorized access. Commonly used to protect data in transit and at rest.',
          },
          {
            technology: 'Penetration Testing',
            description: 'Ethical hacking technique where security experts simulate cyberattacks to identify vulnerabilities in a system or network.',
          },
          {
            technology: 'Incident Response',
            description: 'The process of responding to and managing the aftermath of a cybersecurity incident, including analysis, containment, eradication, and recovery.',
          },
          {
            technology: 'Two-Factor Authentication (2FA)',
            description: 'An extra layer of security that requires users to provide two different authentication factors (e.g., password and OTP) to verify their identity.',
          },
          {
            technology: 'Security Information and Event Management (SIEM)',
            description: 'A comprehensive solution that provides real-time analysis of security alerts generated by various hardware and software in a network.',
          },
          {
            technology: 'Phishing Awareness Training',
            description: 'Educational programs designed to teach individuals about the risks of phishing attacks and how to recognize and avoid them.',
          },
          {
            technology: 'Endpoint Security',
            description: 'Focuses on securing end-user devices (endpoints) such as computers, laptops, and mobile devices from security threats.',
          },
    ];
    return (
        <>
         <Header />
            <div className="container" style={{marginBottom:"3%"}}>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {allCourses.map((data, index) => (
                        <div className="col" key={index}>
                            <div className="card">
                                <img className="card-img-top" src="https://img.freepik.com/free-vector/tech-banner-illustration-desktop-computer_107791-7920.jpg" alt="Cardcap" />
                                <div className="card-body">
                                    <h5 className="card-title">{`${index + 1}. ${data.technology}`}</h5>
                                    <p className="card-text">{data.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default All;
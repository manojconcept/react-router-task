import Header from "../Header";


const Career = () => {
    const careerObjects = [
        {
          aspect: 'Resume Writing',
          description: 'The process of creating a professional document that summarizes an individual\'s education, work experience, and skills for job applications.',
        },
        {
          aspect: 'Job Interviewing',
          description: 'The process of being evaluated by an employer for potential employment, involving questions about qualifications, experience, and suitability for the job.',
        },
        {
          aspect: 'Networking',
          description: 'The practice of building and maintaining professional relationships to exchange information, advice, and support for career development.',
        },
        {
          aspect: 'Professional Development',
          description: 'Activities or training designed to enhance an individual\'s skills, knowledge, and overall effectiveness in the workplace.',
        },
        {
          aspect: 'Time Management',
          description: 'The ability to plan and control how an individual spends their time to effectively accomplish tasks and achieve goals.',
        },
        {
          aspect: 'Leadership Skills',
          description: 'The ability to guide, motivate, and influence others to achieve a common goal, often a crucial aspect of career advancement.',
        },
        {
          aspect: 'Work-Life Balance',
          description: 'The equilibrium between professional responsibilities and personal life to maintain overall well-being and prevent burnout.',
        },
        {
          aspect: 'Negotiation Skills',
          description: 'The ability to reach mutually beneficial agreements, an important skill in salary negotiations, project discussions, and other professional situations.',
        },
        {
          aspect: 'Continuous Learning',
          description: 'The commitment to acquiring new knowledge, skills, and competencies throughout one\'s career to stay relevant in a rapidly changing work environment.',
        },
        {
          aspect: 'Career Planning',
          description: 'The ongoing process of setting career goals, assessing skills, and creating a plan to achieve professional success and satisfaction.',
        },
      ];
      
    
    return (
        <>   
              <div className="container" style={{marginBottom:"3%"}}>
                <Header />
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {careerObjects.map((data, index) => (
                        <div className="col" key={index}>
                            <div className="card">
                                <img className="card-img-top" src="https://img.freepik.com/premium-photo/human-resources-recruitment-people-networking-concept_31965-13335.jpg" alt="CardCap" />
                                <div className="card-body">
                                    <h5 className="card-title">{`${index + 1}. ${data.aspect}`}</h5>
                                    <p className="card-text">{data.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Career;
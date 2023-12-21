import Header from "../Header";

const FullStack = () => {
    const fullStackObjects = [
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
    ];

    return (
        <>
            <Header />
            <div className="container" style={{ marginBottom: "3%" }}>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {fullStackObjects.map((data, index) => (
                        <div className="col" key={index}>
                            <div className="card">
                                <img className="card-img-top" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/full_stack_banner.jpg" alt="CardCap" />
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
    );
}

export default FullStack;

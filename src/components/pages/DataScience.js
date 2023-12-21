import Header from "../Header";

const DataScience = () => {
    const dataScienceObjects = [
        {
          topic: 'Machine Learning',
          description: 'A subset of artificial intelligence that focuses on developing algorithms and statistical models to enable computers to perform tasks without explicit programming.',
        },
        {
          topic: 'Data Analysis',
          description: 'The process of inspecting, cleaning, transforming, and modeling data to discover useful information, draw conclusions, and support decision-making.',
        },
        {
          topic: 'Data Visualization',
          description: 'The presentation of data in a graphical or visual format to help people understand the significance of the data.',
        },
        {
          topic: 'Big Data',
          description: 'Refers to the processing and analysis of large and complex datasets that traditional data processing applications cannot handle efficiently.',
        },
        {
          topic: 'Statistical Modeling',
          description: 'The use of statistical techniques to create models that can make predictions or inferences from data.',
        },
        {
          topic: 'Natural Language Processing (NLP)',
          description: 'A field of artificial intelligence that focuses on the interaction between computers and humans through natural language, enabling computers to understand, interpret, and generate human-like text.',
        },
        {
          topic: 'Data Mining',
          description: 'The process of discovering patterns, correlations, or useful information from large datasets using a variety of techniques, including machine learning and statistical analysis.',
        },
        {
          topic: 'Feature Engineering',
          description: 'The process of selecting and transforming variables or features in a dataset to improve the performance of machine learning models.',
        },
        {
          topic: 'Time Series Analysis',
          description: 'A statistical technique for analyzing time-ordered data points to identify patterns, trends, and make predictions about future values.',
        },
        {
          topic: 'A/B Testing',
          description: 'A method of comparing two versions of a product or webpage to determine which performs better in terms of user engagement or other metrics.',
        },
      ];
      
    return (
        <>
         <Header />
            <div className="container" style={{marginBottom:"3%"}}>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {dataScienceObjects.map((data, index) => (
                        <div className="col" key={index}>
                            <div className="card">
                                <img className="card-img-top" src="https://www.analytixlabs.co.in/blog/wp-content/uploads/2020/12/Blog-Banner-01-6-1-3.jpg" alt="Cardcap" />
                                <div className="card-body">
                                    <h5 className="card-title">{`${index + 1}. ${data.topic}`}</h5>
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
export default DataScience;
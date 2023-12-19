import Header from "../Header";
import Card from "../Card";


const All = () => {
    const allCourses = [
        {
            courseName: 'Full Stack Web Development',
            provider: 'Coursera',
            duration: '12 weeks',
            level: 'Intermediate',
        },
        {
            courseName: 'JavaScript: The Complete Guide',
            provider: 'Udemy',
            duration: '20 hours',
            level: 'Beginner to Advanced',
        },
        {
            courseName: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
            provider: 'Udemy',
            duration: '30 hours',
            level: 'Intermediate',
        },
        {
            courseName: 'Node.js and Express.js - Full Course',
            provider: 'YouTube',
            duration: '8 hours',
            level: 'Intermediate',
        },
        {
            courseName: 'MongoDB - The Complete Developer’s Guide',
            provider: 'Udemy',
            duration: '18 hours',
            level: 'Intermediate',
        },
        {
            courseName: 'SQL for Web Developers',
            provider: 'LinkedIn Learning',
            duration: '6 hours',
            level: 'Beginner',
        },
        {
            courseName: 'Git and GitHub - Version Control and Collaboration',
            provider: 'Pluralsight',
            duration: '10 hours',
            level: 'Intermediate',
        },
        {
            courseName: 'Web Design Fundamentals',
            provider: 'Skillshare',
            duration: '5 hours',
            level: 'Beginner',
        },
        {
            courseName: 'Responsive Web Design Basics',
            provider: 'edX',
            duration: '8 weeks',
            level: 'Beginner',
        },
        {
            courseName: 'Building Scalable APIs with GraphQL',
            provider: 'Codecademy',
            duration: '15 hours',
            level: 'Intermediate',
        },
        {
            courseName: 'Advanced CSS and SASS',
            provider: 'Pluralsight',
            duration: '12 hours',
            level: 'Intermediate',
        },
        {
            courseName: 'Web Accessibility Fundamentals',
            provider: 'LinkedIn Learning',
            duration: '4 hours',
            level: 'Beginner',
        },
        {
            courseName: 'JAMstack Explained',
            provider: 'Netlify',
            duration: 'Self-paced',
            level: 'Intermediate',
        },
        {
            courseName: 'Introduction to Web Development with Python and Django',
            provider: 'edX',
            duration: '6 weeks',
            level: 'Beginner',
        },
        {
            courseName: 'Blockchain Basics: A Non-Technical Introduction in 25 Steps',
            provider: 'Udemy',
            duration: '6 hours',
            level: 'Beginner',
        },
    ];
    return (
        <>
            <div className="container">
                <Header />
                All
                <div class="row">
                    {
                        allCourses.map((data, index) => {
                            return (<div class="col-sm">
                                <Card data={data} key={index} />
                            </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default All;
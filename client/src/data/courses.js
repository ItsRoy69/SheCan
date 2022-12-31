import cyber from "../assets/edtech/courses/cybersecurity.jpg";
import digitalmarketing from "../assets/edtech/courses/digitalmarketing.jpg";
import dtascience from "../assets/edtech/courses/dtascience.jpg";
import mindfulness from "../assets/edtech/courses/mindfulness.jpeg";
import webdev from "../assets/edtech/courses/webdev.png";
import selfdefense from "../assets/edtech/courses/selfdefense.jpg";
import womenhealthcare from "../assets/edtech/courses/womenhealthcare.jpg";
import womenleadership from "../assets/edtech/courses/womenleadership.jpeg";



const edcourses = [
    {
        title: "Intro to Web Development",
        tagline: "Learn the foundations of web development and build your own website",
        uniqueslug: "intro-to-web-development",
        img: webdev
    },
    {
        title: "Self-Defense for Women",
        tagline: "Learn practical self-defense techniques to keep you safe",
        uniqueslug: "self-defense-for-women",
        img: selfdefense
    },
    {
        title: "Women's Health 101",
        tagline: "Get the information you need to take control of your health",
        uniqueslug: "womens-health-101",
        img: womenhealthcare
    },
    {
        title: "Data Science for Beginners",
        tagline: "Learn the fundamentals of data science and start your career in this growing field",
        uniqueslug: "data-science-for-beginners",
        img: dtascience
    },
    {
        title: "Cybersecurity Basics",
        tagline: "Learn how to protect yourself and your data online",
        uniqueslug: "cybersecurity-basics",
        img: cyber
    },
    {
        title: "Women in Leadership",
        tagline: "Develop the skills and confidence to become a successful leader",
        uniqueslug: "women-in-leadership",
        img: womenleadership
    },
    {
        title: "Digital Marketing 101",
        tagline: "Learn the basics of digital marketing and grow your business online",
        uniqueslug: "digital-marketing-101",
        img: digitalmarketing
    },
    {
        title: "Mindfulness for Women",
        tagline: "Learn techniques to reduce stress and improve well-being",
        uniqueslug: "mindfulness-for-women",
        img: mindfulness
    }
];


export default edcourses;
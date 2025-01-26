import Yendo from '../imgs/yendo.png';
import Anicarlomagno from '../imgs/anicarlomagno.png';
import GuitarCenter from '../imgs/Carlos.png';
import celuYendo from '../imgs/yendoVert.jpeg';
import celuAni from '../imgs/aniVert.jpeg';
import celuGuitarras from '../imgs/celuGuitarras.jpeg';
import countryInfoVert from '../imgs/country-info-vert.jpeg'
import countryInfoHor from '../imgs/country-info-hor.jpeg'

const projects = [
    {
        id: 1,
        name: 'Anicarlomagno Landing-page',
        description: 'This project is an interactive landing page developed for the renowned artist Analia Carlomagno. It showcases her artistic works',
        img: Anicarlomagno,
        vertImg: celuAni,
        details: [
            'Developed with React.js, the Anicarlomagno landing page aims to provide an interactive experience that highlights the artistic work of artist Analia Carlomagno.',

            'The page is designed with a minimalist and elegant style, using modern CSS to emphasize the artwork while maintaining intuitive navigation for users.',

            'With a responsive design, the landing page adapts to devices of various sizes, ensuring a smooth user experience on both mobile and desktop computers.',

            'Subtle animations are used to make navigation more engaging without distracting from the artwork and the important content of the page.',

            'Through the page, visitors can learn more about the artist, explore her portfolio of works, and get details about her exhibitions and future projects.',

            'The design also highlights easy access to social media links and other means for users to follow Anicarlomagno’s work online.'
        ],
        repo: 'https://github.com/FdezCarlomagno/anicarlomagno',
        live: 'https://anicarlomagno.vercel.app/',
        technologies: 'React.js, Javascript, CSS'
    },
    {
        id: 2,
        name: 'Country Info App',
        description: 'This project is a React-based application that provides information about country-related data. It allows users to fetch and display information about countries, states, and specific country details through a context-based architecture. The project utilizes an API to fetch data and React Context API to manage global state',
        img: countryInfoHor,
        vertImg: countryInfoVert,
        details: [
            "The Country Management Application allows users to fetch and display information about countries, states, and specific country details. It includes features for managing filtered views of the countries and sharing state across the application using React's Context API.",
            "The frontend is built with React and TypeScript for type safety. The backend utilizes Node.js to manage API requests for country and state data.",
            "The project has a well-structured file hierarchy to separate concerns. The key components are organized into: 'api' for API calls, 'context' for global state management, 'interfaces' for TypeScript models, and 'components' for displaying country lists and detailed country information.",
            "The project communicates with the backend API using the following key endpoints: 'GET /countries' to fetch all countries, 'GET /countries/:countryCode' to fetch details for a specific country by its code, and 'POST /states' to fetch states for a given country by its name.",
            "The React Context API is used to manage global state for the application. Key properties include countries, country, states, and filteredCountries. Methods like fetchCountries, fetchCountry, and fetchStates are used to interact with the data and update the state.",
        ],
        repo: 'https://github.com/FdezCarlomagno/Country-info-app-TS',
        live: 'https://country-info-app-o3ke.onrender.com/',
        technologies: 'React.js, Typescript, Tailwind CSS'
    },
    {
        id: 3,
        name: 'Yendo! Travel agency',
        description: 'Yendo! is a travel agency landing page that provides users with an immersive and visually appealing experience',
        details: [
            'Developed with React.js and styled with Tailwind CSS, the page is designed to highlight the beauty of the destinations offered by the agency while facilitating smooth and easy navigation for users.',

            'The page is optimized to be fully responsive, perfectly adapting to any device, whether mobile, tablet, or desktop.',

            'The interface uses soft animation effects that enhance the experience without visually overwhelming the user, making the exploration of destinations dynamic and enjoyable.',

            'Additionally, the page includes informative sections about tourist destinations, agency services, and core values, providing customers with all the information they need in a clear and direct manner.',

            'With Yendo!, users can start their adventure with a simple visit to the page, enjoying an attractive and functional design that connects them with their next destination.'
        ],
        img: Yendo,
        vertImg: celuYendo,
        repo: 'https://github.com/FdezCarlomagno/YendoTandil',
        live: 'https://yendotandil.vercel.app',
        technologies: 'React.js, Javascript, Tailwind CSS'
    },
    {
        id: 4,
        name: "Carlo's Guitar Center",
        description: "This project is a Guitar Center web application built to showcase and manage various guitars",
        img: GuitarCenter,
        details: [
            'This project involves the design and development of a relational database aimed at managing information about guitars. The guitars are classified into different categories, and the database allows for detailed record-keeping.',

            'The data model follows a one-to-many relationship (1:N), where one category can have multiple guitars, but each guitar belongs to only one category.',

            'The database includes three main tables: Category, Guitar, and User. The Category table stores different types of guitars (such as Electric, Acoustic, etc.), while the Guitar table contains detailed information about each guitar, including its name, price, and the category it belongs to.',

            'The User table is responsible for storing information about registered users on the platform, enabling authentication through a username and hashed password.',

            'The purpose of the database is to provide a web platform where users can easily and efficiently manage guitars, consulting and managing the different categories and guitars available in the center.',

            'The system is designed to be used by center employees or registered users, who can access the database to perform tasks such as searching for guitars, adding new guitars, or updating existing information.'
        ],
        vertImg: celuGuitarras,
        repo: 'https://github.com/FdezCarlomagno/tp_web2',
        live: false,
        technologies: 'PHP, Bootstrap, MySQL'
    },
];


export default projects;
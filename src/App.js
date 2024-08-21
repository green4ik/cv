import { useState ,useEffect} from "react";
import Photo from './Photo.jpg';
import {motion} from "framer-motion";
import Heart from "./Heart";
function App() {
  const [page, setPage] = useState("About");
  const [showTechnologies, setShowTechnologies] = useState(false);
  const [numbers,setNumbers] = useState([]);
  const [bgColor, setBgColor] = useState('white');
  const items = new Array(120).fill(0);

  useEffect(() => {
    const generateRandomNumbers = () => {
      const randomNumbers = items.map(() => getNumber(1, 9));
      setNumbers(randomNumbers); 
    };

    generateRandomNumbers(); 

    const intervalId = setInterval(generateRandomNumbers, 100); 

    return () => clearInterval(intervalId);
  }, []);
  function getNumber(min,max)  {
    return Math.floor(Math.random()* (max - min +1)) + min;
  }
  function getNumberDecimal(min, max, decimalPlaces = 1) {
    const factor = Math.pow(10, decimalPlaces); 
    // console.log(Math.floor(Math.random() * (max - min) * factor + min * factor) / factor );
    return Math.floor(Math.random() * (max - min) * factor + min * factor) / factor; 
}
  function changeBgColor() {
    bgColor === 'white' ? setBgColor('gray') : setBgColor('white');
    document.body.style.backgroundColor = bgColor;
    console.log(bgColor);
  }
  return (
    <div>
      <div className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-semibold">
            My Portfolio
          </div>
          <div className="space-x-4">
            <a
              className="hover:text-gray-300 hover:cursor-pointer"
              onClick={() => setPage("About")}
            >
              About Me
            </a>
            <a
              className="hover:text-gray-300 hover:cursor-pointer"
              onClick={() => setPage("Examples")}
            >
              Examples
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {page === "About" && (
          <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row bg-blue-50 rounded-lg w-1/2 ">
            <div className="lg:w-1/2 p-4">
              <p className="text-2xl font-semibold">Illia Dudchyk</p>
              <p className="text-lg">Student, 20 years</p>
              <p className="text-lg">Lviv Polytechnic (software engineering)</p>
              <p className="text-lg">Want to become a member<br></br> of a great team!</p>
              <p className="text-lg">Email:<br></br>dudchik931@gmail.com</p>
              <p className="mt-4 font-semibold flex items-center">
                Technologies:
                <button
                  onClick={() => setShowTechnologies(!showTechnologies)}
                  className={`ml-2 transform transition-transform ${
                    showTechnologies ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </button>
              </p>

              {showTechnologies && (
               <motion.ul
               initial={{ opacity: 0, height: 0 }}
               animate={{ opacity: 1, height: "auto" }}
               exit={{ opacity: 0, height: 0 }}
               transition={{ duration: 0.6 }} 
               className="mt-2 list-disc list-inside"
             >
               <li>Go</li>
               <li>C#/.Net</li>
               <li>Asp.NET</li>
               <li>Entity Framework</li>
               <li>WPF</li>
               <li>React, JavaScript</li>
               <li>SQL</li>
               <li>Git</li>
             </motion.ul>

              )}
              <Heart />
            </div>
            <div className="lg:w-1/2 p-4">
              <motion.img
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 1 }} 
                src={Photo}
                alt="Illia Dudchyk"
                className="rounded-lg shadow-lg mx-auto w-full max-w-xs lg:max-w-sm"
                onClick={changeBgColor}
              />
            </div>
           
          </div>
          <div className="grid grid-cols-8 gap-2 p-1">
      {numbers.map((number, index) => (
        <motion.div
          key={index}
          className="p-1 text-center text-white"
          initial={{ opacity: 0 }} 
          animate={{opacity: [0.2,1,0.2] }} 
          exit={{ opacity: 0 }} 
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {number || '-'}
        </motion.div>
      ))}
    </div>
  
          </div>
        )}
        {page === "Examples" && <div>Examples Content</div>}
      </div>
    </div>
  );
}

export default App;

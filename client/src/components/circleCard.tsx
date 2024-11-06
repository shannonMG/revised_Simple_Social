import React ,{useState, } from 'react';
//SK added this to route
import { useNavigate } from 'react-router-dom';



interface CircleCardProps {
  image: string;
  title: string;
  summary: string;
  circleLink: string;
}

const CircleCard: React.FC<CircleCardProps> = ({ image, title, summary, circleLink }) => {
  const [apiData, setApiData] = useState<any | null>(null);
  const navigate = useNavigate(); //SK added to initialize usehistory

  const handleClick = async () => {
    try {
      const response = await fetch('https://thingsproxy.freeboard.io/fetch/https://zenquotes.io/api/image/');
      const data = await response.json();
      setApiData(data); // Store the fetched data

      // Redirect to a new page with the fetched data
      navigate('/zen', {state: { data }}); // Pass the fetched data to the new page
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div onClick={handleClick}className="">
      <div className="">
        {/* Front Side */}
        <div className="">
          <h3 className=""></h3>
          <img src={image} alt={title} className="" />
        </div>

        {/* Back Side */}
        <div className="">
          <h3 className=""></h3>
          <p className=""></p>
          <div className="">
            <a href={circleLink} target="_blank" rel="noopener noreferrer" className={""}>
              Visit Circle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleCard;

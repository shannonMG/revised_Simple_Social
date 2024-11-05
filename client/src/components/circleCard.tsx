import React from 'react';

interface CircleCardProps {
  image: string;
  title: string;
  summary: string;
  circleLink: string;
}

const CircleCard: React.FC<CircleCardProps> = ({ image, title, summary, circleLink }) => {
  return (
    <div className="">
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

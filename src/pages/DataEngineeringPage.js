import React from 'react';
import './DataEngineeringPage.css'; // import the CSS file
import data_video from "../videos/data_video.mp4";
import data_engineering_1 from "../images/data_engineering_1.png";
import data_processing from "../videos/data_processing.mp4";
import data_architecture from "../videos/data_architecture.mp4";

const DataEngineeringPage = () => {
  return (
    <div className="data-engineering-container">
      {/* Video Section */}
      <div className="video-section">
        <video className="intro-video" autoPlay loop muted>
          <source src={data_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="section">
          <img src={data_engineering_1} alt="Data Engineering" className="section-image" />
          <div className="section-text">
            <h1>Data Engineering</h1>
            <h2>Data Collection</h2>
            <p>We use the latest technology to collect and process massive amounts of data...</p>
            <p>
              Tailored Strategies: We design and implement data collection strategies tailored to your specific needs.
            </p>
            <p>
              Diverse Data Sources: We work with structured data from databases (MySQL, PostgreSQL, Oracle) and unstructured data from social media, web scraping, IoT devices, and API integrations.
            </p>
            <p>
              Efficient Processes: We leverage cutting-edge technology and industry best practices for accurate, reliable, and timely data acquisition.
            </p>
            <p>
              Valuable Insights: Gain valuable insights, make data-driven decisions, and drive your business forward.
            </p>
            <p>
              Customized Solutions: Let's discuss your data collection needs and explore how we can help you achieve your goals.
            </p>
          </div>
        </div>

        <div className="section data-processing-section">
          <div className="section-text">
            <h2>Data Processing</h2>
            <p>Our data processing services ensure that the collected data is transformed into valuable insights...</p>
            <h3>Transform Raw Data</h3>
            <p>We transform your raw data into meaningful insights for analysis and decision-making.</p>
            <h3>Powerful Platforms</h3>
            <p>We leverage leading platforms like Apache Hadoop, Apache Spark, and Google Cloud Dataflow.</p>
            <h3>Comprehensive Services</h3>
            <p>Our team specializes in data cleaning, filtering, aggregation, and integration.</p>
            <h3>Data-Driven Insights</h3>
            <p>Gain a deeper understanding of your business and make informed decisions.</p>
            <h3>Unlock Data Potential</h3>
            <p>Unlock the full potential of your data with our expert data processing services.</p>
          </div>
          <video src={data_processing} className="section-video" autoPlay loop muted>
            <source src={data_processing} type="video/mp4" />
          </video>
        </div>
        <div className="section data-processing-section">
          <video src={data_architecture} className="section-video" autoPlay loop muted>
            <source src={data_architecture} type="video/mp4" />
          </video>
          <div className="section-text">
            <h2>Data Architecture</h2>
            <h3>Design Robust Systems:</h3>
            <p>We design scalable and robust data architectures tailored to your specific needs.</p>
            <h3>Optimize Performance:</h3>
            <p>We optimize data storage and retrieval processes for maximum efficiency.</p>
            <h3>Integrate Data Sources:</h3>
            <p>We integrate data from various sources into a unified platform.</p>
            <h3>Ensure Data Quality: </h3>
            <p>We implement data quality measures to maintain data accuracy and integrity.</p>
            <h3>Future-Proof Solutions: </h3>
            <p>We build data architectures that can adapt to your evolving business requirements.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringPage;

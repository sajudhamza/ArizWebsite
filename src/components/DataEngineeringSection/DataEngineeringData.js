import data_engineering_1 from "../../images/data_engineering_1.png";
import data_processing from "../../videos/data_processing.mp4";
import data_architecture from "../../videos/data_architecture.mp4";

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Pipeline',
  headline: 'Data Collection',
  description:
    `We use the latest technology to collect and process massive amounts of data..\n
    Tailored Strategies: We design and implement data collection strategies tailored to your specific needs.\n
   Diverse Data Sources: We work with structured data from databases (MySQL, PostgreSQL, Oracle) and unstructured data from social media, web scraping, IoT devices, and API integrations.\n
    Efficient Processes: We leverage cutting-edge technology and industry best practices for accurate, reliable, and timely data acquisition.\n
   Valuable Insights: Gain valuable insights, make data-driven decisions, and drive your business forward.\n
   Customized Solutions: Lets discuss your data collection needs and explore how we can help you achieve your goals.`,
  buttonLabel: 'Scroll Top',
  imgStart: false,
  img: data_engineering_1,
  alt: 'genai',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjTwo = {
  id: 'generation',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Step 2',
  headline: 'Data Processing',
  description:
    `Our data processing services ensure that the collected data is transformed into valuable insights...\n
    Transform Raw Data
    We transform your raw data into meaningful insights for analysis and decision-making.\n
    Powerful Platforms
    We leverage leading platforms like Apache Hadoop, Apache Spark, and Google Cloud Dataflow.\n
    Comprehensive Services
    Our team specializes in data cleaning, filtering, aggregation, and integration.\n
    Unlock Data Potential
    Unlock the full potential of your data with our expert data processing services.`,
  buttonLabel: 'Home',
  imgStart: true,
  video: data_processing,
  alt: 'Piggybank',
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjThree = {
  id: 'contactus',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Complete Solution',
  headline: 'Data Architecture',
  description:
    `Design Robust Systems:
    We design scalable and robust data architectures tailored to your specific needs.\n
    Optimize Performance:
    We optimize data storage and retrieval processes for maximum efficiency.\n
    Integrate Data Sources:
    We integrate data from various sources into a unified platform.\n
    Ensure Data Quality: 
    We implement data quality measures to maintain data accuracy and integrity.\n
    Future-Proof Solutions: 
    We build data architectures that can adapt to your evolving business requirements.`,
  buttonLabel: 'Contact Us',
  imgStart: false,
  video: data_architecture,
  alt: 'Papers',
  dark: false,
  primary: false,
  darkText: true
};



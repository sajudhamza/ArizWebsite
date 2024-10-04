import data_engineering_1 from "../../images/data_engineering_1.png";
import data_processing from "../../videos/data_processing.mp4";
import data_architecture from "../../videos/data_architecture.mp4";

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Automation',
  headline: 'Data Collection',
  description:
    'With GEN AI automation it streamlines processes by automating repetitive tasks, freeing up human resources for more strategic activities.',
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
  topLine: 'Media Generation',
  headline: 'GEN AI for Creativity',
  description:
    'Gen AI can enhance creativity by generating new ideas, inspiring novel approaches, and providing a diverse range of perspectives. It can also assist in refining existing creative works, suggesting improvements, and exploring alternative possibilities.',
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
  topLine: 'Join our Team',
  headline: 'Joining Our Team is Easy',
  description:
    "Contact us to know more about open position",
  buttonLabel: 'Contact Us',
  imgStart: false,
  video: data_architecture,
  alt: 'Papers',
  dark: false,
  primary: false,
  darkText: true
};

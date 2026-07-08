import { styles } from '../styles';
import { profileLinks, services } from '../constants';
import { SectionWrapper } from '../hoc';

const ProfileCard = ({ name, icon, website }) => {
  return (
    <div
      onClick={() => window.open(website, '_blank')}
      className="
        w-max
        border-4 border-purple-900
        p-3 rounded-2xl
        flex items-center gap-3
        cursor-pointer
        transition-all duration-300
        hover:bg-tertiary
        hover:scale-[1.03]
        active:scale-95
      "
    >
      <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center">
        <img src={icon} alt="" className="w-4/6 h-4/6 object-contain" />
      </div>
      <h3 className="text-white font-bold text-[15px]">{name}</h3>
    </div>
  );
};

const ServiceCard = ({ title, icon }) => (
  <div
    className="
      xs:w-[250px] w-full
      green-pink-gradient
      p-[1px]
      rounded-[20px]
      shadow-card
      transition-transform duration-300
      hover:scale-[1.04]
    "
  >
    <div
      className="
        bg-tertiary
        rounded-[20px]
        py-5 px-12
        min-h-[280px]
        flex flex-col justify-evenly items-center
      "
    >
      <img src={icon} alt="" className="w-16 h-16 object-contain" />
      <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
    </div>
  </div>
);

const About = () => {
  return (
    <>
      {/* Header */}
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      {/* Description */}
      <div className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
       I am a passionate Frontend Developer dedicated to creating responsive, user-friendly, and visually appealing web applications.
        I enjoy turning ideas into interactive websites using HTML, CSS, JavaScript, and React.
         As I continue to grow my skills, I focus on writing clean, 
         maintainable code and building projects that improve my problem-solving abilities.
          I am always eager to learn new technologies, take on challenging projects,
           and create digital experiences that are both functional and engaging.

        <div className="mt-5 flex flex-wrap gap-3">
          {profileLinks.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="mt-20 flex flex-wrap gap-10 justify-around">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');

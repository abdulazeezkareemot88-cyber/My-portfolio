import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';

const ProjectCard = ({ name, description, tags, icon: Icon }) => {
  return (
    <div
      className="
        bg-tertiary
        rounded-2xl
        p-6
        w-full sm:w-[480px]
        border border-white/10
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        transition-transform duration-300
        hover:scale-[1.015]
      "
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        {/* Icon container */}
        <div
          className="
            w-12 h-12
            rounded-xl
            bg-[#915eff]/15
            border border-[#915eff]/30
            flex items-center justify-center
            flex-shrink-0
          "
        >
          <Icon size={22} className="text-[#915eff]" />
        </div>

        {/* Title */}
        <h3 className="text-white font-semibold text-[18px] leading-snug">
          {name}
        </h3>
      </div>

      {/* Description */}
      <p className="mt-4 text-secondary text-[14px] leading-relaxed">
        {description}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map(tag => (
          <span
            key={`${name}-${tag.name}`}
            className="
              text-[12px]
              px-2 py-1
              rounded-md
              bg-white/5
              border border-white/10
              text-secondary
            "
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      {/* Header */}
      <div>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>

      {/* Description */}
      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Here are some of the projects I've worked on,showcasing my experience
          in building modern, responsive,and interactive web applications. Each
          project reflects my passion for writing clean code and delivering
          user-friendly digital experiences.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-20 gap-5 flex flex-wrap justify-around">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');

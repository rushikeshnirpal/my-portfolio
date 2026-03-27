import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Skills() {
  return (
    <div id="skills" className="mt-32 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">My Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

        <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-110 transition">
          <FaHtml5 className="text-4xl text-orange-500 mx-auto mb-2" />
          <p>HTML</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-110 transition">
          <FaCss3Alt className="text-4xl text-blue-500 mx-auto mb-2" />
          <p>CSS</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-110 transition">
          <FaJs className="text-4xl text-yellow-400 mx-auto mb-2" />
          <p>JavaScript</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-110 transition">
          <FaReact className="text-4xl text-cyan-400 mx-auto mb-2" />
          <p>React</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-110 transition">
          <SiTailwindcss className="text-4xl text-sky-400 mx-auto mb-2" />
          <p>Tailwind</p>
        </div>

      </div>
    </div>
  );
}

export default Skills;
import Headline from '../shared/Headline';
import skills from '../skills.js'


const About = () => {
    return (
        <div className='mx-auto md:py-8 px-7 bg-gray-950 pb-8  h-auto' id='about'>
            <div className="mb-7">
            <Headline title={"ABOUT ME"} subtitle={"Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"}/>
            </div>
            <div className='flex flex-col md:flex-row items-start justify-start' >
                <div className='md:w-1/2'>
                    <h4 className='text-2xl font-bold mb-8 text-white'>Get to know me!</h4>
                    <div className='md:w-10/12 text-lg text-white mb-8'>
                    <p className='mb-5'>I am a <strong>React developer</strong> with a strong foundation in building modern, responsive web applications. I have worked on various projects which helped me strengthen my skills in full-stack development and AI. I am passionate about creating user-centric solutions that not only work seamlessly but also provide a great user experience.</p>
                    <p className='mb-5'>I am always looking for opportunities to collaborate on exciting projects and continue growing as a developer. Feel free to get in touch if you would like to connect or discuss potential collaborations!</p>
                    </div>
                </div>
                <div 
                className='md:w-1/2'>
                    <h4 className='text-2xl font-bold mb-8 text-white'>My Skills</h4>
                    <div className='flex flex-wrap gap-3 md:w-10/12'>
                        {skills.map( skill => <p key={skill.id} className='text-white border-4 border-white border-double hover:cursor-pointer text-light py-2 px-2 rounded-lg flex items-center gap-2'><i className={skill.icon} style={{ fontSize: '40px' }}></i></p>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
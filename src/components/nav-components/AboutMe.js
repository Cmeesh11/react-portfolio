import '../../styles.css'

function AboutMe() {
  return(
    <div className='container d-flex flex-column align-items-center text-center'>
      <h1 className='text-color'>Hi, I'm Carter!</h1>
      <p className='fs-3 text-color'>I'm an aspiring full stack web developer who's passionate about creating and developing applications to bring them into reality. I'm currently attending <b>UNH's Full Stack Coding Bootcamp.</b></p>
      <p className='fs-3 text-color'>I like to see how my interests in music and game development can tie into the work I do. It keeps me motivated to improve and apply new technologies that I'm learning to my code.</p>
      <h2>My Story</h2>
      <p className='fs-4 text-color'>I always knew I loved computers. I've used computers since I was about 6 years old and taught myself how to navigate them very quickly. I maintained this interest over the years, and when it was time to apply for colleges, I ended up choosing electrical engineering instead. However, despite doing well in school, I realized that I did not enjoy electrical engineering and decided to pursue my true passion for coding. I withdrew from college and got to work on teaching myself how to code. During the Summer, I discovered coding bootcamps existed, and I imagined taking one would be a great opportunity to explore and learn more concepts. This experience has brought me to where I am today: pursuing my passion for coding, learning new concepts quickly, and applying them in practical scenarios, all while loving every minute of it.</p>
    </div>
  );
}

export default AboutMe;
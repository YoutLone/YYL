import React from 'react';
import AnimateOnScroll from 'react-animate-on-scroll';
import '../Testimonials/Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Ansar Ibrahim',
    description: `
      Working with Than Myo Htet is a pleasure, as his positive attitude and enthusiasm are contagious.
      He is committed to meeting project deadlines and takes pride in delivering projects that exceed
      expectations. Companies seeking a skilled and reliable software developer should look no further than
      Than Myo Htet. He is a valuable asset to any team and will undoubtedly contribute to the success of any
      software development endeavor.He is an excellent communicator, making technical discussions clear and 
      engaging for everyone involved.
    `,
    image: 'https://avatars.githubusercontent.com/u/117971223?v=4',
    Github: 'https://github.com/AnsarIbrahim',
    linkedin: 'https://www.linkedin.com/in/ansar-ibrahim/',
  },
  {
    id: 2,
    name: 'Zuheb Ahmed',
    description: `
    Working alongside Than Myo Htet has been a fantastic experience. I had the opportunity to collaborate with 
    him multiple times since our meeting at Microverse. He is an incredibly driven and proficient developer. 
    I distinctly recall a situation where he provided invaluable assistance when I faced a project hurdle. 
    His capacity to communicate respectfully and his high level of professionalism truly stand out. It's a privilege 
    to collaborate and I wholeheartedly endorse Than Myo Htet as an invaluable addition to any team seeking 
    a skilled and motivated individual.
    `,
    image: 'https://avatars.githubusercontent.com/u/88501552?v=4',
    Github: 'https://github.com/zuhebahmed88091',
    linkedin: 'https://www.linkedin.com/in/zuheb-ahmed/',
  },

  {
    id: 3,
    name: 'Abdourahmane Jalloh',
    description: `
      I have had the pleasure to work with Than Myo. We met several times in a Morning session and Stand Up 
      team, I can say Than is the best software engineer and passionate that I've ever met, with his critical 
      thinking to solve problems. He is really careful with details and delivers a project on time. 
      I recommend everyone to work with Than.
    `,
    image: 'https://avatars.githubusercontent.com/u/67812267?v=4',
    Github: 'https://github.com/aradradev',
    linkedin: 'https://www.linkedin.com/in/abdul-jalloh/',
  },

  {
    id: 4,
    name: 'Htet Wai Yan',
    description: `
      Than Myo Htet is one of the best people to work with. I met him at Microverse, and we have had the 
      chance to work together a couple of times. He is a highly motivated and skillful developer. It is my pleasure 
      to work with him,and I would recommend Than Myo Htet as a valuable asset for any team in need of a skillful and 
      motivated individual.
    `,
    image: 'https://avatars.githubusercontent.com/u/102011195?v=4',
    Github: 'https://github.com/HtetWaiYan7191',
    linkedin: 'https://www.linkedin.com/in/htet-wai-yan19/',
  },
];

function Testimonials() {
  return (
    <>
      <div className="testimonials"></div>
      <AnimateOnScroll animateIn="skills_title">
        <p className="about_title2">Testimonials</p>
      </AnimateOnScroll>

      <section className="testimonials_container">
        {testimonials.map((testimonial) => (
          <AnimateOnScroll
            key={testimonial.id}
            animateIn="about_box"
            className="testimonial_card"
          >
            <section>
              <img
                src={testimonial.image}
                alt={`Avatar of ${testimonial.name}`}
                className="testimonial_image"
              />
              <p className="about_title3">{testimonial.name}</p>
              <p className="card_text">{testimonial.description}</p>

              <div className="red_container">
                <a
                  href={testimonial.Github}
                  target="_blank"
                  className="social-icon github"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href={testimonial.linkedin}
                  target="_blank"
                  className="social-icon linkedin"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </section>
          </AnimateOnScroll>
        ))}
      </section>
    </>
  );
}

export default Testimonials;

import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <hr></hr>
        <h4>1.  Introduce yourself.  What are your hobbies, favourite music, favourite food, and other things you can tell me about yourself?</h4>  
        <p>Hi, I’m Ivan V. Andres. I particularly enjoy playing table tennis and staying creative
on the internet by playing games like Apex Legends and Valorant. I'm a big fan of
Billie Eilish's music since it consistently makes me feel better and helps me stay
focused. In terms of cuisine, I consider Sinigang na baboy to be the epitome of
comfort food. I'm constantly trying to broaden my horizons and learn</p>
    <hr></hr>
        
        <h4>2.  Why did you take up IT?</h4>
        <p>I am fascinated by how technology is influencing our world, which is why I decided to
study IT. I find it quite thrilling to be able to come up with creative solutions for
challenging issues. IT also seems like a perfect fit for my interests and professional
objectives because it's a very dynamic industry with lots of room for specialization
and progress.</p>
    <hr></hr>

      <h4>3.  What career do you see yourself exploring after graduation?</h4>
      <p>I plan to look into a profession in the software engineering field after I graduate. This
field really interests me because it fits with my interests and skill set. The
opportunity to work on worthwhile initiatives and further technological progress
excites me.</p>
    <hr></hr>

      <h4>4.  What do you expect to learn in this subject?</h4>
      <p>I hope to get a thorough understanding of several programming languages from this
course. In addition to helping me with practical skills, I hope to lay a strong
foundation that will improve my problem-solving skills and get me ready for
difficulties in the real world.</p>
    <hr></hr>

      <h4>5.  What topics you want to be discussed in this subject?</h4>
      <p>I would adore learning more about subjects like developing games and programming. Because these fields are at the forefront of technical innovation and have a big
influence on how we interact with and utilize technology, I find them to be especially
fascinating.</p>

      

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
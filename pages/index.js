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
        <center>
        <p>10 Things That Require Zero Talent</p>
    </center>
    <ul>
        <li>Punctuality</li>
        <li>Empathy</li>
        <li>Organizational Skill</li>
        <li>Body Language</li>
        <li>Energy</li>
        <li>Positive Attitude</li>
        <li>Passion</li>
        <li>Consistency</li>
        <li>Doing Extra</li>
        <li>Being Prepared</li>
    </ul>

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

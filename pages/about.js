import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main class="maincontent columns">
        <section class="col--left">
          <h2>About The Big Dog</h2>
          <p>
            Ian Glover aka The Big Dog was born and raised in Northern
            California. He started surfing at age 15 to keep up with his friends
            at Redwood High School. He became hooked on surfing instantly. It
            soon drove every decision he made and eventually led him around the
            world searching for the ultimate stoke.
          </p>
          <p>
            Ian started teaching friends and family members to surf and really
            enjoyed it. He realized he could get just as big of a stoke from
            showing someone else his love for the water as he got from actually
            surfing. This led him into various summer camps over the past few
            years where he honed his technique for teaching surfing up and down
            the coast.
          </p>
          <p>
            Ian went to Dominican University to become a teacher and has been
            subbing at Ring Mountain Elementary and Middle School for the past
            year. Teaching is as much of a passion for him as surfing and being
            able to merge the two has been a dream come true.
          </p>
          <p>
            Ian has run the surf camp for the past two years during the summers
            and gives individual lessons to people of every age and experience
            level. A compassionate and patient teacher, Ian is attuned to
            learners' ability, needs, fears and potential.{" "}
          </p>
          <p class="qoute">
            "All you have to do is want it, and I will take care of the rest."
          </p>
        </section>
        <section class="col--right">
          <figure>
            <img src="/images/ian.jpg" alt="Big Dog Surf Camp" />
            <figcaption>Ian Glover aka The Big Dog</figcaption>
          </figure>
        </section>
      </main>
      <Footer />
    </div>
  );
}

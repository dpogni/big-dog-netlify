import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="maincontent">
        <section classNae="col--left">
          <h2> Beginner &amp; Intermediate Surf&nbsp;Lessons</h2>
          <h3>🏄‍♀️ Ages 7 and Up 🏄‍♂️</h3>
          <p>
            Big Dog Surf Camp is the perfect summer experience for surfers or
            surfers-to-be. The summer camp is accommodating for any young eager
            kids living in Marin County and San Francisco. We will provide the
            boards and wetsuits. We will be surfing at one of many beautiful
            beaches located in Marin County. Students must know how to swim and
            be ready to have a fun time.
          </p>
          <p>
            Campers should be dropped off near{" "}
            <a href="http://www.prooflab.com/" target="_blank">
              {" "}
              Proof Lab
            </a>
            , at{" "}
            <a href="https://goo.gl/maps/ECkKRZFcW9Q9DgN47" target="_blank">
              240 Shoreline Hwy, Mill Valley
            </a>
            , and will be shuttled to the beach. All campers must wear masks in
            the van, at dropoff, and at pickup. The camp runs from 9am to 4pm.
          </p>
          <hr />
          <h2>Summer 2021 BDSC Dates:</h2>
          <section class="banner">
            <p>
              Sessions may be modified due to changing CDC and Marin County
              guidelines.
            </p>
          </section>
          <ul class="info ul">
            <li>
              <strong>Session 1:</strong> June 7 – 10 &amp; June 14 – 17
            </li>
            <li>
              <del>
                <strong>Session 2:</strong> June 21 – 24 &amp; June 28 – July 1
              </del>{" "}
              (sold out)
            </li>
            <li>
              <strong>Session 3:</strong> July 6 – 9 &amp; July 12 – 15
            </li>
            <li>
              <strong>Session 4:</strong> July 19 – 22 &amp; July 26 – 29
            </li>
            <li>
              <strong>Session 5:</strong> Aug. 2 – 5 &amp; Aug. 9 – 12
            </li>
            <li>
              <strong>Session 6:</strong> Aug. 16 – 19 &amp; Aug. 23 – 26
            </li>
          </ul>
          <p>
            <sup>*</sup>Camp runs from Monday - Thursday 9:00am - 4:00pm
            <sup>*</sup>
          </p>
          <section class="banner">
            <p>
              Sign up <a href="/sign-up/">now</a>.
            </p>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}

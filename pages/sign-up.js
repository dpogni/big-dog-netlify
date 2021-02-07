import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function SignUp() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main class="maincontent columns">
        <section class="col--left">
          <h2>Sign Up</h2>
          <p>
            To sign up, please follow the directions in the registration form.
            Send a check with completed registration form and waiver to the
            address&nbsp;listed.
          </p>
          <p class="clear">
            <em>
              We will send you a confirmation email as soon as we receive it.
            </em>
          </p>
          <p>Feel free to email with any questions. We’ll see you soon!</p>
          <p>
            <span class="banner">Weekly camps are $1,200/session.</span>
          </p>
          <h3 style={{ marginTop: 30 }}>Registration Downloads</h3>
          <ul class="pdfList">
            <li>
              <a href="/pdfs/BigDogWaiver.pdf">
                <img src="/images/pdf_icon.png" alt="Download Waiver" />
                Download Waiver
              </a>
            </li>
            <li>
              <a href="/pdfs/RegForm2021.pdf">
                <img src="/images/pdf_icon.png" alt="Download Reg Form" />
                Download 2021 Registration Form
              </a>
            </li>
          </ul>
        </section>
        <section class="col--right">
          <figure>
            <img
              src="/images/side3.jpg"
              alt="Big Dog Surf Camp"
              id="contentPhoto"
            />
            <figcaption>
              Big Dog Surf Camp | Marin, CA &amp; North Bay Area
            </figcaption>
          </figure>
        </section>
      </main>
      <Footer />
    </div>
  );
}

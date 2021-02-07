import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function WhatToBring() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main class="maincontent columns">
        <section class="col--left">
          <h2>What To Bring</h2>
          <p>
            Summer around the bay area doesn't always mean sunny weather. In
            case the fog rolls in, make sure to pack a backpack with some warm
            dry clothes: hooded sweatshirt, pants, beanie. We will be surfing
            different beaches, which means there might not always be a place to
            buy food so a packed lunch will be the best option. It’s also
            important to pack a decent sized water bottle to keep your camper
            hydrated. Ice cream stops have been known to happen so let us know
            of any allergies or specific dietary needs your camper may have.
            Sending your camper with cash is not necessary. We will provide the
            boards and wetsuits for each camper but nothing's better than your
            own wettie and stick, so bring 'em if you got ‘em. For safety
            reasons, we can't accept hard tops in our line-up so if you aren’t
            sure about your board, shoot us an email or ask a Coach in the
            morning during sign-in. We also suggest marking your personal
            wetsuit with a ribbon or distinct feature so it doesn’t get mixed up
            with the camp suits. For this reason, we also suggest bringing a bag
            of some sort (dry bag, wetsuit bag, garbage bag, etc.) so campers
            can keep track of and easily transport their own suits.
          </p>

          <p>
            Wearing wetsuit booties is a preference. If booties are preferred by
            the camper, we suggest popping into the Proof Lab before your camper
            joins us. The surf shop is not open until after our camp does
            check-in and heads to the beach. Once there, you will want to have
            Nate set you up with a pair. Just say the Big Dog sent you.
          </p>

          <p>
            Sunscreen will be available, but it doesn't hurt to lather up your
            little grommet in the morning just to be sure.
          </p>
        </section>
        <section class="col--right">
          <h4>Quick Check List</h4>
          <ul class="checklist">
            <li>Packed Lunch</li>
            <li>Warm Clothing</li>
            <li>Sunscreen</li>
            <li>Water Bottle</li>
          </ul>
          <figure>
            <img src="/images/side1.jpg" alt="Big Dog Surf Camp" />
          </figure>
        </section>
      </main>
      <Footer />
    </div>
  );
}

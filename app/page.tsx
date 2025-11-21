import Button from "@/components/button";
import CartoonBox from "@/components/cartoonBox";
import HeroBanner from "@/components/heroBanner";
import Section from "@/components/section";
import React from "react";
import Balancer from "react-wrap-balancer";

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroBanner />
      <Section ariaLabel="services" className="bg-pink-500/10">
        <div className="grid grid-cols-2 grid-rows-2 gap-10 w-full">
          <CartoonBox>
            <h2>Kurz: storytelling a stavba příběhu</h2>

            <p>
              Trápí tě nezajímavé postavy a pocit, že tvé vyprávění místy
              pokulhává? Vítej ve storytelling matrixu. Tady pochopíš, jak
              fungují ty nejsilnější příběhy a co chybí tomu tvému 📚
            </p>
            <Button label="Omrkni kurz" href="#" transparent inverted />
          </CartoonBox>

          <CartoonBox>
            <h2>Chci líp psát</h2>
            <p>Máš nemocný rukopis? A můžu ho vidět?</p>
            <p>
              Pošli mi k text k redakci. Naučím tě na něm, jak psát čtivěji, ať
              zvýšíš šanci na úspěch u čtenářů i nakladatelů ✍🏻
            </p>
            <div>
              <a href="#" style={{ color: "#0070f3" }}>
                Zjisti, co ti pomůže »
              </a>
            </div>
          </CartoonBox>
          <CartoonBox>
            <h2>Potřebuju bič a mentora</h2>
            <p>
              Potřebuješ někoho, s kým probereš svoje psaní? Mentora, který ti
              bude dávat deadliny? Potkáme se online jen ve dvou – ty dáš na
              stůl téma, já know-how a tvůj progress nabere rychlejší spád 🚀
            </p>
            <div>
              <a href="#" style={{ color: "#0070f3" }}>
                Nebuď na to sám/a »
              </a>
            </div>
          </CartoonBox>
          <CartoonBox>
            <h2>Mám specifické chutě</h2>
            <p>
              Chceš redakci celého textu, betačtení, dramaturgii scénáře nebo
              něco úplně jiného? Napiš mi, s čím si nevíš rady a dejme věci do
              pohybu ✉️
            </p>
            <div>
              <a href="#" style={{ color: "#0070f3" }}>
                Ozvi se mi »
              </a>
            </div>
          </CartoonBox>
        </div>
      </Section>

      <Section ariaLabel="about" columns={2}>
        <div>
          <div className="text-left mb-10">
            <p className="text-4xl mb-4">jsem</p>
            <h2 id="about" className="font-bold text-7xl">
              Petr Hanel
            </h2>
          </div>

          <div className="flex flex-row flex-nowrap gap-3">
            <p className="text-pink font-semibold text-3xl">&mdash;</p>
            <div className="text-left pt-1">
              <p className="text-lg mb-5">
                <Balancer>
                  Sedm let jsem žil v Nizozemsku, kde jsem se od roku 2015
                  věnoval storytellingu a angloamerické dramaturgii. Po návratu
                  do Česka jsem založil Klub psáčů, vedu podcast, vyučuju a
                  rediguju. Nedávno mi vyšel románový debut.
                </Balancer>
              </p>
              <div className="inline-block">
                <Button label="Více o mně" href="#" className="mt-4" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section ariaLabel="testimonials">
        <h2 id="testimonials">Reference</h2>
        <blockquote
          style={{
            background: "#fafafa",
            padding: "1rem",
            borderLeft: "4px solid #eee",
          }}
        >
          „Kurz Jak vystavět kulervoucí příběh je plný informací, které se v
          českém prostředí jen těžko hledají…“ — Jakub Stanjura
        </blockquote>
        <blockquote
          style={{
            marginTop: ".75rem",
            background: "#fafafa",
            padding: "1rem",
            borderLeft: "4px solid #eee",
          }}
        >
          „Mám pocit, že jsem vstoupila do příběhového Matrixu…“ — Dominika
          Čechová
        </blockquote>
      </Section>

      <Section ariaLabel="contact">
        <h2 id="contact">Kontakt</h2>
        <p>Pole označená * jsou povinná</p>
        <form style={{ display: "grid", gap: ".5rem", maxWidth: 560 }}>
          <label>
            Jméno a příjmení *<br />
            <input
              name="name"
              required
              style={{ width: "100%", padding: ".5rem" }}
            />
          </label>
          <label>
            E-mail *<br />
            <input
              type="email"
              name="email"
              required
              style={{ width: "100%", padding: ".5rem" }}
            />
          </label>
          <label>
            Zpráva *<br />
            <textarea
              name="message"
              required
              rows={6}
              style={{ width: "100%", padding: ".5rem" }}
            />
          </label>
          <div>
            <button
              type="submit"
              style={{
                background: "#0070f3",
                color: "#fff",
                border: "none",
                padding: ".6rem 1rem",
                borderRadius: 6,
              }}
            >
              Poslat
            </button>
          </div>
        </form>

        <div style={{ marginTop: "1rem" }}>
          <p>
            Jsem klub psáčů — tak mi napiš!
            <br />
            <a href="mailto:petr@klubpsacu.cz">petr@klubpsacu.cz</a>
          </p>
        </div>
      </Section>

      <footer style={{ marginTop: "3rem", color: "#666", fontSize: ".9rem" }}>
        <p>© Klub psáčů — Petr Hanel</p>
      </footer>
    </main>
  );
};

export default HomePage;

import partner1 from "../../assets/images/sponsors/boehringer.png";
import partner2 from "../../assets/images/sponsors/gsk.png";
import partner3 from "../../assets/images/sponsors/lilly.png";
import partner4 from "../../assets/images/sponsors/sanofi.png";
import partner5 from "../../assets/images/sponsors/novo.png";
import partner6 from "../../assets/images/sponsors/abott.png";
import partner7 from "../../assets/images/sponsors/amboss.png";
import partner8 from "../../assets/images/sponsors/dexcom.png";
import partner9 from "../../assets/images/sponsors/gt-medical.png";

function Partners() {
  const partnerData = [
    {
      title: "Key Sponsor",
      cardClass: "key-sponsor-card",
      items: [
        {
          image: partner1,
          alt: "Boehringer Ingelheim",
        },
      ],
    },

    {
      title: "Strategic Sponsors",
      cardClass: "strategic-sponsor-card",
      items: [
        {
          image: partner2,
          alt: "GSK",
        },
        {
          image: partner3,
          alt: "Lilly",
        },
      ],
    },

    {
      title: "Gold Sponsors",
      cardClass: "gold-sponsor-card",
      items: [
        {
          image: partner4,
          alt: "Sanofi",
        },
        {
          image: partner5,
          alt: "Novo Nordisk",
        },
      ],
    },

    {
      title: "Silver Sponsor",
      cardClass: "silver-sponsor-card",
      items: [
        {
          image: partner6,
          alt: "Abbott",
        },
      ],
    },

    {
      title: "Exhibitors",
      cardClass: "exhibitor-card",
      items: [
        {
          image: partner7,
          alt: "AMBOSS",
        },
        {
          image: partner8,
          alt: "Dexcom",
        },
        {
          image: partner9,
          alt: "GT Medical",
        },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Orbs */}
      <div
        className="
          absolute -right-40 -top-20
          h-150 w-150
          rounded-full bg-[radial-gradient(circle,rgba(0,194,184,0.20),transparent_70%)]
        "
      />

      <div
        className="
          absolute bottom-20 -left-30
          h-150 w-150
          rounded-full bg-[radial-gradient(circle,rgba(0,194,184,0.20),transparent_70%)]
        "
      />

      <div className="min-w-[70%] max-w-7xl mx-auto px-4">
        <div className="mb-14 text-center">
          <div className="subtitle">Partners</div>
          <h2 className="text-white">Sponsors & Supporters</h2>
          <p className="mx-auto mt-5 max-w-180 text-lg leading-8 text-slate-500">
            We are proud to collaborate with leading healthcare, pharmaceutical
            and medical organizations supporting ICFM 2026.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {partnerData.map((category, index) => (
            <div key={index}>
              <div
                className="
                  mb-8 flex items-center
                  justify-center gap-4 text-center
                "
              >
                <span
                  className="
                    hidden h-0.5 w-22.5
                    bg-linear-to-r
                    from-transparent via-teal-500 to-transparent
                    sm:block
                  "
                />

                <h4
                  className={`
                    whitespace-nowrap text-white
                    ${category.headingClass || ""}
                  `}
                >
                  {category.title}
                </h4>

                <span
                  className="
                    hidden h-0.5 w-22.5
                    bg-linear-to-r
                    from-transparent via-teal-500 to-transparent
                    sm:block
                  "
                />
              </div>

              {/* Logos */}
              <div
                className="
                  flex flex-wrap justify-center gap-6
                "
              >
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className={`
                      sponsor-card
                      group 
                      ${category.cardClass}
                    `}
                  >
                    {/* Glow */}
                    <div
                      className={`
                absolute -right-17.5 -top-17
                h-40 w-40
                rounded-full
                transition-all duration-300
                group-hover:scale-150

                ${
                  category.cardClass === "gold-sponsor-card"
                    ? "bg-[radial-gradient(circle,rgba(245,184,75,0.18),transparent_70%)]"
                    : "bg-[radial-gradient(circle,rgba(0,194,184,0.12),transparent_70%)]"
                }
              `}
                    />

                    {/* Logo */}
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="
                        relative z-10
                        max-h-35
                        max-w-full
                        object-contain
                        transition-all duration-300
                        group-hover:scale-105
                      "
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;

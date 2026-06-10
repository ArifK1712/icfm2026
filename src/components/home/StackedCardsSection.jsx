import cardImg1 from "../../assets/images/king-salman.png";
import cardImg2 from "../../assets/images/prime-minister.png";
import cardImg3 from "../../assets/images/ali-muhammad.png";
import cardImg4 from "../../assets/images/khalid-alabdulkarim.png";

const cards = [
  {
    image: cardImg4,
    designation: "مدير عام الإدارة العامة للخدمات الصحية بوزارة الدفاع",
    name: "الدكتور خالد بن إبراهيم العبدالكريم",
    detail:
      "نواصل العمل على تطوير الخدمات الصحية وفق أفضل الممارسات، بما يعزز كفاءة الرعاية وجودة الخدمات المقدمة.",
  },
];

function StackedCardsSection() {
  return (
    <section
      className="
        relative overflow-hidden
        px-4 py-20 text-white
        sm:px-6
        lg:px-8 lg:py-28
      "
    >

      {/* Grid Background */}
      <div
        className="
          absolute inset-0 opacity-[0.16]
          bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-size-[58px_58px]
        "
      />

      {/* Moving Glows */}
      <div
        className="
          absolute -left-24 top-20
          h-80 w-80 rounded-full
          bg-teal-400/15 blur-3xl
          animate-[floatGlow_12s_ease-in-out_infinite]
        "
      />

      <div
        className="
          absolute -right-24 bottom-20
          h-96 w-96 rounded-full
          bg-cyan-400/15 blur-3xl
          animate-[floatGlow_16s_ease-in-out_infinite_reverse]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-1 xl:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                group relative overflow-hidden rounded-[34px]
                border border-white/12
                bg-[linear-gradient(150deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))]
                shadow-[0_34px_100px_rgba(0,0,0,0.34)]
                backdrop-blur-2xl
                transition-all duration-500
                hover:-translate-y-2 hover:border-teal-300/35
                hover:shadow-[0_42px_120px_rgba(0,0,0,0.44),0_0_45px_rgba(34,211,200,0.22)]
                md:flex items-center justify-between
              "
            >
              
              {/* Content Area */}
              <div className="relative z-10 p-6 text-right xl:p-7" dir="rtl">
                {/* Name */}
                <h2
                  className="
                   mb-8 md:mb-10 font-black leading-10 text-white
                  "
                >
                  {card.name}
                </h2>
                {/* Designation */}
                <h3
                  className="
                    mb-8 md:mb-10 font-bold leading-7
                    text-teal-400
                  "
                >
                  {card.designation}
                </h3>

                

                <div
                  className="
                    relative rounded-[26px]
                    border border-white/10
                    bg-white/5.5
                    p-5
                  "
                >
                  <div className="absolute -top-7 right-5 text-7xl font-black leading-none text-teal-300/18">
                    ”
                  </div>

                  <p
                    className="
                      relative z-10 text-lg leading-9 text-white/75
                      xl:text-xl xl:leading-10
                    "
                  >
                    “{card.detail}”
                  </p>
                </div>
              </div>
              {/* Image Area 
              Image Area 
              Image Area 
              Image Area 
              Image Area */}
              <div
                className="
                  relative flex items-end justify-center overflow-hidden
                  bg-[radial-gradient(circle_at_50%_22%,rgba(20,184,166,0.28),transparent_44%)]
                  px-0
                "
              >
                <div
                  className="
                    absolute bottom-0 h-28 w-[75%] rounded-full
                    bg-black/35 blur-2xl
                  "
                />

                <img
                  src={card.image}
                  alt={card.name}
                  loading="lazy"
                  decoding="async"
                  className="
                    relative z-10 max-h-130 w-auto object-contain
                    transition-all duration-500
                    group-hover:scale-[1.04]
                  "
                />
              </div>

              {/* Bottom Accent */}
              <div
                className="
                  absolute bottom-0 left-0 right-0 h-1
                  bg-linear-to-r from-transparent via-[#22d3c8] to-transparent
                  opacity-50 transition-all duration-500
                  group-hover:h-1.5 group-hover:opacity-100
                  group-hover:shadow-[0_0_28px_rgba(34,211,200,0.75)]
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StackedCardsSection;
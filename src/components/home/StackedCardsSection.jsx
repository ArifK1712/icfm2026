import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import cardImg1 from "../../assets/images/king-salman.png";
import cardImg2 from "../../assets/images/prime-minister.png";
import cardImg3 from "../../assets/images/ali-muhammad.png";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    image: cardImg1,
    name: "خادم الحرمين الشريفين",
    detail:"هدفي الأول أن تكون بلادنا نموذجاً ناجحاً ورائداً في العالم على كافة الأصعدة، وسأعمل معكم على تحقيق ذلك"},
  {
    image: cardImg2,
    name: "صاحب السمو الملكي ولي العهد ورئيس مجلس الوزراء الأمير",
    detail: "إن مستقبل المملكة مبشـر وواعد، وتستحق بلادنا الغالية أكثر مما تحقق. لدينا قدرات سنقوم بمضاعفة دورها وزيادة إسهامها في صناعة هذا المستقبل",
  },
  {
    image: cardImg3,
    name: "المدير العام التنفيذي لمدينة الأمير سلطان بن عبدالعزيز الطبية العسكرية",
    detail:
      "إن الرعاية الصحية الأولية تعدّ خط الدفاع الأول في أنظمتنا الصحية؛ فهي لا توفر فقط خدمات العلاج والوقاية والتشخيص المبكر، بل تلعب دورًا أساسيًّا في تعزيز الوعي الصحي وتثقيف الأفراد والمجتمعات",
  },
];

function StackedCardsSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const cardElements = cardsRef.current;

    if (!section || !cardElements.length) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 992px)": () => {
          gsap.set(cardElements, {
            y: 700,
            opacity: 0,
            scale: 0.9,
            rotateX: 8,
          });

          gsap.set(cardElements[0], {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              id: "stackedCardsSection",
              trigger: section,
              start: "top top",
              end: "+=1500",
              scrub: 0.2,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          tl.to(cardElements[1], {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            duration: 1,
            ease: "power3.out",
          });

          tl.to(
            cardElements[0],
            {
              y: 0,
              scale: 0.96,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
            },
            "<"
          );

          tl.to(cardElements[2], {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            duration: 1,
            ease: "power3.out",
          });

          tl.to(
            cardElements[1],
            {
              y: 0,
              scale: 0.97,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
            },
            "<"
          );

          tl.to(
            cardElements[0],
            {
              y: 0,
              scale: 0.93,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
            },
            "<"
          );
        },

        "(max-width: 991px)": () => {
          gsap.set(cardElements, {
            clearProps: "all",
          });
        },
      });
    }, section);

    return () => {
      ScrollTrigger.getById("stackedCardsSection")?.kill(true);
      gsap.killTweensOf(cardElements);
      gsap.set(cardElements, { clearProps: "all" });
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative overflow-hidden
        bg-white
        pt-20 text-[#061a35]
        lg:min-h-screen lg:py-0
      "
    >
      {/* Light Grid Background */}
      <div
        className="
          absolute inset-0 opacity-70
          bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)]
          bg-size-[58px_58px]
        "
      />

      {/* Soft Moving Glows */}
      <div
        className="
          absolute -left-24 top-20
          h-80 w-80 rounded-full
          bg-teal-300/20 blur-3xl
          animate-[floatGlow_12s_ease-in-out_infinite]
        "
      />

      <div
        className="
          absolute -right-24 bottom-20
          h-96 w-96 rounded-full
          bg-cyan-300/20 blur-3xl
          animate-[floatGlow_16s_ease-in-out_infinite_reverse]
        "
      />

      <div
        className="
          relative z-10 mx-auto flex
          min-h-full max-w-7xl flex-col
          justify-center px-4
        "
      >
        {/* Cards Area */}
        <div className="relative mx-auto w-full max-w-6xl lg:h-[520px]">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`
    relative mb-8 overflow-hidden rounded-4xl
    bg-white
    lg:absolute lg:inset-x-0 lg:top-0 lg:mb-0

    ${index === 0 ? "lg:z-10" : ""}
    ${index === 1 ? "lg:z-20" : ""}
    ${index === 2 ? "lg:z-30" : ""}
  `}
            >
              {/* Card Glow */}
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.14),transparent_70%)]" />
              <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                {/* Left Image */}
                <div className="">
                  <img src={card.image} alt={card.name} loading="lazy" decoding="async" className=" relative z-10 max-h-[430px] w-auto object-contain" />
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white/90 to-transparent" />
                </div>
                <div className="p-2 text-right lg:p-8" dir="rtl">
                  <h2 className="mb-4">{card.name}</h2>
                  <p className="md:text-3xl leading-10">“{card.detail}” </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StackedCardsSection;

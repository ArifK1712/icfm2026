// import InnerPageHero from "../components/InnerPageHero";

import {
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  FileText,
  Mail,
  ReceiptText,
  RefreshCcw,
  UserRound,
} from "lucide-react";

import { Link } from "react-router-dom";

function RegistrationPage() {
  const registrationFees = [
    {
      category: "Physicians",
      earlyBird: "SAR 250",
      regular: "SAR 350",
      late: "SAR 500",
    },
    {
      category:
        "Students / Residents, Nurses & Other allied Health Professionals",
      earlyBird: "SAR 200",
      regular: "SAR 300",
      late: "SAR 400",
    },
  ];

  const workshopFees = [
    {
      time: "09:00 – 12:00",
      theme: "Research Methods & Evidence-Based Medicine",
      capacity: "25",
      price: "SAR 50",
    },
    {
      time: "09:00 – 12:00",
      theme: "Good Morning Sleep Medicine: From Snoring to Metabolic Health",
      capacity: "25",
      price: "SAR 50",
    },
    {
      time: "13:00 – 16:00",
      theme: "Hands-on Stations",
      capacity: "25",
      price: "SAR 50",
    },
    {
      time: "13:00 – 16:00",
      theme:
        "Practical applications of artificial intelligence in general primary care.",
      capacity: "25",
      price: "SAR 50",
    },
  ];

  const entitlements = [
    "Attend the Opening Ceremony",
    "Attend all Scientific Sessions of the Main Conference",
    "Coffee Breaks & Lunch",
    "Admission to the Exhibition Hall",
    "Conference Materials",
    "Certificate of Attendance",
  ];

  const refundPolicy = [
    {
      title: "100% refund",
      description:
        "The congress secretariat must receive a notification of cancellation in writing at least 30 days before the event. This will entitle the delegate to a 100% refund less an administrative fee of SAR 100.00.",
    },
    {
      title: "No refund",
      description:
        "100% cancellation fee will be charged for any cancellations made within 30 days prior to the event date.",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden pt-30 py-16 text-white">

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            <div
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/12
                bg-[linear-gradient(150deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))]
                p-6
                shadow-[0_34px_100px_rgba(0,0,0,0.30)]
                backdrop-blur-2xl
                transition-all duration-500
                hover:-translate-y-2 hover:border-teal-300/35
                hover:shadow-[0_42px_120px_rgba(0,0,0,0.42),0_0_45px_rgba(34,211,200,0.18)]
              "
            >
              <div className="pointer-events-none absolute inset-0 z-30 translate-x-[-120%] skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),rgba(34,211,200,0.18),transparent)] opacity-0 blur-[1px] transition-all duration-[450ms] ease-out group-hover:translate-x-[120%] group-hover:opacity-100" />
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.18),transparent_70%)] transition-all duration-300 group-hover:scale-125" />

              <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-[#22d3c8]">
                <UserRound size={28} />
              </div>

              <h3 className="relative z-10 text-white">Create Account</h3>

              <p className="relative z-10 text-white/70">
                Create an account and choose the activities you want to book for
                yourself.
              </p>
            </div>

            <div
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/12
                bg-[linear-gradient(150deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))]
                p-6
                shadow-[0_34px_100px_rgba(0,0,0,0.30)]
                backdrop-blur-2xl
                transition-all duration-500
                hover:-translate-y-2 hover:border-teal-300/35
                hover:shadow-[0_42px_120px_rgba(0,0,0,0.42),0_0_45px_rgba(34,211,200,0.18)]
              "
            >
              <div className="pointer-events-none absolute inset-0 z-30 translate-x-[-120%] skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),rgba(34,211,200,0.18),transparent)] opacity-0 blur-[1px] transition-all duration-[450ms] ease-out group-hover:translate-x-[120%] group-hover:opacity-100" />
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.18),transparent_70%)] transition-all duration-300 group-hover:scale-125" />

              <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-[#22d3c8]">
                <ReceiptText size={28} />
              </div>

              <h3 className="relative z-10 text-white">Pay Online</h3>

              <p className="relative z-10 text-white/70">
                Complete your registration process by making the final payment
                online.
              </p>
            </div>

            <div
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/12
                bg-[linear-gradient(150deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))]
                p-6
                shadow-[0_34px_100px_rgba(0,0,0,0.30)]
                backdrop-blur-2xl
                transition-all duration-500
                hover:-translate-y-2 hover:border-teal-300/35
                hover:shadow-[0_42px_120px_rgba(0,0,0,0.42),0_0_45px_rgba(34,211,200,0.18)]
              "
            >
              <div className="pointer-events-none absolute inset-0 z-30 translate-x-[-120%] skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),rgba(34,211,200,0.18),transparent)] opacity-0 blur-[1px] transition-all duration-[450ms] ease-out group-hover:translate-x-[120%] group-hover:opacity-100" />
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.18),transparent_70%)] transition-all duration-300 group-hover:scale-125" />

              <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-[#22d3c8]">
                <Mail size={28} />
              </div>

              <h3 className="relative z-10 text-white">Instant Confirmation</h3>

              <p className="relative z-10 text-white/70">
                On completion of the registration, you will receive your details
                through an auto-generated email instantly.
              </p>
            </div>
          </div>

          <div
            className="
              mt-8 rounded-3xl border border-white/12
              bg-white/[0.07] p-6
              shadow-[0_24px_80px_rgba(0,0,0,0.24)]
              backdrop-blur-2xl
            "
          >
            <p className="text-white/70">
              For any assistance, please write to the conference secretariat at{" "}
              <Link
                to="mailto:ajay.gupta@wearemci.com"
                className="text-[#22d3c8] underline"
              >
                ajay.gupta@wearemci.com
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section
        id="registration-fees"
        className="relative overflow-hidden py-16 text-white"
      >

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <span className="subtitle">Registration Category & Fee</span>

            <h2 className="text-white">Registration Category & Fee</h2>
          </div>

          <div
            className="
              overflow-hidden rounded-3xl
              border border-white/12
              bg-white/[0.07]
              shadow-[0_34px_100px_rgba(0,0,0,0.30)]
              backdrop-blur-2xl mb-10">
            <div className="overflow-x-auto mb-16">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#062e32] text-white">
                    <th className="p-5 text-left">Registration Category</th>
                    <th className="p-5 text-left">
                      Early Bird Until August 31, 2026
                    </th>
                    <th className="p-5 text-left">
                      Regular Registration September 1 to 30, 2026
                    </th>
                    <th className="p-5 text-left">
                      Late & Spot Registration October 1 – 8, 2026
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {registrationFees.map((item, index) => (
                    <tr
                      key={item.category}
                      className={
                        index % 2 === 0 ? "bg-white/[0.06]" : "bg-white/[0.10]"
                      }
                    >
                      <td className="p-5 font-semibold text-white">
                        {item.category}
                      </td>
                      <td className="p-5 text-white/75">{item.earlyBird}</td>
                      <td className="p-5 text-white/75">{item.regular}</td>
                      <td className="p-5 text-white/75">{item.late}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          

          <div className="mb-10 text-center">
            <span className="subtitle">Workshops & Fee</span>

            <h2 className="text-white">Pre-Conference Workshops</h2>
          </div>
          <div
            className="
              overflow-hidden rounded-3xl
              border border-white/12
              bg-white/[0.07]
              shadow-[0_34px_100px_rgba(0,0,0,0.30)]
              backdrop-blur-2xl">
            <div className="overflow-x-auto mb-16">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#062e32] text-white">
                    <th className="p-5 text-left">Time</th>
                    <th className="p-5 text-left">Theme</th>
                    <th className="p-5 text-left">Capacity</th>
                    <th className="p-5 text-left">Price</th>
                  </tr>
                </thead>

                <tbody>
                  {workshopFees.map((item, index) => (
                    <tr
                      key={`${item.time}-${item.theme}`}
                      className={
                        index % 2 === 0 ? "bg-white/[0.06]" : "bg-white/[0.10]"
                      }
                    >
                      <td className="p-5 font-semibold text-white">{item.time}</td>
                      <td className="p-5 text-white/75">{item.theme}</td>
                      <td className="p-5 text-white/75">{item.capacity}</td>
                      <td className="p-5 text-white/75">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>


          <div
            className="
              mt-6 rounded-3xl border border-white/12
              bg-white/[0.07] p-6
              shadow-[0_24px_80px_rgba(0,0,0,0.24)]
              backdrop-blur-2xl
            "
          >
            <p className="text-white/70">
              <b className="text-white">
                *All above mentioned fees is inclusive of VAT @15%
              </b>
            </p>

            <p className="text-white/70">
              Registered Physicians, Residents, Nurses, Medical Students are
              entitled to attend all scientific sessions, the exhibition, as well
              as receive the congress material.
            </p>

            <p className="text-white/70">
              <b className="text-white">**</b> For administrative purpose, a
              copy of your certificate is required as a proof in order to avail
              the registration fee for a resident, medical student or nurse.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 text-white">

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div
  className="
    rounded-3xl border border-[#16d8cd]/24
    bg-[radial-gradient(circle_at_12%_20%,rgba(22,216,205,0.22),transparent_26%),radial-gradient(circle_at_88%_70%,rgba(37,231,220,0.16),transparent_28%),linear-gradient(135deg,#043d3d,#063f43_55%,#032f34)]
    p-7 text-white
    backdrop-blur-2xl
  "
>
  <div className="mb-5 flex items-center gap-3">
    <CalendarDays className="text-[#25e7dc]" size={26} />
    <h3 className="text-white">Registration Terms</h3>
  </div>

  <p className="text-[#d9fffb]/72">
    Please read the registration terms and conditions carefully
    before beginning online registration.
  </p>

  <p className="text-[#d9fffb]/72">
    Should there be no payment received within the given grace
    period of 10 working days, we reserve the right to cancel your
    registration.
  </p>
</div>

            <div
              className="
                rounded-3xl border border-white/12
                bg-white/[0.07] p-7
                backdrop-blur-2xl
              "
            >
              <div className="mb-5 flex items-center gap-3">
                <FileText className="text-[#22d3c8]" size={26} />
                <h3 className="text-white">Letter of Invitation</h3>
              </div>

              <p className="text-white/70">
                The conference is pleased to offer letters of invitation to those
                planning to attend “4th International Conference on Community
                Health & Primary Healthcare 2024” at Fairmont Hotel, Riyadh.
              </p>

              <p className="text-white/70">
                This letter is not and will not be regarded as a financial
                commitment from the conference organizer. Delegates are
                responsible for the own travel expenses. This letter will be
                issued only upon receipt of full payment.
              </p>

              <p className="text-white/70">
                <b className="text-white">Note:</b> This invitation letter is
                also to assist delegate in obtaining a visa for entering KSA to
                participate in the International Conference on Community Health &
                Primary Healthcare. To obtain the Invitation letter please write
                us at{" "}
                <Link
                  to="mailto:ajay.gupta@wearemci.com"
                  className="text-[#22d3c8] underline"
                >
                  ajay.gupta@wearemci.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 text-white">

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <span className="subtitle">Cancellation & Refund Policy</span>

            <h2 className="text-white">Cancellation & Refund Policy</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {refundPolicy.map((item) => (
              <div
                key={item.title}
                className="
                  rounded-3xl border border-white/12
                  bg-white/[0.07] p-7
                  shadow-[0_30px_90px_rgba(0,0,0,0.28)]
                  backdrop-blur-2xl
                "
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-[#22d3c8]">
                  <RefreshCcw size={28} />
                </div>

                <h3 className="text-white">{item.title}</h3>

                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>

          <div
            className="
              mt-8 rounded-3xl border border-white/12
              bg-white/[0.07] p-6
              shadow-[0_24px_80px_rgba(0,0,0,0.24)]
              backdrop-blur-2xl
            "
          >
            <p className="text-white/70">
              All cancellations and requests for refund must be in writing at{" "}
              <Link
                to="mailto:ajay.gupta@wearemci.com"
                className="text-[#22d3c8] underline"
              >
                ajay.gupta@wearemci.com
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 text-white">
        <div
          className="
            absolute inset-0 opacity-[0.16]
            bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
            bg-[size:58px_58px]
          "
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <span className="subtitle">Entitlements</span>

            <h2 className="text-white">Entitlement for Registrants</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {entitlements.map((item) => (
              <div
                key={item}
                className="
                  flex gap-3 rounded-3xl
                  border border-white/12
                  bg-white/[0.07] p-5
                  shadow-[0_22px_70px_rgba(0,0,0,0.22)]
                  backdrop-blur-2xl
                "
              >
                <CheckCircle2
                  size={22}
                  className="mt-1 shrink-0 text-[#22d3c8]"
                />
                <span className="text-white/75">{item}</span>
              </div>
            ))}
          </div>

          <div
            className="
              mt-8 rounded-3xl border border-white/12
              bg-white/[0.07] p-7
              shadow-[0_30px_90px_rgba(0,0,0,0.28)]
              backdrop-blur-2xl
            "
          >
            <div className="mb-4 flex items-center gap-3">
              <BadgeCheck className="text-[#22d3c8]" size={26} />
              <h3 className="text-white">
                Resident / Trainee / Nurses / Fellow Registration Fee
              </h3>
            </div>

            <p className="text-white/70">
              To qualify for the Resident / Trainee / Nurses / Fellow
              registration fee, a current letter of verification from your
              department head or fellowship sponsor must accompany this
              registration along with a photocopy of your passport indicating
              your date of birth.
            </p>

            <p className="text-white/70">
              Letters and credentials are to be sent via email to{" "}
              <Link
                to="mailto:ajay.gupta@wearemci.com"
                className="text-[#22d3c8] underline"
              >
                ajay.gupta@wearemci.com
              </Link>
              .
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="https://confkt.congenie.com/main-form/"
              target="_blank"
              className="btn btn-main"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegistrationPage;
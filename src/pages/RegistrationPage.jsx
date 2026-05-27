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

import { Link } from 'react-router-dom'

function RegistrationPage() {
  const registrationFees = [
    {
      category: "Physicians",
      earlyBird: "SAR 250",
      regular: "SAR 350",
      late: "SAR 500",
    },
    {
      category: "Students / Residents, Nurses & Other allied Health Professionals",
      earlyBird: "SAR 200",
      regular: "SAR 300",
      late: "SAR 400",
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

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 ">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-[#0aa6a6]">
                <UserRound size={28} />
              </div>

              <h3>Create Account</h3>

              <p>
                Create an account and choose the activities you want to book for
                yourself.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 ">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-[#0aa6a6]">
                <ReceiptText size={28} />
              </div>

              <h3>Pay Online</h3>

              <p>
                Complete your registration process by making the final payment
                online.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 ">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-[#0aa6a6]">
                <Mail size={28} />
              </div>

              <h3>Instant Confirmation</h3>

              <p>
                On completion of the registration, you will receive your details
                through an auto-generated email instantly.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl bg-white p-6 ">
            <p>
              For any assistance, please write to the conference secretariat at{" "}
              <Link to="mailto:ajay.gupta@wearemci.com" className="text-teal-500 underline">
                ajay.gupta@wearemci.com
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section id="registration-fees" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10 text-center">
            <span className="subtitle">Registration Category & Fee</span>

            <h2>Registration Category & Fee</h2>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white ">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#062a4f] text-white">
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
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="p-5 font-semibold">{item.category}</td>
                      <td className="p-5">{item.earlyBird}</td>
                      <td className="p-5">{item.regular}</td>
                      <td className="p-5">{item.late}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-teal-100 bg-teal-50/60 p-6">
            <p>
              <b>*All above mentioned fees is inclusive of VAT @15%</b>
            </p>

            <p>
              Registered Physicians, Residents, Nurses, Medical Students are
              entitled to attend all scientific sessions, the exhibition, as well
              as receive the congress material.
            </p>

            <p>
              <b>**</b> For administrative purpose, a copy of your certificate is
              required as a proof in order to avail the registration fee for a
              resident, medical student or nurse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-[#062a4f] p-7 text-white">
              <div className="mb-5 flex items-center gap-3">
                <CalendarDays className="text-cyan-300" size={26} />
                <h3>Registration Terms</h3>
              </div>

              <p>
                Please read the registration terms and conditions carefully
                before beginning online registration.
              </p>

              <p>
                Should there be no payment received within the given grace
                period of 10 working days, we reserve the right to cancel your
                registration.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 ">
              <div className="mb-5 flex items-center gap-3">
                <FileText className="text-[#0aa6a6]" size={26} />
                <h3>Letter of Invitation</h3>
              </div>

              <p>
                The conference is pleased to offer letters of invitation to those
                planning to attend “4th International Conference on Community
                Health & Primary Healthcare 2024” at Fairmont Hotel, Riyadh.
              </p>

              <p>
                This letter is not and will not be regarded as a financial
                commitment from the conference organizer. Delegates are
                responsible for the own travel expenses. This letter will be
                issued only upon receipt of full payment.
              </p>

              <p>
                <b>Note:</b> This invitation letter is also to assist delegate in
                obtaining a visa for entering KSA to participate in the
                International Conference on Community Health & Primary
                Healthcare. To obtain the Invitation letter please write us at{" "}
                <Link to="mailto:ajay.gupta@wearemci.com" className="text-teal-500 underline">
                  ajay.gupta@wearemci.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10 text-center">
            <span className="subtitle">Cancellation & Refund Policy</span>

            <h2>Cancellation & Refund Policy</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {refundPolicy.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-teal-100 bg-teal-50/60 p-7"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-[#0aa6a6]">
                  <RefreshCcw size={28} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-slate-100 bg-slate-50 p-6">
            <p>
              All cancellations and requests for refund must be in writing at{" "}
              <Link to="mailto:ajay.gupta@wearemci.com" className="text-teal-500 underline">
                ajay.gupta@wearemci.com
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10 text-center">
            <span className="subtitle">Entitlements</span>

            <h2>Entitlement for Registrants</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {entitlements.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-3xl bg-white p-5 "
              >
                <CheckCircle2
                  size={22}
                  className="mt-1 shrink-0 text-[#0aa6a6]"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-white p-7 ">
            <div className="mb-4 flex items-center gap-3">
              <BadgeCheck className="text-[#0aa6a6]" size={26} />
              <h3>Resident / Trainee / Nurses / Fellow Registration Fee</h3>
            </div>

            <p>
              To qualify for the Resident / Trainee / Nurses / Fellow
              registration fee, a current letter of verification from your
              department head or fellowship sponsor must accompany this
              registration along with a photocopy of your passport indicating
              your date of birth.
            </p>

            <p>
              Letters and credentials are to be sent via email to{" "}
              <Link to="mailto:ajay.gupta@wearemci.com" className="text-teal-500 underline">
                ajay.gupta@wearemci.com
              </Link>
              .
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link to="https://confkt.congenie.com/main-form/" target="_blank" className="btn btn-main">
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegistrationPage;
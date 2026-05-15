import { MapPin } from "lucide-react";
import evenevenue from '../../assets/images/venue.jpg'

function Venue() {
  return (
    <section
      id="venue"
      className="
        overflow-x-hidden py-20 text-white
        bg-[radial-gradient(circle_at_12%_18%,rgba(0,194,184,0.20),transparent_28%),radial-gradient(circle_at_90%_24%,rgba(71,215,255,0.16),transparent_26%),linear-gradient(135deg,#061a35,#09294f_58%,#061a35)]
      "
    >
      <div className="min-w-[70%] max-w-7xl mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <div className="mb-3 subtitle">Venue</div>

            <h2 className="text-4xl font-black tracking-[-1px] text-white md:text-5xl">
              Fairmont Riyadh
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/65">
              A premium venue experience with easy access to conference halls,
              networking areas, hospitality and accommodation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#" className="btn btn-main">
                Get Directions
              </a>

              <a href="#" className="btn">
                View Accommodation
              </a>
            </div>
          </div>
          <div>
            <div
              className="
                overflow-hidden rounded-4xl
                border border-white/15
                bg-white/10
                text-white
                shadow-[0_24px_70px_rgba(0,0,0,0.18)]
                backdrop-blur-[18px]
              "
            >
              <img
                src={evenevenue}
                loading="lazy"
                alt="Venue hotel"
                className="
                  h-95 w-full object-cover
                "
              />

              <div className="p-6">
                <h5 className="mb-2 text-2xl font-bold text-white">
                  Riyadh, Saudi Arabia
                </h5>

                <p className="flex items-center">
                  <MapPin size={18} className="mr-2 text-teal-300" />
                  Add Google Map embed here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Venue;

import { Link} from 'react-router-dom'
import { MapPin } from "lucide-react";
import evenevenue from '../../assets/images/venue.jpg'

function Venue() {
  return (
    <section
      id="venue"
      className="
        overflow-x-hidden py-20 text-white        
      "
    >
      <div className="min-w-[70%] max-w-7xl mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <div className="mb-3 subtitle">Venue</div>

            <h2 className="text-4xl font-black tracking-[-1px] text-white md:text-5xl">
              Fairmont Riyadh, Saudi Arabia
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/65">
              A premium venue experience with easy access to conference halls,
              networking areas, hospitality and accommodation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link target='_blank' to="https://www.google.com/maps/dir//Fairmont+Riyadh,+Area,+Business+Gate,+Qurtubah,+Riyadh+11552,+Saudi+Arabia/@26.9063311,75.7411663,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e2efc5ababc7065:0xbd4b4b5828b1d31a!2m2!1d46.7182893!2d24.8082207?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D" className="btn btn-main">
                Get Directions
              </Link>
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
                  Area, Business Gate, Qurtubah, Riyadh 11552, Saudi Arabia
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

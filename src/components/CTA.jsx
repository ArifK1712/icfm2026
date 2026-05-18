import { Link } from 'react-router-dom'

function CTA() {
  return (
    <section className="py-20">
      <div className="min-w-[70%] max-w-7xl mx-auto px-4">

        <div
          className="text-center text-dark"
        >

          {/* Content */}
          <div className="relative z-10 space-y-8">
            <h2>Ready to join ICFM?</h2>
            <p>
              Register today and be part of a future-focused
              healthcare conference.
            </p>
            <Link
              to="/registration"
              className="btn btn-main">
              Register Now
            </Link>

          </div>

        </div>
      </div>
    </section>
  )
}

export default CTA
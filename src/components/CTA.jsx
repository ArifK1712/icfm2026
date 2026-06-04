import { Link } from 'react-router-dom'

function CTA() {
  return (
    <section className="py-20">
      <div className="min-w-[70%] max-w-7xl mx-auto px-4">
        <div className="text-center text-dark">
          <div className="relative z-10 space-y-8">
            <h2 className="text-white">Conference Secretariat</h2>

            <p className="mx-auto max-w-3xl">
              For registration assistance, abstract submission enquiries,
              sponsorship opportunities, and general conference information,
              our secretariat team is here to support you.
            </p>

            <Link to="/contact" className="btn btn-main">
              Contact Secretariat
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
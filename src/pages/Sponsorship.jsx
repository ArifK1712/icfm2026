import prospectusPdf from "../assets/images/Sponsorship-Brochure-2026.pdf";

function Sponsorship() {
  return (
    <section className="text-center pt-30 py-20 min-h-[58vh] flex flex-col items-center justify-center">
      <div className="mx-auto max-w-7xl px-4">
        <h2>For More Information, Please Download the Sponsorship & Partnership Prospectus.</h2>
        <a
          href={prospectusPdf}
          download
          className="btn btn-main mt-15"
        >
          Download Brochure
        </a>
      </div>
    </section>
  );
}

export default Sponsorship;
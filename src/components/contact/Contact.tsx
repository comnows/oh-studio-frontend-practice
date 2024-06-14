type ContactProps = {
  size: "section" | "page";
};

function Contact({ size }: ContactProps) {
  const sizeVariants = {
    section: "h-[40vh] md:max-xl:[30vh] xl:h-[50vh] text-3xl md:text-[38px]",
    page: "h-[90vh] md:h-screen  text-4xl md:text-5xl xl:text-7xl",
  };
  return (
    <div className="flex justify-center">
      <div
        className={`flex flex-col items-center justify-center w-full max-w-[1400px] text-center tracking-tighter font-medium p-5 md:p-10 ${sizeVariants[size]}`}
      >
        <h1
          className="leading-tight min-w-[300px] shrink-0"
          data-aos="fade-up"
          data-aos-offset="200"
        >
          Let's work together.
        </h1>
        <a
          href="mailto:watthanandh.l@gmail.com"
          className="text-black/50 hover:text-black/25 !leading-tight"
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-delay="150"
        >
          Get in touch.
        </a>
      </div>
    </div>
  );
}

export default Contact;

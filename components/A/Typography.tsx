import styles from "@/styles/Home.module.css";

const TypographyQuote = () => {
  return (
    <article className={styles.typography}>
        <div className="relative mt-12">
          <div className="block w-full text-xl not-italic font-title">
            Typography should be easy. {" "}
            <a
              href="https://github.com/tailwindlabs/tailwindcss-typography"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-gray-900"
            >
              Tailwind Typography
            </a>
            {" "}
            and
            {" "}
            <a
              href="https://fontsource.org/fonts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-gray-900"
            >
              Fontsource
            </a>
          </div>
          <h2 className={styles.butterfly}>Ants and butterflies</h2>
        </div>
        <div>
          <p>
            An idea by Luis Siquot. To establish the possible paths for the design of fonts. The &quot;typographic
            ants&quot; are in charge of the painstaking and laborious task of making a text legible, a very useful work,
            but imperceptible to the eyes of the reader. On the other hand, the display of &quot;typographic
            butterflies&quot; deliberately manifests their fullness and forms on a large scale.
          </p>
        </div>
      </article>
  );
};

export default TypographyQuote;

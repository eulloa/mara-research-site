import { Spotlight } from "@/components";

export const Publications = () => (
  <div className="mt-8" id="publications">
    <h1 className="dark:text-white mb-4 text-lg font-bold">Publications</h1>
    <div className="space-y-8">
      {/* <article>
        <span className="dark:text-white">
          <Spotlight
            className="bg-lightBlue rounded-lg p-1 text-navy"
            message="Ulloa M."
          />
          , Kamali N., Fernandes G., Soyemi, E., Beltzer M., Alshufara, N.,
          Jacobs, M. &ldquo;Patients&rsquo; Expectations of ML-driven JITAI
          Support for Maternal Stress Management&rdquo;{" "}
          <span className="italic">
            CHI conference on human factors in computing systems.
          </span>{" "}
          Yokohama, Japan, April 26 - May 1, 2025{" "}
          <span className="font-bold">[UNDER REVIEW]</span>
        </span>
      </article> */}
      <article>
        <span className="dark:text-white">
          Cruz, S., Lu, C.,{" "}
          <Spotlight
            message="Ulloa M."
            className="bg-lightBlue rounded-lg p-1 text-navy"
          />
          , Redding, A., Hester, J., Jacobs, M. &ldquo;
          <a
            className="underline"
            href="https://mhealth.jmir.org/2024/1/e50826"
            target="_blank"
          >
            Perceptions of Wearable Health Tools Post the COVID-19 Emergency in
            Low-Income Latin Communities: Qualitative Study&rdquo;
          </a>{" "}
          <span className="italic">JMIR mHealth and uHealth (JMU).</span> USA,
          August 5, 2024.
        </span>
      </article>
      <article>
        <span className="dark:text-white">
          <Spotlight
            message="Ulloa M."
            className="bg-lightBlue rounded-lg p-1 text-navy"
          />
          , Rothrock, B., Ahmad F., Jacobs, M.{" "}
          <a
            className="underline"
            href="https://www.frontiersin.org/articles/10.3389/fcomp.2022.1045704/full"
            target="_blank"
          >
            &ldquo;Invisible Clinical Labor Driving the Successful Integration
            of AI in Healthcare.&rdquo;
          </a>{" "}
          <span className="italic">Frontiers in Computer Science.</span> USA,
          December 1, 2022.
        </span>
      </article>
    </div>
  </div>
);

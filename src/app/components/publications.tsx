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
          Butler, J., 
          <Spotlight
            className="bg-lightBlue rounded-lg p-1 text-navy"
            message="Ulloa, M."
            options={{ type: "span" }}
          />
          , Storey, M., Bird, C.{" "}
          <a
            className="underline"
            href=""
            target="_blank"
          >
            &ldquo;Climbing the Generative AI Mountain &#9968;: A "Hitchhiker's" Guide for PMs&rdquo;
          </a>{" "}
          <span>[UNDER REVIEW]</span>
        </span>
      </article>
      <article>
        <span className="dark:text-white">
          <Spotlight
            className="bg-lightBlue rounded-lg p-1 text-navy"
            message="Ulloa, M."
            options={{ type: "span" }}
          />
          ,  Butler, J., Haniyur, S., Miller, C., Amos, B., Sarkar, A., Storey, M.{" "}
          <a
            className="underline"
            href="https://arxiv.org/abs/2510.02504"
            target="_blank"
          >
            &ldquo;Product Manager Practices for Delegating Work to Generative AI: &lsquo;Accountability
            must not be delegated to non-human actors&rsquo;&rdquo;
          </a>{" "}
          <span>ACM/IEEE International Conference in Software Engineering(ICSE). December 13, 2025</span>
        </span>
      </article>
      <article>
        <span className="dark:text-white">
          <Spotlight
            className="bg-lightBlue rounded-lg p-1 text-navy"
            message="Ulloa, M."
            options={{ type: "span" }}
          />
          , Kamali, N., Fernandes, G., Soyemi, M., Beltzer, M., Alshufara, N., Jacobs, M.{" "}
          <a
            className="underline"
            target="_blank"
          >
            &ldquo;Patients&rsquo; Expectations of ML-driven JITAI Support for Maternal Stress Management&rdquo;
          </a>{" "}
          <span>[UNDER REVIEW]</span>
        </span>
      </article>
      <article>
        <span className="dark:text-white">
          Miller C., Choudhuri R,{" "}
          <Spotlight
            className="bg-lightBlue rounded-lg p-1 text-navy"
            message="Ulloa, M."
            options={{ type: "span" }}
          />
          , Haniyur S., DeLine R., Storey M., Murphy-Hill E., Bird C., Butler J.{" "}
          <a
            className="underline"
            href="https://arxiv.org/abs/2507.21280"
            target="_blank"
          >
            &ldquo;Maybe We Need Some More Examples: Individual and Team Drivers of Developer GenAI Tool Use&rdquo;
          </a>.{" "}
          <span>ACM/IEEE International Conference in Software Engineering (ICSE). October 16, 2025.</span>
        </span>
      </article>
      <article>
        <span className="dark:text-white">
          Cruz, S., Lu, C.,{" "}
          <Spotlight
            className="bg-lightBlue rounded-lg p-1 text-navy"
            message="Ulloa, M."
            options={{ type: "span" }}
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
          <span className="italic">JMIR mHealth and uHealth (JMU).</span>{" "} 
          August 5, 2024.
        </span>
      </article>
      <article>
        <span className="dark:text-white">
          <Spotlight
            className="bg-lightBlue rounded-lg p-1 text-navy"
            message="Ulloa, M."
            options={{ type: "span" }}
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
          <span className="italic">Frontiers in Computer Science.</span>{" "}
          December 1, 2022.
        </span>
      </article>
    </div>
  </div>
);

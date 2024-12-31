import { Socials } from "@/components";

export const Footer = () => (
  <footer className="md:flex bg-eggshell dark:bg-navy text-black dark:text-white py-10">
    <div className="flex-1 mb-4 md:mb-0">
      <p>2233 Tech Drive (Office 3202) Evanston, IL 60208</p>
      <p>&#169; Mara Ulloa</p>
    </div>
    <div className="flex-1">
      <Socials className="flex-1 flex justify-center md:justify-end" />
    </div>
  </footer>
);

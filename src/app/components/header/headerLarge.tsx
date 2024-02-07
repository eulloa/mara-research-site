import { NavLarge } from "@/app/components/nav";
import { TClasses } from "@/types";

export const HeaderLarge = ({ classes }: TClasses): React.ReactNode => (
  <div className={classes}>
    <NavLarge />
  </div>
);

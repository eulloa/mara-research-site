import React from "react";

export const SelectedProjects = ({
  children,
  id,
  label,
}: {
  children: React.ReactNode;
  id: string;
  label: string;
}) => (
  <div className="mt-8" id={id}>
    <h1 className="dark:text-white mb-4 text-lg font-bold">{label}</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-4">
      {children}
    </div>
  </div>
);

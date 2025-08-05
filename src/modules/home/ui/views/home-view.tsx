import React from "react";
import {CategoriesSection} from "../sections/categories-section";

interface HomeViewProps {
  categoryId?: string;
}

const HomeView = ({ categoryId }: HomeViewProps) => {
  return (
    <div className="max-w-[2400px] mx-auto  px-4 pt-2.5 mb-10 flex flex-col gap-y-6">
      <CategoriesSection categoryId={categoryId} />
    </div>
  );
};

export default HomeView;

export const CategoryCard = ({ icon, title }) => {
  return (
    <div className="border border-black hover:bg-primary-color hover:text-white transition duration-200 flex flex-col items-center justify-center p-8 w-[170px] h-[140px] gap-4 cursor-pointer">
      <span>{icon}</span>
      <span>{title}</span>
    </div>
  );
};

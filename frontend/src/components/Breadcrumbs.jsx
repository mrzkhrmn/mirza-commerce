import { Link, useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  // Breadcrumb içeriğini tanımlama
  const breadcrumbMap = {
    product: "Product",
    category: "Category",
    wishlist: "Wishlist",
  };

  // Alfanümerik bir ID olup olmadığını kontrol eden regex
  const isIdSegment = (segment) =>
    /^[a-zA-Z0-9]+$/.test(segment) && segment.length > 8; // Uzunlukla birlikte kontrol

  return (
    <nav className="mt-14">
      <ul className="flex space-x-2">
        {/* Ana Sayfa */}
        <li>
          <Link to="/" className="text-black hover:underline">
            Home
          </Link>
        </li>

        {/* Dinamik Parçalar */}
        {pathnames.map((value, index) => {
          const isLast =
            value === "product"
              ? index === pathnames.length - 2
              : index === pathnames.length - 1; // Son eleman mı?

          // ID segmentlerini ve breadcrumbMap içinde tanımlı olmayan yolları hariç tut
          if (isIdSegment(value) || !breadcrumbMap[value]) return null;

          const label = breadcrumbMap[value];
          const to = `/${pathnames
            .slice(0, index + 1)
            .filter((segment) => !isIdSegment(segment)) // Sadece metin segmentlerini tut
            .join("/")}`;

          return (
            <li key={to} className="flex space-x-2">
              <span>/</span>
              {isLast ? (
                // Son breadcrumb düz metin ve tıklanamaz
                <span className="text-gray-400 cursor-default">{label}</span>
              ) : (
                // Diğer breadcrumb öğeleri tıklanabilir link olur
                <Link to={to} className="text-black hover:underline">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

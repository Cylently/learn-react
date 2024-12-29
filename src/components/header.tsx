import { AlignJustify } from "lucide-react";

function Header() {
  return (
    <div className="mb-30 sticky top-0 flex items-center justify-between space-x-3 p-4 backdrop-blur">
      <div className="flex items-center space-x-2">
        <div className="text-3xl">Name</div>
        <div>Version </div>
        <div>Notification </div>
      </div>
      <div className="hidden space-x-2 md:flex">
        <div>Docs </div>
        <div>Components </div>
        <div>Blog </div>
        <div>Showcase </div>
        <div>Theme </div>
        <div>Profile </div>
      </div>
      <button className="m-2 rounded bg-green-800 p-2 hover:bg-green-700 md:hidden">
        <AlignJustify />
      </button>
    </div>
  );
}
export default Header;

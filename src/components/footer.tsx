function Footer() {
  return (
    <div className="flex justify-between space-x-3 p-3">
      <div className="">Copyright </div>
      <div className="flex space-x-2">
        <div>Github </div>
        <div>Discord </div>
        <p>
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;

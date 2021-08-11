function FooterItem({ title, items }) {
  return (
    <div className="mx-auto">
      <h1 className="font-md mb-5">{title}</h1>
      <div className={title === "BROWSE" && "grid grid-cols-4"}>
        {items.map((item) => (
          <p
            className="mb-1 text-gray-500 cursor-pointer hover:text-white hover:scale-105"
            href="#"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default FooterItem;

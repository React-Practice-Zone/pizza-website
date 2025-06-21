export function MenuItem({ ...imageProps }) {
  const { image, name, description, price } = imageProps;

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>{description}</p>
      <h3>{price}</h3>
    </div>
  );
}

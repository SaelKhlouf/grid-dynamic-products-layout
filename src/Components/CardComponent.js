function CardComponent({ id, title, price, desc, featured }) {
  return (
    <figure className={`card stacked ${featured && "card-featured"}`}>
      <img src={`/${id}.jpg`} className={`card-image`}></img>
      <section className="card-details">
        <h1 className="card-title">{title}</h1>
        <p className="card-price">{"$" + price + ".00"}</p>
        <p className="card-desc">{desc}</p>
      </section>
    </figure>
  );
}

export default CardComponent;

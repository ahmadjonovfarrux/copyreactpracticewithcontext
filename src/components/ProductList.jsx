function ProductList(desserts) {
  return (
    <div className="desserts">
      <h1 className="desserts-title">Desserts</h1>
      <div>
        {desserts.desserts.forEach((dessert) => {
          console.log(dessert);
        })}
      </div>
    </div>
  );
}

export default ProductList;

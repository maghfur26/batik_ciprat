import AreaCard from "../Element/card";

const ListImage = ["https://source.unsplash.com/random/?shoes", "https://source.unsplash.com/random/?jacket", "https://source.unsplash.com/random/?woman-jacket", "https://source.unsplash.com/random/?bag", "https://source.unsplash.com/random/?man-bag", "https://source.unsplash.com/random/?t-shirt", "https://source.unsplash.com/random/?watch"];

const Product = () => {
  return (
    <>
      <div className="wrapper w-full bg-slate-200 bg-opacity-60 py-10">
        <h1 className="text-4xl font-semibold text-center underline">
          Product
        </h1>
        <h5 className="text-xl text-center font-sans">Batik Ciprat</h5>
        <div className="container py-5 max-w-full flex justify-center">
          <div className="flex justify-center flex-wrap gap-4">
            {ListImage.map((image) => (
              <AreaCard image={image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

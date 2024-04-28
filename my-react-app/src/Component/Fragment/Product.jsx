import AreaCard from "../Element/card";

const Product = () => {
  return (
    <>
      <div className="wrapper w-full bg-slate-200 bg-opacity-60 py-10">
        <h1 className="text-4xl font-semibold text-center underline">
          Product
        </h1>
        <h5 className="text-xl text-center font-sans">Batik Ciprat</h5>
        <div className="container w-dvw mx-auto mt-20 box-border flex justify-center">
          <div className="flex gap-3 flex-wrap mx-5">
            <AreaCard image={"https://source.unsplash.com/random/?shoes"} />
            <AreaCard image={"https://source.unsplash.com/random/?jacket"} />
            <AreaCard image={"https://source.unsplash.com/random/?woman-jacket"}/>
            <AreaCard image={"https://source.unsplash.com/random/?bag"} />
            <AreaCard image={"https://source.unsplash.com/random/?man-bag"} />
            <AreaCard image={"https://source.unsplash.com/random/?t-shirt"} />
            <AreaCard image={"https://source.unsplash.com/random/?watch"} />
            <AreaCard image={"https://source.unsplash.com/random/?shoes"} />
            <AreaCard image={"https://source.unsplash.com/random/?jacket"} />
            <AreaCard image={"https://source.unsplash.com/random/?woman-jacket"}/>
            <AreaCard image={"https://source.unsplash.com/random/?bag"} />
            <AreaCard image={"https://source.unsplash.com/random/?man-bag"} />
            <AreaCard image={"https://source.unsplash.com/random/?t-shirt"} />
            <AreaCard image={"https://source.unsplash.com/random/?watch"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

import SimpleImageSlider from "react-simple-image-slider";

const Slider = ({ img }) => {
  console.log(img);
  const data = img.map((item) => {
    return {
      url: "http://localhost:8000/" + item.name.toString(),
    };
  });
  console.log(data);
  return (
    <div>
      <SimpleImageSlider
        width={300}
        height={280}
        images={data}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default Slider;

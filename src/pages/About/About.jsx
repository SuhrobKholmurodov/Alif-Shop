import React from "react";

const About = () => {
  return (
    <div className="all">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        metus id nunc blandit, ut tincidunt eros ullamcorper. Vivamus sed
        ultrices ligula. Donec vehicula vestibulum velit, eu fermentum libero
        vestibulum id. Vivamus id lectus id arcu eleifend convallis. Nulla ac
        felis ac tellus convallis vehicula non ac metus. Aliquam auctor diam
        vitae massa tincidunt, id fringilla urna dictum. Integer commodo odio
        eget nisi sodales vehicula. Cras ultricies lacus id scelerisque
        eleifend. Sed id ultrices velit. Donec vel fermentum ligula.
      </p>
      <p className="text-lg mb-4">
        Proin ac lacus nulla. Duis lobortis bibendum elit, in ultricies lorem
        auctor nec. Phasellus tincidunt eros vitae tempus aliquam. Fusce et
        augue sed purus fermentum varius. Nam malesuada risus eget risus
        malesuada faucibus. In hac habitasse platea dictumst. Aenean vel
        scelerisque tortor. Suspendisse potenti.
      </p>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="bg-blue-200 hover:bg-blue-300 text-blue-800 font-bold py-4 px-4 rounded transition duration-300">
          <h2 className="text-lg font-bold mb-2">Electronics</h2>
          <p className="text-sm">
            Explore our wide range of electronic products including smartphones,
            laptops, tablets, and more!
          </p>
        </div>
        <div className="bg-green-200 hover:bg-green-300 text-green-800 font-bold py-4 px-4 rounded transition duration-300">
          <h2 className="text-lg font-bold mb-2">Fashion</h2>
          <p className="text-sm">
            Discover the latest trends in fashion, including clothing, shoes,
            accessories, and more!
          </p>
        </div>
        <div className="bg-yellow-200 hover:bg-yellow-300 text-yellow-800 font-bold py-4 px-4 rounded transition duration-300">
          <h2 className="text-lg font-bold mb-2">Home & Lifestyle</h2>
          <p className="text-sm">
            Find everything you need to enhance your home and lifestyle, from
            furniture to decor and beyond!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

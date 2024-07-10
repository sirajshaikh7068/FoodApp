import React from "react";

const About = () => {
  return (
    <div className=" dark:bg-slate-900 shadow-2xl bg-slate-200 dark:shadow-2xl p-10 dark:text-white text-black ">
      <p className=" font-semibold">
        Welcome to Bhukkad - your ultimate destination for a seamless and
        delightful food delivery experience. We are passionate about bringing
        delicious meals from your favorite restaurants straight to your
        doorstep, ensuring that you can enjoy a variety of cuisines without
        stepping out of your home.
      </p>
      <br />
      <h1 className="text-2xl font-bold ">Our Vision </h1>
      <p className=" font-semibold">
        Our vision is to revolutionize the way you enjoy food by providing a
        convenient, efficient, and enjoyable food delivery service. We strive to
        connect food lovers with the best local restaurants, offering a diverse
        range of culinary delights that cater to every taste and preference.
      </p>
      <br />
      <h1 className="text-2xl font-bold "> Why Choose Us?</h1>
      <p className=" font-semibold">
        <h3 className="text-xl  font-semibold"> 1. Wide Range of Choices:</h3>{" "}
        Whether you're craving pizza, sushi, or a gourmet burger, we have
        partnered with a plethora of restaurants to offer an extensive menu that
        satisfies every palate.
      </p>

      <p className=" font-semibold">
        <h3 className="text-xl  font-semibold">2. Seamless Experience:</h3> Our
        user-friendly platform, built with cutting-edge technologies like
        ReactJS, Redux, and Tailwind CSS, ensures a smooth and intuitive
        experience from browsing to checkout.
      </p>
      <p className=" font-semibold">
        <p className="text-xl  font-semibold">3. Real-Time Tracking:</p> Stay
        updated with real-time tracking of your order, from preparation to
        delivery, so you know exactly when to expect your meal.
      </p>
      <p className=" font-semibold">
        <p className="text-xl  font-semibold">4. Fast and Reliable Delivery:</p>{" "}
        Leveraging the robust Swiggy API, we provide fast and reliable delivery
        services, ensuring that your food arrives fresh and hot.
      </p>
      <br />
      <h1 className="text-2xl font-bold ">Our Technology </h1>
      <p className=" font-semibold">
        {" "}
        At Bhukkad Website, we embrace the latest technologies to deliver an
        exceptional user experience:
      </p>
      <p className=" font-semibold">
        <p className=" font-semibold">
          {" "}
          <p className="text-xl  font-semibold">* ReactJS:</p> For building a
          dynamic and responsive user interface that enhances your browsing and
          ordering experience.
        </p>
        <p className=" font-semibold">
          <p className="text-xl font-semibold"> * Redux:</p> To manage the state
          of our application efficiently, ensuring smooth performance and
          real-time updates.
        </p>
        <p className=" font-semibold">
          <p className="text-xl  font-semibold">* Tailwind CSS:</p> To create a
          visually appealing and modern design that is both functional and
          aesthetically pleasing.
        </p>
        <p className=" font-semibold">
          <p className="text-xl  font-semibold">* Swiggy API:</p> To integrate
          reliable and comprehensive food delivery services, bringing you the
          best selection of restaurants and cuisines.
        </p>
      </p>
      <br />
      <h1 className="text-2xl font-bold ">Our Commitment</h1>
      <p className=" font-semibold">
        {" "}
        We are committed to providing top-notch customer service, ensuring that
        every order is handled with care and precision. Your satisfaction is our
        priority, and we continuously strive to improve our services based on
        your feedback. Thank you for choosing Bhukkad. We look forward to
        serving you and making every meal a memorable one!
      </p>
    </div>
  );
};

export default About;

import Link from "next/link";
import "./guide.scss";

export default function Contact() {
  return (
    <div className="flex flex-col xl:w-[1024px] sm:w-[515px] w-[258px] justify-center mx-auto my-[25px] gap-[15px] ">
        <h2 className="font-bold text-center text-2xl">
        GARDENING GUIDE FOR BEGINNERS
      </h2>
      
      <div className="flex xl:flex-row flex-col xl:w-[1024px] sm:w-[515px] w-[258px] justify-center items-center mx-auto my-[10px] gap-[10px] ">
        <h4 className="font-bold">Quick Links:</h4>
        <ul className="pl-[20px] flex xl:flex-row flex-col xl:gap-[15px] gap-[10px] underline text-sm pt-[3px]">
          <li>
            <Link href="#hardiness">HARDINESS ZONES</Link>
          </li>
          <li>
            <Link href="#soil">SOIL/PH</Link>
          </li>
          <li>
            <Link href="#fertilizer">FERTILIZER</Link>
          </li>
          <li>
            <Link href="#watering">WATERING</Link>
          </li>
          <li>
            <Link href="#spacing">POT SIZE/SPACING</Link>
          </li>
          <li>
            <Link href="#gettting_started">GETTING STARTED</Link>
          </li>
        </ul>
      </div>
      <p className="pt-[10px] pb-[20px]">
        Welcome to the world of gardening! Whether you&apos;re looking to grow
        flowers, vegetables, or herbs, this guide will help you get started.
        Gardening may seem intimidating at first, but with the right knowledge,
        you&apos;ll be well on your way to cultivating a beautiful and
        productive garden. Here&apos;s a comprehensive guide covering key
        gardening topics like USDA hardiness zones, soil types, fertilizer use,
        watering tips, and more.
      </p>
      <hr></hr>
      <h3 className="font-bold text-xl" id="hardiness">
        Understanding USDA Heardiness Zones
      </h3>
      <p>
        The USDA hardiness zones map is an essential tool for gardeners,
        especially when selecting plants for your garden. It divides North
        America into zones based on the average minimum winter temperatures,
        ranging from Zone 1 (coldest) to Zone 13 (warmest). The lower the
        number, the colder the climate.
      </p>
      <h4 className="font-bold">Tips:</h4>
      <ul className="list-disc pl-[20px]">
        <li>
          Choose plants suited to your zone&apos;s winter temperatures for the
          best chance of survival.
        </li>
        <li>
          If you live in a colder zone, consider growing more delicate plants as
          annuals or protect them indoors during the colder months.
        </li>
      </ul>
      <img src="/zone_map.jpeg" alt="USDA Hardiness Zone Map"></img>
      <Link
        href="https://planthardiness.ars.usda.gov/"
        target="_blank"
        className="text-blue-700 underline"
      >
        CLICK HERE for Interactive Zone Map
      </Link>
      <hr></hr>
      <h3 className="font-bold text-xl" id="soil">
        Soil Types and pH Levels
      </h3>
      <p>
        Healthy soil is the foundation of a successful garden. Before planting,
        it&apos;s important to understand your soil type and pH.
      </p>
      <h4 className="font-bold">Soil Types:</h4>
      <ul className="list-disc pl-[20px]">
        <li>
          <span className="font-bold">Sandy Soil:</span> Drains quickly, but
          doesn&apos;t hold nutrients well. Ideal for plants like lavender,
          thyme, and carrots.
        </li>
        <li>
          <span className="font-bold">Clay Soil:</span> Retains water but can
          become waterlogged. This is good for moisture-loving plants but might
          need amending for others.
        </li>
        <li>
          <span className="font-bold">Loam Soil:</span> A balanced mixture of
          sand, silt, and clay. This is the ideal soil type for most plants,
          offering both drainage and nutrient retention.
        </li>
      </ul>
      <h4 className="font-bold">Understanding pH:</h4>
      <ul className="list-disc pl-[20px]">
        <li>
          pH is a measure of soil acidity or alkalinity on a scale from 1 to 14.
          Most plants prefer a slightly acidic to neutral soil (pH 6.0–7.0).
        </li>
        <li>
          <span className="font-bold">Alkaline Soil:</span> (pH above 7.0) can
          be adjusted with sulfur or organic matter like compost.
        </li>
        <li>
          <span className="font-bold">Acidic Soil :</span> (pH below 6.0) can be
          made more neutral with lime.
        </li>
        <li>
          Test your soil with a home testing kit or send it to a local extension
          service.
        </li>
      </ul>
      <hr></hr>
      <h3 className="font-bold text-xl" id="fertilizer">
        Fertilizer Use
      </h3>
      <p>
        Fertilizers are vital to maintaining soil fertility and promoting plant
        growth. They provide essential nutrients like nitrogen (N), phosphorus
        (P), and potassium (K).
      </p>
      <h4 className="font-bold">Tips:</h4>
      <ul className="list-disc pl-[20px]">
        <li>
          Read the label for the N-P-K ratio (e.g., 10-10-10 means equal parts
          nitrogen, phosphorus, and potassium).
        </li>
        <li>
          <span className="font-bold">Nitrogen (N):</span> Encourages leafy
          green growth. Ideal for lawns and leafy vegetables like spinach.
        </li>
        <li>
          <span className="font-bold">Phosphorus (P):</span> Supports root
          development and flowering. Use it for flowering plants and root
          vegetables like carrots.
        </li>
        <li>
          <span className="font-bold">Potassium (K):</span> Boosts overall plant
          health and disease resistance. Great for fruiting plants like tomatoes
          and peppers.
        </li>
        <li>
          Organic fertilizers, like compost and manure, release nutrients slowly
          and improve soil health over time.
        </li>
        <li>Avoid over-fertilizing, which can damage plants.</li>
      </ul>
      <hr></hr>
      <h3 className="font-bold text-xl" id="watering">
        Watering
      </h3>
      <p>
        Watering is crucial, but different plants have different needs.
        Overwatering and underwatering are common mistakes, so finding the right
        balance is key.
      </p>
      <h4 className="font-bold">Tips:</h4>
      <ul className="list-disc pl-[20px]">
        <li>
          Morning is the best time to water to avoid evaporation and reduce the
          risk of diseases that thrive in damp conditions.
        </li>
        <li>
          Water deeply but less frequently to encourage deep root growth. A good
          rule of thumb is to water when the top inch of soil feels dry.
        </li>
        <li>Young plants and seedlings need more frequent watering.</li>
        <li>
          Established plants with deep root systems need less frequent watering,
          about once or twice a week depending on your climate.
        </li>
        <li>Mulch helps retain soil moisture and prevent weeds.</li>
        <li>
          Use soaker hoses or drip irrigation for more efficient watering,
          especially in large gardens.
        </li>
      </ul>
      <hr></hr>
      <h3 className="font-bold text-xl" id="spacing">
        Pot Size and Plant Spacing
      </h3>
      <p>
        Whether you&apos;re growing plants in pots or directly in the ground,
        proper spacing is important for healthy plant growth.
      </p>
      <h4 className="font-bold">Pot Size:</h4>
      <ul className="list-disc pl-[20px]">
        <li>
          Choose a pot large enough to accommodate your plant&apos;s root
          system. Small pots dry out faster and restrict root growth.
        </li>
        <li>
          Make sure pots have drainage holes to prevent water from pooling,
          which can lead to root rot.
        </li>
        <h4 className="font-bold">In-Ground Spacing:</h4>
        <li>
          Plants need space for their roots to spread and for air to circulate
          around the foliage. Crowding plants can lead to competition for
          nutrients and increased risk of disease.
        </li>
        <li>
          Follow plant spacing recommendations on seed packets or plant labels.
        </li>
      </ul>
      <hr></hr>
      <h3 className="font-bold text-xl" id="gettting_started">
        Getting Started Tips
      </h3>
      <ul className="list-disc pl-[20px]">
        <li>
          <span className="font-bold">Start Small:</span> It&apos;s tempting to
          plant a large garden, but it&apos;s better to start with a manageable
          size, especially in your first year.
        </li>
        <li>
          <span className="font-bold">Choose Easy-to-Grow Plants:</span> Opt for
          hardy plants like tomatoes, marigolds, or lettuce that are less prone
          to diseases and pests.
        </li>
        <li>
          <span className="font-bold">Consider Companion Planting:</span>{" "}
          Certain plants grow better together, helping to repel pests or improve
          growth. For example, plant marigolds near tomatoes to deter aphids.
        </li>
        <li>
          <span className="font-bold">Rotate Your Crops:</span> If you&apos;re
          growing vegetables, change where you plant them each year to prevent
          soil depletion and reduce the risk of pests.
        </li>
        <li>
          <span className="font-bold">Be Patient:</span> Gardening is a learning
          process, and plants don&apos;t grow overnight. Be observant, and
          don&apos;t be afraid to adjust your techniques as you gain more
          experience.
        </li>
      </ul>
    </div>
  );
}

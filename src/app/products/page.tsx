import React from "react";
import PageHeader from "../../components/Common/PageHeader";
import TopHeader from "../../components/BigDataSolution/TopHeader";
import FooterTwo from "../../components/Layout/FooterTwo";
import NavbarThree from "../../components/Layout/NavbarThree";
import OneProduct from "@/components/Products/OneProduct";
import { title } from "process";

export default function Page() {
  const myProducts =[
    {
      title: "Variable Speed Drives",
      description: "Variable Speed Drives (VSDs) are essential for optimizing the performance of any electric submersible pumps (ESPs) and other machinery. By adjusting the motor speed to match the required output, VSDs improve efficiency and reduce energy consumption. They also minimize mechanical stress, extending the lifespan of equipment. We offer drives for both permanent magnet motors and induction motors. Ratings and Sizes are available on request.",
      imageSrc: "/images/Products/VariableSpeedDrives.jpg",
      features: [
        "Motor Speed Optimization",
        "Energy Efficiency Enhancement",
        "Mechanical Stress Reduction",
        "Flexible Motor Compatibility"
      ]
    },
    {
      title: "Transformers",
      description: "Transformers are designed to handle the demanding conditions of oilfield operations. They provide reliable power conversion and distribution, ensuring that machinery and equipment receive the necessary voltage levels. With robust construction and high efficiency, we supply transformers from reputed manufacturers that are built to last and perform in the most challenging environments. We offer both Air Cooled (Dry Type) and Oil Cooled (ONAN) transformers. Step down transformers and step up transformers are available in material. Ratings and Sizes are available on request.",
      imageSrc: "/images/Products/Transformers.jpg",
      features: [
        "Robust Oilfield Design",
        "Reliable Power Conversion",
        "Multiple Cooling Types (Air & Oil)",
        "Versatile Voltage Transformation"
      ]
    },
    {
      title: "ESP Cable",
      description: "Electric Submersible Pump (ESP) cable is a critical component in oil extraction operations. It provides the electrical power necessary for ESPs to function efficiently. We offer ESP cables that are designed for durability and reliability, withstanding harsh operating conditions and ensuring uninterrupted power supply.",
      imageSrc: "/images/Products/ESPCable.jpg",
      features: [
        "High Durability",
        "Harsh Environment Resistance",
        "Reliable Power Transmission",
        "Optimized for ESP Operations"
      ]
    },
    {
      title: "Cable Protectors",
      description: "Cross Coupling Cable Protectors (CCCP) are designed to safeguard vulnerable ESP cables from damage caused by abrasion, bending, and mechanical stresses while running in hole. These protective devices help prolong the service life of cables and significantly reduce maintenance costs by minimizing wear and tear. We offer a range of tubing sizes, from 2-3/8\" to 7\" tubing, and can provide custom sizes tailored to meet specific customer requirements.",
      imageSrc: "/images/Products/CableProtectors.jpg",
      features: [
        "Comprehensive Cable Protection",
        "Wear and Tear Reduction",
        "Customizable Tubing Sizes",
        "Maintenance Cost Minimization"
      ]
    },
    {
      title: "Feedthru Connectors",
      description: "We can offer a full range of reliable electrical wellhead and packer penetration through well barriers and ensure the highest performance and safe operation of your ESP. We supply quality and reliable Wellhead Penetrators - Vertical Single Mandrel with either 45-degree or 90-degree Surface Connectors and also Split-Phase or 3-Leg Feedthru Systems or penetrator Connector options. Upper and Lower connectors can be molded with cable make/size of your choice.",
      imageSrc: "/images/Products/FeedthruConnectors.jpg",
      features: [
        "Wellhead Barrier Penetration",
        "Multiple Connector Configurations",
        "Customizable Cable Molding",
        "Enhanced ESP Safety and Performance"
      ]
    },
    {
      title: "ESP Feedthru Packers",
      description: "ESP Feedthru Packers are used to provide optimal casing protection when using an ESP. The flexible feed-through design has been simplified to ensure easy retrieval and redress. Our packers are engineered for high performance and reliability, these are hydraulic offering optimal casing protection and zonal isolation. The packer port design configured to have additional ports for control lines, chemical injection lines and bypass lines.",
      imageSrc: "/images/Products/ESPFeedthruPackers.jpg",
      features: [
        "Flexible Feed-Through Design",
        "Hydraulic Zonal Isolation",
        "Multiple Port Configuration",
        "Easy Retrieval and Redress"
      ]
    },
    {
      title: "Y-Tools & By-Pass Systems",
      description: "Y-Tools are essential for dual completion systems in oil wells. They allow for the selective production of fluids from different zones, optimizing extraction rates and improving reservoir management. Our Y-Tools are designed for robustness and ease of installation.",
      imageSrc: "/images/Products/Y-Tools&By-PassSystems.jpg",
      features: [
        "Dual Completion Capability",
        "Selective Fluid Production",
        "Reservoir Management Optimization",
        "Robust Design"
      ]
    },
    {
      title: "Drill Bits",
      description: "We offer a variety of drill bits tailored to different drilling conditions and formations. Expand performance limits under extreme parameters and harsh conditions. Our drill bits are engineered for high penetration rates and durability, reducing downtime and increasing productivity. Whether for soft, medium, or hard rock formations, we have the right bit for the job.",
      imageSrc: "/images/Products/DrillBits.jpg",
      features: [
        "Versatile Formation Compatibility",
        "High Penetration Rates",
        "Extreme Condition Performance",
        "Reduced Operational Downtime"
      ]
    },
    {
      title: "Liner Hangers",
      description: "Liner hangers are critical for securing casing liners within the wellbore. We supply liner hangers that are designed for reliability and ease of operation, ensuring a secure fit and supporting the structural integrity of the well. They are suitable for a wide range of well conditions and applications.",
      imageSrc: "/images/Products/LinerHangers.jpg",
      features: [
        "Wellbore Casing Securitization",
        "Reliable Structural Support",
        "Versatile Well Condition Adaptability",
        "Easy Installation"
      ]
    },
    {
      title: "ESP Accessories & Spares",
      description: "We can offer a variety of ESP Accessories that could be required for your ESP system depending on your application, like Head and Base for ESP equipment, Discharge Heads, Pressure Discharge Subs, Check Valves, Drain Valves or in combination, Cross Overs for ESP Equipment etc. We can also supply ESP Sand Control Systems and Automatic Diverter Valves. We can also offer you shaft couplings of various sizes and connections that need to be installed between the different ESP components during assembly.",
      imageSrc: "/images/Products/ESPAccessories&Spares.jpg",
      features: [
        "Comprehensive ESP Component Range",
        "Sand Control Systems",
        "Versatile Shaft Couplings",
        "Multiple Valve Options"
      ]
    },
    {
      title: "ESP Installation Consumables",
      description: "We can supply wide range of high-quality ESP installation consumables to support your field operations. We supply durable splicing tapes and crimping sleeves, ensuring reliable connections for you ESP cable and wire splicing. Additionally, we offer premium banding material for secure and efficient installations, along with high-performance motor oil to keep your equipment running smoothly.",
      imageSrc: "/images/Products/ESPInstallationConsumables.jpg",
      features: [
        "Durable Cable Splicing Solutions",
        "Secure Banding Materials",
        "High-Performance Motor Oil",
        "Comprehensive Installation Support"
      ]
    },
    {
      title: "ESP Cable Spooler",
      description: "Cable spoolers are essential for the safe and efficient handling of ESP cables while running in hole or pull out of hole and prevent damage to the cables so as to ensure smooth operations. We supply Spoolers that are designed for both onshore and offshore with ease of use and durability, facilitating the ESP system installation and retrieval of cables in various well conditions.",
      imageSrc: "/images/Products/ESPCableSpooler.jpg",
      features: [
        "Safe Cable Handling",
        "Onshore and Offshore Compatibility",
        "Cable Damage Prevention",
        "Versatile Well Condition Performance"
      ]
    },
    {
      title: "Cable Sheaves",
      description: "Cable sheaves are used to guide ESP cables during installation and retrieval. Our sheaves are built for high strength and wear resistance, ensuring the smooth movement of cables and reducing the risk of damage. We offer both full moon and half moon sheave designs catering to your ESP field running in hole operational requirement. These cable sheaves are available in various sizes to accommodate different cable diameters.",
      imageSrc: "/images/Products/CableSheaves.jpg",
      features: [
        "High Strength Design",
        "Wear Resistance",
        "Multiple Sheave Configurations",
        "Versatile Cable Diameter Accommodation"
      ]
    },
    {
      title: "ESP Power Skid",
      description: "We offer specially packaged VSD Power Skid solutions that are compact and reliable for operating your ESP systems. It integrates all necessary components, including transformers, VSDs, and control systems, into a single skid-mounted unit. This design simplifies installation and maintenance, ensuring efficient and reliable power delivery.",
      imageSrc: "/images/Products/ESPPowerSkid.jpg",
      features: [
        "Integrated Power Solution",
        "Compact Design",
        "Simplified Installation",
        "Efficient Power Delivery"
      ]
    },
    {
      title: "Drilling Tools",
      description: "Our range of drilling tools includes side door elevators, single joint elevators, safety clamps, stabbing guide, casing and tubing handling slips, stabilizers, reamers, and hole openers, designed to optimize drilling performance and wellbore quality. These tools are engineered for durability and efficiency, reducing drilling time and costs.",
      imageSrc: "/images/Products/DrillingTools.jpg",
      features: [
        "Comprehensive Tool Range",
        "Drilling Performance Optimization",
        "Wellbore Quality Enhancement",
        "Cost and Time Reduction"
      ]
    },
    {
      title: "Drilling Accessories",
      description: "To support our drilling tools, we offer a variety of accessories such as drill pipe protectors, centralizers, float equipment, kelly subs, lifting subs, crossover subs, dual flow subs, pup joints, stainless flanges, casing centralizers, stabilizers, casing couplings, custom tools and subs, coil tubing accessories. These drilling accessories enhance the performance and safety of drilling operations, ensuring smooth and efficient drilling operations.",
      imageSrc: "/images/Products/DrillingAccessories.jpg",
      features: [
        "Extensive Accessory Range",
        "Drilling Operation Enhancement",
        "Safety Improvement",
        "Custom Tool Solutions"
      ]
    }
  ];

  return (
    <>
      <TopHeader />
      <NavbarThree />
      <PageHeader
        pageTitle="Our Products"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/products"
        breadcrumbTextTwo="Products"
      />
      <div className="about-area" style={{paddingTop: "50px", paddingBottom: "5px"}}>
        <div className="container">
          <div className="row align-items-center">
            <h2 style={{color:"#B5167F"}}>Oilfield Equipment Product List</h2>
            <span><b>A Comprehensive Overview</b></span>
            <p>
              Our company prides itself on offering a wide range of high-quality oilfield products designed to meet the diverse needs of the industry. Below is a detailed list of the products we currently offer, including their specific applications and benefits.
            </p>
          </div>
        </div>
      </div>
      {myProducts.map((product, index) => (
        <OneProduct
          key={index}
          title={product.title}
          description={product.description}
          imageSrc={product.imageSrc}
          features={product.features}
        />
      ))}

<div className="about-area" style={{paddingTop: "50px", paddingBottom: "50px"}}>
        <div className="container">
          <div className="row align-items-center">
            <p>
            Our comprehensive range of oilfield products is designed to meet the diverse needs of the industry, ensuring efficient and reliable operations. We are committed to providing high-quality products and exceptional customer service to support your oilfield operations.   </p>
         
            <p>
            For more information, inquiries, quotation requests, or to place an order, please reach out to our sales team at <a href="mailto:sales@avanzaofess.com" style={{color:"#B5167F"}}>sales@avanzaofess.com</a>. Our team will respond promptly to address your needs.
            </p>
            <div className="col-lg-12 col-md-12 text-center">
              <a href="/pdf/avanzaproduct.pdf" download className="default-btn">
                Download Our Product Catalog <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <FooterTwo />
    </>
  );
}

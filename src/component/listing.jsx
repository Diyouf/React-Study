import { people } from "../data";
const ListingComponenent = () => {
  return (
    <div>
      <div>
        {people.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                width: "500px",
                height: "", // Height can be specified as needed
                backgroundColor: "#FF3B8", // Corrected color value
                padding: "20px", // Added padding for better appearance
                margin: "10px auto", // Center the div horizontally with margin
                borderRadius: "5px", // Rounded corners for the div
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Added box shadow for depth
              }}
            >
              <h2>{item.name}</h2>
              <p>Profession: {item.profession}</p>
              <p>Accomplishment: {item.accomplishment}</p>
              <img
                src={`https://i.imgur.com/${item.imageId}.jpg`}
                alt={item.name}
                style={{ maxWidth: "100%", height: "auto" }} // Make sure the image is responsive
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListingComponenent;

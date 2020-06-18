import Cards from "./cards";
import { useParams } from "react-router-dom";

const page = () => {
  const { name } = useParams();
  switch (name) {
    case "garett":
      return <Garett />;
    case "buu":
      return <Buu />;
    case "kamelia":
      return <Kamelia />;
    case "mantasha":
      return <Mantasha />;
    case "nick":
      return <Nick />;
    case "sarah":
      return <Sarah />;
    default:
      return <Redirect to="/about" />;
  }
};

export default page;

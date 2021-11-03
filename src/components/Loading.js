import Lottie from "react-lottie";
import animationData from "../assets/loading.json";

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      return(
          <div  className="card secondary">
              <Lottie options={defaultOptions} height={150} width={150} />
          </div>
      )
}

export default Loading
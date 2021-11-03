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
          <div  className="card">
              <Lottie options={defaultOptions} height={200} width={200} />
          </div>
      )
}

export default Loading
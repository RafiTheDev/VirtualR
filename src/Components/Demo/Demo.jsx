import img1 from "../../assets/download.jpeg"
import img2 from '../../assets/downlod.jpeg'
import video1 from '../../assets/vd1.mp4'
import video2 from '../../assets/vd2.mp4'

const Demo = () => {
  return (
    <div>


    <div className="grid grid-cols-2 lg:grid cols-2 container mx-auto gap-10 ">
        <img src={img1}></img>
        <img src={img2}></img>
    </div>

    <div className="grid grid-cols- lg:grid-cols-2 container mx-auto gap-10 mt-10 mb-10">
        <video controls autoPlay loop muted>
            <source src={video1} type="video/mp4"></source>
            
        </video>

        <video controls autoPlay loop muted>
            
            <source src={video2} type="video/mp4"></source>
        </video>
    </div>
    </div>
  )
}

export default Demo
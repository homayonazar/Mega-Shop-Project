import img1 from "../assets/images/o_1301-488x488.webp"
import img2 from "../assets/images/o_1501-488x488.webp"
import img3 from "../assets/images/o_1601-488x488.webp"
import img4 from "../assets/images/o_2003-488x488.webp"


function Product() {
    return (
        <div className="PdctBox w-1/4 h-100 bg-amber-400 m-10 rounded-2xl flex flex-col items-center content-center">
            <div className="img rounded-2xl">
                <img src={img1} alt="image-1" />
                <h2 >Name of Product</h2>
                <p>Price is : <span className="text-red-600">56$</span></p>
            </div>
        </div>
    )
}

export default Product
import aboutImg from "../assets/images/about.webp"
import Container from "../components/Container"


function AboutUs() {
    return (
        <div className="bg-[var(--bg)]">

            <Container>
                <div className="aboutImg flex justify-center items-center flex-col">
                    <img src={aboutImg} className="w-200 m-10 rounded-2xl" alt="about_image" />
                    <p className="text-4xl m-5">About Us </p>
                    <span className="mb-15"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, distinctio nobis.
                        Non rerum deleniti blanditiis! Esse unde aliquam, ipsa consequuntur, dolore ab placeat
                        nemo assumenda quia ipsum odio dignissimos similique, architecto impedit provident cum
                        laudantium ex officiis id? Optio architecto sunt, dolore molestias cupiditate corrupti
                        quasi ut? Molestias accusantium reprehenderit cumque veritatis rerum ea earum minima
                        perspiciatis quia nisi praesentium maxime eos similique fugit, voluptates quae odit architecto
                        dolores. Eligendi error ducimus, quod, veniam omnis atque deserunt doloremque libero corrupti
                        laborum et iusto numquam repudiandae officiis, facilis enim impedit ab temporibus culpa alias
                        ipsum aperiam quas animi? Inventore, cumque. Eum eos illo iste? Ipsum est odit unde
                        perspiciatis aliquid nesciunt a ab sequi molestiae dolor voluptatem deleniti, delectus
                        nam voluptatum minus aspernatur, nemo laboriosam. Illo voluptatem blanditiis temporibus
                        recusandae. Placeat dolor quisquam consectetur error optio commodi architecto dolorum,
                        sunt, id iure neque veniam maxime mollitia illo labore provident dolore, natus expedita
                        facere sint. Ex accusantium nesciunt ipsum ullam dolores quis odit vitae quaerat et.
                        Distinctio vero illum dolorem, consequuntur accusantium reprehenderit ducimus odio
                        officia id, est veniam a quam cumque eius quaerat mollitia debitis voluptatum!
                        Autem repudiandae velit cumque consequuntur adipisci. Repellendus consequuntur a,
                        nostrum numquam adipisci ex at enim.
                    </span>
                </div>
            </Container>





        </div>
    )
}

export default AboutUs
import { useState, useEffect, useRef } from "react";
import { Wrapper, MainImage, Test } from "./HomeStyle";
import { sizes } from "../../01_constants/Sizes";
import navbar from "../../../assets/02_home/navbar.jpg"

const Home = () => {
    const [zIndex, setZIndex] = useState(1)
    const ref = useRef(null)
    const wrapperRef = useRef()

    useEffect (() => {
        const showBackground = () => {
            const trigger = 70
            const windowScroll = window.scrollY
            const showSolid = trigger - windowScroll
            if (showSolid >= 0) {
                setZIndex(1)
            } else {
                setZIndex(0)
            }
        }
        

        window.addEventListener("scroll", showBackground)
        return() => {
            window.removeEventListener("keydown", showBackground)
        }
    }, [])

    return (
        <Wrapper ref={ref} zIndex={zIndex}>
            <MainImage src={navbar} alt="navbar" />
            <Test>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae similique voluptate qui cum reprehenderit at aperiam aliquid dignissimos dolorem fugit, excepturi quibusdam hic quis, quas, possimus reiciendis fugiat illum dicta vitae nihil quod! Consequatur assumenda nam perspiciatis cum eius ducimus reprehenderit consectetur harum vero omnis quod magnam illo, neque quos amet, corrupti molestias provident accusantium ipsum quas eum a? Id ab excepturi nostrum sint omnis. Ipsam exercitationem ex tenetur rerum accusantium, eos harum nam mollitia alias accusamus suscipit sapiente laboriosam officiis laudantium similique vero velit hic facere. Quia ab necessitatibus nulla dicta nesciunt laudantium in fuga saepe neque earum, cum consectetur deleniti placeat. Fugit iure est porro odit molestias odio, impedit quis quisquam ea magnam aliquid inventore eos laborum dolore deserunt reprehenderit, alias minima ad rem deleniti debitis eligendi! Voluptates accusantium, temporibus dicta repudiandae reiciendis iusto placeat excepturi veniam optio suscipit vero et voluptatibus minima nobis sequi quam delectus magnam, quasi quos iure! Itaque cumque consequuntur sapiente cum voluptates harum facere blanditiis incidunt dignissimos impedit ipsa voluptas, dolorem, nemo officiis placeat necessitatibus. Ad aspernatur expedita eligendi laudantium reprehenderit. Natus labore hic corporis ducimus mollitia sit autem quam veniam. Nesciunt blanditiis eaque vel ipsam voluptate, asperiores delectus impedit esse at quae nobis? Consequuntur iste, quae ullam sunt totam ipsum amet voluptatibus unde veniam aliquam voluptatem animi voluptas esse ducimus quo recusandae sapiente! Optio doloribus, quis itaque corporis quaerat nam voluptates harum eos exercitationem explicabo nostrum sed in laboriosam cum ex dolor qui ut vel fugit officiis corrupti! Dolorem inventore fugiat, rem ducimus, deleniti adipisci voluptatum recusandae, officia maxime aperiam molestias eligendi. Ea laboriosam dolore tenetur culpa voluptatem ducimus magnam deleniti, possimus corporis maxime omnis facilis fugiat officiis provident beatae saepe pariatur. Facilis, minima? Temporibus, quam voluptatum nesciunt repellendus quas fugiat rem repellat molestiae ipsam beatae laborum libero culpa, asperiores consequatur aliquid omnis vel sunt saepe? Doloribus asperiores illum incidunt unde aliquam voluptatem quas error vitae suscipit, autem saepe nesciunt animi, itaque consequuntur magni ducimus temporibus ea ipsa! Quos, dolore odio asperiores sit sint incidunt et iste perspiciatis tempore dicta repellendus illum, dolorum commodi aliquam id corporis vitae. Dicta repellat animi ut consequatur maxime, distinctio incidunt fuga itaque veritatis unde, aut voluptatum nulla ab. Voluptatem quaerat adipisci at? Dicta dignissimos sit cumque laboriosam est eos, saepe architecto distinctio eligendi eveniet, et necessitatibus aliquam numquam tempora. Dolore vel fugiat incidunt molestiae debitis, porro praesentium error odio, reprehenderit earum voluptate in esse magni nesciunt commodi accusantium totam doloremque iure sequi maiores et officiis sed. Autem laudantium, tenetur quidem eius fuga maiores cupiditate molestias voluptatibus blanditiis iusto, id aperiam corporis ducimus possimus iure vitae quasi. Dolorum est suscipit dolore, libero tempore neque! Ipsa soluta aut amet temporibus, nihil consectetur corrupti animi doloribus aliquid aspernatur at beatae impedit tenetur nobis odit rerum nam inventore totam nemo quae! Obcaecati veritatis facilis ex odio pariatur voluptatum voluptatem in minus fuga error omnis, quas quia eius minima iure non quibusdam atque qui. Quos dignissimos, quibusdam assumenda laboriosam velit eum facilis, nisi quis qui atque ratione ducimus quia tempore quo, blanditiis maiores nesciunt sunt iusto nulla voluptate! Velit accusamus doloremque asperiores eaque voluptas sequi sint laudantium eos veritatis vitae facilis reprehenderit optio ratione consequatur delectus doloribus explicabo, esse officiis unde tempora ad reiciendis, quaerat fugiat? Ipsa ipsam rerum hic id quis odio, illum facere voluptates necessitatibus, explicabo beatae atque error vitae nesciunt asperiores? In voluptatem sequi voluptate consequatur vitae voluptatum, quidem ipsa facilis iusto maiores rem nesciunt. Odit maxime laudantium debitis voluptatibus adipisci, voluptate ratione qui doloremque quasi itaque, totam corporis nesciunt alias dolorem, ex accusantium inventore! Autem amet ab nobis quas, dignissimos quo, nostrum vitae sunt veritatis, quod alias. Fugiat, nulla! Optio, quo harum maiores, in, culpa voluptatibus porro voluptatem tempore atque aliquid modi minus natus quae suscipit recusandae sint odit alias. Nemo ut, corporis dicta tenetur, vel, et eveniet at ducimus soluta id dolor magni? Laborum earum, officia vero, totam ipsam sequi blanditiis illum ratione, ex ipsum impedit ducimus. Repudiandae odio cumque itaque accusamus veritatis nobis natus, ipsum aliquid soluta impedit quam, eius dignissimos enim laborum reprehenderit vel pariatur. Quas quaerat nulla magni dolorem officiis dignissimos ea ipsum doloremque molestias, nesciunt culpa, cum possimus aspernatur, accusantium sint porro dolor alias! Ratione, necessitatibus, provident harum fugit libero nam dolorem nihil voluptatibus est incidunt omnis deserunt at voluptatem adipisci praesentium fuga nulla ex debitis consequuntur exercitationem molestiae ab? Officia autem doloribus nulla tempore facere quam? Voluptatibus iusto ullam harum. Ex fugiat odit animi doloribus, ipsa quas numquam ea veniam minus et! Consectetur, aliquam nam inventore harum ad eius quas iusto dolore, consequuntur officiis eos. Quasi iusto doloribus itaque aperiam fugiat est ratione velit dicta iste, alias deserunt magnam, repellat enim reiciendis ut reprehenderit eligendi laudantium necessitatibus, dolorem explicabo dolorum quod voluptas soluta. Sequi quia repellat sint illum dolorum accusantium accusamus eos. Qui, eligendi facilis voluptate exercitationem dolores laborum earum pariatur iste mollitia eaque nihil, cumque ipsum officia voluptas dolorem vero enim dicta praesentium ex facere quas. At nesciunt debitis repellat enim tempora facilis, provident repudiandae eligendi repellendus minima. Non omnis ad aliquam totam nesciunt atque nisi blanditiis voluptatum, voluptate ipsam dolore, distinctio expedita veritatis dolor. Tempora perferendis nisi, voluptates sequi ducimus, voluptas repellendus adipisci cum magnam, mollitia dolore maiores vel. Error, blanditiis asperiores quis rerum tenetur optio dolore facere, delectus eius nisi nam quibusdam aliquam alias officiis exercitationem adipisci labore, omnis reprehenderit? Debitis laudantium, maxime temporibus ducimus id mollitia, dolore sunt eaque vitae non fugit ipsa ad ipsum at! Doloremque dignissimos possimus amet quae eligendi laudantium accusamus reiciendis qui autem ipsum, error nobis, nisi, repellat eveniet veniam. Aliquid commodi officia mollitia, perspiciatis tempora dolores tempore consequuntur laborum fugit similique dicta a ad voluptatum, optio impedit ducimus nesciunt cupiditate ab culpa nobis? Aut rerum odio praesentium suscipit enim, ipsam expedita? Corporis magni recusandae fugit. Ad harum laborum iusto dolorum est et quis quidem illum consequatur eveniet, soluta, praesentium deserunt, facere enim voluptatem earum. Eum animi dolores architecto at iure impedit rem nam sint. Nesciunt eaque rem magni eum asperiores, vitae eius quisquam officiis facere, doloremque enim iste facilis dolor. Hic, consectetur!
            </Test>
        </Wrapper>
    )
}

export default Home
import React, { useEffect, useRef } from "react";
import "./asus.css";
import Ryujin from "./assets/ryujin-ii_argb.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Asus() {
  let image = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(image, {
      scale: 8,
      x: -1350,
      y: -400,
      rotate: -10,
      scrollTrigger: {
        start: "top top",
        end: "bottom top",
        trigger: ".img",
        scrub: 1,
        pin: ".img",
        markers: {
          startColor: "blue",
        },
      },
    });
  }, []);

  return (
    <div className="container">
      <div className="text">
        <div className="container-text">
          <h1>
            Asus <span>ROG</span> Ryujin II
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam quam eius, aperiam ipsum quaerat, corrupti cum maxime placeat, id expedita totam fugiat maiores? Quis corrupti aperiam minus ullam. Nulla iste dolor et quos?
            Unde dignissimos obcaecati sint perferendis repellat corrupti ex, consectetur nostrum esse laudantium laborum tempore voluptatem ducimus aliquid numquam qui enim quaerat sapiente ipsam incidunt maxime, quo iure. Atque
            perspiciatis debitis saepe numquam dignissimos voluptatibus eligendi quidem modi! Consequatur nobis, quas natus quam eos itaque cumque eligendi qui, beatae laudantium ad. Eligendi voluptatibus labore, magni ipsam at doloremque
            consequatur iure, obcaecati blanditiis ullam perferendis ab tempora atque deserunt. Animi, vero! Eveniet nam explicabo labore quo ab aperiam, animi perspiciatis quos id beatae. Culpa facere iure non atque tempora impedit
            obcaecati ducimus odit, in accusantium ab earum molestias excepturi quis repudiandae nemo porro. Rem, esse. Id molestias ratione corporis quo ipsum distinctio laboriosam consequatur, a cumque est, laborum dolorem cupiditate
            nihil fugiat blanditiis, eius harum quod esse quas tenetur magnam vitae. Fugiat illo a nulla ipsa, quas commodi sit, non illum obcaecati consequuntur in nostrum necessitatibus veritatis ut fugit laboriosam modi similique enim
            assumenda libero aliquid, ad qui aut. Molestias quam a porro, ad totam maxime perferendis optio id. Totam ipsa exercitationem reprehenderit ducimus ratione praesentium rem enim aspernatur veniam voluptatibus atque quidem optio
            perferendis, aliquam quis eum maxime adipisci illo quas repellendus, voluptates sit excepturi? Adipisci, illum! Eligendi nemo enim minima vero accusamus maiores. Unde minus illo hic aspernatur suscipit, voluptates atque illum
            recusandae, perspiciatis blanditiis commodi impedit accusantium, ipsa dignissimos. Quae necessitatibus unde repudiandae voluptatem illum, expedita eos suscipit incidunt omnis veniam. Amet accusantium tenetur sapiente fugit
            aspernatur. Hic voluptatem, excepturi reprehenderit obcaecati similique numquam soluta et praesentium eius iste corporis optio deleniti. Possimus quisquam blanditiis architecto rerum? Praesentium mollitia voluptates tenetur
            temporibus commodi hic obcaecati nostrum repellat iusto architecto quo molestiae laborum, asperiores illum modi facere possimus expedita aliquam rerum veniam ducimus repellendus earum? Soluta sunt laborum facere tempore facilis
            delectus expedita fugiat veritatis amet voluptate! Aperiam labore fugit facilis incidunt similique quis consequatur optio, voluptate porro necessitatibus quas asperiores numquam quibusdam? Velit corporis, doloremque magni
            aliquam rem, ipsum consequatur vitae, amet consequuntur laboriosam harum nostrum alias fugit explicabo nihil vel deserunt similique ipsam est incidunt? Earum ab quo modi amet minus et quidem exercitationem sequi perferendis
            dolorem impedit nam laboriosam magni accusantium, inventore hic, repellendus pariatur sunt enim reprehenderit recusandae laborum repellat ipsum. Ut neque ad veniam minima dolorum! Cupiditate possimus quia quos omnis tempora
            delectus debitis sunt iste error earum placeat ipsam tempore ex, ullam ad nostrum quis natus quidem architecto accusantium in eveniet? Officia a aliquam tempore eos amet hic obcaecati corporis, tenetur officiis ut quod libero
            enim magni voluptatum rerum commodi assumenda ipsam harum tempora quos provident inventore! Aliquam in veritatis, molestias molestiae odio maxime enim sed minus laudantium. Velit excepturi quasi modi commodi quas mollitia odit
            corrupti quia non id, debitis, voluptas porro qui natus ea harum aperiam dicta corporis! Accusantium itaque eaque similique harum facere rem, ullam fugit modi?
          </p>
        </div>
      </div>
      <div className="img">
        <img src={Ryujin} alt="" ref={(el) => (image = el)} />
      </div>
      <div class="content">
        <div class="container-content">
          <h1>More Content</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptas rerum similique molestias tenetur, deleniti minus id ea, hic ad esse reprehenderit autem ab corrupti corporis dolorum consequatur quidem provident magnam
            neque, quo nemo! Earum, consectetur! Excepturi animi libero ut. Vitae iste natus vero earum voluptas quos, fuga ducimus. Veritatis eos laborum obcaecati laboriosam repudiandae ipsam sapiente consequatur temporibus omnis
            voluptas, ut, cupiditate consectetur a accusamus totam commodi eveniet pariatur voluptate placeat quo quae ipsa animi incidunt vitae. Assumenda, rem suscipit! Porro cum commodi ullam fugiat perspiciatis deserunt non ab
            reiciendis, dicta tempore veritatis quaerat aliquam, in ut voluptatibus cumque dolore? Qui ullam dolores animi quibusdam cupiditate quia, maiores quos, quidem sapiente perferendis at est sed culpa dicta placeat blanditiis cumque
            adipisci hic recusandae! Inventore praesentium ab blanditiis, nisi voluptate maxime iste animi corporis quis tempora necessitatibus ratione magnam officia nobis eos reiciendis architecto dignissimos velit. Sequi corrupti
            veritatis cum? Autem odit a quo maiores reiciendis eius! Doloribus ullam omnis eligendi, porro quo, necessitatibus magni dolore laboriosam tempore excepturi quos ipsam praesentium possimus ipsum suscipit placeat tenetur ex sed
            delectus totam. Ratione quis ut ipsa rem consequuntur! Sapiente quibusdam, earum porro rerum sint ratione similique optio quasi temporibus fugiat itaque!
          </p>
        </div>
      </div>
    </div>
  );
}

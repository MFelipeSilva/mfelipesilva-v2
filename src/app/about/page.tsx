"use client";

import Image from "next/image";

import { Layout } from "@/components/layout";

import { Container } from "./style";

import my_photo from "../../../public/images/my-photo.png";

export default function About() {
  return (
    <Layout>
      <Container>
        <section>
          <div>
            <h1>Sobre mim</h1>
            <p>
              Eai! Meu nome é Mauricio Felipe da Silva e atualmente estou focado
              em me tornar um desenvolvedor full-stack. Eu sempre tive interesse
              no mundo da tecnologia, tanto que eu já tive um canal no qual eu
              ensinava aos outros a criar banners, thumbnails, e como utilizar
              algumas funcionalides em alguns aplicativos e programas. <br />
              <br />E quando eu conheci o mundo do desenvolvimento web por meio
              de um amigo, eu logo de cara tive o interesse na parte do
              front-end. Desde então eu começei a estudar e criar pequenos
              projetos que me fizeram adquirir ainda mais conhecimento e paixão
              pela área. <br /> <br />
              Atualmente essas são minhas principais tecnologias:
            </p>
            <div>
              <div>
                <p>Typescript </p>
                <p>React</p>
                <p>JavaScript</p>
                <p>Node.js</p>
              </div>
              <div>
                <p>Next.js </p>
                <p>HTML5</p>
                <p>CSS3</p>
                <p>Styled Components</p>
              </div>
            </div>
          </div>
          <div>
            <Image src={my_photo} alt="my photo" />
          </div>
        </section>
      </Container>
    </Layout>
  );
}

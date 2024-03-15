import Image from "next/image";

import {
  IconEmail,
  IconGithub,
  IconLinkedin,
  IconInstagram,
} from "@/components/icons";

import ilustration from "../../../public/images/ilustration-image.png";

import { Container } from "./style";

export default function Home() {
  return (
    <Container>
      <section>
        <div>
          <div>
            <h1>Felipe da silva</h1>
            <h2>Desenvolvedor Web Full-stack.</h2>
          </div>
          <div />
          <div>
            <IconEmail />
            <IconGithub />
            <IconLinkedin />
            <IconInstagram />
          </div>
        </div>
        <Image src={ilustration} alt="ilustration" />
      </section>
    </Container>
  );
}

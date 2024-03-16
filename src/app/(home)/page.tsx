"use client";

import Image from "next/image";

import {
  IconEmail,
  IconGithub,
  IconLinkedin,
  IconInstagram,
} from "@/components/icons";

import { Layout } from "@/components/layout";

import ilustration from "../../../public/images/ilustration-image.png";

import { Container } from "./style";

export default function Home() {
  return (
    <Layout>
      <Container>
        <section>
          <div>
            <div>
              <h1>Felipe da silva</h1>
              <h2>Desenvolvedor Web Full-stack.</h2>
            </div>
            <div />
            <div>
              <div>
                <IconEmail />
              </div>
              <div>
                <IconGithub />
              </div>
              <div>
                <IconLinkedin />
              </div>
              <div>
                <IconInstagram />
              </div>
            </div>
          </div>
          <Image src={ilustration} alt="ilustration" />
        </section>
      </Container>
    </Layout>
  );
}

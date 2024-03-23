"use client";

import Image from "next/image";

import { useTranslation } from "react-i18next";

import { Layout } from "@/components/layout";

import { Container } from "./style";

import my_photo from "../../../public/images/my-photo.png";

export default function About() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Container>
        <section>
          <div>
            <h1>{t("about.title")}</h1>
            <p dangerouslySetInnerHTML={{ __html: t("about.text") }} />
            <div>
              <div>
                <p>Typescript</p>
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

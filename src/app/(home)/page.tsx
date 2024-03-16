"use client";

import Image from "next/image";

import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <Layout>
      <Container>
        <section>
          <div>
            <div>
              <h1>{t("home.title")}</h1>
              <h2>{t("home.subtitle")}</h2>
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

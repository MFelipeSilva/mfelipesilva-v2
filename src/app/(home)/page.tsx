"use client";

import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

import { Layout } from "@/components/layout";

import { iconsData } from "@/utils/iconsData";

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
              {iconsData.map((icon) => (
                <motion.div
                  key={icon.id}
                  initial={{
                    scale: 1,
                  }}
                  whileHover={{ scale: 1.2 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <Link href={icon.url} target="_blank">
                    {icon.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <Image src={ilustration} alt="ilustration" />
        </section>
      </Container>
    </Layout>
  );
}

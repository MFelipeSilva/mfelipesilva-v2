"use client";

import Link from "next/link";

import { useTranslation } from "react-i18next";

import { projects } from "@/utils/data";

import { ProjectType } from "@/types/productsType";

import { Layout } from "@/components/layout";

import { IconArrow, IconLaunch } from "@/components/icons";

import { Container, Card } from "./style";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Container>
        <section>
          <h1>{t("projects.title")}</h1>
          <div>
            {projects.map((project: ProjectType) => (
              <Card key={project.id}>
                <img src={project.imageUrl} alt="gifs my projects" />
                <div>
                  <h2>{project.title}</h2>
                  <Link href={project.url} target="blank">
                    {t("projects.card.url")}
                    <IconLaunch />
                  </Link>
                  <p>
                    <Link href={project.github} target="blank">
                      {t("projects.card.github")}
                      <IconArrow />
                    </Link>
                  </p>
                  <div>
                    {project.technologies.map(
                      (tecnology: string, index: number) => (
                        <div key={index}>
                          <span>{tecnology}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </Layout>
  );
}

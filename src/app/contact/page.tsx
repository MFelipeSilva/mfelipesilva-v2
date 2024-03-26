"use client";

import { useTranslation } from "react-i18next";

import { Form } from "@/components/form";

import { Layout } from "@/components/layout";

import { Container } from "./style";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Container>
        <section>
          <div>
            <h1>{t("contact.title")}</h1>
            <p dangerouslySetInnerHTML={{ __html: t("contact.text") }} />
          </div>
          <div>
            <Form />
          </div>
        </section>
      </Container>
    </Layout>
  );
}

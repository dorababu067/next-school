import React, { useEffect } from "react";
import { Container, ListGroup } from "react-bootstrap";
import Navbar from "./navbar";
import Cookies from "js-cookie";
import Link from "next/link";
import styles from "../styles/layout.module.css";
import { useRouter } from "next/router";

function Layout({ children }: any) {
  const router = useRouter();
  useEffect(() => {
    if (!Cookies.get("access")) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <div className={styles.grid__container}>
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.sidebar}>
          <ListGroup>
            <ListGroup.Item
              className={router.pathname == "/schools" ? "active" : ""}
            >
              <Link href={`/schools`}>schools</Link>
            </ListGroup.Item>
            <ListGroup.Item
              className={router.pathname == "/schools/create" ? "active" : ""}
            >
              <Link href={`/schools/create`}>new school</Link>
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className={styles.main}>
          <Container>{children}</Container>
        </div>
        <div className={styles.footer}>footer</div>
      </div>
    </>
  );
}

export default Layout;

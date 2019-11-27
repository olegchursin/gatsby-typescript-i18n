/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "./layout.css";
import "../../i18n/initI18n";

import React from "react";

import { IStyleMap } from "../types/IStyleMap";
import Footer from "./footer";
import Header from "./header";

const styles: IStyleMap = {
  content: {
    minHeight: "calc(100vh - 130px)"
  },
  main: {
    margin: `0 auto`,
    maxWidth: 1280,
    padding: `0px 1rem 1.45rem`
  }
};

interface ILayoutProps {
  readonly location?: Location;
  readonly title?: string;
  readonly children?: JSX.Element[];
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div style={styles.body}>
      <div style={styles.content}>
        <Header />
        <div style={styles.main}>
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

import React from "react";
import { Heading, Stack, ThemeProvider } from "@kiwicom/orbit-components";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { WindowLocation } from "@reach/router";

import defaultTheme from "../theme";
import Prose from "./Prose";
import * as components from "../mdx-components";
import AddBookmark from "./AddBookmark";
import Navbar from "./Navbar";
import { BookmarkProvider } from "../services/bookmarks";
import Breadcrumbs from "./Breadcrumbs";

const StyledWrapper = styled.div`
  display: grid;
  position: relative;
  overflow: hidden;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 2rem;
`;

const StyledFooter = styled.footer`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

interface Props {
  children: React.ReactNodeArray | React.ReactNode;
  location: WindowLocation;
  path: string;
  title?: string;
}

export default function DocLayout({ children, location, path, title }: Props) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BookmarkProvider page={path} location={location}>
        <StyledWrapper>
          <Navbar />
          <StyledMain>
            <Breadcrumbs location={location} />
            <Prose>
              {title && (
                <Stack inline align="center">
                  <AddBookmark />
                  <Heading as="h1" type="display">
                    {title}
                  </Heading>
                </Stack>
              )}
              <MDXProvider components={components}>{children}</MDXProvider>
            </Prose>
          </StyledMain>
          <StyledFooter />
        </StyledWrapper>
      </BookmarkProvider>
    </ThemeProvider>
  );
}

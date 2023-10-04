"use client";

import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Button,
  Heading,
  Text,
  Container,
  VStack,
} from "@chakra-ui/react";

import styles from "./page.module.css";

const Home: NextPage = () => {
  return (
    <VStack>
      <Container m={5}>
        <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
          <Card>
            <CardHeader>
              <Heading size="md">ethers.js</Heading>
            </CardHeader>
            <CardBody>
              <Text>Use ethers.js v5.</Text>
            </CardBody>
            <CardFooter>
              <Link href="/ethers-js">
                <Button>Go to TOP</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md">thirdweb-dev</Heading>
            </CardHeader>
            <CardBody>
              <Text>Use thirdweb-dev React SDK.</Text>
            </CardBody>
            <CardFooter>
              <Link href="/thirdweb-dev">
                <Button>Go to TOP</Button>
              </Link>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Container>
    </VStack>
  );
};

export default Home;

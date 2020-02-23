import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import { Parallax } from "react-spring/renderprops-addons.cjs"

// Components
import HomeLayout from "../components/HomeLayout"
import ProjectCard from "../components/ProjectCard"

// Elements
import Inner from "../elements/Inner"
import { Title, BigTitle, Subtitle } from "../elements/Titles"

// Views
import Hero from "../views/Hero"
import Projects from "../views/Projects"
import About from "../views/About"
import Contact from "../views/Contact"

import avatar from "../images/avatar.jpg"
import brewtodo from "../images/brewtodo.jpeg"
import rest from "../images/rest.gif"
import pokemon from "../images/Optimized-pokemon.jpg"
import drum from "../images/drum.jpg"

import { Link } from "gatsby"
import Button from "../components/button"

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <HomeLayout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Matthew Magee.
        </BigTitle>
        <Link to="/blog/">
          <Button marginTop="35px">Check Out My Blog</Button>
        </Link>
        <Subtitle>
          I'm a full stack developer creating next generation web experiences
          for consumer-facing companies.
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="BrewTodo"
            link="https://github.com/matthewmagee05/brewtodo"
            bg={brewtodo}
          >
            Keep track of your brewery escapades.
          </ProjectCard>
          <ProjectCard
            title="Restaurant Finder"
            link="https://github.com/matthewmagee05/matthew-magee-project1"
            bg={rest}
          >
            ASP.NET MVC Restaurant Application
          </ProjectCard>
          <ProjectCard
            title="React Native App"
            link="https://github.com/matthewmagee05/PokeSearch"
            bg={pokemon}
          >
            Gotta Catch em all!
          </ProjectCard>
          <ProjectCard
            title="JavaScript Drum Kit"
            link="https://github.com/matthewmagee05/javascript-drum-kit"
            bg={drum}
          >
            Fun for all ages.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            If at first you don’t succeed; call it version 1.0
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I am a .NET web developer focusing on full stack development with C#.
          I have created web clients with JavaScript, HTML5, CSS3, JQuery,
          ASP.NET MVC 5 and Angular. I have implemented back-end technologies
          including ADO.NET Entity Framework for data access, SQL Server and
          NoSQL databases like MongoDB. In addition, I have worked in diverse
          team environments following Agile/Scrum methodologies.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:contact@matthewmagee.dev">Hi</a> or find me on
            other platforms:{" "}
            <a href="https://www.linkedin.com/in/mmagee05/">LinkedIn</a> &{" "}
            <a href="https://twitter.com/matthewmagee05">Twitter</a>
          </ContactText>
          <Link to="/blog/">
            <Button marginTop="35px">Check Out My Blog</Button>
          </Link>
        </Inner>
        <Footer></Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index

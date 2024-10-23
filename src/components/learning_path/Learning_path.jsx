import React, { useEffect, useState } from "react";
import CardPath from "../sub_components/CardPath";
import SearchBar from "../sub_components/Searchbar";
import VerticleLine from "../sub_components/VerticleLine";
import imgsvg from "../sub_components/ImagesSvgs";
import "./Learning_path.css";
import useSideMenu from "../sub_components/useSideMenu";
import SideMenu from "../sidemenu/Menu";
import zIndex from "@mui/material/styles/zIndex";

function Learning_path() {
  const { isOpen, toggleMenu } = useSideMenu();

  // const transitionLeft = "margin-left 0.5s ease";

  return (
    <>
      <SideMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <SearchBar style={{ position: "absolute" }} />
      <div className="main-container2">
        <div
          className="path-title"
          style={{
            fontSize: "40px",
            fontWeight: "600",
            marginLeft: "2vw",
            marginTop: "10vh",
          }}
        >
          Start Your Learning Today 🎯
        </div>
        {/* <img src={imgsvg.poly} className="poly" style={{position:'absolute', top:'43.5%',left:'35%',transition: 'top 0.5s ease, left 0.5s ease'}} alt="" /> */}

        <div className="Main-CARDS">
          <div
            className="main-card1"
            style={{
              position: "relative",
            }}
          >
            <img
              src={imgsvg.elips}
              style={{ position: "absolute", top: "46%", left: "49%" }}
              alt=""
            />
            <VerticleLine
              style={{
                top: `${isOpen ? "12%" : "12%"}`,
                left: `${isOpen ? "38.5%" : "40.5%"}`,
                rotate: "270deg",
                zIndex: "-1",
              }}
              ScrollPosition={10}
              growStyle={{ height: `${isOpen ? "75%" : "75%"}` }}
            />
            <VerticleLine
              style={{
                top: `${isOpen ? "50%" : "50%"}`,
              }}
              ScrollPosition={20}
              growStyle={{ height: `${isOpen ? "100%" : "100%"}` }}
            />
            <CardPath
              className="card-1"
              number="01"
              title="Introduction"
              description="Overview of what doping is and its impact on athletes and sports."
              style={{ marginLeft: "-11px", scale: "1" }}
            />
          </div>
          <div className="main-card2" style={{ position: "relative" }}>
            <img
              src={imgsvg.elips}
              style={{ position: "absolute", top: "45%", left: "49%" }}
              alt=""
            />
            <VerticleLine
              style={{
                top: `${isOpen ? "12%" : "12%"}`,
                left: `${isOpen ? "61.5%" : "59.5%"}`,
                rotate: "90deg",
                zIndex: "-1",
              }}
              ScrollPosition={20}
              growStyle={{ height: `${isOpen ? "75%" : "75%"}` }}
            />
            <VerticleLine
              style={{
                top: `${isOpen ? "50%" : "50%"}`,
              }}
              ScrollPosition={580}
              growStyle={{ height: `${isOpen ? "100%" : "100%"}` }}
            />

            <CardPath
              className="card-2"
              number="02"
              title="Prohibited Substances"
              description="Detailed explanation of substances banned by the World Anti-Doping Agency (WADA)."
              style={{ marginTop: "-8px", marginRight: "-11px", scale: "-1" }}
              flexReverse={{ flexDirection: "row-reverse" }}
            />
          </div>
          <div className="main-card1" style={{ position: "relative" }}>
            <img
              src={imgsvg.elips}
              style={{ position: "absolute", top: "46%", left: "49%" }}
              alt=""
            />
            <VerticleLine
              style={{
                top: "12%",
                left: `${isOpen ? "38.5%" : "40.5%"}`,
                rotate: "270deg",
                zIndex: "-1",
              }}
              ScrollPosition={580}
              growStyle={{ height: "75%" }}
            />
            <VerticleLine
              style={{ top: "50%" }}
              ScrollPosition={996}
              growStyle={{ height: "100%" }}
            />
            <CardPath
              className="card-3"
              number="03"
              title="Testing Procedures"
              description="How doping control works, including sample collection, testing, and the rights of athletes."
              style={{ marginLeft: "-11px", scale: "1" }}
            />
          </div>
          <div className="main-card2" style={{ position: "relative" }}>
            <img
              src={imgsvg.elips}
              style={{ position: "absolute", top: "45%", left: "49%" }}
              alt=""
            />
            <VerticleLine
              style={{
                top: "12%",
                left: `${isOpen ? "61.5%" : "59.5%"}`,
                rotate: "90deg",
                zIndex: "-1",
              }}
              ScrollPosition={996}
              growStyle={{ height: "75%" }}
            />
            <VerticleLine
              style={{ top: "50%" }}
              ScrollPosition={1350}
              growStyle={{ height: "100%" }}
            />
            <CardPath
              className="card-4"
              number="04"
              title="Consequences of Doping"
              description="Legal, health, and career consequences of doping violations."
              style={{ marginTop: "-8px", marginRight: "-11px", scale: "-1" }}
              flexReverse={{ flexDirection: "row-reverse" }}
            />
          </div>
          <div className="main-card1" style={{ position: "relative" }}>
            <img
              src={imgsvg.elips}
              style={{ position: "absolute", top: "46%", left: "49%" }}
              alt=""
            />
            <VerticleLine
              style={{
                top: "12%",
                left: `${isOpen ? "38.5%" : "40.5%"}`,
                rotate: "270deg",
                zIndex: "-1",
              }}
              ScrollPosition={1350}
              growStyle={{ height: "75%" }}
            />
            <VerticleLine
              style={{ top: "50%" }}
              ScrollPosition={1650}
              growStyle={{ height: "100%" }}
            />
            <CardPath
              className="card-5"
              number="05"
              title="Therapeutic Use Exemptions"
              description="Understanding TUEs and how athletes can apply for permission to use prohibited substances."
              style={{ marginLeft: "-11px", scale: "1" }}
            />
          </div>
          <div className="main-card2" style={{ position: "relative" }}>
            <img
              src={imgsvg.elips}
              style={{ position: "absolute", top: "45%", left: "49%" }}
              alt=""
            />
            <VerticleLine
              style={{
                top: "12%",
                left: `${isOpen ? "61.5%" : "59.5%"}`,
                rotate: "90deg",
                zIndex: "-1",
              }}
              ScrollPosition={1650}
              growStyle={{ height: "75%" }}
            />
            <VerticleLine
              style={{ top: "50%" }}
              ScrollPosition={1950}
              growStyle={{ height: "100%" }}
            />
            <CardPath
              className="card-6"
              number="06"
              title="Athlete’s Rights & Responsibilities"
              description="Overview of an athlete’s responsibilities regarding anti-doping."
              style={{ marginTop: "-8px", marginRight: "-11px", scale: "-1" }}
              flexReverse={{ flexDirection: "row-reverse" }}
            />
          </div>
          <div className="main-card1" style={{ position: "relative" }}>
            <img
              src={imgsvg.elips}
              style={{ position: "absolute", top: "46%", left: "49%" }}
              alt=""
            />
            <VerticleLine
              style={{
                top: "12%",
                left: `${isOpen ? "38.5%" : "40.5%"}`,
                rotate: "270deg",
                zIndex: "-1",
              }}
              ScrollPosition={1950}
              growStyle={{ height: "75%" }}
            />
            <VerticleLine
              style={{ top: "50%" }}
              ScrollPosition={2300}
              growStyle={{ height: "100%" }}
            />
            <CardPath
              className="card-7"
              number="07"
              title="Importance of Nutrition "
              description="Information on proper nutrition for performance. How to choose safe and approved supplements."
              style={{ marginLeft: "-11px", scale: "1" }}
            />
          </div>
          <div className="main-card2" style={{ position: "relative" }}>
            <img
              src={imgsvg.elips}
              style={{ position: "absolute", top: "45%", left: "49%" }}
              alt=""
            />
            <VerticleLine
              style={{
                top: "12%",
                left: `${isOpen ? "61.5%" : "59.5%"}`,
                rotate: "90deg",
                zIndex: "-1",
              }}
              ScrollPosition={2300}
              growStyle={{ height: "75%" }}
            />
            <VerticleLine
              style={{ top: "50%" }}
              ScrollPosition={2500}
              growStyle={{ height: "100%" }}
            />
            <CardPath
              className="card-8"
              number="08"
              title="Real-Life Case Studies"
              description="Interactive modules featuring real-life doping cases."
              style={{ marginTop: "-8px", marginRight: "-11px", scale: "-1" }}
              flexReverse={{ flexDirection: "row-reverse" }}
            />
          </div>
          <div className="main-card1" style={{ position: "relative" }}>
            <img
              src={imgsvg.elips}
              style={{ position: "absolute", top: "46%", left: "49%" }}
              alt=""
            />
            <VerticleLine
              style={{
                top: "12%",
                left: `${isOpen ? "38.5%" : "40.5%"}`,
                rotate: "270deg",
                zIndex: "-1",
              }}
              ScrollPosition={2500}
              growStyle={{ height: "75%" }}
            />
            <VerticleLine
              style={{ top: "50%" }}
              ScrollPosition={2800}
              growStyle={{ height: "100%" }}
            />
            <CardPath
              className="card-9"
              number="09"
              title="Updated Anti-Doping Rules"
              description="How to stay informed about changes in anti-doping rules and regulations."
              style={{ marginLeft: "-11px", scale: "1" }}
            />
          </div>
          <div className="main-card2" style={{ position: "relative" }}>
            <img
              src={imgsvg.elips}
              style={{ position: "absolute", top: "45%", left: "49%" }}
              alt=""
            />
            <VerticleLine
              style={{
                top: "12%",
                left: `${isOpen ? "61.5%" : "59.5%"}`,
                rotate: "90deg",
                zIndex: "-1",
              }}
              ScrollPosition={2800}
              growStyle={{ height: "75%" }}
            />
            <CardPath
              className="card-10"
              number="10"
              title="Ethical Dilemmas "
              description="Scenarios that challenge athletes’ values and integrity. How to make the right decisions."
              style={{ marginTop: "-8px", marginRight: "-11px", scale: "-1" }}
              flexReverse={{ flexDirection: "row-reverse" }}
            />
          </div>
          <button class="start-button">Start Now</button>
        </div>
        
      
      </div>
    </>
  );
}

export default Learning_path;

import React, { useEffect, useState,  Fragment } from "react";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import { HeroContainer,
    TextLeft,
    TextUpperCase,
    TextSeparator,
    Lead,
    CollectionButton,
    BackgroundSection
 } from "./hero.styles";


const Hero = () => {


    return(
        <Fragment>
            <BackgroundSection>
                <HeroContainer>
                    <TextLeft className="text-left">
                        <div></div>
                        <TextUpperCase>
                            <span>
                                <span><CountUp end={70} /> </span>
                                % off
                            </span>
                            <br />
                            <span>Summer collection 2015</span>
                        </TextUpperCase>
                        <TextSeparator className="text-seperator text-seperator-small" />
                        <Lead className="lead">New Arrivals from $19,99</Lead>
                        <CollectionButton variant="danger"> <Link to='/shop'>  View Collections </Link></CollectionButton>
                    </TextLeft>
                </HeroContainer>
            </BackgroundSection>
        </Fragment>
    );

};


export default Hero;